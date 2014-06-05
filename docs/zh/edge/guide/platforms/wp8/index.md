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

# Windows Phone 平台指南

本指南介绍如何设置您的 SDK 开发环境部署科尔多瓦的 Windows Phone 设备的应用程序。 它侧重于 Windows Phone 8，但提供如何支持 Windows Phone 7 的附加详细信息。

该示例演示如何使用任一特定的 Windows Phone 外壳程序工具来生成和生成的应用程序，或者跨平台科尔多瓦 CLI 讨论在命令行界面。 （见的概述的这些发展工作流比较）。此部分还显示了如何打开科尔多瓦的应用程序，以便您可以在 Visual Studio 中修改他们。 无论你采取哪种方法，您需要安装 Windows Phone SDK，如下所述。

见到 Windows Phone 平台特定的详细信息如下：

*   Windows Phone 插件
*   升级 Windows Phone

对于 Windows Phone 8 平台，科尔多瓦 web 视图依赖于互联网资源管理器中 10 作为自己的渲染引擎，因此作为一个实际问题你可以使用 IE10 的功能强大的调试器来测试并不调用科尔多瓦 Api 的任何 web 内容。 Windows Phone 开发者博客如何支持 IE10 和可比较的 WebKit 浏览器提供[有益的指导][1]。

 [1]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx

## 要求和支持

您需要以下各项：

*   64 位版本的 Windows 8 Pro，安装盘或*ISO*磁盘图像文件。 评估版是[Microsoft 开发人员网络][2]上可用。 Pro 版有必要运行设备仿真程序。

*   的[Windows Phone SDK][3].

 [2]: http://msdn.microsoft.com/en-US/evalcenter/jj554510
 [3]: https://dev.windowsphone.com/en-us/downloadsdk

为了开发科尔多瓦的 Windows Phone 设备的应用程序，您可以使用运行 Windows 的电脑，但你也可能发展的 mac，通过运行一个虚拟机环境或者通过使用新兵训练营双启动 Windows 的分区。 请查阅这些资源以设置在 Mac 上所需的 Windows 开发环境：

*   **VMWare 融合**： 要设置了 Windows 8 的虚拟机，按照[Microsoft 开发人员网络][4]，所提供的说明，然后请参阅配置 VMWare 融合的虚拟环境运行 SDK 捆绑的仿真器的准备工作信息。

*   **桌面的相似之处**： 若要设置 Windows 8 虚拟机，按照[Microsoft 开发人员网络][5]，所提供的说明，然后请参阅配置平行桌面虚拟环境运行 SDK 捆绑的仿真器的准备工作信息。

 [4]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426
 [5]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945424

