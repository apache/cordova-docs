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

title: 外掛程式規範
---

# 外掛程式規範

`plugin.xml`檔是一個 XML 文檔在 `plugins` 命名空間： `http://apache.org/cordova/ns/plugins/1.0` 。 它包含頂級 `plugin` 元素，定義該外掛程式和定義外掛程式的結構的兒童。

示例外掛程式元素：

    <?xml version="1.0" encoding="UTF-8"?>
    <plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
        xmlns:android="http://schemas.android.com/apk/res/android"
        id="com.alunny.foo"
        version="1.0.2">
    

## *外掛程式*元素

`plugin`元素是外掛程式清單的頂級元素。它具有下列屬性：

*   `xmlns`（必填）： 外掛程式的命名空間， `http://apache.org/cordova/ns/plugins/1.0` 。 如果文檔包含 XML 從其他命名空間如標記添加到 `AndroidManifest.xml` 檔中，這些命名空間，也應該列入的頂級元素。

*   `id`（必填）： 一個反向域樣式識別碼的外掛程式，如`com.alunny.foo`

*   `version`（必填）： 該外掛程式相匹配的以下主要-未成年人-修補程式樣式的正則運算式的版本號：
    
        ^\d+[.]\d+[.]\d+$
        

## *發動機*和*引擎*的元素

子項目的 `<engines>` 元素指定版本的此外掛程式支援的基於 Apache 科爾多瓦的框架。示例：

    <engines>
        <engine name="cordova" version="1.7.0" />
        <engine name="cordova" version="1.8.1" />
        <engine name="worklight" version="1.0.0" platform="android" scriptSrc="worklight_version"/>
    </engines>
    

類似于 `<plugin>` 元素的 `version` 屬性中，指定的版本字串應匹配符合正則運算式的字串主要-未成年人-修補程式：

        ^\d+[.]\d+[.]\d+$
    

引擎的元素也可指定模糊比對為了避免重複，並減少維護基礎平臺更新時。 工具應該支援的最低 `>` ， `>=` ， `<` 和 `<=` ，例如：

    <engines>
        <engine name="cordova" version=">=1.7.0" />
        <engine name="cordova" version="<1.8.1" />
    </engines>
    

`<engine>`標籤也有預設支援的所有主要平臺存在的科爾多瓦。 指定 `cordova` 引擎標記，則意味著所有版本的科爾多瓦在任何平臺上必須都滿足發動機版本屬性。 你可能還會列出特定的平臺和它們的版本以覆蓋全部捕獲 `cordova` 引擎：

    <engines>
        <engine name="cordova" version=">=1.7.0" />
        <engine name="cordova-android" version=">=1.8.0" />
        <engine name="cordova-ios" version=">=1.7.1" />
    </engines>
    

這裡是`< engine >`標記支援預設引擎的清單:

*   `cordova`
*   `cordova-plugman`
*   `cordova-amazon-fireos`
*   `cordova-android`
*   `cordova-ios`
*   `cordova-blackberry10`
*   `cordova-wp8`
*   `cordova-windows8`
*   `android-sdk` // returns the highest Android api level installed
*   `apple-xcode` // returns the xcode version 
*   `apple-ios` // returns the highest iOS version installed
*   `apple-osx` // returns the OSX version
*   `blackberry-ndk` // returns the native blackberry SDK version

指定自訂的基於 Apache 科爾多瓦的框架應列出引擎標記下就像這樣：

    <engines>
        <engine name="my_custom_framework" version="1.0.0" platform="android" scriptSrc="path_to_my_custom_framework_version"/>
        <engine name="another_framework" version=">0.2.0" platform="ios|android" scriptSrc="path_to_another_framework_version"/>
        <engine name="even_more_framework" version=">=2.2.0" platform="*" scriptSrc="path_to_even_more_framework_version"/>
    </engines>
    

一個自訂的基於 Apache 科爾多瓦框架需要引擎的元素包含以下特性： `name` ， `version` ， `scriptSrc` ，和`platform`.

*   `name`(必填): 人類可讀的名稱為您自訂的框架。

*   `version`(必填): 您的框架必須要安裝的版本。

*   `scriptSrc`(必填): 告訴 plugman 是什麼版本的自訂框架的指令檔。 理想情況下，這個檔應該在你的外掛程式目錄的頂級目錄內。

