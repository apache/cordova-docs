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

# 명령줄 인터페이스

이 가이드에서는 응용 프로그램을 만들고 사용 하 여 다양 한 네이티브 모바일 플랫폼에 배포 하는 방법에 `cordova` 명령줄 인터페이스 (CLI). 이 도구를 사용 하면 새 프로젝트를 만들 다른 플랫폼에서 그들을 구축 하 고 실제 장치 또는 에뮬레이터 내에서 실행할 수 있습니다. CLI는 교차 플랫폼 워크플로우를 사용 하는 주요 도구 (다양 한 워크플로 대 한 개요를 참조 하십시오.) 그러나, 초기화 후 사용 다양 한 플랫폼 Sdk 및 셸 도구 지속적인된 개발을 위한 프로젝트 코드는 CLI를 사용할 수 있습니다.

## 필수 구성 요소

모든 명령줄 도구를 실행 하기 전에 대상 하려는 각 플랫폼 Sdk를 설치 해야 합니다. (자세한 내용은 플랫폼 가이드를 참조 하십시오.)

지원을 추가 하거나 모든 플랫폼에 대 한 프로젝트를 다시 작성, 명령줄 인터페이스 플랫폼의 SDK를 지 원하는 동일한 컴퓨터에서 실행 해야 합니다. CLI에서는 다음 조합을 지원합니다.

*   iOS (Mac)
*   아마존 화재 OS (맥, 리눅스, 윈도우)
*   안 드 로이드 (맥, 리눅스)
*   블랙베리 10 (맥, 리눅스, 윈도우)
*   Windows Phone 7 (윈도 즈)
*   Windows Phone 8 (Windows)
*   윈도우 8 (Windows)
*   파이어 폭스 OS (맥, 리눅스, 윈도우)

Mac에서는 명령줄 *터미널* 응용 프로그램을 통해 제공 됩니다. Pc, 그것은 가능한 *액세서리* 아래 *명령 프롬프트*.

확률이 더 높다 그것이 실행 하는 CLI 다른 컴퓨터에서 로컬 작업 디렉토리에 풀 다운 자산이 원격 소스 코드 저장소를 유지 하는 것이 의미가 한 더.

설치 하는 `cordova` 명령줄 도구 이러한 단계를 수행 하십시오:

1.  다운로드 및 [Node.js][1]를 설치. 설치, 다음 호출 할 수 있어야 `node` 또는 `npm` 커맨드 라인에.

2.  설치는 `cordova` 유틸리티. Unix에서 추가로 붙여 `sudo` 명령을 개발 유틸리티를 설치 해야 할 수 있습니다에서 그렇지 않으면 디렉터리 제한:

        $ sudo npm install -g cordova


    설치 로그는 모든 제거 플랫폼 Sdk에 대 한 오류를 생성할 수 있습니다. 설치, 다음 실행 할 수 있어야 `cordova` 커맨드 라인에.

    **참고**:는 `-g` 플래그 위의 고궁 cordova를 세계적으로 설치 하 게 합니다. 세계적으로 호출 하려면 경로를 고궁 박물원 디렉터리 설치 npm 모듈을 추가 해야 할 수도 있습니다. Windows에서 고궁 박물원 보통에서 찾을 수 있습니다 `C:\Users\username\AppData\Roaming\npm` 에서 유닉스에`/usr/local/share/npm`.

 [1]: http://nodejs.org/

## 응용 프로그램 만들기

소스 코드를 관리할 수 있는 디렉토리에가 고 다음과 같은 명령을 실행:

        $ cordova create hello com.example.hello HelloWorld


그것은 시간이 좀 걸릴 수 있습니다를 완료 하려면 명령에 대 한 그래서 인내심. 와 함께 명령을 실행 된 `-d` 옵션 진행 상황에 대 한 정보를 표시 합니다.

