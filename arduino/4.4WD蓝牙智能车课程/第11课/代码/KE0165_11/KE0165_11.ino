/*
  keyes 4WD 多功能智能车
  课程 11
  线路跟踪机器人
  http://www.keyes-robot.com
*/

const int L_PIN = 11;     // 左边传感器引脚
const int M_PIN = 7;      // 中间传感器引脚
const int R_PIN = 8;      // 右边传感器引脚
const int MA = 2;         // 电机A方向控制引脚
const int PWMA = 6;       // 电机A速度控制引脚
const int MB = 4;         // 电机B方向控制引脚
const int PWMB = 5;       // 电机B速度控制引脚

int lVal, mVal, rVal;

/* 功能：小车前进 */
void advance() {
  digitalWrite(MA, HIGH);          // 电机A正转
  analogWrite(PWMA, 150);          // 电机A速度为150
  digitalWrite(MB, HIGH);          // 电机B正转
  analogWrite(PWMB, 150);          // 电机B速度为150
}

/* 功能：小车后退 */
void back() {
  digitalWrite(MA, LOW);           // 电机A反转
  analogWrite(PWMA, 150);          // 电机A速度为150
  digitalWrite(MB, LOW);           // 电机B反转
  analogWrite(PWMB, 150);          // 电机B速度为150
}

/* 功能：小车左转 */
void turnLeft() {
  digitalWrite(MA, HIGH);          // 电机A正转
  analogWrite(PWMA, 150);          // 电机A速度为150
  digitalWrite(MB, LOW);           // 电机B反转
  analogWrite(PWMB, 150);          // 电机B速度为150
}

/* 功能：小车右转 */
void turnRight() {
  digitalWrite(MA, LOW);           // 电机A反转
  analogWrite(PWMA, 150);          // 电机A速度为150
  digitalWrite(MB, HIGH);          // 电机B正转
  analogWrite(PWMB, 150);          // 电机B速度为150
}

/* 功能：小车停止 */
void stopCar() {
  analogWrite(PWMA, 0);            // 电机A速度为0
  analogWrite(PWMB, 0);            // 电机B速度为0
}

void setup() {
  Serial.begin(9600);              // 设置波特率为9600
  pinMode(L_PIN, INPUT);           // 左边传感器引脚配置为输入模式
  pinMode(M_PIN, INPUT);           // 中间传感器引脚配置为输入模式
  pinMode(R_PIN, INPUT);           // 右边传感器引脚配置为输入模式
  pinMode(MA, OUTPUT);             // 电机A方向引脚配置为输出模式
  pinMode(PWMA, OUTPUT);           // 电机A速度引脚配置为输出模式
  pinMode(MB, OUTPUT);             // 电机B方向引脚配置为输出模式
  pinMode(PWMB, OUTPUT);           // 电机B速度引脚配置为输出模式
}

void loop() {
  lVal = digitalRead(L_PIN);       // 读取左边传感器的值
  mVal = digitalRead(M_PIN);       // 读取中间传感器的值
  rVal = digitalRead(R_PIN);       // 读取右边传感器的值

  if (mVal == 1) {                 // 中间检测到黑线
    if (lVal == 1 && rVal == 0) { // 左边检测到黑线，右边没有，左转
      turnLeft();
    } 
    else if (lVal == 0 && rVal == 1) { // 右边检测到黑线，左边没有，右转
      turnRight();
    } 
    else {                        // 其他情况前进
      advance();
    }
  } 
  else {                          // 中间未检测到黑线
    if (lVal == 1 && rVal == 0) { // 左边检测到黑线，右边没有，左转
      turnLeft();
    } 
    else if (lVal == 0 && rVal == 1) { // 右边检测到黑线，左边没有，右转
      turnRight();
    } 
    else {                        // 其他情况停止
      stopCar();
    }
  }
}