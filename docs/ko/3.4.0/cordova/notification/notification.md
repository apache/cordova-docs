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

# 알림

> 청취, 시각과 촉각 장치 알림입니다.

## 메서드

*   `notification.alert`
*   `notification.confirm`
*   `notification.prompt`
*   `notification.beep`
*   `notification.vibrate`

## 기능 액세스

버전 3.0, 코르도바 *플러그인*으로 장치 수준 Api를 구현합니다. CLI의 사용 `plugin` 명령 설명에 명령줄 인터페이스를 추가 하거나 프로젝트에 대 한이 기능을 제거 하려면:

        $ cordova plugin add org.apache.cordova.dialogs
        $ cordova plugin add org.apache.cordova.vibration
        $ cordova plugin ls
        [ 'org.apache.cordova.dialogs',
          'org.apache.cordova.vibration' ]
        $ cordova plugin rm org.apache.cordova.dialogs
        $ cordova plugin rm org.apache.cordova.vibration
    

이 명령은 모든 타겟된 플랫폼에 적용 하지만 플랫폼 관련 구성 설정을 아래에 설명 된 수정:

*   안 드 로이드
    
        (in app/res/xml/config.xml)
        <feature name="Notification">
            <param name="android-package" value="org.apache.cordova.Notification" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.VIBRATE" />
        

*   블랙베리 WebWorks
    
        (in www/plugins.xml)
        <feature name="Notification">
            <param name="blackberry-package" value="org.apache.cordova.notification.Notification" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.ui.dialog" />
        

*   (iOS`config.xml`)
    
        <feature name="Notification">
            <param name="ios-package" value="CDVNotification" />
        </feature>
        

일부 플랫폼은 특별 한 구성이 필요 없이이 기능을 지원할 수 있습니다. *플랫폼 지원* 개요 섹션에서을 참조 하십시오.