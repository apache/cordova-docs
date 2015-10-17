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

title: 黑莓 10 外掛程式
---

# 黑莓 10 外掛程式

這是延續科爾多瓦的外掛程式開發指南。 一旦您已經檢查過這些內容，現在讓我們看看我們需要有黑莓 10 平臺的回聲外掛程式的事情。 召回的回聲外掛程式基本上返回任何字串使用者提供的 `window.echo` 函數：

    window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

科爾多瓦本機的黑莓 10 外掛程式包含 JavaScript 代碼，還可能包含本機代碼。 Echo 外掛程式示例演示如何調用本機功能從 JavaScript。 本機和 JavaScript 代碼相互通信通過一個由 JNEXT 提供的框架。 每個外掛程式還必須包含 `plugin.xml` 檔。

## 創建你的外掛程式的本機部分

若要創建的本機部分你的外掛程式，打開黑莓 10 NDK IDE 並選擇檔 > 新 > 黑莓專案 > 本機擴展 > 黑莓手機 WebWorks。 請輸入您的所需的專案名稱 / 位置，然後按一下完成。

由 IDE 創建的專案包含一個記憶體外掛程式的示例代碼。您可以替換或修改這些檔以包括您自己的功能。

*   `*name*_js.hpp`： JNEXT 代碼 c + + 頭。

*   `*name*_js.cpp`： JNEXT 的 c + + 代碼。

JNEXT 擴展的本機介面可以查看外掛程式標頭檔位於公共的目錄中，您的專案中。 它還包含常量和可以在本機代碼中使用的實用程式函數。 你的外掛程式必須從 JSExt 在 plugin.h 中定義的派生。這就是，你必須實現下面的類：

    類 JSExt {公共： 虛擬 ~JSExt() {} ；虛擬字串 InvokeMethod (const 字串 & strCommand) = 0 ；虛擬 bool CanDelete （無效） = 0 ；私人： std::string m_id ；};
    

因此，您的擴展應包含 plugin.h 標頭檔。在回波的示例中，您使用 JSExt，如下所示在 echo_js.hpp 檔中：

    #include"....../ public/plugin.h"< 字串 > #ifndef ECHO_JS_H_ #define ECHO_JS_H_ #include 類回聲： 公共 JSExt {公共： 顯式回聲 (const std::string & id) ；虛擬 ~ echo () ；虛擬 std::string InvokeMethod (const std::string & 命令) ；虛擬 bool CanDelete() ；私人： std::string m_id ；};#endif / / ECHO_JS_H_
    

