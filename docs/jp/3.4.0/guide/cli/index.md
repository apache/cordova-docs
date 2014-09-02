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

# コマンドライン インターフェイス

ここでは、 `cordova` コマンドライン インターフェイス ( CLI ) を使用した、アプリの作成方法、および、複数のネイティブモバイルプラットフォームへの展開方法を解説します。
このツールを使用して、新規プロジェクトの作成、異なるプラットフォーム上でのプロジェクトのビルド、実機もしくはエミュレータ上でのアプリの検証を行うことができます。
「 Web プロジェクト開発 」 作業手順 ( 原文では 「 cross-platform workflow 」 ) を使用する場合、CLI は強力なツールとなります ( 各種作業手順に関しては、『 概要 』 をご確認ください )。また、各種 SDK とシェルツールを使用して開発を行っている場合でも、プロジェクトコードを初期化するときなどに、CLI を使用できます。

## CLI を使用する前に

コマンドライン ツールを実行する前に、開発対象とする各モバイルプラットフォーム用の SDK をインストールする必要があります ( 詳細に関しては、『 プラットフォームに関する解説 』 をご確認ください )。

サポートツールの追加またはプロジェクトの再ビルドを各プラットフォームで行う場合、プラットフォームの SDK をサポートしている端末から、コマンドライン インターフェイスを実行する必要があります。
以下の組み合わせを CLI はサポートしています。

* iOS             (Mac)
* Amazon Fire OS  (Mac, Linux, Windows)
* Android         (Mac, Linux)
* BlackBerry 10   (Mac, Linux, Windows)
* Windows Phone 7 (Windows)
* Windows Phone 8 (Windows)
* Windows 8       (Windows)
* Firefox OS      (Mac, Linux, Windows)

Mac では、 _ターミナル_ アプリケーションからコマンドラインを使用できます。PC では、 _アクセサリ_ の _コマンド プロンプト_ から使用できます。

異なる端末から CLI を実行する場合も十分に予想されますので、そのような場合には、リモートのレポジトリー ( ソースコードなどを格納 ) を使用して、ローカルの作業用ディレクトリへファイルなどを持って ( pull ) くることも考慮すべきです。

`cordova` コマンドライン ツールをインストールする場合、以下の手順を行ってください。

