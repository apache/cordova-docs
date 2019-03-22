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

title: 아마존 화재 운영 체제 구성
---

# 아마존 화재 운영 체제 구성

`config.xml`파일을 각 응용 프로그램 및 CordovaWebView 인스턴스에 적용 되는 응용 프로그램의 기본 설정 제어. 아마존 화재 운영 체제에만 적용이 섹션 세부 환경 설정을 작성 합니다. 글로벌 구성 옵션에 대 한 내용은 [config.xml 파일을][1] 참조 하십시오.

 [1]: config_ref_index.md.html#The%20config.xml%20File

*   `KeepRunning`(boolean, 기본값은 `true` ): 응용 프로그램 [유지](../../next/index.html) 후에 백그라운드에서 실행 여부를 결정 합니다는 `[pause](../../../cordova/events/events.pause.html)` 이벤트가 발생 합니다. 이 값을 설정 `false` 후 응용 프로그램을 죽 일 하지 않습니다는 `[pause](../../../cordova/events/events.pause.html)` [이벤트](../../../cordova/events/events.html), 하지만 단순히 중단 코드의 실행 응용 프로그램은 백그라운드에서 코르도바 webview 내에서.
    
        <preference name="KeepRunning" value="false"/>
        

*   `ErrorUrl`(URL, 기본값은 `null` ): 만약 설정, 제목 "응용 프로그램 오류" 대화 상자 대신 응용 프로그램에서 오류에 참조 된 페이지를 표시 합니다.
    
        <preference name="ErrorUrl" value="error.html"/>
        

*   `LoadingDialog`(문자열, 기본값: `null` ): 경우 설정, 지정 된 제목 및 메시지, 대화 및 회전자, 응용 프로그램의 첫 번째 페이지를 로드할 때 표시 됩니다. 제목 및 메시지는 쉼표로 구분 하 여이 값 문자열 및 대화 상자 표시 전에 그 쉼표 제거 됩니다.
    
        <preference name="LoadingDialog" value="Please wait, the app is loading"/>
        

*   `LoadingPageDialog`(문자열, 기본값: `null` ): 동일 `LoadingDialog` , 하지만 응용 프로그램에서 첫 번째 페이지 다음 모든 페이지를 로드 하기 위한.
    
        <preference name="LoadingPageDialog" value="Please wait, the data is loading"/>
        

*   `LoadUrlTimeoutValue`(숫자, 기본값은 `20000` ): 시간 초과 오류를 throw 하기 전에 대기할 시간을 페이지를 로드할 때. 이 예제에서는 10 초 보다는 오히려 20를 지정합니다.
    
        <preference name="LoadUrlTimeoutValue" value="10000"/>
        

*   `SplashScreen`: 파일에 확장명 뺀 이름에 `res/drawable` 디렉터리. 다양 한 자산에는 다양 한 하위 디렉터리에이 일반적인 이름을 공유 해야 합니다.
    
        <preference name="SplashScreen" value="splash"/>
        

*   `SplashScreenDelay`(번호, 기본값: `5000` ): 시간 시작 화면 이미지를 표시 합니다.
    
        <preference name="SplashScreenDelay" value="10000"/>
        

*   `ShowTitle`(boolean, 기본값은 `false` ): 화면 상단에 제목 표시 합니다.
    
        <preference name="ShowTitle" value="true"/>
        

*   `LogLevel`(문자열, 기본값: `ERROR` ): 로그를 통해 응용 프로그램에서 메시지를 필터링 하는 최소 로그 수준을 설정 합니다. 유효한 값은 `ERROR` , `WARN` , `INFO` , `DEBUG` , 그리고`VERBOSE`.
    
        <preference name="LogLevel" value="VERBOSE"/>