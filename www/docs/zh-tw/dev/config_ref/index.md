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

title: Config.xml 檔
---

# Config.xml 檔

與全域設定檔，可以控制應用程式的行為的許多方面 `config.xml` 。 這與平臺無關的 XML 檔被安排基於 W3C 的[打包 Web 應用程式 （視窗小部件）][1]規範，並擴展指定核心科爾多瓦 API 功能、 外掛程式和平臺特定的設置。

 [1]: http://www.w3.org/TR/widgets/

為專案創建與科爾多瓦 CLI （描述在命令列介面），可以在頂層目錄中找到此檔：

        app/config.xml
    

請注意之前的版本 3.3.1-0.2.0，該檔存在 `app/www/config.xml` ，並且仍然支援讓它在這裡。

當使用 CLI 來生成專案時，此檔的版本被動地被覆制到各種 `platforms/` 子目錄，例如：

        app/platforms/ios/AppName/config.xml
        app/platforms/blackberry10/www/config.xml
        app/platforms/android/res/xml/config.xml
    

本節詳細介紹全球和跨平臺的配置選項。請參見以下各節為平臺特定的選項：

*   [iOS 配置](../guide/platforms/ios/config.html)
*   [Android 系統組態](../guide/platforms/android/config.html)
*   [黑莓 10 配置](../guide/platforms/blackberry10/config.html)

除了下面詳述的各種配置選項，您還可以配置每個目標平臺的圖像應用程式的核心的集。有關更多資訊，請參見圖示和啟動畫面。

## 核心配置元素

此示例顯示了預設的 `config.xml` 生成的 CLI 的 `create` 命令，所述的命令列介面：

        <widget id="com.example.hello" version="0.0.1">
            <name>HelloWorld</name>
            <description>
                A sample Apache Cordova application that responds to the deviceready event.
            </description>
            <author email="dev@callback.apache.org" href="http://cordova.io">
                Apache Cordova Team
            </author>
            <content src="index.html" />
            <access origin="*" />
        </widget>
    

以下的配置元素出現在頂級 `config.xml` 檔，並在所有受支援的科爾多瓦平臺支援：

*   `<widget>`元素的 `id` 屬性提供了應用程式的反向域識別碼和 `version` 主要/次要/修補程式符號表示其完整版本號碼。
    
    小部件標記也可以指定替代版本，即 versionCode 為安卓系統和 CFBundleVersion 的 iOS 的屬性。請參閱下面的附加版本控制部分的詳細資訊。

*   `<name>`元素指定應用程式的正式名稱，因為它出現在設備的主畫面上和在應用程式商店介面內。

*   `<description>`和 `<author>` 的元素指定的中繼資料和聯繫資訊，可能會出現在應用程式商店清單內。

*   可選的 `<content>` 元素在頂級 web 資產目錄中定義應用程式的起始頁。 預設值是 `index.html` ，其中通常出現在一個專案中的頂級 `www` 目錄。

*   `<access>`元素定義應用程式能夠與進行通信的外部域的集。 如上所示的預設值允許它訪問任何伺服器。 請參閱域白名單指南的詳細資訊。

*   `<preference>`標記設置各種選項作為對 `name` / `value` 屬性。 每個首選項的 `name` 是不區分大小寫。 很多優惠是獨有的特定平臺上，如列于此頁的頂部。 以下各節詳細介紹了適用于多個平臺的首選項。

### 其他的版本控制

同時，Android 和 iOS iOS 支援第二個版本字串 （或數位） 除了一個可見在應用程式商店， [versionCode][2]為安卓系統和[CFBundleVersion][3] 。 下面是一個示例，顯式地設置 versionCode 和 CFBundleVersion

 [2]: http://developer.android.com/tools/publishing/versioning.html
 [3]: http://stackoverflow.com/questions/4933093/cfbundleversion-in-the-info-plist-upload-error

        <widget id="io.cordova.hellocordova"
          version="0.0.1"
          android-versionCode="7"
          ios-CFBundleVersion="3.3.3">
    

如果不指定替代版本，則將使用以下預設值：

        // assuming version = MAJOR.MINOR.PATCH-whatever
        versionCode = PATCH + MINOR * 100 + MAJOR * 10000
        CFBundleVersion = "MAJOR.MINOR.PATCH"
    

