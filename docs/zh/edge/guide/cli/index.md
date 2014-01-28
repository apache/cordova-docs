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

本指南演示如何创建应用程序并将它们部署到各种本机移动平台，使用 `cordova` 命令行界面 (CLI)。 此工具允许您创建新的项目、 生成它们在不同平台上，并运行实际设备或仿真程序内。 CLI 是要使用的跨平台工作流的主要工具 （见有关的各项工作流程说明概述）。然而，你也可以使用 CLI 初始化项目代码后，您使用各种平台 Sdk 和外壳工具为继续发展。

## 系统必备组件

在运行任何命令行工具之前, 您需要为每个您想要的目标的平台安装 Sdk。（参见平台指南更多详细信息。

若要添加支持或重建任何平台的一个项目，您需要从支持的平台 SDK 的同一台计算机上运行命令行界面。CLI 支持以下组合：

*   iOS (Mac)
*   亚马逊火 OS （Mac、 Linux、 Windows）
*   Android （Mac、 Linux）
*   黑莓 10 （Mac、 Linux、 Windows）
*   Windows Phone 7 (Windows)
*   Windows Phone 8 (Windows)
*   Windows 8 (Windows)
*   火狐浏览器操作系统 （Mac、 Linux、 Windows）

在 Mac 上，命令行是可通过*终端*应用的。在 PC 上，它是可作为*命令提示符*下*配件*.

就越有可能是你在 CLI 运行从不同的机器，更加意义保持远程源代码储存库，你拉下到本地工作目录的资产。

若要安装 `cordova` 命令行工具，请按照这些步骤操作：

1.  下载并安装[Node.js][1]。安装完成后，您应该能够调用 `node` 或 `npm` 在命令行上。

2.  安装 `cordova` 实用程序。在 Unix 中，前缀的额外 `sudo` 命令可能需要安装开发实用程序中以其他方式限制目录：
    
        $ sudo npm install -g cordova
        
    
    安装日志可能会产生错误的任何已卸载平台 Sdk。安装完成后，您应该能够运行 `cordova` 命令行上。
    
    **注**： `-g` 标志上面告诉故宫全局安装科尔多瓦。 您可能需要添加到您的路径，为了调用全局的故宫目录安装故宫模块。 在 Windows 上，故宫通常可以找到在 `C:\Users\username\AppData\Roaming\npm` 和在 Unix 上`/usr/local/share/npm`.

 [1]: http://nodejs.org/

## 创建应用程序

转至目录位置您维护您的源代码，并运行以下命令：

        $ cordova create hello com.example.hello HelloWorld
    

它可能需要一些时间完成的命令，有耐心。运行该命令与 `-d` 选项将显示有关其进度的信息。

*你好*第一个参数指定要为您的项目生成的目录。 此目录不应该存在，科尔多瓦将为您创建它。 其 `www` 子目录的房子您应用程序的主页上，与各种资源下 `css` ， `js` ，和 `img` ，其中遵循共同 web 发展的文件命名约定。 `config.xml`文件包含生成和分发应用程序所需的重要的元数据。

第二个参数 `com.example.hello` 为您的项目提供了一个反向域样式标识符。 此参数是可选的但只有当你也省略第三个参数，因为参数是位置。 您可以编辑以后此值在 `config.xml` 文件中，但一定要注意可能生成外部的代码 `config.xml` 使用此值，如 Java 软件包名称。 默认值是 `io.cordova.hellocordova` ，但它建议你选择一个适当的值。

第三个参数 `HelloWorld` 提供了应用程序的显示标题。 此参数是可选的。 您可以编辑以后此值在 `config.xml` 文件中，但一定要注意可能生成外部的代码 `config.xml` 使用此值，如 Java 类的名称。 默认值是 `HelloCordova` ，但它建议你选择一个适当的值。

## 添加平台

后面的所有命令都需要在项目的目录或在其范围内的任何子目录内运行：

        $ cd hello
    

您可以生成项目之前，您需要指定一组的目标平台。 您运行这些命令的能力取决于您的计算机是否支持每个 SDK，是否你已经安装每个 SDK。 运行任何这些从 Mac：

        $ cordova platform add ios
        $ cordova platform add amazon-fireos
        $ cordova platform add android
        $ cordova platform add blackberry10
        $ cordova platform add firefoxos
    

