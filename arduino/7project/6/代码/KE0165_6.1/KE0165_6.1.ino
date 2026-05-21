/*
  keyes 4WD 多功能智能车
  课程 6.1
  红外遥控
  http://www.keyes-robot.com
*/
#include <IRremote.h>  // 红外遥控库声明

const int RECV_PIN = A1;  // 红外接收器引脚

IRrecv irrecv(RECV_PIN);
decode_results results;

/* 功能：初始化串口和红外接收器 */
void setup() {
  Serial.begin(9600);
  irrecv.enableIRIn();  // 启动红外接收器
}

/* 功能：循环检测红外信号并输出 */
void loop() {
  if (irrecv.decode(&results)) {  // 解码成功，收到红外信号
    Serial.println(results.value, HEX);  // 以16进制格式输出接收代码
    irrecv.resume();  // 准备接收下一个信号
  }
  delay(100);  // 延时100毫秒
}