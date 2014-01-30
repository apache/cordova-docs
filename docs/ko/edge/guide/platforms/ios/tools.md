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

# iOS 명령줄 도구

`cordova`명령줄 유틸리티는 한 번에 여러 플랫폼에서 응용 프로그램을 만들 수 있는 고급 도구. 코르 도우 바 프레임 워크의 이전 버전 각 플랫폼에 특정 명령줄 도구 집합을 제공합니다. CLI에 대 안으로 그들을 사용 하 여 [cordova.apache.org][1]에서 코르도바의이 버전을 다운로드 해야 합니다. 다운로드는 각 플랫폼에 대 한 별도 아카이브를 포함합니다. 당신이 목표 하고자 하는 플랫폼을 확장 합니다. 여기에 설명 된 도구는 일반적으로 최상위 수준에서 사용할 수 있는 `bin` 자세한 지시 사항에 대 한 디렉터리, 그렇지 않으면 **README** 파일을 참조 하십시오.

 [1]: http://cordova.apache.org

IOS 명령줄 도구 쉘 스크립트 기반 및 의존 하는 Xcode 명령줄 도구와 같은 `xcode-select` 및`xcodebuild`.

낮은 수준의 명령줄 인터페이스에 대 한 정보에 대 한 있도록 플러그인 플러그인 관리를 사용 하 여 Plugman를 참조 하십시오. 개요 응용 프로그램 플러그인을 참조 하십시오.

## 프로젝트 만들기

실행은 `create` 프로젝트, 리버스 도메인 스타일 패키지 식별자 및 응용 프로그램의 표시 이름에 대 한 기존 경로 지정 하는 명령을.

    $ ./path/to/cordova-ios/bin/create /path/to/my_new_project com.example.project_name ProjectName
    

## 프로젝트 빌드

    $ /path/to/my_new_project/cordova/build
    

## 에뮬레이터에서 응용 프로그램을 실행

    $ /path/to/my_new_project/cordova/run
    

## 공개

    $ /path/to/my_new_project/cordova/release
    

## 로깅

    $ /path/to/my_new_project/cordova/log