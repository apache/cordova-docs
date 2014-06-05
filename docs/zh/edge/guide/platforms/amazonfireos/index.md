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

## 简介

通过针对亚马逊火 OS 平台，科尔多瓦开发人员可以创建利用先进的 web 引擎集成的 Kindle 消防设备的混合 web 应用程序。 亚马逊 web 视图 API (AWV) 是独有的火 OS 铬派生的 web 运行时。 为 web 视图使用的 Android 设备附带的投递更换，AWV 使成为可能，更好地执行功能更强大的混合 web 应用程序通过创建为一个更快的 JavaScript 引擎 (V8)、 远程调试和 Kindle 消防设备包括加速 2D 画布的硬件优化提供支持和不支持的 Android 的 HTML5 功能的访问内置的 web 视图如: CSS 除垢，表单验证，getUserMedia，IndexedDB、 网络工作者、 WebSockets 和 WebGL。

关于亚马逊 web 视图 API 的详细信息，请参阅亚马逊开发人员门户[HTML5 混合应用程序页][1]。 有关获取开始和其他的问题支持问题，请参见亚马逊开发人员门户[论坛-HTML5 混合应用程序][2].

 [1]: https://developer.amazon.com/public/solutions/platforms/android-fireos/docs/building-and-testing-your-hybrid-app
 [2]: http://forums.developer.amazon.com/forums/category.jspa?categoryID=41

## 要求和支持

亚马逊火 os 开发科尔多瓦的应用程序需要安装的各种支持文件，包括 android 系统的发展，以及亚马逊 web 视图 SDK 所需的一切。 请检查下面的列表中所需的安装：

*   命令行界面
*   [Android SDK][3]
*   [Apache Ant][4]
*   [亚马逊 web 视图 SDK][1]

 [3]: http://developer.android.com/sdk/
 [4]: http://ant.apache.org

## 安装

### Android SDK 和 Apache Ant

从[developer.android.com/sdk][3]安装 Android SDK。 你可能会出现一个选择在哪里安装 SDK，否则移动下载 `adt-bundle` 树到无论您存储的开发工具。

你需要在运行 Android SDK 管理器 （ `android` 从命令行） 开始您的科尔多瓦项目前至少一次。 一定要安装最新版本的 Android SDK 工具和 SDK 平台**具体 API 级别为 19**。 请关于亚马逊开发人员门户如何设置您的开发环境为 Kindle 火 OS 设备的详细信息，参阅[您的开发环境设置][5]。

 [5]: https://developer.amazon.com/public/resources/development-tools/ide-tools/tech-docs/01-setting-up-your-development-environment

Apache Ant 生成工具[下载蚂蚁二进制分发][6]，解压缩到您以后可以引用的目录的安装。 请参阅[Ant 手册][7]为更多的信息。

 [6]: http://ant.apache.org/bindownload.cgi
 [7]: http://ant.apache.org/manual/index.html

对于科尔多瓦的命令行工具来工作，您需要包括 Android SDK 的 `tools` 、 `platform-tools` 和 `apache-ant/bin` 目录路径环境中的。

#### Mac/Linux 路径

关于 Mac、 Linux 或其他 unix 平台，您可以使用文本编辑器来创建或修改 `~/.bash_profile` 文件中，添加行，如下，依据的 SDK 和 Ant 安装位置：

    导出路径 = ${路径}：/开发/adt-捆绑/sdk/平台-工具：/开发/adt-捆绑/sdk/工具：/发展/阿帕奇-ant/bin
    

这暴露了 SDK 工具在新打开的终端窗口。否则运行这使它们在当前会话中可用：

    元源 ~/.bash_profile
    

#### Windows 路径

若要修改路径在 Windows 上的环境：

*   在桌面的左下角的**开始**菜单上单击，在**计算机**上，右键单击，然后单击**属性**.

*   在左侧列中，单击**高级系统设置**。

*   在结果对话框中，按下**环境变量**.

*   选择**PATH**变量，然后按**编辑**.

*   将以下内容追加到哪里你安装了 SDK 和蚂蚁，例如基于的路径：
    
        ;C:\Development\adt-bundle\sdk\platform-tools;C:\Development\adt-bundle\sdk\tools;C:\Development\apache-ant\bin
        

*   将值保存并关闭这两个对话框。

