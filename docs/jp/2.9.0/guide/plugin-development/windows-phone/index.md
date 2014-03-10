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

Developing a Plugin on Windows Phone
====================================

Windows Phone プラグインの開発には、 Cordova のアーキテクチャの理解が必要です。
Cordova-WP7 は Javascript コードをホストし、
ネイティブの API 呼び出しを管理する WebBrowser から構成されています。
C# には継承可能な BaseCommand (`WP7CordovaClassLib.Cordova.Commands.BaseCommand`) クラスがあり、
このクラスは開発者のために大半の基本的な機能を保持しています。

1. プロジェクトを選択し、右クリックから 'Add -> New Item ...' を選びます
    - どこに追加するかはあなたの自由ですが、できれば 'Plugins' フォルダーに追加してください
2. 'Class' を選択し `Echo.cs` と名前をつけます
    - このクラスの名前は `cordova.exec(win, fail, "Echo", ...)` で呼び出す名前と完全に一致している必要があります
3. ベースクラスをインクルードします

        using WP7CordovaClassLib.Cordova;
        using WP7CordovaClassLib.Cordova.Commands;
        using WP7CordovaClassLib.Cordova.JSON;

4. BaseCommand クラスを継承します

        public class Echo : BaseCommand
        {
            // ...
        }

5. JS から呼び出し可能なメソッドを追加します

        public class Echo : BaseCommand
        {
            public void echo(string options)
            {
                // 全ての JS から呼び出されるメソッドはこのシグネチャを持つ必要があります
                // publicで, void を返し, string の引数が 1 つ
            }
        }

ネームスペース
----------

コマンドのデフォルトのネームスペースは:

    namespace Cordova.Extension.Commands
    {
        // ...
    }

もし別のネームスペースを使用したい場合は、 `cordova.exec` の呼び出しの際にネームスペースが省略されていないクラス名を指定する必要があります。
例えば、もし以下のように C# のクラスを定義した場合は:

    namespace com.mydomain.cordovaExtensions
    {
        public class Echo : BaseCommand
        {
            // ...
        }
    }

JS では、 exec を以下のように呼び出します:

    codova.exec(win, fail, "com.mydomain.cordovaExtensions.Echo", ...);

C# での引数の読み取り
----------------------------------

プラグインメソッドから受け取った値は文字列ですが、
JavaScript のコードを見ると、実は文字列の配列を渡そうとしていた、ということがあります。
JS での `cordova.exec` の呼び出し部分をみると、 `[str]` を渡していることがわかります:

    cordova.exec(win, fail, "Echo", "echo", ["input string"]);

ここで `Echo.echo` メソッドに渡された文字列を検証すると、
値は実際には次であることがわかります:

    "[\"input string\"]"

全ての Javascript の exec 引数は、 C# に渡される前に JSON エンコードされます。

もしこれを期待している値にしたい場合は、デコードする必要があります。
シンプルに JSON のデシリアライゼーションを使います。

    string optVal = JsonHelper.Deserialize<string[]>(options)[0];
    // optVal は "input string" となります

C# から JS へ結果を渡す
-----------------------------

ベースクラスの BaseCommand はデータを JS のコールバックハンドラーに渡すためのメソッドを提供しています。
追加情報が必要なく、単にコマンドが成功したことを通知するためには、
シンプルに以下を呼びます:

    DispatchCommandResult(); // 空のプラグイン結果とともに、成功したとみなされコールバックします

データを返すには、異なる形式の `DispatchCommandResult` を呼ぶ必要があります:

    DispatchCommandResult(new PluginResult(PluginResult.Status.OK, "すべて計画通りにいきました。これは成功ハンドラーに渡される結果データです。"));

構造化されたデータを JS に渡すには、 JSON 形式にエンコードされている必要があります:
To pass structured object data back to JS, it should be encoded as a JSON string:

    DispatchCommandResult(new PluginResult(PluginResult.Status.OK, "{result:\"うまくいきました！\"}"));

エラーが発生したことを通知する場合には、 `DispatchCommandResult` を `PluginResult` を伴って呼ぶことができます:

    DispatchCommandResult(new PluginResult(PluginResult.Status.ERROR, "Echo はエラーが発生したと伝えています"));

プラグインの C# メソッドでのシリアライゼーションエラーの対処
--------------------------------------------------------

引数を解析するときに、万が一不正な入力があった場合のためにも try/catch ブロックを
使用するとよいでしょう。以下は、 Cordova の C# コードで使われている方法です:

    string optVal = null;

    try 
    {
        optVal = JsonHelper.Deserialize<string[]>(options)[0];
    }
    catch(Exception)
    {
        // 例外をキャッチし、 null 値と例外を一緒に対処します
    }

    if (optVal == null)
    {
        DispatchCommandResult(new PluginResult(PluginResult.Status.JSON_EXCEPTION));
    }
    else
    {
        // ... 任意のコードを続けます
    }

一歩進んだプラグインの機能
-----------------------------

オーバーライドできるその他の機能については以下を参照してください:

1. [BaseCommand.cs](https://github.com/apache/incubator-cordova-wp7/blob/master/templates/standalone/cordovalib/Commands/BaseCommand.cs)

例えば、 'pause' や 'resume' といったアプリケーションイベントもオーバーライドできます。

### プラグインのデバッグ

C# 側でデバッグするには、 Visual Studio のデバッガーを使用します。クラスの任意の箇所に
ブレークポイントを設置してください。

Windows Phone での Javascript のデバッグは少し難しいです。 `console.log` を使用して
プラグインの状態を出力するなどの方法をとる必要があるでしょう。

よくある落とし穴
---------------

- JavaScript 実装時に、プラグインに渡す引数を決める際には十分に注意してください。
  大半のデバイスは cordova.exec に渡される引数は配列であると期待していますが、
  もし配列の中に異なる形式のオブジェクトが含まれる場合は、
  デシリアライズが非常に困難、もしくは不可能となってしまいます。

        cordova.exec(win, fail, "ServiceName", "MethodName", ["これは文字列です", 54, {literal:'trouble'}]);

    - これは、以下のようなデコードが非常に困難な文字列を C# 側で受け取ることを意味します:

            "[\"これは文字列です\", 54, { literal:'trouble' }]"

    - exec を呼び出す前に、全てのパラメーターを文字列に変換することを考慮してください:

            cordova.exec(win, fail, "ServiceName", "MethodName", ["これは文字列です", "54", "{literal:'trouble'}"])	;

            string[] optValues = JsonHelper.Deserialize<string[]>(options);

- exec を呼び出す前に JavaScript コード内でパラメーターのチェックをすることを心がけましょう。
  これは JS のコードをプラグインの異なるネイティブ実装間で
  再利用しやすくするという利点もあります。

