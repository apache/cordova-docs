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

# 升級 Windows Phone

本指南演示如何修改 Windows Phone 的專案，這兩個版本 7 和 8，從科爾多瓦的舊版本進行升級。 大多數這些說明適用于與舊集的前面的命令列工具創建的專案 `cordova` CLI 實用程式。 命令列介面資訊，請參閱如何更新的 CLI 版本。 以下部分顯示了如何從非 CLI 專案升級。

## 從 3.1.0 升級到 3.2.0

為創建的科爾多瓦 CLI 的專案：

1.  更新 `cordova` CLI 版本。請參閱命令列介面。

2.  運行 `cordova platform update wp8` （或 `wp7` ，每添加到您的專案的平臺）。

對於不使用 CLI 科爾多瓦創建的專案，請運行：

        bin\update <project_path>
    

## 從 3.0.0 升級到 3.1.0

為創建的科爾多瓦 CLI 的專案：

1.  更新 `cordova` CLI 版本。請參閱命令列介面。

2.  運行 `cordova platform update wp8` （或 `wp7` ，每添加到您的專案的平臺）。

對於不使用 CLI 科爾多瓦創建的專案，請運行：

        bin\update <project_path>
    

## 從 2.9.0 升級到 CLI （3.0.0)

1.  創建新的 Apache 科爾多瓦 3.0.0 專案使用 CLI，科爾多瓦，如所述的命令列介面。

2.  添加您的平臺到科爾多瓦專案中，例如：`cordova
platform add wp7 wp8`.

3.  該專案的內容複寫 `www` 目錄到 `www` 目錄在您剛剛創建的科爾多瓦專案的根目錄。

4.  複製或覆蓋任何本機資產從原始專案 （ `SplashScreen` ， `ApplicationIcon` 等等），這讓確定要添加的任何新檔 `.csproj` 檔。 Windows 電話裡面的專案生成 `platforms\wp7` 或 `platforms\wp8` 目錄。

5.  使用科爾多瓦 CLI 工具來安裝您需要的任何外掛程式。請注意 CLI 處理所有核心 Api 作為外掛程式，所以他們可能需要添加。只有 3.0.0 外掛程式是與 CLI 相容。

6.  生成並測試。

## 從 2.9.0 升級到 3.0.0 (非 CLI)

在 Visual Studio 的解決方案資源管理器視窗中：

1.  創建一個新的 Apache 科爾多瓦 WP7 或 WP8 3.0.0 專案。

2.  將複製的內容你 `www` 目錄到新的專案，並確保這些專案添加到 VS 專案。

3.  複製並覆蓋任何閃屏或圖示圖像。

4.  複製超過任何外掛程式從 `plugins` 目錄到新專案，並確保他們還補充說到 VS 專案。

5.  生成並測試。

**注**： 所有核心 Api 從科爾多瓦版本 3.0 中, 移除和作為外掛程式必須單獨安裝。 關於如何重新啟用非 CLI 的工作流中的這些功能的詳細資訊，請參閱使用 Plugman 到管理外掛程式。

## 從 2.8.0 升級到 2.9.0

在 Visual Studio 的解決方案資源管理器視窗中：

1.  創建一個新的 Apache 科爾多瓦 WP7 或 WP8 2.9.0 專案。

2.  將複製的內容你 `www` 目錄到新的專案，並確保這些專案添加到 VS 專案。

3.  更新的名稱 `cordova.js` 的 HTML 標籤，如果它仍在使用科爾多瓦 VERSION.js (應該是剛中`cordova.js`).

4.  複製並覆蓋任何閃屏或圖示圖像。

5.  複製超過任何外掛程式從 `plugins` 目錄到新專案，並確保他們也添加到.csproj 檔。

6.  生成並測試。

## 從 2.7.0 升級到 2.8.0

在 Visual Studio 的解決方案資源管理器視窗中：

1.  創建一個新的 Apache 科爾多瓦 WP7 或 WP8 2.8.0 專案。

2.  將複製的內容你 `www` 目錄到新的專案，並確保這些專案添加到 VS 專案。

3.  更新您的 html 代碼，使用新的 `cordova.js` 檔。（注意檔案名中的版本號的缺乏。

4.  複製並覆蓋任何閃屏或圖示圖像。

