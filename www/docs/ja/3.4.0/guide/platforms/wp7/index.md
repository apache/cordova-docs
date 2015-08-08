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

# Windows Phone 7 プラットフォーム ガイド

このガイドは、Windows Phone 7 デバイス用の Cordova アプリを展開する SDK の開発環境を設定する方法を示します。 アプリも 7 Windows Phone 8 で利用可能な IE10 の高度な機能の一部が欠けているバージョンは、同じ Api を使用して Windows Phone 8 デバイス上で実行します。 Windows Phone 8 アプリは*ない*Windows Phone 7 デバイス上で実行します。

詳細なプラットフォーム固有の情報を両方のバージョンに適用される次を参照してください。

*   Windows Phone のアップグレード
*   Windows Phone のプラグイン
*   Windows Phone のコマンド ライン ツール

上記のコマンド ライン ツールはコルドバ 3.0 より前のバージョンを参照してください。現在のインタ フェースについての情報は、コマンド ライン インターフェイスを参照してください。

## システム要件

SP2 と Windows 7 または Windows 8 (Pro) または Windows Vista を使用します。64 ビット バージョンの Windows の （64） が、SDK に必要です。デバイス エミュレーターを実行するため、Pro バージョンをお勧めします。

登録し、実際のデバイスでアプリをインストールまたは市場の場所に送信する場合に[Windows Phone デベロッパー センター][1]アカウントのお支払い。

 [1]: http://dev.windowsphone.com/en-us/publish

**メモ**: SDK には、仮想マシンで実行されている課題を提示可能性があります。ソリューションの開発に洞察力は、 [Mac 上の Windows Phone][2]をお読みください。

 [2]: http://aka.ms/BuildaWP8apponaMac

## SDK とコルドバをインストールします。

ダウンロードして、 [Windows Phone SDK][3]のインストール.

 [3]: http://www.microsoft.com/download/en/details.aspx?displaylang=en&id=27570/

ダウンロードし、[コルドバ][4]の最新のコピーを抽出します。 作業する必要があります、 `lib\windows-phone-8\wp7` サブディレクトリ、 `lib\windows-phone-8\wp8` コルドバの Windwos 電話 8 のバージョンが含まれています。

 [4]: http://phonegap.com/download

コピー、 `CordovaWP7_x_x_x.zip` ファイルを `\My Documents\Visual
Studio 2012\Templates\ProjectTemplates\` ディレクトリ。

## テンプレートの構築

**注**: 場合この手順をスキップ、 `lib\windows-phone` ディレクトリが既に含まれている、 `CordovaWP7_x_x_x.zip` ファイル。

簡単に開発をコルドバは Visual Studio テンプレートを構築するためのスクリプトをバンドルします。 これらは急速に Cordova アプリを生成することができ、必要に応じてそれらを変更することができます。 以下の手順は、それを生成する方法を示します。

### 作成し、テンプレートをインストールするバッチ ファイルを実行します。

レポのルートが含まれている、 `createTemplates.bat` ファイル。 2 つが生成されますこのファイルをダブルクリックすると `.zip` ファイル: `CordovaWP7_x_x_x.zip` と `CordovaWP8_x_x_x.zip` 、 *x.x.x*は現在のバージョン番号。 Visual Studio で簡単にこれらのファイルを使用するにはそれらをコピー、 `My Documents\Visual Studio
2012\Templates\ProjectTemplates\` サブディレクトリ。 新しい**プロジェクトから Visual Studio _\_File → 新しい Apache コルドバ Windows Phone\_ アプリ**のメニューを作成することはし。

コマンドラインからバッチ ファイルを実行する場合も自動的にインストールするパラメーターで呼び出すことができます。

        > createTemplates.bat-インストール


## 新しいプロジェクトを設定します。

*   Visual Studio Express の Windows Phone を開き、**新しいプロジェクト**を選択します.

*   **CordovaWP7**を選択します。テンプレートの説明でバージョン番号表示します。

*   プロジェクト名を指定し、 **[ok]**を選択します.

## プロジェクトの構造を確認します。

`www`ディレクトリの機能 `html` 、 `js` 、および `css` アプリが必要なサブディレクトリとその他のリソース。 Visual Studio プロジェクトの一部である必要がある追加のコンテンツとコンテンツとして設定する必要があります。

2.3.0 を次のサンプル構造を表すプロジェクト, しかし、インストールされているバージョンによって異なる場合があります。

![][5]

 [5]: {{ site.baseurl }}/static/img/guide/platforms/wp8/projectStructure.png

## デバイス プロジェクトをビルドします。

デバイス上でアプリケーションをテストする前に、デバイスを登録する必要があります。 Windows Phone 7 上でテストおよび展開する方法の詳細については、[マイクロソフトのドキュメント][6]を参照してください。 これらの基本的な手順は：

 [6]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105).aspx

*   あなたの携帯電話は接続され、画面がロックされていることを確認します。

*   Visual Studio では、上部にあるドロップ ダウン メニューから**デバイス**を選択します。

*   または他の**f5 キーを押して**、デバッグを開始する主要なドロップ ダウン メニューの横に緑の**再生**ボタンを押す.

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/wp7/wpd.png

この時点でしています。
