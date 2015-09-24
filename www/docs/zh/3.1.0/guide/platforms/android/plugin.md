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

title: Android 外掛程式
---

# Android 外掛程式

在編寫外掛程式，需要瞭解的科爾多瓦 android 系統的體系結構。 科爾多瓦 Android 包括 Android 的 web 視圖與附加到它上面的鉤子。 這些外掛程式都表示為類映射的 `config.xml` 檔。

外掛程式包括至少一個擴展的 JAVA 類的 `CordovaPlugin` 類。 外掛程式必須重寫的一個 `execute` 方法從 `CordovaPlugin` 。 作為最佳實踐，該外掛程式應處理 `pause` 和 `resume` 的事件和任何外掛程式之間傳遞的消息。 外掛程式需要長時間運行的請求，後臺活動媒體重播、 聽眾或內部狀態等應執行 `onReset()` ，以及方法。 它執行時 `WebView` 定位到新的一頁或刷新，重新載入 JavaScript。

## 外掛程式類映射

一個外掛程式的 JavaScript 部分始終使用 `cordova.exec` 方法，如下所示：

    exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);
    

這封送從 web 視圖到 Android 的本機方面，更多或更少沸騰到調用請求 `action` 上的方法 `service` 類，傳入的參數中的 `args` 陣列。

是否您分發你的外掛程式作為 JAVA 檔或一罐，必須將該外掛程式添加到 `config.xml` 檔在科爾多瓦 Android 應用程式的 `res/xml/` 目錄。

    <feature name="<service_name>">
        <param name="android-package" value="<full_name_including_namespace>" />
    </feature>
    

服務名稱應與匹配在 JavaScript 中使用 `exec` 的電話和值是 JAVA 類完整名稱，包括命名空間。 否則為該外掛程式可編譯，但仍無法訪問由科爾多瓦。

## 編寫一個 Android JAVA 外掛程式

JavaScript 觸發外掛程式到本機端的請求。Android JAVA 外掛程式正確映射通過 `config.xml` 檔。所以最終的 Android JAVA 外掛程式類長什麼樣子？

什麼獲取調度到該外掛程式通過 JavaScript 的 `exec` 函數獲取傳遞到外掛程式類的 `execute` 方法。 大多數 `execute` 實現看起來像這樣：

    @Override 公共 boolean 類型的值執行 CallbackCoNtext callbackCoNtext JSONArray args 字串操作） 將引發 JSONException {如果 ("beep".equals(action)) {this.beep(args.getLong(0));callbackCoNtext.success() ；則返回 true ；} 返回 false ；/ / 返回 false 結果的"MethodNotFound"錯誤。
    }
    

我們比較的值的 `action` 參數，並派遣到 (私人) 方法在類中，可以選擇將某些參數傳遞給方法關閉請求。

當捕獲異常，並返回錯誤，重要的是為了明確起見，錯誤返回給 JavaScript 匹配 JAVA 異常名稱盡可能多。

### 執行緒

在 web 視圖中的 JavaScript 並*不*在 UI 執行緒上運行。它在測試網執行緒上運行。`execute`還在測試網執行緒上運行方法。

如果您需要與使用者介面進行交互，您應該使用以下方法：

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
    

如果你不需要在 UI 執行緒上運行，但不是想阻止測試網線：

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
    

### 回聲 Android 外掛程式示例

添加以下內容我們 `config.xml` 檔：

    <feature name="Echo">
        <param name="android-package" value="org.apache.cordova.plugin.Echo" />
    </feature>
    

然後將添加到下面的檔 `src/org/apache/cordova/plugin/Echo.java` 裡面我們的科爾多瓦 Android 應用程式：

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
    

讓我們看看代碼。 必要的 `imports` 在頂部。 我們班從延伸 `CordovaPlugin` 。 我們重 execute() 方法，以便從 exec() 接收消息。 我們的方法首先比較反對 `action` : 這個外掛程式只支援一個操作， `echo` 行動。 任何其他行動返回 `false` ，這會導致錯誤的類型 `INVALID_ACTION` ，其中將轉化為一個錯誤回檔調用的 JavaScript 一邊。 下一步，我們抓住 echo 字串使用 `getString` 方法上的我們 `args` ，告訴它我們想要獲取參數陣列中的第十的參數。 我們做一些參數檢查： 請確保它不是 `null` ，並確保它不是一個零長度的字串。 如果是，我們稱之為 `callbackContext.error()` (其中，現在，你應該知道調用錯誤回檔)。 如果所有這些檢查通過，然後我們調用 `callbackContext.success()` ，並通過在 `message` 我們收到作為參數的字串。 這最後轉化為一個成功回檔調用的 JavaScript 一邊。 它還通過 `message` 參數作為入 JavaScript 成功回呼函數的參數。

## 調試外掛程式

Eclipse 可以用於調試 Android 專案，並可以調試外掛程式，如果 JAVA 原始程式碼包含在專案中。 已知只有最新版本的 Android 開發者工具是允許來原始程式碼附件 JAR 的依賴關係，所以這不完全支援在這一次。

## 常見的陷阱

*   外掛程式可以訪問 `CordovaInterface` 物件。 此物件具有對 Android 的訪問 `Activity` ，在運行該應用程式。 這是 `Context` 啟動新的 android 系統所需 `Intent` 。 `CordovaInterface`允許外掛程式啟動 `Activity` 一個結果，並設置回檔外掛程式時 `Intent` 回來到應用程式。 這是重要的因為 `Intent` s 系統是 android 系統進程之間的通信。

*   外掛程式並沒有直接存取 `Context` 因為他們在過去。 遺留下來 `ctx` 成員已棄用，並將移除 2.0 發表後六個月。 所有的 `ctx` 方法上存在 `Context` ，所以這兩個 `getContext()` 和 `getActivity()` 都能夠返回所需的適當物件。

## 使用源

準備好自己要寫你自己的外掛程式的最佳方法之一是[看看現有的外掛程式][1].

 [1]: https://github.com/apache/cordova-android/tree/master/framework/src/org/apache/cordova

您還應閱讀通過在[CordovaPlugin.java][2]中的評論.

 [2]: https://github.com/apache/cordova-android/blob/master/framework/src/org/apache/cordova/CordovaPlugin.java