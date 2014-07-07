* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# 안 드 로이드 플랫폼 가이드

이 가이드에는 코르도바 애플 리 케이 션 안 드 로이드 장치에 대 한 배포 SDK 환경 설정 방법과 선택적으로 안 드 로이드 중심으로 명령줄 도구를 사용 하 여 개발 작업 흐름에서 보여 줍니다. 이러한 플랫폼 중심으로 셸 도구 또는 크로스 플랫폼 코르도바 CLI를 사용 하 여 개발 하고자 하는 여부에 관계 없이 안 드 로이드 SDK를 설치 해야 합니다. 두 가지 개발 경로 비교 개요를 참조 하십시오. 대 한 자세한 내용은 CLI, 명령줄 인터페이스를 참조 하십시오.

## 요구 사항 및 지원

코르 도우 바 안 드 로이드 안 드 로이드 SDK를 필요합니다. 안 드 로이드 SDK의 [시스템 요구 사항][1] 참조.

 [1]: http://developer.android.com/sdk/index.html

코르 도우 바 안 드 로이드 속 (진저 브레드, 안 드 로이드 API 레벨 10부터) 및 4.x를 지원 합니다. 일반적으로 안 드 로이드 버전 될 지원 되지 않는 코르도바에 의해로 그들은 Google의 [대시보드 배포에][2]5% 찍어. 안 드 로이드 버전 이전 API 레벨 10, 및 3.x 버전 (허니 콤, API 수준 11-13)가 크게 5% 임계값.

 [2]: http://developer.android.com/about/dashboards/index.html

## 코르 도우 바 쉘 도구 설치

SDK와 함께에서 코르도바의 안 드 로이드 중심으로 셸 도구를 사용 하려면 [cordova.apache.org][3]에서 코르도바를 다운로드 합니다. 그렇지 않으면 명령줄 인터페이스에 설명 된 크로스 플랫폼 CLI 도구를 사용 하려는 경우이 섹션을 무시 합니다.

 [3]: http://cordova.apache.org

코르 도우 바 다운로드는 각 플랫폼에 대 한 별도 아카이브를 포함합니다. 적절 한 보관을 확장 해야 합니다. `android` 이 경우 빈 디렉토리 내에서 합니다. 관련 실행 유틸리티 최상위 수준에서 사용할 수 있는 `bin` 디렉터리. ( **README** 파일을 참조 자세한 방향에 대 한 필요한 경우.)

이러한 셸 도구를 사용 하 여 작성, 구축 및 실행 안 드 로이드 애플 리 케이 션 수 있습니다. 모든 플랫폼에 걸쳐 플러그인 기능을 활성화 하는 추가 명령줄 인터페이스에 대 한 정보를 관리 플러그인을 사용 하 여 Plugman를 참조 하십시오. 플러그인을 개발 하는 방법에 대 한 내용은 응용 프로그램 플러그인을 참조 하십시오.

[Developer.android.com/sdk][4]에서 안 드 로이드 SDK를 설치 합니다. 안 드 로이드 sdk 'adt-번들-< os >-< 아치 >-< 보기 >' 파일로 배포 됩니다. Windows에서 adt 번들 설치 프로그램이 함께 패키징 됩니다. OSX와 리눅스에서 단순히 ' adt 번들 ' 풀고 개발 도구 저장 위치. [안 드 로이드 SDK 설치에 대 한 더 자세한 정보는 여기서 찾을 수 있습니다.][5]

 [4]: http://developer.android.com/sdk/
 [5]: http://developer.android.com/sdk/installing/bundle.html

코르도바 명령줄 도구를 작업, 또는 그들을 바탕으로 CLI, SDK의 포함 해야 `tools` 와 `platform-tools` 디렉터리를 `PATH` . 만들거나 수정 하려면 텍스트 편집기를 사용할 수는 맥에는 `~/.bash_profile` 파일을 SDK 설치에 따라 다음과 같은 줄을 추가:

        내보내기 경로 = ${경로}: / 개발/adt-번들/sdk/플랫폼-도구: / 개발/adt-번들/sdk/도구
    

추가 경로를 `java` 및 `ant` 필요한 경우. 에이 라인 `~/.bash_profile` 새롭게 문이 연된 터미널 창에서 이러한 도구를 제공 합니다. 당신의 최종적인 창 이미 OSX 또는 리눅스에 로그 아웃/로그인을 피하기 위해 열려 있으면 현재 터미널 창에서 사용할 수 있도록이 실행.

        $ 소스 ~/.bash_profile
    

