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