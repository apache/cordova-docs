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

    ;C:\bbndk\host\_10\_2\_0\_132\darwin\x86\usr\bin\

關於 Mac 和 Linux：

*   編輯 `~/.bash_profile` 檔，添加如下所示，根據安裝本機的 SDK 了一行：

    $ export PATH=${PATH}:/Applications/Momentics.app/host\_10\_2\_0\_15/darwin/x86/usr/bin/

*   運行下面的命令將在當前會話中的更改應用：

    元源 ~/.bash_profile

## 為簽章設定

如果您希望在設備上測試或發佈通過黑莓應用程式，您的系統必須設置為代碼簽名。

若要獲取簽名金鑰，請轉到 \[黑莓鍵順序形式\] (HTTPs://www.blackberry.com/SignedKeys/codesigning.html)。

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

*   [下載][1]
*   [入門][2]

 [2]: http://developer.blackberry.com/devzone/develop/simulator/blackberry_10_simulator_start.html

在測試之前在模擬器或設備上的應用程式，您需要啟用發展模式。

啟動模擬程式映射，然後從主畫面中選擇**設置**：

![][3]

 [3]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_home.png

導航到**的安全和隱私 → 發展模式**節和啟用的選項：

![][4]

 [4]: {{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_devel.png

然後，運行 `emulate` 命令來查看該應用程式：

    $ cordova emulate blackberry10 --devicepass <password>


## 將部署到設備

要部署到一個設備，請確保它插入到您的電腦和發展模式已啟用。

然後，運行 `run` 命令來查看該應用程式：

    $ cordova run blackberry10 --devicepass <password>


如果調試的權杖還沒有為該設備設置，錯誤訊息，提示您提供密碼您定義配置您的電腦以簽名的應用程式時。

    $ cordova run blackberry10 --devicepass <password> --keystorepass <signing password>


## WebInspector 的調試

在調試時在設備或模擬程式上，您可以運行 WebInspector 遠端來查看應用程式的內部狀態。 使您可以連接到您的應用程式使用標準 web 瀏覽器的 URL 顯示一個提示。 有關詳細資訊，請參見[調試使用 WebInspector][5].

 [5]: http://developer.blackberry.com/html5/documentation/web_inspector_overview_1553586_11.html

## 生成發佈版本

預設情況下，運行 `cordova build` 命令創建一個無符號的*.bar*包檔適用于設備或模擬器上測試。

使用 `--release` 創建一個發佈版本適合通過黑莓手機世界分佈。

    $ cordova build --release --keystorepass <signing password>


`--keystorepass`選項指定定義配置您的電腦登錄時的密碼的應用程式。

## 將部署到其他位置

上面的說明假定通過 USB 插入設備或模擬器運行在本地電腦上。它也是可能部署到其他位置。

當您設置黑莓 10 平臺為您的專案包含一組額外的命令列實用程式。 下面的命令，在這種情況下調用從專案的頂級目錄中，將一個名為*動車組*與 IP 位址的目標相關聯。

*   關於視窗：

    $ platforms\blackberry10\cordova\target.bat add emu 192.168.2.24 -t simulator

*   關於 Mac/Linux：

    $ platforms/blackberry10/cordova/target add emu 192.168.2.24 -t simulator

一旦定義了目標，你可以提供給運行的命令使用 `--target` ：

    $ cordova run blackberry10 --target=emu
