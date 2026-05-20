/*
  keyes 4WD 多功能智能车
  课程 13
  超声波避障机器人
  http://www.keyes-robot.com
*/
#include <Servo.h>

Servo myservo;                      // 舵机对象

// 数组，用于存储点阵图案数据，可自行计算或使用取模工具获得
unsigned char FRONT[] = {0x00, 0x00, 0x00, 0x00, 0x00, 0x24, 0x12, 0x09, 0x12, 0x24, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00};
unsigned char LEFT[] = {0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x44, 0x28, 0x10, 0x44, 0x28, 0x10, 0x44, 0x28, 0x10, 0x00};
unsigned char RIGHT[] = {0x00, 0x10, 0x28, 0x44, 0x10, 0x28, 0x44, 0x10, 0x28, 0x44, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00};
unsigned char STOP01[] = {0x2E, 0x2A, 0x3A, 0x00, 0x02, 0x3E, 0x02, 0x00, 0x3E, 0x22, 0x3E, 0x00, 0x3E, 0x0A, 0x0E, 0x00};
unsigned char CLEAR[] = {0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00};

#define SCL_PIN    A5    // 时钟引脚 A5
#define SDA_PIN    A4    // 数据引脚 A4
#define TRIG_PIN   12    // 超声波触发引脚 D12
#define ECHO_PIN   13    // 超声波回声引脚 D13
#define MA_PIN     2     // 电机M3,M4方向控制引脚 D2
#define PWMA_PIN   6     // 电机M3,M4速度控制引脚 D6
#define MB_PIN     4     // 电机M1,M2方向控制引脚 D4
#define PWMB_PIN   5     // 电机M1,M2速度控制引脚 D5

int distance = 0;
int distanceL = 0;
int distanceR = 0;

/* 功能：初始化设置 */
void setup() {
  Serial.begin(9600);               // 初始化串口，波特率9600
  myservo.attach(10);               // 绑定舵机引脚10
  pinMode(ECHO_PIN, INPUT);         // 设置回声引脚为输入
  pinMode(TRIG_PIN, OUTPUT);        // 设置触发引脚为输出
  pinMode(MA_PIN, OUTPUT);          // 设置电机方向引脚为输出
  pinMode(PWMA_PIN, OUTPUT);        // 设置电机速度引脚为输出
  pinMode(MB_PIN, OUTPUT);          // 设置电机方向引脚为输出
  pinMode(PWMB_PIN, OUTPUT);        // 设置电机速度引脚为输出
  pinMode(SCL_PIN, OUTPUT);         // 设置时钟引脚为输出
  pinMode(SDA_PIN, OUTPUT);         // 设置数据引脚为输出
  matrixDisplay(CLEAR);             // 点阵屏清屏
  myservo.write(90);                // 舵机初始角度90度
  delay(500);
}

/* 功能：主循环 */
void loop() {
  distance = getDistance();         // 获取前方距离

  if (distance > 0 && distance < 20) { // 距离小于20且大于0时避障
    stopCar();                      // 停车
    matrixDisplay(STOP01);          // 显示停止图案
    delay(100);
    myservo.write(180);             // 舵机转到180度检测左侧距离
    delay(500);
    distanceL = getDistance();      // 获取左侧距离
    delay(100);
    myservo.write(0);               // 舵机转到0度检测右侧距离
    delay(500);
    distanceR = getDistance();      // 获取右侧距离
    delay(100);
    if (distanceL > distanceR) {    // 左侧距离大于右侧，左转
      turnLeft();
      matrixDisplay(LEFT);           // 显示左转图案
      delay(1000);
      myservo.write(90);             // 舵机回中
      matrixDisplay(FRONT);          // 显示前进图案
    }
    else {                         // 右侧距离大于左侧，右转
      turnRight();
      matrixDisplay(RIGHT);          // 显示右转图案
      delay(1000);
      myservo.write(90);             // 舵机回中
      matrixDisplay(FRONT);          // 显示前进图案
    }
  }
  else {                           // 距离大于等于20，继续前进
    advance();
    matrixDisplay(FRONT);           // 显示前进图案
  }
}

