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

# 안 드 로이드 플랫폼 가이드

이 가이드에는 코르도바 애플 리 케이 션 안 드 로이드 장치에 대 한 배포 SDK 개발 환경을 설정 하는 방법을 보여 줍니다. 자세한 플랫폼 관련 내용은 다음을 참조 하십시오.

*   안 드 로이드 구성
*   안 드 로이드 WebViews
*   안 드 로이드 플러그인
*   안 드 로이드 업그레이드
*   안 드 로이드 명령줄 도구

위의 명령줄 도구 코르도바 3.0 이전 버전을 참조 하십시오. 현재 인터페이스에 대 한 내용은 명령줄 인터페이스를 참조 하십시오.

## 요구 사항 및 지원

안 드 로이드 SDK에 대 한 [시스템 요구 사항][1] 을 참조 하십시오.

 [1]: http://developer.android.com/sdk/index.html

코르 도우 바 안 드 로이드 2.2, 2.3, 및 4.x를 지원합니다. 더 이상 일반적으로 플랫폼은 사용으로 그들은 Google의 [대시보드 배포에][2] 5% 찍어.

 [2]: http://developer.android.com/about/dashboards/index.html

<!--
NOTE, doc said:
- Android 2.1 (Deprecated May 2013)
- Android 3.x (Deprecated May 2013)
-->

개발자가 사용 해야 합니다 `cordova` 안 드 로이드 SDK와 함께에서 유틸리티. 설치, 프로젝트 추가 다음 빌드하고 프로젝트를 배포 하는 방법 정보에 대 한 명령줄 인터페이스를 참조.

## SDK 설치

[Developer.android.com/sdk][3]에서 안 드 로이드 SDK를 설치 합니다. 그렇지 않으면 다운로드 이동 위치는 SDK를 설치를 선택으로 나타날 수도 있습니다 `adt-bundle` 트리 개발 도구를 저장 하는 곳에.

 [3]: http://developer.android.com/sdk/

코르 도우 바 작업 명령줄 도구, SDK의 포함 해야 `tools` 와 `platform-tools` 디렉터리 경로 환경에서. 만들거나 수정 하려면 텍스트 편집기를 사용할 수 맥에 있는 `~/.bash_profile` 파일을 SDK 설치에 따라 다음과 같은 줄을 추가:

    export PATH=${PATH}:/Development/adt-bundle/sdk/platform-tools:/Development/adt-bundle/sdk/tools


이것 새롭게 문을 연 터미널 windows에서 SDK 도구를 제공합니다. 그렇지 않으면 현재 세션에서 사용할 수 있도록이 실행.

    $ source ~/.bash_profile


윈도우 7에 경로 환경 수정:

*   바탕 화면 왼쪽 아래 **시작** 메뉴에 클릭, **컴퓨터**를 마우스 오른쪽 단추로 클릭 한 다음 **속성** 을 클릭 합니다.

*   왼쪽 열에서 **고급 시스템 설정** 을 클릭 합니다.

*   결과 대화 상자에서 눌러 **환경 변수**.

*   **경로** 변수를 선택 하 고 **편집** 을 누릅니다.

*   설치한 SDK를 예를 기반으로 경로에 다음을 추가:

        ;C:\Development\adt-bundle\sdk\platform-tools;C:\Development\adt-bundle\sdk\tools


*   값을 저장 하 고 두 대화 상자를 닫습니다.

또한 명령 프롬프트 및 유형 자바와 개미 열기를 사용 하도록 설정 해야 할 수 있습니다 `java` , 또한 입력 `ant` . 추가 경로 중 실행 실패:

        %JAVA_HOME%\bin;%ANT_HOME%\bin


## Sdk에서는 프로젝트를 열려면

사용 된 `cordova` 에 코르도바는 명령줄 인터페이스를 설명 하는 대로 새로운 프로젝트를 설정 하는 유틸리티. 예를 들어 소스 코드 디렉토리에:

        $ 코르도바 만들기 안녕하세요 com.example.hello "HelloWorld" $ cd 안녕하세요 $ 코르도바 플랫폼 안 드 로이드 $ 코르도바 빌드 추가


일단 창조 해, 여기에 SDK를 사용 하 여 그것을 수정 하는 방법이입니다.

*   **이클립스** 응용 프로그램을 시작 합니다.

*   **새 프로젝트** 메뉴 항목을 선택 합니다.

*   결과 대화 상자에서 **기존 코드에서 안 드 로이드 프로젝트** 를 선택한 **다음**키를 누릅니다. ![][4]

