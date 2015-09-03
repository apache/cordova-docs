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


# 檔

> 一個 API，用於讀取、 寫入和導航基於[w3c 檔 api][1]的檔案系統層次結構.

 [1]: http://www.w3.org/TR/FileAPI

## 物件

*   枚舉指定工作組或
*   DirectoryReader
*   檔
*   FileEntry
*   FileError
*   FileReader
*   檔案系統
*   檔案傳輸
*   FileTransferError
*   FileUploadOptions
*   FileUploadResult
*   FileWriter
*   標誌
*   場合
*   中繼資料

## 訪問功能

從 3.0 版，科爾多瓦作為*外掛程式*實現了設備級 Api。 使用 CLI 的 `plugin` 命令，描述在命令列介面，可以添加或刪除一個專案，為此功能：

        $ cordova plugin add org.apache.cordova.file
        $ cordova plugin ls
        [ 'org.apache.cordova.file' ]
        $ cordova plugin rm org.apache.cordova.file
    

要使用的檔案傳輸外掛程式必須單獨添加的。

        $ cordova plugin add org.apache.cordova.file-transfer
        $ cordova plugin ls
        [ 'org.apache.cordova.file-transfer' ]
        $ cordova plugin rm org.apache.cordova.file-transfer
    

這些命令適用于所有有針對性的平臺，但修改如下所述的特定于平臺的配置設置：

*   Android 系統
    
        (in app/res/xml/config.xml)
        <feature name="File">
            <param name="android-package" value="org.apache.cordova.FileUtils" />
        </feature>
        <feature name="FileTransfer">
            <param name="android-package" value="org.apache.cordova.FileTransfer" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
        

*   黑莓手機 WebWorks
    
        (in www/plugins.xml)
        <feature name="File">
            <param name="blackberry-package" value="org.apache.cordova.file.FileManager" />
        </feature>
        <feature name="FileTransfer">
            <param name="blackberry-package" value="org.apache.cordova.http.FileTransfer" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.io.file" required="true" version="1.0.0.0" />
        <feature id="blackberry.utils"   required="true" version="1.0.0.0" />
        <feature id="blackberry.io.dir"  required="true" version="1.0.0.0" />
        <rim:permissions>
            <rim:permit>access_shared</rim:permit>
        </rim:permissions>
        

*   （在 iOS`config.xml`)
    
        <feature name="File">
            <param name="ios-package" value="CDVFile" />
        </feature>
        <feature name="FileTransfer">
            <param name="ios-package" value="CDVFileTransfer" />
        </feature>
        

一些平臺可能支援此功能，而無需任何特殊的配置。請參見在概述部分中*的平臺支援*。


# 檔

此物件包含的單個檔的屬性。

## 屬性

*   **名稱**： 檔的名稱。*() DOMString*

*   **完整路徑**： 包括檔案名的檔的完整路徑。*() DOMString*

*   **類型**： 檔的 mime 類型。*() DOMString*

*   **lastModifiedDate**： 上次修改該檔的時間。*（日期）*

*   **大小**： 以位元組為單位的檔案大小。*(長)*

## 方法

*   **切片**: 僅選擇了部分要讀取的檔。

## 詳細資訊

`File`物件包含單個檔的屬性。您可以獲取的實例 `File` 物件通過調用 `FileEntry` 物件的 `file()` 方法。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8
*   Windows 8

## 切片

返回一個新的 `File` 物件，為其 `FileReader` 返回只有該檔的指定的部分。 負值設置為 `start` 或 `end` 測量從檔的末尾。 相對於當前切片定位的索引。 （請參閱下面的完整示例）。

**參數：**

*   **開始**： 要閱讀，具有包容性的第一個位元組的索引。

*   **結束**: 後最後一個要讀取的位元組的索引。

**快速的示例**

    var slicedFile = file.slice(10, 30);
    

**完整的示例**

    var slice1 = file.slice(100, 400);
    var slice2 = slice1.slice(20, 35);
    
    var slice3 = file.slice(120, 135);
    // slice2 and slice3 are equivalent.
    

**支援的平臺**

*   Android 系統
*   iOS


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


# FileWriter

作為物件，它允許您創建和向檔中寫入資料。

## 屬性

*   **readyState**： 三種可能狀態之一，或者 `INIT` ， `WRITING` ，或`DONE`.

*   **檔案名**: 要寫入的檔的名稱。*() DOMString*

*   **長度**： 要寫入的檔的長度。*(長)*

*   **位置**： 當前檔指標的位置。*(長)*

*   **錯誤**： 包含錯誤的物件。*() FileError*

*   **onwritestart**： 當寫操作開始時調用。*（函數）*

*   **onwrite**： 當請求已成功完成時調用。*（函數）*

*   **onabort**： 當寫操作已中止時調用。例如，通過調用 abort () 方法。*（函數）*

*   **onerror**： 當寫操作已失敗時調用。*（函數）*

*   **onwriteend**： 當請求已完成 （無論成功或失敗） 時調用。*（函數）*

下面的屬性*不*受支援：

*   **onprogress**： 寫入檔，報告進度的角度時稱為 `progress.loaded` / `progress.total` 。*（函數）*

## 方法

*   **中止**: 中止寫入檔。

*   **尋求**： 將檔指標移到指定的位元組。

*   **截斷**： 縮短至指定長度的檔。

*   **寫**： 將資料寫入到該檔。

## 詳細資訊

`FileWriter`物件提供 utf-8 編碼檔寫入設備檔案系統的方法。 應用程式回應 `writestart` ， `progress` ， `write` ， `writeend` ， `error` ，和 `abort` 的事件。

每個 `FileWriter` 對應于一個檔中，資料可以被寫入許多倍。 `FileWriter`維護的檔 `position` 和 `length` 屬性，允許到 app `seek` 和 `write` 檔中的任意位置。 預設情況下， `FileWriter` 將寫入到檔中，覆蓋現有資料的開始。 設置可選的 `append` 到布林 `true` 在 `FileWriter` 的建構函式來寫入到檔的末尾。

下面列出的所有平臺都支援文本資料。 正在寫入到檔案系統之前文本編碼為 utf-8。 一些平臺還支援可以作為 ArrayBuffer 或 Blob 傳遞中的二進位資料。

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
    

## 二進位檔案寫入快速示例

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


# 檔案系統

此物件表示一個檔案系統。

## 屬性

*   **名稱**： 檔案系統的名稱。*() DOMString*

*   **根**： 檔案系統的根目錄。*() DirectoryEntry*

## 詳細資訊

`FileSystem`物件表示檔案系統的資訊。 檔案系統的名稱的公開的檔案系統的清單中是唯一的。 根屬性包含 `DirectoryEntry` 物件，表示檔案系統的根目錄。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8
*   Windows 8

