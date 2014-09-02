---
license: Licensed to the Apache Software Foundation (ASF) under one
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
---

# Amazon Fire OS WebView

バージョン 3.0.0 から、Amazon Fire OS アプリ内のコンポーネントとして、Cordova を使うことができます。Amazon Fire OS では、このコンポーネントを `CordovaWebView` と呼んでいます。 `CordovaWebView` を使用して、Amazon WebView ( Chromium Project が提供するオープンソースを基に構築 ) を拡張できます。これにより、モダンウェブ用ランタイムエンジン上で動作して、最新の HTML 5 Web 標準を活用できる、Web アプリを作成することができます。

## 必須条件

* Cordova 3.0.0 以降のバージョン

* 最新の Android SDK

* Amazon WebView SDK

## Amazon Fire OS プロジェクトにおける CordovaWebView の使用方法

1. [Amazon WebView SDK](https://developer.amazon.com/sdk/fire/IntegratingAWV.html#installawv) をダウンロードして、解凍します。次に、 `/framework/libs` ディレクトリへ、awv_interface.jar をコピーします。libs/ フォルダーが存在しない場合には、作成します。

2. /framework` に移動 ( `cd` ) して、cordova の jar をビルドするため、 `ant jar` を実行します。実行後、 `/framework` ディレクトリ内に `cordova-3.4.0.jar` ( .jar ファイル形式 ) が作成されます。

3. `/res/layout` 下に置かれている、アプリの `main.xml` ファイルを以下のように変更します。`layout_height` 、 `layout_width` 、 `id` は、アプリに合わせ、適宜変更してください。

        <org.apache.cordova.CordovaWebView
            android:id="@+id/tutorialView"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />

開発者のアクティビティ ( Activity ) を編集して、 `CordovaInterface` を実装 ( implements ) できるようにします。インクルードされているメソッド ( included methods ) も実装する必要があります。 `/framework/src/org/apache/cordova/CordovaActivity.java` から、これらのメソッドをコピーすることができます。または、開発者自身で実装させることもできます。インターフェイスを使用するアプリのコードの一例を、以下に記します。参照している view の id と `id` 属性を一致させる方法に関しては、上記 XML のフラグメントをご確認ください。

        public class CordovaViewTestActivity extends Activity implements CordovaInterface {
            CordovaWebView cwv;
            /* アクティビティが最初に作成されたときに、呼び出されます */
            @Override
            public void onCreate(Bundle savedInstanceState) {
                super.onCreate(savedInstanceState);
                setContentView(R.layout.main);
                cwv = (CordovaWebView) findViewById(R.id.tutorialView);
                Config.init(this);
                cwv.loadUrl(Config.getStartUrl());
            }

カメラを使用する場合には、以下も組み込む必要があります。

        @Override
        public void setActivityResultCallback(CordovaPlugin plugin) {
            this.activityResultCallback = plugin;
        }
        /**
         * 完了時に、なんらかの結果を返すアクティビティをここで実行します。アクティビティが終了 ( exit ) したとき、
         * onActivityResult() メソッドを呼び出します。
         *
         * @param command           command オブジェクト
         * @param intent            開始のインテント ( intent )
         * @param requestCode       アクティビティの特定を行うため、コールバックに渡すリクエストコード ( request code )
         */
        public void startActivityForResult(CordovaPlugin command, Intent intent, int requestCode) {
            this.activityResultCallback = command;
            this.activityResultKeepRunning = this.keepRunning;

            // マルチタスク処理を行っている場合、結果を返すアクティビティに関しては、マルチタスク処理を無効にします.
            if (command != null) {
                this.keepRunning = false;
            }

            // アクティビティを開始します.
            super.startActivityForResult(intent, requestCode);
        }

        @Override
        /**
         * 開始したアクティビティが終了 ( exit ) したときに、こちらを呼び出します。そのとき、開始時に使用した requestCode 、アクティビティが返す 
         * resultCode、および、付随的なデータを返します。
         *
         * @param requestCode       startActivityForResult() へ渡した request code。だれがこの結果を返したのか特定するときに使用します。
         *                          
         * @param resultCode        setResult() 経由で、子アクティビティ ( child activity ) が返した result code ( 整数 ) です。
         * @param data              インテントです。呼び出し元へ結果を返すことができます ( Intent の "extra" を使用してさまざまなデータを追加できます )。
         */
        protected void onActivityResult(int requestCode, int resultCode, Intent intent) {
            super.onActivityResult(requestCode, resultCode, intent);
            CordovaPlugin callback = this.activityResultCallback;
            if (callback != null) {
                callback.onActivityResult(requestCode, resultCode, intent);
            }
        }

最後に、スレッドプール ( thread pool ) を追加してください。追加しない場合、プラグインを実行するためのスレッドがなくなります。

        @Override
        public ExecutorService getThreadPool() {
            return threadPool;
        }

6. アプリの HTML と JavaScript ファイルを、Amazon Fire OS プロジェクトの `/assets/www` ディレクトリへコピーします。

7. `/framework/res/xml` の `config.xml` を、プロジェクトの `/res/xml` ディレクトリへコピーします。
