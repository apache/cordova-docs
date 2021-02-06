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

title: 升級 Android
---

# 升級 Android

本指南演示如何修改 Android 專案從科爾多瓦的舊版本進行升級。 大多數這些說明適用于與舊集的前面的命令列工具創建的專案 `cordova` CLI 實用程式。 資訊，請參閱命令列介面如何更新的 CLI 版本。

## 升級到 4.0.0

有利用 4.0.0 的重大變化所需的特定升級步驟。第一，常見的升級步驟，如下所示。

對於非 CLI 專案，運行:

        bin/update path/to/project
    

對於 CLI 專案:

1.  更新 `cordova` CLI 版本。請參閱命令列介面。

2.  在你現有的專案中運行 `cordova platform update android`。

### 升級白名單

現在通過外掛程式實現所有的白名單功能。 無外掛程式升級到 4.0.0 後您的應用程式不再卻是白名單的保護。科爾多瓦有兩個白名單外掛程式，提供不同的保護層級。

1.  `cordova-plugin-whitelist` 外掛程式 *（推薦）*
    
    *   這個外掛程式被推薦的是更加安全和可配置比在以前的版本中白
    *   在所需的配置更改上看到 [cordova-plugin-whitelist][1] 的詳細資訊
    *   兼營： `cordova plugin add cordova-plugin-crosswalk-webview`

2.  `cordova-plugin-legacy-whitelist` 外掛程式
    
    *   這個外掛程式提供了相同的白名單中行為，作為以前的版本。請參閱 [cordova-plugin-legacy-whitelist][2]
    *   沒有配置更改是必需的但它提供了比推薦外掛程式的保護較少
    *   兼營： `cordova-plugin-legacy-whitelist`

 [1]: https://github.com/apache/cordova-plugin-whitelist
 [2]: https://github.com/apache/cordova-plugin-legacy-whitelist

### 使用人行橫道上 web 視圖

預設情況下，您的應用程式將繼續使用 web 視圖提供的設備的系統。如果你想要改用人行橫道上 web 視圖，只需添加人行橫道上的外掛程式：

    cordova plugin add cordova-plugin-crosswalk-webview
    

後添加的外掛程式，您的應用程式會得到人行橫道上 web 視圖正確安裝和配置。

### 升級到閃屏外掛程式

如果您的應用程式使用一個閃屏功能已被轉移到一個外掛程式。 用於初始螢幕的配置選項是不變的。 所需的只有升級步驟是要添加的外掛程式：

    cordova plugin add cordova-plugin-splashscreen
    

## 從 3.6.0 版升級到 3.7.1

對於非 CLI 專案，運行:

        bin/update path/to/project
    

對於 CLI 專案:

1.  更新 `cordova` CLI 版本。請參閱命令列介面。

2.  運行 `cordova platform update android` 在你現有的專案中。

## 從 3.2.0 升級到 3.3.0

按照關於 `3.2.0` 相同的說明.

入手 3.3.0，科爾多瓦運行時現在被編譯為 Android 的庫，而不是一個罐子裡。 這都不應該影響為命令列用法，但 IDE 使用者將需要新增的 `MyProject CordovaLib` 專案導入到他們的工作區。

## 從 3.1.0 升級到 3.2.0

為專案創建的科爾多瓦 CLI:

1.  更新 `cordova` CLI 版本。請參閱命令列介面。

2.  運行 `cordova platform update android`

不創建與科爾多瓦 CLI 的專案，請運行:

        bin/update <project_path>
    

**警告：**關於 Android 4.4-Android 4.4.3，創建檔輸入具有類型的元素 ="檔"將不會打開檔選取器對話方塊。 這是鉻對 Android 的回歸和能重現該問題在 Android 上獨立 Chrome 瀏覽器 （見 HTTP://code.google.com/p/android/issues/detail?id=62220） 建議的解決方法是使用的檔案傳輸和檔的外掛程式為 Android 4.4。您可以偵聽 onClick 事件從輸入類型 ="檔"，然後彈出一個檔選擇器 UI。 為了打領帶表單資料的上傳，你可以使用 JavaScript 將表單值附加到多個部分的 POST 請求所使。

## 從 3.0.0 升級到 3.1.0

為專案創建的科爾多瓦 CLI:

1.  更新 `cordova` CLI 版本。請參閱命令列介面。

