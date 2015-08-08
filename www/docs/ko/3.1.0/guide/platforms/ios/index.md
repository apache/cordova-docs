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

# iOS 플랫폼 가이드

이 가이드에는 코르도바 애플 리 케이 션 아이폰과 iPad와 같은 iOS 장치에 대 한 배포 SDK 개발 환경을 설정 하는 방법을 보여 줍니다. 자세한 플랫폼 관련 내용은 다음을 참조 하십시오.

*   iOS 구성
*   IOS 업그레이드
*   iOS WebViews
*   iOS 플러그인
*   iOS 명령줄 도구

위의 명령줄 도구 코르도바 3.0 이전 버전을 참조 하십시오. 현재 인터페이스에 대 한 내용은 명령줄 인터페이스를 참조 하십시오.

## 요구 사항 및 지원

애플 ® 도구 인텔 기반 맥에 OS X 운영 체제 에서만 실행 iOS 응용 프로그램을 빌드하는 데 필요한. Xcode ® 4.5 (최소 필수 버전) 실행 OS X 10.7 (사자) 버전에만 이상, iOS 6 포함 SDK (소프트웨어 개발 키트). 제출 애플 리 케이 션 애플 애플 리 케이 션 Store℠ 최신 버전을의 Apple 도구를 필요 합니다.

설치 된 SDK와 Xcode, iOS iOS 에뮬레이터를 사용 하 여 코르도바 기능의 대부분을 테스트할 수 있습니다 하지만 완전히 App 스토어에 제출 하기 전에 모든 응용 프로그램의 장치 기능을 테스트 하는 실제 장치를 해야 합니다. 장치 해야 합니다 iOS 5.x 설치, 코르도바 2.3 기준 지원 최소 iOS 버전. 지원 장치 등 모든 iPad ® 모델, 아이폰 ® 3GS 이상, 아이팟 ® 터치 3 세대 이상. 장치에 애플 리 케이 션을 설치 하려면 애플의 [iOS 개발자 프로그램][1], 연간 $99를 요하는 회원도 여야 합니다. 이 가이드는 당신이 개발자 프로그램에 등록 하지 않아도 iOS 에뮬레이터에 애플 리 케이 션을 배포 하는 방법을 보여 줍니다.

 [1]: https://developer.apple.com/programs/ios/

## SDK 설치

Xcode를 다운로드 하는 방법은 두 가지:

*   [App 스토어][2], "Xcode" **응용 프로그램 저장소** 응용 프로그램에서 검색 하 여 사용할 수 있습니다.

*   [애플 개발자 다운로드][3]에서 애플 개발자 등록을 해야합니다.

 [2]: https://itunes.apple.com/us/app/xcode/id497799835?mt=12
 [3]: https://developer.apple.com/downloads/index.action

Xcode 설치 되 면 여러 명령줄 도구 실행 코르도바를 사용 하도록 설정 해야 합니다. **Xcode** 메뉴에서 **기본 설정**, 다음 **다운로드** 탭을 선택 합니다. **구성 요소** 패널에서 **커맨드 라인 도구** 목록 옆에 있는 **설치** 단추를 누릅니다.

## Sdk에서는 프로젝트를 열려면

사용 된 `cordova` 에 코르도바는 명령줄 인터페이스를 설명 하는 대로 새로운 프로젝트를 설정 하는 유틸리티. 예를 들어 소스 코드 디렉토리에:

        $ cordova create hello com.example.hello "HelloWorld"
        $ cd hello
        $ cordova platform add ios
        $ cordova prepare              # or "cordova build"


일단 창조 해, Xcode 내에서 그것을 열 수 있습니다. 열려면 두 번 클릭 합니다 `hello/platforms/ios/hello.xcodeproj` 파일. 스크린은 다음과 같이 한다:

![][4]

 [4]: {{ site.baseurl }}/static/img/guide/platforms/ios/helloworld_project.png

## 에뮬레이터에 배포

IOS 에뮬레이터에서 응용 프로그램을 미리 보기:

1.  *.Xcodeproj* 파일은 왼쪽된 패널에서 선택 되어 있는지 확인 합니다.

