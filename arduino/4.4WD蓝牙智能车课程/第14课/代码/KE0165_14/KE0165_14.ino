/*
  keyes 4WD 多功能智能车
  课程 14
  遥控机器人
  http://www.keyes-robot.com
*/
#include <IRremote.h>

#define RECV_PIN  A1    // 红外接收引脚 A1
#define SCL_PIN   A5    // 时钟引脚 A5
#define SDA_PIN   A4    // 数据引脚 A4
#define MA        2     // 电机M3,M4方向控制引脚 D2
#define PWMA      6     // 电机M3,M4速度控制引脚 D6
#define MB        4     // 电机M1,M2方向控制引脚 D4
#define PWMB      5     // 电机M1,M2速度控制引脚 D5

IRrecv irrecv(RECV_PIN);
decode_results results;  // 声明红外接收结果变量
int irVal;

// 图案数据数组，可自行计算或使用取模工具获得
unsigned char start01[] = {0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x80, 0x40, 0x20, 0x10, 0x08, 0x04, 0x02, 0x01};
unsigned char front[] = {0x00, 0x00, 0x00, 0x00, 0x00, 0x24, 0x12, 0x09, 0x12, 0x24, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00};
unsigned char back01[] = {0x00, 0x00, 0x00, 0x00, 0x00, 0x24, 0x48, 0x90, 0x48, 0x24, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00};
unsigned char left[] = {0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x44, 0x28, 0x10, 0x44, 0x28, 0x10, 0x44, 0x28, 0x10, 0x00};
unsigned char right[] = {0x00, 0x10, 0x28, 0x44, 0x10, 0x28, 0x44, 0x10, 0x28, 0x44, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00};
unsigned char stop01[] = {0x2E, 0x2A, 0x3A, 0x00, 0x02, 0x3E, 0x02, 0x00, 0x3E, 0x22, 0x3E, 0x00, 0x3E, 0x0A, 0x0E, 0x00};
unsigned char clear[] = {0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00};

/* 功能：小车前进 */
void advance() {
  digitalWrite(MA, HIGH);       // 电机A正转
  analogWrite(PWMA, 200);       // 电机A速度为200
  digitalWrite(MB, HIGH);       // 电机B正转
  analogWrite(PWMB, 200);       // 电机B速度为200
}

/* 功能：小车后退 */
void back() {
  digitalWrite(MA, LOW);        // 电机A反转
  analogWrite(PWMA, 200);       // 电机A速度为200
  digitalWrite(MB, LOW);        // 电机B反转
  analogWrite(PWMB, 200);       // 电机B速度为200
}

/* 功能：小车左转 */
void turnLeft() {
  digitalWrite(MA, HIGH);       // 电机A正转
  analogWrite(PWMA, 200);       // 电机A速度为200
  digitalWrite(MB, LOW);        // 电机B反转
  analogWrite(PWMB, 200);       // 电机B速度为200
}

/* 功能：小车右转 */
void turnRight() {
  digitalWrite(MA, LOW);        // 电机A反转
  analogWrite(PWMA, 200);       // 电机A速度为200
  digitalWrite(MB, HIGH);       // 电机B正转
  analogWrite(PWMB, 200);       // 电机B速度为200
}

/* 功能：小车停止 */
void stopCar() {
  analogWrite(PWMA, 0);         // 电机A速度为0
  analogWrite(PWMB, 0);         // 电机B速度为0
}

/* 功能：初始化设置 */
void setup() {
  Serial.begin(9600);           // 设置串口波特率为9600
  pinMode(MA, OUTPUT);          // 配置电机方向引脚为输出
  pinMode(PWMA, OUTPUT);        // 配置电机速度引脚为输出
  pinMode(MB, OUTPUT);
  pinMode(PWMB, OUTPUT);
  pinMode(SCL_PIN, OUTPUT);     // 配置I2C时钟引脚为输出
  pinMode(SDA_PIN, OUTPUT);     // 配置I2C数据引脚为输出
  irrecv.enableIRIn();          // 启用红外接收
  matrixDisplay(clear);         // 点阵屏清屏
  matrixDisplay(start01);       // 显示启动图案
}

/* 功能：主循环，处理红外遥控信号 */
void loop() {
  if (irrecv.decode(&results)) {    // 判断是否接收到红外信号
    irVal = results.value;
    Serial.println(irVal, HEX);     // 串口打印接收到的红外码（十六进制）
    switch (irVal) {
      case 0xFF629D:
        advance();
        matrixDisplay(front);
        break;
      case 0xFFA857:
        back();
        matrixDisplay(back01);
        break;
      case 0xFF22DD:
        turnLeft();
        matrixDisplay(left);
        break;
      case 0xFFC23D:
        turnRight();
        matrixDisplay(right);
        break;
      case 0xFF02FD:
        stopCar();
        matrixDisplay(stop01);
        break;
    }
    irrecv.resume();               // 准备接收下一个红外信号
  }
}

/* 功能：点阵屏显示图案 */
void matrixDisplay(unsigned char matrixValue[]) {
  IICStart();                     // 发送开始条件
  IICSend(0xC0);                 // 选择点阵屏地址
  for (int i = 0; i < 16; i++) { // 发送16字节图案数据
    IICSend(matrixValue[i]);
  }
  IICEnd();                      // 发送结束条件
  IICStart();
  IICSend(0x8A);                 // 显示控制，脉宽4/16
  IICEnd();
}

/* 功能：I2C开始信号 */
void IICStart() {
  digitalWrite(SCL_PIN, HIGH);
  delayMicroseconds(3);
  digitalWrite(SDA_PIN, HIGH);
  delayMicroseconds(3);
  digitalWrite(SDA_PIN, LOW);
  delayMicroseconds(3);
}

/* 功能：I2C发送一个字节数据 */
void IICSend(unsigned char sendData) {
  for (char i = 0; i < 8; i++) {   // 逐位发送8位数据
    digitalWrite(SCL_PIN, LOW);    // 拉低时钟，准备改变数据线状态
    delayMicroseconds(3);
    if (sendData & 0x01) {         // 判断最低位是1还是0
      digitalWrite(SDA_PIN, HIGH);
    } else {
      digitalWrite(SDA_PIN, LOW);
    }
    delayMicroseconds(3);
    digitalWrite(SCL_PIN, HIGH);   // 拉高时钟，完成数据传输
    delayMicroseconds(3);
    sendData = sendData >> 1;      // 右移一位，准备发送下一位
  }
}

/* 功能：I2C结束信号 */
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