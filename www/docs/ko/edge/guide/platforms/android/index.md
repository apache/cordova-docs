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

# 안 드 로이드 플랫폼 가이드

이 가이드에는 코르도바 애플 리 케이 션 안 드 로이드 장치에 대 한 배포 SDK 환경 설정 방법과 선택적으로 안 드 로이드 중심으로 명령줄 도구를 사용 하 여 개발 작업 흐름에서 보여 줍니다. 이러한 플랫폼 중심으로 셸 도구 또는 크로스 플랫폼 코르도바 CLI를 사용 하 여 개발 하고자 하는 여부에 관계 없이 안 드 로이드 SDK를 설치 해야 합니다. 두 가지 개발 경로 비교 개요를 참조 하십시오. 대 한 자세한 내용은 CLI, 명령줄 인터페이스를 참조 하십시오.

## 요구 사항 및 지원

코르 도우 바 안 드 로이드 OS X, 리눅스 또는 윈도우 운영 체제에 설치할 수 있는 안 드 로이드 SDK를 필요 합니다. 안 드 로이드 SDK의 [시스템 요구 사항][1] 참조.

 [1]: http://developer.android.com/sdk/index.html#Requirements

코르 도우 바 지원 (안 드 로이드 API 레벨 14로 시작)는 안 드 로이드 4.0. x 이상. 일반적으로 안 드 로이드 버전 될 지원 되지 않는 코르도바에 의해로 그들은 Google의 [대시보드 배포에][2]5% 찍어. 안 드 로이드 버전 이전 API 레벨 10, 및 3.x 버전 (허니 콤, API 수준 11-13)가 크게 5% 임계값.

 [2]: http://developer.android.com/about/dashboards/index.html

## 코르 도우 바 쉘 도구 설치

SDK와 함께에서 코르도바의 안 드 로이드 중심으로 셸 도구를 사용 하려면 [cordova.apache.org][3]에서 코르도바를 다운로드 합니다. 그렇지 않으면 명령줄 인터페이스에 설명 된 크로스 플랫폼 CLI 도구를 사용 하려는 경우이 섹션을 무시 합니다.

 [3]: http://cordova.apache.org

코르 도우 바 다운로드는 각 플랫폼에 대 한 별도 아카이브를 포함합니다. 적절 한 보관을 확장 해야 합니다. `android` 이 경우 빈 디렉토리 내에서 합니다. 관련 실행 유틸리티 최상위 수준에서 사용할 수 있는 `bin` 디렉터리. ( **README** 파일을 참조 자세한 방향에 대 한 필요한 경우.)

이러한 셸 도구를 사용 하 여 작성, 구축 및 실행 안 드 로이드 애플 리 케이 션 수 있습니다. 모든 플랫폼에 걸쳐 플러그인 기능을 활성화 하는 추가 명령줄 인터페이스에 대 한 정보를 관리 플러그인을 사용 하 여 Plugman를 참조 하십시오. 플러그인을 개발 하는 방법에 대 한 내용은 응용 프로그램 플러그인을 참조 하십시오.

## 자바 개발 키트 (JDK) 설치

[자바 개발 키트 (JDK) 7][4] 설치 또는 나중에.

 [4]: http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html

윈도우 설치할 때 JDK 설치 경로 (예: C:\Program Files\Java\jdk1.7.0_75)에 따르면 `JAVA_HOME` 환경 변수 설정 해야 합니다.

## 안 드 로이드 SDK 설치

[안 드 로이드 스튜디오][5]또는 [안 드 로이드 독립 실행형 SDK 도구][6] 를 설치 합니다. `안 드 로이드 스튜디오` 안 드 로이드 플러그인에 대 한 새로운 코르도바를 개발 하거나 실행 하 고 디버깅 안 드 로이드 플랫폼 기본 도구를 사용 하 여 계획 하는 경우 Procceed. 그렇지 않으면, `안 드 로이드 독립 실행형 SDK 도구` 빌드 및 안 드 로이드 응용 프로그램 배포에 충분 하다.

 [5]: http://developer.android.com/sdk/installing/index.html?pkg=studio
 [6]: http://developer.android.com/sdk/installing/index.html?pkg=tools