*   이동 `hello` , 또는 어느 디렉토리 만든 프로젝트에 대 한 다음에 `platforms/android` 하위 디렉터리.

*   **완료** 를 누르면합니다.

 [4]: {{ site.baseurl }}/static/img/guide/platforms/android/eclipse_new_project.png

일단 이클립스 창이 열립니다, 해결 되지 않은 문제를 나타내는 빨간색 **X** 나타날 수 있습니다. 그렇다면, 다음 추가 단계를 수행:

*   프로젝트 디렉터리에서 마우스 오른쪽 단추로 클릭 합니다.

*   결과 **속성** 대화 상자에서 탐색 창에서 **안 드 로이드** 선택 합니다.

*   빌드 대상 프로젝트에 대 한, 설치한 최고의 안 드 로이드 API 레벨을 선택 합니다.

*   **확인** 을 클릭 합니다.

*   **프로젝트** 메뉴에서 **클린** 을 선택 합니다. 이 프로젝트의 모든 오류를 수정 한다.

## 에뮬레이터에 배포

사용할 수 있는 `cordova` 유틸리티는 에뮬레이터에서 응용 프로그램 실행을 SDK 내에서 실행할 수 있습니다. 어느 쪽이 든, SDK 먼저 하나 이상의 장치를 표시 하도록 구성 되어야 합니다. 이렇게 하려면, 안 드 로이드 SDK 관리자, 이클립스에서 별도로 실행 되는 Java 응용 프로그램을 사용 합니다. 그것을 여는 방법은 두 가지:

*   실행 `android` 커맨드 라인에.

*   이클립스 내에서이 도구 모음 아이콘 눌러:

    ![][5]

 [5]: {{ site.baseurl }}/static/img/guide/platforms/android/eclipse_android_sdk_button.png

일단 오픈, 안 드 로이드 SDK 관리자는 다양 한 런타임 라이브러리를 표시 합니다.

![][6]

 [6]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_window.png

**도구 → 관리 AVDs** (안 드 로이드 가상 장치)를 선택한 다음 **장치 정의** 결과 대화 상자에서 모든 항목 선택:

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_device.png

보도 **AVD 생성**, 선택적으로 이름, 수정 변경 내용을 적용 하려면 **확인** 을 누릅니다.

![][8]

 [8]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_newAVD.png

AVD 다음 **안 드 로이드 가상 장치** 목록에 나타납니다.

![][9]

 [9]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_avds.png

별도 응용 프로그램으로 에뮬레이터를 열려면는 AVD를 선택 하 고 **시작**을 누릅니다. 하드웨어 단추에 대 한 사용할 수 있는 추가 컨트롤 장치 것 만큼 출시:

![][10]

 [10]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_emulator.png

이 시점에서 사용할 수 있는 `cordova` 명령줄에서 에뮬레이터에 응용 프로그램을 배포 하려면 유틸리티:

        $ 코르도바 에뮬레이션 안 드 로이드


대신 이클립스에서 작업 하는, 프로젝트를 마우스 오른쪽 단추로 클릭 하 고 **→ 안 드 로이드 응용 프로그램을 실행**을 선택 합니다. 이미 열려 있다면 아무도 AVD를 지정 하려면 요청 받을 수 있습니다.

더 빠른 경험을 위해 인텔 기반 에뮬레이터 이미지를 사용 합니다.

*   하나 이상의 설치 `Intel x86 Atom` 시스템 이미지 뿐만 아니라 `Intel Hardware Accelerated Execution Manager` , **엑스트라** 에서 사용할 수.

*   안 드 로이드 SDK에서 사용할 수 있는 인텔 설치 프로그램을 실행`extras/intel/Hardware_Accelerated_Execution_Manager`.

*   인텔 이미지를 설정 하는 목표와 함께 새로운 AVD를 만들.

*   에뮬레이터를 시작할 때 HAX 모듈을 로드 하는 데 실패를 나타내는 오류 메시지가 없는 것을 확인 합니다.

## 장치에 배포

장치에 직접 응용 프로그램을, [안 드 로이드 개발자 사이트][11]에 설명 된 대로 장치에서 USB 디버깅이 활성화 된 ㄴ 다는 것을 확인 하 고 미니 USB 케이블을 사용 하 여 시스템에 연결.

 [11]: http://developer.android.com/tools/device.html

명령줄에서 장치에 app를 밀어 수 있습니다.

        안 드 로이드 실행 $ 코르도바


또는 Eclipse 내에서 프로젝트를 마우스 오른쪽 단추로 클릭 고 **안 드 로이드 응용 프로그램 → 실행** 선택.
