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

バージョン 3.0 以降、コルドバすべてデバイス Api のプラグインとして実装して、既定で無効になっているそれらを残します。 追加し、プラグインを削除する 2 つの異なる方法もサポートしています。 最初を使用して、 `cordova` CLI コマンド ライン インターフェイスで記述されています。 低レベルの[Plugman][1]コマンド ライン インターフェイス ("ネイティブ プラットフォーム dev"ワークフロー。) を使用して 2 番目のです。これら 2 つの開発パスの主な違いはこと Plugman にのみ追加できますプラグイン 1 つのプラットフォームに、CLI が対象とするプラットフォームのすべてにプラグインを追加します。 このためときに、使用する Plugman している密接にそれ故に、単一のプラットフォームで、ワークフローの"ネイティブ プラットフォーム Dev"名前より理にかなって。

 [1]: https://github.com/apache/cordova-plugman/

についての詳細 Plugman、特に消費するノード モジュールとして Plugman または Plugman コード上でのハッキングに興味があるなら、[そのリポジトリ内の readme][2]を参照してください。.

 [2]: https://github.com/apache/cordova-plugman/blob/master/README.md

## Plugman をインストールします。

Plugman をインストールするには、コンピューターにインストールされている[ノード][3]が必要です。 その後、次を実行することができますがあなたのマシン上の任意のディレクトリから使用可能な世界的に、plugman をインストールする環境内で任意の場所からコマンド。

 [3]: http://nodejs.org/

    $ npm install -g plugman
    

あなたも持っている必要があります `git` に、 `PATH` プラグインをインストールするリモートの git Url から直接ことができます。

**のヒント：**Plugman 故宮をインストールした後あなたがいないまだいずれかを実行することができますを見つける場合 `plugman` 、コマンドを追加したことを確認して、 `/npm/` ディレクトリにあなた`PATH`.

**注：**グローバル Plugman をインストールすることによって、グローバル npm の名前空間を煩雑にしたくない場合は、この手順を省略できます。 このような場合、そのシェル ツールとコルドバ プロジェクトを作成するときがある場合、 `node_modules` ディレクトリを Plugman を含むプロジェクト内。 たとえばすべての Plugman コマンドのノードを起動する必要がありますのであなたがグローバルではなく instally、 `node ./node_modules/plugman/main.js -version` 。 このガイドの残りの部分だけでそれを呼び出すことができます意味、世界的に Plugman をインストールしたと仮定します`plugman`.

## コルドバのプロジェクトを作成します。

Plugman を使用することができます、前にコルドバのプロジェクトを作成する必要があります。 コマンド ライン インターフェイスを持つか低レベルのシェル スクリプトを使用します。 シェル スクリプトを使用してプロジェクトを作成するための手順は、プラットフォームのガイドのページに記載されている様々 な「コマンド ライン ツール」ガイドにあります。

## プラグインを追加します。

Plugman インストールされているコルドバ プロジェクトを作成した後でプラットフォームへのプラグインの追加を開始できます。

    $ plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin <name|url|path> [--plugins_dir <directory>] [--www <directory>] [--variable <name>=<value> [--variable <name>=<value> ...]]
    

最小限のパラメーターを使用して、このコマンドはコルドバ プロジェクトにプラグインをインストールします。 そのプラットフォーム用のプラットフォームとコルドバのプロジェクトの場所を指定する必要があります。 またを指定してくださいプラグインは、別の `--plugin` パラメーターを形成されています。

*   `name`: プラグイン コンテンツが存在するディレクトリ名。 これはの下で既存のディレクトリをする必要があります、 `--plugins_dir` コルドバ レジストリにプラグインまたはパス (さらに詳しい情報は、下記を参照)。
*   `url`: Https://または git で始まる URL://クローンを含む有効な git リポジトリを指している、 `plugin.xml` ファイル。 このリポジトリの内容にコピーされる、`--plugins_dir`.
*   `path`: を含む有効なプラグインが含まれているディレクトリへのパスを `plugin.xml` ファイル。このパスのコンテンツにコピーされます、`--plugins_dir`.

その他のパラメーター:

*   `--plugins_dir`既定値は `<project>/cordova/plugins` が、フェッチされるプラグイン任意のディレクトリの各サブディレクトリを含むことができます。
*   `--www`デフォルトで、プロジェクトの `www` フォルダーの場所、コルドバ プロジェクト アプリケーション web 資産として使用される任意のディレクトリにすることができます。
*   `--variable`指定する特定の変数、インストール時に必要な特定のプラグイン API キーまたはその他のカスタムのユーザー定義のパラメーターを必要とすることができます。 詳細については、[プラグインの仕様][4]を参照してください。

 [4]: plugin_spec.md

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