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

# Windows Phone 명령줄 도구

`cordova`명령줄 유틸리티는 한 번에 여러 플랫폼에서 응용 프로그램을 만들 수 있는 고급 도구. 코르 도우 바 프레임 워크의 이전 버전 각 플랫폼에 특정 명령줄 도구 집합을 제공합니다. CLI에 대 안으로 그들을 사용 하 여 [cordova.apache.org][1]에서 코르도바의이 버전을 다운로드 해야 합니다. 다운로드는 각 플랫폼에 대 한 별도 아카이브를 포함합니다. 당신이 목표 하고자 하는 플랫폼을 확장 합니다. 여기에 설명 된 도구는 일반적으로 최상위 수준에서 사용할 수 있는 `bin` 자세한 지시 사항에 대 한 디렉터리, 그렇지 않으면 **README** 파일을 참조 하십시오.

 [1]: http://cordova.apache.org

낮은 수준의 명령줄 인터페이스에 대 한 정보에 대 한 있도록 플러그인 플러그인 관리를 사용 하 여 Plugman를 참조 하십시오. 개요 응용 프로그램 플러그인을 참조 하십시오.

## Windows Phone

Windows Phone 명령줄 도구 지원 만드는 건물과 새로운 프로젝트를 실행 합니다. 명령을은 cmd 또는 powershell 프롬프트에서 실행 해야 합니다.

WP8 repo는 지금 WP7 + WP8을 구축 하기 위한 코드를 포함 애플 리 케이 션. Repo 각 하위 디렉터리는: `wp7/` 및`wp8/`.

## 프로젝트 만들기

새로운 아파치 코르도바 WP7 또는 WP8 응용 프로그램을 만드는 방법에 대해 이동 하는 방법은 2 가지.

### 설치 된 서식 파일을 만들고 배치 파일을 실행

*   Repo의 루트를 포함 한 `createTemplates.bat` 파일. 2 생성 두 번 클릭 `.zip` 파일: `CordovaWP7_x_x_x.zip` 및 `CordovaWP8_x_x_x.zip` , *x.x.x* 현재 버전 번호를 나타냅니다. Visual Studio에서 이러한 파일을 쉽게 사용 하려면 복사를 `My Documents\Visual Studio
2012\Templates\ProjectTemplates\` . 다음 Visual Studio에서 새로운 아파치 코르도바 Windows Phone 응용 프로그램을 만들 수 있게 하는 **파일 → 새 프로젝트** 메뉴.

*   명령줄에서 배치 파일을 실행 하는 경우 호출할 수 있습니다 또한 자동으로 설치 하는 매개 변수

스크립트를 실행 합니다.

    > createTemplates.bat-설치
    

### 만들기 스크립트를 사용 하 여 명령줄에서

실행은 `create` 프로젝트, 리버스 도메인 스타일 패키지 식별자 및 응용 프로그램의 표시 이름에 대 한 기존 경로 지정 하는 명령을. 다음은 Windows Phone 7과 8에 대 한 구문이입니다.

    >.\wp7\bin\create PathToNewProject [ PackageName ] [ AppName ]
    >.\wp8\bin\create PathToNewProject [ PackageName ] [ AppName ]
    
    >PathToNewProject : The path to where you wish to create the project
    >PackageName      : The namespace for the project (default is Cordova.Example)
    >AppName          : The name of the application (default is CordovaWP8AppProj or CordovaWP7AppProj)
    
    >examples:
    >.\wp7\bin\create C:\path\to\my_new_project
    >.\wp8\bin\create C:\path\to\my_new_project io.cordova.example CordovaWP8App
    

Visual Studio를 시작 하 고 (C:\path\to\my\_new\_project)에서 솔루션 파일 (.sln)을 엽니다

빌드 및 실행

## 프로젝트 구축 (청소, 다음 빌드)

*   디버그
    
    $ C:\path\to\my\_new\_project\cordova\build-디버깅

*   릴리스
    
    $ C:\path\to\my\_new\_project\cordova\build-릴리스

## 응용 프로그램 실행

다음 *선택적* 매개 변수와 함께 '실행 명령 실행

*   대상 사양입니다. 이것은 포함 한다 `--emulator` , `--device` , 또는`--target=<targetID>`.

*   빌드 사양. 이것은 포함 한다 `--debug` , `--release` , 또는`--nobuild`.
    
    $ C:\path\to\my\_new\_project\cordova\run \[대상\] \[빌드\]

기본적으로는 `run` 명령으로 불린다 `--emulator --debug` 플래그가 제공 되지 않은 경우.

## 청소

    $ C:\path\to\my_new_project\cordova\clean