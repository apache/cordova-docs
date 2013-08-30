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

# 枚举指定工作组或

此对象表示一个目录在文件系统上，如由[W3C 目录和系统][1]规范定义的。

 [1]: http://www.w3.org/TR/file-system-api/

## 属性

*   **isFile**： 总是 `false` 。*（布尔）*

*   **isDirectory**： 总是 `true` 。*（布尔）*

*   **名称**： 的名称 `DirectoryEntry` ，不包括导致它的路径。*() DOMString*

*   **完整路径**： 绝对路径从根到 `DirectoryEntry` 。*() DOMString*

**注：**下面的属性由 W3C 规范定义，但*不是*支持：

*   **文件系统**： 文件系统的 `DirectoryEntry` 驻留。*（文件系统）*

## 方法

下面的方法可以上调用 `DirectoryEntry` 对象：

*   **getMetadata**: 查找一个目录有关的元数据。

*   **setMetadata**： 在目录上设置的元数据。

*   **moveTo**： 移动到不同的位置在文件系统上的目录。

*   **copyTo**： 将一个目录复制到文件系统上的不同位置。

*   **toURL**： 返回来帮助定位目录的 URL。

*   **删除**： 删除一个目录。该目录必须是空的。

*   **getParent**: 查找父目录。

*   **createReader**: 创建一个新的 `DirectoryReader` ，可以从目录中读取条目。

*   **getDirectory**: 创建或者查找一个目录。

*   **getFile**: 创建或查找文件。

*   **removeRecursively**： 删除一个目录和其所有内容。

## 支持的平台

*   Android 系统
*   黑莓手机 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8
*   Windows 8

## getMetadata

查找有关目录的元数据。

**参数：**

*   **successCallback**： 要与执行的回调函数 `Metadata` 对象。*（函数）*

*   **errorCallback**: 一个回调函数来执行如果检索时出现错误 `Metadata` 。调用与 `FileError` 对象。*（函数）*

**快速的示例**

    函数 success(metadata) {console.log ("上次修改时间:"+ metadata.modificationTime);}函数 fail(error) {alert(error.code);}/ / 请求的元数据对象的此条目 entry.getMetadata （成功、 失败） ；
    

## setMetadata

设置目录的扩展的属性或元数据。*目前仅适用于 iOS。*

**参数：**

*   **successCallback**： 在成功地设置该元数据时执行回调。*（函数）*

*   **errorCallback**: 执行元数据失败要设置时的回调。*（函数）*

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

*   只有 `com.apple.MobileBackup` 支持扩展的属性。 将该值设置为 `1` ，防止该目录从备份到 iCloud。 将该值设置为 `` ，重新启用要备份到 iCloud 的目录。

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

移动到不同的位置在文件系统上的目录。如果应用程序尝试向会导致错误：

*   在任何深度移动一个目录里面本身或任何儿童。

*   如果不提供不同从其当前目录的名称，则将一个目录移到其父。

*   将一个目录移到被占领的一个文件的路径。

*   将一个目录移到被占领的一个不是空的目录的路径。

移动目录上现有的空目录尝试删除并替换为该目录。

**参数：**

*   **父**： 要移动该目录的父目录。*() DirectoryEntry*

*   **newName**： 目录的新名称。默认值为当前的名称如果未指定。*() DOMString*

*   **successCallback**： 与执行的回调 `DirectoryEntry` 为新的目录对象。*（函数）*

*   **errorCallback**: 如果移动该目录时，会出现一个错误执行回调。调用与 `FileError` 对象。*（函数）*

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

将一个目录复制到文件系统上的不同位置。如果应用程序尝试向会导致错误：

*   复制一个目录里面本身在任何深度。

*   如果未提供不同从其当前目录的名称，请将一个目录复制到其父。

目录副本始终是递归的并将复制的目录的所有内容。

**参数：**

*   **父**： 要向其复制目录的父目录。*() DirectoryEntry*

*   **newName**： 目录的新名称。默认值为当前的名称如果未指定。*() DOMString*

*   **successCallback**： 与执行的回调 `DirectoryEntry` 为新的目录对象。*（函数）*

*   **errorCallback**： 如果试图复制基础目录时发生错误执行回调。调用与 `FileError` 对象。*（函数）*

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

返回一个可以用来找到的目录的 URL。

