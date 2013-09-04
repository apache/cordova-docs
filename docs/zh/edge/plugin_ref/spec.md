---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# 外掛程式規範

`plugin.xml`檔是一個 XML 文檔在 `plugins` 命名空間： `http://apache.org/cordova/ns/plugins/1.0` 。 它包含頂級 `plugin` 元素，定義該外掛程式和定義外掛程式的結構的兒童。

示例外掛程式元素：

    <?xml version="1.0" encoding="UTF-8"?>
    <plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
        xmlns:android="http://schemas.android.com/apk/res/android"
        id="com.alunny.foo"
        version="1.0.2">
    

## `<plugin>`元素

`plugin`元素是外掛程式清單的頂級元素。它具有下列屬性：

*   `xmlns`（必填）： 外掛程式的命名空間， `http://apache.org/cordova/ns/plugins/1.0` 。 如果文檔包含 XML 從其他命名空間如標記添加到 `AndroidManifest.xml` 檔中，這些命名空間，也應該列入的頂級元素。

*   `id`（必填）： 一個反向域樣式識別碼的外掛程式，如`com.alunny.foo`

*   `version`（必填）： 該外掛程式相匹配的以下主要-未成年人-修補程式樣式的正則運算式的版本號：
    
        ^\d+[.]\d+[.]\d+$
        

## `<engines>`和 `<engine>` 的元素

子項目的 `<engines>` 元素指定版本的此外掛程式支援的基於 Apache 科爾多瓦的框架。示例：

    < 引擎 >< 引擎名稱 ="科爾多瓦"版本 ="1.7.0"/ >< 引擎名稱 ="科爾多瓦"版本 ="1.8.1"/ >< 引擎名稱 ="worklight"版本 ="1.0.0"平臺 ="android"scriptSrc ="worklight_version"/ >< / 引擎 >
    

類似于 `<plugin>` 元素的 `version` 屬性中，指定的版本字串應匹配符合正則運算式的字串主要-未成年人-修補程式：

        ^\d+[.]\d+[.]\d+$
    

引擎的元素也可指定模糊比對為了避免重複，並減少維護基礎平臺更新時。 工具應該支援的最低 `>` ， `>=` ， `<` 和 `<=` ，例如：

    < 引擎 >< 引擎名稱 ="科爾多瓦"版本 ="> = 1.7.0"/ >< 引擎名稱 ="科爾多瓦"版本 ="< 1.8.1"/ >< / 引擎 >
    

'<engine>' 標籤也有預設支援的所有主要平臺存在的科爾多瓦。 指定的 '科爾多瓦' 引擎標記意味著科爾多瓦在任何平臺上的所有版本必須都滿足發動機版本屬性。 你可能還會列出特定的平臺和它們的版本以覆蓋全部捕獲 '科爾多瓦' 引擎：

    < 引擎 >< 引擎名稱 ="科爾多瓦"版本 ="> = 1.7.0"/ >< 引擎名稱 ="科爾多瓦-android 系統"版本 ="> = 1.8.0"/ >< 引擎名稱 ="科爾多瓦-ios"版本 ="> = 1.7.1"/ >< / 引擎 >
    

這裡是一個清單的預設引擎，'<engine>'標籤支援： * '科爾多瓦' *' 科爾多瓦-plugman' * '科爾多瓦-android' *' 科爾多瓦-ios' * '科爾多瓦-blackberry10' *' 科爾多瓦-wp7' * '科爾多瓦-wp8' *' 科爾多瓦-windows8'

指定自訂的基於 Apache 科爾多瓦的框架應列出引擎標記下就像這樣：

    < 引擎 >< 引擎名稱 ="my_custom_framework"版本 ="1.0.0"平臺 ="android"scriptSrc ="path_to_my_custom_framework_version"/ >< 引擎名稱 ="another_framework"版本 ="> 0.2.0"平臺 ="ios|android"scriptSrc ="path_to_another_framework_version"/ >< 引擎名稱 ="even_more_framework"版本 ="> = 2.2.0"平臺 ="*"scriptSrc ="path_to_even_more_framework_version"/ >< / 引擎 >
    

一個自訂的基於 Apache 科爾多瓦框架需要引擎的元素包含以下特性： '名稱'、 '版本'、 'scriptSrc' 和 '平臺'。

