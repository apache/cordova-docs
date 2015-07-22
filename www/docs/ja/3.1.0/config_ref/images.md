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

title: アイコンとスプラッシュ画面
---

# アイコンとスプラッシュ画面

このセクションは、アプリのアイコンと様々 なプラットフォームでは、両方のコルドバ CLI (コマンド ライン インターフェイスで説明します) で作業するときのオプションのスプラッシュ スクリーンを構成する方法を示していますまたは （プラットフォームのガイドで詳述） 特定のプラットフォーム SDK ツールを使用して。

## CLI でアイコンを構成します。

作業する場合、CLI で、アイコンのソース ファイル内にあるさまざまなプラットフォーム固有のサブディレクトリがあり、プロジェクトの `www/res/icons` ディレクトリ。 新しく作成したプロジェクトをターゲットにするプラットフォームを交換するためのコルドバのアイコンの既定のセットが付属します。

Android の低、中、高、および超高解像度アイコンを指定します。

        android/icon-36-ldpi.png
        android/icon-48-mdpi.png
        android/icon-72-hdpi.png
        android/icon-96-xhdpi.png
    

IOS プラットフォームは、Ipad 用 72 ピクセル正方形アイコンを指定し、網膜の高解像度の*2 倍*の亜種を Iphone や Ipod、57 ピクセルのアイコンが表示されます。

        ios/icon-57-2x.png
        ios/icon-57.png
        ios/icon-72-2x.png
        ios/icon-72.png
    

Windows Phone には、48 ピクセルの既定アイコンと共に様々 なデバイスのバック グラウンド アプリケーションを表すときに使用する画像を並べて表示を指定します。

        windows-phone/icon-48.png
        windows-phone/icon-62-tile.png
        windows-phone/icon-173-tile.png
    

ブラックベリーは、80 ピクセルのアイコンが必要です。

        blackberry/icon-80.png
    

Tizen は、128 ピクセルのアイコンが必要です。

        tizen/icon-128.png
    

## CLI でスプラッシュ スクリーンを構成します。

多くのプラットフォームで、アプリの導入のスプラッシュ画面の表示を有効にするには、Splashscreen API を使用します。 作業する場合、CLI で、スプラッシュ スクリーンのソース ファイル内にあるプロジェクトの `www/res/screens` サブディレクトリ。

Android は両方の肖像画および横向きスプラッシュ画面画像の低、中、高、および超高解像度を指定します。

        android/screen-hdpi-landscape.png
        android/screen-hdpi-portrait.png
        android/screen-ldpi-landscape.png
        android/screen-ldpi-portrait.png
        android/screen-mdpi-landscape.png
        android/screen-mdpi-portrait.png
        android/screen-xhdpi-landscape.png
        android/screen-xhdpi-portrait.png
    

IOS プラットフォームの網膜ディスプレイの向きが異なる亜種の iPhone/iPod と iPad のバリエーションを指定します。*568 H*ファイルは iPhone 5 の背の高い画面のカスタマイズされます。

        ios/screen-ipad-landscape-2x.png
        ios/screen-ipad-landscape.png
        ios/screen-ipad-portrait-2x.png
        ios/screen-ipad-portrait.png
        ios/screen-iphone-landscape-2x.png
        ios/screen-iphone-landscape.png
        ios/screen-iphone-portrait-2x.png
        ios/screen-iphone-portrait.png
        ios/screen-iphone-portrait-568h-2x.png
    

ブラックベリーと Windows Phone 単一のスプラッシュ画面のイメージを指定します。

        blackberry/screen-225.png
        windows-phone/screen-portrait.jpg
    

次のセクションでは、プラットフォームのガイドで説明されている Sdk と関連するコマンド ライン ツールの操作時のスプラッシュ画面を設定する方法について詳しく説明します。

## Android プラットフォーム用のスプラッシュ画面

Android プロジェクトで[9 patch 画像][1]ファイルを置きます `res/drawable` ディレクトリ。それぞれのサイズべきであります。

 [1]: https://developer.android.com/tools/help/draw9patch.html

*   エクストララージ (xhdpi): 少なくとも 960 × 720
*   大 (hdpi): 少なくとも 640 × 480
*   媒体 (開度計): 少なくとも 470 × 320
*   小 (ldpi): 少なくとも 426 × 320

`config.xml`、次の環境設定を追加：

    <preference name="splashscreen", "splash" />
    <preference name="splashScreenDelay", 10000 />
    

最初の行ではスプラッシュ画面として表示するイメージを設定します。場合は任意の名前をあなたのイメージよりも、他 `splash.png` 、この行を変更する必要があります。

2 行目はミリ秒にスプラッシュ ・ スクリーンが表示されますどのくらいの時間の遅延を設定します。 アプリケーションが受信するスプラッシュ画面を却下する、 `[deviceready](../cordova/events/events.deviceready.html)` イベント、呼び出し、 `navigator.splashscreen.hide()` メソッド。

## IOS プラットフォーム用のスプラッシュ画面

IOS のプロジェクトに、スプラッシュ画面画像をコピー `Resources/splash` ディレクトリ。 IPad や iPhone などをサポートするデバイスのイメージだけを追加します。 各イメージのサイズをする必要があります。

*   Default-568h@2x~iphone.png (640x1136 pixels)
*   Default-Landscape@2x~ipad.png (2048 x 1496 ピクセル)
*   Default-Landscape~ipad.png (1024x748 pixels)
*   Default-Portrait@2x~ipad.png (1536x2008 pixels)
*   Default-Portrait~ipad.png (768x1004 pixels)
*   Default@2x~iphone.png (640x960 pixels)
*   Default~iphone.png (320x480 pixels)

## BlackBerry 10 プラットフォーム用のスプラッシュ画面

スプラッシュ画面画像をプロジェクトにコピー `res/screen/blackberry10` ディレクトリ。ファイル名にする必要があります。

*   splash-1280x768.png (1280x768 pixels)
*   splash-720x720.png (720x720 pixels)
*   splash-768x1280.png (768x1280 pixels)