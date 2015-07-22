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

# device.uuid

소자의 보편적으로 고유 식별자 ([UUID][1] 를 얻을합니다).

 [1]: http://en.wikipedia.org/wiki/Universally_Unique_Identifier

    var string = device.uuid;
    

## 설명

UUID 생성 방법의 자세한 내용은 장치 제조업체에 의해 결정 됩니다 및 소자의 플랫폼 이나 모델.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Tizen
*   Windows Phone 7과 8
*   윈도우 8

## 빠른 예제

    / / 안 드 로이드: (문자열로 다시!) 임의의 64 비트 정수를 반환 합니다 / / 정수 장치의 첫 번째 부팅에서 생성 / / / / 블랙베리: 디바이스의 핀 번호를 반환 합니다 / / 이것은 9 자리 고유 정수 (문자열로 비록!) / / / / 아이폰: (UIDevice 클래스 설명서에서 읊 었) / / 문자열 여러 하드웨어에서 생성 하는 해시 값을 식별 하는 반환 합니다.
    / 그것은 모든 장치에 대 한 고유 해야 보장 되 고 묶일 수 없습니다 / / / 사용자 계정에.
    / / Windows Phone 7: 장치 + 현재 사용자의 해시를 반환 합니다 / / 사용자 정의 되지 않은 경우 guid 생성 되 고 응용 프로그램을 제거할 때까지 유지 됩니다 / / Tizen: 반환 장치 IMEI (국제 모바일 기기 식별 또는 IMEI 숫자입니다 / / 모든 GSM와 UMTS 휴대 전화 고유.
    var deviceID = device.uuid;
    

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
    

## iOS 특질

`uuid`ios 장치에 고유 하지 않습니다 하지만 각 설치에 대 한 응용 프로그램 마다 다릅니다. 삭제 하 고 다시 애플 리 케이 션을 설치 하는 경우 변경 가능 하 게 또한 iOS를 업그레이드 하거나 때 버전 (iOS 5.1에에서 명백한) 당 응용 프로그램 업그레이드도 하 고. `uuid`은 신뢰할 수 있는 값이 아닙니다.

## Windows Phone 7, 8 특수

`uuid`Windows Phone 7 필요 허가 `ID_CAP_IDENTITY_DEVICE` . Microsoft는 곧이 속성을 세웁니다 가능성이 것입니다. 기능을 사용할 수 없는 경우 응용 프로그램 장치에 응용 프로그램의 설치 하는 동안 유지 하는 영구 guid를 생성 합니다.