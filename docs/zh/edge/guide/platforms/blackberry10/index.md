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
    
    ;C:\bbndk\host\_10\_1\_0\_132\darwin\x86\usr\bin\

关于 Mac 和 Linux：

*   编辑 `~/.bash_profile` 文件，添加如下所示，根据安装本机的 SDK 了一行：
    
    $ 导出路径 = ${路径}：/应用程序/bbndk/host\_10\_1\_0\_132 达尔文/x 86 usr/bin /

*   运行下面的命令将在当前会话中的更改应用：
    
    元源 ~/.bash_profile

## 为签名设置

如果您希望在设备上测试或发布通过黑莓应用程序，您的系统必须设置为代码签名。

若要获取签名密钥，转到黑莓手机网站和请确保保留您指定的密码。 然后运行 `blackberry-signer` 黑莓手机本机 SDK 中包含的实用程序。

可以在这里找到详细的说明：

*   [注册您的代码签名密钥。][2]

*   [设置您的系统的代码签名。][3]

 [2]: https://www.blackberry.com/SignedKeys/codesigning.html
 [3]: https://developer.blackberry.com/html5/documentation/signing_setup_bb10_apps_2008396_11.html

## 创建一个项目

使用 `cordova` 实用程序设置了一个新的项目，如所述的命令行界面。例如，在源代码中的目录：

    $ 科尔多瓦创建你好 com.example.hello $ cd 你好 $ 科尔多瓦平台添加 blackberry10 $ 科尔多瓦生成
    

## 部署到仿真程序

如果您想要运行的设备仿真程序，下载并安装黑莓手机 10 模拟器。

*   [下载][1]
*   [入门][4]

 [4]: http://developer.blackberry.com/devzone/develop/simulator/blackberry_10_simulator_start.html

在测试之前在仿真器或设备上的应用程序，您需要将*目标*添加到您的项目。 每个是以唯一的名称，确定并与 IP 地址关联。 您需要在您使用它来查看应用程序之前从仿真程序获取的 IP 地址。

启动仿真程序映像，然后从主屏幕中选择**设置**：

![][5]

 [5]: img/guide/platforms/blackberry10/bb_home.png

导航到**的安全和隐私 → 发展模式**节、 启用选项，和获得的 IP 地址：

![][6]

 [6]: img/guide/platforms/blackberry10/bb_devel.png

当您设置黑莓 10 平台为您的项目包含一组额外的命令行实用程序。 下面的命令，在这种情况下调用从项目的顶级目录，将目标命名*动车组*与上面显示的 IP 地址相关联。

*   关于窗口：
    
    $ platforms\blackberry10\cordova\target.bat 添加鸸鹋 169.254.0.1-t 模拟器

*   关于 Mac/Linux：
    
    $ 平台/blackberry10/科尔多瓦/目标添加鸸鹋 169.254.0.1-t 模拟器

然后，运行 `emulate` 命令来查看该应用程序：

    $ 科尔多瓦效仿 blackberry10
    

## 将部署到设备

若要部署到一个设备，请确保它插入到您的计算机。 启用发展模式和获得的 IP 地址为 desribed 以上的仿真程序部分中。 您还需要获得从 PIN**设置**应用程序下的**关于 → 硬件**：

![][7]

 [7]: img/guide/platforms/blackberry10/bb_pin.png

运行目标命令行实用程序将一个名称与一个 IP 地址、 设备密码和 PIN 相关联。

*   关于窗口：
    
    $ platforms\blackberry10\cordova\target.bat 添加差异 169.254.0.1-t 设备 — — 密码 123456 — — pin FFFF972E

*   关于 Mac/Linux：
    
    $ 平台/blackberry10/科尔多瓦/目标添加差异 169.254.0.1-t 设备 — — 密码 123456 — — pin FFFF972E

地点：

*   `--password`是指密码来解锁设备。

*   `--pin`是指设备从**设置**应用程序获得的 PIN。

然后，运行 `run` 命令来查看该应用程序：

    运行 blackberry10 $ 科尔多瓦
    

如果调试令牌未尚未设置的设备，一条错误消息会提示您使用与您的签名密钥提供注册时的密码运行脚本的平台。

*   关于窗口：
    
    $ platforms\blackberry10\cordova\run.bat — — 设备 — — keystorepass mysecret

*   关于 Mac/Linux：
    
    $ 平台/blackberry10/科尔多瓦/运行 — — 设备 — — keystorepass mysecret

## WebInspector 的调试

在调试时在设备或仿真程序上，您可以运行 WebInspector 远程来查看应用程序的内部状态。 使您可以连接到您的应用程序使用标准 web 浏览器的 URL 显示一个提示。 有关详细信息，请参见[调试使用 WebInspector][8].

 [8]: http://developer.blackberry.com/html5/documentation/web_inspector_overview_1553586_11.html

## 生成发布版本

默认情况下，运行 `cordova build` 命令创建一个无符号的*.bar*包文件适用于设备或模拟器上测试。

您需要运行一个不同 `build` 命令来创建一个发布版本适合通过黑莓手机世界分布。 它不依赖于 `cordova` CLI 的工具，而是使用下面的语法：

*   关于窗口：
    
    $ platforms\blackberry10\cordova\build.bat — — 释放 — — keystorepass mysecret

*   关于 Mac/Linux：
    
    $ 平台/blackberry10/科尔多瓦/生成 — — 释放 — — keystorepass mysecret

`--keystorepass`选项指定定义配置您的计算机登录时的密码的应用程序。