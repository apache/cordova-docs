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


# 事件

> 科爾多瓦生命週期事件。

## 事件種類

*   deviceready
*   暫停
*   簡歷
*   線上
*   離線
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

## 訪問功能

版本為 3.0，科爾多瓦實現電池狀態和其他設備級 Api 作為*外掛程式*。 預設情況下啟用對所有其他不相關的電池狀態的事件的訪問。 使用 CLI 的 `plugin` 命令，描述在命令列介面，可以啟用或禁用電池事件：

        $ cordova plugin add org.apache.cordova.battery-status
        $ cordova plugin ls
        [ 'org.apache.cordova.battery-status' ]
        $ cordova plugin rm org.apache.cordova.battery-status
    

這些命令適用于所有有針對性的平臺，但修改如下所述的特定于平臺的配置設置：

*   Android 系統
    
        (in app/res/xml/config.xml)
        <feature name="Battery">
            <param name="android-package" value="org.apache.cordova.BatteryListener" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.BROADCAST_STICKY" />
        

*   黑莓手機 WebWorks
    
        (in www/plugins.xml)
        <feature name="Battery">
            <param name="blackberry-package" value="org.apache.cordova.battery.Battery" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.app"          required="true" version="1.0.0.0" />
        <feature id="blackberry.app.event"    required="true" version="1.0.0.0" />
        <feature id="blackberry.system.event" required="true" version="1.0.0.0" />
        

*   （在 iOS`config.xml`)
    
        <feature name="Battery">
            <param name="ios-package" value="CDVBattery" />
        </feature>
        

*   （在 Tizen`config.xml`)
    
        <feature name="http://tizen.org/api/systeminfo" required="true"/>
        
    
    引用： [Tizen Web 應用程式的應用程式清單][1]

 [1]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

一些平臺可能支援此功能，而無需任何特殊的配置。請參見在概述部分中*的平臺支援*。


# deviceready

科爾多瓦是在完全載入時，將觸發該事件。

    document.addEventListener("deviceready", yourCallbackFunction, false);
    

## 詳細資訊

此事件的任何應用程式至關重要。它發出信號科爾多瓦的設備已載入的 Api，並準備訪問。

科爾多瓦組成的兩個代碼庫： 本機和 JavaScript。 雖然本機代碼載入、 顯示的自訂載入圖像。 然而，JavaScript 僅載入一旦 DOM 裝載。 這意味著您的 web 應用程式可能有可能調用的科爾多瓦 JavaScript 函數之前的相應的本機代碼是可用。

`deviceready`科爾多瓦已完全載入後會觸發事件。 一次事件火，你可以安全地使對科爾多瓦 Api 的調用。 應用程式通常將附加一個事件攔截器與 `document.addEventListener` 一旦 HTML 文檔的 DOM 已載入。

`deviceready`事件從其他人的行為方式略有不同。註冊後的任何事件處理 `deviceready` 事件將觸發了其立即調用的回呼函數。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Tizen
*   Windows Phone 7 和 8
*   Windows 8

## 快速的示例

    document.addEventListener("deviceready", onDeviceReady, false);
    
    function onDeviceReady() {
        // Now safe to use device APIs
    }
    

## 完整的示例

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


# 暫停

當一個應用程式放入後臺，將觸發該事件。

    document.addEventListener("pause", yourCallbackFunction, false);
    

## 詳細資訊

`pause`當本機平臺放入背景，應用程式通常在使用者切換到不同的應用程式時激發的事件。

應用程式通常應使用 `document.addEventListener` 將一個事件攔截器附加一次 `deviceready` 事件火災。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8
*   Windows 8

## 快速的示例

    document.addEventListener("pause", onPause, false);
    
    function onPause() {
        // Handle the pause event
    }
    

## 完整的示例

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
    

## iOS 的怪癖

在 `pause` 處理常式中，任何調用到科爾多瓦 API 或穿過目標 C 的本機外掛程式不工作，以及任何互動式調用，如警報或 `console.log()` 。 當應用程式恢復後，在下一次運行迴圈上他們，只處理。

