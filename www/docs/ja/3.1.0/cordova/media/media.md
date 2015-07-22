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

# メディア

> `Media`オブジェクトを記録し、デバイス上のオーディオ ファイルを再生する機能を提供します。

    var media = new Media(src, mediaSuccess, [mediaError], [mediaStatus]);
    

**注：**現在の実装では、メディアのキャプチャのための W3C 仕様に準拠していないとは便宜上提供されるだけです。 将来の実装を最新の W3C 仕様に準拠し、現在 Api をとがめることがあります。

## パラメーター

*   **src**: オーディオのコンテンツを含む URI。*（，）*

*   **mediaSuccess**: (省略可能) 後に実行するコールバックを `Media` 再生用に現在、レコード、または stop アクション オブジェクトが完了しました。*(機能)*

*   **mediaError**: (省略可能) エラーが発生した場合に実行されるコールバック。*(機能)*

*   **mediaStatus**: (省略可能) 状態の変化を示すために実行されるコールバック。*(機能)*

## 定数

次の定数を唯一のパラメーターとして報告されます、 `mediaStatus` コールバック。

*   `Media.MEDIA_NONE` = 0;
*   `Media.MEDIA_STARTING` = 1;
*   `Media.MEDIA_RUNNING` = 2;
*   `Media.MEDIA_PAUSED` = 3;
*   `Media.MEDIA_STOPPED` = 4;

## メソッド

*   `media.getCurrentPosition`: オーディオ ファイル内の現在位置を返します。

*   `media.getDuration`: オーディオ ファイルの継続時間を返します。

*   `media.play`: 開始またはオーディオ ファイルの再生を再開します。

*   `media.pause`： オーディオ ファイルの再生を一時停止。

*   `media.release`: 基になるオペレーティング システムのオーディオ リソースを解放します。

*   `media.seekTo`: オーディオ ファイル内の位置を移動します。

*   `media.setVolume`: オーディオの再生ボリュームを設定します。

*   `media.startRecord`： オーディオ ファイルの録音を開始します。

*   `media.stopRecord`: オーディオ ファイルの録音を停止します。

*   `media.stop`: オーディオ ファイルの再生を停止します。

## 追加読み取り専用パラメーター

*   **位置**： 数秒でオーディオの再生では、内の位置。
    
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

バージョン 3.0 は、コルドバ*のプラグイン*としてデバイス レベルの Api を実装します。 CLI の使用 `plugin` のコマンドライン ・ インタ フェースを追加または削除、プロジェクトに対してこの機能を記載されているコマンド。

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

いくつかのプラットフォームは特別な構成を必要とせずにこの機能をサポート可能性があります。*プラットフォームのサポート*の概要のセクションを参照してください。

### Windows Phone の癖

*   のみ 1 つのメディア ファイルは、一度に再生できます。

*   アプリケーションと他のメディアとの対話に厳格な制限があります。 [詳細については、Microsoft のマニュアル][2]を参照してください。.

 [2]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/hh184838(v=vs.92).aspx