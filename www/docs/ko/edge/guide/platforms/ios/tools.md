---
license: Licensed to the Apache Software Foundation (ASF) under one
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
---

# iOS 셸 도구 가이드

이 가이드에는 코르도바의 플랫폼을 중심으로 셸 도구 세트를 사용 하 여 iOS 애플 리 케이 션을 개발 하는 방법을 보여 줍니다. 이 개발 경로 개요에서 설명한 명령줄 인터페이스에 설명 된 크로스 플랫폼 CLI 도구 보다 iOS에 대 한 개발 옵션의 넓은 범위를 제공할 수 있습니다. 예를 들어, 네이티브 구성 요소와 함께 사용자 지정 코르도바 WebView를 배포 하는 경우 셸 도구를 사용 해야 합니다. 개발 경로 중 하나를 사용 하기 전에 먼저 구성 해야 SDK 환경 iOS 플랫폼 가이드에에서 설명 된 대로. 이러한 도구는 Xcode의 명령줄 도구에 의존와 같은 `xcode-select` 및`xcodebuild`.

IOS 위한 쉘 도구를 사용 하려면 [cordova.apache.org][1]에서 코르도바를 다운로드. 다운로드는 각 플랫폼에 대 한 별도 아카이브를 포함합니다. 대상으로 하 고 싶은 각 확장 `ios` 이 경우. 관련 도구는 일반적으로 최상위 수준에서 사용할 수 있는 `bin` 자세한 지시 사항에 대 한 디렉터리, 그렇지 않으면 **README** 파일을 참조 하십시오.

 [1]: http://cordova.apache.org

이러한 도구를 사용 하 여 작성, 구축 및 iOS 애플 리 케이 션을 실행 수 있습니다. 모든 플랫폼에 걸쳐 플러그인 기능을 활성화 하는 추가 명령줄 인터페이스에 대 한 정보를 관리 플러그인을 사용 하 여 Plugman를 참조 하십시오. 플러그인을 개발 하는 방법에 대 한 내용은 응용 프로그램 플러그인을 참조 하십시오.

## 프로젝트 만들기

실행은 `create` 프로젝트, 리버스 도메인 스타일 패키지 식별자 및 응용 프로그램의 표시 이름에 대 한 기존 경로 지정 하는 명령을.

        $ ./path/to/cordova-ios/bin/create /path/to/my_new_project com.example.project_name ProjectName
    

## 프로젝트 빌드

        $ /path/to/my_new_project/cordova/build
    

## 에뮬레이터에서 응용 프로그램을 실행

        $ /path/to/my_new_project/cordova/run --emulator
    

## 장치에서 응용 프로그램을 실행

        $ /path/to/my_new_project/cordova/run --device
    

## 응용 프로그램 서명

서명, iOS 애플 리 케이 션을 배포, 인증서 만들고 [iOS 개발자 라이브러리에서][2] 프로 파일을 프로 비전에 대 한 자세한 내용은.

 [2]: https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/ConfiguringYourApp/ConfiguringYourApp.html

코르도바에서 응용 프로그램을 서명 해야 다음: * 코드 서명 정체성 (`-codeSignIdentity`): [XCode를 사용 하 여][3] 정체성을 서명 하는 새로운 iOS를 만들 수 있으며 키체인에 추가. 서명 id-일반적으로 배포 또는 개발, 코드의 유형의 여기에 지정 해야 합니다.

 [3]: https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/MaintainingCertificates/MaintainingCertificates.html#//apple_ref/doc/uid/TP40012582-CH31-SW6

*   프로비저닝 프로 파일 (`-provisioningProfile`): [애플 회원 센터를 사용 하 여][4] 프로비저닝 프로 파일을 만들 수 있습니다. 컴퓨터에 프로비저닝 프로 파일을 다운로드 하 고 그것을 등록 하는 XCode에서 그것을 실행. 여기 당신의 Mac에 복사: ~/Library/MobileDevice/Provisioning\ 프로필 /. 텍스트 편집기에서 열고, 여기에 지정 하는 UUID를 찾을 수 있습니다.

*   코드 서명 리소스 규칙 (`-codeSignResourceRules`) (선택 사항): 사용자 지정 서명 리소스 규칙을 지정할 수 있습니다.

 [4]: https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/MaintainingProfiles/MaintainingProfiles.html#//apple_ref/doc/uid/TP40012582-CH30-SW61

위의 `빌드` 또는 `실행` 스크립트에 명령줄 인수를 사용 하 여 이러한 매개 변수를 지정할 수 있습니다.

        $ /path/to/my_new_project/cordova/build --codeSignIdentitiy="iPhone Distribtion" --provisioningProfile="926c2bd6-8de9-4c2f-8407-1016d2d12954" 
    

양자 택일로, (`-buildConfig`) 인수를 사용 하 여 빌드 구성 파일 (build.json)에서 그들을 지정할 수 있습니다. 빌드 구성 파일의 예제는 다음과 같습니다.

    {
         "ios": {
             "debug": {
                 "codeSignIdentitiy": "iPhone Development",
                 "provisioningProfile": "926c2bd6-8de9-4c2f-8407-1016d2d12954",
             },
             "release": {
                 "codeSignIdentitiy": "iPhone Distribution"
                 "provisioningProfile": "70f699ad-faf1-4adE-8fea-9d84738fb306",
             }
         }
     }
    

또한 혼합 하 고 일치 명령줄 인수 및 매개 변수 build.json 파일에서 지원이 됩니다. 명령줄 인수에서 값 우선 순위를 얻을 것 이다.

## 로깅

        $ /path/to/my_new_project/cordova/log