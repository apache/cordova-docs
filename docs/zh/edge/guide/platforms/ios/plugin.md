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

# iOS 插件

此部分提供了如何在 iOS 平台上实现本机插件代码的详细信息。 之前读这篇文章，请参阅应用程序插件插件的结构和其共同的 JavaScript 界面的概述。 这一节继续表明通信从科尔多瓦 web 视图的本机平台和后面的示例*回声*插件。

IOS 插件作为扩展目标 C 类实现 `CDVPlugin` 类。 对于 JavaScript 的 `exec` 方法的 `service` 参数将映射到一个目标 C 类，每个插件必须注册为 `<feature>` 标记命名的应用程序目录中 `config.xml` 文件。

## 插件类映射

一个插件的 JavaScript 部分使用 `cordova.exec` 方法，如下所示：

        exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);
    

这封送一个请求从 `UIWebView` 到 iOS 本机一侧，有效地调用 `action` 方法在 `service` 类，传入的参数中的 `args` 数组。

指定作为插件 `<feature>` 科尔多瓦 iOS 应用程序项目中的标记 `config.xml` 文件，使用 `plugin.xml` 文件来自动应用程序插件中所述注入此标记：

        <feature name="LocalStorage">
            <param name="ios-package" value="CDVLocalStorage" />
        </feature>
    

该功能的 `name` 属性应匹配您所指定的作为 JavaScript `exec` 调用的 `service` 参数。 `value`属性应与插件的目标 C 类的名称相匹配。 `<param>`元素的 `name` 应始终是 `ios-package` 。 如果你不遵守这些准则，该插件可能会编译，但科尔多瓦可能仍然不能够访问它。

## 插件初始化和生存期

插件对象的一个实例创建为生活的每个 `UIWebView` 。 首先从 JavaScript 的调用的引用时，通常被实例化插件。 否则他们可以通过设置实例化 `param` 命名为 `onload` 到 `true` 在 `config.xml` 文件：

        <feature name="Echo">
            <param name="ios-package" value="Echo" />
            <param name="onload" value="true" />
        </feature>
    

有*没有*指定插件的初始值设定项。相反，应使用插件 `pluginInitialize` 为其启动逻辑方法。

插件需要长时间运行的请求，如媒体回放、 听众，保持内部状态应执行的背景活动 `onReset` 方法来清理这些活动。 在方法运行时 `UIWebView` 定位到新的一页或刷新，重新加载 JavaScript。

## 写作 iOS 科尔多瓦插件

JavaScript 调用触发插件请求到本机的一边，和相应的 iOS 目标 C 插件映射正确地在 `config.xml` 文件中，但最后 iOS 目标 C 插件类看起来像什么？ 无论派往与 JavaScript 的插件 `exec` 函数传递到相应的插件类的 `action` 方法。 插件的方法有此签名：

        - (void)myMethod:(CDVInvokedUrlCommand*)command
        {
            CDVPluginResult* pluginResult = nil;
            NSString* myarg = [command.arguments objectAtIndex:0];
    
            if (myarg != nil) {
                pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
            } else {
                pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"Arg was null"];
            }
            [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
        }
    

有关更多详细信息，请参见 `[CDVInvokedUrlCommand.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVInvokedUrlCommand.h)` ， `[CDVPluginResult.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPluginResult.h)` ，和`[CDVCommandDelegate.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVCommandDelegate.h)`.

## iOS CDVPluginResult 消息类型

您可以使用 `CDVPluginResult` 来返回结果的多种类型回 JavaScript 回调函数，使用类的方法，它们遵循这种模式：

        + (CDVPluginResult*)resultWithStatus:(CDVCommandStatus)statusOrdinal messageAs...
    

您可以创建 `String` ， `Int` ， `Double` ， `Bool` ， `Array` ， `Dictionary` ， `ArrayBuffer` ，和 `Multipart` 类型。 你可以也离开了任何参数来发送状态，或返回错误，或甚至选择不发送任何插件的结果，在这种情况下既不回拨火。

请注意以下复杂的返回值为：

*   `messageAsArrayBuffer`预计 `NSData*` 并将转换为 `ArrayBuffer` 在 JavaScript 回调。 同样，任何 `ArrayBuffer` JavaScript 发送到一个插件都将转换为`NSData*`.

