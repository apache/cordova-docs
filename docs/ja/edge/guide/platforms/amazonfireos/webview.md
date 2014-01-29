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

# アマゾン火 OS web 表示

3.0.0 以降、コルドバ アマゾン火 OS アプリケーションでコンポーネントとして使用できます。 アマゾン火 OS としてこのコンポーネントを指します `CordovaWebView` 。 `CordovaWebView`オープン ソース クロム プロジェクトに組み込まれているアマゾン WebView を拡張します。 この機能を活用してあなたの web アプリは現代のウェブ ランタイム エンジンで実行される最新の HTML5 web 標準を利用できます。

## 前提条件

*   コルドバ 3.0.0 以上

*   最新の SDK を更新 android SDK

*   アマゾン WebView SDK

## アマゾン火 OS プロジェクトで CordovaWebView の使用へのガイドします。

1.  ダウンロード[アマゾン WebView SDK][1]を展開しに awv_interface.jar をコピー `/framework/libs` ディレクトリ。 ライブラリを作成する/フォルダーが存在しない場合。

2.  `cd``/framework`を実行 `ant jar` コルドバの jar を構築します。 として形成された .jar ファイルを作成します `cordova-x.x.x.jar` で、 `/framework` ディレクトリ。

3.  編集アプリケーションの `main.xml` ファイル （下 `/res/layout` ) と、次のように、 `layout_height` 、 `layout_width` 、 `id` 、アプリケーションに合わせて変更します。
    
        <org.apache.cordova.CordovaWebView
            android:id="@+id/tutorialView"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />
        

4.  あなたの活動を変更して、それを実装する、 `CordovaInterface` 。 含まれているメソッドを実装する必要があります。 それらをコピーすることができます `/framework/src/org/apache/cordova/CordovaActivity.java` 、または独自に実装します。 インターフェイスを使用して、基本的なアプリケーションを次のコード片に示します。 参照先のビュー id と一致する方法に注意してください、 `id` 上記のように XML フラグメントで指定された属性。
    
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

カメラを使用する場合もこれを実装する必要があります。

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
    

最後に、スレッド プールを追加してください、それ以外の場合、プラグインには上で実行するスレッドはありません。

        @Override
        public ExecutorService getThreadPool() {
            return threadPool;
        }
    

1.  アプリケーションの HTML や JavaScript ファイル、プロジェクトにコピー アマゾン火 OS の `/assets/www` ディレクトリ。

2.  コピー `config.xml` から `/framework/res/xml` プロジェクトの `/res/xml` ディレクトリ。