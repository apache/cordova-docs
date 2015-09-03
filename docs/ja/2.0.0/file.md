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


File
==========

>  このAPIはW3Cの [File API](http://www.w3.org/TR/FileAPI) をベースとしています。ファイルシステムへの読み書きのための API です。

オブジェクト
-------

- DirectoryEntry
- DirectoryReader
- File
- FileEntry
- FileError
- FileReader
- FileSystem
- FileTransfer
- FileTransferError
- FileUploadOptions
- FileUploadResult
- FileWriter
- Flags
- LocalFileSystem
- Metadata

パーミッション
-----------

### Android

#### app/res/xml/plugins.xml

    <plugin name="File" value="org.apache.cordova.FileUtils" />
    <plugin name="FileTransfer" value="org.apache.cordova.FileTransfer" />

#### app/AndroidManifest.xml

    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

### Bada

    パーミッションの設定は必要ありません。

### BlackBerry WebWorks

#### www/plugins.xml

    <plugin name="File" value="org.apache.cordova.file.FileManager" />
    <plugin name="FileTransfer" value="org.apache.cordova.http.FileTransfer" />

#### www/config.xml

    <feature id="blackberry.io.file" required="true" version="1.0.0.0" />
    <feature id="blackberry.utils"   required="true" version="1.0.0.0" />
    <feature id="blackberry.io.dir"  required="true" version="1.0.0.0" />
    <rim:permissions>
        <rim:permit>access_shared</rim:permit>
    </rim:permissions>

### iOS

#### App/Supporting Files/Cordova.plist

    <key>Plugins</key>
    <dict>
        <key>File</key>
        <string>CDVFile</string>
    </dict>

    <key>Plugins</key>
    <dict>
        <key>FileTransfer</key>
        <string>CDVFileTransfer</string>
    </dict>

### webOS

    パーミッションの設定は必要ありません。



File
====

このオブジェクトは一つのファイルの属性を含みます。

プロパティー
----------

- __name:__ ファイルの名前を表します。 _(DOMString)_
- __fullPath:__ ファイルの名前を含むフルパスを表します。 _(DOMString)_
- __type:__ ファイルの mime type を表します。 _(DOMString)_
- __lastModifiedDate:__ ファイルの最終更新日時を表します。 _(Date)_
- __size:__ ファイルのサイズをバイトで表します。 _(long)_

詳細
-------

この `File` オブジェクトは一つのファイルの属性を含みます。 `FileEntry` オブジェクトの __file__ メソッドを呼び出すことで、 File オブジェクトのインスタンスを取得できます。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7 (Mango)



FileReader
==========

FileReader はファイルの読み込みを行うオブジェクトです。

プロパティー
----------

- __readyState:__ 右の3種類の状態のいずれかを表します (EMPTY, LOADING, DONE)
- __result:__ 読み込まれたファイルのコンテンツを表します _(DOMString)_
- __error:__ エラー情報を表します _(FileError)_
- __onloadstart:__ 読み込み開始時に呼ばれる関数を表します _(Function)_
- __onprogress:__ 読込中に呼ばれ、進捗状況を報告する関数を表します (progess.loaded/progress.total) _(Function)_ - 現在サポートされていません
- __onload:__ 読み込みが成功したときに呼ばれる関数を表します _(Function)_
- __onabort:__ abort() メソッドを実行したときなど、 読み込みが強制終了したときに呼ばれる関数を表します _(Function)_
- __onerror:__ 読み込みが失敗したときに呼ばれる関数を表します _(Function)_
- __onloadend:__ 成功、失敗にかかわらずリクエストが完了した際に呼ばれる関数を表します _(Function)_

メソッド
-------

- __abort__: 読み込みを強制終了します
- __readAsDataURL__: ファイルを読み込み、データを Base64 エンコードされたデータ URL で返します
- __readAsText__: テキストファイルを読み込みます

詳細
-------

`FileReader` オブジェクトはデバイスのファイルシステムからファイルを読み込む際に使用します。ファイルはテキストもしくは Base64 でエンコードされた文字列として読み込まれます。また、 loadstart, progress, load, loadend, error や abort などのイベントを受け取るための独自のイベントリスナーを登録することも出来ます。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7 (Mango)

データ URL として読み込む場合
----------------

__パラメーター:__
- file - 読み込むファイルのフルパスを表します


使用例
-------------

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function(evt) {
            console.log("読み込み成功");
            console.log(evt.target.result);
        };
        reader.readAsDataURL(file);
    };

    var fail = function(evt) {
        console.log(error.code);
    };

    entry.file(win, fail);

