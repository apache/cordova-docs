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

# device.uuid

获取设备的通用唯一标识符 ([UUID][1]).

 [1]: http://en.wikipedia.org/wiki/Universally_Unique_Identifier

    var string = device.uuid;
    

## 说明

UUID 如何生成的详细信息由设备制造商和特定于设备的平台或模型。

## 支持的平台

*   Android 系统
*   黑莓手机 WebWorks （OS 5.0 和更高）
*   iOS
*   Tizen
*   Windows Phone 7 和 8
*   Windows 8

## 快速的示例

    / / Android： 一个随机的 64 位整数 （作为字符串返回，再次!) / / 上设备的第一次启动生成的整数 / / / / 黑莓手机： 返回设备的 PIN 号码 / / 这是九个数字的唯一整数 （作为字符串，虽然!) / / / / iPhone： （从 UIDevice 类文档解释） / / 返回一个字符串的哈希值创建的多个硬件标识。
    / / 它保证是唯一的每个设备并不能绑 / / 到用户帐户。
    / / Windows Phone 7： 返回的哈希代码的设备 + 当前用户，/ / 如果未定义用户，则一个 guid 生成的并且将会保留直到卸载该应用程序 / / Tizen： 返回设备 IMEI （国际移动设备身份或 IMEI 是一个数字 / / 独有的每一个 UMTS 和 GSM 移动电话。
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
            element.innerHTML = 'Device Name: '     + device.name     + '<br />' +
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

`uuid`在 iOS 上不是独有的一种设备，但对于每个应用程序，为每个安装各不相同。 如果您删除并重新安装应用程序，它会更改和可能还当你升级 iOS，或甚至升级您的应用程序每个版本 (明显在 iOS 5.1 中)。 `uuid`不是一个可靠的值。

## Windows Phone 7 和 8 怪癖

`uuid`为 Windows Phone 7 需要权限 `ID_CAP_IDENTITY_DEVICE` 。 Microsoft 可能会很快就弃用此属性。 如果能力不是可用的应用程序将生成一个持久性的 guid 并保持应用程序的安装在设备上的持续时间。