## 全球首選項

以下全球首選項適用于所有平臺：

*   `Fullscreen`使您可以隱藏在螢幕頂部的狀態列。預設值是 `false` 。示例：
    
        <preference name="Fullscreen" value="true" />
        

## 多平臺首選項

下面的首選項應用到多個平臺，但不是向他們：

*   `DisallowOverscroll`(boolean 類型的值，預設值為 `false` ）： 設置為 `true` 如果你不想要當使用者滾動過去的開頭或結尾的內容時顯示的任何回饋資訊的介面。
    
        <preference name="DisallowOverscroll" value="true"/>
        
    
    適用于 Android 和 iOS。 在 iOS，overscroll 手勢事業內容反彈到其原始位置。 在 android 系統，它們產生一個更微妙的光暈效果沿的頂部或底部邊緣的內容。

*   `BackgroundColor`： 設置應用程式的背景色。 支援四個位元組的十六進位值，與第一個位元組代表一個 Alpha 色板、 和標準的 RGB 值為以下三個位元組。 此示例指定藍色：
    
        <preference name="BackgroundColor" value="0xff0000ff"/>
        
    
    適用于 Android 和黑莓手機。覆蓋 CSS 否則為可跨*所有*平臺，例如：`body{background-color:blue}`.

*   `HideKeyboardFormAccessoryBar`(boolean 類型的值，預設值為 `false` ）： 設置為 `true` ，隱藏其他工具列出現在鍵盤上方説明使用者導航到另一個表單輸入從。
    
        <preference name="HideKeyboardFormAccessoryBar" value="true"/>
        
    
    適用于黑莓手機。

*   `Orientation`（字串，預設值為 `default`）： 允許您鎖定方向並防止介面回應變化的方向旋轉。 可能的值是 `default`，`landscape` 或 `portrait`。 示例：
    
        <preference name="Orientation" value="landscape" />
        
    
    此外，您可以指定任何特定于平臺的定位值如果您放置 `<preference>` 元素中的 `<platform>` 元素：
    
        <platform name="android">
            <preference name="Orientation" value="sensorLandscape" />
        </platform>
        
    
    適用于 Android、 iOS，WP8，亞馬遜火 OS 和火狐瀏覽器的作業系統。
    
    **注意**： `default` 值意味著科爾多瓦將帶定位首選項條目從平臺的清單/設定檔允許回退到其預設行為的平臺。
    
    對於 iOS，指定縱向和橫向模式您將使用平臺特定的值`所有`:
    
        <platform name="ios">
            <preference name="Orientation" value="all" />
        </platform>
        
## *功能*元素

如果你使用的 CLI 來構建應用程式，您將使用`外掛程式`命令來啟用設備的 Api。 這不修改頂級`config.xml`檔中，所以`< 功能 >`元素並不適用于您的工作流。 如果您直接在 SDK 和使用特定于平臺的`config.xml`檔作為源工作，你使用`< 功能 >`標記啟用設備級 Api 和外部外掛程式。 他們經常出現以特定于平臺的`config.xml`檔中的自訂值。 例如，下面是如何指定設備 API 為 Android 專案:

        <feature name="Device">
            <param name="android-package" value="org.apache.cordova.device.Device" />
        </feature>
    

這裡是 iOS 專案元素的顯示方式:

        <feature name="Device">
            <param name="ios-package" value="CDVDevice" />
        </feature>
    

有關如何指定每個功能，請參閱 API 參考的詳細資訊。看到外掛程式的外掛程式開發指南的詳細資訊。

## *平臺*的元素

使用 CLI 來構建應用程式，時，有時需要指定首選項或其他特定于特定平臺的元素。 `<platform>`元素用於指定應該只出現在一個特定于平臺的`config.xml`檔中的配置。 例如，下面是如何指定那唯一的 android 應該使用全屏顯示首選項:

        <platform name="android">
            <preference name="Fullscreen" value="true" />
        </platform>
    

## *hook*元

表示您自訂的腳本，將調用由科爾多瓦發生某些操作時 (例如，添加外掛程式或平臺編寫邏輯之後調用)。 當您需要擴展預設科爾多瓦功能時，這很有用。 更多的資訊，請參閱掛鉤的指南。

    <hook type="after_plugin_install" src="scripts/afterPluginInstall.js" />