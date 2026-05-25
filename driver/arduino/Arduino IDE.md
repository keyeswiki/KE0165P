# 1、安装Arduino IDE软件和开发板驱动

## 第1小节  简单介绍keyes PLUS开发板

在我们进行DIY电子产品实验时，我们经常会用到arduino系列单片机在Arduino IDE开发环境上编程设置。Keyes Plus 开发板是一款完全兼容Arduino IDE开发环境的控制板。它包含官网的UNO开发板的所有功能，并且在UNO开发板的基础上，我们做了一些改进，使它的功能更加强大。具体改进如下图。为了方便接线，我们还配了1根长度为1米的type-c接口的USB线。

![](media/image1.jpg)

### **规格参数**

- 微控制器：ATMEGA328P-AU

- USB转串口芯片：CP2102

- 工作电压：DC 5V

- 外接电源: DC 6-15V（建议9V）

- 数字I/O引脚: 14 (D0-D13)

- PWM通道：6 (D3 D5 D6 D9 D10 D11)

- 模拟输入通道（ADC）: 8(A0-A7)

- 每个I/O直流输出能力:	20 mA

- 3.3V端口输出能力:	50 mA

- Flash Memory: 32 KB（其中引导程序使用0.5 KB）

- SRAM:2 KB (ATMEGA328P-AU)

- EEPROM:	1 KB (ATMEGA328P-AU)

- 时钟速度:16MHz

- 板载LED引脚:D13


### **各个接口和主要元件说明**

![](media/image2.jpg)

### **特殊功能接口说明**

- 串口通信接口：D0为RX、D1为TX

- PWM接口（脉宽调制）：D3 D5 D6 D9 D10 D11

- 外部中断接口：D2(中断0)和D3 (中断1)

- SPI通信接口：D10为SS、D11为MOSI、D12为MISO、D13为SCK

- IIC通信端口：A4为SDA、A5为SCL


## 第2小节 在Windows系统电脑详细使用方法

### 2.1安装Arduino IDE

拿到这个控制板后，我们首先需要下载安装Arduino IDE。

你可以进入以下网址下载Arduino IDE：，点击后，显示如下图。

![](media/image3.png)

![](media/image4.png)

点击下图，

![](media/image5.png)

就可以下载最新的1.8.19版本IDE，在红色框内选择自己电脑的型号，比如我的是Windows7。就点击Windows win7 and newer

![](media/image6.png)

然后我们跳转到下载页面，我们点击Just Download

![](media/image7.png)

然后便开始下载，只需等待下载完毕就可以安装了。

![](media/image8.png)

### 2.2安装驱动文件

软件下载完毕，我们开始为Keyes Plus 开发板安装驱动。Keyes Plus 开发板的USB转串口芯片用的是著名的CP2102 芯片，在ARDUINO 开发软件1.8以上的版本里就已经包含了这个芯片的驱动程序，这样我们使用起来会非常方便。一般插上USB，电脑就会识别到硬件，WINDOWS就会自动安装CP2102的驱动。

![](media/image9.png)

如果驱动安装不成功，或者你想手动安装驱动，请打开电脑的设备管理器

![](media/image10.png)

显示CP2102的驱动没有安装成功，有一个黄色的感叹号。我们双击硬件更新驱动

![](media/image11.png)

浏览计算机查找驱动程序，先找到我们安装或者下载的ARDUINO开发软件，

![](media/image12.png)

里面有个DIRVERS文件夹，打开文件夹就能看到CP210X系列芯片的驱动，

![](media/image13.png)

我们选择这个文件夹，然后点击确定，驱动安装成功。

![](media/image14.png)

这个时候再打开设备管理器，我就可以看到CP2102的驱动程序已经安装成功了，刚刚的那个黄色的感叹号不见了。

![](media/image15.png)

### 2.3 Arduino IDE设置和工具栏介绍

首先我们点击文档中的图标，打开Arduino IDE。

![](media/image16.png)

![](media/image17.png)

为了避免在将程序上载到板上时出现任何错误，必须选择正确的Arduino板名称，该名称与连接到计算机的电路板相匹配。转到Tools→Board，然后选择你的板。

![](media/image18.png)

然后再选择正确的COM口（安装驱动成功后可看到对应COM口）。

![](media/image19.png)

![](media/image20.png)

我们的程序上传到板之前，我们必须演示Arduino IDE工具栏中出现的每个符号的功能。

![](media/image21.png)

A - 用于检查是否存在任何编译错误。

B - 用于将程序上传到Arduino板。

C - 用于创建新草图的快捷方式。

D - 用于直接打开示例草图之一。

E - 用于保存草图。

F - 用于从板接收串行数据并将串行数据发送到板的串行监视器。

### 2.4 启动你的第一个程序

打开文件选择例子，选择第一个文件BASIC里面的BLINK程序

![](media/image22.png)

![](media/image23.png)

按照前面方法设置板和COM口，IDE右下角显示对应板和COM口。

![](media/image24.png)

点击图标开始编译程序，检查错误，检查无误。

![](media/image25.png)

![](media/image26.png)

点击点击图标开始上传程序，上传成功。

![](media/image27.png)

![](media/image28.png)

程序上传成功，板载的LED灯亮一秒钟，灭一秒钟，恭喜你的第一个程序完成了！

## 第3小节 在MAC系统电脑详细使用方法

### 3.1下载安装Arduino IDE

不同的系统，需要下载不同的Arduino IDE，下载方式和5.1章节类似。选择如下图。

![](media/image29.png)

### 3.2驱动安装方法

CP2102驱动下载链接

https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers

点击下载MacOS 版本的

![](media/image30.png)

解压下载好的压缩包

![](media/image31.jpg)

打开文件夹，双击SiLabsUSBDriverDisk.dmg文件

![](media/image32.jpg)

可以看到以下文件

![](media/image33.jpg)

双击 Install CP210x VCP Driver ，接着勾上Don’t warn me ，点击Open

![](media/image34.jpg)

点击Continue

![](media/image35.jpg)

继续点击Continue ，然后点击Agree

![](media/image36.jpg)

点击Continue ，然后输入你的用户密码

![](media/image37.jpg)

![](media/image38.jpg)

系统安全问题，需要允许安装，点击 Open Security Preferences

![](media/image39.png)

点击安全锁 ，输入你的用户密码来授权

![](media/image40.jpg)

![](media/image41.jpg)

看到锁被打开了，点击Allow

![](media/image42.jpg)

回到安装界面，根据提示等待安装

![](media/image43.jpg)

安装成功

![](media/image44.jpg)

### 3.3 Arduino IDE设置

在 Arduino IDE设置时，方法和5.3章节类似，只是设置COM口时不同，如下图。

![](media/image45.jpg)

## 第4小节 库文件的添加

首先找到arduino库文件夹：

![](media/image46.png)

![](media/image47.png)

然后把所要用到的库文件复制在这个文件夹下就行了。