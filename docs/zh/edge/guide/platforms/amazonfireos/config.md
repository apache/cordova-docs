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

# 亞馬遜火 OS 配置

`config.xml`檔控制應用於每個應用程式和 CordovaWebView 實例的應用程式的基本設置。 此節詳細資訊首選項僅適用于亞馬遜火 OS 的基礎。 有關全域配置選項，請參閱 config.xml 檔的資訊。

*   `KeepRunning`(boolean 類型的值，預設值為 `true` ）： 確定應用程式是否保持甚至後在後臺運行 `pause` 事件火災。
    
        <preference name="KeepRunning" value="false"/>
        

*   `ErrorUrl`： 指定顯示在 400-500 範圍內的標準 HTTP 錯誤回應的錯誤頁。 將指定的檔放在包含主頁和其他 web 資產的頂級目錄。
    
        <preference name="ErrorUrl" value="error.html"/>
        

*   `LoadingDialog`： 顯示本機對話方塊載入應用程式時。值的格式是*標題、 消息*
    
        <preference name="LoadingDialog" value="Please wait, the app is loading"/>
        

*   `LoadingPageDialog`： 載入一個應用程式內的子頁面時顯示本機的對話方塊。值的格式是*標題、 消息*
    
        <preference name="LoadingPageDialog" value="Please wait, the data is loading"/>
        

*   `LoadUrlTimeoutValue`（數，預設值是 `20000` ）： 當載入一個頁面，在引發逾時錯誤之前等待的時間量。 此示例指定 10 秒，而不是 20：
    
        <preference name="LoadUrlTimeoutValue" value="10000"/>
        

*   `SplashScreen`： 減去其副檔名的檔的名稱 `res/drawable` 目錄。各種資產必須共用此各子目錄中的共同名稱。
    
        <preference name="SplashScreen" value="splash"/>
        

*   `SplashScreenDelay`(編號，預設值為 `5000` ）： 所需的時間初始螢幕圖像顯示。
    
        <preference name="SplashScreenDelay" value="10000"/>