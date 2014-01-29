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

# 안 드 로이드 업그레이드

이 가이드에는 코르도바의 이전 버전에서 업그레이 드 안 드 로이드 프로젝트를 수정 하는 방법을 보여 줍니다. 이러한 명령의 대부분 명령줄 도구 앞의 오래 된 세트를 사용 하 여 만든 프로젝트에 적용 된 `cordova` CLI 유틸리티. Cli 버전을 업데이트 하는 방법 정보에 대 한 명령줄 인터페이스를 참조.

## 3.3.0를 3.2.0에서 업그레이드

대 한 동일한 instructinos에 따라`3.2.0`.

3.3.0 부터는 코르도바 런타임은 이제 항아리 대신 안 드 로이드 라이브러리로 컴파일됩니다. 이 명령줄 사용에 대 한 영향을 주지 않습니다 있어야 하지만 IDE 사용자가 새로 추가한 가져올 필요가 있을 것 이다 `MyProject-CordovaLib` 그들의 작업 영역에 프로젝트.

## 3.2.0 3.1.0에서 업그레이드

코르 도우 바 CLI로 만든 프로젝트의 경우:

1.  업데이트는 `cordova` CLI 버전. 명령줄 인터페이스를 참조 하십시오.

2.  실행`cordova platform update android`

아니라 코르도바 CLI 사용 하 여 만든 프로젝트에 대 한 실행.

        bin/update <project_path>
    

## 3.1.0 3.0.0에서 업그레이드

코르 도우 바 CLI로 만든 프로젝트의 경우:

1.  업데이트는 `cordova` CLI 버전. 명령줄 인터페이스를 참조 하십시오.

2.  실행`cordova platform update android`

아니라 코르도바 CLI 사용 하 여 만든 프로젝트에 대 한 실행.

        bin/update <project_path>
    

## 2.9.0에서 CLI (3.0.0) 업그레이드

1.  명령줄 인터페이스에 설명 된 대로 코르도바 CLI를 사용 하 여 새로운 아파치 코르도바 3.0.0 프로젝트를 만듭니다.

2.  예를 들어 당신의 플랫폼 코르도바 프로젝트 추가:`cordova
platform add android`.

3.  프로젝트의 내용을 복사 `www` 디렉토리에 `www` 에서 방금 만든 코르 도우 바 프로젝트의 루트 디렉토리.

4.  아래에서 적절 한 디렉터리에 이전 프로젝트에서 어떤 기본 자산을 복사 `platforms/android` :이 디렉토리는 네이티브 코르도바-안 드 로이드 프로젝트가 존재 하는 곳.

5.  코르 도우 바 CLI 도구를 사용 하 여 필요한 어떤 플러그인을 설치 하려면. 참고 CLI 처리 하는 모든 핵심 Api 플러그인으로 추가 될 필요가 있습니다. 만 3.0.0 플러그인 CLI와 호환 됩니다.

## 3.0.0 2.9.0에서 업그레이드

1.  새로운 아파치 코르 도우 바 안 드 로이드 프로젝트를 만듭니다.

2.  내용을 복사 하 여 `www` 새 프로젝트 디렉터리.

3.  복사 모든 네이티브 안 드 로이드 자산에서 당신의 `res` 새 프로젝트 디렉터리.

4.  복사본에서 설치 된 모든 플러그인에는 `src` 하위 디렉터리는 새 프로젝트에.

5.  사용 되지 않는 업그레이드할 수 있는지 확인 `<plugin>` 참조 이전에서 `config.xml` 파일을 새로운 `<feature>` 사양.

6.  업데이트에 대 한 참조는 `org.apache.cordova.api` 패키지 수를`org.apache.cordova`.
    
    **참고**: 모든 핵심 Api 제거 되 고 플러그인으로 설치 해야 합니다. 자세한 내용은 관리 플러그인 가이드를 사용 하 여 Plugman를 참조 하십시오.

## 2.9.0 2.8.0에서 업그레이드

1.  실행`bin/update <project_path>`.

## 2.7.0에서 2.8.0로 업그레이드

1.  제거 `cordova-2.7.0.jar` 프로젝트의 `libs` 디렉터리.

2.  추가 `cordova-2.8.0.jar` 프로젝트의 `libs` 디렉터리.

3.  이클립스를 사용 하면 이클립스 프로젝트를 새로 고침 하 고 깨끗 할 하십시오.

<!-- SS Eclipse -->

1.  새로운 복사 `cordova.js` 프로젝트에.

2.  새로운 사용 하 여 HTML 업데이트 `cordova.js` 파일.

3.  복사는 `res/xml/config.xml` 일치 하는 파일`framework/res/xml/config.xml`.

4.  업데이트 `framework/res/xml/config.xml` 이전 처럼 비슷한 설정을 해야 합니다.

5.  파일 복사 `bin/templates/cordova` 프로젝트의 `cordova` 디렉터리.

## 2.6.0에서 2.7.0로 업그레이드

1.  제거 `cordova-2.6.0.jar` 프로젝트의 `libs` 디렉터리.

2.  추가 `cordova-2.7.0.jar` 프로젝트의 `libs` 디렉터리.

3.  이클립스를 사용 하면 이클립스 프로젝트를 새로 고침 하 고 깨끗 할 하십시오.

4.  새로운 복사 `cordova-2.7.0.js` 프로젝트에.

5.  새로운 사용 하 여 HTML 업데이트 `cordova-2.7.0.js` 파일.

6.  복사는 `res/xml/config.xml` 일치 하도록`framework/res/xml/config.xml`.

7.  업데이트 `framework/res/xml/config.xml` 이전 처럼 비슷한 설정을 해야 합니다.

8.  파일 복사 `bin/templates/cordova` 프로젝트의 `cordova` 디렉터리.

## 2.5.0에서 2.6.0로 업그레이드

1.  제거 `cordova-2.5.0.jar` 프로젝트의 `libs` 디렉터리.

2.  추가 `cordova-2.6.0.jar` 프로젝트의 `libs` 디렉터리.

3.  이클립스를 사용 하면 이클립스 프로젝트를 새로 고침 하 고 깨끗 할 하십시오.

4.  새로운 복사 `cordova-2.6.0.js` 프로젝트에.

5.  새로운 사용 하 여 HTML 업데이트 `cordova-2.6.0.js` 파일.

6.  복사는 `res/xml/config.xml` 일치 하도록`framework/res/xml/config.xml`.

7.  업데이트 `framework/res/xml/config.xml` 이전 처럼 비슷한 설정을 해야 합니다.

8.  파일 복사 `bin/templates/cordova` 프로젝트의 `cordova` 디렉터리.

실행 `bin/update <project>` 프로젝트 경로와 코르도바 소스 디렉터리에 나열 된.

## 2.4.0에서 2.5.0로 업그레이드

1.  제거 `cordova-2.4.0.jar` 프로젝트의 `libs` 디렉터리.

2.  추가 `cordova-2.5.0.jar` 프로젝트의 `libs` 디렉터리.

3.  이클립스를 사용 하면 이클립스 프로젝트를 새로 고침 하 고 깨끗 할 하십시오.

4.  새로운 복사 `cordova-2.5.0.js` 프로젝트에.

5.  새로운 사용 하 여 HTML 업데이트 `cordova-2.5.0.js` 파일.

6.  복사는 `res/xml/config.xml` 일치 하도록`framework/res/xml/config.xml`.

7.  업데이트 `framework/res/xml/config.xml` 이전 처럼 비슷한 설정을 해야 합니다.

8.  파일 복사 `bin/templates/cordova` 프로젝트의 `cordova` 디렉터리.

## 2.3.0에서 2.4.0로 업그레이드

1.  제거 `cordova-2.3.0.jar` 프로젝트의 `libs` 디렉터리.

2.  추가 `cordova-2.4.0.jar` 프로젝트의 `libs` 디렉터리.

3.  이클립스를 사용 하면 이클립스 프로젝트를 새로 고침 하 고 깨끗 할 하십시오.

4.  새로운 복사 `cordova-2.4.0.js` 프로젝트에.

5.  새로운 사용 하 여 HTML 업데이트 `cordova-2.4.0.js` 파일.

6.  복사는 `res/xml/config.xml` 일치 하도록`framework/res/xml/config.xml`.

7.  파일 복사 `bin/templates/cordova` 프로젝트의 `cordova` 디렉터리.

## 2.3.0 2.2.0에서 업그레이드

1.  제거 `cordova-2.2.0.jar` 프로젝트의 `libs` 디렉터리.

2.  추가 `cordova-2.3.0.jar` 프로젝트의 `libs` 디렉터리.

3.  이클립스를 사용 하면 이클립스 프로젝트를 새로 고침 하 고 깨끗 할 하십시오.

4.  새로운 복사 `cordova-2.3.0.js` 프로젝트에.

5.  새로운 사용 하 여 HTML 업데이트 `cordova-2.3.0.js` 파일.

6.  복사는 `res/xml/config.xml` 일치 하도록`framework/res/xml/config.xml`.

7.  파일 복사 `bin/templates/cordova` 프로젝트의 `cordova` 디렉터리.

## 2.1.0에서 2.2.0으로 업그레이드

1.  제거 `cordova-2.1.0.jar` 프로젝트의 `libs` 디렉터리.

2.  추가 `cordova-2.2.0.jar` 프로젝트의 `libs` 디렉터리.

3.  이클립스를 사용 하면 이클립스 프로젝트를 새로 고침 하 고 깨끗 할 하십시오.

4.  새로운 복사 `cordova-2.2.0.js` 프로젝트에.

5.  새로운 사용 하 여 HTML 업데이트 `cordova-2.2.0.js` 파일.

6.  복사는 `res/xml/config.xml` 일치 하도록`framework/res/xml/config.xml`.

7.  파일 복사 `bin/templates/cordova` 프로젝트의 `cordova` 디렉터리.

## 2.0.0에서 2.1.0으로 업그레이드

1.  제거 `cordova-2.0.0.jar` 프로젝트의 `libs` 디렉터리.

2.  추가 `cordova-2.1.0.jar` 프로젝트의 `libs` 디렉터리.

3.  이클립스를 사용 하면 이클립스 프로젝트를 새로 고침 하 고 깨끗 할 하십시오.

4.  새로운 복사 `cordova-2.1.0.js` 프로젝트에.

5.  새로운 사용 하 여 HTML 업데이트 `cordova-2.1.0.js` 파일.

6.  복사는 `res/xml/config.xml` 일치 하도록`framework/res/xml/config.xml`.

7.  파일 복사 `bin/templates/cordova` 프로젝트의 `cordova` 디렉터리.

## 1.9.0에서 2.0.0로 업그레이드

1.  제거 `cordova-1.9.0.jar` 프로젝트의 `libs` 디렉터리.

2.  추가 `cordova-2.0.0.jar` 프로젝트의 `libs` 디렉터리.

3.  이클립스를 사용 하면 이클립스 프로젝트를 새로 고침 하 고 깨끗 할 하십시오.

4.  새로운 복사 `cordova-2.0.0.js` 프로젝트에.

5.  새로운 사용 하 여 HTML 업데이트 `cordova-2.0.0.js` 파일.

6.  복사는 `res/xml/config.xml` 일치 하도록`framework/res/xml/config.xml`.

2.0.0에서 출시, `config.xml` 파일을 결합 하 고 대체 `cordova.xml` 및 `plugins.xml` . 오래 된 파일을 그리고 그들은 여전히 2.0.0에서 작동 하는 동안 향후 릴리스에서 작동 중지 됩니다.

## 1.9.0 1.8.1에서 업그레이드

1.  제거 `cordova-1.8.0.jar` 프로젝트의 `libs` 디렉터리.

2.  추가 `cordova-1.9.0.jar` 프로젝트의 `libs` 디렉터리.

3.  이클립스를 사용 하면 이클립스 프로젝트를 새로 고침 하 고 깨끗 할 하십시오.

4.  새로운 복사 `cordova-1.9.0.js` 프로젝트에.

5.  새로운 사용 하 여 HTML 업데이트 `cordova-1.9.0.js` 파일.

6.  업데이트 `res/xml/plugins.xml` 에 맞게`framework/res/xml/plugins.xml`.

도입으로는 `CordovaWebView` 는 1.9.0에 출시, 제 3 자 플러그인을 작동 하지 않을 수 있습니다. 이 플러그인에서 컨텍스트를 얻이 필요가 있는 `CordovaInterface` 를 사용 하 여 `getContext()` 또는 `getActivity()` . 숙련된 된 안 드 로이드 개발자가 아닌 경우에, 플러그인 관리자에 게 연락 하 고 그들의 버그 추적기에이 작업을 추가 하십시오.

## 1.8.0 1.8.0에서 업그레이드

1.  제거 `cordova-1.8.0.jar` 프로젝트의 `libs` 디렉터리.

2.  추가 `cordova-1.8.1.jar` 프로젝트의 `libs` 디렉터리.

3.  이클립스를 사용 하면 이클립스 프로젝트를 새로 고침 하 고 깨끗 할 하십시오.

4.  새로운 복사 `cordova-1.8.1.js` 프로젝트에.

5.  새로운 사용 하 여 HTML 업데이트 `cordova-1.8.1.js` 파일.

6.  업데이트 `res/xml/plugins.xml` 에 맞게`framework/res/xml/plugins.xml`.

## 1.8.0 1.7.0에서 업그레이드

1.  제거 `cordova-1.7.0.jar` 프로젝트의 `libs` 디렉터리.

2.  추가 `cordova-1.8.0.jar` 프로젝트의 `libs` 디렉터리.

3.  이클립스를 사용 하면 이클립스 프로젝트를 새로 고침 하 고 깨끗 할 하십시오.

4.  새로운 복사 `cordova-1.8.0.js` 프로젝트에.

5.  새로운 사용 하 여 HTML 업데이트 `cordova-1.8.0.js` 파일.

6.  업데이트 `res/xml/plugins.xml` 에 맞게`framework/res/xml/plugins.xml`.

## 1.8.0 1.7.0에서 업그레이드

1.  제거 `cordova-1.7.0.jar` 프로젝트의 `libs` 디렉터리.

2.  추가 `cordova-1.8.0.jar` 프로젝트의 `libs` 디렉터리.

3.  이클립스를 사용 하면 이클립스 프로젝트를 새로 고침 하 고 깨끗 할 하십시오.

4.  새로운 복사 `cordova-1.8.0.js` 프로젝트에.

5.  새로운 사용 하 여 HTML 업데이트 `cordova-1.8.0.js` 파일.

6.  업데이트 `res/xml/plugins.xml` 에 맞게`framework/res/xml/plugins.xml`.

## 1.6.1에서 1.7.0으로 업그레이드

1.  제거 `cordova-1.6.1.jar` 프로젝트의 `libs` 디렉터리.

2.  추가 `cordova-1.7.0.jar` 프로젝트의 `libs` 디렉터리.

3.  이클립스를 사용 하면 이클립스 프로젝트를 새로 고침 하 고 깨끗 할 하십시오.

4.  새로운 복사 `cordova-1.7.0.js` 프로젝트에.

5.  업데이트 `res/xml/plugins.xml` 에 맞게`framework/res/xml/plugins.xml`.

## 1.6.0에서 1.6.1로 업그레이드

1.  제거 `cordova-1.6.0.jar` 프로젝트의 `libs` 디렉터리.

2.  추가 `cordova-1.6.1.jar` 프로젝트의 `libs` 디렉터리.

3.  이클립스를 사용 하면 이클립스 프로젝트를 새로 고침 하 고 깨끗 할 하십시오.

4.  새로운 복사 `cordova-1.6.1.js` 프로젝트에.

5.  업데이트 `res/xml/plugins.xml` 에 맞게`framework/res/xml/plugins.xml`.

## 1.5.0에서 1.6.0로 업그레이드

1.  제거 `cordova-1.5.0.jar` 프로젝트의 `libs` 디렉터리.

2.  추가 `cordova-1.6.0.jar` 프로젝트의 `libs` 디렉터리.

3.  이클립스를 사용 하면 이클립스 프로젝트를 새로 고침 하 고 깨끗 할 하십시오.

4.  새로운 복사 `cordova-1.6.0.js` 프로젝트에.

5.  새로운 사용 하 여 HTML 업데이트 `cordova-1.6.0.js` 파일.

6.  업데이트 `res/xml/plugins.xml` 에 맞게`framework/res/xml/plugins.xml`.

7.  대체 `res/xml/phonegap.xml` 와 `res/xml/cordova.xml` 에 맞게`framework/res/xml/cordova.xml`.

## 1.4.0에서 1.5.0로 업그레이드

1.  제거 `phonegap-1.4.0.jar` 프로젝트의 `libs` 디렉터리.

2.  추가 `cordova-1.5.0.jar` 프로젝트의 `libs` 디렉터리.

