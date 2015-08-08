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

本指南演示如何創建應用程式並將它們部署到各種本機移動平臺，使用 `cordova` 命令列介面 (CLI)。 此工具允許您創建新專案、 建立他們在不同平臺上，和在模擬器中運行它們。 此外可以使用 CLI 來初始化後，您使用各種平臺 Sdk 來進一步發展他們的專案代碼。

## 系統必備元件

在運行任何命令列工具之前, 您需要為每個您想要的目標的平臺安裝 Sdk。（參見平臺指南更多詳細資訊。

若要添加支援或重建任何平臺的一個專案，您需要從支援的平臺 SDK 的同一台電腦上運行命令列介面。CLI 支援以下組合：

*   iOS (Mac)
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

 [1]: http://nodejs.org/

## 創建應用程式

轉至目錄位置您維護您的原始程式碼，並運行以下命令：

        $ cordova create hello com.example.hello HelloWorld


它可能需要一些時間完成的命令，有耐心。運行 `cordova -d` ，請參閱有關進展的資訊。

第一個參數指定要為您的專案生成的*你好*目錄。 其 `www` 子目錄的房子您應用程式的主頁上，與各種資源下 `css` ， `js` ，和 `img` ，其中遵循共同 web 發展的檔命名約定。 `config.xml`檔包含生成和分發應用程式所需的重要的中繼資料。

其他的兩個參數都是可選的： `com.example.hello` 參數提供您的專案具有反向域樣式識別碼和 `HelloWorld` 提供了應用程式的顯示文本。 您可以編輯這兩以後這些值在 `config.xml` 檔。

## 添加平臺

後面的所有命令都需要在專案的目錄或在其範圍內的任何子目錄內運行：

        $ cd hello


您可以生成專案之前，您需要指定一組的目標平臺。 您運行這些命令的能力取決於您的電腦是否支援每個 SDK，是否你已經安裝每個 SDK。 運行任何這些從 Mac：

        $ cordova platform add ios
        $ cordova platform add android
        $ cordova platform add blackberry10
        $ cordova platform add firefoxos


運行的這些 Windows 機器上，從任何地方*wp*指的是不同版本的 Windows Phone 作業系統：

        $ cordova platform add wp7
        $ cordova platform add wp8
        $ cordova platform add windows8
        $ cordova platform add android
        $ cordova platform add blackberry10
        $ cordova platform add firefoxos


運行此檢查當前設置的平臺：

        $ cordova platforms ls


（請注意 `platform` 和 `platforms` 命令是同義語.)

請運行下列同義命令來刪除一個平臺之一：

        $ cordova platform remove blackberry10
        $ cordova platform rm android


運行命令來添加或刪除平臺影響專案的*平臺*目錄的內容每個指定的平臺作為一個子目錄中的顯示位置。 *Www*原始目錄轉載內每個平臺的子目錄中，例如出現在 `platforms/ios/www` 或 `platforms/android/assets/www` 。 預設情況下，每個平台佈建檔設置，以便能夠訪問所有的科爾多瓦的 Api。

如果您願意，您可以使用 SDK 在此時打開你創建的專案。 但是，所做的任何編輯你到內 SDK 影響衍生專案設置的資產，不是原始的跨平臺原始程式碼檔。 如果你只是想要初始化一個專案，請使用此方法。 （見如何開發應用程式內每個 SDK 平臺指南的資訊）如果您想使用命令列工具的整個開發週期，請繼續閱讀。

## 構建應用程式

預設情況下， `cordova create` 腳本生成骨骼肌的以基於 web 的應用，其主頁是該專案的 `www/index.html` 檔。 編輯此應用程式，但是你想要但應作為的一部分指定的任何初始化 `deviceready` 事件處理常式中，從預設的引用 `www/js/index.js` 。 <!-- XREF
(See the Application Development Guide for details.)
XREF -->

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


一些移動平臺類比特定設備預設情況下，iPhone 的 iOS 專案等。 對於其他平臺，您可能需要首先將設備模擬程式與相關聯。 （見平臺指南的詳細資訊）。例如，您可能會首先運行 `android` 命令以啟動 Android SDK，然後運行一個特定的設備圖像，啟動它根據其預設行為：

![][2]

 [2]: {{ site.baseurl }}/static/img/guide/cli/android_emulate_init.png

