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

title: iOS 플러그인
---

# iOS 플러그인

플러그인은 확장 하는 오브 젝 티브-C 클래스는 `CDVPlugin` 클래스.

로 각 플러그인 클래스를 등록 해야 한 `<feature>` 태그는 `config.xml` [파일](../../../cordova/file/fileobj/fileobj.html). 그것은이 메커니즘을 통해 JavaScript가 `exec` 메서드의 `service` 매개 변수는 오브 젝 티브-C 클래스에 매핑됩니다.

## 플러그인 클래스 매핑

플러그인의 자바 부분 항상 사용 하는 `cordova.exec` 메서드가 다음과 같이:

    exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);
    

이 요청을 마샬링하는 `UIWebView` iOS 기본 측면, 더 많거나 적은 전화 아래로 끓는 `action` 메서드는 `service` 인수에 전달 된 클래스는 `args` 배열.

지정한 플러그인으로는 `<feature>` 코르도바 iOS 응용 프로그램의 프로젝트에 태그 `config.xml` [파일](../../../cordova/file/fileobj/fileobj.html).

    <feature name="LocalStorage">
        <param name="ios-package" value="CDVLocalStorage" />
    </feature>
    

기능 `name` 특성은 자바 스크립트의 사용 일치 해야 `exec` 호출의 `service` 매개 [변수](../../../plugin_ref/spec.html), 및 `value` 특성 플러그인의 목표-C 클래스의 이름과 일치 해야 합니다. `<param name>`난 항상 이어야 한다 `"ios-package"` . 이 설치를 수행 하지 않으면, 플러그인 컴파일 수 있습니다 하지만 코르도바 연결할 수 수 없습니다.

## 플러그인 초기화 및 수명

각각의 인생에 대 한 플러그인 개체의 인스턴스 생성 `UIWebView` . 플러그인은 인스턴스화되지 않습니다 JavaScript에서 호출 하 여 처음 참조 될 때까지 않는 한 `<param>` 와 `onload` `name` 특성 설정 `"true"` 에 `config.xml` . 예를 들면:

    <feature name="Echo">
        <param name="ios-package" value="Echo" />
        <param name="onload" value="true" />
    </feature>
    

*아니* 플러그인에 대 한 이니셜라이저를 지정입니다. 대신, 플러그인을 사용 해야 합니다에 `pluginInitialize` 그들의 시작 논리에 대 한 방법.

장기 실행 요청 플러그인 배경 활동 (예: 재생 미디어), 수신기 또는 내부 상태를 구현 해야 합니다에 `onReset` 메서드 및 중지 또는 그 활동을 정리. 이 방법은 때 실행 되는 `UIWebView` 이동 새 페이지 또는 새로 고침, 자바 스크립트를 다시 로드 하는.

## IOS 코르도바 플러그인 작성

우리는 플러그인 요청을 네이티브 쪽에서 자바 화재. 우리는 통해 제대로 매핑된 iOS 오브 젝 티브-C 플러그인은 `config.xml` [파일](../../../cordova/file/fileobj/fileobj.html). 그래서 무슨 최종 iOS 오브 젝 티브-C 플러그인 클래스 처럼 보여요?

무슨 자바 스크립트를 통해 플러그인에 파견 되 면 `exec` 함수는 해당 플러그인 클래스에 전달 되 면 `action` 메서드. 플러그인 방법이이 서명을 했다:

    - (void)myMethod:(CDVInvokedUrlCommand*)command
    {
        CDVPluginResult* pluginResult = nil;
        NSString* myarg = [command.arguments objectAtIndex:0];
    
        if (myarg != nil) {
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
        } else {
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"Arg was null"];
        }
        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    }
    

1.  [CDVInvokedUrlCommand.h][1]

2.  [CDVPluginResult.h][2]

3.  [CDVCommandDelegate.h][3]

 [1]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVInvokedUrlCommand.h
 [2]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPluginResult.h
 [3]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVCommandDelegate.h

## iOS CDVPluginResult 메시지 유형

CDVPluginResult를 사용 하 여 돌아갈 수 있습니다 다양 한 결과 형식 다시 자바 스크립트 콜백을 처럼 클래스 메서드를 사용 하 여:

    + (CDVPluginResult*)resultWithStatus:(CDVCommandStatus)statusOrdinal messageAs...
    

만들 수 있는 `String` , `Int` , `Double` , `Bool` , `Array` , `Dictionary` , `ArrayBuffer` , 및 `Multipart` 형식. 또는 인수 (그냥 송신 상태)를 첨부 하지 않습니다. 또는 오류를 반환 합니다. 선택할 수 있습니다 심지어 어떤 플러그인 결과 전혀 보내지를 어떤 경우에 콜백이 발생 하지 않습니다.

### 노트

