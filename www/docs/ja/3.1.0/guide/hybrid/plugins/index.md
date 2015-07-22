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

title: プラグイン開発ガイド
---

# プラグイン開発ガイド

コルドバ プラグイン橋コルドバ アプリケーションとネイティブ プラットフォーム コルドバ アプリケーション電源 WebView 間の機能のビットを実行しています。 プラグインはすべてのプラットフォーム、およびネイティブの実装を次の JavaScript への呼び出しをプラットフォーム固有のプラグインのインターフェイス間で使用される単一の java スクリプトの設定インタ フェースで構成されます。 コア コルドバ Api のすべては、このアーキテクチャを使用して実装されます。

このガイドの手順簡単なエコー プラグインを書くプロセス JavaScript から文字列を渡します、サポートされているプラットフォームのネイティブの環境に送信します。 ネイティブ コードは、プラグインの JavaScript の内部コールバックに戻る同じ文字列を返します。

このガイドはあなたをより複雑なプラグインを書く構築する十分な概要を提供します。

## Java スクリプトの設定

JavaScript の任意のプラグインのエントリ ポイントです。 コルドバは使用できるように理由の開発者使用と書き込み客観的 C でないしない Java、JavaScript いない c#。 あなたのプラグインの java スクリプトの設定インターフェイスはコルドバ プラグインの前面と恐らく間違いなく最も重要な部分です。

プラグインの java スクリプトの設定を構成するには、しかし、あなたのように。 コルドバ JavaScript およびネイティブ環境間の通信に使用する*必要があります*一つは、 `cordova.exec` 関数です。 ここで例に示します。

        cordova.exec(function(winParam) {}, function(error) {}, "service",
                     "action", ["firstArgument", "secondArgument", 42,
                     false]);
    

パラメーターは以下のとおりです。

*   `function(winParam) {}`: 成功時のコールバック関数。 仮定すると、 `exec` の呼び出しが正常に完了、この関数が呼び出されて (必要に応じて任意のパラメーターに渡す)。

*   `function(error) {}`: エラー関数コールバック。操作が正常に完了しない場合 (必要に応じてエラーのパラメーター) を持つこの関数が呼び出されます。

*   `"service"`: ネイティブ側への呼び出しをサービスの名前です。これについての詳細は以下にネイティブ ガイドで利用可能なネイティブ クラスにマップされます。

*   `"action"`: への呼び出しをアクション名。 これは、ネイティブ クラスの受信によってピックアップ、 `exec` 呼び出しと、プラットフォームに依存する本質的に、クラスのメソッドにマップします。 以下に示すネイティブのガイドの詳細を提供します。

*   `[/* arguments */]`: ネイティブ環境に渡す引数。

### エコーのプラグインの JavaScript の例

        window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

これを詳しく見ていきましょう。プラグインを自分自身を添付 `window` 、具体的に、 `echo` 関数です。プラグインのユーザーは次としてそれを使用しました。

        window.echo("echome", function(echoValue) {
            alert(echoValue == "echome"); // should alert true.
        });
    

最初に、最後の 3 つの引数を見てみましょう、 `exec` 関数です。 私たちを呼び出すことは、 `Echo` 「サービス」を要求する、 `echo` 「アクション」とエコーの文字列引数の配列を渡すことに最初のパラメーターは、 `window.echo` 関数。

成功時のコールバックに渡される `exec` は、コールバックへの参照を単に関数を `window.echo` かかります。 我々 は、もう少しエラー コールバック: 単に、成功時のコールバックを呼び出すし、「既定」の文字列を渡すネイティブ側エラー コールバックを起動、する場合。

## プラグイン仕様

コルドヴァにはアンドロイド, iOS の, ブラックベリー 10 および Windows Phone プラットフォームのプラグインの自動インストールを有効に利用できるプラグイン仕様。 追加すると、特定の方法であなたのプラグインを構築する `plugin.xml` マニフェスト ファイルは、コマンド ライン ツール経由であなたのプラグインをインストールするユーザーを有効にすることができます。

*   [プラグイン仕様](../../../plugin_ref/spec.html)

## ネイティブ

あなたのプラグインの java スクリプトの設定を定義した後は、少なくとも 1 つのネイティブ実装を補完する必要があります。 プラットフォームごとに詳細を以下に示します。 これらのガイドは、上記で説明した単純なエコー プラグイン例に構築していきます。

*   [Android のプラグイン](../../platforms/android/plugin.html)
*   [ブラックベリーのプラグイン](../../platforms/blackberry/plugin.html)
*   [ブラックベリー 10 プラグイン](../../platforms/blackberry10/plugin.html)
*   [iOS のプラグイン](../../platforms/ios/plugin.html)
*   [Windows Phone のプラグイン](../../platforms/wp8/plugin.html)

Tizen プラットフォームでは、現在のプラグインをサポートしていません。

## 公開プラグイン

あなたのプラグインを開発した後それを公開し、コミュニティと共有する場合があります。 あなたあなたのプラグイン （ [npmjs][1]に基づく） コルドバ レジストリに公開したり、他の npmjs に基づくレジストリ。 ユーザーは自動的に plugman またはコルドバ cli を使用してそれをインストールすることができます。

 [1]: https://github.com/isaacs/npmjs.org

プラグインを公開するには、plugman ツールを使用して、次の手順を通過する必要があります。

    $ plugman adduser # that is if you don't have an account yet
    $ plugman publish /path/to/your/plugin
    

だよ ！

レジストリ ベースのコマンドは利用可能な `plugman --help` は、使用できるコマンドは何およびそれらを使用する方法のリストを与えます。