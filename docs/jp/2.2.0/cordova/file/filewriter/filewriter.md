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

FileWriter はファイルへの書き込みを行うオブジェクトです。

プロパティー
----------

- __readyState:__ 右の3種類の状態のいずれかを表します (INIT, WRITING, DONE)
- __fileName:__ 書き込みの対象となるファイル名を表します _(DOMString)_
- __length:__ 書き込みの対象となるファイル名を表します _(long)_
- __position:__ ファイルポインタの現在の位置を表します _(long)_
- __error:__ エラー情報を表します _(FileError)_
- __onwritestart:__ 書き込み開始時に呼ばれる関数を表します _(Function)_
- __onprogress:__ ファイル書き込み中に呼ばれ、進捗状況を報告する関数を表します (progess.loaded/progress.total) _(Function)_ - 現在サポートされていません
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

        <script type="text/javascript" charset="utf-8" src="cordova-2.2.0.js"></script>
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
