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

このガイドは、 Cordova のための開発環境セットアップ方法、またシンプルなアプリの動かし方を解説します。

ビデオチュートリアル:
----------------

- [Cordova Installer - Xcode 4 Template](http://www.youtube.com/v/R9zktJUN7AI?autoplay=1)


1. 必要なもの
---------------
- Intel ベースの Mac OS X Lion (10.7)
- デバイスへのインストールに必要なもの:
    - Apple iOS デバイス (iPhone, iPad, iPod Touch)
    - iOS デベロッパー証明書


2. SDK と Cordova のインストール
------------------------

- [Mac App Store](http://itunes.apple.com/us/app/xcode/id497799835?mt=12) から Xcode をインストールします。
- [Cordova](http://phonegap.com/download) の最新版をダウンロードし解凍します。これから **lib/ios** ディレクトリと一緒に作業を進めます。


3. 新規プロジェクトの作成
--------------------

- Xcode を起動します
- メニューから **File** を選択します
- **New** を選択し、 **New Project...** を選択します
- テンプレートのリストから **Cordova-based Application** を選択します

    ![]({{ site.baseurl }}/static/img/guide/getting-started/ios/XCode4-templates.png)
- **Next** ボタンをクリックします
- "Product Name" と "Company Identifier" を記入します

    ![]({{ site.baseurl }}/static/img/guide/getting-started/ios/xcode4-name_your_app.png)

- **重要！** "Use Automatic Reference Counting" のチェックボックスにチェックを入れないでください 
- **Next** ボタンをクリックします
- 新しいアプリを保存する **フォルダーを選択します**
- **Create** ボタンをクリックし、プロジェクトを作成します
- 左上にある **Run** ボタンをクリックします。 ビルドが成功し、 iOS シミュレーターが起動します

    a. iOS シミュレーターが、 **www/index.html** was not found と警告しているのが確認できるはずです。

    b. これを修正するため、 **www** ディレクトリへのリファレンスをプロジェクトに追加する必要があります。 

    ![]({{ site.baseurl }}/static/img/guide/getting-started/ios/index-not-found.png)

- 左側のサイドバーにある Project Navigator の中のプロジェクトアイコンの上で **右クリック** し、 **Show in Finder** を選択します
- **フォルダー内** に、 **www** ディレクトリが確認できるはずです

    ![]({{ site.baseurl }}/static/img/guide/getting-started/ios/www-folder.png)

- **重要！** **www** フォルダーを Xcode 4 に **ドラッグ** します。 アプリフォルダーには **ドラッグしないでください** 。 **Xcode 4** にドラッグしてください。下の HelloWorld プロジェクトの例だと、 **赤い四角の枠で囲ってある部分** にドラッグアンドドロップします。

    ![]({{ site.baseurl }}/static/img/guide/getting-started/ios/project.jpg)
- 正確に **"www"** フォルダーがドラッグアンドドロップされると、いくつかのオプションがある画面が表示されます 
- **Create folder references for any added folders** のラジオボタンを選択します

    ![]({{ site.baseurl }}/static/img/guide/getting-started/ios/create-folder-reference.png)

- **Finish** ボタンをクリックします


4. [Hello World](../webos/index.html) の作成
--------------

- Xcode の Project Navigator にある **www** フォルダーを選択します
- **index.html** ファイルを選択します
- `<body>` タグの後に `<h1>[Hello World](../webos/index.html)</h1>` と記述します

関連する JavaScript や CSS ファイルも追加することができます。


5A. シミュレーターへのデプロイ
-----------------------

- ツールバーにあるドロップダウンメニューから Active SDK を **iOS version# Simulator** に変更します
- プロジェクトウィンドウのツールバーにある **Run** ボタンをクリックします


5B. デバイスへのデプロイ
--------------------

- "Supporting Files" グループの中にある [AppName]-Info.plist ([AppName]は作成したアプリの名前) を開きます
- **BundleIdentifier** を Apple から提供された Identifer 、または自分の Identifer に変更します。もし開発者ライセンスを持っている場合は、 Assistant に [ここ](http://developer.apple.com/iphone/manage/overview/index.action) からアクセスし、アプリを登録できます
- ツールバーにあるドロップダウンメニューから Active SDK を **[DEVICENAME]** に変更します。ここで、 [DEVICENAME] はデプロイしたいデバイスの名前です
- プロジェクトウィンドウのツールバーにある **Run** ボタンをクリックします

    ![]({{ site.baseurl }}/static/img/guide/getting-started/ios/HelloWorldiPhone4.png)


終了
-----

Xcode の外で HTML, CSS, JavaScript を **www** フォルダーに追加した場合も、追加したファイルは自動的に Xcode の中に取り込まれます。
