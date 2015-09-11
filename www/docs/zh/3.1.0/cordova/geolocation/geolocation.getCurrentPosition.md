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

# geolocation.getCurrentPosition

返回<a href="../device/device.html">設備</a>的當前<a href="Position/position.html">位置</a>作為 `Position` 物件。

    navigator.geolocation.getCurrentPosition(<a href="parameters/geolocationSuccess.html">geolocationSuccess</a>,
                                             [<a href="parameters/geolocationError.html">geolocationError</a>],
                                             [<a href="parameters/geolocation.options.html">geolocationOptions</a>]);
    

## 參數

*   **<a href="parameters/geolocationSuccess.html">geolocationSuccess</a>**： 傳遞當前<a href="Position/position.html">位置</a>的回<a href="../file/fileobj/fileobj.html">檔</a>。

*   **<a href="parameters/geolocationError.html">geolocationError</a>**： *（可選）*如果錯誤發生時執行的回<a href="../file/fileobj/fileobj.html">檔</a>。

*   **<a href="parameters/geolocation.options.html">geolocationOptions</a>**： *（可選）*<a href="geolocation.html">地理定位</a>選項。

## 說明

`geolocation.getCurrentPosition`是一個非同步函數。 它將返回到該<a href="../device/device.html">設備</a>的當前<a href="Position/position.html">位置</a> `<a href="parameters/geolocationSuccess.html">geolocationSuccess</a>` 回<a href="../file/fileobj/fileobj.html">檔</a>與 `Position` 物件作為參數。 如果有錯誤， `<a href="parameters/geolocationError.html">geolocationError</a>` 回<a href="../file/fileobj/fileobj.html">檔</a>通過 `<a href="PositionError/positionError.html">PositionError</a>` 物件。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Tizen
*   Windows Phone 7 和 8
*   Windows 8

## 快速的示例

    // onSuccess Callback
    // This method accepts a Position object, which contains the
    // current GPS coordinates
    //
    var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    };
    
    // onError Callback receives a <a href="PositionError/positionError.html">PositionError</a> object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
    
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    

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
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }
    
        // onSuccess Geolocation
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                                'Longitude: '          + position.coords.longitude             + '<br />' +
                                'Altitude: '           + position.coords.altitude              + '<br />' +
                                'Accuracy: '           + position.coords.accuracy              + '<br />' +
                                'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                                'Heading: '            + position.coords.heading               + '<br />' +
                                'Speed: '              + position.coords.speed                 + '<br />' +
                                'Timestamp: '          + position.timestamp                    + '<br />';
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
        <p id="geolocation">Finding geolocation...</p>
      </body>
    </html>