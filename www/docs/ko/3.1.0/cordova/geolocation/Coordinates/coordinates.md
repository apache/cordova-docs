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

# 좌표

<a href="../Position/position.html">위치</a>의 지리적 좌표를 설명 하는 속성의 집합입니다.

## 속성

*   **위도**: 소수점도 위도. *(수)*

*   **경도**: 경도 10 진수 각도. *(수)*

*   **고도**: 높이의 타원 면 미터에 <a href="../Position/position.html">위치</a>. *(수)*

*   **정확도**: 정확도 레벨 미터에 위도 및 경도 좌표. *(수)*

*   **altitudeAccuracy**: 미터에 고도 좌표의 정확도 수준. *(수)*

*   **제목**: 여행, 진 북을 기준으로 시계 방향으로 세도에 지정 된 방향으로. *(수)*

*   **속도**: 초당 미터에 지정 된 디바이스의 현재 땅 속도. *(수)*

## 설명

`Coordinates`개체에 <a href="../../connection/connection.html">연결</a> 된에서 `Position` 개체를 현재 <a href="../Position/position.html">위치</a>에 대 한 요청에 콜백 함수를 사용할 수 있습니다.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Tizen
*   Windows Phone 7과 8
*   윈도우 8

## 빠른 예제

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
    
    navigator.<a href="../geolocation.getCurrentPosition.html">geolocation.getCurrentPosition</a>(onSuccess, onError);
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>Geolocation Position <a href="../../storage/storage.opendatabase.html">Example</a></title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // wait for device API libraries to load
        //
        document.<a href="../../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.<a href="../geolocation.getCurrentPosition.html">geolocation.getCurrentPosition</a>(onSuccess, onError);
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
    

## 안 드 로이드 단점

**altitudeAccuracy**: 반환 안 드 로이드 <a href="../../device/device.html">장치</a>에 의해 지원 되지 않습니다`null`.