*   `name`（必填）： 人類可讀的名稱為您自訂的框架。

*   `version`（必填）： 您的框架必須要安裝的版本。

*   `scriptSrc`（必填）： 告訴 plugman 是什麼版本的自訂框架的指令檔。理想情況下，此檔應該在你的外掛程式資料夾的頂層目錄內。

*   `platform`（必填）： 您的框架支援哪些平臺。 您可以使用萬用字元 ' *' 說支援所有平臺，指定多個具有像 'android|ios|blackberry10' 的管道字元或像 'android' 只是一個單一的平臺。

plugman 中止與非零代碼為其目標專案不能滿足發動機的約束任何外掛程式。

如果不是 `<engine>` 指定的標記、 plugman 嘗試盲目地安裝到指定的科爾多瓦的專案目錄。

## `<name>`元素

該外掛程式，其文本內容包含外掛程式的名稱人類可讀的名稱。例如：

    < 名稱 > 美孚 < / 名稱 >
    

此元素還不能 () 處理當地語系化。

## `<description>`元素

對該外掛程式的人類可讀說明。元素的文本內容包含外掛程式的描述。示例：

    < 描述 > 美孚外掛程式描述 < / 說明 >
    

此元素還不能 () 處理當地語系化。

## `<author>`元素

外掛程式作者姓名。元素的文本內容包含外掛程式作者的姓名。示例：

    < 作者 > 美孚外掛程式描述 < / 作者 >
    

## `<keywords>`元素

外掛程式關鍵字。元素的文本內容包含以逗號分隔的關鍵字來描述該外掛程式。示例：

    < 關鍵字 > 美孚、 酒吧 < / 關鍵字 >
    

## `<license>`元素

外掛程式許可。元素的文本內容包含外掛程式許可證。示例：

    < 許可證 > Apache 2.0 許可證 < / 許可證 >
    

## `<asset>`元素

一個或多個元素列出檔或目錄複寫到科爾多瓦 app `www` 目錄。例子：

    <! — — 單一檔中，要複製根目錄中--> < 資產 src ="www/foo.js"target="foo.js"/ ><! — — 也要被覆制的根目錄中目錄--> < 資產 src ="www/foo"目標 ="foo"/ >
    

所有 `<asset>` 標籤需要兩個 `src` 和 `target` 的屬性。 只有 web 外掛程式包含主要是 `<asset>` 的元素。 任何 `<asset>` 元素的嵌套在 `<platform>` 元素指定特定于平臺 web 資產，如下所述。 屬性包括：

*   `src`（必填）： 在該檔或目錄中的位置的外掛程式包，相對於 `plugin.xml` 檔。 如果檔不存在指定的 `src` plugman 的位置，停止和反轉安裝過程、 發出一個通知有關衝突，並以非零代碼退出。

*   `target`（必填）：
    
    其中的檔或目錄應設在科爾多瓦 app，相對於 `www` 目錄。資產可以被載入到目標子目錄，例如：
    
    <asset src="www/new-foo.js" target="js/experimental/foo.js" />
    
    創建 `js/experimental` 目錄內 `www` 目錄中，除非已經存在，然後拷貝 `new-foo.js` 檔並將它重命名 `foo.js` 。 如果在目標位置已存在的檔，plugman 將停止反轉安裝過程、 發出一個通知有關衝突，並以非零代碼退出。

## `<js-module>`元素

大多數的外掛程式包括一個或多個 JavaScript 檔。 每個 `<js-module>` 標記對應于一個 JavaScript 檔，並防止外掛程式的使用者不必添加 `<script>` 為每個檔標記。 雖然 `<asset>` 標籤只是將一個檔案複製從外掛程式子目錄到 `www` ， `<js-module>` 標記是複雜得多。 他們看起來像這樣：

    < js 模組 src="socket.js"名稱 ="通訊端">< 黑糊 target="chrome.socket"/ >< / js 模組 >
    

與上面的例子，安裝一個外掛程式時 `socket.js` 複製到 `www/plugins/my.plugin.id/socket.js` ，並作為對條目添加 `www/cordova_plugins.js` 。 在載入時，代碼在 `cordova.js` 使用 XHR 來讀取每個檔並注入 `<script>` 到 HTML 標籤。 它將添加一個映射，以痛打或合併並酌情按如下所述。

