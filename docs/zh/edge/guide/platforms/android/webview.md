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

这一节演示如何嵌入在较大型的 Android 应用程序内的科尔多瓦启用 web 视图组件。这些组件可以如何与对方沟通的详细信息，请参阅应用程序插件。

如果你熟悉 Android，你应首先熟悉 Android 平台指南和之前你尝试更不寻常发展嵌入 web 视图的选项，安装了最新 Android sdk。 从开始科尔多瓦 1.9，Android 平台依靠 `CordovaWebView` 组件，生成遗留下来 `CordovaActivity` 预日期 1.9 版本的组件。

1.  要按照这些说明进行操作，请确保您有最新的科尔多瓦分布。从[cordova.apache.org][1]下载和解压缩其 android 系统的软件包。

2.  导航到 Android 包 `/framework` 目录并运行 `ant jar` 。它创建了科尔多瓦 `.jar` 文件中，形成了作为`/framework/cordova-x.x.x.jar`.

3.  复制 `.jar` 到 Android 项目文件 `/libs` 目录。

4.  将以下内容添加到应用程序的 `/res/xml/main.xml` 文件中，与 `layout_height` 、 `layout_width` 和 `id` 修改，以适合应用程序：
    
        <org.apache.cordova.CordovaWebView
            android:id="@+id/tutorialView"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />
        

5.  修改活动，使它实现了 `CordovaInterface` 。 它应实施的包括的方法。 您可能希望将它们从复制 `/framework/src/org/apache/cordova/CordovaActivity.java` ，或其他执行他们自己。 下面的代码片段显示了一个基本的应用程序依赖于接口。 请注意如何引用的视图 id 匹配 `id` 在上面所示的 XML 片段中指定的属性：
    
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
        

6.  如果应用程序需要使用相机，实现以下内容：
    
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
        

7.  最后，请记住，添加线程池，否则插件有没有线程在其上运行：
    
        @Override
        public ExecutorService getThreadPool() {
            return threadPool;
        }
        

8.  将应用程序的 HTML 和 JavaScript 文件复制到 Android 项目 `/assets/www` 目录。

9.  复制 `config.xml` 文件从 `/framework/res/xml` 到项目中的 `/res/xml` 目录。

 [1]: http://cordova.apache.org