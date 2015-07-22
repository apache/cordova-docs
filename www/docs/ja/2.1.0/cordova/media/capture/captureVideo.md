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

capture.captureVideo
====================

> ビデオ録画アプリを起動し、キャプチャーしたビデオファイルの情報を返します。

    navigator.device.capture.captureVideo(
        CaptureCB captureSuccess, CaptureErrorCB captureError, [CaptureVideoOptions options]
    );

概要
-----------

このメソッドは、デバイスのビデオ録画アプリを使用して、ビデオをキャプチャーするための非同期操作を開始します。この操作はユーザーに、単一セッションで複数のビデオのキャプチャーをユーザーに許可します。

キャプチャー操作は、ユーザーがビデオ録画アプリを終了するか、 CaptureVideoOptions の中の __limit__ パラメーターで指定された最大録画回数に達した場合に終了します。もし __limit__ パラメーターが指定されていない場合は、デフォルト値である1が使用され、キャプチャー操作はユーザーが1度ビデオを録画した後に終了します。

キャプチャー操作が終了した時、それぞれのビデオ録画ファイル情報が書かれた MediaFile オブジェクトの配列を伴った CaptureCB コールバック関数を呼び出します。もしオーディオがキャプチャーされる前にユーザーによって操作が終了されたら、 CaptureError.`CAPTURE_NO_MEDIA_FILES` エラーコードを持つ CaptureError オブジェクトを伴った CaptureErrorCB コールバック関数が呼び出されます。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7 (Mango)
- Bada 2.x

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

    // ビデオキャプチャーを開始
    navigator.device.capture.captureVideo(captureSuccess, captureError, {limit:2});

詳細な使用例
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
        function captureVideo() {
            // デバイスのビデオ録画アプリを起動し、
            // ユーザーに2つまでビデオの録画を許可する
            navigator.device.capture.captureVideo(captureSuccess, captureError, {limit: 2});
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
        <button onclick="captureVideo();">ビデオキャプチャー</button> <br>
      </body>
    </html>

BlackBerry WebWorks に関する注意点
--------------------------

- Cordova for BlackBerry WebWorks は、ビデオ録画のために RIM より提供されている __Video Recorder__ の起動を試みます。デベロッパーは、もしアプリがインストールされていない場合は CaptureError.`CAPTURE_NOT_SUPPORTED` エラーを受け取ります。

Bada 2.x に関する注意点
---------------

Bada は _captureVideo_ を他のデバイスと同様にサポートします。しかしながら、カメラアプリを起動せずにビデオや画像を webview 内でキャプチャー出来る _別の_ モードが存在します。このモードを使うためには、以下の手順が必要です:

1. _&#60;div&#62;_ 要素をドキュメントのどこかに作成し、 "preview" といったような id を付与します

        <div id="preview"></div>

2. カメラプレビューを以下のメソッドで初期化します

        navigator.camera.showPreview("preview");

3. プレビューを取得した後、以下のことが可能です

    3.1 ビデオのキャプチャーを開始

        navigator.capture.startVideoCapture(success, fail, {duration: 5000, destinationFilename: "videos/a.3gp"});

    3.2 ビデオのキャプチャーを停止

        navigator.capture.stopVideoCapture();

3. 以下のメソッドでカメラプレビュー画面を隠します

        navigator.camera.hidePreview("preview");

