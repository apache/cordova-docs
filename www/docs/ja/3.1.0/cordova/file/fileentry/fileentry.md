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

[W3C ディレクトリとシステム][1]仕様で定義されている<a href="../fileobj/fileobj.html">ファイル</a> システム上の<a href="../fileobj/fileobj.html">ファイル</a>を表します。

 [1]: http://www.w3.org/TR/file-system-api/

## プロパティ

*   **isFile**： 常に `true` 。*(ブール値)*

*   **isDirectory**： 常に `false` 。*(ブール値)*

*   **名前**： の名前、 `FileEntry` 、それにつながるパスを除きます。*（，）*

*   **fullPath**: 完全絶対パスをルートから、 `FileEntry` 。*（，）*

**注：**次の属性は、W3C の仕様によって定義されますが*サポートされます*。

*   **<a href="../fileobj/fileobj.html">ファイル</a>システム**: <a href="../fileobj/fileobj.html">ファイル</a>システムを `FileEntry` が存在します。*(<a href="../fileobj/fileobj.html">ファイル</a>システム)*

## メソッド

*   **getMetadata**: <a href="../fileobj/fileobj.html">ファイル</a>についての<a href="../metadata/metadata.html">メタデータ</a>を検索します。

*   **setMetadata**： <a href="../fileobj/fileobj.html">ファイル</a>の<a href="../metadata/metadata.html">メタデータ</a>を設定します。

*   **[moveto]**: <a href="../fileobj/fileobj.html">ファイル</a> システム上の別の場所に<a href="../fileobj/fileobj.html">ファイル</a>を移動します。

*   **copyTo**: <a href="../fileobj/fileobj.html">ファイル</a> システム上の別の場所に<a href="../fileobj/fileobj.html">ファイル</a>をコピーします。

*   **網**: <a href="../fileobj/fileobj.html">ファイル</a>を検索するために使用できる URL を返します。

*   **削除**: <a href="../fileobj/fileobj.html">ファイル</a>を削除します。

*   **getParent**: 親ディレクトリを検索します。

*   **createWriter**: 作成し、 `<a href="../filewriter/filewriter.html">FileWriter</a>` <a href="../fileobj/fileobj.html">ファイル</a>への書き込みに使用できるオブジェクト。

*   **<a href="../fileobj/fileobj.html">ファイル</a>**: 作成し、 `File` <a href="../fileobj/fileobj.html">ファイル</a>のプロパティを含むオブジェクト。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 7 と 8
*   Windows 8

## getMetadata

<a href="../fileobj/fileobj.html">ファイル</a>についての<a href="../metadata/metadata.html">メタデータ</a>をご覧ください。

**パラメーター:**

*   **successCallback**: 渡されたコールバックを `Metadata` オブジェクト。*(機能)*

*   **解り**: コールバックを取得するときにエラーが発生した場合に実行される、 `Metadata` 。呼び出されると、 `<a href="../fileerror/fileerror.html">FileError</a>` オブジェクト。*(機能)*

**簡単な例**

    success(metadata) 関数 {console.log ("最終更新日時:"+ metadata.modificationTime);}関数 fail(error) {alert(error.code);}//このエントリ entry.getMetadata (成功、失敗）; の<a href="../metadata/metadata.html">メタデータ</a> オブジェクトをリクエスト
    

## setMetadata

<a href="../fileobj/fileobj.html">ファイル</a> セットの<a href="../metadata/metadata.html">メタデータ</a>。

**現在 iOS でのみ動作します。**

*   これは、<a href="../fileobj/fileobj.html">ファイル</a>の拡張属性を設定します。

**パラメーター:**

*   **successCallback**: <a href="../metadata/metadata.html">メタデータ</a>が設定時に実行されるコールバック。*(機能)*

*   **解り**: <a href="../metadata/metadata.html">メタデータ</a>が正常に設定されていないときに実行されるコールバック。*(機能)*

*   **metadataObject**: <a href="../metadata/metadata.html">メタデータ</a>のキーと値を格納しているオブジェクト。*(オブジェクト)*

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

*   のみ、 `com.apple.MobileBackup` 拡張属性がサポートされています。 値を設定します `1` を iCloud にバックアップされてから、<a href="../fileobj/fileobj.html">ファイル</a>を防ぐために。 値を設定します `` 再 iCloud にバックアップ <a href="../fileobj/fileobj.html">ファイル</a>を有効にします。

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
    
        window.<a href="../localfilesystem/localfilesystem.html">requestFileSystem</a>(localFileSystem, 0, onFSWin, onFSFail);
    }
    
        setFileMetadata(<a href="../localfilesystem/localfilesystem.html">LocalFileSystem</a>.PERSISTENT, "Backups/sqlite.db", "com.apple.MobileBackup", 1);
    

## [moveto]

<a href="../fileobj/fileobj.html">ファイル</a> システム上の別の場所に<a href="../fileobj/fileobj.html">ファイル</a>を移動します。アプリしようとすると、エラーが発生します。

*   その現在とは異なる名前を指定ではない; 場合、その親に<a href="../fileobj/fileobj.html">ファイル</a>を移動します。

*   ディレクトリ; によって占められるパスに<a href="../fileobj/fileobj.html">ファイル</a>を移動します。

さらに、既存の<a href="../fileobj/fileobj.html">ファイル</a>の上に移動した<a href="../fileobj/fileobj.html">ファイル</a>を削除し、その<a href="../fileobj/fileobj.html">ファイル</a>を置き換えるを試みます。

**パラメーター:**

*   **親**： <a href="../fileobj/fileobj.html">ファイル</a>の移動先となる親ディレクトリ。*(<a href="../directoryentry/directoryentry.html">DirectoryEntry</a>)*

*   **newName**: <a href="../fileobj/fileobj.html">ファイル</a>の新しい名前。現在の名前を指定しない場合のデフォルトです。*（，）*

*   **successCallback**: 新しい<a href="../fileobj/fileobj.html">ファイル</a>に渡されるコールバック `FileEntry` オブジェクト。*(機能)*

*   **解り**: <a href="../fileobj/fileobj.html">ファイル</a>を移動しようとしたときにエラーが発生した場合に実行されるコールバック。呼び出されると、 `<a href="../fileerror/fileerror.html">FileError</a>` オブジェクト。*(機能)*

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
            parentEntry = new <a href="../directoryentry/directoryentry.html">DirectoryEntry</a>(parentName, parent);
    
        // move the file to a new directory and rename it
        entry.moveTo(parentEntry, "newFile.txt", success, fail);
    }
    

## copyTo

<a href="../fileobj/fileobj.html">ファイル</a> システム上の新しい場所に<a href="../fileobj/fileobj.html">ファイル</a>をコピーします。アプリしようとすると、エラーが発生します。

*   その現在のものとは異なる名前を指定しない場合、親に<a href="../fileobj/fileobj.html">ファイル</a>をコピーします。

**パラメーター:**

*   **親**： 親ディレクトリに<a href="../fileobj/fileobj.html">ファイル</a>をコピーします。*(<a href="../directoryentry/directoryentry.html">DirectoryEntry</a>)*

*   **newName**: <a href="../fileobj/fileobj.html">ファイル</a>の新しい名前。現在の名前を指定しない場合のデフォルトです。*（，）*

*   **successCallback**: 新しい<a href="../fileobj/fileobj.html">ファイル</a>に渡されるコールバック `FileEntry` オブジェクト。*(機能)*

*   **解り**: <a href="../fileobj/fileobj.html">ファイル</a>をコピーしようとしたときにエラーが発生した場合に実行されるコールバック。呼び出されると、 `<a href="../fileerror/fileerror.html">FileError</a>` オブジェクト。*(機能)*

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
            parentEntry = new <a href="../directoryentry/directoryentry.html">DirectoryEntry</a>(parentName, parent);
    
        // copy the file to a new directory and rename it
        entry.copyTo(parentEntry, "file.copy", success, fail);
    }
    

## 網

<a href="../fileobj/fileobj.html">ファイル</a>の検索に使用できる URL を返します。

**簡単な例**

    // Request the URL for this entry
    var fileURL = entry.toURL();
    console.log(fileURL);
    

## 削除

<a href="../fileobj/fileobj.html">ファイル</a>を削除します。

**パラメーター:**

*   **successCallback**： <a href="../fileobj/fileobj.html">ファイル</a>が削除された後に実行されるコールバック。パラメーターなしで呼び出されます。*(機能)*

*   **解り**: <a href="../fileobj/fileobj.html">ファイル</a>を削除しようとしたときにエラーが発生した場合に実行されるコールバック。呼び出されると、 `<a href="../fileerror/fileerror.html">FileError</a>` オブジェクト。*(機能)*

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

親を検索 `<a href="../directoryentry/directoryentry.html">DirectoryEntry</a>` <a href="../fileobj/fileobj.html">ファイル</a>を含みます。

**パラメーター:**

*   **successCallback**： <a href="../fileobj/fileobj.html">ファイル</a>の親に渡されるコールバック `<a href="../directoryentry/directoryentry.html">DirectoryEntry</a>` 。*(機能)*

*   **解り**: 親を取得しようとしてエラーが発生した場合に実行されるコールバック `<a href="../directoryentry/directoryentry.html">DirectoryEntry</a>` 。 呼び出されると、 `<a href="../fileerror/fileerror.html">FileError</a>` オブジェクト。 *(機能)*

**簡単な例**

    function success(parent) {
        console.log("Parent Name: " + parent.name);
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    // Get the parent <a href="../directoryentry/directoryentry.html">DirectoryEntry</a>
    entry.getParent(success, fail);
    

## createWriter

作成する、 `<a href="../filewriter/filewriter.html">FileWriter</a>` オブジェクトによって表される<a href="../fileobj/fileobj.html">ファイル</a>に関連付けられている、`FileEntry`.

**パラメーター:**

*   **successCallback**: 渡されたコールバックを `<a href="../filewriter/filewriter.html">FileWriter</a>` オブジェクト。*(機能)*

*   **解り**: <a href="../filewriter/filewriter.html">FileWriter</a> を作成中にエラーが発生した場合に実行されるコールバック。呼び出されると、 `<a href="../fileerror/fileerror.html">FileError</a>` オブジェクト。*(機能)*

**簡単な例**

    function success(writer) {
        writer.write("Some text to the file");
    }
    
    function fail(error) {
        alert(error.code);
    }
    
    // create a <a href="../filewriter/filewriter.html">FileWriter</a> to write to the file
    entry.createWriter(success, fail);
    

## <a href="../fileobj/fileobj.html">ファイル</a>

返す、 `File` <a href="../fileobj/fileobj.html">ファイル</a>の現在の状態を表すオブジェクトは、この `FileEntry` を表します。

**パラメーター:**

*   **successCallback**: 渡されたコールバックを `File` オブジェクト。*(機能)*

*   **解り**： を作成するときにエラーが発生した場合に実行されるコールバックが `File` とき、<a href="../fileobj/fileobj.html">ファイル</a>が存在しないなどのオブジェクト。 呼び出されると、 `<a href="../fileerror/fileerror.html">FileError</a>` オブジェクト。 *(機能)*

**簡単な例**

    function success(file) {
        console.log("File size: " + file.size);
    }
    
    function fail(error) {
        alert("Unable to retrieve file properties: " + error.code);
    }
    
    // obtain properties of a file
    entry.file(success, fail);