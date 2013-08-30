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

# device.model

获取设备的模型名称。

    var string = device.model;
    

## 说明

`device.model`返回设备的模型或产品的名称。值由设备制造商设置和同一产品的不同版本可能不同。

## 支持的平台

*   Android 系统
*   黑莓手机 WebWorks （OS 5.0 和更高）
*   iOS
*   Tizen
*   Windows Phone 7 和 8
*   Windows 8

## 快速的示例

    / / Android： Nexus 返回"激情"（Nexus One 代码名称） / / 摩托罗拉 Droid 返回"田鼠"/ / 黑莓手机： 火炬 9800 返回"9800"/ / iOS： 迷你 ipad，返回与 iPad2，5 ；iPhone 5 是 iPhone 5，1。 请参阅 http://theiphonewiki.com/wiki/index.php?title=Models / / var 模型 = device.model ；
    

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
                                'Device Cordova: '  + device.cordova  + '<br />' +
                                'Device Platform: ' + device.platform + '<br />' +
                                'Device UUID: '     + device.uuid     + '<br />' +
                                'Device Model: '    + device.model    + '<br />' +
                                'Device Version: '  + device.version  + '<br />';
        }
    
        </script>
      </head>
      <body>
        <p id="deviceProperties">Loading device properties...</p>
      </body>
    </html>
    

## Android 的怪癖

*   获取[产品名称][1]而不是[产品型号名称][2]，这往往是生产代码名称。 例如，Nexus One 返回 `Passion` ，和摩托罗拉 Droid 返回`voles`.

 [1]: http://developer.android.com/reference/android/os/Build.html#PRODUCT
 [2]: http://developer.android.com/reference/android/os/Build.html#MODEL

## Tizen 怪癖

*   例如，返回与供应商指派的设备模型`TIZEN`

## Windows Phone 7 和 8 怪癖

*   返回由制造商指定的设备模型。例如，三星焦点返回`SGH-i917`.