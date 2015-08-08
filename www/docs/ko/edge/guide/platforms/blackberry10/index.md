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

# 블랙베리 10 플랫폼 가이드

이 가이드에서는 코르 도우 바 애플 리 케이 션 블랙베리 10 장치에 대 한 배포 SDK 환경 설정 하는 방법을 보여 줍니다. 블랙베리의 이전 버전에 대 한 다른 SDK 환경 및 블랙베리 플랫폼 가이드에 설명 된 명령줄 도구를 사용 해야 합니다. 블랙베리 10에 대 한 개발, 또는 좁은 플랫폼 중심으로 명령줄 도구 집합에 대 한 크로스 플랫폼 코르도바 CLI를 사용 하려면 여부에 관계 없이 SDK를 설치 해야 합니다. 두 가지 개발 경로 비교 개요를 참조 하십시오. 에 대 한 내용은 각, 명령줄 인터페이스 및 블랙베리 10 셸 도구 설명서를 참조.

## 요구 사항

개발 환경 Windows, Mac 및 리눅스에 유효 하다.

개발자가 사용 해야 합니다 `cordova` 블랙베리 WebWorks SDK 또는 블랙베리 네이티브 SDK와 함께에서 유틸리티. 설치 하는 방법 정보에 대 한 명령줄 인터페이스 참조 `cordova` , 프로젝트, 그때 추가 구축 하 고 각 플랫폼에 대 한 배포.

블랙베리 10 장치 시뮬레이터:

*   프로세서: 인텔 듀얼 코어 2.0 GHz/AMD 애슬론 4200 + 이상
*   디스크 공간: 10 GB
*   RAM 메모리: 4 GB
*   가상화: 다음 중 하나:
    *   **인텔 가상화 기술** (버몬트, 버몬트-x, vmx) → [인텔 VT x 지원 프로세서 목록][1]
    *   **AMD 가상화** (AMD-V, SVM) (2006 년 5 월부터 모든 AMD Cpu AMD 셈프론 제외 하 고 V 포함).

 [1]: http://ark.intel.com/products/virtualizationtechnology

요구 사항에 대 한 자세한 내용은: [BB10 시뮬레이터 requeriments][2].

 [2]: http://developer.blackberry.com/devzone/develop/simulator/simulator_systemrequirements.html

## 블랙베리 WebWorks SDK 설치

다운로드 및 설치 블랙베리 WebWorks SDK [developer.blackberry.com][3] 에서

 [3]: https://developer.blackberry.com/html5/download/

설치 프로그램 경로에 명령줄 도구를 추가 합니다. 귀하의 운영 체제에 따라 새 터미널 창을 열고 하거나 다시 로그인 할 수 있습니다.

## 블랙베리 네이티브 SDK를 설치

예를 들어, 기본 플러그인을 개발할 때 네이티브 코드를 컴파일 할 경우 블랙베리 네이티브 SDK를 설치 해야 합니다.

블랙베리 네이티브 SDK를 가져오려면 다운로드 [developer.blackberry.com][4]에서 사용할 수 있는 검은 딸기를 위한 IDE를 설치 후 블랙베리 네이티브 SDK 설치는 IDE를 사용 하 여. 설치, 다음 시스템 경로에 명령줄 도구를 추가 해야 합니다.

 [4]: http://developer.blackberry.com/native/download/

Windows:

*   **내 컴퓨터 → 속성 → 고급 → 환경 변수** 로 이동.

*   예를 들어 네이티브 SDK 설치 디렉토리 경로에 추가:

        ;C:\bbndk\host_10_1_0_132\win32\x86\usr\bin\


Mac 및 Linux:

*   편집은 `~/.bash_profile` 파일을 네이티브 SDK 설치 된에 따라 다음과 같은 줄을 추가:

        $ export PATH=${PATH}:/Applications/bbndk/host_10_1_0_132/darwin/x86/usr/bin/


    또는 10.2 네이티브 SDK에 대 한:

        $ export PATH=${PATH}:/Applications/Momentics.app/host_10_2_0_15/darwin/x86/usr/bin/


*   현재 세션에서 변경 내용을 적용 하려면 다음을 실행:

        $ source ~/.bash_profile


당신이 커맨드 라인에서 네이티브 SDK를 사용 하 여 어떤 환경 문제가 있어, 설치 경로 내에 있는 귀하의 플랫폼에 대 한 적절 한 파일을 실행:

*   Windows에서 → MS-DOS 셸:

        C:\> \bbndk\bbndk-env_xx_xx_xx_xxxx.bat


*   Windows에서 → git bash 쉘:

        $ `\bbndk\bbndk-env_xx_xx_xx_xxxx.bat`


*   리눅스에서 → 루트 사용자로 설치:

        $ `./opt/bbndk/bbndk-env_xx_xx_xx_xxxx.sh`


*   리눅스에서 → 루트가 아닌 사용자로 설치:

        $ `./home/username/bbndk/bbndk-env_xx_xx_xx_xxxx.sh`


*   Mac:

        $ `/Developer/SDKs/bbndk/bbndk-env_xx_xx_xx_xxxx.sh`


## 서명 설정

장치에서 테스트 하거나 검은 딸기 세계를 통해 애플 리 케이 션을 배포 하려는 경우 시스템 코드 서명에 설정 해야 합니다.

