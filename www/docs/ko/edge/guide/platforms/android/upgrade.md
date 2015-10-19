---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
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

title: 안 드 로이드 업그레이드
---

# 안 드 로이드 업그레이드

이 가이드에는 코르도바의 이전 버전에서 업그레이 드 안 드 로이드 프로젝트를 수정 하는 방법을 보여 줍니다. 이러한 명령의 대부분 명령줄 도구 앞의 오래 된 세트를 사용 하 여 만든 프로젝트에 적용 된 `cordova` CLI 유틸리티. 내용은 참조 하십시오 [명령줄 인터페이스](../../cli/index.html) CLI의 버전을 업데이트 하는 방법.

## 4.0.0를 업그레이드

4.0.0에 상당한 변화를 활용 하는 데 필요한 특정 업그레이드 단계가 있습니다. 첫째, 일반적인 업그레이드 단계는 아래에 필요 합니다.

-CLI가 아닌 프로젝트에 대 한 실행.

        bin/update path/to/project
    

CLI 프로젝트:

1.  업데이트는 `cordova` CLI 버전. 명령줄 인터페이스를 참조 하십시오.

2.  기존 프로젝트에서 `cordova platform update android`를 실행 합니다.

### 업그레이드는 허용 된 사이트 목록

모든 화이트 리스트 기능 지금 플러그인을 통해 구현 됩니다. 플러그인 없이 앱 이상 4.0.0으로 업그레이드 한 후 목록에 의해 보호 됩니다. 코르 도우 바는 서로 다른 수준의 보호를 제공 하는 두 화이트 리스트 플러그인.

1.  `코르 도우 바 플러그인 목록` 플러그인 *(권장)*
    
    *   이 플러그인이 좋습니다, 그것은 더 안전 하 고 보다 이전 버전에서는 화이트 리스트 구성
    *   필요한 구성 변경에 [코르 도우 바 플러그인 허용 된 사이트 목록][1] 대 한 자세한 내용은 참조 하십시오
    *   Run: `cordova plugin add cordova-plugin-crosswalk-webview`

2.  `코르 도우 바 플러그 접속식 유산-화이트 리스트` 플러그인
    
    *   이 플러그인이 이전 버전으로 같은 허용 된 행동을 제공합니다. [코르 도우 바-플러그인-레거시-허용 된 사이트 목록][2] 참조
    *   구성 변경 필요 합니다, 하지만 권장된 플러그인 보다 더 적은 보호 기능을 제공 하 고 있습니다.
    *   Run: `cordova plugin add cordova-plugin-legacy-whitelist`

 [1]: https://github.com/apache/cordova-plugin-whitelist
 [2]: https://github.com/apache/cordova-plugin-legacy-whitelist

### 횡단 보도 WebView를 사용 하 여

기본적으로 앱은 WebView는 장치에서 제공 하는 시스템을 사용 하 여 계속 됩니다. 횡단 보도 WebView를 대신 사용 하려는 경우 단순히 횡단 보도 플러그인을 추가:

    cordova plugin add cordova-plugin-crosswalk-webview
    

추가 플러그인, 앱 횡단 보도 WebView 설치 하 고 올바르게 구성 되어 얻을 것 이다.

### Splashscreen 플러그인으로 업그레이드

앱 만드는 경우 시작 화면 사용 기능을 플러그인으로 이동 되었습니다. 시작 화면에 대 한 구성 옵션이 변경 되지 않습니다. 만 업그레이드 단계 필요한 플러그인을 추가 하는:

    cordova plugin add cordova-plugin-splashscreen
    

## 3.6.0에서 3.7.1로 업그레이드

-CLI가 아닌 프로젝트에 대 한 실행.

        bin/update path/to/project
    

CLI 프로젝트:

1.  업데이트는 `cordova` CLI 버전. 명령줄 인터페이스를 참조 하십시오.

2.  실행 `cordova platform update android` 기존 프로젝트에서.

## 3.3.0를 3.2.0에서 업그레이드

