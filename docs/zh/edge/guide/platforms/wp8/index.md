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

# Windows Phone 8 平台指南

本指南介绍如何设置您的 SDK 开发环境部署科尔多瓦为 Windows Phone 8 设备的应用程序。 如果你想要的目标 7.5 和 8 设备，而是尽可能详细的 Windows Phone 7 平台指南开发为 Windows Phone 7。 第 7 版并没有包括在 IE10 中的所有高级的功能，但实现相同的 Api 集。 Windows Phone 8 应用程序*不*在 Windows Phone 7 设备上运行。

适用于这两个版本的更多详细的平台特定信息如下所示：

*   升级 Windows Phone
*   Windows Phone 插件
*   Windows Phone 的命令行工具

上面的命令行工具请参阅科尔多瓦 3.0 以前的版本。关于当前界面的信息，请参阅命令行界面。

## 1.系统要求

*   操作系统：
    
    *   Windows 8 或 Windows 8 临 
        *   需要的 SDK 的 Windows 64 位版本 (x64)。
        *   Pro 版建议以便您可以运行的设备仿真程序。

*   硬件：
    
    *   6.5 GB 的可用硬盘空间
    *   4 GB RAM
    *   (x64) 64 位 CPU

*   Windows Phone 8 仿真器
    
    *   手机仿真器使用 HYPER-V，因此该列表只包含那些必备。
    *   Windows 8 Pro 64 位版或更高
    *   需要支持虚拟化的处理器和 [第二级别地址翻译 (板式)][1] 
        *   查看[列表中的英特尔处理器支持 VT-x （虚拟化） 和 EPT (板式)][2]
    *   启用虚拟化功能 （即，VT-x 上英特尔） 在您的 BIOS 设置，如默认情况下通常禁用此。

*   SDK + IDE (Visual Studio)
    
    *   Visual Studio 2012 专业、 保费或极限。 请注意 Visual Studio 表示为 Windows Phone （包含在 SDK） 建议不要因为你可以不生成模板 （见下文） 与 VS 表示，由于它并没有**导出模板**功能，这是只有在 VS Pro 或更高。

*   注册和支付为[Windows Phone 开发中心][3]帐户，如果你想要在实际设备上安装您的应用程序或将其提交给市场的地方。

 [1]: http://en.wikipedia.org/wiki/Second_Level_Address_Translation
 [2]: http://ark.intel.com/Products/VirtualizationTechnology
 [3]: http://dev.windowsphone.com/en-us/publish

**注：**在虚拟机中运行 SDK 可能会有一些挑战。 您可以阅读这篇博客，让大家了解关于要为[在 Mac 上的 Windows Phone][4]开发的解决方案.

 [4]: http://aka.ms/BuildaWP8apponaMac

## 2.安装 SDK + 科尔多瓦

*   下载并安装[Windows Phone SDK][5]

*   下载并解压缩[科尔多瓦][6]的最新副本。 您将使用的 `lib\windows-phone-8\wp8` 子文件夹， `lib\windows-phone-8\wp7` 包含科尔多瓦的视窗手机 7 版本。

*   将 CordovaWP8\_x\_x_x.zip 文件复制到该文件夹： \My Documents\Visual 工作室 2012\Templates\ProjectTemplates\

 [5]: http://www.microsoft.com/en-us/download/details.aspx?id=35471
 [6]: http://phonegap.com/download

## 2.1.建筑模板

**注：**可能不需要这一步。如果 lib\windows 电话目录已经包含 CordovaWP8\_x\_x_x.zip 的文件，然后你可以跳过此步骤。

为了简化开发过程，科尔多瓦附带了一个脚本来生成 Visual Studio 模板。 这允许快速创建的科尔多瓦 Visual Studio 内的应用程序。 如果需要，可以修改此模板和下面的步骤说明如何继续如果您想要生成模板。

### 运行该批处理文件来创建和安装模板。

*   根的回购协议包含文件 createTemplates.bat。 双击此文件将生成 2 个.zip 文件。 （CordovaWP7\_x\_x\_x.zip + CordovaWP8\_x\_x\_x.zip x.x.x 哪里的当前版本号）方便地使用这些文件在 Visual Studio 中，复制他们到"我的 Documents\Visual 工作室 2012\Templates\ProjectTemplates\"你然后将能够从 Visual Studio 文件-> 新项目菜单创建新的 Apache 科尔多瓦 Windows Phone 应用程序。

*   如果您从命令行运行该批处理文件，还可以调用同一个参数，以便自动安装

运行该脚本：

    > createTemplates.bat-安装
    

## 3.设置新项目

*   打开 Visual Studio 表示为 Windows Phone 和选择**新的项目**.

*   选择**CordovaWP8**。（版本号显示在模板描述）。

*   为该项目的名称，并选择**确定**.

![][7]

 [7]: img/guide/platforms/wp8/StandAloneTemplate.png

## 4.审查的项目结构

*   `www`文件夹包含您科尔多瓦 `html/js/css` 和包含在您的应用程序中的任何其他资源。

*   您在此处添加的任何内容需要的 Visual Studio 项目的一部分，必须将它设置为内容。

*   注： 此屏幕捕获从科尔多瓦 2.3.0 下载，您的清单的差异取决于安装的实际版本。

![][8]

 [8]: img/guide/platforms/wp8/projectStructure.png

## 5.生成并部署到仿真程序

*   请确保在主要的下拉式菜单中选择**Windows Phone 仿真器**。

*   按绿色**播放**按钮下拉菜单中开始调试，或键入**F5**.

![][9]

 [9]: img/guide/platforms/wp8/BuildEmulator.png

## 6.生成您的设备的项目

若要测试您的应用程序在设备上，必须注册该设备。 单击[这里][10]来部署和测试您的 Windows Phone 8 日上阅读文档。

 [10]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105).aspx

*   请确保您的电话连接，并且屏幕处于解锁状态。

*   在 Visual Studio 中，从顶部的下拉菜单中选择设备。

*   按主要的下拉菜单中，若要启动调试，旁边的绿色**播放**按钮或键入**F5**.

![][11]

 [11]: img/guide/platforms/wp7/wpd.png

## 完成了 ！

## 进一步阅读

IE10 和 WebKit 的浏览器，以及如何支持之间的具体区别更多详细信息这两个 MS 已有用的[指南在这里][12]

 [12]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx