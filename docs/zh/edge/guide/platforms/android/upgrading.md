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

# 升級 Android

本指南演示如何修改 Android 專案從科爾多瓦的舊版本進行升級。 大多數這些說明適用于與舊集的前面的命令列工具創建的專案 `cordova` CLI 實用程式。 命令列介面資訊，請參閱如何更新的 CLI 版本。

## 從 3.2.0 升級到 3.3.0

遵循相同的 instructinos`3.2.0`.

從 3.3.0 開始，科爾多瓦運行時是現在作為編譯 Android 的庫，而不是 Jar。 這都不應該影響對於命令列用法，但 IDE 使用者將需要導入到新添加的 `MyProject-CordovaLib` 到其工作區中的專案。

## 從 3.1.0 升級到 3.2.0

為創建的科爾多瓦 CLI 的專案：

1.  更新 `cordova` CLI 版本。請參閱命令列介面。

2.  運行`cordova platform update android`

對於不使用 CLI 科爾多瓦創建的專案，請運行：

        bin/update <project_path>
    

## 從 3.0.0 升級到 3.1.0

為創建的科爾多瓦 CLI 的專案：

1.  更新 `cordova` CLI 版本。請參閱命令列介面。

2.  運行`cordova platform update android`

對於不使用 CLI 科爾多瓦創建的專案，請運行：

        bin/update <project_path>
    

## 從 2.9.0 升級到 CLI （3.0.0)

1.  創建新的 Apache 科爾多瓦 3.0.0 專案使用 CLI，科爾多瓦，如所述的命令列介面。

2.  添加您的平臺的科爾多瓦專案，例如：`cordova
platform add android`.

3.  您的專案的內容複寫 `www` 到目錄 `www` 目錄在您剛剛創建的科爾多瓦專案的根目錄。

4.  將本機的任何資產從舊專案複製到相應的目錄下 `platforms/android` ： 此目錄是您的本機科爾多瓦 android 專案存在的地方。

5.  使用科爾多瓦 CLI 工具來安裝您需要的任何外掛程式。請注意 CLI 處理所有核心 Api 作為外掛程式，所以他們可能需要添加。只有 3.0.0 外掛程式是與 CLI 相容。

## 從 2.9.0 升級到 3.0.0

1.  創建一個新的 Apache 科爾多瓦 Android 專案。

2.  將複製的內容你 `www` 目錄到新的專案。

3.  複製任何本機的 Android 資產從您 `res` 目錄到新的專案。

4.  複製在你安裝從任何外掛程式 `src` 子目錄到新專案。

5.  請確保要升級任何棄用 `<plugin>` 從你的舊的引用 `config.xml` 到新檔 `<feature>` 規範。

6.  更新對任何引用 `org.apache.cordova.api` 包被`org.apache.cordova`.
    
    **注**： 所有核心 Api 已被移除，必須作為外掛程式安裝。請有關詳細資訊，參閱管理外掛程式指南的使用 Plugman。

## 從 2.8.0 升級到 2.9.0

1.  運行`bin/update <project_path>`.

## 從 2.7.0 升級到 2.8.0

1.  刪除 `cordova-2.7.0.jar` 從專案的 `libs` 目錄。

2.  添加 `cordova-2.8.0.jar` 到專案中的 `libs` 目錄。

3.  如果您使用 Eclipse，請刷新您的 Eclipse 專案，做清潔。

<!-- SS Eclipse -->

1.  複製新 `cordova.js` 到您的專案。

2.  更新您的 html 代碼，使用新的 `cordova.js` 檔。

3.  複製 `res/xml/config.xml` 檔，以匹配`framework/res/xml/config.xml`.

4.  更新 `framework/res/xml/config.xml` 以前一樣有類似的設置。

5.  將檔從複製 `bin/templates/cordova` 到專案中的 `cordova` 目錄。

## 從 2.6.0 升級到 2.7.0

1.  刪除 `cordova-2.6.0.jar` 從專案的 `libs` 目錄。

2.  添加 `cordova-2.7.0.jar` 到專案中的 `libs` 目錄。

3.  如果您使用 Eclipse，請刷新您的 Eclipse 專案，做清潔。

4.  複製新 `cordova-2.7.0.js` 到您的專案。

5.  更新您的 html 代碼，使用新的 `cordova-2.7.0.js` 檔。

6.  複製 `res/xml/config.xml` 以匹配`framework/res/xml/config.xml`.

7.  更新 `framework/res/xml/config.xml` 以前一樣有類似的設置。

8.  將檔從複製 `bin/templates/cordova` 到專案中的 `cordova` 目錄。

