---
license: Licensed to the Apache Software Foundation (ASF) under one
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

# Windows 플랫폼 가이드

이 가이드에서는 구축 하 고 윈도우 8, 윈도우 8.1, Windows Phone 8.1와 Windows 10 범용 응용 프로그램 플랫폼에 대 한 코르도바 애플 리 케이 션을 배포 SDK 개발 환경을 설정 하는 방법을 보여 줍니다. 그것은 생성 하 고 빌드 애플 리 케이 션, 셸 도구를 사용 하는 방법을 보여 줍니다 또는 크로스-플랫폼 코르도바 CLI 명령줄 인터페이스에서 논의. (이러한 개발 옵션의 비교에 대 한 개요를 참조 하십시오.) 이 섹션에는 또한 Visual Studio 내에서 코르도바 애플 리 케이 션을 수정 하는 방법을 보여 줍니다. 당신은 어떤 접근에 해야 Visual Studio SDK를 설치 하려면 아래와 같이 합니다.

기존 윈도우 8 코르 도우 바 프로젝트를 업그레이드 하는 방법에 대 한 내용은 업그레이드 Windows 8을 참조 하십시오.

별도 플랫폼으로 창 전화 8 (wp8) 숙박 자세한 내용은 Windows Phone 8 플랫폼 설명서를 참조.

코르 도우 바 WebViews Windows에서 실행 되 의존 인터넷 익스플로러 10 (Windows 8.0) 및 인터넷 익스플로러 11 (윈도 즈 8.1와 Windows Phone 8.1) 그들의 렌더링 엔진으로, 실질적인 문제로 서 코르도바 Api를 호출 하지 않는 모든 웹 콘텐츠를 테스트 하려면 IE의 강력한 디버거를 사용할 수 있습니다. Windows Phone 개발자 블로그 지원 IE 웹 킷 브라우저를 비교 하는 방법에 [도움이 지침][1] 을 제공합니다.

 [1]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx

## 요구 사항 및 지원

Windows 플랫폼을 위한 애플 리 케이 션을 개발 하기 위해 다음 작업을 수행 해야 합니다.

*   최소 4gb RAM의 윈도우 8.1, 32 또는 64-비트 기계 (*홈*, *프로*또는 *기업* 버전).

*   Windows 8.0, 8.1 또는 10, 32 또는 64-비트 *홈*, *프로*또는 [Visual Studio 2012 Express][2] 또는 Visual Studio 2013 *엔터프라이즈* 버전. Visual Studio 2015는 Windows 8.0 애플 리 케이 션을 만들 수 없습니다.

 [2]: http://www.visualstudio.com/downloads

윈도 즈 8.0과 8.1 (를 포함 하 여 Windows Phone 8.1)에 대 한 애플 리 케이 션 개발:

*   윈도우 8.1 윈도 10, 32 또는 64-비트 *홈*, *프로*또는 *엔터프라이즈* 버전, [Visual Studio 2013 Express][2] 와 함께 또는 그 이상. 윈도 즈 8.1 엔터프라이즈 평가 버전은 [마이크로소프트 개발자 네트워크][3] 에서 사용할 수.

*   Windows Phone 에뮬레이터, 프로 페 셔널 에디션 윈도우 8.1 (64)에 대 한 또는 더 높은, 그리고 프로세서를 지 원하는 [클라이언트 하이퍼-V와 두 번째 수준의 주소 변환 (판금)][4]. 윈도 즈 8.1 엔터프라이즈 평가 버전은 [마이크로소프트 개발자 네트워크][3] 에서 사용할 수.

*   [Windows 용 visual Studio 2013][5] (또는 더 높은).

 [3]: http://msdn.microsoft.com/en-US/evalcenter/jj554510
 [4]: https://msdn.microsoft.com/en-us/library/windows/apps/ff626524(v=vs.105).aspx#hyperv
 [5]: http://www.visualstudio.com/downloads/download-visual-studio-vs#d-express-windows-8

윈도우 10 애플 리 케이 션 개발:

*   윈도우 8.1 또는 Windows 10 기술 미리 보기 2, 32-또는 64-비트, [Visual Studio 2015 RC][6] 함께 또는 그 이상.

 [6]: http://www.visualstudio.com/preview

응용 프로그램 호환성 app 대상 운영 체제에 의해 결정 됩니다. 애플 리 케이 션은 ㄹ 호환 하지만 하지 backwardly 호환, 그래서 윈도우 8.1를 대상으로 응용 프로그램 8.0에서 실행할 수 없습니다 하지만 8.0 내장 app 8.1에서 실행할 수 있습니다.

앱을 Windows 스토어에 제출 하는 [windowsstore.com][7] 에서 지침을 따릅니다.

 [7]: http://www.windowsstore.com/

