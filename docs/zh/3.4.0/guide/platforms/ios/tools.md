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

# iOS 命令列工具

`cordova`命令列實用程式是一個高級別的工具，允許您在一次跨幾個平臺生成的應用程式。 舊版本的科爾多瓦框架提供了特定于每個平臺的命令列工具集。 若要使用它們作為 CLI 的替代，您需要從[cordova.apache.org][1]下載此版本的科爾多瓦。 下載檔案中包含單獨的檔案，為每個平臺。 展開您想要的目標平臺。 這裡描述的工具，通常可用在頂級 `bin` 目錄中，否則為諮詢**自述**檔，瞭解有關更多詳細的指示。

 [1]: http://cordova.apache.org

IOS 命令列工具都建立在 shell 腳本和依賴于 Xcode 命令列工具如 `xcode-select` 和`xcodebuild`.

低級命令列介面，它使外掛程式的資訊，請參閱使用 Plugman 到管理外掛程式。有關概述，請參見應用程式外掛程式。

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