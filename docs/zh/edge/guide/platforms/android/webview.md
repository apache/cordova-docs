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

协助下开始在科尔多瓦 1.9， `CordovaActivity` ，你可以使用科尔多瓦作为一个更大的本机 Android 应用程序中的一个组件。 Android 是指这种组件 `CordovaWebView` 。 新的基于科尔多瓦的应用程序从 1.9 起使用 `CordovaWebView` 作为其主要的视图，无论是否遗留下来 `CordovaActivity` 使用方法。

如果你熟悉 Android 应用程序的开发，请阅读 Android 平台指南 》 尝试前，包括 web 视图开发科尔多瓦的应用程序。 它不是作者科尔多瓦 Android 应用程序的主要途径。 这些指令是目前手动，但最终可能会实现自动化。

## 系统必备组件

*   科尔多瓦 1.9 或更大

*   Android SDK 更新到最新的 SDK

## 在 android 系统的项目中使用 CordovaWebView 的指南

1.  `cd`到 `/framework` 并运行 `ant jar` 打造科尔多瓦 jar。 它创建时所形成的.jar 文件 `cordova-x.x.x.jar` 在 `/framework` 目录。

2.  科尔多瓦 jar 复制到您的 Android 项目 `/libs` 目录。

3.  编辑您的应用程序的 `main.xml` 文件 (根据 `/res/xml` )，看起来像下面这样，与 `layout_height` ， `layout_width` 和 `id` 修改，以适合您的应用程序：
    
        <org.apache.cordova.CordovaWebView
            android:id="@+id/tutorialView"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />
        

4.  修改您的活动，使它实现了 `CordovaInterface` 。 您应该执行包括的方法。 您可能希望将它们从复制 `/framework/src/org/apache/cordova/CordovaActivity.java` ，或执行这些靠你自己。 下面的代码片段显示了一个基本的应用程序，使用该接口。 请注意如何引用的视图 id 匹配 `id` 在上面所示的 XML 片段中指定的属性：
    
        CordovaViewTestActivity 延伸活动的公共类实现 CordovaInterface {CordovaWebView cwv ；/ * 当第一次创建活动时调用。 * @Override 公共 void onCreate(Bundle savedInstanceState) {super.onCreate(savedInstanceState);setContentView(R.layout.main) ；cwv = findViewById(R.id.tutorialView) (CordovaWebView) ；Config.init(this) ；cwv.loadUrl(Config.getStartUrl()) ；}
        

如果您使用的相机，你应该也可以实现这：

        @Override 公共 void setActivityResultCallback （CordovaPlugin 插件） {this.activityResultCallback = 插件 ；} / --- 推出，你会喜欢结果当它完成一项活动。 当这种活动退出时，* 调用您的 onActivityResult() 方法。
         ** @param 命令的命令对象 * @param 意向意向开始 * @param requestCode 传递到回调来识别该活动的请求代码 * / 公共 void startActivityForResult （CordovaPlugin 命令、 意图意图、 int requestCode) {this.activityResultCallback = 命令 ；this.activityResultKeepRunning = this.keepRunning ；/ / 如果开启了多任务处理，然后禁用它如果返回结果的活动 （命令! = null) {this.keepRunning = false;} / / 开始活动 super.startActivityForResult (意图、 requestCode） ；} @Override / --- 当你发起退出，给你你开始的它的 requestCode 活动调用 * resultCode 它返回了，并从它的任何其他数据。
         请求代码最初提供给 startActivityForResult()，** @param requestCode * 允许您确定谁从这个结果来了。
         * @param resultCode 通过其 setResult() 的儿童活动所返回的整数结果代码。
         * @param 数据的意向，可以向调用方返回的结果数据 （各种数据可以附加到"额外"的意图）。
         * / 保护 void onActivityResult 意图意图 int resultCode int requestCode） {super.onActivityResult requestCode、 resultCode 意图） ；CordovaPlugin 回调 = this.activityResultCallback ；如果 (回调! = null) {callback.onActivityResult requestCode、 resultCode 意图） ；}
        }
    

最后，请记住，添加线程池，否则插件有没有线程上运行：

        @Override
        public ExecutorService getThreadPool() {
            return threadPool;
        }
    

1.  将您的应用程序的 HTML 和 JavaScript 文件复制到您的 Android 项目 `/assets/www` 目录。

2.  复制 `config.xml` 从 `/framework/res/xml` 到您的项目的 `/res/xml` 目录。