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

# window.open

在一個新的中打開 URL `<a href="inappbrowser.html">InAppBrowser</a>` 實例，當前的瀏覽器實例或系統瀏覽器。

    var ref = window.open(url, target, options);
    

*   **ref**： 參考 `<a href="inappbrowser.html">InAppBrowser</a>` 視窗。*() <a href="inappbrowser.html">InAppBrowser</a>*

*   **url**： 要載入*（字串）*的 URL。調用 `encodeURI()` 這個如果 URL 包含 Unicode 字元。

*   **目標**： 目標在其中載入的 URL，可選參數，預設值為 `_self` 。*（字串）*
    
    *   `_self`： 打開在科爾多瓦 web 視圖如果 URL 是在白名單中，否則它在打開`<a href="inappbrowser.html">InAppBrowser</a>`.
    *   `_blank`： 在打開`<a href="inappbrowser.html">InAppBrowser</a>`.
    *   `_system`： 在該系統的 web 瀏覽器中打開。

*   **選項**： 選項為 `<a href="inappbrowser.html">InAppBrowser</a>` 。可選，拖欠到： `location=yes` 。*（字串）*
    
    `options`字串必須不包含任何空白的空間，和必須用逗號分隔每個功能的名稱/值對。 功能名稱區分大小寫。 所有平臺都支援下面的值：
    
    *   **<a href="../geolocation/Position/position.html">位置</a>**： 設置為 `yes` 或 `no` ，打開 `<a href="inappbrowser.html">InAppBrowser</a>` 的<a href="../geolocation/Position/position.html">位置</a>欄打開或<a href="inappbrowser.html">關閉</a>。
    ## Android 僅
    
    *   **closebuttoncaption** -將設置為一個字串，它將會在"完成"按鈕的標題。 
    *   **隱藏**-設置為是以創建瀏覽器和載入頁面，但不是<a href="inappbrowser.html">顯示</a>它。 Load <a href="../events/events.html">事件</a>將觸發載入完成時。 省略或設置為否 （預設值），以有瀏覽器打開，然後以正常方式載入。 
    *   **clearcache** -設置為 'yes' 有瀏覽器的 cookie 緩存清除之前打開新視窗
    *   **clearsessioncache** -設置為 'yes' 有會話 cookie 緩存清除之前打開新視窗
    ## iOS 只
    
    *   **closebuttoncaption** -將設置為一個字串，它將會在"完成"按鈕的標題。注意你會有自己的當地語系化此值。
    *   **隱藏**-設置為是以創建瀏覽器和載入頁面，但不是<a href="inappbrowser.html">顯示</a>它。 Load <a href="../events/events.html">事件</a>將觸發載入完成時。 省略或設置為否 （預設值），以有瀏覽器打開，然後以正常方式載入。 
    *   **工具列**-設置為 '是' 或 '否'，打開工具列或<a href="inappbrowser.html">關閉</a>為 <a href="inappbrowser.html">InAppBrowser</a> （預設值為是）
    *   **enableViewportScale**： 將設置為 `yes` 或 `no` ，防止通過 meta 標記 （預設為縮放的視區`no`).
    *   **mediaPlaybackRequiresUserAction**： 將設置為 `yes` 或 `no` ，防止 HTML5 音訊或視頻從 autoplaying （預設為`no`).
    *   **allowInlineMediaPlayback**： 將設置為 `yes` 或 `no` 允許內聯 HTML5 播放<a href="../media/media.html">媒體</a>，在瀏覽器視窗中，而不是特定于<a href="../device/device.html">設備</a>播放介面內<a href="inappbrowser.html">顯示</a>。 HTML 的 `video` 元素還必須包括 `webkit-playsinline` 屬性 （預設為`no`)
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
        <title>window.open <a href="../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.<a href="inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
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