2.  運行 `cordova platform update android`

不創建與科爾多瓦 CLI 的專案，請運行:

        bin/update <project_path>
    

## 從 2.9.0 升級到 CLI (3.0.0)

1.  創建一個新的 Apache 科爾多瓦 3.0.0 專案使用 CLI，科爾多瓦在命令列介面所述。

2.  添加您的平臺的科爾多瓦的專案，例如： `cordova platform add android`.

3.  將您的專案 `www` 目錄中的內容複寫到您剛剛創建的科爾多瓦專案根本 `www` 目錄。

4.  將本機的任何資產從舊專案複製到相應的目錄下 `平臺/android`： 此目錄是您的本機科爾多瓦 android 專案所在。

5.  使用科爾多瓦 CLI 工具來安裝您需要的任何外掛程式。注意，CLI 處理所有核心 Api 作為外掛程式，所以他們可能需要添加。只有 3.0.0 外掛程式是與 CLI 相容。

## 從 2.9.0 升級到 3.0.0

1.  創建一個新的 Apache 科爾多瓦 Android 專案。

2.  將 `www` 目錄中的內容複寫到新專案中。

3.  將任何原生的 Android 資產從 `res` 目錄複寫到新的專案。

4.  複製您安裝到新專案的 `src` 子目錄中的任何外掛程式。

5.  請務必升級任何棄用 `<plugin>` 從你舊的 `config.xml` 檔到新的 `<feature>` 規範的引用。

6.  更新到 `org.apache.cordova.api` 包是 `org.apache.cordova` 的任何引用.
    
    **注**： 所有的核心 Api 已被刪除，並且必須作為外掛程式安裝。請有關詳細資訊，參閱使用 Plugman 管理外掛程式指南。

## 從 2.8.0 升級到 2.9.0

1.  運行 `bin/update <project_path>`.

## 從 2.7.0 升級到 2.8.0

1.  從專案的 `libs` 目錄刪除 `cordova-2.7.0.jar`。

2.  將 `cordova-2.8.0.jar` 添加到專案的 `libs` 目錄。

3.  如果您使用 Eclipse，請刷新您的 Eclipse 專案，做清潔。

<!-- SS Eclipse -->

1.  將新的 `cordova.js` 複製到您的專案。

2.  更新你的 html 代碼，使用新的 `cordova.js` 檔。

3.  要匹配 `framework/res/xml/config.xml` 的 `res/xml/config.xml` 檔的副本.

4.  更新 `framework/res/xml/config.xml` 以前一樣有類似的設置。

5.  將檔從複製 `bin/templates/cordova` 到專案的 `cordova` 目錄。

## 從 2.6.0 升級到 2.7.0

1.  從專案的 `libs` 目錄刪除 `cordova-2.6.0.jar`。

2.  將 `cordova-2.7.0.jar` 添加到專案的 `libs` 目錄。

3.  如果您使用 Eclipse，請刷新您的 Eclipse 專案，做清潔。

4.  將新的 `cordova-2.7.0.js` 複製到您的專案。

5.  更新你的 html 代碼，使用新的 `cordova-2.7.0.js` 檔。

6.  複製 `res/xml/config.xml` 以匹配`framework/res/xml/config.xml`.

7.  更新 `framework/res/xml/config.xml` 以前一樣有類似的設置。

8.  將檔從複製 `bin/templates/cordova` 到專案的 `cordova` 目錄。

## 從 2.5.0 升級到 2.6.0

1.  從專案的 `libs` 目錄刪除 `cordova-2.5.0.jar`。

2.  將 `cordova-2.6.0.jar` 添加到專案的 `libs` 目錄。

3.  如果您使用 Eclipse，請刷新您的 Eclipse 專案，做清潔。

4.  複製新 `cordova-2.6.0.js` 到您的專案。

5.  更新你的 html 代碼，使用新的 `cordova-2.6.0.js` 檔。

6.  複製 `res/xml/config.xml` 以匹配`framework/res/xml/config.xml`.

7.  更新 `framework/res/xml/config.xml` 以前一樣有類似的設置。

8.  將檔從複製 `bin/templates/cordova` 到專案的 `cordova` 目錄。

科爾多瓦原始目錄中列出的專案路徑與運行 `bin/update < 專案 >`。

## 從 2.4.0 升級到 2.5.0

