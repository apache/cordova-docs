---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
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

title: 升級 iOS
---

# 升級 iOS

本指南演示如何修改 iOS 專案從科爾多瓦的舊版本進行升級。 大多數這些說明適用于與舊集的前面的命令列工具創建的專案 `cordova` CLI 實用程式。 資訊，請參閱命令列介面如何更新的 CLI 版本。

**注**： Xcode 6 是必需。 目前，若要提交到蘋果應用程式商店，您應該使用 iOS SDK，是 iOS 8 最新的發佈的版本，這是只包括在 Xcode 6。

## 4.0.0 3.6.0 版升級專案

對於非 CLI 的專案，請運行：

        bin/update path/to/project
    

CLI 的專案：

1.  更新 `cordova` CLI 版本。請參閱命令列介面。

2.  在你現有的專案中運行 `cordova platform update ios`。

## 升級 3.3.0 專案 3.4.0

對於非 CLI 的專案，請運行：

        bin/update path/to/project
    

CLI 的專案：

1.  更新 `cordova` CLI 版本。請參閱命令列介面。

2.  運行`cordova platform update ios`

## 升級 3.2.0 專案到 3.3.0

對於非 CLI 的專案，請運行：

        bin/update path/to/project
    

CLI 的專案：

1.  更新 `cordova` CLI 版本。請參閱命令列介面。

2.  運行`cordova platform update ios`

## 升級 3.1.0 專案到 3.2.0

對於非 CLI 的專案，請運行：

        bin/update path/to/project
    

CLI 的專案：

1.  更新 `cordova` CLI 版本。請參閱命令列介面。

2.  運行`cordova platform update ios`

## 升級 3.0.0 專案到 3.1.0

對於非 CLI 的專案，請運行：

        bin/update path/to/project
    

CLI 專案：

1.  更新 `cordova` CLI 版本。請參閱命令列介面。

2.  運行`cordova platform update ios`

iOS 7 的問題：

1.  刪除 `width=device-width、height=device-height` 從 `index.html` 檔 `viewport meta` 標記。 （請參見 [相關的 bug][1].)

2.  更新您媒體、 媒體捕獲和閃屏的核心外掛程式 iOS 7 的支援。

 [1]: https://issues.apache.org/jira/browse/CB-4323

Xcode 5 的問題：

1.  如果 Xcode 5 提示您這樣做 （在問題導航），請更新您的專案設置。

2.  更新您 **編譯器的 C / C + + 目標 C** 下 **生成設置** 選項卡，設置 **生成選項** 一節。 選擇 **預設編譯器 （蘋果 LLVM 5.0）**.

## 從 2.9.0 升級到 CLI （3.0.0)

1.  創建一個新的 Apache 科爾多瓦 3.0.0 專案使用 CLI，科爾多瓦，所述的命令列介面。

2.  添加您的平臺的科爾多瓦的專案，例如： `cordova platform add ios`.

3.  該專案的內容複寫 `www` 目錄到 `www` 目錄在您剛剛創建的科爾多瓦專案的根目錄。

4.  複製或覆蓋任何本機的資產從原始專案 （`資源` 等），並確保向 `.xcodeproj` 專案中添加任何新檔。 IOS 專案生成 `platforms\ios` 目錄內。

5.  複製 `config.xml` 到 `www` 目錄中，並移除任何外掛程式定義。修改而不是平臺目錄的設置。

6.  使用科爾多瓦 CLI 工具來安裝您需要的任何外掛程式。注意 CLI 處理所有核心 Api 作為外掛程式，所以他們可能需要添加。只有 3.0.0 外掛程式是與 CLI 相容。

7.  生成並測試。

## 升級 2.9.0 專案 3.0.0

1.  下載並解壓縮到硬碟上，例如對 `~/Documents/Cordova-3.0.0` 的永久目錄位置的科爾多瓦 3.0.0 源.

2.  如果它正在運行，請退出 Xcode。

3.  使用終端程式，定位到你放在上面的下載的源的目錄。

4.  創建一個新專案，如 iOS 殼工具指南中所述。您需要從這個新的專案資產。

5.  複製 `www/cordova.js` （注意它再也沒有一個版本尾碼，該版本是在該檔本身在標題中） 到新專案中的檔 `www` 目錄中，並刪除 `www/cordova.js` 檔。

6.  科爾多瓦的腳本中的引用更新 `www/index.html` 檔 （以及包含該腳本引用的任何其他檔） 以指向新 `cordova.js` 檔。

7.  刪除 `CordovaLib` 目錄和副本 `CordovaLib` 目錄從新專案到專案的根目錄。

**注**： 從科爾多瓦 3.0.0 開始，未預先安裝的外掛程式，和你需要使用 `plugman` 命令列實用程式來安裝它們自己。 請參閱使用 Plugman 管理外掛程式。

## 升級 2.8.0 專案 2.9.0

1.  下載並解壓縮到硬碟上，例如對 `~/Documents/Cordova-2.9.0` 的永久目錄位置的科爾多瓦 2.9.0 源.

2.  如果它正在運行，請退出 Xcode。

3.  使用終端程式，定位到你放在上面的下載的源的目錄。

4.  創建一個新專案，如 iOS 殼工具指南中所述。您需要從這個新的專案資產。

5.  複製 `www/cordova.js` （請注意它不再有版本尾碼，該版本位於檔本身在標題中） 到新專案中的檔 `www` 目錄中，並刪除 `www/cordova.js` 檔。

6.  科爾多瓦的腳本中的引用更新 `www/index.html` 檔 （以及包含該腳本引用的任何其他檔） 以指向新 `cordova.js` 檔。

7.  刪除 `CordovaLib` 目錄和複製 `CordovaLib` 目錄從新專案到您的專案的根目錄。

