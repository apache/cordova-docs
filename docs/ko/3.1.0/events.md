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
---


# 이벤트

> 코르 도우 바 수명 주기 이벤트입니다.

## 이벤트 유형

*   deviceready
*   일시 중지
*   이력서
*   온라인
*   오프 라인
*   backbutton
*   batterycritical
*   batterylow
*   batterystatus
*   menubutton
*   searchbutton
*   startcallbutton
*   endcallbutton
*   volumedownbutton
*   volumeupbutton

## 기능 액세스

버전 3.0, 코르도바 구현 배터리 상태 및 기타 장치 수준 Api *플러그인*으로. 배터리 상태와 관련이 없는 다른 모든 이벤트에 대 한 액세스는 기본적으로 사용 됩니다. CLI의 사용 `plugin` 에 명령줄 인터페이스를 설정 하거나 해제 하려면 배터리 이벤트를 설명 하는 명령:

        $ cordova plugin add org.apache.cordova.battery-status
        $ cordova plugin ls
        [ 'org.apache.cordova.battery-status' ]
        $ cordova plugin rm org.apache.cordova.battery-status
    

이 명령은 모든 타겟된 플랫폼에 적용 하지만 플랫폼 관련 구성 설정을 아래에 설명 된 수정:

*   안 드 로이드
    
        (in app/res/xml/config.xml)
        <feature name="Battery">
            <param name="android-package" value="org.apache.cordova.BatteryListener" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.BROADCAST_STICKY" />
        

*   블랙베리 WebWorks
    
        (in www/plugins.xml)
        <feature name="Battery">
            <param name="blackberry-package" value="org.apache.cordova.battery.Battery" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.app"          required="true" version="1.0.0.0" />
        <feature id="blackberry.app.event"    required="true" version="1.0.0.0" />
        <feature id="blackberry.system.event" required="true" version="1.0.0.0" />
        

*   (iOS`config.xml`)
    
        <feature name="Battery">
            <param name="ios-package" value="CDVBattery" />
        </feature>
        

*   (Tizen`config.xml`)
    
        <feature name="http://tizen.org/api/systeminfo" required="true"/>
        
    
    참조: [Tizen 웹 응용 프로그램에 대 한 응용 프로그램 매니페스트][1]

 [1]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

일부 플랫폼은 특별 한 구성이 필요 없이이 기능을 지원할 수 있습니다. *플랫폼 지원* 개요 섹션에서을 참조 하십시오.


# deviceready

이벤트는 코르도바는 완전히 로드 될 때 발생 합니다.

    document.addEventListener("deviceready", yourCallbackFunction, false);
    

## 세부 정보

이 이벤트는 모든 응용 프로그램에 필수적입니다. 코르도바의 장치 Api 로드를 액세스할 준비가 신호 합니다.

코르 도우 바 두 코드 베이스의 구성: 기본과 자바 스크립트. 네이티브 코드를 로드 하는 동안 사용자 지정 로딩 이미지를 표시 합니다. 그러나, 자바 스크립트는 DOM을 로드할 한 번만 로드 합니다. 즉, 웹 응용 프로그램 해당 네이티브 코드는 전에 코르 도우 바 자바 스크립트 함수를 호출 잠재적으로 수 있습니다.

`deviceready`코르도바 완전히 로드 되 면 이벤트가 발생 합니다. 한 번 이벤트가 발생 하면 안전 하 게 통화를 할 수 Cordova Api. 응용 프로그램은 일반적으로와 이벤트 리스너 첨부 `document.addEventListener` HTML 문서의 DOM 로드 되 면.

`deviceready`다른 사람에서 약간 다르게 동작 하는 이벤트. 후 등록 된 이벤트 처리기는 `deviceready` 이벤트가 발생은 즉시 호출 하는 콜백 함수.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Tizen
*   Windows Phone 7과 8
*   윈도우 8

## 빠른 예제

    document.addEventListener("deviceready", onDeviceReady, false);
    
    function onDeviceReady() {
        // Now safe to use device APIs
    }
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Ready Example</title>
    
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
            // Now safe to use device APIs
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# 일시 중지

이벤트는 응용 프로그램은 배경으로 끼워 넣을 때 발생 합니다.

    document.addEventListener("pause", yourCallbackFunction, false);
    

## 세부 정보

`pause`때 네이티브 플랫폼 두고 배경으로 응용 프로그램 일반적으로 다른 응용 프로그램으로 전환 하면 이벤트가 발생 합니다.

일반적으로 응용 프로그램을 사용 해야 합니다 `document.addEventListener` 한번 이벤트 리스너를 연결 하는 `deviceready` 이벤트가 발생 합니다.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
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


# 이력서

이벤트는 응용 프로그램이 배경에서 검색 될 때 발생 합니다.

    document.addEventListener("resume", yourCallbackFunction, false);
    

## 세부 정보

`resume`이벤트가 발생 네이티브 플랫폼 꺼내서 때 응용 프로그램이 배경에서.

일반적으로 응용 프로그램을 사용 해야 합니다 `document.addEventListener` 한번 이벤트 리스너를 연결 하는 `deviceready` 이벤트가 발생 합니다.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
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


# 온라인

응용 프로그램은 온라인 및 장치가 인터넷에 연결 된다 때이 이벤트가 발생 합니다.

    document.addEventListener("online", yourCallbackFunction, false);
    

## 세부 정보

`online`이전 연결 되지 않은 장치는 인터넷에 대 한 응용 프로그램 액세스를 허용 하도록 네트워크 연결을 받을 때 이벤트가 발생 합니다. 그것은 연결 API와 동일한 정보에 의존 하 고 경우의 값 `connection.type` 된다`NONE`.

일반적으로 응용 프로그램을 사용 해야 합니다 `document.addEventListener` 한번 이벤트 리스너를 연결 하는 `deviceready` 이벤트가 발생 합니다.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Windows Phone 7과 8
*   Tizen
*   윈도우 8

## 빠른 예제

    document.addEventListener("online", onOnline, false);
    
    function onOnline() {
        // Handle the online event
    }
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>Online Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("online", onOnline, false);
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
        }
    
        // Handle the online event
        //
        function onOnline() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## iOS 단점

처음 시작 하는 동안 첫 번째 `online` 이벤트 (있는 경우) 이전에 불 초 걸립니다 이상 `connection.type` 입니다`UNKNOWN`.

## Windows Phone 7 단점

에뮬레이터에서 실행 하는 경우는 `connection.status` 항상 불명 하다, 그래서이 이벤트에는 *없는* 불.

## Windows Phone 8 단점

에뮬레이터도 연결 형식을 보고 `Cellular` 는 변경 되지 않습니다, 그래서 이벤트에는 *없는* 불.


# 오프 라인

이벤트가 발생 하면 응용 프로그램 오프 라인, 이동 및 장치가 인터넷에 연결 되어 있지.

    document.addEventListener("offline", yourCallbackFunction, false);
    

## 세부 정보

`offline`이벤트가 발생 하면 응용 프로그램이 더 이상 인터넷에 액세스할 수 있도록 이전 연결 된 장치가 네트워크 연결 손실. 그것은 연결 API와 동일한 정보에 의존 하 고 경우에 `connection.type` 에서 변경 `NONE` 다른 값으로.

일반적으로 응용 프로그램을 사용 해야 합니다 `document.addEventListener` 한번 이벤트 리스너를 연결 하는 `deviceready` 이벤트가 발생 합니다.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   iOS
*   Windows Phone 7과 8
*   Tizen
*   윈도우 8

## 빠른 예제

    document.addEventListener("offline", onOffline, false);
    
    function onOffline() {
        // Handle the offline event
    }
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>Offline Example</title>
    
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
            document.addEventListener("offline", onOffline, false);
        }
    
        // Handle the offline event
        //
        function onOffline() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## iOS 단점

