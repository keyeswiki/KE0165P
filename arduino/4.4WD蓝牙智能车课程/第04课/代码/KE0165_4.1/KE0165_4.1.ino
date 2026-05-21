/*
  keyes 4WD 多功能智能车
  课程 4.1
  舵机控制
  http://www.keyes-robot.com
*/
#define SERVO_PIN 10  // 舵机引脚

int pos;           // 舵机角度变量
int pulseWidth;    // 舵机脉宽变量

/* 功能：初始化设置 */
void setup() {
  pinMode(SERVO_PIN, OUTPUT);  // 设置舵机引脚为输出
  setServoAngle(0);            // 设置舵机角度为0度
}

/* 功能：主循环，舵机从0度转到180度再转回0度 */
void loop() {
  for (pos = 0; pos <= 180; pos += 1) {  // 从0度转到180度，步进1度
    setServoAngle(pos);                   // 设置舵机角度
    delay(15);                           // 控制舵机转动速度
  }
  for (pos = 180; pos >= 0; pos -= 1) {  // 从180度转回0度，步进1度
    setServoAngle(pos);                   // 设置舵机角度
    delay(15);                           // 控制舵机转动速度
  }
}

/* 功能：根据角度设置舵机脉宽信号 */
void setServoAngle(int angle) {
  pulseWidth = angle * 11 + 500;          // 计算脉宽值，单位微秒
  digitalWrite(SERVO_PIN, HIGH);          // 发送高电平
  delayMicroseconds(pulseWidth);          // 高电平持续时间即脉宽
  digitalWrite(SERVO_PIN, LOW);           // 发送低电平
  delay(20 - pulseWidth / 1000);          // 低电平持续时间，周期20ms
}