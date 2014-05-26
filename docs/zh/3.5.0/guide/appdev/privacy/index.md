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

# 隱私指南

手機隱私是每個應用程式開發者必須解決的關鍵問題。 您的使用者期望將搜集他們的私人資訊，並由您的應用程式得到適當的處理。此外，有越來越多的現在有關于手機隱私慣例的法律要求司法管轄區。

本指南中的移動應用程式的隱私應被視為一*底漆*處理一些最重要的問題。 它概述了人們廣泛接受的一些最佳做法，並提供到其他更詳細的指南和參考參考。

*   **私隱政策**： 您的應用程式應包括私隱政策，解決什麼樣的資訊您的應用程式收集來自或關於您的使用者、 如何使用這些資訊，與誰它共用的和如何使用者可以在應用程式內私隱有關的選擇等主題。以説明理解，你應該使用普通語言和避免技術術語。 你應該使您的隱私權原則可供使用者之前下載，如審查的 app 描述中的應用市場。 此外，應使您的隱私權原則可用在該應用程式本身的範圍內。 有限的行動裝置的顯示大小創建用於向使用者顯示私隱政策的挑戰。 考慮發展一種*縮寫形式*的政策，其中包括最重要的資訊，，然後在更多的細節感興趣的人提供一個連結到"長表"政策。 幾個小組正試圖開發基於圖示通信隱私慣例，你可能想要考慮一旦這些標準成熟的標準。

*   **敏感資訊的收集**： 敏感的個人資訊的應用程式的集合將引發重要隱私問題。 敏感的個人資訊的例子包括敏感的財務資訊，健康的資訊，並從或兒童的資訊。 它還包括從某些感應器和通常發現行動裝置和平板電腦、 地理定位資訊、 連絡人/電話簿、 麥克風/相機和存儲的圖片視頻等的資料庫收集的資訊。 請參見以下文檔頁的詳細資訊：[相機][1]、[捕獲][2]、[連絡人][3]和[地理定位][4]。 一般情況下，您應該獲得使用者的明確許可之前收集敏感資訊，如果可能的話，提供一種控制機制，使使用者可以輕鬆地更改許可權。 應用程式的作業系統可以説明在某些情況下提出只是時間的對話方塊，要求使用者的許可權前集合。 在這些情況下，一定要利用任何機會，若要自訂對話方塊的框文本，以澄清如何應用程式使用，並且，如果適用，將共用此類資訊。

*   **避免使用者驚喜**： 如果您的應用程式收集或使用中可能向使用者根據您的應用程式 （例如，訪問存儲的圖片的音樂播放機） 的主要目的令人驚訝的方式的資訊，你應該帶類似的步驟作為敏感個人資訊的收集。 這就是，你強烈應考慮只是時間對話方塊通知使用者有關集合或該資訊的使用，並提供一個相應的隱私控制項，如果合適的話，的使用。

*   **協力廠商資料收集或分享**： 如果你的應用程式收集到另一家公司 — — 提供的資訊，如一個社交網路平臺或廣告網路 （例如，如果您的應用程式會顯示廣告) — — 你應該告知該集合的使用者和共用。 至少，您的隱私權原則應該描述資訊收集和共用和，如果合適的話，為您的使用者提供控制能力或退出這種集合或共用。

*   **集合限制和安全**： 您的使用者委託他們的資訊與您的應用程式，他們期望你將會採取適當的安全防範措施來保護它。 避免個人資訊的安全妥協的最佳方法之一併不是在第一次的地方收集的資訊，除非您的應用程式具有集合的一個具體和合法的商業原因。 不會需要收集的資訊，確保你提供適當的安全控制，以保護該資訊，無論它存儲在設備上或在您的後端伺服器上。 您還應開發這款應用和後端伺服器上實施適當的資料保留原則。

 [1]: cordova_camera_camera.md.html
 [2]: cordova_media_capture_capture.md.html
 [3]: cordova_contacts_contacts.md.html
 [4]: cordova_geolocation_geolocation.md.html

以下是一些其他有用手機隱私指南，開發人員：

*   加州總檢察長[私隱去： 移動生態系統的建議][5]

*   民主與技術，隱私論壇，[為手機應用程式開發人員的最佳做法][6]的未來中心

*   CTIA 無線協會、[最佳做法和準則的位置基於服務][7]

*   聯邦貿易委員會，[手機隱私披露： 建立信任通過透明度][8]

*   [應用隱私][9]網站隱私論壇的未來

 [5]: http://oag.ca.gov/sites/all/files/pdfs/privacy/privacy_on_the_go.pdf
 [6]: http://www.futureofprivacy.org/wp-content/uploads/Best-Practices-for-Mobile-App-Developers_Final.pdf
 [7]: http://www.ctia.org/business_resources/wic/index.cfm/AID/11300
 [8]: http://www.ftc.gov/os/2013/02/130201mobileprivacyreport.pdf
 [9]: http://www.applicationprivacy.org