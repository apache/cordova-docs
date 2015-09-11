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

# device.uuid

獲取<a href="device.html">設備</a>的通用唯一識別碼 ([UUID][1]).

 [1]: http://en.wikipedia.org/wiki/Universally_Unique_Identifier

    var string = device.uuid;
    

## 說明

UUID 如何生成的詳細資訊由<a href="device.html">設備</a>製造商和特定于<a href="device.html">設備</a>的平臺或模型。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Tizen
*   Windows Phone 7 和 8
*   Windows 8

## 快速的示例

    / / Android： 一個隨機的 64 位整數 （作為字串返回，再次!) / / 上<a href="device.html">設備</a>的第一次啟動生成的整數 / / / / 黑莓手機： 返回<a href="device.html">設備</a>的 PIN 號碼 / / 這是九個數字的唯一整數 （作為字串，雖然!) / / / / iPhone： （從 UIDevice 類文<a href="../file/fileobj/fileobj.html">檔</a>解釋） / / 返回一個字串的雜湊值創建的多個硬體標識。
    / / 它保證是唯一的每個<a href="device.html">設備</a>並不能綁 / / 到使用者帳戶。
    / / Windows Phone 7： 返回的雜湊代碼的<a href="device.html">設備</a> + 當前使用者，/ / 如果未定義使用者，則一個 guid 生成的並且將會保留直到卸載該應用程式 / / Tizen： 返回<a href="device.html">設備</a> IMEI （國際行動裝置身份或 IMEI 是一個數位 / / 獨有的每一個 UMTS 和 GSM 行動電話。
    var deviceID = device.uuid;
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties <a href="../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            var element = document.getElementById('deviceProperties');
            element.innerHTML = 'Device Model: '    + <a href="device.model.html">device.model</a>    + '<br />' +
                                'Device Cordova: '  + <a href="device.cordova.html">device.cordova</a>  + '<br />' +
                                'Device Platform: ' + <a href="device.platform.html">device.platform</a> + '<br />' +
                                'Device UUID: '     + device.uuid     + '<br />' +
                                'Device Version: '  + <a href="device.version.html">device.version</a>  + '<br />';
        }
    
        </script>
      </head>
      <body>
        <p id="deviceProperties">Loading device properties...</p>
      </body>
    </html>
    

## iOS 怪癖

`uuid`在 iOS 上不是獨有的一種<a href="device.html">設備</a>，但對於每個應用程式，為每個安裝各不相同。 如果您刪除並重新安裝應用程式，它會更改和可能還當你<a href="../../guide/platforms/ios/upgrading.html">升級 iOS</a>，或甚至升級您的應用程式每個版本 (明顯在 iOS 5.1 中)。 `uuid`不是一個可靠的值。

## Windows Phone 7 和 8 怪癖

`uuid`為 Windows Phone 7 需要許可權 `ID_CAP_IDENTITY_DEVICE` 。 Microsoft 可能會很快就棄用此屬性。 如果能力不是可用的應用程式將生成一個持久性的 guid 並保持應用程式的安裝在<a href="device.html">設備</a>上的持續時間。