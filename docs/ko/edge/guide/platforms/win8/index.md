* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Windows 플랫폼 가이드

이 가이드에서는 구축 하 고 윈도우 8, 윈도우 8.1와 Windows Phone 8.1 코르도바 애플 리 케이 션을 배포 SDK 개발 환경을 설정 하는 방법을 보여 줍니다. 쉘 도구를 사용 하 여 생성 하 고, 애플 리 케이 션을 구축 하는 방법을 보여 줍니다 또는 크로스 플랫폼 코르도바 CLI 논의 명령줄 인터페이스. (이러한 개발 옵션의 비교에 대 한 개요를 참조 하십시오.) 이 섹션에는 또한 Visual Studio 내에서 코르도바 애플 리 케이 션을 수정 하는 방법을 보여 줍니다. 당신은 어떤 접근에 관계 없이 설치 해야 Visual Studio SDK 아래에 설명된대로.

기존 윈도우 8 코르 도우 바 프로젝트를 업그레이드 하는 방법에 대 한 내용은 업그레이드 Windows 8을 참조 하십시오.

별도 플랫폼으로 창 전화 8 (wp8) 숙박 자세한 내용은 Windows Phone 8 플랫폼 설명서를 참조.

코르 도우 바 WebViews Windows에서 실행 되 의존 인터넷 익스플로러 10 (Windows 8.0) 및 인터넷 익스플로러 11 (윈도 즈 8.1와 Windows Phone 8.1) 그들의 렌더링 엔진으로, 실질적인 문제로 서 코르도바 Api를 호출 하지 않는 모든 웹 콘텐츠를 테스트 하려면 IE의 강력한 디버거를 사용할 수 있습니다. Windows Phone 개발자 블로그 지원 IE 웹 킷 브라우저를 비교 하는 방법에 [도움이 지침][1] 을 제공합니다.

 [1]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx

## 요구 사항 및 지원

Windows 플랫폼을 위한 애플 리 케이 션을 개발 하기 위해 다음 작업을 수행 해야 합니다.

*   최소 4gb RAM의 윈도우 8.1, 32 또는 64-비트 기계 (*홈*, *프로*또는 *기업* 버전).

*   Windows Phone 에뮬레이터, 프로 페 셔널 에디션 윈도우 8.1 (64)에 대 한 또는 더 높은, 그리고 프로세서를 지 원하는 [클라이언트 하이퍼-V와 두 번째 수준의 주소 변환 (판금)][2]. 윈도 즈 8.1 엔터프라이즈 평가 버전은 [마이크로소프트 개발자 네트워크][3] 에서 사용할 수.

*   [Windows 용 visual Studio 2013][4] (또는 더 높은).

 [2]: https://msdn.microsoft.com/en-us/library/windows/apps/ff626524(v=vs.105).aspx#hyperv
 [3]: http://msdn.microsoft.com/en-US/evalcenter/jj554510
 [4]: http://www.visualstudio.com/downloads/download-visual-studio-vs#d-express-windows-8

애플 리 케이 션 윈도우 8.1에서 컴파일한 *하지* Windows 8.0에서 실행. 애플 리 케이 션 윈도우 8.0에서 컴파일한 버전과 호환은 8.1와.

앱을 Windows 스토어에 제출 [windowsstore.com][5] 의 지침을 따릅니다.

 [5]: http://www.windowsstore.com/

Windows 용 코르 도우 바 애플 리 케이 션을 개발 하기 위해 Windows를 실행 하는 PC를 사용할 수 있지만 가상 컴퓨터 환경을 실행 하거나 듀얼-부팅 윈도우 8.1 파티션에 부트 캠프를 사용 하 여 또한 Mac에서 개발할 수 있습니다. Mac에서 필요한 Windows 개발 환경을 설정 하려면 이러한 리소스를 참조 하십시오.

*   [VMWare Fusion][6]

*   [Parallels Desktop][7],

*   [Boot Camp][8].

 [6]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426
 [7]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945424
 [8]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945423

## SDK 설치

*궁극적인*, *프리미엄*또는 *전문가* 2013 버전의 [Visual Studio][4] 설치.

![][9]

 [9]: img/guide/platforms/win8/win8_installSDK.png

## 코르 도우 바 쉘 도구를 사용 하 여

SDK와 함께에서 코르도바의 윈도우 중심으로 셸 도구를 사용 하려면 두 가지 기본 옵션이 있습니다.

*   CLI에서 생성 된 프로젝트 코드에서 로컬로 액세스할. 사용할 수 있는 `플랫폼/윈도우/` 디렉토리 아래에 설명 된 대로 `windows` 플랫폼을 추가 하면.

*   [Cordova.apache.org][10]에서 별도 메일에서 그들을 다운로드 합니다. 코르 도우 바 배포본에 각 플랫폼에 대 한 별도 아카이브. 이 경우 빈 디렉토리 내 적절 한 보관, `코르도바 windows` 를 확장 해야 합니다. 관련 일괄 처리 유틸리티 `패키지/bin` 디렉터리에서 사용할 수 있습니다. ( **README** 파일을 참조 자세한 방향에 대 한 필요한 경우.)

 [10]: https://www.apache.org/dist/cordova/platforms/