*不*換行的檔 `cordova.define` ，因為它會自動添加。 模組包裹在一個閉包， `module` ， `exports` ，和 `require` 在範圍中，如是正常的 AMD 模組。

詳細資訊 `<js-module>` 標記：

*   `src`引用相關的外掛程式目錄中的檔 `plugin.xml` 檔。

*   `name`提供的模組名稱的最後一個部分。 它一般可以不管你喜歡什麼，以及它只事項如果您想要使用 `cordova.require` 來導入你的外掛程式在 JavaScript 代碼中的其他部分。 模組名的 `<js-module>` 是你的外掛程式 `id` 後面跟的值 `name` 。 對於上面的例子，與 `id` 的 `chrome.socket` ，模組名稱是`chrome.socket.Socket`.

*   內允許有三個標籤 `<js-module>` ：
    
    *   `<clobbers target="some.value"/>`指示 `module.exports` 插入到 `window` 物件作為 `window.some.value` 。 你可以有很多 `<clobbers>` 像你喜歡。 上沒有可用的任何物件 `window` 創建的。
    
    *   `<merges target="some.value"/>`指示應與任何現有的值在合併模組 `window.some.value` 。 如果已經存在任何鍵，該模組的版本將覆蓋原始。 你可以有很多 `<merges>` 像你喜歡。 上沒有可用的任何物件 `window` 創建的。
    
    *   `<runs/>`意味著，您的代碼應與指定 `cordova.require` ，但不是安裝在 `window` 物件。 這是有用的模組，將附加的事件處理常式初始化時或以其他方式。 你只能有一個 `<runs/>` 標記。 請注意，包括 `<runs/>` 與 `<clobbers/>` 或 `<merges/>` 是多餘的因為他們也 `cordova.require` 您的模組。
    
    *   一個空的 `<js-module>` 仍然載入，並且可以訪問的其他模組通過中`cordova.require`.

如果 `src` 不能解決到現有檔，plugman 將停止和反轉安裝，發出一個通知的問題，和以非零代碼退出。

嵌套 `<js-module>` 內的元素 `<platform>` 聲明特定平臺 JavaScript 模組綁定。

## `<dependency>`

`<dependency>`標記允許您指定當前外掛程式所依賴的其他外掛程式。 雖然未來的版本將從外掛程式庫訪問它們，在短期內的外掛程式直接引用的 Url 作為 `<dependency>` 的標記。 他們的格式如下：

    < 依賴項 id="com.plugin.id"url ="HTTPs://github.com/myuser/someplugin"commit ="428931ada3891801"子目錄 ="一些/路徑/這裡"/ >
    

*   `id`： 提供外掛程式的 ID。 它應該是全域唯一的並表示在反向域的樣式。 這些限制，既不當前執行的而他們可能在未來。

*   `url`： 外掛程式 URL。這應該參考哪些 plugman 嘗試克隆 git 資源庫。

*   `commit`： 這是理解的任何 git 引用 `git checkout` ： 一個分支或標記的名稱 （例如， `master` ， `0.3.1` ），或提交 （例如，雜湊`975ddb228af811dd8bb37ed1dfd092a3d05295f9`).

*   `subdir`： 指定目標的外掛程式依賴項存在作為 git 資源庫的子目錄。 這是很有説明的因為它允許存儲庫中包含幾個相關的外掛程式，每個單獨指定。

在將來，將會介紹版本限制，和一個外掛程式庫會存在支援按名稱而不是顯式 Url 獲取。

### 相對依賴項的路徑

如果您將設置 `url` 的 `<dependency>` 標記到 `"."` ，並提供 `subdir` 、 依賴外掛程式安裝從同一個本地或遠端 git 資源庫作為父外掛程式，指定 `<dependency>` 標記。

請注意， `subdir` 總是指定*根*的 git 資源庫，不該父外掛程式的相對路徑。 即使你安裝的外掛程式與直接向它的本地路徑，也是如此。 Plugman 發現 git 資源庫的根目錄，然後查找其他外掛程式從那裡。

## `< 平臺 >`

`<platform>`標記標識平臺有關聯的本機代碼或需要對它們的設定檔進行修改。 使用此規範的工具可以標識支援的平臺和科爾多瓦專案中安裝代碼。

無外掛程式 `<platform>` 標籤被假定為只 JavaScript 的並因此可安裝在所有的平臺上。

