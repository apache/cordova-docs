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

# 안 드 로이드 플러그인

이 섹션에서는 안 드 로이드 플랫폼에서 네이티브 플러그인 코드를 구현 하는 방법에 대 한 세부 정보를 제공 합니다. 이것을 읽기 전에 응용 프로그램 플러그인 플러그인의 구조와 그것의 일반 자바 스크립트 인터페이스의 개요 참조 하십시오. 이 섹션 코르도바 webview에서 네이티브 플랫폼 및 뒤 통신 샘플 *에코* 플러그인을 설명 하 고 있습니다. 다른 샘플도 [CordovaPlugin.java][1] 에서 주석 참조.

 [1]: https://github.com/apache/cordova-android/blob/master/framework/src/org/apache/cordova/CordovaPlugin.java

안 드 로이드 플러그인 코르도바-안 드 로이드, 안 드 로이드 WebView 그것에 붙어 있던 걸이로 구성 된 기반으로 합니다. 플러그인에서 클래스 매핑으로 표시 됩니다는 `config.xml` 파일. 플러그인을 확장 하는 하나 이상의 Java 클래스의 구성는 `CordovaPlugin` 중 하나를 재정의 하는 클래스는 `execute` 방법. 최고의 연습, 플러그인 또한 처리 하는 `pause` 및 `resume` 플러그인 사이 전달 하는 모든 메시지와 함께 이벤트. 장기 실행 요청, 미디어 재생, 청취자, 또는 내부 상태와 같은 백그라운드 작업 플러그인을 구현 하는 `onReset()` 메서드 뿐만. 때 실행은 `WebView` 이동 새 페이지 또는 새로 고침, 자바 스크립트가 다시 로드 되는.

## 플러그인 클래스 매핑

플러그인의 자바 인터페이스를 사용 하는 `cordova.exec` 메서드가 다음과 같이:

        exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);
    

이 효과적으로 전화 안 드 로이드 네이티브 쪽을 WebView에서 요청 마샬링하는 `action` 메서드는 `service` 추가 인수에 전달 된 클래스는 `args` 배열.

코르 도우 바 안 드 로이드 응용 프로그램의 플러그인을 지정 해야 합니다 자바 파일 또는 *jar* 파일 자체의 플러그인 배포 여부를 `res/xml/config.xml` 파일. 사용 하는 방법에 대 한 자세한 내용은 응용 프로그램 플러그인을 참조는 `plugin.xml` 파일이 주입을 `feature` 요소:

        <feature name="<service_name>">
            <param name="android-package" value="<full_name_including_namespace>" />
        </feature>
    

서비스 이름이 일치 자바 스크립트에 사용 된 `exec` 를 호출 합니다. 자바 클래스의 정규화 된 네임 스페이스 식별자입니다. 그렇지 않으면, 플러그인 컴파일 수 있지만 여전히 코르도바를 사용할 수 없습니다.

## 플러그인 초기화 및 수명

각각의 인생에 대 한 플러그인 개체의 인스턴스 생성 `WebView` . 플러그인은 인스턴스화되지 않습니다 JavaScript에서 호출 하 여 처음 참조 될 때까지 않는 한 `<param>` 와 `onload` `name` 특성 설정 `"true"` 에 `config.xml` . 예를 들면:

    <feature name="Echo">
        <param name="android-package" value="<full_name_including_namespace>" />
        <param name="onload" value="true" />
    </feature>
    

플러그인 사용 해야 있는 `initialize` 그들의 시작 논리에 대 한 방법.

    @override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        // your init code here
    }
    

## 안 드 로이드 자바 플러그인을 작성

플러그인 요청을 네이티브 쪽에서 자바 호출 발생 및 correspoinding 자바 플러그인에 제대로 매핑되지는 `config.xml` 파일, 하지만 무엇 처럼 최종 안 드 로이드 자바 플러그인 클래스 보여? 어떤 자바 스크립트의 플러그인 디스패치 됩니다 `exec` 함수 플러그인 클래스에 전달 `execute` 방법. 대부분 `execute` 구현을 다음과 같이:

        @Override 공공 부울 실행 (문자열 작업, JSONArray args, CallbackContext callbackContext) JSONException을 throw {경우 ("beep".equals(action)) {this.beep(args.getLong(0));
                callbackContext.success();
                반환 진정한;
            } 반환 허위;  / / "MethodNotFound" 오류가 잘못 된 결과 반환 합니다.
        }
    

자바 스크립트 `exec` 함수의 `action` 매개 변수가 선택적 매개 변수와 함께 파견 전용 클래스 메서드에 해당 합니다.

예외를 catch 하 고 오류를 반환 하면 오류 반환 자바 검색 자바 예외 이름을 가능 한 한 명확 하도록 중요 하다.

## 스레딩

