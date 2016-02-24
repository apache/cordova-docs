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

場合、CLI での作業を定義できますアプリケーション アイコンを介して `<icon>` 要素 ( `config.xml` )。アイコンを指定しない場合、Apache コルドバ ロゴを使用します。

        <icon src="res/ios/icon.png" platform="ios" width="57" height="57" density="mdpi" />
    

src: (必須)、プロジェクト ディレクトリを基準にして、イメージ ファイルの場所を指定します。

プラットフォーム: (省略可能) ターゲット プラットフォーム

幅: (省略可能) アイコンの幅 (ピクセル単位)

高さ: （オプション） アイコンの高さ (ピクセル単位)

密度: (省略可能) アンドロイド特定、アイコンの密度を指定します

次の構成は、すべてのプラットフォーム用に使用される 1 つの既定のアイコンを定義する使用できます。

        <icon src="res/icon.png" />
    

プラットフォームごとに異なる画面解像度に合わせてピクセル パーフェクトなアイコンも定義できます。

アマゾン火 OS

         <platform name="amazon-fireos">
                  <icon src="res/android/ldpi.png" density="ldpi" />
                  <icon src="res/android/mdpi.png" density="mdpi" />
                  <icon src="res/android/hdpi.png" density="hdpi" />
                  <icon src="res/android/xhdpi.png" density="xhdpi" />
         </platform>
    

アンドロイド

         <platform name="android">
                  <icon src="res/android/ldpi.png" density="ldpi" />
                  <icon src="res/android/mdpi.png" density="mdpi" />
                  <icon src="res/android/hdpi.png" density="hdpi" />
                  <icon src="res/android/xhdpi.png" density="xhdpi" />
         </platform>
    

BlackBerry10

         <platform name="blackberry10">
                  <icon src="res/bb10/icon-86.png" />
                  <icon src="res/bb10/icon-150.png" />
         </platform>
    

