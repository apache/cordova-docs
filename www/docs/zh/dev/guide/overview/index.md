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

title: 概述
---

# 概述

Apache 科爾多瓦是一個開放源碼移動開發框架。 它允許您使用標準的 web 技術如 HTML5、 CSS3 和 JavaScript 進行跨平臺開發，避免每個移動平臺的本機開發語言。 應用程式在有針對性的對每個平臺的包裝內執行，並依靠符合標準的 API 綁定訪問每個設備的感應器、 資料和網路狀態。

Apache 科爾多瓦于 2012 年 10 月畢業于作為一個頂級專案內阿帕奇軟體基金會 (ASF)。 科爾多瓦的未來發展會透過 ASF，確保開放管理的專案。 它將永遠是根據 Apache 許可證，2.0 版本的自由和開放源碼。訪問[cordova.apache.org][1]的詳細資訊。

 [1]: http://cordova.apache.org

如果您是，使用 Apache 科爾多瓦：

*   移動開發人員和想要擴展應用程式跨多個平臺，而無需重新實現它與每個平臺的語言和工具集。

*   網頁程式開發人員和想要部署 web 應用程式打包為分佈在各種應用程式中存儲的門戶。

*   移動開發人員感興趣與*web 視圖*（特殊的瀏覽器視窗），可以訪問設備級別的 Api，混合本機應用程式元件或如果你想開發一個外掛程式介面本機和 web 視圖元件之間。

## 基本元件

Apache 科爾多瓦的應用程式都依賴于一個共同的 `config.xml` 檔，提供有關應用程式的資訊，並指定參數影響它如何工作，如它是否回應方向轉移。 此檔遵循 W3C 的[打包 Web 應用程式][2]或*構件*，規範。

 [2]: http://www.w3.org/TR/widgets/

應用程式本身作為 web 頁上，預設情況下名為*index.html*，引用任何 CSS、 JavaScript、 圖像、 媒體檔案或其他資源的本地檔是必要的它的運行來實現。 這款應用程式作為*web 視圖*的本機應用程式中包裝，您分發給應用程式商店內執行。

科爾多瓦啟用 web 視圖可提供具有其整個使用者介面的應用程式。 在一些平臺上，它也可以是更大，混合應用程式與本機應用程式元件混合 web 視圖中的一個元件。 （請參閱嵌入 WebViews 的詳細資訊）。

*外掛程式*介面，供科爾多瓦和本機組件與對方溝通。 這使您可以調用來調用本機代碼從 JavaScript。 理想情況下，到該本機代碼的 JavaScript Api 是一致的跨多個設備平臺。 版本 3.0，外掛程式提供綁定到標準設備的 Api。 協力廠商外掛程式在所有平臺上提供額外綁定到不一定可用的功能。 你可以在[外掛程式註冊表][3]中找到這些協力廠商外掛程式，在您的應用程式中使用它們。 您也可以開發自己的外掛程式，外掛程式開發指南中所述。 外掛程式可能是必要的例如，科爾多瓦和自訂本機組件之間進行通信。

 [3]: http://plugins.cordova.io

**注**： 版本為 3.0，當您創建它並沒有任何外掛程式目前科爾多瓦專案。 這是新的缺省行為。 你的願望，甚至核心外掛程式，必須顯式添加任何外掛程式。

科爾多瓦不提供任何 UI 小部件或 MV * 框架。 科爾多瓦提供只在那些可以執行的運行時。 如果您想要使用 UI 部件和/或 MV * 框架，您將需要選擇那些並將它們包含在應用程式中自己作為協力廠商材料。

## 發展路徑

版本 3.0，你可以使用兩種基本的工作流程來創建一個移動應用程式。雖然你經常可以使用任一工作流完成相同的任務，他們每個人都具有優點：

*   **跨平臺 (CLI) 工作流程**： 使用此工作流如果您希望您的應用程式在許多不同的移動作業系統上運行，盡可能以小的特定于平臺的發展需要。 此工作流都是圍繞 `cordova` 實用程式，否則稱為科爾多瓦*CLI*，引入的科爾多瓦 3.0。CLI 是功能的一個高級別的工具，使您可以生成許多平臺的專案一次，提取很大一部分的較低級別 shell 腳本。 CLI 將一組通用的 web 資產複製到每個移動平臺的子目錄，使得任何必需的配置更改為每個，運行生成腳本來生成應用程式二進位檔案。 CLI 還提供了一個通用介面，適用于您的應用程式的外掛程式。CLI 的更多詳細資訊，請參閱命令列介面。 除非你有需要為該平臺為中心的工作流，被建議的跨平臺工作流。

*   **平臺為中心的工作流**： 如果你想要注重建立一個單一的平臺的應用程式和需要，以便能夠在較低級別進行修改使用此工作流。 您需要使用這種方法，例如，如果您希望您的應用程式組合自訂本機組件與基於 web 的科爾多瓦元件，如嵌入 WebViews 中所討論。 作為一個經驗法則，使用此工作流，如果您需要修改 SDK 中的專案。 此工作流，依賴于一套專門針對每個受支援的平臺和單獨的 Plugman 實用程式，它允許您要應用的外掛程式的較低級別 shell 腳本。 雖然您可以使用此工作流構建跨平臺的應用程式，通常很難更因為缺乏的一種較高級別的工具意味著單獨的組建循環和外掛程式修改為每個平臺。 儘管如此，此工作流允許您提供的每個 SDK 的開發選項獲得更多和複雜混合應用程式至關重要。 有關每個平臺可用外殼實用程式，請參閱各種平臺指南的詳細資訊。

當第一次開始的時候，它可能是最簡單的方法使用跨平臺工作流來創建一個應用程式，如所述的命令列介面。 然後，您可以選擇要切換到以平臺為中心的工作流，如果你需要 SDK 提供的更大控制。 較低級別外殼實用程式，可在[cordova.apache.org][1]在 CLI 比單獨的分發。 生成的專案最初由 CLI，這些外殼工具也是在中可用專案的各種 `platforms/*/cordova` 目錄。

**注意**： 一旦你從基於 CLI 的工作流切換到一個圍繞特定于平臺的 Sdk 和殼的工具，你不能回去。 CLI 維護一套共同的跨平臺原始程式碼，這對每個構建它使用它來寫入的特定于平臺的原始程式碼。 要保留的特定于平臺的資產做的任何修改，你需要要切換到的以平臺為中心的殼工具，忽視的跨平臺原始程式碼，並轉而依賴特定于平臺的原始程式碼。

## 安裝科爾多瓦

科爾多瓦的安裝會不同上面你選擇的工作流：

*   跨平臺工作流： 請參閱命令列介面。

*   平臺為中心的工作流： 請參見平臺輔助線。

在安裝之後科爾多瓦，建議您查看您將為開發移動平臺平臺指南。 它還建議你還審查的隱私指南、 [安全指南](../appdev/security/index.html) 》 和接下來的步驟。 用於配置科爾多瓦，見 config.xml 檔。 從 JavaScript 訪問本機函數在一個設備上的，請參閱外掛程式 Api。 和參考作為必要的其他包括指南。