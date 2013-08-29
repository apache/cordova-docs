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

# InAppBrowser

> `InAppBrowser`是一个 web 浏览器显示在应用程序中调用时`window.open`.

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    

## 说明

从调用返回的对象`window.open`.

## 方法

*   addEventListener
*   removeEventListener
*   关闭
*   显示
*   executeScript
*   insertCSS

## 访问功能

从 3.0 版，科尔多瓦作为*插件*实现了设备级 Api。 使用 CLI 的 `plugin` 命令，描述在命令行界面，可以添加或删除一个项目，为此功能：

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-inappbrowser.git
        $ cordova plugin rm org.apache.cordova.core.inappbrowser
    

这些命令适用于所有有针对性的平台，但修改如下所述的特定于平台的配置设置：

*   （在 android`app/res/xml/config.xml`)
    
        < 功能名称 ="InAppBrowser">< 参数名称 ="android 包"value="org.apache.cordova.InAppBrowser"/ >< / 功能 >
        

*   （在 iOS`config.xml`)
    
        < 功能名称 ="InAppBrowser">< 参数名称 ="ios 包"值 ="CDVInAppBrowser"/ >< / 功能 >
        

*   Windows Phone 7，8 个 （在`config.xml`)
    
        < 功能名称 ="InAppBrowser"/ >
        

一些平台可能支持此功能，而无需任何特殊的配置。有关概述，请参见平台支持。

# addEventListener

> 为事件添加一个侦听器`InAppBrowser`.

    ref.addEventListener （事件、 回调） ；
    

*   **ref**： 参考 `InAppBrowser` 窗口*(InAppBrowser)*

*   **事件名称**： 事件侦听*（字符串）*
    
    *   **loadstart**： 当触发事件 `InAppBrowser` 开始加载一个 URL。
    *   **loadstop**： 当触发事件 `InAppBrowser` 完成加载一个 URL。
    *   **loaderror**： 当触发事件 `InAppBrowser` 加载 URL 时遇到错误。
    *   **退出**： 当触发事件 `InAppBrowser` 关闭窗口。

*   **回调**： 执行时触发该事件的函数。该函数通过 `InAppBrowserEvent` 对象作为参数。

## 支持的平台

*   Android 系统
*   黑莓手机
*   iOS
*   Windows Phone 7 和 8

