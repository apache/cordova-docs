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

# globalization.getCurrencyPattern

포맷 하 고 클라이언트의 사용자 환경 설정 및 ISO 4217 통화 부호에 따라 통화 값을 구문 분석 패턴 문자열을 반환 합니다.

     navigator.globalization.getCurrencyPattern(currencyCode, successCallback, errorCallback);
    

## 설명

패턴을 반환 합니다에 `successCallback` 와 함께 한 `properties` 개체를 매개 변수로. 해당 개체에는 다음과 같은 속성이 포함 되어야 합니다.

*   **패턴**: 통화 패턴 서식을 지정 하 여 통화 값을 구문 분석 합니다. 패턴에 따라 유니코드 기술 표준 #35. <http://unicode.org/reports/tr35/tr35-4.html>. *(문자열)*

*   **코드**: ISO 4217 통화 코드 패턴. *(문자열)*

*   **분수**: 구문 분석 하 고 통화 서식을 사용 하 여 소수 자릿수의 수. *(수)*

*   **반올림**: 라운딩 때 구문 분석 및 서식 지정을 사용 하 여 증가 합니다. *(수)*

*   **10 진수**: 구문 분석 및 서식 지정에 사용할 소수점 기호가. *(문자열)*

*   **그룹화**: 구문 분석 및 서식 지정에 사용할 그룹화 기호. *(문자열)*

인바운드는 `currencyCode` 매개 변수 이어야 합니다는 `String` 의 ISO 4217 통화 코드, 예를 들어 '미화' 중 하나.

패턴을 얻는 오류가 발생 하는 경우는 `errorCallback` 로 실행 한 `GlobalizationError` 개체를 매개 변수로. 오류의 예상 된 코드는`GlobalizationError.FORMATTING\_ERROR`.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS

## 빠른 예제

브라우저 설정 된 경우에 `en\_US` 로캘 및 선택한 통화는 미국 달러,이 예제에서는 수행 결과를 유사한 텍스트와 팝업 대화 상자가 표시 됩니다:

    navigator.globalization.getCurrencyPattern(
        'USD',
        function (pattern) {
            alert('pattern: '  + pattern.pattern  + '\n' +
                  'code: '     + pattern.code     + '\n' +
                  'fraction: ' + pattern.fraction + '\n' +
                  'rounding: ' + pattern.rounding + '\n' +
                  'decimal: '  + pattern.decimal  + '\n' +
                  'grouping: ' + pattern.grouping);
        },
        function () { alert('Error getting pattern\n'); }
    );
    

예상된 결과:

    pattern: $#,##0.##;($#,##0.##)
    code: USD
    fraction: 2
    rounding: 0
    decimal: .
    grouping: ,
    

## 전체 예제

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getCurrencyPattern Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkPattern() {
          navigator.globalization.getCurrencyPattern(
            'USD',
            function (pattern) {alert('pattern: '  + pattern.pattern  + '\n' +
                                      'code: '     + pattern.code     + '\n' +
                                      'fraction: ' + pattern.fraction + '\n' +
                                      'rounding: ' + pattern.rounding + '\n' +
                                      'decimal: '  + pattern.decimal  + '\n' +
                                      'grouping: ' + pattern.grouping);},
            function () {alert('Error getting pattern\n');}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkPattern()">Click for pattern</button>
      </body>
    </html>