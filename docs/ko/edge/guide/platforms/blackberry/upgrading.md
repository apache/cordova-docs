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

# 블랙베리 업그레이드

이 가이드에는 코르도바의 이전 버전에서 업그레이 드 블랙베리 프로젝트를 수정 하는 방법을 보여 줍니다. 이 지침은 명령줄 도구 앞의 오래 된 세트를 사용 하 여 만든 프로젝트에 적용 된 `cordova` CLI 유틸리티. Cli 버전을 업데이트 하는 방법 정보에 대 한 명령줄 인터페이스를 참조.

## 업그레이드 2.8.0 2.9.0에 프로젝트

블랙베리 10:

1.  다운로드 하 고 추출 귀하의 하드 드라이브에 영구적인 위치에 코르도바 2.9.0 소스 예`~/Cordova-2.9.0`.

2.  모든 실행 중인 SDK 도구 종료: 이클립스, Momentics와 같은.

3.  터미널 같은 유닉스를 사용 하 여 위의 다운로드 한 소스를 넣으면 디렉터리로 이동: Terminal.app, Bash, Cygwin, 등등.

4.  블랙베리 명령줄 도구에 설명 된 대로 새 프로젝트를 만듭니다. 이것은 업데이트 된 프로젝트의 가정 된다.

5.  이전 프로젝트에서 프로젝트의 소스를 복사 `/www` 를 새 프로젝트의 디렉터리 `/www` 디렉터리.

6.  에 코르 도우 바 스크립트 참조를 업데이트를 `www/index.html` 파일 (및 스크립트 참조를 포함 하는 기타 파일) 새를 가리키도록 `cordova.js` 파일.

### BlackBerryOS/각 본

1.  다운로드 하 고 추출 귀하의 하드 드라이브에 영구적인 위치에 코르도바 2.9.0 소스 예`~/Cordova-2.9.0`.

2.  모든 실행 중인 SDK 도구 종료: 이클립스, Momentics와 같은.

3.  터미널 같은 유닉스를 사용 하 여 위의 다운로드 한 소스를 넣으면 디렉터리로 이동: Terminal.app, Bash, Cygwin, 등등.

4.  IOS 명령줄 도구에에서 설명 된 대로 새 프로젝트를 만듭니다. 이 새 프로젝트에서 자산 해야합니다.

5.  복사는 `www/cordova.js` 에 새로운 프로젝트에서 파일을 `www` 디렉터리 및 삭제 귀하 `www/cordova.js` 파일.

6.  에 코르 도우 바 스크립트 참조를 업데이트를 `www/index.html` 파일 (및 스크립트 참조를 포함 하는 기타 파일) 새를 가리키도록 `cordova.js` 파일.

7.  복사는 `native` 이전 덮어쓰기 기존 프로젝트에 새 프로젝트에서 디렉터리 `native` 디렉터리.

8.  복사는 `lib` 이전 덮어쓰기 기존 프로젝트에 새 프로젝트에서 디렉터리 `lib` 디렉터리.

9.  복사는 `cordova` 이전 덮어쓰기 기존 프로젝트에 새 프로젝트에서 디렉터리 `cordova` 디렉터리.

## 업그레이드 2.7.0 2.8.0에 프로젝트

블랙베리 10:

블랙베리 10 새로운 CLI 공구를 사용 하 고 핵심 Api 플러그인으로 관리 합니다. 지침 업데이트 오래 된 프로젝트의 복잡성 때문에 기존 프로젝트를 업데이트 하는 것 보다는 새 프로젝트 프로젝트를 마이그레이션합니다. 또한 참고 코르도바 js 스크립트 파일 'cordova.js' 라고 지금 고 이상 버전 문자열을 포함.

1.  다운로드 하 고 추출 귀하의 하드 드라이브에 영구적인 위치에 코르도바 2.8.0 소스 예`~/Cordova-2.8.0`.

2.  모든 실행 중인 SDK 도구 종료: 이클립스, Momentics와 같은.

