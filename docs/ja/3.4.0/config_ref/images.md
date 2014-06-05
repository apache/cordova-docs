---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. 著作権所有権に関する追加情報のためのこの仕事と分散 NOTICE ファイルを参照してください。 ASF は、Version 2.0 (「ライセンス」）; Apache ライセンスの下であなたにこのファイルをライセンスします。ライセンスに従う場合、このファイルを使用可能性があります。 You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
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
    

ブラックベリー 10 アイコンの要素を config.xml ファイルが必要です。

        <icon src="blackberry10/icon-86.png" />
    

複数のサイズとロケールは、tareting のためのブラックベリーのマニュアルを参照してください。

[http://developer.blackberry.com/html5/documentation/icon_element.html]

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
    

IOS プラットフォームの網膜ディスプレイの向きが異なる亜種の iPhone/iPod と iPad のバリエーションを指定します。*568 H*ファイルは iPhone 5 の背の高い画面に適用されます。

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

コルドバで提供される既定のスプラッシュ画面画像を使用する場合は、png ファイルをコピーする必要があります `platforms/android/www/res/screen/android` を `platforms/android/res/drawable*/` :

    cd platforms/android/res
    mkdir drawable-port-ldpi
    cp -p ../assets/www/res/screen/android/screen-ldpi-portrait.png drawable-port-ldpi/screen.png
    mkdir drawable-land-ldpi
    cp -p ../assets/www/res/screen/android/screen-ldpi-landscape.png drawable-land-ldpi/screen.png
    mkdir drawable-port-mdpi
    cp -p ../assets/www/res/screen/android/screen-mdpi-portrait.png drawable-port-mdpi/screen.png
    mkdir drawable-land-mdpi
    cp -p ../assets/www/res/screen/android/screen-mdpi-landscape.png drawable-land-mdpi/screen.png
    mkdir drawable-port-hdpi
    cp -p ../assets/www/res/screen/android/screen-hdpi-portrait.png drawable-port-hdpi/screen.png
    mkdir drawable-land-hdpi
    cp -p ../assets/www/res/screen/android/screen-hdpi-landscape.png drawable-land-hdpi/screen.png
    mkdir drawable-port-xhdpi
    cp -p ../assets/www/res/screen/android/screen-xhdpi-portrait.png drawable-port-xhdpi/screen.png
    mkdir drawable-land-xhdpi
    cp -p ../assets/www/res/screen/android/screen-xhdpi-landscape.png drawable-land-xhdpi/screen.png
    

`drawable`[画面サイズ][2]と[代替のリソース][3]をサポート Android 規則に従ってディレクトリ名前をする必要があります.

 [2]: http://developer.android.com/guide/practices/screens_support.html
 [3]: http://developer.android.com/guide/topics/resources/providing-resources.html#AlternativeResources

`config.xml`、次の環境設定を追加：

    <preference name="SplashScreen" value="splash" />
    <preference name="SplashScreenDelay" value="10000" />
    

最初の行ではスプラッシュ画面として表示するイメージを設定します。 これはファイル名で png 形式の `drawable*` ディレクトリ。 場合は任意の名前をイメージ以外 `splash.png` 、この行を変更する必要があります。 ファイル名の拡張子を含めないでください (すなわち、 `.png` )。 コルドバ上記で提供される既定のスプラッシュ スクリーンを使用する場合は、値を使用します`screen`.

2 番目の行 (ミリ秒単位) が表示されますどのように長いスプラッシュ ・ スクリーンのデフォルトの遅延を設定します。これは最大の予想開始時刻する必要があります。SplashScreenDelay の既定値は 3000 ミリ秒です。

最後に、スプラッシュ画面が表示されますのみ必要な限り。 アプリが開始され、webview が読み込まれる、アプリのメイン ビューが表示されるスプラッシュ画面を隠す必要があります。 アプリ開始時刻が異なるためかなりの要因の数が多いのため、アプリを明示的に呼び出すことをお勧め `navigator.splashscreen.hide()` 応答する Javascript のメソッドで、 `deviceready` イベント。 それ以外の場合、スプラッシュ スクリーンが上に構成されている SplashScreenDelay 値の表示されます。 このイベント駆動型のアプローチは、常に一定の時間に表示されるスプラッシュ画面を持つ対強くお勧めします。

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