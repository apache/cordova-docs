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

本指南介绍如何设置您的 SDK 开发环境部署科尔多瓦为 Windows Phone 8 设备的应用程序。 如果你想要的目标 7.5 和 8 设备，而是尽可能详细的 Windows Phone 7 平台指南开发为 Windows Phone 7。 第 7 版并没有互联网资源管理器中 10 中包含的所有高级的功能，但实现相同的 Api 集。 Windows Phone 8 应用程序*不*在 Windows Phone 7 设备上运行。

适用于这两个版本的更多详细的平台特定信息如下所示：

*   升级 Windows Phone
*   Windows Phone 插件
*   Windows Phone 的命令行工具

上面的命令行工具请参阅科尔多瓦 3.0 以前的版本。关于当前界面的信息，请参阅命令行界面。

## 系统要求

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

*   SDK 和 IDE (Visual Studio)
    
    *   Visual Studio 2012 专业、 保费或极限。 请注意 Visual Studio 表示为 Windows Phone （包含在 SDK） 建议不要因为你可以不生成模板 （见下文） 与 VS 表示，由于它并没有**导出模板**功能，这是只有在 VS Pro 或更高。

*   注册和支付为[Windows Phone 开发中心][3]帐户，如果你想要在实际设备上安装您的应用程序或将其提交给市场的地方。

 [1]: http://en.wikipedia.org/wiki/Second_Level_Address_Translation
 [2]: http://ark.intel.com/Products/VirtualizationTechnology
 [3]: http://dev.windowsphone.com/en-us/publish

**注意**： 在虚拟机中运行 SDK 可能会有一些挑战。 您可以阅读这篇博客，让大家了解关于要为[在 Mac 上的 Windows Phone][4]开发的解决方案.

 [4]: http://aka.ms/BuildaWP8apponaMac

## 安装 SDK 和科尔多瓦

下载并安装[Windows Phone SDK][5].

 [5]: http://www.microsoft.com/en-us/download/details.aspx?id=35471

下载并解压缩[科尔多瓦][6]的最新副本。`lib\windows-phone-8\wp8`子目录是要你做的工作。

 [6]: http://phonegap.com/download

复制 `CordovaWP8_x_x_x.zip` 文件到 `\My Documents\Visual
Studio 2012\Templates\ProjectTemplates\` 目录。

## 建筑模板

**注意**: 如果跳过这一步 `lib\windows-phone` 的目录已经包含 `CordovaWP8_x_x_x.zip` 文件。

为了简化开发过程，科尔多瓦，将捆绑一个脚本来生成 Visual Studio 模板。 这些允许您迅速生成科尔多瓦的应用程序，如果有必要，您可以修改它们。 以下步骤显示如何生成它。

### 运行该批处理文件来创建和安装模板

回购的根目录中包含 `createTemplates.bat` 文件。 双击此生成两个 `.zip` 文件： `CordovaWP7_x_x_x.zip` 和 `CordovaWP8_x_x_x.zip` ，其中*x.x.x*是的当前版本号。 若要使用这些文件很容易在 Visual Studio 中的，复制它们到 `My
Documents\Visual Studio 2012\Templates\ProjectTemplates\` 。 然后，可以从**Visual Studio 文件 → 新建项目**菜单创建新的 Apache 科尔多瓦 Windows Phone 应用程序。

如果您从命令行运行该批处理文件，也可以使用参数来自动安装调用它：

        > createTemplates.bat-安装
    

## 设立了一个新的项目

打开 Visual Studio 表示为 Windows Phone 和选择**新的项目**.

选择**CordovaWP8**。版本号将显示在模板描述。

为该项目的名称，并选择**确定**.

![][7]

 [7]: img/guide/platforms/wp8/StandAloneTemplate.png

## 审查的项目结构

`www`目录功能 `html` ， `js` ，和 `css` 子目录和任何其他资源要求您的应用程序。 任何附加内容需要的 Visual Studio 项目的一部分，必须将它设置为内容。

下面的示例结构表示一个 2.3.0 项目，但可能已安装的版本而异：

![][8]

 [8]: img/guide/platforms/wp8/projectStructure.png

## 生成并部署到仿真程序

请确保在主要的下拉式菜单中选择**Windows Phone 仿真器**。

然后按绿色**播放**按钮下拉菜单中开始调试，或键入**F5**.

![][9]

 [9]: img/guide/platforms/wp8/BuildEmulator.png

## 为该设备生成项目

在测试之前您的设备上的应用程序，必须注册该设备。 有关如何部署和测试 Windows Phone 8 上的详细信息，请参考[微软的文档][10]。 这些都是基本的步骤：

 [10]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105).aspx

*   请确保您的电话连接，并且屏幕处于解锁状态。

*   在 Visual Studio 中，从顶部的下拉菜单中选择**设备**。

*   按主要的下拉菜单中，若要启动调试，旁边的绿色**播放**按钮，否则键入**F5**.

![][11]

 [11]: img/guide/platforms/wp7/wpd.png

此时，你完了。

## 进一步阅读

Windows Phone 开发者博客 IE10 和 WebKit 的浏览器和如何支持这两个之间的差异提供[有用的详细信息][12]。

 [12]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx