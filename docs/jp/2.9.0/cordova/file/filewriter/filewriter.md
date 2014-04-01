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

FileWriter
==========

ファイルへの書き込みを行うオブジェクトです。

プロパティー
----------

- __readyState__: 右の3種類の状態のいずれかを表します (`INIT`, `WRITING`, `DONE`)
- __fileName__: 書き込みの対象となるファイル名を表します _(DOMString)_
- __length__: 書き込みの対象となるファイル名を表します _(long)_
- __position__: ファイルポインタの現在の位置を表します _(long)_
- __error__: エラー情報を表します _(FileError)_
- __onwritestart__: 書き込み開始時に呼ばれる関数を表します _(Function)_
- __onwrite__: リクエストが成功したときに呼ばれる関数を表します _(Function)_
- __onabort__: abort() メソッドを実行したときなど、 書き込みが強制終了したときに呼ばれる関数を表します _(Function)_
- __onerror__: 書き込みが失敗したときに呼ばれる関数を表します _(Function)_
- __onwriteend__: 成功、失敗にかかわらずリクエストが完了した際に呼ばれる関数を表します _(Function)_

以下のプロパティはサポートされていません:

- __onprogress__: ファイル書き込み中に呼ばれ、進捗状況を報告する関数を表します (progess.loaded/progress.total) _(Function)_ - 現在サポートされていません

メソッド
-------

- __abort__: 書き込みを中断します
- __seek__: ファイルポインタを指定したバイトまで移動します
- __truncate__: ファイルを指定した長さに切り詰めます
- __write__: ファイルにデータを書き込みます

詳細
-------

`FileWriter` オブジェクトはデバイスのファイルシステムに UTF-8 で書きこむ際に使用します。また、 `writestart`, `progress`, `write`, `writeend`, `error` や `abort` などのイベントを受け取るための独自のイベントリスナーを登録することも出来ます。

各 `FileWriter` は一つのファイルに対して使用されます。複数回の書き込みを行うこともできます。 `FileWriter` はファイルポインタの位置と `length` 属性を指定することができるので、ファイルのどの位置からでも書き込みを行うことができます。デフォルトではファイルの開始位置にポインタがセットされ、既存のデータを上書きしながら書き込みが行われます。書き込みをファイルの最終から始める場合は、 FileWriter のコンストラクタに `true` をオプションとして指定してください。

テキストデータは以下のプラットーフォーム上でサポートされています。テキストはファイルシステムに書き込まれる前に UTF-8 としてエンコードされます。いくつかのプラットフォームではバイナリデータをサポートしており、 ArrayBuffer や Blob で書き込めます。

サポートされているプラットフォーム
-------------------

### テキストとバイナリをサポートしているプラットフォーム

- Android
- iOS

### テキストのみサポートしているプラットフォーム

- BlackBerry WebWorks (OS 5.0 以上)
- Windows Phone 7 and 8
- Windows 8

Seek の例
------------------------------

    function win(writer) {
        // ファイルポインタを EOF (ファイルの終端) に移動
        writer.seek(writer.length);
    };

    var fail = function(error) {
        console.log(error.code);
    };

    entry.createWriter(win, fail);

Truncate の例
--------------------------

    function win(writer) {
        writer.truncate(10);
    };

    var fail = function(error) {
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

    var fail = function(error) {
        console.log(error.code);
    };

    entry.createWriter(win, fail);

バイナリ書き込みの例
--------------------------

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


Append の例
--------------------

    function win(writer) {
        writer.onwrite = function(evt) {
            console.log("書き込み成功");
        };
        writer.seek(writer.length);
        writer.write("付加テキスト);
    };

    var fail = function(error) {
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

    var fail = function(error) {
        console.log(error.code);
    };

    entry.createWriter(win, fail);

詳細な使用例
------------
    <!DOCTYPE html>
    <html>
      <head>
        <title>FileWriter の使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-x.x.x.js"></script>
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
