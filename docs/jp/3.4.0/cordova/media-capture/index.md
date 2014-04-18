<!---
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
-->

# org.apache.cordova.media-capture

このプラグインを使用して、オーディオ・画像・ビデオに関する、デバイスのキャプチャー機能の制御を行います。

__注意__ : デバイス搭載のカメラまたはマイクロフォンを使用した画像・動画・音声の取得および利用には、個人情報保護の観点から、細心の注意が必要です。録音および録画した画像・動画・音声の取り扱い方法および第三者への情報提供に関しては、アプリの個人情報の取り扱いに関するポリシーの中で議論すべき問題です。被写体および録音対象から認識できないまたは認識が困難なカメラまたはマイクロフォンを使用する際、カメラまたはマイクロフォンを使用する直前に通知して、その許諾を得る必要があります。デバイスのオペレーティングシステムがこの通知および許諾の要請を行ってない場合には、改善する必要があります。また、ユーザへの通知および許諾の要請を行う際には、必ず、個人情報の取り扱いに関するポリシーの開示および使用方法に関する同意の意思表示を求める必要があります ( __許可する__ 、または、 __許可しない__ のように、明示的に判断できる必要があります ) 。また、アプリがカメラまたはマイクロフォンを起動する前に、通知および許諾を得ることを条件とする、アプリのマーケットプレースも一部に存在します。詳細な情報に関しては、『 Privacy Guide 』 をご覧ください。

## インストール

    cordova plugin add org.apache.cordova.media-capture

## サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- BlackBerry 10
- iOS
- Windows Phone 7 と 8
- Windows 8

## オブジェクト

- Capture
- CaptureAudioOptions
- CaptureImageOptions
- CaptureVideoOptions
- CaptureCallback
- CaptureErrorCB
- ConfigurationData
- MediaFile
- MediaFileData

## メソッド

- capture.captureAudio
- capture.captureImage
- capture.captureVideo
- MediaFile.getFormatData

## プロパティー

- __supportedAudioModes__: デバイスがサポートするオーディオの録音形式 (ConfigurationData[])

- __supportedImageModes__: デバイスがサポートする画像の録画サイズと形式 (ConfigurationData[])

- __supportedVideoModes__: デバイスがサポートするビデオ録画の解像度と形式 (ConfigurationData[])

## capture.captureAudio

> オーディオ録音アプリを起動して、キャプチャーしたオーディオクリップファイルの情報を返します。

    navigator.device.capture.captureAudio(
        CaptureCB captureSuccess, CaptureErrorCB captureError,  [CaptureAudioOptions options]
    );

### 解説

デバイス標準搭載のオーディオ録音アプリを使用して、オーディオのキャプチャーを行う非同期処理を開始します。この処理により、同一セッション内で、複数のキャプチャーを行うことができます。

オーディオ録音アプリを終了したとき、または、 `CaptureAudioOptions.limit` で指定した最大録音数に達したとき、このキャプチャー処理は終了します。 `limit` パラメータ値を指定しない場合、「 1 」がデフォルトとなります。この場合、1 つのオーディオクリップを完成させたときにキャプチャー処理が終了します。

キャプチャー処理が終了するとき、 `MediaFile` オブジェクト群の配列を使用して、 `CaptureCallback` を実行します。各 `MediaFile` オブジェクトは、キャプチャーしたオーディオクリップファイルに関する情報を格納しています。オーディオクリップのキャプチャー前に、ユーザが操作を終了した場合、 `CaptureError` オブジェクトを使用して、 `CaptureErrorCallback` を実行します。この場合、 `CaptureError` オブジェクトは、 `CaptureError.CAPTURE_NO_MEDIA_FILES` エラーコードを使用します。


### サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- BlackBerry 10
- iOS
- Windows Phone 7 と 8
- Windows 8

### 例

    // キャプチャー時のコールバック
    var captureSuccess = function(mediaFiles) {
        var i, path, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            path = mediaFiles[i].fullPath;
            // ファイルを使用した処理
        }
    };

    // キャプチャーエラー時のコールバック
    var captureError = function(error) {
        navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    };

    // オーディオキャプチャーの開始
    navigator.device.capture.captureAudio(captureSuccess, captureError, {limit:2});


