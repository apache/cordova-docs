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

# iOS 플러그인

이 섹션에서는 iOS 플랫폼에서 네이티브 플러그인 코드를 구현 하는 방법에 대 한 세부 정보를 제공 합니다. 이것을 읽기 전에 응용 프로그램 플러그인 플러그인의 구조와 그것의 일반 자바 스크립트 인터페이스의 개요 참조 하십시오. 이 섹션 코르도바 webview에서 네이티브 플랫폼 및 뒤 통신 샘플 *에코* 플러그인을 설명 하 고 있습니다.

IOS 플러그인은 확장 하는 오브 젝 티브-C 클래스로 구현 되는 `CDVPlugin` 클래스. Javascript의 `exec` 메서드의 `service` 매개 변수-C 클래스, 각 플러그인 클래스에 지도를 등록 해야 합니다에 `<feature>` 명명 된 응용 프로그램 디렉터리에 태그 `config.xml` 파일.

## 플러그인 클래스 매핑

플러그인의 자바 부분 사용 하는 `cordova.exec` 메서드가 다음과 같이:

        exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);
    

이 요청을 마샬링하는 `UIWebView` iOS 기본 측면을 효과적으로 호출는 `action` 메서드는 `service` 인수에 전달 된 클래스는 `args` 배열.

로 플러그인을 지정는 `<feature>` 코르도바 iOS 응용 프로그램의 프로젝트에 태그 `config.xml` 파일을 사용 하는 `plugin.xml` 파일을 자동으로 응용 프로그램 플러그인에 설명 된 대로이 태그를 삽입:

        <feature name="LocalStorage">
            <param name="ios-package" value="CDVLocalStorage" />
        </feature>
    

특징의 `name` 특성 자바 스크립트 변수로 지정한 일치 해야 `exec` 호출의 `service` 매개 변수. `value`특성 플러그인의 목표-C 클래스의 이름과 일치 해야 합니다. `<param>`요소의 `name` 항상 이어야 한다 `ios-package` . 이러한 지침을 수행 하지 않으면 플러그인 컴파일 될 수 있습니다, 하지만 코르도바 여전히 않을 수 있습니다 액세스할 수 있습니다.

## 플러그인 초기화 및 수명

각각의 인생에 대 한 플러그인 개체의 인스턴스 생성 `UIWebView` . 자바 스크립트에서 호출 하 여 처음 참조 될 때 플러그인 일반적으로 인스턴스화됩니다. 그렇지 않으면 그들은 설정 하 여 인스턴스화할 수는 `param` 라는 `onload` 에 `true` 에 `config.xml` 파일:

        <feature name="Echo">
            <param name="ios-package" value="Echo" />
            <param name="onload" value="true" />
        </feature>
    

*아니* 플러그인에 대 한 이니셜라이저를 지정입니다. 대신, 플러그인을 사용 해야 합니다에 `pluginInitialize` 그들의 시작 논리에 대 한 방법.

미디어 재생, 청취자, 또는 그 내부 상태를 구현 해야 합니다 유지와 같은 장기 실행 요청 플러그인 활동 배경에서 `onReset` 그 활동을 정리 하는 방법. 메서드 실행 때는 `UIWebView` JavaScript를 다시 로드 하는 새 페이지 또는 새로 고침를 탐색.

## IOS 코르도바 플러그인 작성

플러그인 요청을 네이티브 쪽에서 자바 호출 발생 및 해당 iOS 오브 젝 티브-C 플러그인에 제대로 매핑되지는 `config.xml` 파일, 하지만 최종 iOS 오브 젝 티브-C 플러그인 클래스 보기의 같은? 어떤 자바 스크립트의 플러그인 디스패치 됩니다 `exec` 함수는 해당 플러그인 클래스에 전달 됩니다 `action` 방법. 플러그인 방법이이 서명을 했다:

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
    

자세한 내용은 참조 `[CDVInvokedUrlCommand.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVInvokedUrlCommand.h)` , `[CDVPluginResult.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPluginResult.h)` , 그리고`[CDVCommandDelegate.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVCommandDelegate.h)`.

## iOS CDVPluginResult 메시지 유형

사용할 수 있습니다 `CDVPluginResult` 다양 한 결과 반환 형식을 다시 JavaScript 콜백,이 패턴을 따르는 클래스 메서드를 사용 하 여:

        + (CDVPluginResult*)resultWithStatus:(CDVCommandStatus)statusOrdinal messageAs...
    

