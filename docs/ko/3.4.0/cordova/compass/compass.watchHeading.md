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

# compass.watchHeading

일정 한 간격에도 나침반 제목 얻을.

    var watchID = navigator.compass.watchHeading(compassSuccess, compassError, [compassOptions]);
    

## 설명

나침반 방향 또는 표제 장치는 지적을 감지 하는 센서입니다. 도 0에서 359.99 머리글을 측정합니다.

`compass.watchHeading`정기적 소자의 현재 머리글을 가져옵니다. 제목 검색 때마다는 `headingSuccess` 콜백 함수를 실행 합니다. 통해 밀리초 단위로 간격을 지정 된 `frequency` 매개 변수는 `compassOptions` 개체.

반환 된 시계 ID 나침반 시계 간격을 참조합니다. ID와 함께 사용 될 수 있습니다 시계 `compass.clearWatch` 나침반을 보고 그만.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 10
*   iOS
*   Tizen
*   Windows Phone 7 및 8 (해당 되는 경우 하드웨어 사용 가능)
*   윈도우 8

## 빠른 예제

    function onSuccess(heading) {
        var element = document.getElementById('heading');
        element.innerHTML = 'Heading: ' + heading.magneticHeading;
    };
    
    function onError(compassError) {
        alert('Compass error: ' + compassError.code);
    };
    
    var options = {
        frequency: 3000
    }; // Update every 3 seconds
    
    var watchID = navigator.compass.watchHeading(onSuccess, onError, options);
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>Compass Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // The watch id references the current `watchHeading`
        var watchID = null;
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            startWatch();
        }
    
        // Start watching the compass
        //
        function startWatch() {
    
            // Update compass every 3 seconds
            var options = { frequency: 3000 };
    
            watchID = navigator.compass.watchHeading(onSuccess, onError, options);
        }
    
        // Stop watching the compass
        //
        function stopWatch() {
            if (watchID) {
                navigator.compass.clearWatch(watchID);
                watchID = null;
            }
        }
    
        // onSuccess: Get the current heading
        //
        function onSuccess(heading) {
            var element = document.getElementById('heading');
            element.innerHTML = 'Heading: ' + heading.magneticHeading;
        }
    
        // onError: Failed to get the heading
        //
        function onError(compassError) {
            alert('Compass error: ' + compassError.code);
        }
    
        </script>
      </head>
      <body>
        <div id="heading">Waiting for heading...</div>
        <button onclick="startWatch();">Start Watching</button>
        <button onclick="stopWatch();">Stop Watching</button>
      </body>
    </html>
    

## iOS 단점

IOS에 `compass.watchHeading` 도 지정 된 번호로 바뀔 때 소자의 현재 표제를 또한 얻을 수 있습니다. 도 또는 더, 지정 된 수로 제목 변경 때마다는 `headingSuccess` 콜백 함수를 실행 합니다. 지정을 통해 변화의 정도 `filter` 매개 변수는 `compassOptions` 개체. 반환 된 시계 ID를 전달 하 여 시계를 평소 처럼 취소 `compass.clearWatch` . 이 기능은 대체 이전 별도 iOS 전용 `watchHeadingFilter` 및 `clearWatchFilter` 기능, 1.6 버전에서 제거 되었습니다.

단 하나 `watchHeading` iOS에서 한 번에 적용에서 될 수 있습니다. 경우는 `watchHeading` 필터를 사용 하 여 호출 `getCurrentHeading` 또는 `watchHeading` 기존 필터 값을 사용 하 여 제목 변화를 지정 합니다. 필터와 제목 변화를 보고 시간을 간격으로 보다 더 효율적입니다.