### BlackBerry 10 特有の動作

- BlackBerry 10 上で実行する Cordova アプリは、オーディオのキャプチャーを行うとき、RIM ( Research In Motion ) 提供の __Voice Notes Recorder__ アプリの起動を最初に行います。このアプリをデバイスにインストールしていない場合、Cordova アプリは、 `CaptureError.CAPTURE_NOT_SUPPORTED` エラーコードを受け取ります。


### iOS 特有の動作

- iOS には、標準のオーディオ録音アプリがなく、また、簡易なユーザーインターフェースのみ提供されています。

### Windows Phone 7 と 8 特有の動作

- Windows Phone 7 には、標準のオーディオ録音アプリがなく、また、簡易なユーザーインターフェースのみ提供されています。

## CaptureAudioOptions

> オーディオキャプチャーのオプション設定を行います。

### プロパティー

- __limit__: 同一のキャプチャー処理の中で、デバイスが録音できるオーディオクリップの最大数。値は、1 以上に設定します ( デフォルトでは 1 )。

- __duration__: 1 つあたりのオーディオサウンドクリップの最大長 ( 秒単位 )


### 例

    // 3 つのメディアファイルのキャプチャー処理を行い、1 つのファイルを 10 秒以内に設定
    var options = { limit: 3, duration: 10 };

    navigator.device.capture.captureAudio(captureSuccess, captureError, options);

### Amazon Fire OS 特有の動作

- `duration` パラメータをサポートしません。録音時間をプログラムで制御できません。

### Android 特有の動作

- `duration` パラメータをサポートしません。録音時間をプログラムで制御できません。

### BlackBerry 10 特有の動作

- `duration` パラメータをサポートしません。録音時間をプログラムで制御できません。

### iOS 特有の動作

- `limit` パラメータをサポートしません。1 回のキャプチャー処理につき、1 回の録音のみ行います。

## capture.captureImage

> カメラアプリを起動して、キャプチャーした画像ファイルの情報を返します。

    navigator.device.capture.captureImage(
        CaptureCB captureSuccess, CaptureErrorCB captureError, [CaptureImageOptions options]
    );

### 解説

デバイス標準搭載のカメラアプリを使用して、画像のキャプチャーを行う非同期処理を開始します。この処理により、同一セッション内で、複数のキャプチャーを行うことができます。

カメラアプリを終了したとき、または、 `CaptureAudioOptions.limit` で指定した最大数に達したとき、このキャプチャー処理は終了します。 `limit` パラメータ値を指定しない場合、「 1 」がデフォルトとなります。この場合、1 枚の画像をキャプチャーして、処理が終了します。

キャプチャー処理が終了するとき、 `MediaFile` オブジェクト群の配列を使用して、 `CaptureCB` を実行します。各 `MediaFile` オブジェクトは、キャプチャーした画像ファイルに関する情報を格納しています。画像のキャプチャー前に、ユーザが操作を終了した場合、 `CaptureError` オブジェクトを使用して、 `CaptureErrorCB` を実行します。この場合、 `CaptureError` オブジェクトは、 `CaptureError.CAPTURE_NO_MEDIA_FILES` エラーコードを使用します。

### サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- BlackBerry 10
- iOS
- Windows Phone 7 と 8
- Windows 8

### Windows Phone 7 特有の動作

Zune を使用して、デバイスが接続を行っている間は、ネイティブカメラアプリを呼んでも動作せず、エラー時に使用するコールバックを実行します。

### 例

    // キャプチャー時のコールバック
    var captureSuccess = function(mediaFiles) {
        var i, path, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            path = mediaFiles[i].fullPath;
            // ファイルを使用した処理
        }
    };

    // キャプチャーエラー時のコールバック
    var captureError = function(error) {
        navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    };

    // 画像のキャプチャーの開始
    navigator.device.capture.captureImage(captureSuccess, captureError, {limit:2});



