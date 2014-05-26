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

# 升級 iOS

本指南演示如何修改 iOS 專案從科爾多瓦的舊版本進行升級。 大多數這些說明適用于與舊集的前面的命令列工具創建的專案 `cordova` CLI 實用程式。 命令列介面資訊，請參閱如何更新的 CLI 版本。

**注**： Xcode 4.6 必需的推薦 Xcode 5。 目前，以提交到蘋果 App Store，你應使用最新的產品出廠的版本的 iOS SDK，這是 iOS 7。 iOS 7 SDK 尚不需要，但這可能會很快改變。

## 升級 3.1.0 專案到 3.2.0

對於非 CLI 的專案，請運行：

        bin/更新路徑/到專案
    

CLI 的專案：

1.  更新 `cordova` CLI 版本。請參閱命令列介面。

2.  運行`cordova platform update ios`

## 升級 3.0.0 專案到 3.1.0

對於非 CLI 的專案，請運行：

        bin/更新路徑/到專案
    

CLI 的專案：

1.  更新 `cordova` CLI 版本。請參閱命令列介面。

2.  運行`cordova platform update ios`

iOS 7 的問題：

1.  刪除 `width=device-width, height=device-height` 從 `index.html` 檔的 `viewport` `meta` 標記。 （請參見[相關 bug][1].)

2.  更新你的 iOS 7 支援的媒體、 媒體捕獲和閃屏核心外掛程式。

 [1]: https://issues.apache.org/jira/browse/CB-4323

Xcode 5 的問題：

1.  如果 Xcode 5 提示您這樣做 （在問題導航器），請更新您的專案設置。

2.  更新您**編譯器的 C / C + + / 目標 C**根據**生成設置**選項卡，設置**生成選項**一節。 選擇**預設編譯器 （蘋果 LLVM 5.0）**.

## 從 2.9.0 升級到 CLI （3.0.0)

1.  創建新的 Apache 科爾多瓦 3.0.0 專案使用 CLI，科爾多瓦，如所述的命令列介面。

2.  添加您的平臺到科爾多瓦專案中，例如：`cordova
platform add ios`.

3.  該專案的內容複寫 `www` 目錄到 `www` 目錄在您剛剛創建的科爾多瓦專案的根目錄。

4.  複製或覆蓋任何本機資產從原始專案 （ `Resources` 等），這讓肯定要添加任何新檔到 `.xcodeproj` 專案。 IOS 專案內生成 `platforms\ios` 目錄。

5.  複製您 `config.xml` 到 `www` 目錄中，並刪除任何外掛程式定義。修改設置在這裡而不是平臺目錄。

6.  使用科爾多瓦 CLI 工具來安裝您需要的任何外掛程式。請注意 CLI 處理所有核心 Api 作為外掛程式，所以他們可能需要添加。只有 3.0.0 外掛程式是與 CLI 相容。

7.  生成並測試。

## 升級 2.9.0 專案到 3.0.0

1.  下載並解壓縮到您的硬碟磁碟機上的永久目錄位置的科爾多瓦 3.0.0 源，例如到`~/Documents/Cordova-3.0.0`.

2.  如果它正在運行，請退出 Xcode。

3.  使用終端程式，定位到你放在上面的下載的源的目錄。

4.  創建一個新專案，如 iOS 命令列工具中所述。您需要從這個新的專案資產。

5.  複製 `www/cordova.js` （注意它再也沒有一個版本尾碼，該版本是在該檔本身在標題中） 到新專案中的檔您 `www` 目錄中，並刪除您 `www/cordova.js` 檔。

6.  更新中的科爾多瓦腳本引用您 `www/index.html` 檔 （以及包含該腳本引用的任何其他檔） 以指向新 `cordova.js` 檔。

7.  刪除您 `CordovaLib` 目錄和副本 `CordovaLib` 目錄從新專案到專案的根目錄。

**注意**： 從開始科爾多瓦 3.0.0，不預先安裝外掛程式，和你需要使用 `plugman` 命令列實用程式來安裝它們自己。 請參閱使用 Plugman 管理外掛程式。

## 升級 2.8.0 專案到 2.9.0

1.  下載並解壓縮到您的硬碟磁碟機上的永久目錄位置的科爾多瓦 2.9.0 源，例如到`~/Documents/Cordova-2.9.0`.

2.  如果它正在運行，請退出 Xcode。

3.  使用終端程式，定位到你放在上面的下載的源的目錄。

4.  創建一個新專案，如 iOS 命令列工具中所述。您需要從這個新的專案資產。

5.  複製 `www/cordova.js` （注意它再也沒有一個版本尾碼，該版本是在該檔本身在標題中） 到新專案中的檔您 `www` 目錄中，並刪除您 `www/cordova.js` 檔。

6.  更新中的科爾多瓦腳本引用您 `www/index.html` 檔 （以及包含該腳本引用的任何其他檔） 以指向新 `cordova.js` 檔。

7.  刪除您 `CordovaLib` 目錄和副本 `CordovaLib` 目錄從新專案到專案的根目錄。

## 升級 2.7.0 專案到 2.8.0

1.  下載並解壓縮到您的硬碟磁碟機上的永久目錄位置的科爾多瓦 2.8.0 源，例如到`~/Documents/Cordova-2.8.0`.

2.  如果它正在運行，請退出 Xcode。

3.  使用終端程式，定位到你放在上面的下載的源的目錄。

4.  創建一個新專案，如 iOS 命令列工具中所述。您需要從這個新的專案資產。

5.  複製 `www/cordova.js` （注意它再也沒有一個版本尾碼，該版本是在該檔本身在標題中） 到新專案中的檔您 `www` 目錄中，並刪除您 `www/cordova-2.7.0.js` 檔。

