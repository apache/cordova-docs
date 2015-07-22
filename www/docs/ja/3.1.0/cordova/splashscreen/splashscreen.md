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

# スプラッシュ スクリーン

> 表示し、アプリケーションのスプラッシュ スクリーンを非表示にします。

## メソッド

*   splashscreen.show
*   splashscreen.hide

## 機能へのアクセス

バージョン 3.0 は、コルドバ*のプラグイン*としてデバイス レベルの Api を実装します。 CLI の使用 `plugin` のコマンドライン ・ インタ フェースを追加または削除、プロジェクトに対してこの機能を記載されているコマンド。

        $ cordova plugin add org.apache.cordova.splashscreen
        $ cordova plugin ls
        [ 'org.apache.cordova.splashscreen' ]
        $ cordova plugin rm org.apache.cordova.splashscreen
    

これらのコマンドすべてのターゲット プラットフォームに適用されますが、以下のプラットフォームに固有の構成設定を変更します。

*   （アンドロイド`app/res/xml/config.xml`)
    
        <feature name="SplashScreen">
            <param name="android-package" value="org.apache.cordova.SplashScreen" />
        </feature>
        

*   iOS （`config.xml`)
    
        <feature name="SplashScreen">
            <param name="ios-package" value="CDVSplashScreen" />
        </feature>
        

いくつかのプラットフォームは特別な構成を必要とせずにこの機能をサポート可能性があります。*プラットフォームのサポート*の概要のセクションを参照してください。

これらのイメージを構成する方法の詳細については、アイコンとスプラッシュ画面を参照してください。