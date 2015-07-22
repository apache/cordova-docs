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

# batterycritical

이벤트 발생 때 배터리 중요 한 수준 임계값에 도달 했습니다.

    window.addEventListener("batterycritical", yourCallbackFunction, false);
    

## 세부 정보

이벤트 발생 때 배터리 충전 비율 배터리 위험 임계값에 도달 했습니다. 값은 장치 마다 다릅니다.

`batterycritical`처리기는 두 개의 속성이 포함 된 개체에 전달 됩니다:

*   **수준**: 배터리 충전 (0-100)의 비율. *(수)*

*   **isPlugged**: 장치 연결된 인치 *(부울)* 인지 여부를 나타내는 부울 값

일반적으로 응용 프로그램을 사용 해야 합니다 `window.addEventListener` 한번 이벤트 리스너를 연결 하는 `deviceready` 이벤트가 발생 합니다.

## 지원 되는 플랫폼

*   iOS
*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   Tizen

## 빠른 예제

    window.addEventListener("batterycritical", onBatteryCritical, false);
    
    function onBatteryCritical(info) {
        // Handle the battery critical event
        alert("Battery Level Critical " + info.level + "%\nRecharge Soon!");
    }
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>Battery Critical Example</title>
    
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
            window.addEventListener("batterycritical", onBatteryCritical, false);
        }
    
        // Handle the batterycritical event
        //
        function onBatteryCritical(info) {
            alert("Battery Level Critical " + info.level + "%\nRecharge Soon!");
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>