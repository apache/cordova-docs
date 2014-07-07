* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. 저작권에 대한 추가 정보를 보려면 NOTICE 파일을 보십시오. ASF는 이 파일을 아파치 라이센스 2.0 (이하 "라이센스") 하에 배포합니다. 라이센스에 허가되지 않은 용도로는 이 파일을 사용하실 수 없습니다. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# 아이콘 및 시작 화면

이 섹션에서는 응용 프로그램의 아이콘과 코르도바 CLI (명령줄 인터페이스에서 설명)에서 작업할 때 둘 다 다양 한 플랫폼에 대 한 선택적 스플래시 화면을 구성 하는 방법 (플랫폼 가이드에 자세히 설명) 플랫폼 SDK 도구를 사용 하 여 또는.

## CLI 구성 아이콘

CLI에서 근무를 통해 애플 리 케이 션 아이콘을 정의할 수 있습니다 때 `<icon>` 요소 ( `config.xml` ). 아이콘을 지정 하지 않으면 아파치 코르도바 로고 사용 됩니다.

        <icon src="res/ios/icon.png" platform="ios" width="57" height="57" density="mdpi" />
    

src: (필수) 이미지 파일을 프로젝트 디렉터리에 상대적인 위치를 지정 합니다

플랫폼: (선택 사항) 대상 플랫폼

폭: (선택 사항) 아이콘 너비 (픽셀)

높이: (선택 사항) 아이콘 높이 (픽셀)

밀도: 특정 일 (선택 사항) 안 드 로이드 아이콘 밀도 지정 합니다.

다음 구성은 모든 플랫폼에 사용할 수 있는 단일 기본 아이콘을 정의 하기 위해 사용할 수 있습니다.

        <icon src="res/icon.png" />
    

각 플랫폼에 대해 다른 화면 해상도 맞게 설정 픽셀 완벽 한 아이콘을 정의할 수 있습니다.

아마존 화재 운영 체제

         <platform name="amazon-fireos">
                  <icon src="res/android/ldpi.png" density="ldpi" />
                  <icon src="res/android/mdpi.png" density="mdpi" />
                  <icon src="res/android/hdpi.png" density="hdpi" />
                  <icon src="res/android/xhdpi.png" density="xhdpi" />
         </platform>
    

안 드 로이드

         <platform name="android">
                  <icon src="res/android/ldpi.png" density="ldpi" />
                  <icon src="res/android/mdpi.png" density="mdpi" />
                  <icon src="res/android/hdpi.png" density="hdpi" />
                  <icon src="res/android/xhdpi.png" density="xhdpi" />
         </platform>
    

Blackberry10

         <platform name="blackberry10">
                  <icon src="res/bb10/icon-86.png" />
                  <icon src="res/bb10/icon-150.png" />
         </platform>
    