テキストとして読み込む場合
------------

__パラメーター:__

- file - 読み込むファイルのフルパスを表します
- encoding - ファイルのコンテンツのエンコードを表します (デフォルト: UTF-8)

使用例
-------------

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function(evt) {
            console.log("読み込み成功");
            console.log(evt.target.result);
        };
        reader.readAsText(file);
    };

    var fail = function(evt) {
        console.log(error.code);
    };

    entry.file(win, fail);

Abort の例
-------------------

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function(evt) {
            console.log("読み込み成功");
            console.log(evt.target.result);
        };
        reader.readAsText(file);
        reader.abort();
    };

    function fail(error) {
        console.log(error.code);
    }

    entry.file(win, fail);

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>FileReader の使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // Cordova 準備完了
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
                console.log("データ URL として読み込み");
                console.log(evt.target.result);
            };
            reader.readAsDataURL(file);
        }

        function readAsText(file) {
            var reader = new FileReader();
            reader.onloadend = function(evt) {
                console.log("テキストとして読み込み");
                console.log(evt.target.result);
            };
            reader.readAsText(file);
        }

        function fail(evt) {
            console.log(evt.target.error.code);
        }

        </script>
      </head>
      <body>
        <h1>使用例</h1>
        <p>ファイルを読み込みます。</p>
      </body>
    </html>

iOS に関する注意点
----------
- __encoding__ パラメーターはサポートされておらず、常に UTF-8 エンコーディングが使われます。



FileWriter
==========

FileWriter はファイルへの書き込みを行うオブジェクトです。

プロパティー
----------

- __readyState:__ 右の3種類の状態のいずれかを表します (INIT, WRITING, DONE)
- __fileName:__ 書き込みの対象となるファイル名を表します _(DOMString)_
- __length:__ 書き込みの対象となるファイル名を表します _(long)_
- __position:__ ファイルポインタの現在の位置を表します _(long)_
- __error:__ エラー情報を表します _(FileError)_
- __onwritestart:__ 書き込み開始時に呼ばれる関数を表します _(Function)_
- __onprogress:__ ファイル書き込み中に呼ばれ、進捗状況を報告する関数を表します (progress.loaded/progress.total) _(Function)_ - 現在サポートされていません
- __onwrite:__ リクエストが成功したときに呼ばれる関数を表します _(Function)_
- __onabort:__ abort() メソッドを実行したときなど、 書き込みが強制終了したときに呼ばれる関数を表します _(Function)_
- __onerror:__ 書き込みが失敗したときに呼ばれる関数を表します _(Function)_
- __onwriteend:__ 成功、失敗にかかわらずリクエストが完了した際に呼ばれる関数を表します _(Function)_

メソッド
-------

- __abort__: 書き込みを中断します
- __seek__: ファイルポインタを指定したバイトまで移動します
- __truncate__: ファイルを指定した長さに切り詰めます
- __write__: ファイルにデータを UTF-8 エンコーディングで書き込みます

詳細
-------

`FileWriter` オブジェクトはデバイスのファイルシステムに書きこむ際に使用します。また、 writestart, progress, write, writeend, error や abort などのイベントを受け取るための独自のイベントリスナーを登録することも出来ます。

FileWriter は一つのファイルに対して使用されます。複数回の書き込みを行うこともできます。 FileWriter はファイルポインタの位置と length 属性を指定することができるので、ファイルのどの位置からでも書き込みを行うことができます。デフォルトではファイルの開始位置にポインタがセットされ、既存のデータを上書きしながら書き込みが行われます。書き込みをファイルの最終から始める場合は、 FileWriter のコンストラクタに true をオプションとして指定してください。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7 (Mango)

Seek の例
------------------------------

    function win(writer) {
        // ファイルポインタを EOF (ファイルの終端) に移動
        writer.seek(writer.length);
    };

    var fail = function(evt) {
        console.log(error.code);
    };

    entry.createWriter(win, fail);

