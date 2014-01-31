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

# Android 系統的命令列工具

`cordova`命令列實用程式是一個高級別的工具，允許您在一次跨幾個平臺生成的應用程式。 舊版本的科爾多瓦框架提供了特定于每個平臺的命令列工具集。 若要使用它們作為 CLI 的替代，您需要從[cordova.apache.org][1]下載此版本的科爾多瓦。 下載檔案中包含單獨的檔案，為每個平臺。 展開您想要的目標平臺。 這裡描述的工具，通常可用在頂級 `bin` 目錄中，否則為諮詢**自述**檔，瞭解有關更多詳細的指示。

 [1]: http://cordova.apache.org

低級命令列介面，它使外掛程式的資訊，請參閱使用 Plugman 到管理外掛程式。有關概述，請參見應用程式外掛程式。

## 創建一個專案

運行 `create` 命令，指定的現有路徑的專案、 反向域式包識別碼和應用程式的顯示名稱。這裡是 Mac 和 Windows 的語法：

    $ /path/to/cordova-android/bin/create /path/to/project com.example.project_name ProjectName
    $ C:\path\to\cordova-android\bin\create.bat C:\path\to\project com.example.project_name ProjectName
    

## 生成

此清理，然後生成專案。

在 Mac 或 Windows 上調試：

    $ /path/to/project/cordova/build --debug
    $ C:\path\to\project\cordova\build.bat --debug
    

釋放，Mac 或 Windows 上：

    $ /path/to/project/cordova/build --release
    $ C:\path\to\project\cordova\build.bat --release
    

## 運行應用程式

`run`命令接受下列*可選*的參數：

*   目標規範。這包括 `--emulator` ， `--device` ，或`--target=<targetID>`.

*   生成規范。這包括 `--debug` ， `--release` ，或`--nobuild`.
    
    \[目標\] \[生成\] $ /path/to/project/cordova/run $ C:\path\to\project\cordova\run.bat \[目標\] \[生成\]

請確保您創建至少一個 Android 虛擬裝置，否則為系統會提示您這樣與做 `android` 命令。 如果多個 AVD 可用作為目標，提示您選擇一個。 預設情況下 `run` 命令檢測連接的設備或當前正在運行的模擬程式，如果沒有設備發現。

## 日誌記錄

    $ /path/to/project/cordova/log $ C:\path\to\project\cordova\log.bat
    

### 清洗

    $ /path/to/project/cordova/clean $ C:\path\to\project\cordova\clean.bat