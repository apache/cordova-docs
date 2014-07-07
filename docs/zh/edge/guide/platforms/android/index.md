* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Android 平臺指南

本指南演示如何設置您的 SDK 環境部署科爾多瓦的 Android 設備的應用程式以及如何在您的開發工作流中 （可選） 使用 Android 居中的命令列工具。 您需要安裝 Android SDK 無論是否你想要使用這些平臺為中心的外殼工具或跨平臺 Cordova CLI 的發展。 兩條發展路徑的比較，請參見概述。 CLI 的詳細資訊，請參閱命令列介面。

## 要求和支援

科爾多瓦 android 系統要求 Android SDK。請參閱 Android SDK[的系統要求][1].

 [1]: http://developer.android.com/sdk/index.html

科爾多瓦支援 Android 2.3.x (姜餅，開始與 Android API 級別 10） 和 4.x 版。作為一般規則，Android 版本成為不受支援的科爾多瓦作為他們沾在谷歌的[分佈的儀表板][2]上的 5%以下。 Android 版本早于 API 級別 10，而 3.x 版本 (蜂窩，API 級別 11-13) 大大低於那 5%門檻。

 [2]: http://developer.android.com/about/dashboards/index.html

## 安裝科爾多瓦殼工具

如果您想要使用科爾多瓦的 Android 居中外殼工具與 SDK 一起，從[cordova.apache.org][3]下載科爾多瓦。 如果您計畫使用所述的命令列介面的跨平臺 CLI 工具，否則忽略此節。

 [3]: http://cordova.apache.org

科爾多瓦下載包含單獨的檔案，為每個平臺。 一定要展開相應的存檔， `android` 在這種情況下，在一個空的目錄內。 有關 executible 實用程式可用在頂級 `bin` 目錄。 (參閱**自述**檔，如果有必要作更詳細的指示）。

這些外殼工具允許您創建、 構建和運行 Android 應用程式。 額外的命令列介面，可以跨所有平臺的外掛程式功能的資訊，請參閱使用 Plugman 到管理外掛程式。 有關如何開發外掛程式的詳細資訊，請參閱應用程式外掛程式。

從[developer.android.com/sdk][4]安裝 Android SDK。 Android sdk 是作為 'adt-捆綁-< os > < 拱 >-< ver >' 檔分發。 在 windows 上，adt 捆綁打包用安裝程式安裝。 在 OSX 和 Linux，只需打開包裝 'adt 捆綁' 中的位置，您將存儲的開發工具。 [關於 Android SDK 安裝程式的詳細的資訊可以在這裡找到][5]

 [4]: http://developer.android.com/sdk/
 [5]: http://developer.android.com/sdk/installing/bundle.html

科爾多瓦正常工作，或者基於他們的 CLI 命令列工具，您需要包括 SDK 的 `tools` 和 `platform-tools` 中的目錄你 `PATH` 。 在 Mac 上可以使用一個文字編輯器來創建或修改 `~/.bash_profile` 檔中，添加行，如下，根據 SDK 的安裝位置：

        匯出路徑 = ${路徑}：/開發/adt-捆綁/sdk/平臺-工具：/開發/adt-捆綁/sdk/工具
    

添加的路徑為 `java` 和 `ant` 如果需要。 在這條線 `~/.bash_profile` 公開這些工具在新打開的終端視窗。 如果您的終端視窗已經打開在 OSX，或避免的登出登錄在 Linux 上，運行這個是為了讓他們在當前的終端視窗中可用：

        元源 ~/.bash_profile
    

若要修改 `PATH` 上 Windows 7 的環境：

1.  在桌面的左下角的**開始**功能表上按一下，在**電腦**上，按右鍵，然後選擇**屬性**.

2.  在左邊的列中選擇**高級系統設置**。

3.  在結果對話方塊中，按下**環境變數**.

4.  選擇**PATH**變數，然後按**編輯**.

5.  追加到以下 `PATH` 基於在安裝 SDK，例如：
    
        ;C:\Development\adt-bundle\sdk\platform-tools ；C:\Development\adt-bundle\sdk\tools
        

6.  將值保存並關閉這兩個對話方塊。

您可能還需要啟用 JAVA 和螞蟻打開一個命令提示符並鍵入 `java` ，然後還鍵入 `ant` 。將追加到 `PATH` 為准的這些運行失敗：

        ;%JAVA_HOME%\bin;%ANT_HOME%\bin
    

## 在 SDK 中打開一個新的專案

此時，若要創建一個新的專案您可以選擇在命令列介面或一組特定于 android 作業系統 shell 工具中所述的跨平臺 CLI 工具之間。 在原始程式碼目錄中，這裡是從 CLI 的辦法：

        $ cordova create hello com.example.hello HelloWorld
        $ cd hello
        $ cordova platform add android
        $ cordova build
    

這裡是 Unix 和 Windows 的相應較低級別外殼工具方法：

        $ /path/to/cordova-android/bin/create /path/to/new/hello com.example.hello HelloWorld
        C:\path\to\cordova-android\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld
    

這裡是如何使用 SDK 來修改它：

1.  啟動**Eclipse**應用程式。

2.  選擇**新建專案**功能表項目。

3.  從結果對話方塊中，選擇**從現有代碼的 Android 專案**並按**下一步**：
    
    ![][6]

4.  如果您使用的 CLI，導航到 `hello` 您創建專案，然後到目錄 `platforms/android` 子目錄。 或者，如果您使用 `create` 殼實用程式，只需定位到 `hello` 目錄。

5.  按**完成**.

 [6]: img/guide/platforms/android/eclipse_new_project.png

一旦日食視窗將打開，一個紅色的**X**可能似乎表明未解決的問題。如果是這樣，執行這些額外的步驟：

1.  按右鍵專案目錄。

2.  在出現的**屬性**對話方塊中，選擇**Android**從功能窗格。

3.  為專案生成目標，選擇您已安裝的最高的 Android API 級別。

4.  按一下**確定**.

5.  從**專案**功能表中選擇**清潔**。這應該更正該專案中的所有錯誤。

## 生成專案

如果您在開發中使用 CLI，專案目錄的頂級 `www` 目錄中包含的原始程式碼檔。運行任一內要重新生成應用程式的專案目錄：

        $ cordova build
        $ cordova build android   # do not rebuild other platforms
    

如果您使用特定于 android 作業系統外殼工具在發展中，有不同的方法。 一旦您生成該專案，預設應用程式的源是可用在 `assets/www` 子目錄。 隨後的命令都可用在其 `cordova` 子目錄。

`build`命令，清理專案檔案並重新生成應用程式。這裡是為 Mac 和 Windows 的語法。 第一次兩個示例生成調試資訊，和第二個標誌發佈的應用程式：

        $ /path/to/project/cordova/build --debug
        C:\path\to\project\cordova\build.bat --debug
    
        $ /path/to/project/cordova/build --release
        C:\path\to\project\cordova\build.bat --release
    

## 配置模擬器

您可以使用任一 `cordova` CLI 實用程式或科爾多瓦的 Android 居中殼的工具在模擬器中運行應用程式。 不管怎樣，SDK 必須首先配置以顯示至少一個設備。 若要這樣做，請使用 Android SDK 管理器中，從 Eclipse 獨立運行的 JAVA 應用程式。 有兩種方法來打開它：

1.  運行 `android` 命令列上。

2.  從內日食，按此工具列圖示：
    
    ![][7]

 [7]: img/guide/platforms/android/eclipse_android_sdk_button.png

一旦打開，Android SDK 管理器將顯示不同的運行時庫：

![][8]

 [8]: img/guide/platforms/android/asdk_window.png

選擇**工具 → 管理 AVDs** （Android 的虛擬裝置），然後從**裝置定義**在隨後出現的對話方塊中選擇任何項：

![][9]

 [9]: img/guide/platforms/android/asdk_device.png

新聞**創建 AVD**，（可選） 修改該名稱，然後按**確定**以接受這些更改：

![][10]

 [10]: img/guide/platforms/android/asdk_newAVD.png

AVD 然後出現在**虛擬的 Android 設備**清單中：

![][11]

 [11]: img/guide/platforms/android/asdk_avds.png

若要打開模擬器作為單獨的應用程式，選擇 AVD 然後按**開始**。它發射將在設備上，與其他控制項可用的硬體按鈕：

![][12]

 [12]: img/guide/platforms/android/asdk_emulator.png

## 部署到模擬程式

此時你可以使用 `cordova` CLI 實用程式將應用部署到模擬程式從命令列：

        $ cordova emulate android
    

否則請使用備用外殼介面：

        $ /path/to/project/cordova/run --emulator
    

不依賴于哪個模擬器當前已啟用內 SDK，您可以引用每個由您提供的名稱：

        $ /path/to/project/cordova/run --target=NAME
    

這將應用程式推到主畫面，並啟動它：

![][13]

 [13]: img/guide/platforms/android/emulator2x.png

當你 `run` 這款應用，你還 `build` 它。 您可以附加額外 `--debug` ， `--release` ，和 `--nobuild` 標誌來控制它怎樣構建的或甚至是否需要重新生成：

        $ /path/to/project/cordova/run --emulator --nobuild
    

如果改為你使用的日食，按右鍵該專案，並選擇**運行作為 → Android 應用程式**。可能要求您指定 AVD，如果都已經打開。

為獲得更快的體驗，您可以使用 `Virtual Machine Acceleration` 來提高執行速度。 許多現代 Cpu 提供擴展外掛程式，以更有效地執行虛擬機器。 嘗試使用這種類型的加速度之前, 你需要確定是否您當前發展系統的 CPU，支援一種以下的虛擬化技術：

*   **英特爾虛擬化技術**(VT-x，vmx) →[英特爾 VT-x 支援的處理器清單][14]
*   **AMD 虛擬化**（AMD-V，支援向量機），只支援 Linux （自 2006 年 5 月以來所有 Cpu AMD 都包括 AMD-V，閃龍除外）。

 [14]: http://ark.intel.com/products/virtualizationtechnology

另一種方法，以找出您的英特爾處理器支援 VT-x 技術，它是由執行 `Intel Processor Identification Utility` ，為 `Windows` 你可以從英特爾[下載中心][15]，下載它，或者你可以使用[booteable 實用程式][16]，這是`OS Independent`.

 [15]: https://downloadcenter.intel.com/Detail_Desc.aspx?ProductID=1881&DwnldID=7838
 [16]: https://downloadcenter.intel.com/Detail_Desc.aspx?ProductID=1881&DwnldID=7840&lang=eng

以後安裝和執行 `Intel Processor Identification Utility` 在 Windows 中，你會得到下面的視窗，以檢查你的 CPU 是否支援虛擬化技術：

![][17]

 [17]: img/guide/platforms/android/intel_pid_util_620px.png

為了加快模擬程式，您需要下載並安裝一個或多個 `Intel x86 Atom` 系統圖像，以及`Intel Hardware Accelerated Execution Manager (HAXM)`.

打開您的 Android SDK 經理，並選擇 `Intel x86 Atom` 系統圖像，無論您想要測試的版本。 然後轉至 `Extras` ，選擇 `Intel x86 Emulator Accelerator (HAXM)` ，並安裝這些套裝軟體：

![][18]

 [18]: img/guide/platforms/android/asdk_man_intel_image_haxm.png

下載後，運行英特爾安裝程式，這是在您 Android SDK 內可用 `extras/intel/Hardware_Accelerated_Execution_Manager` 。 **注**： `If you have any problems installing the package, you can find more information and step by step guidance check this` [英特爾條][19] .

 [19]: http://software.intel.com/en-us/android/articles/speeding-up-the-android-emulator-on-intel-architecture

1.  安裝一個或多個 `Intel x86 Atom` 的系統映射，以及 `Intel Hardware Accelerated Execution Manager` 下**的額外**的可用.

2.  運行英特爾安裝程式時，這是在您 Android SDK 內可用`extras/intel/Hardware_Accelerated_Execution_Manager`.

3.  設置為英特爾圖像的目標來創建新的 AVD。

4.  當啟動模擬程式，確保沒有任何錯誤訊息，指示未能載入 HAX 模組。

## 將部署到設備

要將應用程式推直接到設備，請確保您的設備上的[Android 開發者網站][20]，所述上啟用 USB 調試和使用一個迷你 USB 電纜，將其插入您的系統。

 [20]: http://developer.android.com/tools/device.html

您可以使用此 CLI 命令將推送到該設備的應用程式：

        $ cordova run android
    

...或是使用此 Android 居中外殼介面：

        $ /path/to/project/cordova/run --device
    

無標誌指定， `run` 命令檢測到連接的設備或當前正在運行的模擬程式如果發現沒有設備，否則將提示您指定一個模擬器。

若要運行在 Eclipse 內的從 app，按右鍵該專案並選擇**作為 → 運行 Android 應用程式**.

## 其他命令

以下將生成應用程式的詳細的的日誌，運行：

        $ /path/to/project/cordova/log
        C:\path\to\project\cordova\log.bat
    

以下清理專案檔案：

        $ /path/to/project/cordova/clean
        C:\path\to\project\cordova\clean.bat