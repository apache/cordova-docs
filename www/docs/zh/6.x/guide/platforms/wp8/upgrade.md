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

title: 升級 Windows Phone 8
---

# 升級 Windows Phone 8

本指南演示如何修改 Windows Phone 8 專案，從科爾多瓦的舊版本進行升級。 這些指令的一些適用于創建與前面的命令列工具舊套的專案 `cordova` CLI 實用程式。 資訊，請參閱命令列介面如何更新的 CLI 版本。 下面一節演示如何從非 CLI 和 CLI 專案升級。

## 4.0.0 3.6.0 版升級專案

對於非 CLI 的專案，請運行：

        bin/update path/to/project
    

CLI 專案：

1.  更新 `cordova` CLI 版本。請參閱命令列介面。

2.  運行 `cordova platform update wp8` 在你現有的專案中。

## 從 3.1.0 升級到 3.2.0

為創建的科爾多瓦 CLI 的專案：

1.  更新 `cordova` CLI 版本。請參閱命令列介面。

2.  運行`cordova platform update wp8`

對於不使用 CLI 科爾多瓦創建的專案，請運行：

        bin\update < project_path >
    

## 請升級到 3.1.0 從 3.0.0

為專案創建的科爾多瓦 CLI：

1.  更新 `cordova` CLI 版本。請參閱命令列介面。

2.  運行`cordova platform update wp8`

對於不使用 CLI 科爾多瓦創建的專案，請運行：

        bin\update <project_path>
    

## 從 2.9.0 升級到 CLI （3.0.0)

1.  創建一個新的 Apache 科爾多瓦 3.0.0 專案使用 CLI，科爾多瓦，所述的命令列介面。

2.  添加您的平臺到科爾多瓦專案中，例如：`cordova
platform add wp8`.

3.  該專案的內容複寫 `www` 目錄到 `www` 目錄在科爾多瓦專案您剛剛創建的根。

4.  複製或覆蓋任何本機的資產從原始專案 （`閃屏`、 `ApplicationIcon` 等），並確保向 `.csproj` 檔中添加任何新的檔。 Windows 手機 `platforms\wp8` 目錄內的專案生成。

5.  使用科爾多瓦 CLI 工具來安裝您需要的任何外掛程式。注意 CLI 處理所有核心 Api 作為外掛程式，所以他們可能需要添加。只有 3.0.0 外掛程式是與 CLI 相容。

6.  生成並測試。

## 從 2.x 升級到 3.0.0 (非 CLI)

在 Visual Studio 解決方案資源管理器視窗中：

1.  創建新的 Apache 科爾多瓦 WP8 3.0.0 專案。

2.  將內容複寫 `www` 目錄到新專案中，並確保這些專案被添加到與專案。

3.  複製並覆蓋任何閃屏或圖示圖像。

4.  複製到新專案從 `plugins` 目錄的任何外掛程式，並確保這些也添加到 VS 專案。

5.  生成並測試。

**注**： 所有的核心 Api 從科爾多瓦版本 3.0，刪除和作為外掛程式必須單獨安裝。 有關如何重新啟用這些功能在非 CLI 工作流的詳細資訊，請參閱使用 Plugman 管理外掛程式。