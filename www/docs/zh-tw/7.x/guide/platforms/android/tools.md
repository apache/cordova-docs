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

title: Android 殼工具指南
---

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

## 簽署應用程式

您可以查看簽名要求在這裡的安卓應用程式： HTTP://developer.android.com/tools/publishing/app-signing.html

要簽名的應用程式，您需要以下參數:

*   金鑰庫 (`--keystore`): 可容納一套鑰匙的二進位檔案的路徑。

*   金鑰庫口令 (`-storePassword`): 到金鑰庫的密碼

*   別名 (`--alias`): 指定私密金鑰用於唱歌的 id。

*   * 密碼 （`--password`）： 為指定的私密金鑰的密碼。

*   金鑰庫 (`--keystoreType`) 類型: pkcs12 jks (預設: 自動檢測基於檔副檔名)

可以使用`build`或`run`腳本上面的命令列參數指定這些參數。

或者，您可以指定它們在組建組態檔 (build.json) 中使用 ( `--buildConfig` ) 參數。這裡是組建組態檔的一個示例:

    {
         "android": {
             "debug": {
                 "keystore": "..\android.keystore",
                 "storePassword": "android",
                 "alias": "mykey1",
                 "password" : "password",
                 "keystoreType": ""
             },
             "release": {
                 "keystore": "..\android.keystore",
                 "storePassword": "",
                 "alias": "mykey2",
                 "password" : "password",
                 "keystoreType": ""
             }
         }
     }
    

對於發佈簽名，可以排除密碼和構建系統會發出提示要求輸入密碼。

此外，它還支援以混合和匹配的命令列參數和 build.json 檔中的參數。 從命令列參數的值將會得到優先。 這可用於在命令列上指定的密碼。

## 日誌記錄

        $ /path/to/project/cordova/log
    
        C:\>\path\to\project\cordova\log.bat
    

## 清洗

        $ /path/to/project/cordova/clean
    
        C:\>\path\to\project\cordova\clean.bat
    

## Gradle 建築

截至 cordova-android@4.0.0，專案生成使用[Gradle][2]。 關於建設與螞蟻的說明，請參閱文檔的舊版本。

 [2]: http://www.gradle.org/

### Gradle 屬性

可以設置這些[屬性][3]以自訂生成:

 [3]: http://www.gradle.org/docs/current/userguide/tutorial_this_and_that.html

*   **cdvBuildMultipleApks**(預設: false)
    
    如果設置此值，則將生成多個 APK 檔: 庫專案所支援的本機平臺每一個 (x 86，ARM，等)。 這可能是重要的如果您的專案使用大型的本機庫，可以大幅增加生成 apk 檔的大小。
    
    如果未設置，然後將生成單個 APK，可以在所有設備上使用。

*   **cdvVersionCode**
    
    VersionCode 在`AndroidManifest.xml`中設置將重寫

*   **cdvReleaseSigningPropertiesFile**（預設： release-signing.properties)
    
    包含簽名發佈的資訊進行.properties 檔路徑生成。 該檔應該看起來像:
    
        storeFile=relative/path/to/keystore.p12
        storePassword=SECRET1
        storeType=pkcs12
        keyAlias=DebugSigningKey
        keyPassword=SECRET2
        
    
    `storePassword`和`keyPassword`是可選的如果省略將提示輸入。

*   **cdvDebugSigningPropertiesFile**（預設： debug-signing.properties)
    
    同樣作為 cdvReleaseSigningPropertiesFile，但用於調試生成。當您需要與其他開發人員共用的簽名金鑰時有用。

*   **cdvMinSdkVersion**
    
    重寫`minSdkVersion`在`AndroidManifest.xml`中設置的值。有用的當創建多個 APKs 基於 SDK 版本。

*   **cdvBuildToolsVersion**
    
    重寫自動檢測到的`android.buildToolsVersion`值。

*   **cdvCompileSdkVersion**
    
    重寫自動檢測到的`android.compileSdkVersion`值。

### 擴展 build.gradle

如果您需要自訂`build.gradle`，而不是直接編輯，您應該創建一個名為`build-extras.gradle`的同級檔。 此檔將包含由主要的`build.gradle`時本。 下面是一個示例:

    # Example build-extras.gradle
    # This file is included at the beginning of `build.gradle`
    ext.cdvDebugSigningPropertiesFile = '../../android-debug-keys.properties'
    # When set, this function allows code to run at the end of `build.gradle`
    ext.postBuildExtras = {
        android.buildTypes.debug.applicationIdSuffix = '.debug'
    }
    

請注意，外掛程式也可以包括通過`build-extras.gradle`檔:

    <framework src="some.gradle" custom="true" type="gradleReference" />
    

### 示例生成

    export ORG_GRADLE_PROJECT_cdvMinSdkVersion=14
    cordova build android -- --gradleArg=-PcdvBuildMultipleApks=true