만들 수 있는 `String` , `Int` , `Double` , `Bool` , `Array` , `Dictionary` , `ArrayBuffer` , 및 `Multipart` 형식. 또한 상태를 보내거나 하면 오류가 반환 인수 두고 하거나 심지어 어떤 플러그인 결과 전송 하지 않도록 선택할 수 있습니다, 그리고 어떤 경우에 콜백 발생.

복잡 한 반환 값에 대 한 다음 note:

*   `messageAsArrayBuffer`기대 `NSData*` 변환 및는 `ArrayBuffer` JavaScript 콜백에서 합니다. 마찬가지로, 어떤 `ArrayBuffer` 플러그인을 자바 보냅니다 변환 됩니다`NSData*`.

*   `messageAsMultipart`기대는 `NSArray*` 유형, 포함 된 다른 지원 되는 고로 전체 배열을 보냅니다는 `arguments` JavaScript 콜백 하. 이 방법은 모든 인수는 직렬화 또는 역직렬화 필요에 따라 반환 안전 그래서 `NSData*` 다중, 하지만 아니라 `Array` /`Dictionary`.

## 에코 iOS 플러그인 예제

응용 프로그램 플러그인에서 설명 하는 자바 인터페이스 *에코* 기능은 사용는 `plugin.xml` 를 삽입 하는 `feature` 로컬 플랫폼 사양 `config.xml` 파일:

        <platform name="ios">
            <config-file target="config.xml" parent="/*">
                <feature name="Echo">
                    <param name="ios-package" value="Echo" />
                </feature>
            </config-file>
        </platform>
    

다음 추가 다음 `Echo.h` 및 `Echo.m` 파일에 `Plugins` 코르도바 iOS 응용 프로그램 디렉터리 내에 폴더:

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
    

클래스를 확장 하는 파일의 상단에 필요한 수입 `CDVPlugin` . 이 경우에, 플러그인 지원 단일 `echo` 작업. 에코 문자열을 호출 하 여 얻습니다는 `objectAtIndex` 방법 얻을 첫 번째 매개 변수는 `arguments` 배열 인수에 대응 하는 자바 스크립트에 의해 전달 된 `exec()` 기능.

그것은 되도록 매개 변수를 검사 `nil` 또는 빈 문자열을 반환 한 `PluginResult` 와 `ERROR` 상태 그렇다면. 반환 하는 경우 매개 변수 검사를 통과, 한 `PluginResult` 와 `OK` 상태, 원래에서 전달 `echo` 문자열. 마지막으로, 그것은 결과를 보냅니다 `self.commandDelegate` , 실행 하는 `exec` 자바 스크립트 측면에서 메서드의 성공 또는 실패 콜백. 성공 콜백 호출에 전달 된 `echo` 매개 변수.

## iOS 통합

`CDVPlugin`클래스 기능 플러그인 재정의할 수 있는 다른 방법. 예, 캡처할 수는 `pause` , `resume` , 응용 프로그램 종료 및 `handleOpenURL` 이벤트. 지도 대 한 [CDVPlugin.h][1] 및 [CDVPlugin.m][2] 클래스를 참조 하십시오.

 [1]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.h
 [2]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.m

## 스레딩

플러그인 방법 일반적으로 주요 인터페이스와 동일한 스레드에서 실행 됩니다. 귀하의 플러그인 처리의 큰 거래를 필요로 하거나 차단 호출, 백그라운드 스레드를 사용 해야 합니다. 예를 들어:

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
    

## IOS 플러그인을 디버깅

오브 젝 티브-C에 디버깅 해야 Xcode의 기본 제공 디버거. 자바 스크립트, ios 5.0 사용할 수 있습니다 [Weinre, 아파치 코르도바 프로젝트][3] 또는 [iWebInspector, 세 번째 파티 유틸리티][4]. IOS 6에 대 한 사파리 6.0 6 시뮬레이터는 iOS에서 실행 되는 응용 프로그램에 연결할 수 있습니다.

 [3]: https://github.com/apache/cordova-weinre
 [4]: http://www.iwebinspector.com/

## 일반적인 함정

*   귀하의 플러그인의 매핑을 추가 하는 것을 잊지 마세요 `config.xml` . 당신이 잊은 경우 Xcode 콘솔에 오류가 기록 됩니다.

*   도메인 화이트 리스트 가이드에 설명 된 대로, whitelist에 연결할 호스트를 추가 하는 것을 잊지 마세요. 당신이 잊은 경우 Xcode 콘솔에 오류가 기록 됩니다.