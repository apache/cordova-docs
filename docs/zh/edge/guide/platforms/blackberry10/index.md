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

本指南介绍如何设置您的开发环境，以生成和部署科尔多瓦的黑莓 10 设备的应用程序。 对于以前版本的黑莓手机，你需要使用一组不同的命令行工具，黑莓平台指南中所述。

## 要求

在 Windows、 Mac 和 Linux 上提供的开发环境。

开发人员应使用 `cordova` 实用程序与黑莓手机本机 SDK 一起。 命令行界面信息，请参阅如何安装 `cordova` ，添加项目，然后生成和部署每个平台。

## 安装黑莓手机本机 SDK

黑莓手机本机 SDK 是可用的[developer.blackberry.com][1]。 安装完成后，您需要将其命令行工具添加到您的系统路径。

 [1]: http://developer.blackberry.com/native/download/

关于窗口：

*   转到**我的计算机 → 属性 → 高级 → 环境变量**.

*   追加本机 SDK 安装目录的路径，例如：
    
    ;C:\bbndk\host\_10\_2\_0\_132\darwin\x86\usr\bin\

关于 Mac 和 Linux：

*   编辑 `~/.bash_profile` 文件，添加如下所示，根据安装本机的 SDK 了一行：
    
    $ export PATH=${PATH}:/Applications/Momentics.app/host\_10\_2\_0\_15/darwin/x86/usr/bin/

*   运行下面的命令将在当前会话中的更改应用：
    
    元源 ~/.bash_profile

## 为签名设置

如果您希望在设备上测试或发布通过黑莓应用程序，您的系统必须设置为代码签名。

若要获取签名密钥，请转到 \[黑莓键顺序形式\] (https://www.blackberry.com/SignedKeys/codesigning.html)。

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

*   [下载][1]
*   [入门][2]

 [2]: http://developer.blackberry.com/devzone/develop/simulator/blackberry_10_simulator_start.html

在测试之前在仿真器或设备上的应用程序，您需要启用发展模式。

启动仿真程序映像，然后从主屏幕中选择**设置**：

![][3]

 [3]: img/guide/platforms/blackberry10/bb_home.png

导航到**的安全和隐私 → 发展模式**节和启用的选项：

![][4]

 [4]: img/guide/platforms/blackberry10/bb_devel.png

然后，运行 `emulate` 命令来查看该应用程序：

    $ cordova emulate blackberry10 --devicepass <password>
    

## 将部署到设备

要部署到一个设备，请确保它插入到您的计算机和发展模式已启用。

然后，运行 `run` 命令来查看该应用程序：

    $ cordova run blackberry10 --devicepass <password>
    

如果调试的令牌还没有为该设备设置，错误消息，提示您提供密码您定义配置您的计算机以签名的应用程序时。

    $ cordova run blackberry10 --devicepass <password> --keystorepass <signing password>
    

## WebInspector 的调试

在调试时在设备或仿真程序上，您可以运行 WebInspector 远程来查看应用程序的内部状态。 使您可以连接到您的应用程序使用标准 web 浏览器的 URL 显示一个提示。 有关详细信息，请参见[调试使用 WebInspector][5].

 [5]: http://developer.blackberry.com/html5/documentation/web_inspector_overview_1553586_11.html

## 生成发布版本

默认情况下，运行 `cordova build` 命令创建一个无符号的*.bar*包文件适用于设备或模拟器上测试。

使用 `--release` 创建一个发布版本适合通过黑莓手机世界分布。

    $ cordova build --release --keystorepass <signing password>
    

`--keystorepass`选项指定定义配置您的计算机登录时的密码的应用程序。

## 将部署到其他位置

上面的说明假定通过 USB 插入设备或模拟器运行在本地计算机上。它也是可能部署到其他位置。

当您设置黑莓 10 平台为您的项目包含一组额外的命令行实用程序。 下面的命令，在这种情况下调用从项目的顶级目录中，将一个名为*动车组*与 IP 地址的目标相关联。

*   关于窗口：
    
    $ platforms\blackberry10\cordova\target.bat add emu 192.168.2.24 -t simulator

*   关于 Mac/Linux：
    
    $ platforms/blackberry10/cordova/target add emu 192.168.2.24 -t simulator

一旦定义了目标，你可以提供给运行的命令使用 `--target` ：

    $ cordova run blackberry10 --target=emu