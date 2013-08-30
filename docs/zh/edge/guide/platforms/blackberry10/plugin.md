---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied. See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# 黑莓 10 插件

这是延续科尔多瓦的插件开发指南。 一旦您已经检查过这些内容，现在让我们看看我们需要有黑莓 10 平台的回声插件的事情。 召回的回声插件基本上返回任何字符串用户提供的 `window.echo` 函数：

    window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

科尔多瓦本机的黑莓 10 插件包含 JavaScript 代码，还可能包含本机代码。 Echo 插件示例演示如何调用本机功能从 JavaScript。 本机和 JavaScript 代码相互通信通过一个由 JNEXT 提供的框架。 每个插件还必须包含 `plugin.xml` 文件。

## 创建你的插件的本机部分

若要创建的本机部分你的插件，打开黑莓 10 NDK IDE 并选择文件 > 新 > 黑莓项目 > 本机扩展 > 黑莓手机 WebWorks。 请输入您的所需的项目名称 / 位置，然后单击完成。

由 IDE 创建的项目包含一个内存插件的示例代码。您可以替换或修改这些文件以包括您自己的功能。

*   `*name*_js.hpp`： JNEXT 代码 c + + 头。

*   `*name*_js.cpp`： JNEXT 的 c + + 代码。

JNEXT 扩展的本机界面可以查看插件头文件位于公共的目录中，您的项目中。 它还包含常量和可以在本机代码中使用的实用程序函数。 你的插件必须从 JSExt 在 plugin.h 中定义的派生。这就是，你必须实现下面的类：

    类 JSExt {公共： 虚拟 ~JSExt() {} ；虚拟字符串 InvokeMethod (const 字符串 & strCommand) = 0 ；虚拟 bool CanDelete （无效） = 0 ；私人： std::string m_id ；};
    

因此，您的扩展应包含 plugin.h 头文件。在回波的示例中，您使用 JSExt，如下所示在 echo_js.hpp 文件中：

    #include"....../ public/plugin.h"< 字符串 > #ifndef ECHO_JS_H_ #define ECHO_JS_H_ #include 类回声： 公共 JSExt {公共： 显式回声 (const std::string & id) ；虚拟 ~ echo () ；虚拟 std::string InvokeMethod (const std::string & 命令) ；虚拟 bool CanDelete() ；私人： std::string m_id ；};#endif / / ECHO_JS_H_
    

