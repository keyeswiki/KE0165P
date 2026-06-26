(() => {
'use strict';
goog.require('Blockly.Arduino');

//////////////////////////////////2WD-Car////////////////////////////////////////////

/////////////////////////led///////////////////////
Blockly.Arduino.forBlock['desk_led'] = function(_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    var dropdown_stat = this.getFieldValue('STAT');
    generator.setups_['setup_output_led'] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
    var code = 'digitalWrite(' + dropdown_pin + ',' + dropdown_stat + ');\n';
    return code;
};

////////////////////////////////Desktop_Car//////////////////////////
Blockly.Arduino.forBlock['Desktop_Car'] = function(_, generator) {

    var value_speed = generator.valueToCode(this, 'speed', generator.ORDER_ATOMIC) || '0';
    //var speed = generator.valueToCode(this, 'speed', generator.ORDER_ATOMIC) || '0';
    var dropdown_type = this.getFieldValue('direction');

    generator.definitions_['1front'] = 'void front() \n{\n  digitalWrite(4,HIGH);\n  analogWrite(5,' + value_speed + ');\n  digitalWrite(2,HIGH);\n  analogWrite(9,' + value_speed + ');\n}\n';
    generator.definitions_['2back'] = 'void back() \n{\n  digitalWrite(4,HIGH);\n  analogWrite(5,' + value_speed + ');\n  digitalWrite(2,HIGH);\n  analogWrite(9,' + value_speed + ');\n}\n';

    var code = '';
    if (dropdown_type == "front") code += 'front();';
    if (dropdown_type == "back") code += 'back();';
    if (dropdown_type == "left") code += 'left();';
    if (dropdown_type == "right") code += 'right();';

    //generator.setups_['setup_front_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';
    //var code = '  digitalWrite(4,HIGH);\n  analogWrite(5,'+value_front+');\n  digitalWrite(2,HIGH);\n  analogWrite(9,'+value_front+');';
    return code;
};

////////////////////////////////front//////////////////////////
Blockly.Arduino.forBlock['FRONT'] = function(_, generator) {

    var value_front = generator.valueToCode(this, 'speed_F', generator.ORDER_ATOMIC);

    //generator.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';//这样会在setup里会重复叠加
    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';

    var code = 'digitalWrite(4,HIGH);\nanalogWrite(5,' + value_front + ');\ndigitalWrite(2,HIGH);\nanalogWrite(6,' + value_front + ');\n';
    return code;
};

////////////////////////////////back//////////////////////////
Blockly.Arduino.forBlock['BACK'] = function(_, generator) {

    var value_back = generator.valueToCode(this, 'speed_B', generator.ORDER_ATOMIC);

    //generator.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';  //这样会在setup里会重复叠加
    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
    var code = 'digitalWrite(4,LOW);\nanalogWrite(5,' + value_back + ');\ndigitalWrite(2,LOW);\nanalogWrite(6,' + value_back + ');\n';
    return code;
};

////////////////////////////////left//////////////////////////
Blockly.Arduino.forBlock['LEFT'] = function(_, generator) {

    var value_left = generator.valueToCode(this, 'speed_L', generator.ORDER_ATOMIC);

    //generator.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';
    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
    var code = 'digitalWrite(4,LOW);\nanalogWrite(5,' + value_left + ');\ndigitalWrite(2,HIGH);\nanalogWrite(6,' + value_left + ');\n';
    return code;
};

////////////////////////////////turn_left//////////////////////////
Blockly.Arduino.forBlock['TURN_LEFT'] = function(_, generator) {
    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
    var code = 'digitalWrite(4,HIGH);\nanalogWrite(5,100);\ndigitalWrite(2,HIGH);\nanalogWrite(6,180);\n';
    return code;
};

////////////////////////////////right//////////////////////////
Blockly.Arduino.forBlock['RIGHT'] = function(_, generator) {

    var value_right = generator.valueToCode(this, 'speed_R', generator.ORDER_ATOMIC);

    //generator.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';
    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
    var code = 'digitalWrite(4,HIGH);\nanalogWrite(5,' + value_right + ');\ndigitalWrite(2,LOW);\nanalogWrite(6,' + value_right + ');\n';
    return code;
};

////////////////////////////////turn_right//////////////////////////
Blockly.Arduino.forBlock['TURN_RIGHT'] = function(_, generator) {

    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
    var code = 'digitalWrite(4,HIGH);\nanalogWrite(5,180);\ndigitalWrite(2,HIGH);\nanalogWrite(6,100);\n';
    return code;
};

////////////////////////////////stop//////////////////////////
Blockly.Arduino.forBlock['STOP'] = function(_, generator) {
    //generator.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';
    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
    var code = 'digitalWrite(4,LOW);\nanalogWrite(5,0);\ndigitalWrite(2,LOW);\nanalogWrite(6,0);\n';
    return code;
};

//////////////////////////红外避障///////////////////////////
Blockly.Arduino.forBlock['desk_avoid'] = function(_, generator) {
    var dropdown_type = this.getFieldValue('avoid02');
    generator.setups_['setup_output_left'] = 'pinMode(A1, INPUT);';
    generator.setups_['setup_output_right'] = 'pinMode(A2, INPUT);';

    var code = '';
    if (dropdown_type == "left") code += 'digitalRead(A1)';
    if (dropdown_type == "right") code += 'digitalRead(A2)';
    return [code, generator.ORDER_ATOMIC];
};

///////////////////////desk超声波//////////////////////
Blockly.Arduino.forBlock['desk_sr04'] = function(_, generator) {
    generator.setups_['setup_output_T'] = 'pinMode(12, OUTPUT);';
    generator.setups_['setup_output_E'] = 'pinMode(13, INPUT);';
    var funcName = 'checkdistance';
    var code = 'float' + ' ' + funcName + '() {\n'
        + '  digitalWrite(12, LOW);\n' + '  delayMicroseconds(2);\n'
        + '  digitalWrite(12, HIGH);\n' + '  delayMicroseconds(10);\n'
        + '  digitalWrite(12, LOW);\n'
        + '  float distance = pulseIn(13, HIGH) / 58.00;\n'
        + '  delay(10);\n' + '  return distance;\n'
        + '}\n';
    generator.definitions_[funcName] = code;
    return [funcName + '()', generator.ORDER_ATOMIC];
};

//////////////////////////循迹模块///////////////////////////
Blockly.Arduino.forBlock['desk_track'] = function(_, generator) {
    var dropdown_type = this.getFieldValue('track');
    generator.setups_['setup_output_trackleft'] = 'pinMode(11, INPUT);';
    generator.setups_['setup_output_trackcenter'] = 'pinMode(7, INPUT);';
    generator.setups_['setup_output_trackright'] = 'pinMode(8, INPUT);';

    var code = '';
    if (dropdown_type == "track_left") code += 'digitalRead(11)';
    if (dropdown_type == "track_center") code += 'digitalRead(7)';
    if (dropdown_type == "track_right") code += 'digitalRead(8)';
    return [code, generator.ORDER_ATOMIC];
};

////////////////////蜂鸣器//////////////////////
Blockly.Arduino.forBlock['tone_notes'] = function(_, generator) {
    var code = this.getFieldValue('STAT');
    return [code, generator.ORDER_ATOMIC];
};

Blockly.Arduino.forBlock['desk_buzzer'] = function(_, generator) {
    var fre = generator.valueToCode(this, 'FREQUENCY',
        generator.ORDER_ASSIGNMENT) || '0';
    generator.setups_['setup_output_3'] = 'pinMode(3, OUTPUT);';
    var code = "";
    
    code += "tone(3," + fre + ");\n";
    return code;
};

//////////////////////////music///////////////////////////
Blockly.Arduino.forBlock['desk_music'] = function(_, generator) {

    generator.definitions_['1include_music'] = '#include<music.h>';
    //generator.definitions_['2include_buzzer_pin'] = 'int buzzer_pin = '+dropdown_pin+';';
    generator.definitions_['2include_buzzer_pin'] = 'int buzzer_pin = 3;';
    generator.definitions_['3include_music2'] = 'music Music(buzzer_pin);';

    generator.setups_['setup_output_music_pin'] = 'pinMode(buzzer_pin, OUTPUT);';

    var dropdown_type = this.getFieldValue('play');
    var code = '';
    if (dropdown_type == "Birthday") code += 'Music.birthday();\n';
    if (dropdown_type == "Ode to Joy") code += 'Music.Ode_to_Joy();\n';
    if (dropdown_type == "tetris") code += 'Music.tetris();';
    if (dropdown_type == "star_war") code += 'Music.star_war_tone();';
    if (dropdown_type == "super_mario") code += 'Music.super_mario();';
    if (dropdown_type == "christmas") code += 'Music.christmas();';
    return code;
    //return [code, generator.ORDER_ATOMIC];
};

Blockly.Arduino.forBlock['desk_notone'] = function(_, generator) {
    //var dropdown_pin = generator.valueToCode(this, 'PIN',generator.ORDER_ATOMIC);
    generator.setups_['setup_output'] = 'pinMode(3, OUTPUT);';
    var code = '';
    code += "noTone(3);\n";
    return code;
};

//////////////////music/////////////////////////

///////////////////////红外接收///////////////////
Blockly.Arduino.forBlock['desk_ir_r'] = function(_, generator) {
    var variable = generator.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    generator.definitions_['var_declare' + variable] = 'long ' + variable + ';';
    var branch = generator.statementToCode(this, 'DO');
    generator.definitions_['1include_IRremote'] = '#include <KE_IRremote.h>\n';
    generator.definitions_['2var_ir_recv_A3'] = 'IRrecv irrecv(A3);\ndecode_results results;\n';
    generator.setups_['setup_ir_recv_A3'] = 'irrecv.enableIRIn();';
    var code = "if (irrecv.decode(&results)) {\n"
    code += '  ' + variable + ' = results.value;\n';
    code += branch;
    code += '  irrecv.resume();\n'
    code += '}\n';
    return code;
};

/////////////////////////////////////蓝牙////////////////////////////////////
Blockly.Arduino.forBlock['desk_bluetooth'] = function(_, generator) {
    var val = this.getFieldValue('VAL');
    var branch = generator.statementToCode(this, 'DO');
    generator.definitions_['0var_bluetooth_' + val] = 'volatile char ' + val + ';';
    generator.setups_['setup_serial_bluetooth'] = 'Serial.begin(9600);';
    var code = 'if (Serial.available())\n{\n  ' + val + ' = Serial.read();\n';
    code += branch;
    code += '}\n';
    return code;
};

///////////////////////////////Desktop_Car/////////////////////////////////////////////////

///////////////////////////////4WD_Car/////////////////////////////////////////////////
/////////////////////////led///////////////////////
Blockly.Arduino.forBlock['ks4wd_led'] = function(_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    var dropdown_stat = this.getFieldValue('STAT');
    generator.setups_['setup_output_led'] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
    var code = 'digitalWrite(' + dropdown_pin + ',' + dropdown_stat + ');\n';
    return code;
};

////////////////////////////////front//////////////////////////
Blockly.Arduino.forBlock['ks4wd_FRONT'] = function(_, generator) {

    var value_front = generator.valueToCode(this, 'speed_F', generator.ORDER_ATOMIC);

    //generator.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';//这样会在setup里会重复叠加
    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';

    var code = 'digitalWrite(4,HIGH);\nanalogWrite(5,20+' + value_front + ');\ndigitalWrite(2,HIGH);\nanalogWrite(6,' + value_front + ');\n';
    return code;
};

////////////////////////////////back//////////////////////////
Blockly.Arduino.forBlock['ks4wd_BACK'] = function(_, generator) {

    var value_back = generator.valueToCode(this, 'speed_B', generator.ORDER_ATOMIC);

    //generator.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';  //这样会在setup里会重复叠加
    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
    var code = 'digitalWrite(4,LOW);\nanalogWrite(5,20+' + value_back + ');\ndigitalWrite(2,LOW);\nanalogWrite(6,' + value_back + ');\n';
    return code;
};

////////////////////////////////left//////////////////////////
Blockly.Arduino.forBlock['ks4wd_LEFT'] = function(_, generator) {

    var value_left = generator.valueToCode(this, 'speed_L', generator.ORDER_ATOMIC);

    //generator.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';
    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
    var code = 'digitalWrite(4,LOW);\nanalogWrite(5,20+' + value_left + ');\ndigitalWrite(2,HIGH);\nanalogWrite(6,' + value_left + ');\n';
    return code;
};

////////////////////////////////turn_left//////////////////////////
Blockly.Arduino.forBlock['ks4wd_TURN_LEFT'] = function(_, generator) {
    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
    var code = 'digitalWrite(4,HIGH);\nanalogWrite(5,150);\ndigitalWrite(2,HIGH);\nanalogWrite(6,255);\n';
    return code;
};

////////////////////////////////right//////////////////////////
Blockly.Arduino.forBlock['ks4wd_RIGHT'] = function(_, generator) {

    var value_right = generator.valueToCode(this, 'speed_R', generator.ORDER_ATOMIC);

    //generator.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';
    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
    var code = 'digitalWrite(4,HIGH);\nanalogWrite(5,20+' + value_right + ');\ndigitalWrite(2,LOW);\nanalogWrite(6,' + value_right + ');\n';
    return code;
};

////////////////////////////////turn_right//////////////////////////
Blockly.Arduino.forBlock['ks4wd_TURN_RIGHT'] = function(_, generator) {

    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
    var code = 'digitalWrite(4,HIGH);\nanalogWrite(5,255);\ndigitalWrite(2,HIGH);\nanalogWrite(6,150);\n';
    return code;
};

////////////////////////////////stop//////////////////////////
Blockly.Arduino.forBlock['ks4wd_STOP'] = function(_, generator) {
    //generator.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';
    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
    var code = 'digitalWrite(4,LOW);\nanalogWrite(5,0);\ndigitalWrite(2,LOW);\nanalogWrite(6,0);\n';
    return code;
};

///////////////////////超声波//////////////////////
Blockly.Arduino.forBlock['ks4wd_sr04'] = function(_, generator) {
    generator.setups_['setup_output_T'] = 'pinMode(12, OUTPUT);';
    generator.setups_['setup_output_E'] = 'pinMode(13, INPUT);';
    var funcName = 'checkdistance';
    var code = 'float' + ' ' + funcName + '() {\n'
        + '  digitalWrite(12, LOW);\n' + '  delayMicroseconds(2);\n'
        + '  digitalWrite(12, HIGH);\n' + '  delayMicroseconds(10);\n'
        + '  digitalWrite(12, LOW);\n'
        + '  float distance = pulseIn(13, HIGH) / 58.00;\n'
        + '  delay(10);\n' + '  return distance;\n'
        + '}\n';
    generator.definitions_[funcName] = code;
    return [funcName + '()', generator.ORDER_ATOMIC];
};

//////////////////////////循迹模块///////////////////////////
Blockly.Arduino.forBlock['ks4wd_track'] = function(_, generator) {
    var dropdown_type = this.getFieldValue('track');
    generator.setups_['setup_output_trackleft'] = 'pinMode(11, INPUT);';
    generator.setups_['setup_output_trackcenter'] = 'pinMode(7, INPUT);';
    generator.setups_['setup_output_trackright'] = 'pinMode(8, INPUT);';

    var code = '';
    if (dropdown_type == "track_left") code += 'digitalRead(11)';
    if (dropdown_type == "track_center") code += 'digitalRead(7)';
    if (dropdown_type == "track_right") code += 'digitalRead(8)';
    return [code, generator.ORDER_ATOMIC];
};

///////////////////////////////舵机2/////////////////////////
Blockly.Arduino.forBlock['ks4wd_servo2'] = function(_, generator) {

    var value_degree = generator.valueToCode(this, 'angle', generator.ORDER_ATOMIC);
    //value_degree = value_degree.replace('(','').replace(')','')
    //delay_time = delay_time.replace('(','').replace(')','');

    generator.definitions_['1include_Servo'] = '#include <Servo.h>';
    generator.definitions_['2var_servo'] = 'Servo servo_10;';
    generator.setups_['setup_servo'] = 'servo_10.attach(10);';

    var code = 'servo_10.write(' + value_degree + ');\n';
    return code;
};

////////////////////////////////ks4wd_Matrix//////////////////////////
///////////////////////16*8点阵/////////////////////////////
//初始化
Blockly.Arduino.forBlock['Matrix_16and8_Init_4wd'] = function(_, generator) {
    var SDA = this.getFieldValue('SDA');
    var SCL = this.getFieldValue('SCL');
    generator.definitions_['1iic_scl'] = '#define IIC_SCL  ' + SCL + '\n';
    generator.definitions_['1iic_sda'] = '#define IIC_SDA  ' + SDA + '\n';
    generator.definitions_['1line'] = 'unsigned char data_line = 0;\n';
    generator.definitions_['1count01'] = 'unsigned char delay_count = 0;\n';
    generator.definitions_['3iic_start'] = 'void IIC_start()\n{\n  digitalWrite(IIC_SCL,LOW);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SDA,HIGH);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SCL,HIGH);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SDA,LOW);\n  delayMicroseconds(3);}\n';
    generator.definitions_['4iic_send'] = 'void IIC_send(unsigned char send_data)\n{\n  for(char i = 0;i < 8;i++)\n  {\n      digitalWrite(IIC_SCL,LOW);\n      delayMicroseconds(3); \n      if(send_data & 0x01)\n      {\n        digitalWrite(IIC_SDA,HIGH);\n      }\n      else\n      {\n        digitalWrite(IIC_SDA,LOW);\n      }\n      delayMicroseconds(3);\n      digitalWrite(IIC_SCL,HIGH); \n      delayMicroseconds(3);\n      send_data = send_data >> 1;\n  }\n}\n';
    generator.definitions_['5iic_end'] = 'void IIC_end()\n{\n  digitalWrite(IIC_SCL,LOW);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SDA,LOW);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SCL,HIGH);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SDA,HIGH);\n  delayMicroseconds(3);}\n';
    generator.setups_['setup_iic'] = '  pinMode(IIC_SCL,OUTPUT);\n  pinMode(IIC_SDA,OUTPUT);\n  digitalWrite(IIC_SCL,LOW);\n  digitalWrite(IIC_SDA,LOW);\n  IIC_start();\n    IIC_send(0x40);\n    IIC_end();\n    IIC_start();\n    IIC_send(0xc0);';

    var code = '';
    return code;
};
//点阵屏显示_显示图案
Blockly.Arduino.forBlock['display_Matrix16and8_DisplayChar_4wd'] = function(_, generator) {
    var dotMatrixArray = generator.valueToCode(this, 'LEDArray', generator.ORDER_ASSIGNMENT);

    var code = 'IIC_start();\n    IIC_send(0xc0);\n    for(char i = 0;i < 16;i++)\n    {\n       IIC_send(' + dotMatrixArray + '[i]);\n    }\n    if(++delay_count >= 10)\n    {\n      delay_count = 0;\n      data_line++;\n      if(data_line >= 4)\n      {\n        data_line = 0;\n      }\n    }\n    IIC_end();\n    IIC_start();\n    IIC_send(0x8A);\n    IIC_end();\n';

    return code;
};

//点阵数组
Blockly.Arduino.forBlock['display_Matrix16and8_LedArray_4wd'] = function(_, generator) {
    var varName = this.getFieldValue('VAR');
    var a = new Array();
    for (let i = 1; i < 17; i++) {  //有16列
        a[i] = new Array();
        for (let j = 1; j < 9; j++) {  //8行
            a[i][9 - j] = (this.getFieldValue('a' + i + j) == "TRUE") ? 1 : 0;
        }
    }
    var code = '{';
    for (let i = 1; i < 17; i++) {
        var tmp = ""
        for (let j = 1; j < 9; j++) {
            tmp += a[i][j];
        }
        tmp = (parseInt(tmp, 2)).toString(16)
        if (tmp.length == 1) tmp = "0" + tmp;
        code += '0x' + tmp + ((i != 16) ? ',' : '');
    }
    code += '};';
    //generator.definitions_[varName] = "uint8_t " + varName + "[8]=" + code;
    generator.definitions_[varName] = "const uint8_t " + varName + "[16]=" + code;
    return [varName, generator.ORDER_ATOMIC];
};

///////////////显示表情//////////////////////
Blockly.Arduino.forBlock['ks4wd_matrix'] = function(_, generator) {

    generator.definitions_['1start01'] = 'unsigned char start01[] = {0x01,0x02,0x04,0x08,0x10,0x20,0x40,0x80,0x80,0x40,0x20,0x10,0x08,0x04,0x02,0x01};\n';
    generator.definitions_['2front'] = 'unsigned char front[] = {0x00,0x00,0x00,0x00,0x00,0x24,0x12,0x09,0x12,0x24,0x00,0x00,0x00,0x00,0x00,0x00};\n';
    generator.definitions_['3back'] = 'unsigned char back[] = {0x00,0x00,0x00,0x00,0x00,0x24,0x48,0x90,0x48,0x24,0x00,0x00,0x00,0x00,0x00,0x00};\n';
    generator.definitions_['4left'] = 'unsigned char left[] = {0x00,0x00,0x00,0x00,0x00,0x00,0x44,0x28,0x10,0x44,0x28,0x10,0x44,0x28,0x10,0x00};\n';
    generator.definitions_['5right'] = 'unsigned char right[] = {0x00,0x10,0x28,0x44,0x10,0x28,0x44,0x10,0x28,0x44,0x00,0x00,0x00,0x00,0x00,0x00};\n';
    generator.definitions_['6Stop01'] = 'unsigned char STOP01[] = {0x2E,0x2A,0x3A,0x00,0x02,0x3E,0x02,0x00,0x3E,0x22,0x3E,0x00,0x3E,0x0A,0x0E,0x00};\n';
    generator.definitions_['7clear'] = 'unsigned char clear[] = {0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00};\n';
    generator.definitions_['8triange_full'] = 'unsigned char triangle_full[] = {0x80,0xC0,0xE0,0xF0,0xF8,0xFC,0xFE,0xFF,0xFF,0xFE,0xFC,0xF8,0xF0,0xE0,0xC0,0x80};\n';
    generator.definitions_['9heart'] = 'unsigned char heart_full[] = {0x00,0x00,0x0C,0x1E,0x3F,0x7F,0xFE,0xFC,0xFE,0x7F,0x3F,0x1E,0x0C,0x00,0x00,0x00};\n';
    generator.definitions_['atriange_back'] = 'unsigned char triangle_back[] = {0x01,0x03,0x07,0x0F,0x1F,0x3F,0x7F,0xFF,0xFF,0x7F,0x3F,0x1F,0x0F,0x07,0x03,0x01};\n';
    generator.definitions_['bsmile'] = 'unsigned char smile[] = {0x00,0x00,0x00,0x0C,0x02,0x02,0x0C,0x20,0x20,0x20,0x0C,0x02,0x02,0x0C,0x00,0x00};\n';
    generator.definitions_['csad'] = 'unsigned char sad[] = {0x00,0x00,0x02,0x02,0x02,0x12,0x08,0x04,0x08,0x12,0x22,0x02,0x02,0x00,0x00,0x00};\n';

    var dropdown_type = this.getFieldValue('matrix');
    var code = 'IIC_start();\n    IIC_send(0xc0);\n    for(char i = 0;i < 16;i++)\n    {\n       IIC_send(' + dropdown_type + '[i]);\n    }\n    if(++delay_count >= 10)\n    {\n      delay_count = 0;\n      data_line++;\n      if(data_line >= 4)\n      {\n        data_line = 0;\n      }\n    }\n    IIC_end();\n    IIC_start();\n    IIC_send(0x8A);\n    IIC_end();\n';

    return code;
};

// Blockly.Arduino.forBlock['ks4wd_light'] = function() {

//   generator.setups_['setup_input_A1'] = 'pinMode(A1, INPUT);';
//   generator.setups_['setup_input_A2'] = 'pinMode(A2, INPUT);';
//   var dropdown_type = this.getFieldValue('light');

//   var code = '';
//   if (dropdown_type == "left_light") code += 'analogRead(A1)';
//   if (dropdown_type == "right_light") code += 'analogRead(A2)';
//   return [code, generator.ORDER_ATOMIC];
// };

///////////////////////红外接收///////////////////
Blockly.Arduino.forBlock['ks4wd_ir_r'] = function(_, generator) {
    var variable = generator.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    generator.definitions_['var_declare' + variable] = 'long ' + variable + ';';
    var branch = generator.statementToCode(this, 'DO');
    generator.definitions_['1include_IRremote'] = '#include <KE_IRremote.h>\n';
    generator.definitions_['2var_ir_recv_A0'] = 'IRrecv irrecv(A1);\ndecode_results results;\n';
    generator.setups_['setup_ir_recv_A0'] = 'irrecv.enableIRIn();';
    var code = "if (irrecv.decode(&results)) {\n"
    code += '  ' + variable + ' = results.value;\n';
    code += branch;
    code += '  irrecv.resume();\n'
    code += '}\n';
    return code;
};

/////////////////////////////////////蓝牙////////////////////////////////////
Blockly.Arduino.forBlock['ks4wd_bluetooth'] = function(_, generator) {
    var val = this.getFieldValue('VAL');
    var branch = generator.statementToCode(this, 'DO');
    generator.definitions_['0var_bluetooth_' + val] = 'volatile char ' + val + ';';
    generator.setups_['setup_serial_bluetooth'] = 'Serial.begin(9600);';
    var code = 'if (Serial.available())\n{\n  ' + val + ' = Serial.read();\n';
    code += branch;
    code += '}\n';
    return code;
};

///////////////////////////////4wd_Car/////////////////////////////////////////////////

////////////////////////////////////////////Tank-Car/////////////////////////

/////////////////////////led///////////////////////
Blockly.Arduino.forBlock['tank_led'] = function(_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    var dropdown_stat = this.getFieldValue('STAT');
    generator.setups_['setup_output_led'] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
    var code = 'digitalWrite(' + dropdown_pin + ',' + dropdown_stat + ');\n';
    return code;
};

////////////////////////////////front//////////////////////////
Blockly.Arduino.forBlock['tank_FRONT'] = function(_, generator) {

    var value_front = generator.valueToCode(this, 'speed_F', generator.ORDER_ATOMIC);

    //generator.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';//这样会在setup里会重复叠加
    generator.setups_['setup_output_m1'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(6, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(5, OUTPUT);';

    var code = 'digitalWrite(2,HIGH);\nanalogWrite(6,' + value_front + ');\ndigitalWrite(4,HIGH);\nanalogWrite(5,' + value_front + ');\n';
    return code;
};

////////////////////////////////back//////////////////////////
Blockly.Arduino.forBlock['tank_BACK'] = function(_, generator) {

    var value_back = generator.valueToCode(this, 'speed_B', generator.ORDER_ATOMIC);

    //generator.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';  //这样会在setup里会重复叠加
    generator.setups_['setup_output_m1'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(6, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(5, OUTPUT);';
    var code = 'digitalWrite(2,LOW);\nanalogWrite(6,' + value_back + ');\ndigitalWrite(4,LOW);\nanalogWrite(5,' + value_back + ');\n';
    return code;
};

////////////////////////////////left//////////////////////////
Blockly.Arduino.forBlock['tank_LEFT'] = function(_, generator) {

    var value_left = generator.valueToCode(this, 'speed_L', generator.ORDER_ATOMIC);

    //generator.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';
    generator.setups_['setup_output_m1'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(6, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(5, OUTPUT);';
    var code = 'digitalWrite(2,LOW);\nanalogWrite(6,' + value_left + ');\ndigitalWrite(4,HIGH);\nanalogWrite(5,' + value_left + ');\n';
    return code;
};

////////////////////////////////turn_left//////////////////////////
Blockly.Arduino.forBlock['tank_TURN_LEFT'] = function(_, generator) {
    generator.setups_['setup_output_m1'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(6, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(5, OUTPUT);';
    var code = 'digitalWrite(2,HIGH);\nanalogWrite(6,100);\ndigitalWrite(4,HIGH);\nanalogWrite(5,180);\n';
    return code;
};

////////////////////////////////right//////////////////////////
Blockly.Arduino.forBlock['tank_RIGHT'] = function(_, generator) {

    var value_right = generator.valueToCode(this, 'speed_R', generator.ORDER_ATOMIC);

    //generator.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';
    generator.setups_['setup_output_m1'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(6, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(5, OUTPUT);';
    var code = 'digitalWrite(2,HIGH);\nanalogWrite(6,' + value_right + ');\ndigitalWrite(4,LOW);\nanalogWrite(5,' + value_right + ');\n';
    return code;
};

////////////////////////////////turn_right//////////////////////////
Blockly.Arduino.forBlock['tank_TURN_RIGHT'] = function(_, generator) {

    generator.setups_['setup_output_m1'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(6, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(5, OUTPUT);';
    var code = 'digitalWrite(2,HIGH);\nanalogWrite(6,180);\ndigitalWrite(4,HIGH);\nanalogWrite(5,100);\n';
    return code;
};

////////////////////////////////stop//////////////////////////
Blockly.Arduino.forBlock['tank_STOP'] = function(_, generator) {
    //generator.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';
    generator.setups_['setup_output_m1'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(6, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(5, OUTPUT);';
    var code = 'digitalWrite(2,LOW);\nanalogWrite(6,0);\ndigitalWrite(4,LOW);\nanalogWrite(5,0);\n';
    return code;
};

///////////////////////Tank超声波//////////////////////
Blockly.Arduino.forBlock['Tank_sr04'] = function(_, generator) {
    generator.setups_['setup_output_T'] = 'pinMode(12, OUTPUT);';
    generator.setups_['setup_output_E'] = 'pinMode(13, INPUT);';
    var funcName = 'checkdistance';
    var code = 'float' + ' ' + funcName + '() {\n'
        + '  digitalWrite(12, LOW);\n' + '  delayMicroseconds(2);\n'
        + '  digitalWrite(12, HIGH);\n' + '  delayMicroseconds(10);\n'
        + '  digitalWrite(12, LOW);\n'
        + '  float distance = pulseIn(13, HIGH) / 58.00;\n'
        + '  delay(10);\n' + '  return distance;\n'
        + '}\n';
    generator.definitions_[funcName] = code;
    return [funcName + '()', generator.ORDER_ATOMIC];
};

///////////////////////////////舵机2/////////////////////////
Blockly.Arduino.forBlock['Tank_servo2'] = function(_, generator) {

    var value_degree = generator.valueToCode(this, 'angle', generator.ORDER_ATOMIC);

    generator.definitions_['include_pulsewidth'] = 'volatile int pulsewidth;';
    generator.definitions_['var_angle'] = 'void procedure(int myangle) {\n  for (int i = 0; i <= 50; i = i + (1)) {\n    pulsewidth = myangle * 11 + 500;\n    digitalWrite(10,HIGH);\n    delayMicroseconds(pulsewidth);\n    digitalWrite(10,LOW);\n    delay((20 - pulsewidth / 1000));\n  }\n}\n';

    generator.setups_['setup_servo'] = 'pulsewidth = 0;\n  pinMode(10, OUTPUT);';

    var code = 'procedure(' + value_degree + ');\n';
    return code;
};

////////////////////////////////tank_Matrix//////////////////////////
///////////////////////16*8点阵/////////////////////////////
//初始化
Blockly.Arduino.forBlock['tank_Matrix_16and8_Init'] = function(_, generator) {
    var SDA = this.getFieldValue('SDA');
    var SCL = this.getFieldValue('SCL');
    generator.definitions_['1iic_scl'] = '#define IIC_SCL  ' + SCL + '\n';
    generator.definitions_['1iic_sda'] = '#define IIC_SDA  ' + SDA + '\n';
    generator.definitions_['1line'] = 'unsigned char data_line = 0;\n';
    generator.definitions_['1count01'] = 'unsigned char delay_count = 0;\n';
    generator.definitions_['3iic_start'] = 'void IIC_start()\n{\n  digitalWrite(IIC_SCL,LOW);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SDA,HIGH);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SCL,HIGH);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SDA,LOW);\n  delayMicroseconds(3);}\n';
    generator.definitions_['3iic_send'] = 'void IIC_send(unsigned char send_data)\n{\n  for(char i = 0;i < 8;i++)\n  {\n      digitalWrite(IIC_SCL,LOW);\n      delayMicroseconds(3); \n      if(send_data & 0x01)\n      {\n        digitalWrite(IIC_SDA,HIGH);\n      }\n      else\n      {\n        digitalWrite(IIC_SDA,LOW);\n      }\n      delayMicroseconds(3);\n      digitalWrite(IIC_SCL,HIGH); \n      delayMicroseconds(3);\n      send_data = send_data >> 1;\n  }\n}\n';
    generator.definitions_['3iic_end'] = 'void IIC_end()\n{\n  digitalWrite(IIC_SCL,LOW);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SDA,LOW);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SCL,HIGH);\n  delayMicroseconds(3);\n  digitalWrite(IIC_SDA,HIGH);\n  delayMicroseconds(3);}\n';
    generator.setups_['setup_iic'] = '  pinMode(IIC_SCL,OUTPUT);\n  pinMode(IIC_SDA,OUTPUT);\n  digitalWrite(IIC_SCL,LOW);\n  digitalWrite(IIC_SDA,LOW);\n  IIC_start();\n    IIC_send(0x40);\n    IIC_end();\n    IIC_start();\n    IIC_send(0xc0);';

    var code = '';
    return code;
};
//点阵屏显示_显示图案
Blockly.Arduino.forBlock['tank_display_Matrix16and8_DisplayChar'] = function(_, generator) {
    var dotMatrixArray = generator.valueToCode(this, 'LEDArray', generator.ORDER_ASSIGNMENT);

    var code = 'IIC_start();\n    IIC_send(0xc0);\n    for(char i = 0;i < 16;i++)\n    {\n       IIC_send(' + dotMatrixArray + '[i]);\n    }\n    if(++delay_count >= 10)\n    {\n      delay_count = 0;\n      data_line++;\n      if(data_line >= 4)\n      {\n        data_line = 0;\n      }\n    }\n    IIC_end();\n    IIC_start();\n    IIC_send(0x8A);\n    IIC_end();\n';

    return code;
};

//点阵数组
Blockly.Arduino.forBlock['tank_display_Matrix16and8_LedArray'] = function(_, generator) {
    var varName = this.getFieldValue('VAR');
    var a = new Array();
    for (let i = 1; i < 17; i++) {  //有16列
        a[i] = new Array();
        for (let j = 1; j < 9; j++) {  //8行
            a[i][9 - j] = (this.getFieldValue('a' + i + j) == "TRUE") ? 1 : 0;
        }
    }
    var code = '{';
    for (let i = 1; i < 17; i++) {
        var tmp = ""
        for (let j = 1; j < 9; j++) {
            tmp += a[i][j];
        }
        tmp = (parseInt(tmp, 2)).toString(16)
        if (tmp.length == 1) tmp = "0" + tmp;
        code += '0x' + tmp + ((i != 16) ? ',' : '');
    }
    code += '};';
    //generator.definitions_[varName] = "uint8_t " + varName + "[8]=" + code;
    generator.definitions_[varName] = "const uint8_t " + varName + "[16]=" + code;
    return [varName, generator.ORDER_ATOMIC];
};

///////////////显示表情//////////////////////
Blockly.Arduino.forBlock['Tank_matrix'] = function(_, generator) {

    generator.definitions_['1start01'] = 'unsigned char start01[] = {0x01,0x02,0x04,0x08,0x10,0x20,0x40,0x80,0x80,0x40,0x20,0x10,0x08,0x04,0x02,0x01};\n';
    generator.definitions_['2front'] = 'unsigned char front[] = {0x00,0x00,0x00,0x00,0x00,0x24,0x12,0x09,0x12,0x24,0x00,0x00,0x00,0x00,0x00,0x00};\n';
    generator.definitions_['3back'] = 'unsigned char back[] = {0x00,0x00,0x00,0x00,0x00,0x24,0x48,0x90,0x48,0x24,0x00,0x00,0x00,0x00,0x00,0x00};\n';
    generator.definitions_['4left'] = 'unsigned char left[] = {0x00,0x00,0x00,0x00,0x00,0x00,0x44,0x28,0x10,0x44,0x28,0x10,0x44,0x28,0x10,0x00};\n';
    generator.definitions_['5right'] = 'unsigned char right[] = {0x00,0x10,0x28,0x44,0x10,0x28,0x44,0x10,0x28,0x44,0x00,0x00,0x00,0x00,0x00,0x00};\n';
    generator.definitions_['6Stop01'] = 'unsigned char STOP01[] = {0x2E,0x2A,0x3A,0x00,0x02,0x3E,0x02,0x00,0x3E,0x22,0x3E,0x00,0x3E,0x0A,0x0E,0x00};\n';
    generator.definitions_['7clear'] = 'unsigned char clear[] = {0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00};\n';
    generator.definitions_['8triange_full'] = 'unsigned char triangle_full[] = {0x80,0xC0,0xE0,0xF0,0xF8,0xFC,0xFE,0xFF,0xFF,0xFE,0xFC,0xF8,0xF0,0xE0,0xC0,0x80};\n';
    generator.definitions_['9heart'] = 'unsigned char heart_full[] = {0x00,0x00,0x0C,0x1E,0x3F,0x7F,0xFE,0xFC,0xFE,0x7F,0x3F,0x1E,0x0C,0x00,0x00,0x00};\n';
    generator.definitions_['atriange_back'] = 'unsigned char triangle_back[] = {0x01,0x03,0x07,0x0F,0x1F,0x3F,0x7F,0xFF,0xFF,0x7F,0x3F,0x1F,0x0F,0x07,0x03,0x01};\n';
    generator.definitions_['bsmile'] = 'unsigned char smile[] = {0x00,0x00,0x00,0x0C,0x02,0x02,0x0C,0x20,0x20,0x20,0x0C,0x02,0x02,0x0C,0x00,0x00};\n';
    generator.definitions_['csad'] = 'unsigned char sad[] = {0x00,0x00,0x02,0x02,0x02,0x12,0x08,0x04,0x08,0x12,0x22,0x02,0x02,0x00,0x00,0x00};\n';

    var dropdown_type = this.getFieldValue('matrix');
    var code = 'IIC_start();\n    IIC_send(0xc0);\n    for(char i = 0;i < 16;i++)\n    {\n       IIC_send(' + dropdown_type + '[i]);\n    }\n    if(++delay_count >= 10)\n    {\n      delay_count = 0;\n      data_line++;\n      if(data_line >= 4)\n      {\n        data_line = 0;\n      }\n    }\n    IIC_end();\n    IIC_start();\n    IIC_send(0x8A);\n    IIC_end();\n';

    return code;
};

Blockly.Arduino.forBlock['Tank_light'] = function(_, generator) {

    generator.setups_['setup_input_A1'] = 'pinMode(A1, INPUT);';
    generator.setups_['setup_input_A2'] = 'pinMode(A2, INPUT);';
    var dropdown_type = this.getFieldValue('light');

    var code = '';
    if (dropdown_type == "left_light") code += 'analogRead(A1)';
    if (dropdown_type == "right_light") code += 'analogRead(A2)';
    return [code, generator.ORDER_ATOMIC];
};

///////////////////////红外接收///////////////////
Blockly.Arduino.forBlock['Tank_ir_r'] = function(_, generator) {
    var variable = generator.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    generator.definitions_['var_declare' + variable] = 'long ' + variable + ';';
    var branch = generator.statementToCode(this, 'DO');
    generator.definitions_['1include_IRremote'] = '#include <KE_IRremote.h>\n';
    generator.definitions_['2var_ir_recv_3'] = 'IRrecv irrecv(3);\ndecode_results results;\n';
    generator.setups_['setup_ir_recv_3'] = 'irrecv.enableIRIn();';
    var code = "if (irrecv.decode(&results)) {\n"
    code += '  ' + variable + ' = results.value;\n';
    code += branch;
    code += '  irrecv.resume();\n'
    code += '}\n';
    return code;
};

/////////////////////////////////////蓝牙////////////////////////////////////
Blockly.Arduino.forBlock['Tank_bluetooth'] = function(_, generator) {
    var val = this.getFieldValue('VAL');
    var branch = generator.statementToCode(this, 'DO');
    generator.definitions_['0var_bluetooth_' + val] = 'volatile char ' + val + ';';
    generator.setups_['setup_serial_bluetooth'] = 'Serial.begin(9600);';
    var code = 'if (Serial.available())\n{\n  ' + val + ' = Serial.read();\n';
    code += branch;
    code += '}\n';
    return code;
};

////////////////////////////////////Turtle-Car///////////////////////////////////////

/////////////////////////led///////////////////////
Blockly.Arduino.forBlock['turtle_led'] = function(_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    var dropdown_stat = this.getFieldValue('STAT');
    generator.setups_['setup_output_led'] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
    var code = 'digitalWrite(' + dropdown_pin + ',' + dropdown_stat + ');\n';
    return code;
};

////////////////////////////////front//////////////////////////
Blockly.Arduino.forBlock['turtle_FRONT'] = function(_, generator) {

    var value_front1 = generator.valueToCode(this, 'speed_F', generator.ORDER_ATOMIC);
    var value_front2 = generator.valueToCode(this, 'speed_F2', generator.ORDER_ATOMIC);
    //generator.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';//这样会在setup里会重复叠加
    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';

    var code = 'digitalWrite(4,LOW);\nanalogWrite(5,' + value_front1 + ');\ndigitalWrite(2,LOW);\nanalogWrite(6,' + value_front2 + ');\n';
    return code;
};

////////////////////////////////back//////////////////////////
Blockly.Arduino.forBlock['turtle_BACK'] = function(_, generator) {

    var value_back1 = generator.valueToCode(this, 'speed_B', generator.ORDER_ATOMIC);
    var value_back2 = generator.valueToCode(this, 'speed_B2', generator.ORDER_ATOMIC);
    //generator.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';  //这样会在setup里会重复叠加
    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
    var code = 'digitalWrite(4,HIGH);\nanalogWrite(5,' + value_back1 + ');\ndigitalWrite(2,HIGH);\nanalogWrite(6,' + value_back2 + ');\n';
    return code;
};

////////////////////////////////left//////////////////////////
Blockly.Arduino.forBlock['turtle_LEFT'] = function(_, generator) {

    var value_left1 = generator.valueToCode(this, 'speed_L', generator.ORDER_ATOMIC);
    var value_left2 = generator.valueToCode(this, 'speed_L2', generator.ORDER_ATOMIC);
    //generator.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';
    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
    var code = 'digitalWrite(4,LOW);\nanalogWrite(5,' + value_left1 + ');\ndigitalWrite(2,HIGH);\nanalogWrite(6,' + value_left2 + ');\n';
    return code;
};

////////////////////////////////turn_left//////////////////////////
Blockly.Arduino.forBlock['turtle_TURN_LEFT'] = function(_, generator) {
    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
    var code = 'digitalWrite(4,LOW);\nanalogWrite(5,180);\ndigitalWrite(2,LOW);\nanalogWrite(6,100);\n';
    return code;
};

////////////////////////////////right//////////////////////////
Blockly.Arduino.forBlock['turtle_RIGHT'] = function(_, generator) {

    var value_right1 = generator.valueToCode(this, 'speed_R', generator.ORDER_ATOMIC);
    var value_right2 = generator.valueToCode(this, 'speed_R2', generator.ORDER_ATOMIC);
    //generator.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';
    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
    var code = 'digitalWrite(4,HIGH);\nanalogWrite(5,' + value_right1 + ');\ndigitalWrite(2,LOW);\nanalogWrite(6,' + value_right2 + ');\n';
    return code;
};

////////////////////////////////turn_right//////////////////////////
Blockly.Arduino.forBlock['turtle_TURN_RIGHT'] = function(_, generator) {

    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
    var code = 'digitalWrite(4,LOW);\nanalogWrite(5,100);\ndigitalWrite(2,LOW);\nanalogWrite(6,180);\n';
    return code;
};

////////////////////////////////stop//////////////////////////
Blockly.Arduino.forBlock['turtle_STOP'] = function(_, generator) {
    //generator.setups_['setup_back_'] = 'pinMode(4, OUTPUT);\n  pinMode(2, OUTPUT);';
    generator.setups_['setup_output_m1'] = 'pinMode(4, OUTPUT);';
    generator.setups_['setup_output_p1'] = 'pinMode(5, OUTPUT);';
    generator.setups_['setup_output_m2'] = 'pinMode(2, OUTPUT);';
    generator.setups_['setup_output_p2'] = 'pinMode(6, OUTPUT);';
    var code = 'digitalWrite(4,LOW);\nanalogWrite(5,0);\ndigitalWrite(2,LOW);\nanalogWrite(6,0);\n';
    return code;
};

// //////////////////////////红外避障///////////////////////////
// Blockly.Arduino.forBlock['turtle_avoid'] = function() {
//   var dropdown_type = this.getFieldValue('avoid02');
//   generator.setups_['setup_output_left'] = 'pinMode(A0, INPUT);';
//   generator.setups_['setup_output_right'] = 'pinMode(A2, INPUT);';

//   var code = '';
//   if (dropdown_type == "left") code += 'digitalRead(A0)';
//   if (dropdown_type == "right") code += 'digitalRead(A2)';
//   return [code, generator.ORDER_ATOMIC];
// };

///////////////////////turtle超声波//////////////////////
Blockly.Arduino.forBlock['turtle_sr04'] = function(_, generator) {
    generator.setups_['setup_output_T'] = 'pinMode(12, OUTPUT);';
    generator.setups_['setup_output_E'] = 'pinMode(13, INPUT);';
    var funcName = 'checkdistance';
    var code = 'float' + ' ' + funcName + '() {\n'
        + '  digitalWrite(12, LOW);\n' + '  delayMicroseconds(2);\n'
        + '  digitalWrite(12, HIGH);\n' + '  delayMicroseconds(10);\n'
        + '  digitalWrite(12, LOW);\n'
        + '  float distance = pulseIn(13, HIGH) / 58.00;\n'
        + '  delay(10);\n' + '  return distance;\n'
        + '}\n';
    generator.definitions_[funcName] = code;
    return [funcName + '()', generator.ORDER_ATOMIC];
};

//////////////////////////循迹模块///////////////////////////
Blockly.Arduino.forBlock['turtle_track'] = function(_, generator) {
    var dropdown_type = this.getFieldValue('track');
    generator.setups_['setup_output_trackleft'] = 'pinMode(11, INPUT);';
    generator.setups_['setup_output_trackcenter'] = 'pinMode(7, INPUT);';
    generator.setups_['setup_output_trackright'] = 'pinMode(8, INPUT);';

    var code = '';
    if (dropdown_type == "track_left") code += 'digitalRead(11)';
    if (dropdown_type == "track_center") code += 'digitalRead(7)';
    if (dropdown_type == "track_right") code += 'digitalRead(8)';
    return [code, generator.ORDER_ATOMIC];
};

//////////////////music/////////////////////////

///////////////////////////////舵机/////////////////////////
Blockly.Arduino.forBlock['turtle_servo2'] = function(_, generator) {
    //var dropdown_pin = generator.valueToCode(this, 'PIN',generator.ORDER_ATOMIC);
    var value_degree = generator.valueToCode(this, 'angle', generator.ORDER_ATOMIC);
    //value_degree = value_degree.replace('(','').replace(')','')
    //delay_time = delay_time.replace('(','').replace(')','');

    generator.definitions_['1include_Servo'] = '#include <Servo.h>';
    generator.definitions_['2var_servo'] = 'Servo servo_10;';
    generator.setups_['setup_servo'] = 'servo_10.attach(10);';

    var code = 'servo_10.write(' + value_degree + ');\n';
    return code;
};

///////////////////////////////舵机2/////////////////////////
Blockly.Arduino.forBlock['turtle_servo_bak'] = function(_, generator) {

    var value_degree = generator.valueToCode(this, 'angle', generator.ORDER_ATOMIC);

    generator.definitions_['1include_pulsewidth'] = 'volatile int pulsewidth;';
    generator.definitions_['2var_angle'] = 'void procedure(int myangle) {\n  for (int i = 0; i <= 20; i = i + (1)) {\n    pulsewidth = myangle * 11 + 500;\n    digitalWrite(A3,HIGH);\n    delayMicroseconds(pulsewidth);\n    digitalWrite(A3,LOW);\n    delay((20 - pulsewidth / 1000));\n  }\n}\n';

    generator.setups_['setup_servo'] = 'pulsewidth = 0;\n  pinMode(9, OUTPUT);';

    var code = 'procedure(' + value_degree + ');\n';
    return code;
};

//////////////////////////////点阵初始化/////////////////////////////

Blockly.Arduino.forBlock['turtle_matrix_init'] = function(_, generator) {
    var SDA = generator.valueToCode(this, 'PIN1', generator.ORDER_ATOMIC);
    var SCL = generator.valueToCode(this, 'PIN2', generator.ORDER_ATOMIC);
    var addr = generator.valueToCode(this, 'address', generator.ORDER_ATOMIC);

    var matrixName = this.getFieldValue('matrixName');
    generator.definitions_['include_Matrix'] = '#include <Matrix.h>';
    generator.definitions_[matrixName] = 'Matrix ' + matrixName + '(' + SDA + ',' + SCL + ');';
    generator.setups_['setup_' + matrixName] = matrixName + '.begin(' + addr + '); \n';
    var code = matrixName + '.clear();\n';
    return code;
};

////////////////////////////////点阵1////////////////////////////
//执行器_点阵屏显示_显示图案
Blockly.Arduino.forBlock['turtle_matrix1'] = function(_, generator) {
    var matrixName = this.getFieldValue('matrixName');
    var dotMatrixArray = generator.valueToCode(this, 'LEDArray', generator.ORDER_ASSIGNMENT);
    generator.definitions_['LEDArray'] = 'uint8_t  LEDArray[8];';
    //  var code='Matrix_'+SDA+'_'+SCL+'.clear()dotMatrix;\n';
    var code = '';
    code += 'for(int i=0; i<8; i++)\n';
    code += '{\n'
    code += '  LEDArray[i]=' + dotMatrixArray + '[i];\n';
    code += '  for(int j=7; j>=0; j--)\n'
    code += '  {\n'
    code += '    if((LEDArray[i]&0x01)>0)\n';
    code += '    ' + matrixName + '.drawPixel(j, i,1);\n';
    code += '    LEDArray[i] = LEDArray[i]>>1;\n';
    code += '  }  \n'
    code += '}\n'
    code += matrixName + '.write();\n'
    return code;
};
//执行器_点阵屏显示_点阵数组
Blockly.Arduino.forBlock['turtle_matrix2'] = function(_, generator) {
    var varName = this.getFieldValue('VAR');
    var a = new Array();
    for (let i = 1; i < 9; i++) {
        a[i] = new Array();
        for (let j = 1; j < 9; j++) {
            a[i][j] = (this.getFieldValue('a' + i + j) == "TRUE") ? 1 : 0;
        }
    }
    var code = '{';
    for (let i = 1; i < 9; i++) {
        var tmp = ""
        for (let j = 1; j < 9; j++) {
            tmp += a[i][j];
        }
        tmp = (parseInt(tmp, 2)).toString(16)
        if (tmp.length == 1) tmp = "0" + tmp;
        code += '0x' + tmp + ((i != 8) ? ',' : '');
    }
    code += '};';
    //generator.definitions_[this.id] = "byte LedArray_"+clearString(this.id)+"[]="+code;
    generator.definitions_[varName] = "uint8_t " + varName + "[8]=" + code;
    //return ["LedArray_"+clearString(this.id), generator.ORDER_ATOMIC];
    return [varName, generator.ORDER_ATOMIC];
};

//////////////////////////6个图案///////////////////////////
Blockly.Arduino.forBlock['turtle_Matrix_6'] = function(_, generator) {
    generator.definitions_['LEDArray'] = 'uint8_t  LEDArray[8];';
    0x66, 0x99, 0x81, 0x81, 0x42, 0x24, 0x18, 0x00
    generator.definitions_['1smile'] = 'uint8_t matrix_smile[8]={0x3c,0x42,0x99,0xa5,0x81,0xa5,0x42,0x3c};';
    generator.definitions_['1heart'] = 'uint8_t matrix_heart[8]={0x18,0x3c,0x7e,0xff,0xff,0xff,0xe7,0x42};';
    generator.definitions_['2front2'] = 'uint8_t matrix_front2[8]={0x18,0x18,0x18,0x18,0xdb,0x7e,0x3c,0x18};';
    generator.definitions_['3back2'] = 'uint8_t matrix_back2[8]={0x18,0x3c,0x7e,0xdb,0x18,0x18,0x18,0x18};';
    generator.definitions_['4left2'] = 'uint8_t matrix_left2[8]={0x10,0x30,0x60,0xff,0xff,0x60,0x30,0x10};';
    generator.definitions_['5right2'] = 'uint8_t matrix_right2[8]={0x08,0x0c,0x06,0xff,0xff,0x06,0x0c,0x08};';
    generator.definitions_['6stop2'] = 'uint8_t matrix_stop2[8]={0x00,0x7e,0x42,0x5a,0x5a,0x42,0x7e,0x00};';

    var dropdown_type = this.getFieldValue('display');
    var code = 'for(int i=0; i<8; i++)\n  {\n    LEDArray[i]=' + dropdown_type + '[i];\n    for(int j=7; j>=0; j--)\n    {\n      if((LEDArray[i]&0x01)>0)\n      myMatrix.drawPixel(j, i,1);\n      LEDArray[i] = LEDArray[i]>>1;\n    }\n  }\n  myMatrix.write();';

    return code;
};

////////////////////////清屏/////////////////////////////
Blockly.Arduino.forBlock['turtle_Matrix_CLEAR'] = function() {
    var matrixName = this.getFieldValue('matrixName');
    var code = matrixName + '.clear();\n'
    code += matrixName + '.write();\n';
    return code;
};

///////////////////////红外接收///////////////////
Blockly.Arduino.forBlock['turtle_ir_r'] = function(_, generator) {
    var variable = generator.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    generator.definitions_['var_declare' + variable] = 'long ' + variable + ';';
    var branch = generator.statementToCode(this, 'DO');
    generator.definitions_['1include_IRremote'] = '#include <KE_IRremote.h>\n';
    generator.definitions_['2var_ir_recv_A1_turtle'] = 'IRrecv irrecv(A1);\ndecode_results results;\n';
    generator.setups_['setup_ir_recv_A1'] = 'irrecv.enableIRIn();';
    var code = "if (irrecv.decode(&results)) {\n"
    code += '  ' + variable + ' = results.value;\n';
    code += branch;
    code += '  irrecv.resume();\n'
    code += '}\n';
    return code;
};

/////////////////////////////////////蓝牙////////////////////////////////////
Blockly.Arduino.forBlock['turtle_bluetooth'] = function(_, generator) {
    var val = this.getFieldValue('VAL');
    var branch = generator.statementToCode(this, 'DO');
    generator.definitions_['0var_bluetooth_' + val] = 'volatile char ' + val + ';';
    generator.setups_['setup_serial_bluetooth'] = 'Serial.begin(9600);';
    var code = 'if (Serial.available())\n{\n  ' + val + ' = Serial.read();\n';
    code += branch;
    code += '}\n';
    return code;
};

/////////////////////////////////OTTO/////////////////////////
// 'use strict';
// goog.provide('generator.ottotop-car');
// goog.require('Blockly.Arduino');

////////////////////////////////OTTO_init//////////////////////////
Blockly.Arduino.forBlock['OTTO_init'] = function(_, generator) {

    var value_YL = generator.valueToCode(this, 'YL', generator.ORDER_ATOMIC);
    var value_YR = generator.valueToCode(this, 'YR', generator.ORDER_ATOMIC);
    var value_RL = generator.valueToCode(this, 'RL', generator.ORDER_ATOMIC);
    var value_RR = generator.valueToCode(this, 'RR', generator.ORDER_ATOMIC);

    generator.definitions_['1init1'] = '#include <Servo.h>\n#include <Oscillator.h>\n#include <EEPROM.h>\n#define N_SERVOS 4\n//-- First step: Configure the pins where the servos are attached\n\n#define EEPROM_TRIM false\n// Activate to take callibration data from internal memory//调整机械角度\n#define TRIM_RR ' + value_RR + '  //right02\n#define TRIM_RL ' + value_RL + '  //left02\n#define TRIM_YR ' + value_YR + '  //right01\n#define TRIM_YL ' + value_YL + '  //left01\n#define PIN_RR 5\n#define PIN_RL 4\n#define PIN_YR 3\n#define PIN_YL 2\n#define INTERVALTIME 10.0 \nOscillator servo[N_SERVOS];\n#include "SR04.h"\n#define TRIG_PIN 6\n#define ECHO_PIN 7\nSR04 sr04 = SR04(ECHO_PIN,TRIG_PIN);\nlong a;\nint i = 0;\nint val = 0;\nvoid goingUp(int tempo);\nvoid drunk (int tempo);\nvoid noGravity(int tempo);\nvoid kickLeft(int tempo);\nvoid kickRight(int tempo);\nvoid run(int steps, int T=500);\nvoid walk(int steps, int T=1000);\nvoid backyard(int steps, int T=3000);\nvoid backyardSlow(int steps, int T=5000);\nvoid turnLeft(int steps, int T=3000);\nvoid turnRight(int steps, int T=3000);\nvoid moonWalkLeft(int steps, int T=1000);\nvoid moonWalkRight(int steps, int T=1000);\nvoid crusaito(int steps, int T=1000);\nvoid swing(int steps, int T=1000);\nvoid upDown(int steps, int T=1000);\nvoid flapping(int steps, int T=1000);\nint t=495;\ndouble pause=0;\n';
    generator.setups_['setup_init1'] = 'Serial.begin(9600);\n  servo[0].attach(PIN_RR);\n  servo[1].attach(PIN_RL);\n  servo[2].attach(PIN_YR);\n  servo[3].attach(PIN_YL);\n  int trim;\n  if(EEPROM_TRIM){\n    for(int x=0;x<4;x++){\n      trim=EEPROM.read(x);\n      if(trim>128)trim=trim-256;\n      Serial.print("TRIM ");\n      Serial.print(x);\n      Serial.print(" en ");\n      Serial.println(trim);\n      servo[x].SetTrim(trim);\n    }\n  }\n  else{\n    servo[0].SetTrim(TRIM_RR);\n    servo[1].SetTrim(TRIM_RL);\n    servo[2].SetTrim(TRIM_YR);\n    servo[3].SetTrim(TRIM_YL);\n  }\n  for(int i=0;i<4;i++) servo[i].SetPosition(90);';
    generator.definitions_['2oscillate1'] = 'void oscillate(int A[N_SERVOS], int O[N_SERVOS], int T, double phase_diff[N_SERVOS]){\n  for (int i=0; i<4; i++) {\n    servo[i].SetO(O[i]);\n    servo[i].SetA(A[i]);\n    servo[i].SetT(T);\n    servo[i].SetPh(phase_diff[i]);\n  }\n  double ref=millis();\n   for (double x=ref; x<T+ref; x=millis()){\n     for (int i=0; i<4; i++){\n        servo[i].refresh();\n     }\n  }\n}\n';
    generator.definitions_['3moveNServos_001'] = 'unsigned long final_time;\nunsigned long interval_time;\nint oneTime;\nint iteration;\nfloat increment[N_SERVOS]; \nint oldPosition[]={90,90,90,90};\n';
    generator.definitions_['4moveNServos'] = 'void moveNServos(int time, int  newPosition[]){\n  for(int i=0;i<N_SERVOS;i++) increment[i] = ((newPosition[i])-oldPosition[i])/(time/INTERVALTIME);\n  final_time =  millis() + time; \n  iteration = 1; \n  while(millis() < final_time){ //Javi del futuro cambia esto  \n      interval_time = millis()+INTERVALTIME;  \n      oneTime=0;\n      while(millis()<interval_time){\n          if(oneTime<1){ \n              for(int i=0;i<N_SERVOS;i++){\n                  servo[i].SetPosition(oldPosition[i] + (iteration * increment[i]));\n              }\n              iteration++;\n              oneTime++;\n          }\n      }\n  }   \n\n  for(int i=0;i<N_SERVOS;i++){  \n    oldPosition[i] = newPosition[i];\n  }   \n}\n';
    var code = '';
    return code;
};

////////////////////////////////front//////////////////////////
Blockly.Arduino.forBlock['otto_FRONT'] = function(_, generator) {
    var value_steps = generator.valueToCode(this, 'steps', generator.ORDER_ATOMIC);
    var value_speed1 = generator.valueToCode(this, 'speed1', generator.ORDER_ATOMIC);
    generator.definitions_['1walk'] = ' void walk(int steps, int T)\n{\n  int A[4]= {15, 15, 30, 30};\n  int O[4] = {0, 0, 0, 0};\n  double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(90), DEG2RAD(90)};\n  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);\n}\n';
    var code = 'walk(' + value_steps + ',' + value_speed1 + '*t);\n';
    return code;
};

////////////////////////////////back//////////////////////////
Blockly.Arduino.forBlock['otto_BACK'] = function(_, generator) {
    var value_steps = generator.valueToCode(this, 'steps', generator.ORDER_ATOMIC);
    var value_speed1 = generator.valueToCode(this, 'speed1', generator.ORDER_ATOMIC);
    generator.definitions_['1back1'] = ' void backyard(int steps, int T)\n{\n  int A[4]= {15, 15, 30, 30};\n  int O[4] = {0, 0, 0, 0};\n  double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(-90), DEG2RAD(-90)};\n  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);\n}\n';
    var code = 'backyard(' + value_steps + ',' + value_speed1 + '*t);\n';
    return code;
};

////////////////////////////////left//////////////////////////
Blockly.Arduino.forBlock['otto_LEFT'] = function(_, generator) {
    var value_steps = generator.valueToCode(this, 'steps', generator.ORDER_ATOMIC);
    var value_speed1 = generator.valueToCode(this, 'speed1', generator.ORDER_ATOMIC);
    generator.definitions_['1left1'] = ' void turnLeft(int steps, int T)\n{\n  int A[4]= {20, 20, 10, 30};\n  int O[4] = {0, 0, 0, 0};\n  double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(90), DEG2RAD(90)};\n  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);\n}\n';
    var code = 'turnLeft(' + value_steps + ',' + value_speed1 + '*t);\n';
    return code;
};

////////////////////////////////right//////////////////////////
Blockly.Arduino.forBlock['otto_RIGHT'] = function(_, generator) {
    var value_steps = generator.valueToCode(this, 'steps', generator.ORDER_ATOMIC);
    var value_speed1 = generator.valueToCode(this, 'speed1', generator.ORDER_ATOMIC);
    generator.definitions_['1turnRight'] = ' void turnRight(int steps, int T)\n{\n  int A[4]= {20, 20, 30, 10};\n  int O[4] = {0, 0, 0, 0};\n  double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(90), DEG2RAD(90)};\n  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);\n}\n';
    var code = 'turnRight(' + value_steps + ',' + value_speed1 + '*t);\n';
    return code;
};

////////////////////////////////stop//////////////////////////
Blockly.Arduino.forBlock['otto_STOP'] = function(_, generator) {
    generator.definitions_['1Stop'] = 'void Stop()\n{\n  for(int i=0;i<4;i++) servo[i].SetPosition(90);\n}\n';
    var code = 'Stop();\n';
    return code;
};

////////////////////////////////moon_left//////////////////////////
Blockly.Arduino.forBlock['otto_moon_LEFT'] = function(_, generator) {
    var value_steps = generator.valueToCode(this, 'steps', generator.ORDER_ATOMIC);
    var value_speed1 = generator.valueToCode(this, 'speed1', generator.ORDER_ATOMIC);
    generator.definitions_['moonLEFT'] = ' void moonLEFT(int steps, int T)\n{\n  int A[4]= {25, 25, 0, 0};\n  int O[4] = {-15, 15, 0, 0};\n  double phase_diff[4] = {DEG2RAD(0), DEG2RAD(180 - 120), DEG2RAD(90), DEG2RAD(90)};\n  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);\n}\n';
    var code = 'moonLEFT(' + value_steps + ',' + value_speed1 + '*t);\n';
    return code;
};

////////////////////////////////moon_right//////////////////////////
Blockly.Arduino.forBlock['otto_moon_RIGHT'] = function(_, generator) {
    var value_steps = generator.valueToCode(this, 'steps', generator.ORDER_ATOMIC);
    var value_speed1 = generator.valueToCode(this, 'speed1', generator.ORDER_ATOMIC);
    generator.definitions_['moonRight'] = ' void moonRight(int steps, int T)\n{\n  int A[4]= {25, 25, 0, 0};\n  int O[4] = {-15, 15, 0, 0};\n  double phase_diff[4] = {DEG2RAD(0), DEG2RAD(180 + 120), DEG2RAD(90), DEG2RAD(90)};\n  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);\n}\n';
    var code = 'moonRight(' + value_steps + ',' + value_speed1 + '*t);\n';
    return code;
};

////////////////////////////////otto_kickLeft//////////////////////////
Blockly.Arduino.forBlock['otto_kickLeft'] = function(_, generator) {
    generator.definitions_['kickLeft'] = 'void kickLeft(int tempo){\n  for(int i=0;i<4;i++) servo[i].SetPosition(90);\n  delay(tempo);\n  servo[0].SetPosition(50); //pie derecho\n  servo[1].SetPosition(70); //pie izquiero\n  delay(tempo);\n  servo[0].SetPosition(80); //pie derecho\n  servo[1].SetPosition(70); //pie izquiero\n  delay(tempo/4);\n  servo[0].SetPosition(30); //pie derecho\n  servo[1].SetPosition(70); //pie izquiero\n  delay(tempo/4);\n  servo[0].SetPosition(80); //pie derecho\n  servo[1].SetPosition(70); //pie izquiero\n  delay(tempo/4);\n  servo[0].SetPosition(30); //pie derecho\n  servo[1].SetPosition(70); //pie izquiero\n  delay(tempo/4);\n  servo[0].SetPosition(80); //pie derecho\n  servo[1].SetPosition(70); //pie izquiero\n  delay(tempo);\n}\n';
    var code = 'kickLeft(t);\n';
    return code;
};

////////////////////////////////otto_kickright//////////////////////////
Blockly.Arduino.forBlock['otto_kickright'] = function(_, generator) {
    generator.definitions_['kickright'] = 'void kickRight(int tempo){\nfor(int i=0;i<4;i++) servo[i].SetPosition(90);\n  delay(tempo);\n  servo[0].SetPosition(110); //pie derecho\n  servo[1].SetPosition(130); //pie izquiero\n  delay(tempo);\n  servo[0].SetPosition(110); //pie derecho\n  servo[1].SetPosition(100); //pie izquiero\n  delay(tempo/4);\n  servo[0].SetPosition(110); //pie derecho\n  servo[1].SetPosition(150); //pie izquiero\n  delay(tempo/4);\n  servo[0].SetPosition(110); //pie derecho\n  servo[1].SetPosition(80); //pie izquiero\n  delay(tempo/4);\n  servo[0].SetPosition(110); //pie derecho\n  servo[1].SetPosition(150); //pie izquiero\n  delay(tempo/4);\n  servo[0].SetPosition(110); //pie derecho\n  servo[1].SetPosition(100); //pie izquiero\n  delay(tempo);\n}\n';
    var code = 'kickRight(t);\n';
    return code;
};

////////////////////////////////otto_drunk//////////////////////////
Blockly.Arduino.forBlock['otto_drunk'] = function(_, generator) {
    var value_speed1 = generator.valueToCode(this, 'speed1', generator.ORDER_ATOMIC);
    generator.definitions_['drunk'] = 'void drunk (int tempo){\n  pause=millis();\n  int move1[] = {60,70,90,90};\n  int move2[] = {110,120,90,90};\n  int move3[] = {60,70,90,90};\n  int move4[] = {110,120,90,90};\n  moveNServos(tempo*0.235,move1);\n  moveNServos(tempo*0.235,move2);\n  moveNServos(tempo*0.235,move3);\n  moveNServos(tempo*0.235,move4);\n  while(millis()<(pause+tempo));\n}\n';
    var code = 'drunk(' + value_speed1 + '*t);\n';
    return code;
};

////////////////////////////////otto_noGravity//////////////////////////
Blockly.Arduino.forBlock['otto_noGravity'] = function(_, generator) {
    generator.definitions_['noGravity'] = 'void noGravity(int tempo){\n  int move1[4] = {120,140,90,90};\n  int move2[4] = {140,140,90,90};\n  int move3[4] = {120,140,90,90};\n  int move4[4] = {90,90,90,90};\n  for(int i=0;i<4;i++) servo[i].SetPosition(90);\n  for(int i=0;i<N_SERVOS;i++) oldPosition[i]=90;\n  moveNServos(tempo*2,move1);\n  moveNServos(tempo*2,move2);\n  delay(tempo*2);\n  moveNServos(tempo*2,move3);\n  moveNServos(tempo*2,move4);\n}\n';
    var code = 'noGravity(2*t);\n';
    return code;
};

////////////////////////////////otto_crusaito//////////////////////////
Blockly.Arduino.forBlock['otto_crusaito'] = function(_, generator) {
    var value_steps = generator.valueToCode(this, 'steps', generator.ORDER_ATOMIC);
    var value_speed1 = generator.valueToCode(this, 'speed1', generator.ORDER_ATOMIC);
    generator.definitions_['crusaito'] = 'void crusaito(int steps, int T){\n    int A[4]= {25, 25, 30, 30};\n    int O[4] = {- 15, 15, 0, 0};\n    double phase_diff[4] = {DEG2RAD(0), DEG2RAD(180 + 120), DEG2RAD(90), DEG2RAD(90)}; \n    for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);\n}\n';
    var code = 'crusaito(' + value_steps + ',' + value_speed1 + '*t);\n';
    return code;
};

////////////////////////////////otto_segunda1//////////////////////////
Blockly.Arduino.forBlock['otto_segunda1'] = function(_, generator) {
    generator.definitions_['segunda1'] = 'void segunda1() \n{\nint move1[4] = {90,90,80,100};\n  int move2[4] = {90,90,100,80};\n  int move3[4] = {90,90,80,100};\n  int move4[4] = {90,90,100,80};\n     pause=millis();\n      moveNServos(t*0.15,move1);\n      moveNServos(t*0.15,move2);\n      moveNServos(t*0.15,move3);\n      moveNServos(t*0.15,move4);\n      while(millis()<(pause+t));\n    }\n';
    var code = 'segunda1();\n';
    return code;
};

////////////////////////////////otto_jump//////////////////////////
Blockly.Arduino.forBlock['otto_jump'] = function(_, generator) {
    generator.definitions_['jump'] = 'void jump() \n{\nint move5[4] = {70,110,80,100};\n  int move6[4] = {70,110,100,80};\n  int move7[4] = {90,90,80,100};\n  int move8[4] = {90,90,100,80};\npause=millis();\n    moveNServos(t*0.15,move5);\n    moveNServos(t*0.15,move6);\n    moveNServos(t*0.15,move7);\n    moveNServos(t*0.15,move8);\n    while(millis()<(pause+t));\n  }\n';
    var code = 'jump();\n';
    return code;
};

////////////////////////////////otto_crusaito//////////////////////////
Blockly.Arduino.forBlock['otto_swing'] = function(_, generator) {
    var value_steps = generator.valueToCode(this, 'steps', generator.ORDER_ATOMIC);
    var value_speed1 = generator.valueToCode(this, 'speed1', generator.ORDER_ATOMIC);
    generator.definitions_['swing'] = 'void swing(int steps, int T){\n    int A[4]= {15, 15, 8, 8};\n    int O[4] = {-A[0], A[1], 0, 0};\n    double phase_diff[4] = {DEG2RAD(0), DEG2RAD(180), DEG2RAD(90), DEG2RAD(-90)};\n    for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);\n}\n';
    var code = 'swing(' + value_steps + ',' + value_speed1 + '*t);\n';
    return code;
};

////////////////////////////////otto_swing//////////////////////////
Blockly.Arduino.forBlock['otto_flapping'] = function(_, generator) {
    var value_steps = generator.valueToCode(this, 'steps', generator.ORDER_ATOMIC);
    var value_speed1 = generator.valueToCode(this, 'speed1', generator.ORDER_ATOMIC);
    generator.definitions_['flapping'] = 'void flapping(int steps, int T){\n    int A[4]= {25, 25, 0, 0};\n    int O[4] = {-15, 15, 0, 0};\n    double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(90), DEG2RAD(90)};\n    for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);\n}\n';

    var code = 'flapping(' + value_steps + ',' + value_speed1 + '*t);\n';
    return code;
};

////////////////////////////////otto_goingUp//////////////////////////
Blockly.Arduino.forBlock['otto_goingUp'] = function(_, generator) {
    var value_speed1 = generator.valueToCode(this, 'speed1', generator.ORDER_ATOMIC);
    generator.definitions_['goingUp'] = 'void goingUp(int tempo){\n      pause=millis();\n      for(int i=0;i<4;i++) servo[i].SetPosition(90);\n      delay(tempo);\n      servo[0].SetPosition(80);\n      servo[1].SetPosition(100);\n      delay(tempo);\n      servo[0].SetPosition(70);\n      servo[1].SetPosition(110);\n      delay(tempo);\n      servo[0].SetPosition(60);\n      servo[1].SetPosition(120);\n      delay(tempo);\n      servo[0].SetPosition(50);\n      servo[1].SetPosition(130);\n      delay(tempo);\n      while(millis()<pause+8*t);\n}\n';
    var code = 'goingUp(' + value_speed1 + '*t);\n';
    return code;
};

////////////////////////////////otto_dance//////////////////////////

//舵机
Blockly.Arduino.forBlock['otto_servo'] = function(_, generator) {
    var dropdown_pin = generator.valueToCode(this, 'PIN', generator.ORDER_ATOMIC);
    var value_degree = generator.valueToCode(this, 'angle', generator.ORDER_ATOMIC);
    //value_degree = value_degree.replace('(','').replace(')','')
    var delay_time = generator.valueToCode(this, 'time', generator.ORDER_ATOMIC) || '0'
    //delay_time = delay_time.replace('(','').replace(')','');

    generator.definitions_['1include_Servo'] = '#include <Servo.h>';
    generator.definitions_['2var_servo' + dropdown_pin] = 'Servo servo_' + dropdown_pin + ';';
    generator.setups_['setup_servo_' + dropdown_pin] = 'servo_' + dropdown_pin + '.attach(' + dropdown_pin + ');';

    var code = 'servo_' + dropdown_pin + '.write(' + value_degree + ');\n' + 'delay(' + delay_time + ');\n';
    return code;
};

///////////////////////otto超声波//////////////////////
Blockly.Arduino.forBlock['otto_sr04'] = function(_, generator) {
    generator.setups_['setup_output_T'] = 'pinMode(6, OUTPUT);';
    generator.setups_['setup_output_E'] = 'pinMode(7, INPUT);';
    var funcName = 'checkdistance';
    var code = 'float' + ' ' + funcName + '() {\n'
        + '  digitalWrite(6, LOW);\n' + '  delayMicroseconds(2);\n'
        + '  digitalWrite(6, HIGH);\n' + '  delayMicroseconds(10);\n'
        + '  digitalWrite(6, LOW);\n'
        + '  float distance = pulseIn(7, HIGH) / 58.00;\n'
        + '  delay(10);\n' + '  return distance;\n'
        + '}\n';
    generator.definitions_[funcName] = code;
    return [funcName + '()', generator.ORDER_ATOMIC];
};

/////////////////////////////////////蓝牙////////////////////////////////////
Blockly.Arduino.forBlock['otto_bluetooth'] = function(_, generator) {
    var val = this.getFieldValue('VAL');
    var branch = generator.statementToCode(this, 'DO');
    //var dropdown_pin1 = generator.valueToCode(this, 'PIN1', generator.ORDER_ATOMIC);
    //var dropdown_pin2 = generator.valueToCode(this, 'PIN2', generator.ORDER_ATOMIC);

    //generator.definitions_['include_Soft'] = '#include <SoftwareSerial.h>\n';
    //generator.definitions_['mySerial'] = 'SoftwareSerial mySerial(0, 1);\n';
        generator.definitions_['0var_bluetooth_' + val] = 'volatile char ' + val + ';';
    generator.setups_['setup_serial_bluetooth'] = 'Serial.begin(9600);';

    var code = 'if (Serial.available())\n{\n  ' + val + ' = Serial.read();\n';
    code += branch;
    code += '}\n';
    return code;
};
})();