/*
  keyes 4WD 多功能智能车
  课程 2.1
  PWM 控制
  http://www.keyes-robot.com
*/
#define LED_PIN 9  // LED 灯引脚

int value;

void setup() {
  pinMode(LED_PIN, OUTPUT);  // 初始化 LED 引脚为输出模式
}

/* 功能：LED 灯光渐亮渐暗循环 */
void loop() {
  for (value = 0; value < 255; value = value + 1) {
    analogWrite(LED_PIN, value);  // LED 灯逐渐变亮
    delay(5);  // 延时 5 毫秒
  }
  for (value = 255; value > 0; value = value - 1) {
    analogWrite(LED_PIN, value);  // LED 灯逐渐变暗
    delay(5);  // 延时 5 毫秒
  }
}