처음 시작 하는 동안 첫 번째 오프 라인 이벤트 (있는 경우)를 적어도 초를 걸립니다.

## Windows Phone 7 단점

에뮬레이터에서 실행 하는 경우는 `connection.status` 항상 불명 하다, 그래서이 이벤트는 *없는* 불.

## Windows Phone 8 단점

에뮬레이터도 연결 형식을 보고 `Cellular` 는 변경 되지 않습니다, 그래서 이벤트 않습니다 *하지* 불.


# backbutton

이벤트는 사용자가 뒤로 버튼을 누를 때 발생 합니다.

    document.addEventListener("backbutton", yourCallbackFunction, false);
    

## 세부 정보

기본 뒤로 버튼 동작을 재정의 하려면 등록에 대 한 이벤트 리스너는 `backbutton` 이벤트를 호출 하 여 일반적으로 `document.addEventListener` 받으시면는 `deviceready` 이벤트. 그것은 더 이상 뒤로 버튼 동작을 재정의 하려면 다른 메서드를 호출 하는 데 필요한입니다.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   Windows Phone 7과 8

## 빠른 예제

    document.addEventListener("backbutton", onBackKeyDown, false);
    
    function onBackKeyDown() {
        // Handle the back button
    }
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>Back Button Example</title>
    
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
            // Register the event listener
            document.addEventListener("backbutton", onBackKeyDown, false);
        }
    
        // Handle the back button
        //
        function onBackKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# batterycritical

이벤트 발생 때 배터리 중요 한 수준 임계값에 도달 했습니다.

    window.addEventListener("batterycritical", yourCallbackFunction, false);
    

## 세부 정보

이벤트 발생 때 배터리 충전 비율 배터리 위험 임계값에 도달 했습니다. 값은 장치 마다 다릅니다.

`batterycritical`처리기는 두 개의 속성이 포함 된 개체에 전달 됩니다:

*   **수준**: 배터리 충전 (0-100)의 비율. *(수)*

*   **isPlugged**: 장치 연결된 인치 *(부울)* 인지 여부를 나타내는 부울 값

일반적으로 응용 프로그램을 사용 해야 합니다 `window.addEventListener` 한번 이벤트 리스너를 연결 하는 `deviceready` 이벤트가 발생 합니다.

## 지원 되는 플랫폼

*   iOS
*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   Tizen

## 빠른 예제

    window.addEventListener("batterycritical", onBatteryCritical, false);
    
    function onBatteryCritical(info) {
        // Handle the battery critical event
        alert("Battery Level Critical " + info.level + "%\nRecharge Soon!");
    }
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>Battery Critical Example</title>
    
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
            window.addEventListener("batterycritical", onBatteryCritical, false);
        }
    
        // Handle the batterycritical event
        //
        function onBatteryCritical(info) {
            alert("Battery Level Critical " + info.level + "%\nRecharge Soon!");
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# batterylow

이벤트 발생 때 배터리 낮은 수준의 임계값에 도달 했습니다.

    window.addEventListener("batterylow", yourCallbackFunction, false);
    

## 세부 정보

이벤트 발생 때 배터리 충전 비율 낮은 배터리 임계값, 특정 값에 도달 했습니다.

`batterylow`처리기는 두 개의 속성이 포함 된 개체에 전달 됩니다:

*   **수준**: 배터리 충전 (0-100)의 비율. *(수)*

*   **isPlugged**: 장치 연결된 인치 *(부울)* 인지 여부를 나타내는 부울 값

일반적으로 응용 프로그램을 사용 해야 합니다 `document.addEventListener` 한번 이벤트 리스너를 연결 하는 `deviceready` 이벤트가 발생 합니다.

## 지원 되는 플랫폼

*   iOS
*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   Tizen

## 빠른 예제

    window.addEventListener("batterylow", onBatteryLow, false);
    
    function onBatteryLow(info) {
        // Handle the battery low event
        alert("Battery Level Low " + info.level + "%");
    }
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Ready Example</title>
    
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
            window.addEventListener("batterylow", onBatteryLow, false);
        }
    
        // Handle the batterylow event
        //
        function onBatteryLow(info) {
            alert("Battery Level Low " + info.level + "%");
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# batterystatus

이벤트는 배터리 상태에 변화가 있을 때 발생 합니다.

    window.addEventListener("batterystatus", yourCallbackFunction, false);
    

## 세부 정보

이 이벤트는 배터리 충전 비율 1% 이상에 의해 변경 될 때 또는 장치를 연결 하거나 분리 하는 경우 발생 합니다.

배터리 상태 처리기는 두 개의 속성이 포함 된 개체에 전달 됩니다.

*   **수준**: 배터리 충전 (0-100)의 비율. *(수)*

*   **isPlugged**: 장치 연결된 인치 *(부울)* 인지 여부를 나타내는 부울 값

일반적으로 응용 프로그램을 사용 해야 합니다 `window.addEventListener` 한번 이벤트 리스너를 연결 하는 `deviceready` 이벤트가 발생 합니다.

## 지원 되는 플랫폼

*   iOS
*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)
*   Windows Phone 7과 8
*   Tizen

