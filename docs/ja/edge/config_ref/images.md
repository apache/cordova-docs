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

When working in the CLI you can define app icon(s) via `<icon>` element (`config.xml`). If you do not specify an icon then the Apache Cordova logo is used.

        <icon src="res/ios/icon.png" platform="ios" width="57" height="57" density="mdpi" />
    

src: (必須) www ディレクトリを基準にして、イメージ ファイルの場所を指定します。

プラットフォーム: (省略可能) ターゲット プラットフォーム

幅: (省略可能) アイコンの幅 (ピクセル単位)

height: (optional) icon height in pixels

density: (optional) android specific, specifies icon density

The following configuration can be used to define single default icon which will be used for all platforms.

        <icon src="res/icon.png" />
    

For each platform you can also define a pixel-perfect icons set to fit different screen resolutions.

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
    

See BlackBerry's documentation for targeting multiple sizes and locales. [http://developer.blackberry.com/html5/documentation/icon_element.html]

Firefox OS

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

Don't forget to install the SplashScreen plugin before trying to use the `navigator.splashscreen.hide()` or `navigator.splashscreen.show()` methods.

## Android プラットフォーム用のスプラッシュ画面

Android プロジェクトで[9 patch 画像][1]ファイルを置きます `platforms/android/res/drawable*` ディレクトリ。

 [1]: https://developer.android.com/tools/help/draw9patch.html

それぞれのサイズべきであります。

*   エクストララージ (xhdpi): 少なくとも 960 × 720
*   大 (hdpi): 少なくとも 640 × 480
*   媒体 (開度計): 少なくとも 470 × 320
*   小 (ldpi): 少なくとも 426 × 320

既定のスプラッシュ スクリーン イメージ、コルドバでサンプル アプリ既にあるべきで提供される新しい Android プロジェクトを作成するとき、 `platforms/android/res/drawable*` ディレクトリ。 Feel free to replace these with your own images. When providing your own splash screen images, you do not need to provide the same permutation of 8 as the Cordova default ones here. More or less optimization can be used. The `drawable` directory names must follow the Android conventions for supporting [screen sizes][2] and [alternate resources][3].

 [2]: http://developer.android.com/guide/practices/screens_support.html
 [3]: http://developer.android.com/guide/topics/resources/providing-resources.html#AlternativeResources

In the top-level `config.xml` file (not the one in `platforms`), add the following preferences:

    <preference name="SplashScreen" value="screen" />
    <preference name="SplashScreenDelay" value="10000" />
    

The first line sets the image to display as the splash screen. This is the file name of the png in the `drawable*` directories, minus the `.png` extension. The default value for SplashScreen is `screen` (for the file `platforms/android/res/drawable*/screen.png`), so if you name the image anything other than `screen.png` in the `drawable*` directories, you need to add/modify this line.

The second line sets the default delay of how long the splashscreen appears in milliseconds. This should be the worst-case expected start time. The default value for SplashScreenDelay is 3000 ms.

Finally, as a best practice, the splash screen should be present only as long as necessary. When your app has started and the webview has loaded, your app should hide the splash screen so that your main view is visible as soon as it is ready. Because the app start time will vary quite a bit due to a number of factors such as CPU speed and network, it is recommended that your app explicitly invoke `navigator.splashscreen.hide()` in the JavaScript method that responds to the `deviceready` event. Otherwise the splash screen will be visible for the SplashScreenDelay value that you configured above, which is likely longer than necessary. This event-driven approach is highly recommended versus having the splash screen visible for always a fixed duration.

## IOS プラットフォーム用のスプラッシュ画面

Copy splash screen images into the iOS project's `Resources/splash` directory. Only add those images for the devices you want to support, such as iPad or iPhone. The size of each image should be:

*   Default-568h@2x~iphone.png (640x1136 pixels)
*   Default-Landscape@2x~ipad.png (2048 x 1496 ピクセル)
*   Default-Landscape~ipad.png (1024x748 pixels)
*   Default-Portrait@2x~ipad.png (1536x2008 pixels)
*   Default-Portrait~ipad.png (768x1004 pixels)
*   Default@2x~iphone.png (640x960 pixels)
*   Default~iphone.png (320x480 pixels)

## BlackBerry 10 プラットフォーム用のスプラッシュ画面

Add a rim:splash element to config.xml for each resolution and locale you wish to support:

[http://developer.blackberry.com/html5/documentation/rim\_splash\_element.html][4]

 [4]: http://developer.blackberry.com/html5/documentation/rim_splash_element.html