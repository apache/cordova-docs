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

当Cordova是在完全加载时，将触发该事件。

    document.addEventListener("deviceready", yourCallbackFunction, false);
    

## 详细信息

此事件的任何应用程序至关重要。它标志着Cordova设备的APIs已被加载，并准备访问。

Cordova组成的两个代码库： 本机和 JavaScript。 虽然本机代码加载、 显示的自定义加载图像。 然而，一旦 DOM 装载JavaScript 仅加载。 这意味着 相应的本机代码变得可用之前，web 应用程序 有可能潜在的调用Cordova JavaScript 函数。

一旦Cordova已完全加载后，会触发`deviceready`事件。 一旦触发该事件，你可以安全的调用Cordova APIs。 一旦 HTML 文档的 DOM 已经被加载，应用程序将通常`document.addEventListener` 附加一个事件侦听器。

`deviceready`事件的行为方式略有不同其它方式。注册后的任何事件处理，在`deviceready` 事件触发后 将立即调用回调函数。

## 支持的平台

*   亚马逊火 OS
*   Android 系统
*   BlackBerry 10
*   iOS
*   Tizen
*   Windows Phone 7 和 8
*   Windows 8

## 简单的例子

    document.addEventListener("deviceready", onDeviceReady, false);
    
    function onDeviceReady() {
        // Now safe to use device APIs
    }
    

## 完整的例子

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