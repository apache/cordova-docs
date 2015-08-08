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

# Windows 8 平臺指南

本指南介紹如何設置您的 SDK 開發環境為 Windows 8 部署科爾多瓦的應用程式。請參閱下列特定于平臺的詳細資訊：

*   升級 Windows 8
*   Windows 8 的命令列工具

上面的命令列工具請參閱科爾多瓦 3.0 以前的版本。關於當前介面的資訊，請參閱命令列介面。

Microsoft 不推薦使用在 Windows 8 和 Windows 室溫下*地鐵風格的應用程式*名稱 MSDN 現在指的是這種類型的應用程式作為*Windows 應用商店*的應用程式，並且本指南跟隨該公約 》。 此外，在本指南中*Windows 8*表示 Windows 8 和 Windows 室溫下

## 1.要求

*   Windows 8

*   Visual Studio 2012 專業或更好或 Visual Studio 2012 表示為 Windows 8

按照說明[在這裡][1]提交您的應用程式 Windows 存儲區。

 [1]: http://www.windowsstore.com/

## 2.安裝 SDK + 科爾多瓦

*   設置您的 Visual Studio 2012 的首選變形。 所有產品的付費版本 (專業、 等) 讓您構建 Windows 應用商店的應用程式。 你需要**表達為 Windows 8**來構建 Windows 應用商店應用程式使用的[速成版][2].

*   下載並解壓縮[科爾多瓦][3]的最新副本。你將會工作 `lib\windows-8` 子目錄。

 [2]: http://www.microsoft.com/visualstudio/eng/products/visual-studio-express-products
 [3]: http://phonegap.com/download

## 3.設置新專案

你已經可以生成使用*HTML/JavaScript 跟蹤*在 Windows 應用商店的應用程式中可用的 Windows 8 應用程式。 在 Windows 應用商店的應用程式中使用科爾多瓦，正如在其他科爾多瓦支援的平臺上公開相同的 Api。

*   打開 Visual Studio 2012 並選擇**新的專案**.

*   從專案清單從樹，然後**空白應用程式**選擇**安裝 → 範本 → 其它語言 → JavaScript → Windows 存儲區**。 輸入你喜歡的如無論專案名稱 `CordovaWin8Foo` 如本示例所示。

    ![][4]

*   Microsoft 將繼續使用 `default.html` 作為預設的主頁，但大多數的 網頁程式開發人員使用 `index.html` 。 （再加上它是有可能的在其他平臺變形的您的專案中使用的 `index.html` 作為您的預設頁的名稱.)若要修復此問題，在解決方案資源管理器中重命名 `default.html` 檔到 `index.html` 。 然後按兩下 `package.appxmanifest` 檔，並將**起始頁**該值更改為`index.html`.

    ![][5]

*   要包括 `cordova.js` 在專案中，按右鍵 `js` 目錄在解決方案資源管理器並選擇**添加 → 新專案**。 找到 `cordova.js` 檔在 `lib\windows-8` 上面指出的目錄。

*   編輯的代碼為 `index.html` 。將引用添加到 `cordova.js` 。您可以手動，或通過從解決方案資源管理器中拖動檔。

 [4]: {{ site.baseurl }}/static/img/guide/platforms/win8/wsnewproject.png
 [5]: {{ site.baseurl }}/static/img/guide/platforms/win8/wschangemanifest.png

### 增加參考......

        <! — — WinJS 的引用--> < 連結 href="//Microsoft.WinJS.1.0/css/ui-dark.css"rel ="樣式表"/ >< 腳本 src="//Microsoft.WinJS.1.0/js/base.js">< / 腳本 >< 腳本 src="//Microsoft.WinJS.1.0/js/ui.js">< / 腳本 ><! — — 科爾多瓦--> < 腳本 src="/js/cordova.js">< / 腳本 ><! — — CordovaWin8Foo 的引用--> < 連結 href="/css/default.css"rel ="樣式表"/ >< 腳本 src="/js/default.js">< / 腳本 >


*   下一步，添加一些代碼，演示科爾多瓦工作。

### 添加 'deviceready' 處理......

    <body>
        <p>Content goes here</p>

        <script type="text/javascript">

            console.log("Subscribing...");
            document.addEventListener("deviceready", function () {

                navigator.notification.alert("The device is ready!");

            });

        </script>

    </body>


## 5.測試專案

*   從 Visual Studio 中運行該專案。你會看到顯示的訊息方塊：

    ![][6]

 [6]: {{ site.baseurl }}/static/img/guide/platforms/win8/wsalert.png

## 完成了 ！

就這麼簡單 ！你現在準備好建立 Windows 應用商店的應用，科爾多瓦。
