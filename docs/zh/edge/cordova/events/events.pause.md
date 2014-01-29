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

# 暂停

当一个应用程序被放入后台时，将触发该事件。

    document.addEventListener("pause", yourCallbackFunction, false);
    

## 详细信息

当本机平台放入应用程序去后台，通常在用户切换到不同的应用程序时触发该`pause`事件。

一旦`deviceready` 事件触发了，应用程序通常应该使用 `document.addEventListener`附加一个事件侦听器。

## 支持的平台

*   亚马逊火 OS
*   Android 系统
*   黑莓 10
*   iOS
*   Windows Phone 7 和 8
*   Windows 8

## 简单的例子

    document.addEventListener("pause", onPause, false);
    
    function onPause() {
        // Handle the pause event
    }
    

## 完整的例子

    <!DOCTYPE html>
    <html>
      <head>
        <title>Pause Example</title>
    
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
            document.addEventListener("pause", onPause, false);
        }
    
        // Handle the pause event
        //
        function onPause() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## iOS 的怪异

在 `pause` 处理程序中，任何调用到Cordova API 或本地插件经历的Objective-C不工作，以及任何交互式调用的插件，如警报或 `console.log()` 。 当应用程序恢复后，他们只处理在下一次运行循环上。

特定于 iOS `resign` 事件是可作为替代 `pause` ，并检测当用户启用**Lock**按钮锁定设备与应用程序在前台运行。 如果应用程序 （和设备）为多任务启用时，这将与其后 的`pause` 事件配对，但只在 iOS 5 下。 实际上，在iOS 5 上，所有锁定应用程序已启用的多任务都被放置到后台。 对于应用程序在 iOS 5 下锁定时将继续运行，通过设置[UIApplicationExitsOnSuspend][1]为 `YES`来禁用应用程序的多任务处理 。 若要运行在 iOS 4 上锁定状态时，此设置并不重要。

 [1]: http://developer.apple.com/library/ios/#documentation/general/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html