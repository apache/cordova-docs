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

title: Windows 10 的科爾多瓦
---

# Windows 10 的科爾多瓦

也許你可以改稱之為"科爾多瓦 10 視窗"。 Windows 10 已經重新設計使科爾多瓦支援到 web，並得到擋你路的平臺安全限制其 HTML 和 JavaScript 應用程式平臺。

## 開始使用 Windows 10

添加 Windows 10 支援您的應用程式非常簡單，將您的 Windows 目標平臺版本設置為 10.0:

    <preference name="windows-target-version" value="10.0" />
    <preference name="windows-phone-target-version" value="10.0" />


當您建立與這兩個設置這些首選項時，將建成僅限單個.appx (和.appxupload)。 他們將至少需要 Windows 10。

### 瞭解遠端與本地模式模式

遠端模式是 Windows 10 HTML 應用程式的 Windows 平臺的新功能。 在 Windows 8 和 8.1，HTML 應用程式在 Windows 10 工作中什麼所謂的"本地模式"。 在本地模式下，HTML 應用程式具有完全訪問本機 Windows API 表面和能力。 為了防止腳本注入攻擊，這可能會導致洩漏由於惡意程式碼的個人可識別資訊，本地模式不允許內聯腳本，需要開發人員執行 DOM 操作，這樣做內顯式上下文 (`MSApp.execUnsafeLocalFunction`).

遠端模式消除了這些要求，這使得它可以使用未修改的庫像 jQuery 或 AngularJS 直接在代碼中，沒有發生任何變化。 要這樣做，它將刪除您聲明某些功能時證明您在 Windows 應用商店的應用程式的能力。 刪除的這些功能通常不會阻止進入特定的功能，但它可能需要使用不同的 Api 或戰術組合。

### 遠端方式對功能的影響

部署到 Windows 應用商店應用程式遠端模式時，下列功能不可用:

  * 企業認證 (`enterpriseAuthentication`)
  * 共用的使用者證書 (`sharedUserCertificates`)
  * 文件庫 (`documentsLibrary`)
  * 音樂庫 (`musicLibrary`)
  * 圖片庫 (`picturesLibrary`)
  * 視頻庫 (`videosLibrary`)
  * 卸除式存放裝置 (`removableStorage`)
  * 互聯網端 (`internetClientServer`)-請注意， `internetClient`仍允許
  * 私人網路絡用戶端/伺服器 (`privateNetworkClientServer`)

每個庫限制可能要求使用者與檔案系統通過一個[檔選取器](https://msdn.microsoft.com/en-us/library/windows/apps/windows.storage.pickers.fileopenpicker.aspx)交互工作周圍。 這樣可以防止惡意注入的代碼任意訪問檔案系統。

通過使用不使用能力檢查 API 或經紀通過標準的互聯網溝通管道，如`XMLHttpRequest`或 Web 通訊端通信，必須解決與網路相關的限制。

企業身份驗證和共用使用者證書功能是專門針對企業方案。 這些功能支援私營/企業啟用的應用程式商店，所以如果你正在打算將其部署到內部部署機制的應用程式，您仍然可以支援這些。 然而，他們不支援遠端模式在公共 Windows 應用商店的應用程式。 當你建立針對 Windows 10，如果這些功能之一檢測到您的應用程式清單中時，將顯示警告。

## 引用

### config.xml 首選項

#### windows-target-version, windows-phone-target-version

    <preference name="windows-target-version" value="10.0" />
    <preference name="windows-phone-target-version" value="10.0" />


*至少一個是必需的。*

這些首選項確定 Windows 或 Windows Phone 你想要的目標應用程式套裝軟體的版本。

**有效的值**

  * `10.0`，`UAP`: 為 Windows 10 通用的應用程式平臺構建
  * `8.1`: 生成 Windows 8.1 或 Windows Phone 8.1
  * `8.0`: 構建 windows 8.0。 對於 Windows Phone 無效 (改用**wp8**科爾多瓦平臺)

**方案**

如果你只針對 Windows 10，你只需要 config.xml 檔中有一個單一`windows 目標版本`設置。

#### WindowsDefaultUriPrefix

    <preference name="WindowsDefaultUriPrefix" value="ms-appx://|ms-appx-web://" />


此首選項標識是否想要您的應用程式作為其啟動 URI 為目標的**局部上下文**或**遠端上下文**。 當生成 Windows 10，預設值是遠端上下文 (`ms-appx-web: / /`).

為了有一個本地模式應用程式，不受遠端模式能力的限制，您必須將此首選項設置為`ms-appx://`和不聲明任何`<access>`元素與遠端 Uri。

**有效的值**

  * `ms-appx://`(預設為 Windows 8.0，8.1): 本地上下文中運行的起始頁
  * `ms-appx-web://`(預設為 Windows 10): 遠端上下文中運行的起始頁

#### {SDK}-MinVersion，{SDK} MaxVersionTested

*可選*

    <preference name="Windows.Universal-MinVersion" value="10.0.0.0" />
    <preference name="Windows.Mobile-MinVersion" value="10.0.9927.0" />
    <preference name="Windows.Mobile-MaxVersionTested" value="10.0.10031.0" />
    <preference name="Microsoft.Band-MinVersion" value="10.0.11.0" />


這些首選項確定哪些生態系統 (包括但不是限於 Windows 通用、 Windows Mobile 或 Xbox) 和它們的最小/最大版本都相容。 他們仍然需要平臺都支援通用的應用程式平臺 (所以 Windows 10 作為基礎的作業系統)。 然而，這些可能表明應用程式是意識到可能只在某些設備 (如遊戲流在 Xbox 上) 可用的特定功能。

**有效的值**

有三個部分的每個值: **SDK**、**版本限制**和**版本價值**。 通過與`Windows`或`微軟`開始和結束`-MinVersion`或`-MaxVersionTested`中檢測到這些首選項:

  * **SDK**定義什麼專門的平臺，你想要的目標。 預設值是`Windows.Universal`。 有效值為這些 AppxManifest 架構，在`包/Depednencies/TargetPlatform`元素中定義。
  * 的 **版本限制** 定義應用程式相容性規則。 例如，如果 `-MinVersion` 設置為 10.1.0.0，然後至少 10.1.0.0 的相應的 sdk 並不支援的作業系統版本不能載入它。
      * `-MinVersion`指定 SDK 所需的最低的版本
      * `-MaxVersionTested`指定的最高測試版本的 sdk。 如果發佈了新版本的相應的 sdk，它將運行在相容模式下為指定的版本。
  * **版本值**是 major.minor.build.qfe 的整數 4 元組形式**.

如果你 config.xml 檔中指定這些類型沒有偏好，然後將預設選擇 Windows.Universal 10.0.0.0 版本。
