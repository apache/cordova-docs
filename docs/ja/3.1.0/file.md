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


# ファイル

> 読んで、API を書くし、 [w3c ファイル api][1]に基づくファイル システム階層の移動.

 [1]: http://www.w3.org/TR/FileAPI

## オブジェクト

*   DirectoryEntry
*   DirectoryReader
*   ファイル
*   FileEntry
*   FileError
*   FileReader
*   ファイル ・ システム
*   ファイル転送
*   FileTransferError
*   FileUploadOptions
*   FileUploadResult
*   FileWriter
*   フラグ
*   LocalFileSystem
*   メタデータ

## 機能へのアクセス

バージョン 3.0 は、コルドバ*のプラグイン*としてデバイス レベルの Api を実装します。 CLI の使用 `plugin` のコマンドライン ・ インタ フェースを追加または削除、プロジェクトに対してこの機能を記載されているコマンド。

        $ cordova plugin add org.apache.cordova.file
        $ cordova plugin ls
        [ 'org.apache.cordova.file' ]
        $ cordova plugin rm org.apache.cordova.file
    

ファイル転送プラグインを使用するには、を個別に追加する必要があります。

        $ cordova plugin add org.apache.cordova.file-transfer
        $ cordova plugin ls
        [ 'org.apache.cordova.file-transfer' ]
        $ cordova plugin rm org.apache.cordova.file-transfer
    

これらのコマンドすべてのターゲット プラットフォームに適用されますが、以下のプラットフォームに固有の構成設定を変更します。

*   アンドロイド
    
        (in app/res/xml/config.xml)
        <feature name="File">
            <param name="android-package" value="org.apache.cordova.FileUtils" />
        </feature>
        <feature name="FileTransfer">
            <param name="android-package" value="org.apache.cordova.FileTransfer" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
        

*   ブラックベリー WebWorks
    
        (in www/plugins.xml)
        <feature name="File">
            <param name="blackberry-package" value="org.apache.cordova.file.FileManager" />
        </feature>
        <feature name="FileTransfer">
            <param name="blackberry-package" value="org.apache.cordova.http.FileTransfer" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.io.file" required="true" version="1.0.0.0" />
        <feature id="blackberry.utils"   required="true" version="1.0.0.0" />
        <feature id="blackberry.io.dir"  required="true" version="1.0.0.0" />
        <rim:permissions>
            <rim:permit>access_shared</rim:permit>
        </rim:permissions>
        

*   iOS （`config.xml`)
    
        <feature name="File">
            <param name="ios-package" value="CDVFile" />
        </feature>
        <feature name="FileTransfer">
            <param name="ios-package" value="CDVFileTransfer" />
        </feature>
        

いくつかのプラットフォームは特別な構成を必要とせずにこの機能をサポート可能性があります。*プラットフォームのサポート*の概要のセクションを参照してください。


# ファイル

このオブジェクトには、単一のファイルの属性が含まれます。

## プロパティ

*   **名前**: ファイルの名前。*（，）*

*   **fullPath**: ファイル名を含むファイルの完全パス。*（，）*

*   **タイプ**: ファイルの mime タイプ。*（，）*

*   **ファイルサイズ**: ファイルが変更された最後の時間。*（日）*

*   **サイズ**: ファイルのバイト単位のサイズ。*（ロング）*

## メソッド

*   **スライス**: 読み込まれるファイルの一部だけを選択します。

## 詳細

`File`オブジェクトには、単一のファイルの属性が含まれます。インスタンスを取得することができます、 `File` を呼び出すことによってオブジェクトが `FileEntry` オブジェクトの `file()` メソッド。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 7 と 8
*   Windows 8

## スライス

新しい `File` オブジェクトを `FileReader` ファイルの指定した部分のみを返します。 負の値を `start` または `end` ファイルの最後から測定されます。 インデックスは、現在のスライスを基準にして配置されます。 （下記の完全な例を参照してください)。

**パラメーター:**

*   **開始**: 最初のバイトを読み取り、包括的なインデックス。

*   **終了**： 最後の 1 つを読む後のバイトのインデックス。

**簡単な例**

    var slicedFile = file.slice(10, 30);
    

**完全な例**

    var slice1 = file.slice(100, 400);
    var slice2 = slice1.slice(20, 35);
    
    var slice3 = file.slice(120, 135);
    // slice2 and slice3 are equivalent.
    

**サポートされているプラットフォーム**

*   アンドロイド
*   iOS


# FileReader

`FileReader`基本ファイルへのアクセスを許可します。

## プロパティ

*   **readyState**: リーダーの 1 つの 3 つの可能な状態は、どちらか `EMPTY` 、 `LOADING` または`DONE`.

*   **結果**: 読み込まれているファイルの内容。*（，）*

*   **エラー**: エラーを格納するオブジェクト。*(FileError)*

*   **onloadstart**： 読み取りの起動時に呼び出されます。*(機能)*

*   **onload**: 読み取りが正常に完了するときに呼び出されます。*(機能)*

*   **onabort**: の読み取りが中止されたときに呼び出されます。たとえばを呼び出すことによって、 `abort()` メソッド。*(機能)*

