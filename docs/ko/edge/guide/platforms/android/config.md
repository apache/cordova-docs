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

`config.xml`파일을 다양 한 코르도바 설정을 제어 합니다. 이 응용 프로그램에서와 CordovaWebView 인스턴스 당 적용 됩니다.

## `< 기본 설정 >`

다른 다양 한 환경 설정 (로 `<preference>` 태그) 소멸 되지 않고 기존 애플 리 케이 션에 기본. 사용할 수 특혜는:

*   `useBrowserHistory`(boolean, 기본값은 `true` ): 설정 `false` 역사 수정 전에 안 드 로이드 3.x에 hashtag 오류를 해결 하는 데 사용 된 역사 shim을 사용 하려는 경우. (참고:이 설정은 2013 년 4에서에서 사용 되지 않는 것입니다)

*   `loadingDialog`: 응용 프로그램을 로드할 때 기본 로드 대화 상자를 표시 합니다. 값의 형식은 *제목, 메시지*

*   `loadingPageDialog`: 하위 페이지를 로드할 때 기본 로드 대화 상자를 표시 합니다. 값의 형식은 *제목, 메시지*

*   `errorUrl`: 응용 프로그램에 대 한 오류 페이지를 설정 합니다. 안 드 로이드 프로젝트에 있어야`file://android_asset/www/`

*   `backgroundColor`: 응용 프로그램에 대 한 배경 색을 설정 합니다. 첫 번째 바이트를 대표 하는 알파 값, 표준 RGB 값으로 다음 3 바이트와 4 바이트 16 진수 값을 지원 합니다. 예를 들어, `0x00000000` 은 검은색.

*   `loadUrlTimeoutValue`: 코르 도우 바 응용 프로그램에서 시간 초과 오류를 던지기 전에 기다려야 한다 얼마나 많은 시간.

*   `keepRunning`(boolean, 기본값은 `true` ): 코르도바 숙박 백그라운드에서 실행 여부를 결정 합니다.

*   `splashscreen`: 파일에 확장명 뺀 이름에 `res/drawable` 디렉터리. 여러 자산을가지고 그들은 모두 그들의 각각 디렉터리에이 일반적인 이름을 공유 해야 합니다.

*   `disallowOverscroll`(boolean, 기본값은 `false` ): 설정 `true` 사용자는 webview의 가장자리를 넘어 스크롤할 때 광선을 비활성화 하려면.

## `< 플러그인 >`

안 드 로이드 지원 사용 하 여 `<feature>` 를 아날로그로 `<plugin>` 요소.