## Windows Phone 7, 8 특수

Windows Phone 7 배터리 수준을 확인 하려면 네이티브 Api를 제공 하지 않습니다 때문에 `level` 속성은 사용할 수 없습니다. `isPlugged`매개 변수는 *는* 지원.

## 빠른 예제

    window.addEventListener("batterystatus", onBatteryStatus, false);
    
    function onBatteryStatus(info) {
        // Handle the online event
        console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
    }
    

## 전체 예제

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Ready Example</title>
    
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
            window.addEventListener("batterystatus", onBatteryStatus, false);
        }
    
        // Handle the batterystatus event
        //
        function onBatteryStatus(info) {
            console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# menubutton

이벤트는 사용자가 메뉴 버튼을 누를 때 발생 합니다.

    document.addEventListener("menubutton", yourCallbackFunction, false);
    

## 세부 정보

이벤트 처리기를 적용 기본 메뉴 버튼 동작을 재정의 합니다.

일반적으로 응용 프로그램을 사용 해야 합니다 `document.addEventListener` 한번 이벤트 리스너를 연결 하는 `deviceready` 이벤트가 발생 합니다.

## 지원 되는 플랫폼

*   안 드 로이드
*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)

## 빠른 예제

    document.addEventListener("menubutton", onMenuKeyDown, false);
    
    function onMenuKeyDown() {
        // Handle the back button
    }
    

## 전체 예제

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Menu Button Example</title>
    
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
            // Register the event listener
            document.addEventListener("menubutton", onMenuKeyDown, false);
        }
    
        // Handle the menu button
        //
        function onMenuKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# searchbutton

이벤트는 사용자가 안 드 로이드 검색 버튼을 누를 때 발생 합니다.

    document.addEventListener("searchbutton", yourCallbackFunction, false);
    

## 세부 정보

안 드 로이드 기본 검색 버튼 동작을 재정의 해야 할 경우 'searchbutton' 이벤트에 대 한 이벤트 리스너를 등록할 수 있습니다.

일반적으로 응용 프로그램을 사용 해야 합니다 `document.addEventListener` 한번 이벤트 리스너를 연결 하는 `deviceready` 이벤트가 발생 합니다.

## 지원 되는 플랫폼

*   안 드 로이드

## 빠른 예제

    document.addEventListener("searchbutton", onSearchKeyDown, false);
    
    function onSearchKeyDown() {
        // Handle the search button
    }
    

## 전체 예제

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Search Button Example</title>
    
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
            // Register the event listener
            document.addEventListener("searchbutton", onSearchKeyDown, false);
        }
    
        // Handle the search button
        //
        function onSearchKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# startcallbutton

