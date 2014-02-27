---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied. See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# 블랙베리 10 플러그인

이 섹션에서는 블랙베리 10 플랫폼에서 네이티브 플러그인 코드를 구현 하는 방법에 대 한 세부 사항을 제공 합니다. 이것을 읽기 전에 응용 프로그램 플러그인 플러그인의 구조와 그것의 일반 자바 스크립트 인터페이스의 개요 참조 하십시오. 이 섹션 코르도바 webview에서 네이티브 플랫폼 및 뒤 통신 샘플 *에코* 플러그인을 설명 하 고 있습니다.

에코 플러그인은 기본적으로 어떤 문자열을 반환 합니다는 `window.echo` JavaScript에서 함수 보냅니다:

        window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

블랙베리 10 코르도바 플러그인 포함 JavaScript와 네이티브 코드는 JNEXT에서 제공 하는 프레임 워크를 통해 서로 통신할. 모든 플러그인 포함 되어야 합니다는 `plugin.xml` 파일.

## 네이티브 클래스 만들기

귀하의 플러그인의 네이티브 부분을 만들기 위해 블랙베리 10 NDK IDE 열고 선택 **파일 → 새로운 → 블랙베리 프로젝트 기본 확장 → 블랙베리 10**. 원하는 프로젝트 이름 및 위치를 입력 한 다음 **완료** 를 누릅니다.

IDE에 의해 만들어진 프로젝트 메모리 플러그인에 대 한 샘플 코드가 들어 있습니다. 대체 하거나 자신의 기능을 구현 하도록이 파일을 수정할 수 있습니다.

*   `*name*_js.hpp`: JNEXT 코드 c + + 헤더입니다.

*   `*name*_js.cpp`: JNEXT c + + 코드입니다.

프로젝트의 공용 디렉터리에 플러그인 헤더 파일에 JNEXT 확장을 위한 기본 인터페이스를 볼 수 있습니다. 그것은 또한 상수 및 네이티브 코드에서 사용할 수 있는 유틸리티 기능을 갖추고 있습니다. 플러그인에서 파생 한다 `JSExt` 에 정의 된 `plugin.h` . 즉, 다음과 같은 클래스를 구현 해야 합니다.

        class JSExt
        {
        public:
            virtual ~JSExt() {};
            virtual string InvokeMethod( const string& strCommand ) = 0;
            virtual bool CanDelete( void ) = 0;
        private:
            std::string m_id;
        };
    

확장명을 포함 해야 한다는 `plugin.h` 헤더 파일. 에 `Echo` 사용 예를 들어, `JSExt` 다음과 같이는 `echo_js.hpp` 파일:

        #include "../public/plugin.h"
        #include <string>
    
        #ifndef ECHO_JS_H_
        #define ECHO_JS_H_
    
        class Echo : public JSExt
        {
        public:
            explicit Echo(const std::string& id);
            virtual ~Echo();
            virtual std::string InvokeMethod(const std::string& command);
            virtual bool CanDelete();
        private:
            std::string m_id;
        };
    
        #endif // ECHO_JS_H_
    

`m_id`특성은 `JNEXT` 클래스에는 생성자에 인수로 전달 되는 개체의 id. 네이티브 측면 트리거 이벤트 자바 스크립트 측면에 대 한 필요 합니다. `CanDelete`메서드는 기본 개체를 삭제할 수 있는지 여부를 확인 합니다. `InvokeMethod`함수는이 특정 개체의 메서드를 호출 하려면 JavaScript에서 요청에서 결과적으로 호출 됩니다. 이 함수의 유일한 인수는 네이티브 개체의 메서드를 실행 하 여 확인 하는 구문 분석 하는이 방법은 JavaScript에서 전달 된 문자열입니다. 이러한 방법을 구현 됩니다 `echo_js.cpp` . 여기는 `InvokeMethod` 에 대 한 함수는 `Echo` 예:

        string Echo::InvokeMethod(const string& command) {
    
            //parse command and args from string
            int index = command.find_first_of(" ");
            string strCommand = command.substr(0, index);
            string strValue = command.substr(index + 1, command.length());
    
            // Determine which function should be executed
            if (strCommand == "echo") {
                return strValue;
            } else {
                return "Unsupported Method";
            }
        }
    

기본 플러그인 또한 다음 콜백 함수를 구현 해야 합니다.

*   `extern char * onGetObjList (void);`

*   `extern JSExt * onCreateObject (const 문자열 strClassName, const 문자열 & strObjId);`

`onGetObjList`함수 클래스 JNEXT에서 지 원하는 쉼표로 구분 된 목록을 반환 합니다. JNEXT이이 함수를 사용 하 여 JNEXT 인스턴스화할 수 있는 클래스의 집합을 결정 합니다. `Echo`플러그인 구현 다음에 `echo_js.cpp` :

        char* onGetObjList() {
            static char name[] = "Echo";
            return name;
        }
    

