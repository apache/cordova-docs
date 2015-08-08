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

# Windows Phone 8 プラットフォーム ガイド

このガイドは、Windows Phone デバイスの Cordova アプリを展開する SDK の開発環境を設定する方法を示します。 Windows Phone 8 に焦点を当てていますが、Windows Phone 7 のサポートする方法について詳細に説明します。

ツールを使用するか Windows Phone 固有シェルを生成し、アプリケーションを構築する方法を示しています。 またはクロス プラットフォーム コルドバ CLI コマンド ライン インターフェイスでの議論。 （これらの開発のワークフローの比較の概要」を参照）。また、Visual Studio 内で変更することができますようにする Cordova アプリを開く方法についても説明します。 どちらの作成方法に関係なく必要があります Windows Phone SDK をインストールする以下のとおりです。

Windows Phone プラットフォームに固有の詳細については、次を参照してください。

*   Windows Phone 8 プラグイン
*   Windows Phone 8 をアップグレードします。

Windows Phone 8 プラットフォーム コルドバ WebView に依存しているインターネット エクスプ ローラー 10 そのレンダリング エンジンとして、実際問題としてコルドバ Api の呼び出しは、web コンテンツをテストする IE10 の強力なデバッガーを使用できるようにします。 Windows Phone 開発者ブログは対等な WebKit ブラウザーと一緒に IE10 をサポートする方法について[有用なガイダンス][1]を提供します。

 [1]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx

## 要件、およびサポート

次が必要です。

*   Windows 8 Pro をインストール ディスクまたは*ISO*ディスク イメージ ファイルのどちらかの 64 ビット バージョンです。 評価版は[マイクロソフトの開発者ネットワーク][2]で利用可能です。 Pro バージョンは、デバイス エミュレーターを実行する必要です。

*   [Windows Phone SDK][3].

*   Windows Phone 8.0 SDK とコマンドライン経由で展開するために、 [Visual Studio 2012 更新プログラム 2][4]をインストールしなければなりません。

 [2]: http://msdn.microsoft.com/en-US/evalcenter/jj554510
 [3]: http://www.microsoft.com/en-us/download/details.aspx?id=35471
 [4]: https://support.microsoft.com/en-us/kb/2797912

Cordova アプリの Windows Phone デバイスを開発する Windows を実行して PC を使用することがありますが可能性がありますも開発する mac では、仮想マシン環境を実行することによって、またはデュアル ブートするブート キャンプを使用して Windows パーティション。 Mac で必要な Windows 開発環境を設定するこれらのリソースを参照してください。

*   **VMWare Fusion**: Windows 8 の仮想マシンをセットアップする[マイクロソフトの開発者ネットワーク][5]、によって提供される指示に従い、SDK にバンドルされているエミュレーターを実行する仮想環境の準備についての VMWare Fusion の設定を参照してください。

*   **平行線デスクトップ**: Windows 8 の仮想マシンをセットアップする[マイクロソフトの開発者ネットワーク][6]、によって提供される指示に従い、SDK にバンドルされているエミュレーターを実行する仮想環境の準備について平行線デスクトップを構成するを参照してください。

 [5]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426
 [6]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945424

