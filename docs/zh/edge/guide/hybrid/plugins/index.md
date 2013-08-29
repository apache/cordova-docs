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

科尔多瓦插件桥梁有点之间供电科尔多瓦应用和科尔多瓦应用程序的本机平台 web 视图的功能在运行时。 插件的使用跨所有平台和以下特定于平台的插件接口，JavaScript 调用到本机实现一个单一的 JavaScript 界面组成。 所有的科尔多瓦 Api 的核心是使用这种体系结构实现的。

本指南的步骤，编写一个简单的 Echo 插件的过程传递一个字符串从 JavaScript，并将它发送到本机环境中有关支持的平台。 本机代码然后回里面的插件 JavaScript 回调返回相同的字符串。

本指南提供了足够的概述，您可以生成来编写更复杂的插件。

## JavaScript

任何插件的入口点是 JavaScript。 科尔多瓦是这样他们就可以使用的原因开发人员使用和写 JavaScript，不客观-C，不是 Java，C#。 你的插件的 JavaScript 界面是你的科尔多瓦插件的正面和可以说是最重要的部分。

然而你喜欢，可以设计你的插件 JavaScript 的结构。 您*必须*使用科尔多瓦 JavaScript 和本机环境之间进行通信的一件事是 `cordova.exec` 函数。 下面是一个示例：

        cordova.exec(function(winParam) {}, function(error) {}, "service",
                     "action", ["firstArgument", "secondArgument", 42,
                     false]);
    

参数详述如下：

*   `function(winParam) {}`： 成功回调函数。 假设您 `exec` 调用成功完成，调用此函数时 （可以选择与您传递回给它的任何参数）。

*   `function(error) {}`: 错误函数回调。如果该操作未成功完成，调用此函数时 （可以选择与错误参数）。

*   `"service"`： 要调用的本机一边的服务名称。这被映射到本机类，有关的更多资料，可在下面列出的本机指南。

*   `"action"`： 要调入的操作名称。 这由本机类接收拾 `exec` 调用，并且，取决于平台，基本上将映射到类的方法。 下面列出的本机指南提供详细信息。

*   `[/* arguments */]`： 要传递到本机环境中的参数。

### Echo 插件的 JavaScript 示例

        window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

让我们深入到这。该插件的重视本身到 `window` ，具体到 `echo` 函数。插件用户将然后使用，如下所示：

        window.echo("echome", function(echoValue) {
            alert(echoValue == "echome"); // should alert true.
        });
    

首先，让我们看看的最后三个参数的 `exec` 函数。 我们将调用 `Echo` "服务、"请求 `echo` "行动"，和传递的参数包含 echo 字符串的数组，这是进入的第一个参数 `window.echo` 函数。

成功回调传递到 `exec` 是只是提到该回调函数的 `window.echo` 需要。 我们多做一点为错误回调： 如果本机端触发错误回调，我们只需调用成功回调函数，并传递到它"的默认"的字符串。

## 插件规范

科尔多瓦有可用于启用该插件为 Android、 iOS、 黑莓 10 和 Windows Phone 平台的自动的安装一个插件规范。 通过以特定方式构建你的插件，添加 `plugin.xml` 清单文件，您可以使用户能够安装你的插件通过命令行工具。

*   插件规范

## 本机

一旦你为你的插件定义 JavaScript，你需要至少一个本机实现，补充。 下面列出了这样做为每个平台的详细信息。 这些指南继续在上文讨论过的简单回声插件示例上。

*   Android 插件
*   黑莓手机的插件
*   黑莓 10 插件
*   iOS 插件
*   Windows Phone 插件

当前，Tizen 平台不支持插件。