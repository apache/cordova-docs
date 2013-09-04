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

# 配置參考

使用獨立于平臺的設定檔，可以控制應用程式行為的許多方面 `config.xml` ，其中的格式基於 W3C 的[打包 Web 應用程式 (小部件)][1]規範。

 [1]: http://www.w3.org/TR/widgets/

為專案創建與科爾多瓦 CLI （描述在命令列介面），可以在頂級找到此檔 `www` 目錄。 使用 CLI 來生成專案將重新生成此內的各個子目錄中的檔版本 `platforms` 。 對於非 CLI 的專案，每個特定于平臺的檔作為源。

雖然位置的 `config.xml` 檔可能會更改取決於平臺，其內容通常不這樣做。 一些特定于平臺的功能也是在相同的設定檔中指定的。 下面列出了詳細資訊：

*   iOS 配置
*   Android 系統組態
*   黑莓手機配置

## config.xml 元素

[Apache 科爾多瓦][2]專案力圖通過 web 啟發和基於 web 的抽象，很大程度是驅動和通過 web 社區的標準抽象遠離本機平臺細節。 請花幾分鐘時間熟悉[config.xml 規範][1]，目的要瞭解應用程式中繼資料的 Apache 科爾多瓦專案的類型是抽象的並提供簡單的切入點。

 [2]: http://cordova.io

示例：

        < 構件 >< 首選項名稱 ="MySetting"值 ="true"/ >< 功能名稱 = 值"MyPlugin"="MyPluginClass"/ >< 訪問來源 ="*"/ >< 內容 src="index.html"/ >< / 構件 >
    

請按照操作跨主要平臺支援的 Apache 科爾多瓦的支援元素的清單。

### `<feature>`

這些元素映射到本機 Api 應用程式訪問。 在運行時，Apache 科爾多瓦框架將映射 `<feature>` 元素為本機代碼，使您的科爾多瓦應用程式訪問設備不可用典型的基於 web 的應用程式的 Api。

### `<access>`

這些元素定義白名單的工作原理。請參閱域白名單指南的詳細資訊。

### `<content>`

此元素定義相對於專案的標準 web 資產根目錄的應用程式的起始頁。此元素是可選的預設值是`index.html`.