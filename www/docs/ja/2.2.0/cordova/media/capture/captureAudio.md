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

capture.captureAudio
====================

> オーディオ録音アプリを起動し、キャプチャーしたファイルの情報を返します。

    navigator.device.capture.captureAudio(
        <a href="<a href="capture.html">Capture</a>CB.html"><a href="capture.html">Capture</a>CB</a> captureSuccess, <a href="capture.html">Capture</a>ErrorCB captureError, [<a href="capture.html">Capture</a>AudioOptions options]
    );

概要
-----------

このメソッドは、デバイスのデフォルトのオーディオ録音アプリを使用して、オーディオをキャプチャーするための非同期操作を開始します。この操作はユーザーに、単一セッションで複数のビデオのキャプチャーをユーザーに許可します。

キャプチャー操作は、ユーザーがオーディオ録音アプリを終了するか、 <a href="capture.html">Capture</a>AudioOptions の中の __limit__ パラメーターで指定された最大録音回数に達した場合に終了します。もし __limit__ パラメーターが指定されていない場合は、デフォルト値である1が使用され、キャプチャー操作はユーザーが1度オーディオを録音した後に終了します。

キャプチャー操作が終了した時、それぞれのオーディオ録音ファイル情報が書かれた <a href="<a href="../media.html">Media</a><a href="../../file/fileobj/fileobj.html">File</a>.html"><a href="../media.html">Media</a><a href="../../file/fileobj/fileobj.html">File</a></a> オブジェクトの配列を伴った <a href="<a href="capture.html">Capture</a>CB.html"><a href="capture.html">Capture</a>CB</a> コールバック関数を呼び出します。もしオーディオがキャプチャーされる前にユーザーによって操作が終了されたら、 <a href="capture.html">Capture</a>Error.`CAPTURE_NO_MEDIA_FILES` エラーコードを持つ <a href="capture.html">Capture</a>Error オブジェクトを伴った <a href="capture.html">Capture</a>ErrorCB コールバック関数が呼び出されます。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7 (Mango)

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

    // オーディオキャプチャーを開始
    navigator.device.capture.captureAudio(captureSuccess, captureError, {limit:2});

詳細な<a href="../../storage/storage.opendatabase.html">使用例</a>
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>オーディオキャプチャー</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.2.0.js"></script>
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
        function captureAudio() {
            // デバイスのオーディオ録音アプリを起動し、
            // ユーザーに2つまでオーディオの録音を許可する
            navigator.device.capture.captureAudio(captureSuccess, captureError, {limit: 2});
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
            <button onclick="captureAudio();">オーディオキャプチャー</button> <br>
        </body>
    </html>

BlackBerry WebWorks に関する注意点
--------------------------

- Cordova for BlackBerry WebWorks は、オーディオ録音のために RIM より提供されている __Voice Notes Recorder__ の起動を試みます。デベロッパーは、もしアプリがインストールされていない場合は <a href="capture.html">Capture</a>Error.`CAPTURE_NOT_SUPPORTED` エラーを受け取ります。

iOS に関する注意点
----------

- iOS にはデフォルトのオーディオ録音アプリがないため、シンプルなユーザーインターフェースが提供されます。

Windows Phone 7 に関する注意点
----------

- Windows Phone 7 にはデフォルトのオーディオ録音アプリがないため、シンプルなユーザーインターフェースが提供されます。
