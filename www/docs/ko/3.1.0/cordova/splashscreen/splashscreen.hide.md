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

# splashscreen.hide

시작 화면을 닫습니다.

    navigator.splashscreen.hide();
    

## 설명

이 메서드는 응용 프로그램의 시작 화면을 일축 한다.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 10
*   iOS
*   Windows Phone 7과 8
*   윈도우 8

## 빠른 예제

    navigator.splashscreen.hide();
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>Splashscreen Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.splashscreen.hide();
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
      </body>
    </html>
    

## iOS 특질

`config.xml`파일의 `AutoHideSplashScreen` 설정을 해야 합니다 `false` . 2 초 동안 시작 화면을 숨기고 지연에 다음과 같이 타이머 추가 `deviceready` 이벤트 처리기:

        setTimeout(function() {
            navigator.splashscreen.hide();
        }, 2000);