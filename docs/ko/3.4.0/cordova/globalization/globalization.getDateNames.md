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

# globalization.getDateNames

달의 이름 또는 클라이언트의 사용자 환경 설정 및 일정에 따라 매일의 배열을 반환합니다.

    navigator.globalization.getDateNames(successCallback, errorCallback, options);
    

## 설명

이름의 배열을 반환 합니다는 `successCallback` 와 `properties` 개체를 매개 변수로 합니다. 해당 개체를 포함 한 `value` 속성으로는 `Array` 의 `String` 값. 배열 기능 이름과 년 또는 선택한 옵션에 따라 일주일의 첫날 첫 번째 달에서 시작.

이름을 얻는 오류가 발생 하는 경우는 `errorCallback` 로 실행 한 `GlobalizationError` 개체를 매개 변수로. 오류의 예상 된 코드는`GlobalizationError.UNKNOWN\_ERROR`.

`options`매개 변수는 선택적 이며 그것의 기본 값은:

    {유형: '활짝', 항목: '달'}
    

값 `options.type` 일 수 있다 `narrow` 또는`wide`.

값 `options.item` 일 수 있다 `months` 또는`days`.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Windows Phone 8

## 빠른 예제

브라우저 설정 된 경우에 `en\_US` 로케일,이 예에서는 표시 12 팝업 대화 상자, 텍스트 비슷한 한달에 하나 시리즈 `month: January` :

    navigator.globalization.getDateNames(
        function (names) {
            for (var i = 0; i < names.value.length; i++) {
                alert('month: ' + names.value[i] + '\n');
            }
        },
        function () { alert('Error getting names\n'); },
        { type: 'wide', item: 'months' }
    );
    

## 전체 예제

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getDateNames Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkDateNames() {
          navigator.globalization.getDateNames(
            function (names) {
              for (var i=0; i<names.value.length; i++) {
                alert('month: ' + names.value[i] + '\n');
              }
            },
            function () {alert('Error getting names\n');},
            {type:'wide', item:'months'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkDateNames()">Click for date names</button>
      </body>
    </html>