*   `messageAsArrayBuffer`기대 `NSData*` 를 변환 하 고는 `ArrayBuffer` JavaScript 콜백에 대 한 (그리고 `ArrayBuffers` 플러그인 자바에서 보낸 변환 됩니다`NSData*`).
*   `messageAsMultipart` 기대는 `NSArray *` 포함 된 다른 지원 되는 유형, 그리고로 전체 배열을 보냅니다에 `인수` 당신의 자바를. 
    *   특질: 이건 그냥 구문 설탕 (비록 그것은 달콤한)입니다. 이 방법의 모든 인수와 직렬화 또는 역직렬화 필요에 따라. 예를 들어, 그것은 반환 안전 `NSData*` 다중, 하지만 아니라 `Array` /`Dictionary`.

## 에코 플러그인 iOS 플러그인

우리는 프로젝트의 다음에 추가할 `config.xml` [파일](../../../cordova/file/fileobj/fileobj.html):

    <feature name="Echo">
        <param name="ios-package" value="Echo" />
    </feature>
    

그 후에 다음 [파일](../../../cordova/file/fileobj/fileobj.html) 추가 ( `Echo.h` 및 `Echo.m` ) 우리의 코르도바 iOS 응용 프로그램 디렉터리 안에 플러그인 디렉토리:

    /********* Echo.h Cordova Plugin Header *******/
    
    #import <Cordova/CDV.h>
    
    @interface Echo : CDVPlugin
    
    - (void)echo:(CDVInvokedUrlCommand*)command;
    
    @end
    
    /********* Echo.m Cordova Plugin Implementation *******/
    
    #import "Echo.h"
    #import <Cordova/CDV.h>
    
    @implementation Echo
    
    - (void)echo:(CDVInvokedUrlCommand*)command
    {
        CDVPluginResult* pluginResult = nil;
        NSString* echo = [command.arguments objectAtIndex:0];
    
        if (echo != nil && [echo length] > 0) {
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:echo];
        } else {
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
        }
    
        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    }
    
    @end
    

코드를 살펴 봅시다. 상단에 우리는 모든 필요한 코르 도우 바 수입. 우리의 클래스에서 확장 `CDVPlugin` (매우 중요).

이 플러그인만 지원 한 행동은 `echo` 작업. 첫째, 우리는 에코 문자열 사용 하 여 잡아는 `objectAtIndex` 방법에 우리의 `args` , 그것을 말하고 우리 싶어 일까 매개 [변수](../../../plugin_ref/spec.html) 인수 배열. 우리가 매개 [변수](../../../plugin_ref/spec.html) 검사의 조금을 할: 그것은 다는 것을 확인 `nil` , 그것은 길이가 0 인 문자열이 있는지 확인 하십시오.

경우 그것은, 우리는 반환 된 `PluginResult` 와 `ERROR` 상태. 모든 그 검사 통과 경우 우리가 반환는 `PluginResult` 와 `OK` 상태, 및 통과 `echo` 우리는 처음에 매개 변수로 받은 문자열.

마지막으로, 우리는 결과를 보낼 `self.commandDelegate` , 실행 하는 `exec` 메서드의 성공 또는 실패 콜백 JavaScript 측에. 성공 콜백 호출에 전달 된 `echo` 매개 [변수](../../../plugin_ref/spec.html).

## 스레딩

플러그인 메서드는 UI와 동일한 스레드에서 실행 됩니다. 귀하의 플러그인 처리의 큰 거래를 필요로 하거나 차단 호출, 백그라운드 스레드를 사용 해야 합니다. 예를 들어:

    - (void)myPluginMethod:(CDVInvokedUrlCommand*)command
    {
        // Check command.arguments here.
        [self.commandDelegate runInBackground:^{
            NSString* payload = nil;
            // Some blocking logic...
            CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:payload];
            // The sendPluginResult method is thread-safe.
            [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
        }];
    }
    

## 고급 플러그인 기능

재정의할 수 있는 다른 방법을 참조 하십시오.

*   [CDVPlugin.h][4]

*   [CDVPlugin.m][5]

 [4]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.h
 [5]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.m

예를 들어에 연결할 수 있습니다는 `pause` , `resume` , 응용 프로그램 종료 및 `handleOpenURL` [이벤트](../../../cordova/events/events.html).

## 플러그인을 디버깅

오브 젝 티브-C 측을 디버깅 하려면 Xcode의 내장 디버거를 사용 합니다. 자바 스크립트, ios 5.0 사용할 수 있습니다 [Weinre, 아파치 코르도바 프로젝트][6] 또는 [iWebInspector, 세 번째 파티 유틸리티][7]

 [6]: https://github.com/apache/cordova-weinre
 [7]: http://www.iwebinspector.com/

IOS 6에 대 한 단순히 6 시뮬레이터는 iOS에서 실행 되는 응용 프로그램에 연결할 사파리 6.0를 사용 합니다.

## 일반적인 함정

*   Config.xml에 플러그인의 매핑을 추가 하는 것을 잊지 마세요. 당신이 잊은 경우 Xcode 콘솔에 오류가 기록 됩니다.

*   도메인 화이트 리스트 가이드에 설명 된 대로, whitelist에 연결할 호스트를 추가 하는 것을 잊지 마세요. 당신이 잊은 경우 Xcode 콘솔에 오류가 기록 됩니다.