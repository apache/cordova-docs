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

# コマンド ライン インターフェイス

このガイドでは、アプリケーションの作成し、を使用してさまざまなネイティブ モバイル プラットフォームに展開する方法を示します、 `cordova` コマンド ライン インターフェイス (CLI)。 このツールは、新しいプロジェクトの作成、異なるプラットフォームでは、ビルド、またはエミュレーター内で実際のデバイスで実行することができます。 CLI は、クロス プラットフォームのワークフローに使用する主要なツール (様々 なワークフローの説明の概要を参照してください)。ただし、初期化のコード プロジェクトを使用するさまざまなプラットフォームの Sdk とシェル ツール継続的な開発のために CLI を使用することもできます。

## 前提条件

任意のコマンド ライン ツールを実行する前にターゲットにするプラットフォーム用の Sdk をインストールする必要があります。(詳細については、プラットフォームのガイドを参照)。

サポートを追加する任意のプラットフォーム用のプロジェクトをリビルド プラットフォームの SDK をサポートしている同じマシンからコマンド ライン インターフェイスを実行する必要があります。CLI には、次の組み合わせをサポートします。

*   iOS (Mac)
*   アマゾン火 OS （Mac、Linux、Windows）
*   アンドロイド (マック、Linux)
*   ブラックベリー 10 (Mac、Linux、Windows)
*   Windows Phone 7 (Windows)
*   Windows Phone 8 (Windows)
*   Windows 8 (Windows)
*   Firefox OS （Mac、Linux、Windows）

Mac のコマンドラインです*ターミナル*アプリケーション経由で利用できます。PC 上だ*アクセサリー*の下で*コマンド プロンプト*として使用可能.

多くの可能性、CLI リモート ソース コード リポジトリでは、ローカルの作業ディレクトリにプルダウンその資産を維持するために理にかなってより多くの異なるマシンからに実行することです。

インストールする、 `cordova` コマンド ライン ツールは、次の手順に従ってください。

1.  ダウンロードしてインストール[Node.js][1]。呼び出すことができる必要がありますインストール直後は、 `node` または `npm` コマンド ライン。

2.  インストール、 `cordova` ユーティリティ。Unix では、プレフィックス、追加 `sudo` 開発ユーティリティをインストールする必要があるかもしれませんコマンドでディレクトリを制限されてそれ以外の場合。

        $ sudo npm install -g cordova


    インストール ログすべてアンインストールされたプラットフォーム Sdk の誤差が生じる可能性があります。インストール後、実行することができる必要があります `cordova` コマンド ・ ラインで。

    **注**: `-g` 上記のフラグは、npm コルドバをグローバルにインストールします。 Npm ディレクトリ グローバルを呼び出すためにあなたのパスにインストールする npm モジュールを追加する必要があります。 Windows では、npm が通常あります `C:\Users\username\AppData\Roaming\npm` と Unix で`/usr/local/share/npm`.

 [1]: http://nodejs.org/

## アプリを作成します。

ソース コードを維持する、ディレクトリに移動し、次のようなコマンドを実行します。

        $ cordova create hello com.example.hello HelloWorld


いくつかの時間がかかるを完了するコマンドがかかります。コマンドを実行して、 `-d` オプションは、進行状況に関する情報を表示します。

最初の引数の*ハロー*プロジェクトに対して生成されるディレクトリを指定します。 このディレクトリは既に存在する必要があります、コルドバはあなたのために作成されます。 その `www` サブディレクトリ、アプリケーションのホーム ページで、下にあるさまざまなリソースと一緒に家 `css` 、 `js` と `img` 、一般的な web 開発ファイル名前付け規則に従いますが。 `config.xml`ファイルには生成し、アプリケーションの配布に必要な重要なメタデータが含まれています。

2 番目の引数 `com.example.hello` 逆引きドメイン スタイル識別子と、プロジェクトを提供します。 この引数はオプションですが、またので、引数が位置指定に 3 番目の引数を省略する場合にのみです。 値は編集できますこの後で、 `config.xml` ファイル、しかし、ことはの外で生成されたコードがあるかもしれないことに注意してください `config.xml` Java パッケージ名など、この値を使用します。 既定値は `io.cordova.hellocordova` が適切な値を選択することをお勧めします。

3 番目の引数 `HelloWorld` アプリケーションの表示タイトルを提供します。 この引数は省略可能です。 値は編集できますこの後で、 `config.xml` ファイル、しかし、ことはの外で生成されたコードがあるかもしれないことに注意してください `config.xml` Java クラス名など、この値を使用します。 既定値は `HelloCordova` が適切な値を選択することをお勧めします。

## プラットフォームを追加します。

すべての後続コマンドは、プロジェクトのディレクトリまたはそのサブディレクトリのスコープ内で実行する必要があります。

        $ cd hello


プロジェクトをビルドする前に対象プラットフォームのセットを指定する必要があります。 これらのコマンドを実行する能力にあなたのマシンが各 SDK をサポートしているかどうかに依存し、各 SDK をインストールされて既にがあるかどうか。 Mac からこれらのいずれかを実行します。

        $ cordova platform add ios
        $ cordova platform add amazon-fireos
        $ cordova platform add android
        $ cordova platform add blackberry10
        $ cordova platform add firefoxos


*Wp*は Windows Phone オペレーティング システムの異なるバージョンを参照 Windows マシンからこれらのいずれかを実行します。

        $ cordova platform add wp7
        $ cordova platform add wp8
        $ cordova platform add windows8
        $ cordova platform add amazon-fireos
        $ cordova platform add android
        $ cordova platform add blackberry10
        $ cordova platform add firefoxos


現在のプラットフォームのセットを確認するこれを実行します。

        $ cordova platforms ls


（注、 `platform` と `platforms` コマンドは同じ意味です)。

プラットフォームを削除する次の同義のコマンドのいずれかを実行します。

        $ cordova platform remove blackberry10
        $ cordova platform rm amazon-fireos
        $ cordova platform rm android


各指定されたプラットフォームがサブディレクトリとして追加またはプラットフォームに影響を与えるプロジェクトの*プラットフォーム*ディレクトリの内容を削除するコマンドを実行します。 *Www*ソース ディレクトリは再現などに表示されるプラットフォームごとのサブディレクトリ内で `platforms/ios/www` または `platforms/android/assets/www` 。 CLI 常にコピーするので*www*のソース フォルダーからファイルをこれらのファイルではなく*プラットフォーム*サブディレクトリの下にあるもののみ編集する必要があります。 バージョン管理ソフトウェアを使用する*マージ*フォルダーと共にこのソース*www*フォルダーをバージョン管理システムに追加してください。 (*マージ*フォルダーに関する詳細については、下記の各プラットフォームのカスタマイズ セクションで発見ことができます)。

**警告**: で任意のファイルの編集から勧めは、CLI を使用して、アプリケーションをビルド、するとき、 `/platforms/` フォルダーをあなたがやっているか具体的に言われているそれ以外の場合のマニュアルを知っている限り。 これは内のファイルは `/platforms/` ディレクトリが上書きされますに準備またはプラグインの再インストール。

この時点でご希望の場合は作成したプロジェクトを開くに日食、Xcode など SDK を使用できます。 資産からの誘導体のセットを開く必要があります、 `/platforms/` ディレクトリの SDK を開発します。 これは、SDK の特定のメタデータ ファイルは、適切な内に格納されるため `/platform/` サブディレクトリ。 （各 IDE 内でアプリケーションを開発する方法についての情報のプラットフォームのガイドを参照）。あなたが単にしネイティブ作業用の SDK に切り替えるし、CLI を使用してプロジェクトを初期化する場合は、このアプローチを使用します。

記事を読む場合、開発サイクル全体のクロス プラットフォームのワークフロー アプローチ （CLI） を使用したいです。

## アプリをビルドします。

既定で、 `cordova create` スクリプト生成骨格の web ベースのアプリケーションのホーム ページは、プロジェクトの `www/index.html` ファイル。 このアプリケーションが、任意の初期化の一部として指定する必要があります編集、 `deviceready` から既定で参照されるイベント ハンドラー`www/js/index.js`.

繰り返しプロジェクトをビルドする、次のコマンドを実行します。

        $ cordova build


これは、プロジェクト内でプラットフォーム固有のコードを生成します `platforms` サブディレクトリ。必要に応じて、特定のプラットフォームを各ビルドのスコープを制限できます。

        $ cordova build ios


