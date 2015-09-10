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

# geolocation.clearWatch

再看對所引用的<a href="../device/device.html">設備</a>的<a href="Position/position.html">位置</a>更改為 `watchID` 參數。

    navigator.geolocation.clearWatch(watchID);
    

## 參數

*   **watchID**： 的 id `watchPosition` 清除的時間間隔。（字串）

## 說明

`geolocation.clearWatch`將停止觀看對<a href="../device/device.html">設備</a>的<a href="Position/position.html">位置</a>的更改通過清除 `<a href="geolocation.watchPosition.html">geolocation.watchPosition</a>` 引用的`watchID`.

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Tizen
*   Windows Phone 7 和 8
*   Windows 8

## 快速的示例

    / / 選項： 監視的更改的<a href="Position/position.html">位置</a>，並使用最 / / 準確定位採集方法可用。
    //
    var watchID = navigator.<a href="geolocation.watchPosition.html">geolocation.watchPosition</a>(onSuccess, onError, { enableHighAccuracy: true });
    
    // ...later on...
    
    navigator.geolocation.clearWatch(watchID);
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties <a href="../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
        var watchID = null;
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Get the most accurate position updates available on the
            // device.
            var options = { enableHighAccuracy: true };
            watchID = navigator.<a href="geolocation.watchPosition.html">geolocation.watchPosition</a>(onSuccess, onError, options);
        }
    
        // onSuccess Geolocation
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                                'Longitude: ' + position.coords.longitude     + '<br />' +
                                '<hr />'      + element.innerHTML;
        }
    
        // clear the watch that was started earlier
        //
        function clearWatch() {
            if (watchID != null) {
                navigator.geolocation.clearWatch(watchID);
                watchID = null;
            }
        }
    
            // onError Callback receives a <a href="PositionError/positionError.html">PositionError</a> object
            //
            function onError(error) {
              alert('code: '    + error.code    + '\n' +
                    'message: ' + error.message + '\n');
            }
    
        </script>
      </head>
      <body>
        <p id="geolocation">Watching geolocation...</p>
            <button onclick="clearWatch();">Clear Watch</button>
      </body>
    </html>