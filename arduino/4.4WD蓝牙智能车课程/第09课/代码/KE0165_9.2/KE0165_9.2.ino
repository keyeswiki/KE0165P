/*
  keyes 4WD 多功能智能车
  课程 9.2
  点阵屏显示
  http://www.keyes-robot.com
*/

// 数组，用于存储图案的数据，可以自己计算也可以从取模工具中获得
unsigned char START_01[] = {0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x80, 0x40, 0x20, 0x10, 0x08, 0x04, 0x02, 0x01};
unsigned char FRONT[] = {0x00, 0x00, 0x00, 0x00, 0x00, 0x24, 0x12, 0x09, 0x12, 0x24, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00};
unsigned char BACK[] = {0x00, 0x00, 0x00, 0x00, 0x00, 0x24, 0x48, 0x90, 0x48, 0x24, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00};
unsigned char LEFT[] = {0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x44, 0x28, 0x10, 0x44, 0x28, 0x10, 0x44, 0x28, 0x10, 0x00};
unsigned char RIGHT[] = {0x00, 0x10, 0x28, 0x44, 0x10, 0x28, 0x44, 0x10, 0x28, 0x44, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00};
unsigned char STOP_01[] = {0x2E, 0x2A, 0x3A, 0x00, 0x02, 0x3E, 0x02, 0x00, 0x3E, 0x22, 0x3E, 0x00, 0x3E, 0x0A, 0x0E, 0x00};
unsigned char CLEAR[] = {0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00};

#define SCL_PIN  A5  // 时钟引脚 A5
#define SDA_PIN  A4  // 数据引脚 A4

void setup() {
  pinMode(SCL_PIN, OUTPUT);  // 设置时钟引脚为输出模式
  pinMode(SDA_PIN, OUTPUT);  // 设置数据引脚为输出模式
  matrixDisplay(CLEAR);      // 清屏显示
}

void loop() {
  matrixDisplay(START_01);  // 显示开始图案
  delay(2000);
  matrixDisplay(FRONT);     // 显示前进图案
  delay(2000);
  matrixDisplay(STOP_01);   // 显示停止图案
  delay(2000);
  matrixDisplay(CLEAR);     // 清屏
  delay(2000);
}

/* 功能：点阵屏显示函数，传入图案数组 */
void matrixDisplay(unsigned char matrixValue[]) {
  IICStart();               // 发送开始信号
  IICSend(0xc0);            // 选择点阵屏地址
  for (int i = 0; i < 16; i++) {  // 发送16字节图案数据
    IICSend(matrixValue[i]);       // 发送图案数据
  }
  IICEnd();                 // 发送结束信号
  IICStart();
  IICSend(0x8A);            // 显示控制，设置脉宽为4/16
  IICEnd();
}

/* 功能：IIC总线开始信号 */
void iicStart() {
  digitalWrite(SCL_PIN, HIGH);
  delayMicroseconds(3);
  digitalWrite(SDA_PIN, HIGH);
  delayMicroseconds(3);
  digitalWrite(SDA_PIN, LOW);
  delayMicroseconds(3);
}

/* 功能：IIC总线发送一个字节数据 */
void iicSend(unsigned char sendData) {
  for (char i = 0; i < 8; i++) {  // 逐位发送8位数据
    digitalWrite(SCL_PIN, LOW);    // 时钟拉低，准备改变数据线状态
    delayMicroseconds(3);
    if (sendData & 0x01) {         // 判断最低位是1还是0
      digitalWrite(SDA_PIN, HIGH);
    } else {
      digitalWrite(SDA_PIN, LOW);
    }
    delayMicroseconds(3);
    digitalWrite(SCL_PIN, HIGH);   // 时钟拉高，数据被读取
    delayMicroseconds(3);
    sendData = sendData >> 1;      // 右移一位，准备发送下一位
  }
}

/* 功能：IIC总线结束信号 */
void iicEnd() {
  digitalWrite(SCL_PIN, LOW);
  delayMicroseconds(3);
  digitalWrite(SDA_PIN, LOW);
  delayMicroseconds(3);
  digitalWrite(SCL_PIN, HIGH);
  delayMicroseconds(3);
  digitalWrite(SDA_PIN, HIGH);
  delayMicroseconds(3);
}