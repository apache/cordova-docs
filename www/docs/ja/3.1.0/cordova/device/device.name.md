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

# device.name

**WARNING:** `device.name` is deprecated as of version 2.3.0. Use `device.model` instead.

デバイスのモデル名を取得します。

    var string = device.name;
    

## 説明

`device.name`デバイスのモデルまたは製品の名前を返します。この値は、デバイスの製造元によって設定され、同じ製品のバージョン間で異なる可能性があります。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Tizen
*   Windows Phone 7 と 8
*   Windows 8

## 簡単な例

    // Android:    Nexus One       returns "Passion" (Nexus One code name)
    //             Motorola Droid  returns "voles"
    // BlackBerry: Torch 9800      returns "9800"
    // iOS:     All devices     returns either "iPhone", "iPod Touch", "iPhone Simulator", "iPad", "iPad Simulator"
    //
    var name = device.name;
    

## 完全な例

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
    

## Android の癖

*   生産コード名は[モデル名][1]の代わりに[製品名][2]を取得します。 たとえば、ネクサス 1 つを返します `Passion` 、Motorola のドロイドを返します`voles`.

 [1]: http://developer.android.com/reference/android/os/Build.html#MODEL
 [2]: http://developer.android.com/reference/android/os/Build.html#PRODUCT

## Windows Phone 7 と 8 癖

*   製造元によって指定されたデバイスのモデルを返します。たとえば、三星フォーカスを返します`SGH-i917`.

## Tizen の癖

*   たとえば、ベンダーによって割り当てられているデバイスのモデルを返します`TIZEN`