平臺標記示例：

    < 平臺名稱 ="android"><! — — android 作業系統特定的元素--> < / 平臺 >< 平臺名稱 ="ios"><! — — ios 特定的元素--> < / 平臺 >
    

所需 `name` 屬性標識一個平臺支援，將與該平臺關聯元素的子級。

平臺名稱應該是小寫字母。平臺名稱，如任意選擇，列出：

*   android 系統
*   bb10
*   ios
*   wp7
*   wp8

## `< 原始檔案 >`

`<source-file>`元素標識應安裝到一個專案的可執行檔的原始程式碼。例子：

    <!-android--> < 原始檔案 src="src/android/Foo.java"目標-dir ="src/com/alunny/foo"/ ><! — — ios--> < 原始檔案 src="src/ios/CDVFoo.m"/ >< 原始檔案 src="src/ios/someLib.a"框架 ="true"/ >< 原始檔案 src="src/ios/someLib.a"編譯器標誌 ="-使用者-objc-弧"/ >
    

它支援以下屬性：

*   `src`（必填）： 相對於檔位置的 `plugin.xml` 。 如果 `src` 檔無法找到，plugman 將停止並反轉安裝、 問題有關問題的通知和以非零代碼退出。

*   `target-dir`： 目錄檔應該將複製到其中，相對於科爾多瓦專案的根目錄。 在實踐中，這是最重要的是基於 JAVA 的平臺上，凡中的一個檔 `com.alunny.foo` 套裝軟體必須位於 `com/alunny/foo` 目錄。 對於平臺的原始目錄並不重要，應忽略此屬性。
    
    隨著資產，如果 `target` 的 `source-file` 會覆蓋現有的檔、 plugman 停止和反轉安裝、 發出一個通知有關這一問題，並以非零代碼退出。

*   `framework`(僅適用于 iOS): 如果設置為 `true` ，也作為一種框架向專案添加指定的檔。

*   `compiler-flags`(僅適用于 iOS)： 如果設置，分配特定的原始程式碼檔的指定的編譯器標誌。

## `< 設定檔 >`

標識要進行修改，在該檔中修改應考慮的地方，和什麼應修改基於 XML 的設定檔。

與此元素修改測試過的兩種檔案類型是 `xml` 和 `plist` 的檔。

`config-file`元素只允許您將新的兒童追加到 XML 文檔樹。孩子們在目的文件中要插入的 XML 文本。

XML 的的示例：

    < 設定檔 target="AndroidManifest.xml"父 ="應用程式/清單 /">< 活動 android:name="com.foo.Foo"android:label="@string/app_name">< 意圖-濾清器 >< / 意圖-濾清器 >< / 活動 >< / 設定檔 >
    

例如 `plist` ：

    < config 檔目標 ="*-Info.plist"父 ="CFBundleURLTypes">< 陣列 >< 字典 >< 鍵 > 套裝軟體名稱 < / 鍵 >< 字串 > $PACKAGE_NAME < / 字串 >< / 辭典 >< / 陣列 >< / 設定檔 >
    

它支援以下屬性：

*   `target`:
    
    將修改的檔和科爾多瓦專案的根目錄的相對路徑。
    
    目標可以包括萬用字元 （ `*` ） 的元素。在這種情況下，plugman 以遞迴方式搜索通過專案目錄結構，並使用第一個匹配。
    
    在 iOS，相對於專案目錄根設定檔的位置未知，所以指定的目標 `config.xml` 將解析為`cordova-ios-project/MyAppName/config.xml`.
    
    如果指定的檔不存在，該工具將忽略配置更改並繼續安裝。

*   `parent`： 引用添加到設定檔中的元素的父 XPath 選擇器。 如果您使用絕對選擇器，您可以使用萬用字元 （ `*` ） 以指定的根項目，例如，`/*/plugins`.
    
    為 `plist` 的檔， `parent` 確定應該在什麼父項下插入指定的 XML。
    
    如果選擇器不能解決對指定文檔的一個孩子，工具停止和挫折安裝過程中，會發出警告，並以非零代碼退出。

## `< 外掛程式-plist >`

這是*過時*，因為它僅適用于科爾多瓦-ios 2.2.0 和下面。使用 `<config-file>` 標記科爾多瓦的較新版本。