첫 번째 인수 *안녕하세요* 프로젝트 생성 될 디렉터리를 지정 합니다. 이 디렉토리가 이미 존재 하지 해야 합니다, 그리고 코르 도우 바 당신을 위해 그것을 만들 것입니다. 그것의 `www` 하위 디렉터리 응용 프로그램의 홈 페이지에서 다양 한 리소스와 함께 하우스 `css` , `js` , 및 `img` 는 일반적인 웹 개발 파일 명명 규칙을 따릅니다. `config.xml`파일을 생성 하 고 응용 프로그램을 배포 하는 데 필요한 중요 한 메타 데이터를 포함 합니다.

두 번째 인수 `com.example.hello` 역방향 도메인 스타일 식별자와 함께 프로젝트를 제공 합니다. 이 인수는 선택 사항 이지만 이후 인수는 위치 세 번째 인수를 또한 생략 하는 경우에. 이 값 나중에 편집할 수 있는 `config.xml` 파일, 하지만 밖에 서 생성 되는 코드가 있을 수 있습니다 알고 있어야 할 `config.xml` 자바 패키지 이름 등이 값을 사용 하 여. 기본값은 `io.cordova.hellocordova` , 하지만 적절 한 값을 선택 하는 것이 좋습니다.

세 번째 인수 `HelloWorld` 응용 프로그램의 디스플레이 타이틀을 제공 합니다. 이 인수는 선택 사항입니다. 이 값 나중에 편집할 수 있는 `config.xml` 파일, 하지만 밖에 서 생성 되는 코드가 있을 수 있습니다 알고 있어야 할 `config.xml` Java 클래스 이름 등이 값을 사용 하 여. 기본값은 `HelloCordova` , 하지만 적절 한 값을 선택 하는 것이 좋습니다.

## 플랫폼 추가

모든 후속 명령 프로젝트의 디렉터리 또는 해당 범위 내에서 모든 하위 디렉터리 내에서 실행 해야 합니다.

        $ cd hello


프로젝트를 작성할 수 전에 대상 플랫폼의 집합을 지정 해야 합니다. 이러한 명령을 실행 하는 능력 컴퓨터 각 SDK를 지원 하는지 여부에 따라 달라 집니다 그리고 여부 당신은 이미 각 SDK 설치. Mac에서이 중 하나를 실행 합니다.

        $ cordova platform add ios
        $ cordova platform add amazon-fireos
        $ cordova platform add android
        $ cordova platform add blackberry10
        $ cordova platform add firefoxos


Windows 시스템에서 이러한 실행 *wp* Windows Phone 운영 체제의 다른 버전을 말합니다.

        $ cordova platform add wp7
        $ cordova platform add wp8
        $ cordova platform add windows8
        $ cordova platform add amazon-fireos
        $ cordova platform add android
        $ cordova platform add blackberry10
        $ cordova platform add firefoxos


이 플랫폼의 현재 집합을 확인 하려면 실행:

        $ cordova platforms ls


(참고는 `platform` 및 `platforms` 명령을 동의어로 사용 됩니다.)

플랫폼을 제거 하려면 다음 동의어 명령 중 하나를 실행 합니다.

        $ cordova platform remove blackberry10
        $ cordova platform rm amazon-fireos
        $ cordova platform rm android


각 지정 된 플랫폼 하위 나타나는 추가 하거나 플랫폼에 영향을 미치는 프로젝트의 *플랫폼* 디렉터리의 내용을 제거 하려면 명령을 실행 합니다. *Www* 소스 디렉토리에 예를 들면 나타나는 각 플랫폼의 하위 디렉터리 내에서 재현 `platforms/ios/www` 또는 `platforms/android/assets/www` . CLI는 끊임없이 소스 *www* 폴더에서 파일 복사, 때문에 이러한 파일 및 하지 *플랫폼* 하위 디렉터리 아래에 있는 것 들만 수정 해야 합니다. 버전 제어 소프트웨어를 사용 하는 경우 버전 제어 시스템에 *병합* 폴더와 함께이 소스 *www* 폴더를 추가 해야 합니다. ( *병합* 폴더에 대 한 자세한 정보는 아래의 각 플랫폼 사용자 지정 섹션에서 찾을 수 있습니다.)

**경고**:에서 어떤 파일을 편집 해서는 안 하는 CLI를 사용 하 여 응용 프로그램 빌드를 경우는 `/platforms/` 폴더 하 고 또는 설명서에서 그렇지 않으면 라고 구체적으로 알지 못한다. 이 때문에 파일에는 `/platforms/` direcotry 덮어씁니다에 준비 또는 플러그인 재설치.

이 시점에서 바라는 경우에 만든 프로젝트를 열려면 이클립스 등 Xcode SDK를 사용할 수 있습니다. 자산에서 파생 상품 집합을 열어야 할 것 이다는 `/platforms/` 디렉터리는 SDK와 함께 개발 하는 것. 이것은 SDK 특정 메타 데이터 파일은 적절 한 저장 때문에 `/platform/` 하위 디렉터리. (각 IDE 내에서 응용 프로그램을 개발 하는 방법에 대 한 내용은 플랫폼 가이드를 참조 하십시오.) 단순히 CLI를 사용 하 여 프로젝트를 초기화 한 다음 기본 작업에 대 한 SDK를 전환 하려면이 방법을 사용 합니다.

전체 개발 주기에 대 한 교차 플랫폼 워크플로우 접근 (CLI)를 사용 하고자 하는 경우에 읽기.

## 응용 프로그램 빌드

기본적으로는 `cordova create` 스크립트 생성 하는 골격 웹 기반 응용 프로그램의 홈 페이지는 프로젝트의 `www/index.html` 파일. 그러나 있지만, 모든 초기화의 일부로 지정 해야 합니다이 응용 프로그램을 편집 된 `deviceready` 이벤트 처리기에서 기본적으로 참조`www/js/index.js`.

반복적으로 프로젝트를 빌드하려면 다음 명령을 실행:

        $ cordova build


프로젝트 내에서 플랫폼 전용 코드를 생성 하는이 `platforms` 하위 디렉터리. 필요에 따라 특정 플랫폼에 각 빌드 범위를 제한할 수 있습니다.

        $ cordova build ios


`cordova build`명령 또한 단일 플랫폼을 대상으로 다음이이 예제에서에 대 한 속기 이다:

        $ cordova prepare ios
        $ cordova compile ios


이 경우에, 한 번 실행 `prepare` , 수정 하 고 코르 도우 바 내에서 생성 하는 플랫폼별 코드 컴파일 대신 애플의 Xcode SDK를 사용할 수 있습니다 `platforms/ios` . 다른 플랫폼의 Sdk와 동일한 접근 방식을 사용할 수 있습니다.

## 에뮬레이터 또는 장치에 대해 응용 프로그램 테스트

모바일 플랫폼을 위한 Sdk는 자주 홈 화면에서 응용 프로그램을 실행 하 고 많은 플랫폼 기능과 상호 작용 하는 방법을 볼 수 있도록 장치 이미지를 실행 하는 에뮬레이터와 함께 번들로 가자. 응용 프로그램을 다시 작성 하 고 특정 플랫폼의 에뮬레이터 내에서 보기에 다음과 같은 명령을 실행 합니다.

        $ cordova emulate android


일부 모바일 플랫폼 아이폰 iOS 프로젝트 등 기본적으로 특정 장치를 에뮬레이션할. 다른 플랫폼을 위해 에뮬레이터와 장치를 처음 연결할 할 수 있습니다.

참고: 에뮬레이터 지원은 현재 사용할 수 없습니다 아마존 화재 운영 체제

(자세한 내용은 플랫폼 가이드를 참조 하십시오.) 예를 들어, 당신이 먼저 실행에 `android` 명령을 실행 안 드 로이드 SDK 다음 그것의 기본 동작에 따라 시작 특정 장치 이미지를 실행:

![][2]

 [2]: {{ site.baseurl }}/static/img/guide/cli/android_emulate_init.png

함께 위로 다음는 `cordova emulate` 명령 에뮬레이터 이미지 홈 화면에서 실행을 위해 사용할 수 있는 최신 응용 프로그램 표시를 새로 고칩니다.

![][3]

 [3]: {{ site.baseurl }}/static/img/guide/cli/android_emulate_install.png

또는 당신의 컴퓨터에 휴대폰을 연결 하 고 직접 응용 프로그램을 테스트:

        $ cordova run android


