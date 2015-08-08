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

# Android プラットフォーム ガイド

このガイドは、Android デバイスのための Cordova アプリを展開する SDK の開発環境を設定する方法を示します。 それの Android SDK をインストールする Eclipse SDK で Android プロジェクトを開くと、エミュレーターまたはデバイスに展開するプロセスについて説明します。 このガイドに従って少なくとも次ワークフローに関係なく、Android SDK をインストールをする必要があります。 ( *Web プロジェクト Dev*と*ネイティブのプラットフォーム開発*のワークフロー要求 Android SDK をインストールし、パス経由でアクセス可能）

詳細なプラットフォーム固有の情報は、次を参照してください。

*   Android の構成
*   Android の web 表示
*   Android のプラグイン
*   Android のアップグレード
*   Android のコマンド ライン ツール

上記のコマンド ライン ツールはコルドバ 3.0 より前のバージョンを参照してください。現在のインタ フェースについての情報は、コマンド ライン インターフェイスを参照してください。

## 要件、およびサポート

Android の SDK は、[システム要件][1]を参照してください。

 [1]: http://developer.android.com/sdk/index.html

コルドバは、アンドロイド 2.2、2.3、および 4.x をサポートしています。一般的なルールとしてプラットフォームは Google の[分布のダッシュ ボード][2]上の 5% を下回るように推奨されません。.

 [2]: http://developer.android.com/about/dashboards/index.html

<!--
NOTE, doc said:
- Android 2.1 (Deprecated May 2013)
- Android 3.x (Deprecated May 2013)
-->

開発者を使用する必要があります、 `cordova` 人造人間 SDK と共にユーティリティ。 それをインストール、追加プロジェクト、ビルドし、プロジェクトを配置する方法については、コマンド ライン インターフェイス参照してください。

Android SDK をインストールします。 [developer.android.com/sdk][3].Android の sdk として配布されて、' adt-バンドル-<os>-<arch>-<ver>' ファイル。Windows では、adt バンドルは、インストーラーにパッケージ化されます。OSX と Linux 上に簡単に解凍 'adt バンドル' 開発ツールを格納する場所。 [Android の SDK のセットアップに関する詳細情報をここで発見ことができます。][4]

 [3]: http://developer.android.com/sdk/
 [4]: http://developer.android.com/sdk/installing/bundle.html

コルドバ動作するコマンド ライン ツール、SDK の含まする必要があります `tools` と `platform-tools` パス環境のディレクトリ。 Mac、テキストエディターを使用して作成または変更することができます、 `~/.bash_profile` ファイルは、SDK のインストールに応じて、次のような行を追加します。

    エクスポート パス ${path} を =:/開発/adt-バンドル/sdk/プラットフォーム固有のツール:/開発/adt-バンドル/sdk/ツール


これは、SDK で新しくオープンしたターミナル windows のツールを公開します。それ以外の場合、現在のセッションで使用できるようにするこれを実行します。

    $ ソース ~/.bash_profile


Windows 7 を道の環境を変更: する

*   デスクトップの左下隅の [**スタート**] メニューをクリックして、**コンピューター**を右クリックし、**プロパティ**をクリックします.

*   左側の列では、**システムの詳細設定**をクリックします。

*   表示されたダイアログ ボックスで**環境変数**キーを押します。.

*   **パス**変数を選択し、キーを押して**編集**.

*   たとえば、SDK をインストールしたに基づくパスに次を追加します。

        ;C:\Development\adt-bundle\sdk\platform-tools;C:\Development\adt-bundle\sdk\tools


*   値を保存して両方のダイアログ ボックスを閉じます。

また、コマンド ・ プロンプトとタイプ Java および Ant. オープンを有効にする必要があります `java` 、また入力と `ant` 。パスに追加いずれかを実行する失敗します。

        ;%JAVA_HOME%\bin;%ANT_HOME%\bin


## SDK でプロジェクトを開く

使用、 `cordova` コルドバのコマンド ライン インターフェイスで説明されているように、新しいプロジェクトを設定するユーティリティ。たとえば、ソース コード ディレクトリ: で

        $ cordova create hello com.example.hello "HelloWorld"
        $ cd hello
        $ cordova platform add android
        $ cordova build


作成したらここでは、SDK を使用して、それを変更する方法です。

*   **Eclipse**アプリケーションを起動します。

*   **新しいプロジェクト**のメニュー項目を選択します。

*   表示されたダイアログ ボックスから**既存のコードから Android プロジェクト**を選択し、**次**キーを押します。 ![][5]

*   移動する `hello` 、または好みのディレクトリに作成した、プロジェクトし、 `platforms/android` サブディレクトリ。

*   必ず両方 `hello` と `hello-CordovaLib` をインポートするプロジェクトが選択されています。 `hello-CordovaLib`コルドバは .jar ファイルではなく Android ライブラリとして今使用されるためコルドバ 3.3.0 現在プロジェクトが必要です。

*   **終了**キーを押します。.

 [5]: {{ site.baseurl }}/static/img/guide/platforms/android/eclipse_new_project.png

Eclipse ウィンドウが開いたら、未解決の問題を示す赤い**X**が表示されます。もしそうなら、この追加の手順を実行します。

*   プロジェクト ディレクトリを右クリックします。

*   結果**のプロパティ**] ダイアログ [ **Android**ナビゲーション ウィンドウから。

*   プロジェクトのビルド ターゲットは、インストールされている最高の Android の API レベルを選択します。

*   **[Ok]**をクリックします.

*   **クリーン****をプロジェクト**メニューから選択します。これは、プロジェクト内のすべてのエラーを修正する必要があります。

## エミュレーターへの展開します。

使用できます、 `cordova` 、エミュレーターでアプリを実行するユーティリティが SDK 内で実行できます。 いずれかの方法では、SDK には、少なくとも 1 つのデバイスを表示する最初構成する必要があります。 Eclipse から個別に実行される Java アプリケーション アンドロイド SDK マネージャー使用します。 それを開く 2 つの方法があります。

*   実行 `android` コマンド ・ ラインで。

*   Eclipse、内でこのツールバー アイコンを押します。

    ![][6]

 [6]: {{ site.baseurl }}/static/img/guide/platforms/android/eclipse_android_sdk_button.png

一度開いて、アンドロイド SDK マネージャーはさまざまなランタイム ライブラリが表示されます。

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_window.png

**ツール → 管理 Avd** (Android 仮想デバイス) を選択し、表示されたダイアログ ボックス内の**デバイス定義**から任意の項目を選択します。

![][8]

 [8]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_device.png

プレス**AVD の作成**、必要に応じて、名前の変更、変更を受け入れて**[ok]**を押します。

![][9]

 [9]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_newAVD.png

これで、AVD **Android 仮想デバイス**リストに表示されます。

![][10]

 [10]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_avds.png

エミュレーターを開くには、個別のアプリケーションとして、AVD を選択し、**開始**を押します。ハードウェア ボタンで使用できるコントロールを追加して、デバイスのように多くを起動します。

![][11]

 [11]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_emulator.png

この時点で使用することができます、 `cordova` ユーティリティをコマンドラインからエミュレーターにアプリケーションを配置します。

        $ cordova emulate android


Eclipse 内で作業する代わりに、プロジェクトを右クリックし、 **Android アプリケーション → として実行**を選択します。どれもが既に開かれている場合、AVD を指定しようとしています。

高速な体験、Intel ベースのエミュレーター イメージを使用します。

*   1 つまたは複数インストール `Intel x86 Atom` システム イメージだけでなく、 `Intel Hardware Accelerated Execution Manager` 、**余分な物**の下で利用可能な.

*   内でアンドロイド SDK で提供されているインテルのインストーラーを実行します。`extras/intel/Hardware_Accelerated_Execution_Manager`.

*   インテル画像に設定されているターゲットで新しい AVD を作成します。

*   エミュレーターを起動するときはハックス モジュールのロードに失敗を示すエラー メッセージがない確認します。

## デバイスへの配置します。

デバイスに直接アプリをプッシュするには、 [Android 開発者向けサイト][12]で説明されているようにあなたのデバイスで USB デバッグを有効にかどうかを確認し、ミニ USB ケーブルを使用してあなたのシステムにプラグインします。

 [12]: http://developer.android.com/tools/device.html

アプリをデバイスにプッシュするには、コマンド行から。

        $ cordova run android


Eclipse、内でプロジェクトを右クリックし、**人造人間アプリケーション → として実行**を選択します.
