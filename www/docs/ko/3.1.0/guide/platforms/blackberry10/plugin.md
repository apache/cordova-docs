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

title: 블랙베리 10 플러그인
---

# 블랙베리 10 플러그인

이것은 코르도바를 위한 플러그인 개발 가이드의 연속 이다. 일단 검토 했으면 그 내용을 지금 하자 우리가 블랙베리 10 플랫폼에 대 한 에코 플러그인 필요가 있는 것 좀 봐. 리콜 에코 플러그인 기본적으로 뭐 든 사용자 문자열 반환 제공 하는 `window.echo` 기능:

    window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

Cordova에 대 한 네이티브 BlackBerry 10 플러그인 자바 스크립트 코드를 포함 하 고 네이티브 코드 포함 될 수도 있습니다. 에코 플러그인 예제에서는 자바에서 기본 기능을 호출 하는 방법을 보여 줍니다. 네이티브와 JavaScript 코드는 JNEXT에서 제공 하는 프레임 워크를 통해 서로 통신 합니다. 모든 플러그인 포함 되어야 합니다는 `plugin.xml` [파일](../../../cordova/file/fileobj/fileobj.html).

## 귀하의 플러그인의 네이티브 부분을 만들기

귀하의 플러그인의 네이티브 부분을 만들기 위해 블랙베리 10 NDK IDE 열고 선택 [파일](../../../cordova/file/fileobj/fileobj.html) > 새로운 > 블랙베리 프로젝트 > 기본 확장 > 블랙베리 WebWorks. 원하는 프로젝트 이름을 입력 / 위치와 클릭 마무리.

IDE에 의해 만들어진 프로젝트 메모리 플러그인에 대 한 샘플 코드가 들어 있습니다. 대체 하거나 자신의 기능을 포함 하도록이 파일을 수정할 수 있습니다.

*   `*name*_js.hpp`: JNEXT 코드 c + + 헤더입니다.

*   `*name*_js.cpp`: JNEXT c + + 코드입니다.

프로젝트의 공용 디렉터리에 플러그인 헤더 파일에 JNEXT 확장을 위한 기본 인터페이스를 볼 수 있습니다. 또한 상수 및 네이티브 코드에서 사용할 수 있는 유틸리티 함수가 포함 되어 있습니다. 귀하의 플러그인은 plugin.h에 정의 된 JSExt에서 파생 되어야 합니다. 즉, 다음과 같은 클래스를 구현 해야 합니다.

    JSExt 클래스 {공공: 가상 ~JSExt() ();
        가상 문자열 InvokeMethod (const 문자열 & strCommand) = 0;
        가상 bool CanDelete (void) = 0;
    개인: 대 m_id;
    };
    

따라서, 확장 plugin.h 헤더 파일을 포함 해야 합니다. 에코 예제에 사용 JSExt 다음과 같이 echo_js.hpp 파일에:

    #include ".../ public/plugin.h "#include < string > #ifndef ECHO_JS_H_ #define ECHO_JS_H_ 에코 클래스: 공용 JSExt {공공: 명시적 에코 (const 대 & id);
        가상 ~ echo ();
        가상 대 InvokeMethod (const 대 & 명령);
        가상 bool CanDelete();
    개인: 대 m_id;
    };
    
    #endif / / ECHO_JS_H_
    