수정 하는 `PATH` 윈도우 7 환경:

1.  바탕 화면 왼쪽 아래 **시작** 메뉴에 클릭 하십시오 **컴퓨터**를 마우스 오른쪽 단추로 클릭 하, **속성**.

2.  왼쪽 열에서 **고급 시스템 설정** 을 선택 합니다.

3.  결과 대화 상자에서 눌러 **환경 변수**.

4.  **경로** 변수를 선택 하 고 **편집** 을 누릅니다.

5.  다음을 추가 `PATH` 기반으로 설치한 SDK, 예를 들면:
    
        ;C:\Development\adt-bundle\sdk\platform-tools;C:\Development\adt-bundle\sdk\tools
        

6.  값을 저장 하 고 두 대화 상자를 닫습니다.

또한 명령 프롬프트 및 유형 자바와 개미 열기를 사용 하도록 설정 해야 할 수 있습니다 `java` , 또한 입력 `ant` . 추가 `PATH` 이 중 실행 실패:

        ;%JAVA_HOME%\bin;%ANT_HOME%\bin
    

## SDK에는 새 프로젝트를 엽니다

이 시점에서 새 프로젝트를 만들 플랫폼 CLI 도구는 명령줄 인터페이스 또는 안 드 로이드 관련 셸 도구 집합 설명 사이 선택할 수 있습니다. 소스 코드 디렉토리 내 여기 CLI 접근이 이다:

        $ cordova create hello com.example.hello HelloWorld
        $ cd hello
        $ cordova platform add android
        $ cordova build
    

다음은 유닉스와 윈도우에 대 한 해당 하위 셸 도구 접근이입니다.

        $ /path/to/cordova-android/bin/create /path/to/new/hello com.example.hello HelloWorld
        C:\path\to\cordova-android\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld
    

여기에 SDK를 사용 하 여 그것을 수정 하는 방법이입니다.

1.  **이클립스** 응용 프로그램을 시작 합니다.

2.  **새 프로젝트** 메뉴 항목을 선택 합니다.

3.  결과 대화 상자에서 **기존 코드에서 안 드 로이드 프로젝트** 를 선택 하 고 ****키를 누릅니다.
    
    ![][6]

4.  CLI를 사용 하는 경우 이동 하는 `hello` 디렉터리에 다음 프로젝트에 대해 만든는 `platforms/android` 하위 디렉터리. 또는 사용 하는 경우는 `create` 쉘 유틸리티, 간단 하 게 이동 하는 `hello` 디렉터리.

5.  **완료** 를 누르면합니다.

 [6]: img/guide/platforms/android/eclipse_new_project.png

일단 이클립스 창이 열립니다, 해결 되지 않은 문제를 나타내는 빨간색 **X** 나타날 수 있습니다. 그렇다면, 다음 추가 단계를 수행:

1.  프로젝트 디렉터리에서 마우스 오른쪽 단추로 클릭 합니다.

2.  결과 **속성** 대화 상자에서 탐색 창에서 **안 드 로이드** 선택 합니다.

3.  빌드 대상 프로젝트에 대 한, 설치한 최고의 안 드 로이드 API 레벨을 선택 합니다.

4.  **확인** 을 클릭 합니다.

5.  **프로젝트** 메뉴에서 **클린** 을 선택 합니다. 이 프로젝트의 모든 오류를 수정 한다.

## 프로젝트 빌드

프로젝트 디렉터리의 최상위 개발에서 CLI를 사용 하는 경우 `www` 디렉터리 소스 파일이 들어 있습니다. 응용 프로그램을 다시 프로젝트 디렉터리에서 다음 중 하나를 실행 합니다.

        $ cordova build
        $ cordova build android   # do not rebuild other platforms
    

개발에서 안 드 로이드 관련 셸 도구를 사용 하는 경우는 다른 접근이 이다.입니다. 일단 프로젝트를 생성 하면 기본 응용 프로그램의 소스는에 `assets/www` 하위 디렉터리. 후속 명령에서 사용할 수 있습니다 그것의 `cordova` 하위 디렉터리.

