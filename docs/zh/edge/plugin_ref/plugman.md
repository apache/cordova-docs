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

# 使用 Plugman 來管理外掛程式

從 3.0 版本開始，科爾多瓦實現所有設備 Api 作為外掛程式，然後留在預設情況下禁用。 此外，它還支援兩種不同的方法來添加和刪除外掛程式。 第一是通過使用 `cordova` 所述的命令列介面 CLI。 第二種是通過使用一個較低級別[Plugman][1]命令列介面 （"本機平臺 dev"工作流）。這些兩條發展路徑之間的主要區別是 Plugman 可以只添加外掛程式到一個平臺，一次而 CLI 會將外掛程式添加到的所有平臺，您的目標。 正因為如此，它更有意義，當你正在密切與單一的平臺，因此，工作流的"本機平臺 Dev"名稱時，使用 Plugman。

 [1]: https://github.com/apache/cordova-plugman/

詳細資訊關於 Plugman，尤其是如果你有興趣在消費作為節點模組 Plugman 或駭客對 Plugman 的代碼，請參閱[其庫中的讀我檔案][2].

 [2]: https://github.com/apache/cordova-plugman/blob/master/README.md

## 安裝 Plugman

要安裝 plugman，您必須在您的機器上安裝的[節點][3]。 然後您可以運行下面的命令從任意位置在您的環境以全域，安裝 plugman，這樣就可從您的電腦上的任何目錄中：

 [3]: http://nodejs.org/

    $ npm install -g plugman
    

您還必須有有 `git` 上你 `PATH` ，以便能夠直接從遠端 git Url 安裝的外掛程式。

**提示:**如果您發現與故宮安裝 plugman 後你仍然不能運行任何 `plugman` 的命令，請確保您已添加 `/npm/` 目錄到您`PATH`.

**注：**如果您不想通過安裝 Plugman 全球污染您的全球故宮命名空間，您可以跳過此步驟。 如果這種情況，然後當你與外殼工具創建科爾多瓦專案，將有 `node_modules` 目錄裡面您的專案包含 Plugman。 既然你不 instally 全球範圍內，您必須調用節點，每個 Plugman 命令，例如 `node ./node_modules/plugman/main.js -version` 。 本指南的其餘部分假定您已安裝 Plugman 就全球而言，意味著您可以調用它與只是`plugman`.

## 創建一個專案，科爾多瓦

您可以使用 Plugman 之前，您必須創建一個科爾多瓦專案。 你可以用命令列介面或更低的級別的 shell 腳本。 使用 shell 腳本來創建您的專案的說明都位於平臺指南頁上列出的各項"命令列工具"指南。

## 添加外掛程式

一旦你已經安裝了 Plugman，並已創建一個科爾多瓦專案，您可以開始將外掛程式添加到與平臺：

    $ plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin <name|url|path> [--plugins_dir <directory>] [--www <directory>] [--variable <name>=<value> [--variable <name>=<value> ...]]
    

使用最小的參數，此命令將外掛程式安裝到科爾多瓦的一個專案。 您必須指定一個為該平臺的平臺和科爾多瓦的專案位置。 此外必須指定與不同的外掛程式， `--plugin` 參數形式是：

*   `name`： 目錄名稱外掛程式內容存在的地方。 這必須是現有目錄下的 `--plugins_dir` 路徑 （見下面的詳細資訊） 或一個外掛程式在科爾多瓦註冊表中的。
*   `url`： URL 以 HTTPs:// 或 git 開始： / / 指向一個有效 git 存儲庫，是複本，包含 `plugin.xml` 檔。 這個資料庫的內容將複製到`--plugins_dir`.
*   `path`： 目錄包含一個有效的外掛程式，其中包括路徑 `plugin.xml` 檔。此路徑的內容將被覆制到`--plugins_dir`.

其他參數：

