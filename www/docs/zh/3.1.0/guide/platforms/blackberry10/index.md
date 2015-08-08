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

# 10 黑莓平臺指南

本指南介紹如何設置您的開發環境，以生成和部署科爾多瓦的黑莓 10 設備的應用程式。 對於以前版本的黑莓手機，你需要使用一組不同的命令列工具，黑莓平臺指南中所述。

## 要求

在 Windows、 Mac 和 Linux 上提供的開發環境。

開發人員應使用 `cordova` 實用程式與黑莓手機本機 SDK 一起。 命令列介面資訊，請參閱如何安裝 `cordova` ，添加專案，然後生成和部署每個平臺。

## 安裝黑莓手機本機 SDK

黑莓手機本機 SDK 是可用的[developer.blackberry.com][1]。 安裝完成後，您需要將其命令列工具添加到您的系統路徑。

 [1]: http://developer.blackberry.com/native/download/

關於視窗：

*   轉到**我的電腦 → 屬性 → 高級 → 環境變數**.

*   追加本機 SDK 安裝目錄的路徑，例如：

    ;C:\bbndk\host\_10\_1\_0\_132\darwin\x86\usr\bin\

關於 Mac 和 Linux：

*   編輯 `~/.bash_profile` 檔，添加如下所示，根據安裝本機的 SDK 了一行：

    $ 匯出路徑 = ${路徑}：/應用程式/bbndk/host\_10\_1\_0\_132 達爾文/x 86 usr/bin /

    或為 10.2 本機 SDK：

    $ 出口 PATH=${PATH}:/Applications/Momentics.app/host\_10\_2\_0\_15/darwin/x86/usr/bin/

*   運行下面的命令將在當前會話中的更改應用：

    元源 ~/.bash_profile

## 為簽章設定

如果您希望在設備上測試或發佈通過黑莓應用程式，您的系統必須設置為代碼簽名。

若要獲取簽名金鑰，轉到黑莓手機網站和請確保保留您指定的密碼。 然後運行 `blackberry-signer` 黑莓手機本機 SDK 中包含的實用程式。

可以在這裡找到詳細的說明：

*   [註冊您的代碼簽名金鑰。][2]

*   [設置您的系統的代碼簽名。][3]

 [2]: https://www.blackberry.com/SignedKeys/codesigning.html
 [3]: https://developer.blackberry.com/html5/documentation/signing_setup_bb10_apps_2008396_11.html

## 創建一個專案

使用 `cordova` 實用程式設置了一個新的專案，如所述的命令列介面。例如，在原始程式碼中的目錄：

    $ 科爾多瓦創建你好 com.example.hello $ cd 你好 $ 科爾多瓦平臺添加 blackberry10 $ 科爾多瓦生成


## 部署到模擬程式

如果您想要運行的設備模擬程式，下載並安裝黑莓手機 10 模擬器。

*   [下載][1]
*   [入門][4]

 [4]: http://developer.blackberry.com/devzone/develop/simulator/blackberry_10_simulator_start.html

在測試之前在模擬器或設備上的應用程式，您需要將*目標*添加到您的專案。 每個是以唯一的名稱，確定並與 IP 位址關聯。 您需要在您使用它來查看應用程式之前從模擬程式獲取的 IP 位址。

啟動模擬程式映射，然後從主畫面中選擇**設置**：

![][5]

 [5]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_home.png

導航到**的安全和隱私 → 發展模式**節、 啟用選項，和獲得的 IP 位址：

![][6]

 [6]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_devel.png

當您設置黑莓 10 平臺為您的專案包含一組額外的命令列實用程式。 下面的命令，在這種情況下調用從專案的頂級目錄，將目標命名*動車組*與上面顯示的 IP 位址相關聯。

*   關於視窗：

    $ platforms\blackberry10\cordova\target.bat 添加鴯鶓 169.254.0.1-t 模擬器

*   關於 Mac/Linux：

    $ 平臺/blackberry10/科爾多瓦/目標添加鴯鶓 169.254.0.1-t 模擬器

然後，運行 `emulate` 命令來查看該應用程式：

    $ 科爾多瓦效仿 blackberry10


## 將部署到設備

若要部署到一個設備，請確保它插入到您的電腦。 啟用發展模式和獲得的 IP 位址為 desribed 以上的模擬程式部分中。 您還需要獲得從 PIN**設置**應用程式下的**關於 → 硬體**：

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_pin.png

運行目標命令列實用程式將一個名稱與一個 IP 位址、 裝置密碼和 PIN 相關聯。

*   關於視窗：

    $ platforms\blackberry10\cordova\target.bat 添加差異 169.254.0.1-t 設備 — — 密碼 123456 — — pin FFFF972E

*   關於 Mac/Linux：

    $ 平臺/blackberry10/科爾多瓦/目標添加差異 169.254.0.1-t 設備 — — 密碼 123456 — — pin FFFF972E

地點：

*   `--password`是指密碼來解鎖設備。

*   `--pin`是指設備從**設置**應用程式獲得的 PIN。

然後，運行 `run` 命令來查看該應用程式：

    運行 blackberry10 $ 科爾多瓦


如果調試權杖未尚未設置的設備，一條錯誤訊息會提示您使用與您的簽名金鑰提供註冊時的密碼運行腳本的平臺。

*   關於視窗：

    $ platforms\blackberry10\cordova\run.bat — — 設備 — — keystorepass mysecret

*   關於 Mac/Linux：

    $ 平臺/blackberry10/科爾多瓦/運行 — — 設備 — — keystorepass mysecret

## WebInspector 的調試

在調試時在設備或模擬程式上，您可以運行 WebInspector 遠端來查看應用程式的內部狀態。 使您可以連接到您的應用程式使用標準 web 瀏覽器的 URL 顯示一個提示。 有關詳細資訊，請參見[調試使用 WebInspector][8].

 [8]: http://developer.blackberry.com/html5/documentation/web_inspector_overview_1553586_11.html

## 生成發佈版本

預設情況下，運行 `cordova build` 命令創建一個無符號的*.bar*包檔適用于設備或模擬器上測試。

您需要運行一個不同 `build` 命令來創建一個發佈版本適合通過黑莓手機世界分佈。 它不依賴于 `cordova` CLI 的工具，而是使用下面的語法：

*   關於視窗：

    $ platforms\blackberry10\cordova\build.bat — — 釋放 — — keystorepass mysecret

*   關於 Mac/Linux：

    $ 平臺/blackberry10/科爾多瓦/生成 — — 釋放 — — keystorepass mysecret

`--keystorepass`選項指定定義配置您的電腦登錄時的密碼的應用程式。
