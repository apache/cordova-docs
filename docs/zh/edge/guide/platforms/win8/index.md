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

本指南介绍如何设置您的 SDK 开发环境为 Windows 8 部署科尔多瓦的应用程序。请参阅下列特定于平台的详细信息：

*   升级 Windows 8
*   Windows 8 的命令行工具

上面的命令行工具请参阅科尔多瓦 3.0 以前的版本。关于当前界面的信息，请参阅命令行界面。

Microsoft 不推荐使用在 Windows 8 和 Windows 室温下*地铁风格的应用程序*名称 MSDN 现在指的是这种类型的应用程序作为*Windows 应用商店*的应用程序，并且本指南跟随该公约 》。 此外，在本指南中*Windows 8*表示 Windows 8 和 Windows 室温下

## 1.要求

*   Windows 8

*   Visual Studio 2012 专业或更好或 Visual Studio 2012 表示为 Windows 8

按照说明[在这里][1]提交您的应用程序 Windows 存储区。

 [1]: http://www.windowsstore.com/

## 2.安装 SDK + 科尔多瓦

*   设置您的 Visual Studio 2012 的首选变形。 所有产品的付费版本 (专业、 等) 让您构建 Windows 应用商店的应用程序。 你需要**表达为 Windows 8**来构建 Windows 应用商店应用程序使用的[速成版][2].

*   下载并解压缩[科尔多瓦][3]的最新副本。您将使用的 `lib\windows-8` 子文件夹。

 [2]: http://www.microsoft.com/visualstudio/eng/products/visual-studio-express-products
 [3]: http://phonegap.com/download

## 3.设置新项目

你已经可以生成使用*HTML/JavaScript 跟踪*在 Windows 应用商店的应用程序中可用的 Windows 8 应用程序。 在 Windows 应用商店的应用程序中使用科尔多瓦，正如在其他科尔多瓦支持的平台上公开相同的 Api。

*   打开 Visual Studio 2012 并选择**新的项目**.

*   从项目列表从树，然后**空白应用程序**选择**安装 → 模板 → 其它语言 → JavaScript → Windows 存储区**。 输入你喜欢的如无论项目名称 `CordovaWin8Foo` 如本示例所示。
    
    ![][4]

*   Microsoft 将继续使用 `default.html` 作为默认的主页，但大多数的 web 开发人员使用 `index.html` 。 （再加上它是有可能的在其他平台变形的您的项目中使用的 `index.html` 作为您的默认页的名称.)若要修复此问题，在解决方案资源管理器中重命名 `default.html` 文件到 `index.html` 。 然后双击 `package.appxmanifest` 文件，并将**起始页**该值更改为`index.html`.
    
    ![][5]

*   要包括 `cordova.js` 在项目中，右键单击 `js` 目录在解决方案资源管理器并选择**添加 → 新项目**。 找到 `cordova.js` 文件在 `lib\windows-8` 上面指出的目录。

*   编辑的代码为 `index.html` 。将引用添加到 `cordova.js` 。您可以手动，或通过从解决方案资源管理器中拖动文件。

 [4]: img/guide/platforms/win8/wsnewproject.png
 [5]: img/guide/platforms/win8/wschangemanifest.png

### 添加引用......

        <! — — WinJS 的引用--> < 链接 href="//Microsoft.WinJS.1.0/css/ui-dark.css"rel ="样式表"/ >< 脚本 src="//Microsoft.WinJS.1.0/js/base.js">< / 脚本 >< 脚本 src="//Microsoft.WinJS.1.0/js/ui.js">< / 脚本 ><! — — 科尔多瓦--> < 脚本 src="/js/cordova.js">< / 脚本 ><! — — CordovaWin8Foo 的引用--> < 链接 href="/css/default.css"rel ="样式表"/ >< 脚本 src="/js/default.js">< / 脚本 >
    

*   下一步，添加一些代码，演示科尔多瓦工作。

### 添加 'deviceready' 处理......

    <body>
        <p>Content goes here</p>
    
        <script type="text/javascript">
    
            console.log("Subscribing...");
            document.addEventListener("deviceready", function () {
    
                navigator.notification.alert("The device is ready!");
    
            });
    
        </script>
    
    </body>
    

## 5.测试项目

*   从 Visual Studio 中运行该项目。你会看到显示的消息框：
    
    ![][6]

 [6]: img/guide/platforms/win8/wsalert.png

## 完成了 ！

就这么简单 ！你现在准备好建立 Windows 应用商店的应用，科尔多瓦。