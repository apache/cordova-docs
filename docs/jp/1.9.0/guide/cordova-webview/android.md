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

Embedding Cordova WebView on Android
====================================

Cordova 1.9 からは、`CordovaActivity` を用いて、 Cordova をネイティブ Android アプリケーションの中でコンポーネントとして使用できます。このコンポーネントは Android では `CordovaWebView` として知られています。
1.9以降の新しい Cordova ベースのアプリケーションでは、昔の `DroidGap` アプローチが使用されているかどうかに関わらず、
`CordovaWebView` をメインビューとして使用します。

必要なものは Android アプリケーションの開発時と同じです。 Android の開発環境について知識があることが期待されます。
もし知識が十分にない場合は、このアプローチを使用する前に入門ガイドを参照して、 Cordova アプリケーションを作成することから初めてください。
これは Android Cordova アプリケーションを作成するメインアプローチではありません。そのため、この手順は現在は手作業となります。将来、この方法を自動化することも考えています。

必要なもの
-------------

1. **Cordova 1.9** またはそれ以降
2. リビジョン15 以降の Android SDK

Android プロジェクトでの CordovaWebView 使用ガイド
---------------------------------------------------

1. `bin/create` を使用し commons-codec-1.6.jar を取得
2. `/framework` に `cd` し、 cordova jar をビルドするために `ant jar` を実行
   (これにより `cordova-x.x.x.jar` 形式で .jar ファイルを
   `/framework` フォルダーに作成します)
3. cordova jar を Android プロジェクトの中の `/libs` ディレクトリにコピーします
4. アプリケーションの `/res/xml` 以下にある `main.xml` ファイルを、以下と同様になるよう編集します。 `layout_height`, `layout_width`, `id` はアプリケーションに合うように変更します

        <org.apache.cordova.CordovaWebView
            android:id="@+id/tutorialView"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />

5. アクティビティを、 `CordovaInterface` を実装 (implements) するように変更します。含まれているメソッドを実装することが推奨されています。 `/framework/src/org/apache/cordova/DroidGap.java` からメソッドをコピーしたいかもしれませんし、または自身のメソッドを実装したいかもしれません。以下は、インターフェースを使用したベーシックなアプリケーションのコードの一部です (ビューの id の参照は上のステップ4の `id` 属性で指定されたものと一致することに注意してください):

        public class CordovaViewTestActivity extends Activity implements CordovaInterface {
            CordovaWebView cwv;
            /* アクティビティが最初に作成されたときに呼び出されます。 */
            @Override
            public void onCreate(Bundle savedInstanceState) {
                super.onCreate(savedInstanceState);
                setContentView(R.layout.main);
                cwv = (CordovaWebView) findViewById(R.id.tutorialView);
                cwv.loadUrl("file:///android_asset/www/index.html");
            }

6. アプリケーションの HTML と JavaScript を Android プロジェクトの `/assets/www` ディレクトリにコピーします
7. `/framework/res/xml` から `cordova.xml` と `plugins.xml` を Android プロジェクトの `/res/xml` フォルダーにコピーします
