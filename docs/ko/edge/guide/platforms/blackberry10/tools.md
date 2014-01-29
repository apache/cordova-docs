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

# 블랙베리 10 명령줄 도구

`cordova`명령줄 유틸리티는 한 번에 여러 플랫폼에서 응용 프로그램을 만들 수 있는 고급 도구. 코르 도우 바 프레임 워크의 이전 버전 각 플랫폼에 특정 명령줄 도구 집합을 제공합니다. CLI에 대 안으로 그들을 사용 하 여 [cordova.apache.org][1]에서 코르도바의이 버전을 다운로드 해야 합니다. 다운로드는 각 플랫폼에 대 한 별도 아카이브를 포함합니다. 당신이 목표 하고자 하는 플랫폼을 확장 합니다. 여기에 설명 된 도구는 일반적으로 최상위 수준에서 사용할 수 있는 `bin` 자세한 지시 사항에 대 한 디렉터리, 그렇지 않으면 **README** 파일을 참조 하십시오.

 [1]: http://cordova.apache.org

낮은 수준의 명령줄 인터페이스에 대 한 정보에 대 한 있도록 플러그인 플러그인 관리를 사용 하 여 Plugman를 참조 하십시오. 개요 응용 프로그램 플러그인을 참조 하십시오.

아래에 나열 된 모든 명령을 사용 하 여 도움을 필요로 하는 경우와 함께 명령을 입력은 `-h` 또는 `-help` 는 모든 명령에 의해 지원 되 고 각 사용할 수 있는 인수에 대 한 설명을 제공 하는 인수.

## 응용 프로그램 만들기

`create`명령은 새 프로젝트를 만듭니다:

    빈/만들기 < 경로 프로젝트 >< 프로젝트-패키지 >< 프로젝트 이름 >
    

어디

*   `<path-to-project>`만든 프로젝트를 원하는 디렉터리를 지정 합니다.

*   `<project-package>`역방향 도메인 스타일 식별자를 지정 합니다.

*   `<project-name>`애플 리 케이 션의 표시 이름을 지정 합니다.

**참고**:는 `create` 명령을 통해 종속성 설치 부트스트랩는 `npm install` 명령. 설치 디렉터리와 시스템 사용 권한에 따라이 관리자 권한이 필요할 수 있습니다. Os X/리눅스에 문제가 있는 경우 실행 `sudo npm install` 을 사용 하기 전에 `create` 명령. Windows에서 실행 `npm install` 명령줄 유틸리티에서 관리자 권한으로 열립니다.

## 대상 생성

`target`명령을 에뮬레이터 또는 응용 프로그램을 테스트 하려면 사용 하는 검은 딸기 장치를 관리할 수 있습니다. 추가 하거나 또는 대상을, 제거, 기본 대상으로 목표를 설정 수 있습니다.

### 대상 추가

    < 경로 프로젝트 >/코르도바/대상 추가 < 이름 >< ip 주소 > [-t |-유형 < 장치 | 시뮬레이터 >] [-p |-< 암호 > 암호] [-핀 < 장치 핀 >]
    

어디

*   `<name>`대상에 대 한 고유 이름을 지정합니다.

*   `<ip-address>`검은 딸기 장치 또는 시뮬레이터의 ip 주소를 지정합니다.

*   `-p | --password <password>`장치 또는 에뮬레이터에 대 한 암호를 지정합니다. 이것이 장치 또는 에뮬레이터는 암호로 보호 된 경우에 필요 합니다.

*   `--pin <device-pin>`디버그 토큰에 대 한 유효한 호스트 장치를 식별 하는 블랙베리 장치의 PIN을 지정 합니다. 이 인수는 디버그 토큰 생성 하는 경우에 필요 합니다.

### 대상을 제거합니다

    < 경로 프로젝트 >/코르도바/대상 제거 < 이름 >
    

### 기본적으로 목표를 설정

    < 경로 프로젝트 >/코르도바/대상 기본 < 이름 >
    

## 응용 프로그램 빌드

`build`명령.bar 파일로 프로젝트를 빌드합니다. 어느 릴리스 모드 (서명된.bar 파일 생성)에서 또는 디버그 모드 (생산 부호 없는.bar 파일)에서 응용 프로그램을 빌드할 수 있습니다.

