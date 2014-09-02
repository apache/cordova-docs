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

# Windows Phone プラグイン

この節では、Windows Phone プラットフォームにおけるネイティブプラグインコードの実装方法の詳細に関して解説します。この節を読む前に、
『 プラグイン開発ガイド 』 ( 原文 「 Application Plugins 」 ) を読み、プラグインの構造と JavaScript の汎用インターフェイスの概要をご確認ください。
この節では、Cordova Webview とネイティブプラットフォーム間で通信を行う、_echo_ プラグインのサンプルを引き続き使用して、解説を行います。

Windows Phone 上で Cordova のプラグインを構築する場合、Cordova の構造に関する理解が必要です。Cordova-WP7 では、アプリ側の JavaScript のホスト役となり、また、ネイティブ API の呼び出し制御を行う、 `WebBrowser` を使用します。必要となる機能群をほぼ網羅している、C# の `BaseCommand` クラス ( `WP7CordovaClassLib.Cordova.Commands.BaseCommand` ) を拡張することができます。

1. プロジェクトを選択して、右クリックをして、 __Add &rarr; New
   Item...__ を選択してください。 `Plugins` フォルダーに新規アイテムを追加することもできます。

2. __Class__ を選択して、 `Echo.cs` と名付けます。クラス名は、 JavaScript 側の `cordova.exec()` 内で service ( サービス ) として指定したものと _同じ名前_ にする必要があります。

3. 基本クラス ( base class ) をインクルード ( include ) します。

        using WPCordovaClassLib.Cordova;
        using WPCordovaClassLib.Cordova.Commands;
        using WPCordovaClassLib.Cordova.JSON;

4. `BaseCommand` からクラスを拡張します。

        public class Echo : BaseCommand
        {
            // ...
        }

5. JavaScript 側から呼び出せる `echo` メソッドを追加します。

        public class Echo : BaseCommand
        {
            public void echo(string options)
            {
                // JS から呼ぶことのできるプラグインメソッドは、このシグネチャ () を保持する必要があります
                // public、void 型の戻り値、 文字列の引数 1 つ
            }
        }

