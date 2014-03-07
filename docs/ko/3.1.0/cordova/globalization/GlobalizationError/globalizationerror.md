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

# GlobalizationError

세계화 API에서 오류를 나타내는 개체입니다.

## 속성

*   **코드**: 오류 형식을 나타내는 다음 코드 중 하나 *(수)* 
    *   GlobalizationError.UNKNOWN _ 오류: 0
    *   GlobalizationError.FORMATTING _ 오류: 1
    *   GlobalizationError.PARSING _ 오류: 2
    *   GlobalizationError.PATTERN _ 오류: 3
*   **메시지**: 오류 설명을 포함 및/또는 *(문자열)를* 자세히 설명 하는 텍스트 메시지

## 설명

이 개체와 코르도바, 의해 만들어지고 오류 경우 콜백 반환.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS

## 빠른 예제

유사한 텍스트와 팝업 대화 상자가 표시 됩니다 다음 오류 콜백 실행 되 면 `code: 3` 와`message:`

    function errorCallback(error) {
        alert('code: ' + error.code + '\n' +
              'message: ' + error.message + '\n');
    };
    

## 전체 예제

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>GlobalizationError Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function successCallback(date) {
          alert('month:' + date.month +
                ' day:' + date.day +
                ' year:' + date.year + '\n');
        }
    
        function errorCallback(error) {
          alert('code: ' + error.code + '\n' +
                'message: ' + error.message + '\n');
        };
    
        function checkError() {
          navigator.globalization.stringToDate(
            'notADate',
            successCallback,
            errorCallback,
            {selector:'foobar'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkError()">Click for error</button>
      </body>
    </html>