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

# globalization.isDayLightSavingsTime

일광 절약 시간이 클라이언트의 표준 시간대 및 달력을 사용 하 여 특정된 날짜에 대 한 효과 인지 표시 합니다.

    navigator.globalization.isDayLightSavingsTime(date, successCallback, errorCallback);
    

## 설명

나타냅니다 여부 일광 절약 시간 적용 하는 `successCallback` 와 `properties` 개체를 매개 변수로. 있어야 해당 개체는 `dst` 속성을 `Boolean` 값. A `true` 값 나타냅니다 일광 절약 시간이 특정된 날짜에 대해 적용 되 고 `false` 하지 않음을 나타냅니다.

인바운드 매개 변수는 `date` 형식 이어야 합니다`Date`.

날짜 읽기 오류가 발생 하는 경우 다음 `errorCallback` 를 실행 합니다. 오류의 예상 된 코드는`GlobalizationError.UNKNOWN\_ERROR`.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Windows Phone 8

## 빠른 예제

여름 동안에, 브라우저 DST 설정 표준 시간대로 설정 되어 있으면이 텍스트 비슷한 팝업 대화 상자를 표시 해야 하 고 `dst: true` :

    navigator.globalization.isDayLightSavingsTime(
        new Date(),
        function (date) {alert('dst: ' + date.dst + '\n');},
        function () {alert('Error getting names\n');}
    );
    

## 전체 예제

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>isDayLightSavingsTime Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkDayLightSavings() {
          navigator.globalization.isDayLightSavingsTime(
            new Date(),
            function (date) {alert('dst: ' + date.dst + '\n');},
            function () {alert('Error getting names\n');}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkDayLightSavings()">Click for daylight savings</button>
      </body>
    </html>