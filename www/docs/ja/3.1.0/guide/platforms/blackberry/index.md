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

# BlackBerry プラットフォーム ガイド

このガイドはターゲット用のアプリケーションをバージョン 10 より前の BlackBerry プラットホーム SDK 環境を設定する方法を示します。 場合は、最新のバージョンをターゲットにする BlackBerry 10 プラットフォーム ガイドを参照してください。 詳細なプラットフォーム固有の情報は、次を参照してください。

*   ブラックベリーの構成
*   ブラックベリーのアップグレード
*   ブラックベリーのプラグイン
*   ブラックベリーのコマンド ライン ツール

上記のコマンド ライン ツールはコルドバ 3.0 より前のバージョンを参照してください。現在のインタ フェースについての情報は、コマンド ライン インターフェイスを参照してください。

## 要件、およびサポート

ブラックベリーのこのバージョンでサポートされていない、 `cordova` ユーティリティのコマンド ライン インターフェイスで、しかし、コマンド ライン ツールの別個のセットによって記述されています。 [Cordova.apache.org][1]から、コルドバのディストリビューションをダウンロードします。.

 [1]: http://cordova.apache.org/#download

コルドバのブラックベリーのためには、[ブラックベリー WebWorks フレームワーク][2]Windows XP (32 ビット) のために利用可能である Windows 7 （32 ビットおよび 64 ビット)、および Mac (OS X 10.6.4+) が依存しています。 WebWorks アプリケーションことができます*だけ*で次の BlackBerry のプラットフォーム上に展開します。

 [2]: https://bdsc.webapps.blackberry.com/html5

*   ブラックベリー OS 5.0 およびより高い
*   ブラックベリー脚本
*   ブラックベリー 10 （QNX）

WebWorks は、Java 開発キット (JDK) が必要です。 Windows、 [Oracle JDK][3]の 32 ビット バージョンを使用します。 内の Java は[、別途インストール][4]する必要がありますバージョン 10.7, まで Mac OS X に既定でインストール。 Mac 上に Java のインストールの一部である Apache Ant も必要です。 Windows のバージョンが[ant.apache.org][5]から利用可能.

 [3]: http://www.oracle.com/technetwork/java/javase/downloads/index.html#jdk
 [4]: http://support.apple.com/kb/DL1421
 [5]: http://ant.apache.org/bindownload.cgi

## SDK をインストールします。

ダウンロードして、適切な WebWorks 開発用の SDK をインストールします。ブラックベリー脚本は、BlackBerry スマート フォン WebWorks Sdk は、次の場所からダウンロードできます。