特定于 iOS `resign` 事件是可用作為替代 `pause` ，並檢測時的使用者啟用**鎖定**按鈕鎖定設備與應用程式在前臺運行。 如果為多工啟用的應用程式 （和設備），則這配對與其後 `pause` 事件，但只在 iOS 5 下的。 實際上，所有鎖定應用程式已啟用多工的 iOS 5 中被推到背景中。 對於應用程式繼續運行在 iOS 5 下鎖定時，禁用應用程式的多工處理通過將[UIApplicationExitsOnSuspend][1]設置為 `YES` 。 若要運行在 iOS 4 上鎖定狀態時，此設置並不重要。

 [1]: http://developer.apple.com/library/ios/#documentation/general/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html


# 簡歷

當應用程式從背景中檢索時，將觸發該事件。

    document.addEventListener("resume", yourCallbackFunction, false);
    

## 詳細資訊

`resume`事件觸發時的本機平臺拔出從背景的應用程式。

應用程式通常應使用 `document.addEventListener` 將一個事件攔截器附加一次 `deviceready` 事件火災。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8
*   Windows 8

## 快速的示例

    document.addEventListener("resume", onResume, false);
    
    function onResume() {
        // Handle the resume event
    }
    

## 完整的示例

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
    

## iOS 的怪癖

從調用任何互動式函數 `pause` 事件處理常式以後執行應用程式恢復時，由發出信號 `resume` 事件。 這些包括警報， `console.log()` ，和任何調用從外掛程式或 API，科爾多瓦，穿過目標 C.

*   **活動**事件
    
    特定于 iOS `active` 事件是可用作為替代 `resume` ，並檢測時使用者禁用**鎖定**按鈕以解鎖設備與應用程式在前臺運行。 如果為多工啟用的應用程式 （和設備），則這配對與其後 `resume` 事件，但只在 iOS 5 下的。 實際上，所有鎖定應用程式已啟用多工的 iOS 5 中被推到背景中。 對於應用程式繼續運行在 iOS 5 下鎖定時，禁用應用程式的多工處理通過將[UIApplicationExitsOnSuspend][1]設置為 `YES` 。 若要運行在 iOS 4 上鎖定狀態時，此設置並不重要。

*   **恢復**事件
    
    當從調用 `resume` 事件處理常式，如互動式功能 `alert()` 需要包裝在 `setTimeout()` 調用超時值為零，否則應用程式掛起。 例如：
    
        document.addEventListener("resume", onResume, false);
        function onResume() {
           setTimeout(function() {
                  // TODO: do your thing!
                }, 0);
        }
        

 [1]: http://developer.apple.com/library/ios/#documentation/general/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html


# 線上

當應用程式進入線上狀態，和該設備將成為連接到互聯網時觸發此事件。

    document.addEventListener("online", yourCallbackFunction, false);
    

## 詳細資訊

`online`當先前連接的行動裝置接收到一個網路連接以允許應用程式訪問互聯網時激發的事件。 它依賴于連接 API 中，相同的資訊和火災時的值 `connection.type` 成為`NONE`.

應用程式通常應使用 `document.addEventListener` 將一個事件攔截器附加一次 `deviceready` 事件火災。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8
*   Tizen
*   Windows 8

## 快速的示例

    document.addEventListener("online", onOnline, false);
    
    function onOnline() {
        // Handle the online event
    }
    

## 完整的示例

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
    

## iOS 的怪癖

在初始啟動期間第一次 `online` 事件 （如果適用），至少需一秒的火災之前的, `connection.type` 是`UNKNOWN`.

## Windows Phone 7 的怪癖

當運行在模擬器中， `connection.status` 始終是未知的因此，此事件將*不*火。

## Windows Phone 8 怪癖

模擬程式報告連線類型為 `Cellular` ，而不會更改，所以事件將*不*火。


# 離線

當一個應用程式離線時，與該設備未連接到互聯網時，將觸發該事件。

    document.addEventListener("offline", yourCallbackFunction, false);
    

## 詳細資訊

`offline`以前連接的設備失去網路連接，這樣，應用程式不再可以訪問互聯網時激發的事件。 它依賴于連接 API 中，相同的資訊和火災時 `connection.type` 從更改 `NONE` 為其他任何值。

