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

# Windows 8 平臺指南

本指南介紹如何設置您的 SDK 開發環境部署科爾多瓦在 Windows 8 的應用程式。 該示例演示如何使用任一特定于 Windows 8 的外殼工具來生成和生成的應用程式，或者跨平臺科爾多瓦 CLI 討論在命令列介面。 （見的概述的這些發展選項比較）。此部分還顯示如何修改科爾多瓦在 Visual Studio 中的應用程式。 無論你採取哪種方法，您需要安裝 Visual Studio SDK，如下所述。

有關如何升級現有的 Windows 8 科爾多瓦專案的資訊，請參閱升級 Windows 8。

科爾多瓦 WebViews 運行在 Windows 8 上依靠互聯網資源管理器中 10 作為他們的呈現引擎，因此作為一個實際問題你可以使用 IE10 的功能強大的調試器來測試並不調用科爾多瓦 Api 的任何 web 內容。 Windows Phone 開發者博客如何支援 IE10 和可比較的 WebKit 瀏覽器提供[有益的指導][1]。

 [1]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx

## 要求和支援

您需要以下 OS/SDK 組合，可以從安裝盤或*ISO*磁片影像檔之一：

*   Windows 8.0 或 8.1、 32 或 64 位*首頁*、*臨*，或*企業*版，以及[Visual Studio 2012 速成版][2].

*   Windows 8.1、 32 或 64 位*首頁*、*臨*，或*企業*版，以及[Visual Studio 2013 專業版][2]或更高。 評估版的 Windows 8.1 企業是可從[Microsoft 開發人員網路][3].

 [2]: http://www.visualstudio.com/downloads
 [3]: http://msdn.microsoft.com/en-US/evalcenter/jj554510

根據 Windows 8.1 編譯的應用程式*不*在 Windows 8.0 下運行。根據 Windows 8.0 編譯的應用程式是向前相容的 8.1。

<!-- 64-bit necessary? Pro necessary? ELSE still recommended for parallel WP dev -->

按照在[windowsstore.com][4]的說明提交到 Windows 應用商店的應用程式。

 [4]: http://www.windowsstore.com/

<!-- true? -->

為了為 Windows 8 開發科爾多瓦的應用程式，您可以使用運行 Windows 的個人電腦，但你也可能發展的 mac，通過運行一個虛擬機器環境或者通過使用到雙重開機 Windows 8 分區的新兵訓練營。 請查閱這些資源以設置在 Mac 上所需的 Windows 開發環境：

*   [VMWare 融合][5]

*   [相似之處的桌面][6],

*   [新兵訓練營][7].

 [5]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426
 [6]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945424
 [7]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945423

## 使用科爾多瓦外殼工具

如果您想要使用科爾多瓦的 Windows 8 居中外殼工具與 SDK 一起，你有兩個基本選項：

*   本地訪問它們生成的 CLI 的專案代碼中。 他們是可用在 `platforms/windows8/cordova` 目錄在您添加後 `windows8` 平臺如下所述。

*   從單獨的分發在[cordova.apache.org][8]下載它們。 科爾多瓦分佈包含單獨的檔案，為每個平臺。 一定要展開相應的存檔， `cordova-windows8\windows8` 在這種情況下，在一個空的目錄內。 有關批次處理實用程式可用在頂級 `bin` 目錄。 (參閱**自述**檔，如果有必要作更詳細的指示）。

 [8]: http://cordova.apache.org

這些外殼工具允許您創建、 構建和運行 Windows 8 的應用程式。 額外的命令列介面，可以跨所有平臺的外掛程式功能的資訊，請參閱使用 Plugman 到管理外掛程式。

## 安裝 SDK

*最終*、*溢價*或*專業*2013年版本的[Visual Studio][2]安裝.

![][9]

 [9]: img/guide/platforms/win8/win8_installSDK.png

## 創建一個新專案

此時，若要創建一個新的專案您可以選擇在命令列介面或一組 Windows 8 特定 shell 工具中所述的跨平臺 CLI 工具之間。 從內一個原始程式碼目錄，此 CLI 方法生成命名在一個新的*HelloWorld*應用程式 `hello` 的專案目錄：

        > cordova create hello com.example.hello HelloWorld
        > cd hello
        > cordova platform add windows8
        > cordova build
    

這裡是相應的較低級別外殼工具方法：

        C:\path\to\cordova-win8\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld
    

## 生成專案

如果您在開發中使用 CLI，專案目錄的頂級 `www` 目錄中包含的原始程式碼檔。運行任一內要重新生成應用程式的專案目錄：

        > cordova build
        > cordova build windows8   # do not rebuild other platforms
    

如果您使用的 Windows Phone 特定 shell 工具在發展中，有不同的方法。 一旦您生成該專案，預設應用程式的源是可用在 `projects\windows8\www` 子目錄。 隨後的命令都可用在 `cordova` 子目錄中同一級別的。

`build`命令，清理專案檔案並重新生成應用程式。第一個示例將生成調試資訊，和第二個標誌發佈的應用程式：

        C:\path\to\project\cordova\build.bat --debug        
        C:\path\to\project\cordova\build.bat --release
    

`clean`命令有助於沖洗掉下一步準備中的目錄 `build` ：

        C:\path\to\project\cordova\clean.bat
    

## 在 SDK 中打開的專案和部署應用程式

一旦你建立科爾多瓦 app，如上文所述，您可以與 Visual Studio 一起打開它。 各種 `build` 命令生成一個 Visual Studio 解決方案 (*.sln*) 檔。 在檔瀏覽器來修改在 Visual Studio 專案中打開檔：

![][10]

 [10]: img/guide/platforms/win8/win8_sdk_openSLN.png

`CordovaApp`元件顯示在解決方案內和其 `www` 目錄中包含的基於 web 的原始程式碼，包括 `index.html` 的主頁：

![][11]

 [11]: img/guide/platforms/win8/win8_sdk.png

Visual Studio 主功能表下面的控制項允許您測試或部署應用程式：

![][12]

 [12]: img/guide/platforms/win8/win8_sdk_deploy.png

選擇**本地電腦**，請按綠色箭頭，在運行 Visual Studio 在同一台電腦上安裝該應用程式。一旦你這樣做，應用程式將出現在 Windows 8 的應用程式清單：

![][13]

 [13]: img/guide/platforms/win8/win8_sdk_runApp.png

每次您重新生成應用程式，在介面中可用的版本被刷新一次。

一旦可用應用程式清單中，按住**CTRL**鍵同時選擇該應用程式允許您把它釘在主畫面：

![][14]

 [14]: img/guide/platforms/win8/win8_sdk_runHome.png

請注意是否您打開該應用程式在虛擬機器環境中的，您可能需要按一下在角落或沿邊的 windows 訪問額外的功能或切換應用程式：

![][15]

 [15]: img/guide/platforms/win8/win8_sdk_run.png

或者，選擇**模擬器**部署選項以查看應用程式，如果它運行在平板設備上：

![][16]

 [16]: img/guide/platforms/win8/win8_sdk_sim.png

與不同的桌面部署，此選項允許您類比平板的方向、 位置，並更改其網路設置。

**注意**： 有關如何在您的工作流中使用科爾多瓦的命令列工具或 SDK 的建議諮詢概述。 科爾多瓦 CLI 依賴經常會覆蓋使用 SDK 的平臺特定檔的跨平臺原始程式碼。 如果您想要使用 SDK 來修改該專案，使用較低級別殼工具作為 CLI 的替代。