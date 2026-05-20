/*
  keyes 4WD 多功能智能车
  课程 17
  蓝牙控制多功能四驱机器人
  http://www.keyes-robot.com
*/
#include <IRremote.h>  // 导入红外库
#include <Servo.h>

#define RECV_PIN A1           // 红外接收引脚
#define SCL_PIN A5            // 时钟引脚
#define SDA_PIN A4            // 数据引脚
#define L_PIN 11              // 左边传感器引脚
#define M_PIN 7               // 中间传感器引脚
#define R_PIN 8               // 右边传感器引脚
#define MA 2                  // 电机M3,M4方向控制引脚
#define PWMA 6                // 电机M3,M4速度控制引脚
#define MB 4                  // 电机M1,M2方向控制引脚
#define PWMB 5                // 电机M1,M2速度控制引脚
#define TRIG_PIN 12           // 超声波TRIG引脚
#define ECHO_PIN 13           // 超声波ECHO引脚

IRrecv irrecv(RECV_PIN);
decode_results results;       // 红外解码结果变量
Servo myservo;                // 舵机对象

unsigned char start01[] = {0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x80, 0x40, 0x20, 0x10, 0x08, 0x04, 0x02, 0x01};
unsigned char front[] = {0x00, 0x00, 0x00, 0x00, 0x00, 0x24, 0x12, 0x09, 0x12, 0x24, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00};
unsigned char back01[] = {0x00, 0x00, 0x00, 0x00, 0x00, 0x24, 0x48, 0x90, 0x48, 0x24, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00};
unsigned char left[] = {0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x44, 0x28, 0x10, 0x44, 0x28, 0x10, 0x44, 0x28, 0x10, 0x00};
unsigned char right[] = {0x00, 0x10, 0x28, 0x44, 0x10, 0x28, 0x44, 0x10, 0x28, 0x44, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00};
unsigned char STOP01[] = {0x2E, 0x2A, 0x3A, 0x00, 0x02, 0x3E, 0x02, 0x00, 0x3E, 0x22, 0x3E, 0x00, 0x3E, 0x0A, 0x0E, 0x00};
unsigned char speed_a[] = {0x00, 0x40, 0x20, 0x10, 0x08, 0x04, 0x02, 0xff, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x00, 0x00};
unsigned char speed_d[] = {0x00, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0xff, 0x40, 0x20, 0x10, 0x08, 0x04, 0x02, 0x00, 0x00};
unsigned char clear[] = {0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00};

int irVal;
char blueVal;

int lVal, mVal, rVal;
int speeds = 150;            // 初始速度

int distance, distanceL, distanceR;

/* 功能：初始化设置 */
void setup() {
  Serial.begin(9600);                   // 设置串口波特率为9600
  myservo.attach(10);                   // 绑定舵机引脚10
  myservo.write(90);                   // 舵机初始角度90度
  delay(500);

  pinMode(L_PIN, INPUT);                // 左传感器输入模式
  pinMode(M_PIN, INPUT);                // 中传感器输入模式
  pinMode(R_PIN, INPUT);                // 右传感器输入模式

  pinMode(SCL_PIN, OUTPUT);             // 点阵时钟引脚输出
  pinMode(SDA_PIN, OUTPUT);             // 点阵数据引脚输出

  pinMode(TRIG_PIN, OUTPUT);            // 超声波触发引脚输出
  pinMode(ECHO_PIN, INPUT);             // 超声波回声引脚输入

  pinMode(MA, OUTPUT);                  // 电机A方向引脚输出
  pinMode(PWMA, OUTPUT);                // 电机A速度引脚输出
  pinMode(MB, OUTPUT);                  // 电机B方向引脚输出
  pinMode(PWMB, OUTPUT);                // 电机B速度引脚输出

  irrecv.enableIRIn();                  // 启用红外接收

  matrixDisplay(clear);                 // 点阵屏清屏
  matrixDisplay(start01);               // 显示启动图案
}

