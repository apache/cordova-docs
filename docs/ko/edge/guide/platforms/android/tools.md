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

# 안 드 로이드 명령줄 도구

`cordova`명령줄 유틸리티는 한 번에 여러 플랫폼에서 응용 프로그램을 만들 수 있는 고급 도구. 코르 도우 바 프레임 워크의 이전 버전 각 플랫폼에 특정 명령줄 도구 집합을 제공합니다. CLI에 대 안으로 그들을 사용 하 여 [cordova.apache.org][1]에서 코르도바의이 버전을 다운로드 해야 합니다. 다운로드는 각 플랫폼에 대 한 별도 아카이브를 포함합니다. 당신이 목표 하고자 하는 플랫폼을 확장 합니다. 여기에 설명 된 도구는 일반적으로 최상위 수준에서 사용할 수 있는 `bin` 자세한 지시 사항에 대 한 디렉터리, 그렇지 않으면 **README** 파일을 참조 하십시오.

 [1]: http://cordova.apache.org

낮은 수준의 명령줄 인터페이스에 대 한 정보에 대 한 있도록 플러그인 플러그인 관리를 사용 하 여 Plugman를 참조 하십시오. 개요 응용 프로그램 플러그인을 참조 하십시오.

## 프로젝트 만들기

실행은 `create` 프로젝트, 리버스 도메인 스타일 패키지 식별자 및 응용 프로그램의 표시 이름에 대 한 기존 경로 지정 하는 명령을. 다음은 맥과 윈도 즈에 대 한 구문이입니다.

    $ /path/to/cordova-android/bin/create /path/to/project com.example.project_name ProjectName
    $ C:\path\to\cordova-android\bin\create.bat C:\path\to\project com.example.project_name ProjectName
    

## 빌드

이 청소 다음 프로젝트를 빌드합니다.

Mac 또는 Windows에서 디버깅:

    $ /path/to/project/cordova/build --debug
    $ C:\path\to\project\cordova\build.bat --debug
    

Mac 또는 Windows 릴리스:

    $ /path/to/project/cordova/build --release
    $ C:\path\to\project\cordova\build.bat --release
    

## 응용 프로그램 실행

`run`명령 다음 *선택적* 매개 변수:

*   대상 사양입니다. 이것은 포함 한다 `--emulator` , `--device` , 또는`--target=<targetID>`.

*   빌드 사양. 이것은 포함 한다 `--debug` , `--release` , 또는`--nobuild`.
    
    \[대상\] \[빌드\] $ /path/to/project/cordova/run $ C:\path\to\project\cordova\run.bat \[대상\] \[빌드\]

적어도 하나의 안 드 로이드 가상 장치, 그렇지 않으면으로 그렇게 하 라는 메시지가 만들 다는 것을 확인은 `android` 명령. 여러 개의 AVD를 대상으로 사용할 수 있는 경우 하나를 선택 하 라는 메시지가 표시. 기본적으로는 `run` 명령 검색 연결 된 장치 또는 현재 실행 중인 에뮬레이터 없는 장치가 발견 되 면.

## 로깅

    $ /path/to/project/cordova/log $ C:\path\to\project\cordova\log.bat
    

### 청소

    $ /path/to/project/cordova/clean $ C:\path\to\project\cordova\clean.bat