## 從 2.5.0 升級到 2.6.0

1.  刪除 `cordova-2.5.0.jar` 從專案的 `libs` 目錄。

2.  添加 `cordova-2.6.0.jar` 到專案中的 `libs` 目錄。

3.  如果您使用 Eclipse，請刷新您的 Eclipse 專案，做清潔。

4.  複製新 `cordova-2.6.0.js` 到您的專案。

5.  更新您的 html 代碼，使用新的 `cordova-2.6.0.js` 檔。

6.  複製 `res/xml/config.xml` 以匹配`framework/res/xml/config.xml`.

7.  更新 `framework/res/xml/config.xml` 以前一樣有類似的設置。

8.  將檔從複製 `bin/templates/cordova` 到專案中的 `cordova` 目錄。

運行 `bin/update <project>` 的專案路徑與科爾多瓦原始目錄中列出。

## 從 2.4.0 升級到 2.5.0

1.  刪除 `cordova-2.4.0.jar` 從專案的 `libs` 目錄。

2.  添加 `cordova-2.5.0.jar` 到專案中的 `libs` 目錄。

3.  如果您使用 Eclipse，請刷新您的 Eclipse 專案，做清潔。

4.  複製新 `cordova-2.5.0.js` 到您的專案。

5.  更新您的 html 代碼，使用新的 `cordova-2.5.0.js` 檔。

6.  複製 `res/xml/config.xml` 以匹配`framework/res/xml/config.xml`.

7.  更新 `framework/res/xml/config.xml` 以前一樣有類似的設置。

8.  將檔從複製 `bin/templates/cordova` 到專案中的 `cordova` 目錄。

## 從 2.3.0 升級到 2.4.0

1.  刪除 `cordova-2.3.0.jar` 從專案的 `libs` 目錄。

2.  添加 `cordova-2.4.0.jar` 到專案中的 `libs` 目錄。

3.  如果您使用 Eclipse，請刷新您的 Eclipse 專案，做清潔。

4.  複製新 `cordova-2.4.0.js` 到您的專案。

5.  更新您的 html 代碼，使用新的 `cordova-2.4.0.js` 檔。

6.  複製 `res/xml/config.xml` 以匹配`framework/res/xml/config.xml`.

7.  將檔從複製 `bin/templates/cordova` 到專案中的 `cordova` 目錄。

## 從 2.2.0 升級到 2.3.0

1.  刪除 `cordova-2.2.0.jar` 從專案的 `libs` 目錄。

2.  添加 `cordova-2.3.0.jar` 到專案中的 `libs` 目錄。

3.  如果您使用 Eclipse，請刷新您的 Eclipse 專案，做清潔。

4.  複製新 `cordova-2.3.0.js` 到您的專案。

5.  更新您的 html 代碼，使用新的 `cordova-2.3.0.js` 檔。

6.  複製 `res/xml/config.xml` 以匹配`framework/res/xml/config.xml`.

7.  將檔從複製 `bin/templates/cordova` 到專案中的 `cordova` 目錄。

## 從 2.1.0 升級到 2.2.0

1.  刪除 `cordova-2.1.0.jar` 從專案的 `libs` 目錄。

2.  添加 `cordova-2.2.0.jar` 到專案中的 `libs` 目錄。

3.  如果您使用 Eclipse，請刷新您的 Eclipse 專案，做清潔。

4.  複製新 `cordova-2.2.0.js` 到您的專案。

5.  更新您的 html 代碼，使用新的 `cordova-2.2.0.js` 檔。

6.  複製 `res/xml/config.xml` 以匹配`framework/res/xml/config.xml`.

7.  將檔從複製 `bin/templates/cordova` 到專案中的 `cordova` 目錄。

## 從 2.0.0 升級到 2.1.0

1.  刪除 `cordova-2.0.0.jar` 從專案的 `libs` 目錄。

2.  添加 `cordova-2.1.0.jar` 到專案中的 `libs` 目錄。

3.  如果您使用 Eclipse，請刷新您的 Eclipse 專案，做清潔。

4.  複製新 `cordova-2.1.0.js` 到您的專案。

5.  更新您的 html 代碼，使用新的 `cordova-2.1.0.js` 檔。

6.  複製 `res/xml/config.xml` 以匹配`framework/res/xml/config.xml`.

7.  將檔從複製 `bin/templates/cordova` 到專案中的 `cordova` 目錄。

## 從 1.9.0 升級到 2.0.0

1.  刪除 `cordova-1.9.0.jar` 從專案的 `libs` 目錄。

2.  添加 `cordova-2.0.0.jar` 到專案中的 `libs` 目錄。

