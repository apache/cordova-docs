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

# globalization.dateToString

날짜를 반환 합니다 클라이언트의 로케일과 시간대에 따라 문자열로 서식이 지정 된.

    navigator.globalization.dateToString(date, successCallback, errorCallback, options);
    

## 설명

서식이 지정 된 날짜를 반환 합니다 `String` 통해는 `value` 개체에서 액세스할 수 있는 속성을 매개 변수로 전달 되는`successCallback`.

인바운드는 `date` 매개 변수 유형 이어야 합니다`Date`.

날짜 서식을 오류가 발생 하는 경우는 `errorCallback` 로 실행 한 `GlobalizationError` 개체를 매개 변수로. 오류의 예상 된 코드는`GlobalizationError.FORMATTING\_ERROR`.

`options`매개 변수는 선택적 이며 그것의 기본 값은:

    {formatLength: '짧은' 선택기: '날짜 및 시간'}
    

`options.formatLength`수 있는 `short` , `medium` , `long` , 또는`full`.

`options.selector`수 있는 `date` , `time` 또는`date and time`.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Windows Phone 8

## 빠른 예제

브라우저 설정 된 경우는 `en\_US` 로케일,이 텍스트에 유사한 팝업 대화 상자가 표시 됩니다 `date: 9/25/2012 4:21PM` 기본 옵션을 사용 하 여:

    navigator.globalization.dateToString(
        new Date(),
        function (date) { alert('date: ' + date.value + '\n'); },
        function () { alert('Error getting dateString\n'); },
        { formatLength: 'short', selector: 'date and time' }
    );
    

## 전체 예제

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>dateToString Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkDateString() {
          navigator.globalization.dateToString(
            new Date(),
            function (date) {alert('date: ' + date.value + '\n');},
            function () {alert('Error getting dateString\n');,
            {formatLength:'short', selector:'date and time'}}
          );
        }
        </script>
      </head>
      <body>
        <button onclick="checkDateString()">Click for date string</button>
      </body>
    </html>
    

## Windows Phone 8 단점

*   `formatLength`만 지원 옵션 `short` 및 `full` 값.