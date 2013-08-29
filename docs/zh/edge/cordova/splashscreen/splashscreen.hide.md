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

# splashscreen.hide

解雇的初始屏幕。

    navigator.splashscreen.hide();
    

## 说明

此方法关闭该应用程序的初始屏幕。

## 支持的平台

*   Android 系统
*   黑莓 10
*   iOS
*   Windows Phone 7 和 8
*   Windows 8

## 快速的示例

    navigator.splashscreen.hide();
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Splashscreen Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.splashscreen.hide();
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
      </body>
    </html>
    

## iOS 怪癖

`config.xml`文件的 `AutoHideSplashScreen` 设置必须为 `false` 。 若要延迟两秒钟隐藏的闪屏，添加如下所示在计时器 `deviceready` 事件处理程序：

        setTimeout(function() {
            navigator.splashscreen.hide();
        }, 2000);