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

# 概述

科爾多瓦是一個開放源碼移動開發框架。 它允許您使用標準的 web 技術如 HTML5、 CSS3 和 JavaScript 進行跨平臺開發，避免每個移動平臺的本機開發語言。 應用程式在有針對性的對每個平臺的包裝內執行，並依靠符合標準的 API 綁定訪問每個設備的感應器、 資料和網路狀態。

如果您是，使用科爾多瓦：

*   移動開發人員和想要擴展應用程式跨多個平臺，而無需重新實現它與每個平臺的語言和工具集。

*   網頁程式開發人員和想要部署 web 應用程式打包為分佈在各種應用程式中存儲的門戶。

*   移動開發人員感興趣混合本機應用程式中的元件與*web 視圖*（瀏覽器視窗），可以訪問設備級的 Api，或者如果您想要開發的外掛程式介面本機和 web 視圖元件之間。

## 基本元件

科爾多瓦的應用程式都依賴于一個共同的 `config.xml` 檔，提供有關應用程式的資訊，並指定參數影響它如何工作，如它是否回應方向轉移。 此檔遵循 W3C 的[打包 Web 應用程式][1]或*構件*，規範。

 [1]: http://www.w3.org/TR/widgets/

應用程式本身是作為 web 頁來實現，預設情況下，引用任何 CSS、 JavaScript、 圖像、 媒體檔案，命名*index.html*或其他資源是它運行的必要條件。 這款應用程式作為*web 視圖*的本機應用程式中包裝，您分發給應用程式商店內執行。 為 web 應用程式進行交互的方式本機應用程式做的各項裝置功能，它也必須引用 `cordova.js` 檔，該檔提供 API 綁定。

科爾多瓦啟用 web 視圖可提供具有其整個使用者介面的應用程式。 它也可以是更大，混合應用程式與本機應用程式元件混合 web 視圖中的一個元件。 科爾多瓦提供*外掛程式*介面，使這些元件，以互相溝通。

## 發展路徑

設置應用程式的最簡單方法是運行 `cordova` 命令列實用程式，也稱為*命令列介面*(CLI)。 （若要安裝 CLI，參見命令列介面。根據您想要的目標的平臺的集，您可以依靠逐步更多地共用在開發週期的 CLI：

*   在最基本的情況下，你可以使用 CLI 只是為了創建一個新專案填充，您要修改的預設配置。

*   對於很多的移動平臺，也可以使用 CLI 來設置內部每個 SDK 編譯所需的額外的專案檔案。 為此，您必須安裝每個目標的平臺 SDK。 （見平臺指南的說明）。如表中所示的平臺支援，您可能需要在目標平臺根據不同的作業系統上運行，CLI。

*   為支援平臺，CLI 可以編譯 executible 的應用程式和基於 SDK 的設備模擬程式中運行它們。 為全面的測試，還可以生成應用程式檔，並直接在設備上安裝它們。

在開發週期中的任何點，你也可以依賴特定于平臺的 SDK 工具，可提供一組更豐富的選項。 （見有關每個平臺 SDK 工具的詳細資訊平臺指南設置）。SDK 環境是更適當的如果你想要實現一個混合本機和基於 web 的應用程式元件的混合應用。 您可以使用命令列實用程式最初生成應用程式，或以反覆運算方式此後要喂 SDK 工具更新的代碼。 您也可以自己生成應用程式的設定檔。 （見 config.xml 檔的詳細資訊）。