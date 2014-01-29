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

# 亞馬遜火 OS WebViews

從 3.0.0 開始，你可以使用科爾多瓦作為亞馬遜火 OS 應用程式中的一個元件。 亞馬遜火 OS 是指這種元件 `CordovaWebView` 。 `CordovaWebView`擴展建立在開放原始碼鉻專案的亞馬遜 web 視圖。 通過利用此功能，您的 web 應用程式可以利用最新的 HTML5 web 標準在現代 web 運行時引擎中運行。

## 系統必備元件

*   科爾多瓦 3.0.0 或更大

*   Android SDK 更新到最新的 SDK

*   亞馬遜 web 視圖 SDK

## 在亞馬遜火 OS 專案中使用 CordovaWebView 的指南

1.  下載並展開[亞馬遜 web 視圖 SDK][1] ，然後複製到 awv_interface.jar `/framework/libs` 目錄。 創建庫 / 資料夾如果它不存在。

2.  `cd`到 `/framework` 並運行 `ant jar` 打造科爾多瓦 jar。 它創建時所形成的.jar 檔 `cordova-x.x.x.jar` 在 `/framework` 目錄。

3.  編輯您的應用程式的 `main.xml` 檔 (根據 `/res/layout` )，看起來像下面這樣，與 `layout_height` ， `layout_width` 和 `id` 修改，以適合您的應用程式：
    
        <org.apache.cordova.CordovaWebView
            android:id="@+id/tutorialView"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />
        

4.  修改您的活動，使它實現了 `CordovaInterface` 。 您應該執行包括的方法。 您可能希望將它們從複製 `/framework/src/org/apache/cordova/CordovaActivity.java` ，或執行這些靠你自己。 下面的代碼片段顯示了一個基本的應用程式，使用該介面。 請注意如何引用的視圖 id 匹配 `id` 在上面所示的 XML 片段中指定的屬性：
    
        public class CordovaViewTestActivity extends Activity implements CordovaInterface {
            CordovaWebView cwv;
            /* Called when the activity is first created. */
            @Override
            public void onCreate(Bundle savedInstanceState) {
                super.onCreate(savedInstanceState);
                setContentView(R.layout.main);
                cwv = (CordovaWebView) findViewById(R.id.tutorialView);
                Config.init(this);
                cwv.loadUrl(Config.getStartUrl());
            }
        

 [1]: https://developer.amazon.com/sdk/fire/IntegratingAWV.html#installawv

如果您使用的相機，你應該也可以實現這：

        @Override
        public void setActivityResultCallback(CordovaPlugin plugin) {
            this.activityResultCallback = plugin;
        }
        /**
         * Launch an activity for which you would like a result when it finished. When this activity exits,
         * your onActivityResult() method is called.
         *
         * @param command           The command object
         * @param intent            The intent to start
         * @param requestCode       The request code that is passed to callback to identify the activity
         */
        public void startActivityForResult(CordovaPlugin command, Intent intent, int requestCode) {
            this.activityResultCallback = command;
            this.activityResultKeepRunning = this.keepRunning;
    
            // If multitasking turned on, then disable it for activities that return results
            if (command != null) {
                this.keepRunning = false;
            }
    
            // Start activity
            super.startActivityForResult(intent, requestCode);
        }
    
        @Override
        /**
         * Called when an activity you launched exits, giving you the requestCode you started it with,
         * the resultCode it returned, and any additional data from it.
         *
         * @param requestCode       The request code originally supplied to startActivityForResult(),
         *                          allowing you to identify who this result came from.
         * @param resultCode        The integer result code returned by the child activity through its setResult().
         * @param data              An Intent, which can return result data to the caller (various data can be attached to Intent "extras").
         */
        protected void onActivityResult(int requestCode, int resultCode, Intent intent) {
            super.onActivityResult(requestCode, resultCode, intent);
            CordovaPlugin callback = this.activityResultCallback;
            if (callback != null) {
                callback.onActivityResult(requestCode, resultCode, intent);
            }
        }
    

最後，請記住，添加執行緒池，否則外掛程式有沒有線程上運行：

        @Override
        public ExecutorService getThreadPool() {
            return threadPool;
        }
    

1.  將您的應用程式的 HTML 和 JavaScript 檔案複製到您的亞馬遜火 OS 專案 `/assets/www` 目錄。

2.  複製 `config.xml` 從 `/framework/res/xml` 到您的專案的 `/res/xml` 目錄。