跟進與 `cordova emulate` 命令刷新顯示的最新應用，現已從主畫面發射的模擬程式圖像：

![][3]

 [3]: {{ site.baseurl }}/static/img/guide/cli/android_emulate_install.png

或者，可以將手機插入您的電腦和直接測試應用程式：

        $ cordova run android


在運行此命令之前, 您需要設置的設備進行測試，之後會發生變化，為每個平臺的程式。 在 Android 的情況下，你將必須啟用設備上的**USB 調試**的選項和或許添加 USB 驅動程式根據您發展導讀工作。 每個平臺的要求的詳細資訊，請參閱平臺指南。

## 添加功能

生成和查看一個新專案時，將顯示預設的應用程式不會很多。 您可以修改該應用程式在許多方面，利用標準的 web 技術，但應用程式緊密的聯繫，與各種設備級功能，您需要添加外掛程式，提供對核心科爾多瓦 Api 的訪問。

*外掛程式*是有點的載入項代碼的提供的本機組件的介面。 您可以設計您自己的外掛程式介面，例如，設計一個混合應用程式，與本機組件混合科爾多瓦 web 視圖時。 （請參閱嵌入 WebViews 和外掛程式開發指南的詳細資訊。更常見的是，您將添加外掛程式，使科爾多瓦的基本設備級功能之一 <!--應用程式開發指南中討論的 XREF 和--> XREF 詳細的 API Reference 中。

`cordova plugin add`命令需要您指定的外掛程式代碼的存儲庫。以下是您可能會添加的功能的示例：

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


你可以大量刪除或添加的外掛程式通過指定多個參數的每個命令。

## 自訂每個平臺

而科爾多瓦允許您輕鬆地部署許多不同平臺的應用程式，有時需要添加自訂項。 在這種情況下，你不想修改中各項的原始程式碼檔 `www` 內的頂級目錄 `platforms` 目錄，，因為他們定期更換與頂級 `www` 目錄的跨平臺源。

相反，頂級 `merges` 目錄提供了一個指定資產在特定平臺上部署的地方。 每個特定于平臺的子目錄內 `merges` 鏡像的目錄結構的 `www` 源樹中，從而允許您重寫或根據需要添加的檔。 例如，在這裡是如何你可能會使用 `merges` 來提振的 Android 設備的預設字型大小：

*   編輯 `www/index.html` 檔，添加一個連結到一個額外的 CSS 檔，該檔 `overrides.css` 在這種情況下：

        <link rel="stylesheet" type="text/css" href="css/overrides.css" />


*   （可選） 創建一個空的 `www/css/overrides.css` 檔，將適用于所有非 Android 生成，防止丟失檔錯誤。

*   創建 `css` 中的子目錄 `merges/android` ，然後添加相應的 `overrides.css` 檔。 指定將覆蓋 12 點預設的字體大小範圍內指定的 CSS `www/css/index.css` ，例如：

        body { font-size:14px; }


當你重新生成專案時，Android 版本功能自訂字體大小，而其他人保持不變。

您還可以使用 `merges` 添加中原物不存在的檔 `www` 目錄。 例如，一個應用程式可以納入*後退按鈕*圖形的 iOS 介面，存儲在 `merges/ios/img/back_button.png` ，而 Android 版本可以改為捕獲 `backbutton` 從相應的硬體按鈕的事件。

## 更新科爾多瓦

安裝後 `cordova` 實用程式，您可以始終進行更新到最新版本通過運行以下命令：

        $ sudo npm update -g cordova


使用此語法來安裝特定的版本：

        $ sudo 故宮安裝-g cordova@3.1.0


運行 `cordova -v` ，查看當前運行的版本。 運行 `npm
info` 命令長清單，其中包含當前版本以及其他可用的版本號：

        $ npm info cordova


科爾多瓦 3.0 是要支援這一節中描述的命令列介面的第一個版本。 如果您正在從 3.0 以前的版本更新，您需要創建一個新專案，如以上所述，然後將舊應用程式的資源複製到頂級 `www` 目錄。 在適用的情況，進一步有關升級到 3.0 的詳細資訊是可用的平臺指南中。 一旦你升級到 `cordova` 的命令列介面和使用 `npm update` 待當前，那裡所描述的更耗時過程不再相關。