1.  從專案的 `libs` 目錄刪除 `cordova-2.4.0.jar`。

2.  將 `cordova-2.5.0.jar` 添加到專案的 `libs` 目錄。

3.  如果您使用 Eclipse，請刷新您的 Eclipse 專案，做清潔。

4.  複製新 `cordova-2.5.0.js` 到您的專案。

5.  更新你的 html 代碼，使用新的 `cordova-2.5.0.js` 檔。

6.  複製 `res/xml/config.xml` 以匹配`framework/res/xml/config.xml`.

7.  更新 `framework/res/xml/config.xml` 以前一樣有類似的設置。

8.  將檔從複製 `bin/templates/cordova` 到專案的 `cordova` 目錄。

## 從 2.3.0 升級到 2.4.0

1.  從專案的 `libs` 目錄刪除 `cordova-2.3.0.jar`。

2.  將 `cordova-2.4.0.jar` 添加到專案的 `libs` 目錄。

3.  如果您使用 Eclipse，請刷新您的 Eclipse 專案，做清潔。

4.  複製新 `cordova-2.4.0.js` 到您的專案。

5.  更新你的 html 代碼，使用新的 `cordova-2.4.0.js` 檔。

6.  複製 `res/xml/config.xml` 以匹配`framework/res/xml/config.xml`.

7.  將檔從複製 `bin/templates/cordova` 到專案中的 `cordova` 目錄。

## 從 2.2.0 升級到 2.3.0

1.  從專案的 `libs` 目錄刪除 `cordova-2.2.0.jar`。

2.  將 `cordova-2.3.0.jar` 添加到專案的 `libs` 目錄。

3.  如果您使用 Eclipse，請刷新您的 Eclipse 專案，做清潔。

4.  複製新 `cordova-2.3.0.js` 到您的專案。

5.  更新你的 html 代碼，使用新的 `cordova-2.3.0.js` 檔。

6.  複製 `res/xml/config.xml` 以匹配`framework/res/xml/config.xml`.

7.  將檔從複製 `bin/templates/cordova` 到專案的 `cordova` 目錄。

## 從 2.1.0 升級到 2.2.0

1.  從專案的 `libs` 目錄刪除 `cordova-2.1.0.jar`。

2.  將 `cordova-2.2.0.jar` 添加到專案的 `libs` 目錄。

3.  如果您使用 Eclipse，請刷新您的 Eclipse 專案，做清潔。

4.  複製新 `cordova-2.2.0.js` 到您的專案。

5.  更新你的 html 代碼，使用新的 `cordova-2.2.0.js` 檔。

6.  複製 `res/xml/config.xml` 相匹配`framework/res/xml/config.xml`.

7.  將檔從複製 `bin/templates/cordova` 到專案的 `cordova` 目錄。

## 從 2.0.0 升級到 2.1.0

1.  從專案的 `libs` 目錄刪除 `cordova-2.0.0.jar`。

2.  將 `cordova-2.1.0.jar` 添加到專案的 `libs` 目錄。

3.  如果您使用 Eclipse，請刷新您的 Eclipse 專案，做清潔。

4.  複製新 `cordova-2.1.0.js` 到您的專案。

5.  更新你的 html 代碼，使用新的 `cordova-2.1.0.js` 檔。

6.  複製 `res/xml/config.xml` 以匹配`framework/res/xml/config.xml`.

7.  將檔從複製 `bin/templates/cordova` 到專案的 `cordova` 目錄。

## 從 1.9.0 升級到 2.0.0

1.  從專案的 `libs` 目錄刪除 `cordova-1.9.0.jar`。

2.  將 `cordova-2.0.0.jar` 添加到專案的 `libs` 目錄。

3.  如果您使用 Eclipse，請刷新您的 Eclipse 專案，做清潔。

4.  複製新 `cordova-2.0.0.js` 到您的專案。

5.  更新你的 html 代碼，使用新的 `cordova-2.0.0.js` 檔。

6.  複製 `res/xml/config.xml` 以匹配`framework/res/xml/config.xml`.

在 2.0.0 釋放，`config.xml` 檔相結合，並取代了 `cordova.xml` 和 `plugins.xml`。 舊的檔已被否決，和當他們仍然在 2.0.0，工作就會停止工作在將來的版本中。

## 從 1.8.1 升級到 1.9.0

