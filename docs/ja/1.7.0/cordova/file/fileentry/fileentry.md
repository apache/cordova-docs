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

FileEntry
==========

このオブジェクトはファイルシステムのファイルを表します。これは [W3C Directories and Systems](http://www.w3.org/TR/file-system-api/) の仕様書で定義されています。

プロパティー
----------

- __isFile:__ 常に true を表します _(boolean)_
- __isDirectory:__ 常に false を表します _(boolean)_
- __name:__ パスを除いた FileEntry の名前を表します _(DOMString)_
- __fullPath:__ ルートから FileEntry への絶対パスを表します _(DOMString)_

注意: 以下の属性は W3C の仕様書によって定義されていますが、 Cordova では __サポートされていません__ :

- __filesystem:__ FileEntry が属するファイルシステムを表します _(FileSystem)_


メソッド
-------

- __getMetadata__: ファイルのメタデータを取得します
- __moveTo__: ファイルを、ファイルシステム内の別の場所に移動します
- __copyTo__: ファイルを、ファイルシステム内の別の場所にコピーします
- __toURI__: ファイルの位置特定に使用できるURIを返します
- __remove__: ファイルを削除します
- __getParent__: 親ディレクトリを取得します
- __createWriter__: ファイルの書き込みに使用できる FileWriter オブジェクトを作成します
- __file__: ファイルプロパティーを含む File オブジェクトを作成します


サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7 (Mango)


getMetadata
----------------

ファイルのメタデータを取得します。

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


moveTo
------

ファイルを、ファイルシステム内の別の場所に移動します。 以下のことを試みるとエラーが発生します:

- もし移動先親ディレクトリが移動元と同じで、移動先ファイル名も移動元と同じである場合
- もし移動先のファイル名がディレクトリである場合

ファイルをすでに存在するファイルの場所に移動する行為は、削除してファイルを置き換える行為となります。

__パラメーター:__

- __parent__ - ファイルの移動先の親ディレクトリを表します _(DirectoryEntry)_
- __newName__ - ファイルの新しい名前を表します。もし指定されていない場合は、デフォルトで現在の名前となります _(DOMString)_
- __successCallback__ - 新しいファイルの FileEntry を伴って呼び出されるコールバック関数を表します _(Function)_
- __errorCallback__ - ファイルの移動中にエラーが起きた場合に呼び出されるコールバック関数を表します。 FileError オブジェクトを伴って呼び出されます _(Function)_


__使用例__

    function success(entry) {
        console.log("新しいパス: " + entry.fullPath);
    }

    function fail(error) {
        alert(error.code);
    }

    function moveFile(entry) {
        var parent = document.getElementById('parent').value,
            parentEntry = new DirectoryEntry({fullPath: parent});

        // ファイルを新しいディレクトリに移動し、名前付け替えます
        entry.moveTo(parentEntry, "newFile.txt", success, fail);
    }


copyTo
------

ファイルを、ファイルシステム内の別の場所にコピーします。以下のことを試みるとエラーが発生します:

- もしコピー先親ディレクトリがコピー元と同じで、コピー先ファイル名もコピー元と同じである場合

__パラメーター:__

- __parent__ - ファイルのコピー先の親ディレクトリを表します _(DirectoryEntry)_
- __newName__ - ファイルの新しい名前を表します。もし指定されていない場合は、デフォルトで現在の名前となります _(DOMString)_
- __successCallback__ - 新しいファイルの FileEntry を伴って呼び出されるコールバック関数を表します _(Function)_
- __errorCallback__ - ファイルのコピー中にエラーが起きた場合に呼び出されるコールバック関数を表します。 FileError オブジェクトを伴って呼び出されます _(Function)_


__使用例__

    function win(entry) {
        console.log("新しいパス: " + entry.fullPath);
    }

    function fail(error) {
        alert(error.code);
    }

    function copyFile(entry) {
        var parent = document.getElementById('parent').value,
            parentEntry = new DirectoryEntry({fullPath: parent});

        // ファイルを新しいディレクトリにコピーし、名前付け替えます
        entry.copyTo(parentEntry, "file.copy", success, fail);
    }


toURI
-----

ファイルの位置特定に使用できる URI を返します。

__使用例__

    // このエントリーの URI を取得
    var uri = entry.toURI();
    console.log(uri);


remove
------

ファイルを削除します。

__パラメーター:__

- __successCallback__ - ファイルが削除されたときに呼び出されるコールバック関数を表します。 パラメーターなしで呼び出されます _(Function)_
- __errorCallback__ - ファイルの削除中にエラーが起きた場合に呼び出されるコールバック関数を表します。 FileError オブジェクトを伴って呼び出されます _(Function)_

__使用例__

    function success(entry) {
        console.log("削除成功");
    }

    function fail(error) {
        alert('ファイルの削除に失敗しました: ' + error.code);
    }

    // ファイルの削除
    entry.remove(success, fail);


getParent
---------

そのファイルの親 DirectoryEntry を取得します。

__パラメーター:__

- __successCallback__ - ファイルの親 DirectoryEntry を伴って呼び出されるコールバック関数を表します _(Function)_
- __errorCallback__ - ファイルの親 DirectoryEntry の取得中にエラーが起きた場合に呼び出されるコールバック関数を表します。 FileError オブジェクトを伴って呼び出されます _(Function)_

__使用例__

    function success(parent) {
        console.log("親ディレクトリの名前: " + parent.name);
    }

    function fail(error) {
        alert(error.code);
    }

    // 親 DirectoryEntry を取得
    entry.getParent(success, fail);


createWriter
------------

FileEntry の表すファイルに使われる FileWriter オブジェクトを作成します。

__パラメーター:__

- __successCallback__ - FileWriter オブジェクトを伴って呼び出されるコールバック関数を表します _(Function)_
- __errorCallback__ - FileWriter の作成中にエラーが起きた場合に呼び出されるコールバック関数を表します。 FileError オブジェクトを伴って呼び出されます _(Function)_

__使用例__

    function success(writer) {
        writer.write("ファイルに書き込むテキスト");
    }

    function fail(error) {
        alert(error.code);
    }

    // ファイルへの書き込みのための FileWriter を作成
    entry.createWriter(success, fail);


file
----

FileEntry の表すファイルの現在の状態を表す File オブジェクトを返します。

__パラメーター:__

- __successCallback__ - File オブジェクトを伴って呼び出されるコールバック関数を表します _(Function)_
- __errorCallback__ - Fileオブジェクト作成中にエラーが起きた場合に呼び出されるコールバック関数を表します (例: 元のファイルが既に存在しない場合) 。 FileError オブジェクトを伴って呼び出されます _(Function)_

__使用例__

    function success(file) {
        console.log("File サイズ: " + file.size);
    }

    function fail(error) {
        alert("ファイルのプロパティーを取得できませんでした: " + error.code);
    }

    // ファイルのプロパティーを取得
    entry.file(success, fail);