6.  更新中的科爾多瓦腳本引用您 `www/index.html` 檔 （以及包含該腳本引用的任何其他檔） 以指向新 `cordova.js` 檔。

7.  更新任何 `<plugin>` 標籤在 `config.xml` 檔到 `<feature>` 標籤。 注意，現有 `<plugin>` 標籤仍正常工作，但都被否決了。 您可以複製此資訊在 `config.xml` 檔的一個新的專案。 例如：
    
        <plugins>
            <plugin name="LocalStorage" value="CDVLocalStorage" />
            <!-- other plugins -->
        </plugins>
        
        <!-- change to: (note that a <feature> tag is on the same level as <plugins> -->
        <feature name="LocalStorage">
            <param name="ios-package" value="CDVLocalStorage" />
        </feature>
        <!-- other <feature> tags -->
        

8.  刪除 `CordovaLib` 目錄和副本 `CordovaLib` 目錄從新專案到專案的根目錄。

9.  將這兩個框架添加到您的專案：
    
        OpenAL ImageIO
        

10. 更新您的專案目標**生成設置**。編輯**"-Obj-C"**要下**連結 → 其他連結器標誌**， **"-ObjC"**.

11. 更新您的專案目標**生成設置**。 在**連結 → 其他連結器標誌**，更改**"-all_load"**是 `-force\_load ${BUILT\_PRODUCTS\_DIR}/libCordova.a` 。 你只需要這樣做，如果你有在中定義的問題[這一問題。][2].

 [2]: https://issues.apache.org/jira/browse/CB-3458

## 升級 2.6.0 專案到 2.7.0

1.  下載並解壓縮到您的硬碟磁碟機上的永久目錄位置的科爾多瓦 2.7.0 源，例如到`~/Documents/Cordova-2.7.0`.

2.  如果它正在運行，請退出 Xcode。

3.  使用終端程式，定位到你放在上面的下載的源的目錄。

4.  創建一個新專案，如 iOS 命令列工具中所述。您需要從這個新的專案資產。

5.  複製 `www/cordova-2.7.0.js` 到新專案中的檔您 `www` 目錄中，並刪除您 `www/cordova-2.6.0.js` 檔。

6.  更新中的科爾多瓦腳本引用您 `www/index.html` 檔 （以及包含該腳本引用的任何其他檔） 以指向新 `cordova-2.7.0.js` 檔。

7.  更新 （或如果您從未更改該檔替換） 您 `AppDelegate.m` 檔根據您從新專案 (見[此比較][3]).

8.  在您 `config.xml` 檔，[刪除這條線][4].

9.  刪除您 `CordovaLib` 目錄和副本 `CordovaLib` 目錄從新專案到專案的根目錄。

 [3]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=5c05ac80e056753c0e8736f887ba9f28d5b0774c;hp=623ad8ec3c46f656ea18c6c3a190d650dd64e479;hb=c6e71147386d4ad94b07428952d1aae0a9cbf3f5;hpb=c017fda8af00375a453cf27cfc488647972e9a23
 [4]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=537705d76a5ef6bc5e57a8ebfcab78c02bb4110b;hp=8889726d9a8f8c530fe1371c56d858c34552992a;hb=064239b7b5fa9a867144cf1ee8b2fb798ce1f988;hpb=c9f233250d4b800f3412eeded811daaafb17b2cc

## 升級 2.5.0 專案到 2.6.0

1.  下載並解壓縮到您的硬碟磁碟機上的永久目錄位置的科爾多瓦 2.6.0 源，例如到`~/Documents/Cordova-2.6.0`.

2.  如果它正在運行，請退出 Xcode。

3.  使用終端程式，定位到你放在上面的下載的源的目錄。

4.  創建一個新專案，如 iOS 命令列工具中所述。您需要從這個新的專案資產。

5.  複製專案的 `www/cordova-2.6.0.js` 檔到您 `www` 目錄中，並刪除您 `www/cordova-2.5.0.js` 檔。

6.  更新中的科爾多瓦腳本引用您 `www/index.html` 檔 （以及引用的腳本的任何其他檔） 來引用到新的 `cordova-2.6.0.js` 檔。

7.  更新 （或如果您從未更改該檔替換） 您 `AppDelegate.m` 檔根據您從新專案 (見[此比較][5]).

8.  在您 `config.xml` 檔，[添加此新行][6].

9.  在您 `config.xml` 檔，[添加此新行][7].

10. 在您 `config.xml` 檔， [UIWebViewBounce 已改為 DisallowOverscroll，和預設值都不同][8].

11. 在您 `config.xml` 檔， `EnableLocation` 首選項已被否決。

12. 刪除您 `CordovaLib` 目錄和副本 `CordovaLib` 目錄從新專案到專案的根目錄。

 [5]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=124a56bb4f361e95616f44d6d6f5a96ffa439b60;hp=318f79326176be8f16ebc93bad85dd745f4205b6;hb=a28c7712810a63396e9f32fa4eb94fe3f8b93985;hpb=36acdf55e4cab52802d73764c8a4b5b42cf18ef9
 [6]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=1555b5e81de326a07efe0bccaa5f5e2326b07a9a;hp=0652d60f8d35ac13c825c572dca6ed01fea4a540;hb=95f16a6dc252db0299b8e2bb53797995b1e39aa1;hpb=a2de90b8f5f5f68bd9520bcbbb9afa3ac409b96d
 [7]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=d307827b7e67301171a913417fb10003d43ce39d;hp=04260aa9786d6d74ab20a07c86d7e8b34e31968c;hb=97b89edfae3527828c0ca6bb2f6d58d9ded95188;hpb=942d33c8e7174a5766029ea1232ba2e0df745c3f
 [8]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=8889726d9a8f8c530fe1371c56d858c34552992a;hp=d307827b7e67301171a913417fb10003d43ce39d;hb=57982de638a4dce6ae130a26662591741b065f00;hpb=ec411f18309d577b4debefd9a2f085ba719701d5

## 升級 2.4.0 專案到 2.5.0

1.  下載並解壓縮到您的硬碟磁碟機上的永久目錄位置的科爾多瓦 2.5.0 源，例如到`~/Documents/Cordova-2.5.0`.

2.  如果它正在運行，請退出 Xcode。

3.  使用終端程式，定位到你放在上面的下載的源的目錄。

4.  創建一個新專案，如 iOS 命令列工具中所述。您需要從這個新的專案資產。

5.  複製 `www/cordova-2.5.0.js` 到新專案中的檔您 `www` 目錄並刪除您 `www/cordova-2.4.0.js` 檔。

6.  更新中的科爾多瓦腳本引用您 `www/index.html` 檔 （以及包含該腳本引用的任何其他檔） 以指向新 `cordova-2.5.0.js` 檔。

7.  更新 （或如果您從未更改該檔替換） 您 `AppDelegate.m` 檔根據您從新專案 (見[此比較][9]).

8.  在您 `config.xml` 檔，[添加這些新行][10].

9.  在您 `config.xml` 檔，[編輯的根項目，更改它從科爾多瓦到構件][11].

10. 在您 `config.xml` 檔，[刪除 OpenAllWhitelistURLsInWebView 首選項][12].

11. 刪除您 `cordova` 目錄和副本 `cordova` 目錄從新專案到專案的根目錄。在 2.5.0，這已更新腳本。

12. 刪除您 `CordovaLib` 目錄和副本 `CordovaLib` 目錄從新專案到專案的根目錄。

 [9]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=318f79326176be8f16ebc93bad85dd745f4205b6;hp=6dc7bfc84f0ecede4cc43d2a3256ef7c5383b9fe;hb=4001ae13fcb1fcbe73168327630fbc0ce44703d0;hpb=299a324e8c30065fc4511c1fe59c6515d4842f09
 [10]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=903944c4b1e58575295c820e154be2f5f09e6314;hp=721c734120b13004a4a543ee25f4287e541f34be;hb=ae467249b4a256bd31ee89aea7a06f4f2316b8ac;hpb=9e39f7ef8096fb15b38121ab0e245a3a958d9cbb
 [11]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=64e71636f5dd79fa0978a97b9ff5aa3860a493f5;hp=d8579352dfb21c14e5748e09b2cf3f4396450163;hb=0e711f8d09377a7ac10ff6be4ec17d22cdbee88d;hpb=57c3c082ed9be41c0588d0d63a1d2bfcd2ed878c
 [12]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=721c734120b13004a4a543ee25f4287e541f34be;hp=7d67508b70914aa921a16e79f79c00512502a8b6;hb=187bf21b308551bfb4b98b1a5e11edf04f699791;hpb=03b8854bdf039bcefbe0212db937abd81ac675e4

## 升級 2.3.0 專案到 2.4.0

1.  下載並解壓縮到您的硬碟磁碟機上的永久目錄位置的科爾多瓦 2.4.0 源，例如到`~/Documents/Cordova-2.4.0`.

2.  如果它正在運行，請退出 Xcode。

3.  使用終端程式，定位到你放在上面的下載的源的目錄。

4.  創建一個新專案，如 iOS 命令列工具中所述。您需要從這個新的專案資產。

5.  複製 `www/cordova-2.4.0.js` 到新專案中的檔您 `www` 目錄中，並刪除您 `www/cordova-2.3.0.js` 檔。

6.  更新中的科爾多瓦腳本引用您 `www/index.html` 檔 （以及包含該腳本引用的任何其他檔） 以指向新 `cordova-2.4.0.js` 檔。

7.  更新 （或替換，如果您從未更改檔） 您 `MainViewController.m` 檔根據您從新專案 (見[此比較][13]).

8.  更新 （或如果您從未更改該檔替換） 您 `AppDelegate.m` 檔根據您從新專案 (見[此比較][14]).

9.  在您 `config.xml` 檔，[添加此新行][15].

10. 刪除您 `cordova` 目錄和副本 `cordova` 目錄從新專案到專案的根目錄。在 2.4.0，這已固定的腳本。

11. 刪除您 `CordovaLib` 目錄和副本 `CordovaLib` 目錄從新專案到專案的根目錄。

12. AssetsLibrary.framework 作為資源添加到專案中。 （參見[蘋果的文檔][16]有關如何執行此操作的說明.）。

 [13]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/MainViewController.m;h=5f9eeac15c2437cd02a6eb5835b48374e9b94100;hp=89da1082d06ba5e5d0dffc5b2e75a3a06d5c2aa6;hb=b4a2e4ae0445ba7aec788090dce9b822d67edfd8;hpb=a484850f4610e73c7b20cd429a7794ba829ec997
 [14]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=6dc7bfc84f0ecede4cc43d2a3256ef7c5383b9fe;hp=1ca3dafeb354c4442b7e149da4f281675aa6b740;hb=6749c17640c5fed8a7d3a0b9cca204b89a855baa;hpb=deabeeb6fcb35bac9360b053c8bf902b45e6de4d
 [15]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=7d67508b70914aa921a16e79f79c00512502a8b6;hp=337d38da6f40c7432b0bce05aa3281d797eec40a;hb=6749c17640c5fed8a7d3a0b9cca204b89a855baa;hpb=deabeeb6fcb35bac9360b053c8bf902b45e6de4d
 [16]: https://developer.apple.com/library/ios/#recipes/xcode_help-project_editor/Articles/AddingaLibrarytoaTarget.html

## 升級 2.2.0 專案到 2.3.0

1.  下載並解壓縮到您的硬碟磁碟機上的永久目錄位置的科爾多瓦 2.3.0 源，例如到`~/Documents/Cordova-2.3.0`.

2.  如果它正在運行，請退出 Xcode。

3.  使用終端程式，定位到你放在上面的下載的源的目錄。

4.  創建一個新專案，如 iOS 命令列工具中所述。您需要從這個新的專案資產。

5.  複製 `www/cordova-2.3.0.js` 到新專案中的檔您 `www` 目錄中，並刪除您 `www/cordova-2.2.0.js` 檔。

6.  更新中的科爾多瓦腳本引用您 `www/index.html` 檔 （以及包含該腳本引用的任何其他檔） 以指向新 `cordova-2.3.0.js` 檔。

7.  更新 （或如果您從未更改該檔替換） 您 `MainViewController.m` 根據新專案中的一個。

8.  刪除您 `cordova` 目錄和副本 `cordova` 目錄從新專案到專案的根目錄。2.3.0，在這新的腳本。

9.  刪除您 `CordovaLib` 目錄和副本 `CordovaLib` 目錄從新專案到專案的根目錄。

10. 轉換您 `Cordova.plist` 檔為 `config.xml` ，通過運行腳本 `bin/cordova\_plist\_to\_config\_xml` 對您的專案檔案。

11. 添加到 InAppBrowser 外掛程式你 `config.xml` ，通過添加此標記下的 `<cordova><plugins>` ：
    
        < 外掛程式名稱 = 值"InAppBrowser"="CDVInAppBrowser"/ >
        

12. 請注意目標 C 外掛程式*不*列入白名單了。 到白名單中您的連接與應用程式白名單中，您需要設置 `User-Agent` 連接到同一個使用者代理作為主要的科爾多瓦 web 視圖的標題。 你可以通過訪問 `userAgent` 關閉主視圖-控制器屬性。 主視圖-控制器 ( `CDVViewController` ) 也有 `URLisAllowed` 為您檢查是否一個 URL 通過白名單中的方法。

13. 設備的 API 更改：
    
    *   Ios，device.platform 用於返回 `iPhone` ， `iPad` 或 `iPod Touch` ； 現在它返回 （正確）`iOS`.
    *   對於 iOS，device.name (現已被否決所有平臺) 用於返回使用者的設備的名稱 （例如 Shazron 的 iPhone 5 ′) ；現在它返回用於返回什麼 device.platform： `iPhone` ， `iPad` 或`iPod Touch`.
    *   對於所有平臺，有一個名為 device.model ； 的新屬性這將返回特定的設備模型，例如： `iPad2,5` （對於其他平臺，返回用於返回什麼 device.name）。

