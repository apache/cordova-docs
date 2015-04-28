* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Windows 平臺指南

本指南介紹如何設置您的 SDK 開發環境來構建和部署 Windows 8、 Windows 8.1 和 Windows Phone 8.1 科爾多瓦的應用程式。它顯示如何使用 shell 工具來生成和生成的應用程式，或者跨平臺科爾多瓦 CLI 討論了在命令列介面。 （見比較這些發展選項的概述。此部分還顯示如何修改科爾多瓦在 Visual Studio 中的應用程式。 無論你採取哪種方法，您需要安裝 Visual Studio SDK，如下所述。

有關如何升級現有的 Windows 8 科爾多瓦專案的資訊，請參閱升級 Windows 8。

視窗電話 8 （wp8） 住宿作為一個獨立的平臺，有關詳細資訊，請參閱 Windows Phone 8 平臺指南。

在 Windows 上運行的科爾多瓦 WebViews 依賴互聯網資源管理器中 10 （Windows 8.0） 和互聯網資源管理器中 11 （Windows 8.1 和 Windows Phone 8.1） 作為他們的渲染引擎，因此作為一個實際問題你可以使用 IE 的功能強大的調試器來測試並不調用科爾多瓦 Api 的任何 web 內容。 Windows Phone 開發者博客上可比的 WebKit 瀏覽器支援 IE 如何提供[有益的指導][1]。

 [1]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx

## 要求和支援

若要開發 Windows 平臺的應用程式需要：

*   最低 4 gb 的 RAM 的 Windows 8.1，32 或 64 位機器 （*家裡*、*臨*，或*企業*版）。

*   為 Windows Phone 模擬器，Windows 8.1 (64) 專業版或更高，和一個處理器，支援[用戶端 HYPER-V 和第二水準位址翻譯 （板）][2]。 Windows 8.1 企業評估版是可從[Microsoft 開發人員網路][3].

*   [Windows 視覺工作室 2013 年][4]（明示或更高）。

 [2]: https://msdn.microsoft.com/en-us/library/windows/apps/ff626524(v=vs.105).aspx#hyperv
 [3]: http://msdn.microsoft.com/en-US/evalcenter/jj554510
 [4]: http://www.visualstudio.com/downloads/download-visual-studio-vs#d-express-windows-8

根據 Windows 8.1 編譯的應用程式*不*在 Windows 8.0 下運行。根據 Windows 8.0 編譯的應用程式是向前相容與 8.1。

按照說明在[windowsstore.com][5]提交到 Windows 應用商店應用程式。

 [5]: http://www.windowsstore.com/

為了開發 Windows 科爾多瓦的應用程式，您可以使用運行 Windows 的個人電腦，但你也可能發展在 Mac 上運行的虛擬機器環境或使用雙啟動 Windows 8.1 分區的新兵訓練營。 請查閱這些資源以設置在 Mac 上所需的 Windows 開發環境：

*   [VMWare Fusion][6]

*   [Parallels Desktop][7],

*   [Boot Camp][8].

 [6]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426
 [7]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945424
 [8]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945423

## 安裝 SDK

*最終*，*保費*或*專業*2013年版的[Visual Studio][4]安裝.

![][9]

 [9]: img/guide/platforms/win8/win8_installSDK.png

## 使用科爾多瓦外殼工具

如果你想要將與 SDK 一起使用科爾多瓦的 Windows 居中外殼工具，你有兩個基本選擇：

*   他們從本地訪問生成的 CLI 的專案代碼。他們是在`平臺/windows/`目錄後，您將添加`windows`平臺上，如下所述。

*   從單獨的分發，在[cordova.apache.org][10]下載它們。 科爾多瓦分佈包含為每個平臺的單獨檔案。 一定要展開相應的存檔，`科爾多瓦 windows`在這種情況下，在一個空的目錄內。 有關批次處理實用程式可用`package/bin`目錄中。 （參閱**自述**檔，如果需要更詳細的說明）。

 [10]: https://www.apache.org/dist/cordova/platforms/

這些外殼工具允許您創建、 構建和運行 Windows 應用程式。 附加的命令列介面，可以跨所有平臺的外掛程式功能的資訊，請參閱使用 Plugman 管理外掛程式。

## 創建一個新專案