Windows에 대 한 코르도바 애플 리 케이 션을 개발, 당신은 Windows를 실행 하는 PC를 사용할 수 있지만 가상 컴퓨터 환경 실행 하거나 듀얼-부팅 윈도우 8.1 파티션에 부트 캠프를 사용 하 여 당신은 또한 Mac에서 개발할 수 있습니다. Mac에서 필요한 Windows 개발 환경을 설정 하려면 이러한 리소스를 참조 하십시오.

*   [VMWare Fusion][8]

*   [Parallels Desktop][9]

*   [Boot Camp][10]

 [8]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426
 [9]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945424
 [10]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945423

## 코르 도우 바 쉘 도구를 사용 하 여

SDK와 함께에서 코르도바의 윈도우 중심으로 셸 도구를 사용 하려면 두 가지 기본 옵션이 있습니다.

*   CLI에서 생성 된 프로젝트 코드에서 로컬로 액세스할 그들. 사용할 수 있는 `플랫폼/윈도우/` 디렉토리 아래 설명 된 대로 `windows` 플랫폼을 추가 하면.

*   [Cordova.apache.org][11]에서 별도 메일에서 그들을 다운로드 합니다. 코르도바 배포는 각 플랫폼에 대 한 별도 아카이브를 포함합니다. 이 경우에, 빈 디렉토리 내 적절 한 보관, `코르도바-windows` 를 확장 해야 합니다. 관련 일괄 처리 유틸리티 `package/bin` 디렉터리에서 사용할 수 있습니다. ( **README** 파일을 참조 자세한 방향에 대 한 필요한 경우.)

 [11]: https://www.apache.org/dist/cordova/platforms/

이러한 셸 도구 작성, 구축 및 Windows 애플 리 케이 션을 실행할 수 있습니다. 모든 플랫폼에 걸쳐 플러그인 기능을 활성화 하는 추가 명령줄 인터페이스에 대 한 정보를 관리 플러그인을 사용 하 여 Plugman를 참조 하십시오.

## SDK 설치

[Visual Studio][2] 버전 위에 나열 된 요구 사항에 일치의 어떤 버전을 설치 합니다.

![][12]

 [12]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_installSDK.png

윈도우 10, Visual Studio 설치 관리자 범용 윈도우 애플 리 케이 션을 구축 하는 도구를 설치 하려면 옵션이 있다. 이 옵션을 선택 설치할 때 필요한 SDK를 설치 해야 합니다.

## 새 프로젝트 만들기

이 시점에서, 새로운 프로젝트를 생성 하려면 크로스-플랫폼 CLI 도구는 명령줄 인터페이스, 또는 특정 Windows 셸 도구 집합 설명 사이 선택할 수 있습니다. CLI 접근 아래는 애플 리 케이 션을 새로운 `hello` 프로젝트 디렉터리 내에서 *HelloWorld* 라는 생성:

        > cordova create hello com.example.hello HelloWorld
        > cd hello
        > cordova platform add windows


여기에 해당 하위 셸 도구 접근이 이다:

        C:\path\to\cordova-windows\package\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld


이 프로젝트는 기본 대상 OS로 윈도우 8.1을 대상. 8.0 또는 10.0 ("구성 대상 윈도우 버전" 아래 참조) 모든 빌드를 대상으로 선택할 수 있습니다 하거나 각 빌드 동안 특정 특정 버전을 대상.

## 프로젝트 빌드

프로젝트 디렉터리의 최상위 개발에서 CLI를 사용 하는 경우 `www` 디렉터리 소스 파일이 들어 있습니다. 응용 프로그램을 다시 프로젝트 디렉터리에서 다음 중 하나를 실행 합니다.

        > cordova build
        > cordova build windows              # do not rebuild other platforms
        > cordova build windows   --debug    # generates debugging information
        > cordova build windows   --release  # signs the apps for release


여기에 해당 하위 셸 도구 접근이 이다:

        C:\path\to\project\cordova\build.bat --debug
        C:\path\to\project\cordova\build.bat --release


`clean`명령 다음에 대 한 준비 디렉터리 밖으로 플러시 도움이 됩니다 `build` :

        C:\path\to\project\cordova\clean.bat


## 대상 Windows 버전 구성

기본 `구축` 으로 명령 두 패키지 생성: 윈도우 8.0과 Windows Phone 8.1. 버전 8.1 다음 구성 설정은 구성 파일 (`config.xml` 에 추가 되어야 합니다 Windows 패키지 업그레이드).

        <preference name="windows-target-version" value="8.1" />


추가한 후이 설정을 `빌드` 명령을 Windows 8.1와 Windows Phone 8.1 패키지 생산을 시작할 것 이다.

### -약 매개 변수

특정 운영 체제를 대상으로 하는 응용 프로그램의 특정 버전을 구축 하려는 결정할 수 있습니다 (예를 들어 수 설정한 대상 Windows 10, 하지만 Windows Phone 8.1에 대 한 빌드 하려는). 이 위해 `--appx` 매개 변수를 사용할 수 있습니다.

        > cordova build windows -- --appx=8.1-phone


