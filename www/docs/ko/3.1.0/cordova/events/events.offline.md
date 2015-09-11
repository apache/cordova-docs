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

# 오프 라인

<a href="events.html">이벤트</a>가 발생 하면 응용 프로그램 오프 라인, 이동 및 <a href="../device/device.html">장치</a>가 인터넷에 <a href="../connection/connection.html">연결</a> 되어 있지.

    document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("offline", yourCallbackFunction, false);
    

## 세부 정보

`offline`<a href="events.html">이벤트</a>가 발생 하면 응용 프로그램이 더 이상 인터넷에 액세스할 수 있도록 이전 <a href="../connection/connection.html">연결</a> 된 <a href="../device/device.html">장치</a>가 네트워크 <a href="../connection/connection.html">연결</a> 손실. 그것은 <a href="../connection/connection.html">연결</a> API와 동일한 정보에 의존 하 고 경우에 `<a href="../connection/connection.type.html">connection.type</a>` 에서 변경 `NONE` 다른 값으로.

일반적으로 응용 프로그램을 사용 해야 합니다 `document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>` 한번 <a href="events.html">이벤트</a> 리스너를 <a href="../connection/connection.html">연결</a> 하는 `<a href="events.deviceready.html">deviceready</a>` <a href="events.html">이벤트</a>가 발생 합니다.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Windows Phone 7과 8
*   Tizen
*   윈도우 8

## 빠른 예제

    document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("offline", onOffline, false);
    
    function onOffline() {
        // Handle the offline event
    }
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>Offline <a href="../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="events.deviceready.html">deviceready</a>", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("offline", onOffline, false);
        }
    
        // Handle the offline event
        //
        function onOffline() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## iOS 단점

처음 시작 하는 동안 첫 번째 오프 라인 <a href="events.html">이벤트</a> (있는 경우)를 적어도 초를 걸립니다.

## Windows Phone 7 단점

에뮬레이터에서 실행 하는 경우는 `connection.status` 항상 불명 하다, 그래서이 <a href="events.html">이벤트</a>는 *없는* 불.

## Windows Phone 8 단점

에뮬레이터도 <a href="../connection/connection.html">연결</a> 형식을 보고 `Cellular` 는 변경 되지 않습니다, 그래서 <a href="events.html">이벤트</a> 않습니다 *하지* 불.