3.  터미널 같은 유닉스를 사용 하 여 위의 다운로드 한 소스를 넣으면 디렉터리로 이동: Terminal.app, Bash, Cygwin, 등등.

4.  블랙베리 명령줄 도구에 설명 된 대로 새 프로젝트를 만듭니다. 이것은 업데이트 된 프로젝트의 가정 된다.

5.  이전 프로젝트에서 프로젝트의 소스를 복사 `/www` 를 새 프로젝트의 디렉터리 `/www` 디렉터리.

6.  에 코르 도우 바 스크립트 참조를 업데이트를 `www/index.html` 파일 (및 스크립트 참조를 포함 하는 기타 파일) 새를 가리키도록 `cordova.js` 파일.

BlackBerryOS/각 본:

1.  다운로드 하 고 추출 귀하의 하드 드라이브에 영구적인 위치에 코르도바 2.8.0 소스 예`~/Cordova-2.8.0`.

2.  모든 실행 중인 SDK 도구 종료: 이클립스, Momentics와 같은.

3.  터미널 같은 유닉스를 사용 하 여 위의 다운로드 한 소스를 넣으면 디렉터리로 이동: Terminal.app, Bash, Cygwin, 등등.

4.  IOS 명령줄 도구에에서 설명 된 대로 새 프로젝트를 만듭니다. 이 새 프로젝트에서 자산 해야합니다.

5.  복사는 `www/cordova.js` 에 새로운 프로젝트에서 파일을 `www` 디렉터리 및 삭제 귀하 `www/cordova.js` 파일.

6.  에 코르 도우 바 스크립트 참조를 업데이트를 `www/index.html` 파일 (및 스크립트 참조를 포함 하는 기타 파일) 새를 가리키도록 `cordova.js` 파일.

7.  복사는 `native` 이전 덮어쓰기 기존 프로젝트에 새 프로젝트에서 디렉터리 `native` 디렉터리.

8.  복사는 `lib` 이전 덮어쓰기 기존 프로젝트에 새 프로젝트에서 디렉터리 `lib` 디렉터리.

9.  복사는 `cordova` 이전 덮어쓰기 기존 프로젝트에 새 프로젝트에서 디렉터리 `cordova` 디렉터리.

## 업그레이드 2.6.0 2.7.0에 프로젝트

1.  다운로드 하 고 추출 귀하의 하드 드라이브에 영구적인 위치에 코르도바 2.7.0 소스 예`~/Cordova-2.7.0`.

2.  모든 실행 중인 SDK 도구 종료: 이클립스, Momentics와 같은.

3.  터미널 같은 유닉스를 사용 하 여 위의 다운로드 한 소스를 넣으면 디렉터리로 이동: Terminal.app, Bash, Cygwin, 등등.

4.  블랙베리 명령줄 도구에 설명 된 대로 새 프로젝트를 만듭니다. 이 새 프로젝트에서 자산 해야합니다.

5.  복사는 `www/cordova-2.7.0.js` 에 새로운 프로젝트에서 파일을 `www` 디렉터리 및 삭제 귀하 `www/cordova-2.6.0.js` 파일.

6.  에 코르 도우 바 스크립트 참조를 업데이트를 `www/index.html` 파일 (및 스크립트 참조를 포함 하는 기타 파일) 새를 가리키도록 `cordova-2.7.0.js` 파일.

7.  복사는 `native` 이전 덮어쓰기 기존 프로젝트에 새 프로젝트에서 디렉터리 `native` 디렉터리.

8.  복사는 `lib` 이전 덮어쓰기 기존 프로젝트에 새 프로젝트에서 디렉터리 `lib` 디렉터리.

9.  복사는 `cordova` 이전 덮어쓰기 기존 프로젝트에 새 프로젝트에서 디렉터리 `cordova` 디렉터리.

## 2.5.0에서 2.6.0로 업그레이드

PhoneGap 다운로드 디렉터리를 업데이트:

전체 디렉터리의 새 복사본을 다운로드 하는 것이 좋습니다.

그러나, 다음은 증분 업데이트에 필요한 새로운 부품입니다.

1.  Cordova.blackberry.js 파일에서 업데이트 된 `Phonegap-2.6.0/lib/blackberry/javascript` 디렉터리.

2.  업데이트는 `ext` , `ext-air` , 및 `ext-qnx` 에 `Phonegap-2.6.0/lib/blackberry/framework` 디렉터리.

3.  업데이트는 `build.xml` 파일에 `Phonegap-2.6.0/lib/blackberry` 디렉터리.

4.  업데이트는 `Phonegap-2.6.0/lib/blackberry/bin` 디렉터리.

5.  업데이트는 `VERSION` 파일에 `Phonegap-2.6.0/lib/blackberry` 디렉터리.

업데이트는 `example/` 디렉터리 또는 기존 프로젝트 마이그레이션:

1.  열기를 `www/` 당신의 애플 리 케이 션을 포함 하는 디렉터리.

2.  제거 하 고 업데이트에서.jar 파일은 `ext/` 디렉터리.

3.  콘텐츠 업데이트는 `ext-air/` 디렉터리.

4.  콘텐츠 업데이트는 `ext-qnx/` 디렉터리.

5.  새로운 복사 `cordova-2.6.0.js` 프로젝트에.

6.  새로운 사용 하 여 HTML 업데이트 `cordova-2.6.0.js` 파일.

## 2.4.0에서 2.5.0로 업그레이드

PhoneGap 다운로드 디렉터리를 업데이트:

전체 디렉터리의 새 복사본을 다운로드 하는 것이 좋습니다.

그러나, 다음은 증분 업데이트에 필요한 새로운 부품입니다.

1.  Cordova.blackberry.js 파일에서 업데이트 된 `Phonegap-2.5.0/lib/blackberry/javascript` 디렉터리.

2.  업데이트는 `ext` , `ext-air` , 및 `ext-qnx` 에 `Phonegap-2.5.0/lib/blackberry/framework` 디렉터리.

3.  업데이트는 `build.xml` 파일에 `Phonegap-2.5.0/lib/blackberry` 디렉터리.

4.  업데이트는 `Phonegap-2.5.0/lib/blackberry/bin` 디렉터리.

5.  업데이트는 `VERSION` 파일에 `Phonegap-2.5.0/lib/blackberry` 디렉터리.

이 예제에서는 업데이트 / 디렉터리 또는 기존 마이그레이션 프로젝트:

1.  열기를 `www/` 당신의 애플 리 케이 션을 포함 하는 디렉터리.

2.  제거 하 고 업데이트에서.jar 파일은 `ext/` 디렉터리.

3.  콘텐츠 업데이트는 `ext-air/` 디렉터리.

4.  콘텐츠 업데이트는 `ext-qnx/` 디렉터리.

5.  새로운 복사 `cordova-2.5.0.js` 프로젝트에.

6.  새로운 사용 하 여 HTML 업데이트 `cordova-2.5.0.js` 파일.

## 2.3.0에서 2.4.0로 업그레이드

업데이트는 그냥 `www` 디렉터리:

1.  열기를 `www/` 당신의 애플 리 케이 션을 포함 하는 디렉터리.

2.  제거 하 고 업데이트에서.jar 파일은 `ext/` 디렉터리.

3.  콘텐츠 업데이트는 `ext-air/` 디렉터리.

4.  새로운 복사 `cordova-2.4.0.js` 프로젝트에.
    
    *   만약 각 본, 다음 업데이트는.js 파일에 `playbook/` 디렉터리.
    *   경우 블랙베리 10 업데이트에.js 파일은 `qnx/` 디렉터리.

5.  새로운 사용 하 여 HTML 업데이트 `cordova-2.4.0.js` 파일.

샘플 디렉터리 (즉, 업데이트 사용 개미 도구) 업데이트:

1.  열기는 `sample/lib/` 디렉터리.

2.  업데이트에서.jar 파일은 `cordova.2.3.0/ext/` 디렉터리.

3.  콘텐츠 업데이트는 `cordova.2.3.0/ext-air/` 디렉터리.

4.  콘텐츠 업데이트는 `cordova.2.3.0/ext-qnx/` 디렉터리.

5.  .Js 파일에 `cordova.2.3.0/javascript/` 디렉터리.

6.  열기는 `sample/lib/` 이름을 변경 하 고 디렉터리는 `cordova.2.3.0/` 디렉토리에`cordova.2.4.0/`.

7.  유형 `ant blackberry build` 또는 `ant playbook build` 를 업데이트 하는 `www/` 업데이트 코르도바와 디렉토리.

8.  열기는 `www/` 디렉터리 및 새로운 사용 하 여 HTML 업데이트 `cordova-2.4.0.js` 파일.

## 2.3.0 2.2.0에서 업그레이드

업데이트는 그냥 `www` 디렉터리:

1.  열기를 `www/` 당신의 애플 리 케이 션을 포함 하는 디렉터리.

2.  제거 하 고 업데이트에서.jar 파일은 `ext/` 디렉터리.

3.  콘텐츠 업데이트는 `ext-air/` 디렉터리.

4.  새로운 복사 `cordova-2.3.0.js` 프로젝트에.
    
    *   만약 각 본, 다음 업데이트는.js 파일에 `playbook/` 디렉터리.
    *   경우 블랙베리 10 업데이트에.js 파일은 `qnx/` 디렉터리.

5.  새로운 사용 하 여 HTML 업데이트 `cordova-2.3.0.js` 파일.

샘플 디렉터리 (즉, 업데이트 사용 개미 도구) 업데이트:

1.  열기는 `sample/lib/` 디렉터리.

2.  업데이트에서.jar 파일은 `cordova.2.2.0/ext/` 디렉터리.

3.  콘텐츠 업데이트는 `cordova.2.2.0/ext-air/` 디렉터리.

4.  콘텐츠 업데이트는 `cordova.2.2.0/ext-qnx/` 디렉터리.

5.  .Js 파일에 `cordova.2.2.0/javascript/` 디렉터리.

6.  열기는 `sample/lib/` 이름을 변경 하 고 디렉터리는 `cordova.2.2.0/` 디렉토리에`cordova.2.3.0/`.

7.  유형 `ant blackberry build` 또는 `ant playbook build` 를 업데이트 하는 `www/` 업데이트 코르도바와 디렉토리.

8.  열기는 `www/` 디렉터리 및 새로운 사용 하 여 HTML 업데이트 `cordova-2.3.0.js` 파일.

## 2.1.0에서 2.2.0으로 업그레이드

그냥 www 디렉토리 업데이트:

1.  열기를 `www/` 당신의 애플 리 케이 션을 포함 하는 디렉터리.

2.  제거 하 고 업데이트에서.jar 파일은 `ext/` 디렉터리.

3.  콘텐츠 업데이트는 `ext-air/` 디렉터리.

4.  새로운 복사 `cordova-2.2.0.js` 프로젝트에.
    
    *   만약 각 본, 다음 업데이트는.js 파일에 `playbook/` 디렉터리.
    *   경우 블랙베리 10 업데이트에.js 파일은 `qnx/` 디렉터리.

5.  새로운 사용 하 여 HTML 업데이트 `cordova-2.2.0.js` 파일.

샘플 디렉터리 (즉, 업데이트 사용 개미 도구) 업데이트:

1.  열기는 `sample/lib/` 디렉터리.

2.  업데이트에서.jar 파일은 `cordova.2.1.0/ext/` 디렉터리.

3.  콘텐츠 업데이트는 `cordova.2.1.0/ext-air/` 디렉터리.

4.  콘텐츠 업데이트는 `cordova.2.1.0/ext-qnx/` 디렉터리.

5.  .Js 파일에 `cordova.2.1.0/javascript/` 디렉터리.

6.  열기는 `sample/lib/` 이름을 변경 하 고 디렉터리는 `cordova.2.1.0/` 디렉토리에`cordova.2.2.0/`.

7.  유형 `ant blackberry build` 또는 `ant playbook build` 를 업데이트 하는 `www/` 업데이트 코르도바와 디렉토리.

8.  열기는 `www/` 디렉터리 및 새로운 사용 하 여 HTML 업데이트 `cordova-2.2.0.js` 파일.

## 2.0.0에서 2.1.0으로 업그레이드

업데이트는 그냥 `www` 디렉터리:

1.  열기를 `www/` 당신의 애플 리 케이 션을 포함 하는 디렉터리.

2.  제거 하 고 업데이트에서.jar 파일은 `ext/` 디렉터리.

3.  콘텐츠 업데이트는 `ext-air/` 디렉터리.

4.  새로운 복사 `cordova-2.1.0.js` 프로젝트에.
    
    *   만약 각 본, 다음 업데이트는.js 파일에 `playbook/` 디렉터리.

5.  새로운 사용 하 여 HTML 업데이트 `cordova-2.1.0.js` 파일.

샘플 디렉터리 (즉, 업데이트 사용 개미 도구) 업데이트:

1.  열기는 `sample/lib/` 디렉터리.

2.  업데이트에서.jar 파일은 `cordova.2.0.0/ext/` 디렉터리.

3.  콘텐츠 업데이트는 `cordova.2.0.0/ext-air/` 디렉터리.

4.  .Js 파일에 `cordova.2.0.0/javascript/` 디렉터리.

5.  열기는 `sample/lib/` 이름을 변경 하 고 디렉터리는 `cordova.2.0.0/` 디렉토리에`cordova.2.1.0/`.

6.  유형 `ant blackberry build` 또는 `ant playbook build` 를 업데이트 하는 `www/` 업데이트 코르도바와 디렉토리.

7.  열기는 `www/` 디렉터리 및 새로운 사용 하 여 HTML 업데이트 `cordova-2.1.0.js` 파일.

## 1.9.0에서 2.0.0로 업그레이드

업데이트는 그냥 `www` 디렉터리:

1.  열기를 `www/` 당신의 애플 리 케이 션을 포함 하는 디렉터리.

2.  제거 하 고 업데이트에서.jar 파일은 `ext/` 디렉터리.

3.  콘텐츠 업데이트는 `ext-air/` 디렉터리.

4.  새로운 복사 `cordova-2.0.0.js` 프로젝트에.
    
    *   만약 각 본, 다음 업데이트는.js 파일에 `playbook/` 디렉터리.

5.  새로운 사용 하 여 HTML 업데이트 `cordova-2.0.0.js` 파일.

6.  업데이트를 `www/plugins.xml` 파일. 두 플러그인 그들의 네임 스페이스/서비스 레이블을 변경 합니다. 캡처 및 연락처 플러그인에 대 한 오래 된 항목을 변경:
    
        < 플러그인 이름 "캡처" value="org.apache.cordova.media.MediaCapture"/ = >< 플러그인 이름 "연락처" value="org.apache.cordova.pim.Contact"/ = >
        
    
    받는 사람:
    
        < 플러그인 이름 "캡처" value="org.apache.cordova.capture.MediaCapture"/ = >< 플러그인 이름 "연락처" value="org.apache.cordova.pim.Contact"/ = >
        

샘플 디렉터리 (즉, 업데이트 사용 개미 도구) 업데이트:

1.  열기는 `sample/lib/` 디렉터리.

2.  업데이트에서.jar 파일은 `cordova.1.9.0/ext/` 디렉터리.

3.  콘텐츠 업데이트는 `cordova.1.9.0/ext-air/` 디렉터리.

4.  .Js 파일에 `cordova.1.9.0/javascript/` 디렉터리.

5.  열기는 `sample/lib/` 이름을 변경 하 고 디렉터리는 `cordova.1.9.0/` 디렉토리에`cordova.2.0.0/`.

6.  유형 `ant blackberry build` 또는 `ant playbook build` 를 업데이트 하는 `www/` 업데이트 코르도바와 디렉토리.

