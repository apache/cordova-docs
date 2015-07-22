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

title: Windows Phone 명령줄 도구
---

# Windows Phone 명령줄 도구

`cordova`명령줄 유틸리티는 한 번에 여러 플랫폼에서 응용 프로그램을 만들 수 있는 고급 도구. 코르 도우 바 프레임 워크의 이전 버전 각 플랫폼에 특정 명령줄 도구 집합을 제공합니다. CLI에 대 안으로 그들을 사용 하 여 [cordova.apache.org][1]에서 코르도바의이 버전을 다운로드 해야 합니다. 다운로드는 각 플랫폼에 대 한 별도 아카이브를 포함합니다. 당신이 목표 하고자 하는 플랫폼을 확장 합니다. 여기에 설명 된 도구는 일반적으로 최상위 수준에서 사용할 수 있는 `bin` 자세한 지시 사항에 대 한 디렉터리, 그렇지 않으면 **README** 파일을 참조 하십시오.

 [1]: http://cordova.apache.org

## Windows Phone

Windows Phone 명령줄 도구 지원 만드는 건물과 새로운 프로젝트를 실행 합니다. 명령을은 cmd 또는 powershell 프롬프트에서 실행 해야 합니다.

WP8 repo는 지금 WP7 + WP8을 구축 하기 위한 코드를 포함 애플 리 케이 션. Repo 각 하위 디렉터리는: `wp7/` 및`wp8/`.

## 프로젝트 만들기

새로운 아파치 코르도바 WP7 또는 WP8 응용 프로그램을 만드는 방법에 대해 이동 하는 방법은 2 가지.

### 설치 서식 파일을 만들고 배치 파일을 실행 합니다.

*   Repo의 루트 [파일](../../../cordova/file/fileobj/fileobj.html) createTemplates.bat에 포함 되어 있습니다. 더블 클릭이 [파일](../../../cordova/file/fileobj/fileobj.html) 2.zip 파일을 생성 합니다. (CordovaWP7\_x\_x\_x.zip + CordovaWP8\_x\_x\_x.zip x.x.x는 현재 버전 번호) 쉽게 복사 Visual Studio에서 이러한 파일을 사용 하 여 그들에 게 "내 Documents\Visual Studio 2012\Templates\ProjectTemplates\" 다음 수 새 프로젝트 메뉴-> Visual Studio 파일에서 새로운 아파치 코르도바 Windows Phone 응용 프로그램을 만들 수 있습니다. 있습니다

*   명령줄에서 배치 파일을 실행 하는 경우 호출할 수 있습니다 또한 자동으로 설치 하는 매개 [변수](../../../plugin_ref/spec.html)

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
    

Visual Studio를 시작 하 고 (C:\path\to\my\_new\_project)에서 솔루션 [파일](../../../cordova/file/fileobj/fileobj.html) (.sln)을 엽니다

빌드 및 실행

## (다음 정리 빌드) 프로젝트 구축

*   디버그
    
    $ C:\path\to\my\_new\_project\cordova\build-디버깅

*   릴리스
    
    $ C:\path\to\my\_new\_project\cordova\build-릴리스

## 응용 프로그램을 실행

다음 *선택적* 매개 변수와 함께 '실행 명령 실행

*   대상 사양입니다. 이것은 포함 한다 `--emulator` , `--device` , 또는`--target=<targetID>`.

*   빌드 사양. 이것은 포함 한다 `--debug` , `--release` , 또는`--nobuild`.
    
    $ C:\path\to\my\_new\_project\cordova\run \[대상\] \[빌드\]

기본적으로는 `run` 명령으로 불릴 것 이다 `--emulator --debug` 플래그가 제공 되지 않은 경우.

## 청소

    $ C:\path\to\my_new_project\cordova\clean