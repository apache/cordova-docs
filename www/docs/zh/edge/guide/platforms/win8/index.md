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

# Windows 平臺指南

本指南介紹如何設置您的 SDK 開發環境來構建和部署應用程式科爾多瓦為 Windows 8、 Windows 8.1、 Windows Phone 8.1 和 Windows 10 通用應用程式平臺。 它演示如何使用 shell 工具來生成和生成應用程式，或跨平臺科爾多瓦 CLI 討論了在命令列介面。 (見比較這些發展選項的概述)。本節還演示了如何修改科爾多瓦在 Visual Studio 中的應用程式。 無論你採取哪種方法，您需要安裝 Visual Studio SDK，如下所述。

有關如何升級現有的 Windows 8 科爾多瓦專案的資訊，請參閱升級 Windows 8。

視窗電話 8 （wp8） 住宿作為一個獨立的平臺，有關詳細資訊，請參閱 Windows Phone 8 平臺指南。

在 Windows 上運行的科爾多瓦 WebViews 依賴互聯網資源管理器中 10 （Windows 8.0） 和互聯網資源管理器中 11 （Windows 8.1 和 Windows Phone 8.1） 作為他們的渲染引擎，因此作為一個實際問題你可以使用 IE 的功能強大的調試器來測試並不調用科爾多瓦 Api 的任何 web 內容。 Windows Phone 開發者博客上可比的 WebKit 瀏覽器支援 IE 如何提供[有益的指導][1]。

 [1]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx

## 要求和支援

若要開發 Windows 平臺的應用程式需要：

*   最低 4 gb 的 RAM 的 Windows 8.1，32 或 64 位機器 （*家裡*、*臨*，或*企業*版）。

*   Windows 8.0、 8.1 或 10、 32 或 64 位*回家*，*臨*，或*企業*版，以及[Visual Studio 2012 速成版][2]或視覺工作室 2013 年。 視覺工作室 2015年是不能夠構建 Windows 8.0 的應用程式。

 [2]: http://www.visualstudio.com/downloads

為 Windows 8.0 和 8.1 (包括 Windows Phone 8.1) 開發的應用程式:

*   Windows 8.1 或 Windows 10、 32 或 64 位*回家*，*臨*，或*企業*版，以及[Visual Studio 2013 速成版][2]或更高。 Windows 8.1 企業評估版是可從[Microsoft 開發人員網路][3].

*   為 Windows Phone 模擬器，Windows 8.1 (64) 專業版或更高，和一個處理器，支援[用戶端 HYPER-V 和第二級別位址翻譯 (板)][4]。 Windows 8.1 企業評估版是可從[Microsoft 開發人員網路][3].

*   [Windows 視覺工作室 2013 年][5](明示或更高)。

 [3]: http://msdn.microsoft.com/en-US/evalcenter/jj554510
 [4]: https://msdn.microsoft.com/en-us/library/windows/apps/ff626524(v=vs.105).aspx#hyperv
 [5]: http://www.visualstudio.com/downloads/download-visual-studio-vs#d-express-windows-8

為 Windows 10 開發的應用程式:

*   Windows 8.1 或 Windows 10 技術預覽 2，32 位或 64 位，以及[視覺工作室 2015 RC][6]或更高。

 [6]: http://www.visualstudio.com/preview

應用程式相容性是由應用程式針對作業系統決定的。 應用程式是主動相容但不是厚此薄彼-相容，所以針對 Windows 8.1 應用程式不能運行在 8.0，但為 8.0 建造一個應用程式可以運行在 8.1。

按照說明在[windowsstore.com][7]提交到 Windows 應用商店應用程式。

 [7]: http://www.windowsstore.com/

為 Windows 開發科爾多瓦的應用程式，您可以使用 pc 機運行 Windows，但你也可能發展在 Mac 上運行的虛擬機器環境或到雙啟動 Windows 8.1 分區使用新兵訓練營。 請查閱這些資源以設置在 Mac 上所需的 Windows 開發環境：

*   [VMWare Fusion][8]

*   [Parallels Desktop][9]

*   [Boot Camp][10]

 [8]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426
 [9]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945424
 [10]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945423

## 使用科爾多瓦外殼工具

如果你想要將與 SDK 一起使用科爾多瓦的 Windows 居中外殼工具，你有兩個基本選擇：

*   他們從本地訪問生成的 CLI 的專案代碼。他們是在`平臺/windows/`目錄後添加`windows`平臺如下所述。

*   從單獨的分發在[cordova.apache.org][11]下載它們。 科爾多瓦分佈包含單獨的檔案，為每個平臺。 一定要擴大相應的存檔，`科爾多瓦 windows`在這種情況下，在一個空的目錄內。 有關批次處理實用程式可用`包/bin`目錄中。 (參閱**自述**檔，如果需要更詳細的說明)。

 [11]: https://www.apache.org/dist/cordova/platforms/

這些外殼工具允許您創建、 構建和運行 Windows 應用程式。 附加的命令列介面，可以跨所有平臺的外掛程式功能的資訊，請參閱使用 Plugman 管理外掛程式。

## 安裝 SDK

安裝任何版本的[Visual Studio][2]匹配要求上面列出的版本。

![][12]

 [12]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_installSDK.png

為 Windows 10，Visual Studio 安裝程式沒有安裝工具來構建通用的 Windows 應用程式的選項。 你必須確保，此選項是在安裝時選擇安裝所需的 SDK。

## 創建一個新專案

