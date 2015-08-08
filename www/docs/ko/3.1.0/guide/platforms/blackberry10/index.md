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

# 블랙베리 10 플랫폼 가이드

이 가이드에서는 구축 하 고 배포 코르도바 애플 리 케이 션 블랙베리 10 장치에 대 한 개발 환경을 설정 하는 방법을 보여 줍니다. 블랙베리의 이전 버전에 대 한 다양 한 블랙베리 플랫폼 가이드에 설명 된 명령줄 도구를 사용 해야 합니다.

## 요구 사항

개발 환경 Windows, Mac 및 리눅스에 유효 하다.

개발자가 사용 해야 합니다 `cordova` 블랙베리 네이티브 SDK와 함께에서 유틸리티. 설치 하는 방법 정보에 대 한 명령줄 인터페이스 참조 `cordova` , 프로젝트 추가 다음 빌드 및 각 플랫폼에 대 한 배포.

## 블랙베리 네이티브 SDK를 설치

블랙베리 네이티브 SDK [developer.blackberry.com][1]에서 제공 됩니다. 설치, 다음 시스템 경로에 명령줄 도구를 추가 해야 합니다.

 [1]: http://developer.blackberry.com/native/download/

Windows:

*   **내 컴퓨터 → 속성 → 고급 → 환경 변수** 로 이동.

*   예를 들어 네이티브 SDK 설치 디렉토리 경로에 추가:

    ;C:\bbndk\host\_10\_1\_0\_132\darwin\x86\usr\bin\

Mac 및 Linux:

*   편집은 `~/.bash_profile` 파일을 네이티브 SDK 설치 된에 따라 다음과 같은 줄을 추가:

    $ 수출 경로 = ${경로}: / 응용 프로그램/bbndk/host\_10\_1\_0\_132/다윈/x 86/usr/빈 /

    또는 10.2 네이티브 SDK에 대 한:

    $ 수출 PATH=${PATH}:/Applications/Momentics.app/host\_10\_2\_0\_15/darwin/x86/usr/bin/

*   현재 세션에서 변경 내용을 적용 하려면 다음을 실행:

    $ 소스 ~/.bash_profile

## 서명 설정

장치에서 테스트 하거나 검은 딸기 세계를 통해 애플 리 케이 션을 배포 하려는 경우 시스템 코드 서명에 설정 해야 합니다.

서명 키를 얻으려면 블랙베리 웹 사이트로 이동 하 고 있는지 지정한 비밀 번호를 유지. 그런 다음 실행 하는 `blackberry-signer` 블랙베리 네이티브 SDK와 함께 포함 된 유틸리티.

자세한 내가 찾을 수 있습니다 여기에.

*   [코드 서명 키에 대 한 등록.][2]

*   [코드 서명을 위해 시스템을 설정 합니다.][3]

 [2]: https://www.blackberry.com/SignedKeys/codesigning.html
 [3]: https://developer.blackberry.com/html5/documentation/signing_setup_bb10_apps_2008396_11.html

## 프로젝트 만들기

사용 된 `cordova` 명령줄 인터페이스에 설명 된 대로 새 프로젝트를 설정 하는 유틸리티. 예를 들어 소스 코드 디렉토리에:

    $ 코르도바 만들기 안녕하세요 com.example.hello $ cd 안녕하세요 $ 코르도바 플랫폼 추가 blackberry10 $ 코르도바 빌드


## 에뮬레이터에 배포

장치 에뮬레이터를 실행 하려면 다운로드 하 고 블랙베리 10 시뮬레이터를 설치.

*   [다운로드][1]
*   [시작 하기][4]

 [4]: http://developer.blackberry.com/devzone/develop/simulator/blackberry_10_simulator_start.html

에뮬레이터 또는 장치에 애플 리 케이 션을 테스트 하기 전에 *대상* 프로젝트에 추가 해야 합니다. 각 고유 이름으로 식별 하 고 IP 주소와 관련 된. 당신은 애플 리 케이 션을 볼 수 사용 하기 전에 에뮬레이터에서 IP 주소를 해야 합니다.

에뮬레이터 이미지를 시작 다음 홈 화면에서 **설정을** 선택 하십시오.

