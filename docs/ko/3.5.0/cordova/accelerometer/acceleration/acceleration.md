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

# 가속

포함 `Accelerometer` 특정 시점에 캡처된 데이터가.

## 속성

*   **x**: x 축에 가속의 금액. (m/s에서 ^2) *(수)*
*   **y**: y 축에 가속의 금액. (m/s에서 ^2) *(수)*
*   **z**: z 축의 가속도의 금액. (m/s에서 ^2) *(수)*
*   **타임 스탬프**: 생성 타임 스탬프 (밀리초)입니다. *(DOMTimeStamp)*

## 설명

`Acceleration`개체 채워집니다 및 API에 의해 반환 된 `Accelerometer` 방법. 가속도 값 포함 중력의 효과 (9.81 m/s ^2) 때 장치 거짓말 평평 하 고 *x*, *y*, 최대 직면 하 고 *z* 값 반환 되어야 합니다 있도록, `` , `` , 그리고`9.81`.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Tizen
*   Windows Phone 7과 8
*   윈도우 8

## 빠른 예제

    function onSuccess(acceleration) {
        alert('Acceleration X: ' + acceleration.x + '\n' +
              'Acceleration Y: ' + acceleration.y + '\n' +
              'Acceleration Z: ' + acceleration.z + '\n' +
              'Timestamp: '      + acceleration.timestamp + '\n');
    };
    
    function onError() {
        alert('onError!');
    };
    
    navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>Acceleration Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
        }
    
        // onSuccess: Get a snapshot of the current acceleration
        //
        function onSuccess(acceleration) {
            alert('Acceleration X: ' + acceleration.x + '\n' +
                  'Acceleration Y: ' + acceleration.y + '\n' +
                  'Acceleration Z: ' + acceleration.z + '\n' +
                  'Timestamp: '      + acceleration.timestamp + '\n');
        }
    
        // onError: Failed to get the acceleration
        //
        function onError() {
            alert('onError!');
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>getCurrentAcceleration</p>
      </body>
    </html>