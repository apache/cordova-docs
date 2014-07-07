* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Android 殼工具指南

本指南演示如何使用平臺為中心的外殼工具科爾多瓦的一整套開發 Android 應用程式。 這種發展道路，概述中討論可能會為您提供比所述的命令列介面的跨平臺 CLI 工具更大範圍的發展方案。 例如，您需要部署一個科爾多瓦 web 視圖自訂旁邊的本機組件時使用外殼程式工具。 在使用之前要麼發展路徑，您必須首先配置 Android SDK 環境 Android 平臺指南中所述。

要為 android 系統啟用外殼工具，請從[cordova.apache.org][1]下載科爾多瓦。 下載檔案中包含單獨的檔案，為每個平臺。 展開每個您想要的目標， `android` 在這種情況下。 相關的工具，通常可用在頂級 `bin` 目錄中，否則為諮詢**自述**檔，瞭解有關更多詳細的指示。

 [1]: http://cordova.apache.org

這些工具允許您創建、 構建和運行 Android 應用程式。 額外的命令列介面，可以跨所有平臺的外掛程式功能的資訊，請參閱使用 Plugman 到管理外掛程式。 有關如何開發外掛程式的詳細資訊，請參閱應用程式外掛程式。

## 創建一個專案

運行 `create` 命令，指定的現有路徑的專案、 反向域風格包識別碼和應用程式的顯示名稱。 這裡是 Mac/Linux 和 Windows 的語法：

        $ /path/to/cordova-android/bin/create /path/to/project com.example.project_name ProjectName
    
        C:\>\path\to\cordova-android\bin\create.bat \path\to\project com.example.project_name ProjectName
    

## 生成

此清理，然後生成專案。

在 Mac/Linux 或 Windows 上調試：

        $ /path/to/project/cordova/build --debug
    
        C:\>\path\to\project\cordova\build.bat --debug
    

釋放，Mac/Linux 或 Windows 上：

        $ /path/to/project/cordova/build --release
    
        C:\>\path\to\project\cordova\build.bat --release
    

## 運行應用程式

`run`命令接受下列*可選*的參數：

*   目標規範。這包括 `--emulator` ， `--device` ，或`--target=<targetID>`.

*   生成規范。這包括 `--debug` ， `--release` ，或`--nobuild`.
    
        $ /path/to/project/cordova/run [Target] [Build]
        
        C:\>\path\to\project\cordova\run.bat [Target] [Build]
        

請確保您創建至少一個 Android 虛擬裝置，否則為系統會提示您這樣與做 `android` 命令。 如果多個 AVD 可用作為目標，提示您選擇一個。 預設情況下 `run` 命令檢測連接的設備或當前正在運行的模擬程式，如果沒有設備發現。

## 日誌記錄

        $ /path/to/project/cordova/log
    
        C:\>\path\to\project\cordova\log.bat
    

## 清洗

        $ /path/to/project/cordova/clean
    
        C:\>\path\to\project\cordova\clean.bat
    

## 手動使用的螞蟻

如果你想打電話要螞蟻直接從命令列如 `ant debug install` ，您需要指定的附加參數到 ant 命令：

        ant debug install -Dout.dir=ant-build -Dgen.absolute.dir=ant-gen
    

這是因為是比預設值不同的科爾多瓦的 Ant 腳本所使用的目錄。這樣做是為了避免衝突，從與在命令列運行 Ant 時日食/ADT 裡面。

這些附加參數，將自動為您添加時使用 `cordova/build` 和 `cordova/run` 腳本上文所述。 為此它建議使用 `cordova/build` 和 `cordova/run` 而不是直接從命令列調用 Ant 腳本。