# 下一步

對於開發人員瞭解如何使用科爾多瓦 CLI 並使使用的外掛程式，有幾件事你可能想要考慮旁邊生成更好、 更多的性能科爾多瓦應用研究。 下面的文檔提供有關的最佳做法、 測試、 升級和其他主題的各種主題的建議，但不是強制性規定。 這考慮您為您作為科爾多瓦的開發人員的增長的啟動點。 同時，如果你看到可以改善的東西，請[作出貢獻][1]!

 [1]: http://cordova.apache.org/#contribute

本指南包含以下主題：

*   最佳做法
*   處理升級
*   測試
*   調試
*   使用者介面
*   保持
*   獲取説明 

# 最佳做法

## 1） SPA 是你的朋友

首先-科爾多瓦應用程式應採用 SPA （單個頁面應用程式） 設計。 SPA 鬆散定義是一個用戶端應用程式，運行時從一個請求的 web 頁。 使用者載入一組初始的資源 （HTML、 CSS 和 JavaScript） 和進一步通過 AJAX 做更新 （顯示一個新視圖，載入資料）。 Spa 水療中心常用應用於更複雜的用戶端應用程式。 GMail 是一個偉大的例子。 載入 GMail、 郵件視圖、 編輯和組織後的由更新而不是實際上離開當前頁面 DOM 載入一個完全地新完成。

使用一個水療中心可以説明您組織您的應用程式以更有效率的方式，但它也有科爾多瓦的應用程式的具體好處。 科爾多瓦應用程式必須等待要火才可使用任何外掛程式的 deviceready 事件。 如果您不使用 SPA，和您的使用者按一下以從一個網頁轉到另一個，必須等待 deviceready 再次觸發在你做之前使用的外掛程式。 這很容易忘了您的應用程式獲取更大。

即使您選擇不使用科爾多瓦，創建移動應用程式不使用單個頁面結構將產生嚴重的性能影響。 這是因為頁面之間導航將需要腳本、 資產等，重新載入。 即使這些資產緩存的仍有性能問題。

水療中心庫您可以在科爾多瓦應用程式中使用的示例如下：

*   [AngularJS][2]
*   [骨幹][3]
*   [劍道 UI][4]
*   [摩納卡][5]
*   [ReactJS][6]
*   [煎茶觸摸][7]
*   [jQuery 移動][8]

 [2]: http://angularjs.org
 [3]: http://backbonejs.org
 [4]: http://www.telerik.com/kendo-ui
 [5]: http://monaca.mobi/en/
 [6]: http://facebook.github.io/react/
 [7]: http://www.sencha.com/products/touch/
 [8]: jquerymobile.com

和很多很多，更多。

## 2） 性能注意事項

科爾多瓦新開發人員可以使最大的錯誤之一是假定他們在桌上型電腦得到的性能是一樣他們會在行動裝置上。 雖然我們的行動裝置已經變得更強大每年，他們仍然缺乏的功率和性能的一個桌面。 行動裝置通常具有較少的 RAM 和 GPU 是相距甚遠，他們的桌面 （或甚至筆記本電腦） 的弟兄們。 小貼士這裡的完整清單將是太多了，但這裡有幾件事要記住 （的長在結束了為進一步研究資源的清單）。

**按一下與觸摸**-你可以犯的最大和最簡單的錯誤是使用按一下事件。 雖然這些"工作"很好的手機，大多數設備施加 300 ms 延遲對他們為了區分一個觸摸和觸摸"持有"事件。 使用 `touchstart` ，或 `touchend` ，將導致的極大改善-300 ms 聽起來不像，但它可以導致生澀 UI 更新和行為。 您還應該考慮"碰"事件的事實不支援在非 webkit 的瀏覽器，請參閱[CanIUse][9]。 為了應付這些限制，你可以簽出各種庫如 HandJS 和 Fastouch。

 [9]: http://caniuse.com/#search=touch

**CSS 過渡與 DOM 操作**— — 使用硬體加速 CSS 過渡將大大優於使用 JavaScript 創建的動畫。 請參閱在結束了這一節的示例的資源的清單。

**網路吸**-確定，網路不總是糟糕不過的延隔時間的移動網路，即使是好的移動網路，可能比你想像得更糟。 Slurps 下來 500 JSON 資料行，每隔 30 秒鐘，桌面應用程式將兩個行動裝置，以及電池豬的慢。 請記住科爾多瓦的應用程式有多個方法來保持資料在應用程式中 （認為和示例的檔案系統）。 本地資料緩存，並且認識到的來來回回要發送的資料量。 這是一個特別重要的考慮，當您的應用程式通過蜂窩網路連接。

