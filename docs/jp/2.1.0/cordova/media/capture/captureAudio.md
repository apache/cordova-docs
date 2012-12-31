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

capture.captureAudio
====================

> オーディオ録音アプリを起動し、キャプチャーしたファイルの情報を返します。

    navigator.device.capture.captureAudio(
        CaptureCB captureSuccess, CaptureErrorCB captureError, [CaptureAudioOptions options]
    );

概要
-----------

このメソッドは、デバイスのデフォルトのオーディオ録音アプリを使用して、オーディオをキャプチャーするための非同期操作を開始します。この操作はユーザーに、単一セッションで複数のビデオのキャプチャーをユーザーに許可します。

キャプチャー操作は、ユーザーがオーディオ録音アプリを終了するか、 CaptureAudioOptions の中の __limit__ パラメーターで指定された最大録音回数に達した場合に終了します。もし __limit__ パラメーターが指定されていない場合は、デフォルト値である1が使用され、キャプチャー操作はユーザーが1度オーディオを録音した後に終了します。

キャプチャー操作が終了した時、それぞれのオーディオ録音ファイル情報が書かれた MediaFile オブジェクトの配列を伴った CaptureCB コールバック関数を呼び出します。もしオーディオがキャプチャーされる前にユーザーによって操作が終了されたら、 CaptureError.`CAPTURE_NO_MEDIA_FILES` エラーコードを持つ CaptureError オブジェクトを伴った CaptureErrorCB コールバック関数が呼び出されます。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7 (Mango)

使用例
-------------

    // capture コールバック関数
    var captureSuccess = function(mediaFiles) {
        var i, path, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            path = mediaFiles[i].fullPath;
            // ファイルを使用した処理
        }
    };

    // capture エラーコールバック関数
    var captureError = function(error) {
        navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    };

    // オーディオキャプチャーを開始
    navigator.device.capture.captureAudio(captureSuccess, captureError, {limit:2});

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>オーディオキャプチャー</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.1.0.js"></script>
        <script type="text/javascript" charset="utf-8" src="json2.js"></script>
        <script type="text/javascript" charset="utf-8">

        // キャプチャー操作の正常終了時の処理
        //
        function captureSuccess(mediaFiles) {
            var i, len;
            for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                uploadFile(mediaFiles[i]);
            }
        }

        // エラー発生時の処理
        //
        function captureError(error) {
            var msg = 'キャプチャー中にエラーが発生しました: ' + error.code;
            navigator.notification.alert(msg, null, 'エラー');
        }

        // ボタンがクリックされた場合の処理
        //
        function captureAudio() {
            // デバイスのオーディオ録音アプリを起動し、
            // ユーザーに2つまでオーディオの録音を許可する
            navigator.device.capture.captureAudio(captureSuccess, captureError, {limit: 2});
        }

        // ファイルをサーバーにアップロード
        function uploadFile(mediaFile) {
            var ft = new FileTransfer(),
                path = mediaFile.fullPath,
                name = mediaFile.name;

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

- Cordova for BlackBerry WebWorks は、オーディオ録音のために RIM より提供されている __Voice Notes Recorder__ の起動を試みます。デベロッパーは、もしアプリがインストールされていない場合は CaptureError.`CAPTURE_NOT_SUPPORTED` エラーを受け取ります。

iOS に関する注意点
----------

- iOS にはデフォルトのオーディオ録音アプリがないため、シンプルなユーザーインターフェースが提供されます。

Windows Phone 7 に関する注意点
----------

- Windows Phone 7 にはデフォルトのオーディオ録音アプリがないため、シンプルなユーザーインターフェースが提供されます。
