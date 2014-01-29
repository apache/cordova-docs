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

# 亞馬遜火 OS 外掛程式

按照有關的開發自訂外掛程式概述 Android 外掛程式指南中提供的說明。

## 回聲亞馬遜火 OS 外掛程式示例

若要匹配的 JavaScript 介面*回波*特徵描述的應用程式外掛程式，使用 `plugin.xml` 來注入 `feature` 到本地平臺規範 `config.xml` 檔：

    <platform name="amazon-fireos">
        <config-file target="config.xml" parent="/*">
            <feature name="Echo">
                <param name="android-package" value="org.apache.cordova.plugin.Echo"/>
            </feature>
        </config-file>
    </platform>
    

然後添加以下到 `src/org/apache/cordova/plugin/Echo.java` 檔：

    package org.apache.cordova.plugin;
    
    import org.apache.cordova.CordovaPlugin;
    import org.apache.cordova.CallbackContext;
    
    import org.json.JSONArray;
    import org.json.JSONException;
    import org.json.JSONObject;
    
    /**
     * This class echoes a string called from JavaScript.
     */
    public class Echo extends CordovaPlugin {
    
        @Override
        public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
            if (action.equals("echo")) {
                String message = args.getString(0);
                this.echo(message, callbackContext);
                return true;
            }
            return false;
        }
    
        private void echo(String message, CallbackContext callbackContext) {
            if (message != null && message.length() > 0) {
                callbackContext.success(message);
            } else {
                callbackContext.error("Expected one non-empty string argument.");
            }
        }
    }
    

如果你想要重用的亞馬遜火 OS 平臺 Android 外掛程式代碼然後修改通過指向 `android` 特定的原始檔案。例如，

    <platform name="amazon-fireos">
        <config-file target="config.xml" parent="/*">
            <feature name="Echo">
                <param name="android-package" value="org.apache.cordova.plugin.Echo"/>
            </feature>
        </config-file>
        <source-file src="src/android/Echo.java" target-dir="src/org/apache/cordova/plugin" />
    </platform>
    

如果你想要編寫自訂的外掛程式的亞馬遜火 OS 平臺，然後創建一個名為資料夾 `amazon` 下你的外掛程式 src / 資料夾和修改通過為指向 `amazon` 特定的原始檔案。 例如，

    <platform name="amazon-fireos">
        <config-file target="config.xml" parent="/*">
            <feature name="Echo">
                <param name="android-package" value="org.apache.cordova.plugin.Echo"/>
            </feature>
        </config-file>
        <source-file src="src/amazon/Echo.java" target-dir="src/org/apache/cordova/plugin" />
    </platform>
    

## 在你的外掛程式中使用亞馬遜 web 視圖

科爾多瓦的亞馬遜火 OS 使得使用的基於開放源碼鉻專案的自訂亞馬遜 web 視圖。它是 GPU 加速和優化的流體性能上點燃火。

若要瞭解如何以最佳方式在您的專案中使用亞馬遜 web 視圖，查閱[亞馬遜開發人員門戶][1].

 [1]: https://developer.amazon.com/sdk/fire/IntegratingAWV.html