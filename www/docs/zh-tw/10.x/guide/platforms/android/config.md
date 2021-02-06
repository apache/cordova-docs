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

title: Android 系統組態
---

# Android 系統組態

`config.xml`檔控制應用於每個應用程式和 CordovaWebView 實例的應用程式的基本設置。 本節詳細說明僅適用于 android 系統生成的首選項。 有關全域配置選項的資訊，請參閱[config.xml 檔][1]。

 [1]: config_ref_index.md.html#The%20config.xml%20File

*   `KeepRunning`(boolean 類型的值，預設值為 `true` ）： 確定應用程式是否保持甚至後在後臺運行 `[pause](../../../cordova/events/events.pause.html)` 事件火災。 將此設置為 `false` 不會殺死後的 app `[pause](../../../cordova/events/events.pause.html)` 事件，但只是暫停執行代碼內科爾多瓦 web 視圖應用程式時在背景中。

        <preference name="KeepRunning" value="false"/>


*   `LoadUrlTimeoutValue`(以毫秒為單位的數位，預設為 `20000` ，20 秒)： 當載入一個頁面，在引發逾時錯誤之前等待的時間量。 此示例指定 10 秒，而不是 20：

        <preference name="LoadUrlTimeoutValue" value="10000"/>


*   `SplashScreen`（字串，預設值為 `splash` ）： 包括其副檔名的檔的名稱 `res/drawable` 目錄。 各種資產必須共用此各子目錄中的共同名稱。

        <preference name="SplashScreen" value="mySplash"/>


*   `SplashScreenDelay`(編號以毫秒為單位，預設值為 `3000` ）： 所需的時間初始螢幕圖像顯示。

        <preference name="SplashScreenDelay" value="10000"/>


*   `InAppBrowserStorageEnabled`(boolean 類型的值，預設值為 `true` ）： 控制項是否在 InAppBrowser 內打開的頁可以訪問同一認為和 WebSQL 存儲作為預設瀏覽器打開的頁面。

        <preference name="InAppBrowserStorageEnabled" value="true"/>


*   `LoadingDialog`（字串，預設值為 `null` ）： 如果設置，顯示一對話方塊中指定的標題和消息，和一個微調框，載入的應用程式中的第一頁時。 由在此值字串中的逗號分隔的標題和消息，那逗號刪除之前顯示的對話方塊。

        <preference name="LoadingDialog" value="My Title,My Message"/>


*   `LoadingPageDialog`（字串，預設值為 `null` ）： 相同， `LoadingDialog` ，但用於在應用程式中的第一頁後載入的每個頁面。

        <preference name="LoadingPageDialog" value="My Title,My Message"/>


*   `ErrorUrl`（URL，預設為 `null` ）： 如果設置，將顯示而不是以"應用程式錯誤"標題對話方塊的應用程式中的錯誤時所引用的網頁。

        <preference name="ErrorUrl" value="myErrorPage.html"/>


*   `ShowTitle`(boolean 類型的值，預設值為 `false` ）： 顯示在螢幕頂部的標題。

        <preference name="ShowTitle" value="true"/>


*   `LogLevel`（字串，預設值為 `ERROR` ）： 將通過哪些日誌將過濾郵件從您的應用程式的最小日誌級別設置。 有效的值為 `ERROR` ， `WARN` ， `INFO` ， `DEBUG` ，和`VERBOSE`.

        <preference name="LogLevel" value="VERBOSE"/>


*   `SetFullscreen`(boolean 類型的值，預設值為 `false` ）： 同樣作為 `Fullscreen` 在此 xml 檔的全域配置參數。 此 Android 特定元素支援全球否決 `Fullscreen` 元素，並將在未來版本中移除。

*   `AndroidLaunchMode`（字串，預設值為 `singleTop` ）： 設置活動 `android:launchMode` 屬性。 這將更改該應用程式從應用程式圖示或意圖啟動的是已經在運行的過程中會發生什麼。 有效的值是 `standard` ， `singleTop` ， `singleTask` ，`singleInstance`.

        <preference name="AndroidLaunchMode" value="singleTop"/>


*   `DefaultVolumeStream`（字串，預設值為 `default` ，加在科爾多瓦 android 3.7.0): 設置的音量按鈕連結到的硬體音量。 預設情況下這是"叫"手機和平板電腦的"媒體"。 將此設置為"媒體"有您的應用程式卷按鈕總是改變媒體卷。 請注意，當使用科爾多瓦的媒體外掛程式時，音量按鈕將動態地更改為任何媒體物件處於活動狀態時，控制的媒體卷。

*   `OverrideUserAgent`(字串，預設情況下未設置): 如果設置，值將替換舊使用者代理的 web 視圖。 它有利於從應用程式或瀏覽器請求時請求遠端頁面，識別。 使用持謹慎態度，這可能導致與 web 伺服器的 compitiable 問題。 對於大多數情況下，改用 AppendUserAgent。

        <preference name="OverrideUserAgent" value="Mozilla/5.0 My Browser" />


*   `AppendUserAgent`(字串，預設情況下未設置): 如果設置，值將附加到年底老使用者代理的 web 視圖。 當使用 OverrideUserAgent，此值將被忽略。

        <preference name="AppendUserAgent" value="My Browser" />
