/*
  keyes 4WD 多功能智能车
  课程 8.1
  电机驱动扩展板
  http://www.keyes-robot.com
*/

#define MA 2       // 电机M3,M4方向控制引脚 D2
#define PWMA 6     // 电机M3,M4速度控制引脚 D6
#define MB 4       // 电机M1,M2方向控制引脚 D4
#define PWMB 5     // 电机M1,M2速度控制引脚 D5

/* 功能：初始化电机控制引脚 */
void setup() {
  pinMode(MA, OUTPUT);    // 配置电机M3,M4方向引脚为输出
  pinMode(PWMA, OUTPUT);  // 配置电机M3,M4速度引脚为输出
  pinMode(MB, OUTPUT);    // 配置电机M1,M2方向引脚为输出
  pinMode(PWMB, OUTPUT);  // 配置电机M1,M2速度引脚为输出
}

/* 功能：主循环，控制小车前进、后退、左转、右转和停止 */
void loop() {
  // 前进1秒
  digitalWrite(MA, HIGH);     // 电机A正转
  analogWrite(PWMA, 200);     // 电机A速度为200
  digitalWrite(MB, HIGH);     // 电机B正转
  analogWrite(PWMB, 200);     // 电机B速度为200
  delay(1000);

  // 后退1秒
  digitalWrite(MA, LOW);      // 电机A反转
  analogWrite(PWMA, 200);     // 电机A速度为200
  digitalWrite(MB, LOW);      // 电机B反转
  analogWrite(PWMB, 200);     // 电机B速度为200
  delay(1000);

  // 左转1秒
  digitalWrite(MA, HIGH);     // 电机A正转
  analogWrite(PWMA, 200);     // 电机A速度为200
  digitalWrite(MB, LOW);      // 电机B反转
  analogWrite(PWMB, 200);     // 电机B速度为200
  delay(1000);

  // 右转1秒
  digitalWrite(MA, LOW);      // 电机A反转
  analogWrite(PWMA, 200);     // 电机A速度为200
  digitalWrite(MB, HIGH);     // 电机B正转
  analogWrite(PWMB, 200);     // 电机B速度为200
  delay(1000);

  // 停止1秒
  analogWrite(PWMA, 0);       // 电机A停止
  analogWrite(PWMB, 0);       // 电机B停止
  delay(1000);
}