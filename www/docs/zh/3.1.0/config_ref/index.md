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

與全域設定檔，可以控制應用程式的行為的許多方面 `config.xml` ，就是放在頂級 web 資產目錄和應用程式的主頁。 這與平臺無關的 XML 檔案格式基於 W3C 的[打包 Web 應用程式 （視窗小部件）][1]規範，並擴展至指定核心科爾多瓦 API 功能、 外掛程式和平臺特定的設置。

 [1]: http://www.w3.org/TR/widgets/

為專案創建與科爾多瓦 CLI （描述在命令列介面），可以在頂級找到此檔 `www` 目錄。 使用 CLI 生成的專案將重新生成此內的各個子目錄中的檔版本 `platforms` 。 如果您使用 CLI 來創建一個專案，但您的工作流然後轉向一個 SDK，平臺特定的檔可作為源。

本節詳細介紹全球和跨平臺的配置選項。請參見以下各節為平臺特定的選項：

*   [iOS 配置](../guide/platforms/ios/config.html)
*   [Android 系統組態](../guide/platforms/android/config.html)
*   [黑莓手機配置](../guide/platforms/blackberry10/config.html)

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
            <preference name="Fullscreen" value="true" />
            <preference name="WebViewBounce" value="true" />
        </widget>
    

<!-- QUERY: is WebViewBounce superseded by DisallowOverscroll? -->

以下的配置元素出現在頂級 `config.xml` 檔，並在所有受支援的科爾多瓦平臺支援：

*   `<widget>`元素的 `id` 屬性提供了應用程式的反向域識別碼和 `version` 主要/次要/修補程式符號表示其完整版本號碼。

*   `<name>`元素指定應用程式的正式名稱，因為它出現在設備的主畫面上和在應用程式商店介面內。

*   `<description>`和 `<author>` 的元素指定的中繼資料和聯繫資訊，可能會出現在應用程式商店清單內。

*   可選的 `<content>` 元素在頂級 web 資產目錄中定義應用程式的起始頁。 預設值是 `index.html` ，其中通常出現在一個專案中的頂級 `www` 目錄。

*   `<access>`元素定義應用程式能夠與進行通信的外部域的集。 如上所示的預設值允許它訪問任何伺服器。 請參閱域白名單指南的詳細資訊。

*   `<preference>`標記設置各種選項作為對 `name` / `value` 屬性。 每個首選項的 `name` 是不區分大小寫。 很多優惠是獨有的特定平臺上，如列于此頁的頂部。 以下各節詳細介紹了適用于多個平臺的首選項。

## 全球首選項

以下全球首選項適用于所有平臺：

*   `Fullscreen`使您可以隱藏在螢幕頂部的狀態列。預設值是 `false` 。示例：
    
        <preference name="Fullscreen" value="true" />
        

*   `Orientation`允許您鎖定方向和防止介面旋轉，在回應的方向變化。 可能的值是 `default` ， `landscape` ，或 `portrait` 。 示例：
    
        <preference name="Orientation" value="landscape" />
        
    
    **注：**`default`值是指*兩個*橫向或縱向方向被啟用。 如果您想要使用的每個平臺的預設設置 （通常縱向只），離開此標記出來的 `config.xml` 檔。 此外，黑莓手機使用 `auto` 而不是 `default` 在其 `config.xml` 檔。 如果您指定 `default` 在全球 `config.xml` ，它會轉換為 `auto` 黑莓的生成中。

## 多平臺首選項

下面的首選項應用到多個平臺，但不是所有人都：

*   `DisallowOverscroll`(boolean 類型的值，預設值為 `false` ）： 設置為 `true` 如果你不想要當使用者滾動過去的開頭或結尾的內容時顯示的任何回饋資訊的介面。
    
        <preference name="DisallowOverscroll" value="true"/>
        
    
    適用于 Android 和 iOS。 在 iOS，overscroll 手勢事業內容反彈到其原始位置。 在 android 系統，它們產生一個更微妙的光暈效果沿的頂部或底部邊緣的內容。

*   `BackgroundColor`： 設置應用程式的背景色。 支援四個位元組的十六進位值，與第一個位元組代表一個 Alpha 色板、 和標準的 RGB 值為以下三個位元組。 此示例指定藍色：
    
        <preference name="BackgroundColor" value="0xff0000ff"/>
        
    
    適用于 Android 和黑莓手機。覆蓋 CSS 否則為可跨*所有*平臺，例如：`body{background-color:blue}`.

*   `HideKeyboardFormAccessoryBar`(boolean 類型的值，預設值為 `false` ）： 設置為 `true` ，隱藏其他工具列出現在鍵盤上方説明使用者導航到另一個表單輸入從。
    
        <preference name="HideKeyboardFormAccessoryBar" value="true"/>
        
    
    適用于 iOS 和黑莓手機。
    
    **注：**為黑莓手機，有效的值是 `enable` 或`disable`.

## `<feature>`元素

如果你使用 CLI 來構建應用程式，則使用 `plugin` 命令來啟用設備的 Api。 這不會修改的頂級 `config.xml` 檔中，所以 `<feature>` 的元素並不適用于您的工作流。 如果您直接在 SDK 中工作，使用特定平臺 `config.xml` 檔作為源，您使用 `<feature>` 標記，以使設備級 Api 和外部外掛程式。 它們通常出現在此表單中：

        <feature name="Plugin" value="PluginID" />
    

他們經常出現在特定于平臺的自訂值以 `config.xml` 檔。例如，在這裡是如何指定為 Android 專案設備 API：

        <feature name="Device">
            <param name="android-package" value="org.apache.cordova.device.Device" />
        </feature>
    

下面是該元素為 iOS 專案的顯示方式：

        <feature name="Device">
            <param name="ios-package" value="CDVDevice" />
        </feature>
    

有關如何指定每個功能，請參閱 API 參考的詳細資訊。在外掛程式上看到外掛程式開發指南的詳細資訊。