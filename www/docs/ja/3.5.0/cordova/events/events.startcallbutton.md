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

# startcallbutton

スタートの呼び出しボタンを押したときに発生します。

    document.addEventListener("startcallbutton", yourCallbackFunction, false);
    

## 詳細

イベント リスナーを登録することができますスタート コールの既定動作をオーバーライドする必要がある場合、 `startcallbutton` イベント。

通常アプリケーションに使用する必要があります `document.addEventListener` 一度のイベント リスナーをアタッチし、 `deviceready` イベントが発生します。

## サポートされているプラットフォーム

*   ブラックベリー 10

## 簡単な例

    document.addEventListener("startcallbutton", onStartCallKeyDown, false);
    
    function onStartCallKeyDown() {
        // Handle the start call button
    }
    

## 完全な例

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Start Call Button Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Register the event listener
            document.addEventListener("startcallbutton", onStartCallKeyDown, false);
        }
    
        // Handle the start call button
        //
        function onStartCallKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>