### 릴리스 모드에서 응용 프로그램을 구축

    < 경로 프로젝트 >/코르도바/릴리스 빌드 [-k |-keystorepass < 암호 >] [-b |-buildId < 숫자 >] [-p | < params JSON 파일 > 매개 변수]
    

어디

*   `-k | --keystorepass <password>`응용 프로그램에 서명 하 여 컴퓨터를 구성할 때 정의 된 암호를 지정 합니다.

*   `-b | --buildId <number>`응용 프로그램의 빌드 버전 번호를 지정합니다. 일반적으로, 서명 된 이전 버전에서이 숫자를 증가 해야 합니다. 이 인수는 선택 사항입니다.

*   `-p | --params <params-JSON-file>`다운스트림 도구에 전달할 추가 매개 변수를 포함 하는 JSON 파일을 지정 합니다. 이 인수는 선택 사항입니다.

### 디버그 모드에서 프로젝트 빌드

    < 경로 프로젝트 >/코르도바/빌드 디버그 [< 대상 >] [-k |-keystorepass < 암호 >] [-p |-params < params JSON 파일 >] [-ll |-loglevel < error|warn|verbose >]
    

어디

*   `<target>`이전에 추가 된 대상의 이름을 지정합니다. 경우 `<target>` 를 지정 하지 않으면 기본 대상을 사용 하는 경우 하나 만들었습니다. 이 인수는 단지 필요 블랙베리 장치에 응용 프로그램을 배포 하는 스크립트 또는 에뮬레이터 및 기본 대상 작성 하지 않았습니다. 또한, 경우 `<target>` 은 장치, 장치를 USB 연결 하 여 컴퓨터에 연결 해야 합니다 또는 컴퓨터와 동일한 Wi-fi 네트워크에 연결 되어야 합니다.

*   `-k | --keystorepass <password>`응용 프로그램에 서명 하 여 컴퓨터를 구성할 때 정의 된 암호를 지정 합니다. 이 암호 또한 디버그 토큰을 만드는 데 사용 됩니다. 이 인수는 스크립트를 만들고 당신을 위해 디버그 토큰 설치 경우에 필요 합니다.

*   `-p | --params <params-JSON-file>`다운스트림 도구에 전달할 추가 매개 변수를 포함 하는 JSON 파일을 지정 합니다.

*   `-ll | --loglevel <level>`로그 레벨을 지정합니다. 로그 수준 중 하나가 될 수 있습니다 `error` , `warn` , 또는`verbose`.

당신이 이전 정의 경우 기본 대상 (이전 대상 블랙베리 장치의 경우 디버그 토큰에 설치 된), 당신이 앱 인수 없이 스크립트 패키지와 스크립트를 실행할 수 있습니다 하 고 기본 대상으로 배포 합니다. 예를 들어:

    < 경로 프로젝트 >/코르도바/디버그 빌드
    

## 응용 프로그램 실행

`run`명령을 지정 된 블랙베리 장치 또는 에뮬레이터에 응용 프로그램의 최신 빌드를 배포 합니다. 응용 프로그램을 배포 하려면 장치 또는 에뮬레이터에 대 한 대상을 지정 하려면 필요 합니다.

    < 경로 프로젝트 >/코르도바/< 대상 > 실행
    

.. 무한 `<target>` 이전에 추가 된 대상의 이름을 지정 합니다. 경우 `<target>` 는 장치, 그 후에 USB 케이블을 통해 또는 다른 사람 컴퓨터와 동일한 Wi-fi 네트워크를 통해 컴퓨터에 연결 해야 합니다.

## 플러그인 처리

`target`명령을 사용 하면 추가 하 고 플러그인을 제거 합니다. 로컬 호스트 플러그인을 가져올:

    < 경로 프로젝트 >/코르도바/플러그인 가져오기 < 경로 플러그인 >
    

설치 된 플러그인의 목록을 보려면

    < 경로 프로젝트 >/코르도바/플러그인 ls
    

플러그인을 추가:

    < 경로 프로젝트 >/코르도바/플러그인 추가 < 이름 >
    

플러그인을 제거 합니다.

    < 경로 프로젝트 >/코르도바/플러그인 rm < 이름 >