/* 功能：主循环，处理蓝牙和红外信号 */
void loop() {
  if (Serial.available() > 0) {        // 接收到蓝牙信号
    blueVal = Serial.read();            // 读取蓝牙数据
    Serial.println(blueVal);            // 串口打印蓝牙数据
    switch (blueVal) {
      case 'F': advance(); matrixDisplay(front); break;   // 前进
      case 'B': back(); matrixDisplay(back01); break;     // 后退
      case 'L': turnL(); matrixDisplay(left); break;      // 左转
      case 'R': turnR(); matrixDisplay(right); break;     // 右转
      case 'S': stopp(); matrixDisplay(STOP01); break;    // 停止
      case 'a': speedsA(); matrixDisplay(speed_a); break; // 加速
      case 'd': speedsD(); matrixDisplay(speed_d); break; // 减速
      case 'U': follow(); break;                            // 跟随模式
      case 'Y': avoid(); break;                             // 避障模式
      case 'G': prison(); break;                            // 画地为牢模式
      case 'X': track(); break;                             // 巡线模式
    }
  }

  if (irrecv.decode(&results)) {       // 接收到红外信号
    irVal = results.value;
    Serial.println(irVal, HEX);        // 串口打印红外数据
    switch (irVal) {
      case 0xFF629D: advance(); matrixDisplay(front); break;  // 前进
      case 0xFFA857: back(); matrixDisplay(back01); break;    // 后退
      case 0xFF22DD: turnL(); matrixDisplay(left); break;     // 左转
      case 0xFFC23D: turnR(); matrixDisplay(right); break;    // 右转
      case 0xFF02FD: stopp(); matrixDisplay(STOP01); break;   // 停止
    }
    irrecv.resume();                  // 接收下一个数据
  }
}

/* 功能：小车前进 */
void advance() {
  digitalWrite(MA, HIGH);             // 电机A正转
  analogWrite(PWMA, speeds);          // 电机A速度
  digitalWrite(MB, HIGH);             // 电机B正转
  analogWrite(PWMB, speeds);          // 电机B速度
}

/* 功能：小车后退 */
void back() {
  digitalWrite(MA, LOW);              // 电机A反转
  analogWrite(PWMA, speeds);          // 电机A速度
  digitalWrite(MB, LOW);              // 电机B反转
  analogWrite(PWMB, speeds);          // 电机B速度
}

/* 功能：小车左旋转 */
void turnL() {
  digitalWrite(MA, HIGH);             // 电机A正转
  analogWrite(PWMA, speeds);          // 电机A速度
  digitalWrite(MB, LOW);              // 电机B反转
  analogWrite(PWMB, speeds);          // 电机B速度
}

/* 功能：小车右旋转 */
void turnR() {
  digitalWrite(MA, LOW);              // 电机A反转
  analogWrite(PWMA, speeds);          // 电机A速度
  digitalWrite(MB, HIGH);             // 电机B正转
  analogWrite(PWMB, speeds);          // 电机B速度
}

/* 功能：小车停止 */
void stopp() {
  analogWrite(PWMA, 0);               // 电机A速度为0
  analogWrite(PWMB, 0);               // 电机B速度为0
}

/* 功能：加速函数 */
void speedsA() {
  while (true) {
    Serial.println(speeds);           // 显示当前速度
    if (speeds < 255) {               // 最大速度255
      speeds++;
      delay(10);                      // 调节加速速度
    }
    if (Serial.available() > 0) {
      blueVal = Serial.read();
      if (blueVal == 'S') break;      // 接收到‘S’停止加速
    }
  }
}

/* 功能：减速函数 */
void speedsD() {
  while (true) {
    Serial.println(speeds);           // 显示当前速度
    if (speeds > 0) {                 // 最小速度0
      speeds--;
      delay(10);                      // 调节减速速度
    }
    if (Serial.available() > 0) {
      blueVal = Serial.read();
      if (blueVal == 'S') break;      // 接收到‘S’停止减速
    }
  }
}

/* 功能：获取超声波距离，单位厘米 */
int getDistance() {
  digitalWrite(TRIG_PIN, LOW);        // 触发引脚低电平2微秒
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);       // 触发引脚高电平10微秒
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);        // 触发引脚低电平

  int distanceCm = pulseIn(ECHO_PIN, HIGH) / 58;  // 计算距离
  Serial.println(distanceCm);          // 输出距离
  return distanceCm;
}

/* 功能：跟随模式 */
void follow() {
  int followFlag = 1;
  while (followFlag) {
    distance = getDistance();          // 获取距离
    if (distance < 8) {                // 距离小于8cm后退
      back();
    }
    else if (distance >= 8 && distance < 13) { // 距离8~13cm停止
      stopp();
    }
    else if (distance >= 13 && distance <= 35) { // 距离13~35cm前进
      advance();
    }
    else {                            // 其他情况停止
      stopp();
    }
    if (Serial.available() > 0) {
      blueVal = Serial.read();
      if (blueVal == 'S') {           // 接收到‘S’退出跟随模式
        followFlag = 0;
        stopp();
      }
    }
  }
}

