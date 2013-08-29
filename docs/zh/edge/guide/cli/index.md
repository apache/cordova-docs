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

# 命令行界面

本指南演示如何创建应用程序并将它们部署到各种本机移动平台，使用 `cordova` 命令行界面 (CLI)。 此工具允许您创建新项目、 建立他们在不同平台上，和在模拟器中运行它们。 此外可以使用 CLI 来初始化后，您使用各种平台 Sdk 来进一步发展他们的项目代码。

## 系统必备组件

在运行任何命令行工具之前, 您需要为每个您想要的目标的平台安装 Sdk。（参见平台指南更多详细信息。

若要添加支持或重建任何平台的一个项目，您需要从支持的平台 SDK 的同一台计算机上运行命令行界面。CLI 支持以下组合：

*   iOS (Mac)
*   Android （Mac、 Linux）
*   黑莓 10 （Mac、 Linux、 Windows）
*   Windows Phone 7 (Windows)
*   Windows Phone 8 (Windows)

在 Mac 上，命令行是可通过*终端*应用的。在 PC 上，它是可作为*命令提示符*下*配件*.

就越有可能是你在 CLI 运行从不同的机器，更加意义保持远程源代码储存库，你拉下到本地工作目录的资产。

若要安装 `cordova` 命令行工具，请按照这些步骤操作：

1.  下载并安装[Node.js][1]。安装完成后，您应该能够调用 `node` 或 `npm` 在命令行上。

2.  安装 `cordova` 实用程序。在 Unix 中，前缀的额外 `sudo` 命令可能需要安装开发实用程序中以其他方式限制目录：
    
        $ sudo npm install -g cordova
        
    
    安装日志可能会产生错误的任何已卸载平台 Sdk。安装完成后，您应该能够运行 `cordova` 命令行上。

 [1]: http://nodejs.org/

## 创建应用程序

转至目录位置您维护您的源代码，并运行以下命令：

        $ cordova create hello com.example.hello HelloWorld
    

它可能需要一些时间完成的命令，有耐心。运行 `cordova -d` ，请参阅有关进展的信息。

第一个参数指定要为您的项目生成的*你好*目录。 其 `www` 子目录的房子您应用程序的主页上，与各种资源下 `css` ， `js` ，和 `img` ，其中遵循共同 web 发展的文件命名约定。 `config.xml`文件包含生成和分发应用程序所需的重要的元数据。

其他的两个参数都是可选的： `com.example.hello` 参数提供您的项目具有反向域样式标识符和 `HelloWorld` 提供了应用程序的显示文本。 您可以编辑这两以后这些值在 `config.xml` 文件。

## 添加平台

后面的所有命令都需要在项目的目录或在其范围内的任何子目录内运行：

        $ cd hello
    

您可以生成项目之前，您需要指定一组的目标平台。 您运行这些命令的能力取决于您的计算机是否支持每个 SDK，是否你已经安装每个 SDK。 运行任何这些从 Mac：

        $ cordova platform add ios
        $ cordova platform add android
        $ cordova platform add blackberry10
    

运行的这些 Windows 机器上，从任何地方*wp*指的是不同版本的 Windows Phone 操作系统：

        $ cordova platform add wp7
        $ cordova platform add wp8
        $ cordova platform add android
        $ cordova platform add blackberry10
    

运行此检查当前设置的平台：

        $ cordova platforms ls
    

（请注意 `platform` 和 `platforms` 命令是同义语.)

请运行下列同义命令来删除一个平台之一：

        $ cordova platform remove blackberry10
        $ cordova platform rm android
    

运行命令来添加或删除平台影响项目的*平台*目录的内容每个指定的平台作为一个子目录中的显示位置。 *Www*源目录转载内每个平台的子目录中，例如出现在 `platforms/ios/www` 或 `platforms/android/assets/www` 。 默认情况下，每个平台配置文件设置，以便能够访问所有的科尔多瓦的 Api。

如果您愿意，您可以使用 SDK 在此时打开你创建的项目。 但是，所做的任何编辑你到内 SDK 影响衍生项目设置的资产，不是原始的跨平台源代码文件。 如果你只是想要初始化一个项目，请使用此方法。 （见如何开发应用程序内每个 SDK 平台指南的信息）如果您想使用命令行工具的整个开发周期，请继续阅读。

## 构建应用程序

