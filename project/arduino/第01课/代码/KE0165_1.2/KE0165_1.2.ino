/*
  keyes 4WD 多功能智能车
  课程 1.2
  闪烁灯
  http://www.keyes-robot.com
*/

#define LED_PIN 9  // LED 灯引脚

/* 功能：初始化设置 */
void setup() {
  pinMode(LED_PIN, OUTPUT);  // 设置 LED 引脚为输出模式
}

/* 功能：主循环，控制 LED 灯闪烁 */
void loop() {
  digitalWrite(LED_PIN, HIGH);  // 点亮 LED 灯
  delay(100);                   // 延时 0.1 秒
  digitalWrite(LED_PIN, LOW);   // 熄灭 LED 灯
  delay(100);                   // 延时 0.1 秒
}