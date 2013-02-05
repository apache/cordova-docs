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

Getting Started with Android
============================

このガイドは、 Cordova のための開発環境セットアップ方法、またシンプルなアプリの動かし方を解説します。 Cordova は以前は PhoneGap と呼ばれていたため、いくつかのサイトは PhoneGap という名前をまだ使用しています。


1. 必要なもの
---------------

- Eclipse 3.4以上


2. SDK と Cordova のインストール
------------------------

- [Eclipse Classic](http://www.eclipse.org/downloads/) のダウンロードとインストール
- [Android SDK](http://developer.android.com/sdk/index.html) のダウンロードとインストール
- [ADT Plugin](http://developer.android.com/sdk/eclipse-adt.html#installing) のダウンロードとインストール
- [Cordova](http://phonegap.com/download) の最新版をダウンロードし解凍します。これから Android ディレクトリと一緒に作業を進めます。

 3. 新規プロジェクトの作成
---------------------

- Eclipse を起動し、メニューから **ファイル新規 &gt; Android Project** を選択します。 **New Android Project** ウィザードの3つの画面を、以下のとおり設定します。

    ![](img/guide/getting-started/android/AndroidFlow.png)

- 作成したプロジェクトのルートディレクトリに、以下の2つの新しいディレクトリを作成します:
    - **/libs**
    - **assets/www**
- ダウンロードした Cordova から **cordova-1.9.0.js** を **assets/www** にコピーしてください。
- ダウンロードした Cordova から **cordova-1.9.0.jar** を **/libs** にコピーしてください。
- ダウンロードした Cordova から **xml** フォルダーを **/res** にコピーしてください。

- **cordova-1.9.0.jar** がプロジェクトのビルドパスに追加されていることを確認してください。 /libs フォルダーを右クリックし、 **ビルド・パス &gt; ビルド・パスの構成** を選択します。ライブラリータブで、 **cordova-1.9.0.jar** をプロジェクトに追加します。もしうまくいかない場合は、 F5 キーを押してプロジェクトをリフレッシュする必要があるかもしれません。

    ![](img/guide/getting-started/android/buildPath.jpg)

- 作成したプロジェクトの **src** フォルダーにあるメインの Java ファイルを編集します:
    - **import org.apache.cordova.*;** を追加
    - クラスの継承元を **Activity** から **DroidGap** に変更
    - **setContentView()** の行を **super.loadUrl("file:///android_asset/www/index.html");** に置き換え 

    ![](img/guide/getting-started/android/javaSrc.jpg)

- AndroidManifest.xml を右クリックし、 **アプリケーションから開く &gt; XML エディター** を選択します。
- 以下のコードを、 **&lt;uses-sdk.../&gt;** と **&lt;application.../&gt;** タグの間に貼り付けてください。

        <supports-screens
            android:largeScreens="true"
            android:normalScreens="true"
            android:smallScreens="true"
            android:resizeable="true"
            android:anyDensity="true" />
        <uses-permission android:name="android.permission.VIBRATE" />
        <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
        <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
        <uses-permission android:name="android.permission.ACCESS_LOCATION_EXTRA_COMMANDS" />
        <uses-permission android:name="android.permission.READ_PHONE_STATE" />
        <uses-permission android:name="android.permission.INTERNET" />
        <uses-permission android:name="android.permission.RECEIVE_SMS" />
        <uses-permission android:name="android.permission.RECORD_AUDIO" />
        <uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
        <uses-permission android:name="android.permission.READ_CONTACTS" />
        <uses-permission android:name="android.permission.WRITE_CONTACTS" />
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
        <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
        <uses-permission android:name="android.permission.GET_ACCOUNTS" />
        <uses-permission android:name="android.permission.BROADCAST_STICKY" />

- 画面の回転をサポートするために、以下を **&lt;activity&gt;** タグの中に貼り付けてください。

        android:configChanges="orientation|keyboardHidden|screenSize"

- AndroidManifest.xml は以下のようになります。

    ![](img/guide/getting-started/android/manifest.jpg)

4. Hello World の作成
--------------

- **index.html** という名前のファイルを **assets/www** ディレクトリに新規作成します。 以下のコードを貼り付けます:

        <!DOCTYPE HTML>
        <html>
        <head>
        <title>Cordova</title>
        <script type="text/javascript" charset="utf-8" src="cordova-1.9.0.js"></script>
        </head>
        <body>
        <h1>Hello World</h1>
        </body>
        </html>

5A. シミュレーターへのデプロイ
-----------------------

- プロジェクトを右クリックし、次を **実行 &gt; Android Application** を選択
- 適切な AVD を選択。 もしない場合は、作成する必要があります


5B. デバイスへのデプロイ
--------------------

- デバイスの設定で USB デバッグが有効になっていること、またコンピュータに接続されていることを確認 (**設定 &gt; アプリケーション &gt; 開発**)
- プロジェクトを右クリックし、次を **実行 > Android Application** を選択


終了
-----
