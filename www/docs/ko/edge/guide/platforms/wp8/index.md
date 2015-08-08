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

# Windows Phone 플랫폼 가이드 8

이 가이드에서는 Windows Phone 장치에 대 한 코르도바 애플 리 케이 션을 배포 하기 위해 SDK 개발 환경을 설정 하는 방법을 보여 줍니다. 그것은 Windows Phone 8에 초점을 맞추고 있지만 지원 Windows Phone 7 하는 방법에 추가 정보를 제공 합니다.

그것은 생성 하 고 빌드 애플 리 케이 션, Windows Phone 관련 셸 도구를 사용 하는 방법을 보여 줍니다 또는 크로스 플랫폼 코르도바 CLI 논의 명령줄 인터페이스. (이러한 개발 워크플로 비교 개요를 참조 하십시오.) 이 섹션에는 또한 Visual Studio 내에서 수정할 수 있습니다 코르도바 애플 리 케이 션을 여는 방법을 보여 줍니다. 당신은 어떤 접근에 관계 없이 설치 해야 Windows Phone SDK 아래에 설명된대로.

Windows Phone 플랫폼에 특정 내용은 다음을 참조 하십시오.

*   Windows Phone 8 플러그인
*   Windows Phone 8 업그레이드

Windows Phone 8 플랫폼에 대 한 코르도바 WebView 의존 인터넷 익스플로러 10의 렌더링 엔진으로, 실질적인 문제로 서 코르도바 Api를 호출 하지 않는 모든 웹 콘텐츠를 테스트 하려면 IE10의 강력한 디버거를 사용할 수 있습니다. Windows Phone 개발자 블로그 IE10 비교 웹 킷 브라우저와 함께 지 원하는 방법에 [유용한 지침][1] 을 제공 합니다.

 [1]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx

## 요구 사항 및 지원

당신은 다음이 필요.

*   64-비트 버전 윈도우 8 프로, 설치 디스크 또는 *ISO* 디스크 이미지 파일입니다. 평가 버전은 [마이크로소프트 개발자 네트워크][2]에서 사용할 수 있습니다. 프로 버전은 장치 에뮬레이터를 실행 해야 합니다.

*   [Windows Phone SDK][3].

*   통해 명령줄 Windows Phone 8.0 SDK와 함께 배포 하려면 [Visual Studio 2012 업데이트 2][4] 를 설치 합니다.

 [2]: http://msdn.microsoft.com/en-US/evalcenter/jj554510
 [3]: http://www.microsoft.com/en-us/download/details.aspx?id=35471
 [4]: https://support.microsoft.com/en-us/kb/2797912

Windows Phone 장치에 대 한 코르도바 애플 리 케이 션을 개발 하기 위해 Windows를 실행 하는 PC를 사용할 수 있지만 또한 개발할 수는 Mac에서 실행 가상 컴퓨터 환경 또는 듀얼 부팅 부트 캠프를 사용 하 여 Windows 파티션. Mac에서 필요한 Windows 개발 환경을 설정 하려면 이러한 리소스를 참조 하십시오.

*   **VMWare 퓨전**: 윈도우 8 가상 컴퓨터를 설정 하려면 [Microsoft 개발자 네트워크][5]에서 제공 하는 지침에 따라 다음 SDK와 함께 번들로 제공 하는 에뮬레이터를 실행할 가상 환경 준비에 대 한 내용은 vm 웨어 퓨전 구성을 참조 하십시오.

*   **패 러 랠 데스크톱**: 윈도우 8 가상 컴퓨터를 설정 하려면 [Microsoft 개발자 네트워크][6]에서 제공 하는 지침에 따라 다음 SDK와 함께 번들로 제공 하는 에뮬레이터를 실행할 가상 환경 준비에 대 한 내용은 패 러 랠 데스크톱 구성을 참조 하십시오.

 [5]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426
 [6]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945424

