---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
---


# 閃屏

> 顯示和隱藏應用程式的初始螢幕。

## 方法

*   splashscreen.show
*   splashscreen.hide

## 訪問功能

從 3.0 版，科爾多瓦作為*外掛程式*實現了設備級 Api。 使用 CLI 的 `plugin` 命令，描述在命令列介面，可以添加或刪除一個專案，為此功能：

        $ cordova plugin add org.apache.cordova.splashscreen
        $ cordova plugin ls
        [ 'org.apache.cordova.splashscreen' ]
        $ cordova plugin rm org.apache.cordova.splashscreen
    

這些命令適用于所有有針對性的平臺，但修改如下所述的特定于平臺的配置設置：

*   （在 android`app/res/xml/config.xml`)
    
        <feature name="SplashScreen">
            <param name="android-package" value="org.apache.cordova.SplashScreen" />
        </feature>
        

*   （在 iOS`config.xml`)
    
        <feature name="SplashScreen">
            <param name="ios-package" value="CDVSplashScreen" />
        </feature>
        

一些平臺可能支援此功能，而無需任何特殊的配置。請參見在概述部分中*的平臺支援*。

有關如何配置這些圖像的資訊，請參閱圖示和閃屏。


# splashscreen.show

顯示初始螢幕。

    navigator.splashscreen.show();
    

## 說明

此方法顯示應用程式的初始螢幕。

## 支援的平臺

*   Android 系統
*   iOS
*   Windows Phone 7 和 8
*   Windows 8

## 快速的示例

    navigator.splashscreen.show();
    

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
            navigator.splashscreen.show();
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
      </body>
    </html>


# splashscreen.hide

解雇的初始螢幕。

    navigator.splashscreen.hide();
    

## 說明

此方法關閉該應用程式的初始螢幕。

## 支援的平臺

*   Android 系統
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

`config.xml`檔的 `AutoHideSplashScreen` 設置必須為 `false` 。 若要延遲兩秒鐘隱藏的閃屏，添加如下所示在計時器 `deviceready` 事件處理常式：

        setTimeout(function() {
            navigator.splashscreen.hide();
        }, 2000);