默认情况下， `cordova create` 脚本生成骨骼肌的以基于 web 的应用，其主页是该项目的 `www/index.html` 文件。 编辑此应用程序，但是你想要但应作为的一部分指定的任何初始化 `deviceready` 事件处理程序中，从默认的引用 `www/js/index.js` 。 <!-- XREF
(See the Application Development Guide for details.)
XREF -->

运行以下命令以迭代方式生成项目：

        $ cordova build
    

这将生成特定于平台代码内项目的 `platforms` 子目录。你可以选择限制到特定的平台每个生成的范围：

        $ cordova build ios
    

`cordova build`命令是以下，而在此示例中还针对的是一个单一的平台的简写形式：

        $ cordova prepare ios
        $ cordova compile ios
    

在这种情况下，一次您运行 `prepare` ，你可以作为备用使用苹果公司的 Xcode SDK 修改和编译科尔多瓦在范围内生成的特定于平台代码 `platforms/ios` 。 您可以使用相同的方法与其他平台的 Sdk。

## 测试仿真器或设备上的应用程序

移动平台 Sdk 经常与捆绑在一起执行设备的图像，以便您可以启动该应用程序从主屏幕并看看它如何与许多平台功能交互的仿真程序。 运行如下命令来重新生成应用程序并查看它在特定的平台仿真器内：

        $ cordova emulate android
    

一些移动平台模拟特定设备默认情况下，iPhone 的 iOS 项目等。 对于其他平台，您可能需要首先将设备仿真程序与相关联。 （见平台指南的详细信息）。例如，您可能会首先运行 `android` 命令以启动 Android SDK，然后运行一个特定的设备图像，启动它根据其默认行为：

![][2]

 [2]: img/guide/cli/android_emulate_init.png

跟进与 `cordova emulate` 命令刷新显示的最新应用，现已从主屏幕发射的仿真程序图像：

![][3]

 [3]: img/guide/cli/android_emulate_install.png

或者，可以将手机插入您的计算机和直接测试应用程序：

        $ cordova run android
    

在运行此命令之前, 您需要设置的设备进行测试，之后会发生变化，为每个平台的程序。 在 Android 的情况下，你将必须启用设备上的**USB 调试**的选项和或许添加 USB 驱动程序根据您发展导读工作。 每个平台的要求的详细信息，请参阅平台指南。

## 添加功能

生成和查看一个新项目时，将显示默认的应用程序不会很多。 您可以修改该应用程序在许多方面，利用标准的 web 技术，但应用程序紧密的联系，与各种设备级功能，您需要添加插件，提供对核心科尔多瓦 Api 的访问。

*插件*是有点的加载项代码的提供的本机组件的接口。 您可以设计您自己的插件接口，例如，设计一个混合应用程序，与本机组件混合科尔多瓦 web 视图时。 （请参阅嵌入 WebViews 和插件开发指南的详细信息。更常见的是，您将添加插件，使科尔多瓦的基本设备级功能之一 <!--应用程序开发指南中讨论的 XREF 和--> XREF 详细的 API Reference 中。

`cordova plugin add`命令需要您指定的插件代码的存储库。以下是您可能会添加的功能的示例：

*   基本设备信息 （设备 API）：
    
        $ 科尔多瓦插件添加 https://git-wip-us.apache.org/repos/asf/cordova-plugin-device.git
        

*   网络连接和电池事件：
    
        $ 科尔多瓦插件添加 https://git-wip-us.apache.org/repos/asf/cordova-plugin-network-information.git $ 科尔多瓦插件添加 https://git-wip-us.apache.org/repos/asf/cordova-plugin-battery-status.git
        

*   加速度计、 指南针、 和地理定位：
    
        $ 科尔多瓦插件添加 https://git-wip-us.apache.org/repos/asf/cordova-plugin-device-motion.git $ 科尔多瓦插件添加 https://git-wip-us.apache.org/repos/asf/cordova-plugin-device-orientation.git $ 科尔多瓦插件添加 https://git-wip-us.apache.org/repos/asf/cordova-plugin-geolocation.git
        

*   相机、 媒体回放和捕获：
    
        $ 科尔多瓦插件添加 https://git-wip-us.apache.org/repos/asf/cordova-plugin-camera.git $ 科尔多瓦插件添加 https://git-wip-us.apache.org/repos/asf/cordova-plugin-media-capture.git $ 科尔多瓦插件添加 https://git-wip-us.apache.org/repos/asf/cordova-plugin-media.git
            

*   访问设备或网络 （文件 API） 上的文件：
    
        $ 科尔多瓦插件添加 https://git-wip-us.apache.org/repos/asf/cordova-plugin-file.git $ 科尔多瓦插件添加 https://git-wip-us.apache.org/repos/asf/cordova-plugin-file-transfer.git
        

