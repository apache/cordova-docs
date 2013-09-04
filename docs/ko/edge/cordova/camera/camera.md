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

# 카메라

> `camera`개체는 소자의 기본 카메라 응용 프로그램에 대 한 액세스를 제공 합니다.

**중요 한 개인 정보 보호 참고:** 수집 및 디바이스의 카메라에서 이미지를 사용 하 여 중요 한 개인 정보 보호 문제를 발생 시킵니다. 응용 프로그램의 개인 정보 보호 정책 app는 카메라를 사용 하는 방법 및 다른 당사자와 함께 기록 된 이미지는 공유 하는 여부를 토론 해야 한다. 또한, 카메라를 사용 하는 애플 리 케이 션의 사용자 인터페이스에서 명백 하지 않은, 당신의 애플 리 케이 션이 (해당 되는 경우 장치 운영 체제 이렇게 이미 하지 않는) 카메라에 액세스 하기 전에 그냥--시간 통지를 제공 해야 합니다. 그 통지는 (예를 들어, **확인** 및 **아니오**선택 제시) 하 여 사용자의 허가 취득 뿐만 아니라, 위에서 언급 된 동일한 정보를 제공 해야 합니다. 자세한 내용은 개인 정보 보호 가이드를 참조 하십시오.

## 메서드

*   camera.getPicture
*   camera.cleanup

## 기능 액세스

버전 3.0, 코르도바 *플러그인*으로 장치 수준 Api를 구현합니다. CLI의 사용 `plugin` 명령 설명에 명령줄 인터페이스를 추가 하거나 프로젝트에 대 한이 기능을 제거 하려면:

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-camera.git
        $ cordova plugin rm org.apache.cordova.core.camera
    

이 명령은 모든 타겟된 플랫폼에 적용 하지만 플랫폼 관련 구성 설정을 아래에 설명 된 수정:

*   안 드 로이드
    
        (in app/res/xml/config.xml) < 기능 이름 = "카메라" >< param 이름을 "안 드 로이드 패키지" value="org.apache.cordova.CameraLauncher =" / >< / 기능 > (애플 리 케이 션/AndroidManifest)에서 < 사용 권한 android:name="android.permission.WRITE_EXTERNAL_STORAGE" / >
        

*   블랙베리 WebWorks
    
        (in www/plugins.xml) < 기능 이름 = "카메라" >< param 이름을 "블랙베리 패키지" value="org.apache.cordova.camera.Camera =" / >< / 기능 > (www/config.xml)에서 < id="blackberry.media.camera 기능" / >< 변죽: 권한 >< 변죽: 허가 > use_camera < / 테두리: 허가 >< / 테두리: 권한 >
        

*   (iOS`config.xml`)
    
        < 기능 이름 = "카메라" >< param 이름을 = "ios 패키지" 값 = "CDVCamera" / >< / 기능 >
        

*   (Windows Phone`Properties/WPAppManifest.xml`)
    
        < 기능 >< 기능 이름 = "ID_CAP_ISV_CAMERA" / >< 기능 이름 = "ID_HW_FRONTCAMERA" / >< / 기능 >
        
    
    참고: [Windows Phone 대 한 응용 프로그램 매니페스트][1]

*   (Tizen`config.xml`)
    
        < 기능 이름 = "http://tizen.org/api/application" 필수 = "true" / >< 기능 이름 = "http://tizen.org/api/application.launch" 필수 = "true" / >
        
    
    참조: [Tizen 웹 응용 프로그램에 대 한 응용 프로그램 매니페스트][2]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx
 [2]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

일부 플랫폼은 특별 한 구성이 필요 없이이 기능을 지원할 수 있습니다. 플랫폼 지원에 대 한 참조.