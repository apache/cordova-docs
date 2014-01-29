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

# 外掛程式開發指南

*外掛程式*是代碼的一個套裝軟體，注入，允許您的應用程式內的呈現與在其上運行的本機平臺進行通信的科爾多瓦 web 視圖。 外掛程式提供對基於 web 的應用程式通常不可用的設備和平臺功能的訪問。 科爾多瓦 API 的所有主要功能作為外掛程式，實現和許多其他的可用條碼掃描器、 NFC 通信等功能的啟用或定制日曆的介面。

外掛程式包括一個單一的 JavaScript 介面和相應的本機代碼庫，每個受支援的平臺。 通過將一個字串從 JavaScript 傳遞到本機平臺再回來，一個可以作為模型使用以生成更複雜的功能，簡單的*echo*外掛程式這節步驟。 本節討論的基本外掛程式結構和麵向外部 JavaScript 介面。 對於每個相應的本機介面，請參閱此部分的結尾處的清單。

除了這些指令，當準備寫一個外掛程式最好是看看[現有的外掛程式][1]為指導。

 [1]: https://github.com/apache/cordova-android/tree/master/framework/src/org/apache/cordova

## 建設一個外掛程式

應用程式開發人員使用 CLI 的 `plugin add` 命令 （討論中命令列介面），對專案應用外掛程式。 該命令的參數是*git*資源庫中包含的外掛程式代碼的 URL。 此示例實現科爾多瓦的設備 API：

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-device.git
    

外掛程式存儲庫必須具備頂級 `plugin.xml` 清單檔。 有許多方式來配置此檔中，其中的詳細資訊是可用的外掛程式規範中。 此縮寫的版本的 `Device` 外掛程式提供了一個簡單的例子，使用作為一種模型：

        <?xml version="1.0" encoding="UTF-8"?>
        <plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
                id="org.apache.cordova.device" version="0.2.3">
            <name>Device</name>
            <description>Cordova Device Plugin</description>
            <license>Apache 2.0</license>
            <keywords>cordova,device</keywords>
            <js-module src="www/device.js" name="device">
                <clobbers target="device" />
            </js-module>
            <platform name="ios">
                <config-file target="config.xml" parent="/*">
                    <feature name="Device">
                        <param name="ios-package" value="CDVDevice"/>
                    </feature>
                </config-file>
                <header-file src="src/ios/CDVDevice.h" />
                <source-file src="src/ios/CDVDevice.m" />
            </platform>
        </plugin>
    

頂級 `plugin` 標記的 `id` 屬性使用相同的反向域格式所要添加到他們的應用程式識別的外掛程式包。 `js-module`標記指定共同的 JavaScript 介面的路徑。 `platform`標記為指定一組對應的本機代碼， `ios` 在這種情況下的平臺。 `config-file`標記封裝 `feature` 注入特定平臺的標記 `config.xml` 檔，以使該平臺意識到額外的代碼庫。 `header-file`和 `source-file` 標籤指定庫的元件檔的路徑。

## 驗證外掛程式

您可以使用 `plugman` 實用程式來檢查是否為每個平臺外掛程式安裝正確。 安裝 `plugman` 用下面的[節點][2]命令：

 [2]: http://nodejs.org/

        $ npm install -g plugman
    

你需要有效的 app 原始目錄中，如頂級 `www` 目錄包含在預設生成的 CLI 專案中所述的命令列介面。 請確保應用程式的 `index.html` 的主頁引用名稱的外掛程式的 JavaScript 介面，好像它是相同的原始目錄中：

        <script src="myplugin.js"></script>
    

然後運行下面的命令： 若要測試是否能正常載入的 iOS 的依賴關係：

        $ plugman -platform ios /path/to/my/project/www /path/to/my/plugin
    

有關的詳細資訊 `plugman` 選項，請參閱使用 Plugman 到管理外掛程式。 有關如何實際*調試*外掛程式的資訊，請參閱此頁面的底部列出的每個平臺的本機介面。

## JavaScript 介面

JavaScript 提供了前置介面，使該外掛程式的或許最重要的部分。 然而你喜歡，但是你需要調用可以構造你的外掛程式 JavaScript `cordova.exec` 溝通與本機平臺，使用下面的語法：

        cordova.exec(function(winParam) {},
                     function(error) {},
                     "service",
                     "action",
                     ["firstArgument", "secondArgument", 42, false]);
    

這裡是每個參數的工作原理：

*   `function(winParam) {}`： 成功回呼函數。假設您 `exec` 調用成功完成，以及任何您傳遞給它的參數執行此函數。

*   `function(error) {}`： 錯誤回呼函數。如果該操作未成功完成，此函數執行帶有可選錯誤參數。

*   `"service"`： 要調用的本機一邊的服務名稱。這對應于本機類，為其更多的資料，可在下面列出的本機指南。

*   `"action"`： 要調用的本機一邊的操作名稱。這通常對應于本機類的方法。請參閱下面列出的本機指南。

*   `[/* arguments */]`： 要傳遞到本機環境中的參數陣列。

## 示例 JavaScript

此示例演示一種方法來實現外掛程式的 JavaScript 介面：

        window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

在此示例中，該外掛程式的重視本身對 `window` 物件作為 `echo` 函數，外掛程式的使用者將會調用，如下所示：

        window.echo("echome", function(echoValue) {
            alert(echoValue == "echome"); // should alert true.
        });
    

看看的最後三個參數的 `cordova.exec` 函數。 第一次調用 `Echo` *的服務*，一個類名稱。 第二個請求 `echo` *行動*、 那類中的方法。 第三個是一個參數包含 echo 字串，該字串陣列 `window.echo` 函數的第一個參數。

成功回檔傳遞到 `exec` 是簡單地對回呼函數的引用 `window.echo` 花。 如果本機平臺觸發錯誤回檔，它只是調用成功回檔並傳遞它的預設字串。

## 本地介面

一旦你為你的外掛程式定義 JavaScript，你需要至少一個本機實現，補充。 下面，列出了每個平臺的詳細資訊和每個生成回聲外掛程式上面的簡單示例：

*   亞馬遜火 OS 外掛程式
*   Android 外掛程式
*   iOS 外掛程式
*   黑莓 10 外掛程式
*   Windows Phone 外掛程式

Tizen 平臺不支援外掛程式。

## 發佈外掛程式

一旦你開發你的外掛程式，您可能希望將發佈與共享它，社會。 你可以將你的外掛程式發佈到科爾多瓦註冊表 （基於[ `npmjs` ][3]） 或任何其它 `npmjs` -基於註冊表。 其他開發人員可以將它要麼使用自動安裝 `plugman` 或科爾多瓦 CLI。 （每個發展路徑的詳細資訊，見到管理外掛程式和命令列介面使用 Plugman）。

 [3]: https://github.com/isaacs/npmjs.org

要發佈外掛程式你需要使用 `plugman` 工具，通過以下步驟：

    $ plugman adduser # that is if you don't have an account yet
    $ plugman publish /path/to/your/plugin
    

就這麼簡單 ！

運行 `plugman --help` 列出其他可用的基於註冊表的命令。