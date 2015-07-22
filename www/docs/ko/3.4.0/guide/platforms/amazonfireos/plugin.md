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

# 아마존 화재 OS 플러그인

사용자 지정 플러그인 개발의 개요에 대 한 안 드 로이드 플러그인 가이드에 제공 된 지침을 따릅니다.

## 에코 아마존 화재 OS 플러그인 예제

응용 프로그램 플러그인에서 설명 하는 자바 인터페이스 *에코* 기능은 사용는 `plugin.xml` 를 삽입 하는 `feature` 로컬 플랫폼 사양 `config.xml` 파일:

    <platform name="amazon-fireos">
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
    

아마존 화재 운영 체제 플랫폼에 대 한 안 드 로이드 플러그인 코드 재사용 다음 가리키도록 plugin.xml을 수정 하려는 경우는 `android` 특정 소스 파일. 예를 들어,

    <platform name="amazon-fireos">
        <config-file target="config.xml" parent="/*">
            <feature name="Echo">
                <param name="android-package" value="org.apache.cordova.plugin.Echo"/>
            </feature>
        </config-file>
        <source-file src="src/android/Echo.java" target-dir="src/org/apache/cordova/plugin" />
    </platform>
    

아마존 화재 운영 체제 플랫폼에 대 한 사용자 정의 플러그인을 작성 한 다음 라는 폴더를 생성 하려는 경우 `amazon` 플러그인 src 밑 / 폴더를 가리키도록 plugin.xml을 수정 하 고는 `amazon` 특정 소스 파일. 예를 들어,

    <platform name="amazon-fireos">
        <config-file target="config.xml" parent="/*">
            <feature name="Echo">
                <param name="android-package" value="org.apache.cordova.plugin.Echo"/>
            </feature>
        </config-file>
        <source-file src="src/amazon/Echo.java" target-dir="src/org/apache/cordova/plugin" />
    </platform>
    

## 귀하의 플러그인에 아마존 WebView를 사용 하 여

코르도바 아마존 화재 운영 체제에 대 한 사용자 지정 아마존 WebView 오픈 소스 크롬 프로젝트에 내장 된 사용 합니다. GPU 가속 및 빛나 다 화재에 유체 성능을 위해 최적화 됩니다.

최고의 프로젝트에서 아마존 WebView를 사용 하는 방법을 이해, 체크 아웃 [아마존 개발자 포털][1].

 [1]: https://developer.amazon.com/sdk/fire/IntegratingAWV.html