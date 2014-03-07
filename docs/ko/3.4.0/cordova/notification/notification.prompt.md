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

# notification.prompt

사용자 지정 프롬프트 대화 상자를 보여 줍니다.

    navigator.notification.prompt(message, promptCallback, [title], [buttonLabels], [defaultText])
    

*   **메시지**: 대화 메시지. *(문자열)*

*   **promptCallback**: 단추를 누르면 호출할 콜백 합니다. *(기능)*

*   **제목**: 제목 *(문자열)* (옵션, 기본값 대화 상자`Prompt`)

*   **buttonLabels**: 단추를 지정 하는 문자열의 배열 *(배열)* (옵션, 기본값은 레이블`["OK","Cancel"]`)

*   **defaultText**: 기본 텍스트 상자 입력 값 ( `String` ) (옵션, 기본값: 빈 문자열)

## 설명

`notification.prompt`메서드는 브라우저의 보다 더 많은 사용자 정의 기본 대화 상자 표시 `prompt` 기능.

## promptCallback

`promptCallback`사용자가 프롬프트 대화 상자에서 단추 중 하나를 누를 때 실행 됩니다. `results`콜백에 전달 된 개체에는 다음 속성이 포함 되어 있습니다:

*   **buttonIndex**: 눌려진된 버튼의 인덱스. *(수)* 참고 인덱스에서는 인덱스 1부터 값은 `1` , `2` , `3` , 등등.

*   **input1**: 프롬프트 대화 상자에 입력 한 텍스트. *(문자열)*

## 지원 되는 플랫폼

*   안 드 로이드
*   iOS

## 빠른 예제

    // process the promp dialog results
    function onPrompt(results) {
        alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
    }
    
    // Show a custom prompt dialog
    //
    function showPrompt() {
        navigator.notification.prompt(
            'Please enter your name',  // message
            onPrompt,                  // callback to invoke
            'Registration',            // title
            ['Ok','Exit'],             // buttonLabels
            'Jane Doe'                 // defaultText
        );
    }
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>Notification Prompt Dialog Example</title>
    
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
    
        // process the promptation dialog result
        function onPrompt(results) {
            alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
        }
    
        // Show a custom prompt dialog
        //
        function showPrompt() {
            navigator.notification.prompt(
                'Please enter your name',  // message
                onPrompt,                  // callback to invoke
                'Registration',            // title
                ['Ok','Exit'],             // buttonLabels
                'Jane Doe'                 // defaultText
            );
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showPrompt(); return false;">Show Prompt</a></p>
      </body>
    </html>
    

## 안 드 로이드 단점

*   안 드 로이드 최대 3 개의 단추를 지원 하 고 그것 보다는 더 이상 무시 합니다.

*   안 드 로이드 3.0 및 나중에, 단추는 홀로 테마를 사용 하는 장치에 대 한 반대 순서로 표시 됩니다.