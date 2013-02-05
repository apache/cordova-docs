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

Getting Started with Windows Phone
==================================

このガイドは、 Cordova のための開発環境セットアップ方法、またシンプルなアプリの動かし方を解説します。 Cordova は以前は PhoneGap と呼ばれていたため、いくつかのサイトは PhoneGap という名前をまだ使用しています。

ビデオチュートリアル:
----------------

- [Cordova and Windows Phone quick setup video](http://www.youtube.com/v/wO9xdRcNHIM?autoplay=1)
- [Cordova and Windows Phone deep dive](http://www.youtube.com/v/BJFX1GRUXj8?autoplay=1)


1. 必要なもの
---------------

- Windows 7 または Windows Vista with SP2

注意: VM での動作は問題があります。もし Mac を使用している場合は、 bootcamp パーティションを Windows 7 または Vista でセットアップする必要があります。

デバイスへのインストールとマーケットプレイスへの登録のために、以下が必要です:

- [App Hub member](http://create.msdn.com/en-US/home/membership) になる


2. SDK と Cordova のインストール
----------------------------

- [Windows Phone SDK](http://www.microsoft.com/download/en/details.aspx?displaylang=en&amp;id=27570/) のダウンロードとインストール
- [Cordova](http://phonegap.com/download) の最新版をダウンロードし解凍します。 これから lib\windows-phone\ サブフォルダーと一緒に作業を進めます。
- CordovaStarter-x.x.x.zip のファイルを次のフォルダーにコピーします: \My Documents\Visual Studio 2010\Templates\ProjectTemplates\
(もしテンプレートファイルが存在しない場合、これをビルドする必要があります。以下の 2.1 を参照してください)
もし VisualStudio をインストールしたばかりの場合は、このフォルダーを作成するために一度起動する必要があります。
"Visual C#" の "Silverlight for Windows Phone" サブフォルダーの代わりにこのプロジェクトを追加することも出来ます。これは、新しいプロジェクトを作るときにプロジェクトテンプレートがどこに表れるかに影響するだけです。また、このフォルダーを作成する必要があるかもしれません。


2.1 テンプレートのビルド
-----------------------------
(このステップは必要ないかもしれません。もし lib\windows-phone がすでに CordovaStarter-x.x.x.zip ファイルを含んでいる場合は、このステップをスキップしてください)
- Visual Studio Express for Windows Phone にある lib\windows-phone\templates\standalone\CordovaSolution.sln を開きます
- ファイルメニューから 'Export Template...' を選びます
- テンプレートタイプ 'Project template' を選びます
- エクスポートするテンプレート名を指定します。例: CordovaStarter-2.1.0 は CordovaStarter-2.1.0.zip となります
- 概要、アイコン画像、プレビュー画像などを必要に応じて追加します。これは、 Visual Studio の 'New Project' ダイアログで表示される内容になります
- 注意: もし ('Automatically import the template ... ') を選択した場合、ステップ2 にある .zip ファイルのコピーは必要ありません
- 'Finish' をクリックします




3. 新規プロジェクトの作成
--------------------

- Visual Studio Express for Windows Phone を開き、 **New Project** を選択します。
- **CordovaStarter** を選択します。 (テンプレートの説明の中に、バージョン番号が表示されます)
    - 注意: もし見つからない場合は、 'Visual C#' を選択してみてください。
- プロジェクト名を指定し、 OK をクリックします。

    ![](img/guide/getting-started/windows-phone/wpnewproj.PNG)


4. プロジェクト構成の確認
-------------------------------

- 'www' フォルダーは Cordova の html/js/css ファイルとアプリのその他のリソースを含みます。
- このフォルダーに追加した全てのコンテンツは Visual Studio プロジェクトの一部である必要があり、コンテンツとしてセットされている必要があります。

    ![](img/guide/getting-started/windows-phone/wp7projectstructure.PNG)


5. ビルドとエミュレーターへのデプロイ
-------------------------------

- **Windows Phone Emulator** が上部のドロップダウンメニューにて選択されていることを確認します。
- Windows Phone Emulator が選択されたドロップダウンメニューの隣にある緑の **play ボタン** をクリックするか、 F5 を押下しデバッグを開始します。

    ![](img/guide/getting-started/windows-phone/wprun.png)
    ![](img/guide/getting-started/windows-phone/wpfirstrun.PNG)


6. デバイスのためにプロジェクトをビルド
------------------------------------

デバイスでアプリをテストするためには、デバイスは登録されていなければなりません。 [ここ](http://msdn.microsoft.com/en-us/library/gg588378(v=VS.92).aspx) をクリックし、 Windows Phone へのデプロイとテストに関するドキュメントを読んでください。

- デバイスが接続され、スクリーンがアンロックなことを確認します
- Visual Studio で、上部のドロップダウンメニューから 'Windows Phone Device' を選択します
- ドロップダウンメニューの隣にある緑の **play ボタン** をクリックするか、 F5 を押下しデバッグを開始します

    ![](img/guide/getting-started/windows-phone/wpd.png)


終了
-----

さらに詳しいガイドは [ここ](http://wiki.phonegap.com/w/page/48672055/Getting%20Started%20with%20PhoneGap%20Windows%20Phone%207) で確認できます。

