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

插件是一个扩展的目标 C 类 `CDVPlugin` 类。

每个插件类必须注册为 `<feature>` 中标签的 `config.xml` 文件。 正是通过这一机制的 JavaScript `exec` 方法的 `service` 参数将映射到目标 C 类。

## 插件类映射

一个插件的 JavaScript 部分始终使用 `cordova.exec` 方法，如下所示：

    exec （< successFunction > < failFunction >、 < 服务 >、 < 行动 > [< args >]) ；
    

这封送一个请求从 `UIWebView` 到 iOS 本机侧，更或较不沸腾到调用 `action` 方法 `service` 类，传入的参数中的 `args` 数组。

指定插件作为 `<feature>` 在科尔多瓦 iOS 应用程序项目中的标记 `config.xml` 文件。

    < 功能名称 ="认为">< 参数名称 ="ios 包"值 ="CDVLocalStorage"/ >< / 功能 >
    

功能 `name` 属性应匹配您在 JavaScript 中使用 `exec` 调用的 `service` 参数，和 `value` 属性应与插件的目标 C 类的名称相匹配。 `<param name>`应始终是我 `"ios-package"` 。 如果不遵循此安装程序，该插件可能编译，但不是会到达科尔多瓦。

## 插件初始化和生存期

插件对象的一个实例创建为生活的每个 `UIWebView` 。 插件不会实例化之前他们第一次引用通过调用从 JavaScript，除非 `<param>` 与 `onload` `name` 属性设置为 `"true"` 的 `config.xml` 。 例如：

    < 功能名称 ="回声">< 参数名称 ="ios 包"值 ="回声"/ >< 参数名称 ="onload"值 ="true"/ >< / 功能 >
    

有*没有*指定插件的初始值设定项。相反，应使用插件 `pluginInitialize` 他们开办的逻辑方法。

长时间运行的请求，插件背景活动 （例如，播放的媒体），听众或内部状态应执行 `onReset` 方法和停止或清理这些活动。 这种方法运行时 `UIWebView` 定位到新的一页或刷新，重新加载 JavaScript。

## 写作 iOS 科尔多瓦插件

我们有插件请求到本机端 JavaScript 起火燃烧。 我们有通过正确映射的目标 C 的 iOS 插件 `config.xml` 文件。 所以最后的 iOS 目标 C 插件类长什么样子？

什么获取调度到该插件通过 JavaScript 的 `exec` 函数获取传递到相应的插件类的 `action` 方法。插件的方法有此签名：

    -（失效） myMethod:(CDVInvokedUrlCommand*) 命令 {CDVPluginResult * pluginResult = 零 ；NSString * myarg = [command.arguments objectAtIndex:0];如果 (myarg! = 无) {pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];} 其他 {pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"Arg 为空"] ；} [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId] ；}
    

1.  [CDVInvokedUrlCommand.h][1]

2.  [CDVPluginResult.h][2]

3.  [CDVCommandDelegate.h][3]

 [1]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVInvokedUrlCommand.h
 [2]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPluginResult.h
 [3]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVCommandDelegate.h

## iOS CDVPluginResult 消息类型

使用 CDVPluginResult 可以返回结果类型的各种回您的 JavaScript 回调函数，使用看起来像的类方法：

    + (CDVPluginResult *) resultWithStatus： (CDVCommandStatus) statusOrdinal messageAs......
    

您可以创建 `String` ， `Int` ， `Double` ， `Bool` ， `Array` ， `Dictionary` ， `ArrayBuffer` ，和 `Multipart` 类型。 或者，不附加任何参数 (只是发送状态)。 或者，返回一个错误。 你甚至可以选择不发送任何插件的结果，在这种情况下不会触发回调。

### 备注

