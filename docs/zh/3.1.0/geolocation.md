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


# 地理定位

> `geolocation`物件提供對基於設備的 GPS 感應器或推斷網路信號的位置資料的訪問。

`Geolocation`提供有關該設備的位置，例如緯度和經度資訊。 常見的位置資訊來源包括全球定位系統 (GPS) 和網路信號，如 IP 位址、 RFID、 WiFi 和藍牙 MAC 位址和 GSM/CDMA 儲存格 Id 從推斷出的位置。 沒有任何保證，API 返回設備的實際位置。

此 API 基於[W3C 地理定位 API 規範][1]，並只執行已經不提供實現的設備上。

 [1]: http://dev.w3.org/geo/api/spec-source.html

**重要的隱私注：**地理定位資料的收集和使用提出了重要的隱私問題。 您的應用程式的隱私權原則應該討論這款應用程式如何使用地理定位資料，資料是否共用它的任何其他締約方和的資料 （例如，粗、 細，ZIP 代碼級別，等等） 的精度水準。 地理定位資料被普遍認為敏感的因為它能揭示一個人的下落，如果存儲中，他或她的旅行史。 因此，除了您的應用程式的隱私權原則，您應強烈考慮提供在您的應用程式訪問地理定位資料 （如果設備作業系統不會這樣做已經） 之前的時間只是通知。 該通知應提供相同的資訊上文指出的並獲取該使用者的許可權 （例如，通過為**確定**並**不感謝**提出的選擇）。 有關詳細資訊，請參閱隱私指南。

## 方法

*   geolocation.getCurrentPosition
*   geolocation.watchPosition
*   geolocation.clearWatch

## 參數

*   geolocationSuccess
*   geolocationError
*   geolocationOptions

## 物件 （唯讀）

*   Position
*   PositionError
*   Coordinates

## 訪問功能

從 3.0 版，科爾多瓦作為*外掛程式*實現了設備級 Api。 使用 CLI 的 `plugin` 命令，描述在命令列介面，可以添加或刪除一個專案，為此功能：

        $ cordova plugin add org.apache.cordova.geolocation
        $ cordova plugin ls
        [ 'org.apache.cordova.geolocation' ]
        $ cordova plugin rm org.apache.cordova.geolocation
    

這些命令適用于所有有針對性的平臺，但修改如下所述的特定于平臺的配置設置：

*   Android 系統
    
        (in app/res/xml/config.xml)
        <feature name="Geolocation">
            <param name="android-package" value="org.apache.cordova.GeoBroker" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
        <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
        <uses-permission android:name="android.permission.ACCESS_LOCATION_EXTRA_COMMANDS" />
        

*   黑莓手機 WebWorks
    
        (in www/plugins.xml)
        <feature name="Geolocation">
            <param name="blackberry-package" value="org.apache.cordova.geolocation.Geolocation" />
        </feature>
        
        (in www/config.xml)
        <rim:permissions>
            <rim:permit>read_geolocation</rim:permit>
        </rim:permissions>
        

*   （在 iOS`config.xml`)
    
        <feature name="Geolocation">
            <param name="ios-package" value="CDVLocation" />
        </feature>
        

