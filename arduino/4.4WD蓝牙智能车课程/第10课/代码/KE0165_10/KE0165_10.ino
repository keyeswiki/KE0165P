/*
  keyes 4WD 多功能智能车
  课程 10
  线路跟踪机器人
  http://www.keyes-robot.com
*/
#define L_PIN 11      // 左边传感器引脚
#define M_PIN 7       // 中间传感器引脚
#define R_PIN 8       // 右边传感器引脚
#define MA 2          // 电机M3,M4方向控制引脚
#define PWMA 6        // 电机M3,M4速度控制引脚
#define MB 4          // 电机M1,M2方向控制引脚
#define PWMB 5        // 电机M1,M2速度控制引脚

int lVal, mVal, rVal;

/* 功能：小车前进 */
void advance() {
  digitalWrite(MA, HIGH);          // 电机A正转
  analogWrite(PWMA, 200);          // 电机A速度为200
  digitalWrite(MB, HIGH);          // 电机B正转
  analogWrite(PWMB, 200);          // 电机B速度为200
}

/* 功能：小车后退 */
void back() {
  digitalWrite(MA, LOW);           // 电机A反转
  analogWrite(PWMA, 200);          // 电机A速度为200
  digitalWrite(MB, LOW);           // 电机B反转
  analogWrite(PWMB, 200);          // 电机B速度为200
}

/* 功能：小车左转 */
void turnLeft() {
  digitalWrite(MA, HIGH);          // 电机A正转
  analogWrite(PWMA, 200);          // 电机A速度为200
  digitalWrite(MB, LOW);           // 电机B反转
  analogWrite(PWMB, 200);          // 电机B速度为200
}

/* 功能：小车右转 */
void turnRight() {
  digitalWrite(MA, LOW);           // 电机A反转
  analogWrite(PWMA, 200);          // 电机A速度为200
  digitalWrite(MB, HIGH);          // 电机B正转
  analogWrite(PWMB, 200);          // 电机B速度为200
}

/* 功能：小车停止 */
void stopCar() {
  analogWrite(PWMA, 0);            // 电机A速度为0
  analogWrite(PWMB, 0);            // 电机B速度为0
}

/* 功能：初始化设置 */
void setup() {
  Serial.begin(9600);              // 设置波特率为9600
  pinMode(L_PIN, INPUT);           // 循迹传感器引脚配置为输入模式
  pinMode(M_PIN, INPUT);           // 循迹传感器引脚配置为输入模式
  pinMode(R_PIN, INPUT);           // 循迹传感器引脚配置为输入模式
  pinMode(MA, OUTPUT);             // 电机方向控制引脚配置为输出模式
  pinMode(PWMA, OUTPUT);           // 电机速度控制引脚配置为输出模式
  pinMode(MB, OUTPUT);             // 电机方向控制引脚配置为输出模式
  pinMode(PWMB, OUTPUT);           // 电机速度控制引脚配置为输出模式
}

/* 功能：主循环，读取传感器并控制小车动作 */
void loop() {
  lVal = digitalRead(L_PIN);       // 读取左边传感器的值
  mVal = digitalRead(M_PIN);       // 读取中间传感器的值
  rVal = digitalRead(R_PIN);       // 读取右边传感器的值

  if (lVal == 0 && mVal == 0 && rVal == 0) {  // 当都没有检测到黑线时前进
    advance();
  } else {                                    // 任一传感器检测到黑线则后退再左转
    back();
    delay(500);                               // 后退延时
    turnLeft();
    delay(800);                               // 左转延时
  }
}