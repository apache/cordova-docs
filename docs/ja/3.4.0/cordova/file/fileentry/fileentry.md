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

[W3C ディレクトリとシステム][1]仕様で定義されているファイル システム上のファイルを表します。

 [1]: http://www.w3.org/TR/file-system-api/

## プロパティ

*   **isFile**： 常に `true` 。*(ブール値)*

*   **isDirectory**： 常に `false` 。*(ブール値)*

*   **名前**： の名前、 `FileEntry` 、それにつながるパスを除きます。*（，）*

*   **fullPath**: 完全絶対パスをルートから、 `FileEntry` 。*（，）*

**注：**次の属性は、W3C の仕様によって定義されますが*サポートされます*。

*   **ファイルシステム**: ファイルシステムを `FileEntry` が存在します。*(ファイルシステム)*

## メソッド

*   **getMetadata**: ファイルについてのメタデータを検索します。

*   **setMetadata**： ファイルのメタデータを設定します。

*   **[moveto]**: ファイル システム上の別の場所にファイルを移動します。

*   **copyTo**: ファイル システム上の別の場所にファイルをコピーします。

*   **網**: ファイルを検索するために使用できる URL を返します。

*   **削除**: ファイルを削除します。

*   **getParent**: 親ディレクトリを検索します。

*   **createWriter**: 作成し、 `FileWriter` ファイルへの書き込みに使用できるオブジェクト。

*   **ファイル**: 作成し、 `File` ファイルのプロパティを含むオブジェクト。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 7 と 8
*   Windows 8

## getMetadata

ファイルについてのメタデータをご覧ください。

**パラメーター:**

*   **successCallback**: 渡されたコールバックを `Metadata` オブジェクト。*(機能)*

*   **解り**: コールバックを取得するときにエラーが発生した場合に実行される、 `Metadata` 。呼び出されると、 `FileError` オブジェクト。*(機能)*

**簡単な例**

    success(metadata) 関数 {console.log ("最終更新日時:"+ metadata.modificationTime);}関数 fail(error) {alert(error.code);}//このエントリ entry.getMetadata (成功、失敗）; のメタデータ オブジェクトをリクエスト
    

## setMetadata

ファイル セットのメタデータ。

**現在 iOS でのみ動作します。**

*   これは、ファイルの拡張属性を設定します。

**パラメーター:**

*   **successCallback**: メタデータが設定時に実行されるコールバック。*(機能)*

*   **解り**: メタデータが正常に設定されていないときに実行されるコールバック。*(機能)*

*   **metadataObject**: メタデータのキーと値を格納しているオブジェクト。*(オブジェクト)*

**簡単な例**

    function success() {
        console.log("The metadata was successfully set.");
    }
    
    function fail() {
        alert("There was an error in setting the metadata");
    }
    
    // Set the metadata
    entry.setMetadata(success, fail, { "com.apple.MobileBackup": 1});
    

**iOS の気まぐれ**

*   のみ、 `com.apple.MobileBackup` 拡張属性がサポートされています。 値を設定します `1` を iCloud にバックアップされてから、ファイルを防ぐために。 値を設定します `` 再 iCloud にバックアップ ファイルを有効にします。

**簡単な例**

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
    

## [moveto]

ファイル システム上の別の場所にファイルを移動します。アプリしようとすると、エラーが発生します。

*   その現在とは異なる名前を指定ではない; 場合、その親にファイルを移動します。

*   ディレクトリ; によって占められるパスにファイルを移動します。

さらに、既存のファイルの上に移動したファイルを削除し、そのファイルを置き換えるを試みます。

**パラメーター:**

*   **親**： ファイルの移動先となる親ディレクトリ。*(DirectoryEntry)*

*   **newName**: ファイルの新しい名前。現在の名前を指定しない場合のデフォルトです。*（，）*

*   **successCallback**: 新しいファイルに渡されるコールバック `FileEntry` オブジェクト。*(機能)*

*   **解り**: ファイルを移動しようとしたときにエラーが発生した場合に実行されるコールバック。呼び出されると、 `FileError` オブジェクト。*(機能)*

**簡単な例**

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

ファイル システム上の新しい場所にファイルをコピーします。アプリしようとすると、エラーが発生します。

*   その現在のものとは異なる名前を指定しない場合、親にファイルをコピーします。

**パラメーター:**

*   **親**： 親ディレクトリにファイルをコピーします。*(DirectoryEntry)*

*   **newName**: ファイルの新しい名前。現在の名前を指定しない場合のデフォルトです。*（，）*

*   **successCallback**: 新しいファイルに渡されるコールバック `FileEntry` オブジェクト。*(機能)*

*   **解り**: ファイルをコピーしようとしたときにエラーが発生した場合に実行されるコールバック。呼び出されると、 `FileError` オブジェクト。*(機能)*

**簡単な例**

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
    

## 網

ファイルの検索に使用できる URL を返します。

**簡単な例**

    // Request the URL for this entry
    var fileURL = entry.toURL();
    console.log(fileURL);
    

## 削除

ファイルを削除します。

**パラメーター:**

*   **successCallback**： ファイルが削除された後に実行されるコールバック。パラメーターなしで呼び出されます。*(機能)*

*   **解り**: ファイルを削除しようとしたときにエラーが発生した場合に実行されるコールバック。呼び出されると、 `FileError` オブジェクト。*(機能)*

**簡単な例**

    function success(entry) {
        console.log("Removal succeeded");
    }
    
    function fail(error) {
        alert('Error removing file: ' + error.code);
    }
    
    // remove the file
    entry.remove(success, fail);
    

## getParent

親を検索 `DirectoryEntry` ファイルを含みます。

**パラメーター:**

*   **successCallback**： ファイルの親に渡されるコールバック `DirectoryEntry` 。*(機能)*

*   **解り**: 親を取得しようとしてエラーが発生した場合に実行されるコールバック `DirectoryEntry` 。 呼び出されると、 `FileError` オブジェクト。 *(機能)*

**簡単な例**

    function success(parent) {
        console.log("Parent Name: " + parent.name);
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    // Get the parent DirectoryEntry
    entry.getParent(success, fail);
    

## createWriter

作成する、 `FileWriter` オブジェクトによって表されるファイルに関連付けられている、`FileEntry`.

**パラメーター:**

*   **successCallback**: 渡されたコールバックを `FileWriter` オブジェクト。*(機能)*

*   **解り**: FileWriter を作成中にエラーが発生した場合に実行されるコールバック。呼び出されると、 `FileError` オブジェクト。*(機能)*

**簡単な例**

    function success(writer) {
        writer.write("Some text to the file");
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    // create a FileWriter to write to the file
    entry.createWriter(success, fail);
    

## ファイル

返す、 `File` ファイルの現在の状態を表すオブジェクトは、この `FileEntry` を表します。

**パラメーター:**

*   **successCallback**: 渡されたコールバックを `File` オブジェクト。*(機能)*

*   **解り**： を作成するときにエラーが発生した場合に実行されるコールバックが `File` とき、ファイルが存在しないなどのオブジェクト。 呼び出されると、 `FileError` オブジェクト。 *(機能)*

**簡単な例**

    function success(file) {
        console.log("File size: " + file.size);
    }
    
    function fail(error) {
        alert("Unable to retrieve file properties: " + error.code);
    }
    
    // obtain properties of a file
    entry.file(success, fail);