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

# プラグイン開発ガイド

*プラグイン*は、それが実行されているネイティブ プラットフォームと通信を表示するアプリをコルドバ webview を許可する挿入されたコードのパッケージです。 プラグインは通常 web ベースのアプリケーションに使用可能なデバイスとプラットフォームの機能へのアクセスを提供します。 すべての主要なコルドバ API 機能、プラグインとして実装されますされ他の多くのバー コード スキャナー、NFC 通信などの機能を有効にするまたはインターフェイス カレンダーを調整します。

プラグインはサポートされる各プラットフォーム用の対応するネイティブ コード ライブラリと共に単一の java スクリプトの設定インタ フェースを構成します。 JavaScript からネイティブ プラットフォームとはるかに複雑な機能を構築するモデルとして使用することができます 1 つ背面に文字列を渡します、簡単な*エコー*プラグインを介してこのセクションの手順します。 基本的なプラグイン構造と向き JavaScript インターフェイスについて説明します。 各対応するネイティブ インターフェイスはこのセクションの最後にリストを参照してください。

に加えてこれらの手順は、プラグインを作成する[既存のプラグイン][1]の指導のために目を通すことをお勧めする準備。

 [1]: https://github.com/apache/cordova-android/tree/master/framework/src/org/apache/cordova

## プラグインの作成

アプリケーション開発者は、CLI を使用して `plugin add` コマンド (コマンド ライン インターフェイスで説明します)、プラグイン プロジェクトに適用します。 そのコマンドの引数は、プラグイン コードを含む*git*リポジトリの URL です。 この例では、コルドバのデバイス API を実装します。

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-device.git
    

プラグイン ・ リポジトリーのトップレベル機能する必要があります `plugin.xml` マニフェスト ファイル。 詳細については、プラグインの仕様でこのファイルを構成する多くの方法があります。 この簡略化されたバージョンの `Device` プラグインのモデルとして使用する簡単な例を提供します。

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
    

最上位レベル `plugin` タグの `id` 属性同じ逆ドメイン形式を使用して、彼らにアプリを追加しているプラグイン パッケージを識別します。 `js-module`タグを JavaScript の共通インターフェイスへのパスを指定します。 `platform`タグのネイティブ コードの対応する設定を指定します、 `ios` この場合のプラットフォーム。 `config-file`タグをカプセル化する `feature` はプラットフォーム固有に注入されるタグ `config.xml` 、プラットフォームの認識させる付加的なコード ライブラリ ファイル。 `header-file`と `source-file` タグ ライブラリのコンポーネント ファイルへのパスを指定します。

## プラグインの検証

使用できます、 `plugman` 各プラットフォーム用のプラグインが正しくインストールされるかどうかを確認するユーティリティです。 インストール `plugman` [ノード][2]の次のコマンドで：

 [2]: http://nodejs.org/

        $ npm install -g plugman
    

最上位レベルなど、有効なアプリケーション ソース ディレクトリ必要があります `www` コマンド ライン インターフェイスでの説明に従ってデフォルト CLI で生成されたプロジェクトに含まれているディレクトリ。 確認して、アプリの `index.html` ホーム ページ プラグインの java スクリプトの設定インタ フェースの名前を参照は、同じソース ディレクトリであった場合と同様。

        <script src="myplugin.js"></script>
    

IOS の依存関係を正しく読み込むかどうかをテストするなど、次のコマンドを実行します。

        $ plugman -platform ios /path/to/my/project/www /path/to/my/plugin
    

詳細については `plugman` オプションは、管理プラグインを使用して Plugman を参照してください。 実際にプラグインを*デバッグ*する方法については、このページの下部に記載されている各プラットフォームのネイティブ インターフェイスを参照してください。

## Java スクリプトの設定インターフェイス

JavaScript は、プラグインのおそらく最も重要な部分を作る正面のインターフェイスを提供します。 プラグインの java スクリプトの設定を構成するにはしかしを呼び出す必要があります `cordova.exec` 、次の構文を使用して、ネイティブ プラットフォームと通信するために：

        cordova.exec(function(winParam) {},
                     function(error) {},
                     "service",
                     "action",
                     ["firstArgument", "secondArgument", 42, false]);
    

ここでは、各パラメーターの動作です。

*   `function(winParam) {}`: 成功コールバック関数。仮定すると、 `exec` の呼び出しが正常に完了、およびすべてのパラメーターを渡します。 この関数を実行します。

*   `function(error) {}`エラー ・ コールバック関数。操作が正常に完了しない場合この関数は省略可能なエラーのパラメーターを持つ実行します。

*   `"service"`: をネイティブ側で呼び出すサービス名。これは、詳細については以下にネイティブ ガイドで利用可能なネイティブ クラスに対応します。

*   `"action"`: をネイティブ側で呼び出すアクション名。これは一般に、ネイティブ クラスのメソッドに対応します。次に示すネイティブのガイドを参照してください。

*   `[/* arguments */]`: ネイティブ環境に渡す引数の配列。

## サンプル java スクリプトの設定

プラグインの java スクリプトの設定インターフェイスを実装する方法を示します。

        window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

この例では、プラグインを自分自身を添付、 `window` オブジェクトとして、 `echo` 関数は、プラグインのユーザーは次のように呼び出します。

        window.echo("echome", function(echoValue) {
            alert(echoValue == "echome"); // should alert true.
        });
    

最後の 3 つの引数を見て、 `cordova.exec` 関数です。 最初の呼び出し、 `Echo` *サービス*クラスの名前。 2 番目の要求、 `echo` *アクション*、そのクラス内のメソッドです。 3 番目はエコーの文字列を含む引数の配列は、 `window.echo` 関数の最初のパラメーター。

成功時のコールバックに渡される `exec` は、コールバック関数への参照を単に `window.echo` かかります。 ネイティブ プラットフォーム エラー コールバックが起動し、成功コールバックを呼び出します単に既定の文字列を渡します。

## ネイティブ ・ インタ フェース

あなたのプラグインの java スクリプトの設定を定義した後は、少なくとも 1 つのネイティブ実装を補完する必要があります。 各プラットフォームの詳細は、以下のとおりし、エコー プラグインの簡単な例に基づいてそれぞれ。

*   アマゾン火 OS プラグイン
*   Android のプラグイン
*   iOS のプラグイン
*   ブラックベリー 10 プラグイン
*   Windows Phone のプラグイン

Tizen プラットフォームのプラグインをサポートしていません。

## 公開プラグイン

一度あなたのプラグインを開発するに公開され、コミュニティと共有したい場合があります。 コルドバ レジストリをあなたのプラグインを公開できます (に基づく[ `npmjs` ][3]) またはその他 `npmjs` -レジストリ ベースします。 他の開発者が自動的にいずれかの方法をインストールすることができます `plugman` またはコルドバ CLI。 (各開発パスの詳細は、管理プラグインと、コマンド ライン インターフェイスを使用して Plugman を参照してください)。

 [3]: https://github.com/isaacs/npmjs.org

使用する必要がありますプラグインを公開して、 `plugman` ツールし、次の手順を経る。

    $ plugman adduser # that is if you don't have an account yet
    $ plugman publish /path/to/your/plugin
    

だよ ！

実行している `plugman --help` 他の使用可能なレジストリ ベースのコマンド一覧が表示されます。