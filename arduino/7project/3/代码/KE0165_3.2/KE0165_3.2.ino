/*
  keyes 4WD 多功能智能车
  课程 3.2
  线路跟踪传感器
  http://www.keyes-robot.com
*/

#define L_PIN 11      // 左侧线路跟踪传感器引脚
#define M_PIN 7       // 中间线路跟踪传感器引脚
#define R_PIN 8       // 右侧线路跟踪传感器引脚
#define LED_PIN 9     // LED 灯引脚

int valL, valM, valR;  // 三个传感器的变量值

/* 功能：初始化串口和引脚模式 */
void setup() {
  Serial.begin(9600);           // 初始化串口通信，波特率 9600
  pinMode(L_PIN, INPUT);        // 设置左传感器引脚为输入
  pinMode(M_PIN, INPUT);        // 设置中间传感器引脚为输入
  pinMode(R_PIN, INPUT);        // 设置右传感器引脚为输入
  pinMode(LED_PIN, OUTPUT);     // 设置 LED 引脚为输出
}

/* 功能：读取传感器值，输出串口信息，并控制 LED 灯 */
void loop() {
  valL = digitalRead(L_PIN);    // 读取左传感器值
  valM = digitalRead(M_PIN);    // 读取中间传感器值
  valR = digitalRead(R_PIN);    // 读取右传感器值

  Serial.print("left: ");       // 输出左传感器值
  Serial.print(valL);
  Serial.print(" middle: ");    // 输出中间传感器值
  Serial.print(valM);
  Serial.print(" right: ");     // 输出右传感器值
  Serial.println(valR);

  if (valL == LOW || valM == LOW || valR == LOW) {  // 任一传感器检测到信号
    digitalWrite(LED_PIN, HIGH);  // LED 灯灭
  } else {
    digitalWrite(LED_PIN, LOW);   // LED 灯亮
  }
}