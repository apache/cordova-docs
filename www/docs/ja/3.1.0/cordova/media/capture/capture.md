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

# キャプチャ

> <a href="../../device/device.html">デバイス</a>のオーディオ、イメージ、およびビデオ キャプチャ機能へのアクセスを提供します。

**重要なプライバシーの注意：**画像、ビデオ、または<a href="../../device/device.html">デバイス</a>の<a href="../../camera/camera.html">カメラ</a>やマイクからの音声の収集と利用を重要なプライバシーの問題を発生させます。 アプリのプライバシー ポリシーは、アプリがそのようなセンサーを使用する方法と、記録されたデータは他の当事者と共有かどうかを議論すべきです。 さらに、<a href="../../camera/camera.html">カメラ</a>またはマイクのアプリの使用がない場合明らかに、ユーザー インターフェイスで、アプリ (<a href="../../device/device.html">デバイス</a> オペレーティング システムしない場合そう既に) <a href="../../camera/camera.html">カメラ</a>またはマイクにアクセスする前に、ジャスト イン タイム<a href="../../notification/notification.html">通知</a>を提供する必要があります。 その<a href="../../notification/notification.html">通知</a>は、上記の (例えば、 **[ok]**を**おかげで**選択肢を提示する) によってユーザーのアクセス許可を取得するだけでなく、同じ情報を提供する必要があります。 いくつかのアプリのマーケットプ レース - 時間の<a href="../../notification/notification.html">通知</a>を提供して、<a href="../../camera/camera.html">カメラ</a>またはマイクにアクセスする前にユーザーからアクセス許可を取得するアプリをする必要がありますに注意してください。 詳細については、プライバシーに関する<a href="../../../index.html">ガイド</a>を参照してください。

## オブジェクト

*   キャプチャ
*   <a href="captureAudioOptions.html">CaptureAudioOptions</a>
*   <a href="captureImageOptions.html">CaptureImageOptions</a>
*   <a href="captureVideoOptions.html">CaptureVideoOptions</a>
*   CaptureCallback
*   <a href="<a href="CaptureError.html">CaptureError</a>CB.html"><a href="CaptureError.html">CaptureError</a>CB</a>
*   <a href="ConfigurationData.html">ConfigurationData</a>
*   <a href="../media.html">メディア</a><a href="../../file/fileobj/fileobj.html">ファイル</a>
*   <a href="MediaFileData.html">MediaFileData</a>

## メソッド

*   <a href="captureAudio.html">capture.captureAudio</a>
*   <a href="captureImage.html">capture.captureImage</a>
*   <a href="captureVideo.html">capture.captureVideo</a>
*   <a href="MediaFile.getFormatData.html">MediaFile.getFormatData</a>

## スコープ

The `capture` object is assigned to the `navigator.device` object, and therefore has global scope.

    // The global capture object
    var capture = navigator.device.capture;
    

## プロパティ

*   **supportedAudioModes**: <a href="../../device/device.html">デバイス</a>でサポートされている形式の録音。（<a href="ConfigurationData.html">ConfigurationData</a>[])

*   **supportedImageModes**: 記録画像サイズと<a href="../../device/device.html">デバイス</a>でサポートされている形式です。（<a href="ConfigurationData.html">ConfigurationData</a>[])

*   **supportedVideoModes**: 記録のビデオ解像度と<a href="../../device/device.html">デバイス</a>でサポートされている形式です。（<a href="ConfigurationData.html">ConfigurationData</a>[])

## メソッド

*   `<a href="captureAudio.html">capture.captureAudio</a>`: オーディオ クリップを記録する<a href="../../device/device.html">デバイス</a>のオーディオ録音アプリケーションを起動します。

*   `<a href="captureImage.html">capture.captureImage</a>`: 写真を撮るため、<a href="../../device/device.html">デバイス</a>の<a href="../../camera/camera.html">カメラ</a> アプリケーションを起動します。

*   `<a href="captureVideo.html">capture.captureVideo</a>`: ビデオを記録するための<a href="../../device/device.html">デバイス</a>のビデオ レコーダー アプリケーションを起動します。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 7 と 8
*   Windows 8

## 機能へのアクセス

バージョン 3.0 は、コルドバ*のプラグイン*として<a href="../../device/device.html">デバイス</a> レベルの Api を実装します。 CLI の使用 `plugin` のコマンドライン ・ インタ フェースを追加または削除、プロジェクトに対してこの機能を記載されているコマンド。

        $ cordova plugin add org.apache.cordova.media-capture
        $ cordova plugin ls
        [ 'org.apache.cordova.media-capture' ]
        $ cordova plugin rm org.apache.cordova.media-capture
    

これらのコマンドすべてのターゲット プラットフォームに適用されますが、以下のプラットフォームに固有の構成設定を変更します。

*   アンドロイド
    
        (in app/res/xml/plugins.xml) < 機能名 =「キャプチャ」>< param の名前 =「android パッケージ」value="org.apache.cordova.Capture"/></機能 > (app/AndroidManifest.xml) で < 使用許可 android:name="android.permission.RECORD_AUDIO"/>< 使用許可 android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
        

*   ブラックベリー WebWorks
    
        (in www/plugins.xml) < 機能名 =「キャプチャ」>< param の名前「ブラックベリー パッケージ」value="org.apache.cordova.capture.MediaCapture ="/></機能 > (www/config.xml) で < id="blackberry.system 機能"必要 ="true"のバージョン =「1.0.0.0」/>< id="blackberry.io.file の機能"必要 ="true"バージョン =「1.0.0.0」/>
        

*   iOS （`config.xml`)
    
        < 機能名 =「キャプチャ」>< param の名前 = 値「ios パッケージ」="CDVCapture"/></機能 >
        

*   (Windows Phone`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_MEDIALIB" />
            <Capability Name="ID_CAP_MICROPHONE" />
            <Capability Name="ID_HW_FRONTCAMERA" />
            <Capability Name="ID_CAP_ISV_CAMERA" />
            <Capability Name="ID_CAP_CAMERA" />
        </Capabilities>
        

いくつかのプラットフォームは特別な構成を必要とせずにこの機能をサポート可能性があります。*プラットフォームのサポート*の<a href="../../../guide/overview/index.html">概要</a>のセクションを参照してください。