*   （在 Windows Phone`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_LOCATION" />
        </Capabilities>
        
    
    引用：[為 Windows Phone 應用程式清單][2]

 [2]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

一些平臺可能支援此功能，而無需任何特殊的配置。請參見在概述部分中*的平臺支援*。


# geolocation.getCurrentPosition

返回設備的當前位置作為 `Position` 物件。

    navigator.geolocation.getCurrentPosition(geolocationSuccess,
                                             [geolocationError],
                                             [geolocationOptions]);
    

## 參數

*   **geolocationSuccess**： 傳遞當前位置的回檔。

*   **geolocationError**： *（可選）*如果錯誤發生時執行的回檔。

*   **geolocationOptions**： *（可選）*地理定位選項。

## 說明

`geolocation.getCurrentPosition`是一個非同步函數。 它將返回到該設備的當前位置 `geolocationSuccess` 回檔與 `Position` 物件作為參數。 如果有錯誤， `geolocationError` 回檔通過 `PositionError` 物件。

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
    
    // onError Callback receives a PositionError object
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
        <title>Device Properties Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
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
    
        // onError Callback receives a PositionError object
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


# geolocation.watchPosition

對該設備的當前的位置更改的手錶。

    var watchId = navigator.geolocation.watchPosition(geolocationSuccess,
                                                      [geolocationError],
                                                      [geolocationOptions]);
    

## 參數

*   **geolocationSuccess**： 傳遞當前位置的回檔。

*   **geolocationError**： （可選） 如果錯誤發生時執行的回檔。

*   **geolocationOptions**： （可選） 地理定位選項。

## 返回

*   **字串**： 返回引用的觀看位置間隔的表 id。應與一起使用的表 id `geolocation.clearWatch` 停止了觀看中位置的更改。

## 說明

`geolocation.watchPosition`是一個非同步函數。 當檢測到位置更改時，它返回該設備的當前的位置。 當設備中檢索一個新的位置， `geolocationSuccess` 回檔執行與 `Position` 物件作為參數。 如果有錯誤， `geolocationError` 回檔執行與 `PositionError` 物件作為參數。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Tizen
*   Windows Phone 7 和 8
*   Windows 8

## 快速的示例

    // onSuccess Callback
    //   This method accepts a `Position` object, which contains
    //   the current GPS coordinates
    //
    function onSuccess(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                            'Longitude: ' + position.coords.longitude     + '<br />' +
                            '<hr />'      + element.innerHTML;
    }
    
    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
    
    // Options: throw an error if no update is received every 30 seconds.
    //
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000 });
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        var watchID = null;
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Throw an error if no update is received every 30 seconds
            var options = { timeout: 30000 };
            watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
        }
    
        // onSuccess Geolocation
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                                'Longitude: ' + position.coords.longitude     + '<br />' +
                                '<hr />'      + element.innerHTML;
        }
    
            // onError Callback receives a PositionError object
            //
            function onError(error) {
                alert('code: '    + error.code    + '\n' +
                      'message: ' + error.message + '\n');
            }
    
        </script>
      </head>
      <body>
        <p id="geolocation">Watching geolocation...</p>
      </body>
    </html>


# geolocation.clearWatch

再看對所引用的設備的位置更改為 `watchID` 參數。

    navigator.geolocation.clearWatch(watchID);
    

## 參數

*   **watchID**： 的 id `watchPosition` 清除的時間間隔。（字串）

## 說明

`geolocation.clearWatch`將停止觀看對設備的位置的更改通過清除 `geolocation.watchPosition` 引用的`watchID`.

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Tizen
*   Windows Phone 7 和 8
*   Windows 8

## 快速的示例

    / / 選項： 監視的更改的位置，並使用最 / / 準確定位採集方法可用。
    //
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { enableHighAccuracy: true });
    
    // ...later on...
    
    navigator.geolocation.clearWatch(watchID);
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        var watchID = null;
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Get the most accurate position updates available on the
            // device.
            var options = { enableHighAccuracy: true };
            watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
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
    
            // onError Callback receives a PositionError object
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


# 座標

描述位置的地理座標的屬性集。

## 屬性

*   **緯度**： 緯度以十進位度為單位。*（人數）*

*   **經度**: 經度以十進位度為單位。*（人數）*

*   **海拔高度**： 高度在米以上橢球體中的位置。*（人數）*

*   **準確性**： 中米的緯度和經度座標的精度級別。*（人數）*

*   **altitudeAccuracy**： 在米的海拔高度座標的精度級別。*（人數）*

*   **標題**： 旅行，指定以度為單位元數目相對於真北順時針方向。*（人數）*

*   **速度**： 當前地面速度的設備，指定在米每秒。*（人數）*

## 說明

`Coordinates`物件附加到 `Position` 物件，可用於在當前職位的請求中的回呼函數。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Tizen
*   Windows Phone 7 和 8
*   Windows 8

## 快速的示例

    // onSuccess Callback
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
    
    // onError Callback
    //
    var onError = function() {
        alert('onError!');
    };
    
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Geolocation Position Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }
    
        // Display `Position` properties from the geolocation
        //
        function onSuccess(position) {
            var div = document.getElementById('myDiv');
    
            div.innerHTML = 'Latitude: '             + position.coords.latitude         + '<br/>' +
                            'Longitude: '            + position.coords.longitude        + '<br/>' +
                            'Altitude: '             + position.coords.altitude         + '<br/>' +
                            'Accuracy: '             + position.coords.accuracy         + '<br/>' +
                            'Altitude Accuracy: '    + position.coords.altitudeAccuracy + '<br/>' +
                            'Heading: '              + position.coords.heading          + '<br/>' +
                            'Speed: '                + position.coords.speed            + '<br/>';
        }
    
        // Show an alert if there is a problem getting the geolocation
        //
        function onError() {
            alert('onError!');
        }
    
        </script>
      </head>
      <body>
        <div id="myDiv"></div>
      </body>
    </html>
    

## Android 的怪癖

**altitudeAccuracy**: 不支援的 Android 設備，返回`null`.


# 位置

包含 `Position` 座標和時間戳記，由地理位置 API 創建。

## 屬性

*   **coords**： 一組的地理座標。*（座標）*

*   **時間戳記**： 創建時間戳記為 `coords` 。*（日期）*

## 說明

`Position`創建和填充的科爾多瓦，並返回到使用者通過一個回呼函數物件。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Tizen
*   Windows Phone 7 和 8
*   Windows 8

## 快速的示例

    // onSuccess Callback
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
    
    // onError Callback receives a PositionError object
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
        <title>Device Properties Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }
    
        // onSuccess Geolocation
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = 'Latitude: '          + position.coords.latitude         + '<br />' +
                                'Longitude: '         + position.coords.longitude        + '<br />' +
                                'Altitude: '          + position.coords.altitude         + '<br />' +
                                'Accuracy: '          + position.coords.accuracy         + '<br />' +
                                'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '<br />' +
                                'Heading: '           + position.coords.heading          + '<br />' +
                                'Speed: '             + position.coords.speed            + '<br />' +
                                'Timestamp: '         + position.timestamp               + '<br />';
        }
    
            // onError Callback receives a PositionError object
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


# PositionError

A `PositionError` 物件傳遞給 `geolocationError` 回檔時出現錯誤。

## 屬性

*   **代碼**： 下面列出的預定義的錯誤代碼之一。

*   **消息**： 描述所遇到的錯誤的詳細資訊的錯誤訊息。

## 常量

*   `PositionError.PERMISSION_DENIED`
*   `PositionError.POSITION_UNAVAILABLE`
*   `PositionError.TIMEOUT`

## 說明

`PositionError`物件傳遞給 `geolocationError` 與地理定位發生錯誤時的回呼函數。

### `PositionError.PERMISSION_DENIED`

返回當使用者不允許您的應用程式檢索的位置資訊。這是取決於平臺。

### `PositionError.POSITION_UNAVAILABLE`

返回設備時，不能檢索的位置。這就意味著該設備沒有網路連接和/或不能得到衛星的修復。

### `PositionError.TIMEOUT`

返回設備時，無法在指定的時間內檢索位置 `geolocationOptions` ' `timeout` 屬性。 與一起使用時 `geolocation.watchPosition` ，此錯誤可能傳遞給 `geolocationError` 回檔每 `timeout` 毫秒為單位）。


# geolocationSuccess

使用者的地理位置變得可用時執行的回呼函數 （當從調用 `geolocation.getCurrentPosition` ），或 （當從調用位置的更改時`geolocation.watchPosition`).

    function(position) {
        // Do something
    }
    

## 參數

*   **位置**： 返回設備的地理位置。*（位置）*

## 示例

    function geolocationSuccess(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    }


# geolocationError

當有地理定位功能錯誤時執行的使用者的回呼函數。

    function(error) {
        // Handle the error
    }
    

## 參數

*   **錯誤**: 設備所返回的錯誤。*() PositionError*


# geolocationOptions

若要自訂的地理定位檢索的可選參數`Position`.

    {maximumAge: 3000，超時： 5000，enableHighAccuracy: true} ；
    

## 選項

*   **enableHighAccuracy**： 提供應用程式需要最佳的可能結果的提示。 預設情況下，該設備將嘗試檢索 `Position` 使用基於網路的方法。 將此屬性設置為 `true` 告訴要使用更精確的方法，如衛星定位的框架。 *(布林值)*

*   **超時**： 時間 (毫秒) 從調用傳遞，允許的最大長度 `geolocation.getCurrentPosition` 或 `geolocation.watchPosition` 直到相應的 `geolocationSuccess` 回檔執行。 如果 `geolocationSuccess` 不會在此時間內調用回檔 `geolocationError` 傳遞回檔 `PositionError.TIMEOUT` 錯誤代碼。 (請注意，與一起使用時 `geolocation.watchPosition` 、 `geolocationError` 的時間間隔可以調用回檔每 `timeout` 毫秒!)*（人數）*

*   **maximumAge**： 接受其年齡大於指定以毫秒為單位的時間沒有緩存的位置。*（人數）*

## Android 的怪癖

Android 2.x 模擬器不返回地理定位結果除非 `enableHighAccuracy` 選項設置為`true`.
