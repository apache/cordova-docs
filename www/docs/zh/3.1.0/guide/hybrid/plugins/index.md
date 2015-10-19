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

title: 外掛程式開發指南
---

# 外掛程式開發指南

科爾多瓦外掛程式橋樑有點之間供電科爾多瓦應用和科爾多瓦應用程式的本機平臺 web 視圖的功能在運行時。 外掛程式的使用跨所有平臺和以下特定于平臺的外掛程式介面，JavaScript 調用到本機實現一個單一的 JavaScript 介面組成。 所有的科爾多瓦 Api 的核心是使用這種體系結構實現的。

本指南的步驟，編寫一個簡單的 Echo 外掛程式的過程傳遞一個字串從 JavaScript，並將它發送到本機環境中有關支援的平臺。 本機代碼然後回裡面的外掛程式 JavaScript 回檔返回相同的字串。

本指南提供了足夠的概述，您可以生成來編寫更複雜的外掛程式。

## JavaScript

任何外掛程式的進入點是 JavaScript。 科爾多瓦是這樣他們就可以使用的原因開發人員使用和寫 JavaScript，不客觀-C，不是 JAVA，C#。 你的外掛程式的 JavaScript 介面是你的科爾多瓦外掛程式的正面和可以說是最重要的部分。

然而你喜歡，可以設計你的外掛程式 JavaScript 的結構。 您*必須*使用科爾多瓦 JavaScript 和本機環境之間進行通信的一件事是 `cordova.exec` 函數。 下面是一個示例：

        cordova.exec(function(winParam) {}, function(error) {}, "service",
                     "action", ["firstArgument", "secondArgument", 42,
                     false]);
    

參數詳述如下：

*   `function(winParam) {}`： 成功回呼函數。 假設您 `exec` 調用成功完成，調用此函數時 （可以選擇與您傳遞回給它的任何參數）。

*   `function(error) {}`: 錯誤函數回檔。如果該操作未成功完成，調用此函數時 （可以選擇與錯誤參數）。

*   `"service"`： 要調用的本機一邊的服務名稱。這被映射到本機類，有關的更多資料，可在下面列出的本機指南。

*   `"action"`： 要調入的操作名稱。 這由本機類接收拾 `exec` 調用，並且，取決於平臺，基本上將映射到類的方法。 下面列出的本機指南提供詳細資訊。

*   `[/* arguments */]`： 要傳遞到本機環境中的參數。

### Echo 外掛程式的 JavaScript 示例

        window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

讓我們深入到這。該外掛程式的重視本身到 `window` ，具體到 `echo` 函數。外掛程式使用者將然後使用，如下所示：

        window.echo("echome", function(echoValue) {
            alert(echoValue == "echome"); // should alert true.
        });
    

首先，讓我們看看的最後三個參數的 `exec` 函數。 我們將調用 `Echo` "服務、"請求 `echo` "行動"，和傳遞的參數包含 echo 字串的陣列，這是進入的第一個參數 `window.echo` 函數。

成功回檔傳遞到 `exec` 是只是提到該回呼函數的 `window.echo` 需要。 我們多做一點為錯誤回檔： 如果本機端觸發錯誤回檔，我們只需調用成功回呼函數，並傳遞到它"的預設"的字串。

## 外掛程式規範

科爾多瓦有可用於啟用該外掛程式為 Android、 iOS、 黑莓 10 和 Windows Phone 平臺的自動的安裝一個外掛程式規範。 通過以特定方式構建你的外掛程式，添加 `plugin.xml` 清單檔，您可以使使用者能夠安裝你的外掛程式通過命令列工具。

*   [外掛程式規範](../../../plugin_ref/spec.html)

## 本機

一旦你為你的外掛程式定義 JavaScript，你需要至少一個本機實現，補充。 下面列出了這樣做為每個平臺的詳細資訊。 這些指南繼續在上文討論過的簡單回聲外掛程式示例上。

*   [Android 外掛程式](../../platforms/android/plugin.html)
*   [黑莓手機的外掛程式](../../platforms/blackberry/plugin.html)
*   [黑莓 10 外掛程式](../../platforms/blackberry10/plugin.html)
*   [iOS 外掛程式](../../platforms/ios/plugin.html)
*   [Windows Phone 外掛程式](../../platforms/wp8/plugin.html)

當前，Tizen 平臺不支援外掛程式。

## 發佈外掛程式

一旦你制定你的外掛程式，你可能想要發佈它，並與社區共用它。 你可以將你的外掛程式發佈到科爾多瓦註冊表 （基於[npmjs][1]） 或任何其他 npmjs 的基於註冊表。 使用者將能夠將它使用 plugman 或科爾多瓦 cli 自動安裝。

 [1]: https://github.com/isaacs/npmjs.org

要發佈一個外掛程式你需要使用 plugman 工具，並通過以下步驟：

    $ plugman adduser # that is if you don't have an account yet
    $ plugman publish /path/to/your/plugin
    

就這麼簡單 ！

其他基於註冊表的命令都可用和 `plugman --help` 會給你什麼命令都可以使用和如何使用它們的清單。