在這一點上，要創建一個新的專案你可以選擇之間跨平臺 CLI 工具的命令列介面或一組特定的 Windows 外殼工具所述。 下面的 CLI 方法生成新的`你好`專案目錄中命名*HelloWorld*應用程式:

        > cordova create hello com.example.hello HelloWorld
        > cd hello
        > cordova platform add windows


下面是相應的低級別 shell 工具方法：

        C:\path\to\cordova-windows\package\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld


本專案的目標 Windows 8.1 作為預設的目標作業系統。 你可以選擇目標 8.0 或 10.0 (見下文的"配置目標 Windows 版本") 為所有的生成，或你在每次生成目標特定于特定的版本。

## 生成專案

如果您在開發中使用 CLI，專案目錄的頂級 `www` 目錄中包含的原始程式碼檔。運行任一內要重新生成應用程式的專案目錄：

        > cordova build
        > cordova build windows              # do not rebuild other platforms
        > cordova build windows   --debug    # generates debugging information
        > cordova build windows   --release  # signs the apps for release


下面是相應的低級別 shell 工具方法：

        C:\path\to\project\cordova\build.bat --debug
        C:\path\to\project\cordova\build.bat --release


`clean`命令可以説明沖洗中準備的下一個目錄 `build` ：

        C:\path\to\project\cordova\clean.bat


## 配置目標 Windows 版本

由預設的`生成`命令將生成兩個包: Windows 8.0 和 Windows Phone 8.1。 升級到版本 8.1 以下配置設置必須添加到設定檔 (`config.xml`的 Windows 套裝程式).

        <preference name="windows-target-version" value="8.1" />


一旦你添加此設置`生成`命令將開始生產 Windows 8.1 和 Windows Phone 8.1 包。

### --appx 參數

您可能會決定你想要建立的針對特定作業系統的應用程式的特定版本 (例如，您可能有設置您想要針對 Windows 10，但您想要構建 Windows Phone 8.1)。 要做到這一點，你可以使用`--appx`參數:

        > cordova build windows -- --appx=8.1-phone


生成系統將忽略 config.xml 目標 Windows 版本中設置的偏好，並嚴格為 Windows Phone 8.1 生成套裝軟體。

`--appx`國旗有效值為`8.1-win`、 `8.1-phone`和`uap`(對於 Windows 10 通用應用程式)。 這些選項也適用于`cordova run`命令。

### 目標 Windows 版本的注意事項

Windows 10 科爾多瓦的應用程式 (和一般的 HTML 應用程式) 支援一種新的"遠端"模式。 這種模式使應用程式更多的自由與尊重使用 DOM 操作和常見的 web 模式，例如使用內聯腳本，但如此通過減少的功能集時提交給公共 Windows 應用商店，可使用您的應用程式。 有關 Windows 10 和遠端模式的詳細資訊，請查看[科爾多瓦為 Windows 10][13]文檔。

 [13]: win10-support.md.html

使用遠端模式時，開發人員被鼓勵申請內容安全政策 (CSP) 到他們的應用程式，以防止腳本注入攻擊。

## 部署應用程式

要部署 Windows 套裝程式:

        > cordova run windows -- --win  # explicitly specify Windows as deployment target
        > cordova run windows # `run` uses Windows package by default


要將 Windows Phone 包部署:

        > cordova run windows -- --phone  # deploy app to Windows Phone 8.1 emulator
        > cordova run windows --device -- --phone  # deploy app to connected device


可以使用**cordova run windows --list**來查看所有可用的目標和**cordova run windows --target=target_name \-- -|-phone**，在特定的設備或模擬器上運行的應用程式 （例如，`cordova run windows --target="Emulator 8.1 720P 4.7 inch" -- --phone`).

您還可以使用**cordova run --help**查看附加的生成和運行選項。

## 在 SDK 中打開的專案和部署應用程式

一旦你建立科爾多瓦應用程式，如上文所述，可以在 Visual Studio 打開它。 各種`生成`命令生成一個 Visual Studio 解決方案 (*.sln*) 檔。 檔資源管理器來修改在 Visual Studio 專案中打開的檔:

![][14]

 [14]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_openSLN.png

`CordovaApp`元件顯示解決方案中, 和其`www`目錄包含基於 web 的原始程式碼，包括`index.html`主頁:

![][15]

 [15]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk.png

Visual Studio 主功能表下面的控制項允許您測試或部署應用程式:

![][16]

 [16]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_deploy.png

選擇**本地電腦**，請按綠色箭頭運行 Visual Studio 在同一機器上安裝的應用程式。一旦你這樣做，應用程式將出現在 Windows 8 應用程式清單:

![][17]

 [17]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_runApp.png

每次您重新生成應用程式，在介面中可用的版本被刷新。

一旦可用應用程式清單中，按住**CTRL**鍵，同時選擇該應用程式允許您用別針把它到主畫面:

![][18]

 [18]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_runHome.png

請注意，是否你打開的應用程式在虛擬機器環境中，您可能需要按一下在角落裡或兩側的窗戶，切換應用程式或訪問附加功能:

![][19]

 [19]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_run.png

或者，選擇**模擬器**部署選項以查看該應用程式，就好像它在平板設備上運行:

![][20]

 [20]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_sim.png

與不同的桌面部署，此選項允許您類比平板電腦的定位，位置，和改變其網路設置。

**注**: 有關如何在您的工作流中使用科爾多瓦的命令列工具或 SDK 建議查閱概述。 科爾多瓦 CLI 依賴于跨平臺原始程式碼通常覆蓋 SDK 所使用的特定于平臺的檔。 如果你想要使用 SDK 來修改專案，使用較低級別外殼工具作為 CLI 的替代方法。
