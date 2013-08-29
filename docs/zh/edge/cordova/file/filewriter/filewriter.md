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

# FileWriter

作为对象，它允许您创建和向文件中写入数据。

## 属性

*   **readyState**： 三种可能状态之一，或者 `INIT` ， `WRITING` ，或`DONE`.

*   **文件名**: 要写入的文件的名称。*() DOMString*

*   **长度**： 要写入的文件的长度。*(长)*

*   **位置**： 当前文件指针的位置。*(长)*

*   **错误**： 包含错误的对象。*() FileError*

*   **onwritestart**： 当写操作开始时调用。*（函数）*

*   **onwrite**： 当请求已成功完成时调用。*（函数）*

*   **onabort**： 当写操作已中止时调用。例如，通过调用 abort () 方法。*（函数）*

*   **onerror**： 当写操作已失败时调用。*（函数）*

*   **onwriteend**： 当请求已完成 （无论成功或失败） 时调用。*（函数）*

下面的属性*不*受支持：

*   **onprogress**： 写入文件，报告进度的角度时称为 `progress.loaded` / `progress.total` 。*（函数）*

## 方法

*   **中止**: 中止写入文件。

*   **寻求**： 将文件指针移到指定的字节。

*   **截断**： 缩短至指定长度的文件。

*   **写**： 将数据写入到该文件。

## 详细信息

`FileWriter`对象提供 utf-8 编码文件写入设备文件系统的方法。 应用程序响应 `writestart` ， `progress` ， `write` ， `writeend` ， `error` ，和 `abort` 的事件。

每个 `FileWriter` 对应于一个文件中，数据可以被写入许多倍。 `FileWriter`维护的文件 `position` 和 `length` 属性，允许到 app `seek` 和 `write` 文件中的任意位置。 默认情况下， `FileWriter` 将写入到文件中，覆盖现有数据的开始。 设置可选的 `append` 到布尔 `true` 在 `FileWriter` 的构造函数来写入到文件的末尾。

下面列出的所有平台都支持文本数据。 正在写入到文件系统之前文本编码为 utf-8。 一些平台还支持可以作为 ArrayBuffer 或 Blob 传递中的二进制数据。

## 支持的平台

文本和二进制的支持：

*   Android 系统
*   iOS

仅限文本的支持：

*   黑莓手机 WebWorks （OS 5.0 和更高）
*   Windows Phone 7 和 8
*   Windows 8

## 寻求快速的示例

    function win(writer) {
        // fast forwards file pointer to end of file
        writer.seek(writer.length);
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## 截断快速示例

    function win(writer) {
        writer.truncate(10);
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## 写快速示例

    function win(writer) {
        writer.onwrite = function(evt) {
            console.log("write success");
        };
        writer.write("some sample text");
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## 二进制文件写入快速示例

    function win(writer) {
        var data = new ArrayBuffer(5),
            dataView = new Int8Array(data);
        for (i=0; i < 5; i++) {
            dataView[i] = i;
        }
        writer.onwrite = function(evt) {
            console.log("write success");
        };
        writer.write(data);
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## 追加快速示例

    function win(writer) {
        writer.onwrite = function(evt) {
        console.log("write success");
    };
    writer.seek(writer.length);
        writer.write("appended text");
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## 中止快速示例

    function win(writer) {
        writer.onwrite = function(evt) {
            console.log("write success");
        };
        writer.write("some sample text");
        writer.abort();
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>FileWriter Example</title>
    
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
            fileSystem.root.getFile("readme.txt", {create: true, exclusive: false}, gotFileEntry, fail);
        }
    
        function gotFileEntry(fileEntry) {
            fileEntry.createWriter(gotFileWriter, fail);
        }
    
        function gotFileWriter(writer) {
            writer.onwriteend = function(evt) {
                console.log("contents of file now 'some sample text'");
                writer.truncate(11);
                writer.onwriteend = function(evt) {
                    console.log("contents of file now 'some sample'");
                    writer.seek(4);
                    writer.write(" different text");
                    writer.onwriteend = function(evt){
                        console.log("contents of file now 'some different text'");
                    }
                };
            };
            writer.write("some sample text");
        }
    
        function fail(error) {
            console.log(error.code);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Write File</p>
      </body>
    </html>