/*
  keyes 4WD 多功能智能车
  课程 12
  超声波跟随机器人
  http://www.keyes-robot.com
*/
#include <Servo.h>

Servo myServo;  // 舵机对象

#define TRIG_PIN 12    // 超声波 TRIG 引脚
#define ECHO_PIN 13    // 超声波 ECHO 引脚
#define MA 2           // 电机 M3,M4 方向控制引脚
#define PWMA 6         // 电机 M3,M4 速度控制引脚
#define MB 4           // 电机 M1,M2 方向控制引脚
#define PWMB 5         // 电机 M1,M2 速度控制引脚

int distance;       // 距离变量

/* 功能：超声波测距函数，获取距离并打印 */
int getDistance() {
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);  // 触发超声波发射，至少10us
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);
  distance = pulseIn(ECHO_PIN, HIGH) / 58;  // 计算距离，单位cm
  delay(20);  // 延时20ms，等待稳定
  Serial.print("distance:");  // 串口打印距离
  Serial.print(distance);
  Serial.println("cm");
  return distance;
}

/* 功能：初始化设置 */
void setup() {
  Serial.begin(9600);  // 设置串口波特率为9600
  myServo.attach(10);  // 绑定舵机引脚10
  pinMode(TRIG_PIN, OUTPUT);  // 设置 TRIG 引脚为输出
  pinMode(ECHO_PIN, INPUT);   // 设置 ECHO 引脚为输入
  pinMode(MA, OUTPUT);        // 设置电机方向控制引脚为输出
  pinMode(PWMA, OUTPUT);      // 设置电机速度控制引脚为输出
  pinMode(MB, OUTPUT);        // 设置电机方向控制引脚为输出
  pinMode(PWMB, OUTPUT);      // 设置电机速度控制引脚为输出
}

/* 功能：主循环，根据距离控制小车动作 */
void loop() {
  getDistance();  // 获取距离

  if (distance < 8) {  // 距离小于8cm，后退
    back();
  } else if (distance >= 8 && distance < 13) {  // 距离8~13cm，停止
    stopCar();
  } else if (distance >= 13 && distance <= 35) {  // 距离13~35cm，前进跟随
    advance();
  } else {  // 其他情况，停止
    stopCar();
  }
}

/* 功能：小车前进 */
void advance() {
  digitalWrite(MA, HIGH);      // 电机A正转
  analogWrite(PWMA, 100);      // 电机A速度100
  digitalWrite(MB, HIGH);      // 电机B正转
  analogWrite(PWMB, 100);      // 电机B速度100
}

/* 功能：小车后退 */
void back() {
  digitalWrite(MA, LOW);       // 电机A反转
  analogWrite(PWMA, 100);      // 电机A速度100
  digitalWrite(MB, LOW);       // 电机B反转
  analogWrite(PWMB, 100);      // 电机B速度100
}

/* 功能：小车左转 */
void turnLeft() {
  digitalWrite(MA, HIGH);      // 电机A正转
  analogWrite(PWMA, 100);      // 电机A速度100
  digitalWrite(MB, LOW);       // 电机B反转
  analogWrite(PWMB, 100);      // 电机B速度100
}

/* 功能：小车右转 */
void turnRight() {
  digitalWrite(MA, LOW);       // 电机A反转
  analogWrite(PWMA, 100);      // 电机A速度100
  digitalWrite(MB, HIGH);      // 电机B正转
  analogWrite(PWMB, 100);      // 电机B速度100
}

/* 功能：小车停止 */
void stopCar() {
  analogWrite(PWMA, 0);        // 电机A速度0，停止
  analogWrite(PWMB, 0);        // 电机B速度0，停止
}