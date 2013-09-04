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

> `InAppBrowser`是一個 web 瀏覽器顯示在應用程式中調用時`window.open`.

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    

## 說明

從調用返回的物件`window.open`.

## 方法

*   addEventListener
*   removeEventListener
*   關閉
*   顯示
*   executeScript
*   insertCSS

## 訪問功能

從 3.0 版，科爾多瓦作為*外掛程式*實現了設備級 Api。 使用 CLI 的 `plugin` 命令，描述在命令列介面，可以添加或刪除一個專案，為此功能：

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-inappbrowser.git
        $ cordova plugin rm org.apache.cordova.core.inappbrowser
    

這些命令適用于所有有針對性的平臺，但修改如下所述的特定于平臺的配置設置：

*   （在 android`app/res/xml/config.xml`)
    
        < 功能名稱 ="InAppBrowser">< 參數名稱 ="android 包"value="org.apache.cordova.InAppBrowser"/ >< / 功能 >
        

*   （在 iOS`config.xml`)
    
        < 功能名稱 ="InAppBrowser">< 參數名稱 ="ios 包"值 ="CDVInAppBrowser"/ >< / 功能 >
        

*   Windows Phone 7，8 個 （在`config.xml`)
    
        < 功能名稱 ="InAppBrowser"/ >
        

一些平臺可能支援此功能，而無需任何特殊的配置。有關概述，請參見平臺支援。

# addEventListener

