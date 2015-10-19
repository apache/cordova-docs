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

title: 下一步
---

# 下一步

對於開發人員瞭解如何使用科爾多瓦 CLI 並使使用的外掛程式，有幾個東西你可能要考慮旁邊建設得更好，更多性能科爾多瓦應用研究。 下面的文檔提供了各種主題有關的最佳做法、 測試、 升級和其他主題的意見，但並不意味著要規範。 認為這是你為你的成長作為科爾多瓦開發人員的啟動點。 同時，如果你看到一些可以做得更好，請[作出貢獻][1]!

 [1]: http://cordova.apache.org/#contribute

本指南包含以下主題：

*   最佳做法
*   處理升級
*   測試科爾多瓦應用程式
*   科爾多瓦的調試應用程式
*   使用者介面
*   特殊的注意事項
*   保持
*   獲取説明 

# 最佳做法科爾多瓦應用程式開發

## 1） SPA 是你的朋友

首先-科爾多瓦應用程式應在 SPA （單頁面應用程式） 設計。 定義寬泛，SPA 是一個用戶端應用程式，從一個請求 web 頁的運行。 使用者載入一組初始的資源 （HTML、 CSS 和 JavaScript） 和進一步更新 （顯示一個新的視圖，資料載入） 通過 AJAX。 水療中心常用應用於更複雜的用戶端應用程式。 GMail 是一個偉大的例子。 你載入 GMail、 郵件視圖、 編輯和組織後都是由更新而不是實際上離開當前頁面 DOM 載入一個新的人。

使用一個水療中心可以説明您組織您的應用程式在一個更有效率的方式，但它也有科爾多瓦申請的具體好處。 科爾多瓦應用程式必須等待要火可能使用的任何外掛程式之前的 [deviceready](../../cordova/events/events.deviceready.html) 事件。 如果您不使用水療中心，和您的使用者按一下去從一個網頁到另一個，你將不得不等待 [deviceready](../../cordova/events/events.deviceready.html) 再次觸發之前要使用一個外掛程式。 這很容易忘記，您的應用程式變得更大。

即使您選擇不使用科爾多瓦，創建一個移動應用程式不使用單個頁面結構將產生嚴重的性能影響。 這是因為頁面之間導航需要腳本、 資產等，被重新載入。 即使這些資產則進行緩存，仍有性能問題。

水療中心庫您可以在科爾多瓦應用程式中使用的示例如下：

*   [AngularJS][2]
*   [EmberJS][3]
*   [骨幹][4]
*   [劍道 UI][5]
*   [摩納卡][6]
*   [ReactJS][7]
*   [Sencha 觸摸][8]
*   [jQuery 移動][9]

 [2]: http://angularjs.org
 [3]: http://emberjs.com
 [4]: http://backbonejs.org
 [5]: http://www.telerik.com/kendo-ui
 [6]: http://monaca.mobi/en/
 [7]: http://facebook.github.io/react/
 [8]: http://www.sencha.com/products/touch/
 [9]: http://jquerymobile.com

和許多，許多，更多。

## 2） 性能注意事項

新的科爾多瓦開發人員可以利用的最大錯誤之一是想當然地認為他們會在桌上型電腦的性能是相同的他們會在行動裝置上。 雖然每年我們的行動裝置已經變得更強大，但它們仍然缺乏電力和桌上型電腦性能。 行動裝置通常有更少的 RAM 和很遠從他們的桌面上的 GPU （或甚至筆記本電腦） 的弟兄們。 小竅門的完整清單將太多了，但這裡有幾件事要牢記 （與更長的時間在結束了為進一步研究的資源的清單）。

**按一下與觸摸**-你能犯的最大和最簡單的錯誤是使用 click 事件。 雖然這些手機上很好的"工作"，大多數設備徵收上他們的 300ms年延遲，以區分觸摸和觸摸"持有"事件。 使用 `touchstart` ，或 `touchend` ，將導致一個戲劇性的改善 — — 300ms年不聽起來很多，但它可以導致忽動忽停的 UI 更新和行為。 您還應該考慮"觸摸"事件的事實不支援在非 webkit 瀏覽器，請參閱[CanIUse][10]。 為了應付這些限制，您可以簽出不同的庫，如 HandJS 和 Fastouch。

 [10]: http://caniuse.com/#search=touch

**CSS 轉換與 DOM 操作**— — 使用硬體加速 CSS 轉換將大大優於使用 JavaScript 來創建動畫。 請參見本節末尾的資源的清單。

**網路吸**-好的網路不總是很爛，但移動網路的延遲甚至良好的移動網路，比你可能想像的差很遠。 一個桌面的應用程式，吃了 500 行的 JSON 資料，每隔 30 秒，將既慢行動裝置，以及電池的豬。 請牢記科爾多瓦的應用程式有多種的方式來保持資料在應用程式 （本機存放區和檔案系統，例如）。 緩存本地資料，認識到你來回發送的資料量。 您的應用程式通過一個蜂窩網路連接時，這是一個特別重要的考慮因素。

**額外的性能文章和資源**

*   ["你一半屁股它"][11]
*   ["頂十的性能提示 PhoneGap 和混合應用程式"][12]
*   ["快速應用程式和網站的 JavaScript"][13]

 [11]: http://sintaxi.com/you-half-assed-it
 [12]: http://coenraets.org/blog/2013/10/top-10-performance-techniques-for-phonegap-and-hybrid-apps-slides-available/
 [13]: https://channel9.msdn.com/Events/Build/2013/4-313

## 3） 認識和處理離線狀態

請參閱關於網路上的提示。 你不僅可以在慢速網路上，這是完全有可能為您的應用程式必須完全離線。 您的應用程式應該處理這一種智慧化的方式。 如果您的應用程式不存在，人們會以為您的應用程式被破壞。 鑒於它是多麼容易處理 （科爾多瓦支援偵聽離線和線上活動），就絕對沒有理由為您的應用程式不回應時離線運行。 一定要測試 （見下面的測試一節） 您的應用程式，一定要測試您的應用程式是如何處理的當你開始處於一種狀態，然後切換到另一個。

注意連線和離線的事件，如網路連接 API 不是完美。 您可能需要依賴于使用 XHR 請求，看看設備是否真正離線或連線。 在年底的一天，肯定添加某種形式的支助網路問題 — — 事實上，蘋果商店 （和可能其他存儲） 將拒絕不妥善處理離線/線上狀態的應用程式。 關於這一主題的更多討論，請參見["是對的這件事嗎?"][14]

 [14]: http://blogs.telerik.com/appbuilder/posts/13-04-23/is-this-thing-on-%28part-1%29

# 處理升級

## 升級科爾多瓦專案

如果您現有的專案使用科爾多瓦創建 3.x 版，您可以通過發出以下升級該專案：

    科爾多瓦平臺更新平臺名稱 ios，android，等。
    

如果現有專案所創建的是根據之前科爾多瓦的版本 3.x，它可能會最好創建一個新的科爾多瓦 3.x 專案，然後將您現有的專案代碼和資源複製到新專案。 典型的步驟：

*   創建一個新的科爾多瓦 3.x 專案 (科爾多瓦創建...)
*   將 www 資料夾從您的舊專案複製到新的專案
*   將任何配置設置從舊專案複製到新的專案
*   添加到新專案的舊專案中使用任何外掛程式
*   生成您的專案
*   測試、 測試、 測試 ！

該專案以前的版本，無論是絕對關鍵的你讀完上在更新後的版本中，更改了什麼，更新可能會中斷您的代碼。 最好的地方要查找此資訊將公佈在倉庫中，並在科爾多瓦的博客上的版本資訊中。 你會想要進行全面測試您的應用程式，驗證它工作正常後，則執行更新。

注： 某些外掛程式可能無法與科爾多瓦的新版本相容。 如果一個外掛程式不是相容的你可能能夠找到一個更換外掛程式，你需要什麼，或者您可能需要推遲升級您的專案。 另外，改變該外掛程式，以便在最新的版本下工作並重新對社會有貢獻。

## 外掛程式升級

截至科爾多瓦 3.4 是沒有升級更改的外掛程式使用單個命令的機制。相反，刪除該外掛程式並添加它回到您的專案，並將安裝新的版本：

    科爾多瓦外掛程式 rm com.some.plugin 科爾多瓦外掛程式添加 com.some.plugin
    

一定要檢查更新的外掛程式的文檔，因為您可能需要調整代碼以使用最新的版本。 此外，再檢查一遍，該外掛程式的新版本與您的專案版本的科爾多瓦。

始終在測試您的應用程式，以確保安裝新外掛程式已不打破你預料不到的東西。

