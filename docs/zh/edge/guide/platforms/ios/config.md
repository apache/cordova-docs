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

`config.xml`檔控制應用於每個應用程式和 CordovaWebView 實例的應用程式的基本設置。 本節詳細說明僅適用于 iOS 版本的首選項。 有關全域配置選項，請參閱 config.xml 檔的資訊。

*   `EnableViewportScale`(boolean 類型的值，預設值為 `false` ）： 設置為 `true` ，以便視區元標記來禁用或限制的範圍的使用者比例，這預設啟用的。
    
        <preference name="EnableViewportScale" value="true"/>
        
    
    放置在 HTML 中禁用縮放和適合的視口，如下內容靈活地內呈現 web 視圖：
    
        < 元名稱 = '視' 內容 =' 寬度 = 設備-寬度，初始規模 = 1，使用者可擴展 = no' / >
        

*   `MediaPlaybackRequiresUserAction`(boolean 類型的值，預設值為 `false` ）： 設置為 `true` 以防止與自動播放 HTML5 視頻或音訊 `autoplay` 屬性或通過 JavaScript。
    
        <preference name="MediaPlaybackRequiresUserAction" value="true"/>
        

*   `AllowInlineMediaPlayback`(boolean 類型的值，預設值為 `false` ）： 設置為 `true` ，讓 HTML5 播放媒體顯示*內聯*的螢幕佈局，使用瀏覽器提供的控制項，而不是本機控制項內。 為此，添加 `webkit-playsinline` 歸咎于任何 `<video>` 的元素。
    
        <preference name="AllowInlineMediaPlayback" value="true"/>
        

*   `BackupWebStorage`（字串，或者 `none` ， `local` ，或預設的 `cloud` ）： 設置為 `cloud` 允許通過 iCloud 備份到 web 存儲資料。 設置為 `local` ，使得只有本地備份通過 iTunes 同步。 設置為 `none` 防止 web 存儲備份。
    
        <preference name="BackupWebStorage" value="local"/>
        

*   `TopActivityIndicator`（字串，預設值為 `gray` ）： 控制指示大量的處理器活動的狀態列中的旋轉的小圖示的外觀。 有效的值為 `whiteLarge` ， `white` ，和`gray`.
    
        <preference name="TopActivityIndicator" value="white"/>
        

*   `KeyboardDisplayRequiresUserAction`(boolean 類型的值，預設值為 `true` ）： 設置為 `false` ，允許鍵盤出現在調用時 `focus()` 形式投入。
    
        <preference name="KeyboardDisplayRequiresUserAction" value="false"/>
        

*   `SuppressesIncrementalRendering`(boolean 類型的值，預設值為 `false` ）： 設置為 `true` 等待，直到在呈現到螢幕之前已收到的所有內容。
    
        <preference name="SuppressesIncrementalRendering" value="true"/>
        

*   `GapBetweenPages`（浮動，預設值為 `` ）： 的大小，以磅為單位，頁面之間的差距。
    
        <preference name="GapBetweenPages" value="0"/>
        

*   `PageLength`（浮動，預設值為 `` ）： 中點，在頁面流的方向每個頁面的大小。 當 PaginationMode 是從右至左或從左至右，此屬性工作表示每個頁面的寬度。 PaginationMode topToBottom 或 bottomToTop 時，此屬性工作表示每個頁面的高度。 預設值為 0，這意味著佈局使用視區的大小來確定頁面的尺寸。
    
        <preference name="PageLength" value="0"/>
        

*   `PaginationBreakingMode`（字串，預設值為 `page` ）： 有效的值為 `page` 和 `column` 。在列或頁斷發生的方式。 此屬性確定是否某些 CSS 屬性關於列和頁打破是榮幸還是忽略。 當此屬性設置為 `column` ，內容尊重相關的頁斷的地方斷列的 CSS 屬性。
    
        <preference name="PaginationBreakingMode" value="page"/>
        

*   `PaginationMode`（字串，預設值為 `unpaginated` ）： 有效的值為 `unpaginated` ， `leftToRight` ， `topToBottom` ， `bottomToTop` ，和 `rightToLeft` 。 此屬性確定是否在 web 視圖中的內容劃分為一次填充視圖一螢幕的頁或一個長的滾動視圖所示。 如果設置為一個分頁的表單，此屬性切換分頁的佈局上的內容，導致其內容的 web 視圖使用重新佈局的 PageLength 和 GapBetweenPages 的值。
    
        <preference name="PaginationMode" value="unpaginated"/>
        

*   `UIWebViewDecelerationSpeed`（字串，預設值為 `normal` ）： 有效的值為 `normal` ， `fast` 。 此屬性控制減速勢頭滾動。 `normal`是大多數本機應用程式，預設的速度和 `fast` 的移動版 Safari 是預設的。
    
        <preference name="UIWebViewDecelerationSpeed" value="fast" />