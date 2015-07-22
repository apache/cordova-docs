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

# notification.beep

장치는 경고음 소리를 재생 합니다.

    navigator.notification.beep(times);
    

*   **시간**: 경고음을 반복 하는 횟수. *(수)*

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Tizen
*   Windows Phone 7과 8

## 빠른 예제

    // Beep twice!
    navigator.notification.beep(2);
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>Notification Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Empty
        }
    
        // Show a custom alert
        //
        function showAlert() {
            navigator.notification.alert(
                'You are the winner!',  // message
                'Game Over',            // title
                'Done'                  // buttonName
            );
        }
    
        // Beep three times
        //
        function playBeep() {
            navigator.notification.beep(3);
        }
    
        // Vibrate for 2 seconds
        //
        function vibrate() {
            navigator.notification.vibrate(2000);
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showAlert(); return false;">Show Alert</a></p>
        <p><a href="#" onclick="playBeep(); return false;">Play Beep</a></p>
        <p><a href="#" onclick="vibrate(); return false;">Vibrate</a></p>
      </body>
    </html>
    

## 안 드 로이드 단점

*   안 드 로이드 기본 **알림 벨소리** **설정/사운드 및 디스플레이** 패널에서 지정 합니다.

## Windows Phone 7, 8 특수

*   코르 도우 바 분포에서 일반 경고음 파일에 의존합니다.

## Tizen 특수

*   Tizen은 미디어 API 통해 오디오 파일을 재생 하 여 경고음을 구현 합니다.

*   경고음 파일에 위치 해야 합니다, 짧은 해야 한 `sounds` 응용 프로그램의 루트 디렉터리의 하위 디렉터리 명명 해야 합니다`beep.wav`.