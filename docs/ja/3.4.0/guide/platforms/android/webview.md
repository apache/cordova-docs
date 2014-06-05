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

# Android の web 表示

このセクションを大きい人造人間アプリケーション内でのコルドバ有効 WebView コンポーネントを埋め込む方法を示します。これらのコンポーネントが互いと通信できる方法については、アプリケーション ・ プラグインを参照してください。

人造人間に慣れていないしている場合する必要があります最初 Android プラットフォーム ガイドに慣れるお持ち、WebView を埋め込みのより珍しい開発オプションを実行する前にインストールされている最新の人造人間 SDK。 コルドバ 1.9 を皮切りに、人造人間プラットホームに依存している、 `CordovaWebView` 、従来のビルド コンポーネント `CordovaActivity` 1.9 リリース前コンポーネント。

1.  これらの指示に従って、最新コルドバ分布があることを確認します。[Cordova.apache.org][1]からダウンロードし、その Android パッケージを解凍します。

2.  Android パッケージに移動 `/framework` ディレクトリと実行 `ant jar` 。Cordova が作成されます `.jar` として形成されたファイル`/framework/cordova-x.x.x.jar`.

3.  コピー、 `.jar` Android プロジェクトにファイル `/libs` ディレクトリ。

4.  次に、アプリケーションの追加 `/res/xml/main.xml` ファイルと、 `layout_height` 、 `layout_width` と `id` 、アプリケーションに合うように変更します。
    
        <org.apache.cordova.CordovaWebView
            android:id="@+id/tutorialView"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />
        

5.  アクティビティを変更して、それを実装する、 `CordovaInterface` 。 それは含まれているメソッドを実装する必要があります。 それらをコピーすることができます `/framework/src/org/apache/cordova/CordovaActivity.java` 、または他、自分でそれらを実装します。 次のコードは、基本的なアプリケーションのインターフェイスに依存している示しています。 参照先のビュー id と一致する方法に注意してください、 `id` 上記のように XML フラグメントで指定された属性。
    
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
        

6.  アプリケーションは、カメラを使用する必要がある場合、次を実装します。
    
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
        

7.  最後に、スレッド プールを追加してください、それ以外の場合プラグインには実行するスレッドはありません。
    
        @Override
        public ExecutorService getThreadPool() {
            return threadPool;
        }
        

8.  アプリケーションの HTML や JavaScript ファイル Android プロジェクトをコピー `/assets/www` ディレクトリ。

9.  コピー、 `config.xml` ファイルから `/framework/res/xml` をプロジェクトの `/res/xml` ディレクトリ。

 [1]: http://cordova.apache.org