## CaptureImageOptions

> 画像キャプチャーのオプション設定を行います。

### プロパティー

- __limit__: 同一のキャプチャー処理の中で、ユーザがキャプチャーできる画像の最大数。値は、1 以上に設定します ( デフォルトでは 1 )。

### 例

    // 3 つの画像のキャプチャー処理を行う
    var options = { limit: 3 };

    navigator.device.capture.captureImage(captureSuccess, captureError, options);

### iOS 特有の動作

- __limit__ パラメータをサポートしません。1 回のキャプチャー処理につき、1 枚の画像のみキャプチャーします。

## capture.captureVideo

> ビデオ録画アプリを起動して、キャプチャーしたビデオクリップファイルの情報を返します。

    navigator.device.capture.captureVideo(
        CaptureCB captureSuccess, CaptureErrorCB captureError, [CaptureVideoOptions options]
    );

### 解説

デバイス標準搭載のビデオ録画アプリを使用して、ビデオのキャプチャーを行う非同期処理を開始します。この処理により、同一セッション内で、複数のキャプチャーを行うことができます。

ビデオ録画アプリを終了したとき、または、 `CaptureVideoOptions.limit`　で指定した最大数に達したとき、このキャプチャー処理は終了します。 `limit` パラメータ値を指定しない場合、「 1 」がデフォルトとなります。この場合、1 つのビデオクリップをキャプチャーして、処理が終了します。

キャプチャー処理が終了するとき、 `MediaFile` オブジェクト群の配列を使用して、 `CaptureCB` を実行します。各 `MediaFile` オブジェクトは、キャプチャーしたビデオクリップファイルに関する情報を格納しています。ビデオクリップのキャプチャー前に、ユーザが操作を終了した場合、 `CaptureError` オブジェクトを使用して、 `CaptureErrorCB` を実行します。この場合、 `CaptureError` オブジェクトは、 `CaptureError.CAPTURE_NO_MEDIA_FILES` エラーコードを使用します。

### サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- BlackBerry 10
- iOS
- Windows Phone 7 と 8
- Windows 8

### 例

    // キャプチャー時のコールバック
    var captureSuccess = function(mediaFiles) {
        var i, path, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            path = mediaFiles[i].fullPath;
            // ファイルを使用した処理
        }
    };

    // キャプチャーエラー時のコールバック
    var captureError = function(error) {
        navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    };

    // ビデオキャプチャーの開始
    navigator.device.capture.captureVideo(captureSuccess, captureError, {limit:2});


### BlackBerry 10 特有の動作

- BlackBerry 10 上で実行する Cordova アプリは、ビデオのキャプチャーを行うとき、RIM ( Research In Motion ) 提供の __Video Recorder__ アプリの起動を最初に行います。このアプリをデバイスにインストールしていない場合、Cordova アプリは、 `CaptureError.CAPTURE_NOT_SUPPORTED` エラーコードを受け取ります。


## CaptureVideoOptions

> ビデオキャプチャーのオプション設定を行います。

### プロパティー

- __limit__: 同一のキャプチャー処理の中で、ユーザがキャプチャーできるビデオクリップの最大数。値は、1 以上に設定します ( デフォルトでは 1 )。

- __duration__: 1 つあたりのビデオクリップの最大長 ( 秒単位 )

### 例

    // ビデオクリップが 3 つになるまで、キャプチャー処理を行う
    var options = { limit: 3 };

    navigator.device.capture.captureVideo(captureSuccess, captureError, options);

### BlackBerry 10 特有の動作

- __duration__ パラメータをサポートしません。録画時間をプログラムで制御できません。

### iOS 特有の動作

- __limit__ パラメータをサポートしません。1 回のキャプチャー処理につき、1 個のビデオのみキャプチャーします。

## CaptureCB

> メディアキャプチャー処理の成功時に呼び出します。

    function captureSuccess( MediaFile[] mediaFiles ) { ... };

### 解説