*   **onerror**: 読み取りが失敗したときに呼び出されます。*(機能)*

*   **onloadend**: (のいずれかの成功または失敗)、要求が完了したときに呼び出されます。*(機能)*

**注：**次の porperty はサポートされていません。

*   **onprogress**: の進行状況をレポート ファイルの読み取り中と呼ばれる `progress.loaded` / `progress.total` 。*(機能)*

## メソッド

*   **中止**: ファイルの読み込みを中止します。

*   **readAsDataURL**: ファイルやデータの base64 でエンコードされた URL として戻り値のデータを読み取る。

*   **readAsText**: テキスト ファイルを読み取ります。

*   **readAsBinaryString**: バイナリ ファイルを読み取り、バイナリ文字列を返します。

*   **readAsArrayBuffer**： 読み取りファイルとして、`ArrayBuffer`.

## 詳細

`FileReader`オブジェクトは、デバイスのファイル システムからファイルを読み取る方法を提供します。 ファイルは、テキストまたは base64 データ エンコード文字列として読むことができます。 イベント リスナーは、受信、 `loadstart` 、 `progress` 、 `load` 、 `loadend` 、 `error` 、および `abort` イベント。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 7 と 8
*   Windows 8

## readAsDataURL

**パラメーター:**

*   **ファイル**: ファイル オブジェクトを読みます。

## 簡単な例

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("read success");
            console.log(evt.target.result);
        };
        reader.readAsDataURL(file);
    };
    
    var fail = function (error) {
        console.log(error.code);
    };
    
    entry.file(win, fail);
    

## readAsText

**パラメーター:**

*   **ファイル**: ファイル オブジェクトを読みます。

*   **エンコーディング**： ファイルのコンテンツのエンコードに使用するエンコーディングします。既定は UTF8 です。

## 簡単な例

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("read success");
            console.log(evt.target.result);
        };
        reader.readAsText(file);
    };
    
    var fail = function (error) {
        console.log(error.code);
    };
    
    entry.file(win, fail);
    

## 中止

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function(evt) {
            console.log("read success");
            console.log(evt.target.result);
        };
        reader.readAsText(file);
        reader.abort();
    };
    
    function fail(error) {
        console.log(error.code);
    }
    
    entry.file(win, fail);
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>FileReader Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
        }
    
        function gotFS(fileSystem) {
            fileSystem.root.getFile("readme.txt", null, gotFileEntry, fail);
        }
    
        function gotFileEntry(fileEntry) {
            fileEntry.file(gotFile, fail);
        }
    
        function gotFile(file){
            readDataUrl(file);
            readAsText(file);
        }
    
        function readDataUrl(file) {
            var reader = new FileReader();
            reader.onloadend = function(evt) {
                console.log("Read as data URL");
                console.log(evt.target.result);
            };
            reader.readAsDataURL(file);
        }
    
        function readAsText(file) {
            var reader = new FileReader();
            reader.onloadend = function(evt) {
                console.log("Read as text");
                console.log(evt.target.result);
            };
            reader.readAsText(file);
        }
    
        function fail(error) {
            console.log(error.code);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Read File</p>
      </body>
    </html>
    

## iOS の癖

*   **Encoding**パラメーターはサポートされていません、UTF8 エンコーディングが常に有効です。

## readAsBinaryString

現在 iOS と Android でのみサポートされています。

**パラメーター:**

*   **ファイル**: ファイル オブジェクトを読みます。

## 簡単な例

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("read success");
            console.log(evt.target.result);
        };
        reader.readAsBinaryString(file);
    };
    
    var fail = function (error) {
        console.log(error.code);
    };
    
    entry.file(win, fail);
    

## readAsArrayBuffer

現在 iOS と Android でのみサポートされています。

**パラメーター:**

*   **ファイル**: ファイル オブジェクトを読みます。

## 簡単な例

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("read success");
            console.log(new Uint8Array(evt.target.result));
        };
        reader.readAsArrayBuffer(file);
    };
    
    var fail = function (error) {
        console.log(error.code);
    };
    
    entry.file(win, fail);


# FileWriter

オブジェクトとして作成およびファイルへのデータの書き込みすることができます。

## プロパティ

*   **readyState**: 3 つの状態の 1 つで、どちらか `INIT` 、 `WRITING` 、または`DONE`.

*   **ファイル名**： 書き込まれるファイルの名前。*（，）*

*   **長さ**: 書き込まれるファイルの長さ。*（ロング）*

*   **位置**: ファイル ポインターの現在位置。*（ロング）*

*   **エラー**: エラーを格納するオブジェクト。*(FileError)*

*   **onwritestart**： 書き込みを開始するときに呼び出されます。*(機能)*

*   **onwrite**: 要求が正常に完了するときに呼び出されます。*(機能)*

*   **onabort**: の書き込みが中止されたときに呼び出されます。たとえば、abort() メソッドを呼び出すことによって。*(機能)*

*   **onerror**: 書き込みが失敗したときに呼び出されます。*(機能)*

*   **onwriteend**: (のいずれかの成功または失敗)、要求が完了したときに呼び出されます。*(機能)*