## 升級 2.7.0 專案到 2.8.0

1.  下載並解壓縮到硬碟上，例如對 `~/Documents/Cordova-2.8.0` 的永久目錄位置的科爾多瓦 2.8.0 源.

2.  如果它正在運行，請退出 Xcode。

3.  使用終端程式，定位到你放在上面的下載的源的目錄。

4.  創建一個新專案，iOS 殼工具指南中所述。你需要從這個新的專案資產。

5.  複製 `www/cordova.js` （請注意它不再有版本尾碼，該版本位於檔本身在標題中） 到 `www` 目錄中，從新的專案檔案並刪除 `www/cordova-2.7.0.js` 檔。

6.  科爾多瓦腳本中的引用更新 `www/index.html` 檔 （以及包含該腳本引用的任何其他檔） 使其指向新 `cordova.js` 檔。

7.  更新的 `config.xml` 檔中的任何 `<plugin>` 標記為 `<feature>` 標記。 請注意現有 `<plugin>` 標籤仍然工作，但都被否決了。 您可以在一個新的專案的 `config.xml` 檔中複製此資訊。 舉個例子：
    
        <plugins>
            <plugin name="LocalStorage" value="CDVLocalStorage" />
            <!-- other plugins -->
        </plugins>
        
        <!-- change to: (note that a <feature> tag is on the same level as <plugins> -->
        <feature name="LocalStorage">
            <param name="ios-package" value="CDVLocalStorage" />
        </feature>
        <!-- other <feature> tags -->
        

8.  刪除 `CordovaLib` 目錄和複製 `CordovaLib` 目錄從新專案到您的專案的根目錄。

9.  這兩個框架添加到專案中：
    
        OpenAL
        ImageIO
        

10. 更新您的專案目標 **生成設置**。根據 **連結 → 其他連結器標誌**，編輯 **"-Obj-C"** 是 **"-陳壽"**.

11. 更新您的專案目標 **生成設置**。 根據 **連結 → 其他連結器標誌**，更改 **"-所有 _ 載入"** 是 `-force\_load ${BUILT\_PRODUCTS\_DIR}/libCordova.a`。 你只需要這樣做，如果你有問題中定義 [這一問題。][2].

 [2]: https://issues.apache.org/jira/browse/CB-3458

## 升級 2.6.0 專案 2.7.0

1.  下載並解壓縮到硬碟上，例如對 `~/Documents/Cordova-2.7.0` 的永久目錄位置的科爾多瓦 2.7.0 源.

2.  如果它正在運行，請退出 Xcode。

3.  使用終端程式，定位到你放在上面的下載的源的目錄。

4.  創建一個新專案，iOS 殼工具指南中所述。你需要從這個新的專案資產。

5.  複製 `www/cordova-2.7.0.js` 到新專案中的檔 `www` 目錄中，並刪除 `www/cordova-2.6.0.js` 檔。

6.  科爾多瓦腳本中的引用更新 `www/index.html` 檔 （以及包含該腳本引用的任何其他檔） 使其指向新 `cordova-2.7.0.js` 檔。

7.  更新 （或替換，如果你永遠不會更改檔） `AppDelegate.m` 檔根據從新一個專案 （見 [此比較][3]).

8.  在 `config.xml` 檔中，[刪除這條線][4].

9.  刪除 `CordovaLib` 目錄和複製 `CordovaLib` 目錄從新專案到您的專案的根目錄。

 [3]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=5c05ac80e056753c0e8736f887ba9f28d5b0774c;hp=623ad8ec3c46f656ea18c6c3a190d650dd64e479;hb=c6e71147386d4ad94b07428952d1aae0a9cbf3f5;hpb=c017fda8af00375a453cf27cfc488647972e9a23
 [4]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=537705d76a5ef6bc5e57a8ebfcab78c02bb4110b;hp=8889726d9a8f8c530fe1371c56d858c34552992a;hb=064239b7b5fa9a867144cf1ee8b2fb798ce1f988;hpb=c9f233250d4b800f3412eeded811daaafb17b2cc

## 升級 2.5.0 專案到 2.6.0

1.  下載並解壓縮到硬碟上，例如對 `~/Documents/Cordova-2.6.0` 的永久目錄位置的科爾多瓦 2.6.0 源.

2.  如果它正在運行，請退出 Xcode。

3.  使用終端程式，定位到你放在上面的下載的源的目錄。

4.  創建一個新專案，如 iOS 殼工具指南中所述。您需要從這個新的專案資產。

5.  將該專案的 `www/cordova-2.6.0.js` 檔案複製到 `www` 目錄中，並刪除 `www/cordova-2.5.0.js` 檔。

6.  科爾多瓦 （以及其他引用腳本的檔） 的 `www/index.html` 檔中的腳本引用更新指向新的 `科爾多瓦 2.6.0.js` 檔。

7.  更新 （或替換，如果你永遠不會更改檔） `AppDelegate.m` 檔根據從新一個專案 （見 [此比較][5]).

8.  在 `config.xml` 檔中，[添加這條新線][6].

9.  在 `config.xml` 檔中，[添加這條新線][7].

10. 在 `config.xml` 檔中，[UIWebViewBounce 已改為 DisallowOverscroll，與預設值不同][8].

11. 在 `config.xml` 檔中，已棄用 `EnableLocation` 偏好。

