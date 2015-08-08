---
license: Licensed to the Apache Software Foundation (ASF) under one
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
---

# Tizen 平臺指南

本指南介紹了如何設置您的 SDK 開發環境部署科爾多瓦運行 Tizen 作業系統的設備的應用程式。

## 要求和支援

Tizen SDK 需要 Linux Ubuntu 10.04/10.10/11.04/11.10 （32 位） 或 Windows XP SP3/7 （32 位）。

開發人員應使用 `cordova` 實用程式 Tizen SDK 的結合。 命令列介面資訊，請參閱如何安裝它，添加專案，然後生成和部署專案。

## 安裝 SDK

從[tizen.org][1]下載 Tizen SDK.

 [1]: https://developer.tizen.org/sdk

<!--

- (optional) Install Tizen Cordova template projects: copy the
  `/templates` directory content into the Tizen Eclipse IDE web
  templates directory (e.g.:
  `/home/my_username/tizen-sdk/IDE/Templates/web`).

- __Method #2: Use Tizen Eclipse IDE Cordova Tizen project templates__
    - Launch Tizen Eclipse IDE
    - Select  __File &rarr; New &rarr; Tizen Web Project__
    - Select __User Template__ and __User defined__ items
    - Select one of the Tizen Cordova template (e.g.: __CordovaBasicTemplate__)
    - Fill the __Project name__ and its target __Location__

    ![](img/guide/platforms/tizen/project_template.png)

    - Click __Finish__

    ![](img/guide/platforms/tizen/project_explorer.png)

    - Your project should now appear in the __Project Explorer__ view

-->

## 在 SDK 中打開的專案

1.  推出 Tizen Eclipse IDE。

2.  選擇**檔 → 導入 → Tizen Web 專案**：

    ![][2]

3.  按**下一步**.

4.  請確保選中了**選擇根目錄**。

5.  請確保選中了**複製到工作區中的專案**。

6.  按**流覽**並選擇科爾多瓦 Tizen `samples` 專案目錄 （如 `/cordova-basic` ）：

    ![][3]

7.  按**完成**。您的專案現在應該將其導入並出現在**專案資源管理器**視圖中：

    ![][4]

 [2]: {{ site.baseurl }}/static/img/guide/platforms/tizen/import_project.png
 [3]: {{ site.baseurl }}/static/img/guide/platforms/tizen/import_widget.png
 [4]: {{ site.baseurl }}/static/img/guide/platforms/tizen/project_explorer.png

重新生成專案，在**專案資源管理器**視圖中按右鍵並選擇**生成專案**：

![][5]

 [5]: {{ site.baseurl }}/static/img/guide/platforms/tizen/build_project.png

如*hello.wgt*的小部件包檔應在專案的根目錄中生成。

## 部署到模擬程式

用滑鼠右鍵按一下**專案資源管理器**視圖中的專案並選擇**運行作為 → Tizen Web 模擬器應用程式**：

![][6]

 [6]: {{ site.baseurl }}/static/img/guide/platforms/tizen/runas_web_sim_app.png

## 將部署到設備

*   請確保目標設備正常啟動、 連接和配置。必須正確設置其**日期和時間**設置。

*   使用**連接資源管理器**視圖選擇的應用程式部署目標：**視窗顯示視圖 → 連接資源管理器**.

    ![][7]

*   用滑鼠右鍵按一下該專案在**專案資源管理器**視圖，然後選擇**運行作為 → Tizen Web 應用程式**：

    ![][8]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/tizen/connection_explorer.png
 [8]: {{ site.baseurl }}/static/img/guide/platforms/tizen/runas_web_app.png
