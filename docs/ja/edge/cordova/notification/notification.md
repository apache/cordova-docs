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

# 通知

> 音、視覚と触覚デバイス通知。

## メソッド

*   `notification.alert`
*   `notification.confirm`
*   `notification.prompt`
*   `notification.beep`
*   `notification.vibrate`

## 機能へのアクセス

バージョン 3.0 は、コルドバ*のプラグイン*としてデバイス レベルの Api を実装します。 CLI の使用 `plugin` のコマンドライン ・ インタ フェースを追加または削除、プロジェクトに対してこの機能を記載されているコマンド。

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-vibration.git
        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-dialogs.git
        $ cordova plugin rm org.apache.cordova.core.dialogs
        $ cordova plugin rm org.apache.cordova.core.vibration
    

これらのコマンドすべてのターゲット プラットフォームに適用されますが、以下のプラットフォームに固有の構成設定を変更します。

*   アンドロイド
    
        (in app/res/xml/config.xml) < 機能名 =「通知」>< param の名前 =「android パッケージ」value="org.apache.cordova.Notification"/></機能 > (app/AndroidManifest.xml) の < 使用許可 android:name="android.permission.VIBRATE"/>
        

*   ブラックベリー WebWorks
    
        (in www/plugins.xml) < 機能名 =「通知」>< param の名前 =「ブラックベリー パッケージ」value="org.apache.cordova.notification.Notification"/></機能 > (www/config.xml) で < id="blackberry.ui.dialog 機能"/>
        

*   iOS （`config.xml`)
    
        < 機能名 =「通知」>< param の名前 = 値「ios パッケージ」="CDVNotification"/></機能 >
        

いくつかのプラットフォームは特別な構成を必要とせずにこの機能をサポート可能性があります。概要については、プラットフォームのサポートを参照してください。