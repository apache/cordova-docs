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

# compass.getCurrentHeading

현재 나침반 제목 좀.

    navigator.compass.getCurrentHeading(compassSuccess, compassError, compassOptions);
    

## 설명

나침반 방향 또는 표제는 장치 지적 이다, 일반적으로 장치 위에서 감지 하는 센서입니다. 359.99, 0가 북쪽을 0에서도에서 머리글을 측정 합니다.

나침반 머리글 정보를 통해 반환 되는 `CompassHeading` 개체를 사용 하는 `compassSuccess` 콜백 함수.

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
        alert('CompassError: ' + error.code);
    };
    
    navigator.compass.getCurrentHeading(onSuccess, onError);
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>Compass Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
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
        function onError(compassError) {
            alert('Compass Error: ' + compassError.code);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>getCurrentHeading</p>
      </body>
    </html>