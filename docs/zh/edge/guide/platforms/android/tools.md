* * *

許可證： 根據一個或多個參與者授權合約許可到 Apache 軟體基金會 (ASF)。 See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Android 殼工具指南

本指南演示如何使用平臺為中心的外殼工具科爾多瓦的一整套開發 Android 應用程式。 這種發展道路，概述中討論可能會為您提供比所述的命令列介面的跨平臺 CLI 工具更大範圍的發展方案。 例如，您需要部署一個科爾多瓦 web 視圖自訂旁邊的本機組件時使用外殼程式工具。 在使用之前要麼發展路徑，您必須首先配置 Android SDK 環境 Android 平臺指南中所述。

要為 android 系統啟用外殼工具，請從[cordova.apache.org][1]下載科爾多瓦。 下載檔案中包含單獨的檔案，為每個平臺。 展開每個您想要的目標， `android` 在這種情況下。 相關的工具，通常可用在頂級 `bin` 目錄中，否則為諮詢**自述**檔，瞭解有關更多詳細的指示。

 [1]: http://cordova.apache.org

這些工具允許您創建、 構建和運行 Android 應用程式。 額外的命令列介面，可以跨所有平臺的外掛程式功能的資訊，請參閱使用 Plugman 到管理外掛程式。 有關如何開發外掛程式的詳細資訊，請參閱應用程式外掛程式。

## 創建一個專案

運行 `create` 命令，指定的現有路徑的專案、 反向域風格包識別碼和應用程式的顯示名稱。 這裡是 Mac/Linux 和 Windows 的語法：

        $ /path/to/cordova-android/bin/create /path/to/project com.example.project_name ProjectName
    
        C:\>\path\to\cordova-android\bin\create.bat \path\to\project com.example.project_name ProjectName
    

## 生成

此清理，然後生成專案。

在 Mac/Linux 或 Windows 上調試：

        $ /path/to/project/cordova/build --debug
    
        C:\>\path\to\project\cordova\build.bat --debug
    

釋放，Mac/Linux 或 Windows 上：

        $ /path/to/project/cordova/build --release
    
        C:\>\path\to\project\cordova\build.bat --release
    

## 運行應用程式

`run`命令接受下列*可選*的參數：

*   目標規範。這包括 `--emulator` ， `--device` ，或`--target=<targetID>`.

*   生成規范。這包括 `--debug` ， `--release` ，或`--nobuild`.
    
        $ /path/to/project/cordova/run [Target] [Build]
        
        C:\>\path\to\project\cordova\run.bat [Target] [Build]
        

請確保您創建至少一個 Android 虛擬裝置，否則為系統會提示您這樣與做 `android` 命令。 如果多個 AVD 可用作為目標，提示您選擇一個。 預設情況下 `run` 命令檢測連接的設備或當前正在運行的模擬程式，如果沒有設備發現。

## 日誌記錄

        $ /path/to/project/cordova/log
    
        C:\>\path\to\project\cordova\log.bat
    

## 清洗

        $ /path/to/project/cordova/clean
    
        C:\>\path\to\project\cordova\clean.bat
    

## 手動使用的螞蟻

如果你想打電話要螞蟻直接從命令列如 `ant debug install` ，您需要指定的附加參數到 ant 命令：

        ant debug install -Dout.dir=ant-build -Dgen.absolute.dir=ant-gen
    

這是因為是比預設值不同的科爾多瓦的 Ant 腳本所使用的目錄。這樣做是為了避免衝突，從與在命令列運行 Ant 時日食/ADT 裡面。

這些附加參數，將自動為您添加時使用 `cordova/build` 和 `cordova/run` 腳本上文所述。 為此它建議使用 `cordova/build` 和 `cordova/run` 而不是直接從命令列調用 Ant 腳本。

## 大廈與 Gradle （實驗） ！

科爾多瓦安卓系統現在支援[Gradle][2]建築。 這是可選的科爾多瓦 3.x，但將被預設啟用，在將來，可能與科爾多瓦 4.0。生成系統由環境變數，這樣可以設置為殼，或與命令列上指定啟用 `cordova build` 命令。

 [2]: http://www.gradle.org/

請注意 Gradle 建置規則仍在發展，可能會受到較大的改變之前 Gradle 成為預設生成系統。 開發人員鼓勵試一試，體驗它，但是如果你在它上面你自己生產生成系統，你將可能經歷幾個重大更改在接下來的幾個版本中之前它穩定。

### 相關的環境變數

*   **ANDROID _ 生成**
    
    此變數控制哪些生成系統用來生成專案。可以在任一值 `ant` 或`gradle`.
    
    如果未設置，則當前預設為 `ant` ，但這預計會發生變化。

### （你通常不需要設置這些） 其他環境變數

*   **ANDROID _ 回家**
    
    這應該設置為包含 Android SDK 的目錄。 科爾多瓦尋找這在預設安裝位置，以及看您的 PATH 變數，所以它通常並不需要的設置。

*   **JAVA _ 回家**
    
    在一些機器上，這將需要進行設置，以使 Gradle 可以找到 JAVA 編譯器。

### Gradle 屬性

可以設置這些[屬性][3]，以自訂生成：

 [3]: http://www.gradle.org/docs/current/userguide/tutorial_this_and_that.html

*   **cdvBuildMultipleApks**
    
    如果設置此值，則將生成多個 APK 檔： 庫專案所支援的本機平臺每一個 (x 86，手臂，等等）。 這可能是重要的如果您的專案使用大型的本機庫，可能會大幅提高生成 apk 檔的大小。
    
    如果未設置，然後將生成單個的 APK，可以在所有設備上都使用。

*   **cdvVersionCode**
    
    重寫 versionCode 中設置`AndroidManifest.xml`

*   **cdvReleaseSigningPropertiesFile**
    
    包含簽名資訊釋放的.properties 檔路徑生成。該檔應該看起來像：
    
        storeFile=relative/path/to/keystore.p12 storePassword = SECRET1 storeType = pkcs12 keyAlias = DebugSigningKey keyPassword = SECRET2
        
    
    `storePassword`和 `keyPassword` 是可選的並將提示輸入，如果省略。

*   **cdvDebugSigningPropertiesFile**
    
    與相同 cdvReleaseSigningPropertiesFile，但用於調試生成。當您需要與其他開發者共用的簽名金鑰時很有用。

*   **cdvMinSdkVersion**
    
    重寫的值 `minSdkVersion` 中設置 `AndroidManifest.xml` 。有用時，創建多個 APKs 基於 SDK 版本。

*   **cdvBuildToolsVersion**
    
    重寫自動檢測到 `android.buildToolsVersion` 的值。

*   **cdvCompileSdkVersion**
    
    重寫自動檢測到 `android.compileSdkVersion` 的值。

### 擴展 build.gradle

如果您需要自訂 `build.gradle` ，寧願比直接編輯，您應該創建一個名為的同級檔 `build-extras.gradle` 。 此檔將包含主要由 `build.gradle` 當存在。 下面是一個示例：

    # 示例生成 extras.gradle # 此檔是包含開頭的 'build.gradle' ext.cdvDebugSigningPropertiesFile = '。/../ android-調試-keys.properties 的 # 時設置，此功能允許代碼運行 'build.gradle' ext.postBuildExtras 月底 = {android.buildTypes.debug.applicationIdSuffix =.debug}
    

### 示例生成

    匯出 ANDROID_BUILD = gradle 出口 ORG_GRADLE_PROJECT_cdvMinSdkVersion = 14 科爾多瓦生成 android — — — — gradleArg = PcdvBuildMultipleApks = true