## 升級 2.1.0 專案到 2.2.0

1.  下載並解壓縮到您的硬碟磁碟機上的永久目錄位置的科爾多瓦 2.2.0 源，例如到`~/Documents/Cordova-2.2.0`.

2.  如果它正在運行，請退出 Xcode。

3.  使用終端程式，定位到你放在上面的下載的源的目錄。

4.  創建一個新專案，如 iOS 命令列工具中所述。您需要從這個新的專案資產。

5.  複製 `www/cordova-2.2.0.js` 到新專案中的檔您 `www` 目錄中，並刪除您 `www/cordova-2.1.0.js` 檔。

6.  更新中的科爾多瓦腳本引用您 `www/index.html` 檔 （以及包含該腳本引用的任何其他檔） 以指向新 `cordova-2.2.0.js` 檔。

7.  更新 （或如果您從未更改該檔替換） 您 `MainViewController.m` 根據新專案中的一個：
    
    *   更新 → viewWillAppear

8.  複製 `cordova` 目錄從新專案到專案的根目錄。在 2.2.0，這有更新的 '模仿' 腳本。

9.  下一步，更新您 `CordovaLib` 分專案的引用。 從科爾多瓦 2.1.0 開始，我們 CORDOVALIB Xcode 變數不再使用引用的位置時 `CordovaLib` 駐留，引用現在是絕對檔引用。
    
    1.  啟動終端程式
    2.  轉到您安裝科爾多瓦的位置 （請參見步驟 1）、 在 `bin` 子目錄
    3.  運行下面的腳本，其中第一個參數是您的專案的路徑 `.xcodeproj` 檔：
        
        `update_cordova_subproject path/to/your/project/xcodeproj`

