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