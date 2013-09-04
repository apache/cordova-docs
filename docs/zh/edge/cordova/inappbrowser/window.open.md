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