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

# globalization.getDatePattern

포맷 하 고 클라이언트의 사용자 환경 설정에 따라 날짜 구문 분석 패턴 문자열을 반환 합니다.

    navigator.globalization.getDatePattern(successCallback, errorCallback, options);
    

## 설명

패턴을 반환 합니다 `successCallback` . 매개 변수로 전달 된 개체에는 다음 속성이 포함 되어 있습니다.

*   **패턴**: 포맷 하 고 날짜를 구문 분석할 날짜 및 시간 패턴. 패턴에 따라 유니코드 기술 표준 #35. <http://unicode.org/reports/tr35/tr35-4.html>. *(문자열)*

*   **시간대**: 클라이언트에 표준 시간대의 약식된 이름. *(문자열)*

*   **utc_offset**: 클라이언트의 시간대와 세계시 간의 초에서 현재 차이. *(수)*

*   **dst_offset**: 클라이언트의 비 일광 절약 간격 (초)에 현재 일광 절약 시간제 오프셋의 시간대와 클라이언트의 일광 절약의 시간대. *(수)*

패턴을 얻는 오류가 발생 하는 경우는 `errorCallback` 로 실행 한 `GlobalizationError` 개체를 매개 변수로 합니다. 오류의 예상 된 코드는`GlobalizationError.PATTERN\_ERROR`.

`options`매개 변수는 선택적 이며 기본값은 다음 값:

    {formatLength: '짧은' 선택기: '날짜 및 시간'}
    

`options.formatLength`수 있는 `short` , `medium` , `long` , 또는 `full` . `options.selector`수 있는 `date` , `time` 또는`date and
time`.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Windows Phone 8

## 빠른 예제

브라우저 설정 된 경우에 `en\_US` 로캘,이 예제에서는 같은 텍스트와 함께 팝업 대화 상자를 표시 `pattern: M/d/yyyy h:mm a` :

    function checkDatePattern() {
        navigator.globalization.getDatePattern(
            function (date) { alert('pattern: ' + date.pattern + '\n'); },
            function () { alert('Error getting pattern\n'); },
            { formatLength: 'short', selector: 'date and time' }
        );
    }
    

## 전체 예제

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getDatePattern Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkDatePattern() {
          navigator.globalization.getDatePattern(
            function (date) {alert('pattern: ' + date.pattern + '\n');},
            function () {alert('Error getting pattern\n');},
            {formatLength:'short', selector:'date and time'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkDatePattern()">Click for pattern</button>
      </body>
    </html>
    

## Windows Phone 8 단점

*   `formatLength`만 지원 `short` 및 `full` 값.

*   `pattern`에 대 한 `date and time` 패턴 전체 datetime 형식만 반환 합니다.

*   `timezone`풀 타임 영역 이름을 반환 합니다.

*   `dst_offset`속성은 지원 되지 않으며 항상 반환 0.