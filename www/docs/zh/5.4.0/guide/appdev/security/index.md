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

title: 安全指南
---

# 安全指南

以下指南包括開發科爾多瓦的應用程式時，應考慮一些安全最佳做法。 請務必注意安全是一個非常複雜的主題，因此本指南不是詳盡無遺。 如果你認為你可以貢獻本指南，請隨時在科爾多瓦的 bug 追蹤器下["文檔"][1]中檔的問題。 本指南旨在適用于一般科爾多瓦發展 （所有平臺），但將指出特定于平臺的特殊注意事項。

 [1]: https://issues.apache.org/jira/browse/CB/component/12316407

## 本指南討論了下列主題：

*   白名單
*   Iframe 和回檔 Id 機制
*   證書寄
*   自簽名的證書
*   加密的存儲
*   一般提示
*   推薦的文章和其他資源

## 白名單

*   閱讀和理解，白名單指南

*   域白名單不能在 Android API 10 及以下，WP8 iframe 和用戶端代碼。 這意味著攻擊者可以載入任何域中的 iframe，在 iframe 內頁面上的任何腳本可以直接存取科爾多瓦 JavaScript 物件和相應的本機 JAVA 物件。 當為這些平臺構建應用程式時，應考慮到這種情況。 在實踐中這意味著確保目標高於 10，Android API 和如果可能的話您不使用 iframe 載入外部內容-使用 inAppBrowser 外掛程式或其他協力廠商外掛程式。

## Iframe 和回檔 Id 機制

如果內容提供在 iframe 從白名單中的域中，該域將可以訪問到本機的科爾多瓦橋。 這意味著，如果白名單中的協力廠商廣告網路和服務通過 iframe 的那些廣告，它有可能是惡意的廣告將能夠打破 iframe 並執行惡意操作。 因此，您通常不應使用 iframe 除非你控制的伺服器的承載的 iframe 內容。 此外請注意有協力廠商外掛程式提供支援的廣告網路。 注意此語句不是真正的 iOS，攔截一切包括 iframe 的連接。

## 證書寄

科爾多瓦不支援真正的證書固定。 對此的一個主要障礙是證書的缺乏在 android 系統中的本機 Api 攔截 SSL 連線執行檢查伺服器。 （雖然有可能要做證書寄于 Android 在 JAVA 中使用 JSSE，c + +，編寫在 android 系統上的 web 視圖和 web 視圖為你處理伺服器連接，所以它是不可能有使用 JAVA 和 JSSE)。因為 Apache 科爾多瓦要跨多個平臺提供一致的 Api，不具有能力的一個主要平臺打破了這種一致性。

有種方法近似證書鎖定，如檢查伺服器的公開金鑰 （指紋） 預期值，當您的應用程式啟動時或在其他不同的時間，在您的應用程式的存留期內。 有協力廠商外掛程式可供能不能做到的科爾多瓦。 然而，這不是真實證書將鎖定，將自動驗證每個連接到伺服器上的預期值相同。

## 自簽名的證書

不建議在您的伺服器上使用自簽名的證書。 如果你渴望 SSL，那麼強烈建議您的伺服器具有已正確地簽署了著名的 CA （憑證授權單位） 的證書。 不能做真正的證書寄使這一重要。

原因是接受自簽名的證書繞過憑證連結驗證，它允許任何伺服器憑證才被視為有效的設備。 這將打開溝通的人在中間的攻擊。 它變得非常容易為駭客不僅攔截並讀取在設備和伺服器之間的所有通信，但也要修改通信。 設備永遠不會知道這種情況發生，因為它不會驗證服務器的證書由受信任的 CA 簽署。 該設備具有伺服器是它期望的人沒有證據證明。 因為做的人在中間攻擊的易用性，接受自簽名的證書才略微比只在不受信任的網路上運行而不是 HTTPs 的 HTTP。 是的交通將會被加密，但它可能會用金鑰加密從一個男人-中--中間，所以攔截中可以訪問的一切，所以加密是無用除了對被動的觀察員。 使用者信任 SSL 以是安全的和這將故意做出它不安全的所以，SSL 利用成為具誤導性。 如果這將受信任的網路上使用 （即，您是完全控制企業內部），然後仍不建議使用自簽名的證書。 在受信任的網路中的兩項建議是因為網路本身是受信任的只是使用 HTTP 或獲取由受信任的 CA （不自簽名） 簽署的證書。 網路是受信任的或者它不是。

