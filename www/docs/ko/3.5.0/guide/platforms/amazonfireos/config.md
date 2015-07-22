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

# 아마존 화재 운영 체제 구성

`config.xml`파일을 각 응용 프로그램 및 CordovaWebView 인스턴스에 적용 되는 응용 프로그램의 기본 설정 제어. 아마존 화재 운영 체제에만 적용이 섹션 세부 환경 설정을 작성 합니다. 글로벌 구성 옵션에 config.xml 파일 정보를 참조 하십시오.

*   `KeepRunning`(boolean, 기본값은 `true` ): 응용 프로그램 유지 후에 백그라운드에서 실행 여부를 결정 합니다는 `pause` 이벤트가 발생 합니다.
    
        <preference name="KeepRunning" value="false"/>
        

*   `ErrorUrl`: 표준 HTTP 오류 400-500 범위에 대 한 응답에서을 표시 하는 오류 페이지를 지정 합니다. 홈 페이지와 다른 웹 자산을 포함 하는 최상위 디렉터리에서 지정된 된 파일을 놓습니다.
    
        <preference name="ErrorUrl" value="error.html"/>
        

*   `LoadingDialog`: 응용 프로그램을 로드할 때 기본 대화 상자를 표시 합니다. 값의 형식은 *제목, 메시지*
    
        <preference name="LoadingDialog" value="Please wait, the app is loading"/>
        

*   `LoadingPageDialog`: 애플 리 케이 션 내에서 하위 페이지를 로드할 때 기본 대화 상자를 표시 합니다. 값의 형식은 *제목, 메시지*
    
        <preference name="LoadingPageDialog" value="Please wait, the data is loading"/>
        

*   `LoadUrlTimeoutValue`(숫자, 기본값은 `20000` ): 시간 초과 오류를 throw 하기 전에 대기할 시간을 페이지를 로드할 때. 이 예제에서는 10 초 보다는 오히려 20를 지정합니다.
    
        <preference name="LoadUrlTimeoutValue" value="10000"/>
        

*   `SplashScreen`: 파일에 확장명 뺀 이름에 `res/drawable` 디렉터리. 다양 한 자산에는 다양 한 하위 디렉터리에이 일반적인 이름을 공유 해야 합니다.
    
        <preference name="SplashScreen" value="splash"/>
        

*   `SplashScreenDelay`(번호, 기본값: `5000` ): 시간 시작 화면 이미지를 표시 합니다.
    
        <preference name="SplashScreenDelay" value="10000"/>