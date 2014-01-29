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

# 플러그인 개발 가이드

*플러그인* 코르도바 webview는 앱 실행 되는 네이티브 플랫폼 통신할 렌더링 수 있도록 삽입 된 코드의 패키지입니다. 플러그인은 일반적으로 웹 기반 애플 리 케이 션을 사용할 수 없습니다 장치 및 플랫폼 기능에 대 한 액세스를 제공 합니다. 모든 주요 코르도바 API 기능, 플러그인으로 구현 및 많은 다른 NFC 통신, 바코드 스캐너와 같은 기능을 사용 또는 일정에 맞게 인터페이스 사용할 수 있습니다.

각 지원 되는 플랫폼에 대 한 해당 네이티브 코드 라이브러리와 함께 단일 자바 인터페이스를 구성 하는 플러그인. 네이티브 플랫폼을 다시 한 훨씬 더 복잡 한 기능을 구축 하는 모델로 사용할 수 있는 자바 스크립트에서 문자열을 전달 하는 간단한 *에코* 플러그인-이 섹션 단계. 이 섹션에서는 기본 플러그인 구조와 외부와 접한 자바 인터페이스에 설명합니다. 각 해당 하는 기본 인터페이스에 대 한이 섹션의 끝에 목록 참조.

뿐만 아니라 이러한 지침, 지도 대 한 [기존의 플러그인을][1] 살펴 것이 좋습니다 플러그인을 쓸 준비를 할 때.

 [1]: https://github.com/apache/cordova-android/tree/master/framework/src/org/apache/cordova

## 플러그인을 구축

응용 프로그램 개발자는 CLI를 사용 하 여 `plugin add` (설명 명령줄 인터페이스) 명령을 프로젝트에 플러그인을 적용 하. 해당 명령에 대 한 인수 플러그인 코드가 포함 된 *git* 저장소에 대 한 URL입니다. 이 예제에서는 코르도바의 장치 API를 구현합니다.

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-device.git
    

플러그인 저장소를 최상위 기능 해야 합니다 `plugin.xml` 매니페스트 파일. 이 파일을 구성 하는 사항은 플러그인 사양에서 사용할 수 있는 많은 방법이 있다.입니다. 이 약식된 버전의는 `Device` 모델을 사용 하는 간단한 예제를 제공 하는 플러그인:

        <?xml version="1.0" encoding="UTF-8"?>
        <plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
                id="org.apache.cordova.device" version="0.2.3">
            <name>Device</name>
            <description>Cordova Device Plugin</description>
            <license>Apache 2.0</license>
            <keywords>cordova,device</keywords>
            <js-module src="www/device.js" name="device">
                <clobbers target="device" />
            </js-module>
            <platform name="ios">
                <config-file target="config.xml" parent="/*">
                    <feature name="Device">
                        <param name="ios-package" value="CDVDevice"/>
                    </feature>
                </config-file>
                <header-file src="src/ios/CDVDevice.h" />
                <source-file src="src/ios/CDVDevice.m" />
            </platform>
        </plugin>
    

최상위 `plugin` 태그의 `id` 특성 같은 리버스 도메인 형식을 사용 하 여 그들은 애플 리 케이 션 있어 추가 플러그인 패키지를 식별 합니다. `js-module`태그는 일반적인 자바 인터페이스에 경로 지정 합니다. `platform`에 대 한 네이티브 코드의 해당 집합을 지정 하는 태그는 `ios` 이 경우 플랫폼. `config-file`태그를 캡슐화 한 `feature` 플랫폼 특정 주입 태그 `config.xml` 파일 추가 코드 라이브러리의 플랫폼에 게. `header-file`와 `source-file` 태그 라이브러리의 구성 요소 파일을 경로 지정 합니다.

## 플러그인 확인

사용할 수 있는 `plugman` 플러그인 설치 올바르게 각 플랫폼에 대 한 여부를 확인 하는 유틸리티. 설치 `plugman` 다음 [노드][2] 명령:

 [2]: http://nodejs.org/

        $ npm install -g plugman
    

최상위 같은 유효한 응용 프로그램 소스 디렉터리 필요한 `www` 명령줄 인터페이스에 설명 된 대로 기본 CLI에서 생성 된 프로젝트에 포함 하는 디렉터리. 확인 응용 프로그램의 `index.html` 홈 페이지 참조 플러그인의 자바 인터페이스의 이름을 같은 소스 디렉토리에 마치:

        <script src="myplugin.js"></script>
    

IOS 종속성 로드 제대로 여부를 테스트 하려면 다음 명령을 실행:

        $ plugman -platform ios /path/to/my/project/www /path/to/my/plugin
    

