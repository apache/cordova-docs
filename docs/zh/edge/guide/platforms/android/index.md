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

# Android 平台指南

本指南介绍如何设置您的 SDK 开发环境部署科尔多瓦的 Android 设备的应用程序。请参阅下列特定于平台的详细信息：

*   Android 系统配置
*   Android WebViews
*   Android 插件
*   升级 Android
*   Android 系统的命令行工具

上面的命令行工具请参阅科尔多瓦 3.0 以前的版本。关于当前界面的信息，请参阅命令行界面。

## 要求和支持

Android SDK，请参阅[系统要求][1]。

 [1]: http://developer.android.com/sdk/index.html

科尔多瓦支持 Android 2.2、 2.3 和 4.x。作为一般规则，平台已弃用作为他们低于 5%的谷歌的[分布的仪表板][2].

 [2]: http://developer.android.com/about/dashboards/index.html

<!--
NOTE, doc said:
- Android 2.1 (Deprecated May 2013)
- Android 3.x (Deprecated May 2013)
-->

开发人员应使用 `cordova` 实用程序与 Android SDK 一起。 命令行界面信息，请参阅如何安装它，添加项目，然后生成和部署项目。

## 安装 SDK

从[developer.android.com/sdk][3]安装 Android SDK。 你可能会出现一个选择在哪里安装 SDK，否则移动下载 `adt-bundle` 树到无论您存储的开发工具。

 [3]: http://developer.android.com/sdk/

科尔多瓦命令行工具来工作，您需要包括 SDK 的 `tools` 和 `platform-tools` 的路径环境中目录。 在 Mac 上可以使用文本编辑器来创建或修改 `~/.bash_profile` 文件中，添加行，如下，根据 SDK 的安装位置：

    export PATH=${PATH}:/Development/adt-bundle/sdk/platform-tools:/Development/adt-bundle/sdk/tools
    

这暴露了 SDK 工具在新打开的终端窗口。否则运行这使它们在当前会话中可用：

    $ source ~/.bash_profile
    

若要修改路径上 Windows 7 的环境：

*   在桌面的左下角的**开始**菜单上单击，在**计算机**上，右键单击，然后单击**属性**.

*   在左侧列中，单击**高级系统设置**。

*   在结果对话框中，按下**环境变量**.

*   选择**PATH**变量，然后按**编辑**.

*   将以下内容追加到基于例如安装 SDK 的位置的路径：
    
        ;C:\Development\adt-bundle\sdk\platform-tools ；C:\Development\adt-bundle\sdk\tools
        

*   将值保存并关闭这两个对话框。

您可能还需要启用 Java 和蚂蚁打开一个命令提示符并键入 `java` ，然后还键入 `ant` 。将追加到该路径无法运行的日期为准：

        ； %JAVA_HOME%\bin;%ANT_HOME%\bin
    

## 在 SDK 中打开的项目

使用 `cordova` 实用程序设置了一个新的项目，如所述在科尔多瓦命令行界面。例如，在源代码中的目录：

        $ 科尔多瓦创建你好 com.example.hello"HelloWorld"$ cd 你好 $ 科尔多瓦平台添加 android $ 科尔多瓦生成
    

一旦创建了，这里是如何使用 SDK 来修改它：

*   启动**Eclipse**应用程序。

*   选择**新建项目**菜单项。

*   从结果对话框中，选择**从现有代码的 Android 项目**并按**下一步**： ![][4]

*   定位到 `hello` ，或无论你创建目录的项目，然后到 `platforms/android` 子目录。

*   按**完成**.

 [4]: img/guide/platforms/android/eclipse_new_project.png

一旦日食窗口将打开，一个红色的**X**可能似乎表明未解决的问题。如果是这样，执行这些额外的步骤：

*   右键单击项目目录。

*   在出现的**属性**对话框中，选择**Android**从导航窗格。

*   为项目生成目标，选择您已安装的最高的 Android API 级别。

*   单击**确定**.

*   从**项目**菜单中选择**清洁**。这应该更正该项目中的所有错误。

## 部署到仿真程序

您可以使用 `cordova` 实用程序在一个仿真程序，或你运行一个应用程序可以在 SDK 内运行它。 不管怎样，SDK 必须首先配置以显示至少一个设备。 若要这样做，请使用 Android SDK 经理，从 Eclipse 独立运行的 Java 应用程序。 有两种方法来打开它：

*   运行 `android` 命令行上。

*   从内日食，按此工具栏图标：
    
    ![][5]

 [5]: img/guide/platforms/android/eclipse_android_sdk_button.png

一旦打开，Android SDK 管理器将显示不同的运行时库：

![][6]

 [6]: img/guide/platforms/android/asdk_window.png

选择**工具 → 管理 AVDs** （Android 的虚拟设备），然后从**设备定义**在随后出现的对话框中选择任何项：

![][7]

 [7]: img/guide/platforms/android/asdk_device.png

新闻**创建 AVD**，（可选） 修改该名称，然后按**确定**以接受这些更改：

![][8]

 [8]: img/guide/platforms/android/asdk_newAVD.png

AVD 然后出现在**虚拟的 Android 设备**列表中：

![][9]

 [9]: img/guide/platforms/android/asdk_avds.png

若要打开模拟器作为单独的应用程序，选择 AVD 然后按**开始**。它发射将在设备上，与其他控件可用的硬件按钮：

![][10]

 [10]: img/guide/platforms/android/asdk_emulator.png

此时你可以使用 `cordova` 实用程序将应用部署到仿真程序从命令行：

        $ 科尔多瓦效仿 android
    

如果改为你使用的日食，右键单击该项目，并选择**运行作为 → Android 应用程序**。可能要求您指定 AVD，如果都已经打开。

为获得更快的体验，使用基于英特尔的仿真程序映像：

*   安装一个或多个 `Intel x86 Atom` 的系统映像，以及 `Intel Hardware Accelerated Execution Manager` 下**的额外**的可用.

*   运行英特尔安装程序时，这是在您 Android SDK 内可用`extras/intel/Hardware_Accelerated_Execution_Manager`.

*   设置为英特尔图像的目标来创建新的 AVD。

*   当启动仿真程序，确保没有任何错误消息，指示未能加载 HAX 模块。

## 将部署到设备

要将应用程序推直接到设备，请确保您的设备上的[Android 开发者网站][11]，所述上启用 USB 调试和使用一个迷你 USB 电缆，将其插入您的系统。

 [11]: http://developer.android.com/tools/device.html

从命令行，可以将应用程序推送到设备：

        运行 android 的 $ 科尔多瓦
    

交替内日食，右键单击该项目并选择**作为 → 运行 Android 应用程序**.