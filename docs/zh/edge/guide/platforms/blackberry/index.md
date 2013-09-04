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

# 黑莓平臺指南

本指南介紹了如何設置用於目標應用程式的版本 10 之前的黑莓平臺 SDK 環境。 如果你想要的目標的最新版本，請參閱黑莓 10 平臺指南。 請參閱下列特定于平臺的詳細資訊：

*   黑莓手機配置
*   升級黑莓手機
*   黑莓手機的外掛程式
*   黑莓手機的命令列工具

上面的命令列工具請參閱科爾多瓦 3.0 以前的版本。關於當前介面的資訊，請參閱命令列介面。

## 要求和支援

此版本的黑莓手機不支援由 `cordova` 所述的命令列介面，而是由一組單獨的命令列工具的實用程式。 從[cordova.apache.org][1]下載的科爾多瓦分佈.

 [1]: http://cordova.apache.org/#download

科爾多瓦的黑莓手機依賴于[黑莓 WebWorks 框架][2]，這是可用於 Windows XP （32 位），Windows 7 （32 位和 64 位） 和 Mac (OS X 10.6.4+)。 WebWorks 應用程式可以*只*在以下黑莓平臺上部署：

 [2]: https://bdsc.webapps.blackberry.com/html5

*   黑莓 OS 5.0 和更高
*   黑莓 PlayBook
*   黑莓 10 (QNX)

WebWorks 需要 JAVA 開發工具組 (JDK)。 對於 Windows，使用 32 位版本的[Oracle JDK][3]。 JAVA 中的預設安裝的 Mac OS X 上最新支援版本 10.7，這需要[單獨安裝][4]。 它還要求 Apache Ant 在 Mac 上是 JAVA 安裝的一部分安裝。 Windows 版本，從[ant.apache.org][5].

 [3]: http://www.oracle.com/technetwork/java/javase/downloads/index.html#jdk
 [4]: http://support.apple.com/kb/DL1421
 [5]: http://ant.apache.org/bindownload.cgi

## 安裝 SDK

下載並安裝適當的 WebWorks SDK，為您的發展。可以從以下位置下載黑莓 PlayBook 和黑莓智慧手機 WebWorks Sdk。