3.  如果您使用 Eclipse，請刷新您的 Eclipse 專案，做清潔。

4.  複製新 `cordova-2.0.0.js` 到您的專案。

5.  更新您的 html 代碼，使用新的 `cordova-2.0.0.js` 檔。

6.  複製 `res/xml/config.xml` 以匹配`framework/res/xml/config.xml`.

在 2.0.0 版、 `config.xml` 檔結合和替換 `cordova.xml` 和 `plugins.xml` 。 舊的檔已被否決，，雖然他們仍工作在 2.0.0，將停止在將來的版本中工作。

## 從 1.8.1 升級到 1.9.0

1.  刪除 `cordova-1.8.0.jar` 從專案的 `libs` 目錄。

2.  添加 `cordova-1.9.0.jar` 到專案中的 `libs` 目錄。

3.  如果您使用 Eclipse，請刷新您的 Eclipse 專案，做清潔。

4.  複製新 `cordova-1.9.0.js` 到您的專案。

5.  更新您的 html 代碼，使用新的 `cordova-1.9.0.js` 檔。

6.  更新 `res/xml/plugins.xml` 以匹配`framework/res/xml/plugins.xml`.

由於採用了 `CordovaWebView` 的 1.9.0 版本中，協力廠商外掛程式可能無法工作。 這些外掛程式需要獲取上下文從 `CordovaInterface` 使用 `getContext()` 或 `getActivity()` 。 如果您不是一個經驗豐富的 Android 開發者，請聯繫外掛程式的維護者和將這項任務添加到其 bug 跟蹤工具。

## 從 1.8.0 升級到 1.8.0

1.  刪除 `cordova-1.8.0.jar` 從專案的 `libs` 目錄。

2.  添加 `cordova-1.8.1.jar` 到專案中的 `libs` 目錄。

3.  如果您使用 Eclipse，請刷新您的 Eclipse 專案，做清潔。

4.  複製新 `cordova-1.8.1.js` 到您的專案。

5.  更新您的 html 代碼，使用新的 `cordova-1.8.1.js` 檔。

6.  更新 `res/xml/plugins.xml` 以匹配`framework/res/xml/plugins.xml`.

## 從 1.7.0 升級到 1.8.0

1.  刪除 `cordova-1.7.0.jar` 從專案的 `libs` 目錄。

2.  添加 `cordova-1.8.0.jar` 到專案中的 `libs` 目錄。

3.  如果您使用 Eclipse，請刷新您的 Eclipse 專案，做清潔。

4.  複製新 `cordova-1.8.0.js` 到您的專案。

5.  更新您的 html 代碼，使用新的 `cordova-1.8.0.js` 檔。

6.  更新 `res/xml/plugins.xml` 以匹配`framework/res/xml/plugins.xml`.

## 從 1.7.0 升級到 1.8.0

1.  刪除 `cordova-1.7.0.jar` 從專案的 `libs` 目錄。

2.  添加 `cordova-1.8.0.jar` 到專案中的 `libs` 目錄。

3.  如果您使用 Eclipse，請刷新您的 Eclipse 專案，做清潔。

4.  複製新 `cordova-1.8.0.js` 到您的專案。

5.  更新您的 html 代碼，使用新的 `cordova-1.8.0.js` 檔。

6.  更新 `res/xml/plugins.xml` 以匹配`framework/res/xml/plugins.xml`.

## 從 1.6.1 升級到 1.7.0

1.  刪除 `cordova-1.6.1.jar` 從專案的 `libs` 目錄。

2.  添加 `cordova-1.7.0.jar` 到專案中的 `libs` 目錄。

3.  如果您使用 Eclipse，請刷新您的 Eclipse 專案，做清潔。

4.  複製新 `cordova-1.7.0.js` 到您的專案。

5.  更新 `res/xml/plugins.xml` 以匹配`framework/res/xml/plugins.xml`.

## 從 1.6.0 升級到 1.6.1

1.  刪除 `cordova-1.6.0.jar` 從專案的 `libs` 目錄。

2.  添加 `cordova-1.6.1.jar` 到專案中的 `libs` 目錄。

3.  如果您使用 Eclipse，請刷新您的 Eclipse 專案，做清潔。

4.  複製新 `cordova-1.6.1.js` 到您的專案。

5.  更新 `res/xml/plugins.xml` 以匹配`framework/res/xml/plugins.xml`.

## 從 1.5.0 版升級到 1.6.0

1.  刪除 `cordova-1.5.0.jar` 從專案的 `libs` 目錄。

2.  添加 `cordova-1.6.0.jar` 到專案中的 `libs` 目錄。