Truncate の例
--------------------------

    function win(writer) {
        writer.truncate(10);
    };

    var fail = function(evt) {
        console.log(error.code);
    };

    entry.createWriter(win, fail);

Write の例
-------------------

    function win(writer) {
        writer.onwrite = function(evt) {
            console.log("書き込み成功");
        };
        writer.write("サンプルテキスト");
    };

    var fail = function(evt) {
        console.log(error.code);
    };

    entry.createWriter(win, fail);

Append の例
--------------------

    function win(writer) {
        writer.onwrite = function(evt) {
            console.log("書き込み成功");
        };
        writer.seek(writer.length);
        writer.write("付加テキスト);
    };

    var fail = function(evt) {
        console.log(error.code);
    };

    entry.createWriter(win, fail);

Abort の例
-------------------

    function win(writer) {
        writer.onwrite = function(evt) {
            console.log("書き込み成功");
        };
        writer.write("サンプルテキスト");
        writer.abort();
    };

    var fail = function(evt) {
        console.log(error.code);
    };

    entry.createWriter(win, fail);

詳細な使用例
------------
    <!DOCTYPE html>
    <html>
      <head>
        <title>FileWriter の使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova 準備完了
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
                console.log("ファイルの内容が 'some sample text' となりました");
                writer.truncate(11); 
                writer.onwriteend = function(evt) {
                    console.log("ファイルの内容が 'some sample' となりました");
                    writer.seek(4);
                    writer.write(" different text");
                    writer.onwriteend = function(evt){
                        console.log("ファイルの内容が 'some different text' となりました");
                    }
                };
            };
            writer.write("サンプルテキスト");
        }

        function fail(error) {
            console.log(error.code);
        }

        </script>
      </head>
      <body>
        <h1>使用例</h1>
        <p>ファイルに書き込みます。</p>
      </body>
    </html>



FileSystem
==========

このオブジェクトはファイルシステムを表します。

プロパティー
----------

- __name:__ ファイルシステムの名前を表します _(DOMString)_
- __root:__ ファイルシステムのルートディレクトリを表します _(DirectoryEntry)_

詳細
-------

`FileSystem` オブジェクトはファイルシステムの情報を表します。ファイルシステムの名前は既にあるファイルシステムに対して一意になります。 root プロパティーはファイルシステムのルートディレクトリを表す `DirectoryEntry` オブジェクトを保持します。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7 (Mango)

File System の使用例
-------------------------

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
        console.log(fileSystem.root.name);
    }

    // ファイルシステムをリクエスト
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, null);

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>File System の使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova 準備完了
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
- __setMetadata__: ディレクトリのメタデータをセットします
- __moveTo__: ファイルを、ファイルシステム内の別の場所に移動します
- __copyTo__: ファイルを、ファイルシステム内の別の場所にコピーします
- __toURL__: ファイルの位置特定に使用できる URL を返します
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
            parentName = parent.substring(parent.lastIndexOf('/')+1),
            parentEntry = new DirectoryEntry(parentName, parent);

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
            parentName = parent.substring(parent.lastIndexOf('/')+1),
            parentEntry = new DirectoryEntry(parentName, parent);

        // ファイルを新しいディレクトリにコピーし、名前付け替えます
        entry.copyTo(parentEntry, "file.copy", success, fail);
    }


toURL
-----

ファイルの位置特定に使用できる URL を返します。

__使用例__

    // このエントリーの URL を取得
    var fileURL = entry.toURL();
    console.log(fileURL);


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



DirectoryReader
===============