次のプロパティはサポートされて*いません*。

*   **onprogress**: の進行状況をレポート ファイルの書き込み中と呼ばれる `progress.loaded` / `progress.total` 。*(機能)*

## メソッド

*   **中止**: ファイルの書き込みを中止します。

*   **求める**: 指定されたバイトにファイル ポインターを移動します。

*   **切り捨てる**: 指定された長さにファイルが短くなります。

*   **記述**: ファイルにデータを書き込みます。

## 詳細

`FileWriter`オブジェクトは UTF-8 エンコードされたファイルをデバイスのファイル システムに書き込む方法を提供します。 アプリケーション応答を `writestart` 、 `progress` 、 `write` 、 `writeend` 、 `error` 、および `abort` イベント。

各 `FileWriter` のデータにすることができます書かれる何回も 1 つのファイルに対応しています。 `FileWriter`ファイルの維持する `position` と `length` をアプリに許可属性 `seek` と `write` ファイルの任意の場所。 既定では、 `FileWriter` 既存データの上書き、ファイルの先頭に書き込まれます。 オプションの設定 `append` にブール `true` で、 `FileWriter` のコンス トラクターはファイルの末尾に書き込む。

テキスト データは、以下のすべてのプラットフォームでサポートされています。 テキストは、ファイルシステムに書き込まれる前に utf-8 としてエンコードされます。 いくつかのプラットフォームは、バイナリ データを渡すことができるの ArrayBuffer または Blob としてもサポートします。

## サポートされているプラットフォーム

テキストおよびバイナリ サポート：

*   アンドロイド
*   iOS

テキストのみのサポート:

*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   Windows Phone 7 と 8
*   Windows 8

## 簡単な例を求める

    function win(writer) {
        // fast forwards file pointer to end of file
        writer.seek(writer.length);
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## 簡単な例を切り捨てる

    function win(writer) {
        writer.truncate(10);
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## 簡単な例を書く

    function win(writer) {
        writer.onwrite = function(evt) {
            console.log("write success");
        };
        writer.write("some sample text");
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## バイナリ書き込み簡単な例

    function win(writer) {
        var data = new ArrayBuffer(5),
            dataView = new Int8Array(data);
        for (i=0; i < 5; i++) {
            dataView[i] = i;
        }
        writer.onwrite = function(evt) {
            console.log("write success");
        };
        writer.write(data);
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## 簡単な例を追加します。

    function win(writer) {
        writer.onwrite = function(evt) {
        console.log("write success");
    };
    writer.seek(writer.length);
        writer.write("appended text");
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## 簡単な例を中止します。

    function win(writer) {
        writer.onwrite = function(evt) {
            console.log("write success");
        };
        writer.write("some sample text");
        writer.abort();
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>FileWriter Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
        }
    
        function gotFS(fileSystem) {
            fileSystem.root.getFile("readme.txt", {create: true, exclusive: false}, gotFileEntry, fail);
        }
    
        function gotFileEntry(fileEntry) {
            fileEntry.createWriter(gotFileWriter, fail);
        }
    
        function gotFileWriter(writer) {
            writer.onwriteend = function(evt) {
                console.log("contents of file now 'some sample text'");
                writer.truncate(11);
                writer.onwriteend = function(evt) {
                    console.log("contents of file now 'some sample'");
                    writer.seek(4);
                    writer.write(" different text");
                    writer.onwriteend = function(evt){
                        console.log("contents of file now 'some different text'");
                    }
                };
            };
            writer.write("some sample text");
        }
    
        function fail(error) {
            console.log(error.code);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Write File</p>
      </body>
    </html>


# ファイル ・ システム

このオブジェクトは、ファイル ・ システムを表します。

## プロパティ

*   **名前**: ファイル システムの名前。*（，）*

*   **ルート**: ファイル システムのルート ディレクトリ。*(DirectoryEntry)*

## 詳細

`FileSystem`オブジェクトは、ファイル システムに関する情報を表します。 ファイル システムの名前は公開されているファイル ・ システムのリストの間でユニークです。 Root プロパティが含まれています、 `DirectoryEntry` ファイルシステムのルート ディレクトリを表すオブジェクト。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 7 と 8
*   Windows 8

## ファイル システムの簡単な例

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
        console.log(fileSystem.root.name);
    }
    
    // request the persistent file system
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, null);
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>File System Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);
        }
    
        function onFileSystemSuccess(fileSystem) {
            console.log(fileSystem.name);
            console.log(fileSystem.root.name);
        }
    
        function fail(evt) {
            console.log(evt.target.error.code);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>File System</p>
      </body>
    </html>


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


# DirectoryEntry

[W3C ディレクトリとシステム][1]仕様で定義されているファイル システム上のディレクトリを表します。

 [1]: http://www.w3.org/TR/file-system-api/

## プロパティ

*   **isFile**： 常に `false` 。*(ブール値)*

*   **isDirectory**： 常に `true` 。*(ブール値)*

*   **名前**： の名前、 `DirectoryEntry` 、それにつながるパスを除きます。*（，）*

*   **fullPath**: 完全絶対パスをルートから、 `DirectoryEntry` 。*（，）*

**注：**次の属性は、W3C の仕様によって定義されますが*サポートされます*。

*   **ファイルシステム**: ファイルシステムを `DirectoryEntry` が存在します。*(ファイルシステム)*

## メソッド

次の方法で呼び出し可能な `DirectoryEntry` オブジェクト。

*   **getMetadata**: ディレクトリに関するメタデータを検索します。

*   **setMetadata**： ディレクトリにメタデータを設定します。

*   **[moveto]**: ファイル システムに別の場所にディレクトリを移動します。

*   **copyTo**: ファイル システム上の別の場所にディレクトリをコピーします。

*   **網**: ディレクトリを検出する URL を返します。

*   **削除**: ディレクトリを削除します。ディレクトリは空である必要があります。

*   **getParent**: 親ディレクトリを検索します。

*   **createReader**: 新規作成 `DirectoryReader` をディレクトリからエントリを読み取ることができます。

*   **getDirectory**: 作成または、ディレクトリを検索します。

*   **getFile**: 作成または、ファイルを検索します。

*   **removeRecursively**： ディレクトリとそのすべての内容を削除します。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 7 と 8
*   Windows 8

## getMetadata

ディレクトリに関するメタデータをご覧ください。

**パラメーター:**

*   **successCallback**: が実行するコールバック関数を `Metadata` オブジェクト。*(機能)*

*   **解り**: コールバック関数を取得するときにエラーが発生した場合の実行を `Metadata` 。呼び出されると、 `FileError` オブジェクト。*(機能)*

**簡単な例**

    success(metadata) 関数 {console.log ("最終更新日時:"+ metadata.modificationTime);}関数 fail(error) {alert(error.code);}//このエントリ entry.getMetadata (成功、失敗）; のメタデータ オブジェクトをリクエスト
    

## setMetadata

ディレクトリの拡張属性、またはメタデータを設定します。*現在 iOS でのみ動作します*。

**パラメーター:**

*   **successCallback**: メタデータの設定が成功したときに実行されるコールバック。*(機能)*

*   **解り**: メタデータを設定するが失敗したときに実行されるコールバック。*(機能)*

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
    
        window.requestFileSystem(localFileSystem, 0, onFSWin, onFSFail);
    }
    
        setFolderMetadata(LocalFileSystem.PERSISTENT, "Backups", "com.apple.MobileBackup", 1);
    

## [moveto]

ファイル システム上の別の場所にディレクトリを移動します。アプリしようとすると、エラーが発生します。

*   任意の深さでそれ自体の内部または任意の子にディレクトリを移動します。

*   その現在のディレクトリとは異なる名前を指定しない場合、親にディレクトリを移動します。

*   ファイルによって占められるパスにディレクトリを移動します。

*   ディレクトリが空でないディレクトリによって占められるパスに移動します。

削除し、そのディレクトリを置き換えますしようと、既存の空のディレクトリ上にディレクトリを移動します。

**パラメーター:**

*   **親**: 親ディレクトリ、ディレクトリを移動します。*(DirectoryEntry)*

*   **newName**: ディレクトリの新しい名前。現在の名前を指定しない場合のデフォルトです。*（，）*

*   **successCallback**: コールバックで実行することを `DirectoryEntry` の新しいディレクトリ オブジェクト。*(機能)*

*   **解り**: ディレクトリを移動するしようとしたときにエラーが発生した場合に実行されるコールバック。呼び出されると、 `FileError` オブジェクト。*(機能)*

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

ファイル システム上の別の場所にディレクトリをコピーします。アプリしようとすると、エラーが発生します。

*   任意の深さでそれ自体の内部のディレクトリをコピーします。

*   その現在のディレクトリとは異なる名前を指定しない場合、その親にディレクトリをコピーします。

ディレクトリ コピーは常に再帰的で、しディレクトリのすべての内容をコピーします。

**パラメーター:**

*   **親**: ディレクトリをコピー先の親ディレクトリです。*(DirectoryEntry)*

*   **newName**: ディレクトリの新しい名前。現在の名前を指定しない場合のデフォルトです。*（，）*

*   **successCallback**: コールバックで実行することを `DirectoryEntry` の新しいディレクトリ オブジェクト。*(機能)*

*   **解り**: 基になるディレクトリをコピーしようとしたときにエラーが発生した場合に実行されるコールバック。呼び出されると、 `FileError` オブジェクト。*(機能)*

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

*   ファイルシステムのルート ディレクトリを削除します。

**パラメーター:**

*   **successCallback**: ディレクトリが削除された後に実行されるコールバック。パラメーターなしで呼び出されます。*(機能)*

*   **解り**: ディレクトリを削除しようとしたときにエラーが発生した場合に実行されるコールバック。呼び出されると、 `FileError` オブジェクト。*(機能)*

**簡単な例**

    関数 success(entry) {console.log (「の除去に成功しました」);}fail(error) 関数 {警告 (' ディレクトリの削除中にエラー: ' + error.code);}//削除このディレクトリ entry.remove (成功、失敗);
    

## getParent

親を見て `DirectoryEntry` ディレクトリを含みます。

**パラメーター:**

*   **successCallback**： ディレクトリの親を渡されるコールバック `DirectoryEntry` 。*(機能)*

*   **解り**: 親を取得しようとしてエラーが発生した場合に実行されるコールバック `DirectoryEntry` 。 呼び出されると、 `FileError` オブジェクト。 *(機能)*

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

ディレクトリ内のエントリを読み取る新しい DirectoryReader を作成します。

**簡単な例**

    // create a directory reader
    var directoryReader = entry.createReader();
    

## getDirectory

作成または、既存のディレクトリを検索します。アプリしようとすると、エラーが発生します。

*   そのすぐ上の親がまだ存在しないディレクトリを作成します。

**パラメーター:**

*   **パス**: ルックアップまたは作成するディレクトリへのパス。これからの相対パスまたは絶対パス `DirectoryEntry` 。*（，）*

*   **オプション**: ディレクトリが存在しない場合に作成するかどうかを指定するオプション。*(フラグ)*

*   **successCallback**： で実行するコールバックを `DirectoryEntry` オブジェクト。*(機能)*

*   **解り**: 作成または、ディレクトリを探しているときにエラーが発生した場合に実行されるコールバック。呼び出されると、 `FileError` オブジェクト。*(機能)*

**簡単な例**

    success(dirEntry) 関数 {console.log (「ディレクトリ名:"+ dirEntry.name);}fail(error) 機能 {警告 (「新しいディレクトリを作成できません:"+ error.code);}//、既存のディレクトリを取得または entry.getDirectory を既に存在しない場合に作成します ("newDir"{作成: true の場合、排他的な: false}、成功、失敗);
    

## getFile

作成または、ファイルを検索します。アプリしようとすると、エラーが発生します。

*   そのすぐ上の親がまだ存在しないファイルを作成します。

**パラメーター:**

*   **パス**: ルックアップまたは作成するファイルへのパス。これからの相対パスまたは絶対パス `DirectoryEntry` 。*（，）*

*   **オプション**: が存在しない場合、ファイルが作成されるかどうかを指定するオプション。*(フラグ)*

*   **successCallback**: 渡されたコールバックを `FileEntry` オブジェクト。*(機能)*

*   **解り**: 作成または、ファイルを探しているときにエラーが発生した場合に実行されるコールバック。呼び出されると、 `FileError` オブジェクト。*(機能)*

**簡単な例**

    success(fileEntry) 関数 {console.log （"ファイル名:"+ fileEntry.name);}fail(error) 機能 {警告 （"ファイルを取得できませんでした:"+ error.code);}//、既存のファイルを取得または entry.getFile が存在しない場合に作成する ("newFile.txt"{作成: true の場合、排他的な: false}、成功、失敗);
    

