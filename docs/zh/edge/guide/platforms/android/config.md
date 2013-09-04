---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied. See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# Android 系統組態

`config.xml`檔控制科爾多瓦的各種設置。這些應用跨應用程式，和每個 CordovaWebView 實例。

## `< 首選項 >`

各種其他首選項 （作為 `<preference>` 標籤） 預設情況下，不打破現有的應用程式。可用的選擇是：

*   `useBrowserHistory`(boolean 類型的值，預設值為 `true` ）： 設置為 `false` 如果您想要使用被用來解決目前在之前的歷史修復 Android 3.x 中的標籤錯誤歷史墊片。 （注意： 此設置將會在 2013 年 4 月已棄用)

*   `loadingDialog`： 顯示本機載入對話方塊載入應用程式時。值的格式是*標題、 消息*

*   `loadingPageDialog`： 顯示本機載入對話方塊載入的子頁面時。值的格式是*標題、 消息*

*   `errorUrl`： 設置您的應用程式的錯誤頁。應設在 Android 專案中`file://android_asset/www/`

*   `backgroundColor`： 設置您的應用程式的背景色。 支援四個位元組的十六進位值，以表示 Alpha 值，並採用標準的 RGB 值以下的三個位元組的第一個位元組。 例如， `0x00000000` 是黑色的。

*   `loadUrlTimeoutValue`： 多少科爾多瓦投擲逾時錯誤的應用程式之前應等待的時間。

*   `keepRunning`(boolean 類型的值，預設值為 `true` ）： 確定是否科爾多瓦保持在後臺運行。

*   `splashscreen`： 減去其副檔名的檔的名稱 `res/drawable` 目錄。 如果您有多項資產，他們都必須共用此共同在它們各自的目錄名稱。

*   `disallowOverscroll`(boolean 類型的值，預設值為 `false` ）： 設置為 `true` 禁用所發出的光芒，當使用者滾動 web 視圖的邊緣之外。

## `< 外掛程式 >`

Android 系統支援使用 `<feature>` 作為類似物的 `<plugin>` 元素。