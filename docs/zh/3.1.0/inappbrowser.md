---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
---


# InAppBrowser

> `InAppBrowser`一個 web 瀏覽器視圖，顯示時調用 `window.open()` ，或當打開連結形成的作為`<a target="_blank">`.

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    

**注：**InAppBrowser 視窗類似于一個標準的 web 瀏覽器，並且無法訪問科爾多瓦的 Api。

## 說明

從調用返回的物件`window.open`.

## 方法

*   addEventListener
*   removeEventListener
*   close
*   show
*   executeScript
*   insertCSS

## 訪問功能

從 3.0 版，科爾多瓦作為*外掛程式*實現了設備級 Api。 使用 CLI 的 `plugin` 命令，描述在命令列介面，可以添加或刪除一個專案，為此功能：

        $ cordova plugin add org.apache.cordova.inappbrowser
        $ cordova plugin ls
        [ 'org.apache.cordova.inappbrowser' ]
        $ cordova plugin rm org.apache.cordova.inappbrowser
    

這些命令適用于所有有針對性的平臺，但修改如下所述的特定于平臺的配置設置：

*   （在 android`app/res/xml/config.xml`)
    
        <feature name="InAppBrowser">
            <param name="android-package" value="org.apache.cordova.InAppBrowser" />
        </feature>
        

*   （在 iOS`config.xml`)
    
        <feature name="InAppBrowser">
            <param name="ios-package" value="CDVInAppBrowser" />
        </feature>
        

*   Windows Phone 7，8 個 （在`config.xml`)
    
        <feature name="InAppBrowser" />
        

一些平臺可能支援此功能，而無需任何特殊的配置。請參見在概述部分中*的平臺支援*。

# addEventListener

> 為事件添加一個攔截器`InAppBrowser`.

    ref.addEventListener(eventname, callback);
    

*   **ref**： 參考 `InAppBrowser` 視窗*(InAppBrowser)*

*   **事件名稱**： 事件偵聽*（字串）*
    
    *   **loadstart**： 當觸發事件 `InAppBrowser` 開始載入一個 URL。
    *   **loadstop**： 當觸發事件 `InAppBrowser` 完成載入一個 URL。
    *   **loaderror**： 當觸發事件 `InAppBrowser` 載入 URL 時遇到錯誤。
    *   **退出**： 當觸發事件 `InAppBrowser` 關閉視窗。

*   **回檔**： 執行時觸發該事件的函數。該函數通過 `InAppBrowserEvent` 物件作為參數。

## 支援的平臺

*   Android 系統
*   黑莓手機
*   iOS
*   Windows Phone 7 和 8

## 快速的示例

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstart', function() { alert(event.url); });
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.addEventListener Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
             var ref = window.open('http://apache.org', '_blank', 'location=yes');
             ref.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
             ref.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
             ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
             ref.addEventListener('exit', function(event) { alert(event.type); });
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# removeEventListener

> 移除的事件攔截器`InAppBrowser`.

    ref.removeEventListener(eventname, callback);
    

*   **ref**： 參考 `InAppBrowser` 視窗。*() InAppBrowser*

*   **事件名稱**： 要停止偵聽的事件。*（字串）*
    
    *   **loadstart**： 當觸發事件 `InAppBrowser` 開始載入一個 URL。
    *   **loadstop**： 當觸發事件 `InAppBrowser` 完成載入一個 URL。
    *   **loaderror**： 當觸發事件 `InAppBrowser` 遇到錯誤載入一個 URL。
    *   **退出**： 當觸發事件 `InAppBrowser` 關閉視窗。

*   **回檔**: 要在事件觸發時執行的函數。該函數通過 `InAppBrowserEvent` 物件。

## 支援的平臺

*   Android 系統
*   黑莓手機
*   iOS
*   Windows Phone 7 和 8

