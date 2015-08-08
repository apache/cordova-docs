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

# 아마존 화재 OS 플랫폼 가이드

이 가이드에는 코르도바 애플 리 케이 션 킨 들의 화재 HDX 같은 아마존 화재 OS 장치에 대 한 배포 SDK 개발 환경을 설정 하는 방법을 보여 줍니다.

자세한 플랫폼 관련 내용은 다음을 참조 하십시오.

*   아마존 화재 운영 체제 구성
*   아마존 화재 OS WebViews
*   아마존 화재 OS 플러그인

## 요구 사항 및 지원

안 드 로이드 SDK와 아마존 WebView SDK 아마존 화재 운영 체제에 대 한 코르도바 애플 리 케이 션을 개발이 필요 합니다. 아래의 링크에서 이러한 Sdk에 대 한 요구 사항을 확인 하십시오.

*   [안 드 로이드 SDK 시스템][1]

*   [아마존 WebView SDK][2]

 [1]: http://developer.android.com/sdk/
 [2]: https://developer.amazon.com/sdk/fire/IntegratingAWV.html#installawv

## 설치

### 안 드 로이드 SDK

[Developer.android.com/sdk][1]에서 안 드 로이드 SDK를 설치 합니다. 그렇지 않으면 다운로드 이동 위치는 SDK를 설치를 선택으로 나타날 수도 있습니다 `adt-bundle` 트리 개발 도구를 저장 하는 곳에.

코르 도우 바 작업 명령줄 도구, SDK의 포함 해야 `tools` 와 `platform-tools` 디렉터리 경로 환경에서.

만들거나 수정 하려면 텍스트 편집기를 사용할 수 맥, 리눅스 또는 다른 유닉스 플랫폼에는 `~/.bash_profile` 파일을 SDK 설치에 따라 다음과 같은 줄을 추가:

    내보내기 경로 = ${경로}: / 개발/adt-번들/sdk/플랫폼-도구: / 개발/adt-번들/sdk/도구


이것 새롭게 문을 연 터미널 windows에서 SDK 도구를 제공합니다. 그렇지 않으면 현재 세션에서 사용할 수 있도록이 실행.

    $ 소스 ~/.bash_profile


윈도우 7에 경로 환경 수정:

*   바탕 화면 왼쪽 아래 **시작** 메뉴에 클릭, **컴퓨터**를 마우스 오른쪽 단추로 클릭 한 다음 **속성** 을 클릭 합니다.

*   왼쪽 열에서 **고급 시스템 설정** 을 클릭 합니다.

*   결과 대화 상자에서 눌러 **환경 변수**.

*   **경로** 변수를 선택 하 고 **편집** 을 누릅니다.

*   설치한 SDK를 예를 기반으로 경로에 다음을 추가:

        ;C:\Development\adt-bundle\sdk\platform-tools;C:\Development\adt-bundle\sdk\tools


*   값을 저장 하 고 두 대화 상자를 닫습니다.

또한 명령 프롬프트 및 유형 자바와 개미 열기를 사용 하도록 설정 해야 할 수 있습니다 `java` , 또한 입력 `ant` . 추가 경로 중 실행 실패:

    ;%JAVA_HOME%\bin;%ANT_HOME%\bin


### 아마존 WebView SDK

[아마존 개발자 포털][2] 에서 아마존 WebView SDK를 다운로드.

*   생성 한 `libs/` 폴더에서 `~/.cordova/lib/amazon-fireos/cordova/3.1.0/` 폴더.
*   추가 `awv_interface.jar` 를 다운로드 한 SDK에서`~/.cordova/lib/amazon-fireos/cordova/3.1.0/libs/`

## Sdk에서는 프로젝트를 열려면

사용 된 `cordova` 에 코르도바는 명령줄 인터페이스를 설명 하는 대로 새로운 프로젝트를 설정 하는 유틸리티. 예를 들어 소스 코드 디렉토리에:

    $ cordova create hello com.example.hello "HelloWorld"
    $ cd hello
    $ cordova platform add amazon-fireos
    $ cordova build


일단 창조 해, 여기에 SDK를 사용 하 여 그것을 수정 하는 방법이입니다.

*   **이클립스** 응용 프로그램을 시작 합니다.

*   **새 프로젝트** 메뉴 항목을 선택 합니다.

*   결과 대화 상자에서 **기존 코드에서 안 드 로이드 프로젝트** 를 선택한 **다음**키를 누릅니다. ![][3]

*   이동 `hello` , 또는 어느 디렉토리 만든 프로젝트에 대 한 다음에 `platforms/amazon-fireos` 하위 디렉터리.

*   **완료** 를 누르면합니다.

 [3]: {{ site.baseurl }}/static/img/guide/platforms//eclipse_new_project.png

일단 이클립스 창이 열립니다, 해결 되지 않은 문제를 나타내는 빨간색 **X** 나타날 수 있습니다. 그렇다면, 다음 추가 단계를 수행:

*   프로젝트 디렉터리에서 마우스 오른쪽 단추로 클릭 합니다.

*   결과 **속성** 대화 상자에서 탐색 창에서 **안 드 로이드** 선택 합니다.

*   빌드 대상 프로젝트에 대 한, 설치한 최고의 안 드 로이드 API 레벨을 선택 합니다.

*   **확인** 을 클릭 합니다.

*   **프로젝트** 메뉴에서 **클린** 을 선택 합니다. 이 프로젝트의 모든 오류를 수정 한다.

## 장치에 배포

장치에 직접 응용 프로그램을, [안 드 로이드 개발자 사이트][4]에 설명 된 대로 장치에서 USB 디버깅이 활성화 된 ㄴ 다는 것을 확인 하 고 미니 USB 케이블을 사용 하 여 시스템에 연결.

 [4]: http://developer.android.com/tools/device.html

명령줄에서 장치에 app를 밀어 수 있습니다.

    $ cordova run amazon-fireos


또는 Eclipse 내에서 프로젝트를 마우스 오른쪽 단추로 클릭 고 **안 드 로이드 응용 프로그램 → 실행** 선택.

**참고**: 현재, 에뮬레이터를 통해 테스트는 지원 되지 않습니다 아마존 WebView 기반 애플 리 케이 션을 위한.