1.  從專案的 `libs` 目錄刪除 `cordova-1.8.0.jar`。

2.  將 `cordova-1.9.0.jar` 添加到專案的 `libs` 目錄。

3.  如果您使用 Eclipse，請刷新您的 Eclipse 專案，做清潔。

4.  將新的 `cordova-1.9.0.js` 複製到您的專案。

5.  更新你的 html 代碼，使用新的 `cordova-1.9.0.js` 檔。

6.  更新 `res/xml/plugins.xml` 以匹配`framework/res/xml/plugins.xml`.

由於引入了 `CordovaWebView` 在 1.9.0 釋放，協力廠商外掛程式可能無法工作。 這些外掛程式需要從 `CordovaInterface` 使用 `getContext()` 或 `getActivity()` 獲取上下文。 如果你不是一個經驗豐富的 Android 開發者，請聯繫外掛程式的維護者，並將該任務添加到其 bug 追蹤器。

## 從 1.8.0 升級到 1.8.0

1.  從專案的 `libs` 目錄刪除 `cordova-1.8.0.jar`。

2.  將 `cordova-1.8.1.jar` 添加到專案的 `libs` 目錄。

3.  如果您使用 Eclipse，請刷新您的 Eclipse 專案，做清潔。

4.  將新的 `cordova-1.8.1.js` 複製到您的專案。

5.  更新你的 html 代碼，使用新的 `cordova-1.8.1.js` 檔。

6.  更新 `res/xml/plugins.xml` 相匹配`framework/res/xml/plugins.xml`.

## 從 1.7.0 以來升級到 1.8.0

1.  從專案的 `libs` 目錄刪除 `cordova-1.7.0.jar`。

2.  將 `cordova-1.8.0.jar` 添加到專案的 `libs` 目錄。

3.  如果您使用 Eclipse，請刷新您的 Eclipse 專案，做清潔。

4.  複製新 `cordova-1.8.0.js` 到您的專案。

5.  更新你的 html 代碼，使用新的 `cordova-1.8.0.js` 檔。

6.  更新 `res/xml/plugins.xml` 以匹配`framework/res/xml/plugins.xml`.

## 從 1.7.0 以來升級到 1.8.0

1.  從專案的 `libs` 目錄刪除 `cordova-1.7.0.jar`。

2.  將 `cordova-1.8.0.jar` 添加到專案的 `libs` 目錄。

3.  如果您使用 Eclipse，請刷新您的 Eclipse 專案，做清潔。

4.  複製新 `cordova-1.8.0.js` 到您的專案。

5.  更新你的 html 代碼，使用新的 `cordova-1.8.0.js` 檔。

6.  更新 `res/xml/plugins.xml` 以匹配`framework/res/xml/plugins.xml`.

## 從 1.6.1 升級到 1.7.0 以來

1.  從專案的 `libs` 目錄刪除 `cordova-1.6.1.jar`。

2.  將 `cordova-1.7.0.jar` 添加到專案的 `libs` 目錄。

3.  如果您使用 Eclipse，請刷新您的 Eclipse 專案和做清潔。

4.  將新的 `cordova-1.7.0.js` 複製到您的專案。

5.  更新 `res/xml/plugins.xml` 以匹配`framework/res/xml/plugins.xml`.

## 從 1.6.0 升級到 1.6.1

1.  從專案的 `libs` 目錄刪除 `cordova-1.6.0.jar`。

2.  將 `cordova-1.6.1.jar` 添加到專案的 `libs` 目錄。

3.  如果您使用 Eclipse，請刷新您的 Eclipse 專案，做清潔。

4.  將新的 `cordova-1.6.1.js` 複製到您的專案。

5.  更新 `res/xml/plugins.xml` 以匹配`framework/res/xml/plugins.xml`.

## 從 1.5.0 版升級到 1.6.0

1.  從專案的 `libs` 目錄刪除 `cordova-1.5.0.jar`。

2.  將 `cordova-1.6.0.jar` 添加到專案的 `libs` 目錄。

3.  如果您使用 Eclipse，請刷新您的 Eclipse 專案，做清潔。

4.  將新的 `cordova-1.6.0.js` 複製到您的專案。

5.  更新你的 html 代碼，使用新的 `cordova-1.6.0.js` 檔。

6.  更新 `res/xml/plugins.xml` 以匹配`framework/res/xml/plugins.xml`.