12. 刪除 `CordovaLib` 目錄和副本 `CordovaLib` 目錄從新專案到專案的根目錄。

 [5]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=124a56bb4f361e95616f44d6d6f5a96ffa439b60;hp=318f79326176be8f16ebc93bad85dd745f4205b6;hb=a28c7712810a63396e9f32fa4eb94fe3f8b93985;hpb=36acdf55e4cab52802d73764c8a4b5b42cf18ef9
 [6]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=1555b5e81de326a07efe0bccaa5f5e2326b07a9a;hp=0652d60f8d35ac13c825c572dca6ed01fea4a540;hb=95f16a6dc252db0299b8e2bb53797995b1e39aa1;hpb=a2de90b8f5f5f68bd9520bcbbb9afa3ac409b96d
 [7]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=d307827b7e67301171a913417fb10003d43ce39d;hp=04260aa9786d6d74ab20a07c86d7e8b34e31968c;hb=97b89edfae3527828c0ca6bb2f6d58d9ded95188;hpb=942d33c8e7174a5766029ea1232ba2e0df745c3f
 [8]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=8889726d9a8f8c530fe1371c56d858c34552992a;hp=d307827b7e67301171a913417fb10003d43ce39d;hb=57982de638a4dce6ae130a26662591741b065f00;hpb=ec411f18309d577b4debefd9a2f085ba719701d5

## 升級 2.4.0 專案 2.5.0

1.  下載並解壓縮到硬碟上，例如對 `~/Documents/Cordova-2.5.0` 的永久目錄位置的科爾多瓦 2.5.0 源.

2.  如果它正在運行，請退出 Xcode。

3.  使用終端程式，定位到你放在上面的下載的源的目錄。

4.  創建一個新專案，如 iOS 殼工具指南中所述。您需要從這個新的專案資產。

5.  將 `www/cordova-2.5.0.js` 檔從新專案複製到 `www` 目錄並刪除 `www/cordova-2.4.0.js` 檔。

6.  科爾多瓦腳本中 `www/index.html` 檔 （以及包含該腳本引用的任何其他檔） 的引用更新為指向新的 `科爾多瓦 2.5.0.js` 檔。

7.  更新 （或替換，如果你永遠不會更改檔） `AppDelegate.m` 檔根據從新一個專案 （見 [此比較][9]).

8.  在 `config.xml` 檔中，[添加這些新行][10].

9.  在 `config.xml` 檔中，[編輯的根項目，改變它從科爾多瓦到小部件][11].

10. 在 `config.xml` 檔中，[刪除 OpenAllWhitelistURLsInWebView 偏好][12].

11. 刪除 `科爾多瓦` 目錄中，並從新專案中 `科爾多瓦` 目錄複寫到您的專案的根目錄。在 2.5.0，這已更新腳本。

12. 刪除 `CordovaLib` 目錄和複製 `CordovaLib` 目錄從新專案到您的專案的根目錄。

 [9]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=318f79326176be8f16ebc93bad85dd745f4205b6;hp=6dc7bfc84f0ecede4cc43d2a3256ef7c5383b9fe;hb=4001ae13fcb1fcbe73168327630fbc0ce44703d0;hpb=299a324e8c30065fc4511c1fe59c6515d4842f09
 [10]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=903944c4b1e58575295c820e154be2f5f09e6314;hp=721c734120b13004a4a543ee25f4287e541f34be;hb=ae467249b4a256bd31ee89aea7a06f4f2316b8ac;hpb=9e39f7ef8096fb15b38121ab0e245a3a958d9cbb
 [11]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=64e71636f5dd79fa0978a97b9ff5aa3860a493f5;hp=d8579352dfb21c14e5748e09b2cf3f4396450163;hb=0e711f8d09377a7ac10ff6be4ec17d22cdbee88d;hpb=57c3c082ed9be41c0588d0d63a1d2bfcd2ed878c
 [12]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=721c734120b13004a4a543ee25f4287e541f34be;hp=7d67508b70914aa921a16e79f79c00512502a8b6;hb=187bf21b308551bfb4b98b1a5e11edf04f699791;hpb=03b8854bdf039bcefbe0212db937abd81ac675e4

## 升級 2.3.0 專案 2.4.0

1.  下載並解壓縮到硬碟上，例如對 `~/Documents/Cordova-2.4.0` 的永久目錄位置的科爾多瓦 2.4.0 源.

2.  如果它正在運行，請退出 Xcode。

3.  使用終端程式，定位到你放在上面的下載的源的目錄。

4.  創建一個新專案，如 iOS 殼工具指南中所述。您需要從這個新的專案資產。

5.  從新專案中的 `www/cordova-2.4.0.js` 檔案複製到 `www` 目錄中，並刪除 `www/cordova-2.3.0.js` 檔。

6.  科爾多瓦腳本中 `www/index.html` 檔 （以及包含該腳本引用的任何其他檔） 的引用更新為指向新的 `科爾多瓦 2.4.0.js` 檔。

7.  更新 （或替換，如果你永遠不會更改的檔） `MainViewController.m` 檔根據從新一個專案 （見 [此比較][13]).

8.  更新 （或替換，如果你永遠不會更改檔） `AppDelegate.m` 檔根據從新一個專案 （見 [此比較][14]).

9.  在 `config.xml` 檔中，[添加這條新線][15].

10. 刪除 `科爾多瓦` 目錄中，並從新專案中 `科爾多瓦` 目錄複寫到您的專案的根目錄。在 2.4.0，這具有固定的腳本。

11. 刪除 `CordovaLib` 目錄和複製 `CordovaLib` 目錄從新專案到您的專案的根目錄。

