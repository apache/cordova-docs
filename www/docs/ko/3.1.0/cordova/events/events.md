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

title: 이벤트
---

# 이벤트

> 코르 도우 바 수명 주기 이벤트입니다.

## 이벤트 유형

*   [deviceready](events.deviceready.html)
*   [일시 중지](events.pause.html)
*   [이력서](events.resume.html)
*   [온라인](events.online.html)
*   [오프 라인](events.offline.html)
*   [backbutton](events.backbutton.html)
*   [batterycritical](events.batterycritical.html)
*   [batterylow](events.batterylow.html)
*   [batterystatus](events.batterystatus.html)
*   [menubutton](events.menubutton.html)
*   [searchbutton](events.searchbutton.html)
*   [startcallbutton](events.startcallbutton.html)
*   [endcallbutton](events.endcallbutton.html)
*   [volumedownbutton](events.volumedownbutton.html)
*   [volumeupbutton](events.volumeupbutton.html)

## 기능 액세스

버전 3.0, 코르도바 구현 배터리 상태 및 기타 [장치](../device/device.html) 수준 Api *플러그인*으로. 배터리 상태와 관련이 없는 다른 모든 이벤트에 대 한 액세스는 기본적으로 사용 됩니다. CLI의 사용 `plugin` 에 명령줄 인터페이스를 설정 하거나 해제 하려면 배터리 이벤트를 설명 하는 명령:

        $ cordova plugin add org.apache.cordova.battery-status
        $ cordova plugin ls
        [ 'org.apache.cordova.battery-status' ]
        $ cordova plugin rm org.apache.cordova.battery-status
    

이 명령은 모든 타겟된 플랫폼에 적용 하지만 플랫폼 관련 구성 설정을 아래에 설명 된 수정:

*   안 드 로이드
    
        (in app/res/xml/config.xml)
        <feature name="Battery">
            <param name="android-package" value="org.apache.cordova.BatteryListener" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.BROADCAST_STICKY" />
        

*   블랙베리 WebWorks
    
        (in www/plugins.xml)
        <feature name="Battery">
            <param name="blackberry-package" value="org.apache.cordova.battery.Battery" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.app"          required="true" version="1.0.0.0" />
        <feature id="blackberry.app.event"    required="true" version="1.0.0.0" />
        <feature id="blackberry.system.event" required="true" version="1.0.0.0" />
        

*   (iOS`config.xml`)
    
        <feature name="Battery">
            <param name="ios-package" value="CDVBattery" />
        </feature>
        

*   (Tizen`config.xml`)
    
        <feature name="http://tizen.org/api/systeminfo" required="true"/>
        
    
    참조: [Tizen 웹 응용 프로그램에 대 한 응용 프로그램 매니페스트][1]

 [1]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

일부 플랫폼은 특별 한 구성이 필요 없이이 기능을 지원할 수 있습니다. *플랫폼 지원* [개요](../../guide/overview/index.html) 섹션에서을 참조 하십시오.