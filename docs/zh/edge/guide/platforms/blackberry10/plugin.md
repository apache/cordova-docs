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

此部分提供了如何在黑莓 10 平台上实现本机插件代码的详细信息。 之前读这篇文章，请参阅应用程序插件插件的结构和其共同的 JavaScript 界面的概述。 这一节继续表明通信从科尔多瓦 web 视图的本机平台和后面的示例*回声*插件。

Echo 插件基本上返回任何字符串 `window.echo` 从 JavaScript 函数发送：

        window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

黑莓 10 科尔多瓦插件包含 JavaScript 和本机代码，其中提供的 JNEXT 框架通过互相沟通。 每个插件还必须包含 `plugin.xml` 文件。

## 创建本机类

若要创建的本机部分你的插件，打开黑莓 10 NDK IDE 并选择**文件 → 新 → 黑莓手机项目 → 本机扩展 → 黑莓 10**。 输入所需的项目名称和位置，然后按**完成**.

由 IDE 创建的项目包含一个内存插件的示例代码。您可以替换或修改这些文件以执行您自己的功能：

*   `*name*_js.hpp`： JNEXT 代码 c + + 头。

*   `*name*_js.cpp`： JNEXT 的 c + + 代码。

JNEXT 扩展的本机界面可以查看插件头文件位于项目的公共目录中。 它还具有常数和本机代码内的可用实用程序功能。 该插件必须派生自 `JSExt` ，这在中定义 `plugin.h` 。 这就是，你必须实现下面的类：

        class JSExt
        {
        public:
            virtual ~JSExt() {};
            virtual string InvokeMethod( const string& strCommand ) = 0;
            virtual bool CanDelete( void ) = 0;
        private:
            std::string m_id;
        };
    

延长应包括 `plugin.h` 的头文件。在 `Echo` 的示例中，您使用 `JSExt` ，如下所示在 `echo_js.hpp` 文件：

        #include "../public/plugin.h"
        #include <string>
    
        #ifndef ECHO_JS_H_
        #define ECHO_JS_H_
    
        class Echo : public JSExt
        {
        public:
            explicit Echo(const std::string& id);
            virtual ~Echo();
            virtual std::string InvokeMethod(const std::string& command);
            virtual bool CanDelete();
        private:
            std::string m_id;
        };
    
        #endif // ECHO_JS_H_
    

`m_id`属性包含 `JNEXT` 作为构造函数的参数传递给该类的对象 id。 它需要触发事件的 JavaScript 一边本机的一面。 `CanDelete`方法确定是否可以删除的本机对象。 `InvokeMethod`从 JavaScript 调用此特定对象的方法的请求结果调用的函数。 此函数的唯一参数是此方法分析来确定哪种本机对象方法应执行的 JavaScript 从传递的字符串。 在实现这些方法 `echo_js.cpp` 。 这里是 `InvokeMethod` 函数为 `Echo` 的示例：

        string Echo::InvokeMethod(const string& command) {
    
            //parse command and args from string
            int index = command.find_first_of(" ");
            string strCommand = command.substr(0, index);
            string strValue = command.substr(index + 1, command.length());
    
            // Determine which function should be executed
            if (strCommand == "echo") {
                return strValue;
            } else {
                return "Unsupported Method";
            }
        }
    

本机插件还必须实现以下回调函数：

*   `extern char * onGetObjList （无效） ；`

*   `extern JSExt * onCreateObject (const 字符串 & strClassName、 const 字符串 & strObjId) ；`

`onGetObjList`函数返回的类支持的 JNEXT 的逗号分隔列表。 JNEXT 使用此函数来确定的 JNEXT 可以实例化的类的集合。 `Echo`插件实现以下在 `echo_js.cpp` ：

        char* onGetObjList() {
            static char name[] = "Echo";
            return name;
        }
    

`onCreateObject`函数采用两个参数。 第一是要从 JavaScript 一侧，与那些返回的有效名称创建的请求的类的名称 `onGetObjList` 。 第二个参数是类的唯一的对象 id。 此方法返回创建的插件对象的指针。 `Echo`插件实现以下在 `echo_js.cpp` ：

        JSExt* onCreateObject(const string& className, const string& id) {
            if (className == "Echo") {
                return new Echo(id);
            }
            return NULL;
        }
    

