---
license: Licensed to the Apache Software Foundation (ASF) under one
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
---

# Windows Phone 8 平臺指南

本指南介紹如何設置您的 SDK 開發環境部署科爾多瓦的 Windows Phone 設備的應用程式。 它側重于 Windows Phone 8，但提供如何支援 Windows Phone 7 的附加詳細資訊。

該示例演示如何使用任一特定的 Windows Phone 外殼程式工具來生成和生成的應用程式，或者跨平臺科爾多瓦 CLI 討論在命令列介面。 （見的概述的這些發展工作流比較）。此部分還顯示了如何打開科爾多瓦的應用程式，以便您可以在 Visual Studio 中修改他們。 無論你採取哪種方法，您需要安裝 Windows Phone SDK，如下所述。

見到 Windows Phone 平臺特定的詳細資訊如下：

*   Windows Phone 8 外掛程式
*   升級 Windows Phone 8

對於 Windows Phone 8 平臺，科爾多瓦 web 視圖依賴于互聯網資源管理器中 10 作為自己的渲染引擎，因此作為一個實際問題你可以使用 IE10 的功能強大的調試器來測試並不調用科爾多瓦 Api 的任何 web 內容。 Windows Phone 開發者博客如何支援 IE10 和可比較的 WebKit 瀏覽器提供[有益的指導][1]。

 [1]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx

## 要求和支援

您需要以下各項：

*   64 位版本的 Windows 8 Pro，安裝盤或*ISO*磁片影像檔。 評估版是[Microsoft 開發人員網路][2]上可用。 Pro 版有必要運行設備模擬程式。

*   [Windows Phone SDK][3].

*   要通過命令列與 Windows Phone 8.0 SDK 部署，必須安裝[Visual Studio 2012 更新 2][4] 。

 [2]: http://msdn.microsoft.com/en-US/evalcenter/jj554510
 [3]: http://www.microsoft.com/en-us/download/details.aspx?id=35471
 [4]: https://support.microsoft.com/en-us/kb/2797912

為了開發科爾多瓦的 Windows Phone 設備的應用程式，您可以使用運行 Windows 的電腦，但你也可能發展的 mac，通過運行一個虛擬機器環境或者通過使用新兵訓練營雙啟動 Windows 的分區。 請查閱這些資源以設置在 Mac 上所需的 Windows 開發環境：

*   **VMWare 融合**： 要設置了 Windows 8 的虛擬機器，按照[Microsoft 開發人員網路][5]，所提供的說明，然後請參閱配置 VMWare 融合的虛擬環境運行 SDK 捆綁的模擬器的準備工作資訊。

*   **桌面的相似之處**： 若要設置 Windows 8 虛擬機器，按照[Microsoft 開發人員網路][6]，所提供的說明，然後請參閱配置平行桌面虛擬環境運行 SDK 捆綁的模擬器的準備工作資訊。

 [5]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426
 [6]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945424

