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

# compass.watchHeading

定期的な間隔で角度でコンパスの見出しを取得します。

    var watchID = navigator.compass.watchHeading(compassSuccess, compassError, [compassOptions]);
    

## 説明

コンパスは方向またはデバイスが指摘されている見出しを検出するセンサーです。359.99 に 0 からの角度で見出しを測定します。

`compass.watchHeading`デバイスの定期的な間隔で現在の方位を取得します。 見出しを取り出すたびに、 `headingSuccess` コールバック関数が実行されます。 経由でミリ秒単位で間隔を指定する、 `frequency` パラメーターで、 `compassOptions` オブジェクト。

返される時計 ID コンパス時計腕時計間隔を参照します。ID を使用することができます時計 `compass.clearWatch` コンパスを見て停止します。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー 10
*   iOS
*   Tizen
*   Windows Phone 7 および 8 (ハードウェアである場合)
*   Windows 8

## 簡単な例

    function onSuccess(heading) {
        var element = document.getElementById('heading');
        element.innerHTML = 'Heading: ' + heading.magneticHeading;
    };
    
    function onError(compassError) {
        alert('Compass error: ' + compassError.code);
    };
    
    var options = {
        frequency: 3000
    }; // Update every 3 seconds
    
    var watchID = navigator.compass.watchHeading(onSuccess, onError, options);
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Compass Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // The watch id references the current `watchHeading`
        var watchID = null;
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            startWatch();
        }
    
        // Start watching the compass
        //
        function startWatch() {
    
            // Update compass every 3 seconds
            var options = { frequency: 3000 };
    
            watchID = navigator.compass.watchHeading(onSuccess, onError, options);
        }
    
        // Stop watching the compass
        //
        function stopWatch() {
            if (watchID) {
                navigator.compass.clearWatch(watchID);
                watchID = null;
            }
        }
    
        // onSuccess: Get the current heading
        //
        function onSuccess(heading) {
            var element = document.getElementById('heading');
            element.innerHTML = 'Heading: ' + heading.magneticHeading;
        }
    
        // onError: Failed to get the heading
        //
        function onError(compassError) {
            alert('Compass error: ' + compassError.code);
        }
    
        </script>
      </head>
      <body>
        <div id="heading">Waiting for heading...</div>
        <button onclick="startWatch();">Start Watching</button>
        <button onclick="stopWatch();">Stop Watching</button>
      </body>
    </html>
    

## iOS の癖

IOS の `compass.watchHeading` 度の指定数で変更されたときにも、デバイスの現在の方位を得ることができます。 度以上の指定された数だけ見出し変更されるたびに、 `headingSuccess` コールバック関数を実行します。 経由で変更の程度を指定する、 `filter` パラメーターで、 `compassOptions` オブジェクト。 返される時計 ID を渡すことによっていつものように時計をオフに `compass.clearWatch` 。 この機能を置き換えます以前独立した iOS だけ `watchHeadingFilter` と `clearWatchFilter` バージョン 1.6 で削除された機能です。

1 つだけ `watchHeading` iOS で一度に有効にすることができます。 場合は、 `watchHeading` 、フィルターを使用して呼び出す `getCurrentHeading` または `watchHeading` 既存のフィルターの値を使用して見出しの変更を指定します。 フィルターを使用して見出しの変更を見て時間間隔よりも効率的です。