*   通过对话框或振动发出通知：
    
        $ 科尔多瓦插件添加 https://git-wip-us.apache.org/repos/asf/cordova-plugin-dialogs.git $ 科尔多瓦插件添加 https://git-wip-us.apache.org/repos/asf/cordova-plugin-vibration.git
        

*   联系人：
    
        $ 科尔多瓦插件添加 https://git-wip-us.apache.org/repos/asf/cordova-plugin-contacts.git
        

*   全球化：
    
        $ 科尔多瓦插件添加 https://git-wip-us.apache.org/repos/asf/cordova-plugin-globalization.git
        

*   闪屏：
    
        $ 科尔多瓦插件添加 https://git-wip-us.apache.org/repos/asf/cordova-plugin-splashscreen.git
        

*   打开新的浏览器窗口 (InAppBrowser):
    
        $ 科尔多瓦插件添加 https://git-wip-us.apache.org/repos/asf/cordova-plugin-inappbrowser.git
        

*   调试控制台：
    
        $ 科尔多瓦插件添加 https://git-wip-us.apache.org/repos/asf/cordova-plugin-console.git
        

使用 `plugin ls` （或 `plugin list` ，或 `plugin` 本身） 查看当前已安装的插件。每个显示由其标识符：

        $ 科尔多瓦插件 ls # 或 '插件列表' ['org.apache.cordova.core.console']
    

若要删除某个插件，它通过引用相同的标识符出现在该列表中。例如，这里是你会怎么移除调试控制台支持从一个发布版本：

        $ 科尔多瓦插件 rm org.apache.cordova.core.console $ 科尔多瓦插件删除 org.apache.cordova.core.console # 相同
    

你可以批量删除或添加的插件通过指定多个参数的每个命令。

## 自定义每个平台

而科尔多瓦允许您轻松地部署许多不同平台的应用程序，有时需要添加自定义项。 在这种情况下，你不想修改中各项的源代码文件 `www` 内的顶级目录 `platforms` 目录，，因为他们定期更换与顶级 `www` 目录的跨平台源。

相反，顶级 `merges` 目录提供了一个指定资产在特定平台上部署的地方。 每个特定于平台的子目录内 `merges` 镜像的目录结构的 `www` 源树中，从而允许您重写或根据需要添加的文件。 例如，在这里是如何你可能会使用 `merges` 来提振的 Android 设备的默认字体大小：

*   编辑 `www/index.html` 文件，添加一个链接到一个额外的 CSS 文件，该文件 `overrides.css` 在这种情况下：
    
        < 链接 rel ="样式表"类型 ="文本/css"href="css/overrides.css"/ >
        

*   （可选） 创建一个空的 `www/css/overrides.css` 文件，将适用于所有非 Android 生成，防止丢失文件错误。

*   创建 `css` 中的子目录 `merges/android` ，然后添加相应的 `overrides.css` 文件。 指定将覆盖 12 点默认的字体大小范围内指定的 CSS `www/css/index.css` ，例如：
    
        正文 {字体-大小: 14px;}
        

当你重新生成项目时，Android 版本功能自定义字体大小，而其他人保持不变。

您还可以使用 `merges` 添加中原物不存在的文件 `www` 目录。 例如，一个应用程序可以纳入*后退按钮*图形的 iOS 界面，存储在 `merges/ios/img/back_button.png` ，而 Android 版本可以改为捕获 `backbutton` 从相应的硬件按钮的事件。

## 更新科尔多瓦

安装后 `cordova` 实用程序，您可以始终进行更新到最新版本通过运行以下命令：

        $ sudo 故宫更新-g 科尔多瓦
    

使用此语法来安装特定的版本：

        $ sudo 故宫安装-g cordova@3.0.0
    

运行 `cordova -v` ，查看当前运行的版本。 运行 `npm
info` 命令长列表，其中包含当前版本以及其他可用的版本号：

        $ 故宫信息科尔多瓦
    

科尔多瓦 3.0 是要支持这一节中描述的命令行界面的第一个版本。 如果您正在从 3.0 以前的版本更新，您需要创建一个新项目，如以上所述，然后将旧应用程序的资源复制到顶级 `www` 目录。 在适用的情况，进一步有关升级到 3.0 的详细信息是可用的平台指南中。 一旦你升级到 `cordova` 的命令行界面和使用 `npm update` 待当前，那里所描述的更耗时过程不再相关。