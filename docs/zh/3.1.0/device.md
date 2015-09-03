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


# 設備

> `device`物件描述該設備的硬體和軟體。

## 屬性

*   device.model
*   device.cordova
*   device.platform
*   device.uuid
*   device.version
*   device.name

## 變數範圍

因為 `device` 分配到 `window` 的物件，它是隱式地在全球範圍內。

    // These reference the same `device`
    var phoneModel = window.device.model;
    var phoneModel = device.model;
    

## 訪問功能

從 3.0 版，科爾多瓦作為*外掛程式*實現了設備級 Api。 使用 CLI 的 `plugin` 命令，描述在命令列介面，可以添加或刪除一個專案，為此功能：

        $ cordova plugin add org.apache.cordova.device
        $ cordova plugin ls
        [ 'org.apache.cordova.device' ]
        $ cordova plugin rm org.apache.cordova.device
    

這些命令適用于所有有針對性的平臺，但修改如下所述的特定于平臺的配置設置：

*   Android 系統
    
        (in app/res/xml/config.xml)
        <feature name="Device">
            <param name="android-package" value="org.apache.cordova.Device" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.READ_PHONE_STATE" />
        

*   黑莓手機 WebWorks
    
        (in www/plugins.xml)
        <feature name="Device">
            <param name="blackberry-package" value="org.apache.cordova.device.Device" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.app" required="true" version="1.0.0.0" />
        <rim:permissions>
            <rim:permit>read_device_identifying_information</rim:permit>
        </rim:permissions>
        

*   （在 Windows Phone`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_WEBBROWSERCOMPONENT" />
            <Capability Name="ID_CAP_IDENTITY_DEVICE" />
            <Capability Name="ID_CAP_IDENTITY_USER" />
        </Capabilities>
        
    
    引用：[為 Windows Phone 應用程式清單][1]

*   （在 Tizen`config.xml`)
    
        <feature name="http://tizen.org/api/systeminfo" required="true"/>
        
    
    引用： [Tizen Web 應用程式的應用程式清單][2]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx
 [2]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

一些平臺可能支援此功能，而無需任何特殊的配置。請參見在概述部分中*的平臺支援*。


# device.name

**WARNING:** `device.name` is deprecated as of version 2.3.0. Use `device.model` instead.

獲取設備的模型名稱。

    var string = device.name;
    

## 說明

`device.name`返回設備的模型或產品的名稱。此值由設備製造商設置的並且可能不同，同一產品的不同版本。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Tizen
*   Windows Phone 7 和 8
*   Windows 8

## 快速的示例

    // Android:    Nexus One       returns "Passion" (Nexus One code name)
    //             Motorola Droid  returns "voles"
    // BlackBerry: Torch 9800      returns "9800"
    // iOS:     All devices     returns either "iPhone", "iPod Touch", "iPhone Simulator", "iPad", "iPad Simulator"
    //
    var name = device.name;
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            var element = document.getElementById('deviceProperties');
            element.innerHTML = 'Device Name: '     + device.name     + '<br />' +
                                'Device Model: '    + device.model    + '<br />' +
                                'Device Cordova: '  + device.cordova  + '<br />' +
                                'Device Platform: ' + device.platform + '<br />' +
                                'Device UUID: '     + device.uuid     + '<br />' +
                                'Device Version: '  + device.version  + '<br />';
        }
    
        </script>
      </head>
      <body>
        <p id="deviceProperties">Loading device properties...</p>
      </body>
    </html>
    

## Android 的怪癖

*   獲取[產品名稱][1]而不是[產品型號名稱][2]，這往往是生產代碼名稱。 例如，Nexus One 返回 `Passion` ，和摩托羅拉 Droid 返回`voles`.

 [1]: http://developer.android.com/reference/android/os/Build.html#PRODUCT
 [2]: http://developer.android.com/reference/android/os/Build.html#MODEL

## Windows Phone 7 和 8 怪癖

*   返回由製造商指定的設備模型。例如，三星焦點返回`SGH-i917`.

## Tizen 怪癖

*   例如，返回與供應商指派的設備模型`TIZEN`


# device.cordova

獲取科爾多瓦在設備上運行的版本。

    var string = device.cordova;
    

## 說明

`device.cordova`返回科爾多瓦在設備上運行的版本。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Tizen
*   Windows Phone 7 和 8
*   Windows 8

## 快速的示例

    var name = device.cordova;
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            var element = document.getElementById('deviceProperties');
            element.innerHTML = 'Device Model: '    + device.model    + '<br />' +
                                'Device Cordova: '  + device.cordova  + '<br />' +
                                'Device Platform: ' + device.platform + '<br />' +
                                'Device UUID: '     + device.uuid     + '<br />' +
                                'Device Version: '  + device.version  + '<br />';
        }
    
        </script>
      </head>
      <body>
        <p id="deviceProperties">Loading device properties...</p>
      </body>
    </html>


# device.platform

獲取該設備的作業系統名稱。

    var string = device.platform;
    

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Tizen
*   Windows Phone 7 和 8
*   Windows 8

## 快速的示例

    // Depending on the device, a few examples are:
    //   - "Android"
    //   - "BlackBerry"
    //   - "iOS"
    //   - "WinCE"
    //   - "Tizen"
    var devicePlatform = device.platform;
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            var element = document.getElementById('deviceProperties');
            element.innerHTML = 'Device Model: '    + device.model    + '<br />' +
                                'Device Cordova: '  + device.cordova  + '<br />' +
                                'Device Platform: ' + device.platform + '<br />' +
                                'Device UUID: '     + device.uuid     + '<br />' +
                                'Device Version: '  + device.version  + '<br />';
        }
    
        </script>
      </head>
      <body>
        <p id="deviceProperties">Loading device properties...</p>
      </body>
    </html>
    

## 黑莓手機的怪癖

設備可能會返回而不是平臺名稱的設備平臺版本編號。例如，Storm2 9550 返回一個值如`2.13.0.95`.

## Windows Phone 7 的怪癖

Windows Phone 7 設備報告作為平臺`WinCE`.

## Windows Phone 8 怪癖

Windows Phone 8 設備報告作為平臺`Win32NT`.


# device.uuid

獲取設備的通用唯一識別碼 ([UUID][1]).

 [1]: http://en.wikipedia.org/wiki/Universally_Unique_Identifier

    var string = device.uuid;
    

## 說明

UUID 如何生成的詳細資訊由設備製造商和特定于設備的平臺或模型。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Tizen
*   Windows Phone 7 和 8
*   Windows 8

## 快速的示例

    / / Android： 一個隨機的 64 位整數 （作為字串返回，再次!) / / 上設備的第一次啟動生成的整數 / / / / 黑莓手機： 返回設備的 PIN 號碼 / / 這是九個數字的唯一整數 （作為字串，雖然!) / / / / iPhone： （從 UIDevice 類文檔解釋） / / 返回一個字串的雜湊值創建的多個硬體標識。
    / / 它保證是唯一的每個設備並不能綁 / / 到使用者帳戶。
    / / Windows Phone 7： 返回的雜湊代碼的設備 + 當前使用者，/ / 如果未定義使用者，則一個 guid 生成的並且將會保留直到卸載該應用程式 / / Tizen： 返回設備 IMEI （國際行動裝置身份或 IMEI 是一個數位 / / 獨有的每一個 UMTS 和 GSM 行動電話。
    var deviceID = device.uuid;
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            var element = document.getElementById('deviceProperties');
            element.innerHTML = 'Device Model: '    + device.model    + '<br />' +
                                'Device Cordova: '  + device.cordova  + '<br />' +
                                'Device Platform: ' + device.platform + '<br />' +
                                'Device UUID: '     + device.uuid     + '<br />' +
                                'Device Version: '  + device.version  + '<br />';
        }
    
        </script>
      </head>
      <body>
        <p id="deviceProperties">Loading device properties...</p>
      </body>
    </html>
    

## iOS 怪癖

`uuid`在 iOS 上不是獨有的一種設備，但對於每個應用程式，為每個安裝各不相同。 如果您刪除並重新安裝應用程式，它會更改和可能還當你升級 iOS，或甚至升級您的應用程式每個版本 (明顯在 iOS 5.1 中)。 `uuid`不是一個可靠的值。

## Windows Phone 7 和 8 怪癖

`uuid`為 Windows Phone 7 需要許可權 `ID_CAP_IDENTITY_DEVICE` 。 Microsoft 可能會很快就棄用此屬性。 如果能力不是可用的應用程式將生成一個持久性的 guid 並保持應用程式的安裝在設備上的持續時間。


# device.version

獲取作業系統版本。

    var string = device.version;
    

## 支援的平臺

*   Android 2.1 +
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Tizen
*   Windows Phone 7 和 8
*   Windows 8

## 快速的示例

    / / Android： Froyo OS 將返回"2.2"/ / Eclair OS 將返回"2.1"、"2.0.1"2.0"/ / 版本，也可以返回更新級別"2.1 update1"/ / / / 黑莓手機： 火炬 9800 使用 OS 6.0 將返回"6.0.0.600"/ / / / iPhone： iOS 3.2 返回"3.2"/ / / / Windows Phone 7： 返回當前 OS 版本數，。 on Mango returns 7.10.7720
    // Tizen: returns "TIZEN_20120425_2"
    var deviceVersion = device.version;
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            var element = document.getElementById('deviceProperties');
            element.innerHTML = 'Device Model: '    + device.model    + '<br />' +
                                'Device Cordova: '  + device.cordova  + '<br />' +
                                'Device Platform: ' + device.platform + '<br />' +
                                'Device UUID: '     + device.uuid     + '<br />' +
                                'Device Version: '  + device.version  + '<br />';
        }
    
        </script>
      </head>
      <body>
        <p id="deviceProperties">Loading device properties...</p>
      </body>
    </html>
