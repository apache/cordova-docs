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


Capture
=======

> デバイスのオーディオ、イメージ、ビデオキャプチャー機能への制御を提供します。

オブジェクト
-------

- Capture
- CaptureAudioOptions
- CaptureImageOptions
- CaptureVideoOptions
- CaptureCB
- CaptureErrorCB
- ConfigurationData
- MediaFile
- MediaFileData

メソッド
-------

- capture.captureAudio
- capture.captureImage
- capture.captureVideo
- MediaFile.getFormatData

スコープ
-----

__capture__ オブジェクトは __navigator.device__ オブジェクトに割り当てられており、そのためグローバルスコープです。

    // グローバル capture オブジェクト
    var capture = navigator.device.capture;

プロパティー
----------

- __supportedAudioModes:__ デバイスによってサポートされているオーディオ録音のフォーマットです。 (ConfigurationData[])
- __supportedImageModes:__ デバイスによってサポートされている記録用の画像サイズやフォーマットです。 (ConfigurationData[])
- __supportedVideoModes:__ デバイスによってサポートされている記録用のビデオ解像度やフォーマットです。 (ConfigurationData[])

メソッド
-------

- capture.captureAudio: オーディオ録音のために、デバイスのオーディオ録音アプリを起動します。
- capture.captureImage: 画像取得のために、デバイスのカメラアプリを起動します。
- capture.captureVideo: ビデオ録画のために、デバイスのビデオ録画アプリを起動します。


サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7 (Mango)

パーミッション
-----------

### Android

#### app/res/xml/plugins.xml

    <plugin name="Capture" value="org.apache.cordova.Capture"/>

#### app/AndroidManifest.xml

    <uses-permission android:name="android.permission.RECORD_AUDIO" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

### Bada

#### manifest.xml

    <Privilege>
        <Name>RECORDING</Name>
    </Privilege>

### BlackBerry WebWorks

#### www/plugins.xml

    <plugin name="Capture" value="org.apache.cordova.capture.MediaCapture" />

#### www/config.xml

    <feature id="blackberry.system"  required="true" version="1.0.0.0" />
    <feature id="blackberry.io.file" required="true" version="1.0.0.0" />

### iOS

#### App/Supporting Files/Cordova.plist

    <key>Plugins</key>
    <dict>
        <key>Capture</key>
        <string>CDVCapture</string>
    </dict>

### webOS

    パーミッションの設定は必要ありません。

### Windows Phone

#### Properties/WPAppManifest.xml

    <Capabilities>
        <Capability Name="ID_CAP_MEDIALIB" />
        <Capability Name="ID_CAP_MICROPHONE" />
        <Capability Name="ID_HW_FRONTCAMERA" />
        <Capability Name="ID_CAP_ISV_CAMERA" />
        <Capability Name="ID_CAP_CAMERA" />
    </Capabilities>



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

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
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



CaptureAudioOptions
===================

> オーディオキャプチャーのオプションをカプセル化します。

プロパティー
----------

- __limit:__ 一つのキャプチャー操作で録音できるオーディオクリップの最大値を表します。値は1以上の必要があります (デフォルトは1です) 。
- __duration:__ オーディオクリップの最大録音時間を秒で表します。
- __mode:__ 選択されたオーディオのモードを表します。値は `capture.supportedAudioModes` の中の一つである必要があります。

使用例
-------------

    // キャプチャー操作時のオーディオクリップの最大値を3に制限、最大録音時間を10秒に設定
    var options = { limit: 3, duration: 10 };

    navigator.device.capture.captureAudio(captureSuccess, captureError, options);

Android に関する注意点
--------------

- __duration__ パラメーターはサポートされていません。録画時間をプログラム的に制限することは出来ません。
- __mode__ パラメーターはサポートされていません。録音のフォーマットをプログラム的に変更することは出来ません。録音は Adaptive Multi-Rate (AMR) フォーマット (audio/amr) を使用してエンコードされます。

BlackBerry WebWorks に関する注意点
--------------------------

- __duration__ パラメーターはサポートされていません。録画時間をプログラム的に制限することは出来ません。
- __mode__ パラメーターはサポートされていません。録音のフォーマットをプログラム的に変更することは出来ません。録音は Adaptive Multi-Rate (AMR) フォーマット (audio/amr) を使用してエンコードされます。

iOS に関する注意点
----------

- __limit__ パラメーターはサポートされていません。1つのキャプチャー操作につき1つの録音が作られます。
- __mode__ パラメーターはサポートされていません。録音のフォーマットをプログラム的に変更することは出来ません。録音は Waveform Audio (WAV) フォーマット (audio/wav) を使用してエンコードされます。



capture.captureImage
====================

