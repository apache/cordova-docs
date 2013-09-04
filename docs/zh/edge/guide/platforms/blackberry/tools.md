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

# 黑莓手機的命令列工具

`cordova`命令列實用程式是一個高級別的工具，允許您在一次跨幾個平臺生成的應用程式。 舊版本的科爾多瓦框架提供了特定于每個平臺的命令列工具集。 若要使用它們作為 CLI 的替代，您需要從[cordova.apache.org][1]下載此版本的科爾多瓦。 下載檔案中包含單獨的檔案，為每個平臺。 展開您想要的目標平臺。 這裡描述的工具，通常可用在頂級 `bin` 目錄中，否則為諮詢**自述**檔，瞭解有關更多詳細的指示。

 [1]: http://cordova.apache.org

## 創建一個專案

運行 `create` 命令，指定的現有路徑的專案、 反向域式包識別碼和應用程式的顯示名稱。這裡是 Mac 和 Windows 的語法：

    $ /path/to/cordova-blackberry-webworks/bin/create /path/to/my_new_project com.example.project_name ProjectName
    $ /path/to/cordova-blackberry-webworks/bin/create.bat /path/to/my_new_project com.example.project_name ProjectName
    

**注：**黑莓平臺忽略套裝軟體名稱的預留位置 ( `com.example.project_name` )，但它已仍需使用的跨平臺的工具。

## 生成專案

對於黑莓手機的專案，請確保您自訂 `project.properties` 在科爾多瓦專案的根目錄中的檔。 你需要提供你的黑莓手機簽名金鑰的密碼，這樣做並指定黑莓 WebWorks SDK 和黑莓模擬程式的可執行檔的位置。

    $ /path/to/my_new_project/cordova/build <platform>
    $ /path/to/my_new_project/cordova/build.bat <platform>
    

## 啟動模擬程式

對於黑莓手機的專案，請確保您自訂 `project.properties` 科爾多瓦專案目錄的根目錄中的檔。 你需要提供你的黑莓手機簽名金鑰的密碼，這樣做並指定黑莓 WebWorks SDK 和黑莓模擬程式的可執行檔的位置。

    $ /path/to/my_new_project/cordova/run <platform>
    

然後選擇 '否' 時提示您：

    你有一個黑莓設備連接到您的電腦嗎？(y/n) $ /path/to/my_new_project/cordova/run < 平臺 >
    

然後選擇 '否' 時提示您：

    你有一個黑莓設備連接到您的電腦嗎？(y /) n
    

## 日誌記錄

不幸的是，流直接從設備日誌是目前不支援的。 然而，黑莓手機提供了內置 Web 檢查器支援 Playbook 和黑莓智慧手機設備運行黑莓 OS 7.0 及以上。 您還可以訪問您的應用程式日誌 (包括對任何調用 `console.log` ） 在您的設備，在按住 ALT 鍵從主畫面和鍵入 lglg 鍵上。