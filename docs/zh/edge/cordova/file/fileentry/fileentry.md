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

表示一个文件在文件系统上， [W3C 目录和系统][1]规范中定义。

 [1]: http://www.w3.org/TR/file-system-api/

## 属性

*   **isFile**： 总是 `true` 。*（布尔）*

*   **isDirectory**： 总是 `false` 。*（布尔）*

*   **名称**： 的名称 `FileEntry` ，不包括导致它的路径。*() DOMString*

*   **完整路径**： 绝对路径从根到 `FileEntry` 。*() DOMString*

**注：**下面的属性由 W3C 规范定义，但*不是*支持：

*   **文件系统**： 文件系统的 `FileEntry` 驻留。*（文件系统）*

## 方法

*   **getMetadata**： 查找有关文件的元数据。

*   **setMetadata**: 设置文件上的元数据。

*   **moveTo**： 将文件移动到一个不同的位置，在文件系统上。

*   **copyTo**： 将文件复制到文件系统上的不同位置。

*   **toURL**： 返回一个可用于查找的文件的 URL。

*   **删除**： 删除一个文件。

*   **getParent**: 查找父目录。

*   **createWriter**: 创建 `FileWriter` 对象，可用于向文件中写入。

*   **文件**： 创建 `File` 对象，其中包含文件属性。

## 支持的平台

*   Android 系统
*   黑莓手机 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8
*   Windows 8

## getMetadata

查找有关文件的元数据。

**参数：**

*   **successCallback**： 传递一个回调 `Metadata` 对象。*（函数）*

*   **errorCallback**： 如果错误发生在检索时将执行的回调 `Metadata` 。调用与 `FileError` 对象。*（函数）*

**快速的示例**

    函数 success(metadata) {console.log ("上次修改时间:"+ metadata.modificationTime);}函数 fail(error) {alert(error.code);}/ / 请求的元数据对象的此条目 entry.getMetadata （成功、 失败） ；
    

## setMetadata

上一个文件集的元数据。

**目前仅适用于 iOS。**

*   这将设置一个文件的扩展的属性。

**参数：**

*   **successCallback**： 当设置该元数据时执行回调。*（函数）*

*   **errorCallback**： 当不成功地设置该元数据时执行回调。*（函数）*

*   **metadataObject**： 包含元数据的键和值的对象。*（对象）*

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

*   只有 `com.apple.MobileBackup` 支持扩展的属性。 将该值设置为 `1` ，防止文件被备份到 iCloud。 将该值设置为 `` ，重新启用该文件以将备份到 iCloud。

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

在文件系统上的文件移到不同的位置。如果应用程序尝试向会导致错误：

*   将文件移到其父，如果没有提供从其当前的一个不同的名称 ；

*   将文件移动到被占领 ； 每个目录的路径

此外，在现有文件中移动文件将尝试删除和替换该文件。

**参数：**

*   **父**： 要将文件移到父目录。*() DirectoryEntry*

*   **newName**： 该文件的新名称。默认值为当前的名称如果未指定。*() DOMString*

*   **successCallback**： 传递新文件回调 `FileEntry` 对象。*（函数）*

*   **errorCallback**： 如果尝试移动文件时发生错误执行回调。调用与 `FileError` 对象。*（函数）*

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

将文件复制到文件系统上的新位置。如果应用程序尝试向会导致错误：

*   如果未提供从其当前的一个不同的名称，请将文件复制到其父。

**参数：**

*   **父**： 要向其复制该文件的父目录。*() DirectoryEntry*

*   **newName**： 该文件的新名称。默认值为当前的名称如果未指定。*() DOMString*

*   **successCallback**： 传递新文件回调 `FileEntry` 对象。*（函数）*

*   **errorCallback**： 如果试图复制文件时发生错误执行回调。调用与 `FileError` 对象。*（函数）*

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

返回一个可用于查找的文件的 URL。

**快速的示例**

    // Request the URL for this entry
    var fileURL = entry.toURL();
    console.log(fileURL);
    

## 删除

删除的文件。

**参数：**

*   **successCallback**: 在该文件已被删除后执行的回调。不带参数调用。*（函数）*

*   **errorCallback**： 如果尝试删除文件时出现错误执行回调。调用与 `FileError` 对象。*（函数）*

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

查找父 `DirectoryEntry` 包含该文件。

**参数：**

*   **successCallback**： 传递文件的父的回调 `DirectoryEntry` 。*（函数）*

*   **errorCallback**： 如果试图检索父时发生错误执行的回调 `DirectoryEntry` 。 调用与 `FileError` 对象。 *（函数）*

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

创建 `FileWriter` 对象与所代表的文件关联`FileEntry`.

**参数：**

*   **successCallback**： 传递一个回调 `FileWriter` 对象。*（函数）*

*   **errorCallback**： 如果试图创建 FileWriter 而发生错误执行回调。调用与 `FileError` 对象。*（函数）*

**快速的示例**

    function success(writer) {
        writer.write("Some text to the file");
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    // create a FileWriter to write to the file
    entry.createWriter(success, fail);
    

## 文件

返回 `File` 对象，它表示该文件的当前状态，这 `FileEntry` 表示。

**参数：**

*   **successCallback**： 传递一个回调 `File` 对象。*（函数）*

*   **errorCallback**： 回调的执行如果发生错误时创建 `File` 对象，例如当该文件不再存在。 调用与 `FileError` 对象。 *（函数）*

**快速的示例**

    function success(file) {
        console.log("File size: " + file.size);
    }
    
    function fail(error) {
        alert("Unable to retrieve file properties: " + error.code);
    }
    
    // obtain properties of a file
    entry.file(success, fail);