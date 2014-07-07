* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. ASF 許可證，此檔到你根據 Apache 許可證，2.0 版 （"許可證"） ；您不可能使用此檔除了符合許可證。 You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# 升級 Windows Phone

本指南演示如何修改 Windows Phone 8 專案，從科爾多瓦的舊版本進行升級。 這些指令的一些適用于創建與前面的命令列工具舊套的專案 `cordova` CLI 實用程式。 資訊，請參閱命令列介面如何更新的 CLI 版本。 以下部分顯示了如何從非 CLI 專案升級。

## 從 3.1.0 升級到 3.2.0

為創建的科爾多瓦 CLI 的專案：

1.  更新 `cordova` CLI 版本。請參閱命令列介面。

2.  運行`cordova platform update wp8`

對於不使用 CLI 科爾多瓦創建的專案，請運行：

        bin\update < project_path >
    

## 從 3.0.0 升級到 3.1.0

為創建的科爾多瓦 CLI 的專案：

1.  更新 `cordova` CLI 版本。請參閱命令列介面。

2.  運行`cordova platform update wp8`

對於不使用 CLI 科爾多瓦創建的專案，請運行：

        bin\update < project_path >
    

## 從 2.9.0 升級到 CLI （3.0.0)

1.  創建新的 Apache 科爾多瓦 3.0.0 專案使用 CLI，科爾多瓦，如所述的命令列介面。

2.  添加您的平臺的科爾多瓦的專案，例如：`cordova
platform add wp8`.

3.  該專案的內容複寫 `www` 目錄到 `www` 目錄在您剛剛創建的科爾多瓦專案的根目錄。

4.  複製或覆蓋任何本機資產從原始專案 （ `SplashScreen` ， `ApplicationIcon` 等等），這讓確定要添加的任何新檔 `.csproj` 檔。 Windows 電話裡面的專案生成 `platforms\wp8` 目錄。

5.  使用科爾多瓦 CLI 工具來安裝您需要的任何外掛程式。請注意 CLI 處理所有核心 Api 作為外掛程式，所以他們可能需要添加。只有 3.0.0 外掛程式是與 CLI 相容。

6.  生成並測試。

## 從 2.x 升級到 3.0.0 (非 CLI)

在 Visual Studio 的解決方案資源管理器視窗中：

1.  創建新的 Apache 科爾多瓦 WP8 3.0.0 專案。

2.  將複製的內容 `www` 目錄到新的專案，並確保這些專案添加到 VS 專案。

3.  複製並覆蓋任何閃屏或圖示圖像。

4.  複製超過任何外掛程式從 `plugins` 目錄到新專案，並確保他們還補充說到 VS 專案。

5.  生成並測試。

**注**： 所有核心 Api 從科爾多瓦版本 3.0 中, 移除和作為外掛程式必須單獨安裝。 關於如何重新啟用非 CLI 的工作流中的這些功能的詳細資訊，請參閱使用 Plugman 到管理外掛程式。