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

# iOS 구성

`config.xml`설정 파일을 다양 한 코르도바 설정을 제어 합니다. 이것은 응용 프로그램 넓고 하지 CDVViewController 인스턴스 단위로 설정 합니다. `config.xml`파일에 있는 당신의 `<project folder>/<appname>` 디렉터리.

## `< 기본 설정 >`

다양 한 환경 설정 (로 `<preference>` 태그) 소멸 되지 않고 기존 애플 리 케이 션에 기본. 사용할 수 특혜는:

*   `DisallowOverscroll`(boolean, 기본값은 `false` ): 설정 `true` 고무 밴드를 WebView 하지 않으려는 경우.

*   `TopActivityIndicator`(문자열, 기본값: `gray` ):이 상태/배터리 바에서 최고 회전 throbber, 유효한 값은 `whiteLarge` , `white` , 그리고`gray`.

*   `EnableLocation`(boolean, 기본값은 `false` ):로 설정 `true` , (그래서 당신의 위치에 수정을 더 정확한 될 수 있습니다) 시작에서 위치 정보 플러그인을 초기화 하 **사용 되지 않음**: 설정 하십시오는 `onload` 의 특성은 `Geolocation` 플러그인 `true` 대신.

*   `EnableViewportScale`(boolean, 기본값은 `false` ): 설정 `true` 뷰포트 메타 태그를 통해 확장을 방지 하기 위해.

*   `AutoHideSplashScreen`(boolean, 기본값은 `true` ): 설정 `false` 제어는 splashscreen 자바 스크립트 API를 통해 숨겨집니다.

*   `FadeSplashScreen`(boolean, 기본값은 `true` ): 설정 `false` 때 표시 또는 숨기기 그것은 안으로 그리고 밖으로 퇴색 하기 시작 화면을 방지 하기 위해.

*   `FadeSplashScreenDuration`(플 로트, 2 기본값): 시작 화면 페이드 기간 (초).

*   `ShowSplashScreenSpinner`(boolean, 기본값은 `true` ): 설정 `false` 시작 화면 스피너를 숨기려고 합니다.

*   `MediaPlaybackRequiresUserAction`(boolean, 기본값은 `false` ): autoplayed HTML5 비디오 허용 하지를 true로 설정 합니다.

*   `AllowInlineMediaPlayback`(boolean, 기본값은 `false` ): 인라인 HTML5 미디어 재생을 허용 하려면 true로 설정, 또한, 비디오 요소 HTML 문서에 포함 되어야 합니다 웹 킷 playsinline 특성.

*   `BackupWebStorage`(문자열, 기본값: `cloud` ): 유효한 값은 `none` , `cloud` 및 `local` . 설정 `cloud` 웹 저장 공간 데이터를 iCloud, 백업 설정 수 있도록 `local` 로컬 백업 (iTunes 동기화) 허용 하도록. 설정 `none` 웹 저장소의 백업을 허용 하지 않도록 합니다.

*   `KeyboardDisplayRequiresUserAction`(boolean, 기본값은 `true` ): 폼 요소는 자바 스크립트 또는 전화를 통해 초점을 얻을 때 키보드를 열고 false로 설정 합니다.

*   `SuppressesIncrementalRendering`(boolean, 기본값은 `false` ): 렌더링 되기 전에 수신 된 모든 새로운 콘텐츠를 볼 때까지 기다려야 true로 설정 합니다.

*   `HideKeyboardFormAccessoryBar`(boolean, 기본값은 `false` ): 키보드 위에 추가 도구 모음 숨기기 true로 설정 합니다. 이 도구 모음 **이전**, **다음**, 그리고 **완료** 버튼을 갖추고 있습니다.

*   `KeyboardShrinksView`(boolean, 기본값은 `false` ): 설정 `true` 키보드 나오면 WebView를 축소 합니다. WebView 뷰포트를 축소 및 스크롤할 페이지 대신 축소합니다. 이 WebView의 아래쪽을 기준으로 요소를 배치 하는 애플 리 케이 션에 적용 됩니다. 안 드 로이드에 기본 행동 이며 웹 페이지와 반대로 앱을 빌드할 때 의미를 많이 만드는.