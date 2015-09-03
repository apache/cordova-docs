---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
---


# 장치

> `device`개체에서는 단말기의 하드웨어 및 소프트웨어에 설명 합니다.

## 속성

*   device.model
*   device.cordova
*   device.platform
*   device.uuid
*   device.version
*   device.name

## 변수 범위

이후 `device` 에 할당 되는 `window` , 그것은 암시적으로 전역 범위 개체.

    // These reference the same `device`
    var phoneModel = window.device.model;
    var phoneModel = device.model;
    

## 기능 액세스

버전 3.0, 코르도바 *플러그인*으로 장치 수준 Api를 구현합니다. CLI의 사용 `plugin` 명령 설명에 명령줄 인터페이스를 추가 하거나 프로젝트에 대 한이 기능을 제거 하려면:

        $ cordova plugin add org.apache.cordova.device
        $ cordova plugin ls
        [ 'org.apache.cordova.device' ]
        $ cordova plugin rm org.apache.cordova.device
    

이 명령은 모든 타겟된 플랫폼에 적용 하지만 플랫폼 관련 구성 설정을 아래에 설명 된 수정:

*   안 드 로이드
    
        (in app/res/xml/config.xml)
        <feature name="Device">
            <param name="android-package" value="org.apache.cordova.Device" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.READ_PHONE_STATE" />
        

*   블랙베리 WebWorks
    
        (in www/plugins.xml)
        <feature name="Device">
            <param name="blackberry-package" value="org.apache.cordova.device.Device" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.app" required="true" version="1.0.0.0" />
        <rim:permissions>
            <rim:permit>read_device_identifying_information</rim:permit>
        </rim:permissions>
        

*   (Windows Phone`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_WEBBROWSERCOMPONENT" />
            <Capability Name="ID_CAP_IDENTITY_DEVICE" />
            <Capability Name="ID_CAP_IDENTITY_USER" />
        </Capabilities>
        
    
    참고: [Windows Phone 대 한 응용 프로그램 매니페스트][1]

*   (Tizen`config.xml`)
    
        <feature name="http://tizen.org/api/systeminfo" required="true"/>
        
    
    참조: [Tizen 웹 응용 프로그램에 대 한 응용 프로그램 매니페스트][2]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx
 [2]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

일부 플랫폼은 특별 한 구성이 필요 없이이 기능을 지원할 수 있습니다. *플랫폼 지원* 개요 섹션에서을 참조 하십시오.


# device.name

**WARNING:** `device.name` is deprecated as of version 2.3.0. Use `device.model` instead.

장치의 모델 이름을 얻을.

    var string = device.name;
    

## 설명

`device.name`소자의 모델 또는 제품의 이름을 반환합니다. 이 값 장치 제조업체에서 설정 되 고 동일 제품의 버전 간에 다를 수 있습니다.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Tizen
*   Windows Phone 7과 8
*   윈도우 8

## 빠른 예제

    // Android:    Nexus One       returns "Passion" (Nexus One code name)
    //             Motorola Droid  returns "voles"
    // BlackBerry: Torch 9800      returns "9800"
    // iOS:     All devices     returns either "iPhone", "iPod Touch", "iPhone Simulator", "iPad", "iPad Simulator"
    //
    var name = device.name;
    

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
            element.innerHTML = 'Device Name: '     + device.name     + '<br />' +
                                'Device Model: '    + device.model    + '<br />' +
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

## Windows Phone 7, 8 특수

*   제조업체에서 지정 하는 장치 모델을 반환 합니다. 예를 들어 삼성 포커스를 반환 합니다.`SGH-i917`.

## Tizen 특수

*   예를 들어, 공급 업체에 의해 할당 된 디바이스 모델을 반환 합니다.`TIZEN`


# device.cordova

코르도바는 장치에서 실행 중인 버전을 얻을.

    var string = device.cordova;
    

## 설명

`device.cordova`코르도바는 장치에서 실행 중인 버전을 반환 합니다.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Tizen
*   Windows Phone 7과 8
*   윈도우 8

## 빠른 예제

    var name = device.cordova;
    

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


# device.platform

장치의 운영 체제 이름을 얻을.

    var string = device.platform;
    

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Tizen
*   Windows Phone 7과 8
*   윈도우 8

## 빠른 예제

    // Depending on the device, a few examples are:
    //   - "Android"
    //   - "BlackBerry"
    //   - "iOS"
    //   - "WinCE"
    //   - "Tizen"
    var devicePlatform = device.platform;
    

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
    

## 블랙베리 단점

장치는 플랫폼 이름 대신 장치 플랫폼 버전 번호를 반환할 수 있습니다. 예를 들어 Storm2 9550과 같은 값을 반환`2.13.0.95`.

## Windows Phone 7 단점

Windows Phone 7 장치 보고 플랫폼으로`WinCE`.

## Windows Phone 8 단점

Windows Phone 8 장치 보고 플랫폼으로`Win32NT`.


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


# device.version

운영 체제 버전을 얻을.

    var string = device.version;
    

## 지원 되는 플랫폼

*   안 드 로이드 2.1 +
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Tizen
*   Windows Phone 7과 8
*   윈도우 8

## 빠른 예제

    / / 안 드 로이드: Froyo OS "2.2" 반환 / Eclair OS "2.1", "2.0.1", 또는 "2.0" 돌려보낼 것입니다 / / 버전 반환할 수 있습니다 / 업데이트 수준 "2.1 update1" / / / / 블랙베리: 토치 9800 OS 6.0을 사용 하 여 "6.0.0.600"를 반환 / / / / 아이폰: iOS 3.2 반환 "3.2" / / / / Windows Phone 7: 전 현재 운영 체제 버전 번호를 반환 합니다. on Mango returns 7.10.7720
    // Tizen: returns "TIZEN_20120425_2"
    var deviceVersion = device.version;
    

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
