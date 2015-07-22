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

# batterystatus

이벤트는 배터리 상태에 변화가 있을 때 발생 합니다.

    window.addEventListener("batterystatus", yourCallbackFunction, false);
    

## 세부 정보

이 이벤트는 배터리 충전 비율 1% 이상에 의해 변경 될 때 또는 장치를 연결 하거나 분리 하는 경우 발생 합니다.

배터리 상태 처리기는 두 개의 속성이 포함 된 개체에 전달 됩니다.

*   **수준**: 배터리 충전 (0-100)의 비율. *(수)*

*   **isPlugged**: 장치 연결된 인치 *(부울)* 인지 여부를 나타내는 부울 값

일반적으로 응용 프로그램을 사용 해야 합니다 `window.addEventListener` 한번 이벤트 리스너를 연결 하는 `deviceready` 이벤트가 발생 합니다.

## 지원 되는 플랫폼

*   iOS
*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   Windows Phone 7과 8
*   Tizen

## Windows Phone 7, 8 특수

Windows Phone 7 배터리 수준을 확인 하려면 네이티브 Api를 제공 하지 않습니다 때문에 `level` 속성은 사용할 수 없습니다. `isPlugged`매개 변수는 *는* 지원.

## 빠른 예제

    window.addEventListener("batterystatus", onBatteryStatus, false);
    
    function onBatteryStatus(info) {
        // Handle the online event
        console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
    }
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Ready Example</title>
    
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
            window.addEventListener("batterystatus", onBatteryStatus, false);
        }
    
        // Handle the batterystatus event
        //
        function onBatteryStatus(info) {
            console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>