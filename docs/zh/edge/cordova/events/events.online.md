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

# 在线

当应用程序进入在线状态，和该设备将成为连接到互联网时触发此事件。

    document.addEventListener("online", yourCallbackFunction, false);
    

## 详细信息

`online`当先前连接的移动设备接收到一个网络连接以允许应用程序访问互联网时激发的事件。 它依赖于连接 API 中，相同的信息和火灾时的值 `connection.type` 成为`NONE`.

应用程序通常应使用 `document.addEventListener` 将一个事件侦听器附加一次 `deviceready` 事件火灾。

## 支持的平台

*   Android 系统
*   黑莓手机 WebWorks （OS 5.0 和更高）
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

在初始启动期间第一次 `online` 事件 （如果适用），至少需一秒的火灾之前的, `connection.type` 是`UNKNOWN`.

## Windows Phone 7 的怪癖

当运行在仿真器中， `connection.status` 始终是未知的因此，此事件将*不*火。

## Windows Phone 8 怪癖

仿真程序报告连接类型为 `Cellular` ，而不会更改，所以事件将*不*火。