5.  複製超過任何外掛程式從 `plugins` 目錄到新專案，並確保他們還補充說到 VS 專案。

6.  生成並測試。

## 從 2.6.0 升級到 2.7.0

在 Visual Studio 的解決方案資源管理器視窗中：

1.  創建一個新的 Apache 科爾多瓦 WP7 或 WP8 2.7.0 專案。

2.  將複製的內容你 `www` 目錄到新的專案，並確保這些專案添加到 VS 專案。

3.  更新您的 html 代碼，使用新的 `cordova-2.7.0.js` 檔。

4.  複製並覆蓋任何閃屏或圖示圖像。

5.  複製超過任何外掛程式從 `plugins` 目錄到新專案，並確保他們還補充說到 VS 專案。

6.  生成並測試。

## 從 2.5.0 升級到 2.6.0

在 Visual Studio 的解決方案資源管理器視窗中：

1.  創建一個新的 Apache 科爾多瓦 WP7 或 WP8 2.6.0 專案。

2.  將複製的內容你 `www` 目錄到新的專案，並確保這些專案添加到 VS 專案。

3.  更新您的 html 代碼，使用新的 `cordova-2.6.0.js` 檔。

4.  複製並覆蓋任何閃屏或圖示圖像。

5.  複製超過任何外掛程式從 `plugins` 目錄到新專案，並確保他們還補充說到 VS 專案。

6.  生成並測試。

## 從 2.4.0 升級到 2.5.0

在 Visual Studio 的解決方案資源管理器視窗中：

1.  創建一個新的 Apache 科爾多瓦 WP7 或 WP8 2.5.0 專案。

2.  將複製的內容你 `www` 目錄到新的專案，並確保這些專案添加到 VS 專案。

3.  更新您的 html 代碼，使用新的 `cordova-2.5.0.js` 檔。

4.  複製並覆蓋任何閃屏或圖示圖像。

5.  複製超過任何外掛程式從 `plugins` 目錄到新專案，並確保他們還補充說到 VS 專案。

6.  生成並測試。

## 從 2.3.0 升級到 2.4.0

在 Visual Studio 的解決方案資源管理器視窗中：

1.  創建一個新的 Apache 科爾多瓦 WP7 或 WP8 2.4.0 專案。

2.  將複製的內容你 `www` 目錄到新的專案，並確保這些專案添加到 VS 專案。

3.  更新您的 html 代碼，使用新的 `cordova-2.4.0.js` 檔。

4.  複製並覆蓋任何閃屏或圖示圖像。

5.  複製超過任何外掛程式從 `plugins` 目錄到新專案，並確保他們還補充說到 VS 專案。

6.  生成並測試。

## 從 2.2.0 升級到 2.3.0

在 Visual Studio 的解決方案資源管理器視窗中：

1.  創建新的 Apache 科爾多瓦 WP7 2.3.0 專案。

2.  將複製的內容你 `www` 目錄到新的專案，並確保這些專案添加到 VS 專案。

3.  更新您的 html 代碼，使用新的 `cordova-2.3.0.js` 檔。

4.  複製並覆蓋任何閃屏或圖示圖像。

5.  複製超過任何外掛程式從 `plugins` 目錄到新專案，並確保他們還補充說到 VS 專案。

6.  生成並測試。

## 從 2.1.0 升級到 2.2.0

在 Visual Studio 的解決方案資源管理器視窗中：

1.  創建新的 Apache 科爾多瓦 WP7 2.2.0 專案。

2.  將複製的內容你 `www` 目錄到新的專案，並確保這些專案添加到 VS 專案。

3.  更新您的 html 代碼，使用新的 `cordova-2.2.0.js` 檔。

4.  複製並覆蓋任何閃屏或圖示圖像。

5.  複製超過任何外掛程式從 `plugins` 目錄到新專案，並確保他們還補充說到 VS 專案。

6.  生成並測試。

## 從 2.0.0 升級到 2.1.0

在 Visual Studio 的解決方案資源管理器視窗中：

1.  創建新的 Apache 科爾多瓦 WP7 2.1.0 專案。

2.  將複製的內容你 `www` 目錄到新的專案，並確保這些專案添加到 VS 專案。

3.  更新您的 html 代碼，使用新的 `cordova-2.1.0.js` 檔。

4.  複製並覆蓋任何閃屏或圖示圖像。

