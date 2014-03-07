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

# InAppBrowser

> `InAppBrowser`때 표시 하는 웹 브라우저 보기 전화 `window.open()` , 또는 때로 형성 된 링크 열기`<a target="_blank">`.

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    

**참고:** InAppBrowser 창 표준 웹 브라우저 처럼 동작 및 코르도바 Api에 액세스할 수 없습니다.

## 설명

호출에서 반환 하는 개체`window.open`.

## 메서드

*   addEventListener
*   removeEventListener
*   close
*   show
*   executeScript
*   insertCSS

## 기능 액세스

버전 3.0, 코르도바 *플러그인*으로 장치 수준 Api를 구현합니다. CLI의 사용 `plugin` 명령 설명에 명령줄 인터페이스를 추가 하거나 프로젝트에 대 한이 기능을 제거 하려면:

        $ cordova plugin add org.apache.cordova.inappbrowser
        $ cordova plugin ls
        [ 'org.apache.cordova.inappbrowser' ]
        $ cordova plugin rm org.apache.cordova.inappbrowser
    

이 명령은 모든 타겟된 플랫폼에 적용 하지만 플랫폼 관련 구성 설정을 아래에 설명 된 수정:

*   (안 드 로이드`app/res/xml/config.xml`)
    
        <feature name="InAppBrowser">
            <param name="android-package" value="org.apache.cordova.InAppBrowser" />
        </feature>
        

*   (iOS`config.xml`)
    
        <feature name="InAppBrowser">
            <param name="ios-package" value="CDVInAppBrowser" />
        </feature>
        

*   Windows Phone 7과 (8`config.xml`)
    
        <feature name="InAppBrowser" />
        

일부 플랫폼은 특별 한 구성이 필요 없이이 기능을 지원할 수 있습니다. *플랫폼 지원* 개요 섹션에서을 참조 하십시오.

# addEventListener

> 이벤트에 대 한 수신기를 추가 합니다`InAppBrowser`.

    ref.addEventListener(eventname, callback);
    

*   **심판**:에 대 한 참조는 `InAppBrowser` 창 *(InAppBrowser)*

*   **eventname**: *(문자열)를* 수신 하도록 이벤트
    
    *   **loadstart**: 이벤트 발생 때는 `InAppBrowser` URL 로드를 시작 합니다.
    *   **loadstop**: 이벤트가 발생 시기는 `InAppBrowser` URL 로드 완료.
    *   **loaderror**: 이벤트 발생 때는 `InAppBrowser` URL을 로드할 때 오류가 발생 합니다.
    *   **종료**: 이벤트가 발생 시기는 `InAppBrowser` 창이 닫힙니다.

*   **콜백**: 이벤트가 발생 될 때 실행 되는 함수. 함수는 전달 된 `InAppBrowserEvent` 개체를 매개 변수로 합니다.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리
*   iOS
*   Windows Phone 7과 8

## 빠른 예제

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstart', function() { alert(event.url); });
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.addEventListener Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
             var ref = window.open('http://apache.org', '_blank', 'location=yes');
             ref.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
             ref.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
             ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
             ref.addEventListener('exit', function(event) { alert(event.type); });
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# removeEventListener

> 이벤트에 대 한 수신기를 제거 합니다`InAppBrowser`.

    ref.removeEventListener(eventname, callback);
    

*   **심판**:에 대 한 참조는 `InAppBrowser` 창. *(InAppBrowser)*

*   **eventname**: 이벤트 수신 대기를 중지 합니다. *(문자열)*
    
    *   **loadstart**: 이벤트 발생 때는 `InAppBrowser` URL 로드를 시작 합니다.
    *   **loadstop**: 이벤트가 발생 시기는 `InAppBrowser` URL 로드 완료.
    *   **loaderror**: 이벤트 발생 때는 `InAppBrowser` URL 로드 오류가 발생 합니다.
    *   **종료**: 이벤트가 발생 시기는 `InAppBrowser` 창이 닫힙니다.

*   **콜백**: 이벤트가 발생 하면 실행할 함수. 함수는 전달 된 `InAppBrowserEvent` 개체.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리
*   iOS
*   Windows Phone 7과 8