7.  替換 `res/xml/cordova.xml` 以匹配 `framework/res/xml/cordova.xml` `res/xml/phonegap.xml`.

## 從 1.4.0 升級到 1.5.0 版

1.  從專案的 `libs` 目錄刪除 `phonegap-1.4.0.jar`。

2.  將 `cordova-1.5.0.jar` 添加到專案的 `libs` 目錄。

3.  如果您使用 Eclipse，請刷新您的 Eclipse 專案，做清潔。

4.  將新的 `cordova-1.5.0.js` 複製到您的專案。

5.  更新你的 html 代碼，使用新的 `cordova-1.5.0.js` 檔。

6.  更新 `res/xml/plugins.xml` 以匹配`framework/res/xml/plugins.xml`.

7.  替換 `res/xml/cordova.xml` 以匹配 `framework/res/xml/cordova.xml` `res/xml/phonegap.xml`.

## 從 1.3.0 升級到 1.4.0

1.  從專案的 `libs` 目錄刪除 `phonegap-1.3.0.jar`。

2.  將 `phonegap-1.4.0.jar` 添加到專案的 `libs` 目錄。

3.  如果您使用 Eclipse，請刷新您的 Eclipse 專案，做清潔。

4.  將新 `phonegap-1.4.0.js` 複製到您的專案。

5.  更新你的 html 代碼，使用新的 `phonegap-1.4.0.js` 檔。

6.  更新 `res/xml/plugins.xml` 以匹配`framework/res/xml/plugins.xml`.

7.  更新 `res/xml/phonegap.xml` 相匹配`framework/res/xml/phonegap.xml`.

## 從 1.2.0 升級到 1.3.0

1.  從專案的 `libs` 目錄刪除 `phonegap-1.2.0.jar`。

2.  將 `phonegap-1.3.0.jar` 添加到專案的 `libs` 目錄。

3.  如果您使用 Eclipse，請刷新您的 Eclipse 專案，做清潔。

4.  將新 `phonegap-1.3.0.js` 複製到您的專案。

5.  更新你的 html 代碼，使用新的 `phonegap-1.2.0.js` 檔。

6.  更新 `res/xml/plugins.xml` 相匹配`framework/res/xml/plugins.xml`.

7.  更新 `res/xml/phonegap.xml` 以匹配`framework/res/xml/phonegap.xml`.

## 請升級到 1.2.0 從 1.1.0

1.  從專案的 `libs` 目錄刪除 `phonegap-1.1.0.jar`。

2.  將 `phonegap-1.2.0.jar` 添加到專案的 `libs` 目錄。

3.  如果您使用 Eclipse，請刷新您的 Eclipse 專案和做清潔。

4.  將新 `phonegap-1.2.0.js` 複製到您的專案。

5.  更新你的 html 代碼，使用新的 `phonegap-1.2.0.js` 檔。

6.  更新 `res/xml/plugins.xml` 以匹配`framework/res/xml/plugins.xml`.

7.  更新 `res/xml/phonegap.xml` 以匹配`framework/res/xml/phonegap.xml`.

## 從 1.0.0 升級到 1.1.0

1.  從專案的 `libs` 目錄刪除 `phonegap-1.0.0.jar`。

2.  將 `phonegap-1.1.0.jar` 添加到專案的 `libs` 目錄。

3.  如果你使用 Eclipse，請刷新您的 Eclipse 專案和做清潔。

4.  將新 `phonegap-1.1.0.js` 複製到您的專案。

5.  更新你的 html 代碼，使用新的 `phonegap-1.1.0.js` 檔。

6.  更新 `res/xml/plugins.xml` 以匹配`framework/res/xml/plugins.xml`.

## 從 0.9.6 升級到 1.0.0

1.  從專案的 `libs` 目錄刪除 `phonegap-0.9.6.jar`。

2.  將 `phonegap-1.0.0.jar` 添加到專案的 `libs` 目錄。

3.  如果你使用 Eclipse，請刷新您的 Eclipse 專案和做清潔。

4.  將新 `phonegap-1.0.0.js` 複製到您的專案。

5.  更新你的 html 代碼，使用新的 `phonegap-1.0.0.js` 檔。

6.  添加 `res/xml/plugins.xml` 以匹配 `framework/res/xml/plugins.xml`.