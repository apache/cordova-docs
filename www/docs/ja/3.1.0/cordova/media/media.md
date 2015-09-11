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

# メディア

> `Media`オブジェクトを記録し、<a href="../device/device.html">デバイス</a>上のオーディオ <a href="../file/fileobj/fileobj.html">ファイル</a>を再生する機能を提供します。

    var media = new Media(src, mediaSuccess, [<a href="Parameters/mediaError.html">mediaError</a>], [mediaStatus]);
    

**注：**現在の実装では、メディアの<a href="capture/capture.html">キャプチャ</a>のための W3C 仕様に準拠していないとは便宜上提供されるだけです。 将来の実装を最新の W3C 仕様に準拠し、現在 Api をとがめることがあります。

## パラメーター

*   **src**: オーディオのコンテンツを含む URI。*（，）*

*   **mediaSuccess**: (省略可能) 後に実行するコールバックを `Media` 再生用に現在、レコード、または stop アクション オブジェクトが完了しました。*(機能)*

*   **<a href="Parameters/mediaError.html">mediaError</a>**: (省略可能) エラーが発生した場合に実行されるコールバック。*(機能)*

*   **mediaStatus**: (省略可能) 状態の変化を示すために実行されるコールバック。*(機能)*

## 定数

次の定数を唯一のパラメーターとして報告されます、 `mediaStatus` コールバック。

*   `Media.MEDIA_NONE` = 0;
*   `Media.MEDIA_STARTING` = 1;
*   `Media.MEDIA_RUNNING` = 2;
*   `Media.MEDIA_PAUSED` = 3;
*   `Media.MEDIA_STOPPED` = 4;

## メソッド

*   `<a href="media.getCurrentPosition.html">media.getCurrentPosition</a>`: オーディオ <a href="../file/fileobj/fileobj.html">ファイル</a>内の現在<a href="../geolocation/Position/position.html">位置</a>を返します。

*   `<a href="media.getDuration.html">media.getDuration</a>`: オーディオ <a href="../file/fileobj/fileobj.html">ファイル</a>の継続時間を返します。

*   `<a href="media.play.html">media.play</a>`: 開始またはオーディオ <a href="../file/fileobj/fileobj.html">ファイル</a>の再生を<a href="../events/events.resume.html">再開</a>します。

*   `<a href="media.pause.html">media.pause</a>`： オーディオ <a href="../file/fileobj/fileobj.html">ファイル</a>の再生を一時停止。

*   `<a href="media.release.html">media.release</a>`: 基になるオペレーティング システムのオーディオ リソースを解放します。

*   `<a href="media.seekTo.html">media.seekTo</a>`: オーディオ <a href="../file/fileobj/fileobj.html">ファイル</a>内の<a href="../geolocation/Position/position.html">位置</a>を移動します。

*   `<a href="media.setVolume.html">media.setVolume</a>`: オーディオの再生ボリュームを設定します。

*   `<a href="media.startRecord.html">media.startRecord</a>`： オーディオ <a href="../file/fileobj/fileobj.html">ファイル</a>の録音を開始します。

*   `<a href="media.stop.html">media.stop</a>Record`: オーディオ <a href="../file/fileobj/fileobj.html">ファイル</a>の録音を停止します。

*   `<a href="media.stop.html">media.stop</a>`: オーディオ <a href="../file/fileobj/fileobj.html">ファイル</a>の再生を停止します。

## 追加読み取り専用パラメーター

*   **<a href="../geolocation/Position/position.html">位置</a>**： 数秒でオーディオの再生では、内の<a href="../geolocation/Position/position.html">位置</a>。
    
    *   自動的に更新されません; のプレイ中にコール `getCurrentPosition` を更新します。

*   **期間**: 秒で、メディアの期間。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 7.5
*   Tizen
*   Windows 8

## 機能へのアクセス

バージョン 3.0 は、コルドバ*のプラグイン*として<a href="../device/device.html">デバイス</a> レベルの Api を実装します。 CLI の使用 `plugin` のコマンドライン ・ インタ フェースを追加または削除、プロジェクトに対してこの機能を記載されているコマンド。

        $ コルドバ プラグイン追加 org.apache.cordova.media $ コルドバ プラグイン ['org.apache.cordova.media'] ls $ コルドバ プラグイン rm org.apache.cordova.media
     

これらのコマンドすべてのターゲット プラットフォームに適用されますが、以下のプラットフォームに固有の構成設定を変更します。

*   アンドロイド
    
        (in app/res/xml/config.xml)
        <feature name="Media">
            <param name="android-package" value="org.apache.cordova.AudioHandler" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.RECORD_AUDIO" />
        <uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
        

*   ブラックベリー WebWorks
    
        (in www/plugins.xml)
        <feature name="Capture">
            <param name="blackberry-package" value="org.apache.cordova.media.MediaCapture" />
        </feature>
        

*   iOS （`config.xml`)
    
        <feature name="Media">
            <param name="ios-package" value="CDVSound" />
        </feature>
        

*   (Windows Phone`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_MEDIALIB" />
            <Capability Name="ID_CAP_MICROPHONE" />
            <Capability Name="ID_HW_FRONTCAMERA" />
            <Capability Name="ID_CAP_ISV_CAMERA" />
            <Capability Name="ID_CAP_CAMERA" />
        </Capabilities>
        
    
    参照: [Windows Phone のアプリケーション マニフェスト][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

いくつかのプラットフォームは特別な構成を必要とせずにこの機能をサポート可能性があります。*プラットフォームのサポート*の<a href="../../guide/overview/index.html">概要</a>のセクションを参照してください。

### Windows Phone の癖

*   のみ 1 つのメディア <a href="../file/fileobj/fileobj.html">ファイル</a>は、一度に再生できます。

*   アプリケーションと他のメディアとの対話に厳格な制限があります。 [詳細については、Microsoft のマニュアル][2]を参照してください。.

 [2]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/hh184838(v=vs.92).aspx