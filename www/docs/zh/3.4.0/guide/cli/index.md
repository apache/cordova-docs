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

# 命令列介面

本指南演示如何創建應用程式並將它們部署到各種本機移動平臺，使用 `cordova` 命令列介面 (CLI)。 此工具允許您創建新的專案、 生成它們在不同平臺上，並運行實際設備或模擬程式內。 CLI 是要使用的跨平臺工作流的主要工具 （見有關的各項工作流程說明概述）。然而，你也可以使用 CLI 初始化專案代碼後，您使用各種平臺 Sdk 和外殼工具為繼續發展。

## 系統必備元件

在運行任何命令列工具之前, 您需要為每個您想要的目標的平臺安裝 Sdk。（參見平臺指南更多詳細資訊。

若要添加支援或重建任何平臺的一個專案，您需要從支援的平臺 SDK 的同一台電腦上運行命令列介面。CLI 支援以下組合：

*   iOS (Mac)
*   亞馬遜火 OS （Mac、 Linux、 Windows）
*   Android （Mac、 Linux）
*   黑莓 10 （Mac、 Linux、 Windows）
*   Windows Phone 7 (Windows)
*   Windows Phone 8 (Windows)
*   Windows 8 (Windows)
*   火狐瀏覽器作業系統 （Mac、 Linux、 Windows）

在 Mac 上，命令列是可通過*終端*應用的。在 PC 上，它是可作為*命令提示符*下*配件*.

就越有可能是你在 CLI 運行從不同的機器，更加意義保持遠端原始程式碼儲存庫，你拉下到本地工作目錄的資產。

若要安裝 `cordova` 命令列工具，請按照這些步驟操作：

1.  下載並安裝[Node.js][1]。安裝完成後，您應該能夠調用 `node` 或 `npm` 在命令列上。

2.  安裝 `cordova` 實用程式。在 Unix 中，首碼的額外 `sudo` 命令可能需要安裝開發實用程式中以其他方式限制目錄：

        $ sudo npm install -g cordova


    安裝日誌可能會產生錯誤的任何已卸載平臺 Sdk。安裝完成後，您應該能夠運行 `cordova` 命令列上。

    **注**： `-g` 標誌上面告訴故宮全域安裝科爾多瓦。 您可能需要添加到您的路徑，為了調用全域的故宮目錄安裝故宮模組。 在 Windows 上，故宮通常可以找到在 `C:\Users\username\AppData\Roaming\npm` 和在 Unix 上`/usr/local/share/npm`.

 [1]: http://nodejs.org/

## 創建應用程式

轉至目錄位置您維護您的原始程式碼，並運行以下命令：

        $ cordova create hello com.example.hello HelloWorld


它可能需要一些時間完成的命令，有耐心。運行該命令與 `-d` 選項將顯示有關其進度的資訊。

*你好*第一個參數指定要為您的專案生成的目錄。 此目錄不應該存在，科爾多瓦將為您創建它。 其 `www` 子目錄的房子您應用程式的主頁上，與各種資源下 `css` ， `js` ，和 `img` ，其中遵循共同 web 發展的檔命名約定。 `config.xml`檔包含生成和分發應用程式所需的重要的中繼資料。

第二個參數 `com.example.hello` 為您的專案提供了一個反向域樣式識別碼。 此參數是可選的但只有當你也省略第三個參數，因為參數是位置。 您可以編輯以後此值在 `config.xml` 檔中，但一定要注意可能生成外部的代碼 `config.xml` 使用此值，如 JAVA 套裝軟體名稱。 預設值是 `io.cordova.hellocordova` ，但它建議你選擇一個適當的值。

第三個參數 `HelloWorld` 提供了應用程式的顯示標題。 此參數是可選的。 您可以編輯以後此值在 `config.xml` 檔中，但一定要注意可能生成外部的代碼 `config.xml` 使用此值，如 JAVA 類的名稱。 預設值是 `HelloCordova` ，但它建議你選擇一個適當的值。

## 添加平臺

後面的所有命令都需要在專案的目錄或在其範圍內的任何子目錄內運行：

        $ cd hello


您可以生成專案之前，您需要指定一組的目標平臺。 您運行這些命令的能力取決於您的電腦是否支援每個 SDK，是否你已經安裝每個 SDK。 運行任何這些從 Mac：

        $ cordova platform add ios
        $ cordova platform add amazon-fireos
        $ cordova platform add android
        $ cordova platform add blackberry10
        $ cordova platform add firefoxos


