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

# Android WebViews

這一節演示如何嵌入在較大型的 Android 應用程式內的科爾多瓦啟用 web 視圖元件。這些元件可以如何與對方溝通的詳細資訊，請參閱應用程式外掛程式。

如果你熟悉 Android，你應首先熟悉 Android 平臺指南和之前你嘗試更不尋常發展嵌入 web 視圖的選項，安裝了最新 Android sdk。 從開始科爾多瓦 1.9，Android 平臺依靠 `CordovaWebView` 元件，生成遺留下來 `CordovaActivity` 預日期 1.9 版本的元件。

1.  要按照這些說明進行操作，請確保您有最新的科爾多瓦分佈。從[cordova.apache.org][1]下載和解壓縮其 android 系統的套裝軟體。

2.  導航到 Android 包 `/framework` 目錄並運行 `ant jar` 。它創建了科爾多瓦 `.jar` 檔中，形成了作為`/framework/cordova-x.x.x.jar`.

3.  複製 `.jar` 到 Android 專案檔案 `/libs` 目錄。

4.  將以下內容添加到應用程式的 `/res/xml/main.xml` 檔中，與 `layout_height` 、 `layout_width` 和 `id` 修改，以適合應用程式：
    
        <org.apache.cordova.CordovaWebView
            android:id="@+id/tutorialView"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />
        

5.  修改活動，使它實現了 `CordovaInterface` 。 它應實施的包括的方法。 您可能希望將它們從複製 `/framework/src/org/apache/cordova/CordovaActivity.java` ，或其他執行他們自己。 下面的代碼片段顯示了一個基本的應用程式依賴于介面。 請注意如何引用的視圖 id 匹配 `id` 在上面所示的 XML 片段中指定的屬性：
    
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
        

6.  如果應用程式需要使用相機，實現以下內容：
    
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
        

7.  最後，請記住，添加執行緒池，否則外掛程式有沒有線程在其上運行：
    
        @Override
        public ExecutorService getThreadPool() {
            return threadPool;
        }
        

8.  將應用程式的 HTML 和 JavaScript 檔案複製到 Android 專案 `/assets/www` 目錄。

9.  複製 `config.xml` 檔從 `/framework/res/xml` 到專案中的 `/res/xml` 目錄。

 [1]: http://cordova.apache.org