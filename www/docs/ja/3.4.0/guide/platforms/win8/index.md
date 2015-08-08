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

# Windows 8 プラットフォーム ガイド

このガイドは、Windows 8 向け Cordova アプリを展開する SDK の開発環境を設定する方法を示します。詳細なプラットフォーム固有の情報は、次を参照してください。

*   Windows 8 アップグレード
*   Windows 8 のコマンド ライン ツール

上記のコマンド ライン ツールはコルドバ 3.0 より前のバージョンを参照してください。現在のインタ フェースについての情報は、コマンド ライン インターフェイスを参照してください。

マイクロソフト推奨*Metro スタイル アプリ*の Windows 8 と Windows 左折し、ルートの名前 MSDN 今アプリを*Windows ストア*アプリのこのタイプとこのガイドに従って条約。 また、このガイドでは、 *Windows 8*意味 Windows 8 と Windows の右

## 要件

*   Windows 8

*   Visual Studio 2012 プロフェッショナルまたはより良い、または Visual Studio 2012 Express の Windows 8

アプリを Windows ストアに提出する[windowsstore.com][1]に記載された手順に従ってください。

 [1]: http://www.windowsstore.com/

## SDK とコルドバをインストールします。

Visual Studio 2012 の最寄りのバリアントを設定します。 製品の有償版 （プロなど） のすべての Windows ストア アプリを構築できます。 **Windows 8 のエクスプレス** [Express エディション][2]を使用して Windows ストア アプリを構築する必要があります。.

 [2]: http://www.microsoft.com/visualstudio/eng/products/visual-studio-express-products

ダウンロードし、[コルドバ][3]の最新のコピーを抽出します。これら － に適用、 `lib\windows-8` サブディレクトリ。

 [3]: http://phonegap.com/download

## 新しいプロジェクトを設定します。

すでに、 *HTML/JavaScript 追跡*Windows ストア アプリで利用可能なを使用して Windows 8 アプリを構築できます。 として他のコルドバでサポートされているプラットフォームで同じ Api を公開する Windows ストア アプリでのコルドバを使用します。

*   Visual Studio 2012 を開き、**新しいプロジェクト**を選択します.

*   「プロジェクト」リストからツリーし**空アプリケーション**から**インストール → テンプレート → その他の言語 → JavaScript → Windows ストア**を選択します。 などのような任意のプロジェクトの名前を入力します `CordovaWin8Foo` この例のように：

    ![][4]

*   マイクロソフトは引き続き使用 `default.html` 既定のホーム ページが、ほとんどの web 開発者向けとして `index.html` 。 ためには、少なくとも可能性が取り組んでいる他のプラットフォームと一致することをお勧めします。 これを修正する、名前を変更する**ソリューション エクスプ ローラー**で、 `default.html` ファイルを `index.html` 。 ダブルクリックし、 `package.appxmanifest` ファイルし、**ページの開始**値を変更する `index.html` :

        ![](img/guide/platforms/win8/wschangemanifest.png)


*   含むように `cordova.js` を右クリックして、プロジェクトで、 `js` **ソリューション エクスプ**ローラーおよび**追加 → 新規項目**選択ディレクトリ。 検索、 `cordova.js` ファイルで、 `lib\windows-8` ディレクトリ。

*   コードを編集の `index.html` 。 参照を追加 `cordova.js` 。 手動で、または**ソリューション エクスプ ローラー**からファイルをドラッグすることによってこれを行うことができます。 次の追加アプリのホーム ページに他の依存関係。

            <!-- WinJS references -->
            <link href="//Microsoft.WinJS.1.0/css/ui-dark.css" rel="stylesheet" />
            <script src="//Microsoft.WinJS.1.0/js/base.js"></script>
            <script src="//Microsoft.WinJS.1.0/js/ui.js"></script>

            <!-- Cordova -->
            <script src="/js/cordova.js"></script>

            <!-- CordovaWin8Foo references -->
            <link href="/css/default.css" rel="stylesheet" />
            <script src="/js/default.js"></script>


*   追加、 `deviceready` コルドバを示すためにハンドラーの処理します。

        <body>
            <p>Content goes here</p>
            <script type="text/javascript">
                console.log("Subscribing...");
                document.addEventListener("deviceready", function () {
                    navigator.notification.alert("The device is ready!");
                });
            </script>
        </body>


 [4]: {{ site.baseurl }}/static/img/guide/platforms/win8/wsnewproject.png

## プロジェクトをテストします

Visual Studio から、プロジェクトを実行します。表示されるメッセージ ボックスが表示されます。

        ![](img/guide/platforms/win8/wsalert.png)


それだけです。コルドバでの Windows ストア アプリを構築する準備が整いました。
