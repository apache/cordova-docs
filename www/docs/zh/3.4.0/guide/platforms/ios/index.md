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

# iOS 平臺指南

本指南介紹如何設置您的 SDK 開發環境部署科爾多瓦的 iOS 設備 （如 iPhone 和 iPad 的應用程式。請參閱下列特定于平臺的詳細資訊：

*   iOS 配置
*   升級 iOS
*   WebViews iOS
*   iOS 外掛程式
*   iOS 命令列工具

上面的命令列工具請參閱科爾多瓦 3.0 以前的版本。關於當前介面的資訊，請參閱命令列介面。

## 要求和支援

蘋果公司 ® 生成僅在基於英特爾的 Mac OS X 作業系統上運行的 iOS 應用程式所需的工具。 僅在 OS X 10.7 (獅子) 版本上運行 Xcode ® 4.5 (要求的最低版本） 或更大，並包括 iOS 6 SDK （軟體發展工具組）。 要提交到蘋果 App Store℠ 的應用程式需要的蘋果工具的最新版本。

您可以測試的許多科爾多瓦功能使用 iOS 模擬器安裝 ios SDK 和 Xcode，但你需要使用實際的設備完全提交到 App Store 之前測試的所有應用程式的裝置功能。 該設備必須至少有 iOS 5.x 安裝、 科爾多瓦 2.3 支援的最低限度的 iOS 版本。配套設備包括所有 iPad ® 模型、 iPhone ® 3GS 及以上，和 iPod ® 觸摸第三代或更高版本。 要安裝到設備上的應用程式，您必須也是蘋果公司的[iOS 開發者計畫][1]，該費用每 99 年美元的成員。 本指南演示如何將應用程式部署到 iOS 模擬器，不必註冊開發者計畫。

 [1]: https://developer.apple.com/programs/ios/

## 安裝 SDK

有兩種方法可以下載 Xcode：

*   從[應用程式商店][2]，可通過搜索"Xcode"在**App Store**中的應用。

*   從[蘋果開發者下載][3]，而作為蘋果開發者需要註冊。

 [2]: https://itunes.apple.com/us/app/xcode/id497799835?mt=12
 [3]: https://developer.apple.com/downloads/index.action

一旦安裝了 Xcode，幾個命令列工具需要為科爾多瓦運行啟用。 從**Xcode**功能表中，選擇**首選項**，然後**下載**選項卡。 從**元件**面板中，按**命令列工具**清單旁邊的**安裝**按鈕。

## 在 SDK 中打開的專案

使用 `cordova` 實用程式設置了一個新的專案，如所述在科爾多瓦命令列介面。例如，在原始程式碼中的目錄：

        $ cordova create hello com.example.hello "HelloWorld"
        $ cd hello
        $ cordova platform add ios
        $ cordova prepare              # or "cordova build"


創建後，您可以在 Xcode 內打開它從。按兩下打開 `hello/platforms/ios/hello.xcodeproj` 檔。螢幕應該如下所示：

![][4]

 [4]: {{ site.baseurl }}/static/img/guide/platforms/ios/helloworld_project.png

## 部署到模擬程式

若要預覽 iOS 模擬器中的應用程式：

1.  請確保在左邊的面板中選擇*.xcodeproj*檔。

2.  選擇**你好**app 立即向右面板中。

3.  從工具列上的**計畫**功能表中選擇預定的設備、 iPhone 等作為 6.0 模擬器在這裡突出了：

    ![][5]

4.  按下**運行**按鈕出現在同一工具列左側的**計畫**中。 那生成、 部署並在模擬器中運行應用程式。 一個單獨的模擬器應用程式將打開，並顯示該應用程式：

    ![][6]

    只有一個模擬程式可能會運行一次，所以如果你想要在不同的模擬器中測試應用程式，您需要退出的模擬程式應用程式和運行一個不同的目標在 Xcode 的範圍內。

 [5]: {{ site.baseurl }}/static/img/guide/platforms/ios/select_xcode_scheme.png
 [6]: {{ site.baseurl }}/static/img/guide/platforms/ios/HelloWorldStandard.png

Xcode 捆綁了模擬器為最新版本的 iPhone 和 iPad。 較舊的版本中可能會提供**Xcode → 首選項 → 下載 → 元件**面板。

## 將部署到設備

有關各項要求，部署到一個設備的詳細資訊，請參閱蘋果的[iOS 工具工作流指南][7]的*配置開發和分配資產*部分。 簡單地說，您需要部署之前執行以下操作：

 [7]: http://developer.apple.com/library/ios/#documentation/Xcode/Conceptual/ios_development_workflow/00-About_the_iOS_Application_Development_Workflow/introduction.html#//apple_ref/doc/uid/TP40007959

1.  加入蘋果 iOS 開發者計畫。

2.  創建*資源調配設定檔*內[iOS 資源調配門戶][8]。 您可以使用其*發展資源調配助理*來創建和安裝設定檔和證書 Xcode 需要。

3.  驗證*代碼簽名*部分*代碼簽名標識*內的專案設置設置為您設置的設定檔名稱。

 [8]: https://developer.apple.com/ios/manage/overview/index.action

若要部署到設備：

1.  使用 USB 電纜將設備插入到您的 mac。

2.  Xcode 視窗**計畫**下拉清單中選擇的專案的名稱。

3.  從**設備**下拉清單中選擇您的設備。如果它通過 USB 連接電源，但仍然沒有出現，請按**管理器**按鈕，以解決任何錯誤。

4.  按下**運行**按鈕以生成、 部署並運行該應用程式在您的設備上。

## 常見的問題

**否決警告**： 當應用程式更改或替換為另一個 API 程式設計介面 (API) 時，它被標記為*已過時*。 API 仍可工作，短期內，但最終將被刪除。 這些過時的介面的一些反映在 Apache 科爾多瓦和 Xcode 問題對他們的警告您在生成和部署應用程式時。

Xcode 的警告 `invokeString` 方法涉及啟動一個應用程式從一個自訂 URL 的功能。 雖然從自訂 URL 載入的機制發生了變化，此代碼目前仍在繼續為科爾多瓦的較早版本創建的應用程式提供向後的功能。 應用程式範例不使用這一功能，因此可以忽略這些警告。 若要防止出現這些警告，請刪除引用已棄用的 invokeString API 的代碼：

*   編輯*Classes/MainViewController.m*檔、 環繞的代碼與下面的塊 `/*` 和 `*/` 的評論如下所示，然後鍵入**命令-s**保存該檔：

        （失效） webViewDidFinishLoad:(UIWebView*) theWebView {/ / 如果 ___PROJECTNAME__ Info.plist 指定協定來處理的唯一有效 / * 如果 (self.invokeString) {/ / 這傳遞之前觸發 deviceready 事件，以便您可以訪問它的 js 時您會收到 deviceready NSLog (@"已否決： window.invokeString-相反，使用 window.handleOpenURL(url) 函數，總是調用通過自訂方案 url 啟動應用程式時.") ；NSString * jsString = [NSString stringWithFormat:@"var invokeString = \"%@\"；"self.invokeString] ；[theWebView stringByEvaluatingJavaScriptFromString:jsString] ；} * / / / 黑色底彩色背景匹配的本機應用程式 theWebView.backgroundColor = [UIColor blackColor] ；返回 [超級 webViewDidFinishLoad: theWebView] ；}


*   編輯*Classes/AppViewDelegate.m*檔，注釋掉下面的行插入雙斜杠，如下所示，然後鍵入**命令-s**保存該檔：

        //self.viewController.invokeString = invokeString ；


*   按**命令-b**重新生成專案並消除此警告。

<!-- Does this fix only last until the next "cordova prepare"? -->

**缺少標題**: 編譯錯誤有關的失蹤頭導致從生成位置的問題，可以通過 Xcode 偏好固定：

1.  選擇**Xcode → 首選項 → 位置**.

2.  在**派生的資料**部分中，按**高級**按鈕並選擇**唯一**作為**生成位置**如下所示：

    ![][9]

 [9]: {{ site.baseurl }}/static/img/guide/platforms/ios/xcode_build_location.png

這是預設設置為一個新的 Xcode 安裝，但也可以設置以不同的方式從較早版本的 Xcode 後升級。

進一步的資訊，請參考蘋果的文檔：

*   [開始開發 iOS 應用程式今天][10]快速概述的步驟開發 iOS 的應用程式。

*   [會員中心主頁][11]提供幾個 iOS 的連結技術資源包括技術資源，資源調配門戶、 分佈指南和社區論壇。

*   [IOS 工具工作流指南][7]

*   [Xcode 4 使用者指南][12]

*   從蘋果世界廣泛開發人員會議 (WWDC2012) 2012年[屆會議視頻][13]

*   安裝[xcode 選擇命令][14]，它有助於指定正確版本的 Xcode，如果不止一個的話。

 [10]: http://developer.apple.com/library/ios/#referencelibrary/GettingStarted/RoadMapiOS/index.html#//apple_ref/doc/uid/TP40011343
 [11]: https://developer.apple.com/membercenter/index.action
 [12]: http://developer.apple.com/library/ios/#documentation/ToolsLanguages/Conceptual/Xcode4UserGuide/000-About_Xcode/about.html#//apple_ref/doc/uid/TP40010215
 [13]: https://developer.apple.com/videos/wwdc/2012/
 [14]: http://developer.apple.com/library/mac/#documentation/Darwin/Reference/ManPages/man1/xcode-select.1.html

(Mac ®，OS X ®，蘋果公司 ®，Xcode ® 應用程式 Store℠，iPad ®，iPhone ®，iPod ® 和 Finder ® 是蘋果公司商標)
