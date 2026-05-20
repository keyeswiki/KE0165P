/*
  课程编号：90
  网址：https://www.arduino.cn
  文件说明：舵机控制示例
*/

#include <Servo.h>  // 导入舵机库

#define SERVO_PIN 10  // 舵机信号引脚

Servo servo;  // 定义舵机对象

/* 功能：初始化舵机 */
void setup() {
  servo.attach(SERVO_PIN);  // 舵机连接到引脚10
}

/* 功能：主循环，控制舵机转动 */
void loop() {
  servo.write(90);  // 舵机转动到90度
  delay(100);  // 延时100毫秒
}