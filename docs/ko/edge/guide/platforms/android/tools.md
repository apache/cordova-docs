* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# 안 드 로이드 쉘 도구 가이드

이 가이드에는 코르도바의 플랫폼을 중심으로 셸 도구 세트를 사용 하 여 안 드 로이드 애플 리 케이 션을 개발 하는 방법을 보여 줍니다. 이 개발 경로 개요에서 설명한 명령줄 인터페이스에 설명 된 크로스 플랫폼 CLI 도구 보다 개발 옵션의 넓은 범위를 제공할 수 있습니다. 예를 들어, 네이티브 구성 요소와 함께 사용자 지정 코르도바 WebView를 배포 하는 경우 셸 도구를 사용 해야 합니다. 개발 경로 중 하나를 사용 하기 전에 먼저 구성 해야 안 드 로이드 SDK 환경 안 드 로이드 플랫폼 가이드에 설명 된 대로.

안 드 로이드에 대 한 셸 도구를 사용 하려면 [cordova.apache.org][1]에서 코르도바를 다운로드. 다운로드는 각 플랫폼에 대 한 별도 아카이브를 포함합니다. 대상으로 하 고 싶은 각 확장 `android` 이 경우. 관련 도구는 일반적으로 최상위 수준에서 사용할 수 있는 `bin` 자세한 지시 사항에 대 한 디렉터리, 그렇지 않으면 **README** 파일을 참조 하십시오.

 [1]: http://cordova.apache.org

이러한 도구를 사용 하 여 작성, 구축 및 실행 안 드 로이드 애플 리 케이 션 수 있습니다. 모든 플랫폼에 걸쳐 플러그인 기능을 활성화 하는 추가 명령줄 인터페이스에 대 한 정보를 관리 플러그인을 사용 하 여 Plugman를 참조 하십시오. 플러그인을 개발 하는 방법에 대 한 내용은 응용 프로그램 플러그인을 참조 하십시오.

## 프로젝트 만들기

실행은 `create` 프로젝트, 리버스 도메인 스타일 패키지 식별자 및 응용 프로그램의 표시 이름에 대 한 기존 경로 지정 하는 명령을. 다음은 맥/리눅스와 윈도우에 대 한 구문이입니다.

        $ /path/to/cordova-android/bin/create /path/to/project com.example.project_name ProjectName
    
        C:\>\path\to\cordova-android\bin\create.bat \path\to\project com.example.project_name ProjectName
    

## 빌드

이 청소 다음 프로젝트를 빌드합니다.

맥/리눅스 또는 윈도우에서 디버그:

        $ /path/to/project/cordova/build --debug
    
        C:\>\path\to\project\cordova\build.bat --debug
    

맥/리눅스 또는 창 출시:

        $ /path/to/project/cordova/build --release
    
        C:\>\path\to\project\cordova\build.bat --release
    

## 응용 프로그램 실행

`run`명령 다음 *선택적* 매개 변수:

*   대상 사양입니다. 이것은 포함 한다 `--emulator` , `--device` , 또는`--target=<targetID>`.

*   빌드 사양. 이것은 포함 한다 `--debug` , `--release` , 또는`--nobuild`.
    
        $ /path/to/project/cordova/run [Target] [Build]
        
        C:\>\path\to\project\cordova\run.bat [Target] [Build]
        

적어도 하나의 안 드 로이드 가상 장치, 그렇지 않으면으로 그렇게 하 라는 메시지가 만들 다는 것을 확인은 `android` 명령. 여러 개의 AVD를 대상으로 사용할 수 있는 경우 하나를 선택 하 라는 메시지가 표시. 기본적으로는 `run` 명령 검색 연결 된 장치 또는 현재 실행 중인 에뮬레이터 없는 장치가 발견 되 면.

## 로깅

        $ /path/to/project/cordova/log
    
        C:\>\path\to\project\cordova\log.bat
    

## 청소

        $ /path/to/project/cordova/clean
    
        C:\>\path\to\project\cordova\clean.bat
    

## 개미의 수동 사용

와 같은 커맨드 라인에서 직접 개미를 호출 하려는 경우 `ant debug install` , 개미 명령에 추가 매개 변수를 지정 하려면:

        ant debug install -Dout.dir=ant-build -Dgen.absolute.dir=ant-gen
    

코르도바의 Ant 스크립트에 의해 사용 되는 디렉터리 기본값과 다른 때문입니다. 개미가 대 커맨드 라인에서 실행 될 때 충돌을 방지 하려면 이렇게 Eclipse/ADT 내부.

사용 하는 경우 이러한 추가 매개 변수가 자동으로 당신을 위해 추가 되는 `cordova/build` 및 `cordova/run` 스크립트는 위에서 설명한. 사용 하는 것이 좋습니다 이런 이유로 `cordova/build` 및 `cordova/run` 명령줄에서 직접 호출 개미 대신 스크립트.