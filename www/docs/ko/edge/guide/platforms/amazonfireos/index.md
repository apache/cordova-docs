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

## 소개

아마존 화재 OS 플랫폼을 대상으로, 코르도바 개발자 빛나 다 소방 장치에 통합 하는 고급 웹 엔진을 활용 하는 하이브리드 웹 애플 리 케이 션을 만들 수 있습니다. 아마존 WebView API (AWV) 크롬에서 파생 된 웹 런타임 화재 운영 체제 독점 이다. 안 드 로이드 디바이스와 함께 제공 되는 WebView에 대 한 대체품 AWV 빠른 자바 스크립트 엔진 (V8), 원격 디버깅 및 가속화 된 2D 캔버스를 포함 하 여 빛나 다 소방 장치 하드웨어 최적화에 대 한 지원을 제공 하 여 더 나은 수행 하 고 더 강력한 하이브리드 웹 애플 리 케이 션을 만들 수 및 HTML5 기능 안 드 로이드의에 의해 지원 되지 않습니다에 대 한 액세스와 같은 WebView에 내장 된: CSS Calc, 양식 유효성 검사, getUserMedia IndexedDB, 웹 노동자, WebSockets와 WebGL.

아마존 WebView API에 대 한 자세한 내용은 아마존 개발자 포털의 [HTML5 하이브리드 앱 페이지][1]를 참조 하십시오. 시작 및 기타 지 고에 대 한 질문에 대 한 지원 문제, 아마존 개발자 포털 [포럼-HTML5 하이브리드 앱을][2] 참조 하시기 바랍니다.

 [1]: https://developer.amazon.com/public/solutions/platforms/android-fireos/docs/building-and-testing-your-hybrid-app
 [2]: http://forums.developer.amazon.com/forums/category.jspa?categoryID=41

## 요구 사항 및 지원

코르 도우 바 애플 리 케이 션을 개발 하는 아마존 화재 운영 체제에 대 한 다양 한 아마존 WebView SDK로 안 드 로이드 개발에 필요한 모든 것을 포함 한 지원 파일을 설치를 해야 합니다. 아래 목록에서 필요한 설치 확인:

*   명령줄 인터페이스
*   [안 드 로이드 SDK][3]
*   [아파치 개미][4]
*   [아마존 WebView SDK][1]

 [3]: http://developer.android.com/sdk/
 [4]: http://ant.apache.org

## 설치

### 안 드 로이드 SDK와 아파치 개미

[Developer.android.com/sdk][3]에서 안 드 로이드 SDK를 설치 합니다. 그렇지 않으면 다운로드 이동 위치는 SDK를 설치를 선택으로 나타날 수도 있습니다 `adt-bundle` 트리 개발 도구를 저장 하는 곳에.

안 드 로이드 SDK 관리자를 실행 해야 합니다 ( `android` 커맨드 라인에서) 코르도바 프로젝트를 시작 하기 전에 적어도 한 번. **특히 API 레벨 19**안 드 로이드 SDK 도구와 SDK 플랫폼 최신 버전을 설치 해야 합니다. 빛나 다 화재 OS 장치를 위한 개발 환경 설정에 대 한 자세한 내용은 아마존 개발자 포털 [개발 환경 설정][5] 를 참조 하십시오.

 [5]: https://developer.amazon.com/public/resources/development-tools/ide-tools/tech-docs/01-setting-up-your-development-environment

설치 아파치 Ant 빌드 도구 [개미 바이너리 배포판을 다운로드][6]하 여 나중에 참조할 수 있습니다 디렉토리에 압축을 푸는. 더 많은 정보에 대 한 [개미 설명서][7] 참조 하십시오.

 [6]: http://ant.apache.org/bindownload.cgi
 [7]: http://ant.apache.org/manual/index.html

코르 도우 바 작업 명령줄 도구, 안 드 로이드 SDK의 포함 해야 `tools` , `platform-tools` 및 `apache-ant/bin` 디렉터리 경로 환경에서.

#### 맥/리눅스 경로

만들거나 수정 하려면 텍스트 편집기를 사용할 수 맥, 리눅스 또는 다른 유닉스 플랫폼에는 `~/.bash_profile` 파일을 SDK와 개미가 설치에 따라 다음과 같은 줄을 추가:

    내보내기 경로 = ${경로}: / 개발/adt-번들/sdk/플랫폼-도구: / 개발/adt-번들/sdk/도구: / 개발/아파치 개미/빈


이것 새롭게 문을 연 터미널 windows에서 SDK 도구를 제공합니다. 그렇지 않으면 현재 세션에서 사용할 수 있도록이 실행.

    $ source ~/.bash_profile


#### Windows 경로

Windows에서 경로 환경 수정:

*   바탕 화면 왼쪽 아래 **시작** 메뉴에 클릭, **컴퓨터**를 마우스 오른쪽 단추로 클릭 한 다음 **속성** 을 클릭 합니다.

*   왼쪽 열에서 **고급 시스템 설정** 을 클릭 합니다.

*   결과 대화 상자에서 눌러 **환경 변수**.

*   **경로** 변수를 선택 하 고 **편집** 을 누릅니다.

*   설치한 SDK와 개미, 예를 들어 기반 경로에 다음을 추가:

        ;C:\Development\adt-bundle\sdk\platform-tools;C:\Development\adt-bundle\sdk\tools;C:\Development\apache-ant\bin


*   값을 저장 하 고 두 대화 상자를 닫습니다.

*   자바를 사용 해야 합니다. 명령 프롬프트를 열고 입력 `java` 실행 되지 않는 경우, 뿐만 아니라 당신의 경로를 자바 바이너리의 위치를 추가 합니다. %JAVA_HOME% 설치 된 JDK 디렉토리를 가리키는 있는지 확인 하십시오. JAVA_HOME 환경 변수 별도로 추가를 할 수 있습니다.

        %JAVA_HOME%\bin