## 快速的示例

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    var myCallback = function() { alert(event.url); }
    ref.addEventListener('loadstart', myCallback);
    ref.removeEventListener('loadstart', myCallback);
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.removeEventListener Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // Global InAppBrowser reference
        var iabRef = null;
    
        function iabLoadStart(event) {
            alert(event.type + ' - ' + event.url);
        }
    
        function iabLoadStop(event) {
            alert(event.type + ' - ' + event.url);
        }
    
        function iabLoadError(event) {
            alert(event.type + ' - ' + event.message);
        }
    
        function iabClose(event) {
             alert(event.type);
             iabRef.removeEventListener('loadstart', iabLoadStart);
             iabRef.removeEventListener('loadstop', iabLoadStop);
             iabRef.removeEventListener('loaderror', iabLoadError);
             iabRef.removeEventListener('exit', iabClose);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
             iabRef = window.open('http://apache.org', '_blank', 'location=yes');
             iabRef.addEventListener('loadstart', iabLoadStart);
             iabRef.addEventListener('loadstop', iabLoadStop);
             iabRef.removeEventListener('loaderror', iabLoadError);
             iabRef.addEventListener('exit', iabClose);
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# 關閉

> 關閉 `InAppBrowser` 視窗。

    ref.close();
    

*   **ref**： 參考 `InAppBrowser` 視窗*(InAppBrowser)*

## 支援的平臺

*   Android 系統
*   黑莓手機
*   iOS
*   Windows Phone 7 和 8

## 快速的示例

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.close();
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.close Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
             var ref = window.open('http://apache.org', '_blank', 'location=yes');
             // close InAppBrowser after 5 seconds
             setTimeout(function() {
                 ref.close();
             }, 5000);
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# 顯示

> 顯示打開了隱藏的 InAppBrowser 視窗。調用這沒有任何影響，如果 InAppBrowser 是已經可見。

    ref.show();
    

*   **ref:**的 InAppBrowser 視窗 (參考`InAppBrowser`)

## 支援的平臺

*   Android 系統
*   黑莓手機
*   iOS

## 快速的示例

    var ref = window.open('http://apache.org', '_blank', 'hidden=yes');
    ref.show();
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.show Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for Cordova to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // Cordova is ready
        //
        function onDeviceReady() {
             var ref = window.open('http://apache.org', '_blank', 'hidden=yes');
             ref.addEventListener('loadstop', function(event) {
                 alert('background window loaded'); 
             });
             // close InAppBrowser after 5 seconds
             setTimeout(function() {
                 ref.close();
             }, 5000);
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# executeScript

> 注入到 JavaScript 代碼 `InAppBrowser` 視窗

    ref.executeScript 回檔的詳細資訊） ；
    

*   **ref**： 參考 `InAppBrowser` 視窗。*() InAppBrowser*

*   **injectDetails**: 要運行的腳本的詳細資訊或指定 `file` 或 `code` 的關鍵。*（物件）*
    
    *   **檔**： 腳本的 URL 來注入。
    *   **代碼**： 要注入腳本的文本。

*   **回檔**： 執行後注入的 JavaScript 代碼的函數。
    
    *   如果插入的腳本的類型 `code` ，回檔執行使用單個參數，這是該腳本的傳回值，裹在 `Array` 。 對於多行腳本，這是最後一條語句或最後計算的運算式的傳回值。

## 支援的平臺

*   Android 系統
*   黑莓手機
*   iOS

## 快速的示例

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstop', function() {
        ref.executeSript({file: "myscript.js"});
    });
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.executeScript Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // Global InAppBrowser reference
        var iabRef = null;
    
        // Inject our custom JavaScript into the InAppBrowser window
        //
        function replaceHeaderImage() {
            iabRef.executeScript({
                code: "var img=document.querySelector('#header img'); img.src='http://cordova.apache.org/images/cordova_bot.png';"
            }, function() {
                alert("Image Element Successfully Hijacked");
            }
        }
    
        function iabClose(event) {
             iabRef.removeEventListener('loadstop', replaceHeaderImage);
             iabRef.removeEventListener('exit', iabClose);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
             iabRef = window.open('http://apache.org', '_blank', 'location=yes');
             iabRef.addEventListener('loadstop', replaceHeaderImage);
             iabRef.addEventListener('exit', iabClose);
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# insertCSS

> 注入到 CSS `InAppBrowser` 視窗。

    ref.insertCSS(details, callback);
    

*   **ref**： 參考 `InAppBrowser` 視窗*(InAppBrowser)*

*   **injectDetails**: 要運行的腳本的詳細資訊或指定 `file` 或 `code` 的關鍵。*（物件）*
    
    *   **檔**： 樣式表的 URL 來注入。
    *   **代碼**： 文本樣式表的注入。

*   **回檔**： 在 CSS 注射後執行的函數。

## 支援的平臺

*   Android 系統
*   黑莓手機
*   iOS

## 快速的示例

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstop', function() {
        ref.insertCSS({file: "mystyles.css"});
    });
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.insertCSS Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // Global InAppBrowser reference
        var iabRef = null;
    
        // Inject our custom CSS into the InAppBrowser window
        //
        function changeBackgroundColor() {
            iabRef.insertCSS({
                code: "body { background: #ffff00"
            }, function() {
                alert("Styles Altered");
            }
        }
    
        function iabClose(event) {
             iabRef.removeEventListener('loadstop', changeBackgroundColor);
             iabRef.removeEventListener('exit', iabClose);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
             iabRef = window.open('http://apache.org', '_blank', 'location=yes');
             iabRef.addEventListener('loadstop', changeBackgroundColor);
             iabRef.addEventListener('exit', iabClose);
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# InAppBrowserEvent

物件傳遞給回呼函數從 `addEventListener` 上調用 `InAppBrowser` 的物件。

## 屬性

*   **類型**： eventname，或者 `loadstart` ， `loadstop` ， `loaderror` ，或 `exit` 。*（字串）*

*   **url**: 已載入的 URL。*（字串）*

*   **代碼**： 僅中的情況的錯誤代碼 `loaderror` 。*（人數）*

*   **消息**： 該錯誤訊息，只有在的情況下 `loaderror` 。*（字串）*


# window.open

在一個新的中打開 URL `InAppBrowser` 實例，當前的瀏覽器實例或系統瀏覽器。

    var ref = window.open(url, target, options);
    

*   **ref**： 參考 `InAppBrowser` 視窗。*() InAppBrowser*

*   **url**： 要載入*（字串）*的 URL。調用 `encodeURI()` 這個如果 URL 包含 Unicode 字元。

*   **目標**： 目標在其中載入的 URL，可選參數，預設值為 `_self` 。*（字串）*
    
    *   `_self`： 打開在科爾多瓦 web 視圖如果 URL 是在白名單中，否則它在打開`InAppBrowser`.
    *   `_blank`： 在打開`InAppBrowser`.
    *   `_system`： 在該系統的 web 瀏覽器中打開。

*   **選項**： 選項為 `InAppBrowser` 。可選，拖欠到： `location=yes` 。*（字串）*
    
    `options`字串必須不包含任何空白的空間，和必須用逗號分隔每個功能的名稱/值對。 功能名稱區分大小寫。 所有平臺都支援下面的值：
    
    *   **位置**： 設置為 `yes` 或 `no` ，打開 `InAppBrowser` 的位置欄打開或關閉。
    ## Android 僅
    
    *   **closebuttoncaption** -將設置為一個字串，它將會在"完成"按鈕的標題。 
    *   **隱藏**-設置為是以創建瀏覽器和載入頁面，但不是顯示它。 Load 事件將觸發載入完成時。 省略或設置為否 （預設值），以有瀏覽器打開，然後以正常方式載入。 
    *   **clearcache** -設置為 'yes' 有瀏覽器的 cookie 緩存清除之前打開新視窗
    *   **clearsessioncache** -設置為 'yes' 有會話 cookie 緩存清除之前打開新視窗
    ## iOS 只
    
    *   **closebuttoncaption** -將設置為一個字串，它將會在"完成"按鈕的標題。注意你會有自己的當地語系化此值。
    *   **隱藏**-設置為是以創建瀏覽器和載入頁面，但不是顯示它。 Load 事件將觸發載入完成時。 省略或設置為否 （預設值），以有瀏覽器打開，然後以正常方式載入。 
    *   **工具列**-設置為 '是' 或 '否'，打開工具列或關閉為 InAppBrowser （預設值為是）
    *   **enableViewportScale**： 將設置為 `yes` 或 `no` ，防止通過 meta 標記 （預設為縮放的視區`no`).
    *   **mediaPlaybackRequiresUserAction**： 將設置為 `yes` 或 `no` ，防止 HTML5 音訊或視頻從 autoplaying （預設為`no`).
    *   **allowInlineMediaPlayback**： 將設置為 `yes` 或 `no` 允許內聯 HTML5 播放媒體，在瀏覽器視窗中，而不是特定于設備播放介面內顯示。 HTML 的 `video` 元素還必須包括 `webkit-playsinline` 屬性 （預設為`no`)
    *   **keyboardDisplayRequiresUserAction**： 將設置為 `yes` 或 `no` 時，要打開鍵盤表單元素接收焦點通過 JavaScript 的 `focus()` 調用 （預設為`yes`).
    *   **suppressesIncrementalRendering**： 將設置為 `yes` 或 `no` 等待，直到所有新查看的內容正在呈現 （預設為前收到`no`).
    *   **presentationstyle**： 將設置為 `pagesheet` ， `formsheet` 或 `fullscreen` 來設置[演示文稿樣式][1](預設為`fullscreen`).
    *   **transitionstyle**： 將設置為 `fliphorizontal` ， `crossdissolve` 或 `coververtical` 設置[過渡樣式][2](預設為`coververtical`).

 [1]: http://developer.apple.com/library/ios/documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalPresentationStyle
 [2]: http://developer.apple.com/library/ios/#documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalTransitionStyle

## 支援的平臺

*   Android 系統
*   黑莓手機
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