如果您的專案具有大量的外掛程式，您需要更新，則可能會節省時間來創建殼或批次處理腳本中刪除並添加的外掛程式使用一個命令。

# 測試科爾多瓦應用程式

測試您的應用程式是非常重要的。科爾多瓦團隊使用茉莉花卻將任何 web 友好單位測試解決方案。

## 在實際設備上與模擬器上測試

它並非罕見時要使用桌面瀏覽器和設備模擬器/模擬器開發科爾多瓦的應用程式。 然而，這是非常重要的是您測試您的應用程式上盡可能多的物理設備，盡你所能：

*   模擬器只是： 模擬器。 例如，您的應用程式可能工作在 iOS 模擬器沒有問題，但它真正的設備 （尤其是在某些情況下，例如一種低記憶體狀態） 上可能會失敗。 或者，您的應用程式實際上可能失敗在模擬器上，雖然它在實際設備上只是正常工作。 
*   模擬程式只是： 模擬器。 他們並不代表您的應用程式將在一個物理設備上運行的多好。 例如，一些模擬器可能呈現您的應用程式與顯示出現亂碼，雖然實際設備沒有任何問題。 （如果你確實遇到此問題，禁用在模擬程式中的主機 GPU。
*   模擬器都比您的物理設備一般快。 模擬器，另一方面，是通常速度較慢。 由它在模擬器或模擬器中的執行不判斷您的應用程式的性能。 做以它對光譜的實際設備的運行方式來判斷您的應用程式的性能。
*   它是不可能為您的應用程式如何回應通過使用模擬器或模擬器的觸摸得到的感覺很好。 相反，真正的設備上運行的應用程式可以點出大小的使用者介面元素、 反應能力等問題。
*   雖然是很好，以便能夠測試僅在平臺每一台設備上，它是最佳體育許多不同的作業系統版本的很多設備上進行測試。 例如，什麼作品對你特別的 Android 智慧手機上可能會失敗另一個 Android 設備。 什麼工作 7 的 iOS 設備上的 iOS 6 設備上可能會失敗。

當然，這是不可能在市場上每個可能的設備上進行測試。 出於這個原因，它是明智招募許多測試人員有不同的設備。 雖然他們不會抓住每一個問題，很好他們會發現怪癖和你永遠找不到一個人的問題。

小貼士： 它有可能在 Android nexus 系列設備很容易閃不同版本的 Android 設備上。 這個簡單的過程將使您能夠輕鬆地測試您的應用程式對不同級別的 Android 與一個單一的設備，沒有排尿您的保修服務或要求你到"根"或"越獄"您的設備。 谷歌安卓系統工廠的圖像和說明都位於： HTTPs://developers.google.com/android/nexus/images#instructions

# 科爾多瓦的調試應用程式

調試科爾多瓦需要進行一些設置。不像桌面應用程式，你只需打開 dev 工具無法在您的行動裝置上，並開始調試，幸運的是，有一些不錯的方案。

## iOS 調試

### Xcode

使用 Xcode 可以調試應用程式科爾多瓦的 iOS 本機側。 確保調試區域顯示 （-> 調試區域視圖）。 一旦您的應用程式運行在設備 （或類比） 上，您可以在調試區域查看日誌輸出。 這是任何錯誤或警告的列印位置。 此外可以在原始檔案中設置中斷點。 這將允許您逐句通過一行代碼一次，那次查看變數的狀態。 命中中斷點時，變數的狀態是顯示在調試區域。 一旦您的應用程式是在設備上啟動並運行，你可以把 Safari 的 web 督察 （如下所述） 來調試您的應用程式 web 視圖和 js 的一面。 有關更多詳細資訊和説明，請參閱 Xcode 指南： [Xcode 調試指南][15]

 [15]: https://developer.apple.com/library/mac/documentation/ToolsLanguages/Conceptual/Xcode_Overview/DebugYourApp/DebugYourApp.html#//apple_ref/doc/uid/TP40010215-CH18-SW1

### Safari 遠端偵錯 Web 督察

