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

此部分提供了如何在 Android 平台上实现本机插件代码的详细信息。 之前读这篇文章，请参阅应用程序插件插件的结构和其共同的 JavaScript 界面的概述。 这一节继续表明通信从科尔多瓦 web 视图的本机平台和后面的示例*回声*插件。 另一个示例，请参阅还在[CordovaPlugin.java][1]的评论.

 [1]: https://github.com/apache/cordova-android/blob/master/framework/src/org/apache/cordova/CordovaPlugin.java

Android 插件基于科尔多瓦-Android，Android 的 web 视图包括与附加到它上面的钩子。 插件被表示为类映射的 `config.xml` 文件。 插件包括至少一个扩展的 Java 类的 `CordovaPlugin` 类，重写的一个其 `execute` 方法。 作为最佳实践，该插件还应处理 `pause` 和 `resume` 事件，以及任何插件之间传递的消息。 插件需要长时间运行的请求，后台活动媒体回放、 听众或内部状态等应执行 `onReset()` ，以及方法。 它执行时 `WebView` 定位到新的一页或刷新，重新加载 JavaScript。

## 插件类映射

插件的 JavaScript 接口使用 `cordova.exec` 方法，如下所示：

        exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);
    

这封送请求从 web 视图到 Android 的本机对岸，有效地调用 `action` 方法 `service` 具有额外的参数中传递的类 `args` 数组。

是否您分发插件作为 Java 文件或作为它自己的一个*jar*文件，必须在科尔多瓦 Android 应用程序中指定插件 `res/xml/config.xml` 文件。 有关如何使用的详细信息，请参阅应用程序插件 `plugin.xml` 文件，把这个注射 `feature` 元素：

        <feature name="<service_name>">
            <param name="android-package" value="<full_name_including_namespace>" />
        </feature>
    

服务名称匹配在 JavaScript 中使用 `exec` 调用。 值是 Java 类的完全限定命名空间标识符。 否则为该插件可能会编译，但仍不能使用到科尔多瓦。

## 插件初始化和生存期

插件对象的一个实例创建为生活的每个 `WebView` 。 插件不会实例化之前他们第一次引用通过调用从 JavaScript，除非 `<param>` 与 `onload` `name` 属性设置为 `"true"` 的 `config.xml` 。 例如：

    <feature name="Echo">
        <param name="android-package" value="<full_name_including_namespace>" />
        <param name="onload" value="true" />
    </feature>
    

插件应使用 `initialize` 方法为他们的创业逻辑。

    @override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        // your init code here
    }
    

## 编写一个 Android Java 插件

JavaScript 调用触发插件请求到本机的一边，和 correspoinding Java 插件映射正确地在 `config.xml` 文件中，但最后的 Android Java 插件类看起来不会像什么？ 无论派往与 JavaScript 的插件 `exec` 函数传递到插件类的 `execute` 方法。 大多数 `execute` 实现看起来像这样：

        @Override 公共 boolean 类型的值执行 CallbackContext callbackContext JSONArray args 字符串操作） 将引发 JSONException {如果 ("beep".equals(action)) {this.beep(args.getLong(0));callbackContext.success() ；则返回 true ；} 返回 false ；/ / 返回 false 结果的"MethodNotFound"错误。
        }
    

JavaScript `exec` 函数的 `action` 参数对应于一个类的私有类方法派遣了可选参数。

当捕获异常，并返回错误，重要的是为了明确起见，错误返回给 JavaScript 匹配 Java 异常名称尽可能多。

## 线程处理

插件的 JavaScript 并*不*在主线程中运行 `WebView` 接口 ； 相反，它会运行 `WebCore` 线程，一样 `execute` 方法。 如果您需要与用户界面进行交互，则应使用以下变化：

        @Override
        public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
            if ("beep".equals(action)) {
                final long duration = args.getLong(0);
                cordova.getActivity().runOnUiThread(new Runnable() {
                    public void run() {
                        ...
                        callbackContext.success(); // Thread-safe.
                    }
                });
                return true;
            }
            return false;
        }
    

使用以下如果你不需要在主界面上运行的线程，但不是想阻止 `WebCore` 线程或者：

        @Override
        public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
            if ("beep".equals(action)) {
                final long duration = args.getLong(0);
                cordova.getThreadPool().execute(new Runnable() {
                    public void run() {
                        ...
                        callbackContext.success(); // Thread-safe.
                    }
                });
                return true;
            }
            return false;
        }
    

## 回声 Android 插件示例

若要匹配的 JavaScript 界面*回波*特征描述的应用程序插件，使用 `plugin.xml` 来注入 `feature` 到本地平台规范 `config.xml` 文件：

        <platform name="android">
            <config-file target="config.xml" parent="/*">
                <feature name="Echo">
                    <param name="android-package" value="org.apache.cordova.plugin.Echo"/>
                </feature>
            </config-file>
        </platform>
    

然后添加以下到 `src/org/apache/cordova/plugin/Echo.java` 文件：

        package org.apache.cordova.plugin;
    
        import org.apache.cordova.CordovaPlugin;
        import org.apache.cordova.CallbackContext;
    
        import org.json.JSONArray;
        import org.json.JSONException;
        import org.json.JSONObject;
    
        /**
         * This class echoes a string called from JavaScript.
         */
        public class Echo extends CordovaPlugin {
    
            @Override
            public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
                if (action.equals("echo")) {
                    String message = args.getString(0);
                    this.echo(message, callbackContext);
                    return true;
                }
                return false;
            }
    
            private void echo(String message, CallbackContext callbackContext) {
                if (message != null && message.length() > 0) {
                    callbackContext.success(message);
                } else {
                    callbackContext.error("Expected one non-empty string argument.");
                }
            }
        }
    

必要的进口商品在文件的顶部延伸中的类 `CordovaPlugin` ，其 `execute()` 方法，它将覆盖从其接收邮件 `exec()` 。 `execute()`方法第一次测试的值 `action` ，在这种情况下有有效期的只有一个 `echo` 的值。 任何其他行动返回 `false` ，并导致 `INVALID_ACTION` 错误，会转换为调用的 JavaScript 一边错误回调。

下一步，该方法检索 echo 字符串使用 `args` 对象的 `getString` 方法，指定的第一个参数传递给该方法。 值传递给一个私人后 `echo` 的方法，它是参数检查，以确保它不是 `null` 或空字符串，这种情况下的 `callbackContext.error()` 调用 JavaScript 的错误回调。 如果通过各种检查， `callbackContext.success()` 将传递原始 `message` 回 JavaScript 的成功回调作为参数的字符串。

## Android 系统集成

Android 功能 `Intent` 允许进程互相沟通的系统。 插件可以访问 `CordovaInterface` 对象，可以访问 Android `Activity` ，运行应用程序。 这是 `Context` 启动新的 android 系统所需 `Intent` 。 `CordovaInterface`允许插件启动 `Activity` 一个结果，并设置回调插件时 `Intent` 返回到应用程序。

到科尔多瓦 2.0 插件可以不再直接访问 `Context` ，和遗产 `ctx` 成员已被否决。 所有 `ctx` 的方法上存在 `Context` ，所以这两个 `getContext()` 和 `getActivity()` 可以返回所需的对象。

## 调试 Android 插件

Eclipse 允许您调试插件作为 Java 源代码包含在项目中。 只有最新版本的 Android 开发者工具允许您将源代码附加到*JAR*的依赖关系，所以此功能尚不完全支持。