## 创建插件的 JavaScript

该插件必须包含以下的 JavaScript 文件：

*   `client.js`: 这被认为是在客户端，并包含可用到科尔多瓦的应用程序的 API。 中的 API `client.js` 调用程序调用 `index.js` 。 中的 API `client.js` 也连接到火，回调的事件的回调函数。

*   `index.js`： 科尔多瓦加载 `index.js` 并使其可通过 cordova.exec 桥。 `client.js`文件程序中的 API 调用 `index.js` 文件中，从而使打电话到 JNEXT 与本机端进行通信。

客户端和服务器端 ( `client.js` 和 `index.js` ) 进行交互，通过 `Cordova.exec` 函数。 `client.js`需要调用 `exec` 函数并提供必要的参数。 `Echo`插件实现以下在 `client.js` 文件：

        var service = "org.apache.cordova.blackberry.echo",
            exec = cordova.require("cordova/exec");
    
        module.exports = {
            echo: function (data, success, fail) {
                exec(success, fail, service, "echo", { data: data });
            }
        };
    

`index.js`组件使用 JNEXT 与本机端进行交互。 附加构造函数命名为 `Echo` 到 JNEXT 使您可以执行下列关键操作使用 `init` 函数：

*   指定导出的本机方面所需的模块。所需的模块的名称必须匹配的共享的库文件的名称 （ `.so` 文件）：
    
        JNEXT.require("libecho")
        

*   通过使用获得的模块创建一个对象并保存调用所返回的 ID：
    
        self.m_id = JNEXT.createObject("libecho.Echo");
        
    
    当应用程序调用 `echo` 函数在 `client.js` ，那反过来调用调用 `echo` 函数在 `index.js` 、 在何处 `PluginResult` 对象发送数据作为响应返回到 `client.js` 。 因为 `args` 传递到函数的参数被转换的 `JSON.stringfy()` 和编码为 `URIcomponent` ，您必须调用以下：
    
        data = JSON.parse(decodeURIComponent(args.data));
        

您现在可以发送回来的数据如下所示：

        module.exports = {
            echo: function (success, fail, args, env) {
                var result = new PluginResult(args, env),
                data = JSON.parse(decodeURIComponent(args.data)),
                response = echo.getInstance().echo(data);
                result.ok(response, false);
            }
        };
    

## 插件体系结构

您可以将该插件构件，包括 `plugin.xml` 文件、 JavaScript 和 c + + 源代码文件，和 `.so` 二进制文件在任何的目录结构内，只要你正确地指定了文件位置在 `plugin.xml` 文件。 这里是典型的结构：

***project_directory***(> 通过)

*   **www** (>client.js)
*   **src** 
    *   **blackberry10**(> index.js 的**本机**> *.cpp、 *.hpp)
    *   **设备**(>*二进制文件**.so)
    *   **模拟器**(>*二进制文件**.so)

此列表显示在顶级文件夹之间的层次关系。 在括号显示给定目录的内容。 所有目录名称都显示为粗体文本。 文件的名称前面有 `>` 标志。

## *通过*文件

`plugin.xml`文件包含扩展的命名空间和其他元数据。设置了 `Echo` 插件，如下所示：

        <plugin xmlns="http://www.phonegap.com/ns/plugins/1.0"
            id="org.apache.cordova.blackberry.echo"
            version="1.0.0">
            <js-module src="www/client.js">
                <merges target="navigator" />
            </js-module>
            <platform name="blackberry10">
                <source-file src="src/blackberry10/index.js" />
                <lib-file src="src/blackberry10/native/device/libecho.so" arch="device" />
                <lib-file src="src/blackberry10/native/simulator/libecho.so" arch="simulator" />
                <config-file target="www/config.xml" parent="/widget">
                    <feature name="org.apache.cordova.blackberry.echo" value="org.apache.cordova.blackberry.echo" />
                </config-file>
            </platform>
        </plugin>