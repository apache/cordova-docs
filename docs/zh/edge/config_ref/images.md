* * *

許可證： 根據一個或多個參與者授權合約許可到 Apache 軟體基金會 （ASF）。 請參閱分散式與此工作為版權的擁有權有關的其他資訊的通知檔。 ASF 許可證，此檔到你根據 Apache 許可證，2.0 版 （"許可證"） ；您不可能使用此檔除了符合許可證。 You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# 圖示和啟動畫面

這一節演示如何配置應用程式的圖示和可選初始螢幕上的各種平臺上，兩者在科爾多瓦 CLI （描述在命令列介面） 中工作時或使用特定于平臺 SDK 工具 （平臺指南中詳細說明）。

## 在 CLI 中配置圖示

當工作在 CLI 中你可以定義應用程式圖示通過 `<icon>` 元素 （ `config.xml` ）。如果你不指定一個圖示然後使用 Apache 科爾多瓦徽標。

        <icon src="res/ios/icon.png" platform="ios" width="57" height="57" density="mdpi" />
    

src： （必填） 指定的影像檔，與您的專案目錄的位置

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

         < 平臺名稱 ="ios">< ！ — — iOS 7.0 +--> < ！ — — iPhone / iPod Touch--> < 圖示 src="res/ios/icon-60.png"寬度 ="60"高度 ="60"/ >< 圖示 src ="res/ios/icon-60@2x.png"寬度 ="120"高度 ="120"/ ><! — — iPad--> < 圖示 src="res/ios/icon-76.png"寬度 ="76"高度 ="76"/ >< 圖示 src ="res/ios/icon-76@2x.png"寬度 ="152"高度 ="152"/ >< ！ — — iOS 6.1--> < ！ — — Spotlight 圖示--> < 圖示 src="res/ios/icon-40.png"寬度 ="40"高度 ="40"/ >< 圖示 src ="res/ios/icon-40@2x.png"寬度 ="80"高度 ="80"/ >< ！ — — iPhone / iPod Touch--> < 圖示 src="res/ios/icon.png"寬度 ="57"高度 ="57"/ >< 圖示 src ="res/ios/icon@2x.png"寬度 ="114"高度 ="114"/ ><! — — iPad--> < 圖示 src="res/ios/icon-72.png"寬度 ="72"高度 ="72"/ >< 圖示 src ="res/ios/icon-72@2x.png"寬度 ="144"高度 ="144"/ >< ！ — — iPhone 聚光燈和設置圖示--> < 圖示 src="res/ios/icon-small.png"寬度 ="29"高度 ="29"/>< 圖示 src ="res/ios/icon-small@2x.png"寬度 ="58"高度 ="58"/ ><! — — iPad 聚光燈和設置圖示--> < 圖示 src="res/ios/icon-50.png"寬度 ="50"高度 ="50"/ >< 圖示 src ="res/ios/icon-50@2x.png"寬度 ="100"高度 ="100"/ >< / 平臺 >
    

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

在頂級 `config.xml` 檔 （不是在一個 `platforms` ），添加像那些在此指定的配置元素。

# 配置示例

請注意"src"屬性的值是相對於專案目錄而不是 www 目錄。 你可以命名源映射任何你喜歡的。 在應用程式中的內部名稱取決於科爾多瓦。

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
        <!-- images are determined by width and height. 以下支援--> < 飛濺 src="res/screen/ios/Default~iphone.png"寬度 ="320"高度 ="480"/ >< 飛濺 src="res/screen/ios/Default@2x~iphone.png"寬度 ="640"高度 ="960"/ >< 飛濺 src="res/screen/ios/Default-Portrait~ipad.png"寬度 ="768"高度 ="1024"/ >< 飛濺 src="res/screen/ios/Default-Portrait@2x~ipad.png"寬度 ="1536"高度 ="2048"/ >< 飛濺 src="res/screen/ios/Default-Landscape~ipad.png"寬度 ="1024"高度 ="768"/ >< 飛濺 src="res/screen/ios/Default-Landscape@2x~ipad.png"寬度 ="2048"高度 ="1536"/ >< 飛濺 src="res/screen/ios/Default-568h@2x~iphone.png"寬度 ="640"高度 ="1136"/ >< / 平臺 >< 平臺名稱 ="wp8"><! — — 圖像由寬度和高度。 The following are supported -->
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
    

# 支援的平臺

到目前為止 （科爾多瓦 3.5.0 7 月 2014年) 以下平臺支援的閃屏。

    android
    ios
    wp8
    windows8
    blackberry10
    

# 閃屏外掛程式

Apache 科爾多瓦還提供特殊飛濺螢幕外掛程式，它可以用來以程式設計方式顯示和隱藏在應用程式啟動 HTTPs://github.com/apache/cordova-plugin-splashscreen 期間的初始螢幕