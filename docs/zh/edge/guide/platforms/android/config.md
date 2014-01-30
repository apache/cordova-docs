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

`config.xml`檔控制應用於每個應用程式和 CordovaWebView 實例的應用程式的基本設置。 本節詳細說明僅適用于 android 系統生成的首選項。 有關全域配置選項，請參閱 config.xml 檔的資訊。

*   `KeepRunning`(boolean 類型的值，預設值為 `true` ）： 確定應用程式是否保持甚至後在後臺運行 `pause` 事件火災。 注意： 將此設置為 false 不會殺了這款應用程式暫停事件之後，該應用程式時在後臺只將停止執行科爾多瓦 web 視圖中的代碼。
    
        <preference name="KeepRunning" value="false"/>
        

*   `LoadUrlTimeoutValue`(編號，預設值為 `20000` ，20 秒)： 當載入一個頁面，在引發逾時錯誤之前等待的時間量。 此示例指定 10 秒，而不是 20：
    
        <preference name="LoadUrlTimeoutValue" value="10000"/>
        

*   `SplashScreen`： 減去其副檔名的檔的名稱 `res/drawable` 目錄。各種資產必須共用此各子目錄中的共同名稱。
    
        <preference name="SplashScreen" value="splash"/>
        

*   `SplashScreenDelay`(編號，預設值為 `5000` ）： 所需的時間初始螢幕圖像顯示。
    
        <preference name="SplashScreenDelay" value="10000"/>
        

*   `InAppBrowserStorageEnabled`(boolean 類型的值，預設值為 `true` ）： 控制項是否在 InAppBrowser 內打開的頁可以訪問同一認為和 WebSQL 存儲作為預設瀏覽器打開的頁面。