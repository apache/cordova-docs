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

# FileWriter

作為物件，它允許您創建和向<a href="../fileobj/fileobj.html">檔</a>中寫入資料。

## 屬性

*   **readyState**： 三種可能狀態之一，或者 `INIT` ， `WRITING` ，或`DONE`.

*   **<a href="../fileobj/fileobj.html">檔</a>案名**: 要寫入的<a href="../fileobj/fileobj.html">檔</a>的名稱。*() DOMString*

*   **長度**： 要寫入的<a href="../fileobj/fileobj.html">檔</a>的長度。*(長)*

*   **<a href="../../geolocation/Position/position.html">位置</a>**： 當前<a href="../fileobj/fileobj.html">檔</a>指標的<a href="../../geolocation/Position/position.html">位置</a>。*(長)*

*   **錯誤**： 包含錯誤的物件。*() <a href="../fileerror/fileerror.html">FileError</a>*

*   **onwritestart**： 當寫操作開始時調用。*（函數）*

*   **onwrite**： 當請求已成功完成時調用。*（函數）*

*   **onabort**： 當寫操作已中止時調用。例如，通過調用 abort () 方法。*（函數）*

*   **onerror**： 當寫操作已失敗時調用。*（函數）*

*   **onwriteend**： 當請求已完成 （無論成功或失敗） 時調用。*（函數）*

下面的屬性*不*受支援：

*   **onprogress**： 寫入<a href="../fileobj/fileobj.html">檔</a>，報告進度的角度時稱為 `progress.loaded` / `progress.total` 。*（函數）*

## 方法

*   **中止**: 中止寫入<a href="../fileobj/fileobj.html">檔</a>。

*   **尋求**： 將<a href="../fileobj/fileobj.html">檔</a>指標移到指定的位元組。

*   **截斷**： 縮短至指定長度的<a href="../fileobj/fileobj.html">檔</a>。

*   **寫**： 將資料寫入到該<a href="../fileobj/fileobj.html">檔</a>。

## 詳細資訊

`FileWriter`物件提供 utf-8 編碼<a href="../fileobj/fileobj.html">檔</a>寫入<a href="../../device/device.html">設備</a><a href="../fileobj/fileobj.html">檔</a>案系統的方法。 應用程式回應 `writestart` ， `progress` ， `write` ， `writeend` ， `error` ，和 `abort` 的<a href="../../events/events.html">事件</a>。

每個 `FileWriter` 對應于一個<a href="../fileobj/fileobj.html">檔</a>中，資料可以被寫入許多倍。 `FileWriter`維護的<a href="../fileobj/fileobj.html">檔</a> `position` 和 `length` 屬性，允許到 app `seek` 和 `write` <a href="../fileobj/fileobj.html">檔</a>中的任意<a href="../../geolocation/Position/position.html">位置</a>。 預設情況下， `FileWriter` 將寫入到<a href="../fileobj/fileobj.html">檔</a>中，覆蓋現有資料的開始。 設置可選的 `append` 到布林 `true` 在 `FileWriter` 的建構函式來寫入到<a href="../fileobj/fileobj.html">檔</a>的末尾。

下面列出的所有平臺都支援文本資料。 正在寫入到<a href="../fileobj/fileobj.html">檔</a>案系統之前文本編碼為 utf-8。 一些平臺還支援可以作為 ArrayBuffer 或 Blob 傳遞中的二進位資料。

## 支援的平臺

文本和二進位的支援：

*   Android 系統
*   iOS

僅限文本的支援：

*   黑莓手機 WebWorks （OS 5.0 和更高）
*   Windows Phone 7 和 8
*   Windows 8

## 尋求快速的示例

    function win(writer) {
        // fast forwards file pointer to end of file
        writer.seek(writer.length);
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## 截斷快速示例

    function win(writer) {
        writer.truncate(10);
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## 寫快速示例

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
    

## 二進位<a href="../fileobj/fileobj.html">檔</a>案寫入快速示例

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
        <title>FileWriter <a href="../../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.<a href="../../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.<a href="../localfilesystem/localfilesystem.html">requestFileSystem</a>(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
        }
    
        function gotFS(fileSystem) {
            fileSystem.root.getFile("readme.txt", {create: true, exclusive: false}, got<a href="../fileentry/fileentry.html">FileEntry</a>, fail);
        }
    
        function got<a href="../fileentry/fileentry.html">FileEntry</a>(fileEntry) {
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
        <h1><a href="../../storage/storage.opendatabase.html">Example</a></h1>
        <p>Write File</p>
      </body>
    </html>