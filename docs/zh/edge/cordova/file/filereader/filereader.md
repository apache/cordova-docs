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

`FileReader`允許基本檔的存取權限。

## 屬性

*   **readyState**： 一個讀者的三個可能的狀態，要麼 `EMPTY` ， `LOADING` 或`DONE`.

*   **結果**： 已讀取檔的內容。*() DOMString*

*   **錯誤**： 包含錯誤的物件。*() FileError*

*   **onloadstart**: 讀取啟動時調用。*（函數）*

*   **onload**： 讀取已成功完成時調用。*（函數）*

*   **onabort**： 當已中止，讀取時調用。例如，通過調用 `abort()` 方法。*（函數）*

*   **onerror**: 當讀取已失敗時調用。*（函數）*

*   **onloadend**： 當請求已完成 （無論成功或失敗） 時調用。*（函數）*

**注：**以下產權不受支援：

*   **onprogress**: 讀取該檔，報告進度的角度時稱為 `progress.loaded` / `progress.total` 。*（函數）*

## 方法

*   **中止**: 中止讀取檔。

*   **readAsDataURL**: 讀取檔並返回資料作為 base64 編碼的資料的 URL。

*   **readAsText**： 檔中讀取文本。

*   **readAsBinaryString**: 讀取檔為二進位檔案，並返回一個二進位字串。

*   **readAsArrayBuffer**: 讀取檔作為`ArrayBuffer`.

## 詳細資訊

`FileReader`物件提供的方法來從該設備的檔案系統中讀取檔。 可以讀取檔，作為文本或 base64 編碼的資料的字串。 事件攔截器接收 `loadstart` ， `progress` ， `load` ， `loadend` ， `error` ，和 `abort` 的事件。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8
*   Windows 8

## readAsDataURL

**參數：**

*   **檔**： 要讀取的檔物件。

## 快速的示例

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("read success");
            console.log(evt.target.result);
        };
        reader.readAsDataURL(file);
    };
    
    var fail = function (error) {
        console.log(error.code);
    };
    
    entry.file(win, fail);
    

## readAsText

**參數：**

*   **檔**： 要讀取的檔物件。

*   **編碼**： 使用編碼的檔內容的編碼。預設值為 UTF8。

## 快速的示例

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("read success");
            console.log(evt.target.result);
        };
        reader.readAsText(file);
    };
    
    var fail = function (error) {
        console.log(error.code);
    };
    
    entry.file(win, fail);
    

## 中止

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
    
        function fail(error) {
            console.log(error.code);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Read File</p>
      </body>
    </html>
    

## iOS 的怪癖

*   **編碼**參數不受支援，並且 UTF8 編碼總是在效果。

## readAsBinaryString

目前僅支援 iOS 和 android 系統。

**參數：**

*   **檔**： 要讀取的檔物件。

## 快速的示例

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("read success");
            console.log(evt.target.result);
        };
        reader.readAsBinaryString(file);
    };
    
    var fail = function (error) {
        console.log(error.code);
    };
    
    entry.file(win, fail);
    

## readAsArrayBuffer

目前僅支援 iOS 和 android 系統。

**參數：**

*   **檔**： 要讀取的檔物件。

## 快速的示例

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("read success");
            console.log(new Uint8Array(evt.target.result));
        };
        reader.readAsArrayBuffer(file);
    };
    
    var fail = function (error) {
        console.log(error.code);
    };
    
    entry.file(win, fail);