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

# searchbutton

当用户在Android 上点击搜索按钮时，将触发该事件。

    document.addEventListener("searchbutton", yourCallbackFunction, false);
    

## 详细信息

如果您在 android 系统上需要重写默认的搜索按钮特性，您可以为 'searchbutton' 事件注册一个事件侦听器。

一旦`deviceready` 事件触发了，应用程序通常应该使用 `document.addEventListener`附加一个事件侦听器。

## 支持的平台

*   Android

## 简单的例子

    document.addEventListener("searchbutton", onSearchKeyDown, false);
    
    function onSearchKeyDown() {
        // Handle the search button
    }
    

## 完整的例子

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Search Button Example</title>
    
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
            // Register the event listener
            document.addEventListener("searchbutton", onSearchKeyDown, false);
        }
    
        // Handle the search button
        //
        function onSearchKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>