---
license: Licensed to the Apache Software Foundation (ASF) under one
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

DirectoryEntry
==============

このオブジェクトはファイルシステムのディレクトリを表します。これは [W3C Directories and Systems](http://www.w3.org/TR/file-system-api/) の仕様書で定義されています。

プロパティー
----------

- __isFile:__ 常に false を表します _(boolean)_
- __isDirectory:__ 常に true を表します _(boolean)_
- __name:__ パスを除いた DirectoryEntry の名前を表します _(DOMString)_
- __fullPath:__ ルートから DirectoryEntry への絶対パスを表します _(DOMString)_

注意: 以下の属性は W3C の仕様書によって定義されていますが、 Cordova では __サポートされていません__ :

- __filesystem:__ DirectoryEntry が属するファイルシステムを表します _(FileSystem)_

メソッド
-------

以下のメソッドは DirectoryEntry オブジェクトから呼び出すことができます:

- __getMetadata__: ディレクトリのメタデータを取得します
- __setMetadata__: ディレクトリのメタデータをセットします
- __moveTo__: ディレクトリを、ファイルシステム内の別の場所に移動します
- __copyTo__: ディレクトリを、ファイルシステム内の別の場所にコピーします
- __toURL__: ディレクトリの位置特定に使用できる URL を返します
- __remove__: ディレクトリを削除します。ディレクトリは空である必要があります
- __getParent__: 親ディレクトリを取得します
- __createReader__: ディレクトリからエントリを読み込みできる DirectoryReader を作成します
- __getDirectory__: ディレクトリを取得または作成します
- __getFile__: ファイルを取得または作成します
- __removeRecursively__: ディレクトリと、その中身をすべて削除します


サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7 (Mango)

getMetadata
-----------

ディレクトリのメタデータを取得します。

__パラメーター:__

- __successCallback__ - Metadata オブジェクトを伴って呼び出されるコールバック関数を表します _(Function)_
- __errorCallback__ - Metadata の取得時にエラーが起きた場合に呼び出されるコールバック関数を表します。 FileError オブジェクトを伴って呼び出されます _(Function)_


__使用例__

    function success(metadata) {
        console.log("最終更新日: " + metadata.modificationTime);
    }

    function fail(error) {
        alert(error.code);
    }

    // このエントリーの Metadata オブジェクトを取得
    entry.getMetadata(success, fail);

setMetadata
----------------

ディレクトリのメタデータをセットします。
**現在 iOS のみ対応しています** - ディレクトリの拡張属性をセットします。

__パラメーター:__

- __successCallback__ - Metadata が正常にセットされたときに呼び出されるコールバック関数を表します _(Function)_
- __errorCallback__ - Metadata のセット時にエラーが起きた場合に呼び出されるコールバック関数を表します _(Function)_
- __metadataObject__ - Metadata のキーと値が格納されているオブジェクトを表します _(Object)_


__使用例__

    function success() {
        console.log("メタデータが正常にセットされました。");
    }

    function fail() {
        alert("メタデータ作成中にエラーが発生しました。");
    }

    // メタデータをセット
    entry.setMetadata(success, fail, { "com.apple.MobileBackup": 1});
__iOS に関する注意点__

- **"com.apple.MobileBackup"** 拡張属性のみサポートされています。値を **1** とセットすることで、ディレクトリを iCloud でバックアップされない設定とします。値を **0** とセットすることで、再度ディレクトリを iCloud でバックアップされる設定とします。

__使用例__

    function setFolderMetadata(localFileSystem, subFolder, metadataKey, metadataValue) 
    {
        var onSetMetadataWin = function() {
          console.log("メタデータが正常にセットされました。")
        }
        var onSetMetadataFail = function() {
          console.log("メタデータ作成中にエラーが発生しました。")
        }

        var onGetDirectoryWin = function(parent) {
          var data = {};
          data[metadataKey] = metadataValue;
          parent.setMetadata(onSetMetadataWin, onSetMetadataFail, data);
        }
        var onGetDirectoryFail = function() {
          console.log("ディレクトリ取得中にエラーが発生しました。")
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

moveTo
------

ディレクトリを、ファイルシステム内の別の場所に移動します。 以下のことを試みるとエラーが発生します:

- ディレクトリをそれ自体、またはその子ディレクトリに移動する場合
- もし移動先親ディレクトリが移動元と同じで、移動先ディレクトリ名も移動元と同じである場合
- もし移動先のディレクトリ名がファイルである場合
- もし移動先のディレクトリが空でないディレクトリである場合

ディレクトリをすでに存在するディレクトリの場所に移動する行為は、削除してディレクトリを置き換える行為となります。

__パラメーター:__

- __parent__ - ディレクトリの移動先の親ディレクトリを表します _(DirectoryEntry)_
- __newName__ - ディレクトリの新しい名前を表します。 もし指定されていない場合は、デフォルトで現在の名前となります _(DOMString)_
- __successCallback__ - 新しいディレクトリの DirectoryEntry を伴って呼び出されるコールバック関数を表します _(Function)_
- __errorCallback__ - ディレクトリの移動中にエラーが起きた場合に呼び出されるコールバック関数を表します。 FileError オブジェクトを伴って呼び出されます _(Function)_


__使用例__

    function success(entry) {
        console.log("新しいパス: " + entry.fullPath);
    }

    function fail(error) {
        alert(error.code);
    }

    function moveDir(entry) {
        var parent = document.getElementById('parent').value,
            parentName = parent.substring(parent.lastIndexOf('/')+1),
            newName = document.getElementById('newName').value,
            parentEntry = new DirectoryEntry(parentName, parent);

        // ディレクトリを新しいディレクトリに移動し、名前付け替えます
        entry.moveTo(parentEntry, newName, success, fail);
    }

copyTo
------

ディレクトリを、ファイルシステム内の別の場所にコピーします 以下のことを試みるとエラーが発生します:

- ディレクトリをそれ自体、またはその子ディレクトリにコピーする場合
- もしコピー先親ディレクトリがコピー元と同じで、コピー先ディレクトリ名もコピー元と同じである場合

ディレクトリーのコピーは常に再帰的で、ディレクトリ内の全ての中身がコピーされます。

__パラメーター:__

- __parent__ - ディレクトリのコピー先の親ディレクトリを表します _(DirectoryEntry)_
- __newName__ - ディレクトリの新しい名前を表します。 もし指定されていない場合は、デフォルトで現在の名前となります _(DOMString)_
- __successCallback__ - 新しいディレクトリの DirectoryEntry を伴って呼び出されるコールバック関数を表します _(Function)_
- __errorCallback__ - ディレクトリのコピー中にエラーが起きた場合に呼び出されるコールバック関数を表します。 FileError オブジェクトを伴って呼び出されます _(Function)_


__使用例__

    function win(entry) {
        console.log("新しいパス: " + entry.fullPath);
    }

    function fail(error) {
        alert(error.code);
    }

    function copyDir(entry) {
        var parent = document.getElementById('parent').value,
            parentName = parent.substring(parent.lastIndexOf('/')+1),
            newName = document.getElementById('newName').value,
            parentEntry = new DirectoryEntry(parentName, parent);

        // ディレクトリを新しいディレクトリにコピーし、名前付け替えます
        entry.copyTo(parentEntry, newName, success, fail);
    }


toURL
-----

ディレクトリの位置特定に使用できる URL を返します。

__使用例__

    // ディレクトリ URL の取得
    var dirURL = entry.toURL();
    console.log(dirURL);


remove
------

ディレクトリを削除します。 以下のことを試みるとエラーが発生します:

- 空でないディレクトリを削除する場合
- ファイルシステムのルートディレクトリを削除する場合

__パラメーター:__

- __successCallback__ - ディレクトリが削除されたときに呼び出されるコールバック関数を表します。パラメーターなしで呼び出されます _(Function)_
- __errorCallback__ - ディレクトリのコピー中にエラーが起きた場合に呼び出されるコールバック関数を表します。 FileError オブジェクトを伴って呼び出されます _(Function)_

__使用例__

    function success(entry) {
        console.log("削除成功");
    }

    function fail(error) {
        alert('ディレクトリの削除中にエラーが発生しました: ' + error.code);
    }

    // ディレクトリを削除
    entry.remove(success, fail);


getParent
---------

そのディレクトリの親 DirectoryEntry を取得します。

__パラメーター:__

- __successCallback__ - ディレクトリの親 DirectoryEntry を伴って呼び出されるコールバック関数を表します _(Function)_
- __errorCallback__ - ファイルの親 DirectoryEntry の取得中にエラーが起きた場合に呼び出されるコールバック関数を表します。 FileError オブジェクトを伴って呼び出されます _(Function)_

__使用例__

    function success(parent) {
        console.log("親ディレクトリの名前: " + parent.name);
    }

    function fail(error) {
        alert('親ディレクトリの取得中にエラーが発生しました: ' + error.code);
    }

    // 親 DirectoryEntry を取得
    entry.getParent(success, fail);


createReader
------------

ディレクトリのエントリを読み込みするための DirectoryReader を作成します。

__使用例__

    // directory reader の作成
    var directoryReader = entry.createReader();


getDirectory
------------

ディレクトリを取得または作成します。 以下のことを試みるとエラーが発生します:

- 親ディレクトリが存在しないディレクトリを作る場合

__パラメーター:__

- __path__ - 取得または作成したいディレクトリまでのパスを表します。 この DirectoryEntry からの絶対パスまたは相対パスを指定します _(DOMString)_
- __options__ - もしディレクトリが存在しない場合、作成するかどうかを指定するオプションを表します _(Flags)_
- __successCallback__ - DirectoryEntry を伴って呼び出されるコールバック関数を表します _(Function)_
- __errorCallback__ - ディレクトリの取得または作成中にエラーが起きた場合に呼び出されるコールバック関数を表します。 FileError オブジェクトを伴って呼び出されます _(Function)_

__使用例__

    function success(parent) {
        console.log("親ディレクトリの名前: " + parent.name);
    }

    function fail(error) {
        alert("新しいディレクトリの作成中にエラーが発生しました: " + error.code);
    }

    // 既存のディレクトリを取得。存在しない場合は作成
    entry.getDirectory("newDir", {create: true, exclusive: false}, success, fail);


getFile
-------

ファイルを取得または作成します。 以下のことを試みるとエラーが発生します:

- 親ディレクトリが存在しないファイルを作る場合

__パラメーター:__

- __path__ - 取得または作成したいファイルまでのパスを表します。 この DirectoryEntry からの絶対パスまたは相対パスを指定します _(DOMString)_
- __options__ - もしファイルが存在しない場合、作成するかどうかを指定するオプションを表します _(Flags)_
- __successCallback__ - FileEntry を伴って呼び出されるコールバック関数を表します _(Function)_
- __errorCallback__ - ファイルの取得または作成中にエラーが起きた場合に呼び出されるコールバック関数を表します。 FileError オブジェクトを伴って呼び出されます _(Function)_

__使用例__

    function success(parent) {
        console.log("親ディレクトリの名前: " + parent.name);
    }

    function fail(error) {
        alert("ファイルの取得中にエラーが発生しました: " + error.code);
    }

    // 既存のファイルを取得。存在しない場合は作成
    entry.getFile("newFile.txt", {create: true, exclusive: false}, success, fail); 


removeRecursively
-----------------

ディレクトリと、その中身をすべて削除します。 エラーが起きたとき (例: 削除できないファイルが含まれるディレクトリを削除しようとした場合)
ディレクトリのコンテンツのいくつかは削除されている場合があります。
以下のことを試みるとエラーが発生します:

- ファイルシステムのルートディレクトリを削除する場合

__パラメーター:__

- __successCallback__ - DirectoryEntry が削除されたときに呼び出されるコールバック関数を表します。 パラメーターなしで呼び出されます _(Function)_
- __errorCallback__ - DirectoryEntry の削除中にエラーが起きた場合に呼び出されるコールバック関数を表します。 FileError オブジェクトを伴って呼び出されます _(Function)_

__使用例__

    function success(parent) {
        console.log("再帰的な削除成功");
    }

    function fail(error) {
        alert("ディレクトリまたはディレクトリの中身の削除中にエラーが発生しました: " + error.code);
    }

    // ディレクトリとディレクトリの中身を削除
    entry.removeRecursively(success, fail);
