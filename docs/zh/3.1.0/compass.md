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


# 指南針

> 獲取該設備的指向的方向。

## 方法

*   compass.getCurrentHeading
*   compass.watchHeading
*   compass.clearWatch
*   compass.watchHeadingFilter (已過時)
*   compass.clearWatchFilter (已過時)

## 參數

*   compassSuccess
*   compassError
*   compassOptions
*   compassHeading

## 訪問功能

從 3.0 版，科爾多瓦作為*外掛程式*實現了設備級 Api。 使用 CLI 的 `plugin` 命令，描述在命令列介面，可以添加或刪除一個專案，為此功能：

        $ cordova plugin add org.apache.cordova.device-orientation
        $ cordova plugin ls
        [ 'org.apache.cordova.device-orientation' ]
        $ cordova plugin rm org.apache.cordova.device-orientation
    

這些命令適用于所有有針對性的平臺，但修改如下所述的特定于平臺的配置設置：

*   （在 android`app/res/xml/config.xml`)
    
        <feature name="Compass">
            <param name="android-package" value="org.apache.cordova.CompassListener" />
        </feature>
        

*   （在 iOS`config.xml`)
    
        <feature name="Compass">
            <param name="ios-package" value="CDVLocation" />
        </feature>
        

*   （在 Windows Phone`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_SENSORS" />
        </Capabilities>
        
    
    引用：[為 Windows Phone 應用程式清單][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

一些平臺可能支援此功能，而無需任何特殊的配置。請參見在概述部分中*的平臺支援*。


# compass.getCurrentHeading

獲取當前的羅經航向。

    navigator.compass.getCurrentHeading(compassSuccess, compassError, compassOptions);
    

## 說明

羅盤是感應器，可檢測的方向或設備通常指從設備的頂部的標題。它的措施中從 0 度到 359.99，其中 0 是北部的標題。

通過返回的羅經航向資訊 `CompassHeading` 物件使用 `compassSuccess` 回呼函數。

## 支援的平臺

*   Android 系統
*   黑莓 10
*   iOS
*   Tizen
*   Windows Phone 7 和 8 （如果在硬體中可用）
*   Windows 8

## 快速的示例

    function onSuccess(heading) {
        alert('Heading: ' + heading.magneticHeading);
    };
    
    function onError(error) {
        alert('CompassError: ' + error.code);
    };
    
    navigator.compass.getCurrentHeading(onSuccess, onError);
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Compass Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.compass.getCurrentHeading(onSuccess, onError);
        }
    
        // onSuccess: Get the current heading
        //
        function onSuccess(heading) {
            alert('Heading: ' + heading.magneticHeading);
        }
    
        // onError: Failed to get the heading
        //
        function onError(compassError) {
            alert('Compass Error: ' + compassError.code);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>getCurrentHeading</p>
      </body>
    </html>


# compass.watchHeading

固定間隔，在得到中度的羅盤標題。

    var watchID = navigator.compass.watchHeading(compassSuccess, compassError, [compassOptions]);
    

## 說明

羅盤是感應器，可檢測的方向或設備是針對性的標題。它的措施從 0 到 359.99 度中的標題。

`compass.watchHeading`獲取設備的當前標題在固定的時間間隔。 檢索標題時，每次 `headingSuccess` 執行回呼函數。 指定的時間間隔，以毫秒為單位通過 `frequency` 參數的 `compassOptions` 物件。

返回的表 ID 引用指南針手錶的時間間隔。可以使用 ID 與手錶 `compass.clearWatch` 停止了觀看指南針。

## 支援的平臺

*   Android 系統
*   黑莓 10
*   iOS
*   Tizen
*   Windows Phone 7 和 8 （如果在硬體中可用）
*   Windows 8

## 快速的示例

    function onSuccess(heading) {
        var element = document.getElementById('heading');
        element.innerHTML = 'Heading: ' + heading.magneticHeading;
    };
    
    function onError(compassError) {
        alert('Compass error: ' + compassError.code);
    };
    
    var options = {
        frequency: 3000
    }; // Update every 3 seconds
    
    var watchID = navigator.compass.watchHeading(onSuccess, onError, options);
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Compass Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // The watch id references the current `watchHeading`
        var watchID = null;
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            startWatch();
        }
    
        // Start watching the compass
        //
        function startWatch() {
    
            // Update compass every 3 seconds
            var options = { frequency: 3000 };
    
            watchID = navigator.compass.watchHeading(onSuccess, onError, options);
        }
    
        // Stop watching the compass
        //
        function stopWatch() {
            if (watchID) {
                navigator.compass.clearWatch(watchID);
                watchID = null;
            }
        }
    
        // onSuccess: Get the current heading
        //
        function onSuccess(heading) {
            var element = document.getElementById('heading');
            element.innerHTML = 'Heading: ' + heading.magneticHeading;
        }
    
        // onError: Failed to get the heading
        //
        function onError(compassError) {
            alert('Compass error: ' + compassError.code);
        }
    
        </script>
      </head>
      <body>
        <div id="heading">Waiting for heading...</div>
        <button onclick="startWatch();">Start Watching</button>
        <button onclick="stopWatch();">Stop Watching</button>
      </body>
    </html>
    

## iOS 的怪癖

IOS 中 `compass.watchHeading` 以指定的度數改變時也可以獲得設備的當前標題。 每次的標題更改時由指定數目的度或更多， `headingSuccess` 執行回呼函數。 指定度的變化通過 `filter` 參數的 `compassOptions` 物件。 清除手錶像往常一樣通過傳遞到返回的表 ID `compass.clearWatch` 。 此功能將替換以前分開，只有 iOS `watchHeadingFilter` 和 `clearWatchFilter` 功能，1.6 版本中被移除。

只有一個 `watchHeading` 可以在 iOS 中一次效果。 如果 `watchHeading` 使用篩選器中，調用 `getCurrentHeading` 或 `watchHeading` 使用現有的篩選器值來指定標題的更改。 使用篩選器看標題的變化是與時間間隔比效率更高。


# compass.clearWatch

再看看 ID 參數所引用的指南針。

    navigator.compass.clearWatch(watchID);
    

*   **watchID**： 由返回的 ID`compass.watchHeading`.

## 支援的平臺

*   Android 系統
*   黑莓 10
*   iOS
*   Tizen
*   Windows Phone 7 和 8 （如果在硬體中可用）
*   Windows 8

## 快速的示例

    var watchID = navigator.compass.watchHeading(onSuccess, onError, options);
    
    // ... later on ...
    
    navigator.compass.clearWatch(watchID);
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Compass Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // The watch id references the current `watchHeading`
        var watchID = null;
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            startWatch();
        }
    
        // Start watching the compass
        //
        function startWatch() {
    
            // Update compass every 3 seconds
            var options = { frequency: 3000 };
    
            watchID = navigator.compass.watchHeading(onSuccess, onError, options);
        }
    
        // Stop watching the compass
        //
        function stopWatch() {
            if (watchID) {
                navigator.compass.clearWatch(watchID);
                watchID = null;
            }
        }
    
        // onSuccess: Get the current heading
        //
        function onSuccess(heading) {
            var element = document.getElementById('heading');
            element.innerHTML = 'Heading: ' + heading.magneticHeading;
        }
    
        // onError: Failed to get the heading
        //
        function onError(compassError) {
            alert('Compass error: ' + compassError.code);
        }
    
        </script>
      </head>
      <body>
        <div id="heading">Waiting for heading...</div>
        <button onclick="startWatch();">Start Watching</button>
        <button onclick="stopWatch();">Stop Watching</button>
      </body>
    </html>


# compass.watchHeadingFilter

不再支援 1.6，見 `compass.watchHeading` 為等效的功能。


# compass.clearWatchFilter

不再支援 1.6。請參閱`compass.clearWatch`.


# compassSuccess

提供了通過的羅經航向資訊的 onSuccess 回呼函數 `compassHeading` 物件。

    function(heading) {
        // Do something
    }
    

## 參數

*   **標題**： 標題資訊。*() compassHeading*

## 示例

    function onSuccess(heading) {
        alert('Heading: ' + heading.magneticHeading);
    };


# compassError

羅盤功能的 onError 回呼函數。

## 示例

    function(CompassError) {
        // Handle the error
    }


# compassOptions

若要自訂的指南針檢索一個可選參數。

## 選項

*   **頻率**： 經常如何檢索以毫秒為單位的羅經航向。*（人數）*（預設值： 100）

*   **篩選器**： 啟動 watchHeading 成功回檔所需的度的變化。*（人數）*

Android 的怪癖

---

*   `filter`不受支援。

## Tizen 怪癖

*   `filter`不受支援。

## Windows Phone 7 和 8 怪癖

*   `filter`不受支援。


# compassHeading

A `CompassHeading` 物件返回到 `compassSuccess` 回呼函數。

## 屬性

*   **magneticHeading**： 在某一時刻在時間中從 0-359.99 度的標題。*（人數）*

*   **trueHeading**： 在某一時刻的時間與地理北極在 0-359.99 度標題。 負值表示不能確定真正的標題。 *（人數）*

*   **headingAccuracy**： 中度報告的標題和真正標題之間的偏差。*（人數）*

*   **時間戳記**： 本項決定在其中的時間。*（毫秒）*

## 說明

`CompassHeading`物件返回到 `compassSuccess` 回呼函數。

## Android 的怪癖

*   `trueHeading`不受支援，但報告相同的值`magneticHeading`

*   `headingAccuracy`是始終為 0 因為有沒有區別 `magneticHeading` 和`trueHeading`.

## iOS 的怪癖

*   `trueHeading` is only returned when location services are enabled via `navigator.geolocation.watchLocation()`

*   IOS 4 設備及以上標題因素在該設備的當前方向，不涉及其絕對的立場，為應用程式支援的方向。


# CompassError

A `CompassError` 物件返回到 `compassError` 時出現錯誤的回呼函數。

## 屬性

*   **代碼**： 下面列出的預定義的錯誤代碼之一。

## 常量

*   `CompassError.COMPASS_INTERNAL_ERR`
*   `CompassError.COMPASS_NOT_SUPPORTED`

## 說明

當錯誤發生時， `CompassError` 物件作為一個參數傳遞 `compassError` 回呼函數。
