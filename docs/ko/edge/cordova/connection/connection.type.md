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

현재 활성 네트워크 연결을 확인합니다.

## 설명

이 디바이스의 네트워크 연결 상태를 확인 하는 빠른 방법을 제공 합니다 및 연결의 종류.

## 지원 되는 플랫폼

*   iOS
*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   Tizen
*   Windows Phone 7과 8
*   윈도우 8

## 빠른 예제

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
    

## 전체 예제

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
    

## API 변경

코르 도우 바 2.3.0까지 `Connection` 개체를 통해 액세스 했습니다 `navigator.network.connection` , 후에 변경 된 `navigator.connection` W3C 사양에 맞게. 그것은 그것의 원래 위치에 계속 사용할 수 하지만 사용 되지 않습니다 및 결국 제거 될 것 이다.

## iOS 단점

*   iOS는 셀룰러 네트워크 연결의 종류를 감지할 수 없습니다. 
    *   `navigator.connection.type` is set to `Connection.CELL` for all cellular data.

## Windows Phone 단점

*   When running in the emulator, always detects `navigator.connection.type` as `Connection.UNKNOWN`.

*   Windows Phone 셀룰러 네트워크 연결 유형을 검색할 수 없습니다.
    
    *   `navigator.connection.type` is set to `Connection.CELL` for all cellular data.

## Tizen 특수

*   Tizen은 와이파이 또는 휴대 전화 연결에만 검색할 수 있습니다. 
    *   `navigator.connection.type` is set to `Connection.CELL_2G` for all cellular data.