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

# Android 外掛程式

此部分提供了如何在 Android 平臺上實現本機外掛程式代碼的詳細資訊。 之前讀這篇文章，請參閱應用程式外掛程式外掛程式的結構和其共同的 JavaScript 介面的概述。 這一節繼續表明通信從科爾多瓦 web 視圖的本機平臺和後面的示例*回聲*外掛程式。 另一個示例，請參閱還在[CordovaPlugin.java][1]的評論.

 [1]: https://github.com/apache/cordova-android/blob/master/framework/src/org/apache/cordova/CordovaPlugin.java

Android 外掛程式基於科爾多瓦-Android，Android 的 web 視圖包括與附加到它上面的鉤子。 外掛程式被表示為類映射的 `config.xml` 檔。 外掛程式包括至少一個擴展的 JAVA 類的 `CordovaPlugin` 類，重寫的一個其 `execute` 方法。 作為最佳實踐，該外掛程式還應處理 `pause` 和 `resume` 事件，以及任何外掛程式之間傳遞的消息。 外掛程式需要長時間運行的請求，後臺活動媒體重播、 聽眾或內部狀態等應執行 `onReset()` ，以及方法。 它執行時 `WebView` 定位到新的一頁或刷新，重新載入 JavaScript。

## 外掛程式類映射

外掛程式的 JavaScript 介面使用 `cordova.exec` 方法，如下所示：

        exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);
    

這封送請求從 web 視圖到 Android 的本機對岸，有效地調用 `action` 方法 `service` 具有額外的參數中傳遞的類 `args` 陣列。

是否您分發外掛程式作為 JAVA 檔或作為它自己的一個*jar*檔，必須在科爾多瓦 Android 應用程式中指定外掛程式 `res/xml/config.xml` 檔。 有關如何使用的詳細資訊，請參閱應用程式外掛程式 `plugin.xml` 檔，把這個注射 `feature` 元素：

        <feature name="<service_name>">
            <param name="android-package" value="<full_name_including_namespace>" />
        </feature>
    

服務名稱匹配在 JavaScript 中使用 `exec` 調用。 值是 JAVA 類的完全限定命名空間識別碼。 否則為該外掛程式可能會編譯，但仍不能使用到科爾多瓦。

## 外掛程式初始化和存留期

外掛程式物件的一個實例創建為生活的每個 `WebView` 。 外掛程式不會具現化之前他們第一次引用通過調用從 JavaScript，除非 `<param>` 與 `onload` `name` 屬性設置為 `"true"` 的 `config.xml` 。 例如：

    <feature name="Echo">
        <param name="android-package" value="<full_name_including_namespace>" />
        <param name="onload" value="true" />
    </feature>
    

外掛程式應使用 `initialize` 方法為他們的創業邏輯。

    @override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        // your init code here
    }
    

## 編寫一個 Android JAVA 外掛程式

JavaScript 調用觸發外掛程式請求到本機的一邊，和 correspoinding JAVA 外掛程式映射正確地在 `config.xml` 檔中，但最後的 Android JAVA 外掛程式類看起來不會像什麼？ 無論派往與 JavaScript 的外掛程式 `exec` 函數傳遞到外掛程式類的 `execute` 方法。 大多數 `execute` 實現看起來像這樣：

        @Override 公共 boolean 類型的值執行 CallbackCoNtext callbackCoNtext JSONArray args 字串操作） 將引發 JSONException {如果 ("beep".equals(action)) {this.beep(args.getLong(0));callbackCoNtext.success() ；則返回 true ；} 返回 false ；/ / 返回 false 結果的"MethodNotFound"錯誤。
        }
    

JavaScript `exec` 函數的 `action` 參數對應于一個類的私有類方法派遣了可選參數。

當捕獲異常，並返回錯誤，重要的是為了明確起見，錯誤返回給 JavaScript 匹配 JAVA 異常名稱盡可能多。

## 執行緒

外掛程式的 JavaScript 並*不*在主執行緒中運行 `WebView` 介面 ； 相反，它會運行 `WebCore` 執行緒，一樣 `execute` 方法。 如果您需要與使用者介面進行交互，則應使用以下變化：

        @Override
        public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
            if ("beep".equals(action)) {
                final long duration = args.getLong(0);
                cordova.getActivity().runOnUiThread(new Runnable() {
                    public void run() {
                        ...
                        callbackContext.success(); // Thread-safe.
                    }
                });
                return true;
            }
            return false;
        }
    

使用以下如果你不需要在主介面上運行的執行緒，但不是想阻止 `WebCore` 執行緒或者：

        @Override
        public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
            if ("beep".equals(action)) {
                final long duration = args.getLong(0);
                cordova.getThreadPool().execute(new Runnable() {
                    public void run() {
                        ...
                        callbackContext.success(); // Thread-safe.
                    }
                });
                return true;
            }
            return false;
        }
    

## 回聲 Android 外掛程式示例

若要匹配的 JavaScript 介面*回波*特徵描述的應用程式外掛程式，使用 `plugin.xml` 來注入 `feature` 到本地平臺規範 `config.xml` 檔：

        <platform name="android">
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
    

必要的進口商品在檔的頂部延伸中的類 `CordovaPlugin` ，其 `execute()` 方法，它將覆蓋從其接收郵件 `exec()` 。 `execute()`方法第一次測試的值 `action` ，在這種情況下有有效期的只有一個 `echo` 的值。 任何其他行動返回 `false` ，並導致 `INVALID_ACTION` 錯誤，會轉換為調用的 JavaScript 一邊錯誤回檔。

下一步，該方法檢索 echo 字串使用 `args` 物件的 `getString` 方法，指定的第一個參數傳遞給該方法。 值傳遞給一個私人後 `echo` 的方法，它是參數檢查，以確保它不是 `null` 或空字串，這種情況下的 `callbackContext.error()` 調用 JavaScript 的錯誤回檔。 如果通過各種檢查， `callbackContext.success()` 將傳遞原始 `message` 回 JavaScript 的成功回檔作為參數的字串。

## Android 系統集成

Android 功能 `Intent` 允許進程互相溝通的系統。 外掛程式可以訪問 `CordovaInterface` 物件，可以訪問 Android `Activity` ，運行應用程式。 這是 `Context` 啟動新的 android 系統所需 `Intent` 。 `CordovaInterface`允許外掛程式啟動 `Activity` 一個結果，並設置回檔外掛程式時 `Intent` 返回到應用程式。

到科爾多瓦 2.0 外掛程式可以不再直接存取 `Context` ，和遺產 `ctx` 成員已被否決。 所有 `ctx` 的方法上存在 `Context` ，所以這兩個 `getContext()` 和 `getActivity()` 可以返回所需的物件。

## 調試 Android 外掛程式

Eclipse 允許您調試外掛程式作為 JAVA 原始程式碼包含在專案中。 只有最新版本的 Android 開發者工具允許您將原始程式碼附加到*JAR*的依賴關係，所以此功能尚不完全支援。