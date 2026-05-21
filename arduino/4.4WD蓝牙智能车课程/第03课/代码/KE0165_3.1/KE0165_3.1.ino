/*
  keyes 4WD 多功能智能车
  课程 3.1
  线路跟踪传感器
  http://www.keyes-robot.com
*/

#define L_PIN 11  // 左侧线路跟踪传感器引脚
#define M_PIN 7   // 中间线路跟踪传感器引脚
#define R_PIN 8   // 右侧线路跟踪传感器引脚

int valL, valM, valR;  // 三个传感器的变量值

/* 功能：初始化串口和传感器引脚 */
void setup() {
  Serial.begin(9600);  // 初始化串口通信，波特率 9600
  pinMode(L_PIN, INPUT);  // 设置左传感器引脚为输入
  pinMode(M_PIN, INPUT);  // 设置中传感器引脚为输入
  pinMode(R_PIN, INPUT);  // 设置右传感器引脚为输入
}

/* 功能：读取传感器值并通过串口输出 */
void loop() {
  valL = digitalRead(L_PIN);  // 读取左传感器值
  valM = digitalRead(M_PIN);  // 读取中传感器值
  valR = digitalRead(R_PIN);  // 读取右传感器值

  Serial.print("left: "); Serial.print(valL);  // 输出左传感器值
  Serial.print(" middle: "); Serial.print(valM);  // 输出中传感器值
  Serial.print(" right: "); Serial.println(valR);  // 输出右传感器值并换行

  delay(500);  // 延时 500 毫秒，保证读取稳定
}