/*
  keyes 4WD 多功能智能车
  课程 4.2
  舵机控制
  http://www.keyes-robot.com
*/
#include <Servo.h>

#define SERVO_PIN 10  // 舵机信号引脚

Servo myServo;  // 创建舵机对象控制舵机
int pos = 0;    // 舵机位置变量

/* 功能：初始化舵机 */
void setup() {
  myServo.attach(SERVO_PIN);  // 绑定舵机信号引脚
}

/* 功能：循环控制舵机从 0 度转到 180 度再回到 0 度 */
void loop() {
  for (pos = 0; pos <= 180; pos += 1) {  // 从 0 度转到 180 度，步进 1 度
    myServo.write(pos);                   // 设置舵机位置
    delay(15);                           // 等待舵机到达位置
  }
  for (pos = 180; pos >= 0; pos -= 1) {  // 从 180 度转回 0 度，步进 1 度
    myServo.write(pos);                   // 设置舵机位置
    delay(15);                           // 等待舵机到达位置
  }
}