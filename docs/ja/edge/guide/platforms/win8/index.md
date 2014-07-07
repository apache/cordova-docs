* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Windows 8 プラットフォーム ガイド

このガイドは、Windows 8 の Cordova アプリを展開する SDK の開発環境を設定する方法を示します。 Windows 8 に固有のどちらかのシェルのツールを使用して生成し、アプリケーションを構築する方法を示します。 またはクロス プラットフォーム コルドバ CLI コマンド ライン インターフェイスでの議論。 （これらの開発オプション比較の概要」を参照）。また、Visual Studio 内で Cordova アプリを変更する方法についても説明します。 どちらの作成方法に関係なく下記のような Visual Studio SDK をインストールする必要はあります。

既存の Windows 8 コルドバ プロジェクトをアップグレードする方法の詳細については、Windows 8 のアップグレードを参照してください。

コルドバ web 表示 Windows 8 を実行しているインターネット エクスプ ローラー 10 として頼る、レンダリング エンジンは、実際の問題としてコルドバ Api の呼び出しは、web コンテンツをテストする IE10 の強力なデバッガーを使用できるように。 Windows Phone 開発者ブログは対等な WebKit ブラウザーと一緒に IE10 をサポートする方法について[有用なガイダンス][1]を提供します。

 [1]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx

## 要件、およびサポート

次の OS/SDK の組み合わせ、インストール ディスクまたは*ISO*ディスク イメージ ファイルからのいずれか必要があります。

*   8.0 もしくは 8.1 Windows、32 ビットまたは 64 ビット*ホーム*、 *Pro*、または*エンタープライズ*エディションでは、 [Visual Studio 2012 Express][2]と共に.

*   Windows 8.1、32 または 64 ビット*ホーム*、 *Pro*、または*エンタープライズ*エディションでは、 [Visual Studio 2013 Pro][2]と共にまたはより高い。 Windows 8.1 エンタープライズの評価版は[マイクロソフトの開発者ネットワーク][3]から利用可能.

 [2]: http://www.visualstudio.com/downloads
 [3]: http://msdn.microsoft.com/en-US/evalcenter/jj554510

Windows 8.1 でコンパイルしたアプリケーションは*いない*Windows 8.0 の下で実行します。Windows 8.0 でコンパイルしたアプリケーションは転送-互換性のある 8.1 で。

<!-- 64-bit necessary? Pro necessary? ELSE still recommended for parallel WP dev -->

Windows ストアにアプリを提出する[windowsstore.com][4]に記載された手順に従ってください。

 [4]: http://www.windowsstore.com/

<!-- true? -->

Windows 8 向け Cordova アプリを開発する Windows を実行して PC を使用することがありますが、仮想マシン環境を実行して、またはを使用してブート キャンプをデュアル ブート Windows 8 パーティションも mac では、開発可能性があります。 Mac で必要な Windows 開発環境を設定するこれらのリソースを参照してください。

*   [VMWare 融解][5]

*   [平行線デスクトップ][6],

*   [ブート キャンプ][7].

 [5]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426
 [6]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945424
 [7]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945423

## コルドバのシェル ・ ツールを使用してください。

SDK と一緒にコルドバの Windows 8 中心のシェル ・ ツールを使用する場合は、2 つの基本的なオプションがあります。

*   CLI で生成されたプロジェクト コードからローカル アクセスします。 利用できる、 `platforms/windows8/cordova` ディレクトリを追加した後、 `windows8` プラットフォームは以下のとおりです。

*   [Cordova.apache.org][8]で別のディストリビューションからそれらをダウンロードします。 コルドバ分布にはプラットフォームごとに別々 のアーカイブが含まれています。 適切なアーカイブを展開してください `cordova-windows8\windows8` この場合、空のディレクトリ内。 関連するバッチ ユーティリティは、トップレベルで利用可能な `bin` ディレクトリ。 (より詳細な指示が必要な場合は、 **README**ファイルを参照して)。

 [8]: http://cordova.apache.org

これらのシェルのツールを作成、構築、および Windows 8 アプリを実行することができます。 すべてのプラットフォームのプラグイン機能を有効にする追加のコマンド ライン インターフェイスについては、管理プラグインを使用して Plugman を参照してください。

## SDK をインストールします。

*究極*、*プレミアム*、または[Visual Studio][2]の*Professional* 2013 エディションをインストールします。.

