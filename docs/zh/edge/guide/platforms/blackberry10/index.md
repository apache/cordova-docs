---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# 10 黑莓平台指南

本指南介绍如何设置您的 SDK 环境部署科尔多瓦的黑莓 10 设备的应用程序。 对于以前版本的黑莓手机，你需要使用不同的 SDK 环境和组的命令行工具，黑莓平台指南中所述。 黑莓 10，您需要安装 SDK 无论是否你想要跨平台科尔多瓦 CLI 用于发展或一整套较窄的平台为中心的命令行工具。 两条发展路径的比较，请参见概述。 每个上的详细信息，请参阅命令行界面和黑莓 10 壳工具指南。

## 要求

在 Windows、 Mac 和 Linux 上提供的开发环境。

开发人员应使用 `cordova` 实用程序在与黑莓 WebWorks SDK 或黑莓手机本机 SDK。 信息，请参阅命令行界面如何安装 `cordova` ，添加项目，然后生成和部署每个平台。

黑莓 10 设备模拟器：

*   处理器： 英特尔双核心 2.0 GHz/AMD 速龙 4200 + 或更高
*   磁盘空间： 10 GB 
*   RAM 内存： 4 GB 
*   虚拟化： 为下列情况之一： 
    *   **英特尔虚拟化技术**(VT，VT-x，vmx) →[英特尔 VT-x 支持的处理器列表][1]
    *   **AMD 虚拟化**(AMD-V，支持向量机)（自 2006 年 5 月以来所有 AMD Cpu 都包括 AMD-V 闪龙除外）。

 [1]: http://ark.intel.com/products/virtualizationtechnology

有关的要求的详细信息： [BB10 模拟器 requeriments][2].

 [2]: http://developer.blackberry.com/devzone/develop/simulator/simulator_systemrequirements.html

## 安装黑莓 WebWorks SDK

从下载并安装黑莓 WebWorks SDK [developer.blackberry.com][3]

 [3]: https://developer.blackberry.com/html5/download/

安装程序将添加到您的路径的命令行工具。根据您的操作系统，您可能需要打开新的终端窗口或重新登录。

## 安装黑莓手机本机 SDK

如果您需要编译本机代码，例如，当开发本机插件，您将需要安装黑莓手机本机 SDK。

为了得到黑莓本机 SDK，下载并从[developer.blackberry.com][4]，安装 IDE 提供的黑莓手机，然后使用 IDE，安装黑莓手机本机 SDK。 安装完成后，您需要将其命令行工具添加到您的系统路径。

 [4]: http://developer.blackberry.com/native/download/

关于窗口：

*   转到**我的计算机 → 属性 → 高级 → 环境变量**.

*   追加本机 SDK 安装目录的路径，例如：
    
        ;C:\bbndk\host_10_1_0_132\win32\x86\usr\bin\
        

关于 Mac 和 Linux：

*   编辑 `~/.bash_profile` 文件，添加如下所示，根据安装本机的 SDK 了一行：
    
        $ export PATH=${PATH}:/Applications/bbndk/host_10_1_0_132/darwin/x86/usr/bin/
        
    
    或为 10.2 本机 SDK：
    
        $ export PATH=${PATH}:/Applications/Momentics.app/host_10_2_0_15/darwin/x86/usr/bin/
        

*   运行下面的命令将在当前会话中的更改应用：
    
        元源 ~/.bash_profile
        

如果你有任何的环境问题，使用本机 SDK 从命令行，执行您的平台，在安装路径内的适当文件：

*   在 Windows 上 → MS-DOS shell：
    
        C:\> \bbndk\bbndk-env_xx_xx_xx_xxxx.bat
        

*   在 Windows 上 → git bash：
    
        $ `\bbndk\bbndk-env_xx_xx_xx_xxxx.bat`
        

*   在 Linux 上 → 作为 root 用户安装：
    
        $ `./opt/bbndk/bbndk-env_xx_xx_xx_xxxx.sh`
        

*   在 Linux 上 → 作为非根用户安装：
    
        $ `./home/username/bbndk/bbndk-env_xx_xx_xx_xxxx.sh`
        

*   关于 Mac：
    
        $ `/Developer/SDKs/bbndk/bbndk-env_xx_xx_xx_xxxx.sh`
        

## 为签名设置

如果您希望在设备上测试或发布通过黑莓应用程序，您的系统必须设置为代码签名。

