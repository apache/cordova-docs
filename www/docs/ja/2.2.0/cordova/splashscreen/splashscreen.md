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

title: Splashscreen
---

Splashscreen
==========

> アプリケーションのスプラッシュスクリーンを開発者が表示/非表示できるようにします。


メソッド
-------

- [show](splashscreen.show.html)
- [hide](splashscreen.hide.html)

パーミッション
-----------

### Android

#### app/res/xml/config.xml

    <plugin name="SplashScreen" value="org.apache.cordova.SplashScreen"/>

### iOS

#### Cordova.plist

        Plugins ディレクトリー以下にエントリーを追加します - "SplashScreen" がキー、 "CDVSplashScreen" が値です。
        新しいプロジェクトはこのキーを既に持っています。


Setup
-----

### Android

1. スプラッシュスクリーンの画像を Android プロジェクトの res/drawable ディレクトリーにコピーします。画像の各サイズは以下のとおりです:

   - xlarge (xhdpi): 少なくとも 960 x 720
   - large (hdpi): 少なくとも 640 x 480
   - medium (mdpi): 少なくとも 470 x 320
   - small (ldpi): 少なくとも 426 x 320

   スプラッシュスクリーンには [9-patch 画像](https://developer.android.com/tools/help/draw9patch.html) を使用することを強くおすすめします。

2. DroidGap を継承したクラスの onCreate メソッドに、次の2行を追加します:

        super.setIntegerProperty("splashscreen", R.drawable.splash);
        super.loadUrl("file:///android_asset/www/index.html", 10000);

    最初の行 'super.setIntegerProperty' はスプラッシュスクリーンに表示するための画像を設定します。もし名前を splash.png 以外にしている場合は、この行を編集する必要があります。
    次の行 'super.loadUrl' の第2引数はスプラッシュスクリーンのタイムアウトの値です。この例では、スプラッシュスクリーンは 10 秒間表示されます。もしスプラッシュスクリーンを "deviceready" イベントを取得した時に非表示にしたい場合は、 navigator.splashscreen.hide() メソッドを呼び出します。

### iOS

1. スプラッシュスクリーンの画像を iOS プロジェクトの **Resources/splash** ディレクトリーにコピーします。サポートしたいデバイス向けの画像のみ追加するようにしてください (iPad または iPhone のスクリーンサイズ)。画像の各サイズは以下のとおりです:

   - Default-568h@2x~iphone.png (640x1136 pixels)
   - Default-Landscape@2x~ipad.png (2048x1496 pixels)
   - Default-Landscape~ipad.png (1024x748 pixels)
   - Default-Portrait@2x~ipad.png (1536x2008 pixels)
   - Default-Portrait~ipad.png (768x1004 pixels)
   - Default@2x~iphone.png (640x960 pixels)
   - Default~iphone.png (320x480 pixels)






