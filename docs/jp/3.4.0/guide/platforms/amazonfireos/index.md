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

# Amazon Fire OS プラットフォームに関する解説

SDK 開発環境の設定方法、および、Amazon Fire OS 搭載のデバイス （ Kindle Fire HDX など )　への Cordova アプリの展開方法を説明します。

各プラットフォームの詳細情報に関しては、以下をご確認ください。

* Amazon Fire OS の設定
* Amazon Fire OS WebView
* Amazon Fire OS プラグイン

## システム要件とサポート

Amazon Fire OS 用に Cordova アプリを開発する場合、Android SDK と Amazon WebView SDK が必要です。これらの SDK をインスールするときの必要事項に関しては、以下のリンク先をご確認ください。

* [Android SDK システム](http://developer.android.com/sdk/)

* [Amazon WebView SDK](https://developer.amazon.com/sdk/fire/IntegratingAWV.html#installawv)

## インストール

### Android SDK

[developer.android.com/sdk](http://developer.android.com/sdk/) から Android SDK をインスールします。SDK のインストール先は自由に選択できますが、他の開発ツールと同じ保存先に、ダウンロードした `adt-bundle` フォルダーを置くことを推奨します。

Cordova コマンドライン ( command-line ) ツールを使用する場合、ユーザーの PATH 環境変数に SDK の `tools` と `platform-tools` のディレクトリーを追加する必要があります。

Mac、Linux、Unix 系のプラットフォームでは、テキストエディターを使用して、 以下のようなラインを追加して
、 `~/.bash_profile` を編集・作成します。SDK のインスール先に応じて、内容は修正してください。

    export PATH=${PATH}:/Development/adt-bundle/sdk/platform-tools:/Development/adt-bundle/sdk/tools

これにより、新たに開いたターミナル ( terminal window ) 上で SDK ツールを使用することができます。または、以下のコマンドで、即座に使用することもできます。

    $ source ~/.bash_profile

Windows 7 における PATH 環境変数の変更方法 : 

* デスクトップ左下の __スタート__ メニューをクリックして、 __コンピュータ__ を右クリックします。次に、 __プロパティー__ を選択します。

* 左枠に表示された __システムの詳細設定__ をクリックします。

* 表示されたダイアログボックスの __環境変数__ ボタンを押します。

* __PATH__ 環境変数を選択して、 __編集__ ボタンを押します。

* 以下のラインを、PATH に追記 ( 「;」 セミコロンを使用 ) します。SDK のインスール先に応じて、内容は修正してください。

        ;C:\Development\adt-bundle\sdk\platform-tools;C:\Development\adt-bundle\sdk\tools

* 設定を保存して、ダイアログボックスを閉じます。

Java と Ant も有効化することができます。コマンドプロンプト画面を立ち上げて、 `java` 、次に、 `ant` とタイプします。以下のように、実行できなった方を PATH に追記します。

    ;%JAVA_HOME%\bin;%ANT_HOME%\bin

### Amazon WebView SDK

[Amazon Developer Portal](https://developer.amazon.com/sdk/fire/IntegratingAWV.html#installawv) から Amazon WebView SDK をダウンロードしてください。

* `~/.cordova/lib/amazon-fireos/cordova/3.1.0/` フォルダー内に、 `libs/` フォルダーを 1 つ作成してください。
* ダウンロードした SDK の `awv_interface.jar` を `~/.cordova/lib/amazon-fireos/cordova/3.1.0/libs/` へ追加してください。

## SDK でプロジェクトを開く

新規のプロジェクトを作成・設定するときは、 `cordova` ユーティリティ ( 『 コマンドライン インターフェイス 』 に記載 ) をお使いください。ソースコードを置いたディレクトリーで以下のラインを入力します。

    $ cordova create hello com.example.hello "HelloWorld"
    $ cd hello
    $ cordova platform add amazon-fireos
    $ cordova build

作成後、 Android SDK に含まれる Eclipse を使用して、設定の変更をすることができます。

* __Eclipse__ アプリケーションの起動します。

* __New Project__ のメニューアイテムを選択します。

* 表示されたダイアログボックスから __Android Project from Existing Code__ を選択して、 __Next__ を押します。
    ![](img/guide/platforms//eclipse_new_project.png)

* `hello` に移動 ( またはプロジェクトを作成したディレクトリー ) 後、 `platforms/amazon-fireos` サブディレクトリーへ移動します。

* __Finish__ を押します。

Eclipse ウィンドウが開いたときに、未解決事項があると、赤色の __X__ が表示されます。その場合、以下のステップを行います。

* プロジェクトが保存されたディレクトリを右クリックします。

* 表示された __Properties__ ダイアログのナビゲーション ウィンドウから、 __Android__ を選択します。

* プロジェクトのビルドターゲット ( project build target ) に関しては、インストールを行った内の最上位の Android API レベル ( API level ) を選択してください。

* __OK__ をクリックします。

* __Project__ メニューから __Clean__ を選択します。 ここまでの手順で、プロジェクトに存在したエラーをすべて解決することができるはずです。

## デバイスへの展開

デバイスにアプリを直接にプッシュする場合、デバイスの USB デバッグ ( USB debugging ) が有効であることを確認してください ( [Android Developer Site](http://developer.android.com/tools/device.html) の記載事項 )。また、その場合、mini USB ケーブルを使用して、システムに接続を行ってください。

コマンドラインから、デバイスにアプリをプッシュできます。

    $ cordova run amazon-fireos

また、Eclipse を使用することもできます。プロジェクトを右クリックして、 __実行 ( Run
As ) &rarr; Android アプリケーション ( Android Application )__ を選択します。

__注意__: 現在、Amazon WebView を使用したアプリに関しては、エミュレーター上でのテストを行うことができません。