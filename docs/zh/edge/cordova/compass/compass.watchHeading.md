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

# compass.watchHeading

固定间隔，在得到中度的罗盘标题。

    var watchID = navigator.compass.watchHeading(compassSuccess, compassError, [compassOptions]);
    

## 说明

罗盘是传感器，可检测的方向或设备是针对性的标题。它的措施从 0 到 359.99 度中的标题。

`compass.watchHeading`获取设备的当前标题在固定的时间间隔。 检索标题时，每次 `headingSuccess` 执行回调函数。 指定的时间间隔，以毫秒为单位通过 `frequency` 参数的 `compassOptions` 对象。

返回的表 ID 引用指南针手表的时间间隔。可以使用 ID 与手表 `compass.clearWatch` 停止了观看指南针。

## 支持的平台

*   Android 系统
*   黑莓 10
*   iOS
*   Tizen
*   Windows Phone 7 和 8 （如果在硬件中可用）
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

IOS 中 `compass.watchHeading` 以指定的度数改变时也可以获得设备的当前标题。 每次的标题更改时由指定数目的度或更多， `headingSuccess` 执行回调函数。 指定度的变化通过 `filter` 参数的 `compassOptions` 对象。 清除手表像往常一样通过传递到返回的表 ID `compass.clearWatch` 。 此功能将替换以前分开，只有 iOS `watchHeadingFilter` 和 `clearWatchFilter` 功能，1.6 版本中被移除。

只有一个 `watchHeading` 可以在 iOS 中一次效果。 如果 `watchHeading` 使用筛选器中，调用 `getCurrentHeading` 或 `watchHeading` 使用现有的筛选器值来指定标题的更改。 使用筛选器看标题的变化是与时间间隔比效率更高。