`build`명령을 프로젝트 파일 및 응용 프로그램을 다시 작성 합니다. 여기에 맥과 윈도 즈에 대 한 구문이입니다. 예의 첫 번째 쌍 디버깅 정보를 생성 하 고 두 번째 릴리스에 대 한 애플 리 케이 션 서명:

        $ /path/to/project/cordova/build --debug
        C:\path\to\project\cordova\build.bat --debug
    
        $ /path/to/project/cordova/build --release
        C:\path\to\project\cordova\build.bat --release
    

## 에뮬레이터 구성

당신은 하나를 사용할 수 있는 `cordova` CLI 유틸리티 또는 코르도바의 안 드 로이드 중심으로 쉘 에뮬레이터에서 응용 프로그램을 실행 하는 도구. 어느 쪽이 든, SDK 먼저 하나 이상의 장치를 표시 하도록 구성 되어야 합니다. 이렇게 하려면, 안 드 로이드 SDK 관리자, 이클립스에서 별도로 실행 되는 Java 응용 프로그램을 사용 합니다. 그것을 여는 방법은 두 가지:

1.  실행 `android` 커맨드 라인에.

2.  이클립스 내에서이 도구 모음 아이콘 눌러:
    
    ![][7]

 [7]: img/guide/platforms/android/eclipse_android_sdk_button.png

일단 오픈, 안 드 로이드 SDK 관리자는 다양 한 런타임 라이브러리를 표시 합니다.

![][8]

 [8]: img/guide/platforms/android/asdk_window.png

**도구 → 관리 AVDs** (안 드 로이드 가상 장치)를 선택한 다음 **장치 정의** 결과 대화 상자에서 모든 항목 선택:

![][9]

 [9]: img/guide/platforms/android/asdk_device.png

보도 **AVD 생성**, 선택적으로 이름, 수정 변경 내용을 적용 하려면 **확인** 을 누릅니다.

![][10]

 [10]: img/guide/platforms/android/asdk_newAVD.png

AVD 다음 **안 드 로이드 가상 장치** 목록에 나타납니다.

![][11]

 [11]: img/guide/platforms/android/asdk_avds.png

별도 응용 프로그램으로 에뮬레이터를 열려면는 AVD를 선택 하 고 **시작**을 누릅니다. 하드웨어 단추에 대 한 사용할 수 있는 추가 컨트롤 장치 것 만큼 출시:

![][12]

 [12]: img/guide/platforms/android/asdk_emulator.png

## 에뮬레이터에 배포

이 시점에서 사용할 수 있는 `cordova` CLI 유틸리티는 명령줄에서 에뮬레이터에 응용 프로그램 배포를:

        $ cordova emulate android
    

그렇지 않으면 대체 셸 인터페이스를 사용 하 여:

        $ /path/to/project/cordova/run --emulator
    

어느 에뮬레이터 현재 SDK 내에서 사용할 수에 의존 하는 대신 각 제공 하는 이름으로 참조할 수 있습니다.

        $ /path/to/project/cordova/run --target=NAME
    

이 홈 화면에 앱을 못 살게 굴지 그리고 그것을 시작:

![][13]

 [13]: img/guide/platforms/android/emulator2x.png

때 당신이 `run` 애플 리 케이 션, 당신은 또한 `build` 그것. 추가 추가 할 수 있습니다 `--debug` , `--release` , 및 `--nobuild` 어떻게 만들어집니다, 또는 심지어 여부 재건은 필요한 제어 하는 플래그:

        $ /path/to/project/cordova/run --emulator --nobuild
    

대신 이클립스에서 작업 하는, 프로젝트를 마우스 오른쪽 단추로 클릭 하 고 **→ 안 드 로이드 응용 프로그램을 실행**을 선택 합니다. 이미 열려 있다면 아무도 AVD를 지정 하려면 요청 받을 수 있습니다.

더 빠른 경험을 위해 사용할 수 있습니다에서 `Virtual Machine Acceleration` 실행 속도 향상. 많은 현대 Cpu는 가상 컴퓨터를 보다 효율적으로 실행 하려면 확장을 제공 합니다. 가속의이 유형을 사용 하려고 시도 하기 전에 현재 개발 시스템의 CPU 하나를 다음과 같은 가상화 기술을 지원 하는지 확인 해야 합니다.

