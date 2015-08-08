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

# アマゾン火 OS プラットフォーム ガイド

このガイドの Kindle 火災 HDX などのアマゾン火 OS デバイス Cordova アプリを展開する SDK の開発環境を設定する方法を示します。

詳細なプラットフォーム固有の情報は、次を参照してください。

*   アマゾン火 OS 構成
*   アマゾン火 OS web 表示
*   アマゾン火 OS プラグイン

## 導入

コルドバ開発者はアマゾン火 OS プラットフォームをターゲット Kindle の火災のデバイスに統合された高度な web エンジンを利用したハイブリッド web アプリを作成できます。 アマゾン WebView API (AWV) は火の OS に排他的なクロム派生 web ランタイムです。 WebView の Android デバイスに付属しているためのドロップイン置換 AWV それより高速な JavaScript エンジン （V8）、リモート デバッグ、およびハードウェアの Kindle の火災を含むのデバイス、加速された 2D キャンバスの最適化をサポートすることによりパフォーマンスの向上とより強力なハイブリッド web アプリを作成することが可能になり、Android がサポートしない HTML5 機能へのアクセスなど、WebView に建て: CSS Calc、フォーム検証、getUserMedia、IndexedDB、Web ワーカー、Websocket WebGL。

アマゾン WebView API の詳細については、Amazon 開発者ポータルの[HTML5 ハイブリッド アプリのページ][1]を参照してください。 開始および他を得ることについての質問の問題のサポートは、Amazon 開発者ポータル[フォーラム - HTML5 ハイブリッド アプリ][2]を参照してください。.

 [1]: https://developer.amazon.com/public/solutions/platforms/android-fireos/docs/building-and-testing-your-hybrid-app
 [2]: http://forums.developer.amazon.com/forums/category.jspa?categoryID=41

## 要件、およびサポート

アマゾン火 OS 用 Cordova アプリの開発には様々 なアマゾン WebView SDK と同様に Android の開発に必要なすべてを含むサポート ファイルのインストールが必要です。 必要なインストールは、以下のリストを確認してください。

*   コマンド ライン インターフェイス
*   [Android の SDK][3]
*   [Apache Ant][4]
*   [アマゾン WebView SDK][1]

 [3]: http://developer.android.com/sdk/
 [4]: http://ant.apache.org

## インストール

### Android の SDK と Apache Ant

[Developer.android.com/sdk][3]から Android SDK をインストールします。 それ以外の場合、ダウンロードした移動、SDK をインストールする場所の選択肢が表示されます `adt-bundle` ツリーの開発ツールを格納する場所を。