*   \[ブラックベリー戦略 SDK\](https://developer.blackberry.com/html5/download/#playbook) と[Adobe Air SDK][6]

*   \[ブラックベリー スマート フォン SDK\](https://developer.blackberry.com/html5/download/#smartphones)

 [6]: http://www.adobe.com/devnet/air/air-sdk-download.html

## 署名キーを登録します。

ブラックベリー App の世界、または実際のデバイスでアプリケーションを公開したい場合は無料コード署名キーのセットを登録する必要があります。 これを行うに、[ブラックベリーのキー注文フォーム][7]を完了します。 署名のキーを受け取ったら、セットアップが必要です。 情報のための[ブラックベリー WebWorks/HTML5 web サイト][8]を参照してください。

 [7]: https://www.blackberry.com/SignedKeys
 [8]: https://developer.blackberry.com/html5/documentation/signing_setup_bb10_apps_2008396_11.html

## コルドバをインストールします。

ダウンロードし、[コルドバ][1]の最新のコピーを抽出.

## 新しいプロジェクトを設定します。

*   コマンド ライン ターミナルを開き、コルドバを解凍した場所に移動します。

*   コルドバをサポートしている各プラットフォーム用のディレクトリがあります。移動し、 `blackberry` ディレクトリ。

*   `blackberry`ディレクトリにいくつかのサブディレクトリが含まれています。 `example`ディレクトリにコルドバの完全なプロジェクトが含まれています。 コピー、 `example` 、コンピューター上の別の場所にディレクトリが移動します。

*   編集、 `project.properties` ファイルを使用して WebWorks SDK を指定します。 たとえば、ここではブラックベリー脚本は、BlackBerry スマート フォン (OS5-7)、またはブラックベリー 10 （QNX） のそれぞれの設定です。
    
        playbook.bbwp.dir=C:\\Program Motion\\BlackBerry WebWorks SDK で Files\\Research TabletOS 2.1.0.6\\bbwp blackberry.bbwp.dir=C:\\Program Motion\\BlackBerry WebWorks パッケー ジャーで Files\\Research qnx.bbwp.dir=C:\\Program ファイル (86) \\Research In Motion\\BlackBerry 10 WebWorks SDK 1.0.2.9 用
        

プロジェクトのビルド時に指定したパラメーターに対応します。これらのコマンドを実行する最初の時間"HelloWorld"アプリケーションを生成します。

        コルドバ/ビルド脚本コルドバ/ビルド ブラックベリー コルドバ/ビルド qnx
    

SDK と一緒にもコード署名キーおよびデバッグ トークンを登録する必要があります。 署名キーでは BlackBerry の世界を通じてアプリケーションを配布することができます。 デバッグ トークン ブラックベリー エミュレーターまたはデバイス上の符号なしのアプリをテストすることができます。 作成し、デバッグ トークン; 自分でインストールする必要はありません。キーストアのパスワードする場合ビルド スクリプトを作成し、あなたのためのデバッグ トークンをインストールします。 署名のキーを設定するには、ウェブサイトに行く、ブラックベリーを取得する、指定したパスワードを保持することを確かめます。 実行して、 `blackberry-signer` ユーティリティ、SDK に含まれています。 ブラックベリーここでより多くの情報を提供します。

*   [コード署名キーを登録します。][9]

*   [コードの署名用にコンピューターを設定します。][10]

*   [SDK 環境を設定する包括的なガイド][11]

 [9]: https://www.blackberry.com/SignedKeys/codesigning.html
 [10]: http://developer.blackberry.com/html5/documentation/set_up_for_signing.html
 [11]: http://developer.blackberry.com/native/documentation/bb10/com.qnx.doc.native_sdk.quickstart/topic/set_up_your_environment.html

## エミュレーターへの展開します。

Windows には、blackBerry スマート フォンのエミュレーターはのみです。 ブラックベリー脚本のエミュレーターは、VMWare プレーヤー （Windows） または VMWare Fusion (Mac OS X) が必要です。 WebWorks SDK 提供既定エミュレーターが[ブラックベリーを介して][12]利用できる追加のエミュレーター.

 [12]: http://us.blackberry.com/developers/resources/simulators.jsp

プロジェクト ディレクトリで、入力 `./cordova/run <target>` 、交換 `<target>` どちらかと `qnx` 、 `playbook` 、または `blackberry` 。 そのブラックベリー 10 と脚本は、エミュレーターの仮想イメージする必要があります既に開始されているに注意してください。

詳細については以下を参照してください。

*   [ブラックベリー脚本][13]

*   [BlackBerry スマート フォン][14]

 [13]: https://developer.blackberry.com/html5/documentation/using_the_tablet_simulator_1866980_11.html
 [14]: https://developer.blackberry.com/html5/documentation/run_your_app_on_smartphone_sim_1876976_11.html

ブラックベリー脚本、編集、 `project.properties` ファイルをカスタマイズする、 `playbook.sim.ip` および `playbook.sim.password` プロパティ。 エミュレーターの IP アドレスは、ホーム画面上**の設定**アプリケーションを通して利用できます。 有効にすると、**のセキュリティとプライバシー → 開発モード**アドレスを表示するオプション。 パスワードは、**セキュリティとプライバシー** ] タブで設定することもできます。

BlackBerry スマート フォンの編集、 `project.properties` ファイルをカスタマイズする、 `blackberry.sim.dir` および `blackberry.sim.bin` プロパティ。 例えば windows では、ディレクトリ パスを指定するときにパス区切り記号をエスケープする必要があります。`C:\\Program
Files\\BlackBerry\\Simulator`.

エミュレーターがインストールされ、実行されている、一度、ホーム画面にアプリケーションをインストールするには、次のいずれかを実行します。

        コルドバ/実行脚本コルドバ/実行ブラックベリー
    

場合は、デバイスがお使いのコンピューターに接続されているかどうかを求められたら、[いいえ。

**注：**アプリケーションがインストールされているブラックベリー OS 5、 `Downloads` ディレクトリ。

## デバイスへの配置します。

アプリをデバイスに展開する、それを接続する必要があります、そして、コード署名キーを上記のように登録する必要があります。 また、ブラックベリー戦略上のアプリを展開する、**の設定 → セキュリティ → 開発モード**オプションが有効になっている必要があります。

ブラックベリー脚本の編集、 `project.properties` ファイルし、変更を反映するデバイスの ip アドレスとパスワードとして挙げた、に沿って署名キーのパスワードを設定すると、次の：

プロジェクト ディレクトリで、入力 `./cordova/run <target>` 、交換 `<target>` どちらかと `qnx` 、 `playbook` 、または`blackberry`.

ブラックベリー スマート フォン (OS5 7) で指定する、 `blackberry.sigtool.password` として署名キー パスワードのプロパティです。

プロジェクトのディレクトリから、エミュレーターでアプリケーションを表示するにはコマンドのいずれかを実行します。

        コルドバ/実行脚本コルドバ/実行ブラックベリー
    

場合は、デバイスがお使いのコンピューターに接続されているかどうかを求められたら、[はい]。

**注：**アプリケーションがインストールされているブラックベリー OS 5、 `Downloads` ディレクトリ。

## 追加情報

次の記事ブラックベリー WebWorks フレームワークで構築されたアプリケーションを開発するときの一般的な問題を解決に役立つ可能性があります。

*   [ブラックベリー WebWorks 開発落とし穴][15]

*   [WebWorks アプリケーションをパッケージ化するためのベスト プラクティス][16]

 [15]: http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Common-BlackBerry-WebWorks-development-pitfalls-that-can-be/ta-p/624712
 [16]: https://bdsc.webapps.blackberrycom/html5/documentation/ww_developing/bestpractice_compiling_ww_apps_1873324_11.html