*   `messageAsArrayBuffer`预计 `NSData*` 并将转换为 `ArrayBuffer` 为您的 JavaScript 回调 （和 `ArrayBuffers` 从 JavaScript 发送到一个插件都将转换为`NSData*`).
*   `messageAsMultipart` 预计 `NSArray *` 包含任何其他支持类型，并将整个数组作为发送 `参数` 给您的 JavaScript 回调。 
    *   怪癖： 这不是只是语法糖 （尽管它是甜的）。 这种方式，所有参数序列化或反序列化，必要时。 例如，它是能够安全返回 `NSData*` 作为多部分，但不是 `Array` /`Dictionary`.

## Echo 插件 iOS 插件

我们会将以下内容添加到该项目的 `config.xml` 文件：

    < 功能名称 ="回声">< 参数名称 ="ios 包"值 ="回声"/ >< / 功能 >
    

然后我们将添加下列文件 （ `Echo.h` 和 `Echo.m` ） 的插件文件夹里面我们科尔多瓦 iOS 应用程序文件夹中：

    / --- Echo.h 科尔多瓦插件头 --- / #import < Cordova/CDV.h > @interface 回声： CDVPlugin-(void) echo:(CDVInvokedUrlCommand*) 命令 ；@end / * * * Echo.m 科尔多瓦插件执行 * * * / #import"Echo.h"#import < Cordova/CDV.h > @implementation 回声-（失效） echo:(CDVInvokedUrlCommand*) 命令 {CDVPluginResult * pluginResult = 零 ；NSString * 回声 = [command.arguments objectAtIndex:0];如果 (回声! = 无 & & [回声长度] > 0) {pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:echo];} 其他 {pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];} [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId] ；} @end
    

让我们看看代码。在顶部，我们有所有必要的科尔多瓦进口。我们班延伸从 `CDVPlugin` （非常重要）。

此插件只支持一个操作， `echo` 的行动。 第一，我们抓住 echo 字符串使用 `objectAtIndex` 方法上的我们 `args` ，告诉它我们想要获取的参数数组中的第十的参数。 我们做一些参数检查： 请确保它不是 `nil` ，并确保它不是一个零长度的字符串。

如果是，我们返回 `PluginResult` 与 `ERROR` 状态。 如果所有这些检查通过，然后我们将返回 `PluginResult` 与 `OK` 状态，并通过在 `echo` 我们收到了在第一位作为参数的字符串。

最后，我们发送结果到 `self.commandDelegate` ，其中执行 `exec` 方法的成功或失败回调 JavaScript 一边。 如果成功回调被调用，它将通过在 `echo` 参数。

## 线程处理

在相同的 UI 线程中执行的插件方法。如果你的插件需要大量的处理，或者需要一个阻塞调用，则应使用后台线程。例如：

    -（失效） myPluginMethod:(CDVInvokedUrlCommand*) 命令 {/ / 检查 command.arguments 在这里。
        [self.commandDelegate runInBackground: ^ {NSString * 有效载荷 = 零 ；/ 有些阻塞的逻辑......
            CDVPluginResult * pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:payload];/ / SendPluginResult 方法是线程安全的。
            [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId] ；}];}
    

## 高级的插件功能

请参阅其他方法时，您可以在重写：

*   [CDVPlugin.h][4]

*   [CDVPlugin.m][5]

 [4]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.h
 [5]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.m

例如，你可以挂接到 `pause` ， `resume` ，应用程序终止和 `handleOpenURL` 事件。

## 调试插件

若要调试的目标 C 侧，您将使用 Xcode 的内置调试器。 对于 JavaScript，在 iOS 5.0 可以使用[Weinre、 Apache 科尔多瓦项目][6]或[iWebInspector、 一个第三方实用程序][7]

 [6]: https://github.com/apache/cordova-weinre
 [7]: http://www.iwebinspector.com/

Ios 6，您将使用 Safari 6.0 将简单地附加到您的应用程序运行在 iOS 6 模拟器。

## 常见的陷阱

*   别忘了向 config.xml 添加您的脚本映射。如果你忘记了，是在 Xcode 控制台中记录错误。

*   别忘了添加任何主机，您在白名单中，连接到域白名单指南中所述。如果你忘记了，是在 Xcode 控制台中记录错误。