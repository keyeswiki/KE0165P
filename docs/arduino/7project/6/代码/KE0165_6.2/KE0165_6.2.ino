/*
  keyes 4WD 多功能智能车
  课程 6.2
  红外遥控
  http://www.keyes-robot.com
*/
#include <IRremote.h>

#define RECV_PIN A1    // 红外接收器引脚
#define LED_PIN 9      // 发光LED引脚

int ledState = 0;     // LED 状态变量，0 关闭，1 打开

IRrecv irrecv(RECV_PIN);
decode_results results;

/* 功能：初始化串口、红外接收器和LED引脚 */
void setup() {
  Serial.begin(9600);
  irrecv.enableIRIn();           // 初始化红外接收器
  pinMode(LED_PIN, OUTPUT);      // 设置LED引脚为输出模式
}

/* 功能：检测红外信号，控制LED开关 */
void loop() {
  if (irrecv.decode(&results)) {
    Serial.println(results.value, HEX);  // 输出接收到的红外码（十六进制）
    if (results.value == 0xFF02FD && ledState == 0) {  // 按下OK键且LED关闭
      digitalWrite(LED_PIN, HIGH);       // 点亮LED
      ledState = 1;                      // 更新状态为打开
    } else if (results.value == 0xFF02FD && ledState == 1) {  // 再次按下OK键且LED打开
      digitalWrite(LED_PIN, LOW);        // 熄灭LED
      ledState = 0;                      // 更新状态为关闭
    }
    irrecv.resume();                     // 准备接收下一个信号
  }
}