1. [Node.js](http://nodejs.org/) をダウンロードして、インストールします。インストール後、 `node` または `npm` を、コマンドライン上で実行することができます。

1. `cordova` ユーティリティをインストールします。Unix では、 制限のかけてあるディレクトリへは、`sudo` コマンドを最初に入力して、開発ユーティリティのインストールを行う必要があります。

        $ sudo npm install -g cordova

   アンインストールした SDK に関して、インストール ログ内にエラーを出力する場合もあります。インストール後、コマンドライン上で、 `cordova` を実行できます。

   ** 注意 **: 上記のように、 `-g` フラグを使用して、cordova をグローバルに使用できるよう、npm に命令します。
   また、インストールを行った npm モジュールをグローバルに呼び出すため、ユーザーの PATH 環境変数に npm ディレクトリーを追加する必要があります。Windows では、 `C:\Users\username\AppData\Roaming\npm` で npm を通常見つけることができます。Unix では、 `/usr/local/share/npm` となります。

## アプリの作成

ソースコードの保存先ディレクトリーへ行き、以下のようなコマンドを実行します。

        $ cordova create hello com.example.hello HelloWorld

コマンドの実行から完了までに時間がかかるときもありますので、しばらくそのまま待ちます。コマンド実行時に ` -d` オプションを追加すると、
進行状況の確認を行えます。

第一引数 「 _hello_ 」 を使用して、プロジェクト用に使用するディレクトリーを指定します。ディレクトリーが存在しない場合、Cordova 側で作成してくれます。
`www` サブディレクトリー に、 `css` 、 `js` 、 `img` 下のさまざまなリソースと共に、アプリのホームページを格納します ( ファイル名などは、Web 開発で使用する通常の命名規則に従います )。
`config.xml` ファイルは、アプリの起動と配布に必要な各種メタデータを記述しています。

第二引数 「 `com.example.hello` 」 を使用して、逆引きドメイン形式の識別子 ( reverse domain-style identifier ) をプロジェクトに設定します。この引数は、任意です。省略した場合には、引数にも順序があるため、第三引数も省略する必要があります。
この値は、 `config.xml` ファイル内で後から変更することができます。ただし、Java パッケージ名のように、 `config.xml` の範囲外で、この値を使用しているコードがある場合には、注意が必要です。
デフォルトでは、この値は `io.cordova.hellocordova` となりますが、適当な名前を付けることを推奨します。

第三引数 「 `HelloWorld` 」 を使用して、アプリの表示タイトルを設定します。この引数は、任意です。
この値は、 `config.xml` ファイル内で後から変更することができます。ただし、Java クラス名のように、 `config.xml` の範囲外で、この値を使用しているコードがある場合には、注意が必要です。
デフォルトでは、この値は `HelloCordova` となりますが、適当な名前を付けることを推奨します。

## プラットフォームの追加

この節で示す、すべてのコマンドは、プロジェクトのディレクトリー内、または、有効範囲のサブディレクトリー内で実行する必要があります。

        $ cd hello

プロジェクトを作成する前に、対象とするプラットフォームを指定する必要があります。ここで示すコマンドを実行できるかどうかは、各 SDK を端末がサポートしているかどうかに依ります。
以下で示すコマンドのいずれかを Mac で実行してください。

        $ cordova platform add ios
        $ cordova platform add amazon-fireos
        $ cordova platform add android
        $ cordova platform add blackberry10
        $ cordova platform add firefoxos

以下で示すコマンドのいずれかを Windows で実行してください。 _wp_ は、Windows Phone オペレーティングシステムの省略形です。

        $ cordova platform add wp7
        $ cordova platform add wp8
        $ cordova platform add windows8
        $ cordova platform add amazon-fireos
        $ cordova platform add android
        $ cordova platform add blackberry10
        $ cordova platform add firefoxos

以下で示すコマンドを実行して、現在のプラットフォーム群の確認を行います。

        $ cordova platforms ls

( 注意 ： `platform` と `platforms` コマンドは、同じものです ）

プラットフォームを削除する場合には、以下で示すコマンドを実行してください。

        $ cordova platform remove blackberry10
        $ cordova platform rm amazon-fireos
        $ cordova platform rm android

プラットフォームの追加・削除を行うコマンドを実行すると、プロジェクトの _platforms_ のディレクトリ ( 各プラットフォームのサブディレクトリ ) に影響を与えます。
各プラットフォームのサブディレクトリ内に、_www_ ソースディレクトリ ( 例 ： `platforms/ios/www` 、 `platforms/android/assets/www` ) が再構築されます。
CLI では、ソースの _www_ フォルダーからファイル群のコピーを定期的に行うため、これらのファイルに対してのみ修正を行います。 _platforms_ サブディレクトリ下に格納しているファイルは修正しません。バージョン管理ソフトウェアを使用している場合には、このソースの _www_ フォルダーと _merges_ フォルダーをソフトに追加してください ( _merges_ フォルダーの詳細に関しては、下記の 「 各プラットフォームのカスタマイズを行う場合 」 をご確認ください)。

**警告** : アプリのビルドに CLI を使用する場合、システムの動作を熟知しているか、または、ドキュメントに記載されているとき以外で、 `/platforms/` フォルダー下のファイルの修正を行うことは推奨しません。これは、plugin を使用したプラグインの再インストール、または、prepare を使用した場合、`/platforms/` ディレクトリーの上書きを行うためです。

ここまでの時点で、Eclipse または Xcode などの SDK を使用して、作成したプロジェクトを開くことができます。SDK を使用して開発を行う場合、 `/platforms/` ディレクトリ下の各リソースを開く必要があります。SDK 固有のメタデータファイルは、各 `/platform/` サブディレクトリ内に保存されているためです ( 各 IDE におけるアプリの開発方法の詳細は、『 プラットフォームに関する解説 』 をご確認ください )。最初に、CLI を使用して、プロジェクトの初期化を行い、後に、ネイティブ開発用 SDK に環境を移行する場合には、こちらの方法を使用してください。

開発サイクルのすべての工程で、「 Web プロジェクト開発 」 ( 原文では 「 cross-platform workflow 」 ) 作業手順 ( CLI ) を検討している場合は、このまま読み続けてください。

## アプリのビルド

通常、スクリプト ( `cordova create` ) を使用して、プロジェクト下の `www/index.html` ファイルをホームページとする、WEB 系アプリの枠組みを構築します。
このアプリを編集することもできますが、アプリの起動を行う場合、 `deviceready` イベントハンドラーの一部として、その処理を記述することになります （ デフォルトでは、 `www/js/index.js` を使用 ）。

プロジェクトのビルドを行うときには、以下のコマンドを実行してください。

        $ cordova build

これにより、プロジェクトの `platforms` サブディレクトリ内に、コードを生成することができます。
各ビルドで、異なるプラットフォームを使用したい場合には、それを指定することもできます。

        $ cordova build ios

`cordova build` コマンドは、以下のコマンドの省略形です。以下の例では、対象プラットフォームを 1 つに絞っています。

        $ cordova prepare ios
        $ cordova compile ios

上記のように、 `prepare` コマンドを実行すると、Apple の Xcode SDK を代替的に使用して、 `platforms/ios` 内に Cordova 側が生成した、プラットフォーム固有のコードの修正・コンパイルを行うことができます。また、他のプラットフォームの SDK を使用して同様のことを行えます。

## アプリの検証 ( エミュレータまたは実機を使用 )

携帯端末用のプラットフォームの SDK の多くには、デバイスのイメージを用いたエミュレータが実装されています。
エミュレータを使用して、ホーム画面からアプリを起動することもできます。また、プラットフォーム側の機能との間の動作を確認することもできます。
以下に示すコマンドを実行すると、アプリの再ビルドとプラットフォームのエミュレータ上での表示処理を行います。

        $ cordova emulate android

携帯端末用のいくつかのプラットフォームでは、特定のデバイスのエミュレータをデフォルトで使用しています。たとえば、iOS プロジェクトでは、iPhone となります。
その他のプラットフォームでは、どのデバイスのエミュレータを使用するか最初に設定する必要があります。

注意： Amazon Fire OS では、現在、エミュレータをサポートしていません。

( 詳細に関しては、各 『 プラットフォームに関する解説 』 をご確認ください ) たとえば、最初に、 `android` コマンドを使用して、Android SDK を起動します。次に、指定したデバイス画面を立ち上げます ( 立ち上げ方法は、デフォルト設定に依ります )。

![](img/guide/cli/android_emulate_init.png)

`cordova emulate` コマンドを使用すると、画面のリフレッシュを行い、エミュレータの画面上には、最新状態のアプリが表示されます。
ホーム画面からアプリを起動することができます。

![](img/guide/cli/android_emulate_install.png)

または、お手持ちのハンドセット ( 携帯端末の周辺機器 ) をコンピューターに接続して、直接、アプリを検証することもできます。

        $ cordova run android

このコマンドを実行する前に、デバイスを検証用に設定する必要があります。こちらの設定方法は、デバイス毎に異なります。Android および Amazon Fire OS 搭載のデバイスでは、デバイスの __USB debugging__ オプションを使うことができるでしょう。開発環境にも依りますが、USB のドライバーを追加インストールしなければならない場合もあります。
各プラットフォームに関する必要条件などは、各プラットフォームの解説をご確認ください。

## プラグイン機能の追加

新規プロジェクトのビルドおよび確認を行うとき、デフォルト設定のアプリの機能では、できることも限られています。
WEB の標準的な技術を使用して、複数の方法で、アプリ機能を追加することができます。また、さまざまなデバイスレベルの機能を使用するアプリに関しては、
コア の Cordova API 群 ( core Cordova APIs ) へのアクセスを提供するプラグイン群を追加する必要があります。

プラグインとは、ネイティブ コンポーネントとの接点 ( インターフェイス ) を提供する、ちょっとしたアドオン コード ( add-on code ) です。
「 ネイティブ コンポーネントと Cordova WebView を併用したハイブリッド アプリを開発したい 」 などの場合には、プラグイン インターフェイスを自由に設計することもできます
( 詳細に関しては、『 WebView の組み込む 』 と　『 プラグイン開発ガイド 』 をご確認ください )。
最も多い使用例としては、「 Cordova が持つデバイス レベルの基本機能を使用するため、プラグインを追加する 」 などがあります。デバイス レベルの基本機能に関しては、API リファレンスをご確認ください。プラグインの一覧 ( コミュニティー提供のプラグインを含む ) に関しては、 [plugins.cordova.io](http://plugins.cordova.io/) をご確認ください。
また、CLI　を使用して、レジストリーからプラグインを検索することもできます。たとえば、 `bar` と `code` を入力して検索を行った場合、両方の条件を満たした検索結果 ( 大文字・小文字を区別しない ) を 1 つ表示します。

        $ cordova plugin search bar code

        com.phonegap.plugins.barcodescanner - Scans Barcodes

`bar` のみ使用した場合の検索結果は以下のようになります。

        org.apache.cordova.statusbar - Cordova StatusBar Plugin

`cordova plugin add` コマンドを使用するときには、プラグインコードのレポジトリーを指定する必要があります。
Web プロジェクト開発 作業手順に従い、CLI を使用する場合には、プラグインコードを追加する適当な場所の設定などは、CLI 側が行ってくれます ( 各プラットフォームに対応 )。
ネイティブ プラットフォーム開発 作業手順に従う場合には、Plugman を使用して ( 原文では GitHub Plugman への外部リンクがここに入る予定だったようです ) 、各プラットフォームにて、複数回、プラグインを追加する必要があります。

CLI を使用して、アプリへ機能を追加する方法の例を以下に示します。

* 基本的なデバイス情報 ( Device API ):

        $ cordova plugin add org.apache.cordova.device

* ネットワーク接続とバッテリー関連のイベント:

        $ cordova plugin add org.apache.cordova.network-information
        $ cordova plugin add org.apache.cordova.battery-status

* 加速度センサー、コンパス、位置情報:

        $ cordova plugin add org.apache.cordova.device-motion
        $ cordova plugin add org.apache.cordova.device-orientation
        $ cordova plugin add org.apache.cordova.geolocation

* カメラ、メディア再生、メディアキャプチャー:

        $ cordova plugin add org.apache.cordova.camera
        $ cordova plugin add org.apache.cordova.media-capture
        $ cordova plugin add org.apache.cordova.media

* デバイスまたはネットワーク上のファイルへのアクセス (File API):

        $ cordova plugin add org.apache.cordova.file
        $ cordova plugin add org.apache.cordova.file-transfer

* ダイアログボックスまたは振動を利用した通知:

        $ cordova plugin add org.apache.cordova.dialogs
        $ cordova plugin add org.apache.cordova.vibration

* 連絡先:

        $ cordova plugin add org.apache.cordova.contacts

* 国際対応:

        $ cordova plugin add org.apache.cordova.globalization

* スプラッシュスクリーン:

        $ cordova plugin add org.apache.cordova.splashscreen

* 新規のブラウザーウィンドウ (InAppBrowser):

        $ cordova plugin add org.apache.cordova.inappbrowser

* デバッグ コンソール:

        $ cordova plugin add org.apache.cordova.console

`plugin ls` ( `plugin list` または `plugin` ) を使用して、現在、インストールされているプラグインを確認できます。識別子と共に、結果を表示します。

        $ cordova plugin ls    # or 'plugin list'
        [ 'org.apache.cordova.console' ]

プラグインを削除する場合、list コマンドで表示された識別子と同じものを使用します。リリースバージョンからデバッグ コンソールのサポートを削除する例を以下に示します。

        $ cordova plugin rm org.apache.cordova.console
        $ cordova plugin remove org.apache.cordova.console    # same

また、各コマンドの引数を複数に設定して、プラグインの一括削除・追加を行うこともできます。

        $ cordova plugin add org.apache.cordova.console org.apache.cordova.device

## 上級者向けのプラグイン オプション

プラグインを追加するとき、プラグインの取得場所を指定できるオプションが複数あります。上記の例では、良く知られている `registry.cordova.io` レジストリーを使用しています。また、プラグインは、 `id` を使用して指定しています。

        $ cordova plugin add org.apache.cordova.console

`id` には、 `@` 記号の後に、プラグインのバージョン番号が含まれている場合もあります。最新のバージョンの場合には、 `latest` と表示します。

        $ cordova plugin add org.apache.cordova.console@latest
        $ cordova plugin add org.apache.cordova.console@0.2.1

`registry.cordova.io` には、プラグインが登録されていないが、git のレポジトリーに置いてあるという場合には、URL ( an alternate URL ) を指定することもできます。

        $ cordova plugin add https://github.com/apache/cordova-plugin-console.git

上記の git の例では、Master ブランチからプラグインを持ってきます ( fetch )。 `#` 記号の後に、タグまたはブランチを追加して、使用することができます。

        $ cordova plugin add https://github.com/apache/cordova-plugin-console.git#r0.2.0

Git レポジトリーのサブディレクトリにプラグイン ( `plugin.xml` ファイルを含む ) が置かれている場合、 `:` 符号を使用して、場所を指定します。
この場合も、 `#` 記号を使用しますので、ご注意ください。

        $ cordova plugin add https://github.com/someone/aplugin.git#:/my/sub/dir

git のリファレンス ( git-ref ) とサブディレクトリを併用することもできます。

        $ cordova plugin add https://github.com/someone/aplugin.git#r0.0.1:/my/sub/dir

または、 `plugin.xml` ファイルを置いているプラグイン ディレクトリへのローカルパスを指定することもできます。

        $ cordova plugin add ../my_plugin_dir

## _merges_ を使用して、各プラットフォームのカスタマイズを行う場合

Cordova を使用すれば、複数のプラットファームで起動するアプリを簡単に展開できますが、カスタマイズを必要とする場合もあります。
そのような場合でも、 トップレベルの `platforms` ディレクトリに置かれた各 `www` ディレクトリのソースファイルは、修正の対象外にしたいときもあります。
なぜなら、トップレベルの `www` ディレクトリのクロスプラットフォーム関連のソースを使用して、これらのソースファイルは定期的に置き換えられてしまうからです。

その代わりに、各プラットフォームで使用するリソース ( assets ) を指定する場所として、トップレベルの `merges` ディレクトリを使用することができます。
`merges` 内の各プラットフォームのサブディレクトリでは、 `www` ソースツリーのディレクトリ構造をミラー化しています。これにより、必要に応じて、ファイルのオーバーライド ( override ) または追加を行うことができます。
`merges` を使用した、デフォルト フォントサイズの変更方法を例として以下に示します ( Android と Amazon Fire OS 搭載デバイス )。

* CSS ファイル ( `overrides.css` ) へのリンクを追加して、 `www/index.html` ファイルを編集します。

        <link rel="stylesheet" type="text/css" href="css/overrides.css" />

* また、ファイルの未検出エラーを防止するため、空の `www/css/overrides.css` ファイル ( Android 系以外のビルドに使用 ) を任意で作成することもできます。

* `merges/android` 内に `css` サブディレクトリを作成します。次に、対応する `overrides.css` ファイルを追加します。`www/css/index.css` 内で指定されているデフォルトのフォントサイズ 12 のオーバーライド ( override ) を行う CSS を指定します。以下に例を示します。

        body { font-size:14px; }

これにより、プロジェクトの再ビルドを行うとき、Android 側では、カスタマイズしたフォントサイズを使用します ( 他の設定は以前のまま保持 )。

また、もともとの `www` ディレクトリにはなかったファイルを追加する場合にも、 `merges` を使用することができます。
たとえば、iOS のインターフェイスに、 _戻るボタン_ 画像 ( `merges/ios/img/back_button.png` ) を組み入れることもできます。また、Android では、対応するハードウェアのボタンを押したときに、 `backbutton` イベントをキャプチャー ( capture ) することもできます。

## Help コマンド

Cordova では、障害が発生した場合に使用できる、いくつかのグローバルコマンド ( global command ) をご用意しています。
`help` コマンドを使用すると、利用可能な Cordova コマンドと入力方法を表示できます。

    $ cordova help
    $ cordova        # same

`info` コマンドを使用すると、現在、インストールしているプラットフォームとプラグインの一覧、各プラットフォームの SDK のバージョン、CLI と `node.js` のバージョンなどを表示できます。

    $ cordova info

上記のコマンドを使用すると、情報の表示、および、ローカルに置かれている `info.txt` ファイルへの出力を行います。

__注意__: 現時点では、iOS と Android 系のプラットフォームに関する詳細のみご利用できます。

## Cordova と プロジェクトの更新

`cordova` ユーティリティをインストールした後、以下のコマンドを使用して、最新のバージョンに更新することができます。

        $ sudo npm update -g cordova

また、特定のバージョンを指定して、インストールすることもできます。

        $ sudo npm install -g cordova@3.1.0-0.2.0

`cordova -v` を実行して、現在実行しているバージョンを確認できます。 `npm info` を使用すると、利用可能な他のバージョンの一覧と共に
現在のバージョンを表示します。

        $ npm info cordova

この節で解説を行った CLI ( command-line interface ) は、Cordova 3.0 からサポートを開始しました。
以前のバージョンから 3.0 に更新する場合には、上記の手順に従い、新規プロジェクトを作成して、次に、アプリの以前のアセット ( assets ) を、トップレベルの `www` ディレクトリにコピーします。
3.0 への更新に伴う解説の詳細は、各プラットフォームの解説にてご確認ください。 `cordova` の CLI が使用できるバージョンにアップグレードした後は、 `npm update` を使用して、最新の状態にしてください。これにより、各プラットフォームの解説に記載された、時間のかかる他の手順を行う必要はなくなります。

Cordova 3.0　以降では、プロジェクトレベルでのディレクトリ構造の変更などが予想されます。上記の `npm` コマンドを使用して、Cordova を更新した後、プロジェクト関連の各種リソース ( resource ) が、必要とされる最新の条件を満たしているか確認する必要があります。以下のコマンドを実行して、ビルドを行っているプラットフォームの更新を行います。


        $ cordova platform update android
        $ cordova platform update ios
        ...etc.