<!--
- __VirtualBox__: To set up the Windows 8 virtual machine, follow the
  installation instructions provided by the [Microsoft Developer
  Network](http://msdn.microsoft.com/en-US/library/windows/apps/jj945425).

  2DO: virtualBox doesn't work yet; any extra config info?
-->

*   **新兵訓練營**： 要設置了 Windows 8 的分區，請按照操作[Microsoft 開發人員網路][7]所提供的安裝說明.

 [7]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945423

如果您在 PC 上開發，其處理器必須支援虛擬化 （英特爾*VT-x* ） 和[第二級別位址翻譯 （板式）][8]。 請查閱[英特爾的支援的處理器的清單][9]。 虛擬化是通常預設禁用的所以您需要在您的 BIOS 設置中啟用它。 PC 應該有至少 6.5 GB 的可用硬碟空間和 4 GB 的 RAM。

 [8]: http://en.wikipedia.org/wiki/Second_Level_Address_Translation
 [9]: http://ark.intel.com/Products/VirtualizationTechnology

## 使用科爾多瓦外殼工具

如果您想要使用科爾多瓦的 Windows Phone 居中外殼工具與 SDK 一起，你有兩個基本選項：

*   本地訪問它們生成的 CLI 的專案代碼中。他們是可用在 `platforms/wp8/cordova` 目錄在您添加後 `wp8` 平臺如下所述。

*   從單獨的分發在[cordova.apache.org][10]下載它們。 科爾多瓦分佈包含單獨的檔案，為每個平臺。 一定要展開相應的存檔， `cordova-wp8\wp8` 在這種情況下，在一個空的目錄內。 有關批次處理實用程式可用在頂級 `bin` 目錄。 (參閱**自述**檔，如果有必要作更詳細的指示）。

 [10]: http://cordova.apache.org

這些外殼工具允許您創建、 構建和運行 Windows Phone 應用程式。 額外的命令列介面，可以跨所有平臺的外掛程式功能的資訊，請參閱使用 Plugman 到管理外掛程式。 指導如何開發外掛程式和 Windows Phone 8 外掛程式特定于 Windows Phone 平臺的詳細資訊，請參閱應用程式外掛程式。

## 安裝 SDK

從[dev.windowsphone.com][11]的**下載**區域安裝最新版本的 Windows Phone SDK。 你也可以安裝更多最近的模擬程式更新程式封裝。

 [11]: https://dev.windowsphone.com/en-us/downloadsdk

![][12]

 [12]: {{ site.baseurl }}/static/img/guide/platforms/wp8/wp8_downloadSDK.png

## 創建一個新專案

在這一點上，要創建一個新的專案你可以選擇之間跨平臺 CLI 工具的命令列介面或的一組特定的 Windows Phone 殼工具中所述。 在原始程式碼目錄中，這裡是從 CLI 的方法：

        > cordova create hello com.example.hello HelloWorld
        > cd hello
        > cordova platform add wp8


下面是相應的低級別 shell 工具方法：

        C:\path\to\cordova-wp8\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld


## 生成專案

如果您在開發中使用 CLI，專案目錄的頂級 `www` 目錄中包含的原始程式碼檔。運行任一內要重新生成應用程式的專案目錄：

        > cordova build
        > cordova build wp8   # do not rebuild other platforms


如果您使用特定的 Windows Phone 外殼工具在發展中，還有不同的做法。 一旦您生成專案時，預設的應用程式的源是可用在 `projects\wp8\www` 子目錄。 隨後命令都可用在 `cordova` 子目錄中同一級別的。

`build`命令清除專案檔案並重新生成應用程式。第一個示例將生成調試資訊，和第二個標誌發佈的應用程式：

        C:\path\to\project\cordova\build.bat --debug
        C:\path\to\project\cordova\build.bat --release


`clean`命令可以説明沖洗中準備的下一個目錄 `build` ：

        C:\path\to\project\cordova\clean.bat


## 部署到模擬程式

在這一點上，您可以使用 `cordova` 實用程式 CLI 應用程式部署到模擬程式從命令列：

        > cordova emulate wp8


否則使用備用殼介面：

        C:\path\to\project\cordova\run


預設情況下， `run` 腳本調用的模擬器的標誌，並為其接受附加生成標誌， `--debug` 提供的預設值：

        C:\path\to\project\cordova\run --emulator --debug
        C:\path\to\project\cordova\run --emulator --release
        C:\path\to\project\cordova\run --emulator --nobuild


在啟動模擬器設備圖像與安裝的應用程式。 從主畫面，導航到要啟動**HelloWorld**應用程式的應用程式面板。這顯示了應用程式啟動與它閃屏，其次是它的主介面：

![][13]

 [13]: {{ site.baseurl }}/static/img/guide/platforms/wp8/wp8_emulator.png

設備的螢幕頂部右邊模擬程式的基本控制項允許您以縱向和橫向方向之間切換。 **>**按鈕將打開更多的控制項，使您可以測試更複雜的取向和手勢：

![][14]

 [14]: {{ site.baseurl }}/static/img/guide/platforms/wp8/wp8_emulator_orient.png

這些先進的控制項還允許您修改該設備的位置或類比的運動序列：

![][15]

 [15]: {{ site.baseurl }}/static/img/guide/platforms/wp8/wp8_emulator_loc.png

## 將部署到設備

在測試之前您設備上的應用程式，必須註冊該設備。 有關如何部署和測試 Windows Phone 8 上的詳細資訊，請參考[微軟的文檔][16]。 此外，還要確保手機連接到電腦，和螢幕處於解鎖狀態。

 [16]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565.aspx

然後運行下面的 CLI 命令，要在設備上運行的應用程式：

    > cordova run wp8


它對應于此較低級別 shell 命令：

    C:\path\to\project\cordova\run --device


或者，如果你工作在 Visual Studio 中， **Windows Phone 設備**從功能表中選擇下拉在頂部，然後按綠色**播放**按鈕附近，否則鍵入**F5**.

## 修改在 SDK 中的專案

一旦你建立科爾多瓦的應用程式，如上文所述，您可以使用 SDK 打開它。 各種 `build` 命令會生成一個 Visual Studio 解決方案 (*.sln*) 檔。 打開要修改在 Visual Studio 專案的檔。 基於 web 的原始程式碼，該代碼是在專案內可用 `www` 目錄。 以及其他工具 SDK 提供，下面的功能表控制項使您可以啟動該應用程式在 Windows Phone 模擬器中：

![][17]

 [17]: {{ site.baseurl }}/static/img/guide/platforms/wp8/wp8_vs.png

如何在您的工作流中使用科爾多瓦的命令列工具或 SDK 的建議諮詢的概述。 科爾多瓦 CLI 依賴于跨平臺原始程式碼通常會覆蓋使用 SDK 的特定于平臺的檔。 如果你想要在 SDK 內工作，使用較低級別外殼工具作為 CLI 的替代方法。
