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