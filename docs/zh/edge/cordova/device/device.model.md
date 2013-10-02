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

獲取設備的模型名稱。

    var string = device.model;
    

## 說明

`device.model`返回設備的模型或產品的名稱。值由設備製造商設置和同一產品的不同版本可能不同。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Tizen
*   Windows Phone 7 和 8
*   Windows 8

## 快速的示例

    / / Android： Nexus 返回"激情"（Nexus One 代碼名稱） / / 摩托羅拉 Droid 返回"田鼠"/ / 黑莓手機： 火炬 9800 返回"9800"/ / iOS： 迷你 ipad，返回與 iPad2，5 ；iPhone 5 是 iPhone 5，1。 請參閱 HTTP://theiphonewiki.com/wiki/index.php?title=Models / / var 模型 = device.model ；
    

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
    

## Android 的怪癖

*   獲取[產品名稱][1]而不是[產品型號名稱][2]，這往往是生產代碼名稱。 例如，Nexus One 返回 `Passion` ，和摩托羅拉 Droid 返回`voles`.

 [1]: http://developer.android.com/reference/android/os/Build.html#PRODUCT
 [2]: http://developer.android.com/reference/android/os/Build.html#MODEL

## Tizen 怪癖

*   例如，返回與供應商指派的設備模型`TIZEN`

## Windows Phone 7 和 8 怪癖

*   返回由製造商指定的設備模型。例如，三星焦點返回`SGH-i917`.