이 명령을 실행 하기 전에 해야 테스트를 위한 장치를 설정 하려면 다음 절차를 각 플랫폼 마다 다릅니다. 안 드 로이드와 아마존 화재 OS 장치에서 장치에서 **USB 디버깅** 옵션을 사용 하 여 아마도 개발 environmnent에 따라 USB 드라이버를 추가 했. 각 플랫폼의 요구 사항에 대 한 내용은 플랫폼 가이드를 참조 하십시오.

## 플러그인 기능 추가

구축 하 고 새로운 프로젝트를 볼 때 표시 되는 기본 응용 프로그램 매우 많이 하지 않습니다. 표준 웹 기술을 활용 하기 위해 여러 가지에서 응용 프로그램을 수정할 수 있습니다 하지만 다양 한 장치 수준의 기능을 밀접 하 게 의사 소통을 위해 애플 리 케이 션에 대 한 핵심 코르도바 Api에 대 한 액세스를 제공 하는 플러그인을 추가 해야 합니다.

*플러그인* 은 네이티브 구성 요소에 대 한 인터페이스를 제공 하는 부가 기능 코드의 조금 이다. 예를 들어 기본 구성 요소와 코르도바 WebView를 혼합 하이브리드 앱을 디자인할 때 자신의 플러그인 인터페이스를 디자인할 수 있습니다. (포함 WebViews 및 플러그인 개발 가이드 자세한 참조.) 더 일반적으로, API 참조에 대 한 자세한 코르도바의 기본 장치 수준 기능 중 하나를 사용 하는 플러그인을 추가할 것입니다. [Plugins.cordova.io][4]에 커뮤니티에서 제공 하는 추가 플러그인을 포함 하 여이 플러그인의 목록을 찾을 수 있습니다. CLI를 사용 하 여이 레지스트리에서 플러그인에 대 한 검색 수 있습니다. 예를 들어 검색 `bar` 와 `code` 두 용어 모두 소문자 부분으로 일치 하는 단일 결과 생성:

 [4]: http://plugins.cordova.io/

        $ cordova plugin search bar code

        com.phonegap.plugins.barcodescanner - Scans Barcodes


만 찾고 있는 `bar` 수확량 및 추가적인 결과:

        org.apache.cordova.statusbar - Cordova StatusBar Plugin


`cordova plugin add`명령 코드를 플러그인에 대 한 저장소를 지정 해야 합니다. 제발 note는 웹 프로젝트 개발 워크플로에 따라 CLI를 사용 하 여 때 CLI는 알아서 각 플랫폼에 대 한 적절 한 장소에 플러그인 코드를 추가 합니다. (네이티브 프로젝트 개발 워크플로 다음과 같은 경우 각 플랫폼에 대 한 Plugman (가이드 링크는 여기), 여러 번 사용 하는 플러그인을 추가 해야 합니다.)

여기에 응용 프로그램에 기능을 추가 하는 CLI를 사용 하는 방법을 예입니다.

*   기본 장치 정보 (장치 API):

        $ cordova plugin add org.apache.cordova.device


*   네트워크 연결 및 배터리 이벤트:

        $ cordova plugin add org.apache.cordova.network-information
        $ cordova plugin add org.apache.cordova.battery-status


*   가 속도계, 나침반, 및 지리적 위치:

        $ cordova plugin add org.apache.cordova.device-motion
        $ cordova plugin add org.apache.cordova.device-orientation
        $ cordova plugin add org.apache.cordova.geolocation


*   카메라, 미디어 재생 및 캡처:

        $ cordova plugin add org.apache.cordova.camera
        $ cordova plugin add org.apache.cordova.media-capture
        $ cordova plugin add org.apache.cordova.media


*   장치 또는 네트워크 (파일 API) 액세스 파일:

        $ cordova plugin add org.apache.cordova.file
        $ cordova plugin add org.apache.cordova.file-transfer


*   대화 상자 또는 진동 알림:

        $ cordova plugin add org.apache.cordova.dialogs
        $ cordova plugin add org.apache.cordova.vibration


*   연락처:

        $ cordova plugin add org.apache.cordova.contacts


