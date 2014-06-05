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

# Windows 8 平台指南

本指南介绍如何设置您的 SDK 开发环境部署科尔多瓦在 Windows 8 的应用程序。 该示例演示如何使用任一特定于 Windows 8 的外壳工具来生成和生成的应用程序，或者跨平台科尔多瓦 CLI 讨论在命令行界面。 （见的概述的这些发展选项比较）。此部分还显示如何修改科尔多瓦在 Visual Studio 中的应用程序。 无论你采取哪种方法，您需要安装 Visual Studio SDK，如下所述。

有关如何升级现有的 Windows 8 科尔多瓦项目的信息，请参阅升级 Windows 8。

科尔多瓦 WebViews 运行在 Windows 8 上依靠互联网资源管理器中 10 作为他们的呈现引擎，因此作为一个实际问题你可以使用 IE10 的功能强大的调试器来测试并不调用科尔多瓦 Api 的任何 web 内容。 Windows Phone 开发者博客如何支持 IE10 和可比较的 WebKit 浏览器提供[有益的指导][1]。

 [1]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx

## 要求和支持

您需要以下 OS/SDK 组合，可以从安装盘或*ISO*磁盘图像文件之一：

*   Windows 8.0 或 8.1、 32 或 64 位*首页*、*临*，或*企业*版，以及[Visual Studio 2012 速成版][2].

*   Windows 8.1、 32 或 64 位*首页*、*临*，或*企业*版，以及[Visual Studio 2013 专业版][2]或更高。 评估版的 Windows 8.1 企业是可从[Microsoft 开发人员网络][3].

 [2]: http://www.visualstudio.com/downloads
 [3]: http://msdn.microsoft.com/en-US/evalcenter/jj554510

根据 Windows 8.1 编译的应用程序*不*在 Windows 8.0 下运行。根据 Windows 8.0 编译的应用程序是向前兼容的 8.1。

<!-- 64-bit necessary? Pro necessary? ELSE still recommended for parallel WP dev -->

按照在[windowsstore.com][4]的说明提交到 Windows 应用商店的应用程序。

 [4]: http://www.windowsstore.com/

<!-- true? -->

为了为 Windows 8 开发科尔多瓦的应用程序，您可以使用运行 Windows 的个人电脑，但你也可能发展的 mac，通过运行一个虚拟机环境或者通过使用到双引导 Windows 8 分区的新兵训练营。 请查阅这些资源以设置在 Mac 上所需的 Windows 开发环境：

*   [VMWare 融合][5]

*   [相似之处的桌面][6],

*   [新兵训练营][7].

 [5]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426
 [6]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945424
 [7]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945423

## 使用科尔多瓦外壳工具

如果您想要使用科尔多瓦的 Windows 8 居中外壳工具与 SDK 一起，你有两个基本选项：

*   本地访问它们生成的 CLI 的项目代码中。 他们是可用在 `platforms/windows8/cordova` 目录在您添加后 `windows8` 平台如下所述。

*   从单独的分发在[cordova.apache.org][8]下载它们。 科尔多瓦分布包含单独的档案，为每个平台。 一定要展开相应的存档， `cordova-windows8\windows8` 在这种情况下，在一个空的目录内。 有关批处理实用程序可用在顶级 `bin` 目录。 (参阅**自述**文件，如果有必要作更详细的指示）。

 [8]: http://cordova.apache.org

这些外壳工具允许您创建、 构建和运行 Windows 8 的应用程序。 额外的命令行界面，可以跨所有平台的插件功能的信息，请参阅使用 Plugman 到管理插件。

## 安装 SDK

*最终*、*溢价*或*专业*2013年版本的[Visual Studio][2]安装.

![][9]

 [9]: img/guide/platforms/win8/win8_installSDK.png

## 创建一个新项目

此时，若要创建一个新的项目您可以选择在命令行界面或一组 Windows 8 特定 shell 工具中所述的跨平台 CLI 工具之间。 从内一个源代码目录，此 CLI 方法生成命名在一个新的*HelloWorld*应用程序 `hello` 的项目目录：

        > cordova create hello com.example.hello HelloWorld
        > cd hello
        > cordova platform add windows8
        > cordova build
    

这里是相应的较低级别外壳工具方法：

        C:\path\to\cordova-win8\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld
    

## 生成项目

如果您在开发中使用 CLI，项目目录的顶级 `www` 目录中包含的源代码文件。运行任一内要重新生成应用程序的项目目录：

        > cordova build
        > cordova build windows8   # do not rebuild other platforms
    

如果您使用的 Windows Phone 特定 shell 工具在发展中，有不同的方法。 一旦您生成该项目，默认应用程序的源是可用在 `projects\windows8\www` 子目录。 随后的命令都可用在 `cordova` 子目录中同一级别的。

`build`命令，清理项目文件并重新生成应用程序。第一个示例将生成调试信息，和第二个标志发布的应用程序：

        C:\path\to\project\cordova\build.bat --debug        
        C:\path\to\project\cordova\build.bat --release
    

`clean`命令有助于冲洗掉下一步准备中的目录 `build` ：

        C:\path\to\project\cordova\clean.bat
    

## 在 SDK 中打开的项目和部署应用程序

一旦你建立科尔多瓦 app，如上文所述，您可以与 Visual Studio 一起打开它。 各种 `build` 命令生成一个 Visual Studio 解决方案 (*.sln*) 文件。 在文件浏览器来修改在 Visual Studio 项目中打开文件：

![][10]

 [10]: img/guide/platforms/win8/win8_sdk_openSLN.png

`CordovaApp`组件显示在解决方案内和其 `www` 目录中包含的基于 web 的源代码，包括 `index.html` 的主页：

![][11]

 [11]: img/guide/platforms/win8/win8_sdk.png

Visual Studio 主菜单下面的控件允许您测试或部署应用程序：

![][12]

 [12]: img/guide/platforms/win8/win8_sdk_deploy.png

选择**本地计算机**，请按绿色箭头，在运行 Visual Studio 在同一台计算机上安装该应用程序。一旦你这样做，应用程序将出现在 Windows 8 的应用程序清单：

![][13]

 [13]: img/guide/platforms/win8/win8_sdk_runApp.png

每次您重新生成应用程序，在界面中可用的版本被刷新一次。

一旦可用应用程序列表中，按住**CTRL**键同时选择该应用程序允许您把它钉在主屏幕：

![][14]

 [14]: img/guide/platforms/win8/win8_sdk_runHome.png

请注意是否您打开该应用程序在虚拟机环境中的，您可能需要单击在角落或沿边的 windows 访问额外的功能或切换应用程序：

![][15]

 [15]: img/guide/platforms/win8/win8_sdk_run.png

或者，选择**模拟器**部署选项以查看应用程序，如果它运行在平板设备上：

![][16]

 [16]: img/guide/platforms/win8/win8_sdk_sim.png

与不同的桌面部署，此选项允许您模拟平板的方向、 位置，并更改其网络设置。

**注意**： 有关如何在您的工作流中使用科尔多瓦的命令行工具或 SDK 的建议咨询概述。 科尔多瓦 CLI 依赖经常会覆盖使用 SDK 的平台特定文件的跨平台源代码。 如果您想要使用 SDK 来修改该项目，使用较低级别壳工具作为 CLI 的替代。