빌드 시스템 config.xml 대상 Windows 버전에 대 한 기본 설정 집합을 무시 하 고 엄격 하 게 Windows Phone 8.1에 대 한 패키지를 구축 합니다.

`-약` 플래그에 대 한 유효한 값은 `8.1-승리`, `8.1 전화`및 `uap` (창을 10 보편적인 애플 리 케이 션)에 대 한. 이 옵션은 또한 `cordova run` 명령에 적용 됩니다.

### 대상 Windows 버전에 대 한 고려 사항

윈도우 10 코르도바 애플 리 케이 션 (및 일반에서 HTML 애플 리 케이 션)에 대 한 새로운 "원격" 모드를 지원합니다. 이 모드 애플 리 케이 션 DOM 조작 및 인라인 스크립트를 사용 하 여 같은 일반적인 웹 패턴의 사용을 훨씬 더 자유 존중 하지만 너무 기능 집합을 줄임으로써 응용 프로그램 공용 Windows 스토어에 제출 하는 경우 사용할 수 있습니다. 윈도우 10 및 원격 모드에 대 한 자세한 내용은, [Cordova에 대 한 Windows 10][13] 설명서를 봐.

 [13]: win10-support.md.html

원격 모드를 사용할 경우 개발자는 스크립트 주입 공격을 방지 하기 위해 그들의 응용 프로그램에 콘텐츠 보안 정책 (CSP)를 적용 하는 것이 좋습니다.

## 응용 프로그램 배포

Windows 패키지 배포:

        > cordova run windows -- --win  # explicitly specify Windows as deployment target
        > cordova run windows # `run` uses Windows package by default


Windows Phone 패키지 배포:

        > cordova run windows -- --phone  # deploy app to Windows Phone 8.1 emulator
        > cordova run windows --device -- --phone  # deploy app to connected device


당신이 보고 사용할 수 있습니다 **코르도바 실행 창-목록** 모두 사용 가능한 대상 및 **코르도바 실행 창-대상 target_name-=-전화** 특정 장치 또는 에뮬레이터에서 응용 프로그램을 실행 (예를 들어 `코르도바 실행 창-대상 = "에뮬레이터 8.1 720 P 4.7 인치"--전화`).

참조 추가 빌드 및 실행 옵션에 **cordova run --help** 사용할 수 있습니다.

## SDK에서 프로젝트를 열고 응용 프로그램 배포

위에서 설명한 대로 코르도바 애플 리 케이 션을 구축, Visual Studio를 열 수 있습니다. 다양 한 `빌드` 명령을 Visual Studio 솔루션 (*.sln*) 파일을 생성합니다. Visual Studio 내에서 프로젝트를 수정 하려면 파일 탐색기에서 파일을 엽니다.

![][14]

 [14]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_openSLN.png

`CordovaApp` 구성 요소는 솔루션 내에서 표시 하 고 그 `www` 디렉토리는 `index.html` 홈 페이지를 포함 하 여 웹 기반 소스 코드를 포함:

![][15]

 [15]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk.png

Visual Studio의 주 메뉴 아래 컨트롤을 사용 하 여 테스트 또는 응용 프로그램을 배포할 수 있습니다.

![][16]

 [16]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_deploy.png

**로컬 컴퓨터** 선택, Visual Studio를 실행 하는 동일한 컴퓨터에 응용 프로그램을 설치 하려면 녹색 화살표를 누릅니다. 일단 당신이 이렇게, 응용 프로그램 윈도우 8의 응용 프로그램 목록에 나타납니다.

![][17]

 [17]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_runApp.png

응용 프로그램을 다시 만들 때마다 인터페이스에서 사용할 수 있는 버전을 새로 고칩니다.

일단 응용 프로그램 목록에서 사용할 수 있는 응용 프로그램을 선택 하는 동안 **CTRL** 키를 누른 수 있습니다 메인 화면에 고정:

![][18]

 [18]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_runHome.png

가상 컴퓨터 환경 내에서 응용 프로그램을 열면 당신은 모서리 또는 애플 리 케이 션을 전환 또는 추가 기능에 액세스 하는 windows의 측면을 따라 클릭 해야 할 수도 있습니다 note:

![][19]

 [19]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_run.png

또는, **시뮬레이터** 배포 옵션 마치 태블릿 장치에서 실행 되는 응용 프로그램을 선택:

![][20]

 [20]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_sim.png

데스크톱 배포와 달리이 옵션을 시뮬레이션 하는 태블릿의 방향, 위치, 네트워크 설정을 다를 수 있습니다.

**참고**: 워크플로에서 코르도바의 명령줄 도구 또는 SDK를 사용 하는 방법에 대 한 조언을 개요를 참조 하십시오. 코르도바 CLI을 정기적으로 SDK에서 사용 되는 플랫폼 특정 파일을 덮어쓰는 크로스-플랫폼 소스 코드에 의존 합니다. SDK를 사용 하 여 프로젝트 수정 하려는 경우 하위 셸 도구를 사용 하 여 CLI에 대 안으로.