`cordova build`コマンドは、この例では、単一のプラットフォームにも対象指定される次の簡略化。

        $ cordova prepare ios
        $ cordova compile ios


この場合、1 回を実行する `prepare` 、変更およびコルドバ内で生成するプラットフォーム固有のコードをコンパイルする別の方法として Apple の Xcode SDK を使用することができます `platforms/ios` 。 他のプラットフォームの Sdk と同じアプローチを使用できます。

## エミュレーターまたはデバイス上のアプリをテストします。

モバイル プラットフォーム用の Sdk はしばしばホーム画面からアプリを起動し、それは多くのプラットフォーム機能と対話する方法を参照してくださいすることができますようにデバイス イメージを実行するエミュレーターにバンドルされています。 アプリを再構築し、特定のプラットフォームのエミュレーター内で表示するには、次のようなコマンドを実行します。

        $ cordova emulate android


いくつかのモバイル プラットフォーム既定では、iOS のプロジェクトのため iPhone など、特定のデバイスをエミュレートします。他のプラットフォーム用に最初のデバイス エミュレーターに関連付ける必要があります。

注: エミュレーターのサポートは現在利用できませんアマゾン火 os

(詳細については、プラットフォームのガイドを参照)。たとえば、あなたが最初の実行、 `android` 人造人間 SDK を起動し、その既定の動作によると起動する特定のデバイスのイメージを実行するコマンド。

![][2]

 [2]: {{ site.baseurl }}/static/img/guide/cli/android_emulate_init.png

フォロー アップで、 `cordova emulate` コマンドは、ホーム画面から起動できるようになります最新のアプリケーションを表示するエミュレーター イメージを更新します。

![][3]

 [3]: {{ site.baseurl }}/static/img/guide/cli/android_emulate_install.png

代わりに、携帯電話をお使いのコンピューターに差し込み、アプリを直接テストすることができます。

        $ cordova run android


このコマンドを実行する前に必要、テスト デバイスを設定するプラットフォームごとに異なる手順に従います。 人造人間とアマゾン火 OS のデバイス、デバイス上の**USB デバッグ**オプションを有効にして、おそらく開発環境に応じて USB ドライバーを追加する必要があります。 各プラットフォームの要件の詳細については、プラットフォームのガイドを参照してください。

## プラグイン機能を追加します。

ビルド、新しいプロジェクトを表示すると表示される既定のアプリケーションは非常にしません。 標準の web テクノロジーを活用する多くの方法でアプリを変更することができますが、デバイス レベルのさまざまな機能と密接に通信するアプリ、コア コルドバ Api へのアクセスを提供するプラグインを追加する必要があります。

*プラグイン*はネイティブ コンポーネントへのインタ フェースを提供するアドオン コードのビットです。 たとえば、ネイティブ コンポーネントを持つコルドバの WebView をミックスしたハイブリッド アプリを設計するときの独自のプラグイン インターフェイスをデザインできます。 (詳細については埋め込み web 表示とプラグイン開発ガイドを参照してください)。一般的に、コルドバの基本的なデバイス レベル機能は、API リファレンスの詳細のいずれかを有効にするプラグインを追加すると思います。 [Plugins.cordova.io][4]では、コミュニティによって提供される追加のプラグインを含む、これらのプラグインのリストがあります。 CLI を使用するには、このレジストリからプラグインを検索します。 たとえば、検索 `bar` と `code` 小文字部分文字列としての両方の条件に一致する 1 つの結果を生成します。

 [4]: http://plugins.cordova.io/

        $ cordova plugin search bar code

        com.phonegap.plugins.barcodescanner - Scans Barcodes


のみをお探しの `bar` 言葉の利回りと追加の結果。

        org.apache.cordova.statusbar - Cordova StatusBar Plugin


`cordova plugin add`コマンドは、プラグインのコードのリポジトリを指定する必要があります。 Web プロジェクト開発のワークフローに従います、CLI を使用すると、CLI は世話することプラットフォームごとの適切な場所にプラグインのコードを追加するに注意してください。 (場合ネイティブ プロジェクト Dev ワークフローに従っている、あなたが各プラットフォーム Plugman (ガイド リンクはここ）、複数回を使用してプラグインを追加する。)

CLI を使用アプリに機能を追加する方法の例を示します。

*   基本的なデバイス情報 (デバイス API):

        $ cordova plugin add org.apache.cordova.device


*   ネットワーク接続とバッテリーのイベント:

        $ cordova plugin add org.apache.cordova.network-information
        $ cordova plugin add org.apache.cordova.battery-status


*   加速度計、コンパス、および地理位置情報:

        $ cordova plugin add org.apache.cordova.device-motion
        $ cordova plugin add org.apache.cordova.device-orientation
        $ cordova plugin add org.apache.cordova.geolocation


*   カメラ、メディアの再生とキャプチャ：

        $ cordova plugin add org.apache.cordova.camera
        $ cordova plugin add org.apache.cordova.media-capture
        $ cordova plugin add org.apache.cordova.media


*   デバイスまたはネットワーク (File API) 上のアクセス ファイル:

        $ cordova plugin add org.apache.cordova.file
        $ cordova plugin add org.apache.cordova.file-transfer


*   ダイアログ ボックスまたは振動による通知:

        $ cordova plugin add org.apache.cordova.dialogs
        $ cordova plugin add org.apache.cordova.vibration


*   連絡先：

        $ cordova plugin add org.apache.cordova.contacts


*   グローバル化:

        $ cordova plugin add org.apache.cordova.globalization


*   スプラッシュ ・ スクリーン:

        $ cordova plugin add org.apache.cordova.splashscreen


*   開いている新しいブラウザー ウィンドウ (InAppBrowser):

        $ cordova plugin add org.apache.cordova.inappbrowser


*   デバッグ コンソール：

        $ cordova plugin add org.apache.cordova.console


使用 `plugin ls` (または `plugin list` 、または `plugin` 自体によって) 現在を表示するプラグインをインストールします。それぞれの識別子が表示されます。

        $ cordova plugin ls    # or 'plugin list'
        [ 'org.apache.cordova.console' ]


プラグインを削除するには、リストに表示される同じ識別子によってそれを参照してください。たとえば、ここではリリース バージョンからデバッグ コンソールのサポートを削除するだろう方法です。

        $ cordova plugin rm org.apache.cordova.console
        $ cordova plugin remove org.apache.cordova.console    # same


バッチ削除したりコマンドごとに 1 つ以上の引数を指定して、プラグインを追加します。

        $ cordova plugin add org.apache.cordova.console org.apache.cordova.device


## 高度なプラグインのオプション

プラグインを追加するときいくつかのオプション プラグインを取得する場所からを指定することができます。 上記の例をよく知られている使用して `registry.cordova.io` レジストリ、およびプラグインで指定の `id` :

        $ cordova plugin add org.apache.cordova.console


`id`の後に追加のプラグインのバージョン番号を含めることができます、 `@` 文字です。`latest`のバージョンは最新バージョンの別名です。たとえば。

        $ cordova plugin add org.apache.cordova.console@latest
        $ cordova plugin add org.apache.cordova.console@0.2.1


プラグインが登録されていない場合 `registry.cordova.io` が別の git リポジトリ内にある別の URL を指定することができます。

        $ cordova plugin add https://github.com/apache/cordova-plugin-console.git


上記の git の例は、master ブランチの終わりからプラグインをフェッチが後、代替 git ref タグまたは分岐などを追加することができます、 `#` 文字。

        $ cordova plugin add https://github.com/apache/cordova-plugin-console.git#r0.2.0


場合は、プラグイン （とその `plugin.xml` ファイル) は git のレポ内のサブディレクトリでそれを指定することができます、 `:` 文字。 注意してください、 `#` 文字が必要であります。

        $ cordova plugin add https://github.com/someone/aplugin.git#:/my/sub/dir


また、git ref とサブディレクトリの両方を組み合わせることができます。

        $ cordova plugin add https://github.com/someone/aplugin.git#r0.0.1:/my/sub/dir


またはを含むプラグイン ディレクトリへのローカル パスを指定する、 `plugin.xml` ファイル。

        $ cordova plugin add ../my_plugin_dir


## 各プラットフォームのカスタマイズを*マージ*を使用します。