示例：

    < 設定檔 target="config.xml"父 ="/ 構件/外掛程式">< 外掛程式名稱 = 值"ChildBrowser"="ChildBrowserCommand"/ >< / 設定檔 >
    

指定鍵和值將追加到正確的 `AppInfo.plist` iOS 科爾多瓦專案中的檔。例如：

    < 外掛程式 plist 鍵 = 字串"Foo"="CDVFoo"/ >
    

## `<resource-file>`和`<header-file>`

原始程式碼檔一樣，但專門為 iOS 等平臺，區分原始程式碼檔、 標題和資源。例子：

    < 資源檔 src="CDVFoo.bundle"/ >< 資源檔 src="CDVFooViewController.xib"/ >< 標頭檔 src="CDVFoo.h"/ >
    

## `<lib-file>`

像源、 資源和標頭檔，但專門為黑莓 10 這樣的平臺，使用使用者生成的庫。例子：

    < lib 檔 src="src/BlackBerry10/native/device/libfoo.so"拱 ="設備"/ >< lib 檔 src="src/BlackBerry10/native/simulator/libfoo.so"拱 ="模擬器"/ >
    

支援的屬性：

*   `src`（必填）： 相對於檔位置的 `plugin.xml` 。 如果 `src` 不能發現，plugman 停止和反轉安裝，問題一個警告，有關這一問題，並以非零代碼退出。

*   `arch`： 其中的體系結構 `.so` 檔已生成了，要麼 `device` 或`simulator`.

## `< 框架 >`

標識該外掛程式所依賴的一個框架 （通常的 OS 平臺的一部分）。

例子：

    < 框架 src="libsqlite3.dylib"/ >< 框架 src="social.framework"弱 ="true"/ >
    

`src`屬性標識的框架，其中 plugman 嘗試添加到科爾多瓦專案中，給定平臺的正確方式。

可選的 `weak` 屬性是一個布林值，該值指示是否應弱連結框架。預設值是`false`.

## `<info>`

向使用者提供的其他資訊。當您需要額外的步驟，不能輕鬆地自動或超出了 plugman 的範圍時，這非常有用。例子：

    < 資訊 > 你需要從使用 Android SDK 管理器 （運行 android） 的 Android 額外部分安裝 __Google 玩 Services__。
    
    您需要將以下行添加到您的 'local.properties' android.library.reference.1=PATH_TO_ANDROID_SDK/sdk/extras/google/google_play_services/libproject/google-play-services_lib < / 資訊 >
    

# 變數

在某些情況下，可能需要一個外掛程式進行配置更改依賴于目標應用程式。 例如，若要為在 android 系統，其包 id 是 app C2DM 註冊 `com.alunny.message` 如需要的許可權：

    < 使用許可權 android:name="com.alunny.message.permission.C2D_MESSAGE"/ >
    

在這種情況下，從插入內容的位置 `plugin.xml` 檔事先並不知道，變數可以表示一個貨幣符號後面跟隨一系列的大寫英文字母、 數位或底線。 對於上面的示例中， `plugin.xml` 檔將包括此標記：

    < 使用許可權 android:name="$PACKAGE_NAME.permission.C2D_MESSAGE"/ >
    

如果未找到，則 plugman 將指定的值或空字串替換變數引用。 可能檢測到的變數引用的值 （在這種情況下，從 `AndroidManifest.xml` 檔） 或指定的工具 ； 使用者確切的過程是依賴于特定的工具。

plugman 可以要求使用者指定一個外掛程式所需的變數。例如，用於 C2M 和谷歌地圖 API 金鑰可以指定為一個命令列參數：

    plugman — — android 平臺 — — 專案/路徑/到/專案 — — 外掛程式 name|git-url|path-變數 API_KEY=!@CFATGWE%^WGSFDGSDFW$%^#$%YTHGsdfhsfhyer56734
    

以使變數強制性的 `<platform>` 標記需要包含 `<preference>` 標記。例如：

    < 首選項名稱 ="API_KEY"/ >
    

plugman 檢查這些所需的首選項傳入的。如果不是，它應警告使用者如何傳遞中的變數和以非零代碼退出。

應保留某些變數的名稱，如下所示。

## $PACKAGE_NAME

反向域風格獨特包的識別碼，對應于 `CFBundleIdentifier` 上的 iOS 或 `package` 的頂級屬性 `manifest` 中的元素 `AndroidManifest.xml` 檔。