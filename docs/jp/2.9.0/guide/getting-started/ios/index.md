/--
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

Getting Started with iOS
========================

このガイドは、 Apache Cordova のための開発環境セットアップ方法、また Apache Cordova のサンプルアプリの動かし方を解説します。

必要なもの
---------------
- Xcode 4.5+
- Xcode コマンドラインツール
- Intel ベースの Mac OS X Lion 以上 (10.7+)
- デバイスへのインストールに必要なもの:
    - Apple iOS デバイス (iPhone, iPad, iPod Touch)
    - iOS デベロッパー証明書

SDK と Apache Cordova のインストール
------------------------

- [Mac App Store](http://itunes.apple.com/us/app/xcode/id497799835?mt=12) または [Apple Developer Downloads](http://developer.apple.com/downloads) から **Xcode** をインストールします。
- **Xcode コマンドラインツール** (**Xcode Preferences -> Downloads -> Components -> Command Line Tools -> Install**) をインストールします。
- [Apache Cordova](http://phonegap.com/download) の最新版をダウンロードします。
    - ダウンロードしたものを解凍します
    - Apache Corder iOS は `lib/ios` ディレクトリ以下にあります

CordovaLib のインストール
------------------

1. Cordova を **ダウンロード** します
2. ダウンロードしたものを、ハードディスクの恒久的な場所に **解凍** します (例: ~/Documents/CordovaLib-2.X.X)
3. Step 3 はありません

新規プロジェクトの作成
--------------------

- **Terminal.app** を起動します
- (上の **CordovaLib のインストール** セクションで解凍した恒久的な場所にある) **bin** フォルダーを Dock にある **Terminal.app** のアイコンにドラッグします。これにより、新しいターミナルのウィンドウが開きます
- `./create <project_folder_path> <bundle_id> <project_name>` を入力し、 **"Enter"** を押します

        <project_folder_path> は新しい Cordova iOS プロジェクトへのパスを表します (もし既に存在する場合は、空である必要があります)
        <package_name> はリバースドメインスタイルのパッケージ名を表します
        <project_name> はプロジェクト名を表します

    ![](img/guide/getting-started/ios/bin_create_project.png)


- たった今作成した新しいプロジェクトフォルダーを **見つけます**
- フォルダーの中の .xcodeproj を **起動します**

**注意:**
Cordova 2.2 から、プロジェクトが Cordova インストール内の CordovaLib のコピーへ依存していたのに代わり、
プロジェクトが CordovaLib のコピーをプロジェクト内に持つようになりました。

もしプロジェクトが Cordova インストール内の CordovaLib に直接依存するようにしたい場合は、
`./create --shared` が使用できます。または、プロジェクトを作成した後で
`./update_cordova_subproject path/to/you/project` とすることで、参照を変更できます。

シミュレーターへのデプロイ
-----------------------

- ツールバーにあるドロップダウンメニューから **Target** を **"HelloWorld"** (あなたのプロジェクト名) に変更します
- ツールバーにあるドロップダウンメニューから **Active SDK** を **iOS [version] Simulator** に変更します

    ![](img/guide/getting-started/ios/active_scheme_simulator.png)

- プロジェクトウィンドウのツールバーにある _Run_ ボタンをクリックします

デバイスへのデプロイ
--------------------

- **Resources** グループの中にある `HelloWorld-Info.plist` を開きます
- **BundleIdentifier** を Apple から提供された Identifer 、または自分の Identifer に変更します
    - もし開発者ライセンスを持っている場合は、 [Assistant] (http://developer.apple.com/iphone/manage/overview/index.action) よりアプリを登録できます
- ツールバーにあるドロップダウンメニューから **Target** を **"HelloWorld"** (あなたのプロジェクト名) に変更します
- ツールバーにあるドロップダウンメニューから **Active SDK** を **[あなたのDevice名]** に変更します
    - デバイスを USB で接続する必要があります

    ![](img/guide/getting-started/ios/active_scheme_device.png)

- プロジェクトウィンドウのツールバーにある _Run_ ボタンをクリックします

結果
----------------
- 緑色の点滅した **"device is ready"** のメッセージを伴った画面が見えるはずです

    ![](img/guide/getting-started/ios/HelloWorldStandard.png)

Xcode の問題
----------------
もしヘッダーが無いなどに関連した編集での問題がある場合、ビルドプロダクトは **同じビルドディレクトリでビルドする** 必要があります。**"Xcode Preferences -> Locations -> Derived Data -> Advanced…"** の設定を **"Unique"** に変更する必要があるかもしれません。これは Xcode をインストールした直後のデフォルト設定ですが、もし古いバージョンからアップグレードした場合は昔の設定が残っており、その場合はアップデートする必要があります。



アプリを作成
--------------

これで Xcode プロジェクトのセットアップが完了し、シミュレーターまたはデバイスでビルドし動かすことが出来ます。
アプリを書くために、 Xcode を使用する必要はありません。
あなたの好きなテキストエディターを使い、 Xcode 、またはプロジェクトフォルダ (**cordova** サブフォルダー) 内で [コマンドラインツール](guide_command-line_index.md.html) でリビルド作業を行えます。
Xcode は自動的に `www` ディレクトリ内にあるファイルの変化を検出します。

コマンドラインツールの問題
----------------
もし **"Error: No developer directory found at /Developer. Run /usr/bin/xcode-select to update the developer directory path."** というエラーを見る場合、 Developer フォルダーを設定するために以下を実行してください:

    sudo /usr/bin/xcode-select -switch /Applications/Xcode.app/Contents/Developer
