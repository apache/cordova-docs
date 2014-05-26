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

# notification.alert

사용자 지정 경고 또는 대화 상자를 보여 줍니다.

    navigator.notification.alert(message, alertCallback, [title], [buttonName])
    

*   **메시지**: 대화 메시지. *(문자열)*

*   **alertCallback**: 콜백을 호출할 때 경고 대화 기 각. *(기능)*

*   **제목**: 제목 대화 상자. *(문자열)* (옵션, 기본값:`Alert`)

*   **buttonName**: 단추 이름. *(문자열)* (옵션, 기본값:`OK`)

## 설명

이 기능에 대 한 기본 대화 상자를 사용 하는 대부분의 코르도바 구현 하지만 일부 플랫폼 사용 브라우저의 `alert` 함수는 일반적으로 덜 사용자 정의할 수 있습니다.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Tizen
*   Windows Phone 7과 8
*   윈도우 8

## 빠른 예제

    // Android / BlackBerry WebWorks (OS 5.0 and higher) / iOS / Tizen
    //
    function alertDismissed() {
        // do something
    }
    
    navigator.notification.alert(
        'You are the winner!',  // message
        alertDismissed,         // callback
        'Game Over',            // title
        'Done'                  // buttonName
    );
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>Notification Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Empty
        }
    
        // alert dialog dismissed
            function alertDismissed() {
                // do something
            }
    
        // Show a custom alertDismissed
        //
        function showAlert() {
            navigator.notification.alert(
                'You are the winner!',  // message
                alertDismissed,         // callback
                'Game Over',            // title
                'Done'                  // buttonName
            );
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showAlert(); return false;">Show Alert</a></p>
      </body>
    </html>
    

## Windows Phone 7, 8 특수

*   아니 내장 브라우저 경고 하지만 다음과 같이 전화를 바인딩할 수 있습니다 `alert()` 전역 범위에서:
    
        window.alert = navigator.notification.alert;
        

*   둘 다 `alert` 와 `confirm` 는 비차단 호출, 결과 비동기적으로 사용할 수 있습니다.