**注**： 在 2.2.0， `bin/create` 腳本中的副本 `CordovaLib` 分專案到您的專案。 要有相同種類的安裝程式，只是複製權在 `CordovaLib` 到你的專案目錄和更新 `CordovaLib` 分專案 （相對於專案) 在 Xcode 檔檢查器中的位置。

## 升級 2.0.0 專案到 2.1.0

與科爾多瓦 2.1.0， `CordovaLib` 已升級為使用**自動引用計數 (弧)**。 你不需要升級到**弧**要使用 CordovaLib，但是如果你想要升級您的專案使用**弧**，請使用 Xcode 遷移嚮導從功能表中：**編輯 → 重構 → 轉換為目標 C 弧...**，取消選擇 libCordova.a，然後運行嚮導完成。

1.  下載並解壓縮到您的硬碟磁碟機上的永久目錄位置的科爾多瓦 2.1.0 源，例如到`~/Documents/Cordova-2.1.0`.

2.  如果它正在運行，請退出 Xcode。

3.  使用終端程式，定位到你放在上面的下載的源的目錄。

4.  創建一個新專案，如 iOS 命令列工具中所述。您需要從這個新的專案資產。

5.  複製 `www/cordova-2.1.0.js` 到新專案中的檔您 `www` 目錄中，並刪除您 `www/cordova-2.0.0.js` 檔。