![][9]

 [9]: img/guide/platforms/win8/win8_installSDK.png

## 新しいプロジェクトを作成します。

この時点で、新しいプロジェクトを作成する、コマンド ライン インターフェイスまたは Windows 8 固有のシェルのツールのセットで説明するクロス プラットフォーム CLI ツールの間に選択できます。 ソース コード ディレクトリ内でこの CLI 接近が生成する新しい内*HelloWorld*という名前のアプリ `hello` プロジェクト ディレクトリ。

        > cordova create hello com.example.hello HelloWorld
        > cd hello
        > cordova platform add windows8
        > cordova build
    

ここでは、対応する下位レベル シェル ツール アプローチ：

        C:\path\to\cordova-win8\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld
    

## プロジェクトをビルドします

開発で CLI を使用している場合は、プロジェクト ディレクトリの最上位 `www` ディレクトリにソース ファイルが含まれています。アプリを再構築するには、プロジェクト ディレクトリ内のこれらのいずれかを実行します。

        > cordova build
        > cordova build windows8   # do not rebuild other platforms
    

開発で Windows Phone 固有のシェルのツールを使用している場合、別のアプローチがあります。 プロジェクトを生成した後、既定のアプリケーションのソースは、 `projects\windows8\www` サブディレクトリ。 以降のコマンドは、 `cordova` 、同じレベルのサブディレクトリ。

`build`コマンドをプロジェクト ファイルを消去して、アプリを再構築します。最初の例では、デバッグ情報を生成して、2 番目のリリースのアプリに署名します。

        C:\path\to\project\cordova\build.bat --debug        
        C:\path\to\project\cordova\build.bat --release
    

`clean`コマンドは準備として、次のディレクトリを洗い流すのに役立ちます `build` :

        C:\path\to\project\cordova\clean.bat
    

## SDK でプロジェクトを開き、アプリを展開します。

一度上記のように Cordova アプリをビルドする Visual Studio で開くことができます。 様々 な `build` コマンドは、Visual Studio のソリューション (*.sln*) ファイルを生成します。 Visual Studio 内のプロジェクトを変更するファイル エクスプ ローラーでファイルを開きます。

![][10]

 [10]: img/guide/platforms/win8/win8_sdk_openSLN.png

`CordovaApp`、ソリューション内でコンポーネントが表示されますとその `www` ディレクトリに web ベースのソース コードが含まれていますを含む、 `index.html` ホーム ページ。

![][11]

 [11]: img/guide/platforms/win8/win8_sdk.png

Visual Studio のメイン メニューの下のコントロールをテストしたり、アプリを展開することができます。

![][12]

 [12]: img/guide/platforms/win8/win8_sdk_deploy.png

**ローカル コンピューター**を選択、Visual Studio を実行している同じマシン上のアプリのインストールに緑色の矢印キーを押します。そうと、Windows 8 アプリ一覧にアプリが表示されます。

![][13]

 [13]: img/guide/platforms/win8/win8_sdk_runApp.png

アプリケーションをリビルドするたびに、インターフェイスのバージョンが更新されます。

一度利用できるアプリの一覧で、メイン画面にピン留めすることができます**CTRL**キーを押したまま、アプリを選択します。

![][14]

 [14]: img/guide/platforms/win8/win8_sdk_runHome.png

メモ仮想マシン環境内でアプリケーションを開いた場合、コーナーでまたはアプリを切り替えるか、追加機能にアクセスする windows の側面に沿ってをクリックする必要があります。

![][15]

 [15]: img/guide/platforms/win8/win8_sdk_run.png

代わりに、タブレット デバイスで実行されていたかのようにアプリケーションを表示する**シミュレータ**の展開オプションを選択します。

![][16]

 [16]: img/guide/platforms/win8/win8_sdk_sim.png

デスクトップの展開とは異なりこのオプションはタブレットの方向、場所をシミュレートし、そのネットワーク設定を変更することができます。

**注**: コルドバのコマンド ライン ツールまたは SDK には、ワークフローで使用する方法についてのアドバイスの概要を参照してください。 コルドバ CLI は日常的に SDK で使用されるプラットフォーム固有のファイルを上書きするクロスプラット フォームのソース コードに依存します。 SDK を使用して、プロジェクトを変更する場合は、CLI に代わるものとして、低レベルのシェル ・ ツールを使用します。