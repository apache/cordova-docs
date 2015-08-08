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

# Windows 8 플랫폼 가이드

이 가이드에서는 윈도우 8에 대 한 코르도바 애플 리 케이 션을 배포 하기 위해 SDK 개발 환경을 설정 하는 방법을 보여 줍니다. 자세한 플랫폼 관련 내용은 다음을 참조 하십시오.

*   윈도우 8을 업그레이드
*   윈도우 8 명령줄 도구

위의 명령줄 도구 코르도바 3.0 이전 버전을 참조 하십시오. 현재 인터페이스에 대 한 내용은 명령줄 인터페이스를 참조 하십시오.

마이크로소프트는 윈도우 8과 윈도우 실시간 *메트로 스타일 앱* 이름을 사용 되지 않습니다. MSDN *Windows 스토어* 애플 리 케이 션, 애플 리 케이 션의이 유형의 지금 의미 하 고이 가이드 그 규칙을 따릅니다. 또한,이 가이드에 있는 *윈도우 8* 의미 윈도우 8과 윈도우 실시간

## 요구 사항

*   윈도우 8

*   비주얼 스튜디오 2012 전문가 또는 더 나은, 또는 Visual Studio 2012 익스프레스에 대 한 윈도우 8

Windows 스토어에 앱을 제출 [windowsstore.com][1] 의 지침을 따릅니다.

 [1]: http://www.windowsstore.com/

## SDK 및 코르 도우 바 설치

Visual Studio 2012의 당신의 선호 variant를 설정 합니다. 제품의 유료 버전 (전문, 등)의 모든 Windows 스토어 애플 리 케이 션을 만들 수 있도록. **윈도우 8에 대 한 익스프레스** [Express 버전][2] 을 사용 하 여 Windows 스토어 애플 리 케이 션을 구축 해야.

 [2]: http://www.microsoft.com/visualstudio/eng/products/visual-studio-express-products

다운로드 및 [코르도바][3]의 최신 복사본을 추출 합니다. 이러한 내가 적용 하는 `lib\windows-8` 하위 디렉터리.

 [3]: http://phonegap.com/download

## 새 프로젝트 설정

이미 윈도우 7 애플 리 케이 션에서 *HTML/자바 스크립트 추적* Windows 스토어 애플 리 케이 션에서 사용할 수를 사용 하 여 빌드할 수 있습니다. Windows 스토어 애플 리 케이 션 코르 도우 바를 사용 하 여 다른 코르도바 지원 플랫폼에서와 동일한 Api를 노출 합니다.

*   비주얼 스튜디오 2012를 열고 **새 프로젝트** 선택.

*   프로젝트 목록에서 나무, 그리고 다음 **빈 응용 프로그램** 에서 **설치 → 템플릿 → 기타 언어 → 자바 → Windows 저장소** 를 선택 합니다. 당신 처럼, 같은 어떤 프로젝트 이름을 입력 `CordovaWin8Foo` 이 예제와 같이:

    ![][4]

*   Microsoft 사용 하 여 계속 `default.html` 기본 홈 페이지, 하지만 대부분의 웹 개발자 사용으로 `index.html` . 그것은 이렇게, 적어도 당신이 아마에 최선을 다하고 다른 플랫폼에 맞게 하는 것이 좋습니다. 이 문제를 해결, **솔루션 탐색기** 의 이름 바꾸기에는 `default.html` 파일을 `index.html` . 다음 두 번 클릭 합니다 `package.appxmanifest` **시작 페이지** 값을 변경 하 고 `index.html` :

        ![](img/guide/platforms/win8/wschangemanifest.png)


*   포함 하려면 `cordova.js` 마우스 오른쪽 단추로 프로젝트를 클릭에 `js` **→ 새 항목 추가**선택 하 고 **솔루션 탐색기** 에서 디렉토리. 위치는 `cordova.js` 파일에 `lib\windows-8` 디렉터리.

*   편집에 대 한 코드 `index.html` . 에 대 한 참조를 추가할 `cordova.js` . 이렇게 하려면 수동으로, 또는 **솔루션 탐색기**에서 파일을 드래그 하 여. 다음 추가 애플 리 케이 션의 홈 페이지에 다른 종속성:

            <!-- WinJS references -->
            <link href="//Microsoft.WinJS.1.0/css/ui-dark.css" rel="stylesheet" />
            <script src="//Microsoft.WinJS.1.0/js/base.js"></script>
            <script src="//Microsoft.WinJS.1.0/js/ui.js"></script>

            <!-- Cordova -->
            <script src="/js/cordova.js"></script>

            <!-- CordovaWin8Foo references -->
            <link href="/css/default.css" rel="stylesheet" />
            <script src="/js/default.js"></script>


*   추가 `deviceready` 코르도바를 보여 주기 위해 처리기 작업:

        <body>
            <p>Content goes here</p>
            <script type="text/javascript">
                console.log("Subscribing...");
                document.addEventListener("deviceready", function () {
                    navigator.notification.alert("The device is ready!");
                });
            </script>
        </body>


 [4]: {{ site.baseurl }}/static/img/guide/platforms/win8/wsnewproject.png

## 프로젝트 테스트

Visual Studio에서 프로젝트를 실행 합니다. 표시 메시지 상자가 표시 됩니다.

        ![](img/guide/platforms/win8/wsalert.png)


바로 그 거 예요입니다. 지금 코르도바와 Windows 스토어 애플 리 케이 션을 구축할 준비가 되었습니다.