プラグインでオーバーライド ( override ) を行えるクラスのメソッドに関しては、 [BaseCommand.cs](https://github.com/apache/cordova-wp7/blob/master/templates/standalone/cordovalib/Commands/BaseCommand.cs) をご確認ください。たとえば、 'pause' と 'resume' イベントを、プラグインはオーバーライドすることができます。

## 名前空間

カスタマイズする処理の名前空間は、デフォルトでは、以下のようになります。

        namespace Cordova.Extension.Commands
        {
            // ...
        }

独自の名前空間を指定したい場合には、 `cordova.exec` に対して、正当な型の呼び出しを行う必要があります。たとえば、C# のクラスを以下のように定義したい場合には、
JavaScript では以下のように `exec` を呼び出す必要があります。

C#　クラスの定義 ：

        namespace com.mydomain.cordovaExtensions
        {
            public class Echo : BaseCommand
            {
                // ...
            }
        }

JavaScript 側 ：

        cordova.exec(win, fail, "com.mydomain.cordovaExtensions.Echo", ...);

## C# における引数の解釈

『 プラグイン開発ガイド 』 ( 原文 「 Application Plugins 」 ) で使用した例では、開発者のプラグインが受け取るデータは文字列でしたが、文字列の配列を渡したい場合には、どんな処理をすればよいのでしょうか？
JavaScript 側の `cordova.exec` は、以下のように定義されているとします。

        cordova.exec(win, fail, "Echo", "echo", ["input string"]);

`Echo.echo` メソッドに渡された、`options` 文字列の値は、JSON です。

        "[\"input string\"]"

JavaScript 側の `exec` のすべての引数は、C# に渡される前は、JSON 形式でエンコード化されます。そのため、デコード処理 ( decode ) が必要となります。

        string optVal = JsonHelper.Deserialize<string[]>(options)[0];
        // optVal の値は、現在、 "input string" となります

## C# から JavaScript への結果の引き渡し

`BaseCommand` クラスでは、JavaScript のコールバック ハンドラーにデータを渡すメソッドを提供しています。結果を渡さず成功の合図のみ行う場合には、以下の呼び出を行います。

        DispatchCommandResult();
        // 空の結果を使用して、コールバックを行います。成功時のコールバックとみなされます。

データを返す場合には、異なる方法で、 `DispatchCommandResult` を呼び出す必要があります。

        DispatchCommandResult(new PluginResult(PluginResult.Status.OK, "計画通りに処理が終了しました。その結果を成功時のコールバックハンドラーへ渡します。"));

構造化されたオブジェクトのデータ ( structured object data ) を JavaScript 側へ返す場合、JSON 形式でエンコード化している文字列を使用します。

        DispatchCommandResult(new PluginResult(PluginResult.Status.OK, "{result:\"super awesome!\"}"));

実行に失敗した場合、 `ERROR` ステータスを持つ `PluginResult` オブジェクトを使用して、 `DispatchCommandResult` を呼び出します。

        DispatchCommandResult(new PluginResult(PluginResult.Status.ERROR, "Echo からエラーが返ってきました。"));

## シリアル化エラー ( Serialization Error ) の処理

引数の解釈を行うとき、 `try`/`catch` ブロックを使用して、障害発生時の状態を画面に表示させると便利です。
以下のようなパターンのコードを、Cordova C# コード全体に組み込みます。

        string optVal = null;

        try
        {
            optVal = JsonHelper.Deserialize<string[]>(options)[0];
        }
        catch(Exception)
        {
            // simply catch the exception, we handle null values and exceptions together
        }

        if (optVal == null)
        {
            DispatchCommandResult(new PluginResult(PluginResult.Status.JSON_EXCEPTION));
        }
        else
        {
            // ... continue on to do our work
        }

## Plugin.xml

ここでは、Windows Phone プラットフォームで、プラグインのソースファイルを指定するために使用する `plugin.xml` ファイルの使用方法に関して解説します。概要に関しては、『 プラグイン開発ガイド 』 ( 原文 「 Application Plugins 」 )  を、使用可能なオプションなどの詳細に関しては、各プラットフォームの 『 プラグイン 』 ( 原文 「 Plugin Specification 」 ) をご確認ください。

- `<source-file>` 要素を使用して、プラグインが使用するリソース ( _.cs_ 、 _.xaml_ 、 _.xaml.cs_ 、 _.dll_ ファイル、および、イメージ関連のリソース ) を指定します。

- `<config-file>` 要素を使用して、設定ファイルへ注入 ( inject ) するリソースを指定します。以下の例では、プラットフォームの `config.xml` ファイルへプラグインを 1 つ追加しています。

        <config-file target="config.xml" parent="/*">
            <feature name="PluginName">
                <param name="wp-package" value="PluginName"/>
            </feature>
        </config-file>

こちらの例では、連絡先のデータにアクセスするための機能を、 `WMAppManifest.xml` に追加します。

        <config-file target="Properties/WMAppManifest.xml" parent="/Deployment/App/Capabilities">
            <Capability Name="ID_CAP_CONTACTS" />
        </config-file>

## プラグインのデバッグ

プラグインの C# コンポーネントのデバッグを行う場合、Visual Studio 搭載のデバッガを使用します。開発者のクラスが使用するメソッドにブレークポイント ( break point ) を設定できます。

Windows Phone における JavaScript のデバッグは、より困難です。 `console.log` を使用して、プラグインの状態の出力またはエラーの出力を行なう必要があります。

## よくある失敗

- JavaScript からネイティブ側へ引数を渡すとき、JSON の逆シリアル化 ( deserialize ) を行うことが困難な引数を渡さないように注意してください。
デバイスのプラットフォーム側では、 `cordova.exec()` に渡す引数は、以下のような配列形式を想定しています。

        cordova.exec(win, fail, "ServiceName", "MethodName", ["this is a string", 54, {literal:'trouble'}]);

    こちらは、C# 側でデコード ( decode ) を行うには、多少、複雑な文字列となってしまいます。

        "[\"this is a string\", 54, { literal:'trouble' }]"

    代わりに、 `exec()` を呼ぶ前に、 _すべての_ パラメータを文字列に変換して、そして、個別にデコードしてみましょう。 

        cordova.exec(win, fail, "ServiceName", "MethodName", ["this is a string", "54", "{literal:'trouble'}"]);
        string[] optValues = JsonHelper.Deserialize<string[]>(options);

- `exec()` を呼び出す前に、JavaScript のパラメータの確認を行うことを推奨します。確認を行うことにより、プラグインのネイティブ側のコードの再利用や不必要な機能の省略を行うことができます。