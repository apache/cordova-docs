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

# 亚马逊火 OS WebViews

从 3.0.0 开始，你可以使用科尔多瓦作为亚马逊火 OS 应用程序中的一个组件。 亚马逊火 OS 是指这种组件 `CordovaWebView` 。 `CordovaWebView`扩展建立在开放源代码铬项目的亚马逊 web 视图。 通过利用此功能，您的 web 应用程序可以利用最新的 HTML5 web 标准在现代 web 运行时引擎中运行。

## 系统必备组件

*   科尔多瓦 3.0.0 或更大

*   Android SDK 更新到最新的 SDK

*   亚马逊 web 视图 SDK

## 在亚马逊火 OS 项目中使用 CordovaWebView 的指南

1.  下载并展开[亚马逊 web 视图 SDK][1] ，然后复制到 awv_interface.jar `/framework/libs` 目录。 创建库 / 文件夹如果它不存在。

2.  `cd`到 `/framework` 并运行 `ant jar` 打造科尔多瓦 jar。 它创建时所形成的.jar 文件 `cordova-x.x.x.jar` 在 `/framework` 目录。

3.  编辑您的应用程序的 `main.xml` 文件 (根据 `/res/layout` )，看起来像下面这样，与 `layout_height` ， `layout_width` 和 `id` 修改，以适合您的应用程序：
    
        <org.apache.cordova.CordovaWebView
            android:id="@+id/tutorialView"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />
        

4.  修改您的活动，使它实现了 `CordovaInterface` 。 您应该执行包括的方法。 您可能希望将它们从复制 `/framework/src/org/apache/cordova/CordovaActivity.java` ，或执行这些靠你自己。 下面的代码片段显示了一个基本的应用程序，使用该接口。 请注意如何引用的视图 id 匹配 `id` 在上面所示的 XML 片段中指定的属性：
    
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

如果您使用的相机，你应该也可以实现这：

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
    

最后，请记住，添加线程池，否则插件有没有线程上运行：

        @Override
        public ExecutorService getThreadPool() {
            return threadPool;
        }
    

1.  将您的应用程序的 HTML 和 JavaScript 文件复制到您的亚马逊火 OS 项目 `/assets/www` 目录。

2.  复制 `config.xml` 从 `/framework/res/xml` 到您的项目的 `/res/xml` 目录。