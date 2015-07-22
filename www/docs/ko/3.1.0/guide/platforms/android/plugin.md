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

title: 안 드 로이드 플러그인
---

# 안 드 로이드 플러그인

플러그인을 작성 코르도바-안 드 로이드의 아키텍처에 대 한 이해가 필요 합니다. 코르 도우 바 안 드 로이드 안 드 로이드 WebView 그것에 붙어 있던 걸이로 구성 되어 있습니다. 이 플러그인에서 클래스 매핑으로 표시 됩니다는 `config.xml` [파일](../../../cordova/file/fileobj/fileobj.html).

플러그인 구성 확장 하는 하나 이상의 Java 클래스는 `CordovaPlugin` 클래스. 플러그인 중 하나를 재정의 해야 합니다 있는 `execute` 메서드를 `CordovaPlugin` . 최고의 연습, 플러그인 처리 하는 `pause` 및 `resume` [이벤트](../../../cordova/events/events.html) 및 플러그인 사이 전달 메시지. 장기 실행 요청, [미디어](../../../cordova/media/media.html) 재생, 청취자, 또는 내부 상태와 같은 백그라운드 작업 플러그인을 구현 하는 `onReset()` 메서드 뿐만. 때 실행은 `WebView` 이동 새 페이지 또는 새로 고침, 자바 스크립트가 다시 로드 되는.

## 플러그인 클래스 매핑

플러그인의 자바 부분 항상 사용 하는 `cordova.exec` 메서드가 다음과 같이:

    exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);
    

이 요청 전화 내려 더 많거나 적은 끓는 안 드 로이드 네이티브 쪽을 WebView에서 마샬링하는 `action` 메서드는 `service` 클래스에 전달 된 인수는 `args` 배열.

플러그인에 추가 되어야 합니다 귀하의 플러그인 자바 [파일](../../../cordova/file/fileobj/fileobj.html) 또는 그것의 자신의 병을 배포 여부는 `config.xml` 코르 도우 바 안 드 로이드 응용 프로그램에서 [파일](../../../cordova/file/fileobj/fileobj.html) `res/xml/` 디렉터리.

    <feature name="<service_name>">
        <param name="android-package" value="<full_name_including_namespace>" />
    </feature>
    

서비스 이름은 자바 스크립트에 사용 된 것과 일치 해야 `exec` 전화와 값은 네임 스페이스를 포함 하 여 Java 클래스 전체 이름. 그렇지 않으면 플러그인 컴파일 수 있지만 여전히 코르도바에 의해 접근할 수 있습니다.

## 안 드 로이드 자바 플러그인을 작성

자바 스크립트 플러그인 요청을 네이티브 쪽에서 발생합니다. 안 드 로이드 자바 플러그인을 통해 제대로 매핑되는 `config.xml` [파일](../../../cordova/file/fileobj/fileobj.html). 그래서 무슨 최종 안 드 로이드 자바 플러그인 클래스 처럼 보여요?

무슨 자바 스크립트를 통해 플러그인에 파견 되 면 `exec` 함수는 플러그인 클래스에 전달 되 면 `execute` 메서드. 대부분 `execute` 구현을 다음과 같이:

    @Override 공공 부울 실행 (문자열 작업, JSONArray args, CallbackContext callbackContext) JSONException을 throw {경우 ("beep".equals(action)) {this.beep(args.getLong(0));
            callbackContext.success();
            반환 진정한;
        } 반환 허위;  / / "MethodNotFound" 오류가 잘못 된 결과 반환 합니다.
    }
    

값을 비교 하는 우리는 `action` 매개 [변수](../../../plugin_ref/spec.html), 및 파견 (개인) 메서드에 선택적으로 메서드에 전달 된 매개 [변수](../../../plugin_ref/spec.html) 중 일부는 클래스에서 요청 합니다.

예외를 catch 하 고 오류를 반환 하면 오류 반환 자바 검색 자바 예외 이름을 가능 한 한 명확 하도록 중요 하다.

### 스레딩

WebView에서 자바 않습니다 *하지* UI 스레드에서 실행 합니다. WebCore 스레드에서 실행 됩니다. `execute`메서드는 또한 WebCore 스레드에서 실행 됩니다.

UI와 상호 작용 해야 하는 경우 다음 사용 해야 합니다.

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
    

