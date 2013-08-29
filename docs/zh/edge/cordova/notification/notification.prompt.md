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

# notification.prompt

显示一个可自定义的提示对话框。

    navigator.notification.prompt(message, promptCallback, [title], [buttonLabels], [defaultText])
    

*   **消息**： 消息对话框。*（字符串）*

*   **promptCallback**： 当按下按钮时要调用的回调。*（函数）*

*   **标题**： 对话框的标题*（字符串）* （可选，默认值为`Prompt`)

*   **buttonLabels**： 数组，这些字符串指定按钮标签*（阵列）* （可选，默认值为`["OK","Cancel"]`)

*   **defaultText**: 默认文本框中输入值 （ `String` ） （可选，默认值: 空字符串）

## 说明

`notification.prompt`方法显示一个本机的对话框，更可自定义的浏览器比 `prompt` 函数。

## promptCallback

`promptCallback`当用户按下一个提示对话框中的按钮时执行。`results`对象传递给回调的包含以下属性：

*   **buttonIndex**： 按下的按钮的索引。*（人数）*请注意索引使用基于 1 的索引，所以值是 `1` ， `2` ， `3` ，等等。

*   **输入 1**： 在提示对话框中输入的文本。*（字符串）*

## 支持的平台

*   Android 系统
*   iOS

## 快速的示例

    // process the promp dialog results
    function onPrompt(results) {
        alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
    }
    
    // Show a custom prompt dialog
    //
    function showPrompt() {
        navigator.notification.prompt(
            'Please enter your name',  // message
            onPrompt,                  // callback to invoke
            'Registration',            // title
            ['Ok','Exit'],             // buttonLabels
            'Jane Doe'                 // defaultText
        );
    }
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Notification Prompt Dialog Example</title>
    
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
    
        // process the promptation dialog result
        function onPrompt(results) {
            alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
        }
    
        // Show a custom prompt dialog
        //
        function showPrompt() {
            navigator.notification.prompt(
                'Please enter your name',  // message
                onPrompt,                  // callback to invoke
                'Registration',            // title
                ['Ok','Exit'],             // buttonLabels
                'Jane Doe'                 // defaultText
            );
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showPrompt(); return false;">Show Prompt</a></p>
      </body>
    </html>
    

## Android 的怪癖

*   Android 支持最多的三个按钮，并忽略任何更多。

*   关于 Android 3.0 及更高版本，使用全息主题的设备按相反的顺序显示按钮。