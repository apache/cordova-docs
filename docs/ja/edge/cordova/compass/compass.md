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

# コンパス

> デバイスが指している方向を取得します。

## メソッド

*   compass.getCurrentHeading
*   compass.watchHeading
*   compass.clearWatch
*   compass.watchHeadingFilter (古い形式)
*   compass.clearWatchFilter (古い形式)

## 引数

*   compassSuccess
*   compassError
*   compassOptions
*   compassHeading

## 機能へのアクセス

バージョン 3.0 は、コルドバ*のプラグイン*としてデバイス レベルの Api を実装します。 CLI の使用 `plugin` のコマンドライン ・ インタ フェースを追加または削除、プロジェクトに対してこの機能を記載されているコマンド。

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-device-orientation.git
        $ cordova plugin rm org.apache.cordova.core.device-orientation
    

これらのコマンドすべてのターゲット プラットフォームに適用されますが、以下のプラットフォームに固有の構成設定を変更します。

*   （アンドロイド`app/res/xml/config.xml`)
    
        < 機能名 =「コンパス」>< param の名前 =「android パッケージ」value="org.apache.cordova.CompassListener"/></機能 >
        

*   iOS （`config.xml`)
    
        < 機能名 =「コンパス」>< param の名前 = 値「ios パッケージ」="CDVLocation"/></機能 >
        

*   (Windows Phone`Properties/WPAppManifest.xml`)
    
        < 機能 >< 機能名 ="ID_CAP_SENSORS"/></機能 >
        
    
    参照: [Windows Phone のアプリケーション マニフェスト][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

いくつかのプラットフォームは特別な構成を必要とせずにこの機能をサポート可能性があります。概要については、プラットフォームのサポートを参照してください。