3.  如果您使用 Eclipse，請刷新您的 Eclipse 專案，做清潔。

4.  複製新 `cordova-1.6.0.js` 到您的專案。

5.  更新您的 html 代碼，使用新的 `cordova-1.6.0.js` 檔。

6.  更新 `res/xml/plugins.xml` 以匹配`framework/res/xml/plugins.xml`.

7.  替換 `res/xml/phonegap.xml` 與 `res/xml/cordova.xml` 進行匹配`framework/res/xml/cordova.xml`.

## 從 1.4.0 升級到 1.5.0 版

1.  刪除 `phonegap-1.4.0.jar` 從專案的 `libs` 目錄。

2.  添加 `cordova-1.5.0.jar` 到專案中的 `libs` 目錄。

3.  如果您使用 Eclipse，請刷新您的 Eclipse 專案，做清潔。

4.  複製新 `cordova-1.5.0.js` 到您的專案。

5.  更新您的 html 代碼，使用新的 `cordova-1.5.0.js` 檔。

6.  更新 `res/xml/plugins.xml` 以匹配`framework/res/xml/plugins.xml`.

7.  替換 `res/xml/phonegap.xml` 與 `res/xml/cordova.xml` 進行匹配`framework/res/xml/cordova.xml`.

## 從 1.3.0 升級到 1.4.0

1.  刪除 `phonegap-1.3.0.jar` 從專案的 `libs` 目錄。

2.  添加 `phonegap-1.4.0.jar` 到專案中的 `libs` 目錄。

3.  如果您使用 Eclipse，請刷新您的 Eclipse 專案，做清潔。

4.  複製新 `phonegap-1.4.0.js` 到您的專案。

5.  更新您的 html 代碼，使用新的 `phonegap-1.4.0.js` 檔。

6.  更新 `res/xml/plugins.xml` 以匹配`framework/res/xml/plugins.xml`.

7.  更新 `res/xml/phonegap.xml` 以匹配`framework/res/xml/phonegap.xml`.

## 從 1.2.0 升級到 1.3.0

1.  刪除 `phonegap-1.2.0.jar` 從專案的 `libs` 目錄。

2.  添加 `phonegap-1.3.0.jar` 到專案中的 `libs` 目錄。

3.  如果您使用 Eclipse，請刷新您的 Eclipse 專案，做清潔。

4.  複製新 `phonegap-1.3.0.js` 到您的專案。

5.  更新您的 html 代碼，使用新的 `phonegap-1.2.0.js` 檔。

6.  更新 `res/xml/plugins.xml` 以匹配`framework/res/xml/plugins.xml`.

7.  更新 `res/xml/phonegap.xml` 以匹配`framework/res/xml/phonegap.xml`.

## 從 1.1.0 升級到 1.2.0

1.  刪除 `phonegap-1.1.0.jar` 從專案的 `libs` 目錄。

2.  添加 `phonegap-1.2.0.jar` 到專案中的 `libs` 目錄。

3.  如果您使用 Eclipse，請刷新您的 Eclipse 專案，做清潔。

4.  複製新 `phonegap-1.2.0.js` 到您的專案。

5.  更新您的 html 代碼，使用新的 `phonegap-1.2.0.js` 檔。

6.  更新 `res/xml/plugins.xml` 以匹配`framework/res/xml/plugins.xml`.

7.  更新 `res/xml/phonegap.xml` 以匹配`framework/res/xml/phonegap.xml`.

## 從 1.0.0 升級到 1.1.0

1.  刪除 `phonegap-1.0.0.jar` 從專案的 `libs` 目錄。

2.  添加 `phonegap-1.1.0.jar` 到專案中的 `libs` 目錄。

3.  如果您使用 Eclipse，請刷新您的 Eclipse 專案，做清潔。

4.  複製新 `phonegap-1.1.0.js` 到您的專案。

5.  更新您的 html 代碼，使用新的 `phonegap-1.1.0.js` 檔。

6.  更新 `res/xml/plugins.xml` 以匹配`framework/res/xml/plugins.xml`.

## 從 0.9.6 升級到 1.0.0

1.  刪除 `phonegap-0.9.6.jar` 從專案的 `libs` 目錄。

2.  添加 `phonegap-1.0.0.jar` 到專案中的 `libs` 目錄。

3.  如果您使用 Eclipse，請刷新您的 Eclipse 專案，做清潔。

4.  複製新 `phonegap-1.0.0.js` 到您的專案。

5.  更新您的 html 代碼，使用新的 `phonegap-1.0.0.js` 檔。

6.  添加 `res/xml/plugins.xml` 以匹配`framework/res/xml/plugins.xml`.