**其他性能文章和資源**

*   ["你一半屁股它"][10]
*   ["頂十的性能提示 PhoneGap 和混合應用程式"][11]
*   "快速應用程式和網站與 JavaScript"： HTTP://channel9.msdn.com/Events/Build/2013/4-313

 [10]: http://sintaxi.com/you-half-assed-it
 [11]: http://coenraets.org/blog/2013/10/top-10-performance-techniques-for-phonegap-and-hybrid-apps-slides-available/

## 3） 認識和處理離線狀態

請參閱有關網路的前提示。 你不僅可以在慢速網路上，它是完全有可能為您的應用程式必須完全離線。 您的應用程式應處理這以智慧方式。 如果您的應用程式不存在，人們會覺得您的應用程式是破碎。 鑒於處理 （科爾多瓦支援離線和線上活動偵聽） 它是多麼容易，是絕對沒有理由為您的應用程式離線運行時，也不作回應。 一定要測試 （請參閱下面的測試一節) 您的應用程式，一定要測試您的應用程式如何處理當你開始在一個國家中，然後切換到另一個。

請注意線上和離線事件，以及網路連接 API 是不完美。 您可能需要依賴于使用 XHR 請求以查看設備是否真正離線或連線。 在結束了一天，肯定添加某種形式的網路問題-支援，事實上，蘋果商店 （和可能其他存儲） 將拒絕不正確處理離線線上狀態的應用程式。 關於這一主題的更多討論，請參見["是對這件事?"][12]

 [12]: http://blogs.telerik.com/appbuilder/posts/13-04-23/is-this-thing-on-%28part-1%29

# 處理升級

## 升級科爾多瓦專案

如果您現有的專案使用科爾多瓦創建 3.x，你可以通過發出以下升級專案：

    cordova platform update platform-name ios, android, etc.
    

如果您現有的專案創建下一個版本前科爾多瓦 3.x，它可能會最好，創建一個新的科爾多瓦 3.x 專案，然後將您現有的專案代碼和資產複製到新的專案。 典型的步驟：

*   創建一個新的科爾多瓦 3.x 專案 (科爾多瓦創建...)
*   將 www 資料夾從您的舊專案複製到新的專案
*   將任何配置設置從舊專案複製到新的專案
*   添加到新專案的舊專案中使用任何外掛程式
*   生成您的專案
*   測試、 測試、 測試 ！

無論專案的以前的版本，它是絕對關鍵的是你閱讀在更新後的版本，在更改了什麼作為該更新可能會中斷您的代碼。 最好的地方要查找此資訊將公佈在倉庫中，並在科爾多瓦博客上的版本資訊中。 要徹底地測試您的應用程式，以驗證它執行更新後正常工作。

注： 某些外掛程式可能不相容的新版本的科爾多瓦。 如果一個外掛程式不是相容的您可能能夠找到您所需要的不會更換外掛程式或您可能需要推遲升級您的專案。 或者，修改外掛程式，以便它不會在新版本下工作和回到對社會有貢獻。

## 外掛程式升級

自科爾多瓦 3.4，那裡是沒有升級更改的外掛程式使用單個命令的機制。相反，刪除該外掛程式，並添加它回到您的專案，並將安裝新的版本：

    cordova plugin rm com.some.plugin
    cordova plugin add com.some.plugin
    

務必要檢查更新的外掛程式的文檔，因為您可能需要調整您的代碼以使用新版本的工作。 此外，雙新版本的外掛程式作品與您的專案版本的科爾多瓦的檢查。

一定要測試您的應用程式以確保安裝新的外掛程式已經不能打破你沒有預料到的東西。

如果您的專案有很多你需要更新的外掛程式，它可能會節省時間創建 shell 或批次處理腳本中刪除並添加的外掛程式使用一個命令。

# 測試

測試您的應用程式是超級重要的。科爾多瓦團隊使用茉莉花，但任何 web 友好單位測試解決方案將會做。

## 模擬器 vs.在實際設備上測試

它並非罕見時要使用桌面瀏覽器和設備模擬器/模擬器開發科爾多瓦的應用程式。 然而，這是非常重要的是您測試您的應用程式上盡可能多的物理設備，你可能可以：

*   模擬器只是： 模擬器。 例如，您的應用程式可能工作在 iOS 模擬器沒有問題，但它真正的設備 （尤其是在某些情況下，例如一種低記憶體狀態） 上可能會失敗。 或者，您的應用程式實際上可能失敗在模擬器上，雖然它在實際設備上只是正常工作。 
*   模擬程式只是： 模擬器。 他們並不代表您的應用程式將在一個物理設備上運行的多好。 例如，一些模擬器可能呈現您的應用程式與顯示出現亂碼，雖然實際設備沒有任何問題。 （如果你確實遇到此問題，禁用在模擬程式中的主機 GPU。
*   模擬器都比您的物理設備一般快。 模擬器，另一方面，是通常速度較慢。 由它在模擬器或模擬器中的執行不判斷您的應用程式的性能。 做以它對光譜的實際設備的運行方式來判斷您的應用程式的性能。
*   它是不可能為您的應用程式如何回應通過使用模擬器或模擬器的觸摸得到的感覺很好。 相反，真正的設備上運行的應用程式可以點出大小的使用者介面元素、 反應能力等問題。
*   雖然是很好，以便能夠測試僅在平臺每一台設備上，它是最佳體育許多不同的作業系統版本的很多設備上進行測試。 例如，什麼作品對你特別的 Android 智慧手機上可能會失敗另一個 Android 設備。 什麼工作 7 的 iOS 設備上的 iOS 6 設備上可能會失敗。

當然，它是不可能在市場上的每個可能的設備上進行測試。 出於此原因，它是明智的招聘很多測試人員有不同的設備。 雖然他們不會抓住每一個問題，機會是很好他們會發現怪癖和你永遠找不到一個人的問題。

提示： 它有可能在 Android 結點設備輕鬆地閃爍，不同版本的 android 系統到設備上。 這個簡單的過程將使您能夠輕鬆地測試您的應用程式在不同級別的 Android 與單個設備上無排尿您的保修或你"的根"或"越獄"到您的設備。 谷歌 Android 工廠圖片和說明位於： HTTPs://developers.google.com/android/nexus/images#instructions

# 調試

調試科爾多瓦需要進行一些設置。與不同的桌面應用程式，你只需打開 dev 工具無法在您的行動裝置上，並開始調試，幸運的是有一些不錯的方案。

## Safari 遠端偵錯

第一個選項是 Safari 遠端偵錯。 這工作只在 OSX 和僅與 iOS 6 （和更高）。 它使用 Safari 來連接到您的設備 （或模擬器），並將連接科爾多瓦應用程式瀏覽器的開發工具。 你得到你想要從 dev 工具-DOM 檢查/操作、 JavaScript 調試器、 網路檢測、 主控台和更多。 有關更多詳細資訊，請參閱這篇優秀博客： [HTTP://moduscreate.com/enable-remote-web-inspector-in-ios-6/][13]

 [13]: http://moduscreate.com/enable-remote-web-inspector-in-ios-6/]

## Chrome 遠端偵錯

幾乎與 Safari 版本相同，這與 Android 只有但可以從任何桌面作業系統使用。 它需要的 Android 4.4 (KitKat) 最低、 最低 API 級別的 19 和鉻 30 + （桌面）。 一旦連接，您可以得到相同的 Chrome Dev 工具體驗您的移動應用程式與桌面應用程式一樣。 更好的 Chrome Dev 工具有鏡像選項，顯示了您在行動裝置上運行的應用程式。 這是不僅僅是一個視圖-你可以滾動並按一下從開發工具和它更新在行動裝置上。 Chrome 遠端偵錯功能的更多詳細資訊可在這裡找到： [HTTPs://developers.google.com/chrome/mobile/docs/debugging][14]

 [14]: https://developers.google.com/chrome/mobile/docs/debugging

它是可能要使用 Chrome Dev 工具檢查 iOS 的應用程式，通過 WebKit 代理： [HTTPs://github.com/google/ios-webkit-debug-proxy/][15]

 [15]: https://github.com/google/ios-webkit-debug-proxy/

## 波紋

紋波是科爾多瓦專案桌面基於的模擬器。 基本上，它允許您在您的桌面應用程式中運行科爾多瓦應用和假科爾多瓦的各種功能。 例如，它可以類比加速度計測試震動的事件。 它通過讓您從您的硬碟中選擇圖片假貨觀景窗 API。 波紋的讓您更多集中在您的自訂代碼，而無需擔心科爾多瓦的外掛程式。 你在這裡可以找出更多關於波紋： [HTTP://ripple.incubator.apache.org/][16]

 [16]: http://ripple.incubator.apache.org/

## Weinre

Weinre 創建可以承載您的科爾多瓦應用程式的遠端偵錯用戶端的本機伺服器。 您已經安裝並啟動它後，你到你科爾多瓦應用程式中複製的程式碼，然後重新開機它。 然後，您可以在您的桌面上，與應用程式一起工作打開 dev 工具面板。 Weinre 並不是很有名 Chrome 和 Safari 遠端偵錯但得益于更大範圍的作業系統和平臺與合作。 可能在這裡找到更多的資訊： [HTTP://people.apache.org/~pmuellr/weinre/docs/latest/][17]

 [17]: http://people.apache.org/~pmuellr/weinre/docs/latest/

## 其他選項

*   黑莓 10 支援以及調試：[文檔][18]
*   你可以調試以及使用火狐瀏覽器的應用程式管理器，請參見[此博客文章][19]和此[MDN 條][20].
*   更多的例子和解釋上面的調試提示，請參閱： [HTTP://developer.telerik.com/featured/a-concise-guide-to-remote-debugging-on-ios-android-and-windows-phone/][21]

 [18]: https://developer.blackberry.com/html5/documentation/v2_0/debugging_using_web_inspector.html
 [19]: https://hacks.mozilla.org/2014/02/building-cordova-apps-for-firefox-os/
 [20]: https://developer.mozilla.org/en-US/Apps/Tools_and_frameworks/Cordova_support_for_Firefox_OS#Testing_and_debugging
 [21]: http://developer.telerik.com/featured/a-concise-guide-to-remote-debugging-on-ios-android-and-windows-phone/

# 使用者介面

生成科爾多瓦的應用程式，看起來不錯的移動可以是一種挑戰，尤其是對於開發人員。 很多人選擇了使用 UI 框架，使這更容易。 這裡是一個你可能想要考慮的選項的簡短清單。

*   [jQuery 移動][8]-jQuery 移動自動增強了您的移動優化的佈局。它還處理自動為您創建一個水療中心。
*   [離子][22]-此功能強大的 UI 框架實際上有它自己的 CLI 來處理創建專案。 
*   [棘輪][23]-帶給你的那些創建引導的人。 
*   [劍道 UI][4] -開放原始碼的使用者介面和應用程式框架從 Telerik。
*   [面漆][24]
*   [ReactJS][6]

 [22]: http://ionicframework.com/
 [23]: http://goratchet.com/
 [24]: http://topcoat.io

建立您的使用者介面，時，重要的是要想想所有的平臺，您的目標和使用者的期望之間的差異。 例如，有 iOS 風格 UI 的 Android 應用程式可能不會很好與使用者。 這有時是甚至由實施的各種應用程式商店。 因此，它是重要的是你尊重每個平臺的各項公約，因此熟悉各種人機界面指南： * [iOS][25] * [Android][26] * [Windows Phone][27]

 [25]: https://developer.apple.com/library/ios/documentation/userexperience/conceptual/MobileHIG/index.html
 [26]: https://developer.android.com/designWP8
 [27]: http://dev.windowsphone.com/en-us/design/library

## 其他 UI 文章和資源

雖然瀏覽器引擎成為更多、 更多的標準投訴，但我們仍然生活在一個帶首碼的世界 (-webkit 和-女士) 以下文章是寶貴的跨瀏覽器的應用程式開發中的使用者介面的為時： [HTTP://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx][28]

 [28]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx

# 保持

這裡有幾個方法，讓與科爾多瓦，日期。

*   訂閱[科爾多瓦的博客][29].
*   訂閱到[開發者清單][30]。請注意--這不是一個支援組 ！而是這是一個地方發展的科爾多瓦討論的地方。

 [29]: http://cordova.apache.org/#news
 [30]: http://cordova.apache.org/#mailing-list

# 獲取説明

下面的連結是最好的地方去科爾多瓦的説明：

*   計算機： [HTTP://stackoverflow.com/questions/tagged/cordova][31]通過使用科爾多瓦標記，您可以查看和流覽科爾多瓦的所有問題。 請注意計算機會自動將轉換到"科爾多瓦""Phonegap"標記，所以這種方式你將能夠訪問歷史問題以及
*   PhoneGap 谷歌組: [HTTPs://groups.google.com/forum/#! 論壇/phonegap][32]此谷歌組是科爾多瓦仍然調用 PhoneGap 時的老支援論壇。 雖然仍有很多頻繁的這一組的科爾多瓦使用者，科爾多瓦表示，社會上有興趣在聚焦較少對此組和支援而不使用計算機
*   Meetup： [HTTP://phonegap.meetup.com][33] -考慮尋找本地的科爾多瓦/PhoneGap meetup 組

 [31]: http://stackoverflow.com/questions/tagged/cordova
 [32]: https://groups.google.com/forum/#!forum/phonegap
 [33]: http://phonegap.meetup.com