서명 키를 얻으려면 \[블랙베리 키 주문서\] (https://www.blackberry.com/SignedKeys/codesigning.html)로 이동 합니다.

첫 번째 확인란을 선택 합니다: "BlackBerry10 애플 리 케이 션 블랙베리 NDK를 사용 하 여 개발"에 대 한 다음 로그인 또는 BBID을 만듭니다.

암호 입력 하 고 "얻을 토큰" bbidtoken.csk을 다운로드 하기를 클릭 합니다. 다운로드 페이지에 표시 되는 운영 체제의 기본 위치에이 파일을 저장 합니다.

마지막 단계는 서명 인증서를 생성 하는:

    $ blackberry-keytool -genkeypair -storepass <password> -author 'Your Name’


## 프로젝트 만들기

사용 된 `cordova` 명령줄 인터페이스에 설명 된 대로 새 프로젝트를 설정 하는 유틸리티. 예를 들어 소스 코드 디렉토리에:

        $ cordova create hello com.example.hello
        $ cd hello
        $ cordova platform add blackberry10
        $ cordova build


## 에뮬레이터에 배포

장치 에뮬레이터를 실행 하려면 다운로드 하 고 블랙베리 10 시뮬레이터를 설치.

*   [다운로드][4]
*   [시작 하기][5]

 [5]: http://developer.blackberry.com/devzone/develop/simulator/blackberry_10_simulator_start.html

에뮬레이터 또는 장치에 애플 리 케이 션을 테스트 하기 전에 개발 모드를 사용 하도록 설정 해야 합니다.

에뮬레이터 이미지를 시작 다음 홈 화면에서 **설정을** 선택 하십시오.

![][6]

 [6]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_home.png

이동 하는 **보안 및 개인 정보 → 개발 모드** 섹션 및 옵션을 사용:

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_devel.png

프로젝트에 대 한 블랙베리 10 플랫폼을 설정 하면 명령줄 유틸리티의 추가적인 세트 포함 됩니다. 이 경우 프로젝트 최상위 디렉토리에서 호출 다음 명령을 위에 표시 된 IP 주소와 *뮤* 라는 대상을 연결 합니다.

*   Windows:

        $ platforms\blackberry10\cordova\target.bat add emu 169.254.0.1 -t simulator


*   맥/리눅스:

        $ platforms/blackberry10/cordova/target add emu 169.254.0.1 -t simulator


그런 다음 실행 하는 `emulate` 명령을 응용 프로그램을 볼 수:

        $ cordova emulate blackberry10


## 장치에 배포

장치에 배포 하려면 컴퓨터에 연결 되어 있는지 확인 합니다. 개발 모드를 사용 하도록 설정 하 고 위의 에뮬레이터 단원의 desribed로 IP 주소를 얻습니다. 당신은 또한에서 핀을 얻기 위해 필요 합니다는 아래 **설정을** 응용 프로그램 **→에 대 한 하드웨어**:

![][8]

 [8]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_pin.png

IP 주소, 장치 암호 및 핀 이름을 연결할 대상 명령줄 유틸리티를 실행 합니다.

*   Windows:

        $ platforms\blackberry10\cordova\target.bat add mydevice 169.254.0.1 -t device --password 123456 --pin FFFF972E


*   맥/리눅스:

        $ platforms/blackberry10/cordova/target add mydevice 169.254.0.1 -t device --password 123456 --pin FFFF972E


장소:

*   `--password`장치를 잠금 해제 하려면 암호를 말합니다.

*   `--pin`장치 **설정** 응용 프로그램에서 얻은 핀을 말합니다.

그런 다음 실행 하는 `run` 명령을 응용 프로그램을 볼 수:

        blackberry10 실행 $ 코르도바


디버그 토큰은 아직 설정 하지 장치, 서명 키에 등록할 때 지정한 암호와 함께 스크립트를 실행 하는 플랫폼을 사용 하는 오류 메시지가 나타납니다.

*   Windows:

        $ platforms\blackberry10\cordova\run.bat --device --keystorepass mysecret


*   맥/리눅스:

        $ platforms/blackberry10/cordova/run --device --keystorepass mysecret


## WebInspector를 사용 하 여 디버깅

장치 또는 에뮬레이터에서 디버깅 하는 경우 원격으로 응용 프로그램의 내부 상태를 볼 수 WebInspector를 실행할 수 있습니다. 프롬프트는 표준 웹 브라우저와 응용 프로그램에 연결할 수 있도록 URL을 표시 합니다. 자세한 내용은 [디버깅 사용 WebInspector을][9] 참조.

 [9]: http://developer.blackberry.com/html5/documentation/web_inspector_overview_1553586_11.html

## 릴리스 버전을 빌드한

기본적으로 실행 되는 `cordova build` 명령 장치 또는 시뮬레이터에 대 한 테스트를 위해 적당 한 부호 없는 *.bar* 패키지 파일을 만듭니다.

사용 `--release` 릴리스 버전 검은 딸기 세계를 통해 배포를 위해 적당 한 만드는.

    $ cordova build --release --keystorepass <signing password>


`--keystorepass`옵션에 서명 하 여 컴퓨터를 구성할 때 정의 하는 암호를 지정 합니다. 응용 프로그램.

## 다른 위치에 배포

위의 지시 장치에 USB를 통해 연결 되어 또는 시뮬레이터는 로컬 컴퓨터에서 실행 중인 가정 합니다. 그것은 또한 다른 위치에 배포할 수 있습니다.

프로젝트에 대 한 블랙베리 10 플랫폼을 설정 하면 명령줄 유틸리티의 추가적인 세트 포함 됩니다. 이 경우 프로젝트 최상위 디렉토리에서 호출 다음 명령을 대상 IP 주소와 *뮤* 라는 연결 합니다.

*   Windows:

        $ platforms\blackberry10\cordova\build.bat --release --keystorepass mysecret


*   맥/리눅스:

        $ platforms/blackberry10/cordova/build --release --keystorepass mysecret


목표를 정의한 후 실행된 명령을 사용 하 여 제공할 수 있습니다 `--target` .

    $ cordova run blackberry10 --target=emu
