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

# deviceready

科尔多瓦是在完全加载时，将触发该事件。

    document.addEventListener("deviceready", yourCallbackFunction, false);
    

## 详细信息

此事件的任何应用程序至关重要。它发出信号科尔多瓦的设备已加载的 Api，并准备访问。

科尔多瓦组成的两个代码库： 本机和 JavaScript。 虽然本机代码加载、 显示的自定义加载图像。 然而，JavaScript 仅加载一旦 DOM 装载。 这意味着您的 web 应用程序可能有可能调用的科尔多瓦 JavaScript 函数之前的相应的本机代码是可用。

`deviceready`科尔多瓦已完全加载后会触发事件。 一次事件火，你可以安全地使对科尔多瓦 Api 的调用。 应用程序通常将附加一个事件侦听器与 `document.addEventListener` 一旦 HTML 文档的 DOM 已加载。

`deviceready`事件从其他人的行为方式略有不同。注册后的任何事件处理 `deviceready` 事件将触发了其立即调用的回调函数。

## 支持的平台

*   Android 系统
*   黑莓手机 WebWorks （OS 5.0 和更高）
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