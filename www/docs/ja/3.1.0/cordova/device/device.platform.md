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

# device.platform

<a href="device.html">デバイス</a>のオペレーティング システム名を取得します。

    var string = device.platform;
    

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Tizen
*   Windows Phone 7 と 8
*   Windows 8

## 簡単な例

    // Depending on the device, a few examples are:
    //   - "Android"
    //   - "BlackBerry"
    //   - "iOS"
    //   - "WinCE"
    //   - "Tizen"
    var devicePlatform = device.platform;
    

## 完全な例

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
                                'Device Platform: ' + device.platform + '<br />' +
                                'Device UUID: '     + <a href="device.uuid.html">device.uuid</a>     + '<br />' +
                                'Device Version: '  + <a href="device.version.html">device.version</a>  + '<br />';
        }
    
        </script>
      </head>
      <body>
        <p id="deviceProperties">Loading device properties...</p>
      </body>
    </html>
    

## ブラックベリーの癖

<a href="device.html">デバイス</a>は、プラットフォーム名ではなく<a href="device.html">デバイス</a> プラットフォームのバージョン番号を返すことがあります。たとえば、Storm2 9550 を返しますよう`2.13.0.95`.

## Windows Phone 7 の癖

Windows Phone 7 <a href="device.html">デバイス</a>とプラットフォームを報告します。`WinCE`.

## Windows Phone 8 癖

Windows Phone 8 <a href="device.html">デバイス</a>とプラットフォームを報告します。`Win32NT`.