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

從 3.0 版本開始，科爾多瓦實現所有設備 Api 作為外掛程式，然後留在預設情況下禁用。 此外，它還支援兩種不同的方法來添加和刪除外掛程式。 第一是通過使用 `cordova` 所述的命令列介面 CLI。 第二是通過使用一個較低級別[plugman][1]命令列介面。 本指南著重于第二種方法，這可能是誰想要升級其版本的科爾多瓦，但誰都沒尚未通過工作流中，科爾多瓦 CLI 的開發人員非常有用。

 [1]: https://github.com/apache/cordova-plugman/

在 plugman 上的詳細資訊，請參閱[其庫中的讀我檔案][2].

 [2]: https://github.com/apache/cordova-plugman/blob/master/README.md

## 基本命令

要安裝 plugman，您必須在您的機器上安裝的[節點][3]：

 [3]: http://nodejs.org/

    npm install -g plugman
    

在這裡是要添加的每個平臺外掛程式的語法：

    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin <name|url|path> [--plugins_dir <directory>] [--www <directory>] [--variable <name>=<value> [--variable <name>=<value> ...]]
    

要卸載的外掛程式：

    plugman --uninstall --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin <id> [--www <directory>] [--plugins_dir <directory>]
    

## 安裝核心外掛程式

下面的示例顯示如何添加外掛程式，如需要，這樣您在您的專案中使用任何科爾多瓦 Api 仍然工作後你升級到 3.0 版本。對於每個命令，你需要選擇目標平臺，並引用該平臺的專案目錄。

*   科爾多瓦-外掛程式-電池-狀態 plugman — — 平臺 < ios|android|blackberry10|wp7|wp8 > — — 專案 <directory> — — 外掛程式 HTTPs://git-wip-us.apache.org/repos/asf/cordova-plugin-battery-status.git

*   科爾多瓦-外掛程式-相機 plugman-< ios|android|blackberry10|wp7|wp8 > — — 平臺專案 <directory> — — 外掛程式 HTTPs://git-wip-us.apache.org/repos/asf/cordova-plugin-camera.git

*   科爾多瓦-外掛程式-主控台 plugman — — 平臺 < ios|android|blackberry10|wp7|wp8 > — — 專案 <directory> — — 外掛程式 HTTPs://git-wip-us.apache.org/repos/asf/cordova-plugin-console.git

*   科爾多瓦-外掛程式-連絡人 plugman — — 平臺 < ios|android|blackberry10|wp7|wp8 > — — 專案 <directory> — — 外掛程式 HTTPs://git-wip-us.apache.org/repos/asf/cordova-plugin-contacts.git

*   科爾多瓦-外掛程式-設備 plugman — — 平臺 < ios|android|blackberry10|wp7|wp8 > — — 專案 <directory> — — 外掛程式 HTTPs://git-wip-us.apache.org/repos/asf/cordova-plugin-device.git

*   科爾多瓦-外掛程式-設備-運動 （加速度計） plugman — — 平臺 < ios|android|blackberry10|wp7|wp8 > — — 專案 <directory> — — 外掛程式 HTTPs://git-wip-us.apache.org/repos/asf/cordova-plugin-device-motion.git

*   科爾多瓦-外掛程式-設備-方向 (指南針) plugman — — 平臺 < ios|android|blackberry10|wp7|wp8 > — — 專案 <directory> — — 外掛程式 HTTPs://git-wip-us.apache.org/repos/asf/cordova-plugin-device-orientation.git

*   科爾多瓦-外掛程式-對話方塊 plugman — — 平臺 < ios|android|blackberry10|wp7|wp8 > — — 專案 <directory> — — 外掛程式 HTTPs://git-wip-us.apache.org/repos/asf/cordova-plugin-dialogs.git

*   科爾多瓦-外掛程式-檔 plugman — — 平臺 < ios|android|blackberry10|wp7|wp8 > — — 專案 <directory> — — 外掛程式 HTTPs://git-wip-us.apache.org/repos/asf/cordova-plugin-file.git

*   科爾多瓦的外掛程式檔案傳輸 plugman — — 平臺 < ios|android|blackberry10|wp7|wp8 > — — 專案 <directory> — — 外掛程式 HTTPs://git-wip-us.apache.org/repos/asf/cordova-plugin-file-transfer.git

*   科爾多瓦-外掛程式-地理定位 plugman-< ios|android|blackberry10|wp7|wp8 > — — 平臺專案 <directory> — — 外掛程式 HTTPs://git-wip-us.apache.org/repos/asf/cordova-plugin-geolocation.git

*   科爾多瓦-外掛程式-全球化 plugman — — 平臺 < ios|android|blackberry10|wp7|wp8 > — — 專案 <directory> — — 外掛程式 HTTPs://git-wip-us.apache.org/repos/asf/cordova-plugin-globalization.git

*   科爾多瓦-外掛程式-inappbrowser plugman-< ios|android|blackberry10|wp7|wp8 > — — 平臺專案 <directory> — — 外掛程式 HTTPs://git-wip-us.apache.org/repos/asf/cordova-plugin-inappbrowser.git

*   科爾多瓦-外掛程式-媒體 plugman — — 平臺 < ios|android|blackberry10|wp7|wp8 > — — 專案 <directory> — — 外掛程式 HTTPs://git-wip-us.apache.org/repos/asf/cordova-plugin-media.git

*   科爾多瓦-外掛程式-媒體-捕獲 plugman — — 平臺 < ios|android|blackberry10|wp7|wp8 > — — 專案 <directory> — — 外掛程式 HTTPs://git-wip-us.apache.org/repos/asf/cordova-plugin-media-capture.git

*   科爾多瓦-外掛程式-網路-資訊 plugman — — 平臺 < ios|android|blackberry10|wp7|wp8 > — — 專案 <directory> — — 外掛程式 HTTPs://git-wip-us.apache.org/repos/asf/cordova-plugin-network-information.git

*   科爾多瓦-外掛程式-閃屏 plugman — — 平臺 < ios|android|blackberry10|wp7|wp8 > — — 專案 <directory> — — 外掛程式 HTTPs://git-wip-us.apache.org/repos/asf/cordova-plugin-splashscreen.git

*   科爾多瓦-外掛程式-振動 plugman — — 平臺 < ios|android|blackberry10|wp7|wp8 > — — 專案 <directory> — — 外掛程式 HTTPs://git-wip-us.apache.org/repos/asf/cordova-plugin-vibration.git