複数のサイズとロケールのブラックベリーのマニュアルを参照してください。[http://developer.blackberry.com/html5/documentation/icon_element.html]

Firefox の OS

         <platform name="firefoxos">
                  <icon src="res/ff/logo.png" width="60" height="60" />
         </platform>
    

iOS

         <platform name="ios">
                  <!-- iOS 8.0+ -->
                  <!-- iPhone 6 Plus  -->
                  <icon src="res/ios/icon-60@3x.png" width="180" height="180" />
                  <!-- iOS 7.0+ -->
                  <!-- iPhone / iPod Touch  -->
                  <icon src="res/ios/icon-60.png" width="60" height="60" />
                  <icon src="res/ios/icon-60@2x.png" width="120" height="120" />
                  <!-- iPad -->
                  <icon src="res/ios/icon-76.png" width="76" height="76" />
                  <icon src="res/ios/icon-76@2x.png" width="152" height="152" />
                  <!-- iOS 6.1 -->
                  <!-- Spotlight Icon -->
                  <icon src="res/ios/icon-40.png" width="40" height="40" />
                  <icon src="res/ios/icon-40@2x.png" width="80" height="80" />
                  <!-- iPhone / iPod Touch -->
                  <icon src="res/ios/icon.png" width="57" height="57" />
                  <icon src="res/ios/icon@2x.png" width="114" height="114" />
                  <!-- iPad -->
                  <icon src="res/ios/icon-72.png" width="72" height="72" />
                  <icon src="res/ios/icon-72@2x.png" width="144" height="144" />
                  <!-- iPhone Spotlight and Settings Icon -->
                  <icon src="res/ios/icon-small.png" width="29" height="29" />
                  <icon src="res/ios/icon-small@2x.png" width="58" height="58" />
                  <!-- iPad Spotlight and Settings Icon -->
                  <icon src="res/ios/icon-50.png" width="50" height="50" />
                  <icon src="res/ios/icon-50@2x.png" width="100" height="100" />
         </platform>
    

Tizen

         <platform name="tizen">
                  <icon src="res/tizen/icon-128.png" width="128" height="128" />
         </platform>
    

Windows Phone8

         <platform name="wp8">
                  <icon src="res/wp/ApplicationIcon.png" width="99" height="99" />
                  <!-- tile image -->
                  <icon src="res/wp/Background.png" width="159" height="159" />
         </platform>
    

Windows8

         <platform name="windows8">
                  <icon src="res/windows8/logo.png" width="150" height="150" />
                  <icon src="res/windows8/smalllogo.png" width="30" height="30" />
                  <icon src="res/windows8/storelogo.png" width="50" height="50" />
         </platform>
    

## CLI でスプラッシュ スクリーンを構成します。

最上位 `config.xml` ファイル （ものではない `platforms` ）、ここで指定したそれらのような構成要素を追加します。

# 構成の例

"Src"属性の値は、プロジェクト ディレクトリからの相対ではなく、www ディレクトリに注意してください。 どのようにソース イメージ名前ことができます。 アプリの内部名はコルドバによって決定されます。

    <platform name="android">
        <!-- you can use any density that exists in the Android project -->
        <splash src="res/screen/android/splash-land-hdpi.png" density="land-hdpi"/>
        <splash src="res/screen/android/splash-land-ldpi.png" density="land-ldpi"/>
        <splash src="res/screen/android/splash-land-mdpi.png" density="land-mdpi"/>
        <splash src="res/screen/android/splash-land-xhdpi.png" density="land-xhdpi"/>
    
        <splash src="res/screen/android/splash-port-hdpi.png" density="port-hdpi"/>
        <splash src="res/screen/android/splash-port-ldpi.png" density="port-ldpi"/>
        <splash src="res/screen/android/splash-port-mdpi.png" density="port-mdpi"/>
        <splash src="res/screen/android/splash-port-xhdpi.png" density="port-xhdpi"/>
    </platform>
    
    <platform name="ios">
        <!-- images are determined by width and height. The following are supported -->
        <splash src="res/screen/ios/Default~iphone.png" width="320" height="480"/>
        <splash src="res/screen/ios/Default@2x~iphone.png" width="640" height="960"/>
        <splash src="res/screen/ios/Default-Portrait~ipad.png" width="768" height="1024"/>
        <splash src="res/screen/ios/Default-Portrait@2x~ipad.png" width="1536" height="2048"/>
        <splash src="res/screen/ios/Default-Landscape~ipad.png" width="1024" height="768"/>
        <splash src="res/screen/ios/Default-Landscape@2x~ipad.png" width="2048" height="1536"/>
        <splash src="res/screen/ios/Default-568h@2x~iphone.png" width="640" height="1136"/>
        <splash src="res/screen/ios/Default-667h.png" width="750" height="1334"/>
        <splash src="res/screen/ios/Default-736h.png" width="1242" height="2208"/>
        <splash src="res/screen/ios/Default-Landscape-736h.png" width="2208" height="1242"/>
    </platform>
    
    <platform name="wp8">
        <!-- images are determined by width and height. The following are supported -->
        <splash src="res/screen/wp8/SplashScreenImage.jpg" width="768" height="1280"/>
    </platform>
    
    <platform name="windows8">
        <!-- images are determined by width and height. The following are supported -->
        <splash src="res/screen/windows8/splashscreen.png" width="620" height="300"/>
    </platform>
    
    <platform name="blackberry10">
        <!-- Add a rim:splash element for each resolution and locale you wish -->
        <!-- http://developer.blackberry.com/html5/documentation/rim_splash_element.html -->
        <rim:splash src="res/screen/windows8/splashscreen.png"/>
    </platform>
    
    
    <preference name="SplashScreenDelay" value="10000" />
    

# サポートされているプラットフォーム

今の時点で （コルドバ 3.5.0 2014 年 7 月)、次のプラットフォームのスプラッシュ スクリーンをサポートします。

    android
    ios
    wp8
    windows8
    blackberry10
    

# Splashscreen プラグイン

Apache コルドバはプログラムで表示し、アプリケーション起動 https://github.com/apache/cordova-plugin-splashscreen 中にスプラッシュ スクリーンを非表示するために使用できる特別なスプラッシュ画面のプラグインを提供しています