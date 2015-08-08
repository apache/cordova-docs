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

# Windows Phone 8 プラットフォーム ガイド

このガイドは、Windows Phone 8 デバイス用 Cordova アプリを展開する SDK の開発環境を設定する方法を示します。 7.5 および 8 のデバイスをターゲットにする場合は、代わりに Windows Phone 7 プラットフォームのガイド詳細 Windows Phone 7 の開発します。 バージョン 7 は、IE10 に含まれているすべての高度な機能を持っていないが、同じ Api のセットを実装します。 Windows Phone 8 アプリは*ない*Windows Phone 7 デバイス上で実行します。

詳細なプラットフォーム固有の情報を両方のバージョンに適用される次を参照してください。

*   Windows Phone のアップグレード
*   Windows Phone のプラグイン
*   Windows Phone のコマンド ライン ツール

上記のコマンド ライン ツールはコルドバ 3.0 より前のバージョンを参照してください。現在のインタ フェースについての情報は、コマンド ライン インターフェイスを参照してください。

## 1. システム要件

*   オペレーティング システム：

    *   Windows 8 または Windows 8 Pro
        *   64 ビット バージョンの Windows の （64） が、SDK に必要です。
        *   デバイス エミュレーターを実行できるようには、Pro バージョンの使用をお勧めします。

*   ハードウェア:

    *   6.5 GB のハード ディスク空き容量
    *   4 GB の RAM
    *   64 ビット (x64) の CPU

*   Windows Phone 8 エミュレーター

    *   電話エミュレーター使用ハイパー-V は、このリストにはこれらの前提が含まれています。
    *   Windows 8 Pro の 64 ビット エディションまたはそれ以上
    *   仮想化をサポートするプロセッサが必要ですと [2 番目のレベル アドレス変換 (SLAT)][1]
        *   [VT-x （仮想化） と EPT (SLAT) をサポートする Intel プロセッサのリスト][2]を見なさい
    *   通常これは既定で無効になっていると、BIOS 設定で仮想化機能 (すなわち、VT-x インテル) を有効にします。

*   SDK + IDE (Visual Studio)

    *   Visual Studio 2012 プロ、プレミアム、または究極の。 メモ Visual Studio Express の Windows Phone (SDK に同梱) はお勧めできません VS Express を使ってテンプレート （下記参照） を築くことができないのでのみ VS プロまたはそれ以上は、**テンプレートのエクスポート**機能を持っていないので。

*   登録し、実際のデバイスでアプリをインストールまたは市場の場所に送信する場合に[Windows Phone デベロッパー センター][3]アカウントのお支払い。

 [1]: http://en.wikipedia.org/wiki/Second_Level_Address_Translation
 [2]: http://ark.intel.com/Products/VirtualizationTechnology
 [3]: http://dev.windowsphone.com/en-us/publish

**注：**SDK には、仮想マシンで実行されているいくつかの課題を提示可能性があります。 [Mac 上の Windows Phone][4]を開発するソリューションに洞察力を与えるこのブログの記事を読むことができます。.

 [4]: http://aka.ms/BuildaWP8apponaMac

## 2. SDK + コルドバをインストールします。

*   ダウンロードし、 [Windows Phone SDK][5]のインストール

*   ダウンロードし、[コルドバ][6]の最新のコピーを抽出します。 作業をして、 `lib\windows-phone-8\wp8` サブディレクトリ、 `lib\windows-phone-8\wp7` コルドバの Windwos Phone 7 バージョンが含まれています。

*   コピー、 `CordovaWP8_x_x_x.zip` ファイルを `\My Documents\Visual Studio 2012\Templates\ProjectTemplates\` ディレクトリ。

 [5]: http://www.microsoft.com/en-us/download/details.aspx?id=35471
 [6]: http://phonegap.com/download

## 2.1 のテンプレートを作成します。

**注：**この手順は必要ありません。Lib\windows 携帯電話のディレクトリはすでにファイル CordovaWP8\_x\_x_x.zip が含まれている場合は、この手順をスキップ可能性があります。

開発プロセスを簡略化するためコルドバは Visual Studio テンプレートを作成するスクリプトが付属しています。 コルドバ Visual Studio アプリケーションを迅速に作成をできます。 必要な場合、このテンプレートを変更することができ、以下の手順、テンプレートを生成する場合を続行する方法を示します。

### 作成し、テンプレートをインストールするバッチ ファイルを実行します。

*   レポのルートには、ファイル createTemplates.bat が含まれています。 このファイルをダブルクリック 2 .zip ファイルが生成されます。 (CordovaWP7\_x\_x\_x.zip + CordovaWP8\_x\_x\_x.zip x.x.x は現在のバージョン番号)Visual Studio では、コピーこれらのファイルを簡単に使用するには、"私の Documents\Visual Studio 2012\Templates\ProjectTemplates\"をし、ことができます新しいプロジェクト メニュー-> Visual Studio ファイルから新しい Apache コルドバ Windows Phone アプリを作成します。

*   自動的にインストールするパラメーターで呼び出すことができますも、コマンドラインからバッチ ファイルを実行する場合

スクリプトを実行します。

    > createTemplates.bat-インストール


## 3. 新しいプロジェクトをセットアップします。

*   Visual Studio Express の Windows Phone を開き、**新しいプロジェクト**を選択します.

*   **CordovaWP8**を選択します。(バージョン番号は、テンプレートの説明に表示されます。)

*   プロジェクト名を指定し、 **[ok]**を選択します.

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/wp8/StandAloneTemplate.png

## 4. プロジェクトの構造を確認します。

*   `www`ディレクトリには、コルドバが含まれています `html/js/css` と、アプリに含まれるその他のリソース。

*   Visual Studio プロジェクトの一部である必要がありますここで追加するコンテンツとコンテンツとして設定する必要があります。

*   メモ： この画面キャプチャはコルドバ 2.3.0 ダウンロードから、あなたのリストは異なります、実際のバージョンがインストールされています。

![][8]

 [8]: {{ site.baseurl }}/static/img/guide/platforms/wp8/projectStructure.png

## 5. ビルドし、エミュレーターへの展開

*   **Windows Phone エミュレーター**がメインのドロップ ダウン メニューで選択されていることを確認してください。

*   、デバッグを開始するドロップ ダウン メニューの横に緑の**再生**ボタンを押すか、 **f5 キーを押してください**.

![][9]

 [9]: {{ site.baseurl }}/static/img/guide/platforms/wp8/BuildEmulator.png

## 6. プロジェクトをビルドし、デバイスの

デバイス上でアプリケーションをテストするために、デバイスを登録する必要があります。 クリックして[ここで][10]を展開すると、Windows Phone 8 でテスト ドキュメントを読みます。

 [10]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105).aspx

*   あなたの携帯電話は接続され、画面がロックされていることを確認します。

*   Visual Studio では、上部のドロップ ダウン メニューから「デバイス」を選択します。

*   、デバッグを開始する主要なドロップ ダウン メニューの横に緑の**再生**ボタンを押すか、 **f5 キーを押してください**.

![][11]

 [11]: {{ site.baseurl }}/static/img/guide/platforms/wp7/wpd.png

## やった ！

## 詳細を読む

IE10 と WebKit のブラウザー、およびサポートする方法の特定の相違に関する詳細については両方の MS は[ここのガイド][12]に役立つ

 [12]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx
