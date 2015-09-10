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

# FileEntry

表示一個<a href="../fileobj/fileobj.html">檔</a>在<a href="../fileobj/fileobj.html">檔</a>案系統上， [W3C 目錄和系統][1]規範中定義。

 [1]: http://www.w3.org/TR/file-system-api/

## 屬性

*   **isFile**： 總是 `true` 。*（布林）*

*   **isDirectory**： 總是 `false` 。*（布林）*

*   **名稱**： 的名稱 `FileEntry` ，不包括導致它的路徑。*() DOMString*

*   **完整路徑**： 絕對路徑從根到 `FileEntry` 。*() DOMString*

**注：**下面的屬性由 W3C 規範定義，但*不是*支援：

*   **<a href="../fileobj/fileobj.html">檔</a>案系統**： <a href="../fileobj/fileobj.html">檔</a>案系統的 `FileEntry` 駐留。*（<a href="../fileobj/fileobj.html">檔</a>案系統）*

## 方法

*   **getMetadata**： 查找有關<a href="../fileobj/fileobj.html">檔</a>的<a href="../metadata/metadata.html">中繼資料</a>。

*   **setMetadata**: 設置<a href="../fileobj/fileobj.html">檔</a>上的<a href="../metadata/metadata.html">中繼資料</a>。

*   **moveTo**： 將<a href="../fileobj/fileobj.html">檔</a>移動到一個不同的<a href="../../geolocation/Position/position.html">位置</a>，在<a href="../fileobj/fileobj.html">檔</a>案系統上。

*   **copyTo**： 將<a href="../fileobj/fileobj.html">檔</a>案複製到<a href="../fileobj/fileobj.html">檔</a>案系統上的不同<a href="../../geolocation/Position/position.html">位置</a>。

*   **toURL**： 返回一個可用於查找的<a href="../fileobj/fileobj.html">檔</a>的 URL。

*   **刪除**： 刪除一個<a href="../fileobj/fileobj.html">檔</a>。

*   **getParent**: 查找父目錄。

*   **createWriter**: 創建 `<a href="../filewriter/filewriter.html">FileWriter</a>` 物件，可用於向<a href="../fileobj/fileobj.html">檔</a>中寫入。

*   **<a href="../fileobj/fileobj.html">檔</a>**： 創建 `File` 物件，其中包含<a href="../fileobj/fileobj.html">檔</a>案屬性。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8
*   Windows 8

## getMetadata

查找有關<a href="../fileobj/fileobj.html">檔</a>的<a href="../metadata/metadata.html">中繼資料</a>。

**參數：**

*   **successCallback**： 傳遞一個回<a href="../fileobj/fileobj.html">檔</a> `Metadata` 物件。*（函數）*

*   **errorCallback**： 如果錯誤發生在檢索時將執行的回<a href="../fileobj/fileobj.html">檔</a> `Metadata` 。調用與 `<a href="../fileerror/fileerror.html">FileError</a>` 物件。*（函數）*

**快速的示例**

    函數 success(metadata) {console.log ("上次修改時間:"+ metadata.modificationTime);}函數 fail(error) {alert(error.code);}/ / 請求的<a href="../metadata/metadata.html">中繼資料</a>物件的此條目 entry.getMetadata （成功、 失敗） ；
    

## setMetadata

上一個<a href="../fileobj/fileobj.html">檔</a>集的<a href="../metadata/metadata.html">中繼資料</a>。

**目前僅適用于 iOS。**

*   這將設置一個<a href="../fileobj/fileobj.html">檔</a>的擴展的屬性。

**參數：**

*   **successCallback**： 當設置該<a href="../metadata/metadata.html">中繼資料</a>時執行回<a href="../fileobj/fileobj.html">檔</a>。*（函數）*

*   **errorCallback**： 當不成功地設置該<a href="../metadata/metadata.html">中繼資料</a>時執行回<a href="../fileobj/fileobj.html">檔</a>。*（函數）*

*   **metadataObject**： 包含<a href="../metadata/metadata.html">中繼資料</a>的鍵和值的物件。*（物件）*

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

*   只有 `com.apple.MobileBackup` 支援擴展的屬性。 將該值設置為 `1` ，防止<a href="../fileobj/fileobj.html">檔</a>被備份到 iCloud。 將該值設置為 `` ，重新啟用該<a href="../fileobj/fileobj.html">檔</a>以將備份到 iCloud。

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
    
        window.<a href="../localfilesystem/localfilesystem.html">requestFileSystem</a>(localFileSystem, 0, onFSWin, onFSFail);
    }
    
        setFileMetadata(LocalFileSystem.PERSISTENT, "Backups/sqlite.db", "com.apple.MobileBackup", 1);
    

## moveTo

在<a href="../fileobj/fileobj.html">檔</a>案系統上的<a href="../fileobj/fileobj.html">檔</a>移到不同的<a href="../../geolocation/Position/position.html">位置</a>。如果應用程式嘗試向會導致錯誤：

*   將<a href="../fileobj/fileobj.html">檔</a>移到其父，如果沒有提供從其當前的一個不同的名稱 ；

*   將<a href="../fileobj/fileobj.html">檔</a>移動到被佔領 ； 每個目錄的路徑

此外，在現有<a href="../fileobj/fileobj.html">檔</a>中移動<a href="../fileobj/fileobj.html">檔</a>將嘗試刪除和替換該<a href="../fileobj/fileobj.html">檔</a>。

**參數：**

*   **父**： 要將<a href="../fileobj/fileobj.html">檔</a>移到父目錄。*() DirectoryEntry*

*   **newName**： 該<a href="../fileobj/fileobj.html">檔</a>的新名稱。預設值為當前的名稱如果未指定。*() DOMString*

*   **successCallback**： 傳遞新<a href="../fileobj/fileobj.html">檔</a>回<a href="../fileobj/fileobj.html">檔</a> `FileEntry` 物件。*（函數）*

*   **errorCallback**： 如果嘗試移動<a href="../fileobj/fileobj.html">檔</a>時發生錯誤執行回<a href="../fileobj/fileobj.html">檔</a>。調用與 `<a href="../fileerror/fileerror.html">FileError</a>` 物件。*（函數）*

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

將<a href="../fileobj/fileobj.html">檔</a>案複製到<a href="../fileobj/fileobj.html">檔</a>案系統上的新<a href="../../geolocation/Position/position.html">位置</a>。如果應用程式嘗試向會導致錯誤：

*   如果未提供從其當前的一個不同的名稱，請將<a href="../fileobj/fileobj.html">檔</a>案複製到其父。

**參數：**

*   **父**： 要向其複製該<a href="../fileobj/fileobj.html">檔</a>的父目錄。*() DirectoryEntry*

*   **newName**： 該<a href="../fileobj/fileobj.html">檔</a>的新名稱。預設值為當前的名稱如果未指定。*() DOMString*

*   **successCallback**： 傳遞新<a href="../fileobj/fileobj.html">檔</a>回<a href="../fileobj/fileobj.html">檔</a> `FileEntry` 物件。*（函數）*

*   **errorCallback**： 如果試圖複製<a href="../fileobj/fileobj.html">檔</a>時發生錯誤執行回<a href="../fileobj/fileobj.html">檔</a>。調用與 `<a href="../fileerror/fileerror.html">FileError</a>` 物件。*（函數）*

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

返回一個可用於查找的<a href="../fileobj/fileobj.html">檔</a>的 URL。

**快速的示例**

    // Request the URL for this entry
    var fileURL = entry.toURL();
    console.log(fileURL);
    

## 刪除

刪除的<a href="../fileobj/fileobj.html">檔</a>。

**參數：**

*   **successCallback**: 在該<a href="../fileobj/fileobj.html">檔</a>已被刪除後執行的回<a href="../fileobj/fileobj.html">檔</a>。不帶參數調用。*（函數）*

*   **errorCallback**： 如果嘗試刪除<a href="../fileobj/fileobj.html">檔</a>時出現錯誤執行回<a href="../fileobj/fileobj.html">檔</a>。調用與 `<a href="../fileerror/fileerror.html">FileError</a>` 物件。*（函數）*

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

查找父 `DirectoryEntry` 包含該<a href="../fileobj/fileobj.html">檔</a>。

**參數：**

*   **successCallback**： 傳遞<a href="../fileobj/fileobj.html">檔</a>的父的回<a href="../fileobj/fileobj.html">檔</a> `DirectoryEntry` 。*（函數）*

*   **errorCallback**： 如果試圖檢索父時發生錯誤執行的回<a href="../fileobj/fileobj.html">檔</a> `DirectoryEntry` 。 調用與 `<a href="../fileerror/fileerror.html">FileError</a>` 物件。 *（函數）*

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

創建 `<a href="../filewriter/filewriter.html">FileWriter</a>` 物件與所代表的<a href="../fileobj/fileobj.html">檔</a>關聯`FileEntry`.

**參數：**

*   **successCallback**： 傳遞一個回<a href="../fileobj/fileobj.html">檔</a> `<a href="../filewriter/filewriter.html">FileWriter</a>` 物件。*（函數）*

*   **errorCallback**： 如果試圖創建 <a href="../filewriter/filewriter.html">FileWriter</a> 而發生錯誤執行回<a href="../fileobj/fileobj.html">檔</a>。調用與 `<a href="../fileerror/fileerror.html">FileError</a>` 物件。*（函數）*

**快速的示例**

    function success(writer) {
        writer.write("Some text to the file");
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    // create a <a href="../filewriter/filewriter.html">FileWriter</a> to write to the file
    entry.createWriter(success, fail);
    

## <a href="../fileobj/fileobj.html">檔</a>

返回 `File` 物件，它表示該<a href="../fileobj/fileobj.html">檔</a>的目前狀態，這 `FileEntry` 表示。

**參數：**

*   **successCallback**： 傳遞一個回<a href="../fileobj/fileobj.html">檔</a> `File` 物件。*（函數）*

*   **errorCallback**： 回<a href="../fileobj/fileobj.html">檔</a>的執行如果發生錯誤時創建 `File` 物件，例如當該<a href="../fileobj/fileobj.html">檔</a>不再存在。 調用與 `<a href="../fileerror/fileerror.html">FileError</a>` 物件。 *（函數）*

**快速的示例**

    function success(file) {
        console.log("File size: " + file.size);
    }
    
    function fail(error) {
        alert("Unable to retrieve file properties: " + error.code);
    }
    
    // obtain properties of a file
    entry.file(success, fail);