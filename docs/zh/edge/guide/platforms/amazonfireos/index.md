---

许可证： 下一个或多个参与者许可协议许可向阿帕奇软件基金会 (ASF)。 请参阅分布式与此工作为版权的所有权有关的其他信息的通知文件。 ASF 许可证，此文件到你根据 Apache 许可证，2.0 版 （"许可证"） ；您不可能使用此文件除了符合许可证。 您可能会获得在许可证的副本

           http://www.apache.org/licenses/LICENSE-2.0 除非适用的法律要求或书面同意，否则按照该许可证分发的软件分发上"按原样"的基础，而不担保或条件的任何种类的明示或暗示。  请参阅许可证规定的权限和限制的特定语言
    

## 根据许可证。

# 亚马逊火 OS 平台指南

本指南介绍如何设置您的 SDK 开发环境部署亚马逊火 OS 的设备，如 Kindle 火 HDX 科尔多瓦应用软件。

请参阅下列特定于平台的详细信息：

*   亚马逊火 OS 配置
*   亚马逊火 OS WebViews
*   亚马逊火 OS 插件

## 要求和支持

亚马逊火 os 开发科尔多瓦的应用程序需要 Android SDK 和亚马逊 web 视图 SDK。检查的要求这些 Sdk 在下面的链接：

*   [Android SDK 系统][1]

*   [亚马逊 web 视图 SDK][2]

 [1]: http://developer.android.com/sdk/
 [2]: https://developer.amazon.com/sdk/fire/IntegratingAWV.html#installawv

## 安装

### Android SDK

从[developer.android.com/sdk][1]安装 Android SDK。 你可能会出现一个选择在哪里安装 SDK，否则移动下载 `adt-bundle` 树到无论您存储的开发工具。

科尔多瓦命令行工具来工作，您需要包括 SDK 的 `tools` 和 `platform-tools` 的路径环境中目录。

关于 Mac、 Linux 或其他 unix 平台，您可以使用文本编辑器来创建或修改 `~/.bash_profile` 文件中，添加行，如下，根据 SDK 的安装位置：

    导出路径 = ${路径}：/开发/adt-捆绑/sdk/平台-工具：/开发/adt-捆绑/sdk/工具
    

这暴露了 SDK 工具在新打开的终端窗口。否则运行这使它们在当前会话中可用：

    元源 ~/.bash_profile
    

若要修改路径上 Windows 7 的环境：

*   在桌面的左下角的**开始**菜单上单击，在**计算机**上，右键单击，然后单击**属性**.

*   在左侧列中，单击**高级系统设置**。

*   在结果对话框中，按下**环境变量**.

*   选择**PATH**变量，然后按**编辑**.

*   将以下内容追加到基于例如安装 SDK 的位置的路径：
    
        ;C:\Development\adt-bundle\sdk\platform-tools ；C:\Development\adt-bundle\sdk\tools
        

*   将值保存并关闭这两个对话框。

您可能还需要启用 Java 和蚂蚁打开一个命令提示符并键入 `java` ，然后还键入 `ant` 。将追加到该路径无法运行的日期为准：

    ;%JAVA_HOME%\bin;%ANT_HOME%\bin
    

### 亚马逊 web 视图 SDK

从[亚马逊开发人员门户][2]下载亚马逊 web 视图 SDK.

*   创建 `libs/` 中的文件夹 `~/.cordova/lib/amazon-fireos/cordova/3.1.0/` 文件夹。
*   添加 `awv_interface.jar` 从下载 SDK 进行`~/.cordova/lib/amazon-fireos/cordova/3.1.0/libs/`

## 在 SDK 中打开的项目

使用 `cordova` 实用程序设置了一个新的项目，如所述在科尔多瓦命令行界面。例如，在源代码中的目录：

    $ cordova create hello com.example.hello "HelloWorld"
    $ cd hello
    $ cordova platform add amazon-fireos
    $ cordova build
    

一旦创建了，这里是如何使用 SDK 来修改它：

*   启动**Eclipse**应用程序。

*   选择**新建项目**菜单项。

*   从结果对话框中，选择**从现有代码的 Android 项目**并按**下一步**： ![][3]

*   定位到 `hello` ，或无论你创建目录的项目，然后到 `platforms/amazon-fireos` 子目录。

*   按**完成**.

 [3]: img/guide/platforms//eclipse_new_project.png

一旦日食窗口将打开，一个红色的**X**可能似乎表明未解决的问题。如果是这样，执行这些额外的步骤：

*   右键单击项目目录。

*   在出现的**属性**对话框中，选择**Android**从导航窗格。

*   为项目生成目标，选择您已安装的最高的 Android API 级别。

*   单击**确定**.

*   从**项目**菜单中选择**清洁**。这应该更正该项目中的所有错误。

## 将部署到设备

要将应用程序推直接到设备，请确保您的设备上的[Android 开发者网站][4]，所述上启用 USB 调试和使用一个迷你 USB 电缆，将其插入您的系统。

 [4]: http://developer.android.com/tools/device.html

从命令行，可以将应用程序推送到设备：

    $ cordova run amazon-fireos
    

交替内日食，右键单击该项目并选择**作为 → 运行 Android 应用程序**.

**注**： 目前，通过仿真程序测试不支持对于亚马逊 web 视图基于的应用程序。