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

# 이력서

이벤트는 응용 프로그램이 배경에서 검색 될 때 발생 합니다.

    document.addEventListener("resume", yourCallbackFunction, false);
    

## 세부 정보

`resume`이벤트가 발생 네이티브 플랫폼 꺼내서 때 응용 프로그램이 배경에서.

일반적으로 응용 프로그램을 사용 해야 합니다 `document.addEventListener` 한번 이벤트 리스너를 연결 하는 `deviceready` 이벤트가 발생 합니다.

## 지원 되는 플랫폼

*   아마존 화재 운영 체제
*   안 드 로이드
*   블랙베리 10
*   iOS
*   Windows Phone 7과 8
*   윈도우 8

## 빠른 예제

    document.addEventListener("resume", onResume, false);
    
    function onResume() {
        // Handle the resume event
    }
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>Resume Example</title>
    
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
            document.addEventListener("resume", onResume, false);
        }
    
        // Handle the resume event
        //
        function onResume() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## iOS 단점

대화형 함수에서 호출 된 `pause` 이벤트 처리기 실행 후 응용 프로그램 다시 시작 될 때에 의해 신호는 `resume` 이벤트. 이들은 경고, `console.log()` , 및 목표-c.를 통해가 플러그인 이나 API, 코르도바에서 호출

*   **활성** 이벤트
    
    IOS 전용 `active` 이벤트는 하는 대신 사용할 수 있는 `resume` , 검색 사용자 포그라운드에서 실행 애플 리 케이 션과 장치 잠금을 해제 하려면 **잠금** 단추를 사용 하지 않도록 설정 하 고. 멀티 태스킹에 대 한 애플 리 케이 션 (및 장치)를 사용 하는 경우이 이후와 결합 `resume` 이벤트, iOS 5에서만. 사실, ios 5는 멀티 태스킹 활성화 모든 잠긴된 애플 리 케이 션 배경 올려집니다. IOS 5에서 잠겨 있을 때 실행 중인 남아 애플 리 케이 션, 애플 리 케이 션의 멀티태스킹 설정 하 여 해제할 [UIApplicationExitsOnSuspend][1] `YES` . IOS 4에 잠겨 있을 때 실행이 설정은 중요 하지 않습니다.

*   **다시 시작** 이벤트
    
    호출 하는 경우는 `resume` 이벤트 처리기와 같은 대화형 기능 `alert()` 에 싸여 수 필요는 `setTimeout()` 0, 또는 다른 애플 리 케이 션 응답 시간 초과 값 호출. 예를 들어:
    
        document.addEventListener("resume", onResume, false);
        function onResume() {
           setTimeout(function() {
                  // TODO: do your thing!
                }, 0);
        }
        

 [1]: http://developer.apple.com/library/ios/#documentation/general/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html