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