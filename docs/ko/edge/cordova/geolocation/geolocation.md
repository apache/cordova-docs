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

# 지리적 위치

> `geolocation`개체 데이터에 액세스할 위치 또는 장치의 GPS 센서를 기반으로 네트워크 신호에서 유추 합니다.

`Geolocation`위도 및 경도 등의 소자의 위치에 대 한 정보를 제공합니다. 일반적인 위치 정보 등 글로벌 포지셔닝 시스템 (GPS) 및 위치와 같은 IP 주소, RFID, WiFi 및 블루투스 MAC 주소 및 GSM/CDMA 셀 Id 네트워크 신호에서 유추 합니다. 보장은 없다는 API 소자의 실제 위치를 반환 합니다.

이 API [W3C Geolocation API 사양][1]에 기반 하 고 이미 구현을 제공 하지 않는 장치에만 실행 됩니다.

 [1]: http://dev.w3.org/geo/api/spec-source.html

**중요 한 개인 정보 보호 참고:** 위치 정보 데이터의 수집 및 사용 중요 한 개인 정보 보호 문제를 발생 시킵니다. 응용 프로그램의 개인 정보 보호 정책 다른 당사자와의 데이터 (예를 들어, 굵고, 괜 찮 아 요, 우편 번호, 등)의 정밀도 수준을 공유 여부를 app 지리적 데이터를 사용 하는 방법 토론 해야 한다. 그것은 사람의 행방을 밝힐 수 있기 때문에 및 저장, 그의 혹은 그녀의 여행의 역사 지리적 위치 데이터는 일반적으로 중요 한 간주. 따라서 응용 프로그램의 개인 정보 보호 정책 뿐만 아니라 강하게 해야 당신의 애플 리 케이 션이 (해당 되는 경우 장치 운영 체제는 이미 그래서를 하지 않습니다) 지리적 위치 데이터에 액세스 하기 전에 그냥--시간 통지. 그 통지는 (예를 들어, **확인** 및 **아니오**선택 제시) 하 여 사용자의 허가 취득 뿐만 아니라, 위에서 언급 된 동일한 정보를 제공 해야 합니다. 자세한 내용은 개인 정보 보호 가이드를 참조 하십시오.

## 메서드

*   geolocation.getCurrentPosition
*   geolocation.watchPosition
*   geolocation.clearWatch

## 인수

*   geolocationSuccess
*   geolocationError
*   geolocationOptions

## (읽기 전용) 개체

*   Position
*   PositionError
*   Coordinates

## 기능 액세스

버전 3.0, 코르도바 *플러그인*으로 장치 수준 Api를 구현합니다. CLI의 사용 `plugin` 명령 설명에 명령줄 인터페이스를 추가 하거나 프로젝트에 대 한이 기능을 제거 하려면:

        $ cordova plugin add org.apache.cordova.geolocation
        $ cordova plugin ls
        [ 'org.apache.cordova.geolocation' ]
        $ cordova plugin rm org.apache.cordova.geolocation
    

이 명령은 모든 타겟된 플랫폼에 적용 하지만 플랫폼 관련 구성 설정을 아래에 설명 된 수정:

*   안 드 로이드
    
        (in app/res/xml/config.xml)
        <feature name="Geolocation">
            <param name="android-package" value="org.apache.cordova.GeoBroker" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
        <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
        <uses-permission android:name="android.permission.ACCESS_LOCATION_EXTRA_COMMANDS" />
        

*   블랙베리 WebWorks
    
        (in www/plugins.xml)
        <feature name="Geolocation">
            <param name="blackberry-package" value="org.apache.cordova.geolocation.Geolocation" />
        </feature>
        
        (in www/config.xml)
        <rim:permissions>
            <rim:permit>read_geolocation</rim:permit>
        </rim:permissions>
        

*   (iOS`config.xml`)
    
        <feature name="Geolocation">
            <param name="ios-package" value="CDVLocation" />
        </feature>
        

*   (Windows Phone`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_LOCATION" />
        </Capabilities>
        
    
    참고: [Windows Phone 대 한 응용 프로그램 매니페스트][2]

 [2]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

일부 플랫폼은 특별 한 구성이 필요 없이이 기능을 지원할 수 있습니다. *플랫폼 지원* 개요 섹션에서을 참조 하십시오.