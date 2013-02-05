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

Getting Started with Windows 8
==================================

このガイドは、 Cordova のための開発環境セットアップ方法、またシンプルなアプリの動かし方を解説します。 Cordova は以前は PhoneGap と呼ばれていたため、いくつかのサイトは PhoneGap という名前をまだ使用しています。

Windows 8 と Windows RT での開発中で、 Microsoft は "Metro スタイルアプリ" という呼び名を廃止予定です。 MSDN 上では、これらのタイプのアプリは "Windows ストアアプリ" と呼んでいます。このガイドでは、この名前を使用します。また、ガイド中で Windows 8 の記述がある部分は、常に Windows 8 と Windows RT の両方を指すとして考えてください。

1. 必要なもの
---------------

- Windows 8

- Visual Studio 2012 Professional 以上、または Visual Studio 2012 Express for Windows 8

[ここ](http://www.windowsstore.com/) の手順に沿って Windows ストアにアプリを登録してください。

2. SDK と Cordova のインストール
----------------------------

- お好きなエディションをセットアップしてください。すべての有料エディション (Professional 等) で Windows ストアアプリを作成できます。 [Express エディション](http://www.microsoft.com/visualstudio/jpn/products/visual-studio-express-products) を使用して Windows ストアアプリを作成するには、 **Express for Windows 8** が必要になります。
- [Cordova](http://phonegap.com/download) の最新版をダウンロードし解凍します。 これから **lib\windows-8** サブフォルダーと一緒に作業を進めます。

3. 新規プロジェクトの作成
--------------------

あなたは既に Windows ストアアプリにて利用可能な "HTML/JavaScript track" を使用して Windows 8 アプリを作ることができます。 Cordova の Windows ストアアプリでの目的は、他の Cordova プラットフォームで使用しているものと同じ API を Windows ストアアプリでも使用できるようにすることです。

- Visual Studio 2012 を開き、 **New Project** を選択します。
- ツリーから **Installed - Template - Other Languages - JavaScript - Windows Store** を選択し、プロジェクトリストから **Blank App** を選択します。お好きなプロジェクト名を入力してください。このガイドでは **CordovaWin8Foo** を使用します。

    ![](img/guide/getting-started/windows-8/wsnewproject.PNG)

- Microsoft はウェブサイトのデフォルトページに、大抵の開発者が **index.html** を使用するのに対し、 **default.html** を使用し続けています。 (加えて、他のプラットフォームでも大抵 **index.html** がデフォルトページの名前として使われているでしょう。) これを修正するために、 Solution Explorer で **default.html** ファイルを **index.html** へリネームします。そして、 **package.appxmanifest** ファイルをダブルクリックし、 **Start page** の値を **index.html** に変更します。

    ![](img/guide/getting-started/windows-8/wschangemanifest.PNG)

- **cordova.js** をプロジェクトに含めるには、 Solution Explorer で **js** フォルダーを右クリックして **Add - New Item** を選択します。 **lib\windows-8** フォルダーにある **cordova.js** ファイルを指定します。

- **index.html** のコードを編集します。 **cordova.js** への参照を追加します。手動でもできますし、 Solution Explorer 内のファイルをドラッグすることでも追加できます。

### 参照の追加...
        <!-- WinJS references -->
        <link href="//Microsoft.WinJS.1.0/css/ui-dark.css" rel="stylesheet" />
        <script src="//Microsoft.WinJS.1.0/js/base.js"></script>
        <script src="//Microsoft.WinJS.1.0/js/ui.js"></script>

        <!-- Cordova -->
        <script src="/js/cordova.js"></script>

        <!-- CordovaWin8Foo references -->
        <link href="/css/default.css" rel="stylesheet" />
        <script src="/js/default.js"></script>

- 次に、 Cordova が動いていることを確認するためのコードを追加します。

### 'deviceready' ハンドラーの追加...
    <body>
        <p>Content goes here</p>

        <script type="text/javascript">

            console.log("Subscribing...");
            document.addEventListener("deviceready", function () {

                navigator.notification.alert("デバイスの準備ができました!");

            });

        </script>

    </body>


4. プロジェクトのテスト
-------------------------------

- プロジェクトを Visual Studio から実行します。メッセージボックスが現れるのが確認できるでしょう。

    ![](img/guide/getting-started/windows-8/wsalert.PNG)

終了
-----

以上です。これで Windows ストアアプリを Cordova で作成する準備ができました。