2.  **안녕하세요** 애플 리 케이 션 오른쪽에 즉시 패널에서 선택 합니다.

3.  **스키마** 메뉴에서 원하는 장치를 선택, 아이폰으로 6.0 시뮬레이터 여기 강조:

    ![][5]

4.  **구성표**의 왼쪽에 동일한 도구 모음에 나타나는 **실행** 단추를 누릅니다. 빌드, 배포 하 고 에뮬레이터에서 응용 프로그램을 실행 합니다. 별도 에뮬레이터 응용 프로그램 응용 프로그램을 표시 하려면 열립니다.

    ![][6]

    하나의 에뮬레이터는 한 번에 실행 될 수 있습니다 다른 에뮬레이터에서 응용 프로그램을 테스트 하려면 에뮬레이터 응용 프로그램을 종료 하 고 Xcode 내에서 서로 다른 목표를 실행 해야 합니다.

 [5]: {{ site.baseurl }}/static/img/guide/platforms/ios/select_xcode_scheme.png
 [6]: {{ site.baseurl }}/static/img/guide/platforms/ios/HelloWorldStandard.png

Xcode 용 에뮬레이터와 함께 번들로 제공 된 최신 버전의 iPhone 및 iPad. 이전 버전에서 사용할 수 있는 **Xcode → 환경 설정 → 다운로드 → 구성 요소** 패널.

## 장치에 배포

장치에 배포 하기 위해 다양 한 요구에 대 한 자세한 애플의 [iOS 용 도구 워크플로 가이드][7]의 *개발과 유통 자산 구성* 섹션을 참조 하십시오. 간단히, 배포 하기 전에 다음을 수행 해야 합니다.

 [7]: http://developer.apple.com/library/ios/#documentation/Xcode/Conceptual/ios_development_workflow/00-About_the_iOS_Application_Development_Workflow/introduction.html#//apple_ref/doc/uid/TP40007959

1.  애플 iOS 개발자 프로그램에 가입 하세요.

2.  *구축 프로필* [iOS 구축 포탈][8]내에서 만듭니다. 사용 하 여 그것의 *개발 프로비저닝 어시스턴트* 를 만들고 프로필 설치 및 인증서 Xcode 필요 합니다.

3.  프로젝트 설정에서 *코드 서명* 섹션의 *코드 서명 Id* 프로비저닝 프로 파일 이름으로 설정 되어 있는지 확인 합니다.

 [8]: https://developer.apple.com/ios/manage/overview/index.action

장치에 배포:

1.  USB 케이블을 사용 하 여 mac에 장치를 연결

2.  Xcode 창 **구성표** 드롭다운 목록에서 프로젝트의 이름을 선택 합니다.

3.  **장치** 목록에서 장치를 선택 합니다. USB를 통해 연결 되어 있지만 여전히 표시 되지 않습니다, 모든 오류를 해결 하려면 **구성** 단추를 누릅니다.

4.  빌드, 배포 및 귀하의 장치에 응용 프로그램을 실행 하려면 **실행** 단추를 누릅니다.

## 일반적인 문제

**사용 중단 경고:** 때 응용 프로그램 프로그래밍 인터페이스 (API)를 변경 하거나 다른 API로 대체, *사용 되지 않음*으로 표시 됩니다. API는 아직 단기적 움직이지만 결국 제거 됩니다. 이 사용 되지 않는 인터페이스의 일부 아파치 코르도바에 반영 되 고 Xcode 빌드하고 응용 프로그램을 배포 하는 경우 그들에 대 한 경고를 발급 합니다.

Xcode의에 대 한 경고는 `invokeString` 메서드 사용자 지정 URL에서 응용 프로그램을 실행 하는 기능을 염려 한다. 사용자 지정 URL에서 로드 하는 메커니즘은 변경 하는 동안이 코드는 거꾸로 코르도바의 이전 버전을 사용 하 여 만든 애플 리 케이 션에 대 한 기능을 제공 하도록 여전히 존재 합니다. 샘플 응용 프로그램은이 기능을 사용 하지 않으므로 이러한 경고를 무시할 수 있습니다. 이러한 경고가 나타나지 않도록 방지 하기 위해 사용 되지 않는 invokeString API를 참조 하는 코드를 제거 합니다.