<!--
- __VirtualBox__: To set up the Windows 8 virtual machine, follow the
  installation instructions provided by the [Microsoft Developer
  Network](http://msdn.microsoft.com/en-US/library/windows/apps/jj945425).

  2DO: virtualBox doesn't work yet; any extra config info?
-->

*   **부트 캠프**: 윈도우 8 파티션 설정, [마이크로소프트 개발자 네트워크][7] 에 의해 제공 된 설치 지침에 따라.

 [7]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945423

PC에서 개발 하는 경우 해당 프로세서 가상화 (인텔*VT x* ) 및 [두 번째 수준 주소 번역 (판금)][8]지원 해야 합니다. [프로세서를 지 원하는 인텔의 목록을][9]참조 하십시오. 가상화는 일반적으로 BIOS 설정에서 활성화 해야 그래서 기본적으로 사용할 수 없습니다. PC은 4GB의 RAM의 하드 디스크 여유 공간 6.5 GB 이상 있어야 합니다.

 [8]: http://en.wikipedia.org/wiki/Second_Level_Address_Translation
 [9]: http://ark.intel.com/Products/VirtualizationTechnology

## 코르 도우 바 쉘 도구를 사용 하 여

SDK와 함께에서 코르도바의 Windows Phone 중심으로 셸 도구를 사용 하려면 두 가지 기본 옵션이 있습니다.

*   CLI에서 생성 된 프로젝트 코드에서 로컬로 액세스할. 사용할 수 있는 `platforms/wp8/cordova` 디렉터리를 추가한 후는 `wp8` 플랫폼 아래에 설명 된.

*   [Cordova.apache.org][10]에서 별도 메일에서 그들을 다운로드 합니다. 코르 도우 바 배포본에 각 플랫폼에 대 한 별도 아카이브. 적절 한 보관을 확장 해야 합니다. `cordova-wp8\wp8` 이 경우 빈 디렉토리 내에서 합니다. 관련 일괄 처리 유틸리티 최상위 수준에서 사용할 수 있는 `bin` 디렉터리. ( **README** 파일을 참조 자세한 방향에 대 한 필요한 경우.)

 [10]: http://cordova.apache.org

이러한 셸 도구 작성, 구축 및 Windows Phone 응용 프로그램을 실행할 수 있습니다. 모든 플랫폼에 걸쳐 플러그인 기능을 활성화 하는 추가 명령줄 인터페이스에 대 한 정보를 관리 플러그인을 사용 하 여 Plugman를 참조 하십시오. 자세한 내용은 Windows Phone 플랫폼에 플러그인, 그리고 Windows Phone 8 플러그인을 개발 하는 방법에 대 한 지침은 응용 프로그램 플러그인을 참조 하십시오.

## SDK 설치

[Dev.windowsphone.com][11]의 **다운로드** 영역에서 최신 버전의 Windows Phone SDK를 설치 합니다. 또한 최근 에뮬레이터 업데이트 패키지를 설치할 수 있습니다.

 [11]: https://dev.windowsphone.com/en-us/downloadsdk

![][12]

 [12]: {{ site.baseurl }}/static/img/guide/platforms/wp8/wp8_downloadSDK.png

## 새 프로젝트 만들기

이 시점에서 새 프로젝트를 만들 플랫폼 CLI 도구는 명령줄 인터페이스 또는 Windows Phone 관련 셸 도구 집합 설명 사이 선택할 수 있습니다. 소스 코드 디렉토리 내 여기 CLI 접근이 이다:

        > cordova create hello com.example.hello HelloWorld
        > cd hello
        > cordova platform add wp8


여기에 해당 하위 셸 도구 접근이 이다:

        C:\path\to\cordova-wp8\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld


## 프로젝트 빌드

프로젝트 디렉터리의 최상위 개발에서 CLI를 사용 하는 경우 `www` 디렉터리 소스 파일이 들어 있습니다. 응용 프로그램을 다시 프로젝트 디렉터리에서 다음 중 하나를 실행 합니다.

        > cordova build
        > cordova build wp8   # do not rebuild other platforms


개발에서 Windows Phone 관련 셸 도구를 사용 하는 경우는 다른 접근이 이다.입니다. 일단 프로젝트를 생성 하면 기본 응용 프로그램의 소스는에 `projects\wp8\www` 하위 디렉터리. 후속 명령에서 사용할 수 있습니다는 `cordova` 동일한 수준의 하위 디렉터리.

`build`명령을 프로젝트 파일 및 응용 프로그램을 다시 작성 합니다. 첫 번째 예제에서는 디버깅 정보를 생성 하 고 두 번째 릴리스에 대 한 애플 리 케이 션 서명:

        C:\path\to\project\cordova\build.bat --debug
        C:\path\to\project\cordova\build.bat --release


`clean`명령 다음에 대 한 준비 디렉터리 밖으로 플러시 도움이 됩니다 `build` :

        C:\path\to\project\cordova\clean.bat


## 에뮬레이터에 배포

이 시점에서 사용할 수 있는 `cordova` CLI 유틸리티는 명령줄에서 에뮬레이터에 응용 프로그램 배포를:

        > cordova emulate wp8


그렇지 않으면 대체 셸 인터페이스를 사용 하 여:

        C:\path\to\project\cordova\run


기본적으로는 `run` 스크립트 에뮬레이터 플래그를 호출 하 고 있는 추가 빌드 플래그를 수용 `--debug` 기본값을 제공 합니다:

        C:\path\to\project\cordova\run --emulator --debug
        C:\path\to\project\cordova\run --emulator --release
        C:\path\to\project\cordova\run --emulator --nobuild


에뮬레이터 설치 된 애플 리 케이 션 장치 이미지를 실행 합니다. 홈 화면에서 **HelloWorld** 응용 프로그램을 실행 하는 애플 리 케이 션 패널으로 이동 합니다. 이 뒤에 그것의 주요 인터페이스는 시작 화면을 실행 하는 응용 프로그램을 보여 줍니다.

![][13]

 [13]: {{ site.baseurl }}/static/img/guide/platforms/wp8/wp8_emulator.png

에뮬레이터의 기본 컨트롤 장치 화면의 상단 오른쪽에 세로 가로 방향 사이 전환할 수 있습니다. **>** 단추 더 복잡 한 방향 및 제스처를 테스트할 수 있는 더 많은 컨트롤을 엽니다.

![][14]

 [14]: {{ site.baseurl }}/static/img/guide/platforms/wp8/wp8_emulator_orient.png

이러한 고급 컨트롤 또한 소자의 위치를 수정 하거나 수 시퀀스의 움직임을 시뮬레이션 하기 위해:

![][15]

 [15]: {{ site.baseurl }}/static/img/guide/platforms/wp8/wp8_emulator_loc.png

## 장치에 배포

장치에서 응용 프로그램을 테스트 하기 전에 장치를 등록 해야 합니다. 배포 하 고 Windows Phone 8에서 테스트 하는 방법에 대 한 자세한 내용은 [Microsoft의 설명서][16] 를 참조 하십시오. 또한, 휴대 전화를 컴퓨터에 연결 되어 화면 잠금 해제 되어 있는지 확인 합니다.

 [16]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565.aspx

다음은 장치에서 응용 프로그램을 실행 하려면 다음 CLI 명령을 실행:

    > cordova run wp8


그것은이 낮은 수준의 쉘 명령에 해당:

    C:\path\to\project\cordova\run --device


또는, Visual Studio에서 작업 하는 경우 상단, 그 후에 보도 녹색 **재생** 버튼을 인근 또는 다른 **f 5** 를 입력에서 드롭 다운 메뉴에서 **Windows Phone 장치** 를 선택합니다.

## Sdk에서 프로젝트 수정

위에서 설명한 대로 코르도바 애플 리 케이 션을 빌드 SDK와 함께 열 수 있습니다. 다양 한 `build` 명령을 Visual Studio 솔루션 (*.sln*) 파일을 생성 합니다. Visual Studio 내에서 프로젝트를 수정 하려면 파일을 엽니다. 웹 기반 소스 코드는 프로젝트의 `www` 디렉터리. 다른 도구는 SDK 제공, 메뉴 아래 컨트롤을 사용 하면 Windows Phone 에뮬레이터에서 응용 프로그램 실행:

![][17]

 [17]: {{ site.baseurl }}/static/img/guide/platforms/wp8/wp8_vs.png

워크플로에서 코르도바의 명령줄 도구 또는 SDK를 사용 하는 방법에 대 한 조언에 대 한 개요를 참조 하십시오. 코르 도우 바 CLI 정기적으로 SDK에서 사용 되는 플랫폼 특정 파일을 덮어 씁니다 크로스 플랫폼 소스 코드에 의존 합니다. SDK 내에서 작동 하려면 하위 셸 도구를 사용 하 여 CLI에 대 안으로.
