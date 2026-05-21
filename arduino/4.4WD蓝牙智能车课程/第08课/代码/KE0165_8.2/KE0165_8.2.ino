/*
  keyes 4WD 多功能智能车
  课程 8.2
  电机驱动扩展板
  http://www.keyes-robot.com
*/

#define MA 2       // 电机M3,M4方向控制引脚 D2
#define PWMA 6     // 电机M3,M4速度控制引脚 D6
#define MB 4       // 电机M1,M2方向控制引脚 D4
#define PWMB 5     // 电机M1,M2速度控制引脚 D5

/* 功能：初始化电机控制引脚 */
void setup() {
  pinMode(MA, OUTPUT);     // 配置电机M3,M4方向引脚为输出
  pinMode(PWMA, OUTPUT);   // 配置电机M3,M4速度引脚为输出
  pinMode(MB, OUTPUT);     // 配置电机M1,M2方向引脚为输出
  pinMode(PWMB, OUTPUT);   // 配置电机M1,M2速度引脚为输出
}

/* 功能：主循环，控制电机前进、后退、左转、右转和停止 */
void loop() {
  // 前进1秒
  digitalWrite(MA, HIGH);    // 电机M3,M4正转
  analogWrite(PWMA, 100);    // 电机M3,M4速度设为100
  digitalWrite(MB, HIGH);    // 电机M1,M2正转
  analogWrite(PWMB, 100);    // 电机M1,M2速度设为100
  delay(1000);               // 延时1秒

  // 后退1秒
  digitalWrite(MA, LOW);     // 电机M3,M4反转
  analogWrite(PWMA, 100);    // 电机M3,M4速度设为100
  digitalWrite(MB, LOW);     // 电机M1,M2反转
  analogWrite(PWMB, 100);    // 电机M1,M2速度设为100
  delay(1000);               // 延时1秒

  // 左转1秒
  digitalWrite(MA, HIGH);    // 电机M3,M4正转
  analogWrite(PWMA, 150);    // 电机M3,M4速度设为150
  digitalWrite(MB, LOW);     // 电机M1,M2反转
  analogWrite(PWMB, 150);    // 电机M1,M2速度设为150
  delay(1000);               // 延时1秒

  // 右转1秒
  digitalWrite(MA, LOW);     // 电机M3,M4反转
  analogWrite(PWMA, 150);    // 电机M3,M4速度设为150
  digitalWrite(MB, HIGH);    // 电机M1,M2正转
  analogWrite(PWMB, 150);    // 电机M1,M2速度设为150
  delay(1000);               // 延时1秒

  // 停止1秒
  analogWrite(PWMA, 0);      // 电机M3,M4停止
  analogWrite(PWMB, 0);      // 电机M1,M2停止
  delay(1000);               // 延时1秒
}