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

title: iOS 殼工具指南
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

        $ /path/to/my_new_project/cordova/run --emulator
    

## 在設備上運行的應用程式

        $ /path/to/my_new_project/cordova/run --device
    

## 簽署應用程式

你可以瞭解更多關於簽署、 分發 iOS 應用程式、 創建證書和資源調配上[iOS 開發人員庫][2]的設定檔.

 [2]: https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/ConfiguringYourApp/ConfiguringYourApp.html

簽在科爾多瓦 app 需要具備以下條件:

*   代碼簽名標識 (`-codeSignIdentity`):[使用 XCode][3]可以創建新的 iOS 簽名標識並將其添加到您的鑰匙串。 類型的代碼簽名身份 — — 通常分佈或發展，需要在這裡指定。

*   資源調配 (`-provisioningProfile`) 的設定檔:[使用蘋果會員中心][4]你可以創建一個資源調配的設定檔。 下載到您的機器上設置的設定檔並啟動它在 XCode 來註冊它。 它在你的 Mac 上複製到此處: ~/Library/MobileDevice/Provisioning\ 設定檔 /。 在文字編輯器中打開它，你可以找到，需要在此處指定的 UUID。

*   代碼簽名資源規則 (`-codeSignResourceRules`) (可選): 允許您指定自訂簽名資源規則。

 [3]: https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/MaintainingCertificates/MaintainingCertificates.html#//apple_ref/doc/uid/TP40012582-CH31-SW6
 [4]: https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/MaintainingProfiles/MaintainingProfiles.html#//apple_ref/doc/uid/TP40012582-CH30-SW61

可以使用`生成`或`運行`腳本上面的命令列參數指定這些參數:

        $ /path/to/my_new_project/cordova/build --codeSignIdentitiy="iPhone Distribtion" --provisioningProfile="926c2bd6-8de9-4c2f-8407-1016d2d12954" 
    

或者，您可以指定它們在組建組態檔 （build.json） 中使用 （`--buildConfig`) 的論點。下面是組建組態檔的一個示例：

    {
         "ios": {
             "debug": {
                 "codeSignIdentitiy": "iPhone Development",
                 "provisioningProfile": "926c2bd6-8de9-4c2f-8407-1016d2d12954",
             },
             "release": {
                 "codeSignIdentitiy": "iPhone Distribution"
                 "provisioningProfile": "70f699ad-faf1-4adE-8fea-9d84738fb306",
             }
         }
     }
    

此外，它還支援以混合和匹配的命令列參數和 build.json 檔中的參數。從命令列參數的值將會得到優先。

## 日誌記錄

        $ /path/to/my_new_project/cordova/log