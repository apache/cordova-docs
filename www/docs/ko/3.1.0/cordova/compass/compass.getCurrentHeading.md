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

# compass.getCurrentHeading

현재 <a href="compass.html">나침반</a> 제목 좀.

    navigator.compass.getCurrentHeading(<a href="parameters/compassSuccess.html">compassSuccess</a>, <a href="parameters/compassError.html">compassError</a>, <a href="parameters/compassOptions.html">compassOptions</a>);
    

## 설명

<a href="compass.html">나침반</a> 방향 또는 표제는 <a href="../device/device.html">장치</a> 지적 이다, 일반적으로 <a href="../device/device.html">장치</a> 위에서 감지 하는 센서입니다. 359.99, 0가 북쪽을 0에서도에서 머리글을 측정 합니다.

<a href="compass.html">나침반</a> 머리글 정보를 통해 반환 되는 `CompassHeading` 개체를 사용 하는 `<a href="parameters/compassSuccess.html">compassSuccess</a>` 콜백 함수.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 10
*   iOS
*   Tizen
*   Windows Phone 7 및 8 (해당 되는 경우 하드웨어 사용 가능)
*   윈도우 8

## 빠른 예제

    function onSuccess(heading) {
        alert('Heading: ' + heading.magneticHeading);
    };
    
    function onError(error) {
        alert('<a href="<a href="parameters/compassError.html">compassError</a>/<a href="parameters/compassError.html">compassError</a>.html">CompassError</a>: ' + error.code);
    };
    
    navigator.compass.getCurrentHeading(onSuccess, onError);
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>Compass <a href="../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.compass.getCurrentHeading(onSuccess, onError);
        }
    
        // onSuccess: Get the current heading
        //
        function onSuccess(heading) {
            alert('Heading: ' + heading.magneticHeading);
        }
    
        // onError: Failed to get the heading
        //
        function onError(<a href="parameters/compassError.html">compassError</a>) {
            alert('Compass Error: ' + <a href="parameters/compassError.html">compassError</a>.code);
        }
    
        </script>
      </head>
      <body>
        <h1><a href="../storage/storage.opendatabase.html">Example</a></h1>
        <p>getCurrentHeading</p>
      </body>
    </html>