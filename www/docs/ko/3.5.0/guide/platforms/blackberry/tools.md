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

# 블랙베리 명령줄 도구

`cordova`명령줄 유틸리티는 한 번에 여러 플랫폼에서 응용 프로그램을 만들 수 있는 고급 도구. 코르 도우 바 프레임 워크의 이전 버전 각 플랫폼에 특정 명령줄 도구 집합을 제공합니다. CLI에 대 안으로 그들을 사용 하 여 [cordova.apache.org][1]에서 코르도바의이 버전을 다운로드 해야 합니다. 다운로드는 각 플랫폼에 대 한 별도 아카이브를 포함합니다. 당신이 목표 하고자 하는 플랫폼을 확장 합니다. 여기에 설명 된 도구는 일반적으로 최상위 수준에서 사용할 수 있는 `bin` 자세한 지시 사항에 대 한 디렉터리, 그렇지 않으면 **README** 파일을 참조 하십시오.

 [1]: http://cordova.apache.org

## 프로젝트 만들기

실행은 `create` 프로젝트, 리버스 도메인 스타일 패키지 식별자 및 응용 프로그램의 표시 이름에 대 한 기존 경로 지정 하는 명령을. 다음은 맥과 윈도 즈에 대 한 구문이입니다.

    $ /path/to/cordova-blackberry-webworks/bin/create /path/to/my_new_project com.example.project_name ProjectName
    $ /path/to/cordova-blackberry-webworks/bin/create.bat /path/to/my_new_project com.example.project_name ProjectName
    

**참고:** 블랙베리 플랫폼 패키지 이름 자리 표시자를 무시 ( `com.example.project_name` ), 그것이 여전히 크로스 플랫폼 도구에 의해 사용 하기 위해 필요 하지만.

## 프로젝트 빌드

블랙베리 프로젝트에 대 한 있는지 확인 하십시오 당신은 사용자 정의 `project.properties` 코르 도우 바 프로젝트의 루트 디렉터리에 있는 파일. 이렇게 키 암호, 서명 귀하의 블랙베리를 공급 하 고 블랙베리 WebWorks SDK 및 블랙베리 에뮬레이터 실행 파일 위치를 지정 해야 합니다.

    $ /path/to/my_new_project/cordova/build <platform>
    $ /path/to/my_new_project/cordova/build.bat <platform>
    

## 에뮬레이터를 시작

블랙베리 프로젝트에 대 한 있는지 확인 하십시오 당신은 사용자 정의 `project.properties` 코르 도우 바 프로젝트 디렉터리의 루트에 있는 파일. 이렇게 키 암호, 서명 귀하의 블랙베리를 공급 하 고 블랙베리 WebWorks SDK 및 블랙베리 에뮬레이터 실행 파일 위치를 지정 해야 합니다.

    $ /path/to/my_new_project/cordova/run <platform>
    

다음 자극 될 때 ' 아니오'를 선택 하 고:

    검은 딸기 장치를 컴퓨터에 연결 되어 있습니까? (y/n) $ /path/to/my_new_project/cordova/run < 플랫폼 >
    

다음 자극 될 때 ' 아니오'를 선택 하 고:

    검은 딸기 장치를 컴퓨터에 연결 되어 있습니까? (y/n)
    

## 로깅

불행히도, 스트리밍 장치에서 직접 로그는 현재 지원 되지 않습니다. 그러나, 블랙베리 플레이 북과 블랙베리 스마트폰 장치 블랙베리 OS 7.0을 실행 하 고 위의 내장 웹 관리자 지원을 제공 합니다. 또한 응용 프로그램 로그에 액세스할 수 있습니다 (에 대 한 호출을 포함 하 여 `console.log` ) 홈 화면에서 'ALT' 키 ' lglg ' 키를 입력 하 여 장치에.