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

title: iOS 구성
---

# iOS 구성

`config.xml`파일을 각 응용 프로그램 및 CordovaWebView 인스턴스에 적용 되는 응용 프로그램의 기본 설정 제어. 이 단원만 iOS 빌드에 적용 되는 환경 설정을 자세히 설명 합니다. 글로벌 구성 옵션에 config.xml [파일](../../../cordova/file/fileobj/fileobj.html) 정보를 참조 하십시오.

*   `EnableViewportScale`(boolean, 기본값은 `false` ): 설정 `true` 뷰포트 메타 태그를 사용 하 여 비활성화 하거나 사용자 비율의 범위를 제한 하기.
    
        <preference name="EnableViewportScale" value="true"/>
        

*   `MediaPlaybackRequiresUserAction`(boolean, 기본값은 `false` ): 설정 `true` HTML5 동영상을 자동으로 재생 하지 않도록 하려면에서 `autoplay` 특성. 호출할 때 적용 되지 않습니다 `play()` 비디오 개체에.
    
        <preference name="MediaPlaybackRequiresUserAction" value="true"/>
        

*   `AllowInlineMediaPlayback`(boolean, 기본값은 `false` ): 설정 `true` HTML5 [미디어](../../../cordova/media/media.html) 재생 네이티브 컨트롤 대신 브라우저 제공 컨트롤을 사용 하 여 화면 레이아웃 내에서 *인라인* 을 표시할 수 있도록 합니다. 이 대 한 추가 `webkit-playsinline` 모든 특성 `<video>` 요소.
    
        <preference name="AllowInlineMediaPlayback" value="true"/>
        

*   `BackupWebStorage`(문자열, 중 `none` , `local` , 또는 기본 `cloud` ): 설정 `cloud` 웹 저장 공간 데이터를 iCloud 통해 백업 수 있도록. 설정 `local` 만 로컬 백업을 아이튠즈 동기화를 통해 수 있도록. 설정 `none` 웹 [스토리지](../../../cordova/storage/storage.html) 백업 방지.
    
        <preference name="BackupWebStorage" value="local"/>
        

*   `TopActivityIndicator`(문자열, 기본값: `gray` ): 중요 한 프로세서 작업을 나타내는 상태 표시줄에 작은 회전 아이콘의 모양을 조정 합니다. 유효한 값은 `whiteLarge` , `white` , 그리고`gray`.
    
        <preference name="TopActivityIndicator" value="white"/>
        

*   `FadeSplashScreen`(boolean, 기본값은 `true` ): 설정 `false` 시작 화면 표시 상태로 변경 될 때 밖으로 퇴색 하지 않도록 합니다.
    
        <preference name="FadeSplashScreen" value="false"/>
        

*   `FadeSplashScreenDuration`(플 로트, 기본값: `2` ): 시작 화면에 대 한 초 페이드 효과를 실행 하는 지정 합니다.
    
        <preference name="FadeSplashScreenDuration" value="4"/>
        

*   `ShowSplashScreenSpinner`(boolean, 기본값은 `true` ): 설정 `false` 시작 화면 스피너를 숨기려고 합니다.
    
        <preference name="ShowSplashScreenSpinner" value="false"/>
        

*   `KeyboardDisplayRequiresUserAction`(boolean, 기본값은 `true` ): 설정 `false` 를 호출할 때 표시할 키보드 수 있도록 `focus()` 폼 입력에.
    
        <preference name="KeyboardDisplayRequiresUserAction" value="false"/>
        

*   `SuppressesIncrementalRendering`(boolean, 기본값은 `false` ): 설정 `true` 화면에 렌더링 하기 전에 모든 콘텐츠 수신 되었습니다 때까지 기다려야 합니다.
    
        <preference name="SuppressesIncrementalRendering" value="true"/>
        

*   `KeyboardShrinksView`(boolean, 기본값은 `false` ):로 설정 `true` 나타나면 키보드, 뷰포트를 세로로 축소 기본 beavior를 재정의 webview 아래로 확장할 수 있습니다. 이 안 드 로이드 애플 리 케이 션에 대 한 기본 동작을 일치합니다.
    
        <preference name="KeyboardShrinksView" value="true"/>
        

*   `GapBetweenPages`(플 로트, 기본값: `` ): 포인트 페이지 사이의 간격의 크기.
    
        < 선호 이름 = "GapBetweenPages" 값 = "0" / >
        

*   `PageLength`(플 로트, 기본값: `` ): 포인트 페이지 흐름 방향에서 각 페이지의 크기. 때 PaginationMode는 오른쪽에서 왼쪽 또는 왼쪽에서 오른쪽,이 속성은 각 페이지의 너비를 나타냅니다. PaginationMode topToBottom 또는 bottomToTop 경우이 속성은 각 페이지의 높이 나타냅니다. 기본값은 0, 레이아웃 뷰포트 크기를 사용 하 여 페이지의 크기를 결정 하는 것을 의미 합니다.
    
        < 선호 이름 = "PageLength" 값 = "0" / >
        

*   `PaginationBreakingMode`(문자열, 기본값: `page` ): 유효한 값은 `page` 및 `column` .방식으로 열 또는 페이지 바꿈이 발생 합니다. 이 속성에는 특정 CSS 속성에 대 한 열 및 페이지 분리 영광 아니면 무시할지 여부를 결정 합니다. 이 속성 설정 하면 `column` , 콘텐츠 열 바꿈 페이지 바꿈의 위치에 관련 된 CSS 속성을 존중 합니다.
    
        < 선호 이름 = "PaginationBreakingMode" 값 = "페이지" / >
        

*   `PaginationMode`(문자열, 기본값: `unpaginated` ): 유효한 값은 `unpaginated` , `leftToRight` , `topToBottom` , `bottomToTop` , 및 `rightToLeft` . 이 속성에는 웹 보기에서 콘텐츠도 한 번에 [보기](../../../cordova/inappbrowser/inappbrowser.html) 한 화면을 작성 하는 페이지 또는 하나의 긴 스크롤 뷰로 표시 여부를 결정 합니다. 만약 설정 페이지가 매겨진된 폼에이 속성을 일으키는 relayout에 PageLength 및 GapBetweenPages 값을 사용 하 여 웹 [보기](../../../cordova/inappbrowser/inappbrowser.html) 콘텐츠 내용에 페이지가 매겨진된 레이아웃 전환 합니다.
    
        < 선호 이름 = "PaginationMode" 값 = "매겨지지" / >