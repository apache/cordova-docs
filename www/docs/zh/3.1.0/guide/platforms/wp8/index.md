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

# Windows Phone 8 平臺指南

本指南介紹如何設置您的 SDK 開發環境部署科爾多瓦為 Windows Phone 8 設備的應用程式。 如果你想要的目標 7.5 和 8 設備，而是盡可能詳細的 Windows Phone 7 平臺指南開發為 Windows Phone 7。 第 7 版並沒有包括在 IE10 中的所有高級的功能，但實現相同的 Api 集。 Windows Phone 8 應用程式*不*在 Windows Phone 7 設備上運行。

適用于這兩個版本的更多詳細的平臺特定資訊如下所示：

*   升級 Windows Phone
*   Windows Phone 外掛程式
*   Windows Phone 的命令列工具

上面的命令列工具請參閱科爾多瓦 3.0 以前的版本。關於當前介面的資訊，請參閱命令列介面。

## 1.系統要求

*   作業系統：

    *   Windows 8 或 Windows 8 臨
        *   需要的 SDK 的 Windows 64 位版本 (x64)。
        *   Pro 版建議以便您可以運行的設備模擬程式。

*   硬體：

    *   6.5 GB 的可用硬碟空間
    *   4 GB RAM
    *   (x64) 64 位 CPU

*   Windows Phone 8 模擬器

    *   手機模擬器使用 HYPER-V，因此該清單只包含那些必備。
    *   Windows 8 Pro 64 位版或更高
    *   需要支援虛擬化的處理器和 [第二級別位址翻譯 (板式)][1]
        *   查看[清單中的英特爾處理器支援 VT-x （虛擬化） 和 EPT (板式)][2]
    *   啟用虛擬化功能 （即，VT-x 上英特爾） 在您的 BIOS 設置，如預設情況下通常禁用此。

*   SDK + IDE (Visual Studio)

    *   Visual Studio 2012 專業、 保費或極限。 請注意 Visual Studio 表示為 Windows Phone （包含在 SDK） 建議不要因為你可以不生成範本 （見下文） 與 VS 表示，由於它並沒有**匯出範本**功能，這是只有在 VS Pro 或更高。

*   註冊和支付為[Windows Phone 開發中心][3]帳戶，如果你想要在實際設備上安裝您的應用程式或將其提交給市場的地方。

 [1]: http://en.wikipedia.org/wiki/Second_Level_Address_Translation
 [2]: http://ark.intel.com/Products/VirtualizationTechnology
 [3]: http://dev.windowsphone.com/en-us/publish

**注：**在虛擬機器中運行 SDK 可能會有一些挑戰。 您可以閱讀這篇博客，讓大家瞭解關於要為[在 Mac 上的 Windows Phone][4]開發的解決方案.

 [4]: http://aka.ms/BuildaWP8apponaMac

## 2.安裝 SDK + 科爾多瓦

*   下載並安裝[Windows Phone SDK][5]

*   下載並解壓縮[科爾多瓦][6]的最新副本。 你將會工作 `lib\windows-phone-8\wp8` 子目錄中， `lib\windows-phone-8\wp7` 包含科爾多瓦的視窗手機 7 版本。

*   複製 `CordovaWP8_x_x_x.zip` 檔到 `\My Documents\Visual Studio 2012\Templates\ProjectTemplates\` 目錄。

 [5]: http://www.microsoft.com/en-us/download/details.aspx?id=35471
 [6]: http://phonegap.com/download

## 2.1.建築範本

**注：**可能不需要這一步。如果 lib\windows 電話目錄已經包含 CordovaWP8\_x\_x_x.zip 的檔，然後你可以跳過此步驟。

為了簡化開發過程，科爾多瓦附帶了一個腳本來生成 Visual Studio 範本。 這允許快速建立的科爾多瓦 Visual Studio 內的應用程式。 如果需要，可以修改此範本和下面的步驟說明如何繼續如果您想要生成範本。

### 運行該批次檔來創建和安裝範本。

*   根的回購協定包含檔 createTemplates.bat。 按兩下此檔將生成 2 個.ZIP 檔案。 （CordovaWP7\_x\_x\_x.zip + CordovaWP8\_x\_x\_x.zip x.x.x 哪裡的當前版本號）方便地使用這些檔在 Visual Studio 中，複製他們到"我的 Documents\Visual 工作室 2012\Templates\ProjectTemplates\"你然後將能夠從 Visual Studio 檔-> 新專案功能表創建新的 Apache 科爾多瓦 Windows Phone 應用程式。

*   如果您從命令列運行該批次檔，還可以調用同一個參數，以便自動安裝

運行該腳本：

    > createTemplates.bat-安裝


## 3.設置新專案

*   打開 Visual Studio 表示為 Windows Phone 和選擇**新的專案**.

*   選擇**CordovaWP8**。（版本號顯示在範本描述）。

*   為該專案的名稱，並選擇**確定**.

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/wp8/StandAloneTemplate.png

## 4.審查的專案結構

*   `www`目錄包含您科爾多瓦 `html/js/css` 和包含在您的應用程式中的任何其他資源。

*   您在此處添加的任何內容需要的 Visual Studio 專案的一部分，必須將它設置為內容。

*   注： 此螢幕捕獲從科爾多瓦 2.3.0 下載，您的清單的差異取決於安裝的實際版本。

![][8]

 [8]: {{ site.baseurl }}/static/img/guide/platforms/wp8/projectStructure.png

## 5.生成並部署到模擬程式

*   請確保在主要的下拉式功能表中選擇**Windows Phone 模擬器**。

*   按綠色**播放**按鈕下拉式功能表中開始調試，或鍵入**F5**.

![][9]

 [9]: {{ site.baseurl }}/static/img/guide/platforms/wp8/BuildEmulator.png

## 6.生成您的設備的專案

若要測試您的應用程式在設備上，必須註冊該設備。 按一下[這裡][10]來部署和測試您的 Windows Phone 8 日上閱讀文檔。

 [10]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105).aspx

*   請確保您的電話連接，並且螢幕處於解鎖狀態。

*   在 Visual Studio 中，從頂部的下拉式功能表中選擇設備。

*   按主要的下拉式功能表中，若要啟動調試，旁邊的綠色**播放**按鈕或鍵入**F5**.

![][11]

 [11]: {{ site.baseurl }}/static/img/guide/platforms/wp7/wpd.png

## 完成了 ！

## 進一步閱讀

IE10 和 WebKit 的瀏覽器，以及如何支援之間的具體區別更多詳細資訊這兩個 MS 已有用的[指南在這裡][12]

 [12]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx
