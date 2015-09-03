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


# 지리적 위치

> `geolocation`개체 데이터에 액세스할 위치 또는 장치의 GPS 센서를 기반으로 네트워크 신호에서 유추 합니다.

`Geolocation`위도 및 경도 등의 소자의 위치에 대 한 정보를 제공합니다. 일반적인 위치 정보 등 글로벌 포지셔닝 시스템 (GPS) 및 위치와 같은 IP 주소, RFID, WiFi 및 블루투스 MAC 주소 및 GSM/CDMA 셀 Id 네트워크 신호에서 유추 합니다. 보장은 없다는 API 소자의 실제 위치를 반환 합니다.

이 API [W3C Geolocation API 사양][1]에 기반 하 고 이미 구현을 제공 하지 않는 장치에만 실행 됩니다.

 [1]: http://dev.w3.org/geo/api/spec-source.html

**중요 한 개인 정보 보호 참고:** 위치 정보 데이터의 수집 및 사용 중요 한 개인 정보 보호 문제를 발생 시킵니다. 응용 프로그램의 개인 정보 보호 정책 다른 당사자와의 데이터 (예를 들어, 굵고, 괜 찮 아 요, 우편 번호, 등)의 정밀도 수준을 공유 여부를 app 지리적 데이터를 사용 하는 방법 토론 해야 한다. 그것은 사람의 행방을 밝힐 수 있기 때문에 및 저장, 그의 혹은 그녀의 여행의 역사 지리적 위치 데이터는 일반적으로 중요 한 간주. 따라서 응용 프로그램의 개인 정보 보호 정책 뿐만 아니라 강하게 해야 당신의 애플 리 케이 션이 (해당 되는 경우 장치 운영 체제는 이미 그래서를 하지 않습니다) 지리적 위치 데이터에 액세스 하기 전에 그냥--시간 통지. 그 통지는 (예를 들어, **확인** 및 **아니오**선택 제시) 하 여 사용자의 허가 취득 뿐만 아니라, 위에서 언급 된 동일한 정보를 제공 해야 합니다. 자세한 내용은 개인 정보 보호 가이드를 참조 하십시오.

## 메서드

*   geolocation.getCurrentPosition
*   geolocation.watchPosition
*   geolocation.clearWatch

## 인수

*   geolocationSuccess
*   geolocationError
*   geolocationOptions

## (읽기 전용) 개체

*   Position
*   PositionError
*   Coordinates

## 기능 액세스

버전 3.0, 코르도바 *플러그인*으로 장치 수준 Api를 구현합니다. CLI의 사용 `plugin` 명령 설명에 명령줄 인터페이스를 추가 하거나 프로젝트에 대 한이 기능을 제거 하려면:

        $ cordova plugin add org.apache.cordova.geolocation
        $ cordova plugin ls
        [ 'org.apache.cordova.geolocation' ]
        $ cordova plugin rm org.apache.cordova.geolocation
    

이 명령은 모든 타겟된 플랫폼에 적용 하지만 플랫폼 관련 구성 설정을 아래에 설명 된 수정:

*   안 드 로이드
    
        (in app/res/xml/config.xml)
        <feature name="Geolocation">
            <param name="android-package" value="org.apache.cordova.GeoBroker" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
        <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
        <uses-permission android:name="android.permission.ACCESS_LOCATION_EXTRA_COMMANDS" />
        

*   블랙베리 WebWorks
    
        (in www/plugins.xml)
        <feature name="Geolocation">
            <param name="blackberry-package" value="org.apache.cordova.geolocation.Geolocation" />
        </feature>
        
        (in www/config.xml)
        <rim:permissions>
            <rim:permit>read_geolocation</rim:permit>
        </rim:permissions>
        

*   (iOS`config.xml`)
    
        <feature name="Geolocation">
            <param name="ios-package" value="CDVLocation" />
        </feature>
        

*   (Windows Phone`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_LOCATION" />
        </Capabilities>
        
    
    참고: [Windows Phone 대 한 응용 프로그램 매니페스트][2]

 [2]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

일부 플랫폼은 특별 한 구성이 필요 없이이 기능을 지원할 수 있습니다. *플랫폼 지원* 개요 섹션에서을 참조 하십시오.


# geolocation.getCurrentPosition

로 소자의 현재 위치를 반환 합니다는 `Position` 개체.

    navigator.geolocation.getCurrentPosition(geolocationSuccess,
                                             [geolocationError],
                                             [geolocationOptions]);
    

## 매개 변수

*   **geolocationSuccess**: 현재의 위치를 전달 되는 콜백.

*   **geolocationError**: *(선택 사항)* 오류가 발생 하면 실행 되는 콜백.

*   **geolocationOptions**: *(선택 사항)* 위치 옵션.

## 설명

`geolocation.getCurrentPosition`비동기 함수가입니다. 디바이스의 현재 위치를 반환 합니다는 `geolocationSuccess` 로 콜백은 `Position` 매개 변수로 개체. 오류가 발생 하는 경우는 `geolocationError` 콜백 전달 되는 `PositionError` 개체.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Tizen
*   Windows Phone 7과 8
*   윈도우 8

## 빠른 예제

    // onSuccess Callback
    // This method accepts a Position object, which contains the
    // current GPS coordinates
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
    
    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
    
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    

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
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }
    
        // onSuccess Geolocation
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                                'Longitude: '          + position.coords.longitude             + '<br />' +
                                'Altitude: '           + position.coords.altitude              + '<br />' +
                                'Accuracy: '           + position.coords.accuracy              + '<br />' +
                                'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                                'Heading: '            + position.coords.heading               + '<br />' +
                                'Speed: '              + position.coords.speed                 + '<br />' +
                                'Timestamp: '          + position.timestamp                    + '<br />';
        }
    
        // onError Callback receives a PositionError object
        //
        function onError(error) {
            alert('code: '    + error.code    + '\n' +
                  'message: ' + error.message + '\n');
        }
    
        </script>
      </head>
      <body>
        <p id="geolocation">Finding geolocation...</p>
      </body>
    </html>


# geolocation.watchPosition

디바이스의 현재 위치에 대 한 변경 시계.

    var watchId = navigator.geolocation.watchPosition(geolocationSuccess,
                                                      [geolocationError],
                                                      [geolocationOptions]);
    

## 매개 변수

*   **geolocationSuccess**: 현재의 위치를 전달 되는 콜백.

*   **geolocationError**: (선택 사항) 오류가 발생 하면 실행 되는 콜백.

*   **geolocationOptions**: (선택 사항)는 지리적 위치 옵션.

## 반환

*   **문자열**: 시계 위치 간격을 참조 하는 시계 id를 반환 합니다. 시계 id와 함께 사용 해야 합니다 `geolocation.clearWatch` 위치 변화에 대 한 보고 중지.

## 설명

`geolocation.watchPosition`비동기 함수가입니다. 그것은 위치에 변화를 탐지할 때 소자의 현재 위치를 반환 합니다. 새 위치를 검색 하는 장치는 `geolocationSuccess` 콜백 실행 한 `Position` 매개 변수로 개체. 오류가 발생 하는 경우는 `geolocationError` 콜백 실행 한 `PositionError` 매개 변수로 개체.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Tizen
*   Windows Phone 7과 8
*   윈도우 8

## 빠른 예제

    // onSuccess Callback
    //   This method accepts a `Position` object, which contains
    //   the current GPS coordinates
    //
    function onSuccess(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                            'Longitude: ' + position.coords.longitude     + '<br />' +
                            '<hr />'      + element.innerHTML;
    }
    
    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
    
    // Options: throw an error if no update is received every 30 seconds.
    //
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000 });
    

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
    
        var watchID = null;
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Throw an error if no update is received every 30 seconds
            var options = { timeout: 30000 };
            watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
        }
    
        // onSuccess Geolocation
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                                'Longitude: ' + position.coords.longitude     + '<br />' +
                                '<hr />'      + element.innerHTML;
        }
    
            // onError Callback receives a PositionError object
            //
            function onError(error) {
                alert('code: '    + error.code    + '\n' +
                      'message: ' + error.message + '\n');
            }
    
        </script>
      </head>
      <body>
        <p id="geolocation">Watching geolocation...</p>
      </body>
    </html>


# geolocation.clearWatch

참조 디바이스의 위치 변경에 대 한 보고 중지는 `watchID` 매개 변수.

    navigator.geolocation.clearWatch(watchID);
    

## 매개 변수

*   **watchID**: id는 `watchPosition` 간격을 취소 합니다. (문자열)

## 설명

`geolocation.clearWatch`선택을 취소 하 여 소자의 위치에 변화를 보고 중지는 `geolocation.watchPosition` 에 의해 참조 된`watchID`.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Tizen
*   Windows Phone 7과 8
*   윈도우 8

## 빠른 예제

    / / 옵션: 대 한 위치에서 변경 하 고 가장 많이 사용 / / 정확한 위치 수집 방법을 사용할 수 있습니다.
    //
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { enableHighAccuracy: true });
    
    // ...later on...
    
    navigator.geolocation.clearWatch(watchID);
    

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
    
        var watchID = null;
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Get the most accurate position updates available on the
            // device.
            var options = { enableHighAccuracy: true };
            watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
        }
    
        // onSuccess Geolocation
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                                'Longitude: ' + position.coords.longitude     + '<br />' +
                                '<hr />'      + element.innerHTML;
        }
    
        // clear the watch that was started earlier
        //
        function clearWatch() {
            if (watchID != null) {
                navigator.geolocation.clearWatch(watchID);
                watchID = null;
            }
        }
    
            // onError Callback receives a PositionError object
            //
            function onError(error) {
              alert('code: '    + error.code    + '\n' +
                    'message: ' + error.message + '\n');
            }
    
        </script>
      </head>
      <body>
        <p id="geolocation">Watching geolocation...</p>
            <button onclick="clearWatch();">Clear Watch</button>
      </body>
    </html>


# 좌표

위치의 지리적 좌표를 설명 하는 속성의 집합입니다.

## 속성

*   **위도**: 소수점도 위도. *(수)*

*   **경도**: 경도 10 진수 각도. *(수)*

*   **고도**: 높이의 타원 면 미터에 위치. *(수)*

*   **정확도**: 정확도 레벨 미터에 위도 및 경도 좌표. *(수)*

*   **altitudeAccuracy**: 미터에 고도 좌표의 정확도 수준. *(수)*

*   **제목**: 여행, 진 북을 기준으로 시계 방향으로 세도에 지정 된 방향으로. *(수)*

*   **속도**: 초당 미터에 지정 된 디바이스의 현재 땅 속도. *(수)*

## 설명

`Coordinates`개체에 연결 된에서 `Position` 개체를 현재 위치에 대 한 요청에 콜백 함수를 사용할 수 있습니다.

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
    
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>Geolocation Position Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
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

**altitudeAccuracy**: 반환 안 드 로이드 장치에 의해 지원 되지 않습니다`null`.


# 위치

포함 `Position` 좌표 및 타임 스탬프, geolocation API에 의해 만들어진.

## 속성

*   **coords**: 지리적 좌표 집합. *(좌표)*

*   **타임 스탬프**: 생성 타임 스탬프에 대 한 `coords` . *(날짜)*

## 설명

`Position`개체와 코르도바, 의해 만들어지고 콜백 함수를 통해 사용자에 게 반환 합니다.

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
    
    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
    
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    

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
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }
    
        // onSuccess Geolocation
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = 'Latitude: '          + position.coords.latitude         + '<br />' +
                                'Longitude: '         + position.coords.longitude        + '<br />' +
                                'Altitude: '          + position.coords.altitude         + '<br />' +
                                'Accuracy: '          + position.coords.accuracy         + '<br />' +
                                'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '<br />' +
                                'Heading: '           + position.coords.heading          + '<br />' +
                                'Speed: '             + position.coords.speed            + '<br />' +
                                'Timestamp: '         + position.timestamp               + '<br />';
        }
    
            // onError Callback receives a PositionError object
            //
            function onError(error) {
                alert('code: '    + error.code    + '\n' +
                      'message: ' + error.message + '\n');
            }
    
        </script>
      </head>
      <body>
        <p id="geolocation">Finding geolocation...</p>
      </body>
    </html>


# PositionError

A `PositionError` 개체에 전달 되는 `geolocationError` 콜백 때 오류가 발생 합니다.

## 속성

*   **코드**: 미리 정의 된 오류 코드 중 하나가 아래에 나열 된.

*   **메시지**: 발생 한 오류 세부 정보를 설명 하는 오류 메시지.

## 상수

*   `PositionError.PERMISSION_DENIED`
*   `PositionError.POSITION_UNAVAILABLE`
*   `PositionError.TIMEOUT`

## 설명

`PositionError`개체에 전달 되는 `geolocationError` 콜백 함수 geolocation 오류가 발생 한 경우.

### `PositionError.PERMISSION_DENIED`

사용자 위치 정보를 검색 하 여 응용 프로그램을 허용 하지 않는 경우 반환 합니다. 이 플랫폼에 따라 달라 집니다.

### `PositionError.POSITION_UNAVAILABLE`

장치 위치를 검색할 수 없을 때 반환 합니다. 일반적으로이 장치 없는 연결 및 위성 수정 프로그램을 얻을 수 없습니다 의미 합니다.

### `PositionError.TIMEOUT`

장치에 지정 된 시간 내에서 위치를 검색할 수 없는 경우 반환 되는 `geolocationOptions` ' `timeout` 속성. 함께 사용 될 때 `geolocation.watchPosition` ,이 오류에 전달 될 수는 `geolocationError` 콜백 매 `timeout` 밀리초.


# geolocationSuccess

지리적 위치 사용할 수 있을 때 실행 되는 사용자의 콜백 함수 (에서 호출할 때 `geolocation.getCurrentPosition` ), 또는 (에서 호출할 때 위치 변경 하는 경우`geolocation.watchPosition`).

    function(position) {
        // Do something
    }
    

## 매개 변수

*   **위치**: 장치에 의해 반환 된 지리적 위치. *(위치)*

## 예를 들어

    function geolocationSuccess(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    }


# geolocationError

위치 정보 기능에 대 한 오류가 발생 될 때 실행 되는 사용자의 콜백 함수.

    function(error) {
        // Handle the error
    }
    

## 매개 변수

*   **오류**: 장치에 의해 반환 된 오류. *(PositionError)*


# geolocationOptions

선택적 매개 변수는 위치 정보 검색을 사용자 지정 하려면`Position`.

    {maximumAge: 3000, 타임 아웃: 5000, enableHighAccuracy: true};
    

## 옵션

*   **enableHighAccuracy**: 힌트는 응용 프로그램에 필요한 최상의 결과 제공 합니다. 기본적으로 장치를 검색 하려고 한 `Position` 네트워크 기반 방법을 사용 하 여. 이 속성을 설정 `true` 위성 위치 등 보다 정확한 방법을 사용 하 여 프레임 워크. *(부울)*

*   **시간 제한**: 최대 시간의 길이 (밀리초) 호출에서 전달할 수 있는 `geolocation.getCurrentPosition` 또는 `geolocation.watchPosition` 해당까지 `geolocationSuccess` 콜백 실행. 경우는 `geolocationSuccess` 콜백이이 시간 내에서 호출 되지 않습니다는 `geolocationError` 콜백 전달 되는 `PositionError.TIMEOUT` 오류 코드. (함께 사용 하는 경우 `geolocation.watchPosition` , `geolocationError` 콜백 간격에서 호출 될 수 있는 모든 `timeout` 밀리초!) *(수)*

*   **maximumAge**: 밀리초 단위로 지정 된 시간 보다 더 큰 되는 캐시 위치를 수락 합니다. *(수)*

## 안 드 로이드 단점

하지 않는 한 안 드 로이드 2.x 에뮬레이터 위치 결과 반환 하지 않습니다는 `enableHighAccuracy` 옵션을 설정`true`.
