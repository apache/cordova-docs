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

# splashscreen.show

スプラッシュ画面が表示されます。

    navigator.splashscreen.show();
    

## 説明

このメソッドは、アプリケーションのスプラッシュ スクリーンを表示します。

## サポートされているプラットフォーム

*   アンドロイド
*   iOS
*   Windows Phone 7 と 8
*   Windows 8

## 簡単な例

    navigator.splashscreen.show();
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Splashscreen Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.splashscreen.show();
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
      </body>
    </html>