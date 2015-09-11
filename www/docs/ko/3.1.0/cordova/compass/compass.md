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

# 나침반

> <a href="../device/device.html">장치</a> 가리키는 방향을 가져옵니다.

## 메서드

*   <a href="compass.getCurrentHeading.html">compass.getCurrentHeading</a>
*   <a href="compass.watchHeading.html">compass.watchHeading</a>
*   <a href="compass.clearWatch.html">compass.clearWatch</a>
*   <a href="<a href="compass.watchHeading.html">compass.watchHeading</a>Filter.html"><a href="compass.watchHeading.html">compass.watchHeading</a>Filter</a> (사용 되지 않음)
*   <a href="<a href="compass.clearWatch.html">compass.clearWatch</a>Filter.html"><a href="compass.clearWatch.html">compass.clearWatch</a>Filter</a> (사용 되지 않음)

## 인수

*   <a href="parameters/compassSuccess.html">compassSuccess</a>
*   <a href="parameters/compassError.html">compassError</a>
*   <a href="parameters/compassOptions.html">compassOptions</a>
*   <a href="parameters/compassHeading.html">compassHeading</a>

## 기능 액세스

버전 3.0, 코르도바 *플러그인*으로 <a href="../device/device.html">장치</a> 수준 Api를 구현합니다. CLI의 사용 `plugin` 명령 설명에 <a href="../../guide/cli/index.html">명령줄 인터페이스</a>를 추가 하거나 프로젝트에 대 한이 기능을 제거 하려면:

        $ cordova plugin add org.apache.cordova.device-orientation
        $ cordova plugin ls
        [ 'org.apache.cordova.device-orientation' ]
        $ cordova plugin rm org.apache.cordova.device-orientation
    

이 명령은 모든 타겟된 플랫폼에 적용 하지만 플랫폼 관련 구성 설정을 아래에 설명 된 수정:

*   (안 드 로이드`app/res/xml/config.xml`)
    
        < 기능 이름 "나침반" = >< param 이름을 "안 드 로이드 패키지" value="org.apache.cordova.CompassListener =" / >< / 기능 >
        

*   (iOS`config.xml`)
    
        <feature name="Compass">
            <param name="ios-package" value="CDVLocation" />
        </feature>
        

*   (Windows Phone`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_SENSORS" />
        </Capabilities>
        
    
    참고: [Windows Phone 대 한 응용 프로그램 매니페스트][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

일부 플랫폼은 특별 한 구성이 필요 없이이 기능을 지원할 수 있습니다. *플랫폼 지원* <a href="../../guide/overview/index.html">개요</a> 섹션에서을 참조 하십시오.