在這一點上，要創建一個新的專案你可以選擇之間跨平臺 CLI 工具的命令列介面或一組特定于 Windows shell 工具中所述。 下面的 CLI 方法生成新的`hello`專案目錄中命名*HelloWorld*應用程式：

        > cordova create hello com.example.hello HelloWorld
        > cd hello
        > cordova platform add windows
    

下面是相應的低級別 shell 工具方法：

        C:\path\to\cordova-windows\package\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld
    

## 生成專案

如果您在開發中使用 CLI，專案目錄的頂級 `www` 目錄中包含的原始程式碼檔。運行任一內要重新生成應用程式的專案目錄：

        > cordova build
        > cordova build windows              # do not rebuild other platforms
        > cordova build windows   --debug    # generates debugging information
        > cordova build windows   --release  # signs the apps for release
    

下面是相應的低級別 shell 工具方法：

        C:\path\to\project\cordova\build.bat --debug        
        C:\path\to\project\cordova\build.bat --release
        C:\path\to\project\cordova\clean.bat
    

## 配置目標 Windows 版本

由預設的`生成`命令將生成兩個包： Windows 8.0 和 Windows Phone 8.1。 要將 Windows 套裝程式升級到版本 8.1 以下配置設置必須添加到設定檔 (`config.xml`).

        <preference name='windows-target-version' value='8.1' />
    

一旦你添加此設置`生成`命令將開始生產 Windows 8.1 和 Windows Phone 8.1 的套裝軟體。

## 部署應用程式

要部署 Windows 套裝程式：

        > cordova run windows -- --win  # explicitly specify Windows as deployment target
        > cordova run windows # `run` uses Windows package by default
    

要將 Windows Phone 包的部署：

        > cordova run windows -- --phone  # deploy app to Windows Phone 8.1 emulator
        > cordova run windows --device -- --phone  # deploy app to connected device
    

可以使用**cordova run windows --list**來查看所有可用的目標和**cordova run windows --target=target_name \-- -|-phone**，在特定的設備或模擬器上運行的應用程式 （例如，`cordova run windows --target="Emulator 8.1 720P 4.7 inch" -- --phone`).

您還可以使用**cordova run --help**查看附加的生成和運行選項。

## 在 SDK 中打開的專案和部署應用程式

一旦你建立科爾多瓦的應用程式，如上文所述，可以在 Visual Studio 打開它。 各種`生成`命令生成一個 Visual Studio 解決方案 (*.sln*) 檔。 檔資源管理器來修改在 Visual Studio 專案中打開該檔：

![][11]

 [11]: img/guide/platforms/win8/win8_sdk_openSLN.png

`CordovaApp`元件顯示在解決方案中，和其`www`目錄包含基於 web 的原始程式碼，包括`index.html`主頁：

![][12]

 [12]: img/guide/platforms/win8/win8_sdk.png

Visual Studio 主功能表下面的控制項允許您測試或部署應用程式：

![][13]

 [13]: img/guide/platforms/win8/win8_sdk_deploy.png

選擇**本地電腦**，請按綠色箭頭運行 Visual Studio 在同一機器上安裝的應用程式。一旦你這樣做，該應用程式將出現在 Windows 8 應用程式清單：

![][14]

 [14]: img/guide/platforms/win8/win8_sdk_runApp.png

每次您重新生成應用程式，在介面中的可用版本將進行刷新。

一旦可用應用程式清單中，選擇該應用程式的同時按住**CTRL**鍵允許您用別針把它到主畫面：

![][15]

 [15]: img/guide/platforms/win8/win8_sdk_runHome.png

請注意是否您打開該應用程式在虛擬機器環境中的，您可能需要按一下在角落裡或兩側的窗戶，切換應用程式或訪問額外的功能：

![][16]

 [16]: img/guide/platforms/win8/win8_sdk_run.png

或者，選擇**模擬器**部署選項以查看該應用程式，就好像它在平板設備上運行：

![][17]

 [17]: img/guide/platforms/win8/win8_sdk_sim.png

與不同的桌面部署，此選項允許您類比平板電腦的定位、 位置，並更改其網路設置。

**注**： 查閱概述如何在您的工作流中使用科爾多瓦的命令列工具或 SDK 提供意見。 科爾多瓦 CLI 依賴于跨平臺原始程式碼通常覆蓋 SDK 所使用的特定于平臺的檔。 如果你想要使用 SDK 來修改專案，使用較低級別外殼工具作為 CLI 的替代方法。