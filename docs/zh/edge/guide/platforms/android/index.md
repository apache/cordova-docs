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

本指南演示如何设置您的 SDK 环境部署科尔多瓦的 Android 设备的应用程序以及如何在您的开发工作流中 （可选） 使用 Android 居中的命令行工具。 您需要安装 Android SDK 无论是否你想要使用这些平台为中心的外壳工具或跨平台 Cordova CLI 的发展。 两条发展路径的比较，请参见概述。 CLI 的详细信息，请参阅命令行界面。

## 要求和支持

科尔多瓦 android 系统要求 Android SDK。请参阅 Android SDK[的系统要求][1].

 [1]: http://developer.android.com/sdk/index.html

科尔多瓦支持 Android 2.3.x (姜饼，开始与 Android API 级别 10） 和 4.x 版。作为一般规则，Android 版本成为不受支持的科尔多瓦作为他们沾在谷歌的[分布的仪表板][2]上的 5%以下。 Android 版本早于 API 级别 10，而 3.x 版本 (蜂窝，API 级别 11-13) 大大低于那 5%门槛。

 [2]: http://developer.android.com/about/dashboards/index.html

## 安装科尔多瓦壳工具

如果您想要使用科尔多瓦的 Android 居中外壳工具与 SDK 一起，从[cordova.apache.org][3]下载科尔多瓦。 如果您计划使用所述的命令行界面的跨平台 CLI 工具，否则忽略此节。

 [3]: http://cordova.apache.org

科尔多瓦下载包含单独的档案，为每个平台。 一定要展开相应的存档， `android` 在这种情况下，在一个空的目录内。 有关 executible 实用程序可用在顶级 `bin` 目录。 (参阅**自述**文件，如果有必要作更详细的指示）。

这些外壳工具允许您创建、 构建和运行 Android 应用程序。 额外的命令行界面，可以跨所有平台的插件功能的信息，请参阅使用 Plugman 到管理插件。 有关如何开发插件的详细信息，请参阅应用程序插件。

从[developer.android.com/sdk][4]安装 Android SDK。 Android sdk 是作为 'adt-捆绑-< os > < 拱 >-< ver >' 文件分发。 在 windows 上，adt 捆绑打包用安装程序安装。 在 OSX 和 Linux，只需打开包装 'adt 捆绑' 中的位置，您将存储的开发工具。 [关于 Android SDK 安装程序的详细的信息可以在这里找到][5]

 [4]: http://developer.android.com/sdk/
 [5]: http://developer.android.com/sdk/installing/bundle.html

科尔多瓦正常工作，或者基于他们的 CLI 命令行工具，您需要包括 SDK 的 `tools` 和 `platform-tools` 中的目录你 `PATH` 。 在 Mac 上可以使用一个文本编辑器来创建或修改 `~/.bash_profile` 文件中，添加行，如下，根据 SDK 的安装位置：

        导出路径 = ${路径}：/开发/adt-捆绑/sdk/平台-工具：/开发/adt-捆绑/sdk/工具
    

添加的路径为 `java` 和 `ant` 如果需要。 在这条线 `~/.bash_profile` 公开这些工具在新打开的终端窗口。 如果您的终端窗口已经打开在 OSX，或避免的注销登录在 Linux 上，运行这个是为了让他们在当前的终端窗口中可用：

        元源 ~/.bash_profile
    

若要修改 `PATH` 上 Windows 7 的环境：

1.  在桌面的左下角的**开始**菜单上单击，在**计算机**上，右键单击，然后选择**属性**.

2.  在左边的列中选择**高级系统设置**。

3.  在结果对话框中，按下**环境变量**.

4.  选择**PATH**变量，然后按**编辑**.

5.  追加到以下 `PATH` 基于在安装 SDK，例如：
    
        ;C:\Development\adt-bundle\sdk\platform-tools ；C:\Development\adt-bundle\sdk\tools
        

6.  将值保存并关闭这两个对话框。

您可能还需要启用 Java 和蚂蚁打开一个命令提示符并键入 `java` ，然后还键入 `ant` 。将追加到 `PATH` 为准的这些运行失败：

        ;%JAVA_HOME%\bin;%ANT_HOME%\bin
    

## 在 SDK 中打开一个新的项目

此时，若要创建一个新的项目您可以选择在命令行界面或一组特定于 android 操作系统 shell 工具中所述的跨平台 CLI 工具之间。 在源代码目录中，这里是从 CLI 的办法：

        $ cordova create hello com.example.hello HelloWorld
        $ cd hello
        $ cordova platform add android
        $ cordova build
    

这里是 Unix 和 Windows 的相应较低级别外壳工具方法：

        $ /path/to/cordova-android/bin/create /path/to/new/hello com.example.hello HelloWorld
        C:\path\to\cordova-android\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld
    

这里是如何使用 SDK 来修改它：

1.  启动**Eclipse**应用程序。

2.  选择**新建项目**菜单项。

3.  从结果对话框中，选择**从现有代码的 Android 项目**并按**下一步**：
    
    ![][6]

4.  如果您使用的 CLI，导航到 `hello` 您创建项目，然后到目录 `platforms/android` 子目录。 或者，如果您使用 `create` 壳实用程序，只需定位到 `hello` 目录。

5.  按**完成**.

 [6]: img/guide/platforms/android/eclipse_new_project.png

一旦日食窗口将打开，一个红色的**X**可能似乎表明未解决的问题。如果是这样，执行这些额外的步骤：

1.  右键单击项目目录。

2.  在出现的**属性**对话框中，选择**Android**从导航窗格。

3.  为项目生成目标，选择您已安装的最高的 Android API 级别。

4.  单击**确定**.

5.  从**项目**菜单中选择**清洁**。这应该更正该项目中的所有错误。

## 生成项目

如果您在开发中使用 CLI，项目目录的顶级 `www` 目录中包含的源代码文件。运行任一内要重新生成应用程序的项目目录：

        $ cordova build
        $ cordova build android   # do not rebuild other platforms
    

如果您使用特定于 android 操作系统外壳工具在发展中，有不同的方法。 一旦您生成该项目，默认应用程序的源是可用在 `assets/www` 子目录。 随后的命令都可用在其 `cordova` 子目录。

`build`命令，清理项目文件并重新生成应用程序。这里是为 Mac 和 Windows 的语法。 第一次两个示例生成调试信息，和第二个标志发布的应用程序：

        $ /path/to/project/cordova/build --debug
        C:\path\to\project\cordova\build.bat --debug
    
        $ /path/to/project/cordova/build --release
        C:\path\to\project\cordova\build.bat --release
    

## 配置仿真器

您可以使用任一 `cordova` CLI 实用程序或科尔多瓦的 Android 居中壳的工具在模拟器中运行应用程序。 不管怎样，SDK 必须首先配置以显示至少一个设备。 若要这样做，请使用 Android SDK 管理器中，从 Eclipse 独立运行的 Java 应用程序。 有两种方法来打开它：

1.  运行 `android` 命令行上。

2.  从内日食，按此工具栏图标：
    
    ![][7]

 [7]: img/guide/platforms/android/eclipse_android_sdk_button.png

一旦打开，Android SDK 管理器将显示不同的运行时库：

![][8]

 [8]: img/guide/platforms/android/asdk_window.png

选择**工具 → 管理 AVDs** （Android 的虚拟设备），然后从**设备定义**在随后出现的对话框中选择任何项：

![][9]

 [9]: img/guide/platforms/android/asdk_device.png

新闻**创建 AVD**，（可选） 修改该名称，然后按**确定**以接受这些更改：

![][10]

 [10]: img/guide/platforms/android/asdk_newAVD.png

AVD 然后出现在**虚拟的 Android 设备**列表中：

![][11]

 [11]: img/guide/platforms/android/asdk_avds.png

若要打开模拟器作为单独的应用程序，选择 AVD 然后按**开始**。它发射将在设备上，与其他控件可用的硬件按钮：

![][12]

 [12]: img/guide/platforms/android/asdk_emulator.png

## 部署到仿真程序

此时你可以使用 `cordova` CLI 实用程序将应用部署到仿真程序从命令行：

        $ cordova emulate android
    

否则请使用备用外壳接口：

        $ /path/to/project/cordova/run --emulator
    

不依赖于哪个仿真器当前已启用内 SDK，您可以引用每个由您提供的名称：

        $ /path/to/project/cordova/run --target=NAME
    

这将应用程序推到主屏幕，并启动它：

![][13]

 [13]: img/guide/platforms/android/emulator2x.png

当你 `run` 这款应用，你还 `build` 它。 您可以附加额外 `--debug` ， `--release` ，和 `--nobuild` 标志来控制它怎样构建的或甚至是否需要重新生成：

        $ /path/to/project/cordova/run --emulator --nobuild
    

如果改为你使用的日食，右键单击该项目，并选择**运行作为 → Android 应用程序**。可能要求您指定 AVD，如果都已经打开。

为获得更快的体验，您可以使用 `Virtual Machine Acceleration` 来提高执行速度。 许多现代 Cpu 提供扩展插件，以更有效地执行虚拟机。 尝试使用这种类型的加速度之前, 你需要确定是否您当前发展系统的 CPU，支持一种以下的虚拟化技术：

*   **英特尔虚拟化技术**(VT-x，vmx) →[英特尔 VT-x 支持的处理器列表][14]
*   **AMD 虚拟化**（AMD-V，支持向量机），只支持 Linux （自 2006 年 5 月以来所有 Cpu AMD 都包括 AMD-V，闪龙除外）。

 [14]: http://ark.intel.com/products/virtualizationtechnology

另一种方法，以找出您的英特尔处理器支持 VT-x 技术，它是由执行 `Intel Processor Identification Utility` ，为 `Windows` 你可以从英特尔[下载中心][15]，下载它，或者你可以使用[booteable 实用程序][16]，这是`OS Independent`.

 [15]: https://downloadcenter.intel.com/Detail_Desc.aspx?ProductID=1881&DwnldID=7838
 [16]: https://downloadcenter.intel.com/Detail_Desc.aspx?ProductID=1881&DwnldID=7840&lang=eng

以后安装和执行 `Intel Processor Identification Utility` 在 Windows 中，你会得到下面的窗口，以检查你的 CPU 是否支持虚拟化技术：

![][17]

 [17]: img/guide/platforms/android/intel_pid_util_620px.png

为了加快仿真程序，您需要下载并安装一个或多个 `Intel x86 Atom` 系统图像，以及`Intel Hardware Accelerated Execution Manager (HAXM)`.

打开您的 Android SDK 经理，并选择 `Intel x86 Atom` 系统图像，无论您想要测试的版本。 然后转至 `Extras` ，选择 `Intel x86 Emulator Accelerator (HAXM)` ，并安装这些软件包：

![][18]

 [18]: img/guide/platforms/android/asdk_man_intel_image_haxm.png

下载后，运行英特尔安装程序，这是在您 Android SDK 内可用 `extras/intel/Hardware_Accelerated_Execution_Manager` 。 **注**： `If you have any problems installing the package, you can find more information and step by step guidance check this` [英特尔条][19] .

 [19]: http://software.intel.com/en-us/android/articles/speeding-up-the-android-emulator-on-intel-architecture

1.  安装一个或多个 `Intel x86 Atom` 的系统映像，以及 `Intel Hardware Accelerated Execution Manager` 下**的额外**的可用.

2.  运行英特尔安装程序时，这是在您 Android SDK 内可用`extras/intel/Hardware_Accelerated_Execution_Manager`.

3.  设置为英特尔图像的目标来创建新的 AVD。

4.  当启动仿真程序，确保没有任何错误消息，指示未能加载 HAX 模块。

## 将部署到设备

要将应用程序推直接到设备，请确保您的设备上的[Android 开发者网站][20]，所述上启用 USB 调试和使用一个迷你 USB 电缆，将其插入您的系统。

 [20]: http://developer.android.com/tools/device.html

您可以使用此 CLI 命令将推送到该设备的应用程序：

        $ cordova run android
    

...或是使用此 Android 居中外壳接口：

        $ /path/to/project/cordova/run --device
    

无标志指定， `run` 命令检测到连接的设备或当前正在运行的仿真程序如果发现没有设备，否则将提示您指定一个模拟器。

若要运行在 Eclipse 内的从 app，右键单击该项目并选择**作为 → 运行 Android 应用程序**.

## 其他命令

以下将生成应用程序的详细的的日志，运行：

        $ /path/to/project/cordova/log
        C:\path\to\project\cordova\log.bat
    

以下清理项目文件：

        $ /path/to/project/cordova/clean
        C:\path\to\project\cordova\clean.bat