3.  이클립스를 사용 하면 이클립스 프로젝트를 새로 고침 하 고 깨끗 할 하십시오.

4.  새로운 복사 `cordova-1.5.0.js` 프로젝트에.

5.  새로운 사용 하 여 HTML 업데이트 `cordova-1.5.0.js` 파일.

6.  업데이트 `res/xml/plugins.xml` 에 맞게`framework/res/xml/plugins.xml`.

7.  대체 `res/xml/phonegap.xml` 와 `res/xml/cordova.xml` 에 맞게`framework/res/xml/cordova.xml`.

## 1.3.0에서 1.4.0로 업그레이드

1.  제거 `phonegap-1.3.0.jar` 프로젝트의 `libs` 디렉터리.

2.  추가 `phonegap-1.4.0.jar` 프로젝트의 `libs` 디렉터리.

3.  이클립스를 사용 하면 이클립스 프로젝트를 새로 고침 하 고 깨끗 할 하십시오.

4.  새로운 복사 `phonegap-1.4.0.js` 프로젝트에.

5.  새로운 사용 하 여 HTML 업데이트 `phonegap-1.4.0.js` 파일.

6.  업데이트 `res/xml/plugins.xml` 에 맞게`framework/res/xml/plugins.xml`.

7.  업데이트 `res/xml/phonegap.xml` 에 맞게`framework/res/xml/phonegap.xml`.

## 1.2.0에서 1.3.0 업그레이드

1.  제거 `phonegap-1.2.0.jar` 프로젝트의 `libs` 디렉터리.

2.  추가 `phonegap-1.3.0.jar` 프로젝트의 `libs` 디렉터리.

3.  이클립스를 사용 하면 이클립스 프로젝트를 새로 고침 하 고 깨끗 할 하십시오.

4.  새로운 복사 `phonegap-1.3.0.js` 프로젝트에.

5.  새로운 사용 하 여 HTML 업데이트 `phonegap-1.2.0.js` 파일.

6.  업데이트 `res/xml/plugins.xml` 에 맞게`framework/res/xml/plugins.xml`.

7.  업데이트 `res/xml/phonegap.xml` 에 맞게`framework/res/xml/phonegap.xml`.

## 1.1.0에서 1.2.0으로 업그레이드

1.  제거 `phonegap-1.1.0.jar` 프로젝트의 `libs` 디렉터리.

2.  추가 `phonegap-1.2.0.jar` 프로젝트의 `libs` 디렉터리.

3.  이클립스를 사용 하면 이클립스 프로젝트를 새로 고침 하 고 깨끗 할 하십시오.

4.  새로운 복사 `phonegap-1.2.0.js` 프로젝트에.

5.  새로운 사용 하 여 HTML 업데이트 `phonegap-1.2.0.js` 파일.

6.  업데이트 `res/xml/plugins.xml` 에 맞게`framework/res/xml/plugins.xml`.

7.  업데이트 `res/xml/phonegap.xml` 에 맞게`framework/res/xml/phonegap.xml`.

## 1.1.0 1.0.0에서 업그레이드

1.  제거 `phonegap-1.0.0.jar` 프로젝트의 `libs` 디렉터리.

2.  추가 `phonegap-1.1.0.jar` 프로젝트의 `libs` 디렉터리.

3.  이클립스를 사용 하면 이클립스 프로젝트를 새로 고침 하 고 깨끗 할 하십시오.

4.  새로운 복사 `phonegap-1.1.0.js` 프로젝트에.

5.  새로운 사용 하 여 HTML 업데이트 `phonegap-1.1.0.js` 파일.

6.  업데이트 `res/xml/plugins.xml` 에 맞게`framework/res/xml/plugins.xml`.

## 0.9.6에서 1.0.0으로 업그레이드

1.  제거 `phonegap-0.9.6.jar` 프로젝트의 `libs` 디렉터리.

2.  추가 `phonegap-1.0.0.jar` 프로젝트의 `libs` 디렉터리.

3.  이클립스를 사용 하면 이클립스 프로젝트를 새로 고침 하 고 깨끗 할 하십시오.

4.  새로운 복사 `phonegap-1.0.0.js` 프로젝트에.

5.  새로운 사용 하 여 HTML 업데이트 `phonegap-1.0.0.js` 파일.

6.  추가 `res/xml/plugins.xml` 일치 하도록`framework/res/xml/plugins.xml`.