應用程式通常應使用 `document.addEventListener` 將一個事件攔截器附加一次 `deviceready` 事件火災。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8
*   Tizen
*   Windows 8

## 快速的示例

    document.addEventListener("offline", onOffline, false);
    
    function onOffline() {
        // Handle the offline event
    }
    

## 完整的示例

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
    

## iOS 的怪癖

在初始啟動期間，第一次離線事件 （如果適用） 需至少一秒的火。

## Windows Phone 7 的怪癖

當運行在模擬器中， `connection.status` 始終是未知的因此此事件不會*不*火。

## Windows Phone 8 怪癖

模擬程式報告連線類型為 `Cellular` ，而不會更改，所以該事件不會*不*火。


# backbutton

在使用者按後退按鈕時，將觸發該事件。

    document.addEventListener("backbutton", yourCallbackFunction, false);
    

## 詳細資訊

要重寫後退按鈕的預設行為，註冊為事件攔截器 `backbutton` 事件，通常通過調用 `document.addEventListener` 一旦您收到 `deviceready` 事件。 不再需要調用任何其他方法重寫的後退按鈕的行為。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   Windows Phone 7 和 8

## 快速的示例

    document.addEventListener("backbutton", onBackKeyDown, false);
    
    function onBackKeyDown() {
        // Handle the back button
    }
    

## 完整的示例

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

當電池達到臨界閾值時，將觸發該事件。

    window.addEventListener("batterycritical", yourCallbackFunction, false);
    

## 詳細資訊

當電池計量的百分比已達到關鍵電池閾值時，將觸發該事件。值是特定于設備。

`batterycritical`處理常式傳遞一個物件，包含兩個屬性：

*   **級別**: 電池充電 (0-100) 的百分比。*（人數）*

*   **isPlugged**： 一個布林值，該值指示設備是否插*(布林值)*

應用程式通常應使用 `window.addEventListener` 將一個事件攔截器附加一次 `deviceready` 事件火災。

## 支援的平臺

*   iOS
*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   Tizen

## 快速的示例

    window.addEventListener("batterycritical", onBatteryCritical, false);
    
    function onBatteryCritical(info) {
        // Handle the battery critical event
        alert("Battery Level Critical " + info.level + "%\nRecharge Soon!");
    }
    

## 完整的示例

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

當電池達到低級別閾值時，將觸發該事件。

    window.addEventListener("batterylow", yourCallbackFunction, false);
    

## 詳細資訊

當電池計量的百分比已達到電池計量低門檻，設備特定值時，將觸發該事件。

`batterylow`處理常式傳遞一個物件，包含兩個屬性：

*   **級別**: 電池充電 (0-100) 的百分比。*（人數）*

*   **isPlugged**： 一個布林值，該值指示設備是否插*(布林值)*

應用程式通常應使用 `document.addEventListener` 將一個事件攔截器附加一次 `deviceready` 事件火災。

## 支援的平臺

*   iOS
*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   Tizen

## 快速的示例

    window.addEventListener("batterylow", onBatteryLow, false);
    
    function onBatteryLow(info) {
        // Handle the battery low event
        alert("Battery Level Low " + info.level + "%");
    }
    

## 完整的示例

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

在電池的狀態中的更改時，將觸發該事件。

    window.addEventListener("batterystatus", yourCallbackFunction, false);
    

## 詳細資訊

當電池計量的百分比改變了至少 1%，或如果在插入或拔出該設備會觸發此事件。

電池狀態處理常式傳遞一個物件，包含兩個屬性：

*   **級別**: 電池充電 (0-100) 的百分比。*（人數）*

*   **isPlugged**： 一個布林值，該值指示設備是否插*(布林值)*

應用程式通常應使用 `window.addEventListener` 將一個事件攔截器附加一次 `deviceready` 事件火災。

## 支援的平臺

*   iOS
*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   Windows Phone 7 和 8
*   Tizen

## Windows Phone 7 和 8 怪癖

Windows Phone 7 並不提供本機 Api 來確定電池計量水準，所以 `level` 是不可用的屬性。`isPlugged`參數**支援的。