**快速的示例**

    // Get the URL for this directory
    var dirURL = entry.toURL();
    console.log(dirURL);
    

## 删除

删除一个目录。如果应用程序尝试向会导致错误：

*   删除一个目录，不是空的。

*   删除根目录下的一个文件系统。

**参数：**

*   **successCallback**： 在删除该目录后执行的回调。不带参数调用。*（函数）*

*   **errorCallback**： 如果要删除的目录时，会出现错误执行回调。调用与 `FileError` 对象。*（函数）*

**快速的示例**

    函数 success(entry) {console.log ("删除成功");}函数 fail(error) {警报 (' 删除目录时出错: ' + error.code);}/ / 删除此目录 entry.remove （成功、 失败） ；
    

## getParent

查找父 `DirectoryEntry` 包含的目录。

**参数：**

*   **successCallback**： 一个通过目录的父目录的回调 `DirectoryEntry` 。*（函数）*

*   **errorCallback**： 如果试图检索父时发生错误执行的回调 `DirectoryEntry` 。 调用与 `FileError` 对象。 *（函数）*

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

创建新的 DirectoryReader 来读取目录中的条目。

**快速的示例**

    // create a directory reader
    var directoryReader = entry.createReader();
    

## getDirectory

创建或查找现有的目录。如果应用程序尝试向会导致错误：

*   创建一个其直接父尚不存在的目录。

**参数：**

*   **路径**： 要查找或创建的目录的路径。绝对路径或相对路径从这 `DirectoryEntry` 。*() DOMString*

*   **选项**： 选项，以指定是否要如果它不存在，则创建该目录。*（标志）*

*   **successCallback**： 回调的执行的 `DirectoryEntry` 对象。*（函数）*

*   **errorCallback**： 如果发生错误时创建或查找目录执行的回调。调用与 `FileError` 对象。*（函数）*

**快速的示例**

    函数 success(dirEntry) {console.log ("目录名称："+ dirEntry.name);}函数 fail(error) {警报 ("无法创建新的目录:"+ error.code);}/ / 检索现有的目录，或创建它，如果它不存在 entry.getDirectory ("newDir"，{创建： true，独家: false}，成功，失败） ；
    

## getFile

创建或查找文件。如果应用程序尝试向会导致错误：

*   创建一个其直接父尚不存在的文件。

**参数：**

*   **路径**： 要查找或创建的文件的路径。绝对路径或相对路径从这 `DirectoryEntry` 。*() DOMString*

*   **选项**： 选项，以指定是否是否它不存在，则创建该文件。*（标志）*

*   **successCallback**： 传递一个回调 `FileEntry` 对象。*（函数）*

*   **errorCallback**: 如果在创建或查找文件时出现错误执行回调。调用与 `FileError` 对象。*（函数）*

**快速的示例**

    函数 success(fileEntry) {console.log ("文件的名称："+ fileEntry.name);}函数 fail(error) {警报 ("未能检索文件："+ error.code);}/ / 检索现有的文件，或创建它，如果它不存在 entry.getFile ("newFile.txt"，{创建： true，独家: false}，成功，失败） ；
    

## removeRecursively

删除一个目录和其所有内容。 如果发生错误 （例如试图删除包含一个不能被删除的文件的目录），可能会删除一些目录的内容。 如果应用程序尝试向会导致错误：

*   删除根目录下的一个文件系统。

**参数：**

*   **successCallback**： 后执行的回调 `DirectoryEntry` 已被删除。不带参数调用。*（函数）*

*   **errorCallback**： 如果试图删除时发生错误执行的回调 `DirectoryEntry` 。调用与 `FileError` 对象。*（函数）*

**快速的示例**

    function success(parent) {
        console.log("Remove Recursively Succeeded");
    }
    
    function fail(error) {
        alert("Failed to remove directory or it's contents: " + error.code);
    }
    
    // remove the directory and all it's contents
    entry.removeRecursively(success, fail);
    

## 黑莓手机的怪癖

可能会失败， `ControlledAccessException` 在以下情况中：

*   应用程序试图访问由以前安装的应用程序创建一个目录。

> 解决方案： 确保手动，或由前重新安装应用程序的临时目录，清洁。

*   如果该设备通过 USB 连接。

> 解决方案： 从设备拔下 USB 电缆，然后再次运行。