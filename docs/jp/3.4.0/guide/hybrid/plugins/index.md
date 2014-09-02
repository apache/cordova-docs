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

# プラグインの開発ガイド

_プラグイン_ とは、アプリ実行時のレンダリングに使用する Cordova WebView とネイティブプラットフォーム間の通信を行うときに使用・注入 ( inject ) するコードのパッケージのことを指します。プラグインを使用することにより、Web 系のアプリでは通常利用できなかった、デバイスとプラットフォームの機能にアクセスできるようになります。
Cordova API が提供する主な機能は、プラグインとして実装することになります。また、他にも、バーコードスキャナーおよび NFC 通信機能の提供
、ならびに、カレンダーインターフェイスの編集も行っています。

プラグインは、1 個の JavaScript インターフェイスおよび ( サポート対象の各プラットフォームの ) 対応するネイティブコードの複数のライブラリ から構成されています。
この節では、JavaScript とネイティブプラットフォーム間で、ある文字列のやり取りを行う、簡単な _echo_ ( エコー ) プラグインを使用した開発手順の解説を行います。この例を基本として、より複雑な機能をビルドすることもできるでしょう。また、この節では、プラグインの基本的な構造およびネイティブ側への JavaScript インターフェイス ( outward-facing JavaScript Interface ) に関しても議論しています。各ネイティブインターフェイスの詳細に関しては、この節の最後に記載している一覧をご確認ください。