運行的這些 Windows 機器上，從任何地方*wp*指的是不同版本的 Windows Phone 作業系統：

        $ cordova platform add wp7
        $ cordova platform add wp8
        $ cordova platform add windows8
        $ cordova platform add amazon-fireos
        $ cordova platform add android
        $ cordova platform add blackberry10
        $ cordova platform add firefoxos


運行此檢查當前設置的平臺：

        $ cordova platforms ls


（請注意 `platform` 和 `platforms` 命令是同義語.)

請運行下列同義命令來刪除一個平臺之一：

        $ cordova platform remove blackberry10
        $ cordova platform rm amazon-fireos
        $ cordova platform rm android


運行命令來添加或刪除平臺影響專案的*平臺*目錄的內容每個指定的平臺作為一個子目錄中的顯示位置。 *Www*原始目錄轉載內每個平臺的子目錄中，例如出現在 `platforms/ios/www` 或 `platforms/android/assets/www` 。 因為 CLI 不斷複製在源*www*資料夾中的檔，應只編輯這些檔，並不是位於*平臺*的子目錄下。 如果您使用的版本控制軟體，您應將此源*www*資料夾，該*合併*的資料夾，添加到您的版本控制系統。 （有關*合併*資料夾的詳細資訊可以找到下面的自訂每個平臺部分中）

**警告**： 當使用 CLI 來構建您的應用程式，您是從編輯中的任何檔，強烈建議不要採用 `/platforms/` 資料夾除非你知道你正在做什麼，或特別在文檔中以其他方式告知。 這是因為中的檔 `/platforms/` direcotry 將被覆蓋上準備或外掛程式重新安裝。

如果您希望在此時，你可以使用 Eclipse 或 Xcode SDK 打開你創建的專案。 您將需要打開的資產從衍生金融工具集 `/platforms/` 要用 SDK 開發目錄。 這是因為 SDK 的特定元資料檔案存儲在相應的 `/platform/` 子目錄。 （見如何開發應用程式每個 IDE 內的資訊平臺指南）使用這種方法，如果你只是想要初始化使用 CLI 的專案，然後切換到 SDK 為本機的工作。

如果您想要使用的整個開發週期的跨平臺的工作流方式 (CLI)，請繼續閱讀。

## 構建應用程式

預設情況下， `cordova create` 腳本生成骨骼肌的以基於 web 的應用，其主頁是該專案的 `www/index.html` 檔。 編輯此應用程式，但是你想要但應作為的一部分指定的任何初始化 `deviceready` 事件處理常式中，從預設的引用`www/js/index.js`.

運行以下命令以反覆運算方式生成專案：

        $ cordova build


這將生成特定于平臺代碼內專案的 `platforms` 子目錄。你可以選擇限制到特定的平臺每個生成的範圍：

        $ cordova build ios


`cordova build`命令是以下，而在此示例中還針對的是一個單一的平臺的簡寫形式：

        $ cordova prepare ios
        $ cordova compile ios


在這種情況下，一次您運行 `prepare` ，你可以作為備用使用蘋果公司的 Xcode SDK 修改和編譯科爾多瓦在範圍內生成的特定于平臺代碼 `platforms/ios` 。 您可以使用相同的方法與其他平臺的 Sdk。

## 測試模擬器或設備上的應用程式

移動平臺 Sdk 經常與捆綁在一起執行設備的圖像，以便您可以啟動該應用程式從主畫面並看看它如何與許多平臺功能交互的模擬程式。 運行如下命令來重新生成應用程式並查看它在特定的平臺模擬器內：

        $ cordova emulate android


一些移動平臺類比特定設備預設情況下，iPhone 的 iOS 專案等。對於其他平臺，您可能需要首先將設備模擬程式與相關聯。

注： 模擬器支援目前不是可供亞馬遜火 OS

（見平臺指南的詳細資訊）。例如，您可能會首先運行 `android` 命令以啟動 Android SDK，然後運行一個特定的設備圖像，啟動它根據其預設行為：

![][2]

 [2]: {{ site.baseurl }}/static/img/guide/cli/android_emulate_init.png

跟進與 `cordova emulate` 命令刷新顯示的最新應用，現已從主畫面發射的模擬程式圖像：

![][3]

 [3]: {{ site.baseurl }}/static/img/guide/cli/android_emulate_install.png

或者，可以將手機插入您的電腦和直接測試應用程式：

        $ cordova run android


在運行此命令之前, 您需要設置的設備進行測試，之後會發生變化，為每個平臺的程式。 在 Android 和亞馬遜火 OS 設備，你將必須啟用設備上的**USB 調試**的選項和或許添加 USB 驅動程式根據您發展導讀工作。 每個平臺的要求的詳細資訊，請參閱平臺指南。