*   `--plugins_dir`預設值為 `<project>/cordova/plugins` ，但可以為每個包含子目錄中任何目錄獲取外掛程式。
*   `--www`預設值為專案的 `www` 資料夾的位置，但可以作為科爾多瓦專案應用程式 web 資產使用的任何目錄。
*   `--variable`允許指定某些變數在安裝時，有必要對某些外掛程式需要 API 金鑰或其他自訂的使用者定義的參數。 請[外掛程式規範][4]的詳細資訊，參閱。

 [4]: plugin_spec.md

## 刪除某個外掛程式

若要卸載外掛程式，你只需通過 `--uninstall` 標記，並提供外掛程式 id。

    $ plugman --uninstall --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin <id> [--www <directory>] [--plugins_dir <directory>]
    

## 説明命令

Plugman 特色全球説明命令，可以説明你如果你卡住或遇到的問題。它將顯示所有可用的 Plugman 命令和它們的語法的清單：

    plugman -help
    plugman  # same as above
    

**注**： `plugman -help` 可能會顯示一些額外的與註冊表相關的命令。 這些命令用於外掛程式開發人員，不可能進行協力廠商外掛程式登記處。

您還可以將追加 `--debug|-d` 旗子到任何 Plugman 命令以運行該命令以詳細模式，將顯示任何內部調試消息，因為他們排放和可説明您跟蹤下像缺少檔的問題。

    # Adding Android battery-status plugin to "myProject":
    plugman -d --platform android --project myProject --plugin org.apache.cordova.battery-status
    

最後，您可以使用 `--version|-v` 標誌來查看您使用哪個版本的 Plugman。

    plugman -v
    

## 註冊表操作

那裡有很多的 plugman 命令，可以用於與[外掛程式註冊表][5]進行交互。 請注意這些註冊表命令是特定于*plugins.cordova.io*外掛程式註冊表，不可能由協力廠商外掛程式登記處執行。

 [5]: http://plugins.cordova.io

### 尋找一個外掛程式

您可以使用 Plugman 來搜索[外掛程式註冊表][5]外掛程式 id 的匹配給定以空格分隔的關鍵字清單。

    plugman search <plugin keywords>
    

### 更改外掛程式註冊表

您可以獲取或設置當前外掛程式註冊表的 URL，使用的 plugman。通常你應該離開這在 HTTP://registry.cordova.io 設置，除非您想要使用協力廠商外掛程式註冊表。

    plugman config set registry <url-to-registry>
    plugman config get registry
    

### 獲取外掛程式的資訊

您可以獲得有關任何特定外掛程式在外掛程式庫中存儲的資訊：

    plugman info <id>
    

這將聯繫的外掛程式註冊表和提取資訊，如外掛程式的版本編號。

## 安裝核心外掛程式

下面的示例顯示如何添加外掛程式，如需要，這樣您在您的專案中使用任何科爾多瓦 Api 仍然工作後你升級到 3.0 版本。對於每個命令，你需要選擇目標平臺，並引用該平臺的專案目錄。

*   cordova-plugin-battery-status
    
    plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.battery-status

*   cordova-plugin-camera plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.camera

*   cordova-plugin-console plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.console

*   cordova-plugin-contacts plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.contacts

*   cordova-plugin-device plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.device

*   cordova-plugin-device-motion (accelerometer) plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.device-motion

*   cordova-plugin-device-orientation (compass) plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.device-orientation

*   cordova-plugin-dialogs plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.dialogs

*   cordova-plugin-file plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.file

*   cordova-plugin-file-transfer plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.file-transfer

*   cordova-plugin-geolocation plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.geolocation

*   cordova-plugin-globalization plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.globalization

*   cordova-plugin-inappbrowser plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.inappbrowser

*   cordova-plugin-media plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.media

*   cordova-plugin-media-capture plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.media-capture

*   cordova-plugin-network-information plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.network-information

*   cordova-plugin-splashscreen plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.splashscreen

*   cordova-plugin-vibration plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.vibration