コルドバは、多くの異なるプラットフォーム用のアプリを簡単に展開することができます、間時々 カスタマイズを追加する必要があります。 この場合、様々 なソース ファイルを変更するたくない `www` 内の最上位レベルのディレクトリ `platforms` ディレクトリ、彼らしている定期的に置き換えられるので、最上位の `www` ディレクトリのクロスプラット フォームのソース。

代わりに、最上位 `merges` ディレクトリの特定のプラットフォームに展開する資産を指定する場所を提供しています。 各プラットフォーム固有のサブディレクトリ内で `merges` のディレクトリ構造をミラー、 `www` ソース ツリーで、オーバーライドまたは必要に応じてファイルを追加することができます。 たとえば、使用する可能性がありますどのようにここでは `merges` Android とアマゾン火 OS デバイスの既定のフォント サイズを後押しします。

*   編集、 `www/index.html` 、追加の CSS ファイルへのリンクを追加して、ファイル `overrides.css` この場合。

        <link rel="stylesheet" type="text/css" href="css/overrides.css" />


*   必要に応じて作成する空の `www/css/overrides.css` ファイル、不足しているファイルのエラーを防止する、すべてのアンドロイド ビルドに適用されます。

*   作成、 `css` 内のサブディレクトリ `merges/android` 、追加し、対応する `overrides.css` ファイル。 CSS オーバーライド内で指定された 12 ポイントの既定のフォント サイズを指定する `www/css/index.css` 、たとえば。

        body { font-size:14px; }


プロジェクトをリビルドするとき他が変わらない間、Android のバージョン カスタム フォント サイズを備えています。

また使用することができます `merges` 、元のファイルが存在しないを追加する `www` ディレクトリ。 たとえば、アプリ組み込むことができます*戻るボタン*グラフィック iOS インターフェイスに格納されている `merges/ios/img/back_button.png` 、Android のバージョンをキャプチャすることができます代わりに、 `backbutton` 、対応するハードウェア ボタンからのイベント。

## ヘルプ コマンド

コルドバ動けなくなるまたは問題が発生する場合に役立つことがあります、グローバルのコマンドのカップルを備えています。`help`コマンドは、コルドバのすべての利用可能なコマンドとその構文が表示されます。

    $ cordova help
    $ cordova        # same


`info`コマンドは、現在インストールされているプラットフォームとプラグイン、各プラットフォーム用の SDK バージョン CLI のバージョンなどの潜在的有用な詳細情報の一覧を生成して `node.js` ：

    $ cordova info


両方の画面に情報を提示し、地元の出力をキャプチャ `info.txt` ファイル。

**注**: 現在、iOS および Android プラットフォームの詳細のみがあります。

## コルドバとあなたのプロジェクトの更新

インストールした後、 `cordova` ユーティリティ、常に更新できます、最新のバージョンに次のコマンドを実行します。

        $ sudo npm update -g cordova


特定のバージョンをインストールするには、この構文を使用します。

        $ sudo npm install -g cordova@3.1.0-0.2.0


実行 `cordova -v` を現在実行されているどのバージョンを参照してください。 実行、 `npm
info` をその他の利用可能なバージョン番号と共に現在のバージョンを含む長い一覧のコマンド。

        $ npm info cordova


コルドバ 3.0 は、このセクションで説明されているコマンド ライン インターフェイスをサポートするために最初のバージョンです。 前述のように、新しいプロジェクトを作成し、古いアプリケーション資産の最上位レベルにコピーする必要があります 3.0 以前のバージョンから更新する場合は `www` ディレクトリ。 該当する場合は、3.0 へのアップグレードに関する詳細はプラットフォームのガイドで利用できます。 アップグレードした後、 `cordova` コマンド ライン インターフェイスおよび使用 `npm update` 現在滞在より時間のかかる手順には、もはや関連。

コルドバ 3.0 + プロジェクト レベルのディレクトリ構造および他の依存関係に対するさまざまな変更必要があります。 実行した後、 `npm` コルドバ自体を更新する上記のコマンドで、最新バージョンの要件に準拠して、プロジェクトのリソースを確保する必要があります。 構築している各プラットフォームについては、次のようなコマンドを実行します。

        $ cordova platform update android
        $ cordova platform update ios
        ...etc.
