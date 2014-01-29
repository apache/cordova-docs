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

# 黑莓 10 命令列工具

`cordova`命令列實用程式是一個高級別的工具，允許您在一次跨幾個平臺生成的應用程式。 舊版本的科爾多瓦框架提供了特定于每個平臺的命令列工具集。 若要使用它們作為 CLI 的替代，您需要從[cordova.apache.org][1]下載此版本的科爾多瓦。 下載檔案中包含單獨的檔案，為每個平臺。 展開您想要的目標平臺。 這裡描述的工具，通常可用在頂級 `bin` 目錄中，否則為諮詢**自述**檔，瞭解有關更多詳細的指示。

 [1]: http://cordova.apache.org

低級命令列介面，它使外掛程式的資訊，請參閱使用 Plugman 到管理外掛程式。有關概述，請參見應用程式外掛程式。

如果您需要幫助與下面列出的任何命令，請鍵入命令沿與 `-h` 或 `-help` 參數，所支援的所有命令並提供為每個可用的參數說明。

## 創建一個應用程式

`create`命令將創建一個新的專案：

    bin/創建 < 路徑到專案 >< 專案-包 >< 專案名稱 >
    

在哪裡

*   `<path-to-project>`指定您想要的專案中創建的目錄

*   `<project-package>`指定一個反向功能變數名稱樣式識別碼

*   `<project-name>`指定應用程式的顯示名稱

**注**： `create` 命令引導其依賴項安裝通過 `npm install` 命令。 根據安裝的目錄和系統許可權，這可能需要管理員特權。 如果在 OSX/Linux 上有問題，請運行 `sudo npm install` 之前使用 `create` 命令。 在 Windows 上，運行 `npm install` 命令列實用程式中打開具有管理員許可權。

## 創建目標

`target`命令允許您管理模擬器或您使用來測試您的應用程式的黑莓設備。您可以添加或刪除一個目標，或將目標設置為的預設目標。

### 添加目標

    < 路徑到專案 >/科爾多瓦/目標添加 < 名稱 >< 的 ip 位址 > [-t |-類型 < 設備 | 模擬器 >] [-p |-< 密碼 >] [— — pin < 設備針 >]
    

在哪裡

*   `<name>`指定目標的唯一名稱。

*   `<ip-address>`指定的 ip 位址的黑莓設備或模擬器。

*   `-p | --password <password>`指定的設備或模擬程式的密碼。只有在設備或模擬器是受密碼保護，這是必需的。

*   `--pin <device-pin>`指定的黑莓設備，作為一個有效的主機調試標記標識該設備的 PIN。 只有在創建調試權杖時，此參數是必需的。

### 刪除目標

    < 路徑到專案 >/科爾多瓦/目標刪除 < 名稱 >
    

### 將目標設置為預設值

    < 路徑到專案 >/科爾多瓦/目標預設 < 名稱 >
    

## 構建應用程式

`build`命令將生成作為.bar 檔的專案。 您可以建立您的應用程式中任何一種釋放模式 （會產生一個簽名的.bar 檔） 或在偵錯模式下 （會產生一個無符號的.bar 檔）。

### 構建在發佈模式下的應用程式

    < 路徑到專案 >/科爾多瓦/生成釋放 [-k |-keystorepass < 密碼 >] [-b |-buildId < 數量 >] [-p |-params < params JSON 檔 >]
    

在哪裡

*   `-k | --keystorepass <password>`指定當您配置您的電腦以簽名的應用程式定義的密碼。

*   `-b | --buildId <number>`指定您的應用程式的內部版本號。 通常情況下，這個數位應從以前的已簽名版本遞增。 此參數是可選的。

*   `-p | --params <params-JSON-file>`指定包含要傳遞給下游工具的額外參數的 JSON 檔。此參數是可選的。

### 生成在偵錯模式下專案

    < 路徑到專案 >/科爾多瓦/生成調試 [< 目標 >] [-k |-keystorepass < 密碼 >] [-p |-params < params JSON 檔 >] [-ll | — — loglevel < error|warn|verbose >]
    

在哪裡

*   `<target>`指定以前添加的目標的名稱。 如果 `<target>` 不指定，則預設的目標使用，如果其中一個已創建。 此參數才是必需的如果你想要的腳本，以將您的應用程式部署到黑莓設備或模擬程式和你沒有創建一個預設目標。 此外，如果 `<target>` 是一個設備，然後該設備必須連接到您的電腦的 USB 連接或連接到您的電腦位於同一 Wi-Fi 網路。

*   `-k | --keystorepass <password>`指定當您配置您的電腦以簽名的應用程式定義的密碼。 此密碼還用於創建您的調試權杖。 此參數才是必需如果你想要創建並為您安裝調試權杖的腳本。

*   `-p | --params <params-JSON-file>`指定包含要傳遞給下游工具的額外參數的 JSON 檔。

*   `-ll | --loglevel <level>`指定的日誌級別。日誌級別可能是 `error` ， `warn` ，或`verbose`.

如果你有以前定義一個預設目標 （和以前安裝調試的標記，如果這一目標是黑莓設備），您可以使用運行該腳本沒有參數和腳本包您的應用程式並將它部署到的預設目標。 例如：

    < 路徑到專案 >/科爾多瓦/生成調試
    

## 運行應用程式

`run`命令將部署應用程式的最新生成指定的黑莓設備或模擬程式上。若要部署您的應用程式，您需要指定一個目標設備或模擬程式：

    < 路徑到專案 >/科爾多瓦/運行 < 目標 >
    

...現場 `<target>` 指定以前添加的目標的名稱。 如果 `<target>` 是一個設備，然後它必須連接到您的電腦通過 USB 電纜，或者在您的電腦位於同一 Wi-Fi 網路。

## 控制碼外掛程式

`target`命令允許您添加和刪除外掛程式。要獲取本地承載的外掛程式：

    < 路徑到專案 >/科爾多瓦/外掛程式 fetch < 路徑到外掛程式 >
    

查看已安裝外掛程式的清單：

    < 路徑到專案 >/科爾多瓦/外掛程式 ls
    

添加外掛程式：

    < 路徑到專案 >/科爾多瓦/外掛程式添加 < 名稱 >
    

刪除某個外掛程式：

    < 路徑到專案 >/科爾多瓦/外掛程式 rm < 名稱 >