## 添加外掛程式的功能

生成和查看一個新專案時，將顯示預設的應用程式不會很多。 您可以修改該應用程式在許多方面，利用標準的 web 技術，但應用程式緊密的聯繫，與各種設備級功能，您需要添加外掛程式，提供對核心科爾多瓦 Api 的訪問。

*外掛程式*是有點的載入項代碼的提供的本機組件的介面。 您可以設計您自己的外掛程式介面，例如，設計一個混合應用程式，與本機組件混合科爾多瓦 web 視圖時。 （請參閱嵌入 WebViews 和外掛程式開發指南的詳細資訊。更常見的是，您將添加外掛程式，以便啟用科爾多瓦的基本設備級功能詳細的 API Reference 中之一。 可以在[plugins.cordova.io][4]發現這些外掛程式，包括社會，所提供的附加外掛程式的清單。 你可以使用 CLI 來搜索外掛程式從此註冊表。 例如，搜索 `bar` 和 `code` 產生單個結果相匹配這兩個詞作為子字串不區分大小寫：

 [4]: http://plugins.cordova.io/

        $ cordova plugin search bar code

        com.phonegap.plugins.barcodescanner - Scans Barcodes


僅搜索 `bar` 期限國債收益率和更多的結果：

        org.apache.cordova.statusbar - Cordova StatusBar Plugin


`cordova plugin add`命令需要您指定的外掛程式代碼的存儲庫。 請注意當你遵循 Web 專案開發工作流和使用 CLI，CLI 會照顧到適當的位置為每個平臺添加外掛程式的代碼。 (如果你是在本機專案開發工作流，您會添加外掛程式使用 Plugman （這裡指南連結），多次為每個平臺)。

這裡是如何使用 CLI 將功能添加到應用程式的示例：

*   基本設備資訊 （設備 API）：

        $ cordova plugin add org.apache.cordova.device


*   網路連接和電池事件：

        $ cordova plugin add org.apache.cordova.network-information
        $ cordova plugin add org.apache.cordova.battery-status


*   加速度計、 指南針、 和地理定位：

        $ cordova plugin add org.apache.cordova.device-motion
        $ cordova plugin add org.apache.cordova.device-orientation
        $ cordova plugin add org.apache.cordova.geolocation


*   相機、 媒體重播和捕獲：

        $ cordova plugin add org.apache.cordova.camera
        $ cordova plugin add org.apache.cordova.media-capture
        $ cordova plugin add org.apache.cordova.media


*   訪問設備或網路 （檔 API） 上的檔：

        $ cordova plugin add org.apache.cordova.file
        $ cordova plugin add org.apache.cordova.file-transfer


*   通過對話方塊或振動發出通知：

        $ cordova plugin add org.apache.cordova.dialogs
        $ cordova plugin add org.apache.cordova.vibration


*   連絡人：

        $ cordova plugin add org.apache.cordova.contacts


*   全球化：

        $ cordova plugin add org.apache.cordova.globalization


*   閃屏：

        $ cordova plugin add org.apache.cordova.splashscreen


*   打開新的瀏覽器視窗 (InAppBrowser):

        $ cordova plugin add org.apache.cordova.inappbrowser


*   調試主控台：

        $ cordova plugin add org.apache.cordova.console


使用 `plugin ls` （或 `plugin list` ，或 `plugin` 本身） 查看當前已安裝的外掛程式。每個顯示由其識別碼：

        $ cordova plugin ls    # or 'plugin list'
        [ 'org.apache.cordova.console' ]


若要刪除某個外掛程式，它通過引用相同的識別碼出現在該清單中。例如，這裡是你會怎麼移除調試主控台支援從一個發佈版本：

        $ cordova plugin rm org.apache.cordova.console
        $ cordova plugin remove org.apache.cordova.console    # same


你可以大量刪除或添加的外掛程式通過指定多個參數的每個命令：

        $ cordova plugin add org.apache.cordova.console org.apache.cordova.device


## 高級的外掛程式選項

當添加外掛程式，幾個選項允許您指定從何處獲取該外掛程式。 上面的示例使用知名 `registry.cordova.io` 註冊表和外掛程式指定的 `id` ：

        $ cordova plugin add org.apache.cordova.console


`id`還可能包括外掛程式的版本號碼後, 追加 `@` 字元。`latest`版本是最新版本的別名。例如：

        $ cordova plugin add org.apache.cordova.console@latest
        $ cordova plugin add org.apache.cordova.console@0.2.1


如果在沒有註冊該外掛程式 `registry.cordova.io` 位於另一個 git 資源庫中，但您可以指定一個備用的 URL：

        $ cordova plugin add https://github.com/apache/cordova-plugin-console.git