运行的这些 Windows 机器上，从任何地方*wp*指的是不同版本的 Windows Phone 操作系统：

        $ cordova platform add wp7
        $ cordova platform add wp8
        $ cordova platform add windows8
        $ cordova platform add amazon-fireos
        $ cordova platform add android
        $ cordova platform add blackberry10
        $ cordova platform add firefoxos
    

运行此检查当前设置的平台：

        $ cordova platforms ls
    

（请注意 `platform` 和 `platforms` 命令是同义语.)

请运行下列同义命令来删除一个平台之一：

        $ cordova platform remove blackberry10
        $ cordova platform rm amazon-fireos
        $ cordova platform rm android
    

运行命令来添加或删除平台影响项目的*平台*目录的内容每个指定的平台作为一个子目录中的显示位置。 *Www*源目录转载内每个平台的子目录中，例如出现在 `platforms/ios/www` 或 `platforms/android/assets/www` 。 因为 CLI 不断复制在源*www*文件夹中的文件，应只编辑这些文件，并不是位于*平台*的子目录下。 如果您使用的版本控制软件，您应将此源*www*文件夹，该*合并*的文件夹，添加到您的版本控制系统。 （有关*合并*文件夹的详细信息可以找到下面的自定义每个平台部分中）

**警告**： 当使用 CLI 来构建您的应用程序，您是从编辑中的任何文件，强烈建议不要采用 `/platforms/` 文件夹除非你知道你正在做什么，或特别在文档中以其他方式告知。 这是因为中的文件 `/platforms/` direcotry 将被覆盖上准备或插件重新安装。

如果您希望在此时，你可以使用 Eclipse 或 Xcode SDK 打开你创建的项目。 您将需要打开的资产从衍生金融工具集 `/platforms/` 要用 SDK 开发目录。 这是因为 SDK 的特定元数据文件存储在相应的 `/platform/` 子目录。 （见如何开发应用程序每个 IDE 内的信息平台指南）使用这种方法，如果你只是想要初始化使用 CLI 的项目，然后切换到 SDK 为本机的工作。

如果您想要使用的整个开发周期的跨平台的工作流方式 (CLI)，请继续阅读。

## 构建应用程序

默认情况下， `cordova create` 脚本生成骨骼肌的以基于 web 的应用，其主页是该项目的 `www/index.html` 文件。 编辑此应用程序，但是你想要但应作为的一部分指定的任何初始化 `deviceready` 事件处理程序中，从默认的引用`www/js/index.js`.

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
    

一些移动平台模拟特定设备默认情况下，iPhone 的 iOS 项目等。对于其他平台，您可能需要首先将设备仿真程序与相关联。

注： 仿真器支持目前不是可供亚马逊火 OS

（见平台指南的详细信息）。例如，您可能会首先运行 `android` 命令以启动 Android SDK，然后运行一个特定的设备图像，启动它根据其默认行为：

![][2]

 [2]: img/guide/cli/android_emulate_init.png

跟进与 `cordova emulate` 命令刷新显示的最新应用，现已从主屏幕发射的仿真程序图像：

![][3]

 [3]: img/guide/cli/android_emulate_install.png

或者，可以将手机插入您的计算机和直接测试应用程序：

        $ cordova run android
    

在运行此命令之前, 您需要设置的设备进行测试，之后会发生变化，为每个平台的程序。 在 Android 和亚马逊火 OS 设备，你将必须启用设备上的**USB 调试**的选项和或许添加 USB 驱动程序根据您发展导读工作。 每个平台的要求的详细信息，请参阅平台指南。

## 添加插件的功能

生成和查看一个新项目时，将显示默认的应用程序不会很多。 您可以修改该应用程序在许多方面，利用标准的 web 技术，但应用程序紧密的联系，与各种设备级功能，您需要添加插件，提供对核心科尔多瓦 Api 的访问。

*插件*是有点的加载项代码的提供的本机组件的接口。 您可以设计您自己的插件接口，例如，设计一个混合应用程序，与本机组件混合科尔多瓦 web 视图时。 （请参阅嵌入 WebViews 和插件开发指南的详细信息。更常见的是，您将添加插件，以便启用科尔多瓦的基本设备级功能详细的 API Reference 中之一。 可以在[plugins.cordova.io][4]发现这些插件，包括社会，所提供的附加插件的列表。 你可以使用 CLI 来搜索插件从此注册表。 例如，搜索 `bar` 和 `code` 产生单个结果相匹配这两个词作为子字符串不区分大小写：

 [4]: http://plugins.cordova.io/

        $ cordova plugin search bar code
    
        com.phonegap.plugins.barcodescanner - Scans Barcodes
    

仅搜索 `bar` 期限国债收益率和更多的结果：

        org.apache.cordova.statusbar - Cordova StatusBar Plugin
    

`cordova plugin add`命令需要您指定的插件代码的存储库。 请注意当你遵循 Web 项目开发工作流和使用 CLI，CLI 会照顾到适当的位置为每个平台添加插件的代码。 (如果你是在本机项目开发工作流，您会添加插件使用 Plugman （这里指南链接），多次为每个平台)。

这里是如何使用 CLI 将功能添加到应用程序的示例：

*   基本设备信息 （设备 API）：
    
        $ cordova plugin add org.apache.cordova.device
        

*   网络连接和电池事件：
    
        $ cordova plugin add org.apache.cordova.network-information
        $ cordova plugin add org.apache.cordova.battery-status
        

*   加速度计、 指南针、 和地理定位：
    
        $ cordova plugin add org.apache.cordova.device-motion
        $ cordova plugin add org.apache.cordova.device-orientation
        $ cordova plugin add org.apache.cordova.geolocation
        

*   相机、 媒体回放和捕获：
    
        $ cordova plugin add org.apache.cordova.camera
        $ cordova plugin add org.apache.cordova.media-capture
        $ cordova plugin add org.apache.cordova.media
        

*   访问设备或网络 （文件 API） 上的文件：
    
        $ cordova plugin add org.apache.cordova.file
        $ cordova plugin add org.apache.cordova.file-transfer
        

*   通过对话框或振动发出通知：
    
        $ cordova plugin add org.apache.cordova.dialogs
        $ cordova plugin add org.apache.cordova.vibration
        

*   联系人：
    
        $ cordova plugin add org.apache.cordova.contacts
        

*   全球化：
    
        $ cordova plugin add org.apache.cordova.globalization
        

*   闪屏：
    
        $ cordova plugin add org.apache.cordova.splashscreen
        

*   打开新的浏览器窗口 (InAppBrowser):
    
        $ cordova plugin add org.apache.cordova.inappbrowser
        

*   调试控制台：
    
        $ cordova plugin add org.apache.cordova.console
        

使用 `plugin ls` （或 `plugin list` ，或 `plugin` 本身） 查看当前已安装的插件。每个显示由其标识符：

        $ cordova plugin ls    # or 'plugin list'
        [ 'org.apache.cordova.console' ]
    

若要删除某个插件，它通过引用相同的标识符出现在该列表中。例如，这里是你会怎么移除调试控制台支持从一个发布版本：

        $ cordova plugin rm org.apache.cordova.console
        $ cordova plugin remove org.apache.cordova.console    # same
    

你可以批量删除或添加的插件通过指定多个参数的每个命令：

        $ cordova plugin add org.apache.cordova.console org.apache.cordova.device
    

## 高级的插件选项

当添加插件，几个选项允许您指定从何处获取该插件。 上面的示例使用知名 `registry.cordova.io` 注册表和插件指定的 `id` ：

        $ cordova plugin add org.apache.cordova.console
    

`id`还可能包括插件的版本号码后, 追加 `@` 字符。`latest`版本是最新版本的别名。例如：

        $ cordova plugin add org.apache.cordova.console@latest
        $ cordova plugin add org.apache.cordova.console@0.2.1
    

如果在没有注册该插件 `registry.cordova.io` 位于另一个 git 资源库中，但您可以指定一个备用的 URL：

        $ cordova plugin add https://github.com/apache/cordova-plugin-console.git
    

上面的 git 示例读取插件末尾的主分支上，但可以后追加一个标记或分支如备用 git ref `#` 字符：

        $ cordova plugin add https://github.com/apache/cordova-plugin-console.git#r0.2.0
    

如果插件 (和其 `plugin.xml` 文件） 是在 git 回购协议内的子目录中，您可以指定它与 `:` 的字符。 请注意， `#` 字符仍然需要：

        $ cordova plugin add https://github.com/someone/aplugin.git#:/my/sub/dir
    

您也可以组合 git ref 和子目录：

        $ cordova plugin add https://github.com/someone/aplugin.git#r0.0.1:/my/sub/dir
    

或者，指定包含的插件目录的本地路径 `plugin.xml` 文件：

        $ cordova plugin add ../my_plugin_dir
    

## 使用*合并*到自定义的每个平台

而科尔多瓦允许您轻松地部署许多不同平台的应用程序，有时需要添加自定义项。 在这种情况下，你不想修改中各项的源代码文件 `www` 内的顶级目录 `platforms` 目录，，因为他们定期更换与顶级 `www` 目录的跨平台源。

相反，顶级 `merges` 目录提供了一个指定资产在特定平台上部署的地方。 每个特定于平台的子目录内 `merges` 镜像的目录结构的 `www` 源树中，从而允许您重写或根据需要添加的文件。 例如，在这里是如何你可能会使用 `merges` 来推动 Android 和亚马逊火 OS 设备的默认字体大小：

*   编辑 `www/index.html` 文件，添加一个链接到一个额外的 CSS 文件，该文件 `overrides.css` 在这种情况下：
    
        <link rel="stylesheet" type="text/css" href="css/overrides.css" />
        

*   （可选） 创建一个空的 `www/css/overrides.css` 文件，将适用于所有非 Android 生成，防止丢失文件错误。

*   创建 `css` 中的子目录 `merges/android` ，然后添加相应的 `overrides.css` 文件。 指定将覆盖 12 点默认的字体大小范围内指定的 CSS `www/css/index.css` ，例如：
    
        body { font-size:14px; }
        

当你重新生成项目时，Android 版本功能自定义字体大小，而其他人保持不变。

您还可以使用 `merges` 添加中原物不存在的文件 `www` 目录。 例如，一个应用程序可以纳入*后退按钮*图形的 iOS 界面，存储在 `merges/ios/img/back_button.png` ，而 Android 版本可以改为捕获 `backbutton` 从相应的硬件按钮的事件。

## 帮助命令

科尔多瓦特点两三个全局命令，可以帮助你如果你卡住或遇到的问题。`help`命令显示所有可用的科尔多瓦命令和它们的语法：

    $ cordova help
    $ cordova        # same
    

`info`命令产生的潜在的有用的详细信息，如当前安装的平台，为每个平台 SDK 版本和插件的 CLI 版本的列表和 `node.js` ：

    $ cordova info
    

它既呈现到屏幕信息并捕获在本地输出 `info.txt` 文件。

**注**： 目前，仅在 iOS 和 Android 平台上的详细信息都可用。

## 更新科尔多瓦和您的项目

安装后 `cordova` 实用程序，您可以始终进行更新到最新版本通过运行以下命令：

        $ sudo npm update -g cordova
    

使用此语法来安装特定的版本：

        $ sudo npm install -g cordova@3.1.0
    

运行 `cordova -v` 查看当前运行的版本。 运行 `npm
info` 命令长列表，其中包含当前版本以及其他可用的版本号：

        $ npm info cordova
    

科尔多瓦 3.0 是要支持这一节中描述的命令行界面的第一个版本。 如果您正在从 3.0 以前的版本更新，您需要创建一个新项目，如以上所述，然后将旧应用程序的资源复制到顶级 `www` 目录。 在适用的情况，进一步有关升级到 3.0 的详细信息是可用的平台指南中。 一旦你升级到 `cordova` 的命令行界面和使用 `npm update` 待当前，那里所描述的更耗时过程不再相关。

科尔多瓦 3.0 + 可能仍然需要对项目级别的目录结构和其他依赖关系的各种变化。 在您运行 `npm` 命令上面更新科尔多瓦本身，您可能需要确保您的项目资源符合最新的版本要求。 运行下面这样的命令为每个平台您正在构建：

        $ cordova platform update android
        $ cordova platform update ios
        ...etc.