5.  複製超過任何外掛程式從 `plugins` 目錄到新專案，並確保他們還補充說到 VS 專案。

6.  生成並測試。

## 從 1.9.0 升級到 2.0.0

有很大變化到 Apache 科爾多瓦 2.0.0 WP7 專案結構，使這升級有點更多涉及的其他人。 本質上這不是升級而建立一個新的專案和對現有原始程式碼檔的副本。

在 Visual Studio 的解決方案資源管理器視窗中：

1.  創建一個新的 Apache 科爾多瓦 WP7 2.0 專案。

2.  將複製的內容你 `www` 目錄到新的專案，並確保這些專案添加到 VS 專案。

3.  更新您的 html 代碼，使用新的 `cordova-2.0.0.js` 檔。

4.  複製並覆蓋任何閃屏或圖示圖像。

5.  複製超過任何外掛程式從 `plugins` 目錄到新專案，並確保他們還補充說到 VS 專案。

6.  生成並測試。

## 從 1.8.0 升級到 1.9.0

在 Visual Studio 的解決方案資源管理器視窗中：

1.  刪除 `GapLib/WP7CordovaClassLib.dll` 從您的專案。

2.  移除對的引用 `WP7CordovaClassLib` **的引用**的目錄中。

3.  **引用**上按一下滑鼠右鍵，然後選擇**增加參考**.

4.  導航到新分佈和添加 `WP7CordovaClassLib.dll` 檔。
    
    **注**： 您可以通過在引用上右擊並選擇**屬性**查看 DLL 的版本.

5.  複製新 `cordova-1.9.0.js` 到您的專案。（請確定它被標記為內容）。

6.  更新您的 html 代碼，使用新的 `cordova-1.9.0.js` 檔。

## 從 1.7.0 升級到 1.8.0

在 Visual Studio 的解決方案資源管理器視窗中：

1.  刪除 `GapLib/WP7CordovaClassLib.dll` 從您的專案。

2.  移除對的引用 `WP7CordovaClassLib` **的引用**的目錄中。

3.  **引用**上按一下滑鼠右鍵，然後選擇**增加參考**.

4.  導航到新分佈和添加 `WP7CordovaClassLib.dll` 檔。
    
    **注**： 您可以通過在引用上右擊並選擇**屬性**查看 DLL 的版本.

5.  複製新 `cordova-1.8.0.js` 到您的專案。（請確定它被標記為內容）。

6.  更新您的 html 代碼，使用新的 `cordova-1.8.0.js` 檔。

## 從 1.6.0 升級到 1.7.0

在 Visual Studio 的解決方案資源管理器視窗中：

1.  刪除 `GapLib/WP7CordovaClassLib.dll` 從您的專案。

2.  移除對的引用 `WP7CordovaClassLib` **的引用**的目錄中。

3.  **引用**上按一下滑鼠右鍵，然後選擇**增加參考**.

4.  導航到新分佈和添加 `WP7CordovaClassLib.dll` 檔。
    
    **注**： 您可以通過在引用上右擊並選擇**屬性**查看 DLL 的版本.

5.  複製新 `cordova-1.7.0.js` 到您的專案。（請確定它被標記為內容）。

6.  更新您的 html 代碼，使用新的 `cordova-1.7.0.js` 檔。

## 從 1.6.0 升級到 1.6.1

在 Visual Studio 的解決方案資源管理器視窗中：

1.  刪除 `GapLib/WP7CordovaClassLib.dll` 從您的專案。

2.  移除對的引用 `WP7CordovaClassLib` **的引用**的目錄中。

3.  **引用**上按一下滑鼠右鍵，然後選擇**增加參考**.

4.  導航到新分佈和添加 `WP7CordovaClassLib.dll` 檔。
    
    **注**： 您可以通過在引用上右擊並選擇**屬性**查看 DLL 的版本.

5.  複製新 `cordova-1.6.1.js` 到您的專案。（請確定它被標記為內容）。

6.  更新您的 html 代碼，使用新的 `cordova-1.6.1.js` 檔。

## 從 1.5.0 版升級到 1.6.0

在 Visual Studio 的解決方案資源管理器視窗中：

1.  刪除 `GapLib/WP7CordovaClassLib.dll` 從您的專案。

2.  移除對的引用 `WP7CordovaClassLib` **的引用**的目錄中。