## removeRecursively

ディレクトリとそのすべての内容を削除します。 (削除することはできませんファイルを含むディレクトリを削除しようとしています) など、エラーが発生した場合、ディレクトリの内容の一部を削除可能性があります。 アプリしようとすると、エラーが発生します。

*   ファイルシステムのルート ディレクトリを削除します。

**パラメーター:**

*   **successCallback**: の後に実行されるコールバック、 `DirectoryEntry` が削除されています。パラメーターなしで呼び出されます。*(機能)*

*   **解り**: コールバックを削除しようとしたときにエラーが発生した場合に実行される、 `DirectoryEntry` 。呼び出されると、 `FileError` オブジェクト。*(機能)*

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

*   場合は、デバイスは USB で接続されました。

> ソリューション: 再実行して、デバイスから USB ケーブルを外します。


# DirectoryReader

[W3C ディレクトリとシステム][1]仕様で定義されているファイルと、ディレクトリ内のディレクトリを一覧表示するオブジェクト。

 [1]: http://www.w3.org/TR/file-system-api/

## メソッド

*   **readentries を示す**: ディレクトリ内のエントリを読み取る。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 7 と 8
*   Windows 8

## readentries を示す

このディレクトリ内のエントリを読み取る。

**パラメーター:**

*   **successCallback**: の配列が渡されるコールバック `FileEntry` と `DirectoryEntry` オブジェクト。*(機能)*

*   **解り**: ディレクトリ一覧を取得するときにエラーが発生した場合に実行されるコールバック。呼び出されると、 `FileError` オブジェクト。*(機能)*

**簡単な例**

    function success(entries) {
        var i;
        for (i=0; i<entries.length; i++) {
            console.log(entries[i].name);
        }
    }
    
    function fail(error) {
        alert("Failed to list directory contents: " + error.code);
    }
    
    // Get a directory reader
    var directoryReader = dirEntry.createReader();
    
    // Get a list of all the entries in the directory
    directoryReader.readEntries(success,fail);


# ファイル転送

`FileTransfer`オブジェクトをサーバーからダウンロードまたはアップロードすることができます。

## プロパティ

*   **onprogress**: と呼ばれる、 `ProgressEvent` データの新しいチャンクが転送されるたびに。*(機能)*

## メソッド

*   **アップロード**: サーバーにファイルを送信します。

*   **ダウンロード**: サーバーからファイルをダウンロードします。

*   **中止**: 進行中の転送を中止します。

## 詳細

`FileTransfer`オブジェクトはマルチパートのポスト http を使用してリモート サーバーにファイルをアップロードする方法を提供します。 HTTP と HTTPS の両方のプロトコルがサポートされます。 省略可能なパラメーターを渡すことによって指定することができます、 `FileUploadOptions` オブジェクトの `upload()` メソッド。 成功したアップロード時に、 `FileUploadResult` オブジェクト、成功時のコールバックに渡されます。 エラーが発生した場合、 `FileTransferError` オブジェクト エラー コールバックに渡されます。 リモート サーバーからファイルをダウンロードし、デバイスに保存する (iOS と Android） でのみ可能です。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 7 と 8
*   Windows 8

## アップロード

**パラメーター:**

*   **filePath**: デバイス上のファイルの完全パス。

*   **サーバー**: によって符号化されるように、ファイルを受信するサーバーの URL`encodeURI()`.

*   **successCallback**: 渡されたコールバックを `Metadata` オブジェクト。*(機能)*

*   **解り**: エラー取得が発生した場合に実行されるコールバック、 `Metadata` 。呼び出されると、 `FileTransferError` オブジェクト。*(機能)*

*   **オプション**: ファイル名と mime タイプなどの省略可能なパラメーター。

*   **trustAllHosts**: 省略可能なパラメーターは、デフォルト `false` 。 場合設定 `true` 、セキュリティ証明書をすべて受け付けます。 これは Android の自己署名入りセキュリティ証明書を拒否するので便利です。 運用環境で使用しないでください。 Android と iOS でサポートされています。 *(ブール値)*

**簡単な例**

    // !! Assumes variable fileURI contains a valid URI to a text file on the device
    
    var win = function (r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);
    }
    
    var fail = function (error) {
        alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
    }
    
    var options = new FileUploadOptions();
    options.fileKey = "file";
    options.fileName = fileURI.substr(fileURI.lastIndexOf('/') + 1);
    options.mimeType = "text/plain";
    
    var params = {};
    params.value1 = "test";
    params.value2 = "param";
    
    options.params = params;
    
    var ft = new FileTransfer();
    ft.upload(fileURI, encodeURI("http://some.server.com/upload.php"), win, fail, options);
    

**完全な例**

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
    <html>
    <head>
        <title>File Transfer Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
            // Wait for device API libraries to load
            //
            document.addEventListener("deviceready", onDeviceReady, false);
    
            // device APIs are available
            //
            function onDeviceReady() {
                // Retrieve image file location from specified source
                navigator.camera.getPicture(
                    uploadPhoto,
                    function(message) { alert('get picture failed'); },
                    {
                        quality         : 50,
                        destinationType : navigator.camera.DestinationType.FILE_URI,
                        sourceType      : navigator.camera.PictureSourceType.PHOTOLIBRARY
                    }
                );
            }
    
            function uploadPhoto(imageURI) {
                var options = new FileUploadOptions();
                options.fileKey="file";
                options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
                options.mimeType="image/jpeg";
    
                var params = {};
                params.value1 = "test";
                params.value2 = "param";
    
                options.params = params;
    
                var ft = new FileTransfer();
                ft.upload(imageURI, encodeURI("http://some.server.com/upload.php"), win, fail, options);
            }
    
            function win(r) {
                console.log("Code = " + r.responseCode);
                console.log("Response = " + r.response);
                console.log("Sent = " + r.bytesSent);
            }
    
            function fail(error) {
                alert("An error has occurred: Code = " + error.code);
                console.log("upload error source " + error.source);
                console.log("upload error target " + error.target);
            }
    
            </script>
    </head>
    <body>
        <h1>Example</h1>
        <p>Upload File</p>
    </body>
    </html>
    

**設定アップロード ヘッダー**

Android と iOS でサポートされています。

    function win(r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);
    }
    
    function fail(error) {
        alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
    }
    
    var uri = encodeURI("http://some.server.com/upload.php");
    
    var options = new FileUploadOptions();
    options.fileKey="file";
    options.fileName=fileURI.substr(fileURI.lastIndexOf('/')+1);
    options.mimeType="text/plain";
    
    var headers={'headerParam':'headerValue'};
    
    options.headers = headers;
    
    var ft = new FileTransfer();
    ft.upload(fileURI, uri, win, fail, options);
    

**Android の癖**

設定、 `chunkedMode` オプションを `false` Nginx のサーバーへのアップロードの問題を防ぐために。

## ダウンロード

**パラメーター:**

*   **ソース**: によって符号化されるように、ファイルをダウンロードするサーバーの URL`encodeURI()`.

*   **ターゲット**: デバイス上のファイルの完全パス。

*   **successCallback**: 渡されたコールバックを `FileEntry` オブジェクト。*(機能)*

*   **解り**: コールバックを取得するときにエラーが発生した場合に実行される、 `Metadata` 。呼び出されると、 `FileTransferError` オブジェクト。*(機能)*

*   **trustAllHosts**: 省略可能なパラメーターは、デフォルト `false` 。 場合に設定されている `true` すべてのセキュリティ証明書を受け入れるでしょう。 これは便利ですアンドロイドの自己署名入りセキュリティ証明書を拒否します。 運用環境で使用しないでください。 Android と iOS でサポートされています。 *(ブール値)*

