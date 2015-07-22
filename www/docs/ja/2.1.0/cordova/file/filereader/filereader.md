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

    var fail = function(error) {
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

    var fail = function(error) {
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

        <script type="text/javascript" charset="utf-8" src="cordova-2.1.0.js"></script>
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

        function fail(error) {
            console.log(error.code);
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
