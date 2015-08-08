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

このガイドは、Windows Phone 8 デバイス用 Cordova アプリを展開する SDK の開発環境を設定する方法を示します。 7.5 および 8 のデバイスをターゲットにする場合は、代わりに Windows Phone 7 プラットフォームのガイド詳細 Windows Phone 7 の開発します。 バージョン 7 は、Internet Explorer 10 で含まれているすべての高度な機能を持っていないが、同じ Api のセットを実装します。 Windows Phone 8 アプリは*ない*Windows Phone 7 デバイス上で実行します。

詳細なプラットフォーム固有の情報を両方のバージョンに適用される次を参照してください。

*   Windows Phone のアップグレード
*   Windows Phone のプラグイン
*   Windows Phone のコマンド ライン ツール

上記のコマンド ライン ツールはコルドバ 3.0 より前のバージョンを参照してください。現在のインタ フェースについての情報は、コマンド ライン インターフェイスを参照してください。

## システム要件

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

*   SDK と IDE (Visual Studio)

    *   Visual Studio 2012 プロ、プレミアム、または究極の。 メモ Visual Studio Express の Windows Phone (SDK に同梱) はお勧めできません VS Express を使ってテンプレート （下記参照） を築くことができないのでのみ VS プロまたはそれ以上は、**テンプレートのエクスポート**機能を持っていないので。

*   登録し、実際のデバイスでアプリをインストールまたは市場の場所に送信する場合に[Windows Phone デベロッパー センター][3]アカウントのお支払い。

 [1]: http://en.wikipedia.org/wiki/Second_Level_Address_Translation
 [2]: http://ark.intel.com/Products/VirtualizationTechnology
 [3]: http://dev.windowsphone.com/en-us/publish

**メモ**: SDK には、仮想マシンで実行されているいくつかの課題を提示可能性があります。 [Mac 上の Windows Phone][4]を開発するソリューションに洞察力を与えるこのブログの記事を読むことができます。.

 [4]: http://aka.ms/BuildaWP8apponaMac

## SDK とコルドバをインストールします。

ダウンロードし、 [Windows Phone SDK][5]のインストール.

 [5]: http://www.microsoft.com/en-us/download/details.aspx?id=35471

ダウンロードし、[コルドバ][6]の最新のコピーを抽出します。`lib\windows-phone-8\wp8`サブディレクトリがどこで作業を行う必要があります。

 [6]: http://phonegap.com/download

コピー、 `CordovaWP8_x_x_x.zip` ファイルを `\My Documents\Visual
Studio 2012\Templates\ProjectTemplates\` ディレクトリ。

## テンプレートの構築

**注**: 場合この手順をスキップ、 `lib\windows-phone` ディレクトリが既に含まれている、 `CordovaWP8_x_x_x.zip` ファイル。

簡単に開発をコルドバは Visual Studio テンプレートを構築するためのスクリプトをバンドルします。 これらは急速に Cordova アプリを生成することができ、必要に応じてそれらを変更することができます。 以下の手順は、それを生成する方法を示します。

### 作成し、テンプレートをインストールするバッチ ファイルを実行します。

レポのルート ディレクトリが含まれている、 `createTemplates.bat` ファイル。 この 2 つを生成する] をダブルクリックします `.zip` ファイル: `CordovaWP7_x_x_x.zip` と `CordovaWP8_x_x_x.zip` 、 *x.x.x*は現在のバージョン番号。 Visual Studio で簡単にこれらのファイルを使用するにはそれらをコピー `My
Documents\Visual Studio 2012\Templates\ProjectTemplates\` 。 **Visual Studio のファイル → 新規プロジェクト**メニューから新しい Apache コルドバ Windows Phone アプリを作成することはし。

コマンドラインからバッチ ファイルを実行する場合も自動的にインストールするパラメーターで呼び出すことができます。

        > createTemplates.bat-インストール


## 新しいプロジェクトを設定します。

Visual Studio Express の Windows Phone を開き、**新しいプロジェクト**を選択します.

**CordovaWP8**を選択します。バージョン番号は、テンプレートの説明に表示されます。

プロジェクト名を指定し、 **[ok]**を選択します.

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/wp8/StandAloneTemplate.png

## プロジェクトの構造を確認します。

`www`ディレクトリの機能 `html` 、 `js` 、および `css` アプリが必要なサブディレクトリとその他のリソース。 Visual Studio プロジェクトの一部である必要がある追加のコンテンツとコンテンツとして設定する必要があります。

2.3.0 を次のサンプル構造を表すプロジェクト, しかしインストール バージョンに応じて異なる場合があります。

![][8]

 [8]: {{ site.baseurl }}/static/img/guide/platforms/wp8/projectStructure.png

## エミュレーターをビルドおよび配置

**Windows Phone エミュレーター**がメインのドロップ ダウン メニューで選択されていることを確認してください。

デバッグを開始するドロップ ダウン メニューの横に緑の**再生**ボタンを押すか、 **f5 キーを押してください**.

![][9]

 [9]: {{ site.baseurl }}/static/img/guide/platforms/wp8/BuildEmulator.png

## デバイス プロジェクトをビルドします。

デバイス上でアプリケーションをテストする前に、デバイスを登録する必要があります。 Windows Phone 8 でテストおよび展開する方法の詳細については、 [Microsoft のマニュアル][10]を参照してください。 これらの基本的な手順は：

 [10]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105).aspx

*   あなたの携帯電話は接続され、画面がロックされていることを確認します。

*   Visual Studio では、上部にあるドロップ ダウン メニューから**デバイス**を選択します。

*   または他の**f5 キーを押して**、デバッグを開始する主要なドロップ ダウン メニューの横に緑の**再生**ボタンを押す.

![][11]

 [11]: {{ site.baseurl }}/static/img/guide/platforms/wp7/wpd.png

この時点でしています。

## 詳細を読む

Windows Phone 開発者ブログ IE10 および WebKit のブラウザーとの両方をサポートする方法の違いに[役立つ情報][12]を提供します。

 [12]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx
