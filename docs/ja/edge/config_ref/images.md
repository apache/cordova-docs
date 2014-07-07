* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. 著作権所有権に関する追加情報のためのこの仕事と分散 NOTICE ファイルを参照してください。 ASF は、Version 2.0 (「ライセンス」）; Apache ライセンスの下であなたにこのファイルをライセンスします。ライセンスに従う場合、このファイルを使用可能性があります。 You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

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
    

Blackberry10

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
    

IOS プラットフォームの網膜ディスプレイの向きが異なる亜種の iPhone/iPod と iPad のバリエーションを指定します。*568 h*ファイルは iPhone 5 の背の高い画面に適用されます。

        ios/screen-ipad-landscape-2x.png
        ios/screen-ipad-landscape.png
        ios/screen-ipad-portrait-2x.png
        ios/screen-ipad-portrait.png
        ios/screen-iphone-landscape-2x.png
        ios/screen-iphone-landscape.png
        ios/screen-iphone-portrait-2x.png
        ios/screen-iphone-portrait.png
        ios/screen-iphone-portrait-568h-2x.png
    

Windows Phone では、単一のスプラッシュ画面のイメージを指定します。

        windows-phone/screen-portrait.jpg
    

次のセクションでは、プラットフォームのガイドで説明されている Sdk と関連するコマンド ライン ツールの操作時のスプラッシュ画面を設定する方法について詳しく説明します。

使用する前に、SplashScreen プラグインをインストールすることを忘れないでください、 `navigator.splashscreen.hide()` または `navigator.splashscreen.show()` のメソッド。

## Android プラットフォーム用のスプラッシュ画面

Android プロジェクトで[9 patch 画像][1]ファイルを置きます `platforms/android/res/drawable*` ディレクトリ。

 [1]: https://developer.android.com/tools/help/draw9patch.html

それぞれのサイズべきであります。

*   エクストララージ (xhdpi): 少なくとも 960 × 720
*   大 (hdpi): 少なくとも 640 × 480
*   媒体 (開度計): 少なくとも 470 × 320
*   小 (ldpi): 少なくとも 426 × 320

既定のスプラッシュ スクリーン イメージ、コルドバでサンプル アプリ既にあるべきで提供される新しい Android プロジェクトを作成するとき、 `platforms/android/res/drawable*` ディレクトリ。 あなた自身のイメージでこれらを置き換えるお気軽に。 提供する場合、独自のスプラッシュ画面のイメージ、コルドバ既定ものここに 8 の同じ順列を提供する必要はありません。 もっとまたはより少なく最適化を使用することができます。 `drawable`[画面サイズ][2]と[代替のリソース][3]をサポート Android 規則に従ってディレクトリ名前をする必要があります.

 [2]: http://developer.android.com/guide/practices/screens_support.html
 [3]: http://developer.android.com/guide/topics/resources/providing-resources.html#AlternativeResources

最上位 `config.xml` ファイル （ものではない `platforms` )、次の環境設定を追加：

    <preference name="SplashScreen" value="screen" />
    <preference name="SplashScreenDelay" value="10000" />
    

最初の行ではスプラッシュ画面として表示するイメージを設定します。 これで png 形式のファイル名は、 `drawable*` ディレクトリ、マイナス、 `.png` 拡張機能。 スプラッシュ スクリーンの既定値は `screen` (ファイルの `platforms/android/res/drawable*/screen.png` ) 任意の名前をイメージよりも、他のであれば、 `screen.png` で、 `drawable*` ディレクトリ、この行を追加/修正する必要があります。

2 番目の行 (ミリ秒単位) が表示されますどのように長いスプラッシュ ・ スクリーンのデフォルトの遅延を設定します。これは最悪の予想開始時刻する必要があります。SplashScreenDelay の既定値は 3000 ミリ秒です。

最後に、ベスト プラクティスとして、スプラッシュ画面が表示されますのみ必要な限り。 アプリが開始、webview が読み込まれたとき、アプリはメイン ビューを表示できるように準備ができているとすぐにスプラッシュ画面を隠す必要があります。 アプリ開始時刻が異なるためかなり CPU 速度、およびネットワークなどの要因の数のため、アプリを明示的に呼び出すことをお勧め `navigator.splashscreen.hide()` 応答する JavaScript のメソッドで、 `deviceready` イベント。 それ以外の場合、スプラッシュ スクリーンが表示されます、上記構成の SplashScreenDelay 値を必要以上に長い可能性があります。 このイベント駆動型のアプローチは、常に一定の時間に表示されるスプラッシュ画面を持つ対強くお勧めします。

## IOS プラットフォーム用のスプラッシュ画面

IOS プロジェクトにスプラッシュ画面画像をコピー `Resources/splash` ディレクトリ。 IPad や iPhone などをサポートするデバイスのためのこれらの画像を追加のみです。 各イメージのサイズをする必要があります。

*   Default-568h@2x~iphone.png (640x1136 pixels)
*   Default-Landscape@2x~ipad.png (2048 x 1496 ピクセル)
*   Default-Landscape~ipad.png (1024x748 pixels)
*   Default-Portrait@2x~ipad.png (1536x2008 pixels)
*   Default-Portrait~ipad.png (768x1004 pixels)
*   Default@2x~iphone.png (640x960 pixels)
*   Default~iphone.png (320x480 pixels)

## BlackBerry 10 プラットフォーム用のスプラッシュ画面

各解像度とサポートしたいロケールの config.xml にリム： スプラッシュ要素を追加します。

[http://developer.blackberry.com/html5/documentation/rim\_splash\_element.html][4]

 [4]: http://developer.blackberry.com/html5/documentation/rim_splash_element.html