/*
  keyes 4WD 多功能智能车
  课程 03.1
  PWM 控制
  http://www.keyes-robot.com
*/
const int ledPin = 9;  // 定义LED引脚D9

void setup() {
  pinMode(ledPin, OUTPUT); //设置LED引脚为输出模式。
}

void loop() {
  for (int i = 0; i <= 255; i++) { //使LED逐渐亮
    analogWrite(ledPin, i); //输出PWM
    delay(5);  // 延时 5 毫秒 
  }
  for (int i = 255; i >= 0; i--) {  //使LED逐渐熄灭
    analogWrite(ledPin, i); //输出PWM
    delay(5);
  }
}