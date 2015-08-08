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

このガイドでは、アプリケーションの作成し、を使用してさまざまなネイティブ モバイル プラットフォームに展開する方法を示します、 `cordova` コマンド ライン インターフェイス (CLI)。 このツールは、新しいプロジェクトの作成、異なるプラットフォームでビルドし、エミュレーター内で実行することができます。 CLI を使用して、プロジェクト コード、さらにそれらを開発する様々 なプラットフォームの Sdk を使用するが後を初期化することもできます。

## 前提条件

任意のコマンド ライン ツールを実行する前にターゲットにするプラットフォーム用の Sdk をインストールする必要があります。(詳細については、プラットフォームのガイドを参照)。

サポートを追加する任意のプラットフォーム用のプロジェクトをリビルド プラットフォームの SDK をサポートしている同じマシンからコマンド ライン インターフェイスを実行する必要があります。CLI には、次の組み合わせをサポートします。

*   iOS (Mac)
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

 [1]: http://nodejs.org/

## アプリを作成します。

ソース コードを維持する、ディレクトリに移動し、次のようなコマンドを実行します。

        $ cordova create hello com.example.hello HelloWorld


いくつかの時間がかかるを完了するコマンドがかかります。実行、 `cordova -d` の進行状況に関する情報を表示します。

最初の引数は、プロジェクトに対して生成される*こんにちは*ディレクトリを指定します。 その `www` サブディレクトリ、アプリケーションのホーム ページで、下にあるさまざまなリソースと一緒に家 `css` 、 `js` と `img` 、一般的な web 開発ファイル名前付け規則に従いますが。 `config.xml`ファイルには生成し、アプリケーションの配布に必要な重要なメタデータが含まれています。

他の 2 つの引数は省略可能: `com.example.hello` 引数は、逆ドメイン スタイル識別子を使用してプロジェクトを提供します、 `HelloWorld` アプリケーションの表示テキストを提供します。 これらの値の後の両方を編集することができます、 `config.xml` ファイル。

## プラットフォームを追加します。

すべての後続コマンドは、プロジェクトのディレクトリまたはそのサブディレクトリのスコープ内で実行する必要があります。

        $ cd hello


プロジェクトをビルドする前に対象プラットフォームのセットを指定する必要があります。 これらのコマンドを実行する能力にあなたのマシンが各 SDK をサポートしているかどうかに依存し、各 SDK をインストールされて既にがあるかどうか。 Mac からこれらのいずれかを実行します。

        $ cordova platform add ios
        $ cordova platform add android
        $ cordova platform add blackberry10
        $ cordova platform add firefoxos


*Wp*は Windows Phone オペレーティング システムの異なるバージョンを参照 Windows マシンからこれらのいずれかを実行します。

        $ cordova platform add wp7
        $ cordova platform add wp8
        $ cordova platform add windows8
        $ cordova platform add android
        $ cordova platform add blackberry10
        $ cordova platform add firefoxos


現在のプラットフォームのセットを確認するこれを実行します。

        $ cordova platforms ls


（注、 `platform` と `platforms` コマンドは同じ意味です)。

プラットフォームを削除する次の同義のコマンドのいずれかを実行します。

        $ cordova platform remove blackberry10
        $ cordova platform rm android


各指定されたプラットフォームがサブディレクトリとして追加またはプラットフォームに影響を与えるプロジェクトの*プラットフォーム*ディレクトリの内容を削除するコマンドを実行します。 *Www*ソース ディレクトリは再現などに表示されるプラットフォームごとのサブディレクトリ内で `platforms/ios/www` または `platforms/android/assets/www` 。 既定では、コルドバの Api のすべてにアクセスできるようにする各プラットフォームの構成ファイルが設定します。

希望する場合は、この時点で、SDK を使用して作成したプロジェクトを開くことができます。 ただし、SDK 影響派生物内のプロジェクトへの編集は元クロスプラット フォームのソース ファイルではなく、資産の設定します。 単に、プロジェクトを初期化する場合は、このアプローチを使用します。 （各 SDK 内のアプリケーションを開発する方法についての情報のためのプラットフォームのガイドを参照）。記事を読む場合、開発サイクル全体のコマンド ライン ツールを使用したいです。

## アプリをビルドします。

既定で、 `cordova create` スクリプト生成骨格の web ベースのアプリケーションのホーム ページは、プロジェクトの `www/index.html` ファイル。 しかしが、初期化の一部として指定する必要がありますこのアプリケーションの編集、 `deviceready` から既定で参照されるイベント ハンドラーは、 `www/js/index.js` 。 <!-- XREF
(See the Application Development Guide for details.)
XREF -->

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


いくつかのモバイル プラットフォーム既定では、iOS のプロジェクトのため iPhone など、特定のデバイスをエミュレートします。 他のプラットフォーム用に最初のデバイス エミュレーターに関連付ける必要があります。 (詳細については、プラットフォームのガイドを参照)。たとえば、あなたが最初の実行、 `android` 人造人間 SDK を起動し、その既定の動作によると起動する特定のデバイスのイメージを実行するコマンド。