<!--
- __VirtualBox__: To set up the Windows 8 virtual machine, follow the
  installation instructions provided by the [Microsoft Developer
  Network](http://msdn.microsoft.com/en-US/library/windows/apps/jj945425).

  2DO: virtualBox doesn't work yet; any extra config info?
-->

*   **新兵训练营**： 要设置了 Windows 8 的分区，请按照操作[Microsoft 开发人员网络][6]所提供的安装说明.

 [6]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945423

如果您在 PC 上开发，其处理器必须支持虚拟化 （英特尔*VT-x* ） 和[第二级别地址翻译 （板式）][7]。 请查阅[英特尔的支持的处理器的列表][8]。 虚拟化是通常默认禁用的所以您需要在您的 BIOS 设置中启用它。 PC 应该有至少 6.5 GB 的可用硬盘空间和 4 GB 的 RAM。

 [7]: http://en.wikipedia.org/wiki/Second_Level_Address_Translation
 [8]: http://ark.intel.com/Products/VirtualizationTechnology

## 使用科尔多瓦外壳工具

如果您想要使用科尔多瓦的 Windows Phone 居中外壳工具与 SDK 一起，你有两个基本选项：

*   本地访问它们生成的 CLI 的项目代码中。他们是可用在 `platforms/wp8/cordova` 目录在您添加后 `wp8` 平台如下所述。

*   从单独的分发在[cordova.apache.org][9]下载它们。 科尔多瓦分布包含单独的档案，为每个平台。 一定要展开相应的存档， `cordova-wp8\wp8` 在这种情况下，在一个空的目录内。 有关批处理实用程序可用在顶级 `bin` 目录。 (参阅**自述**文件，如果有必要作更详细的指示）。

 [9]: http://cordova.apache.org

这些外壳工具允许您创建、 构建和运行 Windows Phone 应用程序。 额外的命令行界面，可以跨所有平台的插件功能的信息，请参阅使用 Plugman 到管理插件。 指导如何开发插件和 Windows Phone 插件特定的 Windows Phone 平台的详细信息，请参阅应用程序插件。

## 安装 SDK

从[dev.windowsphone.com][3]的**下载**区域安装最新版本的 Windows Phone SDK。 你也可以安装更多最近的仿真程序更新程序包。

![][10]

 [10]: img/guide/platforms/wp8/wp8_downloadSDK.png

后安装的 SDK，您需要修改系统的路径，以使科尔多瓦可用 SDK 在 Windows 命令行：

*   首先你需要获取路径字符串。 打开**文件资源管理器中**，导航到 `C:\Windows\Microsoft.NET\Framework` ，然后打开最新的框架。 单击右边的导航路径查看完整路径的字符串，然后键入**CTRL c**复制它：
    
    ![][11]

*   然后你需要修改的路径。打开**控制面板**从 Windows 8 的主屏幕**应用程序**范围内：
    
    ![][12]

*   打开**系统**控制面板项目：
    
    ![][13]

*   从左侧的列表中选择**高级系统设置**：
    
    ![][14]

*   在结果面板的底部，请按**环境变量**按钮：
    
    ![][15]

*   从**用户变量**，选择**路径**，然后按**编辑**：
    
    ![][16]
    
    否则如果没有**路径**，按**新建**创建它。

*   如果一个路径的值已经存在，追加一个分号和粘贴先前复制的路径字符串。否则只需粘贴字符串：
    
    ![][17]
    
    这里是一个示例**路径**值，还可以指定 `npm` 安装科尔多瓦 CLI 所需的实用程序：
    
    C:\Users\me\AppData\Roaming\npm ；C:\Windows\Microsoft.NET\Framework\v4.0.30319

 [11]: img/guide/platforms/wp8/modpath_copy.png
 [12]: img/guide/platforms/wp8/modpath_control_panel.png
 [13]: img/guide/platforms/wp8/modpath_system.png
 [14]: img/guide/platforms/wp8/modpath_advanced.png
 [15]: img/guide/platforms/wp8/modpath_environment.png
 [16]: img/guide/platforms/wp8/modpath_edit.png
 [17]: img/guide/platforms/wp8/modpath_append.png

## 创建一个新项目

此时，若要创建一个新的项目您可以选择在命令行界面或一组特定的 Windows Phone 壳工具中所述的跨平台 CLI 工具之间。 在源代码目录中，这里是从 CLI 的办法：

        > cordova create hello com.example.hello HelloWorld
        > cd hello
        > cordova platform add wp8
    

这里是相应的较低级别外壳工具方法：

        C:\path\to\cordova-wp8\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld
    

## 生成项目

如果您在开发中使用 CLI，项目目录的顶级 `www` 目录中包含的源代码文件。运行任一内要重新生成应用程序的项目目录：

        > cordova build
        > cordova build wp8   # do not rebuild other platforms
    

如果您使用的 Windows Phone 特定 shell 工具在发展中，有不同的方法。 一旦您生成该项目，默认应用程序的源是可用在 `projects\wp8\www` 子目录。 随后的命令都可用在 `cordova` 子目录中同一级别的。

`build`命令，清理项目文件并重新生成应用程序。第一个示例将生成调试信息，和第二个标志发布的应用程序：

        C:\path\to\project\cordova\build.bat --debug        
        C:\path\to\project\cordova\build.bat --release
    

`clean`命令有助于冲洗掉下一步准备中的目录 `build` ：

        C:\path\to\project\cordova\clean.bat
    

## 部署到仿真程序

此时你可以使用 `cordova` CLI 实用程序将应用部署到仿真程序从命令行：

        > cordova emulate wp8
    

否则请使用备用外壳接口：

        C:\path\to\project\cordova\run
    

默认情况下， `run` 脚本调用该仿真程序标志，并为其接受附加生成标志， `--debug` 提供的默认值：

        C:\path\to\project\cordova\run --emulator --debug
        C:\path\to\project\cordova\run --emulator --release
        C:\path\to\project\cordova\run --emulator --nobuild
    

在启动仿真器设备图像与安装的应用程序。 在主屏幕中，导航到要启动的**HelloWorld**应用程序的应用程序面板。这显示了应用程序启动，其次是其主界面其初始屏幕：

![][18]

 [18]: img/guide/platforms/wp8/wp8_emulator.png

设备屏幕右侧顶部仿真程序的基本控件允许您纵向和横向方向之间切换。 **>**按钮将打开更多的控件使您可以测试更复杂的方向和姿态：

![][19]

 [19]: img/guide/platforms/wp8/wp8_emulator_orient.png

这些先进的控件还允许您修改该设备的位置或模拟动作序列：

![][20]

 [20]: img/guide/platforms/wp8/wp8_emulator_loc.png

## 将部署到设备

在测试之前您的设备上的应用程序，必须注册该设备。 有关如何部署和测试 Windows Phone 8 上的详细信息，请参考[微软的文档][21]。 此外，还要确保手机连接到计算机上，并在屏幕未锁定。

 [21]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105).aspx

然后运行下面的 CLI 命令，要在设备上运行的应用程序：

        > cordova run wp8
    

它对应于此较低级别 shell 命令：

        C:\path\to\project\cordova\run --device
    

或者，如果您工作在 Visual Studio 中， **Windows Phone 设备**从菜单中选择下拉在顶部，然后按绿色**播放**按钮附近，或其他类型**F5**.

## 修改在 SDK 中的项目

一旦你建立科尔多瓦 app，如上文所述，您可以使用 SDK 打开它。 各种 `build` 命令会生成一个 Visual Studio 解决方案 (*.sln*) 文件。 打开要修改内 Visual Studio 项目的文件。 基于 web 的源代码，该代码是在该项目内可用 `www` 目录。 以及其他工具 SDK 提供，下面的菜单控件使您可以启动该应用程序在 Windows Phone 仿真器中：

![][22]

 [22]: img/guide/platforms/wp8/wp8_vs.png

有关如何在您的工作流中使用科尔多瓦的命令行工具或 SDK 的建议咨询概述。 科尔多瓦 CLI 依赖经常会覆盖使用 SDK 的平台特定文件的跨平台源代码。 如果你想要在 SDK 内工作，使用较低级别壳工具作为 CLI 的替代。

## 对 Windows Phone 7 的支持

它是那么容易产生，它是为 Windows Phone 8，但它工作方式极其类似添加一个单独的平台是 Windows Phone 7 应用程序。 如果您使用的 CLI，只需指定 `wp7` 沿或而不是 `wp8` ：

        > cordova platform add wp7
        > cordova build wp7
        > cordova emulate wp7
    

`emulate`命令生成 Windows Phone 7 设备仿真程序显示一个不同的接口：

![][23]

 [23]: img/guide/platforms/wp8/wp7_emulator.png

如果您正在使用的平台为中心壳工具工作流，所有的步骤*安装科尔多瓦外壳工具*以上，部分中除了提取工具从 `cordova-wp8\wp7` 目录相反。 所有这些工具的工作相同，其 `wp8` 同行。

**注**： WebViews 举 Windows Phone 7 科尔多瓦应用程序不要*使用互联网资源管理器中 10 作为他们的呈现引擎，*并因而错过一些先进的 Windows Phone 8 的应用程序中可用的功能。 仍然，两者都执行相同的 Api 集。 您可以对 Windows Phone 8 设备，但不是运行 Windows Phone 7 应用程序： Windows Phone 8 应用程序*不*在 Windows Phone 7 设备上运行。