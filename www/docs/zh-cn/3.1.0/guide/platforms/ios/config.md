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

title: iOS 配置
---

# iOS 配置

`config.xml`檔控制應用於每個應用程式和 CordovaWebView 實例的應用程式的基本設置。 本節詳細說明僅適用于 iOS 版本的首選項。 有關全域配置選項，請參閱 config.xml 檔的資訊。

*   `EnableViewportScale`(boolean 類型的值，預設值為 `false` ）： 設置為 `true` 使用視區的元標記來禁用或限制的使用者縮放的範圍。
    
        <preference name="EnableViewportScale" value="true"/>
        

*   `MediaPlaybackRequiresUserAction`(boolean 類型的值，預設值為 `false` ）： 設置為 `true` 以防止 HTML5 視頻自動播放的 `autoplay` 屬性。 調用時，不適用 `play()` 視頻物件上。
    
        <preference name="MediaPlaybackRequiresUserAction" value="true"/>
        

*   `AllowInlineMediaPlayback`(boolean 類型的值，預設值為 `false` ）： 設置為 `true` ，讓 HTML5 播放媒體顯示*內聯*的螢幕佈局，使用瀏覽器提供的控制項，而不是本機控制項內。 為此，添加 `webkit-playsinline` 歸咎于任何 `<video>` 的元素。
    
        <preference name="AllowInlineMediaPlayback" value="true"/>
        

*   `BackupWebStorage`（字串，或者 `none` ， `local` ，或預設的 `cloud` ）： 設置為 `cloud` 允許通過 iCloud 備份到 web 存儲資料。 設置為 `local` ，使得只有本地備份通過 iTunes 同步。 設置為 `none` 防止 web 存儲備份。
    
        <preference name="BackupWebStorage" value="local"/>
        

*   `TopActivityIndicator`（字串，預設值為 `gray` ）： 控制指示大量的處理器活動的狀態列中的旋轉的小圖示的外觀。 有效的值為 `whiteLarge` ， `white` ，和`gray`.
    
        <preference name="TopActivityIndicator" value="white"/>
        

*   `FadeSplashScreen`(boolean 類型的值，預設值為 `true` ）： 設置為 `false` 以防止褪色和縮小其顯示狀態發生更改時初始螢幕。
    
        <preference name="FadeSplashScreen" value="false"/>
        

*   `FadeSplashScreenDuration`（浮動，預設值為 `2` ）： 指定的初始螢幕的秒數淡出效果來執行。
    
        <preference name="FadeSplashScreenDuration" value="4"/>
        

*   `ShowSplashScreenSpinner`(boolean 類型的值，預設值為 `true` ）： 設置為 `false` 隱藏初始螢幕微調框。
    
        <preference name="ShowSplashScreenSpinner" value="false"/>
        

*   `KeyboardDisplayRequiresUserAction`(boolean 類型的值，預設值為 `true` ）： 設置為 `false` ，允許鍵盤出現在調用時 `focus()` 形式投入。
    
        <preference name="KeyboardDisplayRequiresUserAction" value="false"/>
        

*   `SuppressesIncrementalRendering`(boolean 類型的值，預設值為 `false` ）： 設置為 `true` 等待，直到在呈現到螢幕之前已收到的所有內容。
    
        <preference name="SuppressesIncrementalRendering" value="true"/>
        

*   `KeyboardShrinksView`(boolean 類型的值，預設值為 `false` ）： 設置為 `true` 規模 web 視圖，當鍵盤出現時，重寫預設 beavior，沿垂直方向縮小視區。 這與匹配 Android 應用程式的預設的行為。
    
        <preference name="KeyboardShrinksView" value="true"/>
        

*   `GapBetweenPages`（浮動，預設值為 `` ）： 的大小，以磅為單位，頁面之間的差距。
    
        < 首選項名稱 = 值"GapBetweenPages"="0"/ >
        

*   `PageLength`（浮動，預設值為 `` ）： 中點，在頁面流的方向每個頁面的大小。 當 PaginationMode 是從右至左或從左至右，此屬性工作表示每個頁面的寬度。 PaginationMode topToBottom 或 bottomToTop 時，此屬性工作表示每個頁面的高度。 預設值為 0，這意味著佈局使用視區的大小來確定頁面的尺寸。
    
        < 首選項名稱 = 值"PageLength"="0"/ >
        

*   `PaginationBreakingMode`（字串，預設值為 `page` ）： 有效的值為 `page` 和 `column` 。在列或頁斷發生的方式。 此屬性確定是否某些 CSS 屬性關於列和頁打破是榮幸還是忽略。 當此屬性設置為 `column` ，內容尊重相關的頁斷的地方斷列的 CSS 屬性。
    
        < 首選項名稱 = 值"PaginationBreakingMode"="第頁"/ >
        

*   `PaginationMode`（字串，預設值為 `unpaginated` ）： 有效的值為 `unpaginated` ， `leftToRight` ， `topToBottom` ， `bottomToTop` ，和 `rightToLeft` 。 此屬性確定是否在 web 視圖中的內容劃分為一次填充視圖一螢幕的頁或一個長的滾動視圖所示。 如果設置為一個分頁的表單，此屬性切換分頁的佈局上的內容，導致其內容的 web 視圖使用重新佈局的 PageLength 和 GapBetweenPages 的值。
    
        < 首選項名稱 = 值"PaginationMode"="分頁"/ >