*   `messageAsMultipart`预计， `NSArray*` 包含任何其他支持类型，并将发送整个数组作为 `arguments` 给您的 JavaScript 回调。 这种方式，所有参数在序列化或反序列化作为必要的所以它是能够安全返回 `NSData*` 作为多部分，但不是 `Array` /`Dictionary`.

## 回声 iOS 插件示例

若要匹配的 JavaScript 界面*回波*特征描述的应用程序插件，使用 `plugin.xml` 来注入 `feature` 到本地平台规范 `config.xml` 文件：

        <platform name="ios">
            <config-file target="config.xml" parent="/*">
                <feature name="Echo">
                    <param name="ios-package" value="Echo" />
                </feature>
            </config-file>
        </platform>
    

然后我们将添加以下 `Echo.h` 和 `Echo.m` 文件到 `Plugins` 内科尔多瓦 iOS 应用程序目录的文件夹：

        /********* Echo.h Cordova Plugin Header *******/
    
        #import <Cordova/CDV.h>
    
        @interface Echo : CDVPlugin
    
        - (void)echo:(CDVInvokedUrlCommand*)command;
    
        @end
    
        /********* Echo.m Cordova Plugin Implementation *******/
    
        #import "Echo.h"
        #import <Cordova/CDV.h>
    
        @implementation Echo
    
        - (void)echo:(CDVInvokedUrlCommand*)command
        {
            CDVPluginResult* pluginResult = nil;
            NSString* echo = [command.arguments objectAtIndex:0];
    
            if (echo != nil && [echo length] > 0) {
                pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:echo];
            } else {
                pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
            }
    
            [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
        }
    
        @end
    

在文件的顶部必要的进口商品扩展从类 `CDVPlugin` 。 在这种情况下，该插件只支持单个 `echo` 行动。 它获取 echo 字符串通过调用 `objectAtIndex` 方法获取的第一个参数 `arguments` 对应于参数的数组通过 JavaScript 在 `exec()` 函数。

它会检查该参数，以确保它不是 `nil` 或空字符串，返回 `PluginResult` 与 `ERROR` 如果是这样的状态。 如果该参数通过检查，它返回 `PluginResult` 与 `OK` 状态，在原始中传递 `echo` 的字符串。 最后，它将发送结果到 `self.commandDelegate` ，其中执行 `exec` 方法的成功或失败回调 JavaScript 一边。 如果成功回调被调用，它将通过在 `echo` 参数。

## iOS 一体化

`CDVPlugin`类功能其他你的插件可以重写的方法。 例如，您可以捕获 `pause` ， `resume` ，应用程序终止和 `handleOpenURL` 事件。 请参见[CDVPlugin.h][1]和[CDVPlugin.m][2]类的指导。

 [1]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.h
 [2]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.m

## 线程处理

插件方法通常在主界面相同的线程中执行。 如果你的插件需要大量的处理，或者需要一个阻塞调用，则应使用后台线程。 例如：

        - (void)myPluginMethod:(CDVInvokedUrlCommand*)command
        {
            // Check command.arguments here.
            [self.commandDelegate runInBackground:^{
                NSString* payload = nil;
                // Some blocking logic...
                CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:payload];
                // The sendPluginResult method is thread-safe.
                [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
            }];
        }
    

## 调试 iOS 插件

若要调试的目标 C 一边，你需要 Xcode 的内置调试器。 对于 JavaScript，在 iOS 5.0 可以使用[Weinre、 Apache 科尔多瓦项目][3]或[iWebInspector、 一个第三方实用程序][4]。 Ios 6，您可以向您的应用程序运行在 iOS 6 模拟器附加 Safari 6.0。

 [3]: https://github.com/apache/cordova-weinre
 [4]: http://www.iwebinspector.com/

## 常见的陷阱

*   别忘了添加到您的脚本映射 `config.xml` 。如果你忘记了，是在 Xcode 控制台中记录错误。

*   别忘了添加任何主机，您在白名单中，连接到域白名单指南中所述。如果你忘记了，是在 Xcode 控制台中记录错误。