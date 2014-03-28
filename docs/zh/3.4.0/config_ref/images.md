---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. 請參閱分散式與此工作為版權的擁有權有關的其他資訊的通知檔。 ASF 許可證，此檔到你根據 Apache 許可證，2.0 版 （"許可證"） ；您不可能使用此檔除了符合許可證。 You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# 圖示和啟動畫面

這一節演示如何配置應用程式的圖示和可選初始螢幕上的各種平臺上，兩者在科爾多瓦 CLI （描述在命令列介面） 中工作時或使用特定于平臺 SDK 工具 （平臺指南中詳細說明）。

## 在 CLI 中配置圖示

工作時在 CLI 中，圖示原始檔案位於內各種平臺特定子目錄內專案的 `www/res/icons` 目錄。 新創建的專案來與一組預設的科爾多瓦圖示為您替換為您希望為目標的平臺。

Android 系統指定的低、 中、 高、 特高的各項決議的圖示：

        android/icon-36-ldpi.png
        android/icon-48-mdpi.png
        android/icon-72-hdpi.png
        android/icon-96-xhdpi.png
    

IOS 平臺指定 72 圖元正方形圖示為 Ipad，並為 Iphone 和 Ipod，帶有高解析度*2 x*變形為視網膜的 57 圖元圖示顯示：

        ios/icon-57-2x.png
        ios/icon-57.png
        ios/icon-72-2x.png
        ios/icon-72.png
    

Windows Phone 指定預設 48 圖元的圖示，以及各種設備背景平鋪在代表應用程式時使用的圖像：

        windows-phone/icon-48.png
        windows-phone/icon-62-tile.png
        windows-phone/icon-173-tile.png
    

黑莓 10 需要在 config.xml 中的圖示元素：

        <icon src="blackberry10/icon-86.png" />
    

多個大小和地區設定，請參閱 tareting 黑莓的文檔。

[] HTTP://developer.blackberry.com/html5/documentation/icon_element.html

Tizen 需要 128 圖元的圖示：

        tizen/icon-128.png
    

## 在 CLI 中配置初始螢幕

使用閃屏 API 來啟用應用程式的介紹性閃屏在許多平臺上的顯示。 工作時在 CLI 中，初始螢幕原始程式碼檔位於專案的 `www/res/screens` 子目錄。

Android 系統指定這兩個面向肖像和風景閃屏圖像為低、 中、 高、 特高的各項決議：

        android/screen-hdpi-landscape.png
        android/screen-hdpi-portrait.png
        android/screen-ldpi-landscape.png
        android/screen-ldpi-portrait.png
        android/screen-mdpi-landscape.png
        android/screen-mdpi-portrait.png
        android/screen-xhdpi-landscape.png
        android/screen-xhdpi-portrait.png
    

IOS 平臺指定變形為 iPhone 和 iPod 和 iPad，具有變形為視網膜顯示和不同的方向。*568 H*檔適用于 iPhone 5 的高螢幕：

        ios/screen-ipad-landscape-2x.png
        ios/screen-ipad-landscape.png
        ios/screen-ipad-portrait-2x.png
        ios/screen-ipad-portrait.png
        ios/screen-iphone-landscape-2x.png
        ios/screen-iphone-landscape.png
        ios/screen-iphone-portrait-2x.png
        ios/screen-iphone-portrait.png
        ios/screen-iphone-portrait-568h-2x.png
    

Windows Phone 指定單個初始螢幕圖像：

        windows-phone/screen-portrait.jpg
    

以下各節詳細說明了如何設置初始螢幕時使用 Sdk 和相關的命令列工具在平臺指南仲介紹。

別忘了在嘗試使用之前安裝的閃屏外掛程式 `navigator.splashscreen.hide()` 或 `navigator.splashscreen.show()` 方法。

## Android 平臺的初始螢幕

[9-修補程式的圖像][1]檔放在 Android 專案 `platforms/android/res/drawable*` 目錄。

 [1]: https://developer.android.com/tools/help/draw9patch.html

為每個大小應為：

*   xlarge (xhDPI)： 至少 960 × 720
*   大 (下)： 至少 640 × 480
*   中期 (mDPI)： 至少 470 × 320
*   小 (lDPI)： 至少 426 × 320

如果您想要使用在科爾多瓦中提供的預設初始螢幕圖像，您需要將 png 檔從複製 `platforms/android/www/res/screen/android` 到 `platforms/android/res/drawable*/` ：

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
    

`drawable`目錄名稱必須遵循支援[的螢幕大小][2]和[備用資源][3]的 Android 約定.

 [2]: http://developer.android.com/guide/practices/screens_support.html
 [3]: http://developer.android.com/guide/topics/resources/providing-resources.html#AlternativeResources

在 `config.xml` ，添加下列優惠：

    <preference name="SplashScreen" value="splash" />
    <preference name="SplashScreenDelay" value="10000" />
    

第一行設置為初始螢幕顯示的圖像。 這是在 png 檔的檔案名 `drawable*` 目錄。 如果你命名圖像什麼除了 `splash.png` ，您需要修改這條線。 不包括檔副檔名 （即 `.png` ）。 如果您想要使用提供科爾多瓦按上面列出的預設初始螢幕，使用值`screen`.

第二行設置預設延遲多久閃屏顯示以毫秒為單位。這應該是最大的預期的開始時間。SplashScreenDelay 的預設值是 3000 毫秒。

最後，初始螢幕應該是存在只，只要有必要。 當您的應用程式已啟動並已載入 web 視圖時，您的應用程式應隱藏初始螢幕，以便您的主視圖是可見。 因為應用程式開始時間將由多個因素造成差別很大，所以建議您的應用程式顯式地調用 `navigator.splashscreen.hide()` 在回應的 JAVAscript 方法 `deviceready` 事件。 否則，初始螢幕將可見該你上述配置的 SplashScreenDelay 值。 與具有可見的總是固定工期的初始螢幕高度建議使用此事件驅動方法。

## IOS 平臺的初始螢幕

將初始螢幕圖像拷貝到 iOS 專案 `Resources/splash` 目錄。 只添加那些您想要支援的比如 iPad 或者 iPhone 的設備的圖像。 每個圖像的大小應為：

*   Default-568h@2x~iphone.png (640x1136 pixels)
*   Default-Landscape@2x~ipad.png (2048 x 1496 圖元為單位）
*   Default-Landscape~ipad.png (1024x748 pixels)
*   Default-Portrait@2x~ipad.png (1536x2008 pixels)
*   Default-Portrait~ipad.png (768x1004 pixels)
*   Default@2x~iphone.png (640x960 pixels)
*   Default~iphone.png (320x480 pixels)

## 10 黑莓平臺的初始螢幕

將 rim： 初始元素添加到 config.xml 每項決議和您希望支援的地區設定：

[HTTP://developer.blackberry.com/html5/documentation/rim\_splash\_element.html][4]

 [4]: http://developer.blackberry.com/html5/documentation/rim_splash_element.html