*   세계화:

        $ cordova plugin add org.apache.cordova.globalization


*   Splashscreen:

        $ cordova plugin add org.apache.cordova.splashscreen


*   새로운 브라우저 윈도우 열기 (InAppBrowser):

        $ cordova plugin add org.apache.cordova.inappbrowser


*   콘솔 디버깅:

        $ cordova plugin add org.apache.cordova.console


사용 `plugin ls` (또는 `plugin list` , 또는 `plugin` 자체) 현재 보려면 플러그인을 설치 합니다. 각 식별자에 의해 표시 됩니다.

        $ cordova plugin ls    # or 'plugin list'
        [ 'org.apache.cordova.console' ]


플러그인을 제거 하려면 목록에서 나타나는 같은 식별자로 그것을 참조 하십시오. 예를 들어, 여기에 어떻게 릴리스 버전에서 디버그 콘솔에 대 한 지원을 제거할 것입니다.

        $ cordova plugin rm org.apache.cordova.console
        $ cordova plugin remove org.apache.cordova.console    # same


일괄 제거 하거나 수 있습니다 각 명령에 대 한 하나 이상의 인수를 지정 하 여 플러그인을 추가:

        $ cordova plugin add org.apache.cordova.console org.apache.cordova.device


## 고급 플러그인 옵션

플러그인을 추가 하는 경우 몇 가지 옵션 사용 플러그인 가져오기 위하여 어디에서 지정할 수 있습니다. 위의 예제를 사용 하 여 잘 알려진 `registry.cordova.io` 레지스트리 및 플러그인에 의해 지정 된 `id` :

        $ cordova plugin add org.apache.cordova.console


`id`후 추가 하는 플러그인의 버전 번호를 포함할 수도 있습니다는 `@` 문자. `latest`버전은 최신 버전에 대 한 별칭. 예를 들어:

        $ cordova plugin add org.apache.cordova.console@latest
        $ cordova plugin add org.apache.cordova.console@0.2.1


플러그인에 등록 되지 않은 경우 `registry.cordova.io` 은 없지만 다른 git 저장소에 다른 URL을 지정할 수 있습니다:

        $ cordova plugin add https://github.com/apache/cordova-plugin-console.git


위의 git 예제 마스터 분기의 끝에서 플러그인을 인출 하지만 태그 또는 분기와 같은 대체 git ref 후 추가 될 수 있는 `#` 문자:

        $ cordova plugin add https://github.com/apache/cordova-plugin-console.git#r0.2.0


경우 플러그인 (및 그것의 `plugin.xml` 파일)은 내 자식 repo 서브 디렉토리에서 그것을 지정할 수 있습니다 한 `:` 문자. 참고는 `#` 문자 여전히 필요:

        $ cordova plugin add https://github.com/someone/aplugin.git#:/my/sub/dir


또한 git ref 및 하위 디렉터리를 결합할 수 있습니다.

        $ cordova plugin add https://github.com/someone/aplugin.git#r0.0.1:/my/sub/dir


또는 로컬 경로 포함 하는 플러그인 디렉토리를 지정할는 `plugin.xml` 파일:

        $ cordova plugin add ../my_plugin_dir


## 각 플랫폼 사용자 지정 *병합* 을 사용 하 여

코르도바를 사용 하면 쉽게 많은 다른 플랫폼을 위한 애플 리 케이 션을 배포할 수 있습니다, 하는 동안 때로는 사용자를 추가 해야 합니다. 이 경우, 다양 한 소스 파일을 수정 하 고 싶지 `www` 최상위 디렉터리만 `platforms` 디렉토리, 그들은 정기적으로 최상위로 대체 야 하기 때문에 `www` 디렉토리의 크로스 플랫폼 소스.

대신, 최상위 `merges` 디렉터리 특정 플랫폼에 배포 하기 위해 자산을 지정 하는 장소를 제공 합니다. 각 플랫폼 관련 하위 디렉터리 내에서 `merges` 거울의 디렉토리 구조는 `www` 소스 트리를 무시 하거나 필요에 따라 파일을 추가할 수 있습니다. 예를 들어, 여기 어떻게 사용 하는 수도 `merges` 안 드 로이드와 아마존 화재 OS 장치에 대 한 기본 글꼴 크기를 밀어 주기 위하여:

*   편집은 `www/index.html` 추가 CSS 파일에 링크를 추가 하는 파일 `overrides.css` 이 경우:

        <link rel="stylesheet" type="text/css" href="css/overrides.css" />


*   필요에 따라 빈 만들 `www/css/overrides.css` 파일, 누락 된 파일 오류를 방지 하는 모든 비-안 드 로이드 빌드를 신청할 것 이다.

*   만들기는 `css` 하위 디렉터리 내에서 `merges/android` , 해당 추가 `overrides.css` 파일. 내 지정 12 포인트 기본 글꼴 크기를 재정의 하는 CSS를 지정 `www/css/index.css` , 예를 들면:

        body { font-size:14px; }


프로젝트를 다시 작성 하면 안 드 로이드 버전 다른 그대로 유지 하는 동안 사용자 지정 글꼴 크기를 갖추고 있습니다.

또한 사용할 수 있습니다 `merges` 파일 원본에 존재 하지 추가할 `www` 디렉터리. 예를 들어, 애플 리 케이 션에 통합할 수 있는 *버튼을 다시* 그래픽 iOS 인터페이스에 저장 `merges/ios/img/back_button.png` , 안 드 로이드 버전 대신 캡처할 수 있습니다 하는 동안 `backbutton` 이벤트는 해당 하는 하드웨어 단추를.

## 도움말 명령

코르 도우 바 갇 하거나 문제가 발생할 경우 도움이 될 수 있는 글로벌 명령 몇을 갖추고 있습니다. `help`명령은 표시 모든 사용 가능한 코르도바 명령 및 구문:

    $ cordova help
    $ cordova        # same


`info`명령은 현재 설치 된 플랫폼, 플러그인, 각 플랫폼을 위한 SDK 버전 및 cli 버전 같은 잠재적으로 유용한 정보의 목록을 생성 하 고 `node.js` :

    $ cordova info


그것은 모두 화면에 정보를 제공 및 로컬에서 출력을 캡처 `info.txt` 파일.

**참고**: 현재, iOS 및 안 드 로이드 플랫폼에만 내용을 사용할 수 있습니다.

## 코르 도우 바 및 프로젝트 업데이트

설치한 후에 `cordova` 유틸리티를 업데이트할 수 있습니다 항상 그것 최신 버전을 다음 명령을 실행 하 여:

        $ sudo npm update -g cordova


이 구문을 사용 하 여 특정 버전을 설치.

        $ sudo npm install -g cordova@3.1.0-0.2.0


실행 `cordova -v` 버전을 현재 실행 중인 볼 수 있습니다. 실행은 `npm
info` 다른 사용 가능한 버전 번호와 함께 현재 버전을 포함 하 긴 목록에 대 한 명령:

        $ npm info cordova


코르 도우 바 3.0은이 섹션에서 설명 하는 명령줄 인터페이스를 지 원하는 최초의 버전. 위에서 설명한 대로 새 프로젝트를 만든 다음 자산 이전 응용 프로그램의 최상위에 복사를 해야 3.0 이전 버전에서 업데이트 하는 경우 `www` 디렉터리. 해당 되는 추가 3.0 업그레이드에 대 한 자세한 내용은 플랫폼 가이드에서 사용할 수 있습니다. 일단 업그레이드는 `cordova` 명령줄 인터페이스 및 사용 `npm update` 최신, 거기 설명 하는 더 많은 시간이 걸리는 절차는 더 이상 관련.

코르 도우 바 3.0 + 여전히 프로젝트 수준 디렉터리 구조와 다른 종속성에 다양 한 변화를 요구할 수 있습니다. 실행 한 후에 `npm` 코르 도우 바 자체를 업데이트 하는 위의 명령, 프로젝트의 리소스 최신 버전 요구 사항에 부합 되도록 할 수 있습니다. 구축 각 플랫폼에 대해 다음 명령을 실행 합니다.

        $ cordova platform update android
        $ cordova platform update ios
        ...etc.
