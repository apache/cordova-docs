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

# window.open

새 URL을 엽니다 `InAppBrowser` 인스턴스, 현재 브라우저 인스턴스 또는 시스템 브라우저.

    var ref = window.open(url, target, options);
    

*   **심판**:에 대 한 참조는 `InAppBrowser` 창. *(InAppBrowser)*

*   **url**: *(문자열)를*로드 하는 URL. 전화 `encodeURI()` 이 경우에는 URL 유니코드 문자를 포함 합니다.

*   **대상**: 대상 URL, 기본적으로 선택적 매개 변수를 로드 하는 `_self` . *(문자열)*
    
    *   `_self`: URL 화이트 리스트에 있으면 코르도바 WebView에서 열리고, 그렇지 않으면 열에`InAppBrowser`.
    *   `_blank`: 준공에`InAppBrowser`.
    *   `_system`: 시스템의 웹 브라우저에서 엽니다.

*   **옵션**: 옵션은 `InAppBrowser` . 선택적, 디폴트에: `location=yes` . *(문자열)*
    
    `options`문자열 텅 빈 어떤 스페이스 포함 해서는 안 그리고 쉼표 각 기능의 이름/값 쌍을 구분 합니다. 기능 이름은 대/소문자입니다. 모든 플랫폼 지원 아래 값:
    
    *   **위치**: 설정 `yes` 또는 `no` 설정 하는 `InAppBrowser` 의 위치 표시줄 켜거나 끕니다.
    ## 안 드 로이드만
    
    *   **closebuttoncaption** -것입니다 "완료" 버튼에 대 한 캡션 문자열을 설정 합니다. 
    *   **숨겨진** -'예'를 만들고 브라우저에서 페이지를 로드할 준비가 있지만 그것을 보여주지. Load 이벤트는 로드가 완료 되 면 발생 합니다. 생략 또는 브라우저를 열고 정상적으로 로드 '아니오' (기본값)으로 설정 합니다. 
    *   **clearcache** -브라우저의 쿠키 캐시 새 창을 열기 전에 허가를 '예'로 설정
    *   **clearsessioncache** -새 창 열기 전에 해제 세션 쿠키 캐시를 '예'로 설정
    ## iOS만
    
    *   **closebuttoncaption** -것입니다 "완료" 버튼에 대 한 캡션 문자열을 설정 합니다. 참고 직접이 값을 지역화 해야 합니다.
    *   **숨겨진** -'예'를 만들고 브라우저에서 페이지를 로드할 준비가 있지만 그것을 보여주지. Load 이벤트는 로드가 완료 되 면 발생 합니다. 생략 또는 브라우저를 열고 정상적으로 로드 '아니오' (기본값)으로 설정 합니다. 
    *   **도구 모음** -'예' 또는 '아니요'를 InAppBrowser (기본값은 '예')에 대 한 도구 모음 설정 또는 해제 설정
    *   **enableViewportScale**: 설정 `yes` 또는 `no` 뷰포트 메타 태그 (기본값:를 통해 확장을 방지 하기 위해`no`).
    *   **mediaPlaybackRequiresUserAction**: 설정 `yes` 또는 `no` HTML5 오디오 또는 비디오 자동 재생 (기본값에서에서 방지 하기 위해`no`).
    *   **allowInlineMediaPlayback**: 설정 `yes` 또는 `no` 장치 전용 재생 인터페이스 보다는 브라우저 창 내에서 표시 하는 인라인 HTML5 미디어 재생 허용. HTML의 `video` 요소가 포함 되어야 합니다는 `webkit-playsinline` 특성 (기본값:`no`)
    *   **keyboardDisplayRequiresUserAction**: 설정 `yes` 또는 `no` 양식 요소는 자바 스크립트를 통해 포커스를 받을 때 키보드를 열고 `focus()` 전화 (기본값:`yes`).
    *   **suppressesIncrementalRendering**: 설정 `yes` 또는 `no` (기본값을 렌더링 하기 전에 모든 새로운 보기 콘텐츠를 받을 때까지 기다려야`no`).
    *   **presentationstyle**: 설정 `pagesheet` , `formsheet` 또는 `fullscreen` [프레 젠 테이 션 스타일][1] (기본값을 설정 하려면`fullscreen`).
    *   **transitionstyle**: 설정 `fliphorizontal` , `crossdissolve` 또는 `coververtical` [전환 스타일][2] (기본값을 설정 하려면`coververtical`).

 [1]: http://developer.apple.com/library/ios/documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalPresentationStyle
 [2]: http://developer.apple.com/library/ios/#documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalTransitionStyle

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리
*   iOS
*   Windows Phone 7과 8

## 빠른 예제

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    var ref2 = window.open(encodeURI('http://ja.m.wikipedia.org/wiki/ハングル'), '_blank', 'location=yes');
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>window.open Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            // external url
            var ref = window.open(encodeURI('http://apache.org'), '_blank', 'location=yes');
            // relative document
            ref = window.open('next.html', '_self');
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>