/*
  keyes 4WD 多功能智能车
  课程 7.1
  蓝牙通信
  http://www.keyes-robot.com
*/

char BLE_VAL; // 蓝牙接收到的字符变量

/* 功能：初始化串口通信 */
void setup() {
  Serial.begin(9600); // 初始化串口，波特率 9600
}

/* 功能：读取串口数据并打印 */
void loop() {
  if (Serial.available() > 0) { // 判断串口缓存区是否有数据
    BLE_VAL = Serial.read(); // 读取串口缓存区的数据
    Serial.println(BLE_VAL); // 打印接收到的字符
  }
}