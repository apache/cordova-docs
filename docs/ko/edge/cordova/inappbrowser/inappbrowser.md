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

> `InAppBrowser`를 호출할 때 응용 프로그램에서 표시 하는 웹 브라우저입니다`window.open`.

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    

## 설명

호출에서 반환 하는 개체`window.open`.

## 메서드

*   addEventListener
*   removeEventListener
*   닫기
*   보기
*   executeScript
*   insertCSS

## 기능 액세스

버전 3.0, 코르도바 *플러그인*으로 장치 수준 Api를 구현합니다. CLI의 사용 `plugin` 명령 설명에 명령줄 인터페이스를 추가 하거나 프로젝트에 대 한이 기능을 제거 하려면:

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-inappbrowser.git
        $ cordova plugin rm org.apache.cordova.core.inappbrowser
    

이 명령은 모든 타겟된 플랫폼에 적용 하지만 플랫폼 관련 구성 설정을 아래에 설명 된 수정:

*   (안 드 로이드`app/res/xml/config.xml`)
    
        < 기능 이름 "InAppBrowser" = >< param 이름을 "안 드 로이드 패키지" value="org.apache.cordova.InAppBrowser =" / >< / 기능 >
        

*   (iOS`config.xml`)
    
        < 기능 이름 "InAppBrowser" = >< param 이름을 = "ios 패키지" 값 = "CDVInAppBrowser" / >< / 기능 >
        

*   Windows Phone 7과 (8`config.xml`)
    
        < 기능 이름 = "InAppBrowser" / >
        

일부 플랫폼은 특별 한 구성이 필요 없이이 기능을 지원할 수 있습니다. 플랫폼 지원에 대 한 참조.

# addEventListener

