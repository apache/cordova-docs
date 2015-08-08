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

## 簡介

通過針對亞馬遜火 OS 平臺，科爾多瓦開發人員可以創建利用先進的 web 引擎集成的 Kindle 消防設備的混合 web 應用程式。 亞馬遜 web 視圖 API (AWV) 是獨有的火 OS 鉻派生的 web 運行時。 為 web 視圖使用的 Android 設備附帶的投遞更換，AWV 使成為可能，更好地執行功能更強大的混合 web 應用程式通過創建為一個更快的 JavaScript 引擎 (V8)、 遠端偵錯和 Kindle 消防設備包括加速 2D 畫布的硬體優化提供支援和不支援的 Android 的 HTML5 功能的訪問內置的 web 視圖如: CSS 除垢，表單驗證，getUserMedia，IndexedDB、 網路工作者、 WebSockets 和 WebGL。

關於亞馬遜 web 視圖 API 的詳細資訊，請參閱亞馬遜開發人員門戶[HTML5 混合應用程式頁][1]。 有關獲取開始和其他的問題支援問題，請參見亞馬遜開發人員門戶[論壇-HTML5 混合應用程式][2].

 [1]: https://developer.amazon.com/public/solutions/platforms/android-fireos/docs/building-and-testing-your-hybrid-app
 [2]: http://forums.developer.amazon.com/forums/category.jspa?categoryID=41

## 要求和支援

亞馬遜火 os 開發科爾多瓦的應用程式需要安裝的各種支援檔，包括 android 系統的發展，以及亞馬遜 web 視圖 SDK 所需的一切。 請檢查下面的清單中所需的安裝：

*   命令列介面
*   [Android SDK][3]
*   [Apache Ant][4]
*   [亞馬遜 web 視圖 SDK][1]

 [3]: http://developer.android.com/sdk/
 [4]: http://ant.apache.org

## 安裝

### Android SDK 和 Apache Ant

從[developer.android.com/sdk][3]安裝 Android SDK。 你可能會出現一個選擇在哪裡安裝 SDK，否則移動下載 `adt-bundle` 樹到無論您存儲的開發工具。

你需要在運行 Android SDK 管理器 （ `android` 從命令列） 開始您的科爾多瓦專案前至少一次。 一定要安裝最新版本的 Android SDK 工具和 SDK 平臺**具體 API 級別為 19**。 請關於亞馬遜開發人員門戶如何設置您的開發環境為 Kindle 火 OS 設備的詳細資訊，參閱[您的開發環境設置][5]。

 [5]: https://developer.amazon.com/public/resources/development-tools/ide-tools/tech-docs/01-setting-up-your-development-environment

Apache Ant 生成工具[下載螞蟻二進位分發][6]，解壓縮到您以後可以引用的目錄的安裝。 請參閱[Ant 手冊][7]為更多的資訊。

 [6]: http://ant.apache.org/bindownload.cgi
 [7]: http://ant.apache.org/manual/index.html

對於科爾多瓦的命令列工具來工作，您需要包括 Android SDK 的 `tools` 、 `platform-tools` 和 `apache-ant/bin` 目錄路徑環境中的。

#### Mac/Linux 路徑

關於 Mac、 Linux 或其他 unix 平臺，您可以使用文字編輯器來創建或修改 `~/.bash_profile` 檔中，添加行，如下，依據的 SDK 和 Ant 安裝位置：

    匯出路徑 = ${路徑}：/開發/adt-捆綁/sdk/平臺-工具：/開發/adt-捆綁/sdk/工具：/發展/阿帕奇-ant/bin


這暴露了 SDK 工具在新打開的終端視窗。否則運行這使它們在當前會話中可用：

    $ source ~/.bash_profile


#### Windows 路徑

若要修改路徑在 Windows 上的環境：

*   在桌面的左下角的**開始**功能表上按一下，在**電腦**上，按右鍵，然後按一下**屬性**.

*   在左側列中，按一下**高級系統設置**。

*   在結果對話方塊中，按下**環境變數**.

*   選擇**PATH**變數，然後按**編輯**.

*   將以下內容追加到哪裡你安裝了 SDK 和螞蟻，例如基於的路徑：

        ;C:\Development\adt-bundle\sdk\platform-tools;C:\Development\adt-bundle\sdk\tools;C:\Development\apache-ant\bin


*   將值保存並關閉這兩個對話方塊。