在這裡所描述的原則不是特定于 Apache 科爾多瓦，它們適用于所有用戶端-伺服器通信。

當運行時科爾多瓦在 android 系統上，使用 `android:debuggable="true"` 應用程式中清單將允許 SSL 錯誤，例如憑證連結驗證錯誤的自簽章憑證。 所以您可以在此配置中，使用自簽名的證書，但這不是一種配置，您的應用程式是在生產時，應使用。 意思是，只有在應用程式開發期間使用。

## 加密的存儲

（TBD）

## 一般提示

### 不要使用 Android 姜餅 ！

*   設置您的 min-目標-sdk 級別高於 10。API 10 是姜餅，和姜餅由谷歌或設備製造商，不再受支援，因此不推薦由科爾多瓦隊。 
*   姜餅已被證明是不安全和最大的一個有針對性的移動開放源碼軟體[HTTP://www.mobilemag.com/2012/11/06/andriod-2-3-gingerbread-security/][2]. 
*   在 Android 上的白名單不工作與姜餅或更低。 這意味著攻擊者可以載入，然後會對所有的科爾多瓦 Api 的訪問，可以使用該存取權限來竊取個人資料、 發送 SMS 消息到溢價率的數位，以及執行其他惡意行為的 iframe 中的惡意程式碼。 

 [2]: http://bgr.com/2012/11/06/android-security-gingerbread-malware/

### 使用 InAppBrowser 的外部連結

*   打開任何外部網站的連結時，請使用 InAppBrowser。 這是比白一個功能變數名稱和直接在您的應用程式中包括的內容，因為 InAppBrowser 將使用本機瀏覽器的安全功能，並不會給網站訪問到您的科爾多瓦環境安全得多。 即使您信任的協力廠商網站，並將其包括在您的應用程式中直接，那協力廠商網站可能連結到惡意 web 內容。 

### 驗證所有使用者輸入

*   始終驗證您的應用程式接受的任何和所有輸入。 這包括使用者名、 密碼、 日期、 上載的媒體等。 因為攻擊者可以操縱您的 HTML 和 JS 資產 （無論是通過反編譯您的應用程式或使用像 chrome://inspect 這樣的調試工具），這應該也執行驗證您在伺服器上，尤其是在將資料提交給任何後端服務之前。 
*   其他來來源資料應進行的驗證： 使用者文檔、 連絡人、 推式通知

### 不緩存敏感性資料

*   如果使用者名、 密碼、 地理定位資訊和其他敏感性資料被緩存，然後它可以潛在檢索以後由未經授權的使用者或應用程式。

### 除非你知道你在做什麼，否則不要使用 eval()

*   JavaScript 函數 eval() 有被虐待的歷史悠久。不正確地使用它，可以打開您的代碼注入攻擊，調試困難和代碼執行速度變慢了。 

### 不要假定您的原始程式碼是安全的

*   因為從 HTML 和 JavaScript 的資產在本機容器中獲取打包生成的科爾多瓦應用程式，不應考慮您的代碼是安全的。 它是可能要進行反向工程科爾多瓦應用程式。 

## 推薦的文章和其他資源

*   [HTML5 安全作弊，詳細說明了如何確保您的 HTML5 應用程式][3]
*   [Phonegap 條設備安全問題，例如，使用加密的資料][4]
*   [關於 web 視圖中的眾所周知的安全缺陷白皮書基於混合應用程式][5]

 [3]: https://www.owasp.org/index.php/HTML5_Security_Cheat_Sheet
 [4]: https://github.com/phonegap/phonegap/wiki/Platform-Security
 [5]: http://www.cis.syr.edu/~wedu/Research/paper/webview_acsac2011.pdf