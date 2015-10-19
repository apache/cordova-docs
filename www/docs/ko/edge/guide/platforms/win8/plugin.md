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

title: 윈도우 플러그인
---

# 윈도우 플러그인

이 섹션에서는 Windows 스토어 애플 리 케이 션에 사용 하기 위해 플러그인을 구현 하는 방법에 대 한 세부 정보를 제공 합니다. 이것을 읽기 전에 응용 프로그램 플러그인 플러그인의 구조와 그것의 일반 자바 스크립트 인터페이스의 [개요](../../overview/index.html) 참조 하십시오. 이 섹션 코르도바 webview에서 네이티브 플랫폼 및 뒤 통신 샘플 *에코* 플러그인을 설명 하 고 있습니다.

참고 Windows에서 필요한 특별 한 경우에 '네이티브' 부분을 개발 하는 것을 의미 하는 자바 스크립트에서 직접 개발 지원에 중요 하다.

## 자바 스크립트에서 윈도우 플러그인 만들기

이들이 지시는 순수 자바 스크립트 플러그인을 만들 수 있습니다. 이것을 이해 하는 것은 네이티브/관리 되는 비트를 추가 하는 방법을 이해 하는 데 중요 합니다.

Windows 코르도바 플러그인 얇은 래퍼 기능을 제공 하는 기존 WinJS 본질적으로 하지만 여러 디바이스를 위한 JS 일반적인 인터페이스를 정의 하려는 가정, 당신은 것입니다 일반적으로 1 개의 JS 파일 API를 제공 하.

    // inside file echoplugin.js
    var EchoPlugin = {
        // the echo function calls successCallback with the provided text in strInput
        // if strInput is empty, it will call the errorCallback
        echo:function(successCallback, errorCallback, strInput) {
            cordova.exec(successCallback,errorCallback,"EchoPlugin","echo",[strInput]);
        }
    }
    

## 윈도우 내부 코르도바 exec

Cordova.exec 함수를 다르게 정의 하 여 모든 플랫폼에서이 때문에 각 플랫폼 응용 프로그램 js 코드와 네이티브 래퍼 코드 간의 통신의 그것의 자신의 방법이 있다. 그러나 Windows의 경우 exec 호출 일관성 있다 그래서 없는 네이티브 래퍼 이다. 같은 EchoPlugin.echo, 직접 js 유일한 플러그인 작업을 할 수 있는:

    // inside file echoplugin.js ( this is what NOT to do if you want to reuse the JS API cross platform )
    var EchoPlugin = {
        echo:function(successCallback,errorCallback,strInput) {
            if(!strInput || !strInput.length) {
                errorCallback("Error, something was wrong with the input string. =>" + strInput);
            }
            else {
                successCallback(strInput + "echo");
            }
        }
    }
    

그러나 이것 그것은 다른 플랫폼에 대 한 echoPlugin.js의 다른 버전을 필요 합니다 그리고 가능 하 게 하 여 구현에 불일치 문제를 가질 수 있습니다. 있습니다 의미 잘 작동 것입니다 수 있습니다. 좋습니다, 우리는 우리 수 있도록 같은 JS 코드를 실행 하 고 플랫폼을 위해 그것을 다시 작성 하지 않아도 어떤 매개 변수 검사, 또는 다른 일반적인 코드를 다른 플랫폼에서 작업 하는 개발자에 의해 제공의 혜택을 받을 수 cordova.exec Windows에서 내부 네이티브 API를 모방 하기로 결정 했다.

## 코르 도우 바 exec 프록시

윈도우에서 코르도바 API에 대 한 모든 cordova.exec 호출을 처리 하는 개체를 등록 하는 데 사용할 수 있는 프록시를 제공 합니다.

예를 들어가 속도계 API에 대 한 구현을 제공 하려는 경우 당신은 것이:

cordova.commandProxy.add ("가 속도계", {시작: function() {/ / 여기에 코드...} / /... 여기 API의 나머지 부분});

그래서 우리의 경우, 우리 가정은 단순히 윈도우에 대 한 프록시를 작성할 수 있습니다 자바 스크립트 및 우리 크로스 플랫폼 관련 echoplugin.js 코드 처리

    // in file echopluginProxy.js
    cordova.commandProxy.add("EchoPlugin",{
        echo:function(successCallback,errorCallback,strInput) {
            if(!strInput || !strInput.length) {
                errorCallback("Error, something was wrong with the input string. =>" + strInput);
            }
            else {
                successCallback(strInput + "echo");
            }
        }
    });
    

플러그인 정의

만약 우리가 우리의 플러그인의 사용자가 쉽게 우리의 플러그인을 설치할 수, 우리 PlugMan 플러그인을 정의 하는 방법에 따라 정의 해야 합니다. 이것은 [플러그인의 사양][1] 에 대 한 자세한

 [1]: plugin_ref_spec.md.html#Plugin%20Specification

    <?xml version="1.0" encoding="UTF-8"?>
    <plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
        id="com.risingj.echoplugin"
        version="0.1.0">
    
        <js-module src="www/echoplugin.js" name="echoplugin">
            <clobbers target="window.echoplugin" />
        </js-module>
    
        <!-- windows -->
        <platform name="windows">
            <js-module src="src/windows/echopluginProxy.js" name="EchoProxy">
                <merges target="" />
            </js-module>
        </platform>
    
        <!-- other platforms -->
    
    </plugin>
    