/* 功能：避障模式 */
void avoid() {
  int avoidFlag = 1;
  while (avoidFlag) {
    distance = getDistance();          // 获取前方距离

    if (distance > 0 && distance < 20) { // 距离小于20cm停止避障
      stopp();
      matrixDisplay(STOP01);           // 显示停止图案
      delay(100);

      myservo.write(180);              // 舵机转到180度
      delay(500);
      distanceL = getDistance();       // 获取左侧距离
      delay(100);

      myservo.write(0);                // 舵机转到0度
      delay(500);
      distanceR = getDistance();       // 获取右侧距离
      delay(100);

      if (distanceL > distanceR) {     // 左侧距离大于右侧，左转
        turnL();
        matrixDisplay(left);            // 显示左转图案
        delay(1000);
        myservo.write(90);             // 舵机回中
        matrixDisplay(front);          // 显示前进图案
      }
      else {                          // 右侧距离大于左侧，右转
        turnR();
        matrixDisplay(right);           // 显示右转图案
        delay(1000);
        myservo.write(90);             // 舵机回中
        matrixDisplay(front);          // 显示前进图案
      }
    }
    else {                            // 距离大于等于20cm前进
      advance();
      matrixDisplay(front);            // 显示前进图案
    }

    if (Serial.available() > 0) {
      blueVal = Serial.read();
      if (blueVal == 'S') {           // 接收到‘S’退出避障模式
        avoidFlag = 0;
        stopp();
      }
    }
  }
}

/* 功能：画地为牢模式 */
void prison() {
  int prisonFlag = 1;
  while (prisonFlag) {
    lVal = digitalRead(L_PIN);        // 读取左传感器
    mVal = digitalRead(M_PIN);        // 读取中传感器
    rVal = digitalRead(R_PIN);        // 读取右传感器

    if (lVal == 0 && mVal == 0 && rVal == 0) { // 无黑线前进
      advance();
    }
    else {                            // 检测到黑线后退并左转
      back();
      delay(500);
      turnL();
      delay(800);
    }

    if (Serial.available() > 0) {
      blueVal = Serial.read();
      if (blueVal == 'S') {           // 接收到‘S’退出模式
        prisonFlag = 0;
        stopp();
      }
    }
  }
}

/* 功能：巡线模式 */
void track() {
  int trackFlag = 1;
  while (trackFlag) {
    lVal = digitalRead(L_PIN);        // 读取左传感器
    mVal = digitalRead(M_PIN);        // 读取中传感器
    rVal = digitalRead(R_PIN);        // 读取右传感器

    if (mVal == 1) {                  // 中间检测到黑线
      if (lVal == 1 && rVal == 0) {  // 左边有黑线右边无，左转
        turnL();
      }
      else if (lVal == 0 && rVal == 1) { // 右边有黑线左边无，右转
        turnR();
      }
      else {                          // 其他情况前进
        advance();
      }
    }
    else {                            // 中间无黑线
      if (lVal == 1 && rVal == 0) {  // 左边有黑线右边无，左转
        turnL();
      }
      else if (lVal == 0 && rVal == 1) { // 右边有黑线左边无，右转
        turnR();
      }
      else {                          // 其他情况停止
        stopp();
      }
    }

    if (Serial.available() > 0) {
      blueVal = Serial.read();
      if (blueVal == 'S') {           // 接收到‘S’退出巡线模式
        trackFlag = 0;
        stopp();
      }
    }
  }
}

/* 功能：点阵屏显示函数 */
void matrixDisplay(unsigned char matrixValue[]) {
  IICStart();                        // 开始条件
  IICSend(0xc0);                    // 选择地址
  for (int i = 0; i < 16; i++) {    // 发送16字节图案数据
    IICSend(matrixValue[i]);
  }
  IICEnd();                         // 结束传输

  IICStart();
  IICSend(0x8A);                   // 显示控制，脉宽4/16
  IICEnd();
}

/* 功能：IIC开始条件 */
void IICStart() {
  digitalWrite(SCL_PIN, HIGH);
  delayMicroseconds(3);
  digitalWrite(SDA_PIN, HIGH);
  delayMicroseconds(3);
  digitalWrite(SDA_PIN, LOW);
  delayMicroseconds(3);
}

/* 功能：IIC发送数据 */
void IICSend(unsigned char sendData) {
  for (char i = 0; i < 8; i++) {    // 发送8位数据
    digitalWrite(SCL_PIN, LOW);     // 时钟拉低，准备改变数据线
    delayMicroseconds(3);
    if (sendData & 0x01) {          // 判断最低位
      digitalWrite(SDA_PIN, HIGH);
    }
    else {
      digitalWrite(SDA