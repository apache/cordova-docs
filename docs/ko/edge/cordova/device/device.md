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

# 장치

> `device`개체에서는 단말기의 하드웨어 및 소프트웨어에 설명 합니다.

## 속성

*   device.name
*   device.cordova
*   device.platform
*   device.uuid
*   device.version
*   device.model

## 변수 범위

이후 `device` 에 할당 되는 `window` , 그것은 암시적으로 전역 범위 개체.

    // These reference the same `device`
    var phoneName = window.device.name;
    var phoneName = device.name;
    

## 기능 액세스

버전 3.0, 코르도바 *플러그인*으로 장치 수준 Api를 구현합니다. CLI의 사용 `plugin` 명령 설명에 명령줄 인터페이스를 추가 하거나 프로젝트에 대 한이 기능을 제거 하려면:

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-device.git
        $ cordova plugin rm org.apache.cordova.core.device
    

이 명령은 모든 타겟된 플랫폼에 적용 하지만 플랫폼 관련 구성 설정을 아래에 설명 된 수정:

*   안 드 로이드
    
        (in app/res/xml/config.xml) < 기능 이름 = "장치" >< param 이름을 "안 드 로이드 패키지" value="org.apache.cordova.Device =" / >< / 기능 > (app/AndroidManifest.xml)에서 < 사용 권한 android:name="android.permission.READ_PHONE_STATE" / >
        

*   블랙베리 WebWorks
    
        (in www/plugins.xml) < 기능 이름 = "장치" >< param 이름을 "블랙베리 패키지" value="org.apache.cordova.device.Device =" / >< / 기능 > (www/config.xml)에서 < id="blackberry.app 기능" 필수 = "true" 버전 "1.0.0.0" = / >< 변죽: 권한 >< 변죽: 허가 > read_device_identifying_information < / 테두리: 허가 >< / 테두리: 권한 >
        

*   (Windows Phone`Properties/WPAppManifest.xml`)
    
        < 기능 >< 기능 이름 = "ID_CAP_WEBBROWSERCOMPONENT" / >< 기능 이름 = "ID_CAP_IDENTITY_DEVICE" / >< 기능 이름 = "ID_CAP_IDENTITY_USER" / >< / 기능 >
        
    
    참고: [Windows Phone 대 한 응용 프로그램 매니페스트][1]

*   (Tizen`config.xml`)
    
        < 기능 이름 = "http://tizen.org/api/systeminfo" 필수 = "진정한" / >
        
    
    참조: [Tizen 웹 응용 프로그램에 대 한 응용 프로그램 매니페스트][2]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx
 [2]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

일부 플랫폼은 특별 한 구성이 필요 없이이 기능을 지원할 수 있습니다. 플랫폼 지원에 대 한 참조.