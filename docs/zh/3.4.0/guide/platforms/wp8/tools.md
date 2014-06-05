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

# Windows Phone 的命令列工具

`cordova`命令列實用程式是一個高級別的工具，允許您在一次跨幾個平臺生成的應用程式。 舊版本的科爾多瓦框架提供了特定于每個平臺的命令列工具集。 若要使用它們作為 CLI 的替代，您需要從[cordova.apache.org][1]下載此版本的科爾多瓦。 下載檔案中包含單獨的檔案，為每個平臺。 展開您想要的目標平臺。 這裡描述的工具，通常可用在頂級 `bin` 目錄中，否則為諮詢**自述**檔，瞭解有關更多詳細的指示。

 [1]: http://cordova.apache.org

低級命令列介面，它使外掛程式的資訊，請參閱使用 Plugman 到管理外掛程式。有關概述，請參見應用程式外掛程式。

## Windows Phone

Windows Phone 的命令列工具支援創建、 構建和運行的新專案。必須從 cmd 或 powershell 的提示符下運行命令。

WP8 回購現在包括用於生成 WP7 + WP8 代碼的應用程式。回購為每個具有的子目錄： `wp7/` 和`wp8/`.

## 創建一個專案

有 2 種方法去有關創建一個新的 Apache 科爾多瓦 WP7 或 WP8 應用程式。

### 運行該批次檔來創建和安裝範本

*   根的回購協定包含 `createTemplates.bat` 檔。 按兩下它產生兩個 `.zip` 檔： `CordovaWP7_x_x_x.zip` 和 `CordovaWP8_x_x_x.zip` ，其中*x.x.x*表示的當前版本號。 若要方便地使用這些檔在 Visual Studio 中的，複製它們到 `My Documents\Visual Studio
2012\Templates\ProjectTemplates\` 。 然後，可以從 Visual Studio 中創建新的 Apache 科爾多瓦 Windows Phone 應用程式**檔 → 新建專案**功能表。

*   如果您從命令列運行該批次檔，還可以調用同一個參數，以便自動安裝

運行該腳本：

    > createTemplates.bat-安裝
    

### 在命令列上使用創建腳本

運行 `create` 命令，指定的現有路徑的專案、 反向域式包識別碼和應用程式的顯示名稱。 下面是 Windows Phone 7 和 8 的語法：

    >.\wp7\bin\create PathToNewProject [ PackageName ] [ AppName ]
    >.\wp8\bin\create PathToNewProject [ PackageName ] [ AppName ]
    
    >PathToNewProject : The path to where you wish to create the project
    >PackageName      : The namespace for the project (default is Cordova.Example)
    >AppName          : The name of the application (default is CordovaWP8AppProj or CordovaWP7AppProj)
    
    >examples:
    >.\wp7\bin\create C:\path\to\my_new_project
    >.\wp8\bin\create C:\path\to\my_new_project io.cordova.example CordovaWP8App
    

啟動 Visual Studio 和打開解決方案檔 (.sln) 中 (C:\path\to\my\_new\_project)

生成並運行它

## 建設專案 （清潔，然後生成）

*   調試
    
    $ C:\path\to\my\_new\_project\cordova\build-調試

*   釋放
    
    $ C:\path\to\my\_new\_project\cordova\build — — 釋放

## 運行應用程式

使用下列*可選*的參數運行運行命令

*   目標規範。這包括 `--emulator` ， `--device` ，或`--target=<targetID>`.

*   生成規范。這包括 `--debug` ， `--release` ，或`--nobuild`.
    
    $ C:\path\to\my\_new\_project\cordova\run \[目標\] \[生成\]

預設情況下 `run` 命令調用與 `--emulator --debug` 如果不提供了標誌。

## 清洗

    $ C:\path\to\my_new_project\cordova\clean