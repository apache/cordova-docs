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

# globalization.stringToDate

클라이언트의 사용자 환경 설정 및 달력 클라이언트의 표준 시간대를 사용 하 여 문자열 형식으로 날짜를 구문 분석 하 고 해당 하는 date 개체를 반환 합니다.

    navigator.globalization.stringToDate(dateString, successCallback, errorCallback, options);
    

## 설명

날짜와 함께 성공 콜백 반환 된 `properties` 개체를 매개 변수로. 해당 개체는 다음 속성이 있어야 합니다.

*   **년**: 4 자리 연도. *(수)*

*   **달**: 달 (0-11). *(수)*

*   **주**: (1-31)에서 하루. *(수)*

*   **시간**: 1 시간 (0-23). *(수)*

*   **분**: 분 (0-59)에서. *(수)*

*   **두 번째**: (0-59)에서 두 번째. *(수)*

*   **밀리초**: 모든 플랫폼에서 사용할 수 없습니다 (0-999)에서 밀리초. *(수)*

인바운드는 `dateString` 매개 변수 유형 이어야 합니다`String`.

`options`매개 변수는 선택적 이며 기본값은 다음 값:

    {formatLength: '짧은' 선택기: '날짜 및 시간'}
    

`options.formatLength`수 있는 `short` , `medium` , `long` , 또는 `full` . `options.selector`수 있는 `date` , `time` 또는`date and
time`.

날짜 문자열을 구문 분석 오류가 발생 하는 경우는 `errorCallback` 로 실행 한 `GlobalizationError` 개체를 매개 변수로. 오류의 예상 된 코드는`GlobalizationError.PARSING\_ERROR`.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Windows Phone 8

## 빠른 예제

브라우저 설정 된 경우에 `en\_US` 로케일,이 텍스트에 유사한 팝업 대화 상자가 표시 됩니다 `month:8 day:25 year:2012` . 유의 정수는 한 달 미만의 문자열, 달 정수로 나타내는 배열 인덱스.

    navigator.globalization.stringToDate(
        '9/25/2012',
        function (date) {alert('month:' + date.month +
                               ' day:'  + date.day   +
                               ' year:' + date.year  + '\n');},
        function () {alert('Error getting date\n');},
        {selector: 'date'}
    );
    

## 전체 예제

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>stringToDate Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkStringDate() {
          navigator.globalization.stringToDate(
            '9/25/2012',
            function (date) {alert('month:' + date.month +
                                   ' day:' + date.day +
                                   ' year:' + date.year + '\n');},
            function () {alert('Error getting date\n');},
            {selector:'date'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkStringDate()">Click for parsed date</button>
      </body>
    </html>
    

## Windows Phone 8 단점

*   `formatLength`만 지원 옵션 `short` 및 `full` 값.