*   `platform`(必填): 您的框架支援哪些平臺。 您可以使用萬用字元`*`說支援的所有平臺，指定多個像`android|ios|blackberry10`的管道字元或只是一個單一的平臺，像`android`.

plugman 中止與非零代碼為其目標專案不能滿足發動機的約束任何外掛程式。

如果不是 `<engine>` 指定的標記、 plugman 嘗試盲目地安裝到指定的科爾多瓦的專案目錄。

## *名稱*元素

該外掛程式，其文本內容包含外掛程式的名稱人類可讀的名稱。例如：

    <name>Foo</name>
    

此元素還不能 () 處理當地語系化。

## *說明*元素

對該外掛程式的人類可讀說明。元素的文本內容包含外掛程式的描述。示例：

    <description>Foo plugin description</description>
    

此元素還不能 () 處理當地語系化。

## *作者*元素

外掛程式作者姓名。元素的文本內容包含外掛程式作者的姓名。示例：

    <author>Foo plugin description</author>
    

## *關鍵字*元素

外掛程式關鍵字。元素的文本內容包含以逗號分隔的關鍵字來描述該外掛程式。示例：

    <keywords>foo,bar</keywords>
    

## *許可證*元素

外掛程式許可。元素的文本內容包含外掛程式許可證。示例：

    <license>Apache 2.0 License</license>
    

## *資產*元素

一個或多個元素列出檔或目錄複寫到科爾多瓦 app `www` 目錄。例子：

    <!-- a single file, to be copied in the root directory -->
    <asset src="www/foo.js" target="foo.js" />
    <!-- a directory, also to be copied in the root directory -->
    <asset src="www/foo" target="foo" />
    

所有 `<asset>` 標籤需要兩個 `src` 和 `target` 的屬性。 只有 web 外掛程式包含主要是 `<asset>` 的元素。 任何 `<asset>` 元素的嵌套在 `<platform>` 元素指定特定于平臺 web 資產，如下所述。 屬性包括：

*   `src`(必填): 檔或目錄位於外掛程式包，相對於`plugin.xml`文檔。 如果檔不存在指定的`src`地點，plugman 停止反轉安裝過程，發出一個通知關於衝突，和與非零代碼退出。

*   `target` (required):
    
    在那裡的檔或目錄應位於科爾多瓦 app，相對於`www`目錄。 資產可以有針對性地對子目錄，例如:
    
        <asset src="www/new-foo.js" target="js/experimental/foo.js" />
        
    
    創建`js/experimental`目錄在`www`目錄中，除非已經呈現，然後將`new-foo.js`檔案複製並重命名為`foo.js`。 如果目標位置已存在的檔，plugman 停止和反轉安裝過程、 然後發出一個通知關於衝突，並在此與非零代碼退出。

## *js 模組*元素

大多數的外掛程式包括一個或多個 JavaScript 檔。 每個 `<js-module>` 標記對應于一個 JavaScript 檔，並防止外掛程式的使用者不必添加 `<script>` 為每個檔標記。 雖然 `<asset>` 標籤只是將一個檔案複製從外掛程式子目錄到 `www` ， `<js-module>` 標記是複雜得多。 他們看起來像這樣：

    <js-module src="socket.js" name="Socket">
        <clobbers target="chrome.socket" />
    </js-module>
    

與上面的例子，安裝一個外掛程式時 `socket.js` 複製到 `www/plugins/my.plugin.id/socket.js` ，並作為對條目添加 `www/cordova_plugins.js` 。 在載入時，代碼在 `cordova.js` 使用 XHR 來讀取每個檔並注入 `<script>` 到 HTML 標籤。 它將添加一個映射，以痛打或合併並酌情按如下所述。

*不*換行的檔 `cordova.define` ，因為它會自動添加。 模組包裹在一個閉包， `module` ， `exports` ，和 `require` 在範圍中，如是正常的 AMD 模組。

詳細資訊 `<js-module>` 標記：

*   `src`引用相對於`plugin.xml`檔外掛程式目錄中的檔。

*   該`name`提供模組名稱的最後一部分。 如果你想要使用`cordova.require`來導入你的外掛程式在 JavaScript 代碼中的其他部分，它一般可以無論你喜歡，和它的唯一事項。 模組名稱為`< js-module >`是你的外掛程式`id`後, 跟`名稱`的值。 例如上面， `id`為`chrome.socket`的模組名稱是`chrome.socket.Socket`.

