/*
  keyes 4WD 多功能智能车
  课程 9.1
  点阵显示
  http://www.keyes-robot.com
*/
// 从取摸工具中得到的微笑图案的数据
unsigned char SMILE[] = {0x00, 0x00, 0x1c, 0x02, 0x02, 0x02, 0x5c, 0x40, 0x40, 0x5c, 0x02, 0x02, 0x02, 0x1c, 0x00, 0x00};
#define SCL_PIN  A5  // 时钟引脚 A5
#define SDA_PIN  A4  // 数据引脚 A4

/* 功能：初始化设置 */
void setup() {
  pinMode(SCL_PIN, OUTPUT);  // 设置时钟引脚为输出
  pinMode(SDA_PIN, OUTPUT);  // 设置数据引脚为输出
  // 清屏
  // matrixDisplay(clear);
}

/* 功能：主循环 */
void loop() {
  matrixDisplay(SMILE);  // 显示微笑表情图案
}

/* 功能：点阵屏显示函数 */
void matrixDisplay(unsigned char matrixValue[]) {
  IicStart();  // 启动数据传输
  IicSend(0xc0);  // 选择地址

  for (int i = 0; i < 16; i++) {  // 图案数据共16字节
    IicSend(matrixValue[i]);  // 传输图案数据
  }
  IicEnd();  // 结束数据传输

  IicStart();
  IicSend(0x8A);  // 显示控制，选择脉宽为4/16
  IicEnd();
}

/* 功能：IIC 起始信号 */
void IicStart() {
  digitalWrite(SCL_PIN, HIGH);
  delayMicroseconds(3);
  digitalWrite(SDA_PIN, HIGH);
  delayMicroseconds(3);
  digitalWrite(SDA_PIN, LOW);
  delayMicroseconds(3);
}

/* 功能：IIC 发送一个字节数据 */
void IicSend(unsigned char sendData) {
  for (char i = 0; i < 8; i++) {  // 每字节8位
    digitalWrite(SCL_PIN, LOW);  // 时钟拉低，准备改变数据线状态
    delayMicroseconds(3);
    if (sendData & 0x01) {  // 判断最低位是1还是0
      digitalWrite(SDA_PIN, HIGH);
    } else {
      digitalWrite(SDA_PIN, LOW);
    }
    delayMicroseconds(3);
    digitalWrite(SCL_PIN, HIGH);  // 时钟拉高，数据传输完成
    delayMicroseconds(3);
    sendData = sendData >> 1;  // 右移一位，准备传输下一位
  }
}

/* 功能：IIC 结束信号 */
void IicEnd() {
  digitalWrite(SCL_PIN, LOW);
  delayMicroseconds(3);
  digitalWrite(SDA_PIN, LOW);
  delayMicroseconds(3);
  digitalWrite(SCL_PIN, HIGH);
  delayMicroseconds(3);
  digitalWrite(SDA_PIN, HIGH);
  delayMicroseconds(3);
}