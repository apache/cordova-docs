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

當工作在 CLI 中你可以定義應用程式圖示通過 `<icon>` 元素 （ `config.xml` ）。如果你不指定一個圖示然後使用 Apache 科爾多瓦徽標。

        <icon src="res/ios/icon.png" platform="ios" width="57" height="57" density="mdpi" />
    

src： （必填） 指定的影像檔，www 的目錄位置

平臺： （可選） 目標平臺

寬度： （可選） 圖示的寬度 （以圖元為單位）

高度： （可選） 圖示的高度 （以圖元為單位）

密度： （可選） android 具體，指定圖示密度

下面的配置可以用於定義單個預設圖示，將用於所有平臺。

        <icon src="res/icon.png" />
    

為每個平臺還可以定義設置以適合不同的螢幕解析度圖元完美圖示。

亞馬遜火 OS

         <platform name="amazon-fireos">
                  <icon src="res/android/ldpi.png" density="ldpi" />
                  <icon src="res/android/mdpi.png" density="mdpi" />
                  <icon src="res/android/hdpi.png" density="hdpi" />
                  <icon src="res/android/xhdpi.png" density="xhdpi" />
         </platform>
    

Android 系統

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
    

請參閱針對多個大小和地區設定黑莓的文檔。[] HTTP://developer.blackberry.com/html5/documentation/icon_element.html

火狐瀏覽器作業系統

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
    

IOS 平臺指定變形為 iPhone 和 iPod 和 iPad，具有變形為視網膜顯示和不同的方向。*568 h*檔適用于 iPhone 5 的高螢幕：

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

創建新的 Android 專案時，預設的初始螢幕圖像提供科爾多瓦應用程式範例已經應該出現在 `platforms/android/res/drawable*` 的目錄。 隨意替換這些與您自己的圖像。 提供您自己的初始螢幕圖像時, 您不需要提供 8 科爾多瓦的預設在這裡同樣的排列順序。 更多或更少可以使用優化。 `drawable`目錄名稱必須遵循支援[的螢幕大小][2]和[備用資源][3]的 Android 約定.

 [2]: http://developer.android.com/guide/practices/screens_support.html
 [3]: http://developer.android.com/guide/topics/resources/providing-resources.html#AlternativeResources

在頂級 `config.xml` 檔 （不是中的一 `platforms` )，添加以下首選項：

    <preference name="SplashScreen" value="screen" />
    <preference name="SplashScreenDelay" value="10000" />
    

第一行設置為初始螢幕顯示的圖像。 這是在 png 檔的檔案名 `drawable*` 目錄、 減號 `.png` 副檔名。 閃屏的預設值是 `screen` (該檔為 `platforms/android/res/drawable*/screen.png` )，所以如果你形象命名為任何名稱以外 `screen.png` 在 `drawable*` 目錄，您需要添加修改這條線。

第二行設置預設延遲多久閃屏顯示以毫秒為單位。這應該是最壞的預期的開始時間。SplashScreenDelay 的預設值是 3000 毫秒。

最後，作為一種最佳做法，初始螢幕應該是存在只，只要有必要。 當您的應用程式已啟動並已載入 web 視圖時，您的應用程式應隱藏初始螢幕，以便您主視圖是可見的儘快準備好。 因為應用程式開始時間將由多個 CPU 速度和網路等因素造成差別很大，所以建議您的應用程式顯式地調用 `navigator.splashscreen.hide()` 在回應的 JavaScript 方法 `deviceready` 事件。 否則，初始螢幕將可見該您配置上面的 SplashScreenDelay 值，很可能超過必要的。 與具有可見的總是固定工期的初始螢幕高度建議使用此事件驅動方法。

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