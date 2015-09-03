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


# 나침반

> 장치 가리키는 방향을 가져옵니다.

## 메서드

*   compass.getCurrentHeading
*   compass.watchHeading
*   compass.clearWatch
*   compass.watchHeadingFilter (사용 되지 않음)
*   compass.clearWatchFilter (사용 되지 않음)

## 인수

*   compassSuccess
*   compassError
*   compassOptions
*   compassHeading

## 기능 액세스

버전 3.0, 코르도바 *플러그인*으로 장치 수준 Api를 구현합니다. CLI의 사용 `plugin` 명령 설명에 명령줄 인터페이스를 추가 하거나 프로젝트에 대 한이 기능을 제거 하려면:

        $ cordova plugin add org.apache.cordova.device-orientation
        $ cordova plugin ls
        [ 'org.apache.cordova.device-orientation' ]
        $ cordova plugin rm org.apache.cordova.device-orientation
    

이 명령은 모든 타겟된 플랫폼에 적용 하지만 플랫폼 관련 구성 설정을 아래에 설명 된 수정:

*   (안 드 로이드`app/res/xml/config.xml`)
    
        < 기능 이름 "나침반" = >< param 이름을 "안 드 로이드 패키지" value="org.apache.cordova.CompassListener =" / >< / 기능 >
        

*   (iOS`config.xml`)
    
        <feature name="Compass">
            <param name="ios-package" value="CDVLocation" />
        </feature>
        

*   (Windows Phone`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_SENSORS" />
        </Capabilities>
        
    
    참고: [Windows Phone 대 한 응용 프로그램 매니페스트][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

일부 플랫폼은 특별 한 구성이 필요 없이이 기능을 지원할 수 있습니다. *플랫폼 지원* 개요 섹션에서을 참조 하십시오.


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


# compass.clearWatch

시계 ID 매개 변수에서 참조 하는 나침반을 보고 중지 합니다.

    navigator.compass.clearWatch(watchID);
    

*   **watchID**: ID 반환`compass.watchHeading`.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 10
*   iOS
*   Tizen
*   Windows Phone 7 및 8 (해당 되는 경우 하드웨어 사용 가능)
*   윈도우 8

## 빠른 예제

    var watchID = navigator.compass.watchHeading(onSuccess, onError, options);
    
    // ... later on ...
    
    navigator.compass.clearWatch(watchID);
    

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


# compass.watchHeadingFilter

참조 1.6 기준으로 더 이상 지원 되지, `compass.watchHeading` 동일한 기능에 대 한.


# compass.clearWatchFilter

1.6 현재로 더 이상 지원 되지. 참조`compass.clearWatch`.


# compassSuccess

onSuccess 콜백 함수를 통해 나침반 머리글 정보를 제공 하는 `compassHeading` 개체.

    function(heading) {
        // Do something
    }
    

## 매개 변수

*   **제목**: 제목 정보. *(compassHeading)*

## 예를 들어

    function onSuccess(heading) {
        alert('Heading: ' + heading.magneticHeading);
    };


# compassError

나침반 기능에 대 한 onError 콜백 함수입니다.

## 예를 들어

    function(CompassError) {
        // Handle the error
    }


# compassOptions

나침반의 검색을 사용자 지정 하는 선택적 매개 변수.

## 옵션

*   **주파수**: 자주 밀리초에서 나침반 머리글을 검색 하는 방법. *(수)* (기본값: 100)

*   **필터**:도 watchHeading 성공 콜백을 시작 하는 데 필요한 변경. *(수)*

안 드 로이드 단점

---

*   `filter`지원 되지 않습니다.

## Tizen 특수

*   `filter`지원 되지 않습니다.

## Windows Phone 7, 8 특수

*   `filter`지원 되지 않습니다.


# compassHeading

A `CompassHeading` 개체에 반환 되는 `compassSuccess` 콜백 함수.

## 속성

*   **magneticHeading**: 단일 시점에서 0-359.99에서도 제목. *(수)*

*   **trueHeading**: 단일 시점에서 0-359.99에서에서 지리적 북극을 기준으로 향하고. 음수 값을 나타냅니다 진정한 표제를 확인할 수 없습니다. *(수)*

*   **headingAccuracy**: 보고 된 머리글 사이의 진정한 제목도 편차. *(수)*

*   **타임 스탬프**:이 제목 결정 하는 시간. *(밀리초)*

## 설명

`CompassHeading`개체를 반환 되는 `compassSuccess` 콜백 함수.

## 안 드 로이드 단점

*   `trueHeading`지원 되지 않습니다 하지만 같은 값으로 보고`magneticHeading`

*   `headingAccuracy`항상 0 사이 차이가 있기 때문에 `magneticHeading` 와`trueHeading`.

## iOS 단점

*   `trueHeading` is only returned when location services are enabled via `navigator.geolocation.watchLocation()`

*   IOS 4 기기 및 디바이스의 현재 방향 절대 위치로 참조 하지 머리글 요소 위에 애플 리 케이 션을 위해 지 원하는 그 방향.


# CompassError

A `CompassError` 개체에 반환 됩니다는 `compassError` 콜백 함수 오류가 발생 합니다.

## 속성

*   **코드**: 미리 정의 된 오류 코드 중 하나가 아래에 나열 된.

## 상수

*   `CompassError.COMPASS_INTERNAL_ERR`
*   `CompassError.COMPASS_NOT_SUPPORTED`

## 설명

오류가 발생 하는 경우는 `CompassError` 개체를 매개 변수로 전달 되는 `compassError` 콜백 함수.