/* 功能：获取超声波距离（单位：厘米） */
int getDistance() {
  int dist = 0;
  digitalWrite(TRIG_PIN, LOW);     // 触发引脚低电平2微秒
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);    // 触发引脚高电平10微秒
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);     // 触发引脚低电平
  dist = pulseIn(ECHO_PIN, HIGH) / 58; // 计算距离
  Serial.println(dist);             // 输出距离值
  return dist;
}

/* 功能：小车前进 */
void advance() {
  digitalWrite(MA_PIN, HIGH);      // 电机A正转
  analogWrite(PWMA_PIN, 180);      // 电机A速度180
  digitalWrite(MB_PIN, HIGH);      // 电机B正转
  analogWrite(PWMB_PIN, 180);      // 电机B速度180
}

/* 功能：小车后退 */
void back() {
  digitalWrite(MA_PIN, LOW);       // 电机A反转
  analogWrite(PWMA_PIN, 180);      // 电机A速度180
  digitalWrite(MB_PIN, LOW);       // 电机B反转
  analogWrite(PWMB_PIN, 180);      // 电机B速度180
}

/* 功能：小车左转 */
void turnLeft() {
  digitalWrite(MA_PIN, HIGH);      // 电机A正转
  analogWrite(PWMA_PIN, 180);      // 电机A速度180
  digitalWrite(MB_PIN, LOW);       // 电机B反转
  analogWrite(PWMB_PIN, 180);      // 电机B速度180
}

/* 功能：小车右转 */
void turnRight() {
  digitalWrite(MA_PIN, LOW);       // 电机A反转
  analogWrite(PWMA_PIN, 180);      // 电机A速度180
  digitalWrite(MB_PIN, HIGH);      // 电机B正转
  analogWrite(PWMB_PIN, 180);      // 电机B速度180
}

/* 功能：小车停止 */
void stopCar() {
  analogWrite(PWMA_PIN, 0);        // 电机A速度0
  analogWrite(PWMB_PIN, 0);        // 电机B速度0
}

/* 功能：点阵屏显示图案 */
void matrixDisplay(unsigned char matrixValue[]) {
  IICStart();                      // 开始传输
  IICSend(0xc0);                  // 选择点阵地址
  for (int i = 0; i < 16; i++) {  // 发送16字节图案数据
    IICSend(matrixValue[i]);
  }
  IICEnd();                       // 结束传输
  IICStart();
  IICSend(0x8A);                 // 显示控制，脉宽4/16
  IICEnd();
}

/* 功能：IIC开始信号 */
void IICStart() {
  digitalWrite(SCL_PIN, HIGH);
  delayMicroseconds(3);
  digitalWrite(SDA_PIN, HIGH);
  delayMicroseconds(3);
  digitalWrite(SDA_PIN, LOW);
  delayMicroseconds(3);
}

/* 功能：IIC发送一个字节 */
void IICSend(unsigned char sendData) {
  for (char i = 0; i < 8; i++) {  // 发送8位数据
    digitalWrite(SCL_PIN, LOW);   // 时钟拉低，准备改变数据线状态
    delayMicroseconds(3);
    if (sendData & 0x01) {        // 判断最低位
      digitalWrite(SDA_PIN, HIGH);
    }
    else {
      digitalWrite(SDA_PIN, LOW);
    }
    delayMicroseconds(3);
    digitalWrite(SCL_PIN, HIGH);  // 时钟拉高，数据有效
    delayMicroseconds(3);
    sendData = sendData >> 1;     // 右移一位，准备发送下一位
  }
}

/* 功能：IIC结束信号 */
void IICEnd() {
  digitalWrite(SCL_PIN, LOW);
  delayMicroseconds(3);
  digitalWrite(SDA_PIN, LOW);
  delayMicroseconds(3);
  digitalWrite(SCL_PIN, HIGH);
  delayMicroseconds(3);
  digitalWrite(SDA_PIN, HIGH);
  delayMicroseconds(3);
}