12. AssetsLibrary.framework 作為一種資源添加到專案中。 （請參閱 [蘋果的文檔][16] 說明如何做到這一點。）。

 [13]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/MainViewController.m;h=5f9eeac15c2437cd02a6eb5835b48374e9b94100;hp=89da1082d06ba5e5d0dffc5b2e75a3a06d5c2aa6;hb=b4a2e4ae0445ba7aec788090dce9b822d67edfd8;hpb=a484850f4610e73c7b20cd429a7794ba829ec997
 [14]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=6dc7bfc84f0ecede4cc43d2a3256ef7c5383b9fe;hp=1ca3dafeb354c4442b7e149da4f281675aa6b740;hb=6749c17640c5fed8a7d3a0b9cca204b89a855baa;hpb=deabeeb6fcb35bac9360b053c8bf902b45e6de4d
 [15]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=7d67508b70914aa921a16e79f79c00512502a8b6;hp=337d38da6f40c7432b0bce05aa3281d797eec40a;hb=6749c17640c5fed8a7d3a0b9cca204b89a855baa;hpb=deabeeb6fcb35bac9360b053c8bf902b45e6de4d
 [16]: https://developer.apple.com/library/ios/#recipes/xcode_help-project_editor/Articles/AddingaLibrarytoaTarget.html

## 2.2.0 升級專案到 2.3.0

1.  下載並解壓縮到硬碟上，例如對 `~/Documents/Cordova-2.3.0` 的永久目錄位置的科爾多瓦 2.3.0 源.

2.  如果它正在運行，請退出 Xcode。

3.  使用終端程式，定位到你放在上面的下載的源的目錄。

4.  創建一個新專案，如 iOS 殼工具指南中所述。您需要從這個新的專案資產。

5.  從新專案中的 `www/cordova-2.3.0.js` 檔案複製到 `www` 目錄中，並刪除 `www/cordova-2.2.0.js` 檔。

6.  科爾多瓦腳本中 `www/index.html` 檔 （以及包含該腳本引用的任何其他檔） 的引用更新為指向新的 `cordova-2.3.0.js` 檔。

7.  更新 （或替換，如果你永遠不會更改檔） `MainViewController.m` 根據新專案中的一個。

8.  刪除 `科爾多瓦` 目錄中，並從新專案中 `科爾多瓦` 目錄複寫到您的專案的根目錄。這在 2.3.0，新的腳本。

9.  刪除 `CordovaLib` 目錄和複製 `CordovaLib` 目錄從新專案到您的專案的根目錄。

10. `Cordova.plist` 檔轉換 `config.xml`，通過在您的專案檔案上運行腳本 `bin/cordova\_plist\_to\_config\_xml`）。

11. 通過添加此標記下 `< 科爾多瓦 >< 外掛程式 >` 對 `config.xml`，添加 InAppBrowser 外掛程式：
    
        <plugin name="InAppBrowser" value="CDVInAppBrowser" />
        

12. 請注意目標 C 外掛程式不再 *不* 列入白名單。 到白名單中您的連接與軟體白名單中，您需要將該連接的 `使用者代理` 標頭設置為相同的使用者代理作為主要的科爾多瓦 web 視圖。 你可以通過訪問關閉主要的視圖控制器的 `使用者代理` 屬性。 主視圖-控制器 （`CDVViewController`） 也有 `URLisAllowed` 的方法，使您要檢查 URL 是否通過白名單。

13. 設備的 API 更改：
    
    *   Ios，device.platform 用來返回 `iPhone`、 `iPad` 或 `iPod 觸摸` ；現在它 （正確的） 返回 `iOS`.
    *   對於 iOS，device.name (現在適用于所有平臺已棄用) 用於返回使用者的設備的名稱 （例如 Shazron 的 iPhone 5 ′） ；現在它返回用於返回什麼 device.platform： `iPhone`、 `iPad` 或 `iPod 觸摸`.
    *   對於所有的平臺，是一個新的屬性，稱為 device.model ；這將返回特定設備的型號，例如 `iPad2，5` （對於其他平臺，返回用於返回什麼 device.name）。

## 2.2.0 升級 2.1.0 專案

1.  下載並解壓縮到硬碟上，例如對 `~/Documents/Cordova-2.2.0` 的永久目錄位置的科爾多瓦 2.2.0 源.

2.  如果它正在運行，請退出 Xcode。

3.  使用終端程式，定位到你放在上面的下載的源的目錄。

4.  創建一個新專案，如 iOS 殼工具指南中所述。您需要從這個新的專案資產。

5.  從新專案中的 `www/cordova-2.2.0.js` 檔案複製到 `www` 目錄中，並刪除 `www/cordova-2.1.0.js` 檔。

6.  科爾多瓦腳本中 `www/index.html` 檔 （以及包含該腳本引用的任何其他檔） 的引用更新為指向新的 `cordova-2.2.0.js` 檔。

7.  更新 （或替換，如果你永遠不會更改檔） `MainViewController.m` 根據新專案中的一個：
    
    *   更新 → viewWillAppear

8.  將 `cordova` 目錄從新專案複製到您的專案的根目錄。這在 2.2.0，更新後的模仿腳本。

9.  下一步，更新 `CordovaLib` 子專案引用。 開頭科爾多瓦 2.1.0，我們不使用 CORDOVALIB Xcode 變數不再當引用 `CordovaLib` 駐留在何處的引用是絕對檔引用現在。
    
    1.  啟動終端程式
    2.  轉到科爾多瓦的安裝的位置 （見步驟 1），在 `bin` 子目錄中
    3.  運行該腳本下面其中的第一個參數是您的專案 `.xcodeproj` 檔的路徑：
        
        `update_cordova_subproject path/to/your/project/xcodeproj`

**注**： 在 2.2.0，`bin/create` 腳本複製到您的專案 `CordovaLib` 子專案中。 要有同樣的安裝程式，只是將正確的 `CordovaLib` 中複製到專案目錄中，並更新 `CordovaLib` 子專案位置 （相對於專案） 在 Xcode 檔檢查器中。

## 2.1.0 升級 2.0.0 專案

