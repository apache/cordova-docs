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

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-splashscreen.git
        $ cordova plugin rm org.apache.cordova.core.splashscreen
    

これらのコマンドすべてのターゲット プラットフォームに適用されますが、以下のプラットフォームに固有の構成設定を変更します。

*   （アンドロイド`app/res/xml/config.xml`)
    
        <feature name="SplashScreen">
            <param name="android-package" value="org.apache.cordova.SplashScreen" />
        </feature>
        

*   iOS （`config.xml`)
    
        <feature name="SplashScreen">
            <param name="ios-package" value="CDVSplashScreen" />
        </feature>
        

いくつかのプラットフォームは特別な構成を必要とせずにこの機能をサポート可能性があります。概要については、プラットフォームのサポートを参照してください。

## セットアップ

### アンドロイド

1.  Android プロジェクトにスプラッシュ スクリーンのイメージをコピー `res/drawable` ディレクトリ。各画像のサイズをする必要があります。

*   エクストララージ (xhdpi): 少なくとも 960 × 720
*   大 (hdpi): 少なくとも 640 × 480
*   媒体 (開度計): 少なくとも 470 × 320
*   小 (ldpi): 少なくとも 426 × 320
    
    [9 Patch 画像][1]にスプラッシュ スクリーンを使用してください。

 [1]: https://developer.android.com/tools/help/draw9patch.html

1.  `onCreate`を拡張するクラスのメソッド `DroidGap` 、次の 2 行を追加。
    
        super.setIntegerProperty("splashscreen", R.drawable.splash);
        super.loadUrl(Config.getStartUrl(), 10000);
        
    
    最初の行は、splashscreen として表示するイメージを設定します。 場合は任意の名前をあなたのイメージよりも、他 `splash.png` 、この行を変更する必要があります。 2 行目は、通常の `super.loadUrl` ライン、しかしそれはスプラッシュ画面のタイムアウト値を指定する 2 番目のパラメーター。 この例ではスプラッシュ画面が 10 秒間表示されます。 アプリケーションが受信するスプラッシュ画面を却下する、 `deviceready` イベント、呼び出し、 `navigator.splashscreen.hide()` メソッド。

### iOS

IOS のプロジェクトに、スプラッシュ画面画像をコピー `Resources/splash` ディレクトリ。 IPad や iPhone などをサポートするデバイスのイメージだけを追加します。 各イメージのサイズをする必要があります。

*   Default-568h@2x~iphone.png (640 x 1136 ピクセル)
*   Default-Landscape@2x~ipad.png (2048 x 1496 ピクセル)
*   デフォルト Landscape~ipad.png (1024 x 748 ピクセル)
*   Default-Portrait@2x~ipad.png (2008 × 1536 ピクセル)
*   デフォルト Portrait~ipad.png (1004 x 768 ピクセル)
*   Default@2x~iphone.png (640 x 960 ピクセル)
*   Default~iphone.png (320 x 480 ピクセル)