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

# IOS 업그레이드

이 가이드에는 코르도바의 이전 버전에서 업그레이 드 하려면 iOS 프로젝트를 수정 하는 방법을 보여 줍니다. 이러한 명령의 대부분 명령줄 도구 앞의 오래 된 세트를 사용 하 여 만든 프로젝트에 적용 된 `cordova` CLI 유틸리티. Cli 버전을 업데이트 하는 방법 정보에 대 한 명령줄 인터페이스를 참조.

**참고**: Xcode 4.6 필요, Xcode 5가 좋습니다. 현재, 애플 앱 스토어에 제출, 당신은 사용 해야 합니다 최신 출하 버전의 iOS SDK, iOS 7입니다. iOS 7 SDK는 필요 하지 않습니다 아직, 하지만이 신속 하 게 변경할 수 있습니다.

## 업그레이드 3.1.0 3.2.0을 프로젝트

-CLI가 아닌 프로젝트에 대 한 실행.

        빈/경로 / / 프로젝트 업데이트
    

CLI 프로젝트:

1.  업데이트는 `cordova` CLI 버전. 명령줄 인터페이스를 참조 하십시오.

2.  실행`cordova platform update ios`

## 업그레이드 3.0.0 3.1.0에 프로젝트

-CLI가 아닌 프로젝트에 대 한 실행.

        빈/경로 / / 프로젝트 업데이트
    

CLI 프로젝트:

1.  업데이트는 `cordova` CLI 버전. 명령줄 인터페이스를 참조 하십시오.

2.  실행`cordova platform update ios`

iOS 7 문제:

1.  제거 `width=device-width, height=device-height` 에서 있는 `index.html` 파일의 `viewport` `meta` 태그. (참조 [관련 버그][1].)

2.  IOS 7 지원에 대 한 귀하의 미디어, 미디어 캡처 및 splashscreen 코어 플러그인을 업데이트 합니다.

 [1]: https://issues.apache.org/jira/browse/CB-4323

Xcode 5 문제:

1.  Xcode 5 (문제 탐색기)에서 그렇게 하 라는 메시지를 표시 하는 경우 프로젝트 설정을 업데이트 합니다.

2.  업데이트를 **컴파일러 c / C + + / 오브 젝 티브-C** 설정, **빌드 설정** 탭에서 **빌드 옵션** 섹션. **기본 컴파일러 (Apple LLVM 5.0)** 선택.

## 2.9.0에서 CLI (3.0.0) 업그레이드

1.  명령줄 인터페이스에 설명 된 대로 코르도바 CLI를 사용 하 여 새로운 아파치 코르도바 3.0.0 프로젝트를 만듭니다.

2.  예를 들어 당신의 플랫폼 코르도바 프로젝트에 추가:`cordova
platform add ios`.

3.  프로젝트의 내용을 복사 `www` 디렉토리에 `www` 에서 방금 만든 코르 도우 바 프로젝트의 루트 디렉토리.

4.  복사 또는 원래 프로젝트에서 어떤 기본 자산을 덮어쓸 ( `Resources` 등), 물론 모든 새 파일을 추가 하는 `.xcodeproj` 프로젝트. IOS 프로젝트 내부 빌드는 `platforms\ios` 디렉터리.

5.  복사를 `config.xml` 에 `www` 디렉터리, 모든 플러그인 정의 제거 하 고. 여기 플랫폼 디렉터리 대신 설정을 수정 합니다.

6.  코르 도우 바 CLI 도구를 사용 하 여 필요한 어떤 플러그인을 설치 하려면. 참고 CLI 처리 하는 모든 핵심 Api 플러그인으로 추가 될 필요가 있습니다. 만 3.0.0 플러그인 CLI와 호환 됩니다.

7.  빌드 및 테스트 합니다.

## 업그레이드 2.9.0 3.0.0에 프로젝트

1.  다운로드 하 고 추출 귀하의 하드 드라이브에 영구 디렉터리 위치로 코르도바 3.0.0 소스 예`~/Documents/Cordova-3.0.0`.

2.  실행 중인 경우 Xcode를 종료 합니다.

3.  위의 다운로드 한 소스를 넣으면 디렉터리로 이동 Terminal.app을 사용 하 여.

4.  IOS 명령줄 도구에에서 설명 된 대로 새 프로젝트를 만듭니다. 이 새 프로젝트에서 자산 해야합니다.

5.  복사는 `www/cordova.js` (참고 있지 않습니다 버전 접미사 더 이상, 버전은 헤더에서 파일 자체에) 파일에 새 프로젝트에서 당신의 `www` 디렉터리 및 삭제 귀하 `www/cordova.js` 파일.

6.  에 코르 도우 바 스크립트 참조를 업데이트를 `www/index.html` 파일 (및 스크립트 참조를 포함 하는 기타 파일) 새를 가리키도록 `cordova.js` 파일.

7.  삭제를 `CordovaLib` 디렉터리 및 복사는 `CordovaLib` 프로젝트의 루트 디렉터리에 새 프로젝트에서 디렉토리.

**참고**: 코르도바 3.0.0 부터는 플러그인은 미리 설치 되어 있지 및 사용 하는 `plugman` 그들을 너 자신 설치 하는 명령줄 유틸리티. 플러그인을 관리 하기 위해 Plugman를 사용 하 여 참조 하십시오.

## 업그레이드 2.8.0 2.9.0에 프로젝트

1.  다운로드 하 고 추출 귀하의 하드 드라이브에 영구 디렉터리 위치로 코르도바 2.9.0 소스 예`~/Documents/Cordova-2.9.0`.

2.  실행 중인 경우 Xcode를 종료 합니다.

3.  위의 다운로드 한 소스를 넣으면 디렉터리로 이동 Terminal.app을 사용 하 여.

4.  IOS 명령줄 도구에에서 설명 된 대로 새 프로젝트를 만듭니다. 이 새 프로젝트에서 자산 해야합니다.

5.  복사는 `www/cordova.js` (참고 있지 않습니다 버전 접미사 더 이상, 버전은 헤더에서 파일 자체에) 파일에 새 프로젝트에서 당신의 `www` 디렉터리 및 삭제 귀하 `www/cordova.js` 파일.

6.  에 코르 도우 바 스크립트 참조를 업데이트를 `www/index.html` 파일 (및 스크립트 참조를 포함 하는 기타 파일) 새를 가리키도록 `cordova.js` 파일.

7.  삭제를 `CordovaLib` 디렉터리 및 복사는 `CordovaLib` 프로젝트의 루트 디렉터리에 새 프로젝트에서 디렉토리.

## 업그레이드 2.7.0 2.8.0에 프로젝트

1.  다운로드 하 고 추출 귀하의 하드 드라이브에 영구 디렉터리 위치로 코르도바 2.8.0 소스 예`~/Documents/Cordova-2.8.0`.

2.  실행 중인 경우 Xcode를 종료 합니다.

3.  위의 다운로드 한 소스를 넣으면 디렉터리로 이동 Terminal.app을 사용 하 여.

4.  IOS 명령줄 도구에에서 설명 된 대로 새 프로젝트를 만듭니다. 이 새 프로젝트에서 자산 해야합니다.

5.  복사는 `www/cordova.js` (참고 있지 않습니다 버전 접미사 더 이상, 버전은 헤더에서 파일 자체에) 파일에 새 프로젝트에서 당신의 `www` 디렉터리 및 삭제 귀하 `www/cordova-2.7.0.js` 파일.

6.  에 코르 도우 바 스크립트 참조를 업데이트를 `www/index.html` 파일 (및 스크립트 참조를 포함 하는 기타 파일) 새를 가리키도록 `cordova.js` 파일.

7.  업데이트 `<plugin>` 태그는 `config.xml` 파일을 `<feature>` 태그. 존재 참고 `<plugin>` 태그는 여전히 작동 하지만 사용 되지 않습니다. 이 정보를 복사할 수는 `config.xml` 새로운 프로젝트에 대 한 파일. 예를 들어:
    
        <plugins>
            <plugin name="LocalStorage" value="CDVLocalStorage" />
            <!-- other plugins -->
        </plugins>
        
        <!-- change to: (note that a <feature> tag is on the same level as <plugins> -->
        <feature name="LocalStorage">
            <param name="ios-package" value="CDVLocalStorage" />
        </feature>
        <!-- other <feature> tags -->
        

8.  삭제는 `CordovaLib` 디렉터리 및 복사는 `CordovaLib` 프로젝트의 루트 디렉터리에 새 프로젝트에서 디렉토리.

9.  이 두 가지 프레임 워크를 프로젝트에 추가:
    
        OpenAL ImageIO
        

10. 프로젝트의 대상 **빌드 설정**을 업데이트 합니다. **연결 → 기타 링커 플래그**에서 편집 해야 **"-Obj-C"** **"-ObjC"**.

11. 프로젝트의 대상 **빌드 설정**을 업데이트 합니다. **연결 → 기타 링커 플래그**에서 변경 **"-all_load"** 수 `-force\_load ${BUILT\_PRODUCTS\_DIR}/libCordova.a` . 에 정의 된 문제가 있는 경우 이렇게만 하면 [이 문제.][2].

 [2]: https://issues.apache.org/jira/browse/CB-3458

## 업그레이드 2.6.0 2.7.0에 프로젝트

1.  다운로드 하 고 추출 귀하의 하드 드라이브에 영구 디렉터리 위치로 코르도바 2.7.0 소스 예`~/Documents/Cordova-2.7.0`.

2.  실행 중인 경우 Xcode를 종료 합니다.

3.  위의 다운로드 한 소스를 넣으면 디렉터리로 이동 Terminal.app을 사용 하 여.

4.  IOS 명령줄 도구에에서 설명 된 대로 새 프로젝트를 만듭니다. 이 새 프로젝트에서 자산 해야합니다.

5.  복사는 `www/cordova-2.7.0.js` 에 새로운 프로젝트에서 파일을 `www` 디렉터리 및 삭제 귀하 `www/cordova-2.6.0.js` 파일.

6.  에 코르 도우 바 스크립트 참조를 업데이트를 `www/index.html` 파일 (및 스크립트 참조를 포함 하는 기타 파일) 새를 가리키도록 `cordova-2.7.0.js` 파일.

7.  업데이트 (또는 교체, 결코 파일을 변경한 경우) 당신의 `AppDelegate.m` 에서 새로운 것에 따라 파일 (볼 [이 사랑][3] 프로젝트).

8.  당신의 `config.xml` 파일을 [이 줄을 제거][4].

9.  삭제를 `CordovaLib` 디렉터리 및 복사는 `CordovaLib` 프로젝트의 루트 디렉터리에 새 프로젝트에서 디렉토리.

 [3]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=5c05ac80e056753c0e8736f887ba9f28d5b0774c;hp=623ad8ec3c46f656ea18c6c3a190d650dd64e479;hb=c6e71147386d4ad94b07428952d1aae0a9cbf3f5;hpb=c017fda8af00375a453cf27cfc488647972e9a23
 [4]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=537705d76a5ef6bc5e57a8ebfcab78c02bb4110b;hp=8889726d9a8f8c530fe1371c56d858c34552992a;hb=064239b7b5fa9a867144cf1ee8b2fb798ce1f988;hpb=c9f233250d4b800f3412eeded811daaafb17b2cc

## 업그레이드 2.5.0 2.6.0에 프로젝트

1.  다운로드 하 고 추출 귀하의 하드 드라이브에 영구 디렉터리 위치로 코르도바 2.6.0 소스 예`~/Documents/Cordova-2.6.0`.

2.  실행 중인 경우 Xcode를 종료 합니다.

3.  위의 다운로드 한 소스를 넣으면 디렉터리로 이동 Terminal.app을 사용 하 여.

4.  IOS 명령줄 도구에에서 설명 된 대로 새 프로젝트를 만듭니다. 이 새 프로젝트에서 자산 해야합니다.

5.  프로젝트의 복사 `www/cordova-2.6.0.js` 로 파일을 `www` 디렉터리 및 삭제 귀하 `www/cordova-2.5.0.js` 파일.

6.  에 코르 도우 바 스크립트 참조를 업데이트를 `www/index.html` 파일 (다른 파일과 함께 스크립트를 참조 하는) 새로운 참조를 `cordova-2.6.0.js` 파일.

7.  업데이트 (또는 교체, 결코 파일을 변경한 경우) 당신의 `AppDelegate.m` 에서 새로운 것에 따라 파일 (볼 [이 사랑][5] 프로젝트).

8.  당신의 `config.xml` 파일을 [이 새 줄을 추가][6].

9.  당신의 `config.xml` 파일을 [이 새 줄을 추가][7].

10. 당신의 `config.xml` 파일, [UIWebViewBounce, DisallowOverscroll으로 변경 되었습니다 및 기본 값이 다른][8].

11. 당신의 `config.xml` 파일에 `EnableLocation` 특혜 사용 되지 않습니다.

12. 삭제를 `CordovaLib` 디렉터리 및 복사는 `CordovaLib` 프로젝트의 루트 디렉터리에 새 프로젝트에서 디렉토리.

 [5]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=124a56bb4f361e95616f44d6d6f5a96ffa439b60;hp=318f79326176be8f16ebc93bad85dd745f4205b6;hb=a28c7712810a63396e9f32fa4eb94fe3f8b93985;hpb=36acdf55e4cab52802d73764c8a4b5b42cf18ef9
 [6]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=1555b5e81de326a07efe0bccaa5f5e2326b07a9a;hp=0652d60f8d35ac13c825c572dca6ed01fea4a540;hb=95f16a6dc252db0299b8e2bb53797995b1e39aa1;hpb=a2de90b8f5f5f68bd9520bcbbb9afa3ac409b96d
 [7]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=d307827b7e67301171a913417fb10003d43ce39d;hp=04260aa9786d6d74ab20a07c86d7e8b34e31968c;hb=97b89edfae3527828c0ca6bb2f6d58d9ded95188;hpb=942d33c8e7174a5766029ea1232ba2e0df745c3f
 [8]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=8889726d9a8f8c530fe1371c56d858c34552992a;hp=d307827b7e67301171a913417fb10003d43ce39d;hb=57982de638a4dce6ae130a26662591741b065f00;hpb=ec411f18309d577b4debefd9a2f085ba719701d5

## 업그레이드 2.4.0 2.5.0에 프로젝트

1.  다운로드 하 고 추출 귀하의 하드 드라이브에 영구 디렉터리 위치로 코르도바 2.5.0 소스 예`~/Documents/Cordova-2.5.0`.

2.  실행 중인 경우 Xcode를 종료 합니다.

3.  위의 다운로드 한 소스를 넣으면 디렉터리로 이동 Terminal.app을 사용 하 여.

4.  IOS 명령줄 도구에에서 설명 된 대로 새 프로젝트를 만듭니다. 이 새 프로젝트에서 자산 해야합니다.

5.  복사는 `www/cordova-2.5.0.js` 에 새로운 프로젝트에서 파일을 `www` 디렉터리 및 삭제 당신의 `www/cordova-2.4.0.js` 파일.

6.  에 코르 도우 바 스크립트 참조를 업데이트를 `www/index.html` 파일 (및 스크립트 참조를 포함 하는 기타 파일) 새를 가리키도록 `cordova-2.5.0.js` 파일.

7.  업데이트 (또는 교체, 결코 파일을 변경한 경우) 당신의 `AppDelegate.m` 에서 새로운 것에 따라 파일 (볼 [이 사랑][9] 프로젝트).

8.  당신의 `config.xml` 파일, [다음 새 줄을 추가][10].

9.  당신의 `config.xml` 파일, [루트 요소를 편집, 위젯 코르도바에서 변경][11].

10. 당신의 `config.xml` 파일, [OpenAllWhitelistURLsInWebView 환경 설정 제거][12].

11. 삭제를 `cordova` 디렉터리 및 복사는 `cordova` 프로젝트의 루트 디렉터리에 새 프로젝트에서 디렉토리. 2.5.0,이 스크립트를 업데이 트 했습니다.

12. 삭제를 `CordovaLib` 디렉터리 및 복사는 `CordovaLib` 프로젝트의 루트 디렉터리에 새 프로젝트에서 디렉토리.

 [9]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=318f79326176be8f16ebc93bad85dd745f4205b6;hp=6dc7bfc84f0ecede4cc43d2a3256ef7c5383b9fe;hb=4001ae13fcb1fcbe73168327630fbc0ce44703d0;hpb=299a324e8c30065fc4511c1fe59c6515d4842f09
 [10]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=903944c4b1e58575295c820e154be2f5f09e6314;hp=721c734120b13004a4a543ee25f4287e541f34be;hb=ae467249b4a256bd31ee89aea7a06f4f2316b8ac;hpb=9e39f7ef8096fb15b38121ab0e245a3a958d9cbb
 [11]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=64e71636f5dd79fa0978a97b9ff5aa3860a493f5;hp=d8579352dfb21c14e5748e09b2cf3f4396450163;hb=0e711f8d09377a7ac10ff6be4ec17d22cdbee88d;hpb=57c3c082ed9be41c0588d0d63a1d2bfcd2ed878c
 [12]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=721c734120b13004a4a543ee25f4287e541f34be;hp=7d67508b70914aa921a16e79f79c00512502a8b6;hb=187bf21b308551bfb4b98b1a5e11edf04f699791;hpb=03b8854bdf039bcefbe0212db937abd81ac675e4

## 업그레이드 2.3.0 2.4.0에 프로젝트

1.  다운로드 하 고 추출 귀하의 하드 드라이브에 영구 디렉터리 위치로 코르도바 2.4.0 소스 예`~/Documents/Cordova-2.4.0`.

2.  실행 중인 경우 Xcode를 종료 합니다.

3.  위의 다운로드 한 소스를 넣으면 디렉터리로 이동 Terminal.app을 사용 하 여.

4.  IOS 명령줄 도구에에서 설명 된 대로 새 프로젝트를 만듭니다. 이 새 프로젝트에서 자산 해야합니다.

5.  복사는 `www/cordova-2.4.0.js` 에 새로운 프로젝트에서 파일을 `www` 디렉터리 및 삭제 귀하 `www/cordova-2.3.0.js` 파일.

6.  에 코르 도우 바 스크립트 참조를 업데이트를 `www/index.html` 파일 (및 스크립트 참조를 포함 하는 기타 파일) 새를 가리키도록 `cordova-2.4.0.js` 파일.

7.  업데이트 (또는 교체, 결코 파일을 변경한 경우) 당신의 `MainViewController.m` 에서 새로운 것에 따라 파일 (볼 [이 사랑][13] 프로젝트).

8.  업데이트 (또는 교체, 결코 파일을 변경한 경우) 당신의 `AppDelegate.m` 에서 새로운 것에 따라 파일 (볼 [이 사랑][14] 프로젝트).

9.  당신의 `config.xml` 파일을 [이 새 줄을 추가][15].

10. 삭제를 `cordova` 디렉터리 및 복사는 `cordova` 프로젝트의 루트 디렉터리에 새 프로젝트에서 디렉토리. 2.4.0에이 스크립트는 고정.

11. 삭제를 `CordovaLib` 디렉터리 및 복사는 `CordovaLib` 프로젝트의 루트 디렉터리에 새 프로젝트에서 디렉토리.

12. 프로젝트에 자원으로 AssetsLibrary.framework를 추가 합니다. ( [애플의 설명서][16] 참조 이렇게 하는 방법에 대 한 지침.).

 [13]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/MainViewController.m;h=5f9eeac15c2437cd02a6eb5835b48374e9b94100;hp=89da1082d06ba5e5d0dffc5b2e75a3a06d5c2aa6;hb=b4a2e4ae0445ba7aec788090dce9b822d67edfd8;hpb=a484850f4610e73c7b20cd429a7794ba829ec997
 [14]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=6dc7bfc84f0ecede4cc43d2a3256ef7c5383b9fe;hp=1ca3dafeb354c4442b7e149da4f281675aa6b740;hb=6749c17640c5fed8a7d3a0b9cca204b89a855baa;hpb=deabeeb6fcb35bac9360b053c8bf902b45e6de4d
 [15]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=7d67508b70914aa921a16e79f79c00512502a8b6;hp=337d38da6f40c7432b0bce05aa3281d797eec40a;hb=6749c17640c5fed8a7d3a0b9cca204b89a855baa;hpb=deabeeb6fcb35bac9360b053c8bf902b45e6de4d
 [16]: https://developer.apple.com/library/ios/#recipes/xcode_help-project_editor/Articles/AddingaLibrarytoaTarget.html

## 업그레이드 2.2.0 2.3.0에 프로젝트

1.  다운로드 하 고 추출 귀하의 하드 드라이브에 영구 디렉터리 위치로 코르도바 2.3.0 소스 예`~/Documents/Cordova-2.3.0`.

2.  실행 중인 경우 Xcode를 종료 합니다.

3.  위의 다운로드 한 소스를 넣으면 디렉터리로 이동 Terminal.app을 사용 하 여.

4.  IOS 명령줄 도구에에서 설명 된 대로 새 프로젝트를 만듭니다. 이 새 프로젝트에서 자산 해야합니다.

5.  복사는 `www/cordova-2.3.0.js` 에 새로운 프로젝트에서 파일을 `www` 디렉터리 및 삭제 귀하 `www/cordova-2.2.0.js` 파일.

6.  에 코르 도우 바 스크립트 참조를 업데이트를 `www/index.html` 파일 (및 스크립트 참조를 포함 하는 기타 파일) 새를 가리키도록 `cordova-2.3.0.js` 파일.

7.  업데이트 (또는 교체, 결코 파일을 변경 하는 경우)를 `MainViewController.m` 에서 새로운 프로젝트 하나에 따르면.

8.  삭제를 `cordova` 디렉터리 및 복사는 `cordova` 프로젝트의 루트 디렉터리에 새 프로젝트에서 디렉토리. 2.3.0, 새로운 스크립트는 이것.

9.  삭제를 `CordovaLib` 디렉터리 및 복사는 `CordovaLib` 프로젝트의 루트 디렉터리에 새 프로젝트에서 디렉토리.

10. 변환 당신의 `Cordova.plist` 파일을 `config.xml` , 스크립트를 실행 하 여 `bin/cordova\_plist\_to\_config\_xml` 파일을 프로젝트에.

11. InAppBrowser 플러그인을 추가 `config.xml` , 아래에이 태그를 추가 하 여 `<cordova><plugins>` :
    
        < 플러그인 이름 = "InAppBrowser" 값 = "CDVInAppBrowser" / >
        

12. 참고-C 플러그인은 더 이상 허용 *하지* . 허용 된 사이트 목록 애플 리 케이 션 허용 된 연결을 설정 해야 합니다 `User-Agent` 헤더를 주요 코르도바 WebView로 같은 사용자 에이전트에 연결. 액세스 하 여이 얻을 수 있는 `userAgent` 메인 뷰 컨트롤러에서 속성. 기본 뷰 컨트롤러 ( `CDVViewController` )도 `URLisAllowed` URL은 허용 전달 여부를 확인 하는 방법.

13. 장치 API 변경:
    
    *   IOS에 대 한 device.platform를 반환 하는 데 사용 `iPhone` , `iPad` 또는 `iPod Touch` (정확 하 게) 반환 합니다 지금;`iOS`.
    *   IOS를 위한 device.name (이제 모든 플랫폼에 대 한 사용 되지 않음) 사용자의 장치 이름을 반환 하는 데 사용 (예: ' Shazron의 아이폰 5 '); 이제 반환 하는 데 사용 하는 어떤 device.platform을 반환 합니다: `iPhone` , `iPad` 또는`iPod Touch`.
    *   모든 플랫폼에 대 한 device.model; 라는 새로운 속성은 이 특정 장치 모델을 반환 합니다 예를 들어 `iPad2,5` (다른 플랫폼에 대 한이 반환 하는 데 사용 하는 어떤 device.name를 반환).

## 업그레이드 2.1.0 2.2.0에 프로젝트

1.  다운로드 하 고 추출 귀하의 하드 드라이브에 영구 디렉터리 위치로 코르도바 2.2.0 소스 예`~/Documents/Cordova-2.2.0`.

2.  실행 중인 경우 Xcode를 종료 합니다.

3.  위의 다운로드 한 소스를 넣으면 디렉터리로 이동 Terminal.app을 사용 하 여.

4.  IOS 명령줄 도구에에서 설명 된 대로 새 프로젝트를 만듭니다. 이 새 프로젝트에서 자산 해야합니다.

5.  복사는 `www/cordova-2.2.0.js` 에 새로운 프로젝트에서 파일을 `www` 디렉터리 및 삭제 귀하 `www/cordova-2.1.0.js` 파일.

6.  에 코르 도우 바 스크립트 참조를 업데이트를 `www/index.html` 파일 (및 스크립트 참조를 포함 하는 기타 파일) 새를 가리키도록 `cordova-2.2.0.js` 파일.

7.  업데이트 (또는 절대 파일을 변경한 경우 교체)를 `MainViewController.m` 에서 새로운 프로젝트 하나에 따라:
    
    *   업데이트 → viewWillAppear

8.  복사는 `cordova` 프로젝트의 루트 디렉터리에 새 프로젝트에서 디렉토리. 2.2.0,이 '모방' 스크립트를 업데이트 합니다.

9.  다음으로, 업데이트를 `CordovaLib` 하위 프로젝트가 참조. 코르도바 2.1.0으로 시작, 우리가 사용 하지 않는 CORDOVALIB Xcode 변수 더 이상 위치를 참조할 때 `CordovaLib` 을 참조는 절대 파일 참조 지금.
    
    1.  Terminal.app 출시
    2.  코르도바를 설치한 위치로 이동 (1 단계 참조)에 `bin` 하위 디렉터리
    3.  아래 스크립트를 실행 하는 첫 번째 매개 변수는 프로젝트의 경로 `.xcodeproj` 파일:
        
        `update_cordova_subproject path/to/your/project/xcodeproj`

**참고**: 2.2.0,은 `bin/create` 에 복사 스크립트는 `CordovaLib` 프로젝트에 하위 프로젝트. 동일한 종류의 설치를 위해, 그냥 오른쪽에 복사 `CordovaLib` 프로젝트 디렉터리 업데이트에는 `CordovaLib` 하위 프로젝트 Xcode 파일 관리자에서 (프로젝트)의 상대적인 위치.

## 업그레이드 2.0.0 2.1.0을 프로젝트

코르 도우 바 2.1.0와 함께 `CordovaLib` **자동 참조 계산 (아크)를**사용 하도록 업그레이드 되었습니다. 필요 **아크** **아크**를 사용 하 여 프로젝트를 업그레이드 하려면 하지만 CordovaLib를 사용 하 여 업그레이드 하시기 바랍니다 사용 하지 않는 메뉴에서 Xcode 마이그레이션 마법사: **→ 편집 → 리팩터링 변환을 오브 젝 티브-C 호...**, libCordova.a, 선택 취소 다음 마법사 실행이 완료.

1.  다운로드 하 고 추출 귀하의 하드 드라이브에 영구 디렉터리 위치로 코르도바 2.1.0 소스 예`~/Documents/Cordova-2.1.0`.

2.  실행 중인 경우 Xcode를 종료 합니다.

3.  위의 다운로드 한 소스를 넣으면 디렉터리로 이동 Terminal.app을 사용 하 여.

4.  IOS 명령줄 도구에에서 설명 된 대로 새 프로젝트를 만듭니다. 이 새 프로젝트에서 자산 해야합니다.

5.  복사는 `www/cordova-2.1.0.js` 에 새로운 프로젝트에서 파일을 `www` 디렉터리 및 삭제 귀하 `www/cordova-2.0.0.js` 파일.

6.  에 코르 도우 바 스크립트 참조를 업데이트를 `www/index.html` 파일 (및 스크립트 참조를 포함 하는 기타 파일) 새를 가리키도록 `cordova-2.1.0.js` 파일.

7.  업데이트 (또는 절대 파일을 변경한 경우 교체)를 `AppDelegate.m` 에서 새로운 프로젝트 하나에 따라:
    
    *   편집 → 응용 프로그램: didFinishLaunchingWithOptions:
    *   추가 된 → 응용 프로그램: supportedInterfaceOrientationsForWindow:

8.  업데이트 (또는 절대 파일을 변경한 경우 교체)를 `MainViewController.m` 에서 새로운 프로젝트 하나에 따라:
    
    *   추가 → viewWillAppear

9.  복사는 `cordova` 프로젝트의 루트 디렉터리에 새 프로젝트에서 디렉토리. 2.1.0,이 공간을 가진 경로 지원 하도록 업데이트 된 스크립트는.

10. 제거는 `VERSION` 프로젝트의 참조 파일 (*아닌* 것에`CordovaLib`).

11. 다음으로, 업데이트를 `CordovaLib` 하위 프로젝트가 참조. 코르도바 2.1.0으로 시작, 우리가 사용 하지 않는 CORDOVALIB Xcode 변수 더 이상 위치를 참조할 때 `CordovaLib` 을 참조는 절대 파일 참조 지금.
    
    1.  Terminal.app 출시
    2.  코르도바를 설치한 위치로 이동 (1 단계 참조)에 `bin` 하위 디렉터리
    3.  아래 스크립트를 실행 하는 첫 번째 매개 변수는 프로젝트의 경로 `.xcodeproj` 파일:
        
        `update_cordova_subproject 경로/로/네/프로젝트/xcodeproj`

## 업그레이드 1.9.0 2.0.0에 프로젝트

1.  코르 도우 바 2.0.0 설치.

2.  IOS 명령줄 도구에에서 설명 된 대로 새 프로젝트를 만듭니다. 이 새 프로젝트에서 자산 해야합니다.

3.  복사는 `www/cordova-2.0.0.js` 에 새로운 프로젝트에서 파일을 `www` 디렉터리 및 삭제 귀하 `www/cordova-1.9.0.js` 파일.

4.  에 코르 도우 바 스크립트 참조를 업데이트를 `www/index.html` 파일 (및 스크립트 참조를 포함 하는 기타 파일) 새를 가리키도록 `cordova-2.0.0.js` 파일.

5.  복사는 `cordova` 프로젝트의 루트 디렉토리 (만약 당신이 원하는 프로젝트 명령줄 도구)에 새로운 프로젝트에서 디렉토리.

6.  아래에서 새 항목 추가 `Plugins` 에 당신의 `Cordova.plist` **지원 파일** 그룹에서 파일. 키가 `Device` 값은`CDVDevice`.

7.  제거`Cordova.framework`.

8.  제거 `verify.sh` **지원 파일** 그룹에서.

9.  프로젝트 탐색기에서 프로젝트 아이콘을 선택, **대상**, 프로젝트를 선택한 다음 **빌드 설정** 탭을 선택 합니다.

10. **전처리기 매크로**대 한 검색 다음 모두 제거 **CORDOVA_FRAMEWORK = 1** 값.

11. 위치는 `CordovaLib` 홈 폴더의 아래 당신의 하드 드라이브에 설치 된 디렉터리 `Documents` 하위 디렉터리.

12. 위치는 `CordovaLib.xcodeproj` 파일에 `CordovaLib` 디렉터리 다음 드래그 앤 드롭으로 프로젝트에 파일. 그것은 하위 프로젝트로 표시 됩니다.

13. 프로젝트를 빌드, 당신은 몇 가지 오류에 관련 된 한다 `#import` 지시문.

14. 에 `#import` 오류, 어떤 견적에 기초를 둔 수입이 스타일에서 변경:
    
        #import "CDV.h"
        
    
    이 부류에 기초를 둔 스타일:
    
        #import <Cordova/CDV.h>
        
    
    제거 및 `#ifdef` 어떤 코르도바 래퍼 수입, 그들은 더 이상 필요 하지 않습니다 (수입 통합 이제는)

15. 프로젝트를 다시 빌드하고 그것 없는 어떤 `#import` 오류.

16. 프로젝트 탐색기에서 **프로젝트 아이콘** 을 선택, **대상**, 프로젝트를 선택한 다음 **빌드 단계** 탭을 선택 합니다.

17. **대상 종속성** 단계, 다음 선택 **+** 버튼 확장 합니다.

18. 선택은 `CordovaLib` 대상, 다음 **추가** 단추를 선택 합니다.

19. (그것은 이미 프레임 워크의 무리를 포함 한다) 첫번째 **링크 라이브러리와 바이너리** 단계를 확장 한 다음 **+** 을 선택 단추.

20. 선택은 `libCordova.a` 정적 라이브러리 다음 **추가** 단추를 선택 합니다.

21. **실행 스크립트** 단계 삭제.

22. 프로젝트 탐색기에서 **프로젝트 아이콘** 을 선택, **대상**, 프로젝트를 선택한 다음 **빌드 설정** 탭을 선택 합니다.

23. **기타 링커 플래그**에 대 한 검색 하 고 값을 추가할 **-force_load** 및 **Obj-C**.

24. 확장은 `CordovaLib` 하위 프로젝트.

25. 위치는 `VERSION` 파일, (우리는 그것, 아니라 복사에 대 한 링크를 만들 원하는) 주요 프로젝트에 끌어 놓습니다.

26. **어떤 추가 된 폴더에 대 한 그룹 만들기** 라디오 단추를 선택 후 **완료** 버튼을 선택 합니다.

27. 선택은 `VERSION` 파일을 이전 단계에서 드래그 합니다.

28. **파일 관리자** 를 표시 하려면 **옵션-명령-1** 키 조합을 입력 (또는 menuitem **보기 → 유틸리티 → 파일 속성**).

29. **위치** 에 대 한 드롭 다운 메뉴에 대 한 **파일 관리자** 에서 **CORDOVALIB를 기준으로** 선택.

30. 통합된 헤더를 찾을 수 있도록 **고유**, **Xcode 환경 설정 → 위치 → 파생 데이터 → 고급...** Xcode 환경 설정.

31. 프로젝트 탐색기에서 **프로젝트 아이콘** 을 선택, 당신의 **대상**을 선택한 다음 **빌드 설정** 탭을 선택 합니다.

32. **헤더 검색 경로**대 한 검색입니다. 해당 설정에 대 한 따옴표를 포함 하 여 이러한 세 가지 값을 추가:
    
        "$(TARGET_BUILD_DIR)/usr/local/lib/include"
        
        "$(OBJROOT)/UninstalledProducts/include"
        
        "$(BUILT_PRODUCTS_DIR)"
        

33. **다른 링커 플래그**에 대 한 검색입니다. 해당 설정에 대 한이 값을 추가:
    
        -weak_framework CoreFoundation
        

34. 프로젝트를 빌드, 그것을 컴파일하고 문제 **없이** 링크 해야.

35. **구성표** 드롭 다운에서 프로젝트를 선택한 다음 선택 **아이폰 5.1 시뮬레이터**.

36. **실행** 버튼을 선택 합니다.

**참고**: 프로젝트를 시뮬레이터에서 예상 대로 작동 하지 않는 경우 단서 Xcode에서 콘솔 로그에 오류 기록을 보시기 바랍니다.

## 1.9.0 1.8.X 프로젝트 업그레이드

1.  코르 도우 바 1.9.0을 설치 합니다.

2.  새 프로젝트를 만듭니다. 이 새 프로젝트에서 자산의 일부를 해야 합니다.

3.  복사는 `www/cordova-1.9.0.js` 에 새로운 프로젝트에서 파일을 `www` 디렉터리 및 삭제 귀하 `www/cordova-1.8.x.js` 파일.

4.  에 코르 도우 바 스크립트 참조를 업데이트를 `www/index.html` 파일 (및 스크립트 참조를 포함 하는 기타 파일) 새를 가리키도록 `cordova-1.9.0.js` 파일.

**참고**: 1.9.0 새로운 지원 `BackupWebStorage` 부울 `Cordova.plist` 설정. 그것은 기본적으로 활성화 되어, 그래서 그것을 설정 `false` 특히 iOS 6에 그것을 사용 하지 않도록 합니다. 참조 [출시 노트: 사파리와 UIKit 섹션][17]

 [17]: https://developer.apple.com/library/prerelease/ios/#releasenotes/General/RN-iOSSDK-6_0/_index.html

## 업그레이드 1.7.0 프로젝트 1.8.x를

1.  코르 도우 바 1.8.0을 설치 합니다.

2.  새 프로젝트를 만듭니다. 이 새 프로젝트에서 자산의 일부를 해야 합니다.

3.  복사는 `www/cordova-1.8.0.js` 에 새로운 프로젝트에서 파일을 `www` 디렉터리 및 삭제 귀하 `www/cordova-1.7.x.js` 파일.

4.  에 코르 도우 바 스크립트 참조를 업데이트를 `www/index.html` 파일 (및 스크립트 참조를 포함 하는 기타 파일) 새를 가리키도록 `cordova-1.8.0.js` 파일.

캡처 API를 사용 하 여 예정 하는 경우 새로운 **iPad 망막 디스플레이** 자산을 필요 합니다.

1.  복사는 `Resources/Capture.bundle` -기존 작성 하 여 프로젝트 디렉터리에 새 프로젝트 항목 `Resources/Capture.bundle` 항목.

2.  프로젝트에서 선택 된 `Capture.bundle` 항목 Xcode에서 프로젝트 탐색기를에 **삭제** 키를 입력 한 다음 결과 대화 상자에서 **제거할 참조** 를 선택 합니다.

3.  새로운 드래그 `Capture.bundle` Xcode에서 프로젝트 탐색기로 위의 단계 1에서 다음 **모든 추가 된 폴더에 대 한 그룹 만들기** 라디오 단추를 선택 합니다.

## 1.6.X 프로젝트 1.7.0으로 업그레이드

1.  코르 도우 바 1.7.0 설치.

2.  새 프로젝트를 만듭니다. 이 새 프로젝트에서 자산의 일부를 해야 합니다.

3.  복사는 `www/cordova-1.7.0.js` 에 새로운 프로젝트에서 파일을 `www` 디렉터리 및 삭제 귀하 `www/cordova-1.6.0.js` 파일.

4.  에 코르 도우 바 스크립트 참조를 업데이트를 `www/index.html` 파일 (및 스크립트 참조를 포함 하는 기타 파일) 새를 가리키도록 `cordova-1.7.0.js` 파일.

## 업그레이드 1.5.0 프로젝트 1.6.x를

1.  코르 도우 바 1.6.1을 설치 합니다.

2.  백업을 `AppDelegate.m` , `AppDelegate.h` , `MainViewController.m` , `MainViewController.h` , 및 `Cordova.plist` 프로젝트에서.

3.  새 프로젝트를 만듭니다. 이 새 프로젝트에서 자산의 일부를 해야 합니다.

4.  (위의 2 단계에서 파일을 먼저 백업) 어떤 오래 된 파일을 대체 하는 디스크에 1.5.0-based 프로젝트 디렉토리에 새 프로젝트에서이 파일을 복사:
    
        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        Cordova.plist
        

5.  모든 새로운 추가 `MainViewController` 및 `AppDelegate` 파일을 Xcode 프로젝트.

6.  복사는 `www/cordova-1.6.1.js` 에 새로운 프로젝트에서 파일을 `www` 디렉터리 및 삭제 귀하 `www/cordova-1.5.0.js` 파일.

7.  에 코르 도우 바 스크립트 참조를 업데이트를 `www/index.html` 파일 (및 스크립트 참조를 포함 하는 기타 파일) 새를 가리키도록 `cordova-1.6.1.js` 파일.

8.  새로운 추가 `Cordova.plist` 파일을 프로젝트에. 이것은 코어 플러그인 서비스 이름은 통일 Cordova JavaScript 파일 (안 드 로이드와 블랙베리에서 그들을 일치 하도록 변경 해야 합니다 때문에 필요`cordova-js`).

9.  모든 설정, **플러그인** 및 **ExternalHosts** 항목에 새로운 당신의 **백업 Cordova.plist** 했다 통합`Cordova.plist`.

10. 당신은 당신의 백업에 있는 모든 프로젝트 관련 코드 통합 `AppDelegate.h` 와 `AppDelegate.m` 에 새로운 `AppDelegate` 파일. 모든 `UIWebViewDelegate` 또는 `CDVCommandDelegate` 에서 코드 `AppDelegate.m` 로 갈 필요가 `MainViewController.m` 지금 (해당 파일에서 주석 처리 섹션 참조).

11. 당신은 당신의 백업에 있는 모든 프로젝트 관련 코드 통합 `MainViewController.h` 및 `MainViewController.m` 를 새로운 MainViewController 파일.

12. 프로젝트 탐색기에서 프로젝트 아이콘을 클릭 하십시오, **프로젝트**를 선택한 다음 **빌드 설정** 탭을 선택 합니다.

13. 입력 **컴파일러 c / C + + / 오브 젝 티브-C** 검색 필드에.

14. **Apple LLVM 컴파일러 3.1** 값을 선택 합니다.

## 1.4. X 프로젝트 1.5.0 업그레이드

1.  코르 도우 바 1.5.0를 설치 합니다.

2.  새 프로젝트를 만들고 그것을 한 번 실행 합니다. 이 새 프로젝트에서 자산의 일부를 해야 합니다.

3.  복사는 `www/cordova-1.5.0.js` 에 새로운 프로젝트에서 파일을 `www` 디렉터리 및 삭제 귀하 `www/phonegap-1.4.x.js` 파일.

4.  에 코르 도우 바 스크립트 참조를 업데이트를 `www/index.html` 파일 (및 스크립트 참조를 포함 하는 기타 파일) 새로운 코르도바를 가리키도록 `cordova-1.5.0.js` 파일.

5.  찾을 `PhoneGap.framework` 프로젝트 탐색기에서 선택 합니다.

6.  **삭제** 키를 입력 하 고 삭제는 `PhoneGap.framework` 프로젝트 탐색기에서 참조.

7.  프로젝트 ( **파일 추가...** 시트) 파일을 추가 하는 시트 아래로 드롭 해야 **옵션-명령-한** 키 조합을 입력 합니다. **어떤 추가 된 폴더에 대 한 만든 그룹** 라디오 단추가 선택 되어 있는지 확인 합니다.

8.  폴더에가 서 다른 시트 아래로 드롭 해야 **Shift 명령 G** 키 조합을 입력 (에서 **폴더로 이동:** 시트).

9.  입력 `/Users/Shared/Cordova/Frameworks/Cordova.framework` 에 **폴더로 이동:** 시트 및 다음 **이동** 단추를 누릅니다.

10. **추가 파일** 시트에서 **추가** 버튼을 누릅니다.

11. 선택 `Cordova.framework` 프로젝트 탐색기에서.

12. **파일 관리자** 를 표시 하려면 **옵션-명령-1** 키 조합 입력.

13. **위치** 에 대 한 드롭 다운 메뉴에 대 한 **파일 관리자** 에서 **절대 경로** 선택.

14. 프로젝트 ( **파일 추가...** 시트) 파일을 추가 하는 시트 아래로 드롭 해야 **옵션-명령-한** 키 조합을 입력 합니다. **어떤 추가 된 폴더에 대 한 만든 그룹** 라디오 단추가 선택 되어 있는지 확인 합니다.

15. 폴더에가 서 다른 시트 아래로 드롭 해야 **Shift 명령 G** 키 조합을 입력 (에서 **폴더로 이동:** 시트).

16. 입력 `~/Documents/CordovaLib/Classes/deprecated` 에 **폴더로 이동:** 시트 및 다음 **이동** 단추를 누릅니다.

17. **추가 파일** 시트에서 **추가** 버튼을 누릅니다.

18. 당신의 `AppDelegate.h` , `AppDelegate.m` , 및 `MainViewController.h` 파일을 바꿉니다 전체 `#ifdef PHONEGAP_FRAMEWORK` 와 차단:
    
        #import "CDVDeprecated.h"
        

19. 프로젝트 탐색기에서 **프로젝트 아이콘** 을 클릭 하십시오, **대상**을 선택한 다음 **빌드 설정** 탭을 선택 합니다.

20. **프레임 워크 검색 경로** 대 한 검색.

21. 기존 값을 대체`/Users/Shared/Cordova/Frameworks`.

22. **전처리기 매크로** 대 한 검색.

23. 첫 번째 (결합 된) 값으로 값을 대체 **CORDOVA_FRAMEWORK = 예**.

24. **빌드 단계** 탭을 선택 합니다.

25. **스크립트 실행** 확장.

26. **코르 도우 바** 와 **PhoneGap** 의 모든 발생을 대체.

27. 찾기 당신의 `PhoneGap.plist` 프로젝트 탐색기에서 파일을 파일 이름에 입력 이름 편집 모드로 한 번 클릭 합니다.

28. 이름 바꾸기 `PhoneGap.plist` 에`Cordova.plist`.

29. 마우스 오른쪽 단추로 클릭 `Cordova.plist` **소스 코드 → 열기** 를 선택 하 고.

30. **옵션-명령-**f, 소스 윈도우의 왼쪽 상단에 드롭 다운에서 **대체** 를 선택 합니다.

31. 입력 `com.phonegap` 찾기 문자열에 대 한 및 `org.apache.cordova` 바꾸기 문자열에 대 한 다음 **모두 바꾸기** 단추를 누릅니다.

32. 바꾸기 문자열 찾기 문자열 및 **CDV** **PG** 를 입력 한 다음 **모두 바꾸기** 단추를 누릅니다.

33. **명령 B** 빌드를 누릅니다. 당신은 여전히 당신은 없애 수 있는 미래에 사용이 중단 된 (참조 `CDVDeprecated.h` . 예를 들어, 바꾸기 코드에서 사용할 클래스를 CDV * PG *).

## 1.4.1에 업그레이드 1.4.0 프로젝트

1.  코르 도우 바 1.4.1 설치.

2.  백업`MainViewController.m`.

3.  새 프로젝트를 만듭니다. 이 새 프로젝트에서 자산의 일부를 해야 합니다.

4.  복사는 `MainViewController.m` 이전 파일 교체 디스크에 1.4.0-based 프로젝트 디렉토리에 새 프로젝트에서 파일 (백업 파일 먼저에서 위의 2 단계).

5.  추가 `MainViewController.m` Xcode 프로젝트에 파일.

6.  당신은 당신의 백업에 있는 모든 프로젝트 관련 코드 통합 `MainViewController.m` 새 파일에.

7.  업데이트 된 `phonegap-1.4.0.js` 파일은 선택 사항, 아무것도 1.4.0 1.4.1 사이 자바에서 변경 되었습니다.

## 1.4.0을 1.3.0 업그레이드 프로젝트

1.  코르 도우 바 1.4.0을 설치 합니다.

2.  백업을 만들어 `AppDelegate.m` 및 `AppDelegate.h` 프로젝트에서.

3.  새 프로젝트를 만듭니다. 이 새 프로젝트에서 자산의 일부를 해야 합니다.

4.  (위의 2 단계에서 파일을 먼저 백업) 어떤 오래 된 파일을 대체 하는 디스크에 1.3.0-based 프로젝트 디렉토리에 새 프로젝트에서이 파일을 복사:
    
        AppDelegate.h AppDelegate.m MainViewController.h MainViewController.m MainViewController.xib
        

5.  모든 추가 `MainViewController` 파일을 Xcode 프로젝트.

6.  복사는 `www/phonegap-1.4.0.js` 에 새로운 프로젝트에서 파일을 `www` 디렉터리 및 삭제 귀하 `www/phonegap-1.3.0.js` 파일.

7.  에 코르 도우 바 스크립트 참조를 업데이트를 `www/index.html` 파일 (및 스크립트 참조를 포함 하는 기타 파일) 새를 가리키도록 `phonegap-1.4.0.js` 파일.

8.  아래에서 새 항목 추가 `Plugins` 에 당신의 `PhoneGap.plist` 파일. 키가 `com.phonegap.battery` 값은`PGBattery`.

9.  당신은 당신의 백업에 있는 모든 프로젝트 관련 코드 통합 `AppDelegate.h` 및 `AppDelegate.m` 를 새로운 AppDelegate 파일.

## 1.3.0에 1.2.0 업그레이드 프로젝트

1.  코르 도우 바 1.3.0 설치.

2.  백업을 만들어 `AppDelegate.m` 및 `AppDelegate.h` 프로젝트에서.

3.  새 프로젝트를 만듭니다. 이 새 프로젝트에서 자산의 일부를 해야 합니다.

4.  (위의 2 단계에서 파일을 먼저 백업) 어떤 오래 된 파일을 대체 하는 디스크에 1.2.0-based 프로젝트 디렉토리에 새 프로젝트에서이 파일을 복사:
    
        AppDelegate.h AppDelegate.m MainViewController.h MainViewController.m MainViewController.xib
        

5.  모든 추가 `MainViewController` 파일을 Xcode 프로젝트.

6.  복사는 `www/phonegap-1.3.0.js` 에 새로운 프로젝트에서 파일을 `www` 디렉터리 및 삭제 귀하 `www/phonegap-1.2.0.js` 파일.

7.  에 코르 도우 바 스크립트 참조를 업데이트를 `www/index.html` 파일 (및 스크립트 참조를 포함 하는 기타 파일) 새를 가리키도록 `phonegap-1.3.0.js` 파일.

8.  아래에서 새 항목 추가 `Plugins` 에 당신의 `PhoneGap.plist` 파일. 키가 `com.phonegap.battery` 값은`PGBattery`.

9.  당신은 당신의 백업에 있는 모든 프로젝트 관련 코드 통합 `AppDelegate.h` 및 `AppDelegate.m` 를 새로운 AppDelegate 파일.

## 업그레이드 1.1.0 1.2.0에 프로젝트

1.  코르 도우 바 1.2.0을 설치 합니다.

2.  백업을 만들어 `AppDelegate.m` 및 `AppDelegate.h` 프로젝트에서.

3.  새 프로젝트를 만듭니다. 이 새 프로젝트에서 자산의 일부를 해야 합니다.

4.  (위의 2 단계에서 파일을 먼저 백업) 어떤 오래 된 파일을 대체 하는 디스크에 1.1.0-based 프로젝트 디렉토리에 새 프로젝트에서이 파일을 복사:
    
        AppDelegate.h AppDelegate.m MainViewController.h MainViewController.m MainViewController.xib
        

5.  모든 추가 `MainViewController` 파일을 Xcode 프로젝트.

6.  복사는 `www/phonegap-1.2.0.js` 에 새로운 프로젝트에서 파일을 `www` 디렉터리 및 삭제 귀하 `www/phonegap-1.1.0.js` 파일.

7.  에 코르 도우 바 스크립트 참조를 업데이트를 `www/index.html` 파일 (및 스크립트 참조를 포함 하는 기타 파일) 새를 가리키도록 `phonegap-1.2.0.js` 파일.

8.  아래에서 새 항목 추가 `Plugins` 에 당신의 `PhoneGap.plist` 파일. 키가 `com.phonegap.battery` 값은`PGBattery`.

9.  당신은 당신의 백업에 있는 모든 프로젝트 관련 코드 통합 `AppDelegate.h` 및 `AppDelegate.m` 를 새로운 AppDelegate 파일.

## 1.1.0에 1.0.0 업그레이드 프로젝트

1.  코르 도우 바 1.1.0를 설치 합니다.

2.  백업을 만들어 `AppDelegate.m` 및 `AppDelegate.h` 프로젝트에서.

3.  새 프로젝트를 만듭니다. 이 새 프로젝트에서 자산의 일부를 해야 합니다.

4.  (위의 2 단계에서 파일을 먼저 백업) 어떤 오래 된 파일을 대체 하는 디스크에 1.0.0-based 프로젝트 디렉토리에 새 프로젝트에서이 파일을 복사:
    
        AppDelegate.h AppDelegate.m MainViewController.h MainViewController.m MainViewController.xib
        

5.  모든 추가 `MainViewController` 파일을 Xcode 프로젝트.

6.  복사는 `www/phonegap-1.1.0.js` 에 새로운 프로젝트에서 파일을 `www` 디렉터리 및 삭제 귀하 `www/phonegap-1.0.0.js` 파일.

7.  에 코르 도우 바 스크립트 참조를 업데이트를 `www/index.html` 파일 (및 스크립트 참조를 포함 하는 기타 파일) 새를 가리키도록 `phonegap-1.1.0.js` 파일.

8.  아래에서 새 항목 추가 `Plugins` 에 당신의 `PhoneGap.plist` 파일. 키가 `com.phonegap.battery` 값은`PGBattery`.

9.  당신은 당신의 백업에 있는 모든 프로젝트 관련 코드 통합 `AppDelegate.h` 및 `AppDelegate.m` 를 새로운 AppDelegate 파일.

## 업그레이드 0.9.6 1.0.0에 프로젝트

1.  코르 도우 바 1.0.0를 설치 합니다.

2.  백업을 만들어 `AppDelegate.m` 및 `AppDelegate.h` 프로젝트에서.

3.  새 프로젝트를 만듭니다. 이 새 프로젝트에서 자산의 일부를 해야 합니다.

4.  (위의 2 단계에서 파일을 먼저 백업) 어떤 오래 된 파일을 대체 하는 디스크에 0.9.6-based 프로젝트 디렉토리에 새 프로젝트에서이 파일을 복사:
    
        AppDelegate.h AppDelegate.m MainViewController.h MainViewController.m MainViewController.xib
        

5.  모든 추가 `MainViewController` 파일을 Xcode 프로젝트.

6.  복사는 `www/phonegap-1.0.0.js` 에 새로운 프로젝트에서 파일을 `www` 디렉터리 및 삭제 귀하 `www/phonegap-0.9.6.js` 파일.

7.  에 코르 도우 바 스크립트 참조를 업데이트를 `www/index.html` 파일 (및 스크립트 참조를 포함 하는 기타 파일) 새를 가리키도록 `phonegap-1.0.0.js` 파일.

8.  아래에서 새 항목 추가 `Plugins` 에 당신의 `PhoneGap.plist` 파일. 키가 `com.phonegap.battery` 값은`PGBattery`.

9.  당신은 당신의 백업에 있는 모든 프로젝트 관련 코드 통합 `AppDelegate.h` 및 `AppDelegate.m` 를 새로운 AppDelegate 파일.