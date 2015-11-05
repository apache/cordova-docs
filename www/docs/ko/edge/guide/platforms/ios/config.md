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

`config.xml`파일을 각 응용 프로그램 및 CordovaWebView 인스턴스에 적용 되는 응용 프로그램의 기본 설정 제어. 이 단원만 iOS 빌드에 적용 되는 환경 설정을 자세히 설명 합니다. 글로벌 구성 옵션에 대 한 내용은 [config.xml 파일을][1] 참조 하십시오.

 [1]: config_ref_index.md.html#The%20config.xml%20File

*   `EnableViewportScale`(boolean, 기본값은 `false` ): 설정 `true` 수 있도록 뷰포트 메타 태그를 사용 하지 않도록 설정 하거나 사용자 비율의 범위를 제한 하는 기본적으로 사용 됩니다.

        <preference name="EnableViewportScale" value="true"/>


    스케일링을 해제 하 여 맞는 HTML에 다음 뷰포트 배치 렌더링 WebView 내에서 유연 하 게 콘텐츠:

        < 메타 이름 = '뷰포트' 내용 =' 너비 = 초기 규모 장치 너비 = 1, 사용자 확장 = 아니오 ' / >


*   `MediaPlaybackAllowsAirPlay`(boolean, 기본값은 `true` ):로 설정 `false` 이 보기에 사용 되 고에 어 플레이 방지 하기 위해. 기본 UIWebView에 WKWebView 사용할 수 있습니다.

        <preference name="MediaPlaybackAllowsAirPlay" value="false"/>


*   `MediaPlaybackRequiresUserAction`(boolean, 기본값은 `false` ):로 설정 `true` 와 함께 자동으로 재생에서 HTML5 비디오 또는 오디오를 방지 하는 `autoplay` 특성 또는 자바 스크립트를 통해.

        <preference name="MediaPlaybackRequiresUserAction" value="true"/>


*   `AllowInlineMediaPlayback`(boolean, 기본값은 `false` ):로 설정 `true` HTML5 미디어 재생 네이티브 컨트롤 대신 브라우저 제공 컨트롤을 사용 하 여 화면 레이아웃 내에서 *인라인* 을 표시할 수 있도록. 이 대 한 추가 `webkit-playsinline` 속성을 `<video>` 요소.

        <preference name="AllowInlineMediaPlayback" value="true"/>


*   `BackupWebStorage`(문자열, 중 `none` , `local` , 또는 기본 `cloud` ):로 설정 `cloud` 웹 [스토리지](../../../cordova/storage/storage.html) 데이터를 iCloud 통해 백업 하. 설정 `local` 만 로컬 백업을 아이튠즈 동기화를 통해 수 있도록. 설정 `none` 웹 [스토리지](../../../cordova/storage/storage.html) 백업 방지.

        <preference name="BackupWebStorage" value="local"/>


*   `TopActivityIndicator`(문자열, 기본값: `gray` ): 중요 한 프로세서 작업을 나타내는 상태 표시줄에 작은 회전 아이콘의 모양을 조정. 유효한 값은 `whiteLarge` , `white` , 그리고`gray`.

        <preference name="TopActivityIndicator" value="white"/>


*   `KeyboardDisplayRequiresUserAction`(boolean, 기본값은 `true` ):로 설정 `false` 키보드를 호출할 때 표시를 수 있도록 `focus()` 폼 입력에.

        <preference name="KeyboardDisplayRequiresUserAction" value="false"/>


*   `SuppressesIncrementalRendering`(boolean, 기본값은 `false` ):로 설정 `true` 화면에 렌더링 하기 전에 모든 콘텐츠 수신 되었습니다 때까지 기다려야.

        <preference name="SuppressesIncrementalRendering" value="true"/>


*   `GapBetweenPages`(부동, 기본값: `` ): 포인트, 페이지 사이 간격의 크기.

        <preference name="GapBetweenPages" value="0"/>


*   `PageLength`(부동, 기본값: `` ): 포인트, 페이지 흐름 방향에서 각 페이지의 크기. 때 PaginationMode는 오른쪽에서 왼쪽 또는 왼쪽에서 오른쪽,이 속성은 각 페이지의 너비를 나타냅니다. PaginationMode topToBottom 또는 bottomToTop 인 경우이 속성은 각 페이지의 높이 나타냅니다. 기본값은 0, 레이아웃 뷰포트 크기를 사용 하 여 페이지의 크기를 결정 하는 것을 의미.

        <preference name="PageLength" value="0"/>


*   `PaginationBreakingMode`(문자열, 기본값: `page` ): 유효한 값은 `page` 및 `column` . 열 또는 페이지 최신 발생 하는 방식. 이 속성에는 특정 CSS 속성에 대 한 열 및 페이지 분리 영광 또는 무시 여부를 결정 합니다. 이 속성 설정 하면 `column` , 열-속보 페이지 바꿈의 위치에 관련 된 CSS 속성을 존중 하는 콘텐츠.

        <preference name="PaginationBreakingMode" value="page"/>


*   `PaginationMode`(문자열, 기본값: `unpaginated` ): 유효한 값은 `unpaginated` , `leftToRight` , `topToBottom` , `bottomToTop` , 및 `rightToLeft` . 이 속성은 웹 보기에서 콘텐츠 페이지를 한 번에 보기 한 화면을 채우는으로 또는 하나의 긴 스크롤 보기로 표시 여부 결정. 만약 설정 페이지가 매겨진된 폼에이 속성을 일으키는 relayout에 PageLength와 GapBetweenPages의 값을 사용 하 여 웹 보기 콘텐츠 내용에 페이지가 매겨진된 레이아웃을 전환 합니다.

        <preference name="PaginationMode" value="unpaginated"/>


*   `UIWebViewDecelerationSpeed`(문자열, 기본값: `normal` ): 유효한 값은 `normal` , `fast` . 이 속성은 기세 스크롤의 감속 속도 제어합니다. `normal`대부분의 네이티브 애플 리 케이 션에 대 한 기본 속도 `fast` 는 모바일 사파리에 대 한 기본값입니다.

        <preference name="UIWebViewDecelerationSpeed" value="fast" />


*   `ErrorUrl`(기본적으로 설정 되지 않는 문자열): 만약 설정, 응용 프로그램에서 오류에 참조 된 로컬 페이지를 표시 합니다.

        <preference name="ErrorUrl" value="myErrorPage.html"/>


*   `OverrideUserAgent`(기본적으로 설정 되지 않는 문자열): 설정, 값 대체 webview의 오래 된 UserAgent. 원격 페이지를 요청할 때 응용 프로그램 또는 브라우저에서 요청을 식별 하는 데 도움이 됩니다. 주의이 5 월 사용 웹 서버와 compitiable 문제를 발생합니다. 대부분의 경우, AppendUserAgent를 대신 사용 합니다.

        <preference name="OverrideUserAgent" value="Mozilla/5.0 My Browser" />


*   `AppendUserAgent`(기본적으로 설정 되지 않는 문자열): 설정는 경우 값 webview의 오래 된 UserAgent의 끝에 추가 됩니다. OverrideUserAgent와 함께 사용 하는 경우이 값은 무시 됩니다.

        <preference name="AppendUserAgent" value="My Browser" />
