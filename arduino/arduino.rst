
Arduino 教程
==============


:download:`点击下载库文件<library.zip>`


1.4WD蓝牙多功能智能车介绍
-----------------



.. toctree::
    :maxdepth: 2

    introduction



2.安装和接线
-----------------


.. toctree::
    :maxdepth: 1

    5assembly/assembly





3.安装Arduino IDE软件安装开发板驱动
-----------------


.. toctree::
    :maxdepth: 2

    ArduinoIDE



4.4WD蓝牙智能车课程
-----------------


.. toctree::
    :maxdepth: 1

    7project/1/1
    7project/2/2
    7project/3/3
    7project/4/4
    7project/5/5
    7project/6/6
    7project/7/7
    7project/8/8
    7project/9/9
    7project/10/10
    7project/11/11
    7project/12/12
    7project/13/13
    7project/14/14
    7project/15/15
    7project/16/16
    7project/17/17

    



5.常见问题解答
-----------------

### （1）小车无反应

答：1.请检查电池电量是否充足。

2.请检查接线是否正确。

### （2）电脑识别不了USB端口

答：1.请确保已参考第6章的第3小节安装了CP2102驱动程序。

2.请检查USB线是否良好。

### （3）无法上传代码

答：1.请尝试是否可以单独使用plus主板进行烧录（拔掉外围传感器，排除外部干扰）。

2.请确保在上传代码期间蓝牙模块没有插在扩展板上，因为蓝牙模块使用的是V4.0

主板的RX\TX引脚，而上传代码时也需要使用的plus主板的RX\TX引脚，如果在上传代码期间扩展板上接着蓝牙模块会影响上传代码。

### （4）蓝牙遥控有干扰

答：小车右侧的避障传感器在感应到障碍物时会形成红外线反射，从而影响到红外接收传感器的数值。

### （5）库文件报错

如果库文件报错，请先检查库文件有没有添加！！



