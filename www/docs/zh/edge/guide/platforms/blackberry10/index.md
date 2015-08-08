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

# 10 黑莓平臺指南

本指南介紹如何設置您的 SDK 環境部署科爾多瓦的黑莓 10 設備的應用程式。 對於以前版本的黑莓手機，你需要使用不同的 SDK 環境和組的命令列工具，黑莓平臺指南中所述。 黑莓 10，您需要安裝 SDK 無論是否你想要跨平臺科爾多瓦 CLI 用於發展或一整套較窄的平臺為中心的命令列工具。 兩條發展路徑的比較，請參見概述。 每個上的詳細資訊，請參閱命令列介面和黑莓 10 殼工具指南。

## 要求

在 Windows、 Mac 和 Linux 上提供的開發環境。

開發人員應使用 `cordova` 實用程式在與黑莓 WebWorks SDK 或黑莓手機本機 SDK。 資訊，請參閱命令列介面如何安裝 `cordova` ，添加專案，然後生成和部署每個平臺。

黑莓 10 設備模擬器：

*   處理器： 英特爾雙核心 2.0 GHz/AMD 速龍 4200 + 或更高
*   磁碟空間： 10 GB
*   RAM 記憶體： 4 GB
*   虛擬化： 為下列情況之一：
    *   **英特爾虛擬化技術**(VT，VT-x，vmx) →[英特爾 VT-x 支援的處理器清單][1]
    *   **AMD 虛擬化**(AMD-V，支援向量機)（自 2006 年 5 月以來所有 AMD Cpu 都包括 AMD-V 閃龍除外）。

 [1]: http://ark.intel.com/products/virtualizationtechnology

有關的要求的詳細資訊： [BB10 模擬器 requeriments][2].

 [2]: http://developer.blackberry.com/devzone/develop/simulator/simulator_systemrequirements.html

## 安裝黑莓 WebWorks SDK

從下載並安裝黑莓 WebWorks SDK [developer.blackberry.com][3]

 [3]: https://developer.blackberry.com/html5/download/

安裝程式將添加到您的路徑的命令列工具。根據您的作業系統，您可能需要打開新的終端視窗或重新登錄。

## 安裝黑莓手機本機 SDK

如果您需要編譯本機代碼，例如，當開發本機外掛程式，您將需要安裝黑莓手機本機 SDK。

為了得到黑莓本機 SDK，下載並安裝 IDE，黑莓可從 [developer.blackberry.com][4]，然後使用 IDE，安裝黑莓本機 SDK。 安裝完成後，您需要將其命令列工具添加到您的系統路徑。

 [4]: http://developer.blackberry.com/native/download/

關於視窗：

*   轉到**我的電腦 → 屬性 → 高級 → 環境變數**.

*   追加本機 SDK 安裝目錄的路徑，例如：

        ;C:\bbndk\host_10_1_0_132\win32\x86\usr\bin\


關於 Mac 和 Linux：

*   編輯 `~/.bash_profile` 檔，添加如下所示，根據安裝本機的 SDK 了一行：

        $ export PATH=${PATH}:/Applications/bbndk/host_10_1_0_132/darwin/x86/usr/bin/


    或為 10.2 本機 SDK：

        $ export PATH=${PATH}:/Applications/Momentics.app/host_10_2_0_15/darwin/x86/usr/bin/


*   運行下面的命令將在當前會話中的更改應用：

        $ source ~/.bash_profile


如果你有任何的環境問題，使用本機 SDK 從命令列，執行您的平臺，在安裝路徑內的適當檔：

*   在 Windows 上 → MS-DOS shell：

        C:\> \bbndk\bbndk-env_xx_xx_xx_xxxx.bat


*   在 Windows 上 → git bash：

        $ `\bbndk\bbndk-env_xx_xx_xx_xxxx.bat`


*   在 Linux 上 → 作為 root 使用者安裝：

        $ `./opt/bbndk/bbndk-env_xx_xx_xx_xxxx.sh`


*   在 Linux 上 → 作為非根使用者安裝：

        $ `./home/username/bbndk/bbndk-env_xx_xx_xx_xxxx.sh`


*   關於 Mac：

        $ `/Developer/SDKs/bbndk/bbndk-env_xx_xx_xx_xxxx.sh`


## 為簽章設定

如果您希望在設備上測試或發佈通過黑莓應用程式，您的系統必須設置為代碼簽名。