`m_id`이 개체의 JNEXT id를 포함 하는 특성입니다. Id는 클래스 생성자에 인수로 전달 됩니다. 네이티브에서 자바 스크립트 쪽에 이벤트를 실행 하는 데 필요 합니다. 자세한 방법은 JNEXT 네이티브 개체를 삭제할 수 있는지 여부를 확인 하는 데 사용 됩니다. InvokeMethod 함수는이 특정 개체의 메서드를 호출 하려면 JavaScript에서 요청에서 결과적으로 호출 됩니다. 이 함수에 유일한 인수는이 메서드가 실행 되는 네이티브 개체의 메서드를 결정 하기 위해 구문 분석 되어야 합니다 자바 스크립트에서 전달 된 문자열입니다. 지금 우리는 echo_js.cpp에서 이러한 함수를 구현합니다. 에코 예 우리 InvokeMethod 함수 다음과 같이 구현할:

    Echo::InvokeMethod 문자열 (const 문자열 & 명령) {//parse 명령과 문자열 int 인덱스에서 args = command.find_first_of("");
        문자열 strCommand = command.substr (0 인덱스);
        strValue string command.substr = (인덱스 + 1, command.length());
    
        / / 실행 되는 함수를 결정 하는 경우 (strCommand "에코" = =) {반환 strValue;
        } 다른 {반환 "지원 되지 않는 방법";
        }
    }
    

기본 플러그인 또한 다음 콜백 함수를 구현 해야 합니다.

*   `extern char * onGetObjList (void);`

*   `extern JSExt * onCreateObject (const 문자열 strClassName, const 문자열 & strObjId);`

`onGetObjList`함수 클래스 JNEXT에서 지 원하는 쉼표로 구분 된 목록을 반환 합니다. JNEXT이이 함수를 사용 하 여 JNEXT 인스턴스화할 수 있는 클래스의 집합을 결정 합니다. 우리의 에코 플러그인에서 왔습니다 다음 `echo_js.cpp` :

    char * onGetObjList() {정적 char 이름 = "에코";
        반환 이름;
    }
    

`onCreateObject`함수 2 매개 [변수](../../../plugin_ref/spec.html). 첫 번째 매개 변수는 자바 스크립트 측면에서 생성 하는 클래스의 이름. 유효한 이름은에서 반환 되는 `onGetObjList` . 두 번째 매개 변수는 클래스에 대 한 고유한 개체 id입니다. 이 메서드는 만든된 플러그인 개체에 대 한 포인터를 반환합니다. 우리의 에코 플러그인에서 왔습니다 다음 `echo_js.cpp` :

    JSExt * onCreateObject (const 문자열 className, const 문자열 & id) {경우 (className = = "에코") {반환 새로운 Echo(id);
        }; NULL을 반환
    }
    

## 귀하의 플러그인의 자바 부분 만들기

귀하의 플러그인의 자바 부분 다음 파일을 포함 해야 합니다.

*   `client.js`:이 클라이언트 쪽 간주 되며 코르도바 응용 프로그램에서 호출할 수 있는 API를 포함 되어 있습니다. 에 API `client.js` 호출 하면 호출을 `index.js` . 에 API `client.js` 또한 콜백 함수는 콜백을 발생 하는 이벤트에 [연결](../../../cordova/connection/connection.html) 합니다.

*   `index.js`: 코르 도우 바 로드 `index.js` 및 cordova.exec 다리를 통해 액세스할 수 있습니다. `client.js`파일에서 API 호출 하는 `index.js` 파일을 차례로 네이티브 쪽와 통신 하는 JNEXT를 호출 하 게 합니다.

클라이언트와 서버 측 ( `client.js` 및 `index.js` )를 통해 상호 작용 하는 `Cordova.exec` 기능. 그래서, `client.js` 호출 하는 `exec` 기능을 하 고 필요한 인수를 제공. 에코 플러그인에서 우리는 다음에 `client.js` [파일](../../../cordova/file/fileobj/fileobj.html):

    var service = "org.apache.cordova.blackberry.echo",
        exec = cordova.require("cordova/exec");
    
    module.exports = {
        echo: function (data, success, fail) {
            exec(success, fail, service, "echo", { data: data });
        }
    };
    

지금, `index.js` JNEXT를 사용 하 여 네이티브 쪽 상호 작용. 그래서 JNEXT에 에코 라는 생성자 함수 [연결](../../../cordova/connection/connection.html). 생성자 내에서 초기화 함수를 사용 하 여 다음과 같은 주요 작업을 수행할 수 있습니다.