2.1.0 的科爾多瓦，`CordovaLib` 已被升級，從而使用 **自動引用計數 （ARC）**。 你不需要升級到 **弧**，使用 CordovaLib，但如果您想要升級您的專案使用 **弧**，請使用 Xcode 遷移嚮導從功能表中： **編輯 → 重構 → 轉換為目標 C 弧......**，取消選擇 libCordova.a，然後運行該嚮導以完成。

1.  下載並解壓縮到硬碟上，例如對 `~/Documents/Cordova-2.1.0` 的永久目錄位置的科爾多瓦 2.1.0 源.

2.  如果它正在運行，請退出 Xcode。

3.  使用終端程式，定位到的目錄，你把上面的下載的原始程式碼放在哪裡。

4.  創建一個新專案，iOS 殼工具指南中所述。你需要從這個新的專案資產。

5.  從新專案中的 `www/cordova-2.1.0.js` 檔案複製到 `www` 目錄中，並刪除 `www/cordova-2.0.0.js` 檔。

6.  科爾多瓦腳本中 `www/index.html` 檔 （以及包含該腳本引用的任何其他檔） 的引用更新為指向新的 `科爾多瓦 2.1.0.js` 檔。

7.  更新 （或替換，如果你永遠不會更改檔） `AppDelegate.m` 根據新專案中的一個：
    
    *   Edited → application:didFinishLaunchingWithOptions:
    *   Added → application:supportedInterfaceOrientationsForWindow:

8.  更新 （或替換，如果你永遠不會更改檔） `MainViewController.m` 根據新專案中的一個：
    
    *   添加 → viewWillAppear

9.  將 `科爾多瓦` 目錄從新專案複製到您的專案的根目錄。這在 2.1.0，更新的腳本，以支援包含空格的路徑。

10. 從您的專案 （是在 `CordovaLib` 中刪除 `VERSION` 檔引用).

11. 下一步，更新 `CordovaLib` 子專案引用。 開頭科爾多瓦 2.1.0，我們不使用 CORDOVALIB Xcode 變數不再當引用 `CordovaLib` 駐留在何處的引用是絕對檔引用現在。
    
    1.  啟動終端程式
    2.  轉到科爾多瓦的安裝的位置 （見步驟 1），在 `bin` 子目錄中
    3.  運行該腳本下面其中的第一個參數是您的專案 `.xcodeproj` 檔的路徑：
        
        `update_cordova_subproject path/to/your/project/xcodeproj`

## 升級 1.9.0 專案 2.0.0

1.  安裝 2.0.0 科爾多瓦。

2.  創建一個新專案，iOS 殼工具指南中所述。你需要從這個新的專案資產。

3.  從新專案中的 `www/cordova-2.0.0.js` 檔案複製到 `www` 目錄中，並刪除 `www/cordova-1.9.0.js` 檔。

4.  科爾多瓦腳本中 `www/index.html` 檔 （以及包含該腳本引用的任何其他檔） 的引用更新為指向新的 `cordova-2.0.0.js` 檔。

5.  `cordova` 目錄從新專案複製到您的專案的根目錄 （如果你想要的專案的命令列工具）。

6.  在 `Cordova.plist` 檔中，**支援檔** 組下添加一個新條目下 `的外掛程式`。 關鍵是 `key` 和的值是 `CDVDevice`.

7.  刪除 `Cordova.framework`.

8.  從 **支援檔** 組中刪除 `verify.sh`。

9.  在專案導航器中選擇專案圖示，選擇您的專案 **目標**，然後選擇 **生成設置** 選項卡。

10. 搜索 **預處理器宏**，然後刪除所有 **CORDOVA_FRAMEWORK = 1** 值。

11. 找到安裝在您的個人資料夾 `檔` 子目錄下你硬碟上的 `CordovaLib` 目錄。

12. 找到 `CordovaLib.xcodeproj` 檔在 `CordovaLib` 目錄中，然後拖動並將檔放入您的專案。它應該顯示為子專案。

13. 生成您的專案，你應該與有關的 `#import` 指令的一些錯誤。

14. 對於 `#import` 錯誤，更改任何報價基於進口的這種風格：
    
        #import "CDV.h"
        
    
    為此基於方括弧的樣式：
    
        #import <Cordova/CDV.h>
        
    
    刪除任何 `#ifdef` （wrapper 任何科爾多瓦進口，他們再也不需要 （現在統一進口)

15. 再次，生成您的專案，它不應該有任何的 `#import` 錯誤。

16. 在專案導航器中選擇 **專案圖示**，選擇您的專案 **目標**，然後選擇 **生成階段** 選項卡。

17. 擴展 **目標依賴關係** 階段，然後選擇 **+** 按鈕。

18. 選擇 `CordovaLib` 的目標，然後選擇 **添加** 按鈕。

19. 展開 **連結二進位與圖書館** 第一階段 （它應該已經包含大量的框架），然後選擇 **+** 按鈕。

20. 選擇 `libCordova.a` 靜態程式庫，然後選擇 **添加** 按鈕。

21. 刪除 **運行腳本** 階段。

22. 在專案導航器中選擇 **專案圖示**，選擇您的專案 **目標**，然後選擇 **生成設置** 選項卡。

23. 搜索 **其他連結器標誌**，並添加相應的值 **-force_load** 和 **-Obj-C**.

24. 展開的 `CordovaLib` 的子專案。

25. 定位的 `VERSION` 檔，將它拖入主要專案 （我們想要創建連結到它，不是一個副本）。

26. 選擇 **任何添加的資料夾創建組** 的選項按鈕，然後選擇 **完成** 按鈕。

27. 在上一步中選擇您剛剛拖動的 `VERSION` 檔。

28. 鍵入 **選項命令 1** 複合鍵以顯示 **檔檢查器** (或功能表項目 **視圖 → 實用程式 → 顯示檔檢查器**).

