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

# globalization.getPreferredLanguage

클라이언트의 현재 언어에 대 한 문자열 식별자를 얻을.

    navigator.globalization.getPreferredLanguage(successCallback, errorCallback);
    

## 설명

언어 식별자 문자열을 반환 합니다에 `successCallback` 와 함께 한 `properties` 개체를 매개 변수로. 있어야 해당 개체는 `value` 속성을 `String` 값.

언어, 점점 오류가 발생 하는 경우는 `errorCallback` 로 실행 한 `GlobalizationError` 개체를 매개 변수로. 오류의 예상 된 코드는`GlobalizationError.UNKNOWN\_ERROR`.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Windows Phone 8

## 빠른 예제

브라우저 설정 된 경우에 `en\_US` 로케일,이 텍스트와 함께 팝업 대화 상자를 표시 한다 `language: English` :

    navigator.globalization.getPreferredLanguage(
        function (language) {alert('language: ' + language.value + '\n');},
        function () {alert('Error getting language\n');}
    );
    

## 전체 예제

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getPreferredLanguage Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkLanguage() {
          navigator.globalization.getPreferredLanguage(
            function (language) {alert('language: ' + language.value + '\n');},
            function () {alert('Error getting language\n');}
          );
        }
        </script>
      </head>
      <body>
        <button onclick="checkLanguage()">Click for language</button>
      </body>
    </html>
    

## Windows Phone 8 단점

*   현재 언어의 ISO 639-1 두 문자 코드를 반환합니다.