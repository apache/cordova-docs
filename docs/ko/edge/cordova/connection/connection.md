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

# 연결

> `connection`개체를 통해 노출 `navigator.connection` , 소자의 셀룰러와 와이파이 연결에 대 한 정보를 제공 합니다.

## 속성

*   connection.type

## 상수

*   Connection.UNKNOWN
*   Connection.ETHERNET
*   Connection.WIFI
*   Connection.CELL_2G
*   Connection.CELL_3G
*   Connection.CELL_4G
*   Connection.CELL
*   Connection.NONE

## 기능 액세스

버전 3.0, 코르도바 *플러그인*으로 장치 수준 Api를 구현합니다. CLI의 사용 `plugin` 명령 설명에 명령줄 인터페이스를 추가 하거나 프로젝트에 대 한이 기능을 제거 하려면:

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-network-information.git
        $ cordova plugin rm org.apache.cordova.core.network-information
    

이 명령은 모든 타겟된 플랫폼에 적용 하지만 플랫폼 관련 구성 설정을 아래에 설명 된 수정:

*   안 드 로이드
    
        (in app/res/xml/config.xml) < 기능 이름 "NetworkStatus" = >< param 이름을 "안 드 로이드 패키지" value="org.apache.cordova.NetworkManager =" / >< / 기능 > (app/AndroidManifest.xml)에서 < 사용 권한 android:name="android.permission.INTERNET" / >< 사용 권한 android:name="android.permission.ACCESS_NETWORK_STATE" / >< 사용 권한 android:name="android.permission.READ_PHONE_STATE" / >
        

*   블랙베리 WebWorks
    
        (in www/plugins.xml) < 기능 이름 = "네트워크 상태" >< param 이름을 "블랙베리 패키지" value="org.apache.cordova.network.Network =" / >< / 기능 >
        

*   (iOS`config.xml`)
    
        < 기능 이름 "NetworkStatus" = >< param 이름을 = "ios 패키지" 값 = "CDVConnection" / >< / 기능 >
        

*   (Windows Phone`Properties/WPAppManifest.xml`)
    
        < 기능 >< 기능 이름 = "ID_CAP_NETWORKING" / >< / 기능 >
        
    
    참고: [Windows Phone 대 한 응용 프로그램 매니페스트][1]

*   (Tizen`config.xml`)
    
        < 기능 이름 = "http://tizen.org/api/systeminfo" 필수 = "진정한" / >
        
    
    참조: [Tizen 웹 응용 프로그램에 대 한 응용 프로그램 매니페스트][2]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx
 [2]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

일부 플랫폼은 특별 한 구성이 필요 없이이 기능을 지원할 수 있습니다. 플랫폼 지원에 대 한 참조.