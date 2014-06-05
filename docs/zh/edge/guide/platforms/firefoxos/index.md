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

# 火狐浏览器操作系统平台指南

本指南介绍了如何设置您的开发环境创建科尔多瓦应用程序为火狐 OS 的设备，然后测试和发布这些应用程序。

## 要求和支持

火狐浏览器操作系统的应用程序，基本上只是为 web 应用程序，加上一个 manifest.webapp 文件，定义了有关应用程序的元数据，并允许它在火狐浏览器操作系统的设备上安装。 可以使用任何科尔多瓦支持的平台。要找出有关构建 web 应用程序的详细信息，请咨询上[国语][1]的[App 中心][2].

 [1]: https://developer.mozilla.org/en-US/
 [2]: https://developer.mozilla.org/en-US/Apps

## 安装和环境设置

第一次安装[Node.js][3]，然后安装科尔多瓦包就像这样：

 [3]: http://nodejs.org/

    $ npm install -g cordova
    

接下来，创建一个示例科尔多瓦应用程序，然后导航到新创建的目录：

    $ cordova create test-app
    $ cd test-app
    

火狐浏览器操作系统作为受支持的平台添加到在以下应用程序：

    $ cordova platform add firefoxos
    

这将创建一个火狐浏览器操作系统应用程序平台/firefoxos/www 目录，目前看起来都一样除了，它已在 www 目录的火狐浏览器的清单文件 (manifest.webapp) 中。

## 开发您的应用程序

此时你准备好去 — — 测试-app/www 里面的代码更改为任何你想要您的应用程序会。 你可以向应用程序，例如使用"科尔多瓦插件添加"，添加[支持的插件]()：

    cordova plugin add org.apache.cordova.device
    cordova plugin add org.apache.cordova.vibration
    

您还需要将一个自定义的 manifest.webapp 文件添加到您的测试-app/www 目录，应当至少包括以下内容：

    { 
        "launch_path":"/index.html",
        "installs_allowed_from":["*"],
        "version":"0.0.1",
        "name":"My app",
        "pkgName":"io.cordova.hellocordova",
        "icons": {
            "128": "/img/logo.png"
        }
    }
    

火狐浏览器的应用程序清单的更多信息，请阅读在 MDN 上的[应用程序清单][4]。

 [4]: https://developer.mozilla.org/en-US/Apps/Developing/Manifest

您的应用程序代码写入时，将更改部署到您已经添加到您的项目的火狐浏览器操作系统应用程序

    $ cordova prepare
    

请注意生成步骤 （即科尔多瓦构建） 时不需要将部署到火狐浏览器操作系统平台，如火狐浏览器操作系统应用程序是基于 HTML 的并因此不编译。

## 测试和调试

可以使用火狐浏览器操作系统[的应用程序管理器][5]测试应用程序.

 [5]: https://developer.mozilla.org/en-US/Firefox_OS/Using_the_App_Manager

当您已连接到您测试设备模拟器的应用程序管理器时，选择"添加打包的应用程序"选项，然后确保您指向测试-app/平台/firefoxos/www/目录管理器界面中包括该应用程序。

在这里，您可以安装 app 上您测试设备/模拟器 (与"更新"按钮）。使用"调试"按钮然后可以调试应用程序，并编辑它的代码生活。

注意： 要发布您的应用程序在尝试之前你应该考虑验证它使用[应用程序验证程序][6].

 [6]: https://marketplace.firefox.com/developers/validator

## 发布您的应用程序对火狐浏览器市场

您可以提交您的应用程序到火狐浏览器市场的需求，或发布它自己。 上国语，了解更多有关如何执行此 ； 访问[火狐浏览器市场区][7][应用程序发布选项][8]是最好的地方开始。

 [7]: https://developer.mozilla.org/en-US/Marketplace
 [8]: https://developer.mozilla.org/en-US/Marketplace/Publishing/Publish_options