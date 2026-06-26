(() => {
    goog.require('Blockly.Lang');
    const { En } = Blockly.Lang;

//坦克车
En.tank_front = 'front';
En.tank_back = 'back';
En.tank_left = 'left';
En.tank_turn_left = 'turn_left';
En.tank_right = 'right';
En.tank_turn_right = 'turn_right';
En.tank_stop = 'stop';
En.tank_speed = 'speed';
En.left_light_sensor = 'left_light_sensor';
En.right_light_sensor = 'right_light_sensor';
En.tank_choose = 'choose';

En.tank_L_ir_a = 'left_infrared_avoid';
En.tank_R_ir_a = 'right_infrared_avoid';
En.tank_L_track = 'left_tracking';
En.tank_C_track = 'center_tracking';
En.tank_R_track = 'right_tracking';

En.tank_sr01 = 'ultrasonic';
En.tank_buzzer = 'buzzer';
En.tank_notone = 'No_Tone';
En.tank_play_music = 'play_music';
En.tank_Ode_to_joy = 'Ode_to_Joy';
En.tank_birthday = 'birthday';
En.tank_fre = 'frequency';

En.MIXLY_Tank_SERVO = 'servo';
En.MIXLY_Tank_matrix = 'Matrix_init';

En.tank_ir_R = 'infrared_module';
En.tank_ir_RD = 'infrared_receive';
En.tank_Bluetooth = 'BLE_module';
En.tank_Bluetooth_rec = 'BLE_receive';

En.tank_on_off = 'electrical level';
En.tank_high = 'HIGH';
En.tank_low = 'LOW';


//乌龟车
En.turtle_front = 'front';
En.turtle_back = 'back';
En.turtle_left = 'left';
En.turtle_turn_left = 'turn_left';
En.turtle_right = 'right';
En.turtle_turn_right = 'turn_right';
En.turtle_stop = 'stop';
En.turtle_speed = 'speed';

En.turtle_L_ir_a = 'left_infrared_avoid';
En.turtle_R_ir_a = 'right_infrared_avoid';
En.turtle_L_track = 'left_tracking';
En.turtle_C_track = 'center_tracking';
En.turtle_R_track = 'right_tracking';

En.turtle_sr01 = 'ultrasonic';
En.turtle_buzzer = 'buzzer';
En.turtle_notone = 'No_Tone';
En.turtle_play_music = 'play_music';
En.turtle_Ode_to_joy = 'Ode_to_Joy';
En.turtle_birthday = 'birthday';
En.turtle_fre = 'frequency';

En.MIXLY_turtle_SERVO = 'servo';
En.MIXLY_turtle_matrix = 'Matrix_init';

En.turtle_ir_R = 'infrared_module';
En.turtle_ir_RD = 'infrared_receive';
En.turtle_Bluetooth = 'BLE_module';
En.turtle_Bluetooth_rec = 'BLE_receive';

En.turtle_on_off = 'electrical level';
En.turtle_high = 'HIGH';
En.turtle_low = 'LOW';

//2wd桌面小车
En.Desk_on_off = 'electrical level';

En.Desk_front = 'front';
En.Desk_back = 'back';
En.Desk_left = 'left';
En.Desk_turn_left = 'turn_left';
En.Desk_right = 'right';
En.Desk_turn_right = 'turn_right';
En.Desk_stop = 'stop';
En.Desk_speed = 'speed';

En.Desk_L_ir_a = 'left_infrared_avoid';
En.Desk_R_ir_a = 'right_infrared_avoid';
En.Desk_L_track = 'left_tracking';
En.Desk_C_track = 'center_tracking';
En.Desk_R_track = 'right_tracking';

En.Desk_sr01 = 'ultrasonic';
En.Desk_buzzer = 'buzzer';
En.Desk_notone = 'No_Tone';
En.Desk_play_music = 'play_music';
En.Desk_Ode_to_joy = 'Ode_to_Joy';
En.Desk_birthday = 'birthday';
En.Desk_fre = 'frequency';
En.Desk_ir_R = 'infrared_module';
En.Desk_ir_RD = 'infrared_receive';
En.Desk_Bluetooth = 'BLE_module';
En.Desk_Bluetooth_rec = 'BLE_receive';

//4wd小车
En.ks4wd_front = 'front';
En.ks4wd_back = 'back';
En.ks4wd_left = 'left';
En.ks4wd_turn_left = 'turn_left';
En.ks4wd_right = 'right';
En.ks4wd_turn_right = 'turn_right';
En.ks4wd_stop = 'stop';
En.ks4wd_speed = 'speed';

En.ks4wd_choose = 'choose';

En.ks4wd_L_ir_a = 'left_infrared_avoid';
En.ks4wd_R_ir_a = 'right_infrared_avoid';
En.ks4wd_L_track = 'left_tracking';
En.ks4wd_C_track = 'center_tracking';
En.ks4wd_R_track = 'right_tracking';

En.ks4wd_sr01 = 'ultrasonic';
En.ks4wd_buzzer = 'buzzer';
En.ks4wd_notone = 'No_Tone';
En.ks4wd_play_music = 'play_music';
En.ks4wd_Ode_to_joy = 'Ode_to_Joy';
En.ks4wd_birthday = 'birthday';
En.ks4wd_fre = 'frequency';

En.MIXLY_ks4wd_SERVO = 'servo';
En.MIXLY_ks4wd_matrix = 'Matrix_init';

En.ks4wd_ir_R = 'infrared_module';
En.ks4wd_ir_RD = 'infrared_receive';
En.ks4wd_Bluetooth = 'BLE_module';
En.ks4wd_Bluetooth_rec = 'BLE_receive';

En.ks4wd_on_off = 'electrical level';
En.ks4wd_high = 'HIGH';
En.ks4wd_low = 'LOW';

En.ksCar_forward = 'Move forward';
En.ksCar_backward = 'Move backward';
En.ksCar_left = 'Left rotation';
En.ksCar_right = 'Right rotation';

//otto_frog
En.otto_init = 'Frog_init';
En.otto_YL = 'Adjust the left leg';
En.otto_YR = 'Adjust the right leg';
En.otto_RL = 'Adjust the left foot';
En.otto_RR = 'Adjust the right foot';
En.otto_steps = 'step number';
En.otto_speed = 'speed';
En.otto_left_moonwalk = 'left_moonwalk';
En.otto_right_moonwalk = 'right_moonwalk';
En.otto_left_galop = 'left_galop';
En.otto_right_galop = 'right_galop';
En.otto_drunk = 'drunk';
En.otto_noGravity = 'noGravity';
En.otto_crusaito = 'crusaito';
En.otto_friction_pace = 'friction_pace';
En.otto_jump = 'jump jump jump';
En.otto_flapping = 'flapping';
En.otto_swing = 'swing';
En.otto_goingUp = 'goingUp';

En.otto_front = 'front';
En.otto_back = 'back';
En.otto_left = 'left';
En.otto_turn_left = 'turn_left';
En.otto_right = 'right';
En.otto_turn_right = 'turn_right';
En.otto_stop = 'Keep standing';
En.otto_speed = 'speed';

En.otto_L_ir_a = 'left_infrared_avoid';
En.otto_R_ir_a = 'right_infrared_avoid';
En.otto_L_track = 'left_tracking';
En.otto_C_track = 'center_tracking';
En.otto_R_track = 'right_tracking';

En.otto_servo = 'Servo';
En.otto_angle = 'angle';
En.otto_sr01 = 'ultrasonic';
En.otto_buzzer = 'buzzer';
En.otto_notone = 'No_Tone';
En.otto_play_music = 'play_music';
En.otto_Ode_to_joy = 'Ode_to_Joy';
En.otto_birthday = 'birthday';
En.otto_fre = 'frequency';
En.otto_ir_R = 'infrared_module';
En.otto_ir_RD = 'infrared_receive';
En.otto_Bluetooth = 'BLE_module';
En.otto_Bluetooth_rec = 'BLE_receive';






//keyes brick
En.ke_red_led = 'red_led';
En.ke_dual_led = 'dual_led';
En.ke_yellow_led = 'yellow_led';
En.ke_white_led = 'white_led';
En.ke_3W = '3W_led';
En.ke_led_green = 'green_led';

En.ke_msgb_led1 = 'The magic light cup_LED';
En.ke_msgb_sor1 = 'The magic light cup sensor';
En.ke_shouzhi1 = 'Finger heart rate';
En.ke_jg1 = 'laser';

En.Kids_anologWrite = 'anologWrite';
En.Kids_value = 'value';


En.Kids_ON = 'HIGH';
En.Kids_OFF = 'LOW';
En.Kids_anologWrite = 'analogWrite';

En.Kids_iic = 'PIN：SDA# A4, SCL# A5';
En.Kids_rot = 'button_PIN';
En.Kids_rot_count = 'count';
En.Kids_bits = 'string';
En.Kids_pin = 'PIN';

En.Kids_iic_pin = 'PIN #SDA:A4,#SCL:A5';
En.Kids_lcd_p = 'LCD';
En.Kids_shilihua = 'Instantiation name';
En.Kids_size = 'font size';

En.Kids_printcount = 'Display digits';
En.ke_string = 'display character';

En.Kids_lcd_left = 'LCD_Scroll to the left';
En.Kids_lcd_right = 'LCD_Scroll to the right';

En.ke_TM1637 = '4 digit 8-segment LED digital';
En.ke_ws = 'digit';
En.ke_begin = 'Display position';
En.ke_fill0 = 'add 0?';
En.ke_light = 'Brightness0~7';
En.ke_XY = 'Show or hide';
En.ke_L = 'left';
En.ke_R = 'right';
En.ke_MH = 'colon';
En.ke_value = 'value';

En.ke_oled_init = 'OLED_init';
En.ke_oled_piexl = 'OLED_point coordinates';
En.ke_oled_x = 'column';
En.ke_oled_y = 'row';
En.ke_oled_cong = 'from';
En.ke_oled_dao = 'to';
En.ke_oled_kai = 'initial point';
En.ke_oled_kuan = 'width';
En.ke_oled_chang = 'height';
En.ke_oled_angle1 = 'angle1';
En.ke_oled_angle2 = 'angle2';
En.ke_oled_angle3 = 'angle3';

En.ke_oled_line = 'OLED_line';
En.ke_oled_rect = 'OLED_hollow rectangle';
En.ke_oled_fil_lrect = 'OLED_solid rectangle';
En.ke_oled_r_rect = 'OLED_hollow rounded rectangle';
En.ke_oled_r_fill_rect = 'OLED_solid rounded rectangle';
En.ke_oled_circle = 'OLED_hollow circle  Center coordinates';
En.ke_oled_circle_radius = 'Circle radius';
En.ke_oled_radius = 'Corner radius';
En.ke_oled_fill_circle = 'OLED_solid circle  Center coordinates';
En.ke_oled_triangle = 'OLED_hollow triangle';
En.ke_oled_fill_triangle = 'OLED_solid triangle';
En.ke_oled_string1 = 'OLED_displays a string or number';
En.ke_oled_weizhi = 'display position';
En.ke_oled_print = 'display';
En.ke_oled_clear = 'OLED_clear';


En.MIXLY_ke_LED1 = 'Piranha LED';
En.MIXLY_ke_LED2 = 'Red Piranha LED';
En.MIXLY_ke_LED3 = 'Green Piranha LED';
En.MIXLY_ke_LED4 = 'Yellow Piranha LED';
En.MIXLY_ke_LED5 = 'Blue Piranha LED';
En.MIXLY_ke_LED01 = 'Straw cap LED';
En.MIXLY_ke_LED02 = 'Red Straw cap LED';
En.MIXLY_ke_LED03 = 'Green Straw cap LED';
En.MIXLY_ke_LED04 = 'Yellow straw cap LED';
En.MIXLY_ke_LED05 = 'Blue Straw cap LED';
En.MIXLY_ke_QCD = 'Colorful lights';
En.MIXLY_ke_RGB = 'RGB';

En.MIXLY_ke_BUZZER1 = 'Active buzzer';
En.MIXLY_ke_BUZZER2 = 'Passive Buzzer';
En.MIXLY_ke_RELAY = 'Relay';
En.MIXLY_ke_MOTOR = 'Fan';
En.MIXLY_ke_MOTOR01 = 'geared motor';
En.MIXLY_ke_SERVO = 'servo';
En.MIXLY_ke_TB6612 = 'TB6612motor';
En.MIXLY_H = 'front';
En.MIXLY_L = 'back';

En.MIXLY_ke_2812RGB = 'Full Color Led';

En.MIXLY_ke_IR_G = 'PIR Sensor';
En.MIXLY_ke_FLAME = 'Flame Sensor';
En.MIXLY_ke_HALL = 'Hall Sensor';
En.MIXLY_ke_CRASH = 'Crash Sensor';
En.MIXLY_ke_BUTTON = 'Button';
En.MIXLY_ke_TUOCH = 'Capacitive Touch';
En.MIXLY_ke_KNOCK = 'Knock Sensor';
En.MIXLY_ke_TILT = 'Tilt Sensor';
En.MIXLY_ke_SHAKE = 'Vibration Sensor';
En.MIXLY_ke_REED_S = 'Reed Switch Sensor';
En.MIXLY_ke_TRACK = 'Tracking Sensor';
En.MIXLY_ke_AVOID = 'Obstacle Avoidance MSensor';
En.MIXLY_ke_LIGHT_B = 'Light Interrupt Sensor';
En.MIXLY_ke_ROT = 'Rotation';


En.MIXLY_ke_ANALOG_T = 'Analog Temperature Sensor';
En.MIXLY_ke_SOUND = 'Sound Sensor';
En.MIXLY_ke_LIGHT = 'photosensitive Sensor';
En.MIXLY_ke_WATER = 'Water Level Sensor';
En.MIXLY_ke_SOIL = 'Soil Sensor';
En.MIXLY_ke_POTENTIOMETER = 'rotational potentiometer';
En.MIXLY_ke_LM35 = 'LM35 Temperature Sensor';
En.MIXLY_ke_SLIDE_POTENTIOMETER = 'slide potentiometer';
En.MIXLY_ke_TEMT6000 = 'TEMT6000 Ambient Light';
En.MIXLY_ke_STEAM = 'water vapor sensor';
En.MIXLY_ke_FILM_P = 'Thin-film Pressure Sensor';
En.MIXLY_ke_JOYSTICK = 'Joystick Sensor';
En.MIXLY_ke_JOYSTICK_btn = 'Joystick_button';
En.MIXLY_ke_SMOKE = 'Smoke Sensor';
En.MIXLY_ke_ALCOHOL = 'Alcohol Sensor';
En.MIXLY_ke_MQ135 = 'MQ135 Air Quality';
En.MIXLY_ke_18B20 = '18B20 Temperature Sensor';
En.MIXLY_ke_18B20_R = 'Getting temperature';
En.MIXLY_ke_DHT11 = 'temperature and humidity Sensor';
En.MIXLY_DHT11_H = 'getTemperature';    /////////////
En.MIXLY_DHT11_T = 'getHumidity';     ////////////
En.MIXLY_ke_BMP180 = 'BMP180 altimeter Sensor';
En.MIXLY_ke_BMP180_T = 'temperature';
En.MIXLY_ke_BMP180_A = 'atmosphere';
En.MIXLY_ke_BMP180_H = 'height above sea level ';

En.MIXLY_ke_BMP280 = 'BMP280 altimeter Sensor';
En.MIXLY_ke_BMP280_T = 'temperature';
En.MIXLY_ke_BMP280_A = 'atmosphere';
En.MIXLY_ke_BMP280_H = 'height above sea level';

En.MIXLY_ke_SR01 = 'SR01 Ultrasound Module';
En.MIXLY_ke_3231 = 'DS3231 clock';
En.MIXLY_ke_ADXL345 = 'Acceleration Sensor';
En.MIXLY_ADXL345_X = 'X-axis acceleration'; ///
En.MIXLY_ADXL345_Y = 'Y-axis acceleration'; ///
En.MIXLY_ADXL345_Z = 'Z-axis acceleration'; ///
En.MIXLY_ADXL345_XA = 'X-axis angle';  ///
En.MIXLY_ADXL345_YA = 'Y-axis angle';  ///


En.MIXLY_ke_OLED = 'OLED_displays a string or number';
En.MIXLY_ke_1602LCD = 'IIC1602LCD';
En.MIXLY_SETUP = 'setup';  ////////////////
En.MIXLY_LCD_ADDRESS = 'address'; /////////
En.MIXLY_LCD_PRINT1 = 'print line1';  /////////
En.MIXLY_LCD_PRINT2 = 'print line2'; ///////////
En.MIXLY_LCD_ROW = 'row'; /////
En.MIXLY_LCD_COLUMN = 'column'; /////////
En.MIXLY_LCD_PRINT = 'print'; ////
En.MIXLY_LCD_STAT_ON = 'On';  /////
En.MIXLY_LCD_STAT_OFF = 'Off';  /////
En.MIXLY_LCD_STAT_CURSOR = 'Cursor';  ////
En.MIXLY_LCD_STAT_NOCURSOR = 'noCursor';  ////
En.MIXLY_LCD_STAT_BLINK = 'Blink';  ////
En.MIXLY_LCD_STAT_NOBLINK = 'noBlink'; ///
En.MIXLY_LCD_STAT_CLEAR = 'Clear';  ///
En.MIXLY_LCD_NOBACKLIGHT = 'NoBackLight'; ///
En.MIXLY_LCD_BACKLIGHT = 'BackLight'; ///
En.MIXLY_ke_2004LCD = 'IIC2004LCD';
En.MIXLY_ke_print1 = 'print line1';
En.MIXLY_ke_print2 = 'print line2';
En.MIXLY_ke_print3 = 'print line3';
En.MIXLY_ke_print4 = 'print line4';

En.MIXLY_ke_MATRIX = '8*8 dot matrix';
En.MIXLY_ke_TM1637 = '4 digit 8-segment LED digital';
En.MIXLY_ke_TM1637_C = 'digit';
En.MIXLY_ke_TM1637_P = 'display position';
En.MIXLY_ke_TM1637_Fill = 'add 0?';
En.MIXLY_ke_TM1637_light = 'brightness 0~7';
En.MIXLY_ke_TM1637_xy = 'show or hide';
En.MIXLY_ke_TM1637_left = 'left';
En.MIXLY_ke_TM1637_maohao = 'colon';
En.MIXLY_ke_TM1637_right = 'right';
En.MIXLY_ke_value = 'value';


En.MIXLY_ke_IR_E = 'Infrared Transmitter Module';
En.MIXLY_ke_IR_R = 'Infrared Receiver Module';
En.MIXLY_ke_W5100 = 'W5100 Ethernet Module';
En.MIXLY_ke_BLUETOOTH = 'Bluetooth 2.0 Module';
En.MIXLY_ke_read = 'Received signal';


//En.MIXLY_ke_kzsc = 'Control output';

En.MIXLY_ke_Count = 'count';

En.MIXLY_ke_YEAR = 'year';
En.MIXLY_ke_MONTH = 'month';
En.MIXLY_ke_DAY = 'day';
En.MIXLY_ke_HOUR = 'hour';
En.MIXLY_ke_MINUTE = 'minute';
En.MIXLY_ke_SECOND = 'second';
En.MIXLY_ke_WEEK = 'week';

En.MIXLY_ke_angle = 'angle';

En.kids_Ode_to_joy = "Ode_to_joy";
En.kids_birthday = "birthday";

En.kids_tone = "tone";
En.kids_beat = "beat";
En.kids_play_tone = "play_tone";
En.kids_notone = "turn off the buzzer";

En.kids_ADkey = "7 key module";


//////////////keyestudio/////////////////////
En.Ks_ON = 'HIGH';
En.Ks_OFF = 'LOW';

En.ks_MQ_d = 'Flammable gas Sensor-digital';
En.ks_MQ_a = 'Flammable gas Sensor-analog';

En.KS_LED3wd = 'LED 3W';
En.KS_LED_W = 'white_LED';
En.KS_LED_R = 'Red_LED';
En.KS_LED_G = 'Green_LED';
En.KS_LED_B = 'Blue_LED';
En.KS_LED_Y = 'Yellow_LED';

En.MIXLY_KS_BUZZER1 = 'Active buzzer';
En.MIXLY_KS_BUZZER2 = 'Passive Buzzer';
En.ks_tone = 'tone';
En.ks_beat = 'beat';
En.ks_music = 'play_tone';
En.ks_Ode_to_joy = 'Ode_to_joy';
En.ks_birthday = 'birthday';
En.ks_tetris = 'tetris';
En.ks_star_war = 'star_war';
En.ks_super_mario = 'super_mario';
En.ks_christmas = 'christmas';
En.ks_notone1 = 'turn off the buzzer';


En.MIXLY_KS_RELAY = 'Relay';
En.MIXLY_KS_MOTOR = 'Motor';
En.MIXLY_KS_SERVO = 'servo';
En.MIXLY_KS_2812RGB = '2812RGB Module';

En.MIXLY_KS_IR_G = 'PIR Sensor';
En.MIXLY_KS_FLAME = 'Flame_Sensor_D';
En.MIXLY_KS_FLAM_a = 'Flame_Sensor_a';
En.MIXLY_KS_HALL = 'Hall Sensor';
En.MIXLY_KS_CRASH = 'Crash Sensor';
En.MIXLY_KS_BUTTON = 'Button';
En.MIXLY_KS_TUOCH = 'Capacitive Touch';
En.MIXLY_KS_KNOCK = 'Knock Module';
En.MIXLY_KS_TILT = 'Tilt Module';
En.MIXLY_KS_SHAKE = 'Vibration Module';
En.MIXLY_KS_REED_S = 'Reed Switch Module';
En.MIXLY_KS_TRACK = 'Tracking Module';
En.MIXLY_KS_AVOID = 'Obstacle Avoidance Module';
En.MIXLY_KS_LIGHT_B = 'Photo Interrupt Module';

En.MIXLY_KS_ANALOG_T = 'Analog Temperature Sensor';
En.MIXLY_KS_SOUND = 'Sound Sensor';
En.KS_LIGHT = 'Photocell Sensor';
En.MIXLY_KS_WATER = 'Water Level Sensor';
En.KS_SOIL = 'Soil moisture Sensor';
En.MIXLY_KS_POTENTIOMETER = 'rotate potentiometer';
En.MIXLY_KS_LM35 = 'LM35 Temperature Sensor';
En.MIXLY_KS_SLIDE_POTENTIOMETER = 'slide potentiometer';
En.MIXLY_KS_TEMT6000 = 'TEMT6000 Ambient Light';
En.KS_STEAM = 'water sensor';
En.MIXLY_KS_FILM_P = 'Thin-film Pressure Sensor';
En.MIXLY_KS_JOYSTICK = 'Joystick Module';
En.MIXLY_KS_SMOKE = 'Smoke Sensor';
En.MIXLY_KS_ALCOHOL = 'Alcohol Sensor';
En.MIXLY_KS_MQ135 = 'MQ135 Air Quality';
En.MIXLY_KS_18B20 = '18B20 Temperature Module';
En.MIXLY_KS_RT = 'temperature';

En.MIXLY_KS_DHT11 = 'temperature and humidity module';
En.MIXLY_DHT11_H = 'getTemperature';    /////////////
En.MIXLY_DHT11_T = 'getHumidity';     ////////////
En.MIXLY_KS_BMP180 = 'BMP180 altimeter module';
En.MIXLY_KS_T = 'temperature';
En.MIXLY_KS_QY = 'barometric pressure';
En.MIXLY_KS_H = 'altitude';

En.KS_SR01 = 'Ultrasonic Module';
En.MIXLY_KS_3231 = 'DS3231 clock';
En.MIXLY_KS_GET = 'get DS3231 time';
En.KS_ADXL345 = 'Acceleration Sensor ADXL345';
En.MIXLY_ADXL345_X = 'X-axis acceleration'; ///
En.MIXLY_ADXL345_Y = 'Y-axis acceleration'; ///
En.MIXLY_ADXL345_Z = 'Z-axis acceleration'; ///
En.MIXLY_ADXL345_XA = 'X-axis angle';  ///
En.MIXLY_ADXL345_YA = 'Y-axis angle';  ///



En.MIXLY_KS_OLED = 'OLED Module';
En.MIXLY_SETUP = 'setup';  ////////////////
En.MIXLY_LCD_ADDRESS = 'address'; /////////
En.MIXLY_LCD_PRINT1 = 'peint line1';  /////////
En.MIXLY_LCD_PRINT2 = 'print line2'; ///////////
En.MIXLY_LCD_ROW = 'row'; /////
En.MIXLY_LCD_COLUMN = 'column'; /////////
En.MIXLY_LCD_PRINT = 'print'; ////
En.MIXLY_LCD_STAT_ON = 'On';  /////
En.MIXLY_LCD_STAT_OFF = 'Off';  /////
En.MIXLY_LCD_STAT_CURSOR = 'Cursor';  ////
En.MIXLY_LCD_STAT_NOCURSOR = 'noCursor';  ////
En.MIXLY_LCD_STAT_BLINK = 'Blink';  ////
En.MIXLY_LCD_STAT_NOBLINK = 'noBlink'; ///
En.MIXLY_LCD_STAT_CLEAR = 'Clear';  ///
En.MIXLY_LCD_NOBACKLIGHT = 'NoBackLight'; ///
En.MIXLY_LCD_BACKLIGHT = 'BackLight'; ///
En.MIXLY_KS_1602LCD = 'IIC1602LCD';
En.MIXLY_KS_2004LCD = 'IIC2004LCD';
En.MIXLY_KS_MATRIX = '8*8 dot matrix';
En.MIXLY_KS_TM1637 = '4 digit 8-segment LED digital';
En.MIXLY_KS_ws = 'digit';
En.MIXLY_KS_begin = 'Display position';
En.MIXLY_KS_fill0 = 'add 0?';
En.MIXLY_KS_light = 'Brightness0~7';
En.MIXLY_KS_XY = 'Show or hide';
En.MIXLY_KS_L = 'left';
En.MIXLY_KS_R = 'right';
En.MIXLY_KS_MH = 'colon';
En.MIXLY_KS_one = 'print line1';
En.MIXLY_KS_two = 'print line2';
En.MIXLY_KS_three = 'print line3';
En.MIXLY_KS_four = 'print line4';
En.MIXLY_KS_clear = '             clear:';


En.MIXLY_KS_value = 'value';


En.MIXLY_KS_IR_E = 'Infrared Transmitter Module';
En.MIXLY_KS_IR_R = 'Infrared Receiver Module';
En.MIXLY_KS_W5100 = 'W5100 Ethernet Module';
En.KS_BLUETOOTH = 'Bluetooth Module';
En.MIXLY_KS_rec = 'Received';


//En.MIXLY_KS_kzsc = 'Control output';

En.MIXLY_KS_Count = 'count';

En.ks_test_V = 'voltage sensor';
En.ks_test_A = 'current sensor';
En.MIXLY_KS_FLAME_a = 'Flame sensor _ analog value';
En.joys_btn = 'Rocker button';
En.hwwd = 'Non-contact infrared sensor,Pin for SDA : A4 , SCL : A5';
En.color_sensor = 'color sensor';
En.RED_VAL = 'red value';
En.GREEN_VAL = 'green value';
En.BLUE_VAL = 'blue value';

En.matrix16and8_init = 'Matrix 16*8 init';
En.matrix16and8 = 'Matrix 16*8 custom';
En.matrix16and8_image = 'Matrix 16*8 picture';

En.Ultraviolet = 'Ultraviolet Sensor';
En.WaterTurbidity = 'WaterTurbidity';
En.C2H5O = 'harmful gas Sensor';
En.CeramicVibration = 'Piezo Vibration';
En.DustSensor = 'Dust Sensor';

En.MMA8452 = 'Accelerometer_MMA8452';
En.SHT31 = 'temperature and humidity sensor SHT31';

En.ks_neopixel = 'RGB neopixel';
En.ks_neopixel_show = 'neopixel show';

En.ks_TM1637_INIT = 'Four digit tube TM1637 init';
En.ks_4DIGITDISPLAY = 'Four digit tube TM1637 display';
En.ks_4DIGITDISPLAY_time = 'Four digit tube TM1637 display time';
En.ks_4DIGITDISPLAY_brightness = 'Four digit tube TM1637 brightness';
En.ks_4DIGITDISPLAY_clean = 'Four digit tube TM1637 clean';


En.ks_SPI_recv = 'Receive data Get register data';
En.ks_SPI_run = 'perform';
En.ks_SPI_read = 'The SPI retrieves register data from the machine';
})();