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

# イベント

> コルドバのライフ サイクル イベント。

## イベントの種類

*   deviceready
*   一時停止します。
*   再開
*   オンライン
*   オフライン
*   戻るボタン
*   batterycritical
*   batterylow
*   batterystatus
*   メニュー ボタン
*   ［ 検索 ］
*   startcallbutton
*   endcallbutton
*   volumedownbutton
*   volumeupbutton

## 機能へのアクセス

バージョン 3.0、コルドバ implements バッテリー状態と他のデバイス レベルの Api*のプラグイン*として。 バッテリのステータスに関係のない他のすべてのイベントへのアクセスは既定で有効になります。 CLI の使用して `plugin` で、コマンドライン ・ インタ フェースを有効または無効バッテリー イベント説明されたコマンド。

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-battery-status.git
        $ cordova plugin rm org.apache.cordova.core.battery-status
    

これらのコマンドすべてのターゲット プラットフォームに適用されますが、以下のプラットフォームに固有の構成設定を変更します。

*   アンドロイド
    
        (in app/res/xml/config.xml) < 機能名 =「バッテリー」>< param の名前 =「android パッケージ」value="org.apache.cordova.BatteryListener"/></機能 > (app/AndroidManifest.xml) で < 使用許可 android:name="android.permission.BROADCAST_STICKY"/>
        

*   ブラックベリー WebWorks
    
        (in www/plugins.xml) < 機能名 =「バッテリー」>< param の名前「ブラックベリー パッケージ」value="org.apache.cordova.battery.Battery ="/></機能 > (www/config.xml) で < id="blackberry.app 機能"必要 ="true"のバージョン =「1.0.0.0」/>< id="blackberry.app.event 機能"必要 ="true"のバージョン ="1.0.0.0 という"/>< id="blackberry.system.event 機能"必要 ="true"のバージョン =「1.0.0.0」/>
        

*   iOS （`config.xml`)
    
        < 機能名 =「バッテリー」>< param の名前「ios パッケージ」値を = ="CDVBattery"/></機能 >
        

*   (Tizen`config.xml`)
    
        < 機能名に必要な"http://tizen.org/api/systeminfo"= ="true"/>
        
    
    参照: [Tizen Web アプリケーションのアプリケーション マニフェスト][1]

 [1]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

いくつかのプラットフォームは特別な構成を必要とせずにこの機能をサポート可能性があります。概要については、プラットフォームのサポートを参照してください。