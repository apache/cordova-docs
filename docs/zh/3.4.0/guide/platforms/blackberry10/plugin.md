---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied. See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# 黑莓 10 外掛程式

此部分提供了如何在黑莓 10 平臺上實現本機外掛程式代碼的詳細資訊。 之前讀這篇文章，請參閱應用程式外掛程式外掛程式的結構和其共同的 JavaScript 介面的概述。 這一節繼續表明通信從科爾多瓦 web 視圖的本機平臺和後面的示例*回聲*外掛程式。

Echo 外掛程式基本上返回任何字串 `window.echo` 從 JavaScript 函數發送：

        window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

黑莓 10 科爾多瓦外掛程式包含 JavaScript 和本機代碼，其中提供的 JNEXT 框架通過互相溝通。 每個外掛程式還必須包含 `plugin.xml` 檔。

## 創建本機類

若要創建的本機部分你的外掛程式，打開黑莓 10 NDK IDE 並選擇**檔 → 新 → 黑莓手機專案 → 本機擴展 → 黑莓 10**。 輸入所需的專案名稱和位置，然後按**完成**.

由 IDE 創建的專案包含一個記憶體外掛程式的示例代碼。您可以替換或修改這些檔以執行您自己的功能：

*   `*name*_js.hpp`： JNEXT 代碼 c + + 頭。

*   `*name*_js.cpp`： JNEXT 的 c + + 代碼。

JNEXT 擴展的本機介面可以查看外掛程式標頭檔位於專案的公共目錄中。 它還具有常數和本機代碼內的可用實用程式功能。 該外掛程式必須派生自 `JSExt` ，這在中定義 `plugin.h` 。 這就是，你必須實現下面的類：

        class JSExt
        {
        public:
            virtual ~JSExt() {};
            virtual string InvokeMethod( const string& strCommand ) = 0;
            virtual bool CanDelete( void ) = 0;
        private:
            std::string m_id;
        };
    

延長應包括 `plugin.h` 的標頭檔。在 `Echo` 的示例中，您使用 `JSExt` ，如下所示在 `echo_js.hpp` 檔：

        #include "../public/plugin.h"
        #include <string>
    
        #ifndef ECHO_JS_H_
        #define ECHO_JS_H_
    
        class Echo : public JSExt
        {
        public:
            explicit Echo(const std::string& id);
            virtual ~Echo();
            virtual std::string InvokeMethod(const std::string& command);
            virtual bool CanDelete();
        private:
            std::string m_id;
        };
    
        #endif // ECHO_JS_H_
    

`m_id`屬性包含 `JNEXT` 作為建構函式的參數傳遞給該類的物件 id。 它需要觸發事件的 JavaScript 一邊本機的一面。 `CanDelete`方法確定是否可以刪除的本機物件。 `InvokeMethod`從 JavaScript 調用此特定物件的方法的請求結果調用的函數。 此函數的唯一參數是此方法分析來確定哪種本機物件方法應執行的 JavaScript 從傳遞的字串。 在實現這些方法 `echo_js.cpp` 。 這裡是 `InvokeMethod` 函數為 `Echo` 的示例：

        string Echo::InvokeMethod(const string& command) {
    
            //parse command and args from string
            int index = command.find_first_of(" ");
            string strCommand = command.substr(0, index);
            string strValue = command.substr(index + 1, command.length());
    
            // Determine which function should be executed
            if (strCommand == "echo") {
                return strValue;
            } else {
                return "Unsupported Method";
            }
        }
    

本機外掛程式還必須實現以下回呼函數：

*   `extern char * onGetObjList （無效） ；`

*   `extern JSExt * onCreateObject (const 字串 & strClassName、 const 字串 & strObjId) ；`

`onGetObjList`函數返回的類支援的 JNEXT 的逗號分隔清單。 JNEXT 使用此函數來確定的 JNEXT 可以具現化的類的集合。 `Echo`外掛程式實現以下在 `echo_js.cpp` ：

        char* onGetObjList() {
            static char name[] = "Echo";
            return name;
        }
    

