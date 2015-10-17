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

title: Windows Phone 플러그인
---

# Windows Phone 플러그인

코르 도우 바에 대 한 Windows Phone는 플러그인을 작성 코르도바의 아키텍처에 대 한 기본적인 이해를 필요 합니다. 코르 도우 바 WP7 WebBrowser 호스트 응용 프로그램 자바 코드와 네이티브 API 호출을 관리 하는 이루어져 있다. BaseCommand 이다 ( `WP7CordovaClassLib.Cordova.Commands.BaseCommand` ) 클래스에서 C#을 확장할 수 있습니다 '배관' 당신을 위해 이미 구축의 대다수와 함께 제공.

1.  프로젝트를 선택 하 고 **추가 → 새 항목...** 을 선택 마우스 오른쪽 단추로 클릭
    
    *   가급적 이면 '플러그인' 디렉토리를 추가 하지만 그것은 당신에 게

2.  '클래스'를 선택 하 고 이름을`Echo.cs`
    
    *   이 클래스 해야 *정확 하 게* 일치로 부르는`cordova.exec(win, fail, "Echo", ...)`

3.  기본 클래스 구현을 포함
    
        WPCordovaClassLib.Cordova;를 사용 하 여
        WPCordovaClassLib.Cordova.Commands;를 사용 하 여
        WPCordovaClassLib.Cordova.JSON;를 사용 하 여
        

4.  BaseCommand에서 클래스를 확장
    
        공용 클래스 에코: BaseCommand {/ /...}
        

5.  자바 스크립트에서 호출할 수 있는 메서드 추가
    
        공용 클래스 에코: BaseCommand {공공 무효 에코 (문자열 옵션) {/ / 모든 JS 호출 가능 플러그인 방법이이 서명 있어야!
                / 공공, 무효, 1 인수를 문자열로 반환 /}}
        

## 네임 스페이스

정규화 되지 않은 명령에 대 한 기본 네임 스페이스가입니다.

    네임 스페이스 Cordova.Extension.Commands {/ /...}
    

정규화 된 전화를 해야 자신의 네임 스페이스를 사용 하려는 경우 `cordova.exec` . 예를 들어,이 같은 C# 클래스를 정의 하려면:

    네임 스페이스 com.mydomain.cordovaExtensions {공용 클래스 에코: BaseCommand {/ /...}}
    

그런 다음, 자바 스크립트에서를 호출 해야 `exec` 이 같은:

    cordova.exec (승리, 실패, "com.mydomain.cordovaExtensions.Echo",...);
    

## C에서 인수를 해석

플러그인 방법에 의해 받은 데이터 문자열 값 이지만 실제로 우리의 자바 스크립트 코드를 보고, 우리 우리의 의도 문자열 배열을 전달 하는 참조. 우리의 자바 스크립트 호출을 다시 보면서 `cordova.exec` , 우리는 우리가 통과 참조 `[str]` :

    cordova.exec (승리, 실패, "에코", "에코", ["입력된 문자열"]);
    

우리에 전달 된 옵션 문자열을 검사 하는 경우 우리의 `Echo.echo` 방법, 우리는 값이 실제로 볼:

    "[\"input string\ "]"
    

모든 자바 스크립트 `exec` 인수는 JSON C#으로 전달 되기 전에 인코딩됩니다.

우리가 우리가 기대 했던 문자열로 취급 하 고 싶다면, 우리가 그것을 해독 해야 합니다. 우리는 간단한 JSON deserialization을 사용할 수 있습니다.

    optVal 문자열 JsonHelper.Deserialize < string > = (옵션) [0];
    / / optVal는 지금 "입력된 문자열"의 값
    

## 자바 C#에서 통과 결과

기본 클래스 BaseCommand 자바 스크립트 콜백 처리기에 데이터를 전달 하기 위한 메서드를 제공 합니다. 단순히 아무 추가 결과 정보가 필요할 때 명령이 성공 했다 신호, 당신은 간단 하 게 호출할 수 있습니다.

    DispatchCommandResult(); / / 빈 플러그인 결과와 다시 통화 성공 콜백 간주
    

다른 버전을 호출 해야 데이터를 다시 전달, `DispatchCommandResult` :

    DispatchCommandResult (새로운 PluginResult (PluginResult.Status.OK, "모든 것이 계획 대로 갔다, 이것은 성공 처리기에 전달 된 결과 이다."));
    

