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

# イベント

> コルドバのライフ サイクル イベント。

## イベントの種類

*   <a href="events.deviceready.html">deviceready</a>
*   <a href="events.pause.html">一時停止します。</a>
*   <a href="events.resume.html">再開</a>
*   <a href="events.online.html">オンライン</a>
*   <a href="events.offline.html">オフライン</a>
*   <a href="events.backbutton.html">戻るボタン</a>
*   <a href="events.batterycritical.html">batterycritical</a>
*   <a href="events.batterylow.html">batterylow</a>
*   <a href="events.batterystatus.html">batterystatus</a>
*   <a href="events.menubutton.html">メニュー ボタン</a>
*   <a href="events.searchbutton.html">［ 検索 ］</a>
*   <a href="events.startcallbutton.html">startcallbutton</a>
*   <a href="events.endcallbutton.html">endcallbutton</a>
*   <a href="events.volumedownbutton.html">volumedownbutton</a>
*   <a href="events.volumeupbutton.html">volumeupbutton</a>

## 機能へのアクセス

バージョン 3.0、コルドバ implements バッテリー状態と他の<a href="../device/device.html">デバイス</a> レベルの Api*のプラグイン*として。 バッテリのステータスに関係のない他のすべてのイベントへのアクセスは既定で有効になります。 CLI の使用して `plugin` で、コマンドライン ・ インタ フェースを有効または無効バッテリー イベント説明されたコマンド。

        $ cordova plugin add org.apache.cordova.battery-status
        $ cordova plugin ls
        [ 'org.apache.cordova.battery-status' ]
        $ cordova plugin rm org.apache.cordova.battery-status
    

これらのコマンドすべてのターゲット プラットフォームに適用されますが、以下のプラットフォームに固有の構成設定を変更します。

*   アンドロイド
    
        (in app/res/xml/config.xml)
        <feature name="Battery">
            <param name="android-package" value="org.apache.cordova.BatteryListener" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.BROADCAST_STICKY" />
        

*   ブラックベリー WebWorks
    
        (in www/plugins.xml)
        <feature name="Battery">
            <param name="blackberry-package" value="org.apache.cordova.battery.Battery" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.app"          required="true" version="1.0.0.0" />
        <feature id="blackberry.app.event"    required="true" version="1.0.0.0" />
        <feature id="blackberry.system.event" required="true" version="1.0.0.0" />
        

*   iOS （`config.xml`)
    
        <feature name="Battery">
            <param name="ios-package" value="CDVBattery" />
        </feature>
        

*   (Tizen`config.xml`)
    
        <feature name="http://tizen.org/api/systeminfo" required="true"/>
        
    
    参照: [Tizen Web アプリケーションのアプリケーション マニフェスト][1]

 [1]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

いくつかのプラットフォームは特別な構成を必要とせずにこの機能をサポート可能性があります。*プラットフォームのサポート*の<a href="../../guide/overview/index.html">概要</a>のセクションを参照してください。