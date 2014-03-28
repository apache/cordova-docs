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

# deviceready

이벤트는 코르도바는 완전히 로드 될 때 발생 합니다.

    document.addEventListener("deviceready", yourCallbackFunction, false);
    

## 세부 정보

이 이벤트는 모든 응용 프로그램에 필수적입니다. 코르도바의 장치 Api 로드를 액세스할 준비가 신호 합니다.

코르 도우 바 두 코드 베이스의 구성: 기본과 자바 스크립트. 네이티브 코드를 로드 하는 동안 사용자 지정 로딩 이미지를 표시 합니다. 그러나, 자바 스크립트는 DOM을 로드할 한 번만 로드 합니다. 즉, 해당 네이티브 코드로 사용할 수 있게 하기 전에 웹 애플 리 케이 션 코르 도우 바 자바 스크립트 함수를 호출 잠재적으로 수 있습니다.

`deviceready`코르도바 완전히 로드 되 면 이벤트가 발생 합니다. 한 번 이벤트가 발생 하면 안전 하 게 통화를 할 수 Cordova Api. 응용 프로그램은 일반적으로와 이벤트 리스너 첨부 `document.addEventListener` HTML 문서의 DOM 로드 되 면.

`deviceready`다른 사람에서 약간 다르게 동작 하는 이벤트. 후 등록 된 이벤트 처리기는 `deviceready` 이벤트가 발생은 즉시 호출 하는 콜백 함수.

## 지원 되는 플랫폼

*   아마존 화재 운영 체제
*   안 드 로이드
*   블랙베리 10
*   iOS
*   Tizen
*   Windows Phone 7과 8
*   윈도우 8

## 빠른 예제

    document.addEventListener("deviceready", onDeviceReady, false);
    
    function onDeviceReady() {
        // Now safe to use device APIs
    }
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Ready Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Now safe to use device APIs
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>