여러 크기 및 로케일을 타겟팅에 대 한 블랙베리의 설명서를 참조 하십시오. [http://developer.blackberry.com/html5/documentation/icon_element.html]

Firefox 운영 체제

         <platform name="firefoxos">
                  <icon src="res/ff/logo.png" width="60" height="60" />
         </platform>
    

iOS

         <platform name="ios">
                  <!-- iOS 7.0+ -->
                  <!-- iPhone / iPod Touch  -->
                  <icon src="res/ios/icon-60.png" width="60" height="60" />
                  <icon src="res/ios/icon-60@2x.png" width="120" height="120" />
                  <!-- iPad -->
                  <icon src="res/ios/icon-76.png" width="76" height="76" />
                  <icon src="res/ios/icon-76@2x.png" width="152" height="152" />
                  <!-- iOS 6.1 -->
                  <!-- Spotlight Icon -->
                  <icon src="res/ios/icon-40.png" width="40" height="40" />
                  <icon src="res/ios/icon-40@2x.png" width="80" height="80" />
                  <!-- iPhone / iPod Touch -->
                  <icon src="res/ios/icon.png" width="57" height="57" />
                  <icon src="res/ios/icon@2x.png" width="114" height="114" />
                  <!-- iPad -->
                  <icon src="res/ios/icon-72.png" width="72" height="72" />
                  <icon src="res/ios/icon-72@2x.png" width="144" height="144" />
                  <!-- iPhone Spotlight and Settings Icon -->
                  <icon src="res/ios/icon-small.png" width="29" height="29" />
                  <icon src="res/ios/icon-small@2x.png" width="58" height="58" />
                  <!-- iPad Spotlight and Settings Icon -->
                  <icon src="res/ios/icon-50.png" width="50" height="50" />
                  <icon src="res/ios/icon-50@2x.png" width="100" height="100" />
         </platform>
    

Tizen

         <platform name="tizen">
                  <icon src="res/tizen/icon-128.png" width="128" height="128" />
         </platform>
    

윈도우 Phone8

         <platform name="wp8">
                  <icon src="res/wp/ApplicationIcon.png" width="99" height="99" />
                  <!-- tile image -->
                  <icon src="res/wp/Background.png" width="159" height="159" />
         </platform>
    

Windows8

         <platform name="windows8">
                  <icon src="res/windows8/logo.png" width="150" height="150" />
                  <icon src="res/windows8/smalllogo.png" width="30" height="30" />
                  <icon src="res/windows8/storelogo.png" width="50" height="50" />
         </platform>
    

## CLI에서 시작 화면을 구성

Splashscreen API를 사용 하 여 여러 플랫폼에서 애플 리 케이 션의 소개 시작 화면을 표시 하도록 설정 합니다. 시작 화면 소스 파일 프로젝트의 내 위치 하는 CLI에서 작업할 때 `www/res/screens` 하위 디렉터리.

안 드 로이드는 낮은, 중간, 높은, 매우 높은 해상도 대 한 두 초상화와 가로 중심 스플래시 스크린 이미지를 지정합니다.

        android/screen-hdpi-landscape.png
        android/screen-hdpi-portrait.png
        android/screen-ldpi-landscape.png
        android/screen-ldpi-portrait.png
        android/screen-mdpi-landscape.png
        android/screen-mdpi-portrait.png
        android/screen-xhdpi-landscape.png
        android/screen-xhdpi-portrait.png
    

IOS 플랫폼 변형 망막 디스플레이 및 다른 방향에 대 한 아이폰/아이팟과 아이 패드에 대 한 이체를 지정합니다. *568 h* 파일 아이폰 5의 키가 화면에 적용 됩니다.

        ios/screen-ipad-landscape-2x.png
        ios/screen-ipad-landscape.png
        ios/screen-ipad-portrait-2x.png
        ios/screen-ipad-portrait.png
        ios/screen-iphone-landscape-2x.png
        ios/screen-iphone-landscape.png
        ios/screen-iphone-portrait-2x.png
        ios/screen-iphone-portrait.png
        ios/screen-iphone-portrait-568h-2x.png
    

Windows Phone 단일 시작 화면 이미지를 지정합니다.

        windows-phone/screen-portrait.jpg
    

다음 섹션에서는 Sdk 및 관련된 명령줄 도구 플랫폼 가이드에서 설명 하는 경우 시작 화면을 설정 하는 방법을 자세히 설명.

사용 하기 전에 SplashScreen 플러그인을 설치 하는 것을 잊지 마세요는 `navigator.splashscreen.hide()` 또는 `navigator.splashscreen.show()` 방법.

## 안 드 로이드 플랫폼에 대 한 시작 화면

안 드 로이드 프로젝트에 [9 패치 이미지][1] 파일을 배치 `platforms/android/res/drawable*` 디렉터리.

 [1]: https://developer.android.com/tools/help/draw9patch.html

각각에 대 한 크기 이어야 합니다.

*   xlarge (xhdpi): 적어도 960 × 720
*   대형 (hdpi): 640 × 480 이상
*   매체 (mdpi): 적어도 470 × 320
*   작은 (ldpi): 적어도 426 × 320

새로운 안 드 로이드 프로젝트를 만들 때 기본 시작 화면 이미지는 코르도바에서 샘플 응용 프로그램 있어야 합니다에서 제공 하는 `platforms/android/res/drawable*` 디렉터리. 자유롭게 자신만 이미지와 이러한 대체. 자신의 스플래시 스크린 이미지를 제공 하는 경우에 코르도바 기본 것 들 여기로 8의 같은 순열의 제공 필요가 없습니다. 더 많거나 적은 최적화를 사용할 수 있습니다. `drawable`디렉터리 이름이 [화면 크기][2] 및 [대체 리소스][3] 를 지원 하기 위한 안 드 로이드 규칙에 따라 해야 합니다.

 [2]: http://developer.android.com/guide/practices/screens_support.html
 [3]: http://developer.android.com/guide/topics/resources/providing-resources.html#AlternativeResources

최상위 수준에서 `config.xml` 파일 (아니라 하나에 `platforms` ), 다음 기본 설정을 추가:

    <preference name="SplashScreen" value="screen" />
    <preference name="SplashScreenDelay" value="10000" />
    

첫 줄 시작 화면으로 표시 하려면 이미지를 설정 합니다. 이것은 파일 이름에 png의는 `drawable*` 디렉토리, 마이너스는 `.png` 확장. SplashScreen의 기본값은 `screen` (파일에 대 한 `platforms/android/res/drawable*/screen.png` ), 그래서 만약 당신이 이름을 이미지 아무것도 아닌 다른 `screen.png` 에 `drawable*` 이 줄을 추가/수정 해야 하는 디렉터리.

두 번째 줄에는 얼마나 오래는 splashscreen 밀리초에 나타납니다의 기본 지연을 설정 합니다. 이 최악의 예상된 시작 시간 이어야 합니다. SplashScreenDelay의 기본값은 3000 석사.

마지막으로, 가장 좋은 방법은 시작 화면 이어야 한다 현재만 필요한 만큼. 응용 프로그램 시작 때 webview 로드 된 앱 숨기 려 한다 시작 화면 준비가 되 자 마자 주요 보기 표시 됩니다. 응용 프로그램 시작 시간은 CPU 속도 네트워크와 같은 요인의 숫자로 인해 꽤 달라 집니다 때문에 것이 좋습니다 당신의 app 명시적으로 호출 `navigator.splashscreen.hide()` 자바 메서드에 응답 하는 `deviceready` 이벤트. 그렇지 않으면 시작 화면이 표시 됩니다 위에 구성 하는 SplashScreenDelay 값에 대 한 어떤은 가능성이 필요한 것 보다 더 이상. 이 이벤트 구동 방식은 대 표시 항상 고정된 기간 동안 시작 화면을가지고 것이 좋습니다.

## IOS 플랫폼에 대 한 시작 화면

IOS 프로젝트에 스플래시 스크린 이미지를 복사 `Resources/splash` 디렉터리. 만 iPad 또는 아이폰 지원 장치에 대 한 이미지를 추가 합니다. 각 이미지의 크기 이어야 합니다.

*   Default-568h@2x~iphone.png (640x1136 pixels)
*   Default-Landscape@2x~ipad.png (2048 x 1496 픽셀)
*   Default-Landscape~ipad.png (1024x748 pixels)
*   Default-Portrait@2x~ipad.png (1536x2008 pixels)
*   Default-Portrait~ipad.png (768x1004 pixels)
*   Default@2x~iphone.png (640x960 pixels)
*   Default~iphone.png (320x480 pixels)

## 블랙베리 10 플랫폼에 대 한 시작 화면

각 해상도 로캘 지원 하고자에 대해 config.xml에 변죽: 스플래시 요소를 추가:

[http://developer.blackberry.com/html5/documentation/rim\_splash\_element.html][4]

 [4]: http://developer.blackberry.com/html5/documentation/rim_splash_element.html