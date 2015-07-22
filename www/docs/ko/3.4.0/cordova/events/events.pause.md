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

# 일시 중지

이벤트는 응용 프로그램은 배경으로 끼워 넣을 때 발생 합니다.

    document.addEventListener("pause", yourCallbackFunction, false);
    

## 세부 정보

`pause`때 네이티브 플랫폼 두고 배경으로 응용 프로그램 일반적으로 다른 응용 프로그램으로 전환 하면 이벤트가 발생 합니다.

일반적으로 응용 프로그램을 사용 해야 합니다 `document.addEventListener` 한번 이벤트 리스너를 연결 하는 `deviceready` 이벤트가 발생 합니다.

## 지원 되는 플랫폼

*   아마존 화재 운영 체제
*   안 드 로이드
*   블랙베리 10
*   iOS
*   Windows Phone 7과 8
*   윈도우 8

## 빠른 예제

    document.addEventListener("pause", onPause, false);
    
    function onPause() {
        // Handle the pause event
    }
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>Pause Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            document.addEventListener("pause", onPause, false);
        }
    
        // Handle the pause event
        //
        function onPause() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## iOS 단점

에 있는 `pause` 처리기 호출 코르도바 API 또는 오브 젝 티브-C를 통해가 서 기본 플러그인 작동 하지 않습니다, 알림 등 대화형 호출, 함께 또는 `console.log()` . 응용 프로그램 다시 시작, 다음 실행된 루프에서 때만 처리 됩니다.

IOS 전용 `resign` 이벤트는 하는 대신 사용할 수 있는 `pause` , 사용자 포그라운드에서 실행 중인 응용 프로그램을 장치를 잠그려면 **잠금** 단추를 사용 하려면 때를 감지 하 고. 멀티 태스킹에 대 한 애플 리 케이 션 (및 장치)를 사용 하는 경우이 이후와 결합 `pause` 이벤트, iOS 5에서만. 사실, ios 5는 멀티 태스킹 활성화 모든 잠긴된 애플 리 케이 션 배경 올려집니다. IOS 5에서 잠겨 있을 때 실행 중인 남아 애플 리 케이 션, 애플 리 케이 션의 멀티태스킹 설정 하 여 해제할 [UIApplicationExitsOnSuspend][1] `YES` . IOS 4에 잠겨 있을 때 실행이 설정은 중요 하지 않습니다.

 [1]: http://developer.apple.com/library/ios/#documentation/general/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html