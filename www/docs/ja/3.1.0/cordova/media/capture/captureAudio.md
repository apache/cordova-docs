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

# capture.captureAudio

> オーディオ レコーダー アプリケーションを起動し、<a href="capture.html">キャプチャ</a>したオーディオ クリップ <a href="../../file/fileobj/fileobj.html">ファイル</a>に関する情報を返します。

    navigator.device.capture.captureAudio(
        <a href="CaptureCB.html">CaptureCB</a> captureSuccess, <a href="<a href="CaptureError.html">CaptureError</a>CB.html"><a href="CaptureError.html">CaptureError</a>CB</a> captureError,  [<a href="captureAudioOptions.html">CaptureAudioOptions</a> options]
    );
    

## 説明

オーディオ録音<a href="../../device/device.html">デバイス</a>の既定のオーディオ録音アプリケーションを使用して<a href="capture.html">キャプチャ</a>する非同期操作を開始します。 操作を単一のセッションで複数の録音を<a href="capture.html">キャプチャ</a>する<a href="../../device/device.html">デバイス</a>のユーザーことができます。

<a href="capture.html">キャプチャ</a>操作が終了、ユーザー アプリケーション、または録音で指定された最大数の録音が終了すると `<a href="captureAudioOptions.html">CaptureAudioOptions</a>.limit` に達した。 いいえの場合 `limit` パラメーターの値が指定されて、既定の 1 つ (1)、<a href="capture.html">キャプチャ</a>操作終了後、ユーザーが単一のオーディオ クリップを録音します。

<a href="capture.html">キャプチャ</a>操作が完了すると、 `CaptureCallback` の配列を実行 `MediaFile` オーディオ クリップ <a href="../../file/fileobj/fileobj.html">ファイル</a>を<a href="capture.html">キャプチャ</a>してそれぞれを記述するオブジェクトします。 オーディオ クリップを<a href="capture.html">キャプチャ</a>する前に、ユーザーが操作を終了した場合、 `<a href="CaptureError.html">CaptureError</a>Callback` で実行する、 `<a href="CaptureError.html">CaptureError</a>` オブジェクト、特色、 `<a href="CaptureError.html">CaptureError</a>.CAPTURE_NO_MEDIA_FILES` のエラー コード。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 7 と 8
*   Windows 8

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
    
    // start audio capture
    navigator.device.capture.captureAudio(captureSuccess, captureError, {limit:2});
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>Capture Audio</title>
    
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
        function captureAudio() {
            // Launch device audio recording application,
            // allowing user to capture up to 2 audio clips
            navigator.device.capture.captureAudio(captureSuccess, captureError, {limit: 2});
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
            <button onclick="captureAudio();">Capture Audio</button> <br>
        </body>
    </html>
    

## ブラックベリー WebWorks 癖

*   BlackBerry の WebWorks のコルドバ**声ノート レコーダー**アプリケーションを起動し、リム、によって提供されるオーディオ録音を<a href="capture.html">キャプチャ</a>しようとします。 アプリは受け取ります、 `<a href="CaptureError.html">CaptureError</a>.CAPTURE_NOT_SUPPORTED` 、アプリケーションが<a href="../../device/device.html">デバイス</a>にインストールされていない場合はエラー コード。

## iOS の癖

*   iOS に既定のオーディオ録音アプリケーションがない単純なユーザー インターフェイスが提供されます。

## Windows Phone 7 と 8 癖

*   Windows Phone 7 シンプルなユーザー インターフェイスが提供されるので、既定のオーディオ録音アプリケーションはありません。