プラグインの構築準備をしているときには、ここに記載されている手順に加え、 [既存のプラグイン](https://github.com/apache/cordova-android/tree/master/framework/src/org/apache/cordova) ガイダンスもご確認ください。

## プラグインのビルド

アプリの開発者は、CLI の `plugin add` コマンド ( 詳細は、『 コマンドライン インターフェイス 』 を参照 ) を使用して、プロジェクトにプラグインを実装させます。
このコマンドの引数には、プラグインコードを格納している _git_ レポジトリーの URL を指定します。ここで示す例では、Cordova の Device API を使用します。

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-device.git

プラグインのレポジトリーには、最上位 ( top-level ) に位置する  `plugin.xml` マニュフェスト ファイルを格納している必要があります。このファイルの設定方法はいくつかありますが、詳細は、『 プラグイン開発ガイド 』 ( 原文 「 Plugin Specification 」 ) をご確認ください。こちらの `Device` プラグインを使用した簡易な例では、基本的な使用法を示しています。

        <?xml version="1.0" encoding="UTF-8"?>
        <plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
                id="org.apache.cordova.device" version="0.2.3">
            <name>Device</name>
            <description>Cordova Device Plugin</description>
            <license>Apache 2.0</license>
            <keywords>cordova,device</keywords>
            <js-module src="www/device.js" name="device">
                <clobbers target="device" />
            </js-module>
            <platform name="ios">
                <config-file target="config.xml" parent="/*">
                    <feature name="Device">
                        <param name="ios-package" value="CDVDevice"/>
                    </feature>
                </config-file>
                <header-file src="src/ios/CDVDevice.h" />
                <source-file src="src/ios/CDVDevice.m" />
            </platform>
        </plugin>

最上部の `plugin` タグの `id` 属性では、アプリにプラグインを追加するときと同じように、逆引きドメイン形式 ( reverse-domain format ) の識別子を使用して、プラグインパッケージを指定します。
`js-module` タグでは、汎用 JavaScript インターフェイスへのパス ( path ) を指定します。 `platform` タグでは、対応するネイティブコードを指定します。ここでは、 `ios` となります。 `config-file` タグでは、 追加のコードライブラリが存在することをプラットフォームに通知するために `feature` タグを囲い、各プラットフォームの `config.xml` ファイルへの注入 ( inject ) を行っています。 `header-file` と `source-file` タグでは、ライブラリのコンポーネントファイルへのパスを指定します。

## プラグインの確認

`plugman` ユーティリティを使用して、各プラットフォームに、プラグインが正しくインストールされているか確認できます。以下の [node](http://nodejs.org/) コマンドを使用して、 `plugman` をインストールします。

        $ npm install -g plugman

CLI を使用して作成したプロジェクト ( デフォルト設定 ) に含まれる、最上位 ( top-level ) の `www` ディレクトリのような、有効なアプリのソースディレクトリが必要です ( 『 コマンドライン インターフェイス 』 を参照のこと )。　アプリの `index.html` ( ホームページ ) では、あたかも同じソースディレクトリに置かれているかのように、プラグインの JavaScript インターフェイスの名前を参照する必要があります。

        <script src="myplugin.js"></script>

次に、以下のようなコマンドを実行して、iOS の関連リソースが正しく読み込まれているか確認します。

        $ plugman -platform ios /path/to/my/project/www /path/to/my/plugin

`plugman` 関連のオプションの詳細に関しては、『 Plugman を使用した、プラグインの管理 』 を参照してください。プラグインの実際の _デバック_ 方法に関しては、このページの下に記載している各プラットフォームのネイティブインターフェイス一覧をご確認ください。

## JavaScript インターフェイス

JavaScript を使用して、ユーザ側のインターフェイス ( front-facing interface ) を構築します。プラグインの重要な役割として、このユーザインターフェイスの提供があります。プラグイン側の JavaScript は自由に構築できますが、ネイティブプラットフォームとやり取りをするときには、 `cordova.exec` を
呼び出す必要があります。以下に例を示します。

        cordova.exec(function(winParam) {},
                     function(error) {},
                     "service",
                     "action",
                     ["firstArgument", "secondArgument", 42, false]);

各パラメータの説明をします。

- `function(winParam) {}`: 成功時のコールバック関数。 `exec` の処理が成功した場合、引き渡したパラメータを使用して、
この関数を実行します。

- `function(error) {}`: 失敗時のコールバック関数。処理が失敗した場合、任意のエラーパラメータを使用して、この関数を実行します。

- `"service"`: ネイティブ側を呼び出すときに使用するサービス名。ネイティブクラスと対応付けます。詳細に関しては、下記のネイティブガイドの一覧をご確認ください。

- `"action"`: ネイティブ側を呼び出すときに使用するアクション名。通常は、ネイティブクラスのメソッドと対応付けます。下記のネイティブガイドの一覧をご確認ください。

- `[/* arguments */]`: ネイティブ環境側に渡す、引数の配列。

## JavaScript サンプル

プラグインの JavaScript インターフェイスの実装方法の一例を示します。

        window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };

この例のプラグインは、 `echo` 関数として、 `window` オブジェクトに自身をアタッチ ( attach ) します。
プラグインのユーザは、以下のように呼び出しを行います。

        window.echo("echome", function(echoValue) {
            alert(echoValue == "echome"); // True を返します。
        });

`cordova.exec` 関数の引数の内、後ろから 3 つの引数を見てください。最初に、 `Echo` _サービス_ ( クラス名 ) を呼んでいます。2 番目に `echo` _アクション_ ( そのクラスが持つメソッド ) をリクエストしています。3 番目は、エコー用の引数を格納した配列です。この場合、 `window.echo` 関数の最初のパラメータが格納されています。

`exec` に渡された成功時のコールバックは、単に、 `window.echo` が行うコールバック関数を参照しています。失敗時のコールバック関数を、ネイティブプラットフォーム側が発火させた場合、単に、成功時のコールバック関数を呼び出し、デフォルトの文字列を渡します。

## ネイティブ側のインターフェイス

開発者独自のプラグインの JavaScript を定義したあとは、ネイティブ側の実装と、少なくとも 1 つ以上、組み合わせます。各プラットフォームの詳細は、以下の一覧のリンク先をご確認ください。また、参照先のビルドでは、上記の Echo プラグインの例を使用しています。

- Amazon Fire OS プラグイン
- Android プラグイン
- iOS プラグイン
- BlackBerry 10 プラグイン
- Windows Phone プラグイン

Tizen プラットフォームでは、プラグインをサポートしていません。

## プラグインの公開

開発者独自のプラグインを開発したあと、プラグインの公開とコミュニティへの提供を行いたい場合、cordova レジストリ ( registry ) へプラグインを公開できます ( [`npmjs`](https://github.com/isaacs/npmjs.org) を使用 )。または、 `npmjs` を使用しているレジストリなら同様に公開できます。開発者は、 `plugman` または Cordova CLI のいづれかを使用して、自動的にプラグインをインストールできます ( 開発手順の詳細は、『 Plugman を使用した、プラグインの管理 』 および 『 コマンドライン インターフェイス 』 をご確認ください )。

プラグインの公開には、 `plugman` ツールを使用して、以下の手順を行う必要があります。

    $ plugman adduser # that is if you don't have an account yet
    $ plugman publish /path/to/your/plugin

これで完了です。

`plugman --help`　を実行すると、利用可能なレジストリ関連のコマンドの一覧を表示します。