アンドロイド SDK マネージャーを実行する必要があります ( `android` コマンド ・ ラインから） コルドバ プロジェクトを開始する前に、少なくとも 1 回。 Android の SDK ツールと SDK プラットフォーム**API レベル 19 具体的**の最新バージョンをインストールすることを確認します。 Kindle 火災 OS デバイスのための開発環境の設定に関する詳細については Amazon 開発者ポータル[開発環境の設定][5]を参照してください。

 [5]: https://developer.amazon.com/public/resources/development-tools/ide-tools/tech-docs/01-setting-up-your-development-environment

Apache Ant ビルドツール[、Ant のバイナリ配布物をダウンロード][6]、解凍後を参照することができますディレクトリにインストールします。 多くの情報のための[Ant マニュアル][7]を参照してください。

 [6]: http://ant.apache.org/bindownload.cgi
 [7]: http://ant.apache.org/manual/index.html

コルドバ動作するコマンド ライン ツール、人造人間 SDK を含める必要があります `tools` 、 `platform-tools` と `apache-ant/bin` パス環境のディレクトリ。

#### Mac の/Linux のパス

Mac、Linux または他の Unix ライクなプラットフォームで、テキストエディターを使用して作成または変更することができます、 `~/.bash_profile` ファイルは、SDK と Ant のインストール先に応じて、次のような行を追加します。

    エクスポート パス ${PATH} を =:/開発/adt-バンドル/sdk/プラットフォーム固有のツール:/開発/adt-バンドル/sdk/ツール：/開発/apache ant/bin


これは新しくオープンしたターミナル ウィンドウで SDK ツールを公開します。それ以外の場合、現在のセッションで使用できるようにするこれを実行します。

    $ source ~/.bash_profile


#### Windows パス

Windows の PATH 環境を変更: する

*   デスクトップの左下隅の [**スタート**] メニューをクリックして、**コンピューター**を右クリックし、**プロパティ**をクリックします.

*   左側の列では、**システムの詳細設定**をクリックします。

*   表示されたダイアログ ボックスで**環境変数**キーを押します。.

*   **パス**変数を選択し、キーを押して**編集**.

*   次のパスに追加インストールした SDK と Ant、たとえばに基づいて：

        ;C:\Development\adt-bundle\sdk\platform-tools;C:\Development\adt-bundle\sdk\tools;C:\Development\apache-ant\bin


*   値を保存して両方のダイアログ ボックスを閉じます。

*   また、Java を有効にする必要があります。 コマンド プロンプトを開き、型 `java` 実行されない場合、同様にあなたのパスに Java バイナリの場所を追加します。 ％ JAVA_HOME が JDK のインストール ディレクトリを指していることを確認します。 JAVA_HOME 環境変数別途追加する必要があります。

        %JAVA_HOME%\bin


### アマゾン WebView SDK

アマゾン火 OS プラットフォーム ターゲットを用いた Cordova アプリを作成するためにダウンロード、アンパック、アマゾン WebView SDK サポート ファイルをインストールする必要があります。 この手順はのみ行う必要があります最初のアマゾン火 OS プロジェクト。

*   [Amazon 開発者ポータル][1]からアマゾン WebView SDK をダウンロードします。.

*   コピー `awv_interface.jar` コルドバの作業ディレクトリにダウンロードした SDK から。それが存在しない場合は、commonlibs(shown below) フォルダーを作成します。

    **Mac/Linux:** `~/.cordova/lib/commonlibs/`

    **Windows:** `%USERPROFILE%\.cordova\lib\commonlibs`

## アマゾン火 OS の新しいプロジェクトを作成します。

使用、 `cordova` コルドバのコマンド ライン インターフェイスで説明されているように、新しいプロジェクトを設定するユーティリティ。たとえば、ソース コード ディレクトリ: で

    $ cordova create hello com.example.hello "HelloWorld"
    $ cd hello
    $ cordova platform add amazon-fireos
    $ cordova build


***注：***アマゾン fireos プラットフォームは、システムにインストールされている初めてコルドバの作業ディレクトリに適切なファイルをダウンロードするそれとして AWV SDK サポート ファイル (上記参照) が不足しては失敗します。 インストールするには、上記の手順に従って、 `awv_interface.jar` 、削除し、再度アマゾン fireos プラットフォームをプロジェクトに追加します。 この手順はのみ行う必要があります最初のアマゾン火 OS プロジェクト。

## デバイスへの配置します。

デバイスに直接アプリをプッシュするには、 [Android 開発者向けサイト][8]で説明されているようにあなたのデバイスで USB デバッグを有効にかどうかを確認し、ミニ USB ケーブルを使用してあなたのシステムにプラグインします。

 [8]: http://developer.android.com/tools/device.html

アプリをデバイスにプッシュするには、コマンド行から。

    アマゾン fireos 実行 $ コルドバ


交互 Eclipse、内でプロジェクトを右クリックし、 **Android アプリケーション → として実行**を選択します.

**注**: 現在、エミュレーターを介してテストはサポートされていませんアマゾン WebView ベースのアプリのため、さらにアマゾン WebView API は火 OS デバイスで利用できるのみです。 詳細については、[アマゾン WebView API SDK][1]ドキュメントを参照してください。

### フラグを実行します。

実行コマンドはコルドバ コマンド行インターフェースのドキュメントで指定されている省略可能なパラメーターを受け入れます、火災 OS はまた追加を受け入れる `--debug` リモート web デバッグ用のクロムの開発者ツールを有効にするフラグ。

開発者ツールを使用するには、を入力します。

    $ cordova run --debug amazon-fireos


これは実行しているクライアント上のツールを有効になります。接続できますクライアントに Android のデバッグ橋 （adb） を使用してポート転送によって、アプリのパッケージ名を参照します。

たとえば。

    adb 前方 tcp:9222 localabstract:com.example.helloworld.devtools


クロム ベースのブラウザーを介して DevTools に移動して使用することしてできます。`http://localhost:9222`.

### 省略可能な Eclipse サポート

作成後、プロジェクトを変更する人造人間 SDK と一緒に来る Eclipse を使用できます。 コルドバのコマンド ライン ツールを使用し続ける場合に日食を介して行われた変更が上書きされることに注意してください。

*   **Eclipse**アプリケーションを起動します。

*   **新しいプロジェクト**のメニュー項目を選択します。

*   表示されたダイアログ ボックスから**既存のコードから Android プロジェクト**を選択し、**次**キーを押します。 ![][9]

*   移動する `hello` 、または好みのディレクトリに作成した、プロジェクトし、 `platforms/amazon-fireos` サブディレクトリ。

*   Eclipse はこんにちは、こんにちは-CorddovaLib - 2 のプロジェクトを追加表示されます。両方を追加します。

*   **終了**キーを押します。.

 [9]: {{ site.baseurl }}/static/img/guide/platforms/android/eclipse_new_project.png

Eclipse ウィンドウが開いたら、未解決の問題を示す赤い**X**が表示されます。もしそうなら、この追加の手順を実行します。

*   プロジェクト ディレクトリを右クリックします。

*   結果**のプロパティ**] ダイアログ [ **Android**ナビゲーション ウィンドウから。

*   プロジェクトのビルド ターゲットのインストールされている最高の Android の API レベル (現在 API レベル 19) を選択します。

*   **[Ok]**をクリックします.

*   **クリーン****をプロジェクト**メニューから選択します。これは、プロジェクト内のすべてのエラーを修正する必要があります。