7.  열기는 `www/` 디렉터리 및 새로운 사용 하 여 HTML 업데이트 `cordova-2.0.0.js` 파일.

8.  열기는 `www/` 디렉터리 및 업데이트 된 `plugins.xml` 파일. 두 플러그인 그들의 네임 스페이스/서비스 레이블을 변경 합니다. 캡처 및 연락처 플러그인에 대 한 오래 된 항목을 변경:
    
         < 플러그인 이름 "캡처" value="org.apache.cordova.media.MediaCapture"/ = >< 플러그인 이름 "연락처" value="org.apache.cordova.pim.Contact"/ = >
        
    
    받는 사람:
    
         < 플러그인 이름 "캡처" value="org.apache.cordova.capture.MediaCapture"/ = >< 플러그인 이름 "연락처" value="org.apache.cordova.pim.Contact"/ = >
        

*   1.8.0를 업그레이드 하려면 1.7.0에서 이동 하시기 바랍니다

## 1.8.0 1.7.0에서 업그레이드

업데이트는 그냥 `www` 디렉터리:

1.  열기를 `www/` 당신의 애플 리 케이 션을 포함 하는 디렉터리.

2.  제거 하 고 업데이트에서.jar 파일은 `ext/` 디렉터리.

3.  콘텐츠 업데이트는 `ext-air/` 디렉터리.

4.  새로운 복사 `cordova-1.8.0.js` 프로젝트에.
    
    *   만약 각 본, 다음 업데이트는.js 파일에 `playbook/` 디렉터리.

5.  새로운 사용 하 여 HTML 업데이트 `cordova-1.8.0.js` 파일.

6.  업데이트를 `www/plugins.xml` 파일. 두 플러그인 그들의 네임 스페이스/서비스 레이블을 변경 합니다. 캡처 및 연락처 플러그인에 대 한 오래 된 항목을 변경:
    
        < 플러그인 이름 "캡처" value="org.apache.cordova.media.MediaCapture"/ = >< 플러그인 이름 "연락처" value="org.apache.cordova.pim.Contact"/ = >
        
    
    받는 사람:
    
        < 플러그인 이름 "캡처" value="org.apache.cordova.capture.MediaCapture"/ = >< 플러그인 이름 "연락처" value="org.apache.cordova.pim.Contact"/ = >
        

샘플 디렉터리 (즉, 업데이트 사용 개미 도구) 업데이트:

1.  열기는 `sample/lib/` 디렉터리.

2.  업데이트에서.jar 파일은 `cordova.1.7.0/ext/` 디렉터리.

3.  콘텐츠 업데이트는 `cordova.1.7.0/ext-air/` 디렉터리.

4.  .Js 파일에 `cordova.1.7.0/javascript/` 디렉터리.

5.  열기는 `sample/lib/` 이름을 변경 하 고 디렉터리는 `cordova.1.7.0/` 디렉토리에`cordova.1.8.0/`.

6.  유형 `ant blackberry build` 또는 `ant playbook build` 를 업데이트 하는 `www/` 업데이트 코르도바와 디렉토리.

7.  열기는 `www/` 디렉터리 및 새로운 사용 하 여 HTML 업데이트 `cordova-1.8.0.js` 파일.

8.  열기는 `www/` 디렉터리 및 업데이트 된 `plugins.xml` 파일. 두 플러그인 그들의 네임 스페이스/서비스 레이블을 변경 합니다. 캡처 및 연락처 플러그인에 대 한 오래 된 항목을 변경:
    
         < 플러그인 이름 "캡처" value="org.apache.cordova.media.MediaCapture"/ = >< 플러그인 이름 "연락처" value="org.apache.cordova.pim.Contact"/ = >
        
    
    받는 사람:
    
         < 플러그인 이름 "캡처" value="org.apache.cordova.capture.MediaCapture"/ = >< 플러그인 이름 "연락처" value="org.apache.cordova.pim.Contact"/ = >