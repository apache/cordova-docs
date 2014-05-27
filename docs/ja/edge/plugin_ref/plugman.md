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

# Plugman を使用してプラグインを管理するには

バージョン 3.0 以降、コルドバすべてデバイス Api のプラグインとして実装して、既定で無効になっているそれらを残します。 追加し、「概要」で説明したワークフローの選択に応じて、プラグインを削除する 2 つの異なる方法もサポートしています。

*   If you use a cross-platform workflow, you use the `cordova` CLI utility to add plugins, as described in The Command-Line Interface. The CLI modifies plugins for all specified platforms at once.

*   If you use a platform-centered workflow, you use a lower-level [Plugman][1] command-line interface, separately for each targeted platform.

 [1]: https://github.com/apache/cordova-plugman/

このセクションの詳細 Plugman ユーティリティ。 For more information on consuming Plugman as a node module or modifying the source code, see [the README file in its repository][2].

 [2]: https://github.com/apache/cordova-plugman/blob/master/README.md

## Plugman をインストールします。

Plugman をインストールするには、コンピューターにインストールされている[ノード][3]が必要です。 Then you can run the following command from anywhere in your environment to install plugman globally, so that it is available from any directory:

 [3]: http://nodejs.org/

    $ npm install -g plugman
    

あなたも持っている必要があります `git` に、 `PATH` プラグインをインストールするリモートの git Url から直接ことができます。

**TIP**: If you find that after installing plugman with `npm` you are still unable to run any `plugman` commands, make sure that you have added the `/npm/` directory into your `PATH`.

**NOTE**: You can skip this step if you don't want to pollute your global `npm` namespace by installing Plugman globally. If this is the case, then when you create a Cordova project with the shell tools, there will be a `node_modules` directory inside your project which contains Plugman. Since you did not install globally, you need to invoke `node` for each Plugman command, for example `node
./node_modules/plugman/main.js -version`. The rest of this guide assumes you have installed Plugman globally, meaning you can invoke it with just `plugman`.

## コルドバのプロジェクトを作成します。

Plugman を使用することができます、前にコルドバのプロジェクトを作成する必要があります。 コマンド ライン インターフェイスを持つか低レベルのシェル スクリプトを使用します。 シェル スクリプトを使用してプロジェクトを作成するための手順は、プラットフォームのガイドのページに記載されている様々 な「コマンド ライン ツール」ガイドにあります。

## プラグインを追加します。

Plugman インストールされているコルドバ プロジェクトを作成した後でプラットフォームへのプラグインの追加を開始できます。

    $ plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin <name|url|path> [--plugins_dir <directory>] [--www <directory>] [--variable <name>=<value> [--variable <name>=<value> ...]]
    

最小限のパラメーターを使用して、このコマンドはコルドバ プロジェクトにプラグインをインストールします。 そのプラットフォーム用のプラットフォームとコルドバのプロジェクトの場所を指定する必要があります。 またを指定してくださいプラグインは、別の `--plugin` パラメーターを形成されています。

*   `name`: The directory name where the plugin contents exist. This must be an existing directory under the `--plugins_dir` path (see below for more info) or a plugin in the Cordova registry.
*   `url`: Https://または git で始まる URL://クローンを含む有効な git リポジトリを指している、 `plugin.xml` ファイル。 このリポジトリの内容にコピーされる、`--plugins_dir`.
*   `path`: A path to a directory containing a valid plugin which includes a `plugin.xml` file. This path's contents will be copied into the `--plugins_dir`.

その他のパラメーター:

*   `--plugins_dir` defaults to `<project>/cordova/plugins`, but can be any directory containing a subdirectory for each fetched plugin.
*   `--www` defaults to the project's `www` folder location, but can be any directory that is to be used as cordova project application web assets.
*   `--variable` allows to specify certain variables at install time, necessary for certain plugins requiring API keys or other custom, user-defined parameters. Please see the [plugin specification][4] for more information.

 [4]: plugin_ref_spec.md.html#Plugin%20Specification

## プラグインを削除します。

単に渡すプラグインをアンインストールするには、 `--uninstall` フラグし、プラグイン ID を提供

    $ plugman --uninstall --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin <id> [--www <directory>] [--plugins_dir <directory>]
    

## ヘルプ コマンド

Plugman 動けなくなるまたは問題が発生した場合に役立つことがあるグローバル ヘルプ コマンドを備えています。すべての利用可能な Plugman コマンドとその構文の一覧が表示されます。

    plugman -help
    plugman  # same as above
    

**注**: `plugman -help` いくつかの追加のレジストリ関連のコマンドが表示場合があります。 これらのコマンドは、プラグインの開発者とサード パーティのプラグイン登録に実装されない可能性があります。

追加することもできます、 `--debug|-d` フラグが生成され、役立つことがありますどんな内部のデバッグ メッセージが表示されます詳細モードでこのコマンドを実行する Plugman コマンドを不足しているファイルのような問題を追跡します。

    # Adding Android battery-status plugin to "myProject":
    plugman -d --platform android --project myProject --plugin org.apache.cordova.battery-status
    

最後に、使用することができます、 `--version|-v` フラグを使用して Plugman のバージョンを参照してください。

    plugman -v
    

## レジストリの操作

[プラグイン レジストリ][5]とやり取りするために使用することができます plugman コマンドの数があります。 ご注意： これらレジストリ コマンドは*plugins.cordova.io*プラグイン レジストリに固有のサード パーティのプラグイン登録を実装することができません可能性があります。

 [5]: http://plugins.cordova.io

### プラグインを探してください。

[プラグイン レジストリ][5]プラグイン id キーワードの特定のスペースで区切られたリストに一致するを検索するのに Plugman を使用できます。

    plugman search <plugin keywords>
    

### プラグイン レジストリを変更します。

取得または、現在のプラグイン レジストリの URL を設定することができます plugman を使用しています。一般的にこれはサード パーティ プラグイン レジストリを使用する場合を除き、http://registry.cordova.io で設定しておきます。

    plugman config set registry <url-to-registry>
    plugman config get registry
    

### プラグインの情報を得る

任意のプラグインのリポジトリに格納されている特定のプラグインについての情報を得ることができます。

    plugman info <id>
    

これは、レジストリのプラグインとプラグインのバージョン番号などの情報をフェッチをご連絡いたします。

## コアのプラグインをインストールします。

以下の例はコルドバ Api をプロジェクトで使用するまだ動作バージョン 3.0 にアップグレードした後に必要に応じてプラグインを追加する方法を示します。各コマンド ターゲット プラットフォームを選択し、プラットフォームのプロジェクト ディレクトリを参照する必要があります。

*   cordova-plugin-battery-status
    
    plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.battery-status

*   cordova-plugin-camera plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.camera

*   cordova-plugin-console plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.console

*   cordova-plugin-contacts plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.contacts

*   cordova-plugin-device plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.device

*   cordova-plugin-device-motion (accelerometer) plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.device-motion

*   cordova-plugin-device-orientation (compass) plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.device-orientation

*   cordova-plugin-dialogs plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.dialogs

*   cordova-plugin-file plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.file

*   cordova-plugin-file-transfer plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.file-transfer

*   cordova-plugin-geolocation plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.geolocation

*   cordova-plugin-globalization plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.globalization

*   cordova-plugin-inappbrowser plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.inappbrowser

*   cordova-plugin-media plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.media

*   cordova-plugin-media-capture plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.media-capture

*   cordova-plugin-network-information plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.network-information

*   cordova-plugin-splashscreen plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.splashscreen

*   cordova-plugin-vibration plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.vibration