*   **オプション**: 省略可能なパラメーターは、現在サポートするヘッダーのみ (認証 (基本認証) など)。

**簡単な例**

    // !! FilePath はデバイス var 出色で有効なパスと見なされます = 新しい FileTransfer();var uri = encodeURI ("http://some.server.com/download.php");fileTransfer.download (uri、filePath、function(entry) {console.log ("ダウンロードが完了しました:"+ entry.fullPath);}、function(error) {console.log (「ダウンロード エラー ソース」+ error.source);console.log (「ダウンロード エラー ターゲット」+ error.target);console.log (「アップロード エラー コード」+ error.code);}、false {ヘッダー: {「承認」:「基本的な dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA = ="}});
    

## 中止

進行中の転送を中止します。Onerror コールバックが FileTransferError.ABORT_ERR のエラー コードを持っている FileTransferError オブジェクトに渡されます。

**サポートされているプラットフォーム**

*   アンドロイド
*   iOS

**簡単な例**

    // !! 可変 fileURI デバイス var 勝利上のテキスト ファイルを有効な URI が含まれている前提としています function(r) = {console.log (「呼び出すことはできません」);}。var の失敗 function(error) = {//error.code FileTransferError.ABORT_ERR 警告 = = ("エラーが発生しました: コード ="+ error.code);console.log (「アップロード エラー ソース」+ error.source);console.log (「アップロード エラー ターゲット」+ error.target);}var のオプション = 新しい FileUploadOptions();options.fileKey="file";options.fileName="myphoto.jpg";options.mimeType="image/jpeg";var ft = 新しい FileTransfer();ft.upload fileURI、encodeURI ("http://some.server.com/upload.php")、勝利、失敗する （オプション）;ft.abort();
    

## onprogress

新しいデータのチャンクを転送するたびに、ProgressEvent と呼ばれます。

**サポートされているプラットフォーム**

*   アンドロイド
*   iOS

**例**

    fileTransfer.onprogress = function(progressEvent) {
        if (progressEvent.lengthComputable) {
          loadingStatus.setPercentage(progressEvent.loaded / progressEvent.total);
        } else {
          loadingStatus.increment();
        }
    };
    fileTransfer.download(...); // or fileTransfer.upload(...);
    

**癖**- 両方、iOS、Android 上 lengthComputable は `false` のダウンロード gzip エンコーディングを使用します。


# FileUploadOptions

A `FileUploadOptions` オブジェクトに渡すことができます、 `FileTransfer` オブジェクトの `upload()` メソッドをアップロード スクリプトに追加のパラメーターを指定します。

## プロパティ

*   **fileKey**: フォーム要素の名前。既定値は `file` です。（，）

*   **ファイル名**： ファイル名、サーバー上のファイルを保存するときに使用します。既定値は `image.jpg` です。（，）

*   **mime タイプ**: アップロードするデータの mime タイプ。既定値は `image/jpeg` です。（，）

*   **params**: HTTP リクエストに渡すために任意のキー/値ペアのセット。(オブジェクト)

*   **chunkedMode**: チャンク ストリーミング モードでデータをアップロードするかどうか。既定値は `true` です。(ブール値)

*   **ヘッダー**: ヘッダーの名前/ヘッダー値のマップ。1 つ以上の値を指定するには、配列を使用します。(オブジェクト)

## 説明

A `FileUploadOptions` オブジェクトに渡すことができます、 `FileTransfer` オブジェクトの `upload()` メソッドをアップロード スクリプトに追加のパラメーターを指定します。

## WP7 気まぐれ

*   **chunkedMode:**: WP7 では無視されます。


# FileUploadResult

A `FileUploadResult` オブジェクトの成功時のコールバックに渡される、 `FileTransfer` オブジェクトの `upload()` メソッド。

## プロパティ

*   **bytesSent**: アップロードの一部としてサーバーに送信されたバイト数。（ロング）

*   **記述**: サーバーによって返される HTTP 応答コード。（ロング）

*   **応答**: サーバーによって返される HTTP 応答。（，）

## 説明

`FileUploadResult`の成功時のコールバックを介してオブジェクトが返されます、 `FileTransfer` オブジェクトの `upload()` メソッド。

## iOS の癖

*   サポートしていない `responseCode` または`bytesSent`.


# フラグ

引数が指定されて、 `DirectoryEntry` オブジェクトの `getFile()` と `getDirectory()` 方法を調べたり、ファイルとディレクトリをそれぞれ作成します。

## プロパティ

*   **作成**： 存在しない場合、ファイルまたはディレクトリを作成する必要がありますを示します。*(ブール値)*

*   **排他的な**: は単独でを使用すると、影響を与えません `create` ターゲット パスが既に存在する場合に失敗する、ファイルまたはディレクトリが作成されます。*(ブール値)*

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 7 と 8
*   Windows 8