## 빠른 예제

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    var myCallback = function() { alert(event.url); }
    ref.addEventListener('loadstart', myCallback);
    ref.removeEventListener('loadstart', myCallback);
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.removeEventListener Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // Global InAppBrowser reference
        var iabRef = null;
    
        function iabLoadStart(event) {
            alert(event.type + ' - ' + event.url);
        }
    
        function iabLoadStop(event) {
            alert(event.type + ' - ' + event.url);
        }
    
        function iabLoadError(event) {
            alert(event.type + ' - ' + event.message);
        }
    
        function iabClose(event) {
             alert(event.type);
             iabRef.removeEventListener('loadstart', iabLoadStart);
             iabRef.removeEventListener('loadstop', iabLoadStop);
             iabRef.removeEventListener('loaderror', iabLoadError);
             iabRef.removeEventListener('exit', iabClose);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
             iabRef = window.open('http://apache.org', '_blank', 'location=yes');
             iabRef.addEventListener('loadstart', iabLoadStart);
             iabRef.addEventListener('loadstop', iabLoadStop);
             iabRef.removeEventListener('loaderror', iabLoadError);
             iabRef.addEventListener('exit', iabClose);
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# 닫기

> 종료는 `InAppBrowser` 창.

    ref.close();
    

*   **심판**:에 대 한 참조는 `InAppBrowser` 창 *(InAppBrowser)*

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리
*   iOS
*   Windows Phone 7과 8

## 빠른 예제

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.close();
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.close Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
             var ref = window.open('http://apache.org', '_blank', 'location=yes');
             // close InAppBrowser after 5 seconds
             setTimeout(function() {
                 ref.close();
             }, 5000);
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# 보기

> 숨겨진 열은 한 InAppBrowser 창을 표시 합니다. 전화는 InAppBrowser가 이미 보이는 경우는 효과가 없습니다.

    ref.show();
    

*   **ref:** InAppBrowser 창 (참조`InAppBrowser`)

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리
*   iOS

## 빠른 예제

    var ref = window.open('http://apache.org', '_blank', 'hidden=yes');
    ref.show();
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.show Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for Cordova to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // Cordova is ready
        //
        function onDeviceReady() {
             var ref = window.open('http://apache.org', '_blank', 'hidden=yes');
             ref.addEventListener('loadstop', function(event) {
                 alert('background window loaded'); 
             });
             // close InAppBrowser after 5 seconds
             setTimeout(function() {
                 ref.close();
             }, 5000);
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# executeScript

> 에 자바 스크립트 코드를 삽입는 `InAppBrowser` 창

    ref.executeScript(details, callback);
    

*   **심판**:에 대 한 참조는 `InAppBrowser` 창. *(InAppBrowser)*

*   **injectDetails**: 스크립트 실행의 세부 사항 중 하나를 지정 하는 `file` 또는 `code` 키. *(개체)*
    
    *   **파일**: 삽입 하는 스크립트의 URL.
    *   **코드**: 스크립트 텍스트를 삽입 합니다.

*   **콜백**: 자바 스크립트 코드를 주입 후 실행 기능.
    
    *   삽입 된 스크립트 유형의 경우 `code` , 스크립트의 반환 값은 단일 매개 변수는 콜백 실행에 싸여 있는 `Array` . 여러 줄 스크립트에 대 한 마지막 문 또는 평가 마지막 식의 반환 값입니다.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리
*   iOS

## 빠른 예제

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstop', function() {
        ref.executeSript({file: "myscript.js"});
    });
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.executeScript Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // Global InAppBrowser reference
        var iabRef = null;
    
        // Inject our custom JavaScript into the InAppBrowser window
        //
        function replaceHeaderImage() {
            iabRef.executeScript({
                code: "var img=document.querySelector('#header img'); img.src='http://cordova.apache.org/images/cordova_bot.png';"
            }, function() {
                alert("Image Element Successfully Hijacked");
            }
        }
    
        function iabClose(event) {
             iabRef.removeEventListener('loadstop', replaceHeaderImage);
             iabRef.removeEventListener('exit', iabClose);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
             iabRef = window.open('http://apache.org', '_blank', 'location=yes');
             iabRef.addEventListener('loadstop', replaceHeaderImage);
             iabRef.addEventListener('exit', iabClose);
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# insertCSS

> 주사로 CSS는 `InAppBrowser` 창.

    ref.insertCSS(details, callback);
    

*   **심판**:에 대 한 참조는 `InAppBrowser` 창 *(InAppBrowser)*

*   **injectDetails**: 스크립트 실행의 세부 사항 중 하나를 지정 하는 `file` 또는 `code` 키. *(개체)*
    
    *   **파일**: 삽입 하는 스타일 시트의 URL.
    *   **코드**: 삽입 하는 스타일 시트의 텍스트.

*   **콜백**: CSS 주입 후 실행 기능.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리
*   iOS

## 빠른 예제

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstop', function() {
        ref.insertCSS({file: "mystyles.css"});
    });
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.insertCSS Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // Global InAppBrowser reference
        var iabRef = null;
    
        // Inject our custom CSS into the InAppBrowser window
        //
        function changeBackgroundColor() {
            iabRef.insertCSS({
                code: "body { background: #ffff00"
            }, function() {
                alert("Styles Altered");
            }
        }
    
        function iabClose(event) {
             iabRef.removeEventListener('loadstop', changeBackgroundColor);
             iabRef.removeEventListener('exit', iabClose);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
             iabRef = window.open('http://apache.org', '_blank', 'location=yes');
             iabRef.addEventListener('loadstop', changeBackgroundColor);
             iabRef.addEventListener('exit', iabClose);
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# InAppBrowserEvent

콜백 함수에 전달 되는 개체는 `addEventListener` 에 `InAppBrowser` 개체.

## 속성

*   **유형**: eventname, 중 `loadstart` , `loadstop` , `loaderror` , 또는 `exit` . *(문자열)*

*   **url**: URL 로드 된. *(문자열)*

*   **코드**: 오류 코드의 경우에만 `loaderror` . *(수)*

*   **메시지**: 오류 메시지의 경우에만 `loaderror` . *(문자열)*