UI 스레드에서 실행 해야 하는 경우 하지만 WebCore 스레드를 차단 하지 않으려면:

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
    

### 에코 안 드 로이드 플러그인 예제

다음을 추가 우리의 `config.xml` [파일](../../../cordova/file/fileobj/fileobj.html):

    <feature name="Echo">
        <param name="android-package" value="org.apache.cordova.plugin.Echo" />
    </feature>
    

그런 다음 다음 파일을 추가 `src/org/apache/cordova/plugin/Echo.java` 코르 도우 바 안 드 로이드 응용 프로그램 안에:

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
    

코드를 살펴 봅시다. 필요한 `imports` 상단에 있습니다. 우리의 클래스에서 확장 `CordovaPlugin` . 우리는 exec()에서 메시지를 수신 하려면 execute () 메서드를 재정의 합니다. 우리의 방법은 먼저 비교 `action` :이 플러그인만 지원 한 행동은 `echo` 작업. 다른 작업 반환 `false` , 어떤 종류의 오류가 발생 `INVALID_ACTION` , 어떤 자바 스크립트 측면에 오류 콜백 호출으로 변환 합니다. 다음으로, 우리가 사용 하 여 에코 문자열 잡아는 `getString` 방법에 우리의 `args` , 그것을 말하고 우리 싶어 일까 매개 변수가 매개 [변수](../../../plugin_ref/spec.html) 배열. 우리가 매개 [변수](../../../plugin_ref/spec.html) 검사의 조금을 할: 그것은 다는 것을 확인 `null` , 그것은 길이가 0 인 문자열이 있는지 확인 하십시오. 그것은 우리가 전화 `callbackContext.error()` (지금까지, 당신이 알아야 할 어떤 오류 콜백을 호출). 모든 그 검사 통과 경우 우리가 전화 `callbackContext.success()` 에 전달 하 고는 `message` 우리는 매개 변수로 받은 문자열. 이 마지막으로 자바 스크립트 측면에서 성공 콜백 호출으로 변환합니다. 그것은 또한 통과 `message` JavaScript 성공 콜백 함수에 매개 변수로 매개 [변수](../../../plugin_ref/spec.html).

## 플러그인을 디버깅

이클립스 안 드 로이드 프로젝트를 디버깅 하는 데 사용할 수 있습니다 및 플러그인 자바 소스 프로젝트에 포함 된 경우 디버깅할 수 있습니다. 만 최신 버전의 안 드 로이드 개발자 도구는이 이번에 완전히 지원 되지 않고이 소스 코드 첨부 [파일](../../../cordova/file/fileobj/fileobj.html) JAR 종속성을 허용 알려져 있다.

## 일반적인 함정

*   플러그인에 액세스할 수 있는 `CordovaInterface` 개체. 이 개체에는 안 드 로이드에 대 한 액세스는 `Activity` 응용 프로그램을 실행 중인. 이 `Context` 새로운 안 드 로이드를 실행 하는 데 필요한 `Intent` . `CordovaInterface`시작 플러그인 수를 `Activity` 때 콜백 플러그인을 설정 하 고 결과는 `Intent` 응용 프로그램에 다시 온다. 이것은 중요 하다, 이후는 `Intent` s 시스템은 안 드 로이드 프로세스 간에 통신 하는 방법.

*   플러그인에 직접 액세스할 필요가 없습니다에 `Context` 그들은 과거에 있다. 유산 `ctx` 멤버는 사용 되지 않습니다, 그리고 및 2.0 출시 후 6 개월 동안 제거 될 것 이다. 모든 `ctx` 에 존재 하는 메서드는 `Context` , 그래서 둘 다 `getContext()` 와 `getActivity()` 필요한 적절 한 개체를 반환 할 수 있다.

## 원본을 사용 하 여

[기존 플러그인을 통해 보는][1] 것입니다 자신의 플러그인을 작성 하는 자신을 준비 하는 최고의 방법 중 하나.

 [1]: https://github.com/apache/cordova-android/tree/master/framework/src/org/apache/cordova

또한 [CordovaPlugin.java][2] 의 의견을 통해 읽어야 한다.

 [2]: https://github.com/apache/cordova-android/blob/master/framework/src/org/apache/cordova/CordovaPlugin.java