29. **相對於 CORDOVALIB** **檔檢查** 器下拉式功能表中選擇 **位置**.

30. 設置 Xcode 偏好 **Xcode 偏好 → 地點 → 派生資料 → 先進......** 了 **獨特** 的發現的統一的標頭。

31. 在專案導航器中選擇 **專案圖示**，選擇你的 **目標**，然後選擇 **生成設置** 選項卡。

32. **標題搜索路徑** 的搜索。該設置將追加這三個值，包括引號：
    
        "$(TARGET_BUILD_DIR)/usr/local/lib/include"
        
        "$(OBJROOT)/UninstalledProducts/include"
        
        "$(BUILT_PRODUCTS_DIR)"
        

33. 搜索 **其他連結器的標誌**。該設置將追加此值：
    
        -weak_framework CoreFoundation
        

34. 生成您的專案，它應編譯和連結 **沒有** 問題.

35. 從 **方案** 下拉式功能表，選擇您的專案，然後選擇 **iPhone 5.1 模擬器**.

36. 選擇 **運行** 按鈕。

**注意**： 如果您的專案預期在模擬器中無法正常工作，請記下任何錯誤主控台日誌中 Xcode 的線索。

## 1.8.x 計畫升級為 1.9.0

1.  安裝科爾多瓦 1.9.0。

2.  創建一個新專案。您將需要的一些資產從這個新的專案。

3.  從新專案中的 `www/cordova-1.9.0.js` 檔案複製到 `www` 目錄中，並刪除 `www/cordova-1.8.x.js` 檔。

4.  科爾多瓦腳本中 `www/index.html` 檔 （以及包含該腳本引用的任何其他檔） 的引用更新為指向新的 `cordova-1.9.0.js` 檔。

**注**： 1.9.0 支援新的 `BackupWebStorage` 布林 `Cordova.plist` 設置。 它預設啟用的所以將其設置為 `false` 以禁用它，尤其是在 iOS 6。 請參閱 [版本資訊： Safari 和 UIKit 科][17]

 [17]: https://developer.apple.com/library/prerelease/ios/#releasenotes/General/RN-iOSSDK-6_0/_index.html

## 1.8.x 升級 1.7.0 以來專案

1.  安裝科爾多瓦 1.8.0。

2.  創建一個新的專案。您將需要一些資產從這個新的專案。

3.  從新專案中的 `www/cordova-1.8.0.js` 檔案複製到 `www` 目錄中，並刪除 `www/cordova-1.7.x.js` 檔。

4.  科爾多瓦腳本中 `www/index.html` 檔 （以及包含該腳本引用的任何其他檔） 的引用更新為指向新的 `科爾多瓦 1.8.0.js` 檔。

如果您打算使用捕獲的 API，您將需要新的 **iPad 視網膜顯示** 資產：

1.  將從新專案的 `Resources/Capture.bundle` 專案複製到您的專案目錄，過度寫您現有的 `Resources/Capture.bundle` 專案。

2.  在您的專案中，選擇 `Capture.bundle` 專案到您專案中 Xcode 的導航器，鍵入 **Delete** 鍵，然後從出現的對話方塊中選擇 **移除引用**。

3.  從上面的步驟 1 中將新 `Capture.bundle` 拖動到 Xcode，你的專案導航器中，然後選擇 **為任何添加的資料夾創建組** 的選項按鈕。

## 1.6.x 專案升級到 1.7.0 以來

1.  安裝科爾多瓦 1.7.0 以來。

2.  創建一個新的專案。您將需要一些資產從這個新的專案。

3.  從新專案中的 `www/cordova-1.7.0.js` 檔案複製到 `www` 目錄中，並刪除 `www/cordova-1.6.0.js` 檔。

4.  科爾多瓦腳本中 `www/index.html` 檔 （以及包含該腳本引用的任何其他檔） 的引用更新為指向新的 `cordova-1.7.0.js` 檔。

## 1.6.x 版升級 1.5.0 專案

1.  安裝 1.6.1 科爾多瓦。

2.  在您的專案製作一個備份的 `AppDelegate.m`、 `AppDelegate.h`、 `MainViewController.m`、 `MainViewController.h`、 `Cordova.plist`。

3.  創建一個新的專案。您將需要一些資產從這個新的專案。

4.  將這些檔從新專案複製到您在磁片上，取代任何舊的檔 （備份您的檔第一次從上述步驟 2） 的 1.5.0-based 專案目錄：
    
        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        Cordova.plist
        

5.  將所有新的 `MainViewController` 和 `AppDelegate` 檔添加到您的 Xcode 專案。

6.  從新專案中的 `www/cordova-1.6.1.js` 檔案複製到 `www` 目錄中，並刪除 `www/cordova-1.5.0.js` 檔。

7.  科爾多瓦腳本中 `www/index.html` 檔 （以及包含該腳本引用的任何其他檔） 的引用更新為指向新的 `cordova-1.6.1.js` 檔。

8.  新的 `Cordova.plist` 檔添加到您的專案中。 這是必要的因為核心外掛程式服務名稱必須更改以匹配那些從 Android 和黑莓，為統一的科爾多瓦 JavaScript 檔 (`cordova-js`).

9.  集成任何設置、 **外掛程式** 和 **ExternalHosts** 的條目，你在你的 **備份 Cordova.plist** `Cordova.plist` 新進.

10. 集成到新的 `AppDelegate` 檔，你有在您的備份 `AppDelegate.h` 和 `AppDelegate.m` 的任何特定于專案的代碼。 `AppDelegate.m` 中的任何 `UIWebViewDelegate` 或 `CDVCommandDelegate` 的代碼需要轉到 `MainViewController.m` 現在 （見該檔中的注釋掉節）。

