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

# capture.captureImage

> <a href="../../camera/camera.html">カメラ</a> アプリケーションを起動し、<a href="capture.html">キャプチャ</a>したイメージ <a href="../../file/fileobj/fileobj.html">ファイル</a>に関する情報を返します。

    navigator.device.capture.captureImage(
        <a href="CaptureCB.html">CaptureCB</a> captureSuccess, <a href="<a href="CaptureError.html">CaptureError</a>CB.html"><a href="CaptureError.html">CaptureError</a>CB</a> captureError, [<a href="captureImageOptions.html">CaptureImageOptions</a> options]
    );
    

## 説明

<a href="../../device/device.html">デバイス</a>の<a href="../../camera/camera.html">カメラ</a> アプリケーションを使用して画像を<a href="capture.html">キャプチャ</a>する非同期操作を開始します。操作では、単一のセッションで 1 つ以上のイメージを<a href="capture.html">キャプチャ</a>することができます。

<a href="capture.html">キャプチャ</a>操作終了いずれかのユーザーが<a href="../../inappbrowser/inappbrowser.html">閉じる</a>と、<a href="../../camera/camera.html">カメラ</a> アプリケーションまたは録音で指定された最大数 `<a href="captureAudioOptions.html">CaptureAudioOptions</a>.limit` に達した。 場合ない `limit` 値が指定されて、既定の 1 つ (1)、<a href="capture.html">キャプチャ</a>操作終了後、ユーザーは単一のイメージを<a href="capture.html">キャプチャ</a>します。

<a href="capture.html">キャプチャ</a>操作が完了したら、それを呼び出す、 `<a href="CaptureCB.html">CaptureCB</a>` の配列がコールバック `MediaFile` 各<a href="capture.html">キャプチャ</a>されたイメージ <a href="../../file/fileobj/fileobj.html">ファイル</a>を記述するオブジェクト。 ユーザーは、イメージを<a href="capture.html">キャプチャ</a>する前に操作が終了した場合、 `<a href="<a href="CaptureError.html">CaptureError</a>CB.html"><a href="CaptureError.html">CaptureError</a>CB</a>` コールバックで実行する、 `<a href="CaptureError.html">CaptureError</a>` オブジェクトの特色、 `<a href="CaptureError.html">CaptureError</a>.CAPTURE_NO_MEDIA_FILES` エラー コード。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 7 と 8
*   Windows 8

## Windows Phone 7 の癖

Zune を介してお使いの<a href="../../device/device.html">デバイス</a>が<a href="../../connection/connection.html">接続</a>されているネイティブ <a href="../../camera/camera.html">カメラ</a> アプリケーションを呼び出すと、動作しませんし、エラー コールバックを実行します。

## 簡単な例

    // capture callback
    var captureSuccess = function(mediaFiles) {
        var i, path, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            path = mediaFiles[i].fullPath;
            // do something interesting with the file
        }
    };
    
    // capture error callback
    var captureError = function(error) {
        navigator.<a href="../../notification/notification.alert.html">notification.alert</a>('Error code: ' + error.code, null, 'Capture Error');
    };
    
    // start image capture
    navigator.device.capture.captureImage(captureSuccess, captureError, {limit:2});
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Capture Image</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8" src="json2.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Called when capture operation is finished
        //
        function captureSuccess(mediaFiles) {
            var i, len;
            for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                uploadFile(mediaFiles[i]);
            }
        }
    
        // Called if something bad happens.
        //
        function captureError(error) {
            var msg = 'An error occurred during capture: ' + error.code;
            navigator.<a href="../../notification/notification.alert.html">notification.alert</a>(msg, null, 'Uh oh!');
        }
    
        // A button will call this function
        //
        function captureImage() {
            // Launch device camera application,
            // allowing user to capture up to 2 images
            navigator.device.capture.captureImage(captureSuccess, captureError, {limit: 2});
        }
    
        // Upload files to server
        function uploadFile(mediaFile) {
            var ft = new FileTransfer(),
                path = mediaFile.fullPath,
                name = mediaFile.name;
    
            ft.upload(path,
                "http://my.domain.com/upload.php",
                function(result) {
                    console.log('Upload success: ' + result.responseCode);
                    console.log(result.bytesSent + ' bytes sent');
                },
                function(error) {
                    console.log('Error uploading file ' + path + ': ' + error.code);
                },
                { fileName: name });
        }
    
        </script>
        </head>
        <body>
            <button onclick="captureImage();">Capture Image</button> <br>
        </body>
    </html>