* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# 파이어 폭스 OS 플랫폼 가이드

이 가이드에서는 파이어 폭스 OS 장치에 대 한 코르도바 애플 리 케이 션을 만들 다음 테스트 하 고 게시 그 애플 리 케이 션 개발 환경을 설정 하는 방법을 설명 합니다.

## 요구 사항 및 지원

파이어 폭스 OS 애플 리 케이 션은 기본적으로 그냥 웹 애플 리 케이 션, 응용 프로그램에 대 한 메타 데이터를 정의 하 고 파이어 폭스 OS 기기에 설치 될 수 있도록 허용 하는 manifest.webapp 파일의 추가 함께. 코르도바를 지 원하는 모든 플랫폼을 사용할 수 있습니다.웹 응용 프로그램에 대 한 자세한 내용을 찾으려면, [MDN][1] 에 [애플 리 케이 션 센터][2] 상담.

 [1]: https://developer.mozilla.org/en-US/
 [2]: https://developer.mozilla.org/en-US/Apps

## 설치 및 환경 설정

먼저 [Node.js][3]를 설치 후 코르도바 패키지 설치 다음과 같이:

 [3]: http://nodejs.org/

    $ npm install -g cordova
    

다음으로 샘플 코르도바 응용 프로그램을 만든 다음 새로 만든 디렉토리로 이동:

    $ cordova create test-app
    $ cd test-app
    

다음으로 응용 프로그램을 지원 되는 플랫폼으로 파이어 폭스 OS을 추가 합니다.

    $ cordova platform add firefoxos
    

이 현재 www 디렉토리 안에 Firefox 매니페스트 파일 (manifest.webapp)는 제외 하 고 동일을 본다 플랫폼/firefoxos/www 디렉토리에 파이어 폭스 OS 애플 리 케이 션을 만듭니다.

## 응용 프로그램 개발

이 시점에서 당신이 갈 준비가-당신이 원하는 무엇이 든 될 귀하의 응용 프로그램을 테스트-애플 리 케이 션/www 안에 코드를 변경 합니다. 추가 사용 하 여 "코르도바 플러그인", 예를 들어 응용 프로그램에 [지원 되는 플러그인을]() 추가할 수 있습니다.

    cordova plugin add org.apache.cordova.device
    cordova plugin add org.apache.cordova.vibration
    

또한 사용자 지정 manifest.webapp 파일에 다음 적어도 포함 해야 테스트 애플 리 케이 션/www 디렉토리를 추가 해야:

    { 
        "launch_path":"/index.html",
        "installs_allowed_from":["*"],
        "version":"0.0.1",
        "name":"My app",
        "pkgName":"io.cordova.hellocordova",
        "icons": {
            "128": "/img/logo.png"
        }
    }
    

파이어 폭스 응용 프로그램 매니페스트에 대 한 자세한 내용은 MDN에 [응용 프로그램 매니페스트][4] 를 읽을.

 [4]: https://developer.mozilla.org/en-US/Apps/Developing/Manifest

응용 프로그램 코드를 작성 하는 경우 변경 내용을 사용 하 여 프로젝트에 추가한 파이어 폭스 OS 애플 리 케이 션에 배포

    $ cordova prepare
    

참고 빌드 (예: 코르도바 빌드) 단계 필요 하지 않습니다 파이어 폭스 OS 플랫폼에 배포 하는 경우 파이어 폭스 OS 애플 리 케이 션은 HTML 기반 및 따라서 없는 컴파일된.

## 테스트 및 디버깅

파이어 폭스 OS [응용 프로그램 관리자][5] 를 사용 하 여 응용 프로그램을 테스트할 수 있습니다..

 [5]: https://developer.mozilla.org/en-US/Firefox_OS/Using_the_App_Manager

응용 프로그램 관리자를 테스트 장치/시뮬레이터에 연결 하는 경우 "추가 패키지 애플 리 케이 션" 옵션을 선택한 다음 테스트-애플 리 케이 션/플랫폼/firefoxos/www를 가리킨 확인/디렉토리 관리자 인터페이스에서 응용 프로그램을 포함 하도록 합니다.

여기에 대 한 ("업데이트" 버튼)와 테스트 장치/시뮬레이터에서 응용 프로그램을 설치할 수 있습니다. 다음 응용 프로그램을 디버깅 하 고 해당 코드를 편집할 수 단추 라이브 "디버그"를 사용 하 여.

참고: 응용 프로그램을 게시 하기 전에 당신이 고려해 야 [응용 프로그램 유효성 검사기][6] 를 사용 하 여 유효성 검사.

 [6]: https://marketplace.firefox.com/developers/validator

## 파이어 폭스 시장에 귀하의 응용 프로그램 게시

파이어 폭스 마켓 플레이스에 앱을 제출 하거나 직접 게시할 수 있습니다. 이 작업을 수행 하는 방법에 대 한 자세한 내용은 MDN에 [파이어 폭스 시장 영역][7] 을 방문합니다 [응용 프로그램 게시 옵션][8] 시작 하기 가장 좋은 장소입니다.

 [7]: https://developer.mozilla.org/en-US/Marketplace
 [8]: https://developer.mozilla.org/en-US/Marketplace/Publishing/Publish_options