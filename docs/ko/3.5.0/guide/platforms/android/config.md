---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied. See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# 안 드 로이드 구성

`config.xml`파일을 각 응용 프로그램 및 CordovaWebView 인스턴스에 적용 되는 응용 프로그램의 기본 설정 제어. 이 섹션 자세히만 안 드 로이드 빌드에 적용 되는 기본 설정을 설명 합니다. 글로벌 구성 옵션에 config.xml 파일 정보를 참조 하십시오.

*   `KeepRunning`(boolean, 기본값은 `true` ): 응용 프로그램 유지 후에 백그라운드에서 실행 여부를 결정 합니다는 `pause` 이벤트가 발생 합니다. 참고:이 값을 false로 설정 죽이지 않을 것 이다 응용 프로그램 일시 중지 이벤트 후, app 백그라운드에 있는 동안 코르 도우 바 webview에서 코드 실행을 중지만 됩니다.
    
        <preference name="KeepRunning" value="false"/>
        

*   `LoadUrlTimeoutValue`(밀리초에서 숫자, 기본적으로 `20000` , 20 초): 시간 초과 오류를 throw 하기 전에 대기할 시간을 페이지를 로드할 때. 이 예제에서는 10 초 보다는 오히려 20를 지정합니다.
    
        <preference name="LoadUrlTimeoutValue" value="10000"/>
        

*   `SplashScreen`(문자열, 기본값: `splash` ): 그것의 확장에 마이너스 파일의 이름은 `res/drawable` 디렉터리. 다양 한 자산에는 다양 한 하위 디렉터리에이 일반적인 이름을 공유 해야 합니다.
    
        <preference name="SplashScreen" value="mySplash"/>
        

*   `SplashScreenDelay`(기본값: 밀리초에서 숫자 `3000` ): 시간 시작 화면 이미지를 표시 합니다.
    
        <preference name="SplashScreenDelay" value="10000"/>
        

*   `InAppBrowserStorageEnabled`(boolean, 기본값은 `true` ): 컨트롤 페이지는 InAppBrowser 이내 연 액세스할 수 있는지 동일한 localStorage 및 WebSQL 저장 페이지 기본 브라우저와 함께 열립니다.
    
        <preference name="InAppBrowserStorageEnabled" value="true"/>
        

*   `LoadingDialog`(문자열, 기본값: `null` ): 경우 설정, 지정 된 제목 및 메시지, 대화 및 회전자, 응용 프로그램의 첫 번째 페이지를 로드할 때 표시 됩니다. 제목 및 메시지는 쉼표로 구분 하 여이 값 문자열 및 대화 상자 표시 전에 그 쉼표 제거 됩니다.
    
        <preference name="LoadingDialog" value="My Title,My Message"/>
        

*   `LoadingPageDialog`(문자열, 기본값: `null` ): 동일 `LoadingDialog` , 하지만 응용 프로그램에서 첫 번째 페이지 다음 모든 페이지를 로드 하기 위한.
    
        <preference name="LoadingPageDialog" value="My Title,My Message"/>
        

*   `ErrorUrl`(URL, 기본값은 `null` ): 만약 설정, 제목 "응용 프로그램 오류" 대화 상자 대신 응용 프로그램에서 오류에 참조 된 페이지를 표시 합니다.
    
        <preference name="ErrorUrl" value="myErrorPage.html"/>
        

*   `ShowTitle`(boolean, 기본값은 `false` ): 화면 상단에 제목 표시 합니다.
    
        <preference name="ShowTitle" value="true"/>
        

*   `LogLevel`(문자열, 기본값: `ERROR` ): 로그를 통해 응용 프로그램에서 메시지를 필터링 하는 최소 로그 수준을 설정 합니다. 유효한 값은 `ERROR` , `WARN` , `INFO` , `DEBUG` , 그리고`VERBOSE`.
    
        <preference name="LogLevel" value="VERBOSE"/>
        

*   `SetFullscreen`(boolean, 기본값은 `false` ): 동일은 `Fullscreen` 이 xml 파일의 전역 구성 매개 변수. 이 안 드 로이드 관련 요소는 전역에 찬성 폐기 `Fullscreen` 요소를 이후 버전에서 제거 될 예정입니다.