## 簡単な例

    //が存在しない場合に作成するデータ ディレクトリを取得します。
    dataDir fileSystem.root.getDirectory = (「データ」{作成: true});//が存在しない場合にのみ、ロック ファイルを作成します。
    ロックファイル dataDir.getFile = ("lockfile.txt"{作成: true の場合、排他的な: true});


# LocalFileSystem

このオブジェクトは、ルート ・ ファイル ・ システムを取得する方法を提供します。

## メソッド

*   **requestFileSystem**： ファイル ・ システムを要求します。*(機能)*

*   **resolveLocalFileSystemURI**: 取得、 `DirectoryEntry` または `FileEntry` ローカル URI を使用します。*(機能)*

## 定数

*   `LocalFileSystem.PERSISTENT`: アプリケーションまたはユーザーの許可なくユーザー エージェントによって除去されるべきではない記憶域に対して使用されます。

*   `LocalFileSystem.TEMPORARY`： 永続性の保証なしでストレージに使用します。

## 詳細

`LocalFileSystem`オブジェクトのメソッドで定義されて、 `window` オブジェクト。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 7 と 8
*   Windows 8

## ファイル システムの簡単な例を要求します。

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
    }
    
    // request the persistent file system
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, onError);
    

## ローカル ファイル システム URI のクイック例を解決します。

    function onSuccess(fileEntry) {
        console.log(fileEntry.name);
    }
    
    window.resolveLocalFileSystemURI("file:///example.txt", onSuccess, onError);
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Local File System Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);
            window.resolveLocalFileSystemURI("file:///example.txt", onResolveSuccess, fail);
        }
    
        function onFileSystemSuccess(fileSystem) {
            console.log(fileSystem.name);
        }
    
        function onResolveSuccess(fileEntry) {
            console.log(fileEntry.name);
        }
    
        function fail(evt) {
            console.log(evt.target.error.code);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Local File System</p>
      </body>
    </html>
    

# requestFileSystem

> アプリケーション データを格納するファイル システムを要求します。

     window.requestFileSystem(type, size, successCallback, errorCallback)
    

*   **ウィンドウ**: グローバル ウィンドウ オブジェクトへの参照
*   **タイプ**: ローカル ファイル システムの種類、LocalFileSystem 定数を参照ください
*   **サイズ**: どのくらいのストレージ容量をバイト、必要とするアプリケーションで想定されることを示します。
*   **successCallback**: ファイルシステム ・ オブジェクトを使って呼び出されます
*   **解り**: エラー取得するファイルシステムが発生した場合に呼び出されます

## ファイル システムの簡単な例を要求します。

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
    }
    
    // request the persistent file system
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, onError);


# メタデータ

ファイルまたはディレクトリの状態に関する情報を提供するインターフェイスです。

## プロパティ

*   **修正時刻**: ファイルまたはディレクトリが最後変更された日時。*（日）*

## 詳細

`Metadata`オブジェクトは、ファイルまたはディレクトリの状態に関する情報を表します。 呼び出して、 `DirectoryEntry` または `FileEntry` オブジェクトの `getMetadata()` メソッドの結果、 `Metadata` インスタンス。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 7 と 8
*   Windows 8

## 簡単な例

    function win(metadata) {
        console.log("Last Modified: " + metadata.modificationTime);
    }
    
    // Request the metadata object for this entry
    entry.getMetadata(win, null);


# FileError

A `FileError` オブジェクト ファイル API メソッドのいずれかでエラーが発生したときに設定されます。

## プロパティ

*   **コード**: 次のいずれかの定義済みのエラー コード。

## 定数

*   `FileError.NOT_FOUND_ERR`
*   `FileError.SECURITY_ERR`
*   `FileError.ABORT_ERR`
*   `FileError.NOT_READABLE_ERR`
*   `FileError.ENCODING_ERR`
*   `FileError.NO_MODIFICATION_ALLOWED_ERR`
*   `FileError.INVALID_STATE_ERR`
*   `FileError.SYNTAX_ERR`
*   `FileError.INVALID_MODIFICATION_ERR`
*   `FileError.QUOTA_EXCEEDED_ERR`
*   `FileError.TYPE_MISMATCH_ERR`
*   `FileError.PATH_EXISTS_ERR`

## 説明

`FileError`オブジェクトが File API エラー コールバックのいずれかに提供される唯一のパラメーターです。 エラーの種類を決定する比較その `code` プロパティの上記のリストのいずれかを使用します。


# FileTransferError

A `FileTransferError` オブジェクトは、エラーが発生エラー コールバックに渡されます。

## プロパティ

*   **コード**: 次のいずれかの定義済みのエラー コード。(数)

*   **ソース**: ソースを URI。(文字列)

*   **ターゲット**: 先の URI。(文字列)

*   **http_status**: HTTP ステータス コード。この属性は、HTTP 接続から応答コードを受信したときにのみ使用できます。(数)

## 定数

*   `FileTransferError.FILE_NOT_FOUND_ERR`
*   `FileTransferError.INVALID_URL_ERR`
*   `FileTransferError.CONNECTION_ERR`
*   `FileTransferError.ABORT_ERR`

## 説明

`FileTransferError`オブジェクトは、ファイルのダウンロードまたはアップロードするときにエラーが発生エラー コールバックに渡されます。