3.  **引用**上按一下滑鼠右鍵，然後選擇**增加參考**.

4.  導航到新分佈和添加 `WP7CordovaClassLib.dll` 檔。
    
    **注**： 您可以通過在引用上右擊並選擇**屬性**查看 DLL 的版本.

5.  複製新 `cordova-1.6.0.js` 到您的專案。（請確定它被標記為內容）。

6.  更新您的 html 代碼，使用新的 `cordova-1.6.0.js` 檔。

## 從 1.4.0 升級到 1.5.0 版

在 Visual Studio 的解決方案資源管理器視窗中：

1.  刪除 `GapLib/WP7CordovaClassLib.dll` 從您的專案。

2.  移除對的引用 `WP7CordovaClassLib` **的引用**的目錄中。

3.  **引用**上按一下滑鼠右鍵，然後選擇**增加參考**.

4.  導航到新分佈和添加 `WP7CordovaClassLib.dll` 檔。
    
    **注**： 您可以通過在引用上右擊並選擇**屬性**查看 DLL 的版本.

5.  複製新 `cordova-1.5.0.js` 到您的專案。（請確定它被標記為內容）。

6.  更新您的 html 代碼，使用新的 `cordova-1.5.0.js` 檔。

## 從 1.3.0 升級到 1.4.0

在 Visual Studio 的解決方案資源管理器視窗中：

1.  刪除 `GapLib/WP7CordovaClassLib.dll` 從您的專案。

2.  移除對的引用 `WP7CordovaClassLib` **的引用**的目錄中。

3.  **引用**上按一下滑鼠右鍵，然後選擇**增加參考**.

4.  導航到新分佈和添加 `WP7CordovaClassLib.dll` 檔。
    
    **注**： 您可以通過在引用上右擊並選擇**屬性**查看 DLL 的版本.

5.  複製新 `cordova-1.4.0.js` 到您的專案。（請確定它被標記為內容）。

6.  更新您的 html 代碼，使用新的 `cordova-1.4.0.js` 檔。

## 從 1.2.0 升級到 1.3.0

在 Visual Studio 的解決方案資源管理器視窗中：

1.  刪除 `GapLib/WP7CordovaClassLib.dll` 從您的專案。

2.  移除對的引用 `WP7CordovaClassLib` **的引用**的目錄中。

3.  **引用**上按一下滑鼠右鍵，然後選擇**增加參考**.

4.  導航到新分佈和添加 `WP7CordovaClassLib.dll` 檔。
    
    **注**： 您可以通過在引用上右擊並選擇**屬性**查看 DLL 的版本.

5.  複製新 `cordova-1.3.0.js` 到您的專案。（請確定它被標記為內容）。

6.  更新您的 html 代碼，使用新的 `cordova-1.3.0.js` 檔。

## 從 1.1.0 升級到 1.2.0

在 Visual Studio 的解決方案資源管理器視窗中：

1.  刪除 `GapLib/WP7CordovaClassLib.dll` 從您的專案。

2.  移除對的引用 `WP7CordovaClassLib` **的引用**的目錄中。

3.  **引用**上按一下滑鼠右鍵，然後選擇**增加參考**.

4.  導航到新分佈和添加 `WP7CordovaClassLib.dll` 檔。
    
    **注**： 您可以通過在引用上右擊並選擇**屬性**查看 DLL 的版本.

5.  複製新 `cordova-1.2.0.js` 到您的專案。（請確定它被標記為內容）。

6.  更新您的 html 代碼，使用新的 `cordova-1.2.0.js` 檔。

## 從 1.0.0 升級到 1.1.0

在 Visual Studio 的解決方案資源管理器視窗中：

1.  刪除 `GapLib/WP7CordovaClassLib.dll` 從您的專案。

2.  移除對的引用 `WP7CordovaClassLib` **的引用**的目錄中。

3.  **引用**上按一下滑鼠右鍵，然後選擇**增加參考**.

4.  導航到新分佈和添加 `WP7CordovaClassLib.dll` 檔。
    
    **注**： 您可以通過在引用上右擊並選擇**屬性**查看 DLL 的版本.

5.  複製新 `cordova-1.1.0.js` 到您的專案。（請確定它被標記為內容）。

6.  更新您的 html 代碼，使用新的 `cordova-1.1.0.js` 檔。