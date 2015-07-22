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

# 온라인

응용 프로그램은 온라인 및 장치가 인터넷에 연결 된다 때이 이벤트가 발생 합니다.

    document.addEventListener("online", yourCallbackFunction, false);
    

## 세부 정보

`online`이전 연결 되지 않은 장치는 인터넷에 대 한 응용 프로그램 액세스를 허용 하도록 네트워크 연결을 받을 때 이벤트가 발생 합니다. 그것은 연결 API와 동일한 정보에 의존 하 고 경우의 값 `connection.type` 된다`NONE`.

일반적으로 응용 프로그램을 사용 해야 합니다 `document.addEventListener` 한번 이벤트 리스너를 연결 하는 `deviceready` 이벤트가 발생 합니다.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Windows Phone 7과 8
*   Tizen
*   윈도우 8

## 빠른 예제

    document.addEventListener("online", onOnline, false);
    
    function onOnline() {
        // Handle the online event
    }
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>Online Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("online", onOnline, false);
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
        }
    
        // Handle the online event
        //
        function onOnline() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## iOS 단점

처음 시작 하는 동안 첫 번째 `online` 이벤트 (있는 경우) 이전에 불 초 걸립니다 이상 `connection.type` 입니다`UNKNOWN`.

## Windows Phone 7 단점

에뮬레이터에서 실행 하는 경우는 `connection.status` 항상 불명 하다, 그래서이 이벤트에는 *없는* 불.

## Windows Phone 8 단점

에뮬레이터도 연결 형식을 보고 `Cellular` 는 변경 되지 않습니다, 그래서 이벤트에는 *없는* 불.