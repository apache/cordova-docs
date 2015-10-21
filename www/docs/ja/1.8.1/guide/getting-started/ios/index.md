---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
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

title: Getting Started with iOS
---

Getting Started with iOS
========================

このガイドは、 Apache Cordova のための開発環境セットアップ方法、また Apache Cordova のサンプルアプリの動かし方を解説します。

ビデオチュートリアル
----------------

- [Cordova Installer - Xcode 4 Template](http://www.youtube.com/v/R9zktJUN7AI?autoplay=1)


必要なもの
---------------
- Intel ベースの Mac OS X Lion (10.7)
- デバイスへのインストールに必要なもの:
    - Apple iOS デバイス (iPhone, iPad, iPod Touch)
    - iOS デベロッパー証明書


SDK と Apache Cordova のインストール
------------------------

- [Mac App Store](http://itunes.apple.com/us/app/xcode/id497799835?mt=12) から Xcode をインストールします。
- [Apache Cordova](http://phonegap.com/download) の最新版をダウンロードします。
    - ダウンロードしたものを解凍します
    - Apache Corder iOS は `lib/ios` ディレクトリ以下にあります


新規プロジェクトの作成
--------------------

- Xcode を起動します
- メニューから _File_ を選択します
- _New_ を選択し、 _New Project..._ を選択します
- テンプレートのリストから _Cordova-based Application_ を選択します

    ![]({{ site.baseurl }}/static/img/guide/getting-started/ios/XCode4-templates.png)

- _Next_ ボタンをクリックします
- _Product Name_ と _Company Identifier_ を記入します

    ![]({{ site.baseurl }}/static/img/guide/getting-started/ios/xcode4-name_your_app.png)

- **注意:** _Use Automatic Reference Counting_ のチェックボックスにチェックを **入れないでください**
- _Next_ ボタンをクリックします
- 新しいアプリを保存するフォルダーを選択します
- _Create_ ボタンをクリックします

Apache Cordova プロジェクトが作成出来ました。次に、プロジェクトと web ディレクトリを関連付ける必要があります。この作業は、 Xcode のプロジェクトテンプレートと制約のため必要となります。

- 左上にある _Run_ ボタンをクリックします
    - ビルドが成功し、 iOS シミュレーターが起動します
    - iOS シミュレーターが、 _www/index.html was not found_ と警告しているのが確認できるはずです
    - `www` ディレクトリへのリファレンスをプロジェクトに追加することによりこれを修正します

    ![]({{ site.baseurl }}/static/img/guide/getting-started/ios/index-not-found.png)

- 左側のサイドバーにある _Project Navigator_ の中のプロジェクトアイコンの上で右クリックし、 _Show in Finder_ を選択します
- Finder で、プロジェクトの中に `www` ディレクトリが確認できるはずです

    ![]({{ site.baseurl }}/static/img/guide/getting-started/ios/www-folder.png)

- `www` フォルダーを Xcode 4 にドラッグします
    - アプリフォルダーの中に `www` ディレクトリをドラッグしないでください
    - 以下の画像赤い四角の枠で囲ってある部分にドラッグしてください:

    ![]({{ site.baseurl }}/static/img/guide/getting-started/ios/project.jpg)

- 正確に `www` フォルダーがドラッグアンドドロップされると、いくつかのオプションがある画面が表示されます
    - _Create folder references for any added folders_ を選択します
    - _Finish_ ボタンをクリックします

    ![]({{ site.baseurl }}/static/img/guide/getting-started/ios/create-folder-reference.png)

[Hello World](../webos/index.html) の作成
--------------

- Xcode の _Project Navigator_ にある `www` フォルダーを選択します
- `index.html` ファイルを選択します
- `<body>` タグの後に以下を追加します:

        <h1>Hello World</h1>

関連する JavaScript や CSS ファイルも追加することができます。


シミュレーターへのデプロイ
-----------------------

- ツールバーにあるドロップダウンメニューから _Active SDK_ を _iOS version Simulator_ に変更します
- プロジェクトウィンドウのツールバーにある _Run_ ボタンをクリックします


デバイスへのデプロイ
--------------------

- _Supporting Files_ グループの中にある `あなたのアプリ名-Info.plist` を開きます
- _BundleIdentifier_ を Apple から提供された Identifer 、または自分の Identifer に変更します
    - もし開発者ライセンスを持っている場合は、 [Assistant] (http://developer.apple.com/iphone/manage/overview/index.action) よりアプリを登録できます
- ツールバーにあるドロップダウンメニューから _Active SDK_ を _あなたのDevice名_ に変更します
    - デバイスを USB で接続する必要があります
- プロジェクトウィンドウのツールバーにある _Run_ ボタンをクリックします

    ![]({{ site.baseurl }}/static/img/guide/getting-started/ios/HelloWorldiPhone4.png)


アプリを作成
--------------

これで Xcode プロジェクトのセットアップが完了し、シミュレーターまたはデバイスでビルドし動かすことが出来ます。
アプリを書くために、 Xcode を使用する必要はありません。
あなたの好きなテキストエディターを使い、 Xcode でリビルド作業を行えます。
Xcode は自動的に `www` ディレクトリ内にあるファイルの変化を検出します。
