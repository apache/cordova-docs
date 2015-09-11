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

# accelerometer.watchAcceleration

정기적, *x*, *y*및 *z* 축 따라 <a href="acceleration/acceleration.html">가속</a>도 얻을.

    var watchID = navigator.accelerometer.watchAcceleration(<a href="parameters/accelerometerSuccess.html">accelerometerSuccess</a>,
                                                           <a href="parameters/accelerometerError.html">accelerometerError</a>,
                                                           [<a href="parameters/accelerometerOptions.html">accelerometerOptions</a>]);
    

## 설명

<a href="accelerometer.html">가 속도계</a>는 현재 <a href="../geolocation/Position/position.html">위치</a>를 기준으로 운동 (델타) 변경 내용을 감지 하는 모션 센서입니다. <a href="accelerometer.html">가 속도계</a>는 *x*, *y*및 *z* 축을 따라 3D 이동을 검색할 수 있습니다.

`accelerometer.watchAcceleration`메서드는 <a href="../device/device.html">장치</a>의 현재 검색 `Acceleration` 일정 한 간격에 실행는 `<a href="parameters/accelerometerSuccess.html">accelerometerSuccess</a>` 콜백 함수 때마다. 통해 밀리초 단위로 간격을 지정 된 `acceleratorOptions` 개체의 `frequency` 매개 <a href="../../plugin_ref/spec.html">변수</a>.

반환 된 ID 참조<a href="accelerometer.html">가 속도계</a>의 시계 간격, 시청과 함께 사용할 수 있습니다 `<a href="accelerometer.clearWatch.html">accelerometer.clearWatch</a>` <a href="accelerometer.html">가 속도계</a>를 보고 중지 합니다.

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
    
    var options = { frequency: 3000 };  // Update every 3 seconds
    
    var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>Acceleration <a href="../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // The watch id references the current `watchAcceleration`
        var watchID = null;
    
        // Wait for device API libraries to load
        //
        document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            startWatch();
        }
    
        // Start watching the acceleration
        //
        function startWatch() {
    
            // Update acceleration every 3 seconds
            var options = { frequency: 3000 };
    
            watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
        }
    
        // Stop watching the acceleration
        //
        function stopWatch() {
            if (watchID) {
                navigator.<a href="accelerometer.clearWatch.html">accelerometer.clearWatch</a>(watchID);
                watchID = null;
            }
        }
    
        // onSuccess: Get a snapshot of the current acceleration
        //
        function onSuccess(acceleration) {
            var element = document.getElementById('accelerometer');
            element.innerHTML = 'Acceleration X: ' + acceleration.x         + '<br />' +
                                'Acceleration Y: ' + acceleration.y         + '<br />' +
                                'Acceleration Z: ' + acceleration.z         + '<br />' +
                                'Timestamp: '      + acceleration.timestamp + '<br />';
        }
    
        // onError: Failed to get the acceleration
        //
        function onError() {
            alert('onError!');
        }
    
        </script>
      </head>
      <body>
        <div id="accelerometer">Waiting for accelerometer...</div>
      </body>
    </html>
    

## iOS 단점

API 요청 간격 성공 콜백 함수를 호출 하지만 40ms 사이 <a href="../device/device.html">장치</a>에 요청의 범위를 제한 하 고 1000ms. 예를 들어 (3000ms) 3 초의 간격을 요청 하는 경우 API 마다 1 초 <a href="../device/device.html">장치</a>에서 데이터를 요청 하지만 성공 콜백을 3 초 마다 실행 됩니다.