/*
  keyes 4WD 多功能智能车
  课程 5.2
  超声波传感器
  http://www.keyes-robot.com
*/

#define TRIG_PIN 12    // 触发引脚
#define ECHO_PIN 13    // 回声引脚
#define LED_PIN 9      // 指示灯引脚

long duration, cm, inches;

/* 功能：初始化串口及引脚模式 */
void setup() {
  Serial.begin(9600);           // 初始化串口通信
  pinMode(TRIG_PIN, OUTPUT);    // 设置触发引脚为输出
  pinMode(ECHO_PIN, INPUT);     // 设置回声引脚为输入
  pinMode(LED_PIN, OUTPUT);     // 设置指示灯引脚为输出
}

/* 功能：主循环，测距并控制指示灯 */
void loop() {
  digitalWrite(TRIG_PIN, LOW);           // 发送前先拉低触发引脚
  delayMicroseconds(2);                   // 延时确保干净的高电平脉冲
  digitalWrite(TRIG_PIN, HIGH);          // 发送高电平脉冲触发超声波
  delayMicroseconds(10);                  // 持续10微秒
  digitalWrite(TRIG_PIN, LOW);           

  duration = pulseIn(ECHO_PIN, HIGH);    // 读取回声引脚高电平持续时间（微秒）

  cm = (duration / 2) / 29.1;            // 计算距离（厘米）
  inches = (duration / 2) / 74;          // 计算距离（英寸）

  Serial.print(inches);
  Serial.print("in, ");
  Serial.print(cm);
  Serial.print("cm");
  Serial.println();

  delay(50);                             // 延时50毫秒

  if (cm >= 2 && cm <= 10) {
    digitalWrite(LED_PIN, HIGH);        // 距离在2-10厘米范围内，点亮指示灯
  } else {
    digitalWrite(LED_PIN, LOW);         // 否则关闭指示灯
  }
}