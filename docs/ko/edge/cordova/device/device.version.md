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

# device.version

운영 체제 버전을 얻을.

    var string = device.version;
    

## 지원 되는 플랫폼

*   안 드 로이드 2.1 +
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Tizen
*   Windows Phone 7과 8
*   윈도우 8

## 빠른 예제

    / / 안 드 로이드: Froyo OS "2.2" 반환 / Eclair OS "2.1", "2.0.1", 또는 "2.0" 돌려보낼 것입니다 / / 버전 반환할 수 있습니다 / 업데이트 수준 "2.1 update1" / / / / 블랙베리: 토치 9800 OS 6.0을 사용 하 여 "6.0.0.600"를 반환 / / / / 아이폰: iOS 3.2 반환 "3.2" / / / / Windows Phone 7: 전 현재 운영 체제 버전 번호를 반환 합니다. on Mango returns 7.10.7720
    // Tizen: returns "TIZEN_20120425_2"
    var deviceVersion = device.version;
    

## 전체 예제

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
            var element = document.getElementById('deviceProperties');
            element.innerHTML = 'Device Model: '    + device.model    + '<br />' +
                                'Device Cordova: '  + device.cordova  + '<br />' +
                                'Device Platform: ' + device.platform + '<br />' +
                                'Device UUID: '     + device.uuid     + '<br />' +
                                'Device Version: '  + device.version  + '<br />';
        }
    
        </script>
      </head>
      <body>
        <p id="deviceProperties">Loading device properties...</p>
      </body>
    </html>