上面的 git 示例讀取外掛程式末尾的主分支上，但可以後追加一個標記或分支如備用 git ref `#` 字元：

        $ cordova plugin add https://github.com/apache/cordova-plugin-console.git#r0.2.0


如果外掛程式 (和其 `plugin.xml` 檔） 是在 git 回購協定內的子目錄中，您可以指定它與 `:` 的字元。 請注意， `#` 字元仍然需要：

        $ cordova plugin add https://github.com/someone/aplugin.git#:/my/sub/dir


您也可以組合 git ref 和子目錄：

        $ cordova plugin add https://github.com/someone/aplugin.git#r0.0.1:/my/sub/dir


或者，指定包含的外掛程式目錄的本地路徑 `plugin.xml` 檔：

        $ cordova plugin add ../my_plugin_dir


## 使用*合併*到自訂的每個平臺

而科爾多瓦允許您輕鬆地部署許多不同平臺的應用程式，有時需要添加自訂項。 在這種情況下，你不想修改中各項的原始程式碼檔 `www` 內的頂級目錄 `platforms` 目錄，，因為他們定期更換與頂級 `www` 目錄的跨平臺源。

相反，頂級 `merges` 目錄提供了一個指定資產在特定平臺上部署的地方。 每個特定于平臺的子目錄內 `merges` 鏡像的目錄結構的 `www` 源樹中，從而允許您重寫或根據需要添加的檔。 例如，在這裡是如何你可能會使用 `merges` 來推動 Android 和亞馬遜火 OS 設備的預設字型大小：

*   編輯 `www/index.html` 檔，添加一個連結到一個額外的 CSS 檔，該檔 `overrides.css` 在這種情況下：

        <link rel="stylesheet" type="text/css" href="css/overrides.css" />


*   （可選） 創建一個空的 `www/css/overrides.css` 檔，將適用于所有非 Android 生成，防止丟失檔錯誤。

*   創建 `css` 中的子目錄 `merges/android` ，然後添加相應的 `overrides.css` 檔。 指定將覆蓋 12 點預設的字體大小範圍內指定的 CSS `www/css/index.css` ，例如：

        body { font-size:14px; }


當你重新生成專案時，Android 版本功能自訂字體大小，而其他人保持不變。

您還可以使用 `merges` 添加中原物不存在的檔 `www` 目錄。 例如，一個應用程式可以納入*後退按鈕*圖形的 iOS 介面，存儲在 `merges/ios/img/back_button.png` ，而 Android 版本可以改為捕獲 `backbutton` 從相應的硬體按鈕的事件。

## 説明命令

科爾多瓦特點兩三個全域命令，可以説明你如果你卡住或遇到的問題。`help`命令顯示所有可用的科爾多瓦命令和它們的語法：

    $ cordova help
    $ cordova        # same


`info`命令產生的潛在的有用的詳細資訊，如當前安裝的平臺，為每個平臺 SDK 版本和外掛程式的 CLI 版本的清單和 `node.js` ：

    $ cordova info


它既呈現到螢幕資訊並捕獲在本地輸出 `info.txt` 檔。

**注**： 目前，僅在 iOS 和 Android 平臺上的詳細資訊都可用。

## 更新科爾多瓦和您的專案

安裝後 `cordova` 實用程式，您可以始終進行更新到最新版本通過運行以下命令：

        $ sudo npm update -g cordova


使用此語法來安裝特定的版本：

        $ sudo npm install -g cordova@3.1.0-0.2.0


運行 `cordova -v` 查看當前運行的版本。 運行 `npm
info` 命令長清單，其中包含當前版本以及其他可用的版本號：

        $ npm info cordova


科爾多瓦 3.0 是要支援這一節中描述的命令列介面的第一個版本。 如果您正在從 3.0 以前的版本更新，您需要創建一個新專案，如以上所述，然後將舊應用程式的資源複製到頂級 `www` 目錄。 在適用的情況，進一步有關升級到 3.0 的詳細資訊是可用的平臺指南中。 一旦你升級到 `cordova` 的命令列介面和使用 `npm update` 待當前，那裡所描述的更耗時過程不再相關。

科爾多瓦 3.0 + 可能仍然需要對專案級別的目錄結構和其他依賴關係的各種變化。 在您運行 `npm` 命令上面更新科爾多瓦本身，您可能需要確保您的專案資源符合最新的版本要求。 運行下面這樣的命令為每個平臺您正在構建：

        $ cordova platform update android
        $ cordova platform update ios
        ...etc.