## 快速的示例

    var ref = window.open ('http://apache.org'、 '_blank' ' 位置 = 是的） ；ref.addEventListener ('loadstart'，function() {alert(event.url);});
    

## 完整的示例

    <!DOCTYPE html >< html >< 头 >< 标题 > InAppBrowser.addEventListener 示例 < / 标题 >< 脚本类型 ="文本/javascript"charset ="utf 8"src="cordova.js">< / 脚本 >< 脚本类型 ="文本/javascript"charset ="utf 8"> / / 等待设备 API 库加载 / / document.addEventListener ("deviceready"，onDeviceReady，false);/ / 设备的 Api 可 / / 函数 onDeviceReady() {var ref = window.open ('http://apache.org'、 '_blank' ' 位置 = 是的） ；ref.addEventListener ('loadstart' function(event) {警报 (' 开始： ' + event.url);});ref.addEventListener ('loadstop' function(event) {警报 (' 停止： ' + event.url);});ref.addEventListener ('loaderror' function(event) {警报 (' 错误： ' + event.message);});ref.addEventListener ('出口'，function(event) {alert(event.type);});} < / 脚本 >< / 头 >< 身体 >< / 身体 >< / html >
    

# removeEventListener

> 移除的事件侦听器`InAppBrowser`.

    ref.removeEventListener （事件、 回调） ；
    

*   **ref**： 参考 `InAppBrowser` 窗口。*() InAppBrowser*

*   **事件名称**： 要停止侦听的事件。*（字符串）*
    
    *   **loadstart**： 当触发事件 `InAppBrowser` 开始加载一个 URL。
    *   **loadstop**： 当触发事件 `InAppBrowser` 完成加载一个 URL。
    *   **loaderror**： 当触发事件 `InAppBrowser` 遇到错误加载一个 URL。
    *   **退出**： 当触发事件 `InAppBrowser` 关闭窗口。

*   **回调**: 要在事件触发时执行的函数。该函数通过 `InAppBrowserEvent` 对象。

## 支持的平台

*   Android 系统
*   黑莓手机
*   iOS
*   Windows Phone 7 和 8

## 快速的示例

    var ref = window.open ('http://apache.org'、 '_blank' ' 位置 = 是的） ；var myCallback = function() {alert(event.url) ；} ref.addEventListener ('loadstart'，myCallback);ref.removeEventListener ('loadstart'，myCallback);
    

## 完整的示例

    <!DOCTYPE html >< html >< 头 >< 标题 > InAppBrowser.removeEventListener 示例 < / 标题 >< 脚本类型 ="文本/javascript"charset ="utf 8"src="cordova.js">< / 脚本 >< 脚本类型 ="文本/javascript"charset ="utf 8"> / / 等待设备 API 库加载 / / document.addEventListener ("deviceready"，onDeviceReady，false);/ / 全球 InAppBrowser 参考 var iabRef = null;函数 iabLoadStart(event) {警报 (event.type + '-' + event.url） ；} 函数 iabLoadStop(event) {警报 (event.type + '-' + event.url） ；} 函数 iabLoadError(event) {警报 (event.type + '-' + event.message） ；} 函数 iabClose(event) {alert(event.type);iabRef.removeEventListener ('loadstart'，iabLoadStart);iabRef.removeEventListener ('loadstop'，iabLoadStop);iabRef.removeEventListener ('loaderror'，iabLoadError);iabRef.removeEventListener '退出' iabClose） ；} / / 设备的 Api 可 / / 函数 onDeviceReady() {iabRef = window.open ('http://apache.org'、 '_blank' ' 位置 = 是的） ；iabRef.addEventListener ('loadstart'，iabLoadStart);iabRef.addEventListener ('loadstop'，iabLoadStop);iabRef.removeEventListener ('loaderror'，iabLoadError);iabRef.addEventListener '退出' iabClose） ；} < / 脚本 >< / 头 >< 身体 >< / 身体 >< / html >
    

# 关闭

> 关闭 `InAppBrowser` 窗口。

    ref.close() ；
    

*   **ref**： 参考 `InAppBrowser` 窗口*(InAppBrowser)*

## 支持的平台

*   Android 系统
*   黑莓手机
*   iOS
*   Windows Phone 7 和 8

## 快速的示例

    var ref = window.open ('http://apache.org'、 '_blank' ' 位置 = 是的） ；ref.close() ；
    

## 完整的示例

    <!DOCTYPE html >< html >< 头 >< 标题 > InAppBrowser.close 示例 < / 标题 >< 脚本类型 ="文本/javascript"charset ="utf 8"src="cordova.js">< / 脚本 >< 脚本类型 ="文本/javascript"charset ="utf 8"> / / 等待设备 API 库加载 / / document.addEventListener ("deviceready"，onDeviceReady，false);/ / 设备的 Api 可 / / 函数 onDeviceReady() {var ref = window.open ('http://apache.org'、 '_blank' ' 位置 = 是的） ；/ / 关闭后 5 秒 setTimeout(function() {ref.close(); InAppBrowser}，5000） ；} < / 脚本 >< / 头 >< 身体 >< / 身体 >< / html >
    

# 显示

> 显示打开了隐藏的 InAppBrowser 窗口。调用这没有任何影响，如果 InAppBrowser 是已经可见。

    ref.show() ；
    

*   **ref:**的 InAppBrowser 窗口 (参考`InAppBrowser`)

## 支持的平台

*   Android 系统
*   黑莓手机
*   iOS

## 快速的示例

    var ref = window.open ('http://apache.org'、 '_blank' ' 隐藏 = 是的） ；ref.show() ；
    

## 完整的示例

    <!DOCTYPE html >< html >< 头 >< 标题 > InAppBrowser.show 示例 < / 标题 >< 脚本类型 ="文本/javascript"charset ="utf 8"src="cordova.js">< / 脚本 >< 脚本类型 ="文本/javascript"charset ="utf 8"> / / 等待科尔多瓦加载 / / document.addEventListener ("deviceready"，onDeviceReady，false);/ / 科尔多瓦是准备好了 / / 函数 onDeviceReady() {var ref = window.open ('http://apache.org'、 '_blank' ' 隐藏 = 是的） ；ref.addEventListener ('loadstop'，function(event) {警报 ('背景窗口加载') ；});/ / 关闭后 5 秒 setTimeout(function() {ref.close(); InAppBrowser}，5000） ；} < / 脚本 >< / 头 >< 身体 >< / 身体 >< / html >
    

# executeScript

> 注入到 JavaScript 代码 `InAppBrowser` 窗口

    ref.executeScript 回调的详细信息） ；
    

*   **ref**： 参考 `InAppBrowser` 窗口。*() InAppBrowser*

*   **injectDetails**: 要运行的脚本的详细信息或指定 `file` 或 `code` 的关键。*（对象）*
    
    *   **文件**： 脚本的 URL 来注入。
    *   **代码**： 要注入脚本的文本。

*   **回调**： 执行后注入的 JavaScript 代码的函数。
    
    *   如果插入的脚本的类型 `code` ，回调执行使用单个参数，这是该脚本的返回值，裹在 `Array` 。 对于多行脚本，这是最后一条语句或最后计算的表达式的返回值。

## 支持的平台

*   Android 系统
*   黑莓手机
*   iOS

## 快速的示例

    var ref = window.open ('http://apache.org'、 '_blank' ' 位置 = 是的） ；ref.addEventListener ('loadstop' function() {ref.executeSript ({文件："myscript.js"});});
    

## 完整的示例

    <!DOCTYPE html >< html >< 头 >< 标题 > InAppBrowser.executeScript 示例 < / 标题 >< 脚本类型 ="文本/javascript"charset ="utf 8"src="cordova.js">< / 脚本 >< 脚本类型 ="文本/javascript"charset ="utf 8"> / / 等待设备 API 库加载 / / document.addEventListener ("deviceready"，onDeviceReady，false);/ / 全球 InAppBrowser 参考 var iabRef = null;/ / 我们自定义 JavaScript 注入 InAppBrowser 窗口 / / 函数 replaceHeaderImage() {iabRef.executeScript ({代码："var img=document.querySelector ('#header img') ；img.src= 'http://cordova.apache.org/images/cordova_bot.png' ；"}，function() {警报 ("图像元素成功劫持"） ；}} 函数 iabClose(event) {iabRef.removeEventListener ('loadstop'，replaceHeaderImage);iabRef.removeEventListener '退出' iabClose） ；} / / 设备的 Api 可 / / 函数 onDeviceReady() {iabRef = window.open ('http://apache.org'、 '_blank' ' 位置 = 是的） ；iabRef.addEventListener ('loadstop'，replaceHeaderImage);iabRef.addEventListener '退出' iabClose） ；} < / 脚本 >< / 头 >< 身体 >< / 身体 >< / html >
    

# insertCSS

> 注入到 CSS `InAppBrowser` 窗口。

    ref.insertCSS 回调的详细信息） ；
    

*   **ref**： 参考 `InAppBrowser` 窗口*(InAppBrowser)*

*   **injectDetails**: 要运行的脚本的详细信息或指定 `file` 或 `code` 的关键。*（对象）*
    
    *   **文件**： 样式表的 URL 来注入。
    *   **代码**： 文本样式表的注入。

*   **回调**： 在 CSS 注射后执行的函数。

## 支持的平台

*   Android 系统
*   黑莓手机
*   iOS

## 快速的示例

    var ref = window.open ('http://apache.org'、 '_blank' ' 位置 = 是的） ；ref.addEventListener ('loadstop' function() {ref.insertCSS ({文件："mystyles.css"});});
    

## 完整的示例

    <!DOCTYPE html >< html >< 头 >< 标题 > InAppBrowser.insertCSS 示例 < / 标题 >< 脚本类型 ="文本/javascript"charset ="utf 8"src="cordova.js">< / 脚本 >< 脚本类型 ="文本/javascript"charset ="utf 8"> / / 等待设备 API 库加载 / / document.addEventListener ("deviceready"，onDeviceReady，false);/ / 全球 InAppBrowser 参考 var iabRef = null;/ / 我们自定义的 CSS 注入 InAppBrowser 窗口 / / 函数 changeBackgroundColor() {iabRef.insertCSS ({代码："身体 {背景： #ffff00"}，function() {警报 （"样式更改"） ； 或}} 函数 iabClose(event) {iabRef.removeEventListener ('loadstop'，changeBackgroundColor);iabRef.removeEventListener '退出' iabClose） ；} / / 设备的 Api 可 / / 函数 onDeviceReady() {iabRef = window.open ('http://apache.org'、 '_blank' ' 位置 = 是的） ；iabRef.addEventListener ('loadstop'，changeBackgroundColor);iabRef.addEventListener '退出' iabClose） ；} < / 脚本 >< / 头 >< 身体 >< / 身体 >< / html >
    

# InAppBrowserEvent

对象传递给回调函数从 `addEventListener` 上调用 `InAppBrowser` 的对象。

## 属性

*   **类型**： eventname，或者 `loadstart` ， `loadstop` ， `loaderror` ，或 `exit` 。*（字符串）*

*   **url**: 已加载的 URL。*（字符串）*

*   **代码**： 仅中的情况的错误代码 `loaderror` 。*（人数）*

*   **消息**： 该错误消息，只有在的情况下 `loaderror` 。*（字符串）*