キャプチャー処理が成功した後、この関数を実行します。
この時点までで、メディアファイルのキャプチャーが終了しており、ならびに、メディアキャプチャー用アプリをユーザが閉じているか、または、キャプチャー数が最大数に達しています。
各 `MediaFile` オブジェクトは、キャプチャーしたメディアファイルに関する情報を格納しています

### 例

    // キャプチャー時のコールバック
    function captureSuccess(mediaFiles) {
        var i, path, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            path = mediaFiles[i].fullPath;
            // ファイルを使用した処理
        }
    };

## CaptureError

> メディアのキャプチャー処理に失敗した際に使用する、エラーコードの設定を行います。

### プロパティー

- __code__: 事前に定義した以下のエラーコードのうちの 1 つ

### 定数

- `CaptureError.CAPTURE_INTERNAL_ERR`: 
イメージまたはサウンドのキャプチャーに、カメラまたはマイクロフォンが失敗した場合

- `CaptureError.CAPTURE_APPLICATION_BUSY`: カメラまたはオーディオキャプチャー用のアプリが、別のキャプチャーリクエストの処理を現在行っている場合

- `CaptureError.CAPTURE_INVALID_ARGUMENT`: API の無効な使用方法 ( 例 : `limit` の値が 1 未満 )

- `CaptureError.CAPTURE_NO_MEDIA_FILES`: カメラまたはオーディオキャプチャー用のアプリを、キャプチャー前に、ユーザが閉じた場合

- `CaptureError.CAPTURE_NOT_SUPPORTED`: キャプチャー処理のリクエストをサポートしていない場合

## CaptureErrorCB

> メディアのキャプチャー処理中に、エラーが発生した場合に呼び出します。

    function captureError( CaptureError error ) { ... };

### 解説

メディアのキャプチャー処理を開始する際に、エラーが発生した場合、この関数を実行します。想定できるエラー発生シナリオとして、キャプチャーアプリがビジー ( busy ) 状態のとき、キャプチャー処理をすでに実行しているとき、メディアファイルのキャプチャー前にユーザが処理をキャンセルしたときなどが考えられます。

適当なエラーコード ( `code` ) を格納した `CaptureError` オブジェクトを使用して、この関数を実行します。

### 例

    // キャプチャーエラー時のコールバック
    var captureError = function(error) {
        navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    };

## ConfigurationData

> 各デバイスでサポートしている、メディアキャプチャー用のパラメータ群を設定します。

### 解説

デバイスがサポートする、メディアキャプチャーのモードを設定します。設定データには、
MIME タイプ、および、ビデオ・画像キャプチャーのサイズ情報があります。

