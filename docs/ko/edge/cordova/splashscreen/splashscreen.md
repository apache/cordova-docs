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

# Splashscreen

> 표시 하 고 응용 프로그램의 시작 화면을 숨깁니다.

## 메서드

*   splashscreen.show
*   splashscreen.hide

## 기능 액세스

버전 3.0, 코르도바 *플러그인*으로 장치 수준 Api를 구현합니다. CLI의 사용 `plugin` 명령 설명에 명령줄 인터페이스를 추가 하거나 프로젝트에 대 한이 기능을 제거 하려면:

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-splashscreen.git
        $ cordova plugin rm org.apache.cordova.core.splashscreen
    

이 명령은 모든 타겟된 플랫폼에 적용 하지만 플랫폼 관련 구성 설정을 아래에 설명 된 수정:

*   (안 드 로이드`app/res/xml/config.xml`)
    
        < 기능 이름 "SplashScreen" = >< param 이름을 "안 드 로이드 패키지" value="org.apache.cordova.SplashScreen =" / >< / 기능 >
        

*   (iOS`config.xml`)
    
        < 기능 이름 "SplashScreen" = >< param 이름을 = "ios 패키지" 값 = "CDVSplashScreen" / >< / 기능 >
        

일부 플랫폼은 특별 한 구성이 필요 없이이 기능을 지원할 수 있습니다. 플랫폼 지원에 대 한 참조.

## 설치

### 안 드 로이드

1.  안 드 로이드 프로젝트의 시작 화면 이미지 복사 `res/drawable` 디렉터리. 각 이미지에 대 한 크기 이어야 합니다.

*   xlarge (xhdpi): 적어도 960 × 720
*   대형 (hdpi): 640 × 480 이상
*   매체 (mdpi): 적어도 470 × 320
*   작은 (ldpi): 적어도 426 × 320
    
    시작 화면에 대 한 [9 패치 이미지][1] 를 사용 해야 합니다.

 [1]: https://developer.android.com/tools/help/draw9patch.html

1.  에 `onCreate` 확장 클래스의 메서드 `DroidGap` , 다음 두 줄을 추가:
    
        super.setIntegerProperty ("splashscreen", R.drawable.splash);
        super.loadUrl(Config.getStartUrl(), 10000);
        
    
    첫 번째 줄에서 splashscreen으로 표시 하려면 이미지를 설정 합니다. 당신이 이름을 이미지 아무것도 이외의 경우 `splash.png` ,이 줄을 수정 해야 합니다. 두 번째 줄은 정상적인 `super.loadUrl` 선, 하지만 그것은 시작 화면에 대 한 시간 제한 값을 지정 하는 두 번째 매개 변수. 이 예제에서 시작 화면 10 초 동안 표시 됩니다. App 받게 되 면 스플래시 화면을 해제 하는 `deviceready` 이벤트, 전화는 `navigator.splashscreen.hide()` 방법.

### iOS

IOS 프로젝트에 스플래시 스크린 이미지를 복사 `Resources/splash` 디렉터리. 만 iPad 또는 아이폰 지원 장치에 대 한 이미지를 추가 합니다. 각 이미지의 크기 이어야 합니다.

*   Default-568h@2x~iphone.png (640 x 1136 픽셀)
*   Default-Landscape@2x~ipad.png (2048 x 1496 픽셀)
*   기본 Landscape~ipad.png (1024 × 748 픽셀)
*   Default-Portrait@2x~ipad.png (1536 x 2008 픽셀)
*   기본 Portrait~ipad.png (768 × 1004 픽셀)
*   Default@2x~iphone.png (640 x 960 픽셀)
*   Default~iphone.png (320 x 480 픽셀)