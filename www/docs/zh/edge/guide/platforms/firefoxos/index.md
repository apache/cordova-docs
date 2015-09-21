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

title: 火狐瀏覽器作業系統平臺指南
---

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

    cordova plugin add cordova-plugin-device
    cordova plugin add cordova-plugin-vibration
    

當編寫應用程式代碼時，將您的更改部署到您已經添加到您的專案與火狐瀏覽器操作系統應用程式

    $ cordova prepare firefoxos
    

若要創建一個打包的應用程式之一可以郵編平臺/firefoxos/www 目錄。簡單地也可以生成使用

    $ cordova build firefoxos
    

火狐瀏覽器作業系統封裝的應用程式將在 platforms/firefoxos/build/package.zip 建成

## 測試和調試

可以使用火狐瀏覽器作業系統 [Web IDE][4] 測試應用程式.

 [4]: https://developer.mozilla.org/en-US/docs/Tools/WebIDE

當您已連接到您的測試設備/模擬器 Web IDE 時，請選擇"打開打包應用程式"選項，然後確保您指向測試-app/platforms/firefoxos/www/目錄要在 Manager 介面中包含該應用程式。

在這裡你可以在你測試設備/模擬器 （與"播放"按鈕） 上安裝應用程式。使用"暫停"按鈕，然後可以調試應用程式並編輯它的代碼生活。

注意： 要發佈您的應用程式在嘗試之前你應該考慮驗證它可以使用 [應用程式驗證程式][5].

 [5]: https://marketplace.firefox.com/developers/validator

## 發佈您的應用程式對火狐瀏覽器市場

您可以提交您的應用程式到火狐瀏覽器市場的需求，或發佈它自己。 [火狐瀏覽器市場區][6] 拜訪 MDN 來瞭解更多有關如何做到這一點 ；[應用程式發佈選項][7] 是最佳的地方開始。

 [6]: https://developer.mozilla.org/en-US/Marketplace
 [7]: https://developer.mozilla.org/en-US/Marketplace/Publishing/Publish_options