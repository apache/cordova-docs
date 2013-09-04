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

# 接続

> `connection`オブジェクトによって公開されて `navigator.connection` 、デバイスの携帯電話や wifi 接続に関する情報を提供します。

## プロパティ

*   connection.type

## 定数

*   Connection.UNKNOWN
*   Connection.ETHERNET
*   Connection.WIFI
*   Connection.CELL_2G
*   Connection.CELL_3G
*   Connection.CELL_4G
*   Connection.CELL
*   Connection.NONE

## 機能へのアクセス

バージョン 3.0 は、コルドバ*のプラグイン*としてデバイス レベルの Api を実装します。 CLI の使用 `plugin` のコマンドライン ・ インタ フェースを追加または削除、プロジェクトに対してこの機能を記載されているコマンド。

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-network-information.git
        $ cordova plugin rm org.apache.cordova.core.network-information
    

これらのコマンドすべてのターゲット プラットフォームに適用されますが、以下のプラットフォームに固有の構成設定を変更します。

*   アンドロイド
    
        (in app/res/xml/config.xml) < 機能名 ="NetworkStatus">< param の名前 =「android パッケージ」value="org.apache.cordova.NetworkManager"/></機能 > (app/AndroidManifest.xml) で < 使用許可 android:name="android.permission.INTERNET"/>< 使用許可 android:name="android.permission.ACCESS_NETWORK_STATE"/>< 使用許可 android:name="android.permission.READ_PHONE_STATE"/>
        

*   ブラックベリー WebWorks
    
        (in www/plugins.xml) < 機能名 =「ネットワーク ステータス」>< param の名前 ="ブラックベリー パッケージ"value="org.apache.cordova.network.Network"/></機能 >
        

*   iOS （`config.xml`)
    
        < 機能名 ="NetworkStatus">< param の名前 = 値「ios パッケージ」="CDVConnection"/></機能 >
        

*   (Windows Phone`Properties/WPAppManifest.xml`)
    
        < 機能 >< 機能名 ="ID_CAP_NETWORKING"/></機能 >
        
    
    参照: [Windows Phone のアプリケーション マニフェスト][1]

*   (Tizen`config.xml`)
    
        < 機能名に必要な"http://tizen.org/api/systeminfo"= ="true"/>
        
    
    参照: [Tizen Web アプリケーションのアプリケーション マニフェスト][2]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx
 [2]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

いくつかのプラットフォームは特別な構成を必要とせずにこの機能をサポート可能性があります。概要については、プラットフォームのサポートを参照してください。