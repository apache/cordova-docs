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

# Windows Phone 7 平台指南

本指南介绍如何设置您的 SDK 开发环境部署科尔多瓦的 Windows Phone 7 设备的应用程序。 应用程序也使用相同的 Api，但 7 缺乏的一些 IE10 的高级功能上 Windows Phone 8 可用的版本的 Windows Phone 8 设备上运行。 Windows Phone 8 应用程序*不*在 Windows Phone 7 设备上运行。

适用于这两个版本的更多详细的平台特定信息如下所示：

*   升级 Windows Phone
*   Windows Phone 插件
*   Windows Phone 的命令行工具

上面的命令行工具请参阅科尔多瓦 3.0 以前的版本。关于当前界面的信息，请参阅命令行界面。

## 系统要求

使用 Windows 7 或 Windows 8 (Pro) 或 Windows Vista sp2。需要的 SDK 的 Windows 64 位版本 (x64)。Pro 版被推荐运行的设备仿真程序。

注册和支付为[Windows Phone 开发中心][1]帐户，如果你想要在实际设备上安装应用程序或将其提交给市场的地方。

 [1]: http://dev.windowsphone.com/en-us/publish

**注意**： 在虚拟机中运行 SDK 可能提出了挑战。阅读[在 Mac 上的 Windows Phone][2]开发解决方案的见解。

 [2]: http://aka.ms/BuildaWP8apponaMac

## 安装 SDK 和科尔多瓦

下载并安装[Windows Phone SDK][3].

 [3]: http://www.microsoft.com/download/en/details.aspx?displaylang=en&id=27570/

下载并解压缩[科尔多瓦][4]的最新副本。 您需要工作 `lib\windows-phone-8\wp7` 子目录中， `lib\windows-phone-8\wp8` 包含科尔多瓦的视窗电话 8 版本。

 [4]: http://phonegap.com/download

复制 `CordovaWP7_x_x_x.zip` 文件到 `\My Documents\Visual
Studio 2012\Templates\ProjectTemplates\` 目录。

## 建筑模板

**注意**: 如果跳过这一步 `lib\windows-phone` 的目录已经包含 `CordovaWP7_x_x_x.zip` 文件。

为了简化开发过程，科尔多瓦，将捆绑一个脚本来生成 Visual Studio 模板。 这些允许您迅速生成科尔多瓦的应用程序，如果有必要，您可以修改它们。 以下步骤显示如何生成它。

### 运行该批处理文件来创建和安装模板

根的回购协议包含 `createTemplates.bat` 文件。 双击此文件将生成两个 `.zip` 文件： `CordovaWP7_x_x_x.zip` 和 `CordovaWP8_x_x_x.zip` ，其中*x.x.x*是的当前版本号。 若要使用这些文件很容易在 Visual Studio 中的，复制它们到 `My Documents\Visual Studio
2012\Templates\ProjectTemplates\` 子目录。 然后，可以创建新的**Apache 科尔多瓦 Windows Phone_ 应用程序从 Visual Studio __File → 新项目**菜单。

如果您从命令行运行该批处理文件，还可以调用同一个参数，以便自动安装：

        > createTemplates.bat-安装
    

## 设立了一个新的项目

*   打开 Visual Studio 表示为 Windows Phone 和选择**新的项目**.

*   选择**CordovaWP7**。版本编号显示在模板描述。

*   为该项目的名称，并选择**确定**.

## 审查的项目结构

`www`目录功能 `html` ， `js` ，和 `css` 子目录和任何其他资源要求您的应用程序。 任何附加内容需要的 Visual Studio 项目的一部分，必须将它设置为内容。

下面的示例结构表示一个 2.3.0 项目，但可能已安装的版本而异：

![][5]

 [5]: img/guide/platforms/wp8/projectStructure.png

## 为该设备生成项目

在测试之前您的设备上的应用程序，必须注册该设备。 有关如何部署和测试 Windows Phone 7 上的详细信息，请参考[微软的文档][6]。 这些都是基本的步骤：

 [6]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105).aspx

*   请确保您的电话连接，并且屏幕处于解锁状态。

*   在 Visual Studio 中，从顶部的下拉菜单中选择**设备**。

*   按主要的下拉菜单中，若要启动调试，旁边的绿色**播放**按钮，否则键入**F5**.

![][7]

 [7]: img/guide/platforms/wp7/wpd.png

此时，你完了。