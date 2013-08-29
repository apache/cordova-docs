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

# notification.confirm

显示一个可自定义的确认对话框。

    navigator.notification.confirm(message, confirmCallback, [title], [buttonLabels])
    

*   **消息**： 消息对话框。*（字符串）*

*   **confirmCallback**: 要用索引 （1、 2 或 3） 按下的按钮，或者在没有按下按钮 (0) 驳回了对话框中时调用的回调。*（函数）*

*   **标题**： 标题对话框。*（字符串）*（可选，默认值为`Confirm`)

*   **buttonLabels**： 指定按钮标签以逗号分隔的字符串。*（字符串）*（可选，默认值为`OK,Cancel`)

## 说明

`notification.confirm`方法显示一个本机的对话框，更可自定义的浏览器比 `confirm` 函数。

## confirmCallback

`confirmCallback`当用户按下确认对话框中的按钮之一的时候执行。

回调将参数 `buttonIndex` *（编号）*，它是按下的按钮的索引。 请注意索引使用基于 1 的索引，所以值是 `1` ， `2` ， `3` ，等等。

## 支持的平台

*   Android 系统
*   黑莓手机 WebWorks （OS 5.0 和更高）
*   iOS
*   Tizen
*   Windows Phone 7 和 8
*   Windows 8

## 快速的示例

    // process the confirmation dialog result
    function onConfirm(buttonIndex) {
        alert('You selected button ' + buttonIndex);
    }
    
    // Show a custom confirmation dialog
    //
    function showConfirm() {
        navigator.notification.confirm(
            'You are the winner!', // message
             onConfirm,            // callback to invoke with index of button pressed
            'Game Over',           // title
            'Restart,Exit'         // buttonLabels
        );
    }
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Notification Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Empty
        }
    
        // process the confirmation dialog result
        function onConfirm(buttonIndex) {
            alert('You selected button ' + buttonIndex);
        }
    
        // Show a custom confirmation dialog
        //
        function showConfirm() {
            navigator.notification.confirm(
                'You are the winner!', // message
                 onConfirm,            // callback to invoke with index of button pressed
                'Game Over',           // title
                'Restart,Exit'         // buttonLabels
            );
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showConfirm(); return false;">Show Confirm</a></p>
      </body>
    </html>
    

## Windows Phone 7 和 8 怪癖

*   有没有内置的浏览器功能的 `window.confirm` ，但你可以将它绑定通过分配：
    
        window.confirm = navigator.notification.confirm;
        

*   调用到 `alert` 和 `confirm` 的非阻塞，所以结果就是只可用以异步方式。