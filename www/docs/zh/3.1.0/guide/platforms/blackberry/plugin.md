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

本指南介紹了如何開發回聲外掛程式在黑莓手機上。 外掛程式開發指南提供廣泛概述，你應該已經是熟悉的和本指南撿起它的留下。 此外，下載[科爾多瓦黑莓手機存儲庫][1].

 [1]: https://git-wip-us.apache.org/repos/asf?p=cordova-blackberry-webworks.git;a=summary

`Cordova-BlackBerry`專案允許您將部署到黑莓火炬、 加粗和操作手冊等。 Playbook 使用不同的代碼基比其他黑莓手持設備，您需要為其重複你的發展努力。 本指南著重于手持設備，而不是平板電腦。 （在將來，本指南應包括這兩個平臺）。

Echo 外掛程式基本上是返回使用者不管消息提供給 `window.echo` 函數：

    window.echo = function(str, callback) {
        cordova.exec(callback, function(err) {
            callback('Nothing to echo.');
        }, "Echo", "echo", [str]);
    };
    

## 修改 plugins.xml

您的專案的 `www/plugins.xml` 目錄中包含的所有必要引用到科爾多瓦專案的外掛程式。 添加一個額外的引用，這樣，當 `cordova.exec` 是科爾多瓦叫，知道如何映射 `Echo` 參數的 `cordova.exec` 到 `Echo` 我們想要寫本機的類：

    <feature name="Echo">
        <param name="blackberry-package" value="org.apache.cordova.echo.Echo" />
    </feature>
    

## 添加 Echo.java

如果您注意到結構的值屬性，您將看到已定義的路徑，導致回聲外掛程式。 在科爾多瓦黑莓 WebWorks 回購的根目錄中，查找名為的目錄 `framework` 。 此目錄包含所有的原始程式碼在黑莓手機上本機運行。 導航到 `framework/ext/src/org/apache/cordova` 。 此時，您將看到所有的外掛程式目錄，所是的原始程式碼。 因此，添加目錄回顯到 `framework/ext/src/org/apache/cordova/echo` ，並創建一個檔稱為 `Echo.java` 在`framework/ext/src/org/apache/cordova/echo/Echo.java`.

## 書寫 Echo.java

在編寫外掛程式背後的基本思想是，創建一個擴展外掛程式類的類調用的方法 `execute` 返回 `PluginResult` 類。 任何調用 `cordova.exec` 將傳遞給要在類中，以及參數內執行的操作中。 在這種情況下，"回聲"是我們想要執行的類中"回聲"和 [乙方] 的行動是我們在中傳遞的參數。

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
    

所以如果我們看看上面的代碼，我們可以看到在 execute 方法中，我們第一次尋找行動來。 Echo 外掛程式，只有一種操作， `echo` ，因此，我們將只檢查的。 如果我們的外掛程式有更多的行動，它是簡單的添加更多條件的測試，以檢查這些操作。

然後我們拿進來從參數 args 參數由提供的消息。 我們可以抓住的只在做第一個參數`String theMsg = args.getString(0);`.

我們將做一些錯誤檢查和郵件看起來很好，如果我們將具現化新的 PluginResult 與好的狀態： `PluginResult.Status.OK` ，並返回該郵件： `theMsg` 。 在此之後，我們返回的結果，要傳遞回給 JavaScript 可以在回檔中成功發射。 如果事情失敗，我們可以返回各種狀態異常，像 `PluginResult.Status.ERROR` ， `PluginResult.Status.JSON_EXCEPTION` ，或 `PluginResult.Status.INVALID_ACTION` 。 當傳遞回來時，這些類型的結果火中 JavaScript 的失敗回檔。

## 更新您的專案 www 目錄中.jar

添加的 `Echo.java` 需要更新您的專案中。 若要生成 `.jar` 檔，定位到黑莓 WebWorks 回購根目錄下並運行 `ant` 命令：

    ant update -Dproject.path="~/path_to_my_project"
    

這將生成新的 `.jar` 檔在 `build/ext` 目錄。複製 `build/ext/cordova.jar` 檔到您 `project/www/ext` 目錄。

如果一切順利，允許您在黑莓手機中使用 Echo 外掛程式。