*   您还将需要启用 Java。 打开一个命令提示符并键入 `java` ，如果它没有运行，追加到您的路径以及 Java 二进制文件的位置。 请确保已安装 JDK 目录指向的 %JAVA\_HOME%。 您可能必须添加 JAVA\_HOME 环境变量分别。
    
        ； %JAVA_HOME%\bin
        

### 亚马逊 web 视图 SDK

若要创建使用目标亚马逊火 OS 平台的科尔多瓦应用程序，您需要下载、 解压和安装亚马逊 web 视图 SDK 的支持文件。 此步骤将只需要去做为第一次亚马逊火 OS 项目，或如果您升级科尔多瓦。

*   从[亚马逊开发人员门户][1]下载亚马逊 web 视图 SDK.

*   复制 `awv_interface.jar` 从下载 SDK 到科尔多瓦的工作目录：
    
    **Mac/Linux:** `~/.cordova/lib/amazon-fireos/cordova/[cordova_release]/framework/libs/`
    
    **Windows:** `%USERPROFILE%\.cordova\lib\amazon-fireos\cordova\[cordova_release]\framework\libs`

***注：***由于科尔多瓦的需求安装过程中， `~/.cordova/lib/amazon-fireos` 平台目录将不会创建，直到您将该平台添加到您的第一个项目。

## 为亚马逊火 OS 创建新项目

使用 `cordova` 实用程序设置了一个新的项目，如所述在科尔多瓦的命令行界面。例如，在源代码中的目录：

    $ cordova create hello com.example.hello "HelloWorld"
    $ cd hello
    $ cordova platform add amazon-fireos
    $ cordova build
    

***注：***首次亚马逊 fireos 平台安装在您系统上，它将到科尔多瓦的工作目录，下载相应的文件，但然后将失败，因为它缺少 AWV SDK 的支持文件 （见上文）。 按照上面的说明来安装 `awv_interface.jar` ，删除，然后重新将亚马逊 fireos 平台添加到您的项目。 这一步将只需要为第一次亚马逊火 OS 项目做。

## 将部署到设备

要将应用程序推直接到设备，请确保您的设备上的[Android 开发者网站][8]，所述上启用 USB 调试和使用一个迷你 USB 电缆，将其插入您的系统。

 [8]: http://developer.android.com/tools/device.html

从命令行，可以将应用程序推送到设备：

    $ 科尔多瓦运行亚马逊 fireos
    

交替内日食，右键单击该项目并选择**作为 → 运行 Android 应用程序**.

**注**： 目前，对于亚马逊 web 视图基于应用程序测试通过模拟器不支持，另外，亚马逊 web 视图 API 才可用火 OS 的设备上。 有关详细信息，请参阅[亚马逊 web 视图 API SDK][1]文档。

### 运行标志

运行命令接受作为科尔多瓦的命令行界面文档中指定的可选参数、 火 OS 还接受额外 `--debug` 将启用远程 web 调试铬的开发人员工具的旗子。

若要使用的开发工具，请输入：

    $ cordova run --debug amazon-fireos
    

这将使正在运行的客户端上的工具。你可以连接到客户端的端口转发使用 Android 调试桥 （亚银） 指的应用程序的包名。

例如：

    亚行转发 tcp:9222 localabstract:com.example.helloworld.devtools
    

然后，可以使用通过铬基于浏览器 DevTools 导航到：`http://localhost:9222`.

### 可选的 Eclipse 支持

创建后，您可以使用附带的 Android 的 SDK，修改项目的日食。 要注意是否您继续使用科尔多瓦的命令行工具，通过 Eclipse 所做的修改将被覆盖。

*   启动**Eclipse**应用程序。

*   选择**新建项目**菜单项。

*   从结果对话框中，选择**从现有代码的 Android 项目**并按**下一步**： ![][9]

*   定位到 `hello` ，或无论你创建目录的项目，然后到 `platforms/amazon-fireos` 子目录。

*   Eclipse 将显示你你好、 你好-CorddovaLib-2 项目要添加。添加两个。

*   按**完成**.

 [9]: img/guide/platforms//eclipse_new_project.png

一旦日食窗口将打开，一个红色的**X**可能似乎表明未解决的问题。如果是这样，执行这些额外的步骤：

*   右键单击项目目录。

*   在出现的**属性**对话框中，选择**Android**从导航窗格。

*   项目的生成目标，请选择最高的 Android API 级别 （目前 API 级别 19），安装了。

*   单击**确定**.

*   从**项目**菜单中选择**清洁**。这应该更正该项目中的所有错误。