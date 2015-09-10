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

# DirectoryEntry

[W3C ディレクトリとシステム][1]仕様で定義されている<a href="../fileobj/fileobj.html">ファイル</a> システム上のディレクトリを表します。

 [1]: http://www.w3.org/TR/file-system-api/

## プロパティ

*   **isFile**： 常に `false` 。*(ブール値)*

*   **isDirectory**： 常に `true` 。*(ブール値)*

*   **名前**： の名前、 `DirectoryEntry` 、それにつながるパスを除きます。*（，）*

*   **fullPath**: 完全絶対パスをルートから、 `DirectoryEntry` 。*（，）*

**注：**次の属性は、W3C の仕様によって定義されますが*サポートされます*。

*   **<a href="../fileobj/fileobj.html">ファイル</a>システム**: <a href="../fileobj/fileobj.html">ファイル</a>システムを `DirectoryEntry` が存在します。*(<a href="../fileobj/fileobj.html">ファイル</a>システム)*

## メソッド

次の方法で呼び出し可能な `DirectoryEntry` オブジェクト。

*   **getMetadata**: ディレクトリに関する<a href="../metadata/metadata.html">メタデータ</a>を検索します。

*   **setMetadata**： ディレクトリに<a href="../metadata/metadata.html">メタデータ</a>を設定します。

*   **[moveto]**: <a href="../fileobj/fileobj.html">ファイル</a> システムに別の場所にディレクトリを移動します。

*   **copyTo**: <a href="../fileobj/fileobj.html">ファイル</a> システム上の別の場所にディレクトリをコピーします。

*   **網**: ディレクトリを検出する URL を返します。

*   **削除**: ディレクトリを削除します。ディレクトリは空である必要があります。

*   **getParent**: 親ディレクトリを検索します。

*   **createReader**: 新規作成 `<a href="../directoryreader/directoryreader.html">DirectoryReader</a>` をディレクトリからエントリを読み取ることができます。

*   **getDirectory**: 作成または、ディレクトリを検索します。

*   **getFile**: 作成または、<a href="../fileobj/fileobj.html">ファイル</a>を検索します。

*   **removeRecursively**： ディレクトリとそのすべての内容を削除します。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 7 と 8
*   Windows 8

## getMetadata

ディレクトリに関する<a href="../metadata/metadata.html">メタデータ</a>をご覧ください。

**パラメーター:**

*   **successCallback**: が実行するコールバック関数を `Metadata` オブジェクト。*(機能)*

*   **解り**: コールバック関数を取得するときにエラーが発生した場合の実行を `Metadata` 。呼び出されると、 `<a href="../fileerror/fileerror.html">FileError</a>` オブジェクト。*(機能)*

**簡単な例**

    success(metadata) 関数 {console.log ("最終更新日時:"+ metadata.modificationTime);}関数 fail(error) {alert(error.code);}//このエントリ entry.getMetadata (成功、失敗）; の<a href="../metadata/metadata.html">メタデータ</a> オブジェクトをリクエスト
    

## setMetadata

ディレクトリの拡張属性、または<a href="../metadata/metadata.html">メタデータ</a>を設定します。*現在 iOS でのみ動作します*。

**パラメーター:**

*   **successCallback**: <a href="../metadata/metadata.html">メタデータ</a>の設定が成功したときに実行されるコールバック。*(機能)*

*   **解り**: <a href="../metadata/metadata.html">メタデータ</a>を設定するが失敗したときに実行されるコールバック。*(機能)*

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

*   のみ、 `com.apple.MobileBackup` 拡張属性がサポートされています。 値を設定します `1` をディレクトリが iCloud にバックアップされることを防ぐために。 値を設定します `` を iCloud にバックアップ ディレクトリを再度有効にします。

**簡単な例**

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
    
        window.<a href="../localfilesystem/localfilesystem.html">requestFileSystem</a>(localFileSystem, 0, onFSWin, onFSFail);
    }
    
        setFolderMetadata(<a href="../localfilesystem/localfilesystem.html">LocalFileSystem</a>.PERSISTENT, "Backups", "com.apple.MobileBackup", 1);
    

## [moveto]

<a href="../fileobj/fileobj.html">ファイル</a> システム上の別の場所にディレクトリを移動します。アプリしようとすると、エラーが発生します。

*   任意の深さでそれ自体の内部または任意の子にディレクトリを移動します。

*   その現在のディレクトリとは異なる名前を指定しない場合、親にディレクトリを移動します。

*   <a href="../fileobj/fileobj.html">ファイル</a>によって占められるパスにディレクトリを移動します。

*   ディレクトリが空でないディレクトリによって占められるパスに移動します。

削除し、そのディレクトリを置き換えますしようと、既存の空のディレクトリ上にディレクトリを移動します。

**パラメーター:**

*   **親**: 親ディレクトリ、ディレクトリを移動します。*(DirectoryEntry)*

*   **newName**: ディレクトリの新しい名前。現在の名前を指定しない場合のデフォルトです。*（，）*

*   **successCallback**: コールバックで実行することを `DirectoryEntry` の新しいディレクトリ オブジェクト。*(機能)*

*   **解り**: ディレクトリを移動するしようとしたときにエラーが発生した場合に実行されるコールバック。呼び出されると、 `<a href="../fileerror/fileerror.html">FileError</a>` オブジェクト。*(機能)*

**簡単な例**

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

<a href="../fileobj/fileobj.html">ファイル</a> システム上の別の場所にディレクトリをコピーします。アプリしようとすると、エラーが発生します。

*   任意の深さでそれ自体の内部のディレクトリをコピーします。

*   その現在のディレクトリとは異なる名前を指定しない場合、その親にディレクトリをコピーします。

ディレクトリ コピーは常に再帰的で、しディレクトリのすべての内容をコピーします。

**パラメーター:**

*   **親**: ディレクトリをコピー先の親ディレクトリです。*(DirectoryEntry)*

*   **newName**: ディレクトリの新しい名前。現在の名前を指定しない場合のデフォルトです。*（，）*

*   **successCallback**: コールバックで実行することを `DirectoryEntry` の新しいディレクトリ オブジェクト。*(機能)*

*   **解り**: 基になるディレクトリをコピーしようとしたときにエラーが発生した場合に実行されるコールバック。呼び出されると、 `<a href="../fileerror/fileerror.html">FileError</a>` オブジェクト。*(機能)*

**簡単な例**

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
    

## 網

ディレクトリを検索するために使用できる URL を返します。

**簡単な例**

    // Get the URL for this directory
    var dirURL = entry.toURL();
    console.log(dirURL);
    

## 削除

ディレクトリを削除します。アプリしようとすると、エラーが発生します。

*   空でないディレクトリを削除します。

*   <a href="../fileobj/fileobj.html">ファイル</a>システムのルート ディレクトリを削除します。

**パラメーター:**

*   **successCallback**: ディレクトリが削除された後に実行されるコールバック。パラメーターなしで呼び出されます。*(機能)*

*   **解り**: ディレクトリを削除しようとしたときにエラーが発生した場合に実行されるコールバック。呼び出されると、 `<a href="../fileerror/fileerror.html">FileError</a>` オブジェクト。*(機能)*

**簡単な例**

    関数 success(entry) {console.log (「の除去に成功しました」);}fail(error) 関数 {警告 (' ディレクトリの削除中にエラー: ' + error.code);}//削除このディレクトリ entry.remove (成功、失敗);
    

## getParent

親を見て `DirectoryEntry` ディレクトリを含みます。

**パラメーター:**

*   **successCallback**： ディレクトリの親を渡されるコールバック `DirectoryEntry` 。*(機能)*

*   **解り**: 親を取得しようとしてエラーが発生した場合に実行されるコールバック `DirectoryEntry` 。 呼び出されると、 `<a href="../fileerror/fileerror.html">FileError</a>` オブジェクト。 *(機能)*

**簡単な例**

    function success(parent) {
        console.log("Parent Name: " + parent.name);
    }
    
    function fail(error) {
        alert('Failed to get parent directory: ' + error.code);
    }
    
    // Get the parent DirectoryEntry
    entry.getParent(success, fail);
    

## createReader

ディレクトリ内のエントリを読み取る新しい <a href="../directoryreader/directoryreader.html">DirectoryReader</a> を作成します。

**簡単な例**

    // create a directory reader
    var directoryReader = entry.createReader();
    

## getDirectory

作成または、既存のディレクトリを検索します。アプリしようとすると、エラーが発生します。

*   そのすぐ上の親がまだ存在しないディレクトリを作成します。

**パラメーター:**

*   **パス**: ルックアップまたは作成するディレクトリへのパス。これからの相対パスまたは絶対パス `DirectoryEntry` 。*（，）*

*   **オプション**: ディレクトリが存在しない場合に作成するかどうかを指定するオプション。*(<a href="../flags/flags.html">フラグ</a>)*

*   **successCallback**： で実行するコールバックを `DirectoryEntry` オブジェクト。*(機能)*

*   **解り**: 作成または、ディレクトリを探しているときにエラーが発生した場合に実行されるコールバック。呼び出されると、 `<a href="../fileerror/fileerror.html">FileError</a>` オブジェクト。*(機能)*

**簡単な例**

    success(dirEntry) 関数 {console.log (「ディレクトリ名:"+ dirEntry.name);}fail(error) 機能 {警告 (「新しいディレクトリを作成できません:"+ error.code);}//、既存のディレクトリを取得または entry.getDirectory を既に存在しない場合に作成します ("newDir"{作成: true の場合、排他的な: false}、成功、失敗);
    

## getFile

作成または、<a href="../fileobj/fileobj.html">ファイル</a>を検索します。アプリしようとすると、エラーが発生します。

*   そのすぐ上の親がまだ存在しない<a href="../fileobj/fileobj.html">ファイル</a>を作成します。

**パラメーター:**

*   **パス**: ルックアップまたは作成する<a href="../fileobj/fileobj.html">ファイル</a>へのパス。これからの相対パスまたは絶対パス `DirectoryEntry` 。*（，）*

*   **オプション**: が存在しない場合、<a href="../fileobj/fileobj.html">ファイル</a>が作成されるかどうかを指定するオプション。*(<a href="../flags/flags.html">フラグ</a>)*

*   **successCallback**: 渡されたコールバックを `<a href="../fileentry/fileentry.html">FileEntry</a>` オブジェクト。*(機能)*

*   **解り**: 作成または、<a href="../fileobj/fileobj.html">ファイル</a>を探しているときにエラーが発生した場合に実行されるコールバック。呼び出されると、 `<a href="../fileerror/fileerror.html">FileError</a>` オブジェクト。*(機能)*

**簡単な例**

    success(fileEntry) 関数 {console.log （"<a href="../fileobj/fileobj.html">ファイル</a>名:"+ fileEntry.name);}fail(error) 機能 {警告 （"<a href="../fileobj/fileobj.html">ファイル</a>を取得できませんでした:"+ error.code);}//、既存の<a href="../fileobj/fileobj.html">ファイル</a>を取得または entry.getFile が存在しない場合に作成する ("newFile.txt"{作成: true の場合、排他的な: false}、成功、失敗);
    

## removeRecursively

ディレクトリとそのすべての内容を削除します。 (削除することはできません<a href="../fileobj/fileobj.html">ファイル</a>を含むディレクトリを削除しようとしています) など、エラーが発生した場合、ディレクトリの内容の一部を削除可能性があります。 アプリしようとすると、エラーが発生します。

*   <a href="../fileobj/fileobj.html">ファイル</a>システムのルート ディレクトリを削除します。

**パラメーター:**

*   **successCallback**: の後に実行されるコールバック、 `DirectoryEntry` が削除されています。パラメーターなしで呼び出されます。*(機能)*

*   **解り**: コールバックを削除しようとしたときにエラーが発生した場合に実行される、 `DirectoryEntry` 。呼び出されると、 `<a href="../fileerror/fileerror.html">FileError</a>` オブジェクト。*(機能)*

**簡単な例**

    function success(parent) {
        console.log("Remove Recursively Succeeded");
    }
    
    function fail(error) {
        alert("Failed to remove directory or it's contents: " + error.code);
    }
    
    // remove the directory and all it's contents
    entry.removeRecursively(success, fail);
    

## ブラックベリーの癖

失敗する可能性があります、 `ControlledAccessException` 、次の場合。

*   アプリは、アプリの以前のインストールによって作成されたディレクトリにアクセスしようとします。

> 解決策: 手動で、または再インストールする前にアプリケーションによって一時ディレクトリはきれいに確認してください。

*   場合は、<a href="../../device/device.html">デバイス</a>は USB で<a href="../../connection/connection.html">接続</a>されました。

> ソリューション: 再実行して、<a href="../../device/device.html">デバイス</a>から USB ケーブルを外します。