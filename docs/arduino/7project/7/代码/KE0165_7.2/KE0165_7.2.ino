/*
  keyes 4WD 多功能智能车
  课程 7.2
  蓝牙控制
  http://www.keyes-robot.com
*/

#define LED_PIN 9  // LED 灯引脚

/* 功能：初始化串口和 LED 引脚 */
void setup() {
  Serial.begin(9600);
  pinMode(LED_PIN, OUTPUT);
}

/* 功能：读取串口数据，根据指令控制 LED 灯 */
void loop() {
  int receivedData;
  if (Serial.available()) {
    receivedData = Serial.read();
    Serial.println("数据已接收：");  // 输出接收提示
    if (receivedData == 'B') {
      digitalWrite(LED_PIN, HIGH);  // 点亮 LED
      Serial.println("LED 已开启");
    }
    if (receivedData == 'S') {
      digitalWrite(LED_PIN, LOW);  // 熄灭 LED
      Serial.println("LED 已关闭");
    }
  }
}