![][5]

 [5]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_home.png

이동 하는 **보안 및 개인 정보 → 개발 모드** 섹션 옵션을 사용 하도록 설정 하 고 IP 주소를 얻기:

![][6]

 [6]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_devel.png

프로젝트에 대 한 블랙베리 10 플랫폼을 설정 하면 명령줄 유틸리티의 추가적인 세트 포함 됩니다. 이 경우 프로젝트 최상위 디렉토리에서 호출 다음 명령을 위에 표시 된 IP 주소와 *뮤* 라는 대상을 연결 합니다.

*   Windows:

    $ platforms\blackberry10\cordova\target.bat 뮤 169.254.0.1-t 시뮬레이터 추가

*   맥/리눅스:

    $ 플랫폼/blackberry10/코르도바/대상 뮤 169.254.0.1-t 시뮬레이터 추가

그런 다음 실행 하는 `emulate` 명령을 응용 프로그램을 볼 수:

    $ 코르도바 에뮬레이션 blackberry10


## 장치에 배포

장치에 배포 하려면 컴퓨터에 연결 되어 있는지 확인 합니다. 개발 모드를 사용 하도록 설정 하 고 위의 에뮬레이터 단원의 desribed로 IP 주소를 얻습니다. 당신은 또한에서 핀을 얻기 위해 필요 합니다는 아래 **설정을** 응용 프로그램 **→에 대 한 하드웨어**:

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_pin.png

IP 주소, 장치 암호 및 핀 이름을 연결할 대상 명령줄 유틸리티를 실행 합니다.

*   Windows:

    mydevice 169.254.0.1-t 장치-암호 123456-FFFF972E 핀을 추가 하는 $ platforms\blackberry10\cordova\target.bat

*   맥/리눅스:

    $ 플랫폼/blackberry10/코르도바/대상 추가 mydevice 169.254.0.1-t 장치-암호 123456-핀 FFFF972E

장소:

*   `--password`장치를 잠금 해제 하려면 암호를 말합니다.

*   `--pin`장치 **설정** 응용 프로그램에서 얻은 핀을 말합니다.

그런 다음 실행 하는 `run` 명령을 응용 프로그램을 볼 수:

    blackberry10 실행 $ 코르도바


디버그 토큰은 아직 설정 하지 장치, 서명 키에 등록할 때 지정한 암호와 함께 스크립트를 실행 하는 플랫폼을 사용 하는 오류 메시지가 나타납니다.

*   Windows:

    $ platforms\blackberry10\cordova\run.bat-장치-keystorepass mysecret

*   맥/리눅스:

    $ 플랫폼/blackberry10/코르도바/실행-장치-keystorepass mysecret

## WebInspector를 사용 하 여 디버깅

장치 또는 에뮬레이터에서 디버깅 하는 경우 원격으로 응용 프로그램의 내부 상태를 볼 수 WebInspector를 실행할 수 있습니다. 프롬프트는 표준 웹 브라우저와 응용 프로그램에 연결할 수 있도록 URL을 표시 합니다. 자세한 내용은 [디버깅 사용 WebInspector을][8] 참조.

 [8]: http://developer.blackberry.com/html5/documentation/web_inspector_overview_1553586_11.html

## 릴리스 버전을 빌드한

기본적으로 실행 되는 `cordova build` 명령 장치 또는 시뮬레이터에 대 한 테스트를 위해 적당 한 부호 없는 *.bar* 패키지 파일을 만듭니다.

다른 실행 해야 `build` 릴리스 버전 검은 딸기 세계를 통해 배포를 위해 적당 한 만드는 명령. 에 의존 하지 않는 있는 `cordova` CLI 도구 대신 다음 구문을 사용 하 여:

*   Windows:

    $ platforms\blackberry10\cordova\build.bat-릴리스-keystorepass mysecret

*   맥/리눅스:

    $ 플랫폼/blackberry10/코르도바/빌드-릴리스-keystorepass mysecret

`--keystorepass`옵션에 서명 하 여 컴퓨터를 구성할 때 정의 하는 암호를 지정 합니다. 응용 프로그램.
