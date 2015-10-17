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

title: iOS WebViews
---

# iOS WebViews

코르도바 1.4 부터는 iOS 응용 프로그램에서 구성 요소로 코르도바를 사용할 수 있습니다. 이 구성 요소는 코드명 '칼'.

새로운 코르 도우 바 기반 응용 프로그램 코르도바 1.4 또는 더 중대 한 사용 칼에서 제공 하는 Xcode 템플릿을 사용 하 여 만든. (템플릿은 칼의 참조 구현입니다.)

코르 도우 바 2.0.0 및 이후 버전 에서만 하위 프로젝트 칼 구현을 지원합니다.

## 필수 구성 요소

*   코르 도우 바 2.3.0 이상

*   Xcode 4.5 이상

*   `config.xml`(새로 만든된 iOS 프로젝트)에서 [파일](../../../cordova/file/fileobj/fileobj.html)

## 칼은 Xcode 프로젝트 (CordovaLib 하위 프로젝트)에 추가

1.  다운로드 하 고 추출 귀하의 하드 드라이브에 영구 디렉터리 위치로 코르도바 소스 예`~/Documents/Cordova`.

2.  실행 중인 경우 Xcode를 종료 합니다.

3.  위의 다운로드 한 소스를 넣으면 디렉터리로 이동 Terminal.app을 사용 하 여.

4.  복사는 `config.xml` 디스크에 프로젝트 디렉터리에 [파일](../../../cordova/file/fileobj/fileobj.html) (위의 필수 구성 요소 참조).

5.  끌어서 놓기는 `config.xml` Xcode 프로젝트 탐색기에 [파일](../../../cordova/file/fileobj/fileobj.html).

6.  **어떤 추가 된 폴더에 대 한 그룹 만들기** 라디오 단추를 선택 하 고 **완료** 를 누릅니다.

7.  끌어서 놓기는 `CordovaLib.xcodeproj` Xcode 프로젝트 탐색기에 [파일](../../../cordova/file/fileobj/fileobj.html) (영구 디렉터리에서 위에 [위치](../../../cordova/geolocation/Position/position.html) 하 고 그것에 있어야 한다는 `CordovaLib` 하위 디렉터리).

8.  Select `CordovaLib.xcodeproj` in the Project Navigator.

9.  **파일 관리자** 를 표시 하려면 **옵션-명령-1** 키 조합 입력.

10. **위치** 에 대 한 드롭 다운 메뉴에 대 한 **파일 관리자** 에서 **상대 그룹** 선택.

11. 프로젝트 탐색기에서 **프로젝트 아이콘** 을 선택, 당신의 **대상**을 선택한 다음 **빌드 설정** 탭을 선택 합니다.

12. 추가 `-all_load` 및 `-Obj-C` **다른 링커 플래그** 값에 대 한.

13. 프로젝트 탐색기에서 **프로젝트 아이콘** 을 클릭 하십시오, **대상**을 선택한 다음 **빌드 단계** 탭을 선택 합니다.

14. 확장 **라이브러리와 링크 바이너리**.

15. **+** 선택 버튼, 그리고 다음과 같은 **프레임 워크**를 추가 합니다. 필요에 따라 프로젝트 탐색기에서 이동 **프레임 워크** 그룹):
    
        AddressBook.framework AddressBookUI.framework AudioToolbox.framework AVFoundation.framework CoreLocation.framework MediaPlayer.framework QuartzCore.framework SystemConfiguration.framework MobileCoreServices.framework CoreMedia.framework
        

16. **대상 종속성**, 최고 상자 같은 여러 개의 상자를가지고 하는 경우 확장!

17. **+** 선택 버튼, 그리고 추가 `CordovaLib` 제품을 구축.

18. 확장 **라이브러리와 링크 바이너리**, 최고 상자 같은 여러 개의 상자를가지고 하는 경우!

19. **+** 선택 버튼, 그리고 추가`libCordova.a`.

20. **고유** **Xcode 환경 설정 → [위치](../../../cordova/geolocation/Position/position.html) → 파생 데이터 → 고급...** Xcode 환경 설정.

21. 프로젝트 탐색기에서 **프로젝트 아이콘** 을 선택, 당신의 **대상**을 선택한 다음 **빌드 설정** 탭을 선택 합니다.

22. **헤더 검색 경로**대 한 검색입니다. 해당 설정에 대 한 (따옴표) 함께 아래이 세 가지 값을 추가:
    
        "$(TARGET_BUILD_DIR)/usr/local/lib/include"        
        "$(OBJROOT)/UninstalledProducts/include"
        "$(BUILT_PRODUCTS_DIR)"
        
    
    코르 도우 바 2.1.0와 함께 `CordovaLib` **자동 참조 계산 (아크)를**사용 하도록 업그레이드 되었습니다. 필요 **아크** **아크**를 사용 하 여 프로젝트를 업그레이드 하려면 하지만 CordovaLib를 사용 하 여 업그레이드 하시기 바랍니다 사용 하지 않는 메뉴에서 Xcode 마이그레이션 마법사: **편집 → → 리팩터링 변환을 오브 젝 티브-C 호...**, **libCordova.a를 선택을 취소**를 완료 하려면 마법사를 실행 합니다.

## 코드에서 CDVViewController를 사용 하 여

1.  이 헤더를 추가:
    
        #import <Cordova/CDVViewController.h>
        

2.  새로운 인스턴스화할 `CDVViewController` , (예를 들어, 클래스에 있는 속성)를 어딘가에 그것을 유지:
    
        CDVViewController* viewController = [CDVViewController new];
        

3.  (*선택 사항*) 설정 된 `wwwFolderName` 속성 (기본값은 `www` ):
    
        viewController.wwwFolderName = @"myfolder";
        

4.  (*선택 사항*) 당신의 config.xml에 시작 페이지 설정에서 `<content>` 태그.
    
        <content src="index.html" />
        
    
    또는
    
        <content src="http://apache.org" />
        

5.  (*선택 사항*) 설정 된 `useSplashScreen` 속성 (기본값은 `NO` ):
    
        viewController.useSplashScreen = YES;
        

6.  **보기 프레임** 설정 (마지막 속성으로 항상 설정이):
    
        viewController.view.frame = CGRectMake(0, 0, 320, 480);
        

7.  보기에 식 칼을 추가:
    
        [myView addSubview:viewController.view];
        

## HTML, CSS, 자바 스크립트 자산 추가

1.  디스크에서 프로젝트에 새 디렉터리를 만들 `www` 예를 들면.

2.  이 디렉토리에 귀하의 HTML, CSS, 자바 스크립트 자산을 넣어.

3.  Xcode 프로젝트 탐색기에 디렉토리를 끌어서 설정 합니다.

4.  **어떤 추가 된 폴더에 대 한 폴더 참조 만들기** 라디오 단추를 선택 하십시오.

5.  적절 한 설정 `wwwFolderName` 및 `startPage` 처음 만든 폴더에 대 한 속성 또는 기본값 (이전 단원 참조)를 사용 하 여 인스턴스화할 때는`CDVViewController`.
    
        /*
         if you created a folder called 'myfolder' and
         you want the file 'mypage.html' in it to be
         the startPage
        */
        viewController.wwwFolderName = @"myfolder";
        viewController.startPage = @"mypage.html"