자세한 설치 지침을 사용할 수 있습니다 위의 설치 링크의 일환으로.

일, 코르도바 명령줄 도구 또는 그들 따라 CLI에 대 한 `경로`에 SDK의 `도구` 및 `플랫폼 도구` 디렉터리를 포함 해야 합니다. Mac에서 만들거나 SDK 설치에 따라 다음과 같은 줄을 추가 `~/.bash_profile` 파일을 수정 하려면 텍스트 편집기를 사용할 수 있습니다.

        export PATH=${PATH}:/Development/android-sdk/platform-tools:/Development/android-sdk/tools


`~/.Bash_profile` 에이 라인 새롭게 문이 연된 터미널 창에서 이러한 도구를 제공합니다. 당신의 최종적인 창 이미 OSX 또는 리눅스에 로그 아웃/로그인을 피하기 위해 열려 있으면 현재 터미널 창에서 사용할 수 있도록이 실행.

        $ source ~/.bash_profile


Windows에서 `경로` 환경 수정:

1.  바탕 화면 왼쪽 아래 **시작** 메뉴에 클릭 하십시오 **컴퓨터**를 마우스 오른쪽 단추로 클릭 하, **속성**.

2.  왼쪽 열에서 **고급 시스템 설정** 을 선택 합니다.

3.  결과 대화 상자에서 눌러 **환경 변수**.

4.  **경로** 변수를 선택 하 고 **편집** 을 누릅니다.

5.  다음을 추가 `PATH` 기반으로 설치한 SDK, 예를 들면:

        ;C:\Development\android-sdk\platform-tools;C:\Development\android-sdk\tools


6.  값을 저장 하 고 두 대화 상자를 닫습니다.

## SDK 패키지 설치

안 드 로이드 SDK 관리자를 엽니다 (예를 들어 터미널을 통해: `안 드 로이드`) 설치:

1.  안 드 로이드 5.1.1 (API 22) 플랫폼 SDK
2.  안 드 로이드 SDK 빌드 도구 버전 19.1.0 또는 그 이상
3.  안 드 로이드 지원 저장소 (엑스트라)

자세한 내용은 [SDK 패키지 설치][7] 를 참조 하십시오.

 [7]: http://developer.android.com/sdk/installing/adding-packages.html

## 에뮬레이터 구성

안 드 로이드 sdk는 기본적으로 모든 기본 에뮬레이터 인스턴스를 제공 하지 않습니다. 커맨드 라인에서 `안 드 로이드` 를 실행 하 여 새 것을 만들 수 있습니다. 보도 **도구 → 관리 AVDs** (안 드 로이드 가상 장치), 다음 **장치 정의** 결과 대화 상자에서 어떤 항목을 선택 합니다.

![][8]

 [8]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_device.png

보도 **AVD 생성**, 선택적으로 이름, 수정 변경 내용을 적용 하려면 **확인** 을 누릅니다.

![][9]

 [9]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_newAVD.png

AVD 다음 **안 드 로이드 가상 장치** 목록에 나타납니다.

![][10]

 [10]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_avds.png

별도 응용 프로그램으로 에뮬레이터를 열려면는 AVD를 선택 하 고 **시작**을 누릅니다. 하드웨어 단추에 대 한 사용할 수 있는 추가 컨트롤 장치 것 만큼 출시:

![][11]

 [11]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_emulator.png

더 빠른 경험을 위해 실행 속도 개선 하기 위해 `가상 컴퓨터 가속` 을 사용할 수 있습니다. 많은 현대 Cpu는 가상 컴퓨터를 보다 효율적으로 실행 하려면 확장을 제공 합니다. 가속의이 유형을 사용 하려고 시도 하기 전에 현재 개발 시스템의 CPU 하나를 다음과 같은 가상화 기술을 지원 하는지 확인 해야 합니다.