`m_id`是一个包含此对象的 JNEXT id 的属性。 Id 作为构造函数的参数传递到类。 它被需要触发 JavaScript 边从本机上的事件。 JNEXT 规定的 CanDelete 方法用于确定是否可以删除您的本机对象的方法。 从 JavaScript 调用此特定对象的方法的请求结果调用 InvokeMethod 函数。 此函数的唯一参数是从这种方法应分析以确定应该执行哪种方法的本机对象的 JavaScript 传递的字符串。 现在我们在 echo_js.cpp 中实现这些功能。对于回声的示例，我们执行了 InvokeMethod 函数，如下所示：

    字符串 Echo::InvokeMethod (const 字符串和命令） {//parse 命令，并从字符串 int 索引 args = command.find_first_of("") ；字符串 strCommand = command.substr （0，索引） ；字符串 strValue = command.substr (指数 + 1，command.length()) ；/ / 确定应该执行哪些函数如果 (strCommand = ="回声") {返回 strValue;} 其他 {返回"不支持方法"；}
    }
    

你本机的插件还必须实现以下回调函数：

*   `extern char * onGetObjList （无效） ；`

*   `extern JSExt * onCreateObject (const 字符串 & strClassName、 const 字符串 & strObjId) ；`

`onGetObjList`函数返回支持的 JNEXT 类的逗号分隔列表。 JNEXT 使用此函数来确定的 JNEXT 可以实例化的类的集合。 在我们回波的插件，我们有以下 `echo_js.cpp` ：

    char * onGetObjList() {静态 char 名称 [] ="回声"；返回的名称 ；}
    

`onCreateObject`函数采用两个参数。 第一个参数是类的请求将从 JavaScript 侧创建的名称。 有效的名称就是那些在中返回 `onGetObjList` 。 第二个参数是类的唯一的对象 id。 此方法返回创建的插件对象的指针。 在我们回波的插件，我们有以下 `echo_js.cpp` ：

    JSExt * onCreateObject (const 字符串与类名、 常量字符串 & id) {如果 (className = ="回声") {返回新 Echo(id) ；} 返回 NULL ；}
    

## 创建你的插件的 JavaScript 部分

你的插件的 JavaScript 部分必须包含以下文件：

*   `client.js`: 这被认为是在客户端，并包含科尔多瓦应用程序可以调用的 API。 中的 API `client.js` 调用程序调用 `index.js` 。 中的 API `client.js` 也连接到火，回调的事件的回调函数。

*   `index.js`： 科尔多瓦加载 `index.js` 并使其可通过 cordova.exec 桥。 `client.js`文件程序中的 API 调用 `index.js` 文件中，从而使打电话到 JNEXT 与本机端进行通信。

客户端和服务器端 ( `client.js` 和 `index.js` ) 进行交互，通过 `Cordova.exec` 函数。 所以，在 `client.js` 调用 `exec` 函数并提供必要的参数。 在回声插件，我们有以下 `client.js` 文件：

    var service = "org.apache.cordova.blackberry.echo",
        exec = cordova.require("cordova/exec");
    
    module.exports = {
        echo: function (data, success, fail) {
            exec(success, fail, service, "echo", { data: data });
        }
    };
    

现在， `index.js` 与本机的一面，用 JNEXT 进行交互。 所以您附加命名回显到 JNEXT 的构造函数。 在构造函数内您执行下列关键操作使用 init 函数：

*   指定导出的本机方面所需的模块。所需的模块的名称必须匹配的共享的库文件 （.so 文件） 的名称。

`JNEXT.require("libecho")`

*   通过使用获得的模块创建一个对象并保存调用所返回的 ID。 self.m_id = JNEXT.createObject ("libecho。Echo"） ；当您的应用程序调用中的回波函数 `client.js` ，调用反过来调用的回波函数中 `index.js` 、 凡 PluginResult 对象将 （数据） 的响应发送回 `client.js` 。 由于传递到函数的 args 参数是由 JSON.stringfy() 转换和编码为 URIcomponent，您必须调用以下内容：

`数据 = JSON.parse(decodeURIComponent(args.data)) ；`

现在，您可以发送回来的数据。让我们把它都放在一起：

    module.exports = {
    
        echo: function (success, fail, args, env) {
    
            var result = new PluginResult(args, env),
            data = JSON.parse(decodeURIComponent(args.data)),
            response = echo.getInstance().echo(data);
            result.ok(response, false);
        }
    };
    

## 该插件的体系结构

您可以放置的工件的插件，其中包括 `plugin.xml` 文件、 源文件 （JavaScript、 c + +） 和二进制文件 ( `.so` ) 在任何目录结构内，只要你正确地指定了文件位置在 `plugin.xml` 文件。 典型的结构看起来像这样：

***your\_project\_directory***(> 通过)

*   **www**(> client.js)
*   **src** 
    *   **blackberry10**(> index.js 的**本机**> *.cpp、 *.hpp)
    *   **设备**(>*二进制文件**.so)
    *   **模拟器**(>*二进制文件**.so)

(列表显示在顶级文件夹之间的层次关系。 在括号显示给定目录的内容。 所有目录名称都显示为粗体文本。 文件的名称前面有 `>` 标志.)

## 内容的 `plugin.xml` 文件

`plugin.xml`文件中包含的命名空间的扩展和其他元数据。定义的命名空间和指定的 Echo 插件的其他元数据，如下所示：

    < 插件 xmlns ="http://www.phonegap.com/ns/plugins/1.0"id="org.apache.cordova.blackberry.echo"版本 ="1.0.0">< js 模块 src ="www/client.js">< 合并目标 ="导航"/ >< / js 模块 >< 平台名称 ="blackberry10">< 源文件 src="src/blackberry10/index.js"/ >< lib 文件 src="src/blackberry10/native/device/libecho.so"拱 ="设备"/ >< lib 文件 src="src/blackberry10/native/simulator/libecho.so"拱 ="模拟器"/ >< 配置文件目标 ="www/config.xml"父 ="/ widget">< 功能 name="org.apache.cordova.blackberry.echo"value="org.apache.cordova.blackberry.echo"/ >< / 配置文件 >< /平台 >< / 插件 >