`onCreateObject`함수 2 매개 변수. 첫 번째는에서 반환 된 유효 이름이 자바 측에서 만들 요청 된 클래스의 이름을 `onGetObjList` . 두 번째 매개 변수는 클래스의 고유한 개체 id입니다. 이 메서드는 만든된 플러그인 개체에 대 한 포인터를 반환합니다. `Echo`플러그인 구현 다음에 `echo_js.cpp` :

        JSExt* onCreateObject(const string& className, const string& id) {
            if (className == "Echo") {
                return new Echo(id);
            }
            return NULL;
        }
    

## 플러그인의 자바 스크립트 만들기

플러그인 다음 JavaScript 파일을 포함 해야 합니다.

*   `client.js`:이 클라이언트 쪽 이라고 여겨진다 고 코르도바 응용 프로그램에 사용할 수 있는 API를 포함 합니다. 에 API `client.js` 호출 하면 호출을 `index.js` . 에 API `client.js` 또한 콜백 함수는 콜백을 발생 하는 이벤트에 연결 합니다.

*   `index.js`: 코르 도우 바 로드 `index.js` 및 cordova.exec 다리를 통해 액세스할 수 있습니다. `client.js`파일에서 API 호출 하는 `index.js` 파일을 차례로 네이티브 쪽와 통신 하는 JNEXT를 호출 하 게 합니다.

클라이언트와 서버 측 ( `client.js` 및 `index.js` )를 통해 상호 작용 하는 `Cordova.exec` 기능. `client.js`호출 하는 `exec` 기능을 하 고 필요한 인수를 제공 합니다. `Echo`플러그인에서 다음 구현 하는 `client.js` 파일:

        var service = "org.apache.cordova.blackberry.echo",
            exec = cordova.require("cordova/exec");
    
        module.exports = {
            echo: function (data, success, fail) {
                exec(success, fail, service, "echo", { data: data });
            }
        };
    

`index.js`구성 요소 JNEXT를 사용 하 여 네이티브 쪽 상호 작용. 생성자 함수 라는 연결 `Echo` JNEXT를 사용 하 여 다음과 같은 주요 작업을 수행할 수 있습니다는 `init` 기능:

*   네이티브 쪽에서 내보낸 필수 모듈을 지정 합니다. 필수 모듈의 이름을 공유 라이브러리 파일의 이름과 일치 해야 합니다 ( `.so` 파일):
    
        JNEXT.require("libecho")
        

*   획득된 모듈을 사용 하 여 개체를 만들고 호출에 의해 반환 되는 ID 저장:
    
        self.m_id = JNEXT.createObject("libecho.Echo");
        
    
    응용 프로그램을 호출 하는 경우는 `echo` 에 `client.js` 을 차례로 호출 전화는 `echo` 에 `index.js` , 어디는 `PluginResult` 개체에 대 한 응답으로 데이터를 다시 보냅니다 `client.js` . 이후는 `args` 함수에 전달 된 인수에 의해 개조 되었다 `JSON.stringfy()` 그리고로 인코딩된는 `URIcomponent` , 다음을 호출 해야 합니다:
    
        data = JSON.parse(decodeURIComponent(args.data));
        

이제 다음과 같이 데이터를 다시 보낼 수 있습니다.

        module.exports = {
            echo: function (success, fail, args, env) {
                var result = new PluginResult(args, env),
                data = JSON.parse(decodeURIComponent(args.data)),
                response = echo.getInstance().echo(data);
                result.ok(response, false);
            }
        };
    

## 플러그인 아키텍처

플러그인의 유물을 포함 하 여 배치할 수 있습니다는 `plugin.xml` 파일, 자바와 c + + 소스 파일 및 `.so` 어떤 디렉터리 구조 내에서 이진 파일을 올바르게에서 파일 위치를 지정은 `plugin.xml` 파일. 다음은 일반적인 구조가입니다.

***project_directory*** (> plugin.xml)

*   **www** (>client.js)
*   **src** 
    *   **blackberry10** (> index.js, **네이티브** > *.cpp, *.hpp)
    *   **장치** (>*이진 파일* *.so)
    *   **시뮬레이터** (>*이진 파일* *.so)

목록 최상위 폴더 간의 계층적 관계를 보여 줍니다. 괄호 지정 된 디렉터리의 내용을 표시 합니다. 모든 디렉터리 이름은 굵은 텍스트로 표시 됩니다. 파일 이름 앞에 `>` 로그인.

## *Plugin.xml* 파일

`plugin.xml`파일 확장의 네임 스페이스 및 기타 메타 데이터가 포함 되어 있습니다. 설정에서 `Echo` 다음과 같이 플러그인:

        <plugin xmlns="http://www.phonegap.com/ns/plugins/1.0"
            id="org.apache.cordova.blackberry.echo"
            version="1.0.0">
            <js-module src="www/client.js">
                <merges target="navigator" />
            </js-module>
            <platform name="blackberry10">
                <source-file src="src/blackberry10/index.js" />
                <lib-file src="src/blackberry10/native/device/libecho.so" arch="device" />
                <lib-file src="src/blackberry10/native/simulator/libecho.so" arch="simulator" />
                <config-file target="www/config.xml" parent="/widget">
                    <feature name="org.apache.cordova.blackberry.echo" value="org.apache.cordova.blackberry.echo" />
                </config-file>
            </platform>
        </plugin>