## 檔案系統快速示例

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
        console.log(fileSystem.root.name);
    }
    
    // request the persistent file system
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, null);
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>File System Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);
        }
    
        function onFileSystemSuccess(fileSystem) {
            console.log(fileSystem.name);
            console.log(fileSystem.root.name);
        }
    
        function fail(evt) {
            console.log(evt.target.error.code);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>File System</p>
      </body>
    </html>


# FileEntry

表示一個檔在檔案系統上， [W3C 目錄和系統][1]規範中定義。

 [1]: http://www.w3.org/TR/file-system-api/

## 屬性

*   **isFile**： 總是 `true` 。*（布林）*

*   **isDirectory**： 總是 `false` 。*（布林）*

*   **名稱**： 的名稱 `FileEntry` ，不包括導致它的路徑。*() DOMString*

*   **完整路徑**： 絕對路徑從根到 `FileEntry` 。*() DOMString*

**注：**下面的屬性由 W3C 規範定義，但*不是*支援：

*   **檔案系統**： 檔案系統的 `FileEntry` 駐留。*（檔案系統）*

## 方法

*   **getMetadata**： 查找有關檔的中繼資料。

*   **setMetadata**: 設置檔上的中繼資料。

*   **moveTo**： 將檔移動到一個不同的位置，在檔案系統上。

*   **copyTo**： 將檔案複製到檔案系統上的不同位置。

*   **toURL**： 返回一個可用於查找的檔的 URL。

*   **刪除**： 刪除一個檔。

*   **getParent**: 查找父目錄。

*   **createWriter**: 創建 `FileWriter` 物件，可用於向檔中寫入。

*   **檔**： 創建 `File` 物件，其中包含檔案屬性。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8
*   Windows 8

## getMetadata

查找有關檔的中繼資料。

**參數：**

*   **successCallback**： 傳遞一個回檔 `Metadata` 物件。*（函數）*

*   **errorCallback**： 如果錯誤發生在檢索時將執行的回檔 `Metadata` 。調用與 `FileError` 物件。*（函數）*

**快速的示例**

    函數 success(metadata) {console.log ("上次修改時間:"+ metadata.modificationTime);}函數 fail(error) {alert(error.code);}/ / 請求的中繼資料物件的此條目 entry.getMetadata （成功、 失敗） ；
    

## setMetadata

上一個檔集的中繼資料。

**目前僅適用于 iOS。**

*   這將設置一個檔的擴展的屬性。

**參數：**

*   **successCallback**： 當設置該中繼資料時執行回檔。*（函數）*

*   **errorCallback**： 當不成功地設置該中繼資料時執行回檔。*（函數）*

*   **metadataObject**： 包含中繼資料的鍵和值的物件。*（物件）*

**快速的示例**

    function success() {
        console.log("The metadata was successfully set.");
    }
    
    function fail() {
        alert("There was an error in setting the metadata");
    }
    
    // Set the metadata
    entry.setMetadata(success, fail, { "com.apple.MobileBackup": 1});
    

**iOS 怪癖**

*   只有 `com.apple.MobileBackup` 支援擴展的屬性。 將該值設置為 `1` ，防止檔被備份到 iCloud。 將該值設置為 `` ，重新啟用該檔以將備份到 iCloud。

**快速的示例**

    function setFileMetadata(localFileSystem, filePath, metadataKey, metadataValue)
    {
        var onSetMetadataWin = function() {
            console.log("success setting metadata")
        }
        var onSetMetadataFail = function() {
            console.log("error setting metadata")
        }
    
        var onGetFileWin = function(parent) {
            var data = {};
            data[metadataKey] = metadataValue;
            parent.setMetadata(onSetMetadataWin, onSetMetadataFail, data);
        }
        var onGetFileFail = function() {
            console.log("error getting file")
        }
    
        var onFSWin = function(fileSystem) {
            fileSystem.root.getFile(filePath, {create: true, exclusive: false}, onGetFileWin, onGetFileFail);
        }
    
        var onFSFail = function(evt) {
            console.log(evt.target.error.code);
        }
    
        window.requestFileSystem(localFileSystem, 0, onFSWin, onFSFail);
    }
    
        setFileMetadata(LocalFileSystem.PERSISTENT, "Backups/sqlite.db", "com.apple.MobileBackup", 1);
    

## moveTo

在檔案系統上的檔移到不同的位置。如果應用程式嘗試向會導致錯誤：

*   將檔移到其父，如果沒有提供從其當前的一個不同的名稱 ；

*   將檔移動到被佔領 ； 每個目錄的路徑

此外，在現有檔中移動檔將嘗試刪除和替換該檔。

**參數：**

*   **父**： 要將檔移到父目錄。*() DirectoryEntry*

*   **newName**： 該檔的新名稱。預設值為當前的名稱如果未指定。*() DOMString*

*   **successCallback**： 傳遞新檔回檔 `FileEntry` 物件。*（函數）*

*   **errorCallback**： 如果嘗試移動檔時發生錯誤執行回檔。調用與 `FileError` 物件。*（函數）*

**快速的示例**

    function success(entry) {
        console.log("New Path: " + entry.fullPath);
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    function moveFile(entry) {
        var parent = document.getElementById('parent').value,
            parentName = parent.substring(parent.lastIndexOf('/')+1),
            parentEntry = new DirectoryEntry(parentName, parent);
    
        // move the file to a new directory and rename it
        entry.moveTo(parentEntry, "newFile.txt", success, fail);
    }
    

## copyTo

將檔案複製到檔案系統上的新位置。如果應用程式嘗試向會導致錯誤：

*   如果未提供從其當前的一個不同的名稱，請將檔案複製到其父。

**參數：**

*   **父**： 要向其複製該檔的父目錄。*() DirectoryEntry*

*   **newName**： 該檔的新名稱。預設值為當前的名稱如果未指定。*() DOMString*

*   **successCallback**： 傳遞新檔回檔 `FileEntry` 物件。*（函數）*

*   **errorCallback**： 如果試圖複製檔時發生錯誤執行回檔。調用與 `FileError` 物件。*（函數）*

**快速的示例**

    function win(entry) {
        console.log("New Path: " + entry.fullPath);
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    function copyFile(entry) {
        var parent = document.getElementById('parent').value,
            parentName = parent.substring(parent.lastIndexOf('/')+1),
            parentEntry = new DirectoryEntry(parentName, parent);
    
        // copy the file to a new directory and rename it
        entry.copyTo(parentEntry, "file.copy", success, fail);
    }
    

## toURL

返回一個可用於查找的檔的 URL。

**快速的示例**

    // Request the URL for this entry
    var fileURL = entry.toURL();
    console.log(fileURL);
    

## 刪除

刪除的檔。

**參數：**

*   **successCallback**: 在該檔已被刪除後執行的回檔。不帶參數調用。*（函數）*

*   **errorCallback**： 如果嘗試刪除檔時出現錯誤執行回檔。調用與 `FileError` 物件。*（函數）*

**快速的示例**

    function success(entry) {
        console.log("Removal succeeded");
    }
    
    function fail(error) {
        alert('Error removing file: ' + error.code);
    }
    
    // remove the file
    entry.remove(success, fail);
    

## getParent

查找父 `DirectoryEntry` 包含該檔。

**參數：**

*   **successCallback**： 傳遞檔的父的回檔 `DirectoryEntry` 。*（函數）*

*   **errorCallback**： 如果試圖檢索父時發生錯誤執行的回檔 `DirectoryEntry` 。 調用與 `FileError` 物件。 *（函數）*

**快速的示例**

    function success(parent) {
        console.log("Parent Name: " + parent.name);
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    // Get the parent DirectoryEntry
    entry.getParent(success, fail);
    

## createWriter

創建 `FileWriter` 物件與所代表的檔關聯`FileEntry`.

**參數：**

*   **successCallback**： 傳遞一個回檔 `FileWriter` 物件。*（函數）*

*   **errorCallback**： 如果試圖創建 FileWriter 而發生錯誤執行回檔。調用與 `FileError` 物件。*（函數）*

**快速的示例**

    function success(writer) {
        writer.write("Some text to the file");
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    // create a FileWriter to write to the file
    entry.createWriter(success, fail);
    

## 檔

返回 `File` 物件，它表示該檔的目前狀態，這 `FileEntry` 表示。

**參數：**

*   **successCallback**： 傳遞一個回檔 `File` 物件。*（函數）*

*   **errorCallback**： 回檔的執行如果發生錯誤時創建 `File` 物件，例如當該檔不再存在。 調用與 `FileError` 物件。 *（函數）*

**快速的示例**

    function success(file) {
        console.log("File size: " + file.size);
    }
    
    function fail(error) {
        alert("Unable to retrieve file properties: " + error.code);
    }
    
    // obtain properties of a file
    entry.file(success, fail);


# 枚舉指定工作組或

此物件表示一個目錄在檔案系統上，如由[W3C 目錄和系統][1]規範定義的。

 [1]: http://www.w3.org/TR/file-system-api/

## 屬性

*   **isFile**： 總是 `false` 。*（布林）*

*   **isDirectory**： 總是 `true` 。*（布林）*

*   **名稱**： 的名稱 `DirectoryEntry` ，不包括導致它的路徑。*() DOMString*

*   **完整路徑**： 絕對路徑從根到 `DirectoryEntry` 。*() DOMString*

**注：**下面的屬性由 W3C 規範定義，但*不是*支援：

*   **檔案系統**： 檔案系統的 `DirectoryEntry` 駐留。*（檔案系統）*

## 方法

下面的方法可以上調用 `DirectoryEntry` 物件：

*   **getMetadata**: 查找一個目錄有關的中繼資料。

*   **setMetadata**： 在目錄上設置的中繼資料。

*   **moveTo**： 移動到不同的位置在檔案系統上的目錄。

*   **copyTo**： 將一個目錄複寫到檔案系統上的不同位置。

*   **toURL**： 返回來説明定位目錄的 URL。

*   **刪除**： 刪除一個目錄。該目錄必須是空的。

*   **getParent**: 查找父目錄。

*   **createReader**: 創建一個新的 `DirectoryReader` ，可以從目錄中讀取條目。

*   **getDirectory**: 創建或者查找一個目錄。

*   **getFile**: 創建或查找檔。

*   **removeRecursively**： 刪除一個目錄和其所有內容。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8
*   Windows 8

## getMetadata

查找有關目錄的中繼資料。

**參數：**

*   **successCallback**： 要與執行的回呼函數 `Metadata` 物件。*（函數）*

*   **errorCallback**: 一個回呼函數來執行如果檢索時出現錯誤 `Metadata` 。調用與 `FileError` 物件。*（函數）*

**快速的示例**

    函數 success(metadata) {console.log ("上次修改時間:"+ metadata.modificationTime);}函數 fail(error) {alert(error.code);}/ / 請求的中繼資料物件的此條目 entry.getMetadata （成功、 失敗） ；
    

## setMetadata

設置目錄的擴展的屬性或中繼資料。*目前僅適用于 iOS。*

**參數：**

*   **successCallback**： 在成功地設置該中繼資料時執行回檔。*（函數）*

*   **errorCallback**: 執行中繼資料失敗要設置時的回檔。*（函數）*

*   **metadataObject**： 包含中繼資料的鍵和值的物件。*（物件）*

**快速的示例**

    function success() {
        console.log("The metadata was successfully set.");
    }
    
    function fail() {
        alert("There was an error in setting the metadata");
    }
    
    // Set the metadata
    entry.setMetadata(success, fail, { "com.apple.MobileBackup": 1});
    

**iOS 怪癖**

*   只有 `com.apple.MobileBackup` 支援擴展的屬性。 將該值設置為 `1` ，防止該目錄從備份到 iCloud。 將該值設置為 `` ，重新啟用要備份到 iCloud 的目錄。

**快速的示例**

    function setFolderMetadata(localFileSystem, subFolder, metadataKey, metadataValue)
    {
        var onSetMetadataWin = function() {
            console.log("success setting metadata")
        }
        var onSetMetadataFail = function() {
            console.log("error setting metadata")
        }
    
        var onGetDirectoryWin = function(parent) {
            var data = {};
            data[metadataKey] = metadataValue;
            parent.setMetadata(onSetMetadataWin, onSetMetadataFail, data);
        }
        var onGetDirectoryFail = function() {
            console.log("error getting dir")
        }
    
        var onFSWin = function(fileSystem) {
            fileSystem.root.getDirectory(subFolder, {create: true, exclusive: false}, onGetDirectoryWin, onGetDirectoryFail);
        }
    
        var onFSFail = function(evt) {
            console.log(evt.target.error.code);
        }
    
        window.requestFileSystem(localFileSystem, 0, onFSWin, onFSFail);
    }
    
        setFolderMetadata(LocalFileSystem.PERSISTENT, "Backups", "com.apple.MobileBackup", 1);
    

## moveTo

移動到不同的位置在檔案系統上的目錄。如果應用程式嘗試向會導致錯誤：

*   在任何深度移動一個目錄裡面本身或任何兒童。

*   如果不提供不同從其目前的目錄的名稱，則將一個目錄移到其父。

*   將一個目錄移到被佔領的一個檔的路徑。

*   將一個目錄移到被佔領的一個不是空的目錄的路徑。

移動目錄上現有的空目錄嘗試刪除並替換為該目錄。

**參數：**

*   **父**： 要移動該目錄的父目錄。*() DirectoryEntry*

*   **newName**： 目錄的新名稱。預設值為當前的名稱如果未指定。*() DOMString*

*   **successCallback**： 與執行的回檔 `DirectoryEntry` 為新的目錄物件。*（函數）*

*   **errorCallback**: 如果移動該目錄時，會出現一個錯誤執行回檔。調用與 `FileError` 物件。*（函數）*

**快速的示例**

    function success(entry) {
        console.log("New Path: " + entry.fullPath);
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    function moveDir(entry) {
        var parent = document.getElementById('parent').value,
            parentName = parent.substring(parent.lastIndexOf('/')+1),
            newName = document.getElementById('newName').value,
            parentEntry = new DirectoryEntry(parentName, parent);
    
        // move the directory to a new directory and rename it
        entry.moveTo(parentEntry, newName, success, fail);
    }
    

## copyTo

將一個目錄複寫到檔案系統上的不同位置。如果應用程式嘗試向會導致錯誤：

*   複製一個目錄裡面本身在任何深度。

*   如果未提供不同從其目前的目錄的名稱，請將一個目錄複寫到其父。

目錄副本始終是遞迴的並將複製的目錄的所有內容。

**參數：**

*   **父**： 要向其複製目錄的父目錄。*() DirectoryEntry*

*   **newName**： 目錄的新名稱。預設值為當前的名稱如果未指定。*() DOMString*

*   **successCallback**： 與執行的回檔 `DirectoryEntry` 為新的目錄物件。*（函數）*

*   **errorCallback**： 如果試圖複製基礎目錄時發生錯誤執行回檔。調用與 `FileError` 物件。*（函數）*

**快速的示例**

    function win(entry) {
        console.log("New Path: " + entry.fullPath);
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    function copyDir(entry) {
        var parent = document.getElementById('parent').value,
            parentName = parent.substring(parent.lastIndexOf('/')+1),
            newName = document.getElementById('newName').value,
            parentEntry = new DirectoryEntry(parentName, parent);
    
        // copy the directory to a new directory and rename it
        entry.copyTo(parentEntry, newName, success, fail);
    }
    

## toURL

返回一個可以用來找到的目錄的 URL。

**快速的示例**

    // Get the URL for this directory
    var dirURL = entry.toURL();
    console.log(dirURL);
    

## 刪除

刪除一個目錄。如果應用程式嘗試向會導致錯誤：

*   刪除一個目錄，不是空的。

*   刪除根目錄下的一個檔案系統。

**參數：**

*   **successCallback**： 在刪除該目錄後執行的回檔。不帶參數調用。*（函數）*

*   **errorCallback**： 如果要刪除的目錄時，會出現錯誤執行回檔。調用與 `FileError` 物件。*（函數）*

**快速的示例**

    函數 success(entry) {console.log ("刪除成功");}函數 fail(error) {警報 (' 刪除目錄時出錯: ' + error.code);}/ / 刪除此目錄 entry.remove （成功、 失敗） ；
    

## getParent

查找父 `DirectoryEntry` 包含的目錄。

**參數：**

*   **successCallback**： 一個通過目錄的父目錄的回檔 `DirectoryEntry` 。*（函數）*

*   **errorCallback**： 如果試圖檢索父時發生錯誤執行的回檔 `DirectoryEntry` 。 調用與 `FileError` 物件。 *（函數）*

**快速的示例**

    function success(parent) {
        console.log("Parent Name: " + parent.name);
    }
    
    function fail(error) {
        alert('Failed to get parent directory: ' + error.code);
    }
    
    // Get the parent DirectoryEntry
    entry.getParent(success, fail);
    

## createReader

創建新的 DirectoryReader 來讀取目錄中的條目。

**快速的示例**

    // create a directory reader
    var directoryReader = entry.createReader();
    

## getDirectory

創建或查找現有的目錄。如果應用程式嘗試向會導致錯誤：

*   創建一個其直接父尚不存在的目錄。

**參數：**

*   **路徑**： 要查找或創建的目錄的路徑。絕對路徑或相對路徑從這 `DirectoryEntry` 。*() DOMString*

*   **選項**： 選項，以指定是否要如果它不存在，則創建該目錄。*（標誌）*

*   **successCallback**： 回檔的執行的 `DirectoryEntry` 物件。*（函數）*

*   **errorCallback**： 如果發生錯誤時創建或查找目錄執行的回檔。調用與 `FileError` 物件。*（函數）*

**快速的示例**

    函數 success(dirEntry) {console.log ("目錄名稱："+ dirEntry.name);}函數 fail(error) {警報 ("無法創建新的目錄:"+ error.code);}/ / 檢索現有的目錄，或創建它，如果它不存在 entry.getDirectory ("newDir"，{創建： true，獨家: false}，成功，失敗） ；
    

## getFile

創建或查找檔。如果應用程式嘗試向會導致錯誤：

*   創建一個其直接父尚不存在的檔。

**參數：**

*   **路徑**： 要查找或創建的檔的路徑。絕對路徑或相對路徑從這 `DirectoryEntry` 。*() DOMString*

*   **選項**： 選項，以指定是否是否它不存在，則創建該檔。*（標誌）*

*   **successCallback**： 傳遞一個回檔 `FileEntry` 物件。*（函數）*

*   **errorCallback**: 如果在創建或查找檔時出現錯誤執行回檔。調用與 `FileError` 物件。*（函數）*

**快速的示例**

    函數 success(fileEntry) {console.log ("檔的名稱："+ fileEntry.name);}函數 fail(error) {警報 ("未能檢索檔："+ error.code);}/ / 檢索現有的檔，或創建它，如果它不存在 entry.getFile ("newFile.txt"，{創建： true，獨家: false}，成功，失敗） ；
    

## removeRecursively

刪除一個目錄和其所有內容。 如果發生錯誤 （例如試圖刪除包含一個不能被刪除的檔的目錄），可能會刪除一些目錄的內容。 如果應用程式嘗試向會導致錯誤：

*   刪除根目錄下的一個檔案系統。

**參數：**

*   **successCallback**： 後執行的回檔 `DirectoryEntry` 已被刪除。不帶參數調用。*（函數）*

*   **errorCallback**： 如果試圖刪除時發生錯誤執行的回檔 `DirectoryEntry` 。調用與 `FileError` 物件。*（函數）*

**快速的示例**

    function success(parent) {
        console.log("Remove Recursively Succeeded");
    }
    
    function fail(error) {
        alert("Failed to remove directory or it's contents: " + error.code);
    }
    
    // remove the directory and all it's contents
    entry.removeRecursively(success, fail);
    

## 黑莓手機的怪癖

可能會失敗， `ControlledAccessException` 在以下情況中：

*   應用程式試圖訪問由以前安裝的應用程式創建一個目錄。

> 解決方案： 確保手動，或由前重新安裝應用程式的臨時目錄，清潔。

*   如果該設備通過 USB 連接。

> 解決方案： 從設備拔下 USB 電纜，然後再次運行。


# DirectoryReader

列出檔和目錄在目錄中，如[W3C 目錄和系統][1]規範中定義的物件。

 [1]: http://www.w3.org/TR/file-system-api/

## 方法

*   **readEntries**: 讀取一個目錄中的條目。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8
*   Windows 8

## readEntries

讀取此目錄中的項。

**參數：**

*   **successCallback**: 一個傳遞的陣列的回檔 `FileEntry` 和 `DirectoryEntry` 的物件。*（函數）*

*   **errorCallback**: 如果檢索目錄清單時發生錯誤執行回檔。調用與 `FileError` 物件。*（函數）*

**快速的示例**

    function success(entries) {
        var i;
        for (i=0; i<entries.length; i++) {
            console.log(entries[i].name);
        }
    }
    
    function fail(error) {
        alert("Failed to list directory contents: " + error.code);
    }
    
    // Get a directory reader
    var directoryReader = dirEntry.createReader();
    
    // Get a list of all the entries in the directory
    directoryReader.readEntries(success,fail);


# 檔案傳輸

`FileTransfer`物件允許你上傳或下載檔案，伺服器和用戶端。

## 屬性

*   **onprogress**： 使用調用 `ProgressEvent` 每當一塊新的資料傳輸。*（函數）*

## 方法

*   **上傳**： 將檔發送到伺服器。

*   **下載**： 從伺服器上下載檔案。

*   **中止**: 中止正在進行轉讓。

## 詳細資訊

`FileTransfer`物件提供一種方法將檔上載到遠端伺服器使用多部分的 HTTP POST 請求。 支援 HTTP 和 HTTPS 協定。 可以通過指定可選參數 `FileUploadOptions` 物件的 `upload()` 方法。 上傳成功， `FileUploadResult` 物件傳遞給成功回檔。 如果發生錯誤， `FileTransferError` 物件傳遞到錯誤回檔。 它也是可能的 （只在 iOS 和 Android） 從遠端伺服器下載檔案並將其保存在設備上。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8
*   Windows 8

## 上傳

**參數：**

*   **檔路徑**: 設備上的檔的完整路徑。

*   **伺服器**： 伺服器以接收該檔，由編碼的 URL`encodeURI()`.

*   **successCallback**： 傳遞一個回檔 `Metadata` 物件。*（函數）*

*   **errorCallback**： 回檔的執行如果出現檢索錯誤 `Metadata` 。調用與 `FileTransferError` 物件。*（函數）*

*   **選項**： 檔案名稱和 mimetype 等可選參數。

*   **trustAllHosts**: 可選參數，預設值為 `false` 。 如果設置為 `true` ，它可以接受的所有安全證書。 由於 Android 拒絕自行簽署式安全證書，這非常有用。 不建議供生產使用。 在 Android 和 iOS 上受支援。 *(布林值)*

**快速的示例**

    // !! Assumes variable fileURI contains a valid URI to a text file on the device
    
    var win = function (r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);
    }
    
    var fail = function (error) {
        alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
    }
    
    var options = new FileUploadOptions();
    options.fileKey = "file";
    options.fileName = fileURI.substr(fileURI.lastIndexOf('/') + 1);
    options.mimeType = "text/plain";
    
    var params = {};
    params.value1 = "test";
    params.value2 = "param";
    
    options.params = params;
    
    var ft = new FileTransfer();
    ft.upload(fileURI, encodeURI("http://some.server.com/upload.php"), win, fail, options);
    

**完整的示例**

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
    <html>
    <head>
        <title>File Transfer Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
            // Wait for device API libraries to load
            //
            document.addEventListener("deviceready", onDeviceReady, false);
    
            // device APIs are available
            //
            function onDeviceReady() {
                // Retrieve image file location from specified source
                navigator.camera.getPicture(
                    uploadPhoto,
                    function(message) { alert('get picture failed'); },
                    {
                        quality         : 50,
                        destinationType : navigator.camera.DestinationType.FILE_URI,
                        sourceType      : navigator.camera.PictureSourceType.PHOTOLIBRARY
                    }
                );
            }
    
            function uploadPhoto(imageURI) {
                var options = new FileUploadOptions();
                options.fileKey="file";
                options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
                options.mimeType="image/jpeg";
    
                var params = {};
                params.value1 = "test";
                params.value2 = "param";
    
                options.params = params;
    
                var ft = new FileTransfer();
                ft.upload(imageURI, encodeURI("http://some.server.com/upload.php"), win, fail, options);
            }
    
            function win(r) {
                console.log("Code = " + r.responseCode);
                console.log("Response = " + r.response);
                console.log("Sent = " + r.bytesSent);
            }
    
            function fail(error) {
                alert("An error has occurred: Code = " + error.code);
                console.log("upload error source " + error.source);
                console.log("upload error target " + error.target);
            }
    
            </script>
    </head>
    <body>
        <h1>Example</h1>
        <p>Upload File</p>
    </body>
    </html>
    

**設置上傳標頭**

在 Android 和 iOS 上受支援

    function win(r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);
    }
    
    function fail(error) {
        alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
    }
    
    var uri = encodeURI("http://some.server.com/upload.php");
    
    var options = new FileUploadOptions();
    options.fileKey="file";
    options.fileName=fileURI.substr(fileURI.lastIndexOf('/')+1);
    options.mimeType="text/plain";
    
    var headers={'headerParam':'headerValue'};
    
    options.headers = headers;
    
    var ft = new FileTransfer();
    ft.upload(fileURI, uri, win, fail, options);
    

**Android 的怪癖**

設置 `chunkedMode` 選項 `false` ，防止將上載到 Nginx 伺服器的問題。

## 下載

**參數：**

*   **來源**： 要下載的檔，如由編碼的伺服器的 URL`encodeURI()`.

*   **目標**： 在設備上的檔的完整路徑。

*   **successCallback**： 傳遞一個回檔 `FileEntry` 物件。*（函數）*

*   **errorCallback**： 如果錯誤發生在檢索時將執行的回檔 `Metadata` 。調用與 `FileTransferError` 物件。*（函數）*

*   **trustAllHosts**: 可選參數，預設值為 `false` 。 如果設置為 `true` 然後它將接受所有安全證書。 隨著 Android 拒絕自我簽署的安全證書，這非常有用。 不建議供生產使用。 在 Android 和 iOS 上受支援。 *(布林值)*

*   **選項**： 可選參數，目前只支援標題 （如授權 （基本驗證） 等）。

**快速的示例**

    // !! 假定檔路徑是設備 var 檔案傳輸的有效路徑 = 新 FileTransfer() ；var uri = encodeURI ("HTTP://some.server.com/download.php"） ；fileTransfer.download (uri，檔路徑，function(entry) {console.log ("下載完成："+ entry.fullPath） ；}，function(error) {console.log ("下載錯誤源"+ error.source) ；console.log ("下載錯誤目標"+ error.target) ；console.log ("上傳錯誤代碼"+ error.code) ；}，false，{標題： {"授權書"："基本 dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA = ="}}) ；
    

## 中止

中止正在進行轉讓。Onerror 回檔傳遞的錯誤代碼為 FileTransferError.ABORT_ERR 的 FileTransferError 物件。

**支援的平臺**

*   Android 系統
*   iOS

**快速的示例**

    // !! 假定變數 fileURI 包含有效的 URI 到一個文字檔中，對設備無功贏 = function(r) {console.log ("不應調用。");}var 失敗 = function(error) {/ / error.code = = FileTransferError.ABORT_ERR 警報 ("發生了一個錯誤： 代碼 ="+ error.code） ；console.log （"上傳錯誤源"+ error.source） ；console.log ("上傳錯誤目標"+ error.target);}var 選項 = 新 FileUploadOptions() ；options.fileKey="file"；options.fileName="myphoto.jpg"；options.mimeType="image/jpeg"；var ft = 新 FileTransfer() ；ft.upload （fileURI、 encodeURI ("HTTP://some.server.com/upload.php"）、 贏、 失敗、 選項） ；ft.abort() ；
    

## onprogress

每當新的資料區塊轉移與 ProgressEvent 調用。

**支援的平臺**

*   Android 系統
*   iOS

**示例**

    fileTransfer.onprogress = function(progressEvent) {
        if (progressEvent.lengthComputable) {
          loadingStatus.setPercentage(progressEvent.loaded / progressEvent.total);
        } else {
          loadingStatus.increment();
        }
    };
    fileTransfer.download(...); // or fileTransfer.upload(...);
    

**怪癖**-在這兩個一個 iOS，Android 上 lengthComputable 是 `false` 使用 gzip 已編碼的下載。


# FileUploadOptions

A `FileUploadOptions` 可以將物件傳遞給 `FileTransfer` 物件的 `upload()` 方法，以指定上載腳本的附加參數。

## 屬性

*   **fileKey**： 表單元素的名稱。預設值為 `file` 。() DOMString

*   **檔案名**： 要保存在伺服器上的檔時使用的檔案名稱。預設值為 `image.jpg` 。() DOMString

*   **mimeType**： 要上傳的資料的 mime 類型。預設值為 `image/jpeg` 。() DOMString

*   **params**： 一組可選的鍵/值對中的 HTTP 要求的傳遞。（物件）

*   **chunkedMode**： 是否要分塊流式處理模式中的資料上載。預設值為 `true` 。(布林值)

*   **標題**： 一張地圖的標頭名稱/標頭值。使用陣列來指定多個值。（物件）

## 說明

A `FileUploadOptions` 可以將物件傳遞給 `FileTransfer` 物件的 `upload()` 方法，以指定上載腳本的附加參數。

## WP7 怪癖

*   **chunkedMode：**： 在 WP7 上可以忽略。


# FileUploadResult

A `FileUploadResult` 物件傳遞給成功回檔的 `FileTransfer` 物件的 `upload()` 方法。

## 屬性

*   **位元組發送**： 作為上載的一部分發送到伺服器的位元組數。(長)

*   **responseCode**： 由伺服器返回的 HTTP 回應代碼。(長)

*   **回應**： 由伺服器返回的 HTTP 回應。() DOMString

## 說明

`FileUploadResult`通過成功回檔的返回的物件是 `FileTransfer` 物件的 `upload()` 方法。

## iOS 的怪癖

*   不支援 `responseCode` 或`bytesSent`.


# 標誌

提供的參數 `DirectoryEntry` 物件的 `getFile()` 和 `getDirectory()` 方法，查找或創建的檔和目錄，分別。

## 屬性

*   **創建**： 指示應創建的檔或目錄，是否它不存在。*（布林）*

*   **獨家**: 已由本身，但與一起使用時不起任何作用 `create` 導致檔或目錄的創建，如果已經存在的目標路徑失敗。*（布林）*

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8
*   Windows 8

## 快速的示例

    / / 獲取資料目錄，如果它不存在，則創建它。
    dataDir = fileSystem.root.getDirectory （"資料"，{創建: true});/ / 創建鎖定檔，當且僅當它不存在。
    備份的鎖定檔 = dataDir.getFile ("lockfile.txt"，{創建: 真實、 獨家： true}) ；


# 場合

此物件提供一個獲取根檔案系統方法。

## 方法

*   **requestFileSystem**: 請求的檔案系統。*（函數）*

*   **resolveLocalFileSystemURI**: 檢索 `DirectoryEntry` 或 `FileEntry` 使用當地的 URI。*（函數）*

## 常量

*   `LocalFileSystem.PERSISTENT`： 用於存儲，不應由使用者代理不應用程式或使用者的許可權的情況下刪除。

*   `LocalFileSystem.TEMPORARY`： 用於不能保證的持久性存儲。

## 詳細資訊

`LocalFileSystem`物件的方法定義在 `window` 物件。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8
*   Windows 8

## 請求檔案系統快速示例

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
    }
    
    // request the persistent file system
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, onError);
    

## 解決本地檔案系統的 URI 快速示例

    function onSuccess(fileEntry) {
        console.log(fileEntry.name);
    }
    
    window.resolveLocalFileSystemURI("file:///example.txt", onSuccess, onError);
    

## 完整的示例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Local File System Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);
            window.resolveLocalFileSystemURI("file:///example.txt", onResolveSuccess, fail);
        }
    
        function onFileSystemSuccess(fileSystem) {
            console.log(fileSystem.name);
        }
    
        function onResolveSuccess(fileEntry) {
            console.log(fileEntry.name);
        }
    
        function fail(evt) {
            console.log(evt.target.error.code);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Local File System</p>
      </body>
    </html>
    

# requestFileSystem

> 請求一個檔案系統，用來存儲應用程式資料。

     window.requestFileSystem(type, size, successCallback, errorCallback)
    

*   **視窗**： 對全球視窗物件的引用
*   **類型**： 本地檔案系統類型，請參見場合常數
*   **大小**： 指示應用程式期望需要多少存儲空間，以位元組為單位，
*   **successCallback**： 使用一個檔案系統物件調用
*   **errorCallback**： 如果發生錯誤的檢索檔案系統調用

## 請求檔案系統快速示例

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
    }
    
    // request the persistent file system
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, onError);


# 中繼資料

供應狀態資訊的檔或目錄的一個介面。

## 屬性

*   **modificationTime**： 當檔或目錄被最後修改的時間。*（日期）*

## 詳細資訊

`Metadata`物件表示檔或目錄的狀態資訊。 調用 `DirectoryEntry` 或 `FileEntry` 物件的 `getMetadata()` 方法將產生 `Metadata` 實例。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8
*   Windows 8

## 快速的示例

    function win(metadata) {
        console.log("Last Modified: " + metadata.modificationTime);
    }
    
    // Request the metadata object for this entry
    entry.getMetadata(win, null);


# FileError

A `FileError` 物件時出現錯誤在檔 API 方法中的任何設置。

## 屬性

*   **代碼**： 下面列出的預定義的錯誤代碼之一。

## 常量

*   `FileError.NOT_FOUND_ERR`
*   `FileError.SECURITY_ERR`
*   `FileError.ABORT_ERR`
*   `FileError.NOT_READABLE_ERR`
*   `FileError.ENCODING_ERR`
*   `FileError.NO_MODIFICATION_ALLOWED_ERR`
*   `FileError.INVALID_STATE_ERR`
*   `FileError.SYNTAX_ERR`
*   `FileError.INVALID_MODIFICATION_ERR`
*   `FileError.QUOTA_EXCEEDED_ERR`
*   `FileError.TYPE_MISMATCH_ERR`
*   `FileError.PATH_EXISTS_ERR`

## 說明

`FileError`物件是提供給任何檔 API 錯誤回檔的唯一參數。 若要確定錯誤的類型，比較其 `code` 屬性設置為任何上述的節目表。


# FileTransferError

A `FileTransferError` 物件傳遞到錯誤回檔時出現錯誤。

## 屬性

*   **代碼**： 下面列出的預定義的錯誤代碼之一。（人數）

*   **源**： 源 URI。（字串）

*   **目標**： 向目標 URI。（字串）

*   **HTTP_status**： HTTP 狀態碼。從 HTTP 連接收到一個回應代碼時，此屬性才可用。（人數）

## 常量

*   `FileTransferError.FILE_NOT_FOUND_ERR`
*   `FileTransferError.INVALID_URL_ERR`
*   `FileTransferError.CONNECTION_ERR`
*   `FileTransferError.ABORT_ERR`

## 說明

`FileTransferError`上傳或下載檔案時出現錯誤時，將物件傳遞到錯誤回檔。