이벤트 시작 호출 단추를 누를 때 발생 합니다.

    document.addEventListener("startcallbutton", yourCallbackFunction, false);
    

## 세부 정보

대 한 이벤트 리스너를 등록할 수 있습니다 시작 호출 기본 동작을 재정의 해야 할 경우는 `startcallbutton` 이벤트.

일반적으로 응용 프로그램을 사용 해야 합니다 `document.addEventListener` 한번 이벤트 리스너를 연결 하는 `deviceready` 이벤트가 발생 합니다.

## 지원 되는 플랫폼

*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)

## 빠른 예제

    document.addEventListener("startcallbutton", onStartCallKeyDown, false);
    
    function onStartCallKeyDown() {
        // Handle the start call button
    }
    

## 전체 예제

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Start Call Button Example</title>
    
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
            // Register the event listener
            document.addEventListener("startcallbutton", onStartCallKeyDown, false);
        }
    
        // Handle the start call button
        //
        function onStartCallKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# endcallbutton

최종 호출 단추를 누를 때이 이벤트가 발생 합니다.

    document.addEventListener("endcallbutton", yourCallbackFunction, false);
    

## 세부 정보

이벤트 기본 끝 전화 동작을 재정의 합니다.

일반적으로 응용 프로그램을 사용 해야 합니다 `document.addEventListener` 한번 이벤트 리스너를 연결 하는 `deviceready` 이벤트가 발생 합니다.

## 지원 되는 플랫폼

*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)

## 빠른 예제

    document.addEventListener("endcallbutton", onEndCallKeyDown, false);
    
    function onEndCallKeyDown() {
        // Handle the end call button
    }
    

## 전체 예제

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>End Call Button Example</title>
    
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
            // Register the event listener
            document.addEventListener("endcallbutton", onEndCallKeyDown, false);
        }
    
        // Handle the end call button
        //
        function onEndCallKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# volumedownbutton

이벤트 볼륨 다운 버튼을 누를 때 발생 합니다.

    document.addEventListener("volumedownbutton", yourCallbackFunction, false);
    

## 세부 정보

대 한 이벤트 리스너를 등록할 수 있습니다 동작 아래 기본 볼륨을 재정의 해야 할 경우는 `volumedownbutton` 이벤트.

일반적으로 응용 프로그램을 사용 해야 합니다 `document.addEventListener` 한번 이벤트 리스너를 연결 하는 `deviceready` 이벤트가 발생 합니다.

## 지원 되는 플랫폼

*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)

## 빠른 예제

    document.addEventListener("volumedownbutton", onVolumeDownKeyDown, false);
    
    function onVolumeDownKeyDown() {
        // Handle the volume down button
    }
    

## 전체 예제

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Volume Down Button Example</title>
    
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
            // Register the event listener
            document.addEventListener("volumedownbutton", onVolumeDownKeyDown, false);
        }
    
        // Handle the volume down button
        //
        function onVolumeDownKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# volumeupbutton

이벤트는 사용자가 버튼 위로 볼륨을 누를 때 발생 합니다.

    document.addEventListener("volumeupbutton", yourCallbackFunction, false);
    

## 세부 정보

대 한 이벤트 리스너를 등록할 수 있습니다 기본 볼륨 동작을 재정의 해야 할 경우는 `volumeupbutton` 이벤트.

일반적으로 응용 프로그램을 사용 해야 합니다 `document.addEventListener` 한번 이벤트 리스너를 연결 하는 `deviceready` 이벤트가 발생 합니다.

## 지원 되는 플랫폼

*   블랙베리 WebWorks (운영 체제 5.0와 더 높은)

## 빠른 예제

    document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);
    
    function onVolumeUpKeyDown() {
        // Handle the volume up button
    }
    

## 전체 예제

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Volume Up Button Example</title>
    
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
            // Register the event listener
            document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);
        }
    
        // Handle the volume up button
        //
        function onVolumeUpKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
