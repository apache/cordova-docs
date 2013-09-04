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

コルドバ 1.9 での援助にはじまって、 `CordovaActivity` 、コルドバ大きいネイティブ Android アプリケーションでコンポーネントとして使用できます。 Android としてこのコンポーネントを指す、 `CordovaWebView` 。 1.9 から新しいコルドバ ベースのアプリケーションを使用し、 `CordovaWebView` かどうかに関係なくそのメイン ビューとして、従来の `CordovaActivity` のアプローチが使用されます。

Android アプリケーションの開発に慣れていないしている場合は、WebView を含めようとして前にコルドバのアプリケーションを開発する Android プラットフォームのガイドをお読みください。 アンドロイド Cordova アプリを作成する主な方法ではありません。 これらの手順は、現在マニュアルですが可能性があります最終的に自動化されます。

## 前提条件

*   コルドバ 1.9 以上

*   最新の SDK を更新 android SDK

## Android プロジェクトでの CordovaWebView の使用へのガイドします。

1.  `cd``/framework`を実行 `ant jar` コルドバの jar を構築します。 として形成された .jar ファイルを作成します `cordova-x.x.x.jar` で、 `/framework` ディレクトリ。

2.  コルドバ jar を Android プロジェクト内にコピー `/libs` ディレクトリ。

3.  編集アプリケーションの `main.xml` ファイル （下 `/res/xml` ) と、次のように、 `layout_height` 、 `layout_width` 、 `id` 、アプリケーションに合わせて変更します。
    
        <org.apache.cordova.CordovaWebView
            android:id="@+id/tutorialView"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />
        

4.  あなたの活動を変更して、それを実装する、 `CordovaInterface` 。 含まれているメソッドを実装する必要があります。 それらをコピーすることができます `/framework/src/org/apache/cordova/CordovaActivity.java` 、または独自に実装します。 インターフェイスを使用して、基本的なアプリケーションを次のコード片に示します。 参照先のビュー id と一致する方法に注意してください、 `id` 上記のように XML フラグメントで指定された属性。
    
        CordovaViewTestActivity 活動を拡張するパブリック クラスを実装 CordovaInterface {CordovaWebView cwv;/* アクティビティが最初に作成されたときに呼び出されます。 */@Override 公共ボイド onCreate(Bundle savedInstanceState) {super.onCreate(savedInstanceState);setContentView(R.layout.main);cwv = (CordovaWebView) findViewById(R.id.tutorialView);Config.init(this);cwv.loadUrl(Config.getStartUrl());}
        

カメラを使用する場合もこれを実装する必要があります。

        @Override パブリック void setActivityResultCallback (CordovaPlugin プラグイン) {this.activityResultCallback = プラグイン;}/--- をご希望、結果それが完了したらアクティビティを起動します。 このアクティビティが終了したとき *、onActivityResult() メソッドが呼び出されます。
         ** @param コマンド コマンド オブジェクト * @param インテントを開始するインテント * @param requestCode アクティビティを識別するためにコールバックに渡される要求コード */公共 void startActivityForResult (CordovaPlugin コマンド、意図的意図、int requestCode) {this.activityResultCallback = コマンド。this.activityResultKeepRunning = this.keepRunning;//マルチタスクがオンの場合の結果を返す場合活動無効し (コマンド! = null) {this.keepRunning = false;}//スタートの活動 super.startActivityForResult (インテント、requestCode）;} @Override/--- アクティビティと、それを開始した requestCode を与えることは終了し、起動したときに呼び出されます * 返されると、resultCode とそれから追加データ。
         要求コードはもともと startActivityForResult() に供給される ** @param requestCode * この結果から来た人を識別することができます。
         * @param resultCode 整数結果コードは、setResult() を介して子アクティビティによって返されます。
         * @param データ、呼び出し元に結果データを返すことができますの意図 (様々 なデータは「エクストラ」の意図に添付することができます)。
         * void onActivityResult (int requestCode、int resultCode、インテント意図) 保護された/{super.onActivityResult requestCode、resultCode （意図）;CordovaPlugin コールバック = this.activityResultCallback;場合 （コールバック! = null) {callback.onActivityResult requestCode、resultCode （意図）;}
        }
    

最後に、スレッド プールを追加してください、それ以外の場合、プラグインには上で実行するスレッドはありません。

        @Override
        public ExecutorService getThreadPool() {
            return threadPool;
        }
    

1.  アプリケーションの HTML や JavaScript ファイル、プロジェクトにコピー Android の `/assets/www` ディレクトリ。

2.  コピー `config.xml` から `/framework/res/xml` プロジェクトの `/res/xml` ディレクトリ。