*   在`< js-module >`內允許三個標記:
    
    *   `< clobbers target="some.value"/ >`指示`module.exports`插入作為`window.some.value`的`視窗`物件。 你可以有多`< clobbers >`如你所願。 創建任何物件在`window`上不可用。
    
    *   `< merges target="some.value"/ >`指示，應與在`window.some.value`的任何現有值合併模組。 如果已經存在任何鍵，模組的版本將覆蓋原始。 你可以有多`< merges >`如你所願。 創建任何物件在`window`上不可用。
    
    *   `< runs / >`意味著您的代碼應該用`cordova.require`，指定，但不是安裝在`window`物件上。 這是有用的當初始化模組，將事件處理常式附加或以其他方式。 你只能有一個`< runs / >`標記。 請注意，包括`< runs / >``< clobbers / >`或`< merges / >`是多餘的因為他們也`cordova.require`您的模組。
    
    *   空的`< js-module >`仍然載入，並可以通過`cordova.require`的其他模組中訪問.

如果 `src` 不能解決到現有檔，plugman 將停止和反轉安裝，發出一個通知的問題，和以非零代碼退出。

嵌套 `<js-module>` 內的元素 `<platform>` 聲明特定平臺 JavaScript 模組綁定。

## *依賴項*元素

`<dependency>`標記使您可以指定當前外掛程式所依賴的其他外掛程式。 雖然未來的版本將從外掛程式庫訪問它們，在短期內的外掛程式直接引用的 Url 作為 `<dependency>` 的標記。 他們的格式如下：

    <dependency id="com.plugin.id" url="https://github.com/myuser/someplugin" commit="428931ada3891801" subdir="some/path/here" />
    

*   `id`: 提供外掛程式的 ID。 它應該是全域唯一的並表示在反向域風格。 沒有這些限制目前執行的而他們可能在將來。

*   `url`: 該外掛程式的 URL。這應引用一個 git 倉庫，其中 plugman 試圖克隆。

*   `commit`: 這是理解的`git 簽出`任何 git 引用: 一個分支或標記的名稱 (例如，`師父`， `0.3.1`) 或提交雜湊值 (例如， `975ddb228af811dd8bb37ed1dfd092a3d05295f9`).

*   `subdir`: 指定目標的外掛程式依賴存在作為 git 倉庫的子目錄。 這是有用的因為它允許存儲庫中包含幾個相關的外掛程式，每個單獨指定。

在將來，將會介紹版本限制，和一個外掛程式庫會存在支援按名稱而不是顯式 Url 獲取。

### 相對依賴項的路徑

如果您將設置 `url` 的 `<dependency>` 標記到 `"."` ，並提供 `subdir` 、 依賴外掛程式安裝從同一個本地或遠端 git 資源庫作為父外掛程式，指定 `<dependency>` 標記。

請注意， `subdir` 總是指定*根*的 git 資源庫，不該父外掛程式的相對路徑。 即使你安裝的外掛程式與直接向它的本地路徑，也是如此。 Plugman 發現 git 資源庫的根目錄，然後查找其他外掛程式從那裡。

## *平臺*元素

`<platform>`標記標識平臺有關聯的本機代碼或需要對它們的設定檔進行修改。 使用此規範的工具可以標識支援的平臺和科爾多瓦專案中安裝代碼。

無外掛程式 `<platform>` 標籤被假定為只 JavaScript 的並因此可安裝在所有的平臺上。

平臺標記示例：

    <platform name="android">
        <!-- android-specific elements -->
    </platform>
    <platform name="ios">
        <!-- ios-specific elements -->
    </platform>
    

所需 `name` 屬性標識一個平臺支援，將與該平臺關聯元素的子級。

平臺名稱應該是小寫字母。平臺名稱，如任意選擇，列出：

*   亞馬遜 fireos
*   安卓系統
*   blackberry10
*   ios
*   wp8
*   windows8

## *原始程式碼檔*元素

`<source-file>`元素標識應安裝到一個專案的可執行檔的原始程式碼。例子：

    <!-- android -->
    <source-file src="src/android/Foo.java"
                    target-dir="src/com/alunny/foo" />
    <!-- ios -->
    <source-file src="src/ios/CDVFoo.m" />
    <source-file src="src/ios/someLib.a" framework="true" />
    <source-file src="src/ios/someLib.a" compiler-flags="-fno-objc-arc" />
    

它支援以下屬性：

*   `src`(必填): 相對於`plugin.xml`檔的位置。 如果不能找到`src`檔，plugman 停止和反轉安裝、 然後發出一個通知有關的問題，並在此與非零代碼退出。

*   `target-dir`: 檔應該將複製到其中，相對於科爾多瓦專案的根目錄的目錄。 在實踐中，這是最重要的是基於 JAVA 的平臺上，在`com.alunny.foo`包中的檔必須位於`com/alunny/美孚`目錄內。 對於原始目錄是不重要的平臺，應忽略此屬性。
    
    作為資產，如果`target``source-file`會覆蓋現有的檔，plugman 停止和反轉安裝，發出一個通知有關的問題，並退出非零代碼。

*   `framework`(僅適用于 iOS): 如果設置為`true`，還將指定的檔作為一個框架添加到專案。

*   `compiler-flags`(僅適用于 iOS): 如果設置，分配特定的原始檔案中指定的編譯器標誌。

## *設定檔*元素

標識要進行修改，在該檔中修改應考慮的地方，和什麼應修改基於 XML 的設定檔。

與此元素修改測試過的兩種檔案類型是 `xml` 和 `plist` 的檔。

`config-file`元素只允許您將新的兒童追加到 XML 文檔樹。孩子們在目的文件中要插入的 XML 文本。

XML 的的示例：

    <config-file target="AndroidManifest.xml" parent="/manifest/application">
        <activity android:name="com.foo.Foo" android:label="@string/app_name">
            <intent-filter>
            </intent-filter>
        </activity>
    </config-file>
    

例如 `plist` ：

    <config-file target="*-Info.plist" parent="CFBundleURLTypes">
        <array>
            <dict>
                <key>PackageName</key>
                <string>$PACKAGE_NAME</string>
            </dict>
        </array>
    </config-file>
    

它支援以下屬性：

*   `target`:
    
    要修改檔和科爾多瓦專案根目錄的相對路徑。
    
    目標可以包括萬用字元 (``*) 元素。在這種情況下，plugman 遞迴搜索專案目錄結構，並使用第一場比賽。
    
    在 iOS，相對於專案目錄的根設定檔的位置不是知道，所以指定目標`config.xml`解析為`cordova-ios-project/MyAppName/config.xml`.
    
    如果指定的檔不存在，該工具將忽略配置更改並繼續安裝。

*   `parent`: XPath 選擇器引用父級的元素添加到設定檔。 如果你使用絕對選擇器，您可以使用萬用字元 (``*) 來指定的根項目，例如， `/ * / 外掛程式`.
    
    `Plist`檔，`父`確定應該在什麼父項下插入指定的 XML。
    
    如果選擇器不會解析為指定文檔的一個孩子，工具停止和挫折安裝過程中，會發出警告，並且具有非零代碼退出。

