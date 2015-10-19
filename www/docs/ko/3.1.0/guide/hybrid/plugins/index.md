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

title: 플러그인 개발 가이드
---

# 플러그인 개발 가이드

코르 도우 바 플러그인 교량 WebView 전원 코르도바 애플리케이션과 네이티브 플랫폼 코르도바 응용 프로그램 간에 기능의 비트에서 실행 됩니다. 플러그인은 모든 플랫폼과 자바 스크립트를 호출 하는 플랫폼 특정 플러그인 인터페이스 다음 기본 구현에서 사용 되는 단일 자바 인터페이스의 구성 됩니다. 모든 핵심 코르도바 Api는이 아키텍처를 사용 하 여 구현 됩니다.

이 [가이드](../../../index.html) 단계 간단한 에코 플러그인을 작성 하는 과정은 자바 스크립트에서 문자열을 전달 하 고 지원 되는 플랫폼에 대 한 네이티브 환경에 보냅니다. 네이티브 코드는 다음 콜백 플러그인의 자바 스크립트 내부에 다시 동일한 문자열을 반환합니다.

이 가이드는 더 복잡 한 플러그인 작성 구축할 수 있습니다 충분 한 개요를 제공 합니다.

## 자바 스크립트

어떤 플러그인은 자바 스크립트입니다. 코르 도우 바 이므로 사용할 수 있는 이유 개발자 사용 및 쓰기 자바, 아니라 목표-C, 자바, C# 하지. 귀하의 플러그인에 대 한 JavaScript 인터페이스 코르도바 플러그인의 전면 그리고 틀림 없이 가장 중요 한 부분입니다.

그러나 당신이 좋아하는 플러그인의 자바 스크립트 구조 수 있습니다. 코르 도우 바 자바 스크립트와 네이티브 환경 간의 통신에 사용 *해야 합니다* 한 가지는 `cordova.exec` 기능. 여기에 예가입니다.

        cordova.exec(function(winParam) {}, function(error) {}, "service",
                     "action", ["firstArgument", "secondArgument", 42,
                     false]);
    

매개 변수는 아래의 자세한 [위치](../../../cordova/geolocation/Position/position.html):

*   `function(winParam) {}`: 성공 함수 콜백입니다. 가정 당신의 `exec` 호출이 성공적으로 완료 되,이 기능 (필요에 따라 매개 변수를 다시 전달할)와 함께 호출 됩니다.

*   `function(error) {}`: 오류 함수 콜백입니다. 작업이 성공적으로 완료 되지 않으면이 함수 (선택적으로 오류 매개 변수)와 함께 호출 됩니다.

*   `"service"`: 네이티브 쪽에서 호출을 서비스 이름입니다. 이 대 한 자세한 정보는 아래에 나열 된 기본 가이드에서 사용할 수 있는 기본 클래스에 매핑됩니다.

*   `"action"`: 작업 이름 호출입니다. 이 네이티브 클래스 수신에 의해 선택 되는 `exec` 호출 및 플랫폼에 따라 기본적으로 클래스의 메서드를 지도. 아래에 나열 된 기본 [가이드](../../../index.html) 정보를 제공 합니다.

*   `[/* arguments */]`: 네이티브 환경에 전달할 인수입니다.

### 에코 플러그인 자바 스크립트 예제

        window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

이에 하자 다이빙. 플러그인에 붙어서 `window` , 구체적으로 `echo` 기능. 플러그인 사용자가 다음 다음과 같이 사용할:

        window.echo("echome", function(echoValue) {
            alert(echoValue == "echome"); // should alert true.
        });
    

먼저 보자 한 마지막 세 인수는 `exec` 기능. 전화 것입니다 우리는 `Echo` "서비스" 요청는 `echo` "액션", 그리고 인수 echo 문자열이 포함 된 배열을 전달로 첫 번째 매개 변수는 `window.echo` 기능.

에 전달 되는 성공 콜백 `exec` 단순히 참조를 작동 하는 `window.echo` 걸립니다. 우리가 조금 더 오류 콜백: 네이티브 쪽 오류 콜백 떨어져 발생 하는 경우 우리가 단순히 성공 콜백을 호출 하 고 그것으로 "default" 문자열을 전달 합니다.

## 플러그인 명세

코르 도우 바는 플러그인 사양 안 드 로이드, iOS, 블랙베리 10 및 Windows Phone 플랫폼 플러그인의 자동된 설치를 사용 하려면 사용할 수 있습니다. 특정 방식으로 플러그인을 구성 하 고 추가 `plugin.xml` 매니페스트 [파일](../../../cordova/file/fileobj/fileobj.html), 명령줄 도구를 통해 귀하의 플러그인을 설치 하는 사용자를 활성화할 수 있습니다.

*   [플러그인 명세](../../../plugin_ref/spec.html)

## 네이티브

일단 귀하의 플러그인에 대 한 자바 스크립트를 정의 적어도 하나의 네이티브 구현을 보완 해야 합니다. 이렇게 각 플랫폼에 대 한 세부 정보는 다음과 같습니다. 이 가이드는 위에서 설명한 간단한 에코 플러그인 예제에 건설을 계속.

*   [안 드 로이드 플러그인](../../platforms/android/plugin.html)
*   [블랙베리 플러그인](../../platforms/blackberry/plugin.html)
*   [블랙베리 10 플러그인](../../platforms/blackberry10/plugin.html)
*   [iOS 플러그인](../../platforms/ios/plugin.html)
*   [Windows Phone 플러그인](../../platforms/wp8/plugin.html)

Tizen 플랫폼은 현재 플러그인을 지원 하지 않습니다.

## 게시 플러그인

일단 귀하의 플러그인을 개발 하려는 그것을 간행 하 고 지역 사회와 공유. 당신은 코르도바 레지스트리 ( [npmjs][1]기준)에 귀하의 플러그인을 게시할 수 있습니다 또는 다른 npmjs 레지스트리를 기반으로 합니다. 사용자가 plugman 또는 코르도바 cli를 사용 하 여 자동으로 설치할 수 있을 것입니다.

 [1]: https://github.com/isaacs/npmjs.org

플러그인을 게시 하려면 plugman 도구를 사용 하 여 다음 단계를 통해 이동 해야 합니다.

    $ plugman adduser # that is if you don't have an account yet
    $ plugman publish /path/to/your/plugin
    

그 거 야!

다른 레지스트리 기반 명령을 사용할 수 있습니다 및 `plugman --help` 어떤 명령을 사용할 수 있습니다 그리고 그들을 사용 하는 방법의 목록을 줄 것 이다.