> カメラアプリを起動し、キャプチャーしたファイルの情報を返します。

    navigator.device.capture.captureImage(
        CaptureCB captureSuccess, CaptureErrorCB captureError, [CaptureImageOptions options]
    );

概要
-----------

このメソッドは、デバイスのカメラアプリを使用して、画像をキャプチャーするための非同期操作を開始します。この操作はユーザーに、単一セッションで複数の画像のキャプチャーをユーザーに許可します。

キャプチャー操作は、ユーザーがカメラアプリを終了するか、 CaptureImageOption の中の __limit__ パラメーターで指定された最大撮影回数に達した場合に終了します。もし __limit__ パラメーターが指定されていない場合は、デフォルト値である1が使用され、キャプチャー操作はユーザーが1度画像を撮影した後に終了します。

キャプチャー操作が終了した時、それぞれの画像ファイル情報が書かれた MediaFile オブジェクトの配列を伴った CaptureCB コールバック関数を呼び出します。もし画像がキャプチャーされる前にユーザーによって操作が終了されたら、 CaptureError.`CAPTURE_NO_MEDIA_FILES` エラーコードを持つ CaptureError オブジェクトを伴った CaptureErrorCB コールバック関数が呼び出されます。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7 (Mango)
- Bada 2.x

Windows Phone 7 に関する注意点
----------------------

Zune とデバイスが接続している間は、ネイティブカメラアプリケーションは
起動せずに、エラーコールバックが呼び出されます。

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

    // 画像のキャプチャーを開始
    navigator.device.capture.captureImage(captureSuccess, captureError, {limit:2});

詳細な使用例
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>画像キャプチャー</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
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
        function captureImage() {
            // デバイスのカメラアプリを起動、
            // ユーザーに2つまで画像のキャプチャーを許可する
            navigator.device.capture.captureImage(captureSuccess, captureError, {limit: 2});
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
        <button onclick="captureImage();">画像キャプチャー</button> <br>
      </body>
    </html>


Bada に関する注意点
-----------

Bada は _captureImage_ を他のデバイスと同様にサポートします。しかしながら、カメラアプリを起動せずにビデオや画像を webview 内でキャプチャー出来る _別の_ モードが存在します。このモードを使うためには、以下の手順が必要です:

1. _&#60;div&#62;_ 要素をドキュメントのどこかに作成し、 "preview" といったような id を付与します

        <div id="preview"></div>

2. カメラプレビューを以下のメソッドで初期化します

        navigator.camera.showPreview("preview");

3. プレビューを取得した後、以下のことが可能です

    3.1 画像をキャプチャー

        var options = { destinationFilename: "images/cam01.jpg", highRes: false};
        navigator.capture.captureImage(success, fail, options);

3. 以下のメソッドでカメラプレビュー画面を隠します

        navigator.camera.hidePreview("preview");




CaptureImageOptions
===================

> 画像キャプチャーのオプションをカプセル化します。

プロパティー
----------

- __limit:__ 一つのキャプチャー操作で撮影できる画像の最大値を表します。値は1以上の必要があります (デフォルトは1です) 。
- __mode:__ 選択された画像のモードを表します。値は `capture.supportedImageModes` の中の一つである必要があります。

使用例
-------------

    // キャプチャー操作時の取得画像の最大値を3に制限
    var options = { limit: 3 };

    navigator.device.capture.captureImage(captureSuccess, captureError, options);

Android に関する注意点
--------------

- __mode__ パラメーターはサポートされていません。画像のサイズとフォーマットはプログラム的に変更することはできません。しかし、画像サイズはユーザーによって変更することは可能です。画像は JPEG フォーマット (image/jpeg) で保存されます。

BlackBerry WebWorks に関する注意点
--------------------------

- __mode__ パラメーターはサポートされていません。画像のサイズとフォーマットはプログラム的に変更することはできません。しかし、画像サイズはユーザーによって変更することは可能です。画像は JPEG フォーマット (image/jpeg) で保存されます。

iOS に関する注意点
----------

- __limit__ パラメーターはサポートされていません。1つのキャプチャー操作につき1つの画像が撮影されます。
- __mode__ パラメーターはサポートされていません。画像のサイズとフォーマットはプログラム的に変更することはできません。画像は JPEG フォーマット (image/jpeg) で保存されます。



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

        <script type="text/javascript" charset="utf-8" src="cordova-2.0.0.js"></script>
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




CaptureVideoOptions
===================

> ビデオキャプチャーのオプションをカプセル化します。

プロパティー
----------

- __limit:__ 一つのキャプチャー操作で録画できるビデオの最大値を表します。値は1以上の必要があります  (デフォルトは1です) 。
- __duration:__ ビデオクリップの最大録画時間を秒で表します。
- __mode:__ 選択されたビデオのモードを表します。値は `capture.supportedVideoModes` の中の一つである必要があります。

使用例
-------------

    // キャプチャー操作時のビデオクリップの最大値を3に制限
    var options = { limit: 3 };

    navigator.device.capture.captureVideo(captureSuccess, captureError, options);

Android に関する注意点
--------------

- __duration__ パラメーターはサポートされていません。録画時間をプログラム的に制限することは出来ません。
- __mode__ パラメーターはサポートされていません。ビデオのサイズとフォーマットはプログラム的に変更することはできません。しかし、これらのパラメーターはユーザーによって変更することは可能です。デフォルトでは、ビデオは 3GPP (video/3gpp) フォーマットで録画されます。


BlackBerry WebWorks に関する注意点
--------------------------

- __duration__ パラメーターはサポートされていません。 録画時間をプログラム的に制限することは出来ません。
- __mode__ パラメーターはサポートされていません。 ビデオのサイズとフォーマットはプログラム的に変更することはできません。しかし、これらのパラメーターはユーザーによって変更することは可能です。 デフォルトでは、ビデオは 3GPP (video/3gpp) フォーマットで録画されます。

iOS に関する注意点
----------

- __limit__ パラメーターはサポートされていません。1つのキャプチャー操作につき1つのビデオが録画されます。
- __duration__ パラメーターはサポートされていません。録画時間をプログラム的に制限することは出来ません。
- __mode__ パラメーターはサポートされていません。ビデオのサイズとフォーマットはプログラム的に変更することはできません。デフォルトでは、ビデオは MOV (video/quicktime) フォーマットで録画されます。




CaptureError
============

> 失敗したメディアキャプチャー操作のエラーコードをカプセル化します。

プロパティー
----------

- __code:__ 事前に定義された以下のエラーコードのうちの1つを表します

定数
---------

- CaptureError.`CAPTURE_INTERNAL_ERR`: カメラまたはマイクが画像または音のキャプチャーに失敗した場合。
- CaptureError.`CAPTURE_APPLICATION_BUSY`: カメラアプリまたはオーディオ録音アプリが現在他のキャプチャーリクエストを扱っている場合。
- CaptureError.`CAPTURE_INVALID_ARGUMENT`: API の使用方法が不正であった場合 (例: limit パラメーターの値が1未満である) 。
- CaptureError.`CAPTURE_NO_MEDIA_FILES`: ユーザーが何もキャプチャーせずにカメラアプリやオーディオ録音アプリを終了した場合。
- CaptureError.`CAPTURE_NOT_SUPPORTED`: キャプチャー操作のリクエストがサポートされていない場合。



CaptureCB
=========

> メディアキャプチャー操作が成功した場合に呼び出されます。

    function captureSuccess( MediaFile[] mediaFiles ) { ... };

概要
-----------

この関数は、キャプチャー操作が正常に完了したときに呼び出されます。これは、メディアファイルがキャプチャーされ、ユーザーがメディアキャプチャーアプリを終了した、もしくはキャプチャーの取得制限値に達したという意味です。

それぞれの MediaFile オブジェクトはキャプチャーされたメディアファイルを表します。

使用例
-------------

    // capture コールバック関数
    function captureSuccess(mediaFiles) {
        var i, path, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            path = mediaFiles[i].fullPath;
            // ファイルを使用した処理
        }
    };



CaptureErrorCB
==============

> メディアキャプチャー操作中にエラーが発生した場合に呼び出されます。

    function captureError( CaptureError error ) { ... };

概要
-----------

この関数は、もしメディアキャプチャーアプリを起動しようとして、アプリがビジー状態であってエラーが発生した場合、もしキャプチャー操作実行中にエラーが発生した場合、もしユーザーによってメディアファイルがキャプチャーされる前にキャプチャー操作がキャンセルされた場合などに呼び出されます。

この関数は適切なエラーコードが含まれた CaptureError オブジェクトを伴って呼び出されます。

使用例
-------------

    // capture エラーコールバック関数
    var captureError = function(error) {
        navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    };



ConfigurationData
=================

> デバイスがサポートしているメディアキャプチャーのパラメーターのセットをカプセル化します。

概要
-----------

このオブジェクトは、デバイスによってサポートされているメディアキャプチャーのモードを表すために使われています。設定データは MIME type とビデオまたはイメージキャプチャーのためのサイズ情報を含んでいます。

MIME type は [RFC2046](http://www.ietf.org/rfc/rfc2046.txt) に従っています。 例:

- video/3gpp
- video/quicktime
- image/jpeg
- audio/amr
- audio/wav 

プロパティー
----------

- __type:__ ASCII エンコードされた小文字の文字列でメディアタイプを表します。 (DOMString)
- __height:__ 画像またはビデオの高さをピクセルで表します。 オーディオの場合は、0に設定されます。 (Number)
- __width:__ 画像またはビデオの幅をピクセルで表します。 オーディオの場合は、0に設定されます。 (Number)

使用例
-------------

    // サポートされている画像のモードを取得
    var imageModes = navigator.device.capture.supportedImageModes;

    // 幅が一番高い解像度を持つモードを選択
    var width = 0;
    var selectedmode;
    for each (var mode in imageModes) {
        if (mode.width > width) {
            width = mode.width;
            selectedmode = mode;
        }
    }


どのプラットフォームからもサポートされていません。全ての設定データは空となっています。



MediaFile
=========

> メディアキャプチャーファイルのプロパティーをカプセル化します。

プロパティー
----------

- __name:__ パス情報を含まないファイルの名前を表します。 (DOMString)
- __fullPath:__ ファイルの名前を含むフルパスを表します。 (DOMString)
- __type:__ ファイルの mime type を表します。 (DOMString)
- __lastModifiedDate:__ ファイルの最終更新日時を表します。 (Date)
- __size:__ ファイルのサイズをバイトで表します。 (Number)

メソッド
-------

- __MediaFile.getFormatData:__ メディアファイルのフォーマット情報を取得します。



MediaFile.getFormatData
=======================

> メディアキャプチャーファイルのフォーマット情報を取得します。

    mediaFile.getFormatData(
        MediaFileDataSuccessCB successCallback,
        [MediaFileDataErrorCB errorCallback]
    );

概要
-----------

この関数は、メディアファイルのフォーマット情報の取得を非同期で試みます。もし成功すれば、 MediaFileData オブジェクトを伴った MediaFileDataSuccessCB コールバック関数を呼び出します。もし失敗すれば、 MediaFileDataErrorCB コールバック関数を呼び出します。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7 (Mango)

BlackBerry WebWorks に関する注意点
--------------------------
メディアファイルのフォーマット情報を提供する API はありません。従って、全ての MediaFileData オブジェクトはデフォルト値で返されます。詳しくは MediaFileData のドキュメントをご覧ください。

Android に関する注意点
--------------
メディアファイルのフォーマット情報を取得する API は限定されています。従って、全ての MediaFileData のプロパティーがサポートされている訳ではありません。詳しくは MediaFileData のドキュメントをご覧ください。

iOS に関する注意点
----------
メディアファイルのフォーマット情報を取得する API は限定されています。従って、全ての MediaFileData のプロパティーがサポートされている訳ではありません。詳しくは MediaFileData のドキュメントをご覧ください。



MediaFileData
=============

> メディアファイルのフォーマット情報をカプセル化します。

プロパティー
----------

- __codecs:__ オーディオやビデオの実際のフォーマットを表します。 (DOMString)
- __bitrate:__ ファイルの平均ビットレートを表します。画像の場合は、0に設定されます。 (Number)
- __height:__ 画像またはビデオの高さをピクセルで表します。オーディオの場合は、0に設定されます。 (Number)
- __width:__ 画像またはビデオの幅をピクセルで表します。オーディオの場合は、0に設定されます。 (Number)
- __duration:__ ビデオまたはオーディオの長さを秒で表します。画像の場合は、0に設定されます。 (Number)

BlackBerry WebWorks に関する注意点
--------------------------
メディアファイルのフォーマット情報を提供する API はありません。 MediaFileData オブジェクトは、 MediaFile.getFormatData 関数によって返され、以下のようなデフォルト値を持ちます:

- __codecs:__ サポートされていません。この属性は常に null となります。
- __bitrate:__ サポートされていません。この属性は常に0となります。
- __height:__ サポートされていません。この属性は常に0となります。
- __width:__ サポートされていません。この属性は常に0となります。
- __duration:__ サポートされていません。この属性は常に0となります。

Android に関する注意点
--------------
MediaFileData プロパティーへのサポートは以下のとおりです:

- __codecs:__ サポートされていません。この属性は常に null となります。
- __bitrate:__ サポートされていません。この属性は常に0となります。
- __height:__ サポートされています。 (画像及びビデオに限る) 。
- __width:__ サポートされています。 (画像及びビデオに限る) 。
- __duration:__ サポートされています。 (オーディオ及びビデオに限る) 。

iOS に関する注意点
----------
MediaFileData プロパティーへのサポートは以下のとおりです:

- __codecs:__ サポートされていません。この属性は常に null となります。
- __bitrate:__ iOS4 のデバイスにおいて、オーディオのみサポートされています。この属性は、画像とビデオについては常に0となります。
- __height:__ サポートされています。 (画像及びビデオに限る) 。
- __width:__ サポートされています。 (画像及びビデオに限る) 。
- __duration:__ サポートされています。 (オーディオ及びビデオに限る) 。

