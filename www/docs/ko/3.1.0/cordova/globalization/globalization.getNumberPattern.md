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

# globalization.getNumberPattern

포맷 하 고 클라이언트의 사용자 환경 설정에 따라 숫자를 구문 분석할 패턴 문자열을 반환 합니다.

    navigator.globalization.getNumberPattern(successCallback, errorCallback, options);
    

## 설명

패턴을 반환 합니다에 `successCallback` 와 함께 한 `properties` 개체를 매개 변수로. 해당 개체에는 다음 속성이 포함 되어 있습니다.

*   **패턴**: 포맷 하 고 숫자를 구문 분석할 숫자 패턴. 패턴에 따라 유니코드 기술 표준 #35. <http://unicode.org/reports/tr35/tr35-4.html>. *(문자열)*

*   **기호**: 때 서식 지정 및 구문 분석, % 또는 통화 기호 등을 사용 하 여 기호. *(문자열)*

*   **분수**: 구문 분석 하 고 숫자 서식을 사용 하 여 소수 자릿수의 수. *(수)*

*   **반올림**: 라운딩 때 구문 분석 및 서식 지정을 사용 하 여 증가 합니다. *(수)*

*   **양수**: 양수 때 구문 분석 및 서식 지정에 사용할 기호. *(문자열)*

*   **음수**: 음수 때 구문 분석 및 서식 지정에 사용할 기호. *(문자열)*

*   **10 진수**: 구문 분석 및 서식 지정에 사용할 소수점 기호가. *(문자열)*

*   **그룹화**: 구문 분석 및 서식 지정에 사용할 그룹화 기호. *(문자열)*

패턴을 얻는 오류가 발생 하는 경우는 `errorCallback` 로 실행 한 `GlobalizationError` 개체를 매개 변수로. 오류의 예상 된 코드는`GlobalizationError.PATTERN\_ERROR`.

`options`매개 변수는 선택적 이며 기본값은:

    {유형: '10 진수'}
    

`options.type`수 있는 `decimal` , `percent` , 또는`currency`.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Windows Phone 8

## 빠른 예제

브라우저 설정 된 경우에 `en\_US` 로케일,이 수행 결과를 유사한 텍스트 팝업 대화 상자를 표시 합니다:

    navigator.globalization.getNumberPattern(
        function (pattern) {alert('pattern: '  + pattern.pattern  + '\n' +
                                  'symbol: '   + pattern.symbol   + '\n' +
                                  'fraction: ' + pattern.fraction + '\n' +
                                  'rounding: ' + pattern.rounding + '\n' +
                                  'positive: ' + pattern.positive + '\n' +
                                  'negative: ' + pattern.negative + '\n' +
                                  'decimal: '  + pattern.decimal  + '\n' +
                                  'grouping: ' + pattern.grouping);},
        function () {alert('Error getting pattern\n');},
        {type:'decimal'}
    );
    

결과:

    패턴: #, # # 0. # # # 기호:.
    분수: 0 반올림: 긍정적인 0: 음수:-10 진수:.
    그룹화:,
    

## 전체 예제

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getNumberPattern Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkPattern() {
          navigator.globalization.getNumberPattern(
            function (pattern) {alert('pattern: '  + pattern.pattern  + '\n' +
                                      'symbol: '   + pattern.symbol   + '\n' +
                                      'fraction: ' + pattern.fraction + '\n' +
                                      'rounding: ' + pattern.rounding + '\n' +
                                      'positive: ' + pattern.positive + '\n' +
                                      'negative: ' + pattern.negative + '\n' +
                                      'decimal: '  + pattern.decimal  + '\n' +
                                      'grouping: ' + pattern.grouping);},
            function () {alert('Error getting pattern\n');},
            {type:'decimal'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkPattern()">Click for pattern</button>
      </body>
    </html>
    

## Windows Phone 8 단점

*   `pattern`속성은 지원 되지 않습니다, 및 retuens는 빈 문자열.

*   `fraction`속성은 지원 되지 않습니다, 그리고 반환 0.