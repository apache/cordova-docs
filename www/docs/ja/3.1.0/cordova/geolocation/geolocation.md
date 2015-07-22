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

# 地理位置情報

> `geolocation`オブジェクトの場所データに基づいて、デバイスの GPS センサーから推論されるかネットワーク信号へのアクセスを提供します。

`Geolocation`緯度と経度などのデバイスの場所についてを説明します。 位置情報の共通のソースはグローバル ポジショニング システム （GPS） と IP アドレス、RFID、WiFi および Bluetooth の MAC アドレス、および GSM/cdma 方式携帯 Id などのネットワーク信号から推定される場所にもあります。 API は、デバイスの実際の場所を返すことの保証はありません。

この API は[W3C 地理位置情報 API 仕様][1]に基づいており、既に実装を提供しないデバイス上のみで実行します。

 [1]: http://dev.w3.org/geo/api/spec-source.html

**重要なプライバシーの注意：**地理位置情報データの収集と利用を重要なプライバシーの問題を発生させます。 アプリのプライバシー ポリシーは他の当事者とデータ (たとえば、粗い、罰金、郵便番号レベル、等) の精度のレベルでは共有されているかどうか、アプリが地理位置情報データを使用する方法を議論すべきです。 地理位置情報データと一般に見なされる敏感なそれは人の所在を明らかにすることができますので、保存される場合、彼または彼女の旅行の歴史。 したがって、アプリのプライバシー ポリシーに加えて、強くする必要があります (デバイス オペレーティング システムしない場合そう既に) 地理位置情報データにアクセスするアプリの前にちょうど時間通知を提供しています。 その通知は、上記の (例えば、 **[ok]**を**おかげで**選択肢を提示する) によってユーザーのアクセス許可を取得するだけでなく、同じ情報を提供する必要があります。 詳細については、プライバシーに関するガイドを参照してください。

## メソッド

*   geolocation.getCurrentPosition
*   geolocation.watchPosition
*   geolocation.clearWatch

## 引数

*   geolocationSuccess
*   geolocationError
*   geolocationOptions

## オブジェクト (読み取り専用)

*   Position
*   PositionError
*   Coordinates

## 機能へのアクセス

バージョン 3.0 は、コルドバ*のプラグイン*としてデバイス レベルの Api を実装します。 CLI の使用 `plugin` のコマンドライン ・ インタ フェースを追加または削除、プロジェクトに対してこの機能を記載されているコマンド。

        $ cordova plugin add org.apache.cordova.geolocation
        $ cordova plugin ls
        [ 'org.apache.cordova.geolocation' ]
        $ cordova plugin rm org.apache.cordova.geolocation
    

これらのコマンドすべてのターゲット プラットフォームに適用されますが、以下のプラットフォームに固有の構成設定を変更します。

*   アンドロイド
    
        (in app/res/xml/config.xml)
        <feature name="Geolocation">
            <param name="android-package" value="org.apache.cordova.GeoBroker" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
        <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
        <uses-permission android:name="android.permission.ACCESS_LOCATION_EXTRA_COMMANDS" />
        

*   ブラックベリー WebWorks
    
        (in www/plugins.xml)
        <feature name="Geolocation">
            <param name="blackberry-package" value="org.apache.cordova.geolocation.Geolocation" />
        </feature>
        
        (in www/config.xml)
        <rim:permissions>
            <rim:permit>read_geolocation</rim:permit>
        </rim:permissions>
        

*   iOS （`config.xml`)
    
        <feature name="Geolocation">
            <param name="ios-package" value="CDVLocation" />
        </feature>
        

*   (Windows Phone`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_LOCATION" />
        </Capabilities>
        
    
    参照: [Windows Phone のアプリケーション マニフェスト][2]

 [2]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

いくつかのプラットフォームは特別な構成を必要とせずにこの機能をサポート可能性があります。*プラットフォームのサポート*の概要のセクションを参照してください。