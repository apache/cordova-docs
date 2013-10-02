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

# device.model

장치의 모델 이름을 얻을.

    var string = device.model;
    

## 설명

`device.model`소자의 모델 또는 제품의 이름을 반환 합니다. 값 장치 제조업체에서 설정 되 고 동일 제품의 버전 간에 다를 수 있습니다.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Tizen
*   Windows Phone 7과 8
*   윈도우 8

## 빠른 예제

    / / 안 드 로이드: 넥서스 하나는 "열정" (넥서스 하나의 코드 이름)를 반환 합니다 / 모토로라 Droid 반환 "밭" / / / 블랙베리: 토치 9800 반환 "9800" / / iOS: iPad 미니, 반환 iPad2, 5; 아이폰 5 아이폰 5, 1 이다입니다. Http://theiphonewiki.com/wiki/index.php?title=Models 참조 / / var 모델 = device.model;
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            var element = document.getElementById('deviceProperties');
            element.innerHTML = 'Device Model: '    + device.model    + '<br />' +
                                'Device Cordova: '  + device.cordova  + '<br />' +
                                'Device Platform: ' + device.platform + '<br />' +
                                'Device UUID: '     + device.uuid     + '<br />' +
                                'Device Version: '  + device.version  + '<br />';
        }
    
        </script>
      </head>
      <body>
        <p id="deviceProperties">Loading device properties...</p>
      </body>
    </html>
    

## 안 드 로이드 단점

*   어떤은 종종 프로덕션 코드 이름 대신 [제품 모델 이름][1], [제품 이름][2] 을 가져옵니다. 예를 들어 넥서스 하나 반환 합니다 `Passion` , 모토로라 Droid를 반환 합니다`voles`.

 [1]: http://developer.android.com/reference/android/os/Build.html#MODEL
 [2]: http://developer.android.com/reference/android/os/Build.html#PRODUCT

## Tizen 특수

*   예를 들어, 공급 업체에 의해 할당 된 디바이스 모델을 반환 합니다.`TIZEN`

## Windows Phone 7, 8 특수

*   제조업체에서 지정 하는 장치 모델을 반환 합니다. 예를 들어 삼성 포커스를 반환 합니다.`SGH-i917`.