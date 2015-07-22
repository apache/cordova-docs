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

# 세계화

정보를 가져오고 사용자의 로캘 및 표준 시간대 관련 작업을 수행 합니다.

## 개체

*   GlobalizationError

## 메서드

*   globalization.getPreferredLanguage
*   globalization.getLocaleName
*   globalization.dateToString
*   globalization.stringToDate
*   globalization.getDatePattern
*   globalization.getDateNames
*   globalization.isDayLightSavingsTime
*   globalization.getFirstDayOfWeek
*   globalization.numberToString
*   globalization.stringToNumber
*   globalization.getNumberPattern
*   globalization.getCurrencyPattern

## 변수 범위

`globalization`개체의 자식 인지는 `navigator` 개체 및 따라서 전역 범위를 갖는.

    // The global globalization object
    var globalization = navigator.globalization;
    

## 기능 액세스

버전 3.0, 코르도바 *플러그인*으로 장치 수준 Api를 구현합니다. CLI의 사용 `plugin` 명령 설명에 명령줄 인터페이스를 추가 하거나 프로젝트에 대 한이 기능을 제거 하려면:

        $ cordova plugin add org.apache.cordova.globalization
        $ cordova plugin ls
        [ 'org.apache.cordova.globalization' ]
        $ cordova plugin rm org.apache.cordova.globalization
    

이 명령은 모든 타겟된 플랫폼에 적용 하지만 플랫폼 관련 구성 설정을 아래에 설명 된 수정:

*   (안 드 로이드`app/res/xml/config.xml`)
    
        <feature name="Globalization">
            <param name="android-package" value="org.apache.cordova.Globalization" />
        </feature>
        

일부 플랫폼은 특별 한 구성이 필요 없이이 기능을 지원할 수 있습니다. *플랫폼 지원* 개요 섹션에서을 참조 하십시오.