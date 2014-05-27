---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. 저작권에 대한 추가 정보를 보려면 NOTICE 파일을 보십시오. ASF는 이 파일을 아파치 라이센스 2.0 (이하 "라이센스") 하에 배포합니다. 라이센스에 허가되지 않은 용도로는 이 파일을 사용하실 수 없습니다. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# 아이콘 및 시작 화면

이 섹션에서는 응용 프로그램의 아이콘과 코르도바 CLI (명령줄 인터페이스에서 설명)에서 작업할 때 둘 다 다양 한 플랫폼에 대 한 선택적 스플래시 화면을 구성 하는 방법 (플랫폼 가이드에 자세히 설명) 플랫폼 SDK 도구를 사용 하 여 또는.

## CLI 구성 아이콘

CLI에서 작업할 때 아이콘 소스 파일은 프로젝트 내에서 다양 한 플랫폼 관련 하위 디렉터리 내에 있는 `www/res/icons` 디렉터리. 새로 만든된 프로젝트 대상으로 하고자 하는 플랫폼에 대 한 대체 수 코르 도우 바 아이콘의 기본 집합을 갖추고 있습니다.

안드로이드에서는 아이콘을 저해상도, 중간 해상도, 고해성도, 그리고 초고해상도로 나눕니다:

        android/icon-36-ldpi.png
        android/icon-48-mdpi.png
        android/icon-72-hdpi.png
        android/icon-96-xhdpi.png
    

IOS 플랫폼 iPads, 72 픽셀 사각형 아이콘을 지정 하 고 아이폰과 아이팟, 망막에 대 한 고해상도 *2 x* 변형 57 픽셀 아이콘 표시.

        ios/icon-57-2x.png
        ios/icon-57.png
        ios/icon-72-2x.png
        ios/icon-72.png
    

Windows Phone는 다음과 같은 다양 한 장치 배경 이미지 사용 하는 응용 프로그램을 나타내는 때 기와 함께 기본 48 픽셀 아이콘을 지정 합니다.

        windows-phone/icon-48.png
        windows-phone/icon-62-tile.png
        windows-phone/icon-173-tile.png
    

블랙베리 10 config.xml의 아이콘 요소를 필요로 합니다.

        <icon src="blackberry10/icon-86.png" />
    

여러 크기와 로케일 tareting 블랙베리의 설명서를 참조 하십시오.

[http://developer.blackberry.com/html5/documentation/icon_element.html]

Tizen은 128 픽셀 아이콘을 필요로합니다.

        tizen/icon-128.png
    

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
    

IOS 플랫폼 변형 망막 디스플레이 및 다른 방향에 대 한 아이폰/아이팟과 아이 패드에 대 한 이체를 지정합니다. *568 H* 파일 아이폰 5의 키가 화면에 적용 됩니다.

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

코르 도우 바에 제공 된 기본 시작 화면 이미지를 사용 하려는 경우에서 png 파일을 복사 해야 합니다 `platforms/android/www/res/screen/android` 에 `platforms/android/res/drawable*/` :

    cd platforms/android/res
    mkdir drawable-port-ldpi
    cp -p ../assets/www/res/screen/android/screen-ldpi-portrait.png drawable-port-ldpi/screen.png
    mkdir drawable-land-ldpi
    cp -p ../assets/www/res/screen/android/screen-ldpi-landscape.png drawable-land-ldpi/screen.png
    mkdir drawable-port-mdpi
    cp -p ../assets/www/res/screen/android/screen-mdpi-portrait.png drawable-port-mdpi/screen.png
    mkdir drawable-land-mdpi
    cp -p ../assets/www/res/screen/android/screen-mdpi-landscape.png drawable-land-mdpi/screen.png
    mkdir drawable-port-hdpi
    cp -p ../assets/www/res/screen/android/screen-hdpi-portrait.png drawable-port-hdpi/screen.png
    mkdir drawable-land-hdpi
    cp -p ../assets/www/res/screen/android/screen-hdpi-landscape.png drawable-land-hdpi/screen.png
    mkdir drawable-port-xhdpi
    cp -p ../assets/www/res/screen/android/screen-xhdpi-portrait.png drawable-port-xhdpi/screen.png
    mkdir drawable-land-xhdpi
    cp -p ../assets/www/res/screen/android/screen-xhdpi-landscape.png drawable-land-xhdpi/screen.png
    

`drawable`디렉터리 이름이 [화면 크기][2] 및 [대체 리소스][3] 를 지원 하기 위한 안 드 로이드 규칙에 따라 해야 합니다.

 [2]: http://developer.android.com/guide/practices/screens_support.html
 [3]: http://developer.android.com/guide/topics/resources/providing-resources.html#AlternativeResources

에 `config.xml` , 다음과 같은 환경 설정 추가:

    <preference name="SplashScreen" value="splash" />
    <preference name="SplashScreenDelay" value="10000" />
    

첫 줄 시작 화면으로 표시 하려면 이미지를 설정 합니다. 이것은에서 png 파일 이름에 `drawable*` 디렉터리. 만약 당신이 이름을 이미지 아무것도 아닌 다른 `splash.png` ,이 줄을 수정 해야 합니다. 파일 이름 확장명을 포함 하지 않습니다 (즉, `.png` ). 코르 도우 바 상기에 제공 된 기본 시작 화면을 사용 하려는 경우 값을 사용 하 여`screen`.

두 번째 줄에는 얼마나 오래는 splashscreen 밀리초에 나타납니다의 기본 지연을 설정 합니다. 이 최대 예상된 시작 시간 이어야 합니다. SplashScreenDelay의 기본값은 3000 석사.

마지막으로, 시작 화면이 있어야 존재만 필요한 만큼. 앱 시작 했다 webview 로드 되었을 때 기본 보기에 표시 됩니다 귀하의 응용 프로그램 시작 화면 숨길 해야. 여러 가지 요인으로 인해 응용 프로그램 시작 시간이 꽤 달라 집니다 때문에 좋습니다 당신의 app 명시적으로 호출 `navigator.splashscreen.hide()` 자바 메서드에 응답 하는 `deviceready` 이벤트. 그렇지 않으면 시작 화면 위에 구성 하는 SplashScreenDelay 값에 대 한 표시 됩니다. 이 이벤트 구동 방식은 대 표시 항상 고정된 기간 동안 시작 화면을가지고 것이 좋습니다.

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