> 為事件添加一個攔截器`InAppBrowser`.

    ref.addEventListener （事件、 回檔） ；
    

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

    var ref = window.open ('HTTP://apache.org'、 '_blank' ' 位置 = 是的） ；ref.addEventListener ('loadstart'，function() {alert(event.url);});
    

## 完整的示例

    <!DOCTYPE html >< html >< 頭 >< 標題 > InAppBrowser.addEventListener 示例 < / 標題 >< 腳本類型 ="文本/javascript"charset ="utf 8"src="cordova.js">< / 腳本 >< 腳本類型 ="文本/javascript"charset ="utf 8"> / / 等待設備 API 庫載入 / / document.addEventListener ("deviceready"，onDeviceReady，false);/ / 設備的 Api 可 / / 函數 onDeviceReady() {var ref = window.open ('HTTP://apache.org'、 '_blank' ' 位置 = 是的） ；ref.addEventListener ('loadstart' function(event) {警報 (' 開始： ' + event.url);});ref.addEventListener ('loadstop' function(event) {警報 (' 停止： ' + event.url);});ref.addEventListener ('loaderror' function(event) {警報 (' 錯誤： ' + event.message);});ref.addEventListener ('出口'，function(event) {alert(event.type);});} < / 腳本 >< / 頭 >< 身體 >< / 身體 >< / html >
    

# removeEventListener

> 移除的事件攔截器`InAppBrowser`.

    ref.removeEventListener （事件、 回檔） ；
    

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

    var ref = window.open ('HTTP://apache.org'、 '_blank' ' 位置 = 是的） ；var myCallback = function() {alert(event.url) ；} ref.addEventListener ('loadstart'，myCallback);ref.removeEventListener ('loadstart'，myCallback);
    

## 完整的示例

    <!DOCTYPE html >< html >< 頭 >< 標題 > InAppBrowser.removeEventListener 示例 < / 標題 >< 腳本類型 ="文本/javascript"charset ="utf 8"src="cordova.js">< / 腳本 >< 腳本類型 ="文本/javascript"charset ="utf 8"> / / 等待設備 API 庫載入 / / document.addEventListener ("deviceready"，onDeviceReady，false);/ / 全球 InAppBrowser 參考 var iabRef = null;函數 iabLoadStart(event) {警報 (event.type + '-' + event.url） ；} 函數 iabLoadStop(event) {警報 (event.type + '-' + event.url） ；} 函數 iabLoadError(event) {警報 (event.type + '-' + event.message） ；} 函數 iabClose(event) {alert(event.type);iabRef.removeEventListener ('loadstart'，iabLoadStart);iabRef.removeEventListener ('loadstop'，iabLoadStop);iabRef.removeEventListener ('loaderror'，iabLoadError);iabRef.removeEventListener '退出' iabClose） ；} / / 設備的 Api 可 / / 函數 onDeviceReady() {iabRef = window.open ('HTTP://apache.org'、 '_blank' ' 位置 = 是的） ；iabRef.addEventListener ('loadstart'，iabLoadStart);iabRef.addEventListener ('loadstop'，iabLoadStop);iabRef.removeEventListener ('loaderror'，iabLoadError);iabRef.addEventListener '退出' iabClose） ；} < / 腳本 >< / 頭 >< 身體 >< / 身體 >< / html >
    

# 關閉

> 關閉 `InAppBrowser` 視窗。

    ref.close() ；
    

*   **ref**： 參考 `InAppBrowser` 視窗*(InAppBrowser)*

## 支援的平臺

*   Android 系統
*   黑莓手機
*   iOS
*   Windows Phone 7 和 8

## 快速的示例

    var ref = window.open ('HTTP://apache.org'、 '_blank' ' 位置 = 是的） ；ref.close() ；
    

## 完整的示例

    <!DOCTYPE html >< html >< 頭 >< 標題 > InAppBrowser.close 示例 < / 標題 >< 腳本類型 ="文本/javascript"charset ="utf 8"src="cordova.js">< / 腳本 >< 腳本類型 ="文本/javascript"charset ="utf 8"> / / 等待設備 API 庫載入 / / document.addEventListener ("deviceready"，onDeviceReady，false);/ / 設備的 Api 可 / / 函數 onDeviceReady() {var ref = window.open ('HTTP://apache.org'、 '_blank' ' 位置 = 是的） ；/ / 關閉後 5 秒 setTimeout(function() {ref.close(); InAppBrowser}，5000） ；} < / 腳本 >< / 頭 >< 身體 >< / 身體 >< / html >
    

# 顯示

> 顯示打開了隱藏的 InAppBrowser 視窗。調用這沒有任何影響，如果 InAppBrowser 是已經可見。

    ref.show() ；
    

*   **ref:**的 InAppBrowser 視窗 (參考`InAppBrowser`)

## 支援的平臺

*   Android 系統
*   黑莓手機
*   iOS

## 快速的示例

    var ref = window.open ('HTTP://apache.org'、 '_blank' ' 隱藏 = 是的） ；ref.show() ；
    

## 完整的示例

    <!DOCTYPE html >< html >< 頭 >< 標題 > InAppBrowser.show 示例 < / 標題 >< 腳本類型 ="文本/javascript"charset ="utf 8"src="cordova.js">< / 腳本 >< 腳本類型 ="文本/javascript"charset ="utf 8"> / / 等待科爾多瓦載入 / / document.addEventListener ("deviceready"，onDeviceReady，false);/ / 科爾多瓦是準備好了 / / 函數 onDeviceReady() {var ref = window.open ('HTTP://apache.org'、 '_blank' ' 隱藏 = 是的） ；ref.addEventListener ('loadstop'，function(event) {警報 ('背景視窗載入') ；});/ / 關閉後 5 秒 setTimeout(function() {ref.close(); InAppBrowser}，5000） ；} < / 腳本 >< / 頭 >< 身體 >< / 身體 >< / html >
    

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

    var ref = window.open ('HTTP://apache.org'、 '_blank' ' 位置 = 是的） ；ref.addEventListener ('loadstop' function() {ref.executeSript ({檔："myscript.js"});});
    

## 完整的示例

    <!DOCTYPE html >< html >< 頭 >< 標題 > InAppBrowser.executeScript 示例 < / 標題 >< 腳本類型 ="文本/javascript"charset ="utf 8"src="cordova.js">< / 腳本 >< 腳本類型 ="文本/javascript"charset ="utf 8"> / / 等待設備 API 庫載入 / / document.addEventListener ("deviceready"，onDeviceReady，false);/ / 全球 InAppBrowser 參考 var iabRef = null;/ / 我們自訂 JavaScript 注入 InAppBrowser 視窗 / / 函數 replaceHeaderImage() {iabRef.executeScript ({代碼："var img=document.querySelector ('#header img') ；img.src= 'HTTP://cordova.apache.org/images/cordova_bot.png' ；"}，function() {警報 ("圖像元素成功劫持"） ；}} 函數 iabClose(event) {iabRef.removeEventListener ('loadstop'，replaceHeaderImage);iabRef.removeEventListener '退出' iabClose） ；} / / 設備的 Api 可 / / 函數 onDeviceReady() {iabRef = window.open ('HTTP://apache.org'、 '_blank' ' 位置 = 是的） ；iabRef.addEventListener ('loadstop'，replaceHeaderImage);iabRef.addEventListener '退出' iabClose） ；} < / 腳本 >< / 頭 >< 身體 >< / 身體 >< / html >
    

# insertCSS

> 注入到 CSS `InAppBrowser` 視窗。

    ref.insertCSS 回檔的詳細資訊） ；
    

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

    var ref = window.open ('HTTP://apache.org'、 '_blank' ' 位置 = 是的） ；ref.addEventListener ('loadstop' function() {ref.insertCSS ({檔："mystyles.css"});});
    

## 完整的示例

    <!DOCTYPE html >< html >< 頭 >< 標題 > InAppBrowser.insertCSS 示例 < / 標題 >< 腳本類型 ="文本/javascript"charset ="utf 8"src="cordova.js">< / 腳本 >< 腳本類型 ="文本/javascript"charset ="utf 8"> / / 等待設備 API 庫載入 / / document.addEventListener ("deviceready"，onDeviceReady，false);/ / 全球 InAppBrowser 參考 var iabRef = null;/ / 我們自訂的 CSS 注入 InAppBrowser 視窗 / / 函數 changeBackgroundColor() {iabRef.insertCSS ({代碼："身體 {背景： #ffff00"}，function() {警報 （"樣式更改"） ； 或}} 函數 iabClose(event) {iabRef.removeEventListener ('loadstop'，changeBackgroundColor);iabRef.removeEventListener '退出' iabClose） ；} / / 設備的 Api 可 / / 函數 onDeviceReady() {iabRef = window.open ('HTTP://apache.org'、 '_blank' ' 位置 = 是的） ；iabRef.addEventListener ('loadstop'，changeBackgroundColor);iabRef.addEventListener '退出' iabClose） ；} < / 腳本 >< / 頭 >< 身體 >< / 身體 >< / html >
    

# InAppBrowserEvent

物件傳遞給回呼函數從 `addEventListener` 上調用 `InAppBrowser` 的物件。

## 屬性

*   **類型**： eventname，或者 `loadstart` ， `loadstop` ， `loaderror` ，或 `exit` 。*（字串）*

*   **url**: 已載入的 URL。*（字串）*

*   **代碼**： 僅中的情況的錯誤代碼 `loaderror` 。*（人數）*

*   **消息**： 該錯誤訊息，只有在的情況下 `loaderror` 。*（字串）*