若要获取签名密钥，转到 \[黑莓键订单窗体\] (https://www.blackberry.com/SignedKeys/codesigning.html)。

选择第一个复选框："为 BlackBerry10 使用黑莓 NDK 开发的应用程序"，然后登录或创建 BBID。

输入密码并单击"获取令牌"以下载 bbidtoken.csk。将此文件保存到您的操作系统，将会显示在下载页面上的默认位置。

最后一步是生成签名的证书：

    $ blackberry-keytool -genkeypair -storepass <password> -author 'Your Name’
    

## 创建一个项目

使用 `cordova` 实用程序设置了一个新的项目，如所述的命令行界面。例如，在源代码中的目录：

        $ cordova create hello com.example.hello
        $ cd hello
        $ cordova platform add blackberry10
        $ cordova build
    

## 部署到仿真程序

如果您想要运行的设备仿真程序，下载并安装黑莓手机 10 模拟器。

*   [下载][4]
*   [入门][5]

 [5]: http://developer.blackberry.com/devzone/develop/simulator/blackberry_10_simulator_start.html

在测试之前在仿真器或设备上的应用程序，您需要启用发展模式。

启动仿真程序映像，然后从主屏幕中选择**设置**：

![][6]

 [6]: img/guide/platforms/blackberry10/bb_home.png

导航到**的安全和隐私 → 发展模式**节和启用的选项：

![][7]

 [7]: img/guide/platforms/blackberry10/bb_devel.png

当您设置黑莓 10 平台为您的项目包含一组额外的命令行实用程序。 下面的命令，在这种情况下调用从项目的顶级目录，将目标命名*动车组*与上面显示的 IP 地址相关联。

*   关于窗口：
    
        $ platforms\blackberry10\cordova\target.bat add emu 169.254.0.1 -t simulator
        

*   关于 Mac/Linux：
    
        $ platforms/blackberry10/cordova/target add emu 169.254.0.1 -t simulator
        

然后，运行 `emulate` 命令来查看该应用程序：

        $ cordova emulate blackberry10
    

## 将部署到设备

若要部署到一个设备，请确保它插入到您的计算机。 启用发展模式和获得的 IP 地址为 desribed 以上的仿真程序部分中。 您还需要获得从 PIN**设置**应用程序下的**关于 → 硬件**：

![][8]

 [8]: img/guide/platforms/blackberry10/bb_pin.png

运行目标命令行实用程序将一个名称与一个 IP 地址、 设备密码和 PIN 相关联。

*   关于窗口：
    
        $ platforms\blackberry10\cordova\target.bat add mydevice 169.254.0.1 -t device --password 123456 --pin FFFF972E
        

*   关于 Mac/Linux：
    
        $ platforms/blackberry10/cordova/target add mydevice 169.254.0.1 -t device --password 123456 --pin FFFF972E
        

地点：

*   `--password`是指密码来解锁设备。

*   `--pin`是指设备从**设置**应用程序获得的 PIN。

然后，运行 `run` 命令来查看该应用程序：

        运行 blackberry10 $ 科尔多瓦
    

如果调试令牌未尚未设置的设备，一条错误消息会提示您使用与您的签名密钥提供注册时的密码运行脚本的平台。

*   关于窗口：
    
        $ platforms\blackberry10\cordova\run.bat --device --keystorepass mysecret
        

*   关于 Mac/Linux：
    
        $ platforms/blackberry10/cordova/run --device --keystorepass mysecret
        

## WebInspector 的调试

在调试时在设备或仿真程序上，您可以运行 WebInspector 远程来查看应用程序的内部状态。 使您可以连接到该应用程序使用标准 web 浏览器的 URL 显示一个提示。 有关详细信息，请参见[调试使用 WebInspector][9].

 [9]: http://developer.blackberry.com/html5/documentation/web_inspector_overview_1553586_11.html

## 生成发布版本

默认情况下，运行 `cordova build` 命令创建一个无符号的*.bar*包文件适用于设备或模拟器上测试。

使用 `--release` 创建一个发布版本适合通过黑莓手机世界分布。

    $ cordova build --release --keystorepass <signing password>
    

`--keystorepass`选项指定定义配置您的计算机登录时的密码的应用程序。

## 将部署到其他位置

上面的说明假定通过 USB 插入设备或模拟器运行在本地计算机上。它也是可能部署到其他位置。

当您设置黑莓 10 平台为您的项目包含一组额外的命令行实用程序。 下面的命令，在这种情况下调用从项目的顶级目录中，将一个名为*动车组*与 IP 地址的目标相关联。

*   关于窗口：
    
        $ platforms\blackberry10\cordova\build.bat --release --keystorepass mysecret
        

*   关于 Mac/Linux：
    
        $ platforms/blackberry10/cordova/build --release --keystorepass mysecret
        

一旦定义了目标，你可以提供给运行的命令使用 `--target` ：

    $ cordova run blackberry10 --target=emu