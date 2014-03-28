-라이센스: 아파치 소프트웨어 재단 (ASF)에 하나 이상의 참가자 사용권 계약 하에서 허가 된. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# Windows Phone 플러그인

이 섹션에서는 Windows Phone 플랫폼에 네이티브 플러그인 코드를 구현 하는 방법에 대 한 세부 정보를 제공 합니다. 이것을 읽기 전에 응용 프로그램 플러그인 플러그인의 구조와 그것의 일반 자바 스크립트 인터페이스의 개요 참조 하십시오. 이 섹션 코르도바 webview에서 네이티브 플랫폼 및 뒤 통신 샘플 *에코* 플러그인을 설명 하 고 있습니다.

코르 도우 바에 대 한 Windows Phone는 플러그인을 작성 코르도바의 아키텍처에 대 한 기본적인 이해를 필요 합니다. 코르 도우 바 WP7 이루어져 있는 `WebBrowser` 네이티브 API 호출을 관리 하 고 응용 프로그램의 자바 스크립트 코드를 호스팅하. C#을 확장할 수 있습니다. `BaseCommand` 클래스 ( `WP7CordovaClassLib.Cordova.Commands.BaseCommand` ), 어떤 대부분의 필요한 기능을 함께 제공:

1.  프로젝트를 선택 하 고 **추가 → 새 항목...** 을 선택 마우스 오른쪽 단추로 클릭 원하는 경우, 추가할 수 있는 그것에 `Plugins` 폴더.

2.  **클래스** 를 선택 하 고 이름을 `Echo.cs` . 이 클래스 이름은 반드시 *정확 하 게* 일치 부르는에서 서비스로 지정은 `cordova.exec()` 자바 스크립트 쪽에 전화.

3.  기본 클래스 구현은 다음과 같습니다.
    
        WPCordovaClassLib.Cordova;를 사용 하 여
        WPCordovaClassLib.Cordova.Commands;를 사용 하 여
        WPCordovaClassLib.Cordova.JSON;를 사용 하 여
        

4.  클래스를 확장 `BaseCommand` :
    
        공용 클래스 에코: BaseCommand {/ /...}
        

5.  추가 `echo` JavaScript에서 호출 가능한 메서드:
    
        공용 클래스 에코: BaseCommand {공공 무효 에코 (문자열 옵션) {/ / 모든 JS 호출 가능 플러그인 방법이이 서명 있어야!
                / 공공, 무효, 1 인수를 문자열로 반환 /}}
        

재정의 하려면 플러그인에 대 한 사용할 수 있는 방법에 대 한 [BaseCommand.cs][1] 클래스를 참조 하십시오. 예를 들어 플러그인 '일시 중지' 및 '다시 시작' 이벤트를 캡처할 수 있습니다.

 [1]: https://github.com/apache/cordova-wp7/blob/master/templates/standalone/cordovalib/Commands/BaseCommand.cs

## 네임 스페이스

정규화 되지 않은 명령에 대 한 기본 네임 스페이스가입니다.

        namespace Cordova.Extension.Commands
        {
            // ...
        }
    

정규화 된 전화를 해야 자신의 네임 스페이스를 지정 하려면 `cordova.exec` . 예를 들어,이 같은 C# 클래스를 정의 하려면:

        namespace com.mydomain.cordovaExtensions
        {
            public class Echo : BaseCommand
            {
                // ...
            }
        }
    

자바 스크립트를 호출 해야 `exec` 이 같은:

        cordova.exec (승리, 실패, "com.mydomain.cordovaExtensions.Echo",...);
    

## C에서 인수를 해석

응용 프로그램 플러그인에서 설명한 예제에서 당신의 플러그인 수신 데이터 문자열인, 하지만 문자열의 배열을 전달 하려면? 자바 스크립트를 가정해 `cordova.exec` 전화 같이 지정:

        cordova.exec (승리, 실패, "에코", "에코", ["입력된 문자열"]);
    

값 `options` 에 전달 된 문자열은 `Echo.echo` 메서드는 JSON:

        "[\"input string\ "]"
    

모든 자바 스크립트 `exec` 인수 JSON 인코딩 C#으로 전달 되기 전에 고 그래서 해독 될 필요가:

        string optVal = JsonHelper.Deserialize<string[]>(options)[0];
        // optVal now has the value of "input string"
    

## 자바 C#에서 통과 결과

`BaseCommand`클래스는 자바 스크립트 콜백 처리기에 데이터를 전달 하는 메서드를 제공 합니다. 신호 없이 동반 결과 성공 하려면 단순히 든 지 호출할 수 있습니다.

        DispatchCommandResult();
        // calls back with an empty plugin result, considered a success callback
    

