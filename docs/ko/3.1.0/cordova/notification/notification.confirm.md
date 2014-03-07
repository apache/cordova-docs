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

# notification.confirm

사용자 정의 확인 대화 상자가 표시 됩니다.

    navigator.notification.confirm(message, confirmCallback, [title], [buttonLabels])
    

*   **메시지**: 대화 메시지. *(문자열)*

*   **confirmCallback**: 인덱스 버튼 (1, 2 또는 3) 또는 대화 상자 버튼을 누르면 (0) 없이 기 각 될 때 호출할 콜백 합니다. *(기능)*

*   **제목**: 제목 대화 상자. *(문자열)* (옵션, 기본값:`Confirm`)

*   **buttonLabels**: 단추 레이블을 지정 하는 문자열 배열입니다. *(배열)* (옵션, 기본값은 [ `OK,Cancel` ])

## 설명

`notification.confirm`메서드는 브라우저의 보다 더 많은 사용자 정의 기본 대화 상자 표시 `confirm` 기능.

## confirmCallback

`confirmCallback`사용자가 확인 대화 상자에서 단추 중 하나를 누를 때 실행 됩니다.

콜백 인수 `buttonIndex` *(번호)를*누르면된 버튼의 인덱스입니다. 참고 인덱스에서는 인덱스 1부터 값은 `1` , `2` , `3` , 등등.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Tizen
*   Windows Phone 7과 8
*   윈도우 8

## 빠른 예제

    // process the confirmation dialog result
    function onConfirm(buttonIndex) {
        alert('You selected button ' + buttonIndex);
    }
    
    // Show a custom confirmation dialog
    //
    function showConfirm() {
        navigator.notification.confirm(
            'You are the winner!', // message
             onConfirm,            // callback to invoke with index of button pressed
            'Game Over',           // title
            ['Restart','Exit']         // buttonLabels
        );
    }
    

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
    
        // process the confirmation dialog result
        function onConfirm(buttonIndex) {
            alert('You selected button ' + buttonIndex);
        }
    
        // Show a custom confirmation dialog
        //
        function showConfirm() {
            navigator.notification.confirm(
                'You are the winner!', // message
                 onConfirm,            // callback to invoke with index of button pressed
                'Game Over',           // title
                ['Restart','Exit']         // buttonLabels
            );
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showConfirm(); return false;">Show Confirm</a></p>
      </body>
    </html>
    

## Windows Phone 7, 8 특수

*   에 대 한 기본 제공 브라우저 함수가 `window.confirm` , 그러나 할당 하 여 바인딩할 수 있습니다:
    
        window.confirm = navigator.notification.confirm;
        

*   호출 `alert` 및 `confirm` 되므로 차단 되지 않은 결과만 비동기적으로 사용할 수 있습니다.