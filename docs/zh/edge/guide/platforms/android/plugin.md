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

# Android 插件

在编写插件，需要了解的科尔多瓦 android 系统的体系结构。 科尔多瓦 Android 包括 Android 的 web 视图与附加到它上面的钩子。 这些插件都表示为类映射的 `config.xml` 文件。

插件包括至少一个扩展的 Java 类的 `CordovaPlugin` 类。 插件必须重写的一个 `execute` 方法从 `CordovaPlugin` 。 作为最佳实践，该插件应处理 `pause` 和 `resume` 的事件和任何插件之间传递的消息。 插件需要长时间运行的请求，后台活动媒体回放、 听众或内部状态等应执行 `onReset()` ，以及方法。 它执行时 `WebView` 定位到新的一页或刷新，重新加载 JavaScript。

## 插件类映射

一个插件的 JavaScript 部分始终使用 `cordova.exec` 方法，如下所示：

    exec （< successFunction > < failFunction >、 < 服务 >、 < 行动 > [< args >]) ；
    

这封送从 web 视图到 Android 的本机方面，更多或更少沸腾到调用请求 `action` 上的方法 `service` 类，传入的参数中的 `args` 数组。

是否您分发你的插件作为 Java 文件或一罐，必须将该插件添加到 `config.xml` 文件在科尔多瓦 Android 应用程序的 `res/xml/` 目录。

    < 功能名称 ="< service_name >">< 参数名称 ="android 包"值 ="< full_name_including_namespace >"/ >< / 功能 >
    

服务名称应与匹配在 JavaScript 中使用 `exec` 的电话和值是 Java 类完整名称，包括命名空间。 否则为该插件可编译，但仍无法访问由科尔多瓦。

## 编写一个 Android Java 插件

JavaScript 触发插件到本机端的请求。Android Java 插件正确映射通过 `config.xml` 文件。所以最终的 Android Java 插件类长什么样子？

什么获取调度到该插件通过 JavaScript 的 `exec` 函数获取传递到插件类的 `execute` 方法。 大多数 `execute` 实现看起来像这样：

    @Override 公共 boolean 类型的值执行 CallbackContext callbackContext JSONArray args 字符串操作） 将引发 JSONException {如果 ("beep".equals(action)) {this.beep(args.getLong(0));callbackContext.success() ；则返回 true ；} 返回 false ；/ / 返回 false 结果的"MethodNotFound"错误。
    }
    

我们比较的值的 `action` 参数，并派遣到 (私人) 方法在类中，可以选择将某些参数传递给方法关闭请求。

当捕获异常，并返回错误，重要的是为了明确起见，错误返回给 JavaScript 匹配 Java 异常名称尽可能多。

### 线程处理

在 web 视图中的 JavaScript 并*不*在 UI 线程上运行。它在测试网线程上运行。`execute`还在测试网线程上运行方法。

如果您需要与用户界面进行交互，您应该使用以下方法：

    @Override 公共 boolean 类型的值执行最后 CallbackContext callbackContext JSONArray args 字符串操作） 将引发 JSONException {如果 ("beep".equals(action)) {最后期限长 = args.getLong(0) ；cordova.getActivity ().runOnUiThread (新 Runnable() run ({公共 void) {......
                    callbackContext.success() ；/ / 线程安全的。
                }
            });则返回 true ；} 返回 false ；}
    

如果你不需要在 UI 线程上运行，但不是想阻止测试网线：

    @Override 公共 boolean 类型的值执行最后 CallbackContext callbackContext JSONArray args 字符串操作） 将引发 JSONException {如果 ("beep".equals(action)) {最后期限长 = args.getLong(0) ；cordova.getThreadPool ().execute (新 Runnable() run ({公共 void) {......
                    callbackContext.success() ；/ / 线程安全的。
                }
            });则返回 true ；} 返回 false ；}
    

### 回声 Android 插件示例

添加以下内容我们 `config.xml` 文件：

    < 功能名称 ="回声">< 参数名称 ="android 包"value="org.apache.cordova.plugin.Echo"/ >< / 功能 >
    

然后将添加到下面的文件 `src/org/apache/cordova/plugin/Echo.java` 里面我们的科尔多瓦 Android 应用程序：

    包 org.apache.cordova.plugin ；导入 org.apache.cordova.CordovaPlugin ；导入 org.apache.cordova.CallbackContext ；导入 org.json.JSONArray ；导入 org.json.JSONException ；导入 org.json.JSONObject ；/ --- 此类回显从 JavaScript 调用的字符串。
     * / 公共类回声扩展 CordovaPlugin {@Override 公共 boolean 类型的值执行 CallbackContext callbackContext JSONArray args 字符串操作） 将引发 JSONException {如果 (action.equals("echo")) {字符串消息 = args.getString(0) ；this.echo （邮件、 callbackContext） ；则返回 true ；} 返回 false ；} 私人 void 回声 （字符串消息，CallbackContext callbackContext） {如果 (消息! = null & & message.length() > 0) {callbackContext.success(message);} 其他 {callbackContext.error ("预期一个非空的字符串参数。"） ；}
        }
    }
    

让我们看看代码。 必要的 `imports` 在顶部。 我们班从延伸 `CordovaPlugin` 。 我们重 execute() 方法，以便从 exec() 接收消息。 我们的方法首先比较反对 `action` : 这个插件只支持一个操作， `echo` 行动。 任何其他行动返回 `false` ，这会导致错误的类型 `INVALID_ACTION` ，其中将转化为一个错误回调调用的 JavaScript 一边。 下一步，我们抓住 echo 字符串使用 `getString` 方法上的我们 `args` ，告诉它我们想要获取参数数组中的第十的参数。 我们做一些参数检查： 请确保它不是 `null` ，并确保它不是一个零长度的字符串。 如果是，我们称之为 `callbackContext.error()` (其中，现在，你应该知道调用错误回调)。 如果所有这些检查通过，然后我们调用 `callbackContext.success()` ，并通过在 `message` 我们收到作为参数的字符串。 这最后转化为一个成功回调调用的 JavaScript 一边。 它还通过 `message` 参数作为入 JavaScript 成功回调函数的参数。

## 调试插件

Eclipse 可以用于调试 Android 项目，并可以调试插件，如果 Java 源代码包含在项目中。 已知只有最新版本的 Android 开发者工具是允许来源代码附件 JAR 的依赖关系，所以这不完全支持在这一次。

## 常见的陷阱

*   插件可以访问 `CordovaInterface` 对象。 此对象具有对 Android 的访问 `Activity` ，在运行该应用程序。 这是 `Context` 启动新的 android 系统所需 `Intent` 。 `CordovaInterface`允许插件启动 `Activity` 一个结果，并设置回调插件时 `Intent` 回来到应用程序。 这是重要的因为 `Intent` s 系统是 android 系统进程之间的通信。

*   插件并没有直接访问 `Context` 因为他们在过去。 遗留下来 `ctx` 成员已弃用，并将移除 2.0 发表后六个月。 所有的 `ctx` 方法上存在 `Context` ，所以这两个 `getContext()` 和 `getActivity()` 都能够返回所需的适当对象。

## 使用源

准备好自己要写你自己的插件的最佳方法之一是[看看现有的插件][1].

 [1]: https://github.com/apache/cordova-android/tree/master/framework/src/org/apache/cordova

您还应阅读通过在[CordovaPlugin.java][2]中的评论.

 [2]: https://github.com/apache/cordova-android/blob/master/framework/src/org/apache/cordova/CordovaPlugin.java