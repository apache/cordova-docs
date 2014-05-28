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

# 插件开发指南

*插件*是代码的一个软件包，注入，允许在其中应用程序呈现与在其上运行的本机平台进行通信的科尔多瓦 web 视图。 插件提供对基于 web 的应用程序通常不可用的设备和平台功能的访问。 科尔多瓦 API 的所有主要功能作为插件，实现和许多其他的可用条码扫描器、 NFC 通信等功能的启用或定制日历的接口。 有可用插件[注册表][1]。

 [1]: http://plugins.cordova.io

插件包括一个单一的 JavaScript 界面和相应的本机代码库，每个受支持的平台。 通过将一个字符串从 JavaScript 传递到本机平台再回来，一个可以作为模型使用以生成更复杂的功能，简单的*echo*插件这节步骤。 本节讨论的基本插件结构和面向外部 JavaScript 界面。 对于每个相应的本机接口，请参阅此部分的结尾处的列表。

除了这些指令，当准备写一个插件最好是看看[现有的插件][2]为指导。

 [2]: http://cordova.apache.org/#contribute

## 建设一个插件

应用程序开发人员使用 CLI 的 `plugin add` 命令 （讨论中命令行界面），对项目应用插件。 该命令的参数是*git*资源库中包含的插件代码的 URL。 此示例实现科尔多瓦的设备 API：

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-device.git
    

插件存储库必须具备顶级 `plugin.xml` 清单文件。 有许多方式来配置此文件中，其中的详细信息是可用的插件规范中。 此缩写的版本的 `Device` 插件提供了一个简单的例子，使用作为一种模型：

        <?xml version="1.0" encoding="UTF-8"?>
        <plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
                id="org.apache.cordova.device" version="0.2.3">
            <name>Device</name>
            <description>Cordova Device Plugin</description>
            <license>Apache 2.0</license>
            <keywords>cordova,device</keywords>
            <js-module src="www/device.js" name="device">
                <clobbers target="device" />
            </js-module>
            <platform name="ios">
                <config-file target="config.xml" parent="/*">
                    <feature name="Device">
                        <param name="ios-package" value="CDVDevice"/>
                    </feature>
                </config-file>
                <header-file src="src/ios/CDVDevice.h" />
                <source-file src="src/ios/CDVDevice.m" />
            </platform>
        </plugin>
    

顶级 `plugin` 标记的 `id` 属性使用相同的反向域格式所要添加到他们的应用程序识别的插件包。 `js-module`标记指定共同的 JavaScript 界面的路径。 `platform`标记为指定一组对应的本机代码， `ios` 在这种情况下的平台。 `config-file`标记封装 `feature` 注入特定平台的标记 `config.xml` 文件，以使该平台意识到额外的代码库。 `header-file`和 `source-file` 标签指定库的组件文件的路径。

## 验证插件

您可以使用 `plugman` 实用程序来检查是否为每个平台插件安装正确。 安装 `plugman` 用下面的[节点][3]命令：

 [3]: http://nodejs.org/

        $ npm install -g plugman
    

你需要有效的 app 源目录中，如顶级 `www` 目录包含在默认生成的 CLI 项目中所述的命令行界面。 请确保应用程序的 `index.html` 的主页引用名称的插件的 JavaScript 界面，好像它是相同的源目录中：

        <script src="myplugin.js"></script>
    

然后运行下面的命令： 若要测试是否能正常加载的 iOS 的依赖关系：

         $ plugman install --platform ios --project /path/to/my/project/www --plugin /path/to/my/plugin
    

有关的详细信息 `plugman` 选项，请参阅使用 Plugman 到管理插件。 有关如何实际*调试*插件的信息，请参阅此页面的底部列出的每个平台的本机界面。

## JavaScript 界面

JavaScript 提供了前置接口，使该插件的或许最重要的部分。 然而你喜欢，但是你需要调用可以构造你的插件 JavaScript `cordova.exec` 沟通与本机平台，使用下面的语法：

        cordova.exec(function(winParam) {},
                     function(error) {},
                     "service",
                     "action",
                     ["firstArgument", "secondArgument", 42, false]);
    

这里是每个参数的工作原理：

*   `function(winParam) {}`： 成功回调函数。假设您 `exec` 调用成功完成，以及任何您传递给它的参数执行此函数。

*   `function(error) {}`： 错误回调函数。如果该操作未成功完成，此函数执行带有可选错误参数。

*   `"service"`： 要调用的本机一边的服务名称。这对应于本机类，为其更多的资料，可在下面列出的本机指南。

*   `"action"`： 要调用的本机一边的操作名称。这通常对应于本机类的方法。请参阅下面列出的本机指南。

*   `[/* arguments */]`： 要传递到本机环境中的参数数组。

## 示例 JavaScript

此示例演示一种方法来实现插件的 JavaScript 界面：

        window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

在此示例中，该插件的重视本身对 `window` 对象作为 `echo` 函数，插件的用户将会调用，如下所示：

        window.echo("echome", function(echoValue) {
            alert(echoValue == "echome"); // should alert true.
        });
    

看看的最后三个参数的 `cordova.exec` 函数。 第一次调用 `Echo` *的服务*，一个类名称。 第二个请求 `echo` *行动*、 那类中的方法。 第三个是一个参数包含 echo 字符串，该字符串数组 `window.echo` 函数的第一个参数。

成功回调传递到 `exec` 是简单地对回调函数的引用 `window.echo` 花。 如果本机平台触发错误回调，它只是调用成功回调并传递它的默认字符串。

## 本地接口

一旦你为你的插件定义 JavaScript，你需要至少一个本机实现，补充。 下面，列出了每个平台的详细信息和每个生成回声插件上面的简单示例：

*   亚马逊火 OS 插件
*   Android 插件
*   iOS 插件
*   黑莓 10 插件
*   Windows Phone 插件

Tizen 平台不支持插件。

## 发布插件

一旦你开发你的插件，您可能希望将发布与共享它，社会。 你可以将你的插件发布到科尔多瓦[注册表][1]（基于[ `npmjs` ][4]) 或任何其它 `npmjs` -基于注册表。 其他开发人员可以将它要么使用自动安装 `plugman` 或科尔多瓦 CLI。 （每个发展路径的详细信息，见到管理插件和命令行界面使用 Plugman）。

 [4]: https://github.com/isaacs/npmjs.org

要发布插件你需要使用 `plugman` 工具，通过以下步骤：

    $ plugman adduser # that is if you don't have an account yet
    $ plugman publish /path/to/your/plugin
    

就这么简单 ！

运行 `plugman --help` 列出其他可用的基于注册表的命令。