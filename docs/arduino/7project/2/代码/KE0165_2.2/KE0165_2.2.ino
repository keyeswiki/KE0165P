/*
  keyes 4WD 多功能智能车
  课程 2.2
  PWM 控制
  http://www.keyes-robot.com
*/
#define LED_PIN 9  // LED 灯引脚

/* 功能：初始化设置 */
void setup() {
  pinMode(LED_PIN, OUTPUT);  // 初始化 LED 引脚为输出模式
}

/* 功能：主循环，LED 灯渐亮渐暗 */
void loop() {
  for (int value = 0; value < 255; value = value + 1) {
    analogWrite(LED_PIN, value);  // LED 灯逐渐变亮
    delay(30);  // 延时 30 毫秒
  }
  for (int value = 255; value > 0; value = value - 1) {
    analogWrite(LED_PIN, value);  // LED 灯逐渐变暗
    delay(30);  // 延时 30 毫秒
  }
}