다시 데이터를 전달 하려면 전화 해야 `DispatchCommandResult` 다르게:

        DispatchCommandResult (새로운 PluginResult (PluginResult.Status.OK, "모든 것이 계획 대로 갔다, 이것은 성공 처리기에 전달 된 결과 이다."));
    

인코딩된 JSON 문자열을 사용 하 여 구조적된 개체 데이터를 다시 JavaScript에 전달.

        DispatchCommandResult(new PluginResult(PluginResult.Status.OK, "{result:\"super awesome!\"}"));
    

오류 신호, 전화 `DispatchCommandResult` 로 `PluginResult` 개체의 상태는 `ERROR` :

        DispatchCommandResult (새로운 PluginResult (PluginResult.Status.ERROR, "에코 신호 오류"));
    

## Serialization 오류 처리

인수를 해석할 때 `try` / `catch` 블록 도움이 나쁜 입력 화면. 이 패턴은 코르도바 C# 코드를 통해 나타납니다.

        string optVal = null;
    
        try
        {
            optVal = JsonHelper.Deserialize<string[]>(options)[0];
        }
        catch(Exception)
        {
            // simply catch the exception, we handle null values and exceptions together
        }
    
        if (optVal == null)
        {
            DispatchCommandResult(new PluginResult(PluginResult.Status.JSON_EXCEPTION));
        }
        else
        {
            // ... continue on to do our work
        }
    

## 플러그인 XML

다음 사용 하는 방법을 보여 줍니다 있는 `plugin.xml` 파일 Windows Phone 플랫폼에는 플러그인의 소스 파일을 지정 합니다. 사용 가능한 옵션에 대 한 자세한 내용은 응용 프로그램 플러그인 플러그인 사양에 대 한 개요, 참조.

*   `<source-file>`요소 정의 *.cs* *.xaml*, 같은 모든 플러그인 리소스 *. xaml.cs*, *.dll* 파일, 그리고 이미지 자산.

*   `<config-file>`요소는 구성 파일에 삽입 하는 요소를 정의 합니다. 이 예제에서는 플랫폼의 플러그인 추가 `config.xml` 파일:
    
        <config-file target="config.xml" parent="/*">
            <feature name="PluginName">
                <param name="wp-package" value="PluginName"/>
            </feature>
        </config-file>
        
    
    이 예제에서는 연락처 기능을 추가 하는 `WMAppManifest.xml` 파일:
    
        <config-file target="Properties/WMAppManifest.xml" parent="/Deployment/App/Capabilities">
            <Capability Name="ID_CAP_CONTACTS" />
        </config-file>
        

## 플러그인을 디버깅

Visual Studio 디버거를 사용 하 여 플러그인의 C# 구성 요소를 디버깅 합니다. 클래스에 의해 노출 되는 방법 중 하나에 브레이크 포인트를 설정할 수 있습니다.

자바 스크립트는 Windows Phone 디버깅 하기가 어렵습니다. 사용 해야 `console.log` 플러그인의 상태를 출력 하거나 스스로 오류.

## 일반적인 함정

*   일 자바 스크립트에서 JSON으로 deserialize 하기 어려운 네이티브 측에 인수를 전달 하지 않도록 주의 하십시오. 전달 된 인수를 기대 하는 대부분의 장치 플랫폼 `cordova.exec()` 배열을 다음과 같은 수:
    
        cordova.exec (승리, 실패, "ServiceName", "MethodName" ["이것은 문자열", 54, {리터럴: '문제'}]);
        
    
    이 C# 디코딩하는 지나치게 복잡 한 문자열 값에서 발생할 수 있습니다.
    
        "[\"this is a string\", 54, { literal:'trouble' }]"
        
    
    대신, *모든* 매개 변수를 호출 하기 전에 문자열로 변환 하는 것을 고려 하십시오 `exec()` , 및 각각을 별도로 디코딩:
    
        cordova.exec(win, fail, "ServiceName", "MethodName", ["this is a string", "54", "{literal:'trouble'}"]);
        string[] optValues = JsonHelper.Deserialize<string[]>(options);
        

*   그것은 일반적으로 호출 하기 전에 자바 스크립트에서 매개 변수를 확인 하는 더 나은 `exec()` . 이렇게 하면 더 많은 코드를 다시 사용 하 여 당겨 플러그인의에서 불필요 한 기능과 다양 한 네이티브 구현을 수 있습니다.