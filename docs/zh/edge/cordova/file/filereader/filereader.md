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

# FileReader

`FileReader`允许基本文件的访问权限。

## 属性

*   **readyState**： 一个读者的三个可能的状态，要么 `EMPTY` ， `LOADING` 或`DONE`.

*   **结果**： 已读取文件的内容。*() DOMString*

*   **错误**： 包含错误的对象。*() FileError*

*   **onloadstart**: 读取启动时调用。*（函数）*

*   **onload**： 读取已成功完成时调用。*（函数）*

*   **onabort**： 当已中止，读取时调用。例如，通过调用 `abort()` 方法。*（函数）*

*   **onerror**: 当读取已失败时调用。*（函数）*

*   **onloadend**： 当请求已完成 （无论成功或失败） 时调用。*（函数）*

**注：**以下产权不受支持：

*   **onprogress**: 读取该文件，报告进度的角度时称为 `progress.loaded` / `progress.total` 。*（函数）*

## 方法

*   **中止**: 中止读取文件。

*   **readAsDataURL**: 读取文件并返回数据作为 base64 编码的数据的 URL。

*   **readAsText**： 文件中读取文本。

*   **readAsBinaryString**: 读取文件为二进制文件，并返回一个二进制字符串。

*   **readAsArrayBuffer**: 读取文件作为`ArrayBuffer`.

## 详细信息

`FileReader`对象提供的方法来从该设备的文件系统中读取文件。 可以读取文件，作为文本或 base64 编码的数据的字符串。 事件侦听器接收 `loadstart` ， `progress` ， `load` ， `loadend` ， `error` ，和 `abort` 的事件。

## 支持的平台

*   Android 系统
*   黑莓手机 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8
*   Windows 8

## 读取数据的 URL 作为

**参数：**

*   **文件**： 要读取的文件对象。

## 快速的示例

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("read success");
            console.log(evt.target.result);
        };
        reader.readAsDataURL(file);
    };
    
    var fail = function (evt) {
        console.log(error.code);
    };
    
    entry.file(win, fail);
    

## 以文本格式阅读

**参数：**

*   **文件**： 要读取的文件对象。

*   **编码**： 使用编码的文件内容的编码。默认值为 UTF8。

## 快速的示例

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("read success");
            console.log(evt.target.result);
        };
        reader.readAsText(file);
    };
    
    var fail = function (evt) {
        console.log(error.code);
    };
    
    entry.file(win, fail);
    

## 中止快速示例

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function(evt) {
            console.log("read success");
            console.log(evt.target.result);
        };
        reader.readAsText(file);
        reader.abort();
    };
    
    function fail(error) {
        console.log(error.code);
    }
    
    entry.file(win, fail);
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>FileReader Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
        }
    
        function gotFS(fileSystem) {
            fileSystem.root.getFile("readme.txt", null, gotFileEntry, fail);
        }
    
        function gotFileEntry(fileEntry) {
            fileEntry.file(gotFile, fail);
        }
    
        function gotFile(file){
            readDataUrl(file);
            readAsText(file);
        }
    
        function readDataUrl(file) {
            var reader = new FileReader();
            reader.onloadend = function(evt) {
                console.log("Read as data URL");
                console.log(evt.target.result);
            };
            reader.readAsDataURL(file);
        }
    
        function readAsText(file) {
            var reader = new FileReader();
            reader.onloadend = function(evt) {
                console.log("Read as text");
                console.log(evt.target.result);
            };
            reader.readAsText(file);
        }
    
        function fail(evt) {
            console.log(evt.target.error.code);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Read File</p>
      </body>
    </html>
    

## iOS 的怪癖

*   **编码**参数不受支持，并且 UTF8 编码总是在效果。

## 读取的二进制字符串

目前仅支持 iOS 和 android 系统。

**参数：**

*   **文件**： 要读取的文件对象。

## 快速的示例

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("read success");
            console.log(evt.target.result);
        };
        reader.readAsBinaryString(file);
    };
    
    var fail = function (evt) {
        console.log(error.code);
    };
    
    entry.file(win, fail);
    

## 作为数组缓冲区中读取

目前仅支持 iOS 和 android 系统。

**参数：**

*   **文件**： 要读取的文件对象。

## 快速的示例

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("read success");
            console.log(new Uint8Array(evt.target.result));
        };
        reader.readAsArrayBuffer(file);
    };
    
    var fail = function (evt) {
        console.log(error.code);
    };
    
    entry.file(win, fail);