에 대 한 내용은 `plugman` 옵션, 플러그인 관리를 사용 하 여 Plugman를 참조 하십시오. 실제로 플러그인을 *디버깅* 하는 방법에 대 한 정보를이 페이지의 맨 아래에 나열 된 각 플랫폼의 기본 인터페이스 참조.

## 자바 스크립트 인터페이스

자바 스크립트 플러그인의 아마도 가장 중요 한 부분 만드는 전면 인터페이스를 제공 합니다. 그러나 당신이 좋아하는, 하지만 호출 해야 플러그인의 자바 스크립트 구조 수 있습니다 `cordova.exec` 다음 구문을 사용 하 여 네이티브 플랫폼 통신할 수:

        cordova.exec(function(winParam) {},
                     function(error) {},
                     "service",
                     "action",
                     ["firstArgument", "secondArgument", 42, false]);
    

여기 일 하는 방법은 각 매개 변수:

*   `function(winParam) {}`: 성공 콜백 함수입니다. 가정 당신의 `exec` 호출이 성공적으로 완료 되 면,이 함수에 전달 된 매개 변수 함께 실행 합니다.

*   `function(error) {}`: 오류 콜백 함수입니다. 작업이 성공적으로 완료 되지 않은 경우이 함수는 선택적 오류 매개 변수와 함께 실행 합니다.

*   `"service"`: 네이티브 쪽에 전화 서비스 이름입니다. 이는 더 많은 정보는 아래에 나열 된 기본 가이드에서 사용할 수 있는 기본 클래스에 해당 합니다.

*   `"action"`: 네이티브 측에 전화를 작업 이름입니다. 이 일반적으로 기본 클래스 메서드에 해당합니다. 아래에 나열 된 기본 가이드를 참조 하십시오.

*   `[/* arguments */]`: 네이티브 환경에 전달할 인수 배열입니다.

## 샘플 자바 스크립트

이 예제에서는 플러그인의 자바 인터페이스를 구현 하는 방법을 보여 줍니다.

        window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

이 예제에서 플러그인 붙어서 하는 `window` 개체는 `echo` 기능, 플러그인 사용자 다음과 같이 부를 것 이다:

        window.echo("echome", function(echoValue) {
            alert(echoValue == "echome"); // should alert true.
        });
    

보고에 대 한 마지막 세 인수는 `cordova.exec` 기능. 첫 번째 호출에서 `Echo` *서비스*, 클래스 이름. 두 번째 요청은 `echo` *작업*, 그 클래스 내 메서드. 세 번째는 인수는 에코 문자열이 포함 된 배열에서 `window.echo` 함수의 첫 번째 매개 변수.

에 전달 되는 성공 콜백 `exec` 콜백 함수에 대 한 참조 단순히 `window.echo` 걸립니다. 네이티브 플랫폼 오류 콜백 발생 하는 경우 그것은 단순히 성공 콜백을 호출 하 고 기본 문자열에 전달.

## 네이티브 인터페이스

일단 귀하의 플러그인에 대 한 자바 스크립트를 정의 적어도 하나의 네이티브 구현을 보완 해야 합니다. 각 플랫폼에 대 한 세부 정보는 아래와 위의 간단한 에코 플러그인 예제를 바탕으로 각:

*   아마존 화재 OS 플러그인
*   안 드 로이드 플러그인
*   iOS 플러그인
*   블랙베리 10 플러그인
*   Windows Phone 플러그인

Tizen 플랫폼 플러그인을 지원 하지 않습니다.

## 게시 플러그인

귀하의 플러그인을 개발 하는 일단 당신이 게시 하 고 커뮤니티와 함께 그것을 공유 할 수 있습니다. 코르 도우 바 레지스트리를 귀하의 플러그인을 게시할 수 있습니다 (기준 [ `npmjs` ][3]) 또는 다른 `npmjs` -레지스트리를 기반으로. 다른 개발자가 사용 하 여 자동으로 설치할 수 있습니다 `plugman` 또는 코르도바 CLI. (대 한 자세한 내용은 각 개발 경로, 플러그인 관리 하는 명령줄 인터페이스를 사용 하 여 Plugman를 참조.)

 [3]: https://github.com/isaacs/npmjs.org

사용 해야 하는 플러그인을 게시 하는 `plugman` 도구와 다음 단계를 통해 이동:

    $ plugman adduser # that is if you don't have an account yet
    $ plugman publish /path/to/your/plugin
    

그 거 야!

실행 `plugman --help` 다른 사용할 수 있는 레지스트리 기반 명령 목록을 보여 줍니다.