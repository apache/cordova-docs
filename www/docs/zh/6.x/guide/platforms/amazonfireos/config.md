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

title: 亞馬遜火 OS 配置
---

# 亞馬遜火 OS 配置

`config.xml`檔控制應用於每個應用程式和 CordovaWebView 實例的應用程式的基本設置。 此節詳細資訊首選項僅適用于亞馬遜火 OS 的基礎。 有關全域配置選項的資訊，請參閱 [config.xml 檔][1]。

 [1]: config_ref_index.md.html#The%20config.xml%20File

*   `KeepRunning`(boolean 類型的值，預設值為 `true` ）： 確定應用程式是否保持甚至後在後臺運行 `[pause](../../../cordova/events/events.pause.html)` 事件火災。 將此設置為 `false` 不會殺死後的 app `[pause](../../../cordova/events/events.pause.html)` 事件，但只是暫停執行代碼內科爾多瓦 web 視圖應用程式時在背景中。
    
        <preference name="KeepRunning" value="false"/>
        

*   `ErrorUrl`（URL，預設為 `null` ）： 如果設置，將顯示而不是以"應用程式錯誤"標題對話方塊的應用程式中的錯誤時所引用的網頁。
    
        <preference name="ErrorUrl" value="error.html"/>
        

*   `LoadingDialog`（字串，預設值為 `null` ）： 如果設置，顯示一對話方塊中指定的標題和消息，和一個微調框，載入的應用程式中的第一頁時。 由在此值字串中的逗號分隔的標題和消息，那逗號刪除之前顯示的對話方塊。
    
        <preference name="LoadingDialog" value="Please wait, the app is loading"/>
        

*   `LoadingPageDialog`（字串，預設值為 `null` ）： 相同， `LoadingDialog` ，但用於在應用程式中的第一頁後載入的每個頁面。
    
        <preference name="LoadingPageDialog" value="Please wait, the data is loading"/>
        

*   `LoadUrlTimeoutValue`（數，預設值是 `20000` ）： 當載入一個頁面，在引發逾時錯誤之前等待的時間量。 此示例指定 10 秒，而不是 20：
    
        <preference name="LoadUrlTimeoutValue" value="10000"/>
        

*   `SplashScreen`： 減去其副檔名的檔的名稱 `res/drawable` 目錄。各種資產必須共用此各子目錄中的共同名稱。
    
        <preference name="SplashScreen" value="splash"/>
        

*   `SplashScreenDelay`(編號，預設值為 `5000` ）： 所需的時間初始螢幕圖像顯示。
    
        <preference name="SplashScreenDelay" value="10000"/>
        

*   `ShowTitle`(boolean 類型的值，預設值為 `false` ）： 顯示在螢幕頂部的標題。
    
        <preference name="ShowTitle" value="true"/>
        

*   `LogLevel`（字串，預設值為 `ERROR` ）： 將通過哪些日誌將過濾郵件從您的應用程式的最小日誌級別設置。 有效的值為 `ERROR` ， `WARN` ， `INFO` ， `DEBUG` ，和`VERBOSE`.
    
        <preference name="LogLevel" value="VERBOSE"/>