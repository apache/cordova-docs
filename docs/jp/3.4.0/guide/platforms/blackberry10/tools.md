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

# BlackBerry 10 コマンドライン ツール

異なるプラットフォームで動作するアプリのビルドを、`cordova` コマンドライン ユーティリティ上で、一度に行うことができます。以前のバージョンの Cordova フレームワークでも、各プラットフォームに対象を絞ったコマンドライン ツールを提供しています。新 CLI の代わりに、旧コマンドラインを使用する場合には、 [cordova.apache.org](http://cordova.apache.org) からダウンロードしてください。各プラットフォーム用のアーカイブ ( archive ) をご提供しています。ご希望のプラットフォーム下に置かれたアーカイブをクリックしてください。前述しているツール群は、通常、最上位 ( top-level ) の `bin` ディレクトリ内で使用します。それ以外の場合には、 __README__ の記載内容をご確認ください。

プラグインを組み込むときに使用するコマンドライン インターフェイスに関する情報は、『 Plugman を使用した、プラグインの管理 』 をご確認ください。概要に関しては、『 プラグイン開発ガイド 』 ( 原文 「 Application Plugins 」 ) をご確認ください。

下記のコマンドに関するヘルプを確認する場合には、コマンドの後ろに、オプションとして、 `-h` または `-help` を入力してください。
サポートしているオプションの一覧と解説を表示します。

## アプリの作成

The `create` コマンドを使用して、プロジェクトを新規作成します。

    bin/create <path-to-project> <project-package> <project-name>

オプションの解説をします。

- `<path-to-project>` では、作成したプロジェクトの保存先となるディレクトリを指定します。

- `<project-package>` では、逆ドメイン記法の識別子 ( reverse domain style identifier ) を指定します。 

- `<project-name>` では、アプリの表示名を指定します。

__注意__ : `create` コマンドでは、 `npm install` コマンドを使用して、依存性の処理も自動で行います。インストール先のディレクトリとシステム権限にもよりますが、この処理には、アドミニストレーションの権限が必要となるかもしれません。OSX/Linux 上で障害が発生した場合には、 `create` コマンドを実行する前に、 `sudo npm install` を実行してください。Windows の場合、アドミニストレーション権限を使用して、コマンドライン ユーティリティを立ち上げて、コマンドライン上で `npm install` を実行してください。

## Target の作成

`target` コマンドを使用して、アプリの検証時に使用する、エミュレータまたは BlackBerry 搭載デバイスを指定することができます。Target の追加・削除、または、デフォルトの Target を設定することができます。

### Target の追加

    <path-to-project>/cordova/target add <name> <ip-address> [-t | --type <device | simulator>] [-p | --password <password>] [--pin <device-pin>]

オプションの解説をします。

- `<name>` では、Target の識別名を指定します。

- `<ip-address>` では、BlackBerry デバイスまたはシミュレータの IP アドレスを指定します。

- `-p | --password <password>` では、デバイスまたはエミュレータのパスワードを指定します。デバイスまたはエミュレータにパスワード設定がされているときだけ、指定が必要です。

- `--pin <device-pin>` では、BlackBerry デバイスの PIN を指定します。PIN は、 デバッグトークン ( Debug Token ) を使用した開発において、使用するデバイスが有効なホストかどうかを識別するときに使用します。このオプションは、デバッグトークンを作成するときだけ、必要となります。

### Target の削除

    <path-to-project>/cordova/target remove <name>

### デフォルトで使用する Target の設定

    <path-to-project>/cordova/target default <name>

## アプリのビルド

`build` コマンドを使用して、.bar ファイル形式で、プロジェクトをビルドします。リリースモード ( 署名済み .bar ファイル )、または、デバッグモード ( 署名なしの .bar ファイル ) のアプリをビルドできます。

### リリースモードでのアプリのビルド

    <path-to-project>/cordova/build release [-k | --keystorepass <password>] [-b | --buildId <number>] [-p | --params <params-JSON-file>]

オプションの解説をします。

-   `-k | --keystorepass <password>`  では、アプリに署名をするために、コンピュータの設定時に使用したパスワードを指定します。

-   `-b | --buildId <number>`  では、アプリのビルドバージョン番号を指定します。通常、この番号は、以前の署名済みバージョンの番号をアップグレードしたものです。このオプションは任意です。

-   `-p | --params <params-JSON-file>`  では、JSON ファイルを指定します。このファイルには、ツール ( downstream tool ) に渡す、追加のパラメータが記述されています。このオプションは任意です。

### デバッグモードでのアプリのビルド

    <path-to-project>/cordova/build debug [<target>] [-k | --keystorepass <password>] [-p | --params <params-JSON-file>]  [-ll | --loglevel <error|warn|verbose>]

オプションの解説をします。

- `<target>` では、前述の手順 ( Target の追加 ) で追加した Target の名前を指定します。 `<target>` を指定しない場合、デフォルトの Target を設定していれば、そちらが使用されます。BlackBerry デバイスまたはエミュレータにアプリを展開するときにスクリプトを使用する場合、および、デフォルトの Target を設定していない場合だけ、このオプションを使用します。 `<target>` がデバイス ( 実機 ) の場合、そのデバイスは、USB または Wi-Fi ネットワーク経由で、コンピュータと接続されている必要があります。

- `-k | --keystorepass <password>` では、アプリに署名をするために、コンピュータの設定時に使用したパスワードを指定します。このパスワードは、デバッグトークンの生成時にも使用します。このオプションは、デバッグトーキンの生成時・インストール時に、スクリプトを使用する場合だけ、必要となります。

- `-p | --params <params-JSON-file>`  は、JSON ファイルを指定します。このファイルには、ツール ( downstream tool ) に渡す、追加のパラメータが記述されています。

- `-ll | --loglevel <level>` では、ログ出力のレベルを指定します。レベルは、 `error` 、 `warn` 、 `verbose` のいずれかとなります。

前述の手順でデフォルトの Target を設定している場合 ( デフォルトの Target が BlackBerry デバイスの場合には、デバッグトークンはインストール済みであること )、オプションなしで、スクリプトを実行することもできます。また、スクリプトを実行すると、アプリのパッケージ化とデフォルトの Target への展開を行います。例を以下に記します。

    <path-to-project>/cordova/build debug

## アプリの実行

`run` コマンドを使用して、指定した BlackBerry デバイスまたはエミュレータ上で、最新ビルドのアプリを展開します。アプリの展開時には、Target のデバイスまたはエミュレータを指定する必要があります。

    <path-to-project>/cordova/run <target>

オプションの解説をします。

- `<target> `では、前述の手順 ( Target の追加 ) で追加した Target の名前を指定します。 `<target>` がデバイス ( 実機 ) の場合、そのデバイスは、USB または Wi-Fi ネットワーク経由で、コンピュータと接続されている必要があります。

## Handle Plugins
## プラグインの取り扱い

`target` コマンドを使用して、プラグインの追加・削除を行います。ローカルに置いてあるプラグインを使用 ( fetch ) する方法を以下に記します。

    <path-to-project>/cordova/plugin fetch <path-to-plugin>

インストールしたプラグインの一覧を表示します。

    <path-to-project>/cordova/plugin ls

プラグインを追加します。

    <path-to-project>/cordova/plugin add <name>

プラグインを削除します。

    <path-to-project>/cordova/plugin rm <name>
