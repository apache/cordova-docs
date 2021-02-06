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

`config.xml`檔控制應用於每個應用程式和 CordovaWebView 實例的應用程式的基本設置。 本節詳細說明僅適用于 iOS 版本的首選項。 有關全域配置選項的資訊，請參閱 [config.xml 檔][1]。

 [1]: config_ref_index.md.html#The%20config.xml%20File

*   `EnableViewportScale`(boolean 類型的值，預設值為 `false` ）： 設置為 `true` ，以便視區元標記來禁用或限制的範圍的使用者比例，這預設啟用的。

        <preference name="EnableViewportScale" value="true"/>


    放置在 HTML 中禁用縮放和適合的視口，如下內容靈活地內呈現 web 視圖：

        <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no' />


*   `MediaPlaybackAllowsAirPlay`(預設為`true`的布林值): 設置為`false` ，以防止空氣發揮被使用在此視圖中。 在預設 UIWebView 和 WKWebView 中可用。

        <preference name="MediaPlaybackAllowsAirPlay" value="false"/>


*   `MediaPlaybackRequiresUserAction`(預設為`false`的布林值): 設置為`true`以防止自動播放`自動播放`屬性或通過 JavaScript HTML5 視頻或音訊。

        <preference name="MediaPlaybackRequiresUserAction" value="true"/>


*   `AllowInlineMediaPlayback`(預設為`false`的布林值): 設置為`true` ，允許 HTML5 媒體重播顯示*內聯*在螢幕佈局，使用瀏覽器提供的控制項，而不是本機控制項內。 這項工作，將添加到任何`< video >`元素的`webkit playsinline`屬性。

        <preference name="AllowInlineMediaPlayback" value="true"/>


*   `BackupWebStorage`(字串，要麼`none`，`local`，或預設`雲`): 設置為`cloud`以允許通過 iCloud 備份 web 存儲資料。 設置為`local`以允許只有本地備份通過 iTunes 同步。 設置為`none`防止 web 存儲備份。

        <preference name="BackupWebStorage" value="local"/>


*   `TopActivityIndicator`(字串，預設為`gray`): 控制狀態列指示大量的處理器活動中旋轉的小圖示的外觀。 有效值為`whiteLarge`、`white`和`gray`.

        <preference name="TopActivityIndicator" value="white"/>


*   `KeyboardDisplayRequiresUserAction`(預設為`true`的布林值): 設置為`false`以允許鍵盤顯示表單輸入調用`focus ()`時。

        <preference name="KeyboardDisplayRequiresUserAction" value="false"/>


*   `SuppressesIncrementalRendering`(預設為`false`的布林值): 設置為`true` ，等待，直到在呈現到螢幕之前已收到的所有內容。

        <preference name="SuppressesIncrementalRendering" value="true"/>


*   `GapBetweenPages`(浮動，預設值為``): 的大小，以磅為單位，頁面之間的差距。

        <preference name="GapBetweenPages" value="0"/>


*   `PageLength`(浮動，預設值為``): 每個頁面，在頁面流的方向點的大小。 當 PaginationMode 是從右至左或從左至右，此屬性工作表示每個頁面的寬度。 當 PaginationMode 是 topToBottom 或 bottomToTop 時，此屬性工作表示每個頁面的高度。 預設值為 0，這意味著佈局使用視區的大小來確定頁面的大小。

        <preference name="PageLength" value="0"/>


*   `PaginationBreakingMode`(字串，預設為`頁面`): 有效值為`頁`和`列`。在列或頁破發生的方式。 此屬性確定是否某些 CSS 屬性關於列和頁破是榮幸還是忽略。 當此屬性設置為`列`時，內容方面與到位的頁破斷列相關的 CSS 屬性。

        <preference name="PaginationBreakingMode" value="page"/>


*   `PaginationMode`(字串，預設為`unpaginated`): 有效值為`unpaginated`， `leftToRight`、 `topToBottom`、 `bottomToTop`和`rightToLeft`。 此屬性可確定是否在 web 視圖中的內容分解成頁面全屏顯示視圖一次，或一個長的滾動視圖所示。 如果設置為分頁的表單，此屬性切換分頁的佈局的內容，其內容造成 web 視圖使用場地的 PageLength 和 GapBetweenPages 的值。

        <preference name="PaginationMode" value="unpaginated"/>


*   `UIWebViewDecelerationSpeed`(字串，預設為`normal`): 有效的值都是`normal`，`fast`。 此屬性控制減速的勢頭滾動。 對於大多數本機應用程式的預設速度是`normal`和`fast`是移動 Safari 的預設值。

        <preference name="UIWebViewDecelerationSpeed" value="fast" />


*   `ErrorUrl`(字串，預設情況下未設置): 如果設置，將顯示在應用程式中出現錯誤時所引用的本地網頁。

        <preference name="ErrorUrl" value="myErrorPage.html"/>


*   `OverrideUserAgent`(字串，預設情況下未設置): 如果設置，值將替換舊使用者代理的 web 視圖。 它有利於從應用程式或瀏覽器請求時請求遠端頁面，識別。 使用持謹慎態度，這可能導致與 web 伺服器的 compitiable 問題。 對於大多數情況下，改用 AppendUserAgent。

        <preference name="OverrideUserAgent" value="Mozilla/5.0 My Browser" />


*   `AppendUserAgent`(字串，預設情況下未設置): 如果設置，值將附加到年底老使用者代理的 web 視圖。 當使用 OverrideUserAgent，此值將被忽略。

        <preference name="AppendUserAgent" value="My Browser" />
