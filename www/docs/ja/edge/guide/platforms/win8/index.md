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

# Windows プラットフォームのガイド

このガイドでは、構築および Windows 10 普遍的なアプリケーション プラットフォーム、Windows Phone 8.1 Windows 8.1 Windows 8 の Cordova アプリを展開する SDK の開発環境を設定する方法を示しています。 シェル ツールを使用して生成し、アプリケーションを構築する方法を示します。 またはクロスプラット フォーム コルドバ CLI コマンド ライン インターフェイスでの議論。 (これら開発オプションの比較の概要」を参照してください)。このセクションでは、Visual Studio 内でコルドバのアプリを変更する方法も示します。 、採用するアプローチに関係なくあなたは、次のよう Visual Studio SDK をインストールする必要があります。

既存の Windows 8 コルドバ プロジェクトをアップグレードする方法の詳細については、Windows 8 のアップグレードを参照してください。

別のプラットフォームとしてのウィンドウ携帯電話 8 (wp8） 滞在詳細については Windows Phone 8 プラットフォーム ガイド参照してください。

コルドバ web 表示の Windows で実行されているインターネット エクスプ ローラー 10 (Windows 8.0) と依存インターネット エクスプ ローラー 11 (Windows 8.1 および Windows Phone 8.1) そのレンダリング エンジンとして、実際の問題としてコルドバ Api の呼び出しは、web コンテンツをテストする IE の強力なデバッガーを使用できるようにします。 Windows Phone 開発者ブログ サポート IE と同等の WebKit ブラウザーと一緒にする方法の[有益なガイダンス][1]を提供します。

 [1]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx

## 要件、およびサポート

Windows プラットフォーム用のアプリを開発するには、必要があります。

*   最低 4 GB の RAM と Windows 8.1 では、32 ビットまたは 64 ビット マシン (*ホーム*、 *Pro*、または*エンタープライズ*エディション)。

*   Windows 8.0、8.1 または 10、32 または 64 ビット*ホーム*、 *Pro*、または[Visual Studio 2012 Express][2]または Visual Studio 2013 と共に、*エンタープライズ*版。 Visual Studio 2015 は Windows 8.0 アプリケーションを構築できません。

 [2]: http://www.visualstudio.com/downloads

アプリの開発 Windows 8.0 および 8.1 (Windows Phone 8.1 を含む)。

*   Windows 8.1 または Windows 10、32 または 64 ビット*ホーム*、 *Pro*、または[Visual Studio 2013 Express][2]と共に以上の*エンタープライズ*エディション。 Windows 8.1 エンタープライズの評価版は[マイクロソフト開発者ネットワーク][3]から利用可能です.

*   Windows Phone エミュレーターは、Windows 8.1 (64) プロフェッショナル ・ エディションの[クライアント HYPER-V とセカンド レベル アドレス変換 (SLAT)][4]をサポートするプロセッサとより高い、または。 Windows 8.1 エンタープライズの評価版は[マイクロソフト開発者ネットワーク][3]から利用可能です.

*   [Windows 用の visual Studio 2013][5](急行またはより高い)。

 [3]: http://msdn.microsoft.com/en-US/evalcenter/jj554510
 [4]: https://msdn.microsoft.com/en-us/library/windows/apps/ff626524(v=vs.105).aspx#hyperv
 [5]: http://www.visualstudio.com/downloads/download-visual-studio-vs#d-express-windows-8

10 Windows 用アプリの開発。

*   Windows 8.1 または Windows 10 テクニカル プレビュー 2、32 ビットまたは 64 ビット、 [Visual Studio 2015 RC][6]と一緒に以上。

 [6]: http://www.visualstudio.com/preview

アプリの互換性は、アプリケーションが対象とする OS によって決定されます。 アプリは、前方互換がない下位互換、8.0 で Windows 8.1 をターゲット アプリケーションは実行できませんが、8.1 8.0 用に構築されたアプリケーションを実行できます。

Windows ストアにアプリを提出する[windowsstore.com][7]で指示に従います。

 [7]: http://www.windowsstore.com/

Windows の Cordova アプリの開発には、Windows を実行する PC を使用しますが、仮想マシン環境を実行することによって、またはデュアル ブート Windows 8.1 のパーティションにブート キャンプを使用しては、また mac で開発することがあります。 Mac で必要な Windows 開発環境を設定するこれらのリソースを参照してください。

*   [VMWare Fusion][8]

*   [Parallels Desktop][9]

*   [Boot Camp][10]

 [8]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426
 [9]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945424
 [10]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945423

## コルドバのシェル ・ ツールを使用してください。

SDK と一緒にコルドバの Windows 中心のシェル ・ ツールを使用する場合は、2 つの基本的なオプションがあります。

*   CLI で生成されたプロジェクト コードからローカルでアクセスします。利用できる、`platforms/windows/`ディレクトリ以下の説明に従って、 `windows`プラットフォームを追加した後。

*   [cordova.apache.org][11]で別のディストリビューションからそれらをダウンロードします。 コルドバの配布には、プラットフォームごとに別々 のアーカイブが含まれています。 必ず空のディレクトリ内でこのような場合は、適切なアーカイブ、`コルドバ windows`を展開してください。 `package/bin`ディレクトリに関連するバッチ ユーティリティがあります。 (必要に応じてより詳細な指示について**README**ファイルを参照して)。

 [11]: https://www.apache.org/dist/cordova/platforms/

これらのシェルのツールを作成、構築、および Windows アプリケーションを実行することができます。 すべてのプラットフォームのプラグイン機能を有効にする追加のコマンド ライン インターフェイスについては、管理プラグインを使用して Plugman を参照してください。

## SDK をインストールします。

[Visual Studio][2]の要件が上記のバージョンと一致するの任意のエディションをインストールします。

![][12]

 [12]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_installSDK.png

Windows 10、Visual Studio インストーラーには普遍的な Windows アプリケーションを構築するためのツールをインストールするオプションがあります。 このオプションが必要な SDK をインストールするのをインストールするときに選択されているを確認する必要があります。

## 新しいプロジェクトを作成します。

この時点で、新しいプロジェクトを作成する、コマンド ライン インターフェイスまたは一連の Windows 固有のシェル ツールで説明されているクロスプラット フォームの CLI ツール間できます。 以下の CLI 接近は、 *HelloWorld*をという名前の新しい`ハロー`プロジェクト ディレクトリ内にあるアプリを生成します。

        > cordova create hello com.example.hello HelloWorld
        > cd hello
        > cordova platform add windows


ここでは、対応する下位レベル シェル ツール アプローチ：

        C:\path\to\cordova-windows\package\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld


このプロジェクトは、既定のターゲット OS として Windows 8.1 を対象します。 8.0 や 10.0 は、すべてのビルドの (以下「構成ターゲット Windows 版」を参照してください) をターゲットすることができます。 または、ビルドごとに特定特定バージョン対象とします。

## プロジェクトをビルドします

開発で CLI を使用している場合は、プロジェクト ディレクトリの最上位 `www` ディレクトリにソース ファイルが含まれています。アプリを再構築するには、プロジェクト ディレクトリ内のこれらのいずれかを実行します。

        > cordova build
        > cordova build windows              # do not rebuild other platforms
        > cordova build windows   --debug    # generates debugging information
        > cordova build windows   --release  # signs the apps for release


ここでは、対応する下位レベル シェル ツール アプローチ：

        C:\path\to\project\cordova\build.bat --debug
        C:\path\to\project\cordova\build.bat --release


`clean`コマンドは準備として、次のディレクトリを洗い流すのに役立ちます `build` :

        C:\path\to\project\cordova\clean.bat


## 対象の Windows のバージョンを構成します。

既定の`build`によってコマンドは、2 つのパッケージを生成されます: Windows 8.0 と Windows Phone 8.1。 バージョン 8.1 コンフィグレーション ファイル (`config.xml`に次の構成設定を追加する必要がありますに Windows パッケージをアップグレードするには).

        <preference name="windows-target-version" value="8.1" />


追加するこの設定`build`コマンド Windows 8.1 および Windows Phone 8.1 のパッケージを生産開始されます。

### --appx パラメーター

特定の OS をターゲット アプリケーションの特定のバージョンをビルドすることもできます (たとえば、設定した Windows 10 を対象とするが、Windows Phone 8.1 用に構築する場合)。 これを行うには、するには、 `--appx`パラメーターを使用します。

        > cordova build windows -- --appx=8.1-phone


ビルド システムでは、設定は、ターゲットの Windows バージョン用の config.xml の設定を無視し、厳密に Windows Phone 8.1 のパッケージを構築します。

`8.1-win`、 `8.1-phone`、 `uap` (Windows 10 ユニバーサルアプリ) のため、 `--appx`フラグの有効な値。 これらのオプションは、`cordova run`コマンドにも適用されます。

### ターゲットの Windows バージョンの考慮事項

Windows 10 コルドバ アプリ (と一般的に HTML アプリケーション) の新しい「リモート」モードをサポートしています。 このモードにより、アプリの DOM 操作とインライン スクリプトの使用などの一般的な web のパターンを使用する点ではるかに自由が公共の Windows ストアに提出するとき一連の機能を減らすことによってアプリを使用可能性があります。 Windows 10 とリモート モードの詳細については、 [Windows 10 コルドバ][13]のドキュメントを見てください。

 [13]: win10-support.md.html

リモート モードを使用している場合、開発者がスクリプト注入攻撃を防ぐために、アプリケーションにコンテンツ セキュリティ ポリシー (CSP) を適用することをお勧めします。

## アプリを展開します。

Windows パッケージを展開。

        > cordova run windows -- --win  # explicitly specify Windows as deployment target
        > cordova run windows # `run` uses Windows package by default


Windows Phone のパッケージを展開するには。

        > cordova run windows -- --phone  # deploy app to Windows Phone 8.1 emulator
        > cordova run windows --device -- --phone  # deploy app to connected device


**cordova run windows --list**を使用して、すべての使用可能なターゲットすることができますと**cordova run windows --target=target_name \-- -|-phone**特定のデバイスまたはエミュレーターでアプリケーションを実行する (たとえば、`cordova run windows --target="Emulator 8.1 720P 4.7 inch" -- --phone`).

**コルドバ実行 - ヘルプ**は、追加のビルドを表示し、オプションを実行するもできます。

## SDK でプロジェクトを開き、アプリを展開します。

前述のように Cordova アプリをビルドすると、Visual Studio で開くことが。 様々 な`構築`コマンドは、Visual Studio のソリューション (*.sln*) ファイルを生成します。 Visual Studio 内のプロジェクトを変更するのにはファイル エクスプ ローラーでファイルを開きます。

![][14]

 [14]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_openSLN.png

`CordovaApp`コンポーネントは、ソリューション内で表示し、 `www`ディレクトリに`index.html`ホーム ページを含む web ベースのソース コードが含まれています。

![][15]

 [15]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk.png

Visual Studio のメイン メニューの下にあるコントロールでは、テストまたはアプリケーションを配置することができます。

![][16]

 [16]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_deploy.png

**ローカル コンピューター**を選択、Visual Studio を実行している同じマシン上でアプリケーションをインストールするのには緑の矢印を押します。そうと、アプリが Windows 8 のアプリ一覧に表示されます。

![][17]

 [17]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_runApp.png

アプリを再構築するたびに、インターフェイスのバージョンが更新されます。

アプリ一覧に表示する、メイン画面にピン留めする**CTRL**キーを押しながらアプリケーションを選択できます。

![][18]

 [18]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_runHome.png

メモ仮想マシン環境内でアプリケーションを開いた場合は、コーナーでまたはアプリの切り替えや追加機能にアクセスする windows の側面に沿ってをクリックする必要があります。

![][19]

 [19]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_run.png

また、タブレット デバイス上で実行されているかのようにアプリを表示するのには**シミュレータ**導入オプションを選択します。

![][20]

 [20]: {{ site.baseurl }}/static/img/guide/platforms/win8/win8_sdk_sim.png

デスクトップの展開とは異なり、このオプションでは、タブレットの向き、場所をシミュレートし、そのネットワーク設定を変更することができます。

**注**: あなたのワークフローでコルドバのコマンド ライン ツールまたは SDK を使用する方法についてのアドバイスの概要を参照してください。 コルドバの CLI は、日常的に SDK で使用されるプラットフォーム固有のファイルを上書きするクロスプラット フォームのソース コードに依存します。 SDK を使用して、プロジェクトを変更する場合は、CLI の代わりに低レベルのシェル ・ ツールを使用します。
