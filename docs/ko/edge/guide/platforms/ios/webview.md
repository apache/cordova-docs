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

# iOS WebViews

이 단원에서는 큰 iOS 응용 프로그램 내에서 WebView 코르도바 활성화 구성 요소를 포함 하는 방법을 보여 줍니다. 어떻게 이러한 구성 요소가 서로 통신할 수 있습니다 응용 프로그램 플러그인을 참조.

IOS WebViews에 대 한 지원을 시작 코르도바 버전 1.4 사용 하는 `Cleaver` Xcode 템플릿 참조 구현으로 쓸모 있는 구성 요소. 코르 도우 바 2.0 및 이후 버전 에서만 하위 프로젝트 기반 칼 구현을 지원합니다.

이러한 지침을 적어도 필요로 코르도바 2.3와 Xcode 4.5와 함께 한 `config.xml` 새로 만든된 iOS 프로젝트에서 파일. 절차 수 있습니다는 명령줄 인터페이스에서 새 프로젝트를 만든 다음 얻을 하는 `config.xml` 내에서 명명 된 응용 프로그램의 하위 디렉터리 내에서 파일`platforms/ios`.

이러한 지침에 따라, 최신 코르도바 분포를가지고 있는지 확인 합니다. [Cordova.apache.org][1] 에서 다운로드 하 고 그것의 iOS 패키지의 압축을 풉니다.

 [1]: http://cordova.apache.org

## 칼은 Xcode 프로젝트 (CordovaLib 하위 프로젝트)에 추가

1.  실행 중인 경우 Xcode를 종료 합니다.

2.  터미널을 열고 코르도바 iOS의 소스 디렉터리로 이동 합니다.

3.  복사는 `config.xml` 파일을 프로젝트 디렉터리에 위에서 설명한.

4.  Xcode 열고 Finder를 사용 하 여 복사 하는 `config.xml` 파일은 **프로젝트 탐색기** 창으로.

5.  **어떤 추가 된 폴더에 대 한 그룹 만들기를** 선택 하 고 **완료** 를 누릅니다.

6.  Finder를 사용 하 여 복사 하는 `CordovaLib/CordovaLib.xcodeproj` Xcode의 **프로젝트 탐색기** 에 파일

7.  선택 `CordovaLib.xcodeproj` **프로젝트 탐색기** 내에서.

8.  **파일 관리자** 를 표시 하려면 **옵션-명령-1** 키 조합 입력.

9.  **위치** 에 대 한 드롭 다운 메뉴에 대 한 **파일 관리자** 에서 **상대 그룹** 선택.

10. **프로젝트 탐색기**에서 **프로젝트 아이콘** 을 선택, **대상**을 선택한 다음 **빌드 설정** 탭을 선택 합니다.

11. 추가 `-force_load` 및 `-Obj-C` **다른 링커 플래그** 값에 대 한.

12. 프로젝트 탐색기에서 **프로젝트 아이콘** 을 클릭 하십시오, **대상**을 선택한 다음 **빌드 단계** 탭을 선택 합니다.

13. 확장 **라이브러리와 링크 바이너리**.

14. **+** 선택 버튼, 그리고 다음과 같은 **프레임 워크**를 추가 합니다. 필요에 따라 **프로젝트 탐색기**내에서 이동 **프레임 워크** 그룹:
    
        AddressBook.framework
        AddressBookUI.framework
        AudioToolbox.framework
        AVFoundation.framework
        CoreLocation.framework
        MediaPlayer.framework
        QuartzCore.framework
        SystemConfiguration.framework
        MobileCoreServices.framework
        CoreMedia.framework
        

15. **대상 종속성**, 하나 이상의 상자 경우 그 상표를 가진 최고 상자를 확장 합니다.

16. **+** 선택 버튼, 그리고 추가 `CordovaLib` 제품을 구축.

17. **라이브러리와 함께 링크 바이너리**, 하나 이상의 상자 경우 그 상표를 가진 최고 상자를 확장 합니다.

18. **+** 선택 버튼, 그리고 추가`libCordova.a`.

19. 설정에서 **Xcode 환경 설정 → 위치 → 파생 데이터 → 고급...** **고유** 하.

20. 프로젝트 탐색기에서 **프로젝트 아이콘** 을 선택, 당신의 **대상**을 선택한 다음 **빌드 설정** 탭을 선택 합니다.

21. **헤더 검색 경로**대 한 검색입니다. 해당 설정에 대 한 아래, 따옴표를 포함 하 여 이러한 세 가지 값을 추가:
    
        "$(TARGET_BUILD_DIR)/usr/local/lib/include"        
        "$(OBJROOT)/UninstalledProducts/include"
        "$(BUILT_PRODUCTS_DIR)"
        
    
    코르 도우 바 2.1.0, 현재 `CordovaLib` **자동 참조 계산 (아크)를**사용 하도록 업그레이드 되었습니다. **아크** 사용 하 여 업그레이드할 필요가 없습니다 `CordovaLib` , **아크**를 사용 하 여 프로젝트를 업그레이드 하려면에서 Xcode 마이그레이션 마법사를 사용 해야 하지만 **→ 편집 → 리팩터링 변환을 오브 젝 티브-C 호...** 메뉴 **libCordova.a 선택 취소**, 완료 마법사 실행.

## CDVViewController를 사용 하 여

1.  다음 헤더 추가:
    
        #import <Cordova/CDVViewController.h>
        

2.  새로운 인스턴스화할 `CDVViewController` 어딘가에, 예를 들어, 클래스 속성에 유지:
    
        CDVViewController* viewController = [CDVViewController new];
        

3.  필요에 따라 설정 된 `wwwFolderName` 속성 기본값은 `www` :
    
        viewController.wwwFolderName = @"myfolder";
        

4.  선택적으로, 시작 페이지 설정에서 `config.xml` 파일의 `<content>` 태그, 두 로컬 파일:
    
        <content src="index.html" />
        
    
    .. 아니면 원격 사이트:
    
        <content src="http://apache.org" />
        

5.  필요에 따라 설정 된 `useSplashScreen` 속성 기본값은 `NO` :
    
        viewController.useSplashScreen = YES;
        

6.  **보기 프레임**을 설정 합니다. 항상이 마지막 속성 설정:
    
        viewController.view.frame = CGRectMake(0, 0, 320, 480);
        

7.  보기에 식 칼을 추가:
    
        [myView addSubview:viewController.view];
        

## HTML, CSS 및 JavaScript 자산 추가

1.  프로젝트 내에서 새 디렉터리를 만들 `www` 예를 들면.

2.  이 디렉토리에 HTML, CSS, 자바 스크립트 자산을 배치.

3.  Finder를 사용 하 여 Xcode의 **프로젝트 탐색기** 창에는 디렉토리를 복사.

4.  **어떤 추가 폴더 만들기 폴더 참조** 선택.

5.  적절 한 설정 `wwwFolderName` 및 `startPage` 처음 만든 디렉터리에 대 한 속성 (이전 섹션에 지정 된) 기본값을 사용 하거나 인스턴스화할 때는`CDVViewController`.
    
        /*
         if you created a folder called 'myfolder' and
         you want the file 'mypage.html' in it to be
         the startPage
        */
        viewController.wwwFolderName = @"myfolder";
        viewController.startPage = @"mypage.html"