이러한 셸 도구 작성, 구축 및 Windows 애플 리 케이 션을 실행할 수 있습니다. 모든 플랫폼에 걸쳐 플러그인 기능을 활성화 하는 추가 명령줄 인터페이스에 대 한 정보를 관리 플러그인을 사용 하 여 Plugman를 참조 하십시오.

## 새 프로젝트 만들기

이 시점에서 새 프로젝트를 만들려면 명령줄 인터페이스, 또는 특정 Windows 셸 도구 집합에 설명 된 크로스 플랫폼 CLI 도구 사이 선택할 수 있습니다. CLI 접근 아래 새로운 `hello` 프로젝트 디렉터리 내에서 *HelloWorld* 라는 애플 리 케이 션을 생성 합니다.

        > cordova create hello com.example.hello HelloWorld
        > cd hello
        > cordova platform add windows
    

여기에 해당 하위 셸 도구 접근이 이다:

        C:\path\to\cordova-windows\package\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld
    

## 프로젝트 빌드

프로젝트 디렉터리의 최상위 개발에서 CLI를 사용 하는 경우 `www` 디렉터리 소스 파일이 들어 있습니다. 응용 프로그램을 다시 프로젝트 디렉터리에서 다음 중 하나를 실행 합니다.

        > cordova build
        > cordova build windows              # do not rebuild other platforms
        > cordova build windows   --debug    # generates debugging information
        > cordova build windows   --release  # signs the apps for release
    

여기에 해당 하위 셸 도구 접근이 이다:

        C:\path\to\project\cordova\build.bat --debug        
        C:\path\to\project\cordova\build.bat --release
        C:\path\to\project\cordova\clean.bat
    

## 대상 Windows 버전 구성

기본 `구축` 으로 명령을 두 패키지 생성: 윈도우 8.0과 Windows Phone 8.1. 버전 8.1 다음 구성 설정은 구성 파일 (`config.xml` 에 추가 되어야 합니다 Windows 패키지 업그레이드).

        <preference name='windows-target-version' value='8.1' />
    

추가한 후이 설정을 `빌드` 명령을 Windows 8.1와 Windows Phone 8.1 패키지 생산 시작 됩니다.

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

위에서 설명한 대로 코르도바 애플 리 케이 션을 빌드 Visual Studio를 열 수 있습니다. 다양 한 `빌드` 명령을 Visual Studio 솔루션 (*.sln*) 파일을 생성 합니다. Visual Studio 내에서 프로젝트를 수정 하려면 파일 탐색기에서 파일을 엽니다.

![][11]

 [11]: img/guide/platforms/win8/win8_sdk_openSLN.png

`CordovaApp` 구성 요소는 솔루션 내에서 표시 하 고 `www` 디렉토리의 `index.html` 홈 페이지를 포함 하 여 웹 기반으로 소스 코드를 포함:

![][12]

 [12]: img/guide/platforms/win8/win8_sdk.png

Visual Studio의 주 메뉴 아래의 컨트롤을 사용 하 여 테스트 또는 응용 프로그램을 배포할 수 있습니다.

![][13]

 [13]: img/guide/platforms/win8/win8_sdk_deploy.png

**로컬 컴퓨터** 선택, Visual Studio를 실행 하는 동일한 시스템에서 응용 프로그램을 설치 하려면 녹색 화살표를 누르십시오. 일단 당신이 이렇게, 응용 프로그램 윈도우 8의 응용 프로그램 목록에 나타납니다.

![][14]

 [14]: img/guide/platforms/win8/win8_sdk_runApp.png

때마다 애플 리 케이 션을 다시 인터페이스에서 사용할 수 있는 버전을 새로 고칩니다.

일단 애플 리 케이 션 목록에서 사용할 수 있는 응용 프로그램을 선택 하는 동안 **CTRL** 키를 누른 수 있습니다 메인 화면에 고정:

![][15]

 [15]: img/guide/platforms/win8/win8_sdk_runHome.png

Note 가상 컴퓨터 환경 내에서 응용 프로그램을 열면 당신은 모서리 또는 애플 리 케이 션을 전환 또는 추가 기능에 액세스 하려면 windows의 측면을 따라 클릭 해야 할 수도 있습니다.

![][16]

 [16]: img/guide/platforms/win8/win8_sdk_run.png

또는, **시뮬레이터** 배포 옵션 마치 태블릿 장치에서 실행 되는 애플 리 케이 션을 선택:

![][17]

 [17]: img/guide/platforms/win8/win8_sdk_sim.png

데스크톱 배포와는 달리이 옵션을 시뮬레이션 하는 태블릿의 방향, 위치, 네트워크 설정을 다를 수 있습니다.

**참고**: 워크플로에서 코르도바의 명령줄 도구 또는 SDK를 사용 하는 방법에 대 한 조언에 대 한 개요를 참조 하십시오. 코르 도우 바 CLI 정기적으로 SDK에서 사용 되는 플랫폼 특정 파일을 덮어 씁니다 크로스 플랫폼 소스 코드에 의존 합니다. SDK를 사용 하 여 프로젝트 수정 하려는 경우 하위 셸 도구를 사용 하 여 CLI에 대 안으로.