> 이벤트에 대 한 수신기를 추가 합니다`InAppBrowser`.

    ref.addEventListener (eventname, 콜백);
    

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

    var ref = window.open ('http://apache.org', '_blank', ' 위치 = 예);
    ref.addEventListener ('loadstart', function() {alert(event.url);});
    

## 전체 예제

    <!DOCTYPE html >< html >< 헤드 >< 제목 > InAppBrowser.addEventListener 예제 < / 제목 >< 스크립트 유형 = "텍스트/자바 스크립트" charset = "은 utf-8" src="cordova.js" >< / 스크립트 >< 스크립트 유형 = "텍스트/자바 스크립트" charset = "은 utf-8" > / 장치 API 라이브러리 로드를 기다립니다 / / / document.addEventListener ("deviceready", onDeviceReady, false);
    
        / 장치 Api 사용할 수 있습니다 / / / onDeviceReady() 기능 {var ref = window.open ('http://apache.org', '_blank', ' 위치 = 예);
             ref.addEventListener ('loadstart', function(event) {경고 (' 시작: ' + event.url);});
             ref.addEventListener ('loadstop', function(event) {경고 (' 중지: ' + event.url);});
             ref.addEventListener ('loaderror', function(event) {경고 (' 오류: ' + event.message);});
             ref.addEventListener ('출구', function(event) {alert(event.type);});
        } < / 스크립트 >< / 머리 >< 몸 >< / 바디 >< / html >
    

# removeEventListener

> 이벤트에 대 한 수신기를 제거 합니다`InAppBrowser`.

    ref.removeEventListener (eventname, 콜백);
    

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

    var ref = window.open ('http://apache.org', '_blank', ' 위치 = 예);
    var myCallback = function() {alert(event.url);} ref.addEventListener ('loadstart', myCallback);
    ref.removeEventListener ('loadstart', myCallback);
    

## 전체 예제

    <!DOCTYPE html >< html >< 헤드 >< 제목 > InAppBrowser.removeEventListener 예제 < / 제목 >< 스크립트 유형 = "텍스트/자바 스크립트" charset = "은 utf-8" src="cordova.js" >< / 스크립트 >< 스크립트 유형 = "텍스트/자바 스크립트" charset = "은 utf-8" > / 장치 API 라이브러리 로드를 기다립니다 / / / document.addEventListener ("deviceready", onDeviceReady, false);
    
        / / 전역 InAppBrowser 참조 var iabRef = null;
    
        iabLoadStart(event) 함수 {경고 (event.type + '-' + event.url);
        } iabLoadStop(event) 기능 {경고 (event.type + '-' + event.url);
        } iabLoadError(event) 기능 {경고 (event.type + '-' + event.message);
        } iabClose(event) {alert(event.type); 기능
             iabRef.removeEventListener ('loadstart', iabLoadStart);
             iabRef.removeEventListener ('loadstop', iabLoadStop);
             iabRef.removeEventListener ('loaderror', iabLoadError);
             iabRef.removeEventListener ('종료', iabClose);
        } / / 장치 Api 사용할 수 있습니다 / / onDeviceReady() 기능 {iabRef = window.open ('http://apache.org', '_blank', ' 위치 = 예);
             iabRef.addEventListener ('loadstart', iabLoadStart);
             iabRef.addEventListener ('loadstop', iabLoadStop);
             iabRef.removeEventListener ('loaderror', iabLoadError);
             iabRef.addEventListener ('종료', iabClose);
        } < / 스크립트 >< / 머리 >< 몸 >< / 바디 >< / html >
    

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

    var ref = window.open ('http://apache.org', '_blank', ' 위치 = 예);
    ref.close();
    

## 전체 예제

    <!DOCTYPE html >< html >< 헤드 >< 제목 > InAppBrowser.close 예제 < / 제목 >< 스크립트 유형 = "텍스트/자바 스크립트" charset = "은 utf-8" src="cordova.js" >< / 스크립트 >< 스크립트 유형 = "텍스트/자바 스크립트" charset = "은 utf-8" > / 장치 API 라이브러리 로드를 기다립니다 / / / document.addEventListener ("deviceready", onDeviceReady, false);
    
        / 장치 Api 사용할 수 있습니다 / / / onDeviceReady() 기능 {var ref = window.open ('http://apache.org', '_blank', ' 위치 = 예);
             / / 5 초 setTimeout(function() {ref.close(); 후 InAppBrowser
             }, 5000);
        } < / 스크립트 >< / 머리 >< 몸 >< / 바디 >< / html >
    

# 보기

> 숨겨진 열은 한 InAppBrowser 창을 표시 합니다. 전화는 InAppBrowser가 이미 보이는 경우는 효과가 없습니다.

    ref.show();
    

*   **ref:** InAppBrowser 창 (참조`InAppBrowser`)

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리
*   iOS

## 빠른 예제

    var ref = window.open ('http://apache.org', '_blank', ' 숨겨진 = 예);
    ref.show();
    

## 전체 예제

    <!DOCTYPE html >< html >< 헤드 >< 제목 > InAppBrowser.show 예제 < / 제목 >< 스크립트 유형 = "텍스트/자바 스크립트" charset = "은 utf-8" src="cordova.js" >< / 스크립트 >< 스크립트 유형 = "텍스트/자바 스크립트" charset = "은 utf-8" > / 로드 코르 도우 바 기 다 / / / document.addEventListener ("deviceready", onDeviceReady, false);
    
        / 코르도바 준비 / / / onDeviceReady() 기능 {var ref = window.open ('http://apache.org', '_blank', ' 숨겨진 = 예);
             ref.addEventListener ('loadstop', function(event) {경고 ('배경 창 로드'); 
             });
             / / 5 초 setTimeout(function() {ref.close(); 후 InAppBrowser
             }, 5000);
        } < / 스크립트 >< / 머리 >< 몸 >< / 바디 >< / html >
    

# executeScript

> 에 자바 스크립트 코드를 삽입는 `InAppBrowser` 창

    ref.executeScript (세부 사항, 콜백);
    

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

    var ref = window.open ('http://apache.org', '_blank', ' 위치 = 예);
    ref.addEventListener ('loadstop', function() {ref.executeSript ({파일: "myscript.js"});});
    

## 전체 예제

    <!DOCTYPE html >< html >< 헤드 >< 제목 > InAppBrowser.executeScript 예제 < / 제목 >< 스크립트 유형 = "텍스트/자바 스크립트" charset = "은 utf-8" src="cordova.js" >< / 스크립트 >< 스크립트 유형 = "텍스트/자바 스크립트" charset = "은 utf-8" > / 장치 API 라이브러리 로드를 기다립니다 / / / document.addEventListener ("deviceready", onDeviceReady, false);
    
        / / 전역 InAppBrowser 참조 var iabRef = null;
    
        / InAppBrowser 창에 우리의 사용자 정의 JavaScript를 주입 하는 / / / replaceHeaderImage() 기능 {iabRef.executeScript ({코드: "var img=document.querySelector ('#header 그림'); img.src= 'http://cordova.apache.org/images/cordova_bot.png';"}, function() {경고 (" 이미지 요소 성공적으로 납치 ");
            }} 함수 iabClose(event) {iabRef.removeEventListener ('loadstop', replaceHeaderImage);
             iabRef.removeEventListener ('종료', iabClose);
        } / / 장치 Api 사용할 수 있습니다 / / onDeviceReady() 기능 {iabRef = window.open ('http://apache.org', '_blank', ' 위치 = 예);
             iabRef.addEventListener ('loadstop', replaceHeaderImage);
             iabRef.addEventListener ('종료', iabClose);
        } < / 스크립트 >< / 머리 >< 몸 >< / 바디 >< / html >
    

# insertCSS

> 주사로 CSS는 `InAppBrowser` 창.

    ref.insertCSS (세부 사항, 콜백);
    

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

    var ref = window.open ('http://apache.org', '_blank', ' 위치 = 예);
    ref.addEventListener ('loadstop', function() {ref.insertCSS ({파일: "mystyles.css"});});
    

## 전체 예제

    <!DOCTYPE html >< html >< 헤드 >< 제목 > InAppBrowser.insertCSS 예제 < / 제목 >< 스크립트 유형 = "텍스트/자바 스크립트" charset = "은 utf-8" src="cordova.js" >< / 스크립트 >< 스크립트 유형 = "텍스트/자바 스크립트" charset = "은 utf-8" > / 장치 API 라이브러리 로드를 기다립니다 / / / document.addEventListener ("deviceready", onDeviceReady, false);
    
        / / 전역 InAppBrowser 참조 var iabRef = null;
    
        / InAppBrowser 창에 우리의 사용자 정의 CSS를 삽입 / / / changeBackgroundColor() 기능 {iabRef.insertCSS ({코드: "몸 {배경: #ffff00"}, function() {경고 ("스타일 변경");
            }} 함수 iabClose(event) {iabRef.removeEventListener ('loadstop', changeBackgroundColor);
             iabRef.removeEventListener ('종료', iabClose);
        } / / 장치 Api 사용할 수 있습니다 / / onDeviceReady() 기능 {iabRef = window.open ('http://apache.org', '_blank', ' 위치 = 예);
             iabRef.addEventListener ('loadstop', changeBackgroundColor);
             iabRef.addEventListener ('종료', iabClose);
        } < / 스크립트 >< / 머리 >< 몸 >< / 바디 >< / html >
    

# InAppBrowserEvent

콜백 함수에 전달 되는 개체는 `addEventListener` 에 `InAppBrowser` 개체.

## 속성

*   **유형**: eventname, 중 `loadstart` , `loadstop` , `loaderror` , 또는 `exit` . *(문자열)*

*   **url**: URL 로드 된. *(문자열)*

*   **코드**: 오류 코드의 경우에만 `loaderror` . *(수)*

*   **메시지**: 오류 메시지의 경우에만 `loaderror` . *(문자열)*