---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# キャプチャ

> デバイスのオーディオ、イメージ、およびビデオ キャプチャ機能へのアクセスを提供します。

**重要なプライバシーの注意：**画像、ビデオ、またはデバイスのカメラやマイクからの音声の収集と利用を重要なプライバシーの問題を発生させます。 アプリのプライバシー ポリシーは、アプリがそのようなセンサーを使用する方法と、記録されたデータは他の当事者と共有かどうかを議論すべきです。 さらに、カメラまたはマイクのアプリの使用がない場合明らかに、ユーザー インターフェイスで、アプリ (デバイス オペレーティング システムしない場合そう既に) カメラまたはマイクにアクセスする前に、ジャスト イン タイム通知を提供する必要があります。 その通知は、上記の (例えば、 **[ok]**を**おかげで**選択肢を提示する) によってユーザーのアクセス許可を取得するだけでなく、同じ情報を提供する必要があります。 いくつかのアプリのマーケットプ レース - 時間の通知を提供して、カメラまたはマイクにアクセスする前にユーザーからアクセス許可を取得するアプリをする必要がありますに注意してください。 詳細については、プライバシーに関するガイドを参照してください。

## オブジェクト

*   キャプチャ
*   CaptureAudioOptions
*   CaptureImageOptions
*   CaptureVideoOptions
*   CaptureCallback
*   CaptureErrorCB
*   ConfigurationData
*   メディアファイル
*   MediaFileData

## メソッド

*   capture.captureAudio
*   capture.captureImage
*   capture.captureVideo
*   MediaFile.getFormatData

## スコープ

The `capture` object is assigned to the `navigator.device` object, and therefore has global scope.

    // The global capture object
    var capture = navigator.device.capture;
    

## プロパティ

*   **supportedAudioModes**: デバイスでサポートされている形式の録音。（ConfigurationData[])

*   **supportedImageModes**: 記録画像サイズとデバイスでサポートされている形式です。（ConfigurationData[])

*   **supportedVideoModes**: 記録のビデオ解像度とデバイスでサポートされている形式です。（ConfigurationData[])

## メソッド

*   `capture.captureAudio`: オーディオ クリップを記録するデバイスのオーディオ録音アプリケーションを起動します。

*   `capture.captureImage`: 写真を撮るため、デバイスのカメラ アプリケーションを起動します。

*   `capture.captureVideo`: ビデオを記録するためのデバイスのビデオ レコーダー アプリケーションを起動します。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 7 と 8
*   Windows 8

## 機能へのアクセス

バージョン 3.0 は、コルドバ*のプラグイン*としてデバイス レベルの Api を実装します。 CLI の使用 `plugin` のコマンドライン ・ インタ フェースを追加または削除、プロジェクトに対してこの機能を記載されているコマンド。

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
        

いくつかのプラットフォームは特別な構成を必要とせずにこの機能をサポート可能性があります。*プラットフォームのサポート*の概要のセクションを参照してください。