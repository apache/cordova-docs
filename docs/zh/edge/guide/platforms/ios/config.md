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

# iOS 配置

`config.xml`設置檔控制科爾多瓦的各種設置。 這是應用廣泛，並不設置每個 CDVViewController 實例。 `config.xml`檔位於您 `<project folder>/<appname>` 目錄。

## `< 首選項 >`

各種首選項 （作為 `<preference>` 標籤） 預設情況下，不打破現有的應用程式。可用的選擇是：

*   `DisallowOverscroll`(boolean 類型的值，預設值為 `false` ）： 設置為 `true` 如果你不想對橡膠帶 web 視圖。

*   `TopActivityIndicator`（字串，預設值為 `gray` ）： 這是欄中的狀態/電池頂部紡 throbber，有效的值是 `whiteLarge` ， `white` ，和`gray`.

*   `EnableLocation`(boolean 類型的值，預設值為 `false` ）： 設置為 `true` 、 初始化啟動時的地理定位外掛程式 （以便在您所在的位置上的修補程式可以更準確）**已否決**： 請設置 `onload` 屬性的 `Geolocation` 外掛程式的 `true` 相反。

*   `EnableViewportScale`(boolean 類型的值，預設值為 `false` ）： 設置為 `true` ，防止結垢通過 meta 標記的視區。

*   `AutoHideSplashScreen`(boolean 類型的值，預設值為 `true` ）： 設置為 `false` ，控制通過 JavaScript API 閃屏被隱藏時。

*   `FadeSplashScreen`(boolean 類型的值，預設值為 `true` ）： 設置為 `false` ，防止出現閃屏，淡出時顯示或隱藏它。

*   `FadeSplashScreenDuration`（浮動，預設值為 2）： 初始螢幕淡入淡出時間以秒為單位。

*   `ShowSplashScreenSpinner`(boolean 類型的值，預設值為 `true` ）： 設置為 `false` 隱藏初始螢幕微調框。

*   `MediaPlaybackRequiresUserAction`(boolean 類型的值，預設值為 `false` ）： 設置為 true，不允許 autoplayed HTML5 視頻。

*   `AllowInlineMediaPlayback`(boolean 類型的值，預設值為 `false` ）： 設置為 true，以允許內聯 HTML5 播放媒體，此外，在 HTML 文檔中的視頻元素還必須包括 webkit playsinline 屬性。

*   `BackupWebStorage`（字串，預設值為 `cloud` ）： 有效的值為 `none` ， `cloud` 和 `local` 。 設置為 `cloud` ，允許 web 存儲資料要備份到 iCloud，並將設置為 `local` ，僅允許本地備份 （iTunes 同步）。 設置為 `none` ，不允許任何備份 web 存儲。

*   `KeyboardDisplayRequiresUserAction`(boolean 類型的值，預設值為 `true` ）： 設置為 false 時表單元素獲得焦點通過 JavaScript focus() 調用打開鍵盤。

*   `SuppressesIncrementalRendering`(boolean 類型的值，預設值為 `false` ）： 它在呈現之前已收到設置為 true，等待，直到新的所有視圖的內容。

*   `HideKeyboardFormAccessoryBar`(boolean 類型的值，預設值為 `false` ）： 設置為隱藏的附加工具列的鍵盤上面是真實。 此工具列功能**上一頁**、**下一頁**，和**做**按鈕。

*   `KeyboardShrinksView`(boolean 類型的值，預設值為 `false` ）： 設置為 `true` 當鍵盤後縮小 web 視圖。 Web 視圖縮小，而不是視區萎縮和可滾動頁面。 這適用于應用程式，它們相對於底部的 web 視圖的元素的位置。 這是在 android 系統裡的預設行為，構建應用程式而不是網頁時發出很大的意義。