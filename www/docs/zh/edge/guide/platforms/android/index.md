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

# Android 平臺指南

本指南演示如何設置您的 SDK 環境部署科爾多瓦的 Android 設備的應用程式以及如何在您的開發工作流中 （可選） 使用 Android 居中的命令列工具。 您需要安裝 Android SDK 無論是否你想要使用這些平臺為中心的外殼工具或跨平臺 Cordova CLI 的發展。 兩條發展路徑的比較，請參見概述。 CLI 的詳細資訊，請參閱命令列介面。

## 要求和支援

科爾多瓦安卓系統要求可以在 OS X、 Linux 或 Windows 作業系統安裝 Android SDK。 請參閱 Android SDK[的系統要求][1].

 [1]: http://developer.android.com/sdk/index.html#Requirements

科爾多瓦支援 Android 4.0.x (入手 Android API 級別 14） 和更高。 作為一般規則，Android 版本成為受科爾多瓦作為他們低於 5%的谷歌的[分佈的儀表板][2]。 Android 版本早于 API 級別 10，和 3.x 版本 （蜂窩，API 級別 11 13） 顯著低於那 5%的門檻。

 [2]: http://developer.android.com/about/dashboards/index.html

## 安裝科爾多瓦殼工具

如果您想要使用科爾多瓦的 Android 居中外殼工具與 SDK 一起，從[cordova.apache.org][3]下載科爾多瓦。 如果您計畫使用所述的命令列介面的跨平臺 CLI 工具，否則忽略此節。

 [3]: http://cordova.apache.org

科爾多瓦下載包含單獨的檔案，為每個平臺。 一定要展開相應的存檔， `android` 在這種情況下，在一個空的目錄內。 有關 executible 實用程式可用在頂級 `bin` 目錄。 (參閱**自述**檔，如果有必要作更詳細的指示）。

這些外殼工具允許您創建、 構建和運行 Android 應用程式。 額外的命令列介面，可以跨所有平臺的外掛程式功能的資訊，請參閱使用 Plugman 到管理外掛程式。 有關如何開發外掛程式的詳細資訊，請參閱應用程式外掛程式。

## 安裝 JAVA 開發工具箱 （JDK）

安裝[JAVA 開發工具箱 （JDK） 7][4]或更高版本。

 [4]: http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html

在 Windows 上安裝時您還需要設置`JAVA_HOME`環境變數根據 JDK 安裝路徑 （例如，C:\Program Files\JAVA\jdk1.7.0_75）。

## 安裝 Android SDK

安裝[獨立的 Android SDK 工具][5]或[Android 的工作室][6]。 如果您計畫開發新科爾多瓦為 Android 外掛程式或使用本機工具來運行和調試 Android 平臺`Android 工作室`水墨畫之發展。 否則， `Android 獨立 SDK 工具`就足以構建和部署 Android 應用程式。

 [5]: http://developer.android.com/sdk/installing/index.html?pkg=tools
 [6]: http://developer.android.com/sdk/installing/index.html?pkg=studio

詳細的安裝說明，請參見上面的安裝連結的一部分。

科爾多瓦的命令列工具來工作，或者基於他們的 CLI，您需要在您的`路徑`中包括 SDK 的`工具`和`平臺工具`目錄。 在 Mac 上可以使用一個文字編輯器來創建或修改`~/.bash_profile`檔中，添加如下所示，根據 SDK 安裝的位置的行：

        export PATH=${PATH}:/Development/android-sdk/platform-tools:/Development/android-sdk/tools


這條線在`~/.bash_profile`公開這些工具在新打開的終端視窗。 如果您的終端視窗已經打開在 OSX，或避免在 Linux 上的登出/登錄，運行此工具以使他們在當前的終端視窗中可用：

        $ source ~/.bash_profile


若要修改`PATH`在窗戶上的環境：

1.  在桌面的左下角的**開始**功能表上按一下，在**電腦**上，按右鍵，然後選擇**屬性**.

2.  在左邊的列中選擇**高級系統設置**。

3.  在結果對話方塊中，按下**環境變數**.

4.  選擇**PATH**變數，然後按**編輯**.

5.  追加到以下 `PATH` 基於在安裝 SDK，例如：

        ;C:\Development\android-sdk\platform-tools;C:\Development\android-sdk\tools


6.  將值保存並關閉這兩個對話方塊。

## 安裝 SDK 套裝程式

打開 Android SDK 管理器 （例如，通過終端： `android`） 並安裝：

1.  Android 5.1.1 （API 22） 平臺 SDK
2.  Android SDK 生成工具版本 19.1.0 或更高版本
3.  Android 支援存儲庫 （額外）

有關更多詳細資訊，請參閱[安裝 SDK 包][7]。

 [7]: http://developer.android.com/sdk/installing/adding-packages.html

## 配置模擬器

預設情況下，android sdk 並不提供任何預設模擬程式實例。 您可以創建一個新的通過在命令列上運行`android` 。 新聞**工具 → 管理 AVDs** （Android 的虛擬裝置），然後從**裝置定義**在隨後出現的對話方塊中選擇任何項：

![][8]

 [8]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_device.png

按**創建 AVD**，（可選） 修改該名稱，然後按**確定**以接受這些更改：

![][9]

 [9]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_newAVD.png

AVD 然後出現在**虛擬的 Android 設備**清單中：

![][10]

 [10]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_avds.png

若要打開模擬器作為單獨的應用程式，請選擇 AVD，然後按**開始**。它推出一樣在設備上，使用其他控制項可用的硬體按鈕:

![][11]

 [11]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_emulator.png

為獲得更快的體驗，你可以使用`虛擬機器加速`以提高執行速度。 許多現代的 Cpu 提供擴展外掛程式，以更有效地執行虛擬機器。 嘗試使用這種類型的加速度之前，您需要確定是否您當前的開發系統 CPU 支援一種以下的虛擬化技術：

*   **英特爾虛擬化技術**(VT-x，vmx) →[英特爾 VT-x 支援的處理器清單][12]
*   **AMD 虛擬化**（AMD-V，支援向量機），只支援 Linux （自 2006 年 5 月以來所有 Cpu AMD 都包括 AMD-V，閃龍除外）。

 [12]: http://ark.intel.com/products/virtualizationtechnology

另一種方法來找出是否您的英特爾處理器支援 VT x 技術、 它是由執行`英特爾處理器識別實用程式`、 `Windows`為您可以從英特爾[下載中心][13]，下載它或您可以使用[booteable 實用程式][14]，它是`獨立于作業系統`.

 [13]: https://downloadcenter.intel.com/Detail_Desc.aspx?ProductID=1881&DwnldID=7838
 [14]: https://downloadcenter.intel.com/Detail_Desc.aspx?ProductID=1881&DwnldID=7840&lang=eng

後安裝和執行的`英特爾處理器識別實用程式`在 Windows 中，你會得到下面的視窗，以檢查是否您的 CPU 支援虛擬化技術：

![][15]

 [15]: {{ site.baseurl }}/static/img/guide/platforms/android/intel_pid_util_620px.png

為了加快模擬程式，您需要下載並安裝一個或多個`Intel x86 原子`系統映射，以及`英特爾硬體加速執行經理 (HAXM)`.

打開你的 Android SDK 經理，並選擇`Intel x86 原子`系統的形象，為任何一個你想要測試的版本。 然後轉到`臨時演員`和選擇`Intel x86 模擬器加速器 （HAXM）`，並安裝這些套裝軟體：

![][16]

 [16]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_man_intel_image_haxm.png

下載後，運行英特爾安裝程式時，這是你 Android SDK 在`臨時演員/英特爾/Hardware_Accelerated_Execution_Manager`中可用。 **注意**：`如果您有任何問題，安裝套裝軟體，你可以找到更多的資訊和一步一步指導檢查這` [篇文章英特爾][17].

 [17]: http://software.intel.com/en-us/android/articles/speeding-up-the-android-emulator-on-intel-architecture

1.  安裝一個或多個`Intel x86 原子`系統映射，以及`英特爾硬體加速執行管理器`，可根據**臨時演員**.

2.  運行英特爾安裝程式時，這是你 Android SDK 在`臨時演員/英特爾/Hardware_Accelerated_Execution_Manager`中可用.

3.  目標設置為英特爾圖像創建新的 AVD。

4.  當啟動模擬程式，確保有沒有錯誤訊息，指示載入 HAX 模組失敗。

## 創建一個新專案

在這一點上，要創建一個新的專案你可以選擇之間跨平臺 CLI 工具的命令列介面或一組特定于 Android 的 shell 工具中所述。 從在原始程式碼目錄中，這裡是 CLI 的方法：

        $ cordova create hello com.example.hello HelloWorld
        $ cd hello
        $ cordova platform add android
        $ ccordova prepare              # or "cordova build"


這裡是 Unix 和 Windows 的相應較低級別 shell 工具方法：

        $ /path/to/cordova-android/bin/create /path/to/new/hello com.example.hello HelloWorld
        C:\path\to\cordova-android\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld


## 生成專案

如果您在開發中使用 CLI，專案目錄頂級`www`目錄中包含的原始程式碼檔。運行任何這些專案目錄重新生成該應用程式中：

        $ cordova build                   # build all platforms that were added
        $ cordova build android           # build debug for only Android
        $ cordova build android --debug   # build debug for only Android
        $ cordova build android --release # build release for only Android


如果使用的特定于 Android 的 shell 工具在發展中，還有一個不同的方法。 一旦您生成專案時，預設的應用程式的來源是可用的`資產/www`子目錄中。 後續的命令，可在其`科爾多瓦`子目錄。

`build`命令清理專案檔案並重新生成應用程式。這裡是 Mac 和 Windows 的語法。 第一次兩個示例生成調試資訊，和第二個構建版本的應用程式：

        $ /path/to/project/cordova/build --debug
        C:\path\to\project\cordova\build.bat --debug

        $ /path/to/project/cordova/build --release
        C:\path\to\project\cordova\build.bat --release


## 部署應用程式

`科爾多瓦`CLI 實用程式可用於應用程式部署到模擬器或設備從命令列：

        $ cordova emulate android       #to deploy the app on a default android emulator
        $ cordova run android --device  #to deploy the app on a connected device


否則，請使用備用殼介面：

        $ /path/to/project/cordova/run --emulator
        $ /path/to/project/cordova/run --device


您可以使用**cordova run android --list**看到所有可用的目標和**cordova run android --target=target_name**在一個特定的設備或模擬器上運行應用程式 （例如，`cordova run android --target="Nexus4_emulator"`).

您還可以使用**cordova run --help**查看附加的生成和運行選項。

這將應用程式推送至主畫面，啟動它：

![][18]

 [18]: {{ site.baseurl }}/static/img/guide/platforms/android/emulator2x.png

當您`run`該應用程式，您還`build`它。 您可以附加額外`--debug`， `--release`，和`--nobuild`標誌來控制它如何構建的或甚至是否重建是必需的：

        $ /path/to/project/cordova/run --emulator --nobuild


## 其他命令

下列生成詳細的日誌，該應用程式的運行時：

        $ /path/to/project/cordova/log
        C:\path\to\project\cordova\log.bat


以下清理的專案檔案：

        $ /path/to/project/cordova/clean
        C:\path\to\project\cordova\clean.bat


## 在 SDK 中打開一個新專案

一旦 android 平臺添加到專案中，你可以打開它從[Android Studio][6]內：

1.  推出**Android 工作室**中的應用。

2.  選擇**導入專案 （Eclipse ADT，Gradle 等）**.

    ![][19]

3.  選擇存儲 （`你/專案/platforms/android` android 平臺的位置).

    ![][20]

4.  `Gradle Sync`問題你可以乾脆的回答**是**.

 [19]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_import_project.png
 [20]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_import_select_location.png

你現在有所有的和可以從生成並運行該應用程式直接`Android 工作室`.

![][21]

 [21]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_import_done.png

請參閱[Android 工作室概述][22][生成並運行從 Android 工作室][23]為更多的細節。

 [22]: http://developer.android.com/tools/studio/index.html
 [23]: http://developer.android.com/tools/building/building-studio.html
