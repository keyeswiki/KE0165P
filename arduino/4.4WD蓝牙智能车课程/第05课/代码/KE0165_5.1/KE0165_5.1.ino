/*
  keyes 4WD 多功能智能车
  课程 5.1
  超声波传感器
  http://www.keyes-robot.com
*/

#define TRIG_PIN 12  // 触发引脚
#define ECHO_PIN 13  // 回声引脚

long duration, cm, inches;

/* 功能：初始化串口和引脚模式 */
void setup() {
  Serial.begin(9600);  // 初始化串口，波特率 9600
  pinMode(TRIG_PIN, OUTPUT);  // 设置触发引脚为输出
  pinMode(ECHO_PIN, INPUT);   // 设置回声引脚为输入
}

/* 功能：主循环，测量距离并输出 */
void loop() {
  digitalWrite(TRIG_PIN, LOW);  // 发送低电平脉冲，确保干净的高电平脉冲
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);  // 发送高电平脉冲，触发超声波
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);  // 结束触发脉冲

  duration = pulseIn(ECHO_PIN, HIGH);  // 读取回声脉冲持续时间（微秒）

  cm = (duration / 2) / 29.1;  // 计算距离（厘米）
  inches = (duration / 2) / 74;  // 计算距离（英寸）

  Serial.print(inches);
  Serial.print("in, ");
  Serial.print(cm);
  Serial.print("cm");
  Serial.println();

  delay(200);  // 延时 200 毫秒
}