`onCreateObject`函數採用兩個參數。 第一是要從 JavaScript 一側，與那些返回的有效名稱創建的請求的類的名稱 `onGetObjList` 。 第二個參數是類的唯一的物件 id。 此方法返回創建的外掛程式物件的指標。 `Echo`外掛程式實現以下在 `echo_js.cpp` ：

        JSExt* onCreateObject(const string& className, const string& id) {
            if (className == "Echo") {
                return new Echo(id);
            }
            return NULL;
        }
    

## 創建外掛程式的 JavaScript

該外掛程式必須包含以下的 JavaScript 檔：

*   `client.js`: 這被認為是在用戶端，並包含可用到科爾多瓦的應用程式的 API。 中的 API `client.js` 調用程式調用 `index.js` 。 中的 API `client.js` 也連接到火，回檔的事件的回呼函數。

*   `index.js`： 科爾多瓦載入 `index.js` 並使其可通過 cordova.exec 橋。 `client.js`檔程式中的 API 呼叫 `index.js` 檔中，從而使打電話到 JNEXT 與本機端進行通信。

用戶端和伺服器端 ( `client.js` 和 `index.js` ) 進行交互，通過 `Cordova.exec` 函數。 `client.js`需要調用 `exec` 函數並提供必要的參數。 `Echo`外掛程式實現以下在 `client.js` 檔：

        var service = "org.apache.cordova.blackberry.echo",
            exec = cordova.require("cordova/exec");
    
        module.exports = {
            echo: function (data, success, fail) {
                exec(success, fail, service, "echo", { data: data });
            }
        };
    

`index.js`元件使用 JNEXT 與本機端進行交互。 附加建構函式命名為 `Echo` 到 JNEXT 使您可以執行下列關鍵操作使用 `init` 函數：

*   指定匯出的本機方面所需的模組。所需的模組的名稱必須匹配的共用的庫檔的名稱 （ `.so` 檔）：
    
        JNEXT.require("libecho")
        

*   通過使用獲得的模組創建一個物件並保存調用所返回的 ID：
    
        self.m_id = JNEXT.createObject("libecho.Echo");
        
    
    當應用程式調用 `echo` 函數在 `client.js` ，那反過來調用調用 `echo` 函數在 `index.js` 、 在何處 `PluginResult` 物件發送資料作為回應返回到 `client.js` 。 因為 `args` 傳遞到函數的參數被轉換的 `JSON.stringfy()` 和編碼為 `URIcomponent` ，您必須調用以下：
    
        data = JSON.parse(decodeURIComponent(args.data));
        

您現在可以發送回來的資料如下所示：

        module.exports = {
            echo: function (success, fail, args, env) {
                var result = new PluginResult(args, env),
                data = JSON.parse(decodeURIComponent(args.data)),
                response = echo.getInstance().echo(data);
                result.ok(response, false);
            }
        };
    

## 外掛程式體系結構

您可以將該外掛程式構件，包括 `plugin.xml` 檔、 JavaScript 和 c + + 原始程式碼檔，和 `.so` 二進位檔案在任何的目錄結構內，只要你正確地指定了檔位置在 `plugin.xml` 檔。 這裡是典型的結構：

***project_directory***(> 通過)

*   **www** (>client.js)
*   **src** 
    *   **blackberry10**(> index.js 的**本機**> *.cpp、 *.hpp)
    *   **設備**(>*二進位檔案**.so)
    *   **模擬器**(>*二進位檔案**.so)

此清單顯示在頂級資料夾之間的層次關係。 在括弧顯示給定目錄的內容。 所有目錄名稱都顯示為粗體文本。 檔的名稱前面有 `>` 標誌。

## *通過*檔

`plugin.xml`檔包含擴展的命名空間和其他中繼資料。設置了 `Echo` 外掛程式，如下所示：

        <plugin xmlns="http://www.phonegap.com/ns/plugins/1.0"
            id="org.apache.cordova.blackberry.echo"
            version="1.0.0">
            <js-module src="www/client.js">
                <merges target="navigator" />
            </js-module>
            <platform name="blackberry10">
                <source-file src="src/blackberry10/index.js" />
                <lib-file src="src/blackberry10/native/device/libecho.so" arch="device" />
                <lib-file src="src/blackberry10/native/simulator/libecho.so" arch="simulator" />
                <config-file target="www/config.xml" parent="/widget">
                    <feature name="org.apache.cordova.blackberry.echo" value="org.apache.cordova.blackberry.echo" />
                </config-file>
            </platform>
        </plugin>