6.  更新中的科爾多瓦腳本引用您 `www/index.html` 檔 （以及包含該腳本引用的任何其他檔） 以指向新 `cordova-2.1.0.js` 檔。

7.  更新 （或如果您從未更改該檔替換） 您 `AppDelegate.m` 根據新專案中的一個：
    
    *   編輯 → 應用程式： didFinishLaunchingWithOptions：
    *   添加 → 應用程式： supportedInterfaceOrientationsForWindow：

8.  更新 （或如果您從未更改該檔替換） 您 `MainViewController.m` 根據新專案中的一個：
    
    *   添加 → viewWillAppear

9.  複製 `cordova` 目錄從新專案到專案的根目錄。在 2.1.0，這有更新的腳本，支援帶空格的路徑。

10. 刪除 `VERSION` 檔從您的專案參考 （**是在`CordovaLib`).

11. 下一步，更新您 `CordovaLib` 分專案的引用。 從科爾多瓦 2.1.0 開始，我們 CORDOVALIB Xcode 變數不再使用引用的位置時 `CordovaLib` 駐留，引用現在是絕對檔引用。
    
    1.  啟動終端程式
    2.  轉到您安裝科爾多瓦的位置 （請參見步驟 1）、 在 `bin` 子目錄
    3.  運行下面的腳本，其中第一個參數是您的專案的路徑 `.xcodeproj` 檔：
        
        `update_cordova_subproject 路徑/為/您/專案/xcodeproj`

## 升級 1.9.0 專案到 2.0.0

1.  安裝 2.0.0 科爾多瓦。

2.  創建一個新專案，如 iOS 命令列工具中所述。您需要從這個新的專案資產。

3.  複製 `www/cordova-2.0.0.js` 到新專案中的檔您 `www` 目錄中，並刪除您 `www/cordova-1.9.0.js` 檔。

4.  更新中的科爾多瓦腳本引用您 `www/index.html` 檔 （以及包含該腳本引用的任何其他檔） 以指向新 `cordova-2.0.0.js` 檔。

5.  複製 `cordova` 目錄從新專案到專案的根目錄 （如果你想要的專案的命令列工具)。

6.  添加一個新條目下的 `Plugins` 在你 `Cordova.plist` 下**支援檔**組的檔。 關鍵是 `Device` 和值是`CDVDevice`.

7.  刪除`Cordova.framework`.

8.  刪除 `verify.sh` 從**支援檔**組。

9.  在專案導航器中選擇專案圖示，選擇您的專案**目標**，然後選擇**生成設置**選項卡。

10. 搜索**預處理器宏**，然後刪除所有**CORDOVA_FRAMEWORK = 1**值。

11. 找到 `CordovaLib` 安裝在您的硬碟-上根據您的個人資料夾中的目錄 `Documents` 子目錄。

12. 找到 `CordovaLib.xcodeproj` 檔在 `CordovaLib` 目錄中，然後拖放到您的專案檔案。它應顯示作為子專案。

13. 構建您的專案，你應該與有關的一些錯誤 `#import` 指令。

14. 為 `#import` 的錯誤，改變這種風格在任何基於報價進口：
    
        #import "CDV.h"
        
    
    為此基於方括弧中的樣式：
    
        #import <Cordova/CDV.h>
        
    
    和刪除任何 `#ifdef` 任何科爾多瓦的包裝進口，他們再也不需要 （現在統一進口)

15. 再次，生成您的專案和它不應具有任何 `#import` 的錯誤。

16. 在專案導航器中選擇**專案圖示**，選擇您的專案**目標**，然後選擇**生成階段**選項卡。

17. 展開**目標依賴項**階段，然後選擇**+**按鈕。

18. 選擇 `CordovaLib` 的目標，然後選擇**添加**按鈕。

19. 展開**連結二進位與圖書館**的第一階段，（它應該已經包含框架的一群），然後選擇**+**按鈕。

20. 選擇 `libCordova.a` 靜態程式庫，然後選擇**添加**按鈕。

21. 刪除**運行腳本**階段。

22. 在專案導航器中選擇**專案圖示**，選擇您的專案**目標**，然後選擇**生成設置**選項卡。

23. 搜索**其他的連結器標誌**，並添加相應的值**-force_load**和**-Obj C**.

24. 擴大 `CordovaLib` 子專案。

25. 找到 `VERSION` 檔，將它拖動到您 （我們想要創建一個連結到它，不是副本） 的主專案。

26. 選擇**創建組的任何添加的資料夾**選項按鈕，然後選擇**完成**按鈕。

27. 選擇 `VERSION` 檔，你只是被拖上一步中。

28. 鍵入**選項-命令-1**鍵的組合，以顯示**檔檢查器**(或功能表項目**查看 → 實用程式 → 顯示檔檢查器**).

29. 選擇**相對於 CORDOVALIB** **檔檢查器**器下拉式功能表中的**位置**.

30. 設置為**獨特**，這樣才可以找到統一標頭的 Xcode 偏好**Xcode 首選項 → 位置 → 派生資料 → 先進的......** 。

31. 在專案導航器中選擇**專案圖示**，選擇你的**目標**，然後選擇**生成設置**選項卡。

32. 搜索**標題搜索路徑**。該設置將追加這三個值，包括引號：
    
        "$(TARGET_BUILD_DIR)/usr/local/lib/include"
        
        "$(OBJROOT)/UninstalledProducts/include"
        
        "$(BUILT_PRODUCTS_DIR)"
        

33. 搜索**其他連結器標誌**。該設置將追加此值：
    
        -weak_framework CoreFoundation
        

34. 生成您的專案，它應編譯和連結**沒有**問題.

35. 從該**計畫**下拉箭頭，選擇您的專案，然後選擇**iPhone 5.1 模擬器**.

36. 選擇**運行**按鈕。

**注**： 如果您的專案不預期正常工作在模擬器中，請注意任何錯誤的主控台日誌中 Xcode 的線索。

## 1.8.X 專案升級到 1.9.0

1.  安裝包 1.9.0 科爾多瓦。

2.  創建一個新專案。您將需要的一些資產從這個新的專案。

3.  複製 `www/cordova-1.9.0.js` 到新專案中的檔您 `www` 目錄中，並刪除您 `www/cordova-1.8.x.js` 檔。

4.  更新中的科爾多瓦腳本引用您 `www/index.html` 檔 （以及包含該腳本引用的任何其他檔） 以指向新 `cordova-1.9.0.js` 檔。

**注**： 1.9.0 支援新 `BackupWebStorage` 布林 `Cordova.plist` 設置。 它預設啟用的那麼將其設置為 `false` ，禁用它，尤其是在 iOS 6 上。 請參閱[版本資訊： 野生動物園和 UIKit 科][17]

 [17]: https://developer.apple.com/library/prerelease/ios/#releasenotes/General/RN-iOSSDK-6_0/_index.html

## 升級 1.7.0 專案到 1.8.x

1.  安裝 1.8.0 科爾多瓦。

2.  創建一個新專案。您將需要的一些資產從這個新的專案。

3.  複製 `www/cordova-1.8.0.js` 到新專案中的檔您 `www` 目錄中，並刪除您 `www/cordova-1.7.x.js` 檔。

4.  更新中的科爾多瓦腳本引用您 `www/index.html` 檔 （以及包含該腳本引用的任何其他檔） 以指向新 `cordova-1.8.0.js` 檔。

如果您打算使用捕獲 API，您將需要在新的**iPad 視網膜顯示**資產：

1.  複製 `Resources/Capture.bundle` 從新專案到專案目錄中，覆蓋您現有的專案 `Resources/Capture.bundle` 專案。

2.  在您的專案中選擇 `Capture.bundle` 專案到您的專案在 Xcode 中導航，鍵入**Delete**鍵，然後從出現的對話方塊中選擇**移除引用**。

3.  拖動新 `Capture.bundle` 從步驟 1 以上到您專案中 Xcode 導航器，然後選擇**創建組的任何添加的資料夾**選項按鈕。

## 升級到 1.7.0 的 1.6.x 專案

1.  安裝科爾多瓦 1.7.0。

2.  創建一個新專案。您將需要的一些資產從這個新的專案。

3.  複製 `www/cordova-1.7.0.js` 到新專案中的檔您 `www` 目錄中，並刪除您 `www/cordova-1.6.0.js` 檔。

4.  更新中的科爾多瓦腳本引用您 `www/index.html` 檔 （以及包含該腳本引用的任何其他檔） 以指向新 `cordova-1.7.0.js` 檔。

## 升級 1.5.0 專案到 1.6.x

1.  安裝 1.6.1 科爾多瓦。

2.  創建的備份， `AppDelegate.m` ， `AppDelegate.h` ， `MainViewController.m` ， `MainViewController.h` ，和 `Cordova.plist` 在您的專案中。

3.  創建一個新專案。您將需要的一些資產從這個新的專案。

4.  將這些檔從新專案複製到您的 1.5.0-based 專案目錄在磁片上，取代任何舊的檔 （備份您的檔首次從上述步驟 2）：
    
        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        Cordova.plist
        

5.  添加所有新的 `MainViewController` 和 `AppDelegate` 檔，放入您的 Xcode 專案。

6.  複製 `www/cordova-1.6.1.js` 到新專案中的檔您 `www` 目錄中，並刪除您 `www/cordova-1.5.0.js` 檔。

7.  更新中的科爾多瓦腳本引用您 `www/index.html` 檔 （以及包含該腳本引用的任何其他檔） 以指向新 `cordova-1.6.1.js` 檔。

8.  添加新的 `Cordova.plist` 檔到您的專案。 這是必要的因為核心外掛程式服務名稱必須更改以匹配為一個統一的科爾多瓦 JavaScript 檔 (從 Android 和黑莓，部分`cordova-js`).

9.  集成任何設置，你在你的**備份 Cordova.plist**成新的**外掛程式**和**ExternalHosts**條目`Cordova.plist`.

10. 集成任何您已在您的備份中的具體專案代碼 `AppDelegate.h` 和 `AppDelegate.m` 成新 `AppDelegate` 檔。 任何 `UIWebViewDelegate` 或 `CDVCommandDelegate` 中的代碼 `AppDelegate.m` 需要去到 `MainViewController.m` 現在 （見該檔中的注釋掉節）。

11. 集成任何您已在您的備份中的具體專案代碼 `MainViewController.h` 和 `MainViewController.m` 成新的 MainViewController 檔。

12. 在專案導航器中的專案圖示上按一下，選擇您的**專案**，然後選擇**生成設置**選項卡。

13. 輸入**編譯器的 C / C + + / 目標 C**在搜索欄位中。

14. 選擇**蘋果 LLVM 編譯器 3.1**的值。

