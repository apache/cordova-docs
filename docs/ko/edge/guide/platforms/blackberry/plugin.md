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

이 가이드에서는 블랙베리에 에코 플러그인을 개발 하는 방법을 보여 줍니다. 플러그인 개발 가이드는 당신이 이미 알고 있어야, 광범위 한 개요를 제공 하 고이 가이드 집어 어디 그것. 또한, [코르도바 블랙베리 저장소][1] 다운로드.

 [1]: https://git-wip-us.apache.org/repos/asf?p=cordova-blackberry-webworks.git;a=summary

`Cordova-BlackBerry`프로젝트 토치, Bold, 각 본 등 블랙베리 장치에 배포할 수 있습니다. 각 본 기본 개발 노력을 중복 해야 다른 블랙베리 핸드헬드 장치 보다 다른 코드를 사용 합니다. 이 가이드는 정제 보다는 휴대용 기기에 초점을 맞추고. (미래에,이 가이드 커버 한다 두 플랫폼.)

에코 플러그인 근본적으로 어떤 메시지는 사용자에 게 제공 반환 된 `window.echo` 기능:

    window.echo = function(str, callback) {
        cordova.exec(callback, function(err) {
            callback('Nothing to echo.');
        }, "Echo", "echo", [str]);
    };
    

## Plugins.xml 수정

프로젝트의 `www/plugins.xml` 디렉터리 코르도바 프로젝트에 필요한 참조를 모두 포함 합니다. 그래서 추가 참조를 추가 그 때 `cordova.exec` 는, 코르도바 지도 하는 방법을 알고는 `Echo` 의 인수 `cordova.exec` 에 `Echo` 우리가 기본적으로 쓰려는 클래스:

    <feature name="Echo">
        <param name="blackberry-package" value="org.apache.cordova.echo.Echo" />
    </feature>
    

## Echo.java 추가

값 특성의 구조를 알아 차린 다 면 에코 플러그인에 연결 경로 정의 표시 됩니다. 코르 도우 바 블랙베리 WebWorks repo의 루트 디렉터리에 라는 디렉터리에 대 한 보고 `framework` . 이 디렉터리는 블랙베리에서 기본적으로 실행 되는 소스 코드의 모든 포함 됩니다. 이동 `framework/ext/src/org/apache/cordova` . 이 시점에서, 모두는 내부 소스 코드는 플러그인 디렉토리가 표시 됩니다. 그래서 추가를 디렉토리 에코 `framework/ext/src/org/apache/cordova/echo` 라는 파일을 만듭니다 및 `Echo.java` 에서`framework/ext/src/org/apache/cordova/echo/Echo.java`.

## 글 Echo.java

플러그인을 작성 뒤에 기본적인 아이디어는 플러그인 클래스를 확장 하는 클래스를 만들고 메서드 호출을 `execute` 를 반환 하는 `PluginResult` 클래스. 어떤 전화를 `cordova.exec` 인수 뿐만 아니라, 클래스 내에서 실행 하는 작업에 전달 합니다. 이 경우에, "에코" "에코"와 [str] 클래스 내에서 실행 작업 우리는 우리에 전달 하는 인수입니다.

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
    

그래서 우리는 위의 코드를 보면, 우리는 execute 메서드 내에서 우리는 먼저 찾고 작업 오고 있다 볼 수 있습니다. 에코 플러그인은 하나의 액션, `echo` , 그래서 우리만 위한 확인 됩니다. 우리의 플러그인 작업 있다면, 단순히 그 행동에 대 한 확인 하려면 더 많은 조건부 테스트 추가의 문제 이다.

우리는 다음 args 매개 변수에 의해 제공 되는 인수에서 오는 메시지를 잡아 하려고 합니다. 우리가 간단 하 게 수행 하 여 첫 번째 인수를 잡아 수 있습니다.`String theMsg = args.getString(0);`.

일부 오류 검사 할 것입니다 그리고 우리가 확인 상태를 가진 새로운 PluginResult 인스턴스화하기 위한 메시지 괜찮아 보인다면: `PluginResult.Status.OK` 메시지 반환: `theMsg` . 이 후, 우리는 반환 결과 성공 콜백에서 해 고 될 자바 스크립트에 다시 전달 하는. 우리 처럼 다양 한 상태 예외를 반환할 수 있습니다 뭔가 실패 하면 `PluginResult.Status.ERROR` , `PluginResult.Status.JSON_EXCEPTION` , 또는 `PluginResult.Status.INVALID_ACTION` . 다시 전달 될 때 이러한 유형의 결과 실패 콜백 JavaScript에서 화재.

## 프로젝트의 www 디렉토리에서.jar 업데이트

추가 `Echo.java` 프로젝트에서 업데이트 해야 합니다. 구축 하는 `.jar` 파일, 블랙베리 WebWorks repo의 루트 디렉터리를 탐색 하 고 실행은 `ant` 명령:

    ant update -Dproject.path="~/path_to_my_project"
    

이 새로운 빌드 `.jar` 파일에 `build/ext` 디렉터리. 복사는 `build/ext/cordova.jar` 로 파일을 `project/www/ext` 디렉터리.

다 잘만 된다면, 그 블랙베리에서 에코 플러그인을 사용할 수 있습니다.