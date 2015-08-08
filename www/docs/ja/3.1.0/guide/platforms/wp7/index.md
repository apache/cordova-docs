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

## 1. システム要件

*   オペレーティング システム：

    *   Windows 7 または Windows 8 (Pro) または Windows Vista SP2 で
        *   64 ビット バージョンの Windows の （64） が、SDK に必要です。
        *   デバイス エミュレーターを実行するため、Pro バージョンをお勧めします。

*   登録し、実際のデバイスでアプリをインストールまたは市場の場所に送信する場合に[Windows Phone デベロッパー センター][1]アカウントのお支払い。

 [1]: http://dev.windowsphone.com/en-us/publish

**注：**SDK には、仮想マシンで実行されているいくつかの課題を提示可能性があります。 [Mac 上の Windows Phone][2]を開発するソリューションに洞察力を与えるこのブログの記事を読むことができます。.

 [2]: http://aka.ms/BuildaWP8apponaMac

## 2. SDK + コルドバをインストールします。

*   ダウンロードして、 [Windows Phone SDK][3]のインストール

*   ダウンロードし、[コルドバ][4]の最新のコピーを抽出します。 作業をして、 `lib\windows-phone-8\wp7` サブディレクトリ、 `lib\windows-phone-8\wp8` コルドバの Windwos 電話 8 のバージョンが含まれています。

*   コピー、 `CordovaWP7_x_x_x.zip` ファイルを `\My Documents\Visual Studio 2012\Templates\ProjectTemplates\` ディレクトリ。

 [3]: http://www.microsoft.com/download/en/details.aspx?displaylang=en&id=27570/
 [4]: http://phonegap.com/download

## 2.1 のテンプレートを作成します。

**注：**この手順は必要ありません。Lib\windows 携帯電話のディレクトリはすでにファイル CordovaWP7\_x\_x_x.zip が含まれている場合は、この手順をスキップ可能性があります。

開発プロセスを簡略化するためコルドバは Visual Studio テンプレートを作成するスクリプトが付属しています。 コルドバ Visual Studio アプリケーションを迅速に作成をできます。 必要な場合、このテンプレートを変更することができ、以下の手順、テンプレートを生成する場合を続行する方法を示します。

### 作成し、テンプレートをインストールするバッチ ファイルを実行します。

*   レポのルートには、ファイル createTemplates.bat が含まれています。 このファイルをダブルクリック 2 .zip ファイルが生成されます。 (CordovaWP7\_x\_x\_x.zip + CordovaWP8\_x\_x\_x.zip x.x.x は現在のバージョン番号)Visual Studio では、コピーこれらのファイルを簡単に使用するには、"私の Documents\Visual Studio 2012\Templates\ProjectTemplates\"をし、ことができます新しいプロジェクト メニュー-> Visual Studio ファイルから新しい Apache コルドバ Windows Phone アプリを作成します。

*   自動的にインストールするパラメーターで呼び出すことができますも、コマンドラインからバッチ ファイルを実行する場合

スクリプトを実行します。

    > createTemplates.bat-インストール


## 3. 新しいプロジェクトをセットアップします。

*   Visual Studio Express の Windows Phone を開き、**新しいプロジェクト**を選択します.

*   **CordovaWP7**を選択します。(バージョン番号は、テンプレートの説明に表示されます。)

*   プロジェクト名を指定し、 **[ok]**を選択します.

## 4. プロジェクトの構造を確認します。

*   `www`ディレクトリには、コルドバが含まれています `html/js/css` と、アプリに含まれるその他のリソース。

*   Visual Studio プロジェクトの一部である必要がありますここで追加するコンテンツとコンテンツとして設定する必要があります。

*   メモ： この画面キャプチャは wp8 コルドバ 2.3.0 ダウンロードから、あなたのリストは異なります、実際のバージョンがインストールされています。

![][5]

 [5]: {{ site.baseurl }}/static/img/guide/platforms/wp8/projectStructure.png

## 6. プロジェクトをビルドし、デバイスの

デバイス上でアプリケーションをテストするために、デバイスを登録する必要があります。 クリックして[ここで][6]を展開すると、Windows Phone 7 上でテスト ドキュメントを読みます。

 [6]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105).aspx

*   あなたの携帯電話は接続され、画面がロックされていることを確認します。

*   Visual Studio では、上部のドロップ ダウン メニューから「デバイス」を選択します。

*   、デバッグを開始する主要なドロップ ダウン メニューの横に緑の**再生**ボタンを押すか、 **f5 キーを押してください**.

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/wp7/wpd.png

## やった ！
