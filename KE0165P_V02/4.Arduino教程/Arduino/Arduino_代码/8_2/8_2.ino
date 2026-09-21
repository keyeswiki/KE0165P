/*
  keyes 4WD 多功能智能车
  课程 08.2
  蓝牙控制
  http://www.keyes-robot.com
*/
char BLE_VAL; // 蓝牙接收到的字符变量
#define LED_PIN 9  // LED 灯引脚

/* 功能：初始化串口和 LED 引脚 */
void setup() {
  Serial.begin(9600);
  pinMode(LED_PIN, OUTPUT);
}

/* 功能：读取串口数据，根据指令控制 LED 灯 */
void loop() {
  if (Serial.available() > 0) {
    BLE_VAL = Serial.read();
    Serial.print("数据已接收：");  // 输出接收提示
    Serial.println(BLE_VAL);
    if (BLE_VAL == 'B') {
      digitalWrite(LED_PIN, HIGH);  // 点亮 LED
      Serial.println("LED 已开启");
    }
    if (BLE_VAL == 'S') {
      digitalWrite(LED_PIN, LOW);  // 熄灭 LED
      Serial.println("LED 已关闭");
    }
  }
}