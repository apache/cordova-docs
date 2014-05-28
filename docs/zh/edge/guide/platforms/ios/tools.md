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

# iOS 殼工具指南

本指南演示如何使用科爾多瓦的套的平臺為中心的外殼程式工具來開發 iOS 應用程式。 這種發展道路，概述中討論可能會為您提供更廣泛的發展方案時，iOS 比所述的命令列介面的跨平臺 CLI 工具。 例如，您需要部署一個科爾多瓦 web 視圖自訂旁邊的本機組件時使用外殼程式工具。 在使用之前要麼發展路徑，您必須首先配置 SDK 環境的 iOS 平臺指南中所述。 這些工具依賴于 Xcode 的命令列工具如 `xcode-select` 和`xcodebuild`.

若要啟用 iOS 的外殼工具，請從[cordova.apache.org][1]下載科爾多瓦。 下載檔案中包含單獨的檔案，為每個平臺。 展開每個您想要的目標， `ios` 在這種情況下。 相關的工具，通常可用在頂級 `bin` 目錄中，否則為諮詢**自述**檔，瞭解有關更多詳細的指示。

 [1]: http://cordova.apache.org

這些工具允許您創建、 構建和運行 iOS 的應用程式。 額外的命令列介面，可以跨所有平臺的外掛程式功能的資訊，請參閱使用 Plugman 到管理外掛程式。 有關如何開發外掛程式的詳細資訊，請參閱應用程式外掛程式。

## 創建一個專案

運行 `create` 命令，指定的現有路徑的專案、 反向域式包識別碼和應用程式的顯示名稱。

        $ ./path/to/cordova-ios/bin/create /path/to/my_new_project com.example.project_name ProjectName
    

## 生成專案

        $ /path/to/my_new_project/cordova/build
    

## 在模擬器上運行應用程式

        $ /path/to/my_new_project/cordova/run
    

## 釋放

        $ /path/to/my_new_project/cordova/release
    

## 日誌記錄

        $ /path/to/my_new_project/cordova/log