*   \[黑莓 PlayBook SDK\](HTTPs://developer.blackberry.com/html5/download/#playbook) 和[Adobe Air SDK][6]

*   \[黑莓智慧手機 SDK\]() HTTPs://developer.blackberry.com/html5/download/#smartphones

 [6]: http://www.adobe.com/devnet/air/air-sdk-download.html

## 登記冊的簽名金鑰

如果您希望發佈黑莓應用程式商店上的應用程式或在實際設備上，您會需要註冊一套免費的代碼簽名金鑰。 要這樣做，請完成[黑莓鍵訂單表單][7]。 一旦您收到你簽署的鑰匙，他們需要進行設置。 請參閱[黑莓 HTML5/WebWorks 網站][8]的資訊。

 [7]: https://www.blackberry.com/SignedKeys
 [8]: https://developer.blackberry.com/html5/documentation/signing_setup_bb10_apps_2008396_11.html

## 安裝科爾多瓦

下載並解壓縮[科爾多瓦][1]的最新副本.

## 設立了一個新的專案

*   打開一個命令列終端並導航到您解壓縮科爾多瓦。

*   那裡是科爾多瓦支援每個平臺的目錄。導航到 `blackberry` 目錄。

*   `blackberry`目錄中包含幾個子目錄。 `example`目錄中包含一個完整的科爾多瓦專案。 複製 `example` 目錄到您的電腦上的另一個位置和導航到那裡。

*   編輯 `project.properties` 檔，以指定您使用的 WebWorks SDK。 例如，下面是黑莓 PlayBook，黑莓智慧手機 (OS5-7） 或黑莓 10 (QNX) 的各自設置：
    
        playbook.bbwp.dir=C:\\Program Motion\\BlackBerry WebWorks SDK 中 Files\\Research 為 TabletOS 2.1.0.6\\bbwp blackberry.bbwp.dir=C:\\Program Motion\\BlackBerry WebWorks Packager 在 Files\\Research qnx.bbwp.dir=C:\\Program 檔 (86) \\Research In Motion\\BlackBerry 10 WebWorks SDK 1.0.2.9
        

這些參數對應于參數指定在生成您的專案時。首次運行這些命令，它們生成一個"HelloWorld"應用程式：

        科爾多瓦/生成 playbook 科爾多瓦/生成黑莓科爾多瓦/生成 qnx
    

和 SDK，您還需要註冊的代碼簽名金鑰和調試標記。 簽名金鑰允許您分發通過黑莓應用程式。 調試標記使您可以測試黑莓手機模擬器或設備上未簽名的應用程式。 您不需要創建和安裝調試標記自己 ；如果你提供的金鑰庫的密碼，生成腳本創建，並為您安裝調試標記。 若要設置簽名金鑰，請轉到黑莓手機網站來得到它，確保保留您指定的密碼。 然後運行 `blackberry-signer` 實用套裝程式含的 SDK。 黑莓手機提供了更多的資訊在這裡：

*   [註冊您的代碼簽名金鑰][9]

*   [設置您的電腦代碼簽名][10]

*   [設置您的 SDK 環境的綜合指南][11]

 [9]: https://www.blackberry.com/SignedKeys/codesigning.html
 [10]: http://developer.blackberry.com/html5/documentation/set_up_for_signing.html
 [11]: http://developer.blackberry.com/native/documentation/bb10/com.qnx.doc.native_sdk.quickstart/topic/set_up_your_environment.html

## 部署到模擬程式

在 Windows 上，黑莓智慧手機模擬器，才可用。 黑莓 PlayBook 模擬器需要 VMWare 播放機 (Windows) 或 VMWare 融合 (Mac OS X）。 WebWorks SDK 提供了一個預設模擬器，但額外的模擬程式都[可以通過黑莓手機][12].

 [12]: http://us.blackberry.com/developers/resources/simulators.jsp

從專案目錄中，鍵入 `./cordova/run <target>` ，更換 `<target>` 或 `qnx` ， `playbook` ，或 `blackberry` 。 請注意對於黑莓 10 和行動手冊，必須已經啟動模擬程式虛擬映射。

請參閱下列內容的詳細資訊：

*   [黑莓 PlayBook][13]

*   [黑莓智慧手機][14]

 [13]: https://developer.blackberry.com/html5/documentation/using_the_tablet_simulator_1866980_11.html
 [14]: https://developer.blackberry.com/html5/documentation/run_your_app_on_smartphone_sim_1876976_11.html

對於黑莓 Playbook 編輯 `project.properties` 檔以自訂 `playbook.sim.ip` 和 `playbook.sim.password` 的屬性。 可通過**設置**應用程式主畫面上模擬程式的 IP 位址。 啟用**的安全和隱私 → 發展模式**選項，以顯示該位址。 此外可以在**安全和隱私**選項卡中設置密碼。

對於黑莓智慧手機，編輯 `project.properties` 檔以自訂 `blackberry.sim.dir` 和 `blackberry.sim.bin` 的屬性。 您需要在 Windows 上，例如指定目錄路徑時逃脫的路徑分隔符號：`C:\\Program
Files\\BlackBerry\\Simulator`.

一旦該模擬程式已安裝並運行，運行任一以下操作以安裝到主畫面的應用程式：

        科爾多瓦/運行 playbook 科爾多瓦/運行黑莓
    

如果設備連接到您的電腦是否提示您時，回答否。

**注：**上黑莓 OS 5，該應用程式安裝在 `Downloads` 目錄。

## 將部署到設備

要將您的應用程式部署到一個設備，它必須連接，和您必須註冊為代碼簽名金鑰，如上文所述。 也、 要部署應用程式對黑莓 PlayBook**設置 → 安全 → 發展模式**必須啟用選項。

在黑莓 PlayBook 上編輯 `project.properties` 檔和修改以下以反映該設備的 IP 和密碼作為配置上面，一直以來與您設置的簽名私密金鑰密碼：

從專案目錄中，鍵入 `./cordova/run <target>` ，更換 `<target>` 或 `qnx` ， `playbook` ，或`blackberry`.

在黑莓智慧手機 (OS5-7），指定 `blackberry.sigtool.password` 屬性作為簽名的私密金鑰密碼。

然後從該專案的目錄，運行你會在模擬程式中查看該應用程式的命令之一：

        科爾多瓦/運行 playbook 科爾多瓦/運行黑莓
    

如果設備連接到您的電腦是否提示您時，回答是。

**注：**上黑莓 OS 5，該應用程式安裝在 `Downloads` 目錄。

## 附加資訊

下面的文章可能説明您解決常見的問題，開發的黑莓 WebWorks 框架生成的應用程式時：

*   [黑莓 WebWorks 發展陷阱][15]

*   [包裝 WebWorks 應用程式的最佳做法][16]

 [15]: http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Common-BlackBerry-WebWorks-development-pitfalls-that-can-be/ta-p/624712
 [16]: https://bdsc.webapps.blackberrycom/html5/documentation/ww_developing/bestpractice_compiling_ww_apps_1873324_11.html