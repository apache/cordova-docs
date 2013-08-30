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

Capture
=======

> デバイスのオーディオ、イメージ、ビデオキャプチャー機能への制御を提供します。

**プライバシーに関する重要な注意点:** デバイスのカメラやマイクを使って、画像、動画、オーディオを利用する場合、プライバシーに関して重要な問題が発生します。 アプリケーションの [プライバシー・ポリシー](guide_getting-started_index.md.html) では、そのようなセンサーをどのように使用するのか、他のアプリケーションとデータを共有するのか否か、などを説明するべきです。加えて、アプリケーションがカメラやマイクを使用することが、ユーザーインタフェース上で明確ではない場合、アプリケーションがカメラやマイクにアクセスする前にユーザーへ通知を行うべきです (デバイスのOSが通知を行っていない場合)。この通知では、上記と同様の情報を提供し、ユーザーの許可を得るようにするべきです (例えば、"OK"と"NO"などの選択肢を表示するなど)。詳細は Privacy Guide を参照してください。

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

`capture` オブジェクトは `navigator.device` オブジェクトに割り当てられており、そのためグローバルスコープです。

    // グローバル capture オブジェクト
    var capture = navigator.device.capture;

プロパティー
----------

- __supportedAudioModes__: デバイスによってサポートされているオーディオ録音のフォーマットです。 (ConfigurationData[])
- __supportedImageModes__: デバイスによってサポートされている記録用の画像サイズやフォーマットです。 (ConfigurationData[])
- __supportedVideoModes__: デバイスによってサポートされている記録用のビデオ解像度やフォーマットです。 (ConfigurationData[])

メソッド
-------

- `capture.captureAudio`: オーディオ録音のために、デバイスのオーディオ録音アプリを起動します。
- `capture.captureImage`: 画像取得のために、デバイスのカメラアプリを起動します。
- `capture.captureVideo`: ビデオ録画のために、デバイスのビデオ録画アプリを起動します。


サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7 and 8
- Windows 8

パーミッション
-----------

### Android

#### app/res/xml/plugins.xml

    <plugin name="Capture" value="org.apache.cordova.Capture"/>

#### app/AndroidManifest.xml

    <uses-permission android:name="android.permission.RECORD_AUDIO" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

### BlackBerry WebWorks

#### www/plugins.xml

    <plugin name="Capture" value="org.apache.cordova.capture.MediaCapture" />

#### www/config.xml

    <feature id="blackberry.system"  required="true" version="1.0.0.0" />
    <feature id="blackberry.io.file" required="true" version="1.0.0.0" />

### iOS

#### config.xml

    <plugin name="Capture" value="CDVCapture" />

### Windows Phone

#### Properties/WPAppManifest.xml

    <Capabilities>
        <Capability Name="ID_CAP_MEDIALIB" />
        <Capability Name="ID_CAP_MICROPHONE" />
        <Capability Name="ID_HW_FRONTCAMERA" />
        <Capability Name="ID_CAP_ISV_CAMERA" />
        <Capability Name="ID_CAP_CAMERA" />
    </Capabilities>
