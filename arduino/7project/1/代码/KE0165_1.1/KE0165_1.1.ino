/*
  keyes 4WD 多功能智能车
  课程 1.1
  闪烁 LED
  http://www.keyes-robot.com
*/

#define LED_PIN 9  // LED 灯引脚

/* 功能：初始化设置 */
void setup() {
  pinMode(LED_PIN, OUTPUT);  // 初始化数字引脚 9 为输出模式
}

/* 功能：主循环，控制 LED 闪烁 */
void loop() {
  digitalWrite(LED_PIN, HIGH);  // 点亮 LED
  delay(1000);                  // 延时 1 秒
  digitalWrite(LED_PIN, LOW);   // 熄灭 LED
  delay(1000);                  // 延时 1 秒
}