使用 Safari 的 web 檢查器，您可以調試的 web 視圖和 js 代碼科爾多瓦在應用程式中。 這工作只在 OSX 上，只與 iOS 6 （或更高）。 它使用 Safari 來連接到您的設備 （或類比），並將連接到科爾多瓦應用程式的瀏覽器的開發工具。 你得到你期望從 DOM 檢查/操作、 JavaScript 調試器、 網路檢測、 主控台和開發工具。 像 Xcode，使用 Safari 的 web 檢查器可以在 JavaScript 代碼中設置中斷點並查看變數的狀態在那段時間。 您可以查看任何錯誤、 警告或消息列印到主控台。 當您的應用程式正在運行，您還可以直接從主控台運行 JavaScript 命令。 有關如何設置它，你可以做的更多詳細資訊，請參閱這篇優秀博客： [HTTP://moduscreate.com/enable-remote-web-inspector-in-ios-6/][16]和本指南： [Safari 網路督察指南][17]

 [16]: http://moduscreate.com/enable-remote-web-inspector-in-ios-6/
 [17]: https://developer.apple.com/library/safari/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Introduction/Introduction.html

## 鉻遠端偵錯

Safari 版本幾乎一樣，這只與 Android 工作但可以從任何桌面作業系統使用。 它需要最小的 Android 4.4 （奇巧）、 最低 API 級別的 19 和鉻 30 + （在桌面上）。 一旦連接，您可以得到相同的 Chrome 開發工具體驗移動應用程式像你與你的桌面應用程式。 更妙的是，Chrome 開發工具有一個鏡像選項表明您在行動裝置上運行的應用程式。 這是不僅僅是一個視圖-您可以向下滾動並按一下從開發工具，它在行動裝置上更新。 鉻遠端偵錯功能的更多詳細資訊可以在這裡找到： [HTTPs://developers.google.com/chrome/mobile/docs/debugging][18]

 [18]: https://developers.google.com/chrome/mobile/docs/debugging

它是可能使用 Chrome 開發工具來檢查 iOS 應用程式，通過 WebKit 代理： [HTTPs://github.com/google/ios-webkit-debug-proxy/][19]

 [19]: https://github.com/google/ios-webkit-debug-proxy/

## 波紋

波紋是一個桌面的基於的模擬器科爾多瓦專案。 本質上，它允許您在您的桌面應用程式中運行科爾多瓦應用和假科爾多瓦的各種功能。 例如，它允許您類比加速度感應器檢測搖事件。 它通過讓您從您的硬碟上選擇一張圖片假貨攝像頭 API。 波紋讓你更專注于您的自訂代碼，而不是擔心科爾多瓦外掛程式。 你可以在這裡找到更多關於波紋： [HTTP://ripple.incubator.apache.org/][20]

 [20]: http://ripple.incubator.apache.org/

## Weinre

Weinre 創建可以承載您科爾多瓦的應用程式的遠端偵錯用戶端的本機伺服器。 您已經安裝並啟動它後，你將某行代碼複製到您的科爾多瓦應用程式，然後重新開機它。 然後可以在您的桌面上，使用應用程式打開一個 dev 工具面板。 Weinre 不是很高檔的鉻和 Safari 遠端偵錯但有工作的作業系統和平臺的範圍要大得多的效益。 更多的資訊可以在這裡找到： [HTTP://people.apache.org/~pmuellr/weinre/docs/latest/][21]

 [21]: http://people.apache.org/~pmuellr/weinre/docs/latest/

## 其他選項

*   黑莓 10 支援以及調試：[文檔][22]
*   你可以調試以及使用火狐瀏覽器的應用程式管理器，請參見[此博客文章][23]和此[MDN 條][24].
*   更多的例子和解釋上面的調試提示，請參閱： [HTTP://developer.telerik.com/featured/a-concise-guide-to-remote-debugging-on-ios-android-and-windows-phone/][25]

 [22]: https://developer.blackberry.com/html5/documentation/v2_0/debugging_using_web_inspector.html
 [23]: https://hacks.mozilla.org/2014/02/building-cordova-apps-for-firefox-os/
 [24]: https://developer.mozilla.org/en-US/Apps/Tools_and_frameworks/Cordova_support_for_Firefox_OS#Testing_and_debugging
 [25]: http://developer.telerik.com/featured/a-concise-guide-to-remote-debugging-on-ios-android-and-windows-phone/

# 使用者介面

構建一個科爾多瓦應用程式，看起來不錯移動可以是一種挑戰，尤其是開發商。 很多人選擇使用 UI 框架使這個容易。 這裡是您可能想要考慮的選項短名單。

*   [jQuery 移動][9]-jQuery 移動自動增強您的移動優化的佈局。它也可以處理自動為你創建一個水療中心。
*   [離子][26]-此功能強大的 UI 框架實際上有它自己的 CLI 來處理創建專案。 
*   [棘輪][27]-帶給你的那些創建引導的人。 
*   [劍道 UI][5] -開放原始碼的使用者介面和應用程式框架從 Telerik。
*   [面漆][28]
*   [ReactJS][7]

 [26]: http://ionicframework.com/
 [27]: http://goratchet.com/
 [28]: http://topcoat.io

建立您的使用者介面，時，重要的是思考你的目標的所有平臺和使用者的期望之間的差異。 例如，有 iOS 樣式的使用者介面的 Android 應用程式可能不會很好與使用者。 這有時是即使執行各種應用程式商店。 正因為如此，很重要的尊重每個平臺的公約，因此熟悉各種人機界面指南:

*   [iOS][29]
*   [安卓系統][30]
*   [Windows Phone][31]

 [29]: https://developer.apple.com/library/ios/documentation/userexperience/conceptual/MobileHIG/index.html
 [30]: https://developer.android.com/designWP8
 [31]: http://dev.windowsphone.com/en-us/design/library

## 其他 UI 文章和資源

儘管瀏覽器引擎變得更多、 更多標準的投訴，我們仍然生活在一個帶首碼的世界 （-webkit 和-女士） 開發 UI 中的跨瀏覽器的應用程式時，下面的文章是寶貴： [HTTP://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx][32]

 [32]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx

# 特殊的注意事項

雖然科爾多瓦跨平臺開發更加容易，但它是不可能提供 100%從底層本機平臺的隔離。所以要瞭解限制。

## 平臺的怪癖

在閱讀文檔時，尋找其中簡要說明了不同的行為或要求在多個平臺上的部分。 如果存在，這些將是在一節題為"安卓 Quirks 」，"iOS 怪癖"等。 通讀這些怪癖，覺察到它們作為你工作與科爾多瓦。

## 載入遠端內容

調用科爾多瓦 JavaScript 函數從一個遠端載入的 HTML 頁面 （不存儲在本地設備上的 HTML 頁） 是一種不受支援的配置。 這是因為科爾多瓦被設計用來此，和 Apache 科爾多瓦社區並沒有測試此配置。 雖然它可以工作在某些情況下，它不是建議也不支援。 還有挑戰與同源策略，保持上的 javascript 代碼和科爾多瓦的本機部分同步相同的版本 （因為他們耦合通過私人的 Api 可能會更改），在調用本機的本地函數和潛在的應用程式商店拒絕的遠端內容的可信度。

應該做的遠端載入 HTML 內容在 web 視圖中顯示使用科爾多瓦的 InAppBrowser。 InAppBrowser 專門設計，以便 JavaScript 運行那裡沒有存取權限的但對科爾多瓦 JavaScript Api 為上面列出的原因。 請參閱安全指南。

# 保持

這裡有幾種方法可以更新科爾多瓦。

*   [科爾多瓦博客][33]訂閱.
*   訂閱的[開發人員名單][34]。請注意--這不是一個支援組!相反，這是發展的科爾多瓦是的討論。

 [33]: http://cordova.apache.org/#news
 [34]: http://cordova.apache.org/#mailing-list

# 獲取説明

下面的連結是最好的地方去科爾多瓦的説明：

*   計算機: [HTTP://stackoverflow.com/questions/tagged/cordova][35]通過使用科爾多瓦標記，您可以查看和流覽所有的科爾多瓦問題。 請注意計算機自動轉換到"科爾多瓦""Phonegap"標記，所以這種方式你將能夠訪問歷史問題以及
*   PhoneGap 谷歌組: [HTTPs://groups.google.com/forum/#! 論壇/phonegap][36]此谷歌組的時候老支援論壇科爾多瓦還叫 PhoneGap。 雖然仍有很多頻繁的這一組的科爾多瓦使用者，科爾多瓦表示，社會上對這群不會專注並改用計算機支援興趣
*   Meetup: [HTTP://phonegap.meetup.com][37] -考慮尋找本地的科爾多瓦/PhoneGap meetup 組

 [35]: http://stackoverflow.com/questions/tagged/cordova
 [36]: https://groups.google.com/forum/#!forum/phonegap
 [37]: http://phonegap.meetup.com