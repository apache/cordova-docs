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

# 블랙베리 플러그인

이 섹션에서는 블랙베리 플랫폼에서 네이티브 플러그인 코드를 구현 하는 방법에 대 한 세부 사항을 제공 합니다. 이것을 읽기 전에 응용 프로그램 플러그인 플러그인의 구조와 그것의 일반 자바 스크립트 인터페이스의 개요 참조 하십시오. 이 섹션 코르도바 webview에서 네이티브 플랫폼 및 뒤 통신 샘플 *에코* 플러그인을 설명 하 고 있습니다.

또한, [코르도바 블랙베리 저장소][1]다운로드. `Cordova-BlackBerry`프로젝트 토치, Bold, 각 본 등 블랙베리 장치에 배포할 수 있습니다. 각 본 기본 개발 노력을 중복 해야 다른 블랙베리 핸드헬드 장치 보다 다른 코드를 사용 합니다. 이 가이드는 정제 보다는 휴대용 기기에 초점을 맞추고 있다.

 [1]: https://git-wip-us.apache.org/repos/asf?p=cordova-blackberry.git;a=summary

## Plugins.xml 수정

`Echo`플러그인 사용자 간에 메시지를 보내는 반환 합니다는 `window.echo` 자바 스크립트 쪽에 기능:

        window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

프로젝트의 `www/plugins.xml` 파일 모든 코르 도우 바 프로젝트에 필요한 참조를 포함 합니다. 그래서 추가 참조를 추가 그 때 `cordova.exec` 가, 코르도바 지도 하는 방법을 알고는 `Echo` 인수는 기본 `Echo` 클래스:

        <feature name="Echo">
            <param name="blackberry-package" value="org.apache.cordova.echo.Echo" />
        </feature>
    

## Echo.java 파일

`feature`규격의 `value` 는 역방향 도메인 스타일 식별자를 참조 하는 특성. 코르 도우 바 블랙베리 WebWorks repo 내 경로에 해당 `framework/ext/src` 디렉터리. 추가 `framework/ext/src/org/apache/cordova/echo` 디렉토리 추가 `Echo.java` 파일.

`Echo.java`확장 하는 클래스를 정의 하는 `Plugin` 클래스. 그것은 또한 구현 해야 한 `execute` 메서드가 반환 하는 `PluginResult` 클래스. 어떤 전화를 `cordova.exec` 인수 뿐 아니라 실행할 클래스 내에서 작업에 전달 합니다. 이 경우는 `Echo` 클래스의 `echo` 메서드는 작업, 및 `[str]` 메서드에 전달할 추가 인수입니다.

        package org.apache.cordova.echo;
    
        import org.apache.cordova.api.Plugin;
        import org.apache.cordova.api.PluginResult;
        import org.apache.cordova.json4j.JSONArray;
        import org.apache.cordova.json4j.JSONException;
        import org.apache.cordova.json4j.JSONObject;
        /**
         * A simple plugin to demonstrate how to build a plugin for BlackBerry
         * Basically echos back the msg that a user calls to this plugin
         */
        public final class Echo extends Plugin {
    
            public static final String echo = "echo";
    
            public PluginResult execute(String action, JSONArray args, String callbackId) {
                PluginResult result = new PluginResult(PluginResult.Status.INVALID_ACTION, "Echo: Invalid action:" + action);
                if(action.equals(echo)){
                    try {
                        String theMsg = args.getString(0);
                        if(theMsg!= null || theMsg.length()>0){
                            result = new PluginResult(PluginResult.Status.OK, theMsg);
                        }else{
                            result = new PluginResult(PluginResult.Status.ERROR, "Nothing to echo.");
                        }
                    } catch (JSONException e) {
                        result = new PluginResult(PluginResult.Status.JSON_EXCEPTION, e.getMessage());
                    }
                }
                return result;
            }
        }
    

위의 코드는 `execute` 메서드는 먼저 작업에 가져온다. 이 경우에 단 하나 유효한 `echo` 작업, 그래서 그것은 단순히 해당 값에 대해 검사 합니다.

로 전달 된 들어오는 메시지 `[str]` 는 JavaScript에서 사용할 수는 `Echo` 로 클래스는 `args` 배열. 이 경우 하나의 인수는 0부터 시작 하는 배열 인덱스를 사용 하 여 액세스할 수 있다:

        String theMsg = args.getString(0);
    

각종 오류 메시지의 값에 검사 후 메서드를 인스턴스화하는 새로운 `PluginResult` 와 함께 한 `OK` 상태 메시지를 반환 합니다. 이 값은 차례로, 자바 성공 콜백에 인수로 전달 됩니다. 오류를의 경우 다양 한 상태 코드는 JavaScript 오류 콜백 다시 전송 됩니다.

## 프로젝트의 www 디렉토리에서에서.jar 업데이트

추가 `Echo.java` 프로젝트에서 업데이트 해야 합니다. 구축 하는 `.jar` 파일, 블랙베리 WebWorks repo의 루트 디렉터리로 이동 하 고, 실행은 `ant` 명령:

        ant update -Dproject.path="~/path_to_my_project"
    

이 새로운 빌드 `.jar` 파일에 `build/ext` 디렉터리. 복사는 `build/ext/cordova.jar` 파일에 `project/www/ext` 디렉터리.

다 잘만 된다면, 그 사용할 수 있는 `Echo` 블랙베리에 플러그인.