## 升級到 1.5.0 版的 1.4.x 專案

1.  安裝科爾多瓦 1.5.0 版。

2.  創建一個新的專案並運行一次。您將需要的一些資產從這個新的專案。

3.  複製 `www/cordova-1.5.0.js` 到新專案中的檔您 `www` 目錄中，並刪除您 `www/phonegap-1.4.x.js` 檔。

4.  更新中的科爾多瓦腳本引用您 `www/index.html` 檔 （以及包含該腳本引用的任何其他檔） 以指向新的科爾多瓦 `cordova-1.5.0.js` 檔。

5.  找到 `PhoneGap.framework` 在你專案導航器中選擇它。

6.  鍵入**Delete**鍵，刪除 `PhoneGap.framework` 專案導航器中的引用。

7.  鍵入**選項-命令-A**複合鍵，應下拉表將檔添加到您的專案 （**添加檔...**表）。 請確保選中**創建組的任何添加的資料夾**選項按鈕。

8.  鍵入的**Shift-命令-G**鍵組合，應下拉你去到一個資料夾中的另一個工作表 （**轉到資料夾：**表）。

9.  輸入 `/Users/Shared/Cordova/Frameworks/Cordova.framework` 在**轉到資料夾：**工作表，然後按**繼續**按鈕。

10. 在工作表中**添加的檔......** ，請按**添加**按鈕。

11. 選擇 `Cordova.framework` 專案導航器中。

12. 鍵入**選項-命令-1**鍵的組合，以顯示**檔檢查器**.

13. **絕對路徑**在**檔檢查器**的下拉式功能表中選擇的**位置**.

14. 鍵入**選項-命令-A**複合鍵，應下拉表將檔添加到您的專案 （**添加檔...**表）。 請確保選中**創建組的任何添加的資料夾**選項按鈕。

15. 鍵入的**Shift-命令-G**鍵組合，應下拉你去到一個資料夾中的另一個工作表 （**轉到資料夾：**表）。

16. 輸入 `~/Documents/CordovaLib/Classes/deprecated` 在**轉到資料夾：**工作表，然後按**繼續**按鈕。

17. 在工作表中**添加的檔......** ，請按**添加**按鈕。

18. 在你 `AppDelegate.h` ， `AppDelegate.m` ，和 `MainViewController.h` 檔，替換整個 `#ifdef PHONEGAP_FRAMEWORK` 與塊：
    
        #import"CDVDeprecated.h"
        

19. 按一下專案導航器中的**專案圖示**，選擇你的**目標**，然後選擇**生成設置**選項卡。

20. **框架搜索路徑**搜索.

21. 替換現有值與`/Users/Shared/Cordova/Frameworks`.

22. 搜索**預處理器宏**.

23. 對於第一次 （組合） 值，替換的值與**CORDOVA_FRAMEWORK = YES**.

24. 選擇**生成階段**選項卡。

25. 擴大**運行腳本**.

26. 與**科爾多瓦**的**PhoneGap**任何替換.

27. 找到您 `PhoneGap.plist` 檔在專案導航器，並按一下檔案名一旦輸入名稱編輯模式。

28. 重命名 `PhoneGap.plist` 到`Cordova.plist`.

29. 用滑鼠右鍵按一下 `Cordova.plist` ，然後選擇**→ 作為開放源碼的代碼**.

30. 按**選項-命令-F**，選擇**替換**從下拉在上面留下的源視窗。

31. 輸入 `com.phonegap` 查找字串，和 `org.apache.cordova` 的替換字串，然後按**全部替換**按鈕。

32. 查找字串和**CDV**的**PG**輸入替換字串，然後按**全部替換**按鈕。

33. 按**命令-B**生成。 你仍然有你可以擺脫在將來的瞧不起 （請參閱 `CDVDeprecated.h` 。 例如，替換在您的代碼中使用的類，PG * CDV *）。

## 升級 1.4.0 1.4.1 向專案

1.  安裝 1.4.1 科爾多瓦。

2.  製作一個備份`MainViewController.m`.

3.  創建一個新專案。您將需要的一些資產從這個新的專案。

4.  複製 `MainViewController.m` 到 1.4.0-based 專案目錄中的新專案從磁片上的檔，替換舊檔 （備份您的檔第一次從上面的步驟 2）。

5.  添加 `MainViewController.m` 到 Xcode 專案檔案。

6.  將任何您已在您的備份中的具體專案代碼集成 `MainViewController.m` 成新的檔。

7.  更新 `phonegap-1.4.0.js` 檔是可選的 JavaScript 1.4.0 和 1.4.1 之間上沒有任何改變。

## 升級 1.3.0 專案到 1.4.0

1.  安裝 1.4.0 科爾多瓦。

2.  製作一個備份的 `AppDelegate.m` 和 `AppDelegate.h` 在您的專案中。

3.  創建一個新專案。您將需要的一些資產從這個新的專案。

4.  將這些檔從新專案複製到您的 1.3.0-based 專案目錄在磁片上，取代任何舊的檔 （備份您的檔首次從上述步驟 2）：
    
        AppDelegate.h AppDelegate.m MainViewController.h MainViewController.m MainViewController.xib
        

5.  添加所有 `MainViewController` 入 Xcode 專案檔案。

6.  複製 `www/phonegap-1.4.0.js` 到新專案中的檔您 `www` 目錄中，並刪除您 `www/phonegap-1.3.0.js` 檔。

7.  更新中的科爾多瓦腳本引用您 `www/index.html` 檔 （以及包含該腳本引用的任何其他檔） 以指向新 `phonegap-1.4.0.js` 檔。