*   **인텔 가상화 기술** (버몬트-x, vmx) → [인텔 VT x 지원 프로세서 목록][14]
*   **AMD 가상화** 리눅스에 대해서만 지원 (AMD-V, SVM), (2006 년 5 월부터 모든 Cpu AMD 셈프론 제외한 AMD-V 포함).

 [14]: http://ark.intel.com/products/virtualizationtechnology

경우 인텔 프로세서를 찾는 또 다른 방법은 지원 하려면 VT-x 기술, 그것을 실행 하 여는 `Intel Processor Identification Utility` 를 위한 `Windows` 인텔 [다운로드 센터][15]에서 다운로드할 수 있습니다 하거나 [booteable 유틸리티][16]에 사용할 수 있습니다`OS Independent`.

 [15]: https://downloadcenter.intel.com/Detail_Desc.aspx?ProductID=1881&DwnldID=7838
 [16]: https://downloadcenter.intel.com/Detail_Desc.aspx?ProductID=1881&DwnldID=7840&lang=eng

후 설치 및 실행은 `Intel Processor Identification Utility` 윈도우, CPU 가상화 기술을 지원 하는지 확인 하기 위해 다음 창의 얻을 것 이다:

![][17]

 [17]: img/guide/platforms/android/intel_pid_util_620px.png

에뮬레이터를 가속화 해야 다운로드 하 고 설치할 하나 이상의 `Intel x86 Atom` 시스템 이미지 뿐만 아니라`Intel Hardware Accelerated Execution Manager (HAXM)`.

당신의 안 드 로이드 SDK 관리자를 열고 선택은 `Intel x86 Atom` 시스템 이미지를 테스트 하려면 어느 버전. 그때에 서 `Extras` 를 선택 하 고 `Intel x86 Emulator Accelerator (HAXM)` , 그 패키지를 설치 하 고:

![][18]

 [18]: img/guide/platforms/android/asdk_man_intel_image_haxm.png

다운로드 후, 당신의 안 드 로이드 sdk에서 사용할 수 있는 인텔 설치 프로그램을 실행 `extras/intel/Hardware_Accelerated_Execution_Manager` . **참고**: `If you have any problems installing the package, you can find more information and step by step guidance check this` [인텔 문서][19] .

 [19]: http://software.intel.com/en-us/android/articles/speeding-up-the-android-emulator-on-intel-architecture

1.  하나 이상의 설치 `Intel x86 Atom` 시스템 이미지 뿐만 아니라 `Intel Hardware Accelerated Execution Manager` , **엑스트라** 에서 사용할 수.

2.  안 드 로이드 SDK에서 사용할 수 있는 인텔 설치 프로그램을 실행`extras/intel/Hardware_Accelerated_Execution_Manager`.

3.  인텔 이미지를 설정 하는 목표와 함께 새로운 AVD를 만들.

4.  에뮬레이터를 시작할 때 HAX 모듈을 로드 하는 데 실패를 나타내는 오류 메시지가 없는 것을 확인 합니다.

## 장치에 배포

장치에 직접 응용 프로그램을, [안 드 로이드 개발자 사이트][20]에 설명 된 대로 장치에서 USB 디버깅이 활성화 된 ㄴ 다는 것을 확인 하 고 미니 USB 케이블을 사용 하 여 시스템에 연결.

 [20]: http://developer.android.com/tools/device.html

이 CLI 명령을 사용 하 여 장치에 응용 프로그램을 밀어 수 있습니다.

        $ cordova run android
    

.. 아니면이 안 드 로이드 중심으로 셸 인터페이스를 사용 하 여:

        $ /path/to/project/cordova/run --device
    

지정 된, 없음 플래그는 `run` 명령 검색 연결 된 장치 또는 현재 실행 중인 에뮬레이터 없는 장치가 발견 되 면, 그렇지 않으면 그것은 에뮬레이터를 지정 하 라는 메시지가 표시 됩니다.

이클립스 내에서 응용 프로그램을 실행 하려면 프로젝트를 마우스 오른쪽 단추로 클릭 하 고 **안 드 로이드 응용 프로그램 → 실행** 선택.

## 다른 명령

다음 응용 프로그램의 자세한 로그 실행으로 생성:

        $ /path/to/project/cordova/log
        C:\path\to\project\cordova\log.bat
    

다음 프로젝트 파일 정리:

        $ /path/to/project/cordova/clean
        C:\path\to\project\cordova\clean.bat