11. 集成到新的 MainViewController 檔，你有在您的備份 `MainViewController.h` 和 `MainViewController.m` 的任何特定于專案的代碼。

12. 點擊專案導航器中的專案圖示，選擇您的 **專案**，然後選擇 **生成設置** 選項卡。

13. 輸入 **編譯器的 C / C + + 目標 C** 在搜索欄位中。

14. 選擇 **蘋果 LLVM 編譯器 3.1** 值。

## 升級到 1.5.0 版的 1.4.x 專案

1.  安裝科爾多瓦 1.5.0 版。

2.  創建一個新的專案並運行一次。您將需要一些資產從這個新的專案。

3.  從新專案中的 `www/cordova-1.5.0.js` 檔案複製到 `www` 目錄中，並刪除 `www/phonegap-1.4.x.js` 檔。

4.  科爾多瓦腳本中 `www/index.html` 檔 （以及包含該腳本引用的任何其他檔） 的引用更新為指向新的科爾多瓦 `cordova-1.5.0.js` 檔。

5.  在您的專案瀏覽器中找到 `PhoneGap.framework`，請選擇它。

6.  鍵入 **Delete** 鍵，刪除 `PhoneGap.framework` 參考專案導航器中。

7.  鍵入 **選項命令 A** 複合鍵應下拉表將檔添加到您的專案 （**添加檔...** 表）。 請確保選中 **創建組的任何添加的資料夾** 選項按鈕。

8.  鍵入 **轉變-命令-G** 複合鍵應該降下來為你去到一個資料夾中的另一個表 （**轉到資料夾：** 表）。

9.  輸入 `/Users/Shared/Cordova/Frameworks/Cordova.framework` 在 **轉到資料夾：** 表，然後按 **繼續** 按鈕。

10. 在工作表中 **添加的檔......**，請按 **添加** 按鈕。

11. 在專案導航器中選擇 `Cordova.framework`。

12. 鍵入 **選項命令 1** 複合鍵以顯示 **檔檢查器**.

13. **絕對路徑** 的 **檔檢查器** 的下拉式功能表中選擇 **位置**.

14. 鍵入 **選項命令 A** 複合鍵應下拉表將檔添加到您的專案 （**添加檔...** 表）。 請確保選中 **創建組的任何添加的資料夾** 選項按鈕。

15. 鍵入 **轉變-命令-G** 複合鍵應該降下來為你去到一個資料夾中的另一個表 （**轉到資料夾：** 表）。

16. 輸入 `~/Documents/CordovaLib/Classes/deprecated` 在 **轉到資料夾：** 表，然後按 **繼續** 按鈕。

17. 在工作表中 **添加的檔......**，請按 **添加** 按鈕。

18. 在 `AppDelegate.h`，`AppDelegate.m` 和 `MainViewController.h` 檔，替換整個 `#ifdef PHONEGAP_FRAMEWORK` 塊：
    
        #import "CDVDeprecated.h"
        

19. 按一下 **專案圖示** 在專案導航器中，選擇你的 **目標**，然後選擇 **生成設置** 選項卡。

20. 搜索 **框架搜索路徑**.

21. 替換現有 `/Users/Shared/Cordova/Frameworks`.

22. **預處理器宏** 搜索.

23. 對於第一個 （組合） 值，替換的值與 **CORDOVA_FRAMEWORK = YES**.

24. 選擇 **生成階段** 選項卡。

25. 擴展 **運行腳本**.

26. 任何替換 **PhoneGap** 與 **科爾多瓦**.

27. 在專案導航器中找到 `PhoneGap.plist` 檔，然後按一下檔案名一旦進入編輯模式的名稱。

28. 將重命名為 `Cordova.plist` 的 `PhoneGap.plist`.

29. 在 `Cordova.plist` 上右擊並選擇 **打開為 → 原始程式碼**.

30. 請按 **選項-命令-F**，選擇 **替換** 從下拉頂上留下的源視窗。

31. 為查找字串和替換字串中，`org.apache.cordova` 輸入 `com.phonegap`，然後按 **全部替換** 按鈕。

32. **PG** **CDV** 的查找字串輸入替換字串，然後按 **全部替換** 按鈕。

33. 按 **命令 B** 打造。 你仍然有在將來你可以擺脫的用法 （見 `CDVDeprecated.h`。 例如，在代碼中使用 PG * 對犬瘟熱病毒 * 的替換類）。

## 1.4.1 升級 1.4.0 專案

1.  安裝 1.4.1 科爾多瓦。

2.  製作一個備份 `MainViewController.m`.

3.  創建一個新專案。您將需要的一些資產從這個新的專案。

4.  將 `MainViewController.m` 檔從新專案複製到您在磁片上，替換舊檔的 1.4.0-based 專案目錄 （備份您的檔第一次從上面的步驟 2）。

5.  將 `MainViewController.m` 檔添加到您的 Xcode 專案。

6.  整合您有在您備份 `MainViewController.m` 到新檔中的任何特定于專案的代碼。

7.  更新 `phonegap 1.4.0.js` 檔是可選的什麼都沒有改變在 JavaScript 中 1.4.0 和 1.4.1 之間。

## 1.4.0 升級 1.3.0 專案

1.  安裝科爾多瓦 1.4.0。

2.  製作一個備份的 `AppDelegate.m` 和 `AppDelegate.h` 在您的專案中。

3.  創建一個新專案。您將需要的一些資產從這個新的專案。

4.  將這些檔從新專案複製到您在磁片上，取代任何舊的檔 （備份您的檔第一次從上述步驟 2） 的 1.3.0-based 專案目錄：
    
        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        MainViewController.xib
        

5.  添加所有 `MainViewController` 入 Xcode 專案檔案。