JavaScript에 다시 구조화 된 개체 데이터를 전달 하는 JSON 문자열로 인코딩할 수 해야:

    DispatchCommandResult(new PluginResult(PluginResult.Status.OK, "{result:\"super awesome!\"}"));
    

오류가 발생 했습니다, 전화할 수 신호를 할 경우 `DispatchCommandResult` 로 `PluginResult` 개체:

    DispatchCommandResult (새로운 PluginResult (PluginResult.Status.ERROR, "에코 신호 오류"));
    

## 귀하의 플러그인의 C# 메서드에 serialization 오류 처리

귀하의 인수를 해석할 때 그것은 우리는 나쁜 입력 경우 try/catch 블록을 사용 하는 것이 좋습니다. 이것은 코르도바 C# 코드에서 사용 하는 패턴:

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
        // ... 우리의 일을 계속}
    

## 플러그인 XML

이들은 plugin.xml 파일을 사용 하 여 windows 전화 특정 예, 자세한 내용은 플러그인 사양을 참조합니다

### `<source-file>`

Windows phone은 `<source-file>` 요소는 현재 모든 플러그인 리소스 정의 하는 데 사용 됩니다 (즉..cs,.xaml. xaml.cs,.dll, 이미지 자산 등).

### `<config-file>`

`<config-file>`요소 요소를 구성 파일에 넣어 정의 합니다. 플랫폼 config.xml에 플러그인을 추가 하는 등이 같은 뭔가 할 것:

    < 구성 파일 target="config.xml" 부모 = "/ *" >< 기능 이름 "PluginName" = >< param 이름을 = "wp-패키지" 값 = "PluginName" / >< / 기능 >< / config 파일 >
    

우리는 WMAppManifest.xml에 [연락처](../../../cordova/contacts/contacts.html) 기능을 추가 하 고 싶 었, 그것은 이렇게 보이는 것입니다.

    <config-file target="Properties/WMAppManifest.xml" parent="/Deployment/App/Capabilities">
        <Capability Name="ID_CAP_CONTACTS" />
    </config-file>
    

## 고급 플러그인 기능

재정의할 수 있는 다른 방법을 참조 하십시오.

*   [BaseCommand.cs][1]

 [1]: https://github.com/apache/cordova-wp7/blob/master/templates/standalone/cordovalib/Commands/BaseCommand.cs

예를 들어 '[일시 중지](../../../cordova/events/events.pause.html)' 및 '다시 시작' 응용 프로그램 이벤트에 연결할 수 있습니다.

### 플러그인을 디버깅

C# 쪽을 디버깅 하려면 Visual Studio 디버거를 사용 하 여, 그냥 클래스에 의해 노출 되는 방법 중 하나에 브레이크 포인트를 설정할 수 있습니다.

자바 스크립트 디버깅 Windows Phone 조금 더 어렵습니다. 사용 해야 `console.log` 귀하의 플러그인의 상태를 출력 또는 오류 자신을 알려라.

## 일반적인 함정

*   네이티브 자바 스크립트 구현에 전달 하는 인수를 결정할 때는 주의 해야 합니다. 하지만 대부분 [장치](../../../cordova/device/device.html) 플랫폼 기대 args 배열 될 cordova.exec에 전달 된 다른 유형의 개체가이 배열에 있는 경우 deserialize 하기 어렵거나 된다.
    
        cordova.exec (승리, 실패, "ServiceName", "MethodName" ["이것은 문자열", 54, {리터럴: '문제'}]);
        
    
    *   즉, C# 코드와 같은 문자열 값을 해독 하기 어려운 받습니다.
        
            "[\"this 이다은 string\ ", 54, {리터럴: '문제'}]"
            
    
    *   Exec를 호출 하기 전에 모든 매개 변수를 문자열로 변환 고려 하십시오.
        
            cordova.exec (승리, 실패, "ServiceName", "MethodName" ["이것은 문자열", "54", "{리터럴: '문제'}"]);
            
            문자열 optValues JsonHelper.Deserialize < string > = (옵션);
            

*   그것은 일반적으로 매개 변수를 호출 하기 전에 자바 스크립트 코드에서 검사 하는 것이 좋습니다 `exec` . 이 플러그인의 다양 한 네이티브 구현 중 더 많은 JavaScript 코드를 다시 사용할 수 있습니다.