이것은 우리가 작업 일반적인 파일 (echoplugin.js)를 사용 하 여 Windows 유일한 부분 구현 (echopluginProxy.js)를 제공 하는 프록시를 사용 하 여 Windows 자바 플러그인 제공. 우리가 어떻게이 네이티브/관리 되는 코드를 추가 하려면? 잘 우리는 시작 하려고 같은, 유일한 차이점은 우리가 echopluginProxy 방법에서 안에 할 것.

# WinJS는 네이티브/관리 되는 코드를 액세스 하는 방법

Windows WinJS 제작 된 애플 리 케이 션은 네이티브 코드와 상호 작용할 수에서 간이 op는 Windows 런타임 구성 요소에 사용할 수 있는. 세부 사항은 수많은, 그리고이 가이드만 기초를 다룰 것입니다. 마이크로소프트는 훨씬 더 많은 정보를 제공 한다 [여기][2].

 [2]: http://msdn.microsoft.com/en-us/library/windows/apps/hh441569.aspx

만들 때 Windows 런타임 구성 요소, 모든 클래스는 '활성화 가능 클래스'로 간주 됩니다 '공공 ref 클래스 봉인'으로 정의 되 고 자바 스크립트에서 호출할 수 있을 것입니다.

    // in your header file .h
    namespace EchoRuntimeComponent
    {
        public ref class EchoPluginRT sealed 
        {
            public:
            static Platform::String^ Echo(Platform::String^ input);
        }
    }
    
    // in the implementation file .cpp
    using namespace EchoRuntimeComponent;
    using namespace Platform;
    
    Platform::String^ EchoPluginRT::Echo(Platform::String^ input)
    {
        if(input->IsEmpty()) 
        {
            return "Error: input string is empty.";
        }
        else
        {
            return input->ToString() + "echo";
        }
    }
    

이제 네이티브 코드를 호출 하기 위해서 사용 하 여 네임 스페이스, 클래스, 그리고 lowerCamelCase 우리가 호출 하는 메서드.

var res = EchoRuntimeComponent.EchoPluginRT.echo("boom"); 우리의 echopluginProxy.js 파일 이동, 우리는이 얻을:

    // in file echopluginProxy.js
    cordova.commandProxy.add("EchoPlugin",{
        echo:function(successCallback,errorCallback,strInput) {
            var res = EchoRuntimeComponent.EchoPluginRT.echo(strInput);
            if(res.indexOf("Error") == 0) {
                errorCallback(res);
            }
            else {
                successCallback(res);
            }
        }
    });
    

즉, 우리는 끝에 c + + 지원 js 호출 가능 플러그인 사용에 대 한 아파치 코르도바 창!

# 일부 기술 노트:

*   콜백을 이므로 일반적으로 비동기, 호출자가 아마 예상은 바로 콜백을 호출 합니다. 실제로, 경우 호출이 비동기, 적어도 사용 해야 자바 스크립트 시간 초과를 비동기 호출할 콜백입니다.
*   활성화 가능 클래스는 끝내, 파견, 비동기 콜백, 사용자 자신의 개체 유형, 배열, 컬렉션, 오버 로드 된 메서드 및 훨씬 더를 전달 하는 이벤트의 모든 종류를 할 수 있습니다. 나는 당신이 당신의 숙제를 할 것이 좋습니다.
*   일반적인 Windows Phone 8.0과 Windows SDK API 호출을 스틱 같은 런타임 구성 요소 (네이티브 또는 관리 되는 비트)를 사용 하 여 Windows Phone 8.0 아파치 코르도바 플러그인에서 수. 있습니다 ~ 그 게시물에 대 한 지켜.

# 플러그인 정의

이제 우리는 작업 플러그인, 그래서 우리는 그것을 게시할 수 있는 앞에서 플러그인 정의 되짚어 해야 합니다. 우리 이제는 프레임 워크 런타임 구성 요소를 추가할 수 있습니다. 참고는 WindowsRuntimeComponent의 출력 형식을.dll 또는.winmd 수

    <?xml version="1.0" encoding="UTF-8"?>
    <plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
        id="com.risingj.echoplugin"
        version="0.2.0">
    
        <js-module src="www/echoplugin.js" name="echoplugin">
            <clobbers target="window.echoplugin" />
        </js-module>
    
        <!-- windows -->
        <platform name="windows">
            <js-module src="src/windows/echopluginProxy.js" name="EchoProxy">
                <merges target="" />
            </js-module>
            <framework src="src/windows/EchoRuntimeComponent.winmd" custom="true"/>
        </platform>
    
        <!-- other platforms -->
    
    </plugin>
    

즉, 이제는 세계와 공유할 수 있습니다 배포할 플러그인 있다! 한 가지 주의할 점은, 현재 공구 당신의 코르도바 있는지 확인 해야 합니다 그래서 Windows 코르도바 프로젝트에 프레임 워크를 추가 하기 위한 지원만 최근에 추가 되었습니다. 코르 도우 바 cli 및 코르도바 plugman 네이티브 백업된 플러그인 제거 추가 지원.

> cordova plugin add com.risingj.echoplugin

또는

> plugman install --platform windows --plugin com.risingj.echoplugin --project .

https://github.com/purplecabbage/cordova-runtimecomp-echoplug