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

# connection.type

檢查當前活動的網路連接。

## 說明

此屬性提供快速的方法來確定設備的網路連接狀態，和連線類型。

## 支援的平臺

*   iOS
*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   Tizen
*   Windows Phone 7 和 8
*   Windows 8

## 快速的示例

    function checkConnection() {
        var networkState = navigator.connection.type;
    
        var states = {};
        states[Connection.UNKNOWN]  = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.CELL]     = 'Cell generic connection';
        states[Connection.NONE]     = 'No network connection';
    
        alert('Connection type: ' + states[networkState]);
    }
    
    checkConnection();
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>navigator.connection.type Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            checkConnection();
        }
    
            function checkConnection() {
                var networkState = navigator.connection.type;
    
                var states = {};
                states[Connection.UNKNOWN]  = 'Unknown connection';
                states[Connection.ETHERNET] = 'Ethernet connection';
                states[Connection.WIFI]     = 'WiFi connection';
                states[Connection.CELL_2G]  = 'Cell 2G connection';
                states[Connection.CELL_3G]  = 'Cell 3G connection';
                states[Connection.CELL_4G]  = 'Cell 4G connection';
                states[Connection.CELL]     = 'Cell generic connection';
                states[Connection.NONE]     = 'No network connection';
    
                alert('Connection type: ' + states[networkState]);
            }
    
        </script>
      </head>
      <body>
        <p>A dialog box will report the network state.</p>
      </body>
    </html>
    

## API 更改

科爾多瓦 2.3.0，直到 `Connection` 物件的訪問通過 `navigator.network.connection` 後才改為其中, `navigator.connection` 以匹配的 W3C 規範。 它在其原始位置，是仍然可用，但已廢棄，最終將被刪除。

## iOS 的怪癖

*   iOS 無法檢測到蜂窩網路連接的類型。 
    *   `navigator.connection.type` is set to `Connection.CELL` for all cellular data.

## Windows Phone 怪癖

*   When running in the emulator, always detects `navigator.connection.type` as `Connection.UNKNOWN`.

*   Windows Phone 不能檢測的蜂窩網路連接的類型。
    
    *   `navigator.connection.type` is set to `Connection.CELL` for all cellular data.

## Tizen 怪癖

*   Tizen 只可以檢測一個 WiFi 或者蜂窩連接。 
    *   `navigator.connection.type` is set to `Connection.CELL_2G` for all cellular data.