<!--
- __VirtualBox__: To set up the Windows 8 virtual machine, follow the
  installation instructions provided by the [Microsoft Developer
  Network](http://msdn.microsoft.com/en-US/library/windows/apps/jj945425).

  2DO: virtualBox doesn't work yet; any extra config info?
-->

*   **ブート キャンプ**: Windows 8 パーティションをセットアップする[マイクロソフトの開発者ネットワーク][7]によって提供されるインストール指示に従ってください。.

 [7]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945423

PC 上で開発する場合、プロセッサは仮想化 (Intel の*VT-x* ) と[第 2 レベル アドレス変換 (SLAT)][8]をサポートしなければなりません。 [インテルのプロセッサをサポート リスト][9]を参照してください。 既定では、通常、BIOS 設定で有効にする必要がありますので、仮想化は無効です。 PC は、ハード ディスク空き容量の少なくとも 6.5 GB と 4 GB の RAM が必要です。

 [8]: http://en.wikipedia.org/wiki/Second_Level_Address_Translation
 [9]: http://ark.intel.com/Products/VirtualizationTechnology

## コルドバのシェル ・ ツールを使用してください。

SDK と一緒にコルドバの Windows Phone を中心としたシェル ・ ツールを使用する場合は、2 つの基本的なオプションがあります。

*   CLI で生成されたプロジェクト コードからローカル アクセスします。利用できる、 `platforms/wp8/cordova` ディレクトリを追加した後、 `wp8` プラットフォームは以下のとおりです。

*   [Cordova.apache.org][10]で別のディストリビューションからそれらをダウンロードします。 コルドバ分布にはプラットフォームごとに別々 のアーカイブが含まれています。 適切なアーカイブを展開してください `cordova-wp8\wp8` この場合、空のディレクトリ内。 関連するバッチ ユーティリティは、トップレベルで利用可能な `bin` ディレクトリ。 (より詳細な指示が必要な場合は、 **README**ファイルを参照して)。

 [10]: http://cordova.apache.org

これらのシェルのツールを作成、構築、および Windows Phone アプリケーションを実行することができます。 すべてのプラットフォームのプラグイン機能を有効にする追加のコマンド ライン インターフェイスについては、管理プラグインを使用して Plugman を参照してください。 詳細については、Windows Phone プラットフォームに固有のプラグイン、および Windows Phone 8 プラグインを開発する方法に関するガイダンスについては、アプリケーション ・ プラグインを参照してください。

## SDK をインストールします。

[Dev.windowsphone.com][11]の**ダウンロード**エリアから Windows Phone SDK の最新バージョンをインストールします。 もっと最近エミュレーター更新プログラム パッケージをインストールすることも可能性があります。

 [11]: https://dev.windowsphone.com/en-us/downloadsdk

![][12]

 [12]: {{ site.baseurl }}/static/img/guide/platforms/wp8/wp8_downloadSDK.png

## 新しいプロジェクトを作成します。

この時点で、新しいプロジェクトを作成する、コマンド ライン インターフェイスまたは Windows Phone 固有のシェル ツール セットで説明するクロス プラットフォーム CLI ツールの間に選択できます。 ソース コード ディレクトリ内からの場合、CLI アプローチここです：

        > cordova create hello com.example.hello HelloWorld
        > cd hello
        > cordova platform add wp8


ここでは、対応する下位レベル シェル ツール アプローチ：

        C:\path\to\cordova-wp8\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld


## プロジェクトをビルドします

開発で CLI を使用している場合は、プロジェクト ディレクトリの最上位 `www` ディレクトリにソース ファイルが含まれています。アプリを再構築するには、プロジェクト ディレクトリ内のこれらのいずれかを実行します。

        > cordova build
        > cordova build wp8   # do not rebuild other platforms


開発で Windows Phone 固有のシェルのツールを使用している場合、別のアプローチがあります。 プロジェクトを生成した後、既定のアプリケーションのソースは、 `projects\wp8\www` サブディレクトリ。 以降のコマンドは、 `cordova` 、同じレベルのサブディレクトリ。

`build`コマンドをプロジェクト ファイルを消去して、アプリを再構築します。最初の例では、デバッグ情報を生成して、2 番目のリリースのアプリに署名します。

        C:\path\to\project\cordova\build.bat --debug
        C:\path\to\project\cordova\build.bat --release


`clean`コマンドは準備として、次のディレクトリを洗い流すのに役立ちます `build` :

        C:\path\to\project\cordova\clean.bat


## エミュレーターへの展開します。

この時点で使用することができます、 `cordova` CLI ユーティリティ コマンドラインからエミュレーターにアプリケーションを配置します。

        > cordova emulate wp8


それ以外の場合、代替シェル インターフェイスを使用します。

        C:\path\to\project\cordova\run


既定で、 `run` スクリプト エミュレーター フラグを呼び出すし、追加のビルド フラグを受け入れる `--debug` 、既定値を提供します。

        C:\path\to\project\cordova\run --emulator --debug
        C:\path\to\project\cordova\run --emulator --release
        C:\path\to\project\cordova\run --emulator --nobuild


エミュレーターはインストールされているアプリケーションとデバイス イメージを起動します。 ホーム画面から、 **HelloWorld**アプリケーションを起動するアプリのパネルに移動します。これはメイン インタ フェースに続いてそのスプラッシュ画面を起動するアプリを示しています。

![][13]

 [13]: {{ site.baseurl }}/static/img/guide/platforms/wp8/wp8_emulator.png

デバイスの画面の右上に、エミュレーターの基本的なコントロールを縦向きと横向きに切り替えることができます。 **>**ボタンより複雑な方向とジェスチャをテストすることができますより多くのコントロールが表示されます。

![][14]

 [14]: {{ site.baseurl }}/static/img/guide/platforms/wp8/wp8_emulator_orient.png

これらの高度なコントロールを使用または動きのシーケンスをシミュレートするデバイスの場所を変更するしたりすることもできます。

![][15]

 [15]: {{ site.baseurl }}/static/img/guide/platforms/wp8/wp8_emulator_loc.png

## デバイスへの配置します。

デバイス上でアプリケーションをテストする前に、デバイスを登録する必要があります。 Windows Phone 8 でテストおよび展開する方法の詳細については、 [Microsoft のマニュアル][16]を参照してください。 また、携帯電話は、コンピューターに接続されているし、画面がロックされているかどうかを確認します。

 [16]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565.aspx

その後、デバイス上のアプリを実行するには、次の CLI コマンドを実行します。

    > cordova run wp8


この低レベルのシェル コマンドに対応しています。

    C:\path\to\project\cordova\run --device


代わりに、Visual Studio で作業する場合は、トップ、押します**再生**緑の近隣にはボタンまたは他の**f5 キーを押して**にドロップ ダウン メニューから**Windows Phone デバイス**を選択します。.

## SDK でプロジェクトを変更します。

一度上記のように Cordova アプリを構築する SDK で開くことができます。 様々 な `build` コマンドは、Visual Studio のソリューション (*.sln*) ファイルを生成します。 Visual Studio 内のプロジェクトを変更するファイルを開きます。 Web ベースのソース コードは、プロジェクト内で利用可能な `www` ディレクトリ。 その他のツールと一緒に、SDK を提供します、メニューの下のコントロールは、Windows Phone エミュレーターでアプリケーションを起動することができます。

![][17]

 [17]: {{ site.baseurl }}/static/img/guide/platforms/wp8/wp8_vs.png

コルドバのコマンド ライン ツールまたは SDK には、ワークフローで使用する方法についてのアドバイスは、「概要」を参照してください。 コルドバ CLI は日常的に SDK で使用されるプラットフォーム固有のファイルを上書きするクロスプラット フォームのソース コードに依存します。 SDK 内で作業する場合、CLI に代わるものとして、低レベルのシェル ・ ツールを使用します。