*   **인텔 가상화 기술** (버몬트-x, vmx) → [인텔 VT x 지원 프로세서 목록][12]
*   **AMD 가상화** 리눅스에 대해서만 지원 (AMD-V, SVM), (2006 년 5 월부터 모든 Cpu AMD 셈프론 제외한 AMD-V 포함).

 [12]: http://ark.intel.com/products/virtualizationtechnology

경우 인텔 프로세서 지원 하려면 VT-x 기술, `인텔 프로세서 식별 유틸리티`를 실행 하 여, `Windows`용 당신이 인텔 [다운로드 센터][13]에서 다운로드할 수 있습니다 하거나 `OS 독립` 은 [booteable 유틸리티][14]를 사용할 수 있습니다 밖으로 찾는 또 다른 방법.

 [13]: https://downloadcenter.intel.com/Detail_Desc.aspx?ProductID=1881&DwnldID=7838
 [14]: https://downloadcenter.intel.com/Detail_Desc.aspx?ProductID=1881&DwnldID=7840&lang=eng

후 설치 및 실행은 `인텔 프로세서 식별 유틸리티` 윈도우, CPU 가상화 기술을 지원 하는지 확인 하기 위해 다음 창의 얻을 것 이다:

![][15]

 [15]: {{ site.baseurl }}/static/img/guide/platforms/android/intel_pid_util_620px.png

에뮬레이터를 가속화 해야 다운로드 하 고 설치 `인텔 하드웨어 가속 실행 관리자 (HAXM)` 로 서 하나 이상의 `인텔 x 86 원자` 시스템 이미지.

안 드 로이드 SDK 관리자를 열고 고 `인텔 x 86 원자` 시스템 이미지 테스트 하려면 어느 버전을 선택 합니다. 다음 `엑스트라` 로 이동 `인텔 x86 에뮬레이터 가속기 (HAXM)`, 선택한 패키지 설치:

![][16]

 [16]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_man_intel_image_haxm.png

다운로드 후, `엑스트라/인텔/Hardware_Accelerated_Execution_Manager`에서 안 드 로이드 SDK에서 사용할 수 있는 인텔 설치 관리자를 실행 합니다. **참고**:`패키지 설치에 어떤 문제가 있는 경우 자세한 정보 및 단계별 지침 확인 찾을 수 있습니다` [인텔 문서][17].

 [17]: http://software.intel.com/en-us/android/articles/speeding-up-the-android-emulator-on-intel-architecture

1.  하나 이상의 `인텔 x 86 원자` 시스템 이미지는 `인텔 하드웨어 가속 실행 관리자`, **엑스트라** 에서 사용할 수 설치.

2.  `엑스트라/인텔/Hardware_Accelerated_Execution_Manager` 에서 안 드 로이드 SDK에서 사용할 수 있는 인텔 설치 프로그램을 실행.

3.  인텔 이미지를 설정 하는 목표와 함께 새로운 AVD를 만들.

4.  에뮬레이터를 시작할 때 HAX 모듈을 로드 하는 데 실패를 나타내는 오류 메시지가 없는 것을 확인 합니다.

## 새 프로젝트 만들기

이 시점에서 새 프로젝트를 만들 플랫폼 CLI 도구는 명령줄 인터페이스 또는 안 드 로이드 관련 셸 도구 집합 설명 사이 선택할 수 있습니다. 소스 코드 디렉토리 내 여기 CLI 접근이 이다:

        $ cordova create hello com.example.hello HelloWorld
        $ cd hello
        $ cordova platform add android
        $ ccordova prepare              # or "cordova build"


다음은 유닉스와 윈도우에 대 한 해당 하위 셸 도구 접근이입니다.

        $ /path/to/cordova-android/bin/create /path/to/new/hello com.example.hello HelloWorld
        C:\path\to\cordova-android\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld


## 프로젝트 빌드

개발에서 CLI를 사용 하는 경우 프로젝트 디렉토리의 최상위 `www` 디렉토리에 소스 파일이 들어 있습니다. 이러한 디렉터리 내에서 프로젝트 응용 프로그램을 다시 실행 합니다.

        $ cordova build                   # build all platforms that were added
        $ cordova build android           # build debug for only Android
        $ cordova build android --debug   # build debug for only Android
        $ cordova build android --release # build release for only Android