*   `after`: 接受兄弟姐妹後要添加 XML 程式碼片段的優先順序的清單。 用於在需要嚴格排序的 XML 元素，如[HTTP://msdn.microsoft.com/en-us/library/windowsphone/develop/ff769509%28v=vs.105%29.aspx#BKMK_EXTENSIONSelement][1]的檔中指定的變化

 [1]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff769509%28v=vs.105%29.aspx#BKMK_EXTENSIONSelement

Windows 平臺支援兩個附加屬性 （兩個可選） 時影響 `package.appxmanifest` 元名稱：

該 `device-target` 屬性指示，只應包括，當生成指定的目標裝置類型。 受支援的值是 `win`、 `phone` 或 `all`.

該 `versions` 屬性指示特定的 Windows 版本的應用程式清單只應會被更改為指定的版本字串相匹配的版本。 值可以是任何有效的節點語義版本範圍的字串。

使用這些視窗的特定屬性的示例：

    <config-file target="package.appxmanifest" parent="/Package/Capabilities" versions="<8.1.0">
        <Capability Name="picturesLibrary" />
        <DeviceCapability Name="webcam" />
    </config-file>
    <config-file target="package.appxmanifest" parent="/Package/Capabilities" versions=">=8.1.0" device-target="phone">
        <DeviceCapability Name="webcam" />
    </config-file>
    

上面的示例中將設置預 8.1 平臺 （Windows 8，具體），需要 `webcam` 裝置功能和 `picturesLibrary` 的綜合性能，而且 `webcam` 裝置功能僅適用于 Windows 8.1 的專案生成為 Windows Phone。 Windows 桌面 8.1 系統是未被修改。

## *外掛程式-plist*元素

這是 *過時* 的因為它只適用于科爾多瓦 ios 2.2.0 和下面。科爾多瓦的較新版本使用 `<config-file>` 標記。

示例:

    <config-file target="config.xml" parent="/widget/plugins">
        <feature name="ChildBrowser">
            <param name="ios-package" value="ChildBrowserCommand"/>
        </feature>
    </config-file>
    

指定的鍵和值追加到 iOS 科爾多瓦專案中的正確的 `AppInfo.plist` 檔。舉個例子：

    <plugins-plist key="Foo" string="CDVFoo" />
    

## *資源檔*和*標頭檔*元素

像原始檔案，而是專門負責 iOS 平臺，區分原始檔案、 標頭檔和資源。iOS 的例子：

    <resource-file src="CDVFoo.bundle" />
    <resource-file src="CDVFooViewController.xib" />
    <header-file src="CDVFoo.h" />
    

Android 的示例：

    <resource-file src="FooPluginStrings.xml" target="res/values/FooPluginStrings.xml" />
    

## *lib 檔*元素

像源、 資源和標頭檔，而是專門負責平臺 （如黑莓 10 的使用使用者生成的庫。示例：

    <lib-file src="src/BlackBerry10/native/device/libfoo.so" arch="device" />
    <lib-file src="src/BlackBerry10/native/simulator/libfoo.so" arch="simulator" />
    

支援的屬性：

*   `src`(必填): 相對於`plugin.xml`檔的位置。 如果不能找到`src` ，plugman 停止和反轉安裝，具有非零代碼問題有關的問題和出口的警告。

*   `arch`: 為`.so`檔已經建成，`device`或`simulator`的體系結構.

對於 Windows 平臺上，`<lib-file>` 元素允許 `< SDKReference >` 生成 Windows 專案檔案中列入。

支援的屬性：

*   `src`(必填): 的 SDK，包括名稱 (這將用作生成的`< SDKReference >`元素`包含`屬性的值)。

*   `arch`: 指示為指定的架構生成時只應包含`< SDKReference >` 。 受支援的值是 `x86` ， `x64` 或`ARM`.

*   `device-target`： 指示當生成指定的目標裝置類型只應包含 `< SDKReference >`。 受支援的值是 `win` (或 `windows` )， `phone` 或`all`.

*   `versions`： 指示當生成指定的版本字串相匹配的版本只應包含 `< SDKReference >`。 值可以是任何有效的節點語義版本範圍的字串。

例子:

    <lib-file src="Microsoft.WinJS.2.0, Version=1.0" arch="x86" />
    <lib-file src="Microsoft.WinJS.2.0, Version=1.0" versions=">=8.1" />
    <lib-file src="Microsoft.WinJS.2.0, Version=1.0" target="phone" />
    <lib-file src="Microsoft.WinJS.2.0, Version=1.0" target="win" versions="8.0" arch="x86" />
    

## *框架*元素

標識該外掛程式所依賴的框架 （通常的作業系統/平臺的一部分）。

可選的`custom`屬性是一個布林值，該值指示是否框架一種作為您的外掛程式檔的一部分 (因此它不是一個系統框架)。

### iOS *framework*

    <framework src="libsqlite3.dylib" />
    <framework src="social.framework" weak="true" />
    <framework src="relative/path/to/my.framework" custom="true" />
    

可選的`weak`屬性是一個布林值，該值指示是否應弱連結的框架。預設值為`false`.

### 安卓系統 *framework*

在 android 系統 (如 cordova-android@4.0.0)，*框架*標籤用於包括 Maven 依賴關係，或包括捆綁的庫專案。

例子:

    <!-- Depend on latest version of GCM from play services -->
    <framework src="com.google.android.gms:play-services-gcm:+" />
    <!-- Depend on v21 of appcompat-v7 support library -->
    <framework src="com.android.support:appcompat-v7:21+" />
    <!-- Depend on library project included in plugin -->
    <framework src="relative/path/FeedbackLib" custom="true" />
    

*framewokr*也可以用於有分納入主要專案的.gradle 檔的自訂.gradle 檔:

    <framework src="relative/path/rules.gradle" custom="true" type="gradleReference" />
    

為 pre-android@4.0.0 (基於 ANT 的專案):

可選的`type`屬性是一個字串，指示框架添加的類型。 目前，只有`projectReference`支援並且僅用於 Windows。 使用`custom='true'`和`type='projectReference'`將引用添加到專案，將被添加到編譯 + 連結科爾多瓦專案的步驟。 這基本上是目前唯一的方式，'custom' 的框架可以針對多個體系結構，因為他們作為一種依賴由顯式引用科爾多瓦應用程式。

可選的`parent`將相對路徑設置為包含要向其增加參考的子專案的目錄。 預設值是`.`，即應用程式專案。 它允許添加像在此示例中的子專案之間的引用:

    <framework src="extras/android/support/v7/appcompat" custom="false" parent="FeedbackLib" />
    

### *framework*視窗

Windows 平臺支援三個附加屬性 (所有可選) 精煉時框架應包括:

    <framework src="path/to/project/LibProj.csproj" custom="true" type="projectReference"/>
    

該`arch`屬性指示時為指定的建築建設只應包括框架。 受支援的值是 `x86`、`x64` 或 `ARM`.

該`device-target`屬性指示當生成指定的目標裝置類型後，應該只能包含框架。 受支援的值是 `win` （或 `windows`），`phone` 或 `all`.

該`versions`屬性指示框架只應包括當生成指定的版本字串相匹配的版本。 值可以是任何有效的節點語義版本範圍的字串。

使用這些 Windows 特定屬性的示例:

    <framework src="src/windows/example.dll" arch="x64" />
    <framework src="src/windows/example.dll" versions=">=8.0" />
    <framework src="src/windows/example.vcxproj" type="projectReference" target="win" />
    <framework src="src/windows/example.vcxproj" type="projectReference" target="all" versions="8.1" arch="x86" />
    

## *資訊*元素

向使用者提供的其他資料。當你需要額外的步驟，不能很容易自動或超出 plugman 的範圍時，這非常有用。 例子:

    <info>
    You need to install __Google Play Services__ from the `Android Extras` section using the Android SDK manager (run `android`).
    
    You need to add the following line to the `local.properties`:
    
    android.library.reference.1=PATH_TO_ANDROID_SDK/sdk/extras/google/google_play_services/libproject/google-play-services_lib
    </info>
    

## *hook*元素

表示您自訂的腳本，將調用由科爾多瓦發生某些操作時 (例如，添加外掛程式或平臺編寫邏輯之後調用)。 當您需要擴展預設科爾多瓦功能時，這很有用。 更多的資訊，請參閱掛鉤的指南。

    <hook type="after_plugin_install" src="scripts/afterPluginInstall.js" />
    

## 變數

在某些情況下，外掛程式可能需要進行配置更改依賴于目標應用程式。 例如，若要註冊為 C2DM 在 Android 上，其包 id 是`com.alunny.message`的應用程式還將如需要許可權:

    <uses-permission android:name="com.alunny.message.permission.C2D_MESSAGE"/>
    

在插入從`plugin.xml`檔的內容不事先知道這種情況下，可以由一個貨幣符號進行一系列的大寫英文字母，數位或底線表示變數。 對於上面的示例中， `plugin.xml`檔將包括此標記:

    <uses-permission android:name="$PACKAGE_NAME.permission.C2D_MESSAGE"/>
    

plugman 變數引用替換為指定的值或空字串，如果沒有找到。 可能檢測到 (在這種情況下，從`AndroidManifest.xml`檔) 或工具; 使用者指定的變數引用的值確切的過程是依賴于特定的工具。

plugman 可以要求使用者指定一個外掛程式所需的變數。例如，C2M 和谷歌地圖的 API 金鑰可以指定為一個命令列參數:

    plugman --platform android --project /path/to/project --plugin name|git-url|path --variable API_KEY=!@CFATGWE%^WGSFDGSDFW$%^#$%YTHGsdfhsfhyer56734
    

為了使變數成為強制性， `<platform>`標記需要包含`<preference>`標記。例如:

    <preference name="API_KEY" />
    

plugman 檢查中通過的這些所需的首選項。 如果不是，它應該警告使用者如何傳遞中的變數和以非零代碼退出。

應保留某些變數的名稱，如下所示。

## $PACKAGE_NAME

反向功能變數名稱風格包的對應于`CFBundleIdentifier`對 iOS 或`AndroidManifest.xml`檔中的頂級`表現`元素的`包`屬性的唯一識別碼。