*   네이티브 쪽에서 내보낸 필수 모듈을 지정 합니다. 필수 모듈의 공유 라이브러리 [파일](../../../cordova/file/fileobj/fileobj.html) (.so 파일)의 이름을 일치 해야 합니다.

`JNEXT.require("libecho")`

*   획득된 모듈을 사용 하 여 개체를 만들고 호출에 의해 반환 되는 ID를 저장 합니다. self.m_id = JNEXT.createObject ("libecho.에코 "); 응용 프로그램 echo 함수를 호출 하는 때 `client.js` , 그 전화는 차례 차례로 에코 함수를 호출 `index.js` , 어디 PluginResult 개체 응답 (데이터) 다시 보냅니다 `client.js` . Args 인수는 함수에 전달 된 JSON.stringfy()로 변환 했다는 URIcomponent로 인코딩 이후 다음 호출 해야 합니다.

`데이터 = JSON.parse(decodeURIComponent(args.data));`

이제 데이터를 다시 보낼 수 있습니다. 모두 함께 넣어 보자:

    module.exports = {
    
        echo: function (success, fail, args, env) {
    
            var result = new PluginResult(args, env),
            data = JSON.parse(decodeURIComponent(args.data)),
            response = echo.getInstance().echo(data);
            result.ok(response, false);
        }
    };
    

## 플러그인 아키텍처

포함 하는 플러그인의 유물을 배치할 수 있습니다는 `plugin.xml` [파일](../../../cordova/file/fileobj/fileobj.html), 소스 [파일](../../../cordova/file/fileobj/fileobj.html) (자바 스크립트, c + +), 및 이진 [파일](../../../cordova/file/fileobj/fileobj.html) ( `.so` ) 올바르게에서 [파일](../../../cordova/file/fileobj/fileobj.html) 위치를 지정 하는 만큼 어떤 디렉터리 구조 내에 `plugin.xml` [파일](../../../cordova/file/fileobj/fileobj.html). 일반적인 구조는 다음과 같습니다.

***your\_project\_directory*** (> plugin.xml)

*   **www** (> client.js)
*   **src** 
    *   **blackberry10** (> index.js, **네이티브** > *.cpp, *.hpp)
    *   **장치** (>*이진 파일* *.so)
    *   **시뮬레이터** (>*이진 파일* *.so)

(목록 최상위 디렉터리 간의 계층적 관계를 보여 줍니다. 괄호 지정 된 디렉터리의 내용을 표시 합니다. 모든 디렉터리 이름은 굵은 텍스트로 표시 됩니다. [파일](../../../cordova/file/fileobj/fileobj.html) 이름 앞에 `>` 로그인.)

## 내용에서 `plugin.xml` 파일

`plugin.xml`[파일](../../../cordova/file/fileobj/fileobj.html) 확장명 및 기타 메타 데이터의 네임 스페이스를 포함 합니다. 네임 스페이스를 정의 하 고 에코 플러그인에 대 한 다른 메타 데이터를 다음과 같이 지정 합니다.

    < 플러그인 xmlns = "http://www.phonegap.com/ns/plugins/1.0" id="org.apache.cordova.blackberry.echo" 버전 "1.0.0" = >< js 모듈 src = "www/client.js" >< 병합 대상 "네비게이터" = / >< / js 모듈 >< 플랫폼 이름 "blackberry10" = >< 소스 파일 src="src/blackberry10/index.js" / >< lib 파일 src="src/blackberry10/native/device/libecho.so" 아치 = "장치" / >< lib 파일 src="src/blackberry10/native/simulator/libecho.so" 아치 "시뮬레이터" = / >< 구성 파일 대상 = "www/config.xml" 부모 = "/ 위젯" >< name="org.apache.cordova.blackberry.echo 기능" value="org.apache.cordova.blackberry.echo" / >< / config 파일 >< /플랫폼 >< / 플러그인 >