![][2]

 [2]: {{ site.baseurl }}/static/img/guide/cli/android_emulate_init.png

フォロー アップで、 `cordova emulate` コマンドは、ホーム画面から起動できるようになります最新のアプリケーションを表示するエミュレーター イメージを更新します。

![][3]

 [3]: {{ site.baseurl }}/static/img/guide/cli/android_emulate_install.png

代わりに、携帯電話をお使いのコンピューターに差し込み、アプリを直接テストすることができます。

        $ cordova run android


このコマンドを実行する前に必要、テスト デバイスを設定するプラットフォームごとに異なる手順に従います。 Android の場合、デバイス上の**USB デバッグ**オプションを有効にして、おそらく開発環境に応じて USB ドライバーを追加する必要があります。 各プラットフォームの要件の詳細については、プラットフォームのガイドを参照してください。

## 機能を追加します。

ビルド、新しいプロジェクトを表示すると表示される既定のアプリケーションは非常にしません。 標準の web テクノロジーを活用する多くの方法でアプリを変更することができますが、デバイス レベルのさまざまな機能と密接に通信するアプリ、コア コルドバ Api へのアクセスを提供するプラグインを追加する必要があります。

*プラグイン*はネイティブ コンポーネントへのインタ フェースを提供するアドオン コードのビットです。 たとえば、ネイティブ コンポーネントを持つコルドバの WebView をミックスしたハイブリッド アプリを設計するときの独自のプラグイン インターフェイスをデザインできます。 (詳細については埋め込み web 表示とプラグイン開発ガイドを参照してください)。コルドバの基本的なデバイス ・ レベルの機能の 1 つを有効にするプラグインを追加するより一般的に、< ！ ― ― 『 アプリケーション開発ガイド 』 で説明した外部参照と外部参照--> API リファレンスで詳しく説明します。

`cordova plugin add`コマンドは、プラグインのコードのリポジトリを指定する必要があります。追加可能性があります機能の例を示します。

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


バッチ削除したりコマンドごとに 1 つ以上の引数を指定して、プラグインを追加できます。

## 各プラットフォームをカスタマイズします。

コルドバは、多くの異なるプラットフォーム用のアプリを簡単に展開することができます、間時々 カスタマイズを追加する必要があります。 この場合、様々 なソース ファイルを変更するたくない `www` 内の最上位レベルのディレクトリ `platforms` ディレクトリ、彼らしている定期的に置き換えられるので、最上位の `www` ディレクトリのクロスプラット フォームのソース。

代わりに、最上位 `merges` ディレクトリの特定のプラットフォームに展開する資産を指定する場所を提供しています。 各プラットフォーム固有のサブディレクトリ内で `merges` のディレクトリ構造をミラー、 `www` ソース ツリーで、オーバーライドまたは必要に応じてファイルを追加することができます。 たとえば、使用する可能性がありますどのようにここでは `merges` Android デバイス用の既定のフォント サイズを後押しします。

*   編集、 `www/index.html` 、追加の CSS ファイルへのリンクを追加して、ファイル `overrides.css` この場合。

        <link rel="stylesheet" type="text/css" href="css/overrides.css" />


*   必要に応じて作成する空の `www/css/overrides.css` ファイル、不足しているファイルのエラーを防止する、すべてのアンドロイド ビルドに適用されます。

*   作成、 `css` 内のサブディレクトリ `merges/android` 、追加し、対応する `overrides.css` ファイル。 CSS オーバーライド内で指定された 12 ポイントの既定のフォント サイズを指定する `www/css/index.css` 、たとえば。

        body { font-size:14px; }


プロジェクトをリビルドするとき他が変わらない間、Android のバージョン カスタム フォント サイズを備えています。

また使用することができます `merges` 、元のファイルが存在しないを追加する `www` ディレクトリ。 たとえば、アプリ組み込むことができます*戻るボタン*グラフィック iOS インターフェイスに格納されている `merges/ios/img/back_button.png` 、Android のバージョンをキャプチャすることができます代わりに、 `backbutton` 、対応するハードウェア ボタンからのイベント。

## コルドバの更新

インストールした後、 `cordova` ユーティリティ、常に更新できます、最新のバージョンに次のコマンドを実行します。

        $ sudo npm update -g cordova


特定のバージョンをインストールするには、この構文を使用します。

        $ sudo 故宮をインストール-g cordova@3.1.0


実行 `cordova -v` を現在実行中のバージョンを参照してください。 実行、 `npm
info` をその他の利用可能なバージョン番号と共に現在のバージョンを含む長い一覧のコマンド。

        $ npm info cordova


コルドバ 3.0 は、このセクションで説明されているコマンド ライン インターフェイスをサポートするために最初のバージョンです。 前述のように、新しいプロジェクトを作成し、古いアプリケーション資産の最上位レベルにコピーする必要があります 3.0 以前のバージョンから更新する場合は `www` ディレクトリ。 該当する場合は、3.0 へのアップグレードに関する詳細はプラットフォームのガイドで利用できます。 アップグレードした後、 `cordova` コマンド ライン インターフェイスおよび使用 `npm update` 現在滞在より時間のかかる手順には、もはや関連。
