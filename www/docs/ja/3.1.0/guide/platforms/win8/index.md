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

## 1。 要件

*   Windows 8

*   Visual Studio 2012 プロフェッショナルまたはより良い、または Visual Studio 2012 Express の Windows 8

指示に従って[ここで][1]Windows ストア アプリを提出します。

 [1]: http://www.windowsstore.com/

## 2. SDK + コルドバをインストールします。

*   Visual Studio 2012 の最寄りのバリアントを設定します。 製品の有償版 （プロなど） のすべての Windows ストア アプリを構築できます。 **Windows 8 のエクスプレス** [Express エディション][2]を使用して Windows ストア アプリを構築する必要があります。.

*   ダウンロードし、[コルドバ][3]の最新のコピーを抽出します。作業をして、 `lib\windows-8` サブディレクトリ。

 [2]: http://www.microsoft.com/visualstudio/eng/products/visual-studio-express-products
 [3]: http://phonegap.com/download

## 3. 新しいプロジェクトをセットアップします。

すでに、 *HTML/JavaScript 追跡*Windows ストア アプリで利用可能なを使用して Windows 8 アプリを構築できます。 として他のコルドバでサポートされているプラットフォームで同じ Api を公開する Windows ストア アプリでのコルドバを使用します。

*   Visual Studio 2012 を開き、**新しいプロジェクト**を選択します.

*   「プロジェクト」リストからツリーし**空アプリケーション**から**インストール → テンプレート → その他の言語 → JavaScript → Windows ストア**を選択します。 などのような任意のプロジェクトの名前を入力します `CordovaWin8Foo` この例のように。

    ![][4]

*   マイクロソフトは引き続き使用 `default.html` 既定のホーム ページが、ほとんどの web 開発者向けとして `index.html` 。 （プラスそれはあなたのプロジェクトの他のプラットフォーム バリエーションで使用している可能性が高い `index.html` を既定のページの名前として)。これを修正する、名前を変更するソリューション エクスプ ローラーで、 `default.html` ファイルを `index.html` 。 ダブルクリックし、 `package.appxmanifest` ファイルし、**ページの開始**値を変更するには`index.html`.

    ![][5]

*   含むように `cordova.js` を右クリックして、プロジェクトで、 `js` ソリューション エクスプ ローラーおよび**追加 → 新規項目**選択ディレクトリ。 検索、 `cordova.js` ファイルで、 `lib\windows-8` ディレクトリが上記します。

*   コードを編集の `index.html` 。参照を追加 `cordova.js` 。手動で、またはソリューション エクスプ ローラーからファイルをドラッグすることによってこれを行うことができます。

 [4]: {{ site.baseurl }}/static/img/guide/platforms/win8/wsnewproject.png
 [5]: {{ site.baseurl }}/static/img/guide/platforms/win8/wschangemanifest.png

### 参照を追加する.

        < ！--WinJS 参照--> < href="//Microsoft.WinJS.1.0/css/ui-dark.css リンク"rel ="stylesheet"/>< スクリプト src="//Microsoft.WinJS.1.0/js/base.js"></スクリプト >< スクリプト src="//Microsoft.WinJS.1.0/js/ui.js"></スクリプト >< ！--コルドバ--> < スクリプト src="/js/cordova.js"></スクリプト >< ！--CordovaWin8Foo 参照--> < href="/css/default.css リンク"rel ="stylesheet"/>< スクリプト src="/js/default.js"></スクリプト >


*   次に、コルドバを示していますいくつかのコードの作業を追加します。

### 'Deviceready' のハンドラーを追加する.

    <body>
        <p>Content goes here</p>

        <script type="text/javascript">

            console.log("Subscribing...");
            document.addEventListener("deviceready", function () {

                navigator.notification.alert("The device is ready!");

            });

        </script>

    </body>


## 5. プロジェクトをテストします

*   Visual Studio から、プロジェクトを実行します。表示されるメッセージ ボックスが表示されます。

    ![][6]

 [6]: {{ site.baseurl }}/static/img/guide/platforms/win8/wsalert.png

## やった ！

だよ ！コルドバでの Windows ストア アプリを構築する準備が整いました。
