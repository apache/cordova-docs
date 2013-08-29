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

# window.open

在一个新的中打开 URL `InAppBrowser` 实例，当前的浏览器实例或系统浏览器。

    var ref = window.open(url, target, options);
    

*   **ref**： 参考 `InAppBrowser` 窗口。*() InAppBrowser*

*   **url**： 要加载*（字符串）*的 URL。调用 `encodeURI()` 这个如果 URL 包含 Unicode 字符。

*   **目标**： 目标在其中加载的 URL，可选参数，默认值为 `_self` 。*（字符串）*
    
    *   `_self`： 打开在科尔多瓦 web 视图如果 URL 是在白名单中，否则它在打开`InAppBrowser`.
    *   `_blank`： 在打开`InAppBrowser`.
    *   `_system`： 在该系统的 web 浏览器中打开。

*   **选项**： 选项为 `InAppBrowser` 。可选，拖欠到： `location=yes` 。*（字符串）*
    
    `options`字符串必须不包含任何空白的空间，和必须用逗号分隔每个功能的名称/值对。 功能名称区分大小写。 所有平台都支持下面的值：
    
    *   **位置**： 设置为 `yes` 或 `no` ，打开 `InAppBrowser` 的位置栏打开或关闭。
    ## Android 仅
    
    *   **closebuttoncaption** -将设置为一个字符串，它将会在"完成"按钮的标题。 
    *   **隐藏**-设置为是以创建浏览器和加载页面，但不是显示它。 Load 事件将触发加载完成时。 省略或设置为否 （默认值），以有浏览器打开，然后以正常方式加载。 
    *   **clearcache** -设置为 'yes' 有浏览器的 cookie 缓存清除之前打开新窗口
    *   **clearsessioncache** -设置为 'yes' 有会话 cookie 缓存清除之前打开新窗口
    ## iOS 只
    
    *   **closebuttoncaption** -将设置为一个字符串，它将会在"完成"按钮的标题。注意你会有自己的本地化此值。
    *   **隐藏**-设置为是以创建浏览器和加载页面，但不是显示它。 Load 事件将触发加载完成时。 省略或设置为否 （默认值），以有浏览器打开，然后以正常方式加载。 
    *   **工具栏**-设置为 '是' 或 '否'，打开工具栏或关闭为 InAppBrowser （默认值为是）
    *   **enableViewportScale**： 将设置为 `yes` 或 `no` ，防止通过 meta 标记 （默认为缩放的视区`no`).
    *   **mediaPlaybackRequiresUserAction**： 将设置为 `yes` 或 `no` ，防止 HTML5 音频或视频从 autoplaying （默认为`no`).
    *   **allowInlineMediaPlayback**： 将设置为 `yes` 或 `no` 允许内联 HTML5 播放媒体，在浏览器窗口中，而不是特定于设备播放界面内显示。 HTML 的 `video` 元素还必须包括 `webkit-playsinline` 属性 （默认为`no`)
    *   **keyboardDisplayRequiresUserAction**： 将设置为 `yes` 或 `no` 时，要打开键盘窗体元素接收焦点通过 JavaScript 的 `focus()` 调用 （默认为`yes`).
    *   **suppressesIncrementalRendering**： 将设置为 `yes` 或 `no` 等待，直到所有新查看的内容正在呈现 （默认为前收到`no`).
    *   **presentationstyle**： 将设置为 `pagesheet` ， `formsheet` 或 `fullscreen` 来设置[演示文稿样式][1](默认为`fullscreen`).
    *   **transitionstyle**： 将设置为 `fliphorizontal` ， `crossdissolve` 或 `coververtical` 设置[过渡样式][2](默认为`coververtical`).

 [1]: http://developer.apple.com/library/ios/documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalPresentationStyle
 [2]: http://developer.apple.com/library/ios/#documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalTransitionStyle

## 支持的平台

*   Android 系统
*   黑莓手机
*   iOS
*   Windows Phone 7 和 8

## 快速的示例

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    var ref2 = window.open(encodeURI('http://ja.m.wikipedia.org/wiki/ハングル'), '_blank', 'location=yes');
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>window.open Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            // external url
            var ref = window.open(encodeURI('http://apache.org'), '_blank', 'location=yes');
            // relative document
            ref = window.open('next.html', '_self');
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>