8.  添加一個新條目下的 `Plugins` 在你 `PhoneGap.plist` 檔。關鍵是 `com.phonegap.battery` 和值是`PGBattery`.

9.  集成任何您已在您的備份中的具體專案代碼 `AppDelegate.h` 和 `AppDelegate.m` 成新的 AppDelegate 檔。

## 升級 1.2.0 專案到 1.3.0

1.  安裝 1.3.0 科爾多瓦。

2.  製作一個備份的 `AppDelegate.m` 和 `AppDelegate.h` 在您的專案中。

3.  創建一個新專案。您將需要的一些資產從這個新的專案。

4.  將這些檔從新專案複製到您的 1.2.0-based 專案目錄在磁片上，取代任何舊的檔 （備份您的檔首次從上述步驟 2）：
    
        AppDelegate.h AppDelegate.m MainViewController.h MainViewController.m MainViewController.xib
        

5.  添加所有 `MainViewController` 入 Xcode 專案檔案。

6.  複製 `www/phonegap-1.3.0.js` 到新專案中的檔您 `www` 目錄中，並刪除您 `www/phonegap-1.2.0.js` 檔。

7.  更新中的科爾多瓦腳本引用您 `www/index.html` 檔 （以及包含該腳本引用的任何其他檔） 以指向新 `phonegap-1.3.0.js` 檔。

8.  添加一個新條目下的 `Plugins` 在你 `PhoneGap.plist` 檔。關鍵是 `com.phonegap.battery` 和值是`PGBattery`.

9.  集成任何您已在您的備份中的具體專案代碼 `AppDelegate.h` 和 `AppDelegate.m` 成新的 AppDelegate 檔。

## 升級 1.1.0 專案到 1.2.0

1.  安裝科爾多瓦 1.2.0。

2.  製作一個備份的 `AppDelegate.m` 和 `AppDelegate.h` 在您的專案中。

3.  創建一個新專案。您將需要的一些資產從這個新的專案。

4.  將這些檔從新專案複製到您的 1.1.0-based 專案目錄在磁片上，取代任何舊的檔 （備份您的檔首次從上述步驟 2）：
    
        AppDelegate.h AppDelegate.m MainViewController.h MainViewController.m MainViewController.xib
        

5.  添加所有 `MainViewController` 入 Xcode 專案檔案。

6.  複製 `www/phonegap-1.2.0.js` 到新專案中的檔您 `www` 目錄中，並刪除您 `www/phonegap-1.1.0.js` 檔。

7.  更新中的科爾多瓦腳本引用您 `www/index.html` 檔 （以及包含該腳本引用的任何其他檔） 以指向新 `phonegap-1.2.0.js` 檔。

8.  添加一個新條目下的 `Plugins` 在你 `PhoneGap.plist` 檔。關鍵是 `com.phonegap.battery` 和值是`PGBattery`.

9.  集成任何您已在您的備份中的具體專案代碼 `AppDelegate.h` 和 `AppDelegate.m` 成新的 AppDelegate 檔。

## 升級 1.0.0 專案到 1.1.0

1.  安裝科爾多瓦 1.1.0。

2.  製作一個備份的 `AppDelegate.m` 和 `AppDelegate.h` 在您的專案中。

3.  創建一個新專案。您將需要的一些資產從這個新的專案。

4.  將這些檔從新專案複製到您的 1.0.0-based 專案目錄在磁片上，取代任何舊的檔 （備份您的檔首次從上述步驟 2）：
    
        AppDelegate.h AppDelegate.m MainViewController.h MainViewController.m MainViewController.xib
        

5.  添加所有 `MainViewController` 入 Xcode 專案檔案。

6.  複製 `www/phonegap-1.1.0.js` 到新專案中的檔您 `www` 目錄中，並刪除您 `www/phonegap-1.0.0.js` 檔。

7.  更新中的科爾多瓦腳本引用您 `www/index.html` 檔 （以及包含該腳本引用的任何其他檔） 以指向新 `phonegap-1.1.0.js` 檔。

8.  添加一個新條目下的 `Plugins` 在你 `PhoneGap.plist` 檔。關鍵是 `com.phonegap.battery` 和值是`PGBattery`.

9.  集成任何您已在您的備份中的具體專案代碼 `AppDelegate.h` 和 `AppDelegate.m` 成新的 AppDelegate 檔。

## 升級 0.9.6 專案到 1.0.0

1.  安裝科爾多瓦 1.0.0。

2.  製作一個備份的 `AppDelegate.m` 和 `AppDelegate.h` 在您的專案中。

3.  創建一個新專案。您將需要的一些資產從這個新的專案。

4.  將這些檔從新專案複製到您的 0.9.6-based 專案目錄在磁片上，取代任何舊的檔 （備份您的檔首次從上述步驟 2）：
    
        AppDelegate.h AppDelegate.m MainViewController.h MainViewController.m MainViewController.xib
        

5.  添加所有 `MainViewController` 入 Xcode 專案檔案。

6.  複製 `www/phonegap-1.0.0.js` 到新專案中的檔您 `www` 目錄中，並刪除您 `www/phonegap-0.9.6.js` 檔。

7.  更新中的科爾多瓦腳本引用您 `www/index.html` 檔 （以及包含該腳本引用的任何其他檔） 以指向新 `phonegap-1.0.0.js` 檔。

8.  添加一個新條目下的 `Plugins` 在你 `PhoneGap.plist` 檔。關鍵是 `com.phonegap.battery` 和值是`PGBattery`.

9.  集成任何您已在您的備份中的具體專案代碼 `AppDelegate.h` 和 `AppDelegate.m` 成新的 AppDelegate 檔。