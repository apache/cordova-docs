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

# Windows Phone 8 プラットフォームに関する解説

SDK 開発環境の設定方法、および、Windows Phone 8 搭載のデバイスへの Cordova アプリの展開方法を説明します。
7.5 と 8 搭載デバイスの両方を開発対象としている場合、『 Windows Phone 7 プラットフォームに関する解説 』 の記載内容に従い、Windows Phone 7 上で開発を行います。IE 10 に実装されている最新機能のいくつかは、バージョン 7 では使用することはできませんが、同じ API 群を実装しています。Windows Phone 8 アプリは、Windows Phone 7 搭載デバイス上では _実行できません_ 。

プラットフォーム固有の詳細情報 ( 両方のプラットフォームに共通 ) に関しては、以下をご確認ください。

- Windows Phone のアップグレード
- Windows Phone プラグイン
- Windows Phone コマンドライン ツール

上記の 『 コマンドライン ツール 』 では、旧バージョン ( Cordova 3.0 以前 ) に実装されていたツールでの作業手順を記しています。
現コマンドライン インターフェイス ( CLI ) に関しては、『 コマンドライン インターフェイス 』 の記載内容をご確認ください。

## システム要件

- オペレーティングシステム :
    - Windows 8 または Windows 8 Pro
        - SDK を使用する場合、Windows の 64 ビット版 ( x64 ) が必要です。
        - デバイスのエミュレーターを実行するには、 Pro バージョンを推奨しています。

- ハードウェア :
    - 6.5 GB のハードディスク空き容量
    - 4 GB RAM
    - 64 ビット ( x64 ) CPU

- Windows Phone 8 エミュレータ
    - エミュレータでは、Hyper-V を使用します。よって、前提条件として、Hyper-V のシステム要件を満たす必要があります。
    - Windows 8 Pro 64 ビット版 以上
    - 仮想化と [Second Level Address Translation (SLAT)](http://en.wikipedia.org/wiki/Second_Level_Address_Translation) をサポートしているプロセッサー
        - [VT-x ( 仮想化 ) と EPT (SLAT) をサポートしている Intel プロセッサーの一覧](http://ark.intel.com/Products/VirtualizationTechnology) をご確認ください。
    - BIOS の設定上で、仮想化機構 ( Intel の VT-x ) を有効化してください。デフォルトでは、通常、無効化されています。

- SDK と IDE ( Visual Studio )
    - Visual Studio 2012 Professional、Premium、または、Ultimate が必要です。Visual Studio Express for Windows Phone ( SDK 内に実装 ) には、 __テンプレートのエクスポート__ 機能がなく、下記のテンプレートをビルドすることができないため、ご使用は推奨しません。テンプレートのビルドには、VS Pro 以上が必要です。

- 端末へのアプリのインストール、または、Market Place への申請を検討している場合、 [Windows Phone デベロッパーセンター ( Dev
Center ) ](http://dev.windowsphone.com/en-us/publish) のアカウントに登録 ( 登録料の支払いを含む ) してください。

__注意__ : 仮想マシーン ( Virtual Machine ) 上で SDK を実行する場合、注意事項がありますので、こちらの [ Mac 上での Windows Phone 開発 ](http://aka.ms/BuildaWP8apponaMac) のブログをご確認ください。

## SDK と Cordova のインストール

[Windows Phone SDK](http://www.microsoft.com/en-us/download/details.aspx?id=35471) をダウンロード・インストールします。

最新の [Cordova](http://phonegap.com/download) をダウンロード・解凍します。
`lib\windows-phone-8\wp8` サブディレクトリで作業を行います。 

`\My Documents\Visual
Studio 2012\Templates\ProjectTemplates\` ディレクトリへ `CordovaWP8_x_x_x.zip`` ファイルをコピーします。

## テンプレートのビルド

__注意__ : `lib\windows-phone` ディレクトリ内に `CordovaWP8_x_x_x.zip` ファイルが既に存在する場合には、こちらの手順を行う必要はありません。

Visual Studio 用のテンプレートをビルドするためのスクリプトを、Cordova 側で用意しています。こちらを使用すると、開発を簡素化できます。
これらのテンプレートを使用すれば、Cordova アプリを即座に作成することができ、また、必要であれば修正を加えることもできます。
下記の手順で、作成を行います。

### バッチファイルを使用した、テンプレートの作成とインストール

レポジトリのルート ( root ) に `createTemplates.bat` ファイルを置いています。このファイルをダブルクリックすると、2 つの `.zip` ファイルが生成されます ( `CordovaWP7_x_x_x.zip` と `CordovaWP8_x_x_x.zip` )。ファイル名の _3.4.0_ は、現在のバージョン番号です。Visual Studio でこれらのファイルを使用する場合には、 `My Documents\Visual Studio 2012\Templates\ProjectTemplates\` へファイルをコピーします。次に、Visual Studio メニューの __ファイル &rarr; 新規作成 &rarr; 新しいプロジェクト__ を選択して、Apache Cordova Windows Phone アプリを、簡単に新規作成することができます。

コマンドラインからバッチファイルを実行した場合、オプションを追加して、インストールを自動で実行することもできます。

        >createTemplates.bat -install

## 新規プロジェクトの設定

Visual Studio Express for Windows Phone を起動させ、 __新しいプロジェクト__ を選択します。

__CordovaWP8__ を選択します ( テンプレート詳細画面上に、バージョン番号が表示されます )。

プロジェクト名 ( Name ) を入力して、 __OK__ ボタンを押します。

![](img/guide/platforms/wp8/StandAloneTemplate.png)

## プロジェクトのディレクトリ構造

`www` ディレクトリ下に、 `html` 、 `js` 、 `css` サブディレクトリを含む、アプリで必要なリソース ( resource ) を置きます。Visual Studio プロジェクトに必要な追加コンテンツがある場合、content ( コンテンツ ) の指定を行う必要があります。

2．3.0 のサンプルプロジェクトのディレクトリ構造を以下に示します。構造は、インストールしたバージョンにより異なります。

![](img/guide/platforms/wp8/projectStructure.png)

## ビルドとエミュレータへの展開

トップ画面のメインのドロップダウンメニューから、__Windows Phone Emulator__ を選択します。

ドロップダウン メニュー横の緑の __実行__ ボタンを押すか、または、 __F5__ をタイプして、デバッグを開始します。

![](img/guide/platforms/wp8/BuildEmulator.png)

## デバイスの使用とプロジェクトのビルド

実機上でアプリをテストする前に、実機の登録を行う必要があります。Windows Phone 8 上での展開・テスト方法の詳細に関しては、[Microsoft のドキュメント](http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105).aspx) をご確認ください。以下に基本的な手順を記します。

- 端末が接続されて、画面がロックされていないことを確認してください。

- Visual Studio のトップのドロップダウンメニューから、__Windows Phone Device__ を選択します。

- ドロップダウン メニュー横の緑の __実行__ ボタンを押すか、または、 __F5__ をタイプして、デバッグを開始します。

![](img/guide/platforms/wp7/wpd.png)

ここまでの手順で、準備が完了しました。

## その他の参考記事

Windows Phone 開発者向けのブログでは、IE10 と WebKit ブラウザの相違点とサポート方法に関する記事が掲載されています。こちらの [ブログ記事](http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx) をご確認ください。