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