*   您還將需要啟用 JAVA。 打開一個命令提示符並鍵入 `java` ，如果它沒有運行，追加到您的路徑以及 JAVA 二進位檔案的位置。 請確保已安裝 JDK 目錄指向的 %JAVA_HOME%。 您可能必須添加 JAVA_HOME 環境變數分別。

        ； %JAVA_HOME%\bin


### 亞馬遜 web 視圖 SDK

若要創建使用目標亞馬遜火 OS 平臺的科爾多瓦應用程式，您需要下載、 解壓和安裝亞馬遜 web 視圖 SDK 的支援檔。 這一步只需要為你的第一個亞馬遜火 OS 專案做。

*   從[亞馬遜開發人員門戶][1]下載亞馬遜 web 視圖 SDK.

*   複製 `awv_interface.jar` 從下載 SDK 到科爾多瓦的工作目錄。如果它不存在，請創建 commonlibs(shown below) 資料夾：

    **Mac/Linux:** `~/.cordova/lib/commonlibs/`

    **Windows:** `%USERPROFILE%\.cordova\lib\commonlibs`

## 為亞馬遜火 OS 創建新專案

使用 `cordova` 實用程式來建立一個新的專案，如所述在科爾多瓦的命令列介面。例如，在一個原始程式碼目錄：

    $ cordova create hello com.example.hello "HelloWorld"
    $ cd hello
    $ cordova platform add amazon-fireos
    $ cordova build


***注：***第一次亞馬遜 fireos 平臺的安裝在您的系統，它會到科爾多瓦的工作目錄，下載相應的檔但然後會失敗，因為它缺少 AWV SDK 的支援檔 （見上文）。 請按照上面的說明來安裝 `awv_interface.jar` ，刪除，然後重新將亞馬遜 fireos 平臺添加到您的專案。 這一步只需要為第一次亞馬遜火 OS 專案做。

## 將部署到設備

一個應用程式直接推向該設備，請確保您的設備在[Android 開發者網站][8]上，所述上啟用 USB 調試和使用一個迷你的 USB 電纜，把它插到你的系統。

 [8]: http://developer.android.com/tools/device.html

您可以從命令列將應用程式推送到設備：

    $ 科爾多瓦運行亞馬遜 fireos


或者在 Eclipse，按右鍵該專案，然後選擇**→ 作為運行 Android 應用程式**.

**注**： 目前，對於亞馬遜 web 視圖基於應用程式測試通過模擬器不支援，另外亞馬遜 web 視圖 API 是只可用火 OS 的設備上。 有關詳細資訊，請參閱[亞馬遜 web 視圖 API SDK][1]文檔。

### 運行標誌

運行命令接受可選參數作為科爾多瓦的命令列介面文檔中指定，火 OS 也接受額外 `--debug` 將啟用遠端 web 調試鉻的開發人員工具的標誌。

要使用的開發工具，請輸入：

    $ cordova run --debug amazon-fireos


這將使在用戶端上運行的工具。你可以連接到用戶端通過埠轉發使用安卓系統調試橋 （亞銀） 指的應用程式的包名。

例如：

    亞行轉發 tcp:9222 localabstract:com.example.helloworld.devtools


然後，可以使用通過基於鉻的瀏覽器 DevTools 導航到：`http://localhost:9222`.

### 可選的 Eclipse 支援

一旦創建，您可以使用 Eclipse 隨之而來的 Android SDK 來修改專案。 要小心是否你繼續使用科爾多瓦命令列工具，通過 Eclipse 所做的修改將被覆蓋。

*   啟動**Eclipse**應用程式。

*   選擇**新建專案**功能表項目。

*   從結果對話方塊中，選擇**從現有代碼的 Android 專案**並按**下一步**： ![][9]

*   定位到 `hello` ，或無論你創建目錄的專案，然後到 `platforms/amazon-fireos` 子目錄。

*   Eclipse 將顯示你你好、 你好-CorddovaLib-2 專案要添加。添加兩個。

*   按**完成**.

 [9]: {{ site.baseurl }}/static/img/guide/platforms/android/eclipse_new_project.png

一旦日食視窗打開，一個紅色的**X**可能似乎表明未解決的問題。如果是這樣，請按照這些額外的步驟：

*   按右鍵專案目錄。

*   在出現的**屬性**對話方塊中，選擇**Android**從功能窗格。

*   專案的生成目標，請選擇最高的 Android API 級別 （目前 API 級別 19），安裝了。

*   按一下**確定**.

*   從**專案**功能表中選擇**清潔**。這應該更正該專案中的所有錯誤。