`m_id`是一個包含此物件的 JNEXT id 的屬性。 Id 作為建構函式的參數傳遞到類。 它被需要觸發 JavaScript 邊從本機上的事件。 JNEXT 規定的 CanDelete 方法用於確定是否可以刪除您的本機物件的方法。 從 JavaScript 調用此特定物件的方法的請求結果調用 InvokeMethod 函數。 此函數的唯一參數是從這種方法應分析以確定應該執行哪種方法的本機物件的 JavaScript 傳遞的字串。 現在我們在 echo_js.cpp 中實現這些功能。對於回聲的示例，我們執行了 InvokeMethod 函數，如下所示：

    字串 Echo::InvokeMethod (const 字串和命令） {//parse 命令，並從字串 int 索引 args = command.find_first_of("") ；字串 strCommand = command.substr （0，索引） ；字串 strValue = command.substr (指數 + 1，command.length()) ；/ / 確定應該執行哪些函數如果 (strCommand = ="回聲") {返回 strValue;} 其他 {返回"不支援方法"；}
    }
    

你本機的外掛程式還必須實現以下回呼函數：

*   `extern char * onGetObjList （無效） ；`

*   `extern JSExt * onCreateObject (const 字串 & strClassName、 const 字串 & strObjId) ；`

`onGetObjList`函數返回支援的 JNEXT 類的逗號分隔清單。 JNEXT 使用此函數來確定的 JNEXT 可以具現化的類的集合。 在我們回波的外掛程式，我們有以下 `echo_js.cpp` ：

    char * onGetObjList() {靜態 char 名稱 [] ="回聲"；返回的名稱 ；}
    

`onCreateObject`函數採用兩個參數。 第一個參數是類的請求將從 JavaScript 側創建的名稱。 有效的名稱就是那些在中返回 `onGetObjList` 。 第二個參數是類的唯一的物件 id。 此方法返回創建的外掛程式物件的指標。 在我們回波的外掛程式，我們有以下 `echo_js.cpp` ：

    JSExt * onCreateObject (const 字串與類名、 常量字串 & id) {如果 (className = ="回聲") {返回新 Echo(id) ；} 返回 Null ；}
    

## 創建你的外掛程式的 JavaScript 部分

你的外掛程式的 JavaScript 部分必須包含以下檔：

*   `client.js`: 這被認為是在用戶端，並包含科爾多瓦應用程式可以調用的 API。 中的 API `client.js` 調用程式調用 `index.js` 。 中的 API `client.js` 也連接到火，回檔的事件的回呼函數。

*   `index.js`： 科爾多瓦載入 `index.js` 並使其可通過 cordova.exec 橋。 `client.js`檔程式中的 API 呼叫 `index.js` 檔中，從而使打電話到 JNEXT 與本機端進行通信。

用戶端和伺服器端 ( `client.js` 和 `index.js` ) 進行交互，通過 `Cordova.exec` 函數。 所以，在 `client.js` 調用 `exec` 函數並提供必要的參數。 在回聲外掛程式，我們有以下 `client.js` 檔：

    var service = "org.apache.cordova.blackberry.echo",
        exec = cordova.require("cordova/exec");
    
    module.exports = {
        echo: function (data, success, fail) {
            exec(success, fail, service, "echo", { data: data });
        }
    };
    

現在， `index.js` 與本機的一面，用 JNEXT 進行交互。 所以您附加命名回顯到 JNEXT 的建構函式。 在建構函式內您執行下列關鍵操作使用 init 函數：

*   指定匯出的本機方面所需的模組。所需的模組的名稱必須匹配的共用的庫檔 （.so 檔） 的名稱。

`JNEXT.require("libecho")`

*   通過使用獲得的模組創建一個物件並保存調用所返回的 ID。 self.m_id = JNEXT.createObject ("libecho。Echo"） ；當您的應用程式調用中的回波函數 `client.js` ，調用反過來調用的回波函數中 `index.js` 、 凡 PluginResult 物件將 （資料） 的回應發送回 `client.js` 。 由於傳遞到函數的 args 參數是由 JSON.stringfy() 轉換和編碼為 URIcomponent，您必須調用以下內容：

`資料 = JSON.parse(decodeURIComponent(args.data)) ；`

現在，您可以發送回來的資料。讓我們把它都放在一起：

    module.exports = {
    
        echo: function (success, fail, args, env) {
    
            var result = new PluginResult(args, env),
            data = JSON.parse(decodeURIComponent(args.data)),
            response = echo.getInstance().echo(data);
            result.ok(response, false);
        }
    };
    

## 該外掛程式的體系結構

您可以放置的工件的外掛程式，其中包括 `plugin.xml` 檔、 原始檔案 （JavaScript、 c + +） 和二進位檔案 ( `.so` ) 在任何目錄結構內，只要你正確地指定了檔位置在 `plugin.xml` 檔。 典型的結構看起來像這樣：

***your\_project\_directory***(> 通過)

*   **www**(> client.js)
*   **src** 
    *   **blackberry10**(> index.js 的**本機**> *.cpp、 *.hpp)
    *   **設備**(>*二進位檔案**.so)
    *   **模擬器**(>*二進位檔案**.so)

（此清單顯示的頂層目錄之間的層次關係。 在括弧顯示給定目錄的內容。 所有目錄名稱都顯示為粗體文本。 檔的名稱前面有 `>` [標誌](../../../cordova/file/flags/flags.html).)

## 內容的 `plugin.xml` 檔

`plugin.xml`檔中包含的命名空間的擴展和其他中繼資料。定義的命名空間和指定的 Echo 外掛程式的其他中繼資料，如下所示：

    < 外掛程式 xmlns ="HTTP://www.phonegap.com/ns/plugins/1.0"id="org.apache.cordova.blackberry.echo"版本 ="1.0.0">< js 模組 src ="www/client.js">< 合併目標 ="導航"/ >< / js 模組 >< 平臺名稱 ="blackberry10">< 原始檔案 src="src/blackberry10/index.js"/ >< lib 檔 src="src/blackberry10/native/device/libecho.so"拱 ="設備"/ >< lib 檔 src="src/blackberry10/native/simulator/libecho.so"拱 ="模擬器"/ >< 設定檔目標 ="www/config.xml"父 ="/ widget">< 功能 name="org.apache.cordova.blackberry.echo"value="org.apache.cordova.blackberry.echo"/ >< / 設定檔 >< /平臺 >< / 外掛程式 >