6.  從新專案中的 `www/phonegap-1.4.0.js` 檔案複製到 `www` 目錄中，並刪除 `www/phonegap-1.3.0.js` 檔。

7.  科爾多瓦腳本中 `www/index.html` 檔 （以及包含該腳本引用的任何其他檔） 的引用更新為指向新的 `phonegap-1.4.0.js` 檔。

8.  添加一個新條目下的 `Plugins` 的 `PhoneGap.plist` 檔。關鍵是 `com.phonegap.battery` 和值是`PGBattery`.

9.  集成任何您已在您的備份中的具體專案代碼 `AppDelegate.h` 和 `AppDelegate.m` 成新的 AppDelegate 檔。

## 1.3.0 升級 1.2.0 專案

1.  安裝科爾多瓦 1.3.0。

2.  製作一個備份的 `AppDelegate.m` 和 `AppDelegate.h` 在您的專案中。

3.  創建一個新專案。您將需要的一些資產從這個新的專案。

4.  將這些檔從新專案複製到您在磁片上，取代任何舊的檔 （備份您的檔第一次從上述步驟 2） 的 1.2.0-based 專案目錄：
    
        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        MainViewController.xib
        

5.  添加所有 `MainViewController` 入 Xcode 專案檔案。

6.  從新專案中的 `www/phonegap-1.3.0.js` 檔案複製到 `www` 目錄中，並刪除 `www/phonegap-1.2.0.js` 檔。

7.  科爾多瓦腳本中 `www/index.html` 檔 （以及包含該腳本引用的任何其他檔） 的引用更新為指向新的 `phonegap-1.3.0.js` 檔。

8.  添加一個新條目下的 `Plugins` 的 `PhoneGap.plist` 檔。關鍵是 `com.phonegap.battery` 和值是`PGBattery`.

9.  集成任何您已在您的備份中的具體專案代碼 `AppDelegate.h` 和 `AppDelegate.m` 成新的 AppDelegate 檔。

## 1.2.0 升級 1.1.0 專案

1.  安裝科爾多瓦 1.2.0。

2.  製作一個備份的 `AppDelegate.m` 和 `AppDelegate.h` 在您的專案中。

3.  創建一個新專案。您將需要的一些資產從這個新的專案。

4.  將這些檔從新專案複製到您在磁片上，取代任何舊的檔 （備份您的檔第一次從上述步驟 2） 的 1.1.0-based 專案目錄：
    
        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        MainViewController.xib
        

5.  添加所有 `MainViewController` 入 Xcode 專案檔案。

6.  從新專案中的 `www/phonegap-1.2.0.js` 檔案複製到 `www` 目錄中，並刪除 `www/phonegap-1.1.0.js` 檔。

7.  科爾多瓦腳本中 `www/index.html` 檔 （以及包含該腳本引用的任何其他檔） 的引用更新為指向新的 `phonegap-1.2.0.js` 檔。

8.  添加一個新條目下的 `Plugins` 的 `PhoneGap.plist` 檔。關鍵是 `com.phonegap.battery` 和值是`PGBattery`.

9.  集成任何您已在您的備份中的具體專案代碼 `AppDelegate.h` 和 `AppDelegate.m` 成新的 AppDelegate 檔。

## 升級 1.0.0 專案到 1.1.0

1.  安裝科爾多瓦 1.1.0。

2.  製作一個備份的 `AppDelegate.m` 和 `AppDelegate.h` 在您的專案中。

3.  創建一個新專案。您將需要的一些資產從這個新的專案。

4.  將這些檔從新專案複製到您在磁片上，取代任何舊的檔 （備份您的檔第一次從上述步驟 2） 的 1.0.0-based 專案目錄：
    
        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        MainViewController.xib
        

5.  添加所有 `MainViewController` 入 Xcode 專案檔案。

6.  從新專案中的 `www/phonegap-1.1.0.js` 檔案複製到 `www` 目錄中，並刪除 `www/phonegap-1.0.0.js` 檔。

7.  科爾多瓦腳本中 `www/index.html` 檔 （以及包含該腳本引用的任何其他檔） 的引用更新為指向新的 `phonegap-1.1.0.js` 檔。

8.  添加一個新條目下的 `Plugins` 的 `PhoneGap.plist` 檔。關鍵是 `com.phonegap.battery` 和值是`PGBattery`.

9.  集成任何您已在您的備份中的具體專案代碼 `AppDelegate.h` 和 `AppDelegate.m` 成新的 AppDelegate 檔。

## 升級 0.9.6 專案 1.0.0

1.  安裝科爾多瓦 1.0.0。

2.  製作一個備份的 `AppDelegate.m` 和 `AppDelegate.h` 在您的專案中。

3.  創建一個新的專案。您將需要一些資產從這個新的專案。

4.  將這些檔從新專案複製到您在磁片上，取代任何舊的檔 （備份您的檔第一次從上述步驟 2） 的 0.9.6-based 專案目錄：
    
        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        MainViewController.xib
        

5.  在添加了所有 `MainViewController` 檔到您的 Xcode 專案。

6.  從新專案中的 `www/phonegap-1.0.0.js` 檔案複製到 `www` 目錄中，並刪除 `www/phonegap-0.9.6.js` 檔。

7.  科爾多瓦腳本中 `www/index.html` 檔 （以及包含該腳本引用的任何其他檔） 的引用更新為指向新的 `phonegap-1.0.0.js` 檔。

8.  添加一個新條目下的 `Plugins` 的 `PhoneGap.plist` 檔。關鍵是 `com.phonegap.battery` 的值`PGBattery`.

9.  將您在您的備份任何特定于專案的代碼集成 `AppDelegate.h` 和 `AppDelegate.m` 成新的 AppDelegate 檔。