## 快速的示例

    window.addEventListener("batterystatus", onBatteryStatus, false);
    
    function onBatteryStatus(info) {
        // Handle the online event
        console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
    }
    

## 完整的示例

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

在使用者按功能表按鈕時，將觸發該事件。

    document.addEventListener("menubutton", yourCallbackFunction, false);
    

## 詳細資訊

事件處理常式的應用覆蓋的預設功能表按鈕行為。

應用程式通常應使用 `document.addEventListener` 將一個事件攔截器附加一次 `deviceready` 事件火災。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）

## 快速的示例

    document.addEventListener("menubutton", onMenuKeyDown, false);
    
    function onMenuKeyDown() {
        // Handle the back button
    }
    

## 完整的示例

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

當使用者按 Android 上的搜尋按鈕時，將觸發該事件。

    document.addEventListener("searchbutton", yourCallbackFunction, false);
    

## 詳細資訊

如果您需要重寫預設的搜尋按鈕行為在 android 系統上您可以註冊為 'searchbutton' 事件一個事件攔截器。

應用程式通常應使用 `document.addEventListener` 將一個事件攔截器附加一次 `deviceready` 事件火災。

## 支援的平臺

*   Android 系統

## 快速的示例

    document.addEventListener("searchbutton", onSearchKeyDown, false);
    
    function onSearchKeyDown() {
        // Handle the search button
    }
    

## 完整的示例

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

當使用者按下開始呼叫按鈕時，將觸發該事件。

    document.addEventListener("startcallbutton", yourCallbackFunction, false);
    

## 詳細資訊

如果您需要重寫預設開始調用行為您可以註冊為事件攔截器 `startcallbutton` 事件。

應用程式通常應使用 `document.addEventListener` 將一個事件攔截器附加一次 `deviceready` 事件火災。

## 支援的平臺

*   黑莓手機 WebWorks （OS 5.0 和更高）

## 快速的示例

    document.addEventListener("startcallbutton", onStartCallKeyDown, false);
    
    function onStartCallKeyDown() {
        // Handle the start call button
    }
    

## 完整的示例

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

當使用者按下結束通話按鈕時，將激發此事件。

    document.addEventListener("endcallbutton", yourCallbackFunction, false);
    

## 詳細資訊

該事件將重寫預設結束調用行為。

應用程式通常應使用 `document.addEventListener` 將一個事件攔截器附加一次 `deviceready` 事件火災。

## 支援的平臺

*   黑莓手機 WebWorks （OS 5.0 和更高）

## 快速的示例

    document.addEventListener("endcallbutton", onEndCallKeyDown, false);
    
    function onEndCallKeyDown() {
        // Handle the end call button
    }
    

## 完整的示例

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

在使用者按下按鈕卷時，將觸發該事件。

    document.addEventListener("volumedownbutton", yourCallbackFunction, false);
    

## 詳細資訊

如果您需要重寫預設音量降低的行為你可以註冊為事件攔截器 `volumedownbutton` 事件。

應用程式通常應使用 `document.addEventListener` 將一個事件攔截器附加一次 `deviceready` 事件火災。

## 支援的平臺

*   黑莓手機 WebWorks （OS 5.0 和更高）

## 快速的示例

    document.addEventListener("volumedownbutton", onVolumeDownKeyDown, false);
    
    function onVolumeDownKeyDown() {
        // Handle the volume down button
    }
    

## 完整的示例

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

當使用者按下了按鈕卷時，將觸發該事件。

    document.addEventListener("volumeupbutton", yourCallbackFunction, false);
    

## 詳細資訊

如果您需要重寫預設卷起來的行為你可以註冊為事件攔截器 `volumeupbutton` 事件。

應用程式通常應使用 `document.addEventListener` 將一個事件攔截器附加一次 `deviceready` 事件火災。

## 支援的平臺

*   黑莓手機 WebWorks （OS 5.0 和更高）

## 快速的示例

    document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);
    
    function onVolumeUpKeyDown() {
        // Handle the volume up button
    }
    

## 完整的示例

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