개발에서 안 드 로이드 관련 셸 도구를 사용 하는 경우는 다른 접근이 이다.입니다. 일단 프로젝트를 생성 하면 기본 응용 프로그램의 소스는 `자산/www` 하위 디렉터리에. 후속 명령 그것의 `코르도바` 하위 디렉터리에 사용할 수 있습니다.

`build` 명령을 프로젝트 파일을 청소 하 고 응용 프로그램을 다시 작성 합니다. 여기에 맥과 윈도 즈에 대 한 구문이입니다. 예의 첫 번째 쌍 디버깅 정보를 생성 하 고 두 번째 릴리스에 대 한 애플 리 케이 션을 빌드:

        $ /path/to/project/cordova/build --debug
        C:\path\to\project\cordova\build.bat --debug

        $ /path/to/project/cordova/build --release
        C:\path\to\project\cordova\build.bat --release


## 응용 프로그램 배포

`코르 도우 바` CLI 유틸리티를 사용 하 여 명령줄에서 에뮬레이터 또는 장치에 응용 프로그램을 배포할 수 있습니다.

        $ cordova emulate android       #to deploy the app on a default android emulator
        $ cordova run android --device  #to deploy the app on a connected device


그렇지 않으면 대체 셸 인터페이스를 사용 하 여:

        $ /path/to/project/cordova/run --emulator
        $ /path/to/project/cordova/run --device


사용할 수 있습니다 **cordova run android --list** 모든 사용할 수 있는 대상을 참조 하 고 **cordova run android --target=target_name** 특정 장치 또는 에뮬레이터에서 응용 프로그램을 실행 하 (예를 들어 `cordova run android --target="Nexus4_emulator"`).

참조 추가 빌드 및 실행 옵션에 **cordova run --help** 사용할 수 있습니다.

이 홈 화면에 앱을 못 살게 굴지 그리고 그것을 시작:

![][18]

 [18]: {{ site.baseurl }}/static/img/guide/platforms/android/emulator2x.png

때 `실행` 애플 리 케이 션, 당신은 또한 `빌드` 그것. 추가 추가 할 수 있습니다 `--debug`, `--release`, 그리고 어떻게 그것은 내장, 또는 심지어 여부 재건은 필요한 제어 `--nobuild` 플래그:

        $ /path/to/project/cordova/run --emulator --nobuild


## 다른 명령

다음 응용 프로그램의 자세한 로그 실행으로 생성:

        $ /path/to/project/cordova/log
        C:\path\to\project\cordova\log.bat


다음 프로젝트 파일 정리:

        $ /path/to/project/cordova/clean
        C:\path\to\project\cordova\clean.bat


## SDK에는 새 프로젝트를 엽니다

안 드 로이드 플랫폼 프로젝트에 추가 되 면 [안 드 로이드 스튜디오][5]내에서 그것을 열 수 있습니다.

1.  **안 드 로이드 Studio** 응용 프로그램을 시작 합니다.

2.  **가져오기 프로젝트 (이클립스 ADT, Gradle, 등)** 선택.

    ![][19]

3.  안 드 로이드 플랫폼 저장된 (`your/project/platforms/android` 위치 선택).

    ![][20]

4.  `Gradle 동기화` 질문에 대답할 수 있는 단순히 **네**.

 [19]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_import_project.png
 [20]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_import_select_location.png

당신이 모두 지금 설정 빌드 수 및 `안 드 로이드 스튜디오` 에서 직접 응용 프로그램을 실행.

![][21]

 [21]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_import_done.png

[안 드 로이드 스튜디오 개요][22] 를 참조 하 고 [빌드 및 실행 안 드 로이드 스튜디오에서][23] 대 한 자세한 내용은.

 [22]: http://developer.android.com/tools/studio/index.html
 [23]: http://developer.android.com/tools/building/building-studio.html