*   *Classes/MainViewController.m* 파일을 편집, 코드의 다음 블록을 둘러싸고 `/*` 및 `*/` 코멘트 아래와 같이 입력 합니다 **명령-s** 파일을 저장할:

        (void) webViewDidFinishLoad:(UIWebView*) theWebView {/ / ___PROJECTNAME__-Info.plist 처리 하는 프로토콜을 지정 하는 경우에 유효 / * 경우 (self.invokeString) {/ /이 전달 deviceready 이벤트가 발생 하기 전에 deviceready NSLog를 받을 때 js에 액세스할 수 있습니다 (@"사용 되지 않음: window.invokeString-window.handleOpenURL(url) 함수를 사용, 항상 라는 응용 프로그램을 사용자 지정 스키마 url을 통해 시작할 때.");
          NSString * jsString = [NSString stringWithFormat:@"var invokeString = \" % @\ ";", self.invokeString];
          [theWebView stringByEvaluatingJavaScriptFromString:jsString];
        } * / / / 기본 색상 블랙 배경 일치 네이티브 애플 리 케이 션 theWebView.backgroundColor = [UIColor blackColor];

        [슈퍼 webViewDidFinishLoad: theWebView] 반환;
        }


*   *Classes/AppViewDelegate.m* 파일을 아래와 같이 이중 슬래시를 삽입 하 여 다음 라인을 코멘트 편집 후 파일을 저장 하도록 **명령을-s** 를 입력:

        //self.viewController.invokeString = invokeString;


*   **명령 b** 프로젝트를 다시 빌드하고 경고 제거를 누릅니다.

<!-- Does this fix only last until the next "cordova prepare"? -->

**누락 된 헤더**: 컴파일 오류 누락 된 헤더에 관한 문제가 빌드 위치에서 발생 하며 Xcode 환경 설정을 통해 해결할 수 있습니다:

1.  **Xcode → 환경 설정 → 위치** 선택.

2.  **파생 데이터** 섹션에서 **고급** 단추를 누르고 다음과 같이 **고유** **빌드 위치** 선택:

    ![][9]

 [9]: {{ site.baseurl }}/static/img/guide/platforms/ios/xcode_build_location.png

이것이 새로운 Xcode 설치의 기본 설정은 이지만 Xcode의 이전 버전에서 업그레이 드에 따라 다르게 설정할 수 있습니다.

자세한 내용은 Apple의 설명서를 참조 하십시오.

*   [개발 시작 iOS 애플 리 케이 션 오늘][10] iOS 애플 리 케이 션을 개발 하기 위한 단계에 대 한 빠른 개요를 제공 합니다.

*   [회원 센터 홈 페이지][11] 기술 리소스, 프로 비 저 닝 포털, 배포 가이드 및 커뮤니티 포럼 등 기술 자원을 여러 iOS에 대 한 링크를 제공 합니다.

*   [IOS 용 도구 워크플로 가이드][7]

*   [Xcode 4 사용자 가이드][12]

*   애플 월드 와이드 개발자 컨퍼런스 2012 (WWDC2012)에서 [세션 동영상][13]

*   [Xcode 선택 명령][14]을 경우 하나 이상의 Xcode의 올바른 버전을 지정 하는 데 도움이 설치 되어.

 [10]: http://developer.apple.com/library/ios/#referencelibrary/GettingStarted/RoadMapiOS/index.html#//apple_ref/doc/uid/TP40011343
 [11]: https://developer.apple.com/membercenter/index.action
 [12]: http://developer.apple.com/library/ios/#documentation/ToolsLanguages/Conceptual/Xcode4UserGuide/000-About_Xcode/about.html#//apple_ref/doc/uid/TP40010215
 [13]: https://developer.apple.com/videos/wwdc/2012/
 [14]: http://developer.apple.com/library/mac/#documentation/Darwin/Reference/ManPages/man1/xcode-select.1.html

(Mac ® OS X ® 애플 ®, Xcode ® 응용 프로그램 Store℠, iPad ®, iPhone ®, iPod ® 및 Finder ®는 애플 inc의 등록 상표)
