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

title: 外掛程式的 Api
---

# 外掛程式的 Api

科爾多瓦船與一組最小的 Api，和專案添加哪些額外的 Api，它們需要通過外掛程式。

您可以搜索通過所有現有的外掛程式 （包括協力廠商外掛程式） 對[新公共管理][1].

 [1]: https://www.npmjs.com/search?q=ecosystem%3Acordova

傳統的核心科爾多瓦外掛程式集如下所示：

*   [電池狀態][2]
    
    > 監視設備的電池的狀態。

*   [相機][3]
    
    > 捕獲照片使用的設備的相機。

*   [主控台][4]
    
    > 向 console.log() 添加額外的功能。

*   [連絡人][5]
    
    > 與設備接觸資料庫的工作。

*   [設備][6]
    
    > 收集設備特定資訊。

*   [設備運動 （加速度計）][7]
    
    > 進入設備的動作感應器。

*   [設備的方向 (指南針)][8]
    
    > 獲取該設備指向的方向。

*   [對話方塊][9]
    
    > 視覺設備通知。

*   [檔案系統][10]
    
    > 掛接到本機檔案系統通過 JavaScript。

*   [檔案傳輸][11]
    
    > 掛接到本機檔案系統通過 JavaScript。

*   [地理位置][12]
    
    > 使意識到您應用程式的位置。

*   [全球化][13]
    
    > 啟用特定于地區設定的物件表示的形式。

*   [InAppBrowser][14]
    
    > 在另一個應用程式中的瀏覽器實例中啟動的 Url。

*   [媒體][15]
    
    > 錄製和播放音訊檔。

*   [媒體捕獲][16]
    
    > 擷取裝置的媒體捕獲應用程式使用的媒體檔案。

*   [網路資訊 （連接）][17]
    
    > 快速檢查網路狀態和蜂窩網路的資訊。

*   [閃屏][18]
    
    > 顯示和隱藏的應用程式的初始螢幕。

*   [振動][19]
    
    > 振動設備的 API。

*   [顯示狀態列][20]
    
    > 顯示、 隱藏和配置狀況欄背景的 API。

*   [白名單][21]
    
    > 白名單網路請求外掛程式。必須安裝在您的應用程式中有任何網路請求。

*   [舊式的白名單][22]
    
    > 一個外掛程式來之前它被撕開了，並且改變白名單外掛程式中使用舊式的白名單。

 [2]: https://www.npmjs.com/package/cordova-plugin-battery-status
 [3]: https://www.npmjs.com/package/cordova-plugin-camera
 [4]: https://www.npmjs.com/package/cordova-plugin-console
 [5]: https://www.npmjs.com/package/cordova-plugin-contacts
 [6]: https://www.npmjs.com/package/cordova-plugin-device
 [7]: https://www.npmjs.com/package/cordova-plugin-device-motion
 [8]: https://www.npmjs.com/package/cordova-plugin-device-orientation
 [9]: https://www.npmjs.com/package/cordova-plugin-dialogs
 [10]: https://www.npmjs.com/package/cordova-plugin-file
 [11]: https://www.npmjs.com/package/cordova-plugin-file-transfer
 [12]: https://www.npmjs.com/package/cordova-plugin-geolocation
 [13]: https://www.npmjs.com/package/cordova-plugin-globalization
 [14]: https://www.npmjs.com/package/cordova-plugin-inappbrowser
 [15]: https://www.npmjs.com/package/cordova-plugin-media
 [16]: https://www.npmjs.com/package/cordova-plugin-media-capture
 [17]: https://www.npmjs.com/package/cordova-plugin-network-information
 [18]: https://www.npmjs.com/package/cordova-plugin-splashscreen
 [19]: https://www.npmjs.com/package/cordova-plugin-vibration
 [20]: https://www.npmjs.com/package/cordova-plugin-statusbar
 [21]: https://www.npmjs.com/package/cordova-plugin-whitelist
 [22]: https://www.npmjs.com/package/cordova-plugin-legacy-whitelist

通過去外掛程式 github 回購和尋找在 docs 資料夾中可以找到這些外掛程式文檔的非英語翻譯