### 아마존 WebView SDK

코르도바 애플 리 케이 션 아마존 화재 OS 플랫폼 대상을 사용 하 여 만들려면 다운로드 풀고 아마존 WebView SDK 지원 파일을 설치 해야 합니다. 이 단계는 첫 번째 아마존 화재 OS 프로젝트를 위해 할 수만 필요 합니다.

*   [아마존 개발자 포털][1] 에서 아마존 WebView SDK를 다운로드.

*   복사 `awv_interface.jar` 코르도바의 작업 디렉터리에 다운로드 한 SDK에서. 존재 하지 않는 경우 commonlibs(shown below) 폴더를 만듭니다.

    **Mac/Linux:** `~/.cordova/lib/commonlibs/`

    **Windows:** `%USERPROFILE%\.cordova\lib\commonlibs`

## 아마존 화재 운영 체제에 대 한 새 프로젝트를 만들려면

사용 된 `cordova` 에 코르도바는 명령줄 인터페이스를 설명 하는 대로 새로운 프로젝트를 설정 하는 유틸리티. 예를 들어 소스 코드 디렉토리에:

    $ cordova create hello com.example.hello "HelloWorld"
    $ cd hello
    $ cordova platform add amazon-fireos
    $ cordova build


***참고:*** 아마존 fireos 플랫폼, 시스템에 설치 되어 처음으로 그것은 코르도바 작업 디렉터리에 적절 한 파일을 다운로드 하지만 AWV SDK 지원 파일 (위 참조) 누락으로 다음 못합니다. 설치 하려면 위의 지침에 따라는 `awv_interface.jar` , 다음 제거 하 고 다시 아마존 fireos 플랫폼을 프로젝트에 추가 합니다. 이 단계는 첫 번째 아마존 화재 OS 프로젝트를 위해 할 수만 필요 합니다.

## 장치에 배포

장치에 직접 응용 프로그램을, [안 드 로이드 개발자 사이트][8]에 설명 된 대로 장치에서 USB 디버깅이 활성화 된 ㄴ 다는 것을 확인 하 고 미니 USB 케이블을 사용 하 여 시스템에 연결.

 [8]: http://developer.android.com/tools/device.html

명령줄에서 장치에 app를 밀어 수 있습니다.

    아마존 fireos 실행 $ 코르도바


또는 Eclipse 내에서 프로젝트를 마우스 오른쪽 단추로 클릭 하 고 **안 드 로이드 응용 프로그램 → 실행** 선택.

**참고**: 현재, 아마존 WebView 기반 애플 리 케이 션을 위한 테스트는 에뮬레이터를 통해 지원 되지 않습니다, 또한 아마존 WebView API는만 불 운영 체제 장치에 사용할 수 있습니다. 자세한 내용은 [아마존 WebView API SDK][1] 설명서를 참조 하십시오.

### 실행 플래그

실행된 명령 코르도바 명령줄 인터페이스 문서에 지정 된 선택적 매개 변수를 허용, 불 OS 또한 추가 허용 `--debug` 원격 웹 디버깅에 대 한 크롬의 개발자 도구를 사용 하는 플래그.

개발자 도구를 사용 하려면을 입력 합니다.:

    $ cordova run --debug amazon-fireos


이 도구를 실행 중인 클라이언트를 수 있게 된다. 연결할 수 있습니다 다음 클라이언트 포트 포워딩 안 드 로이드 디버그 브리지 (adb)를 사용 하 여 응용 프로그램의 패키지 이름을 참조 합니다.

예를 들어:

    adb 앞으로 tcp:9222 localabstract:com.example.helloworld.devtools


크롬 기반 브라우저를 통해 DevTools를 사용 하 여 이동 하 여 다음 수 있습니다.`http://localhost:9222`.

### 선택적 이클립스 지원

만들어진 프로젝트를 수정 하려면 안 드 로이드 SDK와 함께 제공 되는 이클립스를 사용할 수 있습니다. 코르 도우 바 명령줄 도구를 사용 하 여 계속 되 면 이클립스를 통해 수정한 덮어쓸 수 조심.

*   **이클립스** 응용 프로그램을 시작 합니다.

*   **새 프로젝트** 메뉴 항목을 선택 합니다.

*   결과 대화 상자에서 **기존 코드에서 안 드 로이드 프로젝트** 를 선택한 **다음**키를 누릅니다. ![][9]

*   이동 `hello` , 또는 어느 디렉토리 만든 프로젝트에 대 한 다음에 `platforms/amazon-fireos` 하위 디렉터리.

*   이클립스는 안녕하세요, 안녕하세요-CorddovaLib-2 추가 될 프로젝트에 표시 됩니다. 둘 다를 추가 합니다.

*   **완료** 를 누르면합니다.

 [9]: {{ site.baseurl }}/static/img/guide/platforms/android/eclipse_new_project.png

일단 이클립스 창이 열립니다, 해결 되지 않은 문제를 나타내는 빨간색 **X** 나타날 수 있습니다. 그렇다면, 다음 추가 단계를 수행:

*   프로젝트 디렉터리에서 마우스 오른쪽 단추로 클릭 합니다.

*   결과 **속성** 대화 상자에서 탐색 창에서 **안 드 로이드** 선택 합니다.

*   프로젝트 빌드 대상에 대 한 높은 안 드 로이드 API 레벨 (현재 API 레벨 19) 설치를 선택 합니다.

*   **확인** 을 클릭 합니다.

*   **프로젝트** 메뉴에서 **클린** 을 선택 합니다. 이 프로젝트의 모든 오류를 수정 한다.