ディレクトリの中のファイルとディレクトリをリストアップするオブジェクトです。これは [W3C Directories and Systems](http://www.w3.org/TR/file-system-api/) の仕様書で定義されています。

メソッド
-------

- __readEntries__: ディレクトリの中のエントリを読み込みます


サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7 (Mango)

readEntries
-----------

このディレクトリの中のエントリを読み込みます。

__パラメーター:__

- __successCallback__ - FileEntry と DirectoryEntry オブジェクトの配列を渡すコールバック関数を表します _(Function)_
- __errorCallback__ - ディレクトリリストの取得時にエラーが起きた場合に呼び出されるコールバック関数を表します。 FileError オブジェクトを伴って呼び出されます _(Function)_

__使用例__

    function success(entries) {
        var i;
        for (i=0; i<entries.length; i++) {
            console.log(entries[i].name);
        }
    }

    function fail(error) {
        alert("コンテンツのリストアップ中にエラーが発生しました: " + error.code);
    }

    // directory readerの取得
    var directoryReader = dirEntry.createReader();

    // ディレクトリの中のすべてのエントリのリストを取得
    directoryReader.readEntries(success,fail);



FileTransfer
==========

FileTransfer オブジェクトはファイルをサーバーにアップロードまたはサーバからダウンロードする際に使用します。

プロパティー
----------

なし

メソッド
-------

- __upload__: サーバーにファイルを送信
- __download__: サーバーからファイルをダウンロード

詳細
-------

`FileTransfer` オブジェクトは HTTP マルチパート POST リクエストを使ってファイルをサーバーにアップロードする機能を提供します。このメソッドは HTTP と HTTPS の両方のプロトコルをサポートします。 upload メソッドに FileUploadOptions オブジェクトを渡すことで、任意のパラメーターを追加できます。アップロードが成功した場合 FileUploadResult オブジェクトとともに success コールバック関数が呼ばれます。エラーが発生した場合は FileTransferError オブジェクトとともに error コールバック関数が呼ばれます。
また、サーバーからファイルをダウンロードし保存することもできます (iOS と Android のみ) 。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7 (Mango)

upload
--------------

__パラメーター:__

- __filePath__ - デバイス内のファイルのフルパスを表します
- __server__ - ファイルを受け取るサーバーの URL を表します (encodeURI() を使用して既にエンコードされている必要があります)
- __successCallback__ - Metadata オブジェクトを伴って呼び出されるコールバック関数を表します _(Function)_
- __errorCallback__ - Metadata の取得時にエラーが起きた場合に呼び出されるコールバック関数を表します。 FileError オブジェクトを伴って呼び出されます _(Function)_
- __options__ - ファイル名や minetype などのオプションのパラメーターを表します

__使用例__

    // !! fileURI の値は有効なデバイス内の有効なテキストファイルの URI であるとみなします

    var win = function(r) {
        console.log("コード = " + r.responseCode);
        console.log("結果 = " + r.response);
        console.log("送信バイト数 = " + r.bytesSent);
    }

    var fail = function(error) {
        alert("エラーが発生しました: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
    }

    var options = new FileUploadOptions();
    options.fileKey="file";
    options.fileName=fileURI.substr(fileURI.lastIndexOf('/')+1);
    options.mimeType="text/plain";

    var params = new Object();
    params.value1 = "test";
    params.value2 = "param";

    options.params = params;

    var ft = new FileTransfer();
    ft.upload(fileURI, encodeURI("http://some.server.com/upload.php"), win, fail, options);

__詳細な使用例__

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>File Transfer の使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

            // Cordova の読み込み完了まで待機
            //
            document.addEventListener("deviceready", onDeviceReady, false);

            // Cordova 準備完了
            //
            function onDeviceReady() {

                // 写真をファイル URI として取得する場合
                navigator.camera.getPicture(uploadPhoto,
                                            function(message) { alert('写真の取得に失敗しました'); },
                                            { quality: 50,
                                            destinationType: navigator.camera.DestinationType.FILE_URI,
                                            sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY }
                                            );

            }

            function uploadPhoto(imageURI) {
                var options = new FileUploadOptions();
                options.fileKey="file";
                options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
                options.mimeType="image/jpeg";

                var params = new Object();
                params.value1 = "test";
                params.value2 = "param";

                options.params = params;

                var ft = new FileTransfer();
                ft.upload(imageURI, encodeURI("http://some.server.com/upload.php"), win, fail, options);
            }

            function win(r) {
                console.log("コード = " + r.responseCode);
                console.log("結果 = " + r.response);
                console.log("送信バイト数 = " + r.bytesSent);
            }

            function fail(error) {
                alert("エラーが発生しました: Code = " + error.code);
                console.log("upload error source " + error.source);
                console.log("upload error target " + error.target);
            }

         </script>
       </head>
       <body>
         <h1>使用例</h1>
         <p>ファイルアップロード</p>
       </body>
    </html>

iOS に関する注意点
----------

FileTransfer アップロードのためのヘッダーを設定:

__使用例__

    function win(r) {
        console.log("コード = " + r.responseCode);
        console.log("結果 = " + r.response);
        console.log("送信バイト数 = " + r.bytesSent);
    }

    function fail(error) {
        alert("エラーが発生しました: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
    }

    var uri = encodeURI("http://some.server.com/upload.php");

    var options = new FileUploadOptions();
    options.fileKey="file";
    options.fileName=fileURI.substr(fileURI.lastIndexOf('/')+1);
    options.mimeType="text/plain";

    var params = new Object();
    params.headers={'headerParam':'headerValue'};

    options.params = params;

    var ft = new FileTransfer();
    ft.upload(fileURI, uri, win, fail, options);

download
--------------

__パラメーター:__

- __source__ - ファイルを取得するサーバーの URL を表します (encodeURI() を使用して既にエンコードされている必要があります)
- __target__ - デバイス内のファイルのフルパスを表します
- __successCallback__ - FileEntry オブジェクトを伴って呼び出されるコールバック関数を表します _(Function)_
- __errorCallback__ - Metadata の取得時にエラーが起きた場合に呼び出されるコールバック関数を表します。 FileError オブジェクトを伴って呼び出されます _(Function)_

__使用例__

    // !! url はサーバー内の有効なファイルを指すことと filePath がデバイス内の有効な値であるとみなします

    var fileTransfer = new FileTransfer();
    var uri = encodeURI("http://some.server.com/download.php");

    fileTransfer.download(
        url,
        filePath,
        function(entry) {
            console.log("ダウンロード完了: " + entry.fullPath);
        },
        function(error) {
            console.log("download error source " + error.source);
            console.log("download error target " + error.target);
            console.log("upload error code" + error.code);
        }
    );



FileUploadOptions
========

`FileUploadOptions` オブジェクトは upload メソッドを実行する際に FileTransfer オブジェクトに渡して、追加のパラメーターとして設定する場合に使用します。

プロパティー
----------

- __fileKey:__ フォーム要素の名前を指定します。 デフォルトは "file" です (DOMString)
- __fileName:__ サーバーに保存する際のファイル名を指定します。 デフォルトは "image.jpg" です (DOMString)
- __mimeType:__ データの MIME 形式を指定します。 デフォルトは "image/jpeg" です (DOMString)
- __params:__ その他の HTTP リクエストで送信されるパラメーターを指定します (Object)
- __chunkedMode:__ アップロードにチャンクドストリーミングモードを使用するかを指定します。 デフォルトは "true" です (Boolean)


概要
-----------

`FileUploadOptions` オブジェクトは upload メソッドを実行する際に FileTransfer オブジェクトに渡して、追加のパラメーターとして設定する場合に使用します。

WP7 に関する注意点
---------

- __chunkedMode:__
    WP7 ではこの値は無視されます。



FileUploadResult
========

`FileUploadResult` オブジェクトは、 FileTransfer の upload メソッドの呼び出しが成功した時に、成功コールバック関数に渡されるオブジェクトです。

プロパティー
----------

- __bytesSent:__ 送信されたバイト数を表します (long)
- __responseCode:__ サーバーから返された HTTP のレスポンスコードを表します (long)
- __response:__ サーバーから返された HTTP のレスポンスを表します (DOMString)

概要
-----------

`FileUploadResult` オブジェクトは、 FileTransfer の upload メソッドの呼び出しが成功した時に、成功コールバック関数に渡されるオブジェクトです。

iOS に関する注意点
----------
- iOS では、成功コールバック関数に渡される FileUploadResult オブジェクトには、 responseCode も bytesSent も含まれません。



Flags
=====

このオブジェクトは、 `DirectoryEntry` の __getFile__ メソッドと __getDirectory__ メソッド (ファイルやディレクトリを取得または作成するメソッド) に渡される引数として使われます。

プロパティー
----------

- __create:__ もし対象のファイルまたはディレクトリが無かった場合、作成するかどうかを表します _(boolean)_
- __exclusive:__ このプロパティー単体では効果はありません。 create プロパティーと一緒に使います。もし対象のパスが既に存在した場合は、取得するのではなくファイルまたはディレクトリの作成に失敗します _(boolean)_

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7 (Mango)

使用例
-------------

    // data ディレクトリを取得します。もし存在しない場合は、作成します
    dataDir = fileSystem.root.getDirectory("data", {create: true});

    // lockfile.txt ファイルを、存在しない場合のみ作成します
    lockFile = dataDir.getFile("lockfile.txt", {create: true, exclusive: true});



LocalFileSystem
===============

このオブジェクトは、ファイルシステムのルートの取得方法を提供します。

メソッド
----------

- __requestFileSystem:__ ファイルシステムをリクエストします _(Function)_
- __resolveLocalFileSystemURI:__ ローカル URI を使用して DirectoryEntry または FileEntry を取得します _(Function)_

定数
---------

- `LocalFileSystem.PERSISTENT`: アプリやユーザーの許可なしに、ユーザエージェントのみでは削除されないような永続的なストレージを表します
- `LocalFileSystem.TEMPORARY`: 永続性が保証されていないようなストレージを表します

詳細
-------

`LocalFileSystem` オブジェクトのメソッドは __window__ オブジェクトに定義されています。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7 (Mango)

Request File Systemの使用例
---------------------------------

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
    }

    // ファイルシステムをリクエスト
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, onError);

Resolve Local File System URIの使用例
-------------------------------------------

    function onSuccess(fileEntry) {
        console.log(fileEntry.name);
    }

    window.resolveLocalFileSystemURI("file:///example.txt", onSuccess, onError);

詳細な使用例
------------


    <!DOCTYPE html>
    <html>
      <head>
        <title>Local File System の使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Cordova の読み込み完了まで待機
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova 準備完了
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
        <h1>使用例</h1>
        <p>Local File System</p>
      </body>
    </html>



Metadata
==========

ファイルやディレクトリの状態を提供します。

プロパティー
----------

- __modificationTime:__ ファイルまたはディレクトリの最終更新日時を表します _(Date)_

詳細
-------

`Metadata` オブジェクトは、ファイルやディレクトリの状態を表します。 `DirectoryEntry` または `FileEntry` の __getMetadata__ メソッドを呼び出すことで、 Metadata オブジェクトが取得できます。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7 (Mango)

使用例
-------------

    function win(metadata) {
        console.log("最終更新日: " + metadata.modificationTime);
    }

    // このエントリーの Metadata オブジェクトを取得
    entry.getMetadata(win, null);



FileError
========

`FileError` オブジェクトはエラーが発生した際に File API のメソッドに渡されます。

プロパティー
----------

- __code:__ 事前に定義された以下のエラーコードのうちの1つを表します

定数
---------

- `FileError.NOT_FOUND_ERR`
- `FileError.SECURITY_ERR`
- `FileError.ABORT_ERR`
- `FileError.NOT_READABLE_ERR`
- `FileError.ENCODING_ERR`
- `FileError.NO_MODIFICATION_ALLOWED_ERR`
- `FileError.INVALID_STATE_ERR`
- `FileError.SYNTAX_ERR`
- `FileError.INVALID_MODIFICATION_ERR`
- `FileError.QUOTA_EXCEEDED_ERR`
- `FileError.TYPE_MISMATCH_ERR`
- `FileError.PATH_EXISTS_ERR`

概要
-----------

`FileError` オブジェクトは File API のあらゆるエラーコールバック関数への唯一のパラメーターです。開発者はエラーのタイプを特定するために、 code プロパティーを確認する必要があります。



FileTransferError
========

`FileTransferError` オブジェクトは、エラーが発生したときエラーコールバック関数に渡されます。

プロパティー
----------

- __code__ 事前に定義された以下のエラーコードのうちの1つを表します (Number)
- __source__ ソースの URI を表します (String)
- __target__ ターゲットの URI を表します (String)
- __http_status__ HTTP のステータスコードを表します。この属性は、レスポンスコードが HTTP コネクションから返されたときのみ有効です (Number)

定数
---------

- `FileTransferError.FILE_NOT_FOUND_ERR`
- `FileTransferError.INVALID_URL_ERR`
- `FileTransferError.CONNECTION_ERR`

概要
-----------

`FileTransferError` オブジェクトは、ファイルアップロードまたはダウンロード時にエラーが発生したときエラーコールバック関数に渡されます。

