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

# Android 平臺指南

本指南介紹如何設置您的 SDK 開發環境部署科爾多瓦的 Android 設備的應用程式。請參閱下列特定于平臺的詳細資訊：

*   Android 系統組態
*   Android WebViews
*   Android 外掛程式
*   升級 Android
*   Android 系統的命令列工具

上面的命令列工具請參閱科爾多瓦 3.0 以前的版本。關於當前介面的資訊，請參閱命令列介面。

## 要求和支援

Android SDK，請參閱[系統要求][1]。

 [1]: http://developer.android.com/sdk/index.html

科爾多瓦支援 Android 2.2、 2.3 和 4.x。作為一般規則，平臺已棄用作為他們低於 5%的谷歌的[分佈的儀表板][2].

 [2]: http://developer.android.com/about/dashboards/index.html

<!--
NOTE, doc said:
- Android 2.1 (Deprecated May 2013)
- Android 3.x (Deprecated May 2013)
-->

開發人員應使用 `cordova` 實用程式與 Android SDK 一起。 命令列介面資訊，請參閱如何安裝它，添加專案，然後生成和部署專案。

## 安裝 SDK

從[developer.android.com/sdk][3]安裝 Android SDK。 你可能會出現一個選擇在哪裡安裝 SDK，否則移動下載 `adt-bundle` 樹到無論您存儲的開發工具。

 [3]: http://developer.android.com/sdk/

科爾多瓦命令列工具來工作，您需要包括 SDK 的 `tools` 和 `platform-tools` 的路徑環境中目錄。 在 Mac 上可以使用文字編輯器來創建或修改 `~/.bash_profile` 檔中，添加行，如下，根據 SDK 的安裝位置：

    export PATH=${PATH}:/Development/adt-bundle/sdk/platform-tools:/Development/adt-bundle/sdk/tools


這暴露了 SDK 工具在新打開的終端視窗。否則運行這使它們在當前會話中可用：

    $ source ~/.bash_profile


若要修改路徑上 Windows 7 的環境：

*   在桌面的左下角的**開始**功能表上按一下，在**電腦**上，按右鍵，然後按一下**屬性**.

*   在左側列中，按一下**高級系統設置**。

*   在結果對話方塊中，按下**環境變數**.

*   選擇**PATH**變數，然後按**編輯**.

*   將以下內容追加到基於例如安裝 SDK 的位置的路徑：

        ;C:\Development\adt-bundle\sdk\platform-tools ；C:\Development\adt-bundle\sdk\tools


*   將值保存並關閉這兩個對話方塊。

您可能還需要啟用 JAVA 和螞蟻打開一個命令提示符並鍵入 `java` ，然後還鍵入 `ant` 。將追加到該路徑無法運行的日期為准：

        ； %JAVA_HOME%\bin;%ANT_HOME%\bin


## 在 SDK 中打開的專案

使用 `cordova` 實用程式設置了一個新的專案，如所述在科爾多瓦命令列介面。例如，在原始程式碼中的目錄：

        $ 科爾多瓦創建你好 com.example.hello"HelloWorld"$ cd 你好 $ 科爾多瓦平臺添加 android $ 科爾多瓦生成


一旦創建了，這裡是如何使用 SDK 來修改它：

*   啟動**Eclipse**應用程式。

*   選擇**新建專案**功能表項目。

*   從結果對話方塊中，選擇**從現有代碼的 Android 專案**並按**下一步**： ![][4]

*   定位到 `hello` ，或無論你創建目錄的專案，然後到 `platforms/android` 子目錄。

*   按**完成**.

 [4]: {{ site.baseurl }}/static/img/guide/platforms/android/eclipse_new_project.png

一旦日食視窗將打開，一個紅色的**X**可能似乎表明未解決的問題。如果是這樣，執行這些額外的步驟：

*   按右鍵專案目錄。

*   在出現的**屬性**對話方塊中，選擇**Android**從功能窗格。

*   為專案生成目標，選擇您已安裝的最高的 Android API 級別。

*   按一下**確定**.

*   從**專案**功能表中選擇**清潔**。這應該更正該專案中的所有錯誤。

## 部署到模擬程式

您可以使用 `cordova` 實用程式在一個模擬程式，或你運行一個應用程式可以在 SDK 內運行它。 不管怎樣，SDK 必須首先配置以顯示至少一個設備。 若要這樣做，請使用 Android SDK 經理，從 Eclipse 獨立運行的 JAVA 應用程式。 有兩種方法來打開它：

*   運行 `android` 命令列上。

*   從內日食，按此工具列圖示：

    ![][5]

 [5]: {{ site.baseurl }}/static/img/guide/platforms/android/eclipse_android_sdk_button.png

一旦打開，Android SDK 管理器將顯示不同的運行時庫：

![][6]

 [6]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_window.png

選擇**工具 → 管理 AVDs** （Android 的虛擬裝置），然後從**裝置定義**在隨後出現的對話方塊中選擇任何項：

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_device.png

新聞**創建 AVD**，（可選） 修改該名稱，然後按**確定**以接受這些更改：

![][8]

 [8]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_newAVD.png

AVD 然後出現在**虛擬的 Android 設備**清單中：

![][9]

 [9]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_avds.png

若要打開模擬器作為單獨的應用程式，選擇 AVD 然後按**開始**。它發射將在設備上，與其他控制項可用的硬體按鈕：

![][10]

 [10]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_emulator.png

此時你可以使用 `cordova` 實用程式將應用部署到模擬程式從命令列：

        $ 科爾多瓦效仿 android


如果改為你使用的日食，按右鍵該專案，並選擇**運行作為 → Android 應用程式**。可能要求您指定 AVD，如果都已經打開。

為獲得更快的體驗，使用基於英特爾的模擬程式映射：

*   安裝一個或多個 `Intel x86 Atom` 的系統映射，以及 `Intel Hardware Accelerated Execution Manager` 下**的額外**的可用.

*   運行英特爾安裝程式時，這是在您 Android SDK 內可用`extras/intel/Hardware_Accelerated_Execution_Manager`.

*   設置為英特爾圖像的目標來創建新的 AVD。

*   當啟動模擬程式，確保沒有任何錯誤訊息，指示未能載入 HAX 模組。

## 將部署到設備

要將應用程式推直接到設備，請確保您的設備上的[Android 開發者網站][11]，所述上啟用 USB 調試和使用一個迷你 USB 電纜，將其插入您的系統。

 [11]: http://developer.android.com/tools/device.html

從命令列，可以將應用程式推送到設備：

        運行 android 的 $ 科爾多瓦


交替內日食，按右鍵該專案並選擇**作為 → 運行 Android 應用程式**.
