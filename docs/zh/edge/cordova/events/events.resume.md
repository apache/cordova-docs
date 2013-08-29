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

# 简历

当应用程序从背景中检索时，将触发该事件。

    document.addEventListener("resume", yourCallbackFunction, false);
    

## 详细信息

`resume`事件触发时的本机平台拔出从背景的应用程序。

应用程序通常应使用 `document.addEventListener` 将一个事件侦听器附加一次 `deviceready` 事件火灾。

## 支持的平台

*   Android 系统
*   黑莓手机 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8
*   Windows 8

## 快速的示例

    document.addEventListener("resume", onResume, false);
    
    function onResume() {
        // Handle the resume event
    }
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Resume Example</title>
    
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
            document.addEventListener("resume", onResume, false);
        }
    
        // Handle the resume event
        //
        function onResume() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## iOS 的怪癖

从调用任何交互式函数 `pause` 事件处理程序以后执行应用程序恢复时，由发出信号 `resume` 事件。 这些包括警报， `console.log()` ，和任何调用从插件或 API，科尔多瓦，穿过目标 C.

*   **活动**事件
    
    特定于 iOS `active` 事件是可用作为替代 `resume` ，并检测时用户禁用**锁定**按钮以解锁设备与应用程序在前台运行。 如果为多任务启用的应用程序 （和设备），则这配对与其后 `resume` 事件，但只在 iOS 5 下的。 实际上，所有锁定应用程序已启用多任务的 iOS 5 中被推到背景中。 对于应用程序继续运行在 iOS 5 下锁定时，禁用应用程序的多任务处理通过将[UIApplicationExitsOnSuspend][1]设置为 `YES` 。 若要运行在 iOS 4 上锁定状态时，此设置并不重要。

*   **恢复**事件
    
    当从调用 `resume` 事件处理程序，如交互式功能 `alert()` 需要包装在 `setTimeout()` 调用超时值为零，否则应用程序挂起。 例如：
    
        document.addEventListener("resume", onResume, false);
        function onResume() {
           setTimeout(function() {
                  // TODO: do your thing!
                }, 0);
        }
        

 [1]: http://developer.apple.com/library/ios/#documentation/general/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html