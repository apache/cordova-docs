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