若要獲取簽名金鑰，轉到 \[黑莓鍵訂單表單\] (HTTPs://www.blackberry.com/SignedKeys/codesigning.html)。

選擇第一個核取方塊："為 BlackBerry10 使用黑莓 NDK 開發的應用程式"，然後登錄或創建 BBID。

輸入密碼並按一下"獲取權杖"以下載 bbidtoken.csk。將此檔保存到您的作業系統，將會顯示在下載頁面上的預設位置。

最後一步是生成簽名的證書：

    $ blackberry-keytool -genkeypair -storepass <password> -author 'Your Name’


## 創建一個專案

使用 `cordova` 實用程式設置了一個新的專案，如所述的命令列介面。例如，在原始程式碼中的目錄：

        $ cordova create hello com.example.hello
        $ cd hello
        $ cordova platform add blackberry10
        $ cordova build


## 部署到模擬程式

如果您想要運行的設備模擬程式，下載並安裝黑莓手機 10 模擬器。

*   [下載][4]
*   [入門][5]

 [5]: http://developer.blackberry.com/devzone/develop/simulator/blackberry_10_simulator_start.html

在測試之前在模擬器或設備上的應用程式，您需要啟用發展模式。

啟動模擬程式映射，然後從主畫面中選擇**設置**：

![][6]

 [6]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_home.png

導航到**的安全和隱私 → 發展模式**節和啟用的選項：

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_devel.png

當您設置黑莓 10 平臺為您的專案包含一組額外的命令列實用程式。 下面的命令，在這種情況下調用從專案的頂級目錄，將目標命名*動車組*與上面顯示的 IP 位址相關聯。

*   關於視窗：

        $ platforms\blackberry10\cordova\target.bat add emu 169.254.0.1 -t simulator


*   關於 Mac/Linux：

        $ platforms/blackberry10/cordova/target add emu 169.254.0.1 -t simulator


然後，運行 `emulate` 命令來查看該應用程式：

        $ cordova emulate blackberry10


## 將部署到設備

若要部署到一個設備，請確保它插入到您的電腦。 啟用發展模式和獲得的 IP 位址為 desribed 以上的模擬程式部分中。 您還需要獲得從 PIN**設置**應用程式下的**關於 → 硬體**：

![][8]

 [8]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_pin.png

運行目標命令列實用程式將一個名稱與一個 IP 位址、 裝置密碼和 PIN 相關聯。

*   關於視窗：

        $ platforms\blackberry10\cordova\target.bat add mydevice 169.254.0.1 -t device --password 123456 --pin FFFF972E


*   關於 Mac/Linux：

        $ platforms/blackberry10/cordova/target add mydevice 169.254.0.1 -t device --password 123456 --pin FFFF972E


地點：

*   `--password`是指密碼來解鎖設備。

*   `--pin`是指設備從**設置**應用程式獲得的 PIN。

然後，運行 `run` 命令來查看該應用程式：

        運行 blackberry10 $ 科爾多瓦


如果調試權杖未尚未設置的設備，一條錯誤訊息會提示您使用與您的簽名金鑰提供註冊時的密碼運行腳本的平臺。

*   關於視窗：

        $ platforms\blackberry10\cordova\run.bat --device --keystorepass mysecret


*   關於 Mac/Linux：

        $ platforms/blackberry10/cordova/run --device --keystorepass mysecret


## WebInspector 的調試

在調試時在設備或模擬程式上，您可以運行 WebInspector 遠端來查看應用程式的內部狀態。 使您可以連接到該應用程式使用標準 web 瀏覽器的 URL 顯示一個提示。 有關詳細資訊，請參見[調試使用 WebInspector][9].

 [9]: http://developer.blackberry.com/html5/documentation/web_inspector_overview_1553586_11.html

## 生成發佈版本

預設情況下，運行 `cordova build` 命令創建一個無符號的*.bar*包檔適用于設備或模擬器上測試。

使用 `--release` 創建一個發佈版本適合通過黑莓手機世界分佈。

    $ cordova build --release --keystorepass <signing password>


`--keystorepass`選項指定定義配置您的電腦登錄時的密碼的應用程式。

## 將部署到其他位置

上面的說明假定通過 USB 插入設備或模擬器運行在本地電腦上。它也是可能部署到其他位置。

當您設置黑莓 10 平臺為您的專案包含一組額外的命令列實用程式。 下面的命令，在這種情況下調用從專案的頂級目錄中，將一個名為*動車組*與 IP 位址的目標相關聯。

*   關於視窗：

        $ platforms\blackberry10\cordova\build.bat --release --keystorepass mysecret


*   關於 Mac/Linux：

        $ platforms/blackberry10/cordova/build --release --keystorepass mysecret


一旦定義了目標，你可以提供給運行的命令使用 `--target` ：

    $ cordova run blackberry10 --target=emu
