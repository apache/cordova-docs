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

# 黑莓手機的外掛程式

此部分提供了如何在黑莓平臺上實現本機外掛程式代碼的詳細資訊。 之前讀這篇文章，請參閱應用程式外掛程式外掛程式的結構和其共同的 JavaScript 介面的概述。 這一節繼續表明通信從科爾多瓦 web 視圖的本機平臺和後面的示例*回聲*外掛程式。

此外，下載[科爾多瓦黑莓手機存儲庫][1]。 `Cordova-BlackBerry`專案允許您將部署到黑莓火炬、 加粗和操作手冊等。 Playbook 使用不同的代碼基比其他黑莓手持設備，您需要為其重複你的發展努力。 本指南著重于手持設備，而不是平板電腦。

 [1]: https://git-wip-us.apache.org/repos/asf?p=cordova-blackberry.git;a=summary

## 修改 plugins.xml

`Echo`外掛程式返回使用者不管消息發送帶有 `window.echo` 的 JavaScript 一邊函數：

        window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

該專案的 `www/plugins.xml` 檔中包含所有必要的引用到科爾多瓦專案外掛程式。 添加一個額外的引用，這樣，當 `cordova.exec` 是科爾多瓦叫，知道如何映射 `Echo` 參數本機上的 `Echo` 類：

        <feature name="Echo">
            <param name="blackberry-package" value="org.apache.cordova.echo.Echo" />
        </feature>
    

## Echo.java 檔

`feature`規範的 `value` 屬性引用一個反向域樣式識別碼。 這對應于一個路徑內科爾多瓦黑莓 WebWorks 回購 `framework/ext/src` 目錄。 添加 `framework/ext/src/org/apache/cordova/echo` 目錄並添加 `Echo.java` 檔。

`Echo.java`需要定義一個擴展類 `Plugin` 類。 它還需要實施 `execute` 方法返回的 `PluginResult` 類。 任何調用到 `cordova.exec` 內的行動要執行的類作為參數傳遞。 在這種情況下， `Echo` 類的 `echo` 方法是行動和 `[str]` 是一個額外的參數，傳遞給該方法。

        package org.apache.cordova.echo;
    
        import org.apache.cordova.api.Plugin;
        import org.apache.cordova.api.PluginResult;
        import org.apache.cordova.json4j.JSONArray;
        import org.apache.cordova.json4j.JSONException;
        import org.apache.cordova.json4j.JSONObject;
        /**
         * A simple plugin to demonstrate how to build a plugin for BlackBerry
         * Basically echos back the msg that a user calls to this plugin
         */
        public final class Echo extends Plugin {
    
            public static final String echo = "echo";
    
            public PluginResult execute(String action, JSONArray args, String callbackId) {
                PluginResult result = new PluginResult(PluginResult.Status.INVALID_ACTION, "Echo: Invalid action:" + action);
                if(action.equals(echo)){
                    try {
                        String theMsg = args.getString(0);
                        if(theMsg!= null || theMsg.length()>0){
                            result = new PluginResult(PluginResult.Status.OK, theMsg);
                        }else{
                            result = new PluginResult(PluginResult.Status.ERROR, "Nothing to echo.");
                        }
                    } catch (JSONException e) {
                        result = new PluginResult(PluginResult.Status.JSON_EXCEPTION, e.getMessage());
                    }
                }
                return result;
            }
        }
    

在上面的代碼 `execute` 方法首先帶來在行動中。在這種情況下，只有有有效 `echo` 的行動，所以它只是檢查為該值。

作為傳遞中的傳入消息 `[str]` 從 JavaScript 是提供給 `Echo` 類作為 `args` 的陣列。 在這種情況下，有只有一個參數，可使用從零開始的陣列索引訪問：

        String theMsg = args.getString(0);
    

之後各種錯誤檢查消息的價值，該方法具現化一個新的 `PluginResult` 與 `OK` 狀態和返回的消息。 此值，反過來，是回作為參數傳遞給 JavaScript 成功回檔。 如有錯誤，各種狀態碼被送回 JavaScript 錯誤回檔。

## 更新在該專案的 www 目錄.jar

添加的 `Echo.java` 需要更新您的專案中。 若要生成 `.jar` 檔，定位到黑莓 WebWorks 回購根目錄並運行 `ant` 命令：

        ant update -Dproject.path="~/path_to_my_project"
    

這將生成新的 `.jar` 檔在 `build/ext` 目錄。複製 `build/ext/cordova.jar` 檔到 `project/www/ext` 目錄。

如果一切順利，這允許您使用 `Echo` 外掛程式在黑莓手機中的。