`3.2.0` 에 관해서는 동일한 지침을 따르십시오.

3.3.0 부터는 코르도바 런타임은 이제 항아리 대신 안 드 로이드 라이브러리로 컴파일됩니다. 이 명령줄 사용에 대 한 영향을 주지 않습니다 있어야 하지만 IDE 사용자가 자신의 작업 영역에 새로 추가 된 `MyProject-CordovaLib` 프로젝트를 가져올 필요가 있을 것 이다.

## 3.2.0 3.1.0에서 업그레이드

코르도바 CLI 사용 하 여 만든 된 프로젝트:

1.  업데이트는 `cordova` CLI 버전. 명령줄 인터페이스를 참조 하십시오.

2.  Run `cordova platform update android`

아니라 코르도바 CLI 사용 하 여 만든 프로젝트에 대 한 실행.

        bin/update <project_path>
    

**경고:** 4.4 안 드 로이드-안 드 로이드 4.4.3 파일 만들기 입력 형식이 있는 요소 = "파일" 파일 선택 대화 상자를 열지 것입니다. 이것은 안 드 로이드에서 크롬으로 회귀 하 고 문제를 재현할 수 독립형 크롬 브라우저 안 드 로이드 (http://code.google.com/p/android/issues/detail?id=62220 참조) 제안 된 해결 방법을 사용 하는 FileTransfer 및 파일 플러그인 안 드 로이드 4.4에 대 한. 입력된 형식에서 onClick 이벤트에 대 한 들을 수 있습니다 "파일" = 및 다음 파일 선택 UI 팝업. 업로드 양식 데이터를 연결 하기 위해 FileTransfer은 다중 파트 POST 요청에 양식 값을 연결할 자바 스크립트를 사용할 수 있습니다.

## 3.1.0 3.0.0에서 업그레이드

코르도바 CLI 사용 하 여 만든 된 프로젝트:

1.  업데이트는 `cordova` CLI 버전. 명령줄 인터페이스를 참조 하십시오.

2.  Run `cordova platform update android`

아니라 코르도바 CLI 사용 하 여 만든 프로젝트에 대 한 실행.

        bin/update <project_path>
    

## CLI (3.0.0)에 2.9.0에서 업그레이드

1.  명령줄 인터페이스에 설명 된 대로 코르도바를 사용 하 여 새로운 아파치 코르도바 3.0.0 프로젝트를 만듭니다.

2.  추가 당신의 플랫폼 코르도바 프로젝트 예: `코르도바 플랫폼 안 드 로이드 추가`.

3.  방금 만든 코르 도우 바 프로젝트의 루트에서 `www` 디렉토리를 프로젝트의 `www` 디렉토리의 내용을 복사 합니다.

4.  `플랫폼/안 드 로이드`에서 해당 디렉터리에 이전 프로젝트에서 어떤 기본 자산을 복사:이 디렉토리는 네이티브 코르도바-안 드 로이드 프로젝트가 존재 하는 곳.

5.  코르도바 CLI 도구를 사용 하 여 필요한 모든 플러그인을 설치 하. 참고 CLI를 처리 하는 모든 핵심 Api 플러그인으로 추가 될 필요가 있습니다. 3.0.0만 플러그인 CLI와 호환 됩니다.

## 3.0.0 2.9.0에서 업그레이드

1.  새로운 아파치 코르 도우 바 안 드 로이드 프로젝트를 만듭니다.

2.  새로운 프로젝트에 `www` 디렉터리의 내용을 복사 합니다.

3.  `Res` 디렉토리의 모든 네이티브 안 드 로이드 자산 새 프로젝트에 복사.

4.  새 프로젝트에 `src` 하위 디렉터리에서 설치 된 모든 플러그인을 복사 합니다.

5.  업그레이드할 수 있는지 확인 하십시오 사용 새로운 `<plugin>` 사양에 당신의 오래 된 `config.xml` 파일에서 `<feature>` 참조가 되지 않습니다.

6.  `Org.apache.cordova` 될 `org.apache.cordova.api` 패키지에 대 한 참조를 업데이트.
    
    **참고**: 모든 핵심 Api 제거 되 고 플러그인으로 설치 해야 합니다. 자세한 내용은 관리 플러그인 가이드를 사용 하 여 Plugman를 참조 하십시오.

## 2.8.0에서 2.9.0로 업그레이드

1.  Run `bin/update <project_path>`.

## 2.7.0에서 2.8.0로 업그레이드

1.  `코르 도우 바 2.7.0.jar` 프로젝트의 `라이브러리` 디렉터리에서 제거 합니다.

2.  `코르 도우 바 2.8.0.jar` 프로젝트의 `라이브러리` 디렉터리에 추가 합니다.

3.  이클립스를 사용 하면 이클립스 프로젝트를 새로 고침 하 고 깨끗 할 하십시오.

<!-- SS Eclipse -->

1.  프로젝트에 새로운 `cordova.js` 를 복사 합니다.

2.  새로운 `cordova.js` 파일을 사용 하 여 HTML을 업데이트 합니다.

3.  `Framework/res/xml/config.xml` 에 맞게 `res/xml/config.xml` 파일 복사.

4.  업데이트 `framework/res/xml/config.xml` 이전 처럼 비슷한 설정을가지고.

5.  파일을 복사 `bin/templates/cordova` 프로젝트의 `cordova` 디렉터리.

## 2.6.0에서 2.7.0로 업그레이드

1.  `코르 도우 바 2.6.0.jar` 프로젝트의 `라이브러리` 디렉터리에서 제거 합니다.

2.  `코르 도우 바 2.7.0.jar` 프로젝트의 `라이브러리` 디렉터리에 추가 합니다.

3.  이클립스를 사용 하면 이클립스 프로젝트를 새로 고침 하 고 깨끗 할 하십시오.

4.  `코르 도우 바 2.7.0.js` 새 프로젝트에 복사 합니다.

5.  새로운 `코르 도우 바 2.7.0.js` 파일을 사용 하 여 HTML을 업데이트 합니다.

6.  복사는 `res/xml/config.xml` 일치 하도록`framework/res/xml/config.xml`.

7.  업데이트 `framework/res/xml/config.xml` 이전 처럼 비슷한 설정을 해야 합니다.

8.  파일 복사 `bin/templates/cordova` 프로젝트의 `cordova` 디렉터리.

## 2.5.0에서 2.6.0로 업그레이드

1.  `코르 도우 바 2.5.0.jar` 프로젝트의 `라이브러리` 디렉터리에서 제거 합니다.

2.  `코르 도우 바 2.6.0.jar` 프로젝트의 `라이브러리` 디렉터리에 추가 합니다.

3.  이클립스를 사용 하면 이클립스 프로젝트를 새로 고침 하 고 깨끗 할 하십시오.

4.  새로운 복사 `cordova-2.6.0.js` 프로젝트에.

5.  새로운 사용 하 여 HTML 업데이트 `cordova-2.6.0.js` 파일.

6.  복사는 `res/xml/config.xml` 일치 하도록`framework/res/xml/config.xml`.

7.  업데이트 `framework/res/xml/config.xml` 이전 처럼 비슷한 설정을가지고.

8.  파일을 복사 `bin/templates/cordova` 프로젝트의 `cordova` 디렉터리.

코르 도우 바 소스 디렉토리에 나열 하는 프로젝트 경로를 `bin/update < 프로젝트 >` 를 실행 합니다.

## 2.4.0에서 2.5.0로 업그레이드

1.  `코르 도우 바 2.4.0.jar` 프로젝트의 `라이브러리` 디렉터리에서 제거 합니다.

2.  `코르 도우 바 2.5.0.jar` 프로젝트의 `라이브러리` 디렉터리에 추가 합니다.

3.  이클립스를 사용 하면 이클립스 프로젝트를 새로 고침 하 고 깨끗 할 하십시오.

4.  새로운 복사 `cordova-2.5.0.js` 프로젝트에.

5.  새로운 사용 하 여 HTML 업데이트 `cordova-2.5.0.js` 파일.

6.  복사는 `res/xml/config.xml` 일치 하도록`framework/res/xml/config.xml`.

7.  업데이트 `framework/res/xml/config.xml` 이전 처럼 비슷한 설정을가지고.

8.  파일을 복사 `bin/templates/cordova` 프로젝트의 `cordova` 디렉터리.

## 2.3.0에서 2.4.0로 업그레이드

1.  `코르 도우 바 2.3.0.jar` 프로젝트의 `라이브러리` 디렉터리에서 제거 합니다.

2.  `코르 도우 바 2.4.0.jar` 프로젝트의 `라이브러리` 디렉터리에 추가 합니다.

3.  이클립스를 사용 하면 이클립스 프로젝트를 새로 고침 하 고 깨끗 할 하십시오.

4.  새로운 복사 `cordova-2.4.0.js` 프로젝트에.

5.  새로운 사용 하 여 HTML 업데이트 `cordova-2.4.0.js` 파일.

6.  복사는 `res/xml/config.xml` 일치 하도록`framework/res/xml/config.xml`.

7.  파일 복사 `bin/templates/cordova` 프로젝트의 `cordova` 디렉터리.

## 2.3.0 2.2.0에서 업그레이드

1.  `코르 도우 바 2.2.0.jar` 프로젝트의 `라이브러리` 디렉터리에서 제거 합니다.

2.  `코르 도우 바 2.3.0.jar` 프로젝트의 `라이브러리` 디렉터리에 추가 합니다.

3.  이클립스를 사용 하면 이클립스 프로젝트를 새로 고침 하 고 깨끗 할 하십시오.

4.  새로운 복사 `cordova-2.3.0.js` 프로젝트에.

5.  새로운 사용 하 여 HTML 업데이트 `cordova-2.3.0.js` 파일.

6.  복사는 `res/xml/config.xml` 일치 하도록`framework/res/xml/config.xml`.

7.  파일 복사 `bin/templates/cordova` 프로젝트의 `cordova` 디렉터리.

## 2.1.0에서 2.2.0으로 업그레이드

1.  `코르 도우 바 2.1.0.jar` 프로젝트의 `라이브러리` 디렉터리에서 제거 합니다.

2.  `코르 도우 바 2.2.0.jar` 프로젝트의 `라이브러리` 디렉터리에 추가 합니다.

3.  이클립스를 사용 하면 이클립스 프로젝트를 새로 고침 하 고 깨끗 할 하십시오.

4.  새로운 복사 `cordova-2.2.0.js` 프로젝트에.

5.  새로운 사용 하 여 HTML 업데이트 `cordova-2.2.0.js` 파일.

6.  복사는 `res/xml/config.xml` 일치 하도록`framework/res/xml/config.xml`.

7.  파일을 복사 `bin/templates/cordova` 프로젝트의 `cordova` 디렉터리.

## 2.0.0에서 2.1.0으로 업그레이드

1.  `코르 도우 바 2.0.0.jar` 프로젝트의 `라이브러리` 디렉터리에서 제거 합니다.

2.  `코르 도우 바 2.1.0.jar` 프로젝트의 `라이브러리` 디렉터리에 추가 합니다.

3.  이클립스를 사용 하면 이클립스 프로젝트를 새로 고침 하 고 깨끗 할 하십시오.

4.  새로운 복사 `cordova-2.1.0.js` 프로젝트에.

5.  새로운 사용 하 여 HTML 업데이트 `cordova-2.1.0.js` 파일.

6.  복사는 `res/xml/config.xml` 에 맞게`framework/res/xml/config.xml`.

7.  파일을 복사 `bin/templates/cordova` 프로젝트의 `cordova` 디렉터리.

## 1.9.0에서 2.0.0로 업그레이드

1.  `코르 도우 바 1.9.0.jar` 프로젝트의 `라이브러리` 디렉터리에서 제거 합니다.

2.  `코르 도우 바 2.0.0.jar` 프로젝트의 `라이브러리` 디렉터리에 추가 합니다.

3.  이클립스를 사용 하면 이클립스 프로젝트를 새로 고침 하 고 깨끗 할 하십시오.

4.  새로운 복사 `cordova-2.0.0.js` 프로젝트에.

5.  새로운 사용 하 여 HTML 업데이트 `cordova-2.0.0.js` 파일.

6.  복사는 `res/xml/config.xml` 에 맞게`framework/res/xml/config.xml`.

2.0.0에서 릴리스 `config.xml` 파일 결합 및 `cordova.xml` 및 `plugins.xml`대체. 오래 된 파일을 그리고 그들은 여전히 2.0.0에서 작동 하는 동안 향후 릴리스에서 작동 중지 됩니다.

## 1.9.0 1.8.1에서 업그레이드

1.  `코르 도우 바 1.8.0.jar` 프로젝트의 `라이브러리` 디렉터리에서 제거 합니다.

2.  `코르 도우 바 1.9.0.jar` 프로젝트의 `라이브러리` 디렉터리에 추가 합니다.

3.  이클립스를 사용 하면 이클립스 프로젝트를 새로 고침 하 고 깨끗 할 하십시오.

4.  `코르 도우 바 1.9.0.js` 새 프로젝트에 복사 합니다.

5.  새로운 `코르 도우 바 1.9.0.js` 파일을 사용 하 여 HTML을 업데이트 합니다.

6.  업데이트 `res/xml/plugins.xml` 에 맞게`framework/res/xml/plugins.xml`.

1.9.0에 `CordovaWebView` 의 도입으로 인해 출시, 제 3 자 플러그인 작동 하지 않을 수 있습니다. 이러한 플러그인은 `getContext()` 또는 `getActivity()`를 사용 하 여 `CordovaInterface` 에서 컨텍스트를 얻이 필요가 있다. 숙련된 된 안 드 로이드 개발자가 아닌 경우에, 플러그인 관리자에 게 연락 하 고 그들의 버그 추적기에이 작업을 추가 하십시오.

## 1.8.0 1.8.0에서 업그레이드

1.  `코르 도우 바 1.8.0.jar` 프로젝트의 `라이브러리` 디렉터리에서 제거 합니다.

2.  `코르 도우 바 1.8.1.jar` 프로젝트의 `라이브러리` 디렉터리에 추가 합니다.

3.  이클립스를 사용 하면 이클립스 프로젝트를 새로 고침 하 고 깨끗 할 하십시오.

4.  `코르 도우 바 1.8.1.js` 새 프로젝트에 복사 합니다.

5.  새로운 `코르 도우 바 1.8.1.js` 파일을 사용 하 여 HTML을 업데이트 합니다.

6.  업데이트 `res/xml/plugins.xml` 에 맞게`framework/res/xml/plugins.xml`.

## 1.8.0 1.7.0에서 업그레이드

1.  `코르 도우 바 1.7.0.jar` 프로젝트의 `라이브러리` 디렉터리에서 제거 합니다.

2.  `코르 도우 바 1.8.0.jar` 프로젝트의 `라이브러리` 디렉터리에 추가 합니다.

3.  이클립스를 사용 하면 이클립스 프로젝트를 새로 고침 하 고 깨끗 할 하십시오.

4.  새로운 복사 `cordova-1.8.0.js` 프로젝트에.

5.  새로운 사용 하 여 HTML 업데이트 `cordova-1.8.0.js` 파일.

6.  업데이트 `res/xml/plugins.xml` 에 맞게`framework/res/xml/plugins.xml`.

## 1.8.0 1.7.0에서 업그레이드

1.  `코르 도우 바 1.7.0.jar` 프로젝트의 `라이브러리` 디렉터리에서 제거 합니다.

2.  `코르 도우 바 1.8.0.jar` 프로젝트의 `라이브러리` 디렉터리에 추가 합니다.

3.  이클립스를 사용 하면 이클립스 프로젝트를 새로 고침 하 고 깨끗 할 하십시오.

4.  새로운 복사 `cordova-1.8.0.js` 프로젝트에.

5.  새로운 사용 하 여 HTML 업데이트 `cordova-1.8.0.js` 파일.

6.  업데이트 `res/xml/plugins.xml` 에 맞게`framework/res/xml/plugins.xml`.

## 1.6.1에서 1.7.0으로 업그레이드

1.  `코르 도우 바 1.6.1.jar` 프로젝트의 `라이브러리` 디렉터리에서 제거 합니다.

2.  `코르 도우 바 1.7.0.jar` 프로젝트의 `라이브러리` 디렉터리에 추가 합니다.

3.  이클립스를 사용 하면 이클립스 프로젝트를 새로 고침 하 고 깨끗 할 하십시오.

4.  `코르 도우 바 1.7.0.js` 새 프로젝트에 복사 합니다.

5.  업데이트 `res/xml/plugins.xml` 에 맞게`framework/res/xml/plugins.xml`.

## 1.6.0에서 1.6.1로 업그레이드

1.  `코르 도우 바 1.6.0.jar` 프로젝트의 `라이브러리` 디렉터리에서 제거 합니다.

2.  `코르 도우 바 1.6.1.jar` 프로젝트의 `라이브러리` 디렉터리에 추가 합니다.

3.  이클립스를 사용 하면 이클립스 프로젝트를 새로 고침 하 고 깨끗 할 하십시오.

4.  `코르 도우 바 1.6.1.js` 새 프로젝트에 복사 합니다.

5.  업데이트 `res/xml/plugins.xml` 에 맞게`framework/res/xml/plugins.xml`.

## 1.5.0에서 1.6.0로 업그레이드

1.  `코르 도우 바 1.5.0.jar` 프로젝트의 `라이브러리` 디렉터리에서 제거 합니다.

2.  `코르 도우 바 1.6.0.jar` 프로젝트의 `라이브러리` 디렉터리에 추가 합니다.

3.  이클립스를 사용 하면 이클립스 프로젝트를 새로 고침 하 고 깨끗 할 하십시오.

4.  `코르 도우 바 1.6.0.js` 새 프로젝트에 복사 합니다.

5.  새로운 `코르 도우 바 1.6.0.js` 파일을 사용 하 여 HTML을 업데이트 합니다.

6.  업데이트 `res/xml/plugins.xml` 에 맞게`framework/res/xml/plugins.xml`.

7.  `Res/xml/phonegap.xml` `res/xml/cordova.xml` `framework/res/xml/cordova.xml` 에 맞게 교체.

## 1.4.0에서 1.5.0로 업그레이드

1.  `Phonegap 1.4.0.jar` 프로젝트의 `라이브러리` 디렉터리에서 제거 합니다.

2.  `코르 도우 바 1.5.0.jar` 프로젝트의 `라이브러리` 디렉터리에 추가 합니다.

3.  이클립스를 사용 하면 이클립스 프로젝트를 새로 고침 하 고 깨끗 할 하십시오.

4.  `코르 도우 바 1.5.0.js` 새 프로젝트에 복사 합니다.

5.  새로운 `코르 도우 바 1.5.0.js` 파일을 사용 하 여 HTML을 업데이트 합니다.

6.  업데이트 `res/xml/plugins.xml` 에 맞게`framework/res/xml/plugins.xml`.

7.  `Res/xml/phonegap.xml` `res/xml/cordova.xml` `framework/res/xml/cordova.xml` 에 맞게 교체.

## 1.3.0에서 1.4.0로 업그레이드

1.  `Phonegap 1.3.0.jar` 프로젝트의 `라이브러리` 디렉터리에서 제거 합니다.

2.  `Phonegap 1.4.0.jar` 프로젝트의 `라이브러리` 디렉터리에 추가 합니다.

3.  이클립스를 사용 하면 이클립스 프로젝트를 새로 고침 하 고 깨끗 할 하십시오.

4.  프로젝트에 새로운 `phonegap 1.4.0.js` 를 복사 합니다.

5.  새로운 `phonegap 1.4.0.js` 파일을 사용 하 여 HTML을 업데이트 합니다.

6.  업데이트 `res/xml/plugins.xml` 에 맞게`framework/res/xml/plugins.xml`.

7.  업데이트 `res/xml/phonegap.xml` 에 맞게`framework/res/xml/phonegap.xml`.

## 1.2.0에서 1.3.0 업그레이드

1.  `Phonegap 1.2.0.jar` 프로젝트의 `라이브러리` 디렉터리에서 제거 합니다.

2.  `Phonegap 1.3.0.jar` 프로젝트의 `라이브러리` 디렉터리에 추가 합니다.

3.  이클립스를 사용 하면 이클립스 프로젝트를 새로 고침 하 고 깨끗 할 하십시오.

4.  프로젝트에 새로운 `phonegap 1.3.0.js` 를 복사 합니다.

5.  새로운 `phonegap 1.2.0.js` 파일을 사용 하 여 HTML을 업데이트 합니다.

6.  업데이트 `res/xml/plugins.xml` 에 맞게`framework/res/xml/plugins.xml`.

7.  업데이트 `res/xml/phonegap.xml` 에 맞게`framework/res/xml/phonegap.xml`.

## 1.1.0에서 1.2.0으로 업그레이드

1.  `Phonegap 1.1.0.jar` 프로젝트의 `라이브러리` 디렉터리에서 제거 합니다.

2.  `Phonegap 1.3.0.jar` 프로젝트의 `라이브러리` 디렉터리에 추가 합니다.

3.  이클립스를 사용 하면 이클립스 프로젝트를 새로 고침 하 고 깨끗 할 하십시오.

4.  프로젝트에 새로운 `phonegap 1.2.0.js` 를 복사 합니다.

5.  새로운 `phonegap 1.2.0.js` 파일을 사용 하 여 HTML을 업데이트 합니다.

6.  업데이트 `res/xml/plugins.xml` 에 맞게`framework/res/xml/plugins.xml`.

7.  업데이트 `res/xml/phonegap.xml` 에 맞게`framework/res/xml/phonegap.xml`.

## 1.1.0 1.0.0에서 업그레이드

1.  `Phonegap 1.0.0.jar` 프로젝트의 `라이브러리` 디렉터리에서 제거 합니다.

2.  `Phonegap 1.1.0.jar` 프로젝트의 `라이브러리` 디렉터리에 추가 합니다.

3.  이클립스를 사용 하면 이클립스 프로젝트를 새로 고침 하 고 깨끗 할 하십시오.

4.  프로젝트에 새로운 `phonegap 1.1.0.js` 를 복사 합니다.

5.  새로운 `phonegap 1.1.0.js` 파일을 사용 하 여 HTML을 업데이트 합니다.

6.  업데이트 `res/xml/plugins.xml` 에 맞게`framework/res/xml/plugins.xml`.

## 0.9.6에서 1.0.0으로 업그레이드

1.  `Phonegap 0.9.6.jar` 프로젝트의 `라이브러리` 디렉터리에서 제거 합니다.

2.  `Phonegap 1.0.0.jar` 프로젝트의 `라이브러리` 디렉터리에 추가 합니다.

3.  이클립스를 사용 하면 이클립스 프로젝트를 새로 고침 하 고 깨끗 할 하십시오.

4.  프로젝트에 새로운 `phonegap 1.0.0.js` 를 복사 합니다.

5.  새로운 `phonegap 1.0.0.js` 파일을 사용 하 여 HTML을 업데이트 합니다.

6.  `Res/xml/plugins.xml` `framework/res/xml/plugins.xml` 를 일치 하도록 추가.