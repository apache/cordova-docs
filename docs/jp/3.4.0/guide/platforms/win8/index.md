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

# Windows 8 プラットフォームに関する解説

SDK 開発環境の設定方法、および、Windows 8 搭載のデバイスへの Cordova アプリの展開方法を説明します。
プラットフォーム固有の詳細情報に関しては、以下をご確認ください。

* Windows 8 のアップグレード
* Windows 8 コマンドライン ツール

上記の 『 コマンドライン ツール 』 では、旧バージョン ( Cordova 3.0 以前 ) に実装されていたツールでの作業手順を記しています。
現コマンドライン インターフェイス ( CLI ) に関しては、『 コマンドライン インターフェイス 』 の記載内容をご確認ください。

Window 8 と Window RT で使用していた _メトロスタイル アプリ_ という呼称は、廃止しました。MSDN では、この種のアプリを、 _Windows ストア_ アプリと現在呼んでいます。この解説中でも、こちらの呼び名を使用しています。また、こちらの _Windows 8_ のプラットフォームガイドは、Windows 8 だけではなく、windows RT にも適用できます。
 
## システム要件

- Windows 8

- Visual Studio 2012 Professional 以上、または、Visual Studio 2012 Express ( Windows 8 用 ) 

Windows ストアに対して、アプリの申請を行うときには、 [windowsstore.com](http://www.windowsstore.com/) の記載内容に従ってください。

## SDK と Cordova のインストール

Visual Studio 2012 であれば、どの製品でもビルドは行えますが、無料のバージョン以外の製品版をご使用ください ( Professional 版など )。なお、Windows ストアアプリのビルドには、 __Express for Windows 8__ ( [こちらのページ](http://www.microsoft.com/visualstudio/eng/products/visual-studio-express-products) から適宜、更新・拡張機能を適用のこと ) が必要です。

最新の [Cordova](http://phonegap.com/download) をダウンロード・解凍します。
上記のサイト上の手順は、 `lib\windows-8` サブディレクトリに対して適用します。

## 新規プロジェクトの設定

_HTML/JavaScript track_ ( 『 Windows 向けアプリ 』 ページから利用可能 ) を使用して、Windows 8 アプリをビルドすることができます。『 Windows 向けアプリ 』 ページ上で Cordova と検索して、Cordova がサポートしている他のプラットフォームでも使用できる、同種の API を確認してください。
( 翻訳者メモ : この一段落に関しては、内容の精査をすることができませんでした。)

- Visual Studio 2012 を起動させ、 __新しいプロジェクト__ を選択します。

- __インストール済み &rarr; テンプレート &rarr; 他の言語 &rarr;
  JavaScript &rarr; Windows ストア__ を選択して、次に、プロジェクト一覧から __空のアプリケーション__ を選択します。そして、プロジェクト名 ( 「 名前 」 ) を入力します ( ここでは、例として `CordovaWin8Foo` を使用します )。
  
    ![](img/guide/platforms/win8/wsnewproject.png)

- Microsoft では、デフォルトのホームページとして、 `default.html` 
を引き続き使用しています。一方、開発者の多くは、 `index.html` を使用しています。利便上、他の開発対象のプラットフォームとも合わせる必要があるため、ファイル名を変えることを推奨します。ファイル名を変更する場合、 __ソリューション エクスプローラ ( Solution Explorer )__ 上で、 `default.html` ファイル名を、 `index.html` にします。次に、 `package.appxmanifest` ファイルをダブルクリックして、 __スタートページ__ 項目の値を、 `index.html` に変更します。

        ![](img/guide/platforms/win8/wschangemanifest.png)

- プロジェクトに `cordova.js` をインクルード ( include ) します。 __ソリューション エクスプローラ__ の `js` ディレクトリを右クリックして、 __追加 &rarr; 新しい項目の追加__ を選択します。 `lib\windows-8` ディレクトリの `cordova.js` ファイルを選択します。

`index.html` との関連個所を修正します。 `cordova.js` へファイルへの参照を追加します。手動で行うか、または、 __ソリューション エクスプローラ__ からファイルをドラッグして行うことができます。以下の依存関係を、アプリのホームページに追加します。

            <!-- WinJS への参照 -->
            <link href="//Microsoft.WinJS.1.0/css/ui-dark.css" rel="stylesheet" />
            <script src="//Microsoft.WinJS.1.0/js/base.js"></script>
            <script src="//Microsoft.WinJS.1.0/js/ui.js"></script>

            <!-- Cordova -->
            <script src="/js/cordova.js"></script>

            <!-- CordovaWin8Foo への参照 -->
            <link href="/css/default.css" rel="stylesheet" />
            <script src="/js/default.js"></script>

- `deviceready` ハンドラーを使用して、Corodva 側の準備を行います。

        <body>
            <p>Content goes here</p>
            <script type="text/javascript">
                console.log("Subscribing...");
                document.addEventListener("deviceready", function () {
                    navigator.notification.alert("The device is ready!");
                });
            </script>
        </body>

## プロジェクトのテスト

Visual Studio からプロジェクトを実行します。以下のメッセージが表示されます。

        ![](img/guide/platforms/win8/wsalert.png)

ここまでの手順で、Window ストアアプリを、Cordova を使用して、ビルドする準備が整いました。