MIME タイプは、 [RFC2046](http://www.ietf.org/rfc/rfc2046.txt) に準拠する必要があります。以下に例を示します。

- `video/3gpp`
- `video/quicktime`
- `image/jpeg`
- `audio/amr`
- `audio/wav`

### プロパティー

- __type__: メディアタイプを示す ASCII でエンコードされた小文字の文字列 (DOMString)

- __height__: ピクセル単位で示す、画像またはビデオの縦の長さ。サウンドクリップに関しては、「 0 」に設定します。 (Number)

- __width__: ピクセル単位で示す、画像またはビデオの横幅。サウンドクリップに関しては、「 0 」に設定します。 (Number)

### 例

    // サポートされている画像のモードを取得
    var imageModes = navigator.device.capture.supportedImageModes;

    // 最も高い水平解像度を持つモードを選択
    var width = 0;
    var selectedmode;
    for each (var mode in imageModes) {
        if (mode.width > width) {
            width = mode.width;
            selectedmode = mode;
        }
    }

どのプラットフォームでもサポートしていない場合、設定データを格納する配列は空になります。

## MediaFile.getFormatData

> メディアキャプチャーファイルのフォーマット情報を取得します。

    mediaFile.getFormatData(
        MediaFileDataSuccessCB successCallback,
        [MediaFileDataErrorCB errorCallback]
    );

### 解説

メディアファイルのフォーマット情報の取得を、非同期的にこの関数は行います。成功時には、 `MediaFileData` を使用して、 `MediaFileDataSuccessCB` コールバックを呼び出します。失敗時には、 `MediaFileDataErrorCB` コールバックをこの関数は呼び出します。

### サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- BlackBerry 10
- iOS
- Windows Phone 7 と 8
- Windows 8

### Amazon Fire OS 特有の動作

メディアファイルのフォーマット情報にアクセスできる API は限定されています。 `MediaFileData` プロパティー群の一部のみサポートします。

### BlackBerry 10 特有の動作

メディアファイルに関する情報を API に提供しません。以下のセクションで示すデフォルト値を使用して、 `MediaFileData` オブジェクトを返します。

### Android 特有の動作

メディアファイルのフォーマット情報にアクセスできる API は限定されています。 `MediaFileData` プロパティー群の一部のみサポートします。

### iOS 特有の動作

メディアファイルのフォーマット情報にアクセスできる API は限定されています。 `MediaFileData` プロパティー群の一部のみサポートします。

## MediaFile

> メディアキャプチャーファイルのプロパティーを設定します。

### プロパティー

- __name__: ファイル名 ( パス情報の指定なし ) (DOMString)

- __fullPath__: ファイル名を含む、フェイルへのフルパス ( full path )。 (DOMString)

- __type__: ファイルの mime タイプ (DOMString)

- __lastModifiedDate__: ファイルの最終更新日時 (Date)

- __size__: バイト数で示す、ファイルサイズ (Number)

### メソッド

- __MediaFile.getFormatData__: メディアファイルのフォーマット情報を取得します。

## MediaFileData

> メディアファイルに関するフォーマット情報を設定します。

### プロパティー

- __codecs__: オーディオとビデオの実際の形式 (DOMString)

- __bitrate__: コンテンツの平均ビットレート。画像に関しては、値は 「 0 」となります。 (Number)

- __height__: ピクセル単位で示す、画像またはビデオの縦の長さ。オーディオクリップに関しては、「 0 」に設定します。 (Number)

- __width__: ピクセル単位で示す、画像またはビデオの横幅。オーディオクリップに関しては、「 0 」に設定します。 (Number)

- __duration__: 秒単位で示す、ビデオまたはサウンドクリップの長さ。画像に関しては、「 0 」に設定します。 (Number)

### BlackBerry 10 特有の動作

メディアファイルに関するフォーマット情報を提供する API はありません。よって、以下のデフォルト値を格納した `MediaFileData` オブジェクトを、 `MediaFile.getFormatData` は返します。　

- __codecs__: サポートしません。 `null` を返します。

- __bitrate__: サポートしません。「 0 」を返します。

- __height__: サポートしません。「 0 」を返します。

- __width__: サポートしません。「 0 」を返します。

- __duration__: サポートしません。「 0 」を返します。

### Amazon Fire OS 特有の動作

以下の `MediaFileData` プロパティーに関するサポート状況を以下に示します。

- __codecs__: サポートしません。 `null` を返します。

- __bitrate__: サポートしません。「 0 」を返します。

- __height__: 画像とビデオファイルのみ、サポートします。

- __width__: 画像とビデオファイルのみ、サポートします。

- __duration__: オーディオとビデオファイルのみ、サポートします。

### Android 特有の動作

以下の `MediaFileData` プロパティーに関するサポート状況を以下に示します。

- __codecs__: サポートしません。 `null` を返します。

- __bitrate__: サポートしません。「 0 」を返します。

- __height__: 画像とビデオファイルのみ、サポートします。

- __width__: 画像とビデオファイルのみ、サポートします。

- __duration__: オーディオとビデオファイルのみ、サポートします。

### iOS 特有の動作

以下の `MediaFileData` プロパティーに関するサポート状況を以下に示します。

- __codecs__: サポートしません。 `null` を返します。

- __bitrate__: iOS 4 搭載のデバイスでは、オーディオのみサポートします。画像とビデオに関しては、「 0 」を返します。

- __height__: 画像とビデオファイルのみ、サポートします。

- __width__: 画像とビデオファイルのみ、サポートします。

- __duration__: オーディオとビデオファイルのみ、サポートします。
