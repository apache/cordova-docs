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

capture.captureVideo
====================

> ビデオ録画アプリを起動し、キャプチャーしたビデオファイルの情報を返します。

    navigator.device.capture.captureVideo(
        <a href="<a href="capture.html">Capture</a>CB.html"><a href="capture.html">Capture</a>CB</a> captureSuccess, <a href="capture.html">Capture</a>ErrorCB captureError, [<a href="capture.html">Capture</a>VideoOptions options]
    );

概要
-----------

このメソッドは、デバイスのビデオ録画アプリを使用して、ビデオをキャプチャーするための非同期操作を開始します。この操作はユーザーに、単一セッションで複数のビデオのキャプチャーをユーザーに許可します。

キャプチャー操作は、ユーザーがビデオ録画アプリを終了するか、 <a href="capture.html">Capture</a>VideoOptions の中の __limit__ パラメーターで指定された最大録画回数に達した場合に終了します。もし __limit__ パラメーターが指定されていない場合は、デフォルト値である1が使用され、キャプチャー操作はユーザーが1度ビデオを録画した後に終了します。

キャプチャー操作が終了した時、それぞれのビデオ録画ファイル情報が書かれた <a href="<a href="../media.html">Media</a><a href="../../file/fileobj/fileobj.html">File</a>.html"><a href="../media.html">Media</a><a href="../../file/fileobj/fileobj.html">File</a></a> オブジェクトの配列を伴った <a href="<a href="capture.html">Capture</a>CB.html"><a href="capture.html">Capture</a>CB</a> コールバック関数を呼び出します。もしオーディオがキャプチャーされる前にユーザーによって操作が終了されたら、 <a href="capture.html">Capture</a>Error.`CAPTURE_NO_MEDIA_FILES` エラーコードを持つ <a href="capture.html">Capture</a>Error オブジェクトを伴った <a href="capture.html">Capture</a>ErrorCB コールバック関数が呼び出されます。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7 (Mango)
- Bada 2.x

<a href="../../storage/storage.opendatabase.html">使用例</a>
-------------

    // capture コールバック関数
    var captureSuccess = function(media<a href="../../file/fileobj/fileobj.html">File</a>s) {
        var i, path, len;
        for (i = 0, len = media<a href="../../file/fileobj/fileobj.html">File</a>s.length; i < len; i += 1) {
            path = media<a href="../../file/fileobj/fileobj.html">File</a>s[i].fullPath;
            // ファイルを使用した処理
        }
    };

    // capture エラーコールバック関数
    var captureError = function(error) {
        navigator.<a href="../../notification/notification.alert.html">notification.alert</a>('Error code: ' + error.code, null, '<a href="capture.html">Capture</a> Error');
    };

    // ビデオキャプチャーを開始
    navigator.device.capture.captureVideo(captureSuccess, captureError, {limit:2});

詳細な<a href="../../storage/storage.opendatabase.html">使用例</a>
------------

    <!DOCTYPE html>
    <html>
        <head>
        <title>ビデオキャプチャー</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.1.0.js"></script>
        <script type="text/javascript" charset="utf-8" src="json2.js"></script>
        <script type="text/javascript" charset="utf-8">

        // キャプチャー操作の正常終了時の処理
        //
        function captureSuccess(media<a href="../../file/fileobj/fileobj.html">File</a>s) {
            var i, len;
            for (i = 0, len = media<a href="../../file/fileobj/fileobj.html">File</a>s.length; i < len; i += 1) {
                upload<a href="../../file/fileobj/fileobj.html">File</a>(media<a href="../../file/fileobj/fileobj.html">File</a>s[i]);
            }
        }

        // エラー発生時の処理
        //
        function captureError(error) {
            var msg = 'キャプチャー中にエラーが発生しました: ' + error.code;
            navigator.<a href="../../notification/notification.alert.html">notification.alert</a>(msg, null, 'エラー');
        }

        // ボタンがクリックされた場合の処理
        //
        function captureVideo() {
            // デバイスのビデオ録画アプリを起動し、
            // ユーザーに2つまでビデオの録画を許可する
            navigator.device.capture.captureVideo(captureSuccess, captureError, {limit: 2});
        }

        // ファイルをサーバーにアップロード
        function upload<a href="../../file/fileobj/fileobj.html">File</a>(media<a href="../../file/fileobj/fileobj.html">File</a>) {
            var ft = new <a href="../../file/filetransfer/filetransfer.html"><a href="../../file/fileobj/fileobj.html">File</a>Transfer</a>(),
                path = media<a href="../../file/fileobj/fileobj.html">File</a>.fullPath,
                name = media<a href="../../file/fileobj/fileobj.html">File</a>.name;

            ft.upload(path,
                "http://my.domain.com/upload.php",
                function(result) {
                    console.log('アップロード成功: ' + result.responseCode);
                    console.log(result.bytesSent + ' バイト送信');
                },
                function(error) {
                    console.log('ファイルのアップロードに失敗 ' + path + ': ' + error.code);
                },
                { fileName: name });
        }

        </script>
      </head>
      <body>
        <button onclick="captureVideo();">ビデオキャプチャー</button> <br>
      </body>
    </html>

BlackBerry WebWorks に関する注意点
--------------------------

- Cordova for BlackBerry WebWorks は、ビデオ録画のために RIM より提供されている __Video Recorder__ の起動を試みます。デベロッパーは、もしアプリがインストールされていない場合は <a href="capture.html">Capture</a>Error.`CAPTURE_NOT_SUPPORTED` エラーを受け取ります。

Bada 2.x に関する注意点
---------------

Bada は _captureVideo_ を他のデバイスと同様にサポートします。しかしながら、カメラアプリを起動せずにビデオや画像を webview 内でキャプチャー出来る _別の_ モードが存在します。このモードを使うためには、以下の手順が必要です:

1. _&#60;div&#62;_ 要素をドキュメントのどこかに作成し、 "preview" といったような id を付与します

        <div id="preview"></div>

2. カメラプレビューを以下のメソッドで初期化します

        navigator.camera.showPreview("preview");

3. プレビューを取得した後、以下のことが可能です

    3.1 ビデオのキャプチャーを開始

        navigator.capture.startVideo<a href="capture.html">Capture</a>(success, fail, {duration: 5000, destination<a href="../../file/fileobj/fileobj.html">File</a>name: "videos/a.3gp"});

    3.2 ビデオのキャプチャーを停止

        navigator.capture.stopVideo<a href="capture.html">Capture</a>();

3. 以下のメソッドでカメラプレビュー画面を隠します

        navigator.camera.hidePreview("preview");

