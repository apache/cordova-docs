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

協助下開始在科爾多瓦 1.9， `CordovaActivity` ，你可以使用科爾多瓦作為一個更大的本機 Android 應用程式中的一個元件。 Android 是指這種元件 `CordovaWebView` 。 新的基於科爾多瓦的應用程式從 1.9 起使用 `CordovaWebView` 作為其主要的視圖，無論是否遺留下來 `CordovaActivity` 使用方法。

如果你熟悉 Android 應用程式的開發，請閱讀 Android 平臺指南 》 嘗試前，包括 web 視圖開發科爾多瓦的應用程式。 它不是作者科爾多瓦 Android 應用程式的主要途徑。 這些指令是目前手動，但最終可能會實現自動化。

## 系統必備元件

*   科爾多瓦 1.9 或更大

*   Android SDK 更新到最新的 SDK

## 在 android 系統的專案中使用 CordovaWebView 的指南

1.  `cd`到 `/framework` 並運行 `ant jar` 打造科爾多瓦 jar。 它創建時所形成的.jar 檔 `cordova-x.x.x.jar` 在 `/framework` 目錄。

2.  科爾多瓦 jar 複製到您的 Android 專案 `/libs` 目錄。

3.  編輯您的應用程式的 `main.xml` 檔 (根據 `/res/xml` )，看起來像下面這樣，與 `layout_height` ， `layout_width` 和 `id` 修改，以適合您的應用程式：
    
        <org.apache.cordova.CordovaWebView
            android:id="@+id/tutorialView"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />
        

4.  修改您的活動，使它實現了 `CordovaInterface` 。 您應該執行包括的方法。 您可能希望將它們從複製 `/framework/src/org/apache/cordova/CordovaActivity.java` ，或執行這些靠你自己。 下面的代碼片段顯示了一個基本的應用程式，使用該介面。 請注意如何引用的視圖 id 匹配 `id` 在上面所示的 XML 片段中指定的屬性：
    
        CordovaViewTestActivity 延伸活動的公共類實現 CordovaInterface {CordovaWebView cwv ；/ * 當第一次創建活動時調用。 * @Override 公共 void onCreate(Bundle savedInstanceState) {super.onCreate(savedInstanceState);setContentView(R.layout.main) ；cwv = findViewById(R.id.tutorialView) (CordovaWebView) ；Config.init(this) ；cwv.loadUrl(Config.getStartUrl()) ；}
        

如果您使用的相機，你應該也可以實現這：

        @Override 公共 void setActivityResultCallback （CordovaPlugin 外掛程式） {this.activityResultCallback = 外掛程式 ；} / --- 推出，你會喜歡結果當它完成一項活動。 當這種活動退出時，* 調用您的 onActivityResult() 方法。
         ** @param 命令的命令物件 * @param 意向意向開始 * @param requestCode 傳遞到回檔來識別該活動的請求代碼 * / 公共 void startActivityForResult （CordovaPlugin 命令、 意圖意圖、 int requestCode) {this.activityResultCallback = 命令 ；this.activityResultKeepRunning = this.keepRunning ；/ / 如果開啟了多工處理，然後禁用它如果返回結果的活動 （命令! = null) {this.keepRunning = false;} / / 開始活動 super.startActivityForResult (意圖、 requestCode） ；} @Override / --- 當你發起退出，給你你開始的它的 requestCode 活動調用 * resultCode 它返回了，並從它的任何其他資料。
         請求代碼最初提供給 startActivityForResult()，** @param requestCode * 允許您確定誰從這個結果來了。
         * @param resultCode 通過其 setResult() 的兒童活動所返回的整數結果代碼。
         * @param 資料的意向，可以向調用方返回的結果資料 （各種資料可以附加到"額外"的意圖）。
         * / 保護 void onActivityResult 意圖意圖 int resultCode int requestCode） {super.onActivityResult requestCode、 resultCode 意圖） ；CordovaPlugin 回檔 = this.activityResultCallback ；如果 (回檔! = null) {callback.onActivityResult requestCode、 resultCode 意圖） ；}
        }
    

最後，請記住，添加執行緒池，否則外掛程式有沒有線程上運行：

        @Override
        public ExecutorService getThreadPool() {
            return threadPool;
        }
    

1.  將您的應用程式的 HTML 和 JavaScript 檔案複製到您的 Android 專案 `/assets/www` 目錄。

2.  複製 `config.xml` 從 `/framework/res/xml` 到您的專案的 `/res/xml` 目錄。