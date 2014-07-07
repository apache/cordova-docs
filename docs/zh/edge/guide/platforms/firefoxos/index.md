* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# 火狐瀏覽器作業系統平臺指南

本指南介紹了如何設置您的開發環境創建科爾多瓦應用程式為火狐 OS 的設備，然後測試和發佈這些應用程式。

## 要求和支援

火狐瀏覽器作業系統的應用程式，基本上只是為 web 應用程式，加上一個 manifest.webapp 檔，定義了有關應用程式的中繼資料，並允許它在火狐瀏覽器作業系統的設備上安裝。 可以使用任何科爾多瓦支援的平臺。要找出有關構建 web 應用程式的詳細資訊，請諮詢上[國語][1]的[App 中心][2].

 [1]: https://developer.mozilla.org/en-US/
 [2]: https://developer.mozilla.org/en-US/Apps

## 安裝和環境設置

第一次安裝[Node.js][3]，然後安裝科爾多瓦包就像這樣：

 [3]: http://nodejs.org/

    $ npm install -g cordova
    

接下來，創建一個示例科爾多瓦應用程式，然後導航到新創建的目錄：

    $ cordova create test-app
    $ cd test-app
    

火狐瀏覽器作業系統作為受支援的平臺添加到在以下應用程式：

    $ cordova platform add firefoxos
    

這將創建一個火狐瀏覽器操作系統應用程式平臺/firefoxos/www 目錄，目前看起來都一樣除了，它已在 www 目錄的火狐瀏覽器的清單檔 (manifest.webapp) 中。

## 開發您的應用程式

此時你準備好去 — — 測試-app/www 裡面的代碼更改為任何你想要您的應用程式會。 你可以向應用程式，例如使用"科爾多瓦外掛程式添加"，添加[支援的外掛程式]()：

    cordova plugin add org.apache.cordova.device
    cordova plugin add org.apache.cordova.vibration
    

您還需要將一個自訂的 manifest.webapp 檔添加到您的測試-app/www 目錄，應當至少包括以下內容：

    { 
        "launch_path":"/index.html",
        "installs_allowed_from":["*"],
        "version":"0.0.1",
        "name":"My app",
        "pkgName":"io.cordova.hellocordova",
        "icons": {
            "128": "/img/logo.png"
        }
    }
    

火狐瀏覽器的應用程式清單的更多資訊，請閱讀在 MDN 上的[應用程式清單][4]。

 [4]: https://developer.mozilla.org/en-US/Apps/Developing/Manifest

您的應用程式代碼寫入時，將更改部署到您已經添加到您的專案的火狐瀏覽器操作系統應用程式

    $ cordova prepare
    

請注意生成步驟 （即科爾多瓦構建） 時不需要將部署到火狐瀏覽器作業系統平臺，如火狐瀏覽器操作系統應用程式是基於 HTML 的並因此不編譯。

## 測試和調試

可以使用火狐瀏覽器作業系統[的應用程式管理器][5]測試應用程式.

 [5]: https://developer.mozilla.org/en-US/Firefox_OS/Using_the_App_Manager

當您已連接到您測試設備模擬器的應用程式管理器時，選擇"添加打包的應用程式"選項，然後確保您指向測試-app/平臺/firefoxos/www/目錄管理器介面中包括該應用程式。

在這裡，您可以安裝 app 上您測試設備/模擬器 (與"更新"按鈕）。使用"調試"按鈕然後可以調試應用程式，並編輯它的代碼生活。

注意： 要發佈您的應用程式在嘗試之前你應該考慮驗證它使用[應用程式驗證程式][6].

 [6]: https://marketplace.firefox.com/developers/validator

## 發佈您的應用程式對火狐瀏覽器市場

您可以提交您的應用程式到火狐瀏覽器市場的需求，或發佈它自己。 上國語，瞭解更多有關如何執行此 ； 訪問[火狐瀏覽器市場區][7][應用程式發佈選項][8]是最好的地方開始。

 [7]: https://developer.mozilla.org/en-US/Marketplace
 [8]: https://developer.mozilla.org/en-US/Marketplace/Publishing/Publish_options