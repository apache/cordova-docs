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

# 亞馬遜火 OS 平臺指南

本指南介紹如何設置您的 SDK 開發環境部署亞馬遜火 OS 的設備，如 Kindle 火 HDX 科爾多瓦應用軟體。

請參閱下列特定于平臺的詳細資訊：

*   亞馬遜火 OS 配置
*   亞馬遜火 OS WebViews
*   亞馬遜火 OS 外掛程式

## 要求和支援

亞馬遜火 os 開發科爾多瓦的應用程式需要 Android SDK 和亞馬遜 web 視圖 SDK。檢查的要求這些 Sdk 在下面的連結：

*   [Android SDK 系統][1]

*   [亞馬遜 web 視圖 SDK][2]

 [1]: http://developer.android.com/sdk/
 [2]: https://developer.amazon.com/sdk/fire/IntegratingAWV.html#installawv

## 安裝

### Android SDK

從[developer.android.com/sdk][1]安裝 Android SDK。 你可能會出現一個選擇在哪裡安裝 SDK，否則移動下載 `adt-bundle` 樹到無論您存儲的開發工具。

科爾多瓦命令列工具來工作，您需要包括 SDK 的 `tools` 和 `platform-tools` 的路徑環境中目錄。

關於 Mac、 Linux 或其他 unix 平臺，您可以使用文字編輯器來創建或修改 `~/.bash_profile` 檔中，添加行，如下，根據 SDK 的安裝位置：

    匯出路徑 = ${路徑}：/開發/adt-捆綁/sdk/平臺-工具：/開發/adt-捆綁/sdk/工具


這暴露了 SDK 工具在新打開的終端視窗。否則運行這使它們在當前會話中可用：

    元源 ~/.bash_profile


若要修改路徑上 Windows 7 的環境：

*   在桌面的左下角的**開始**功能表上按一下，在**電腦**上，按右鍵，然後按一下**屬性**.

*   在左側列中，按一下**高級系統設置**。

*   在結果對話方塊中，按下**環境變數**.

*   選擇**PATH**變數，然後按**編輯**.

*   將以下內容追加到基於例如安裝 SDK 的位置的路徑：

        ;C:\Development\adt-bundle\sdk\platform-tools ；C:\Development\adt-bundle\sdk\tools


*   將值保存並關閉這兩個對話方塊。

您可能還需要啟用 JAVA 和螞蟻打開一個命令提示符並鍵入 `java` ，然後還鍵入 `ant` 。將追加到該路徑無法運行的日期為准：

    ;%JAVA_HOME%\bin;%ANT_HOME%\bin


### 亞馬遜 web 視圖 SDK

從[亞馬遜開發人員門戶][2]下載亞馬遜 web 視圖 SDK.

*   創建 `libs/` 中的資料夾 `~/.cordova/lib/amazon-fireos/cordova/3.1.0/` 資料夾。
*   添加 `awv_interface.jar` 從下載 SDK 進行`~/.cordova/lib/amazon-fireos/cordova/3.1.0/libs/`

## 在 SDK 中打開的專案

使用 `cordova` 實用程式設置了一個新的專案，如所述在科爾多瓦命令列介面。例如，在原始程式碼中的目錄：

    $ cordova create hello com.example.hello "HelloWorld"
    $ cd hello
    $ cordova platform add amazon-fireos
    $ cordova build


一旦創建了，這裡是如何使用 SDK 來修改它：

*   啟動**Eclipse**應用程式。

*   選擇**新建專案**功能表項目。

*   從結果對話方塊中，選擇**從現有代碼的 Android 專案**並按**下一步**： ![][3]

*   定位到 `hello` ，或無論你創建目錄的專案，然後到 `platforms/amazon-fireos` 子目錄。

*   按**完成**.

 [3]: {{ site.baseurl }}/static/img/guide/platforms//eclipse_new_project.png

一旦日食視窗將打開，一個紅色的**X**可能似乎表明未解決的問題。如果是這樣，執行這些額外的步驟：

*   按右鍵專案目錄。

*   在出現的**屬性**對話方塊中，選擇**Android**從功能窗格。

*   為專案生成目標，選擇您已安裝的最高的 Android API 級別。

*   按一下**確定**.

*   從**專案**功能表中選擇**清潔**。這應該更正該專案中的所有錯誤。

## 將部署到設備

要將應用程式推直接到設備，請確保您的設備上的[Android 開發者網站][4]，所述上啟用 USB 調試和使用一個迷你 USB 電纜，將其插入您的系統。

 [4]: http://developer.android.com/tools/device.html

從命令列，可以將應用程式推送到設備：

    $ cordova run amazon-fireos


交替內日食，按右鍵該專案並選擇**作為 → 運行 Android 應用程式**.

**注**： 目前，通過模擬程式測試不支援對於亞馬遜 web 視圖基於的應用程式。