플러그인의 자바 스크립트는 *하지* 실행의 주 스레드에 `WebView` 인터페이스; 대신에, 그것에서 실행 되는 `WebCore` 스레드, 마찬가지로 `execute` 메서드. 사용자 인터페이스와 상호 작용 해야 하는 경우 다음 변형을 사용 해야 합니다.

        @Override
        public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
            if ("beep".equals(action)) {
                final long duration = args.getLong(0);
                cordova.getActivity().runOnUiThread(new Runnable() {
                    public void run() {
                        ...
                        callbackContext.success(); // Thread-safe.
                    }
                });
                return true;
            }
            return false;
        }
    

사용 다음 주 인터페이스에서 실행할 필요가 없는 경우의 스레드, 하지만 차단 하지 않으려면는 `WebCore` 스레드 중 하나:

        @Override
        public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
            if ("beep".equals(action)) {
                final long duration = args.getLong(0);
                cordova.getThreadPool().execute(new Runnable() {
                    public void run() {
                        ...
                        callbackContext.success(); // Thread-safe.
                    }
                });
                return true;
            }
            return false;
        }
    

## 에코 안 드 로이드 플러그인 예제

응용 프로그램 플러그인에서 설명 하는 자바 인터페이스 *에코* 기능은 사용는 `plugin.xml` 를 삽입 하는 `feature` 로컬 플랫폼 사양 `config.xml` 파일:

        <platform name="android">
            <config-file target="config.xml" parent="/*">
                <feature name="Echo">
                    <param name="android-package" value="org.apache.cordova.plugin.Echo"/>
                </feature>
            </config-file>
        </platform>
    

다음에 다음 추가 `src/org/apache/cordova/plugin/Echo.java` 파일:

        package org.apache.cordova.plugin;
    
        import org.apache.cordova.CordovaPlugin;
        import org.apache.cordova.CallbackContext;
    
        import org.json.JSONArray;
        import org.json.JSONException;
        import org.json.JSONObject;
    
        /**
         * This class echoes a string called from JavaScript.
         */
        public class Echo extends CordovaPlugin {
    
            @Override
            public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
                if (action.equals("echo")) {
                    String message = args.getString(0);
                    this.echo(message, callbackContext);
                    return true;
                }
                return false;
            }
    
            private void echo(String message, CallbackContext callbackContext) {
                if (message != null && message.length() > 0) {
                    callbackContext.success(message);
                } else {
                    callbackContext.error("Expected one non-empty string argument.");
                }
            }
        }
    

클래스를 확장 하는 파일의 상단에 필요한 수입 `CordovaPlugin` , 인 `execute()` 에서 메시지를 받도록 재정의 메서드 `exec()` . `execute()`처음의 값을 테스트 하는 방법 `action` ,이 경우에 단 하나 유효한 `echo` 값. 다른 작업 반환 `false` 에서 결과 `INVALID_ACTION` 자바 스크립트 측면에 호출 오류 콜백 변환 오류.

다음 메서드를 사용 하 여 에코 문자열 검색에서 `args` 개체의 `getString` 메서드를 첫 번째 매개 변수를 지정 하는 메서드에 전달 된. 값은 사설 전달 된 후 `echo` 방법, 그것은 그것은 확인 하기 위하여 매개 변수 검사 `null` 또는 어떤 경우에는 빈 문자열 `callbackContext.error()` 자바 스크립트의 오류 콜백을 호출 합니다. 다양 한 검사를 통과 하는 경우는 `callbackContext.success()` 원래 전달 `message` 자바 스크립트의 성공 콜백으로 매개 변수로 문자열.

## 안 드 로이드 통합

안 드 로이드 기능을 `Intent` 시스템 프로세스가 서로 통신할 수 있도록 합니다. 플러그인에 액세스할 수 있습니다 한 `CordovaInterface` 안 드 로이드를 액세스할 수 있는 개체 `Activity` 응용 프로그램을 실행 하는. 이 `Context` 새로운 안 드 로이드를 실행 하는 데 필요한 `Intent` . `CordovaInterface`시작 하는 플러그인을 수 있습니다는 `Activity` 결과, 한 때 콜백 플러그인을 설정 하는 `Intent` 응용 프로그램에 반환 합니다.

코르 도우 바 2.0 현재 플러그인 더 이상 직접 액세스할 수 있는 `Context` , 유산 `ctx` 멤버는 사용 되지 않습니다. 모든 `ctx` 에 존재 하는 메서드는 `Context` , 그래서 둘 다 `getContext()` 와 `getActivity()` 필요한 개체를 반환할 수 있습니다.

## 디버깅 안 드 로이드 플러그인

이클립스 자바 소스는 프로젝트에 포함 된 플러그인을 디버깅할 수 있습니다. 만 최신 버전의 안 드 로이드 개발자 도구를 사용 하면이 기능은 아직 지원 되지 않습니다 완벽 하 게 그래서 소스 코드를 *JAR* 종속성을 연결할 수 있습니다.