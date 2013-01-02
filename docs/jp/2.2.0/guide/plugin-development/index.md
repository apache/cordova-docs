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

# プラグイン開発ガイド

Cordava プラグインは Cordova アプリケーション Webview と Cordava
アプリケーションが走っているネイティブプラットフォームの機能的な
橋渡しをします。プラグインはすべてのプラットフォームで使われる
1つの JavaScript インターフェースに集約され、そのプラグイン
インターフェースに従ったプラットフォーム独自のネイティブ実装が
それぞれなされます。すべてのコア Cordova API はこのアーキテクチャ
を用いて実装されています。

このガイドはシンプルな Echo プラグインを書くために必要なステップを
紹介していきます。 Echo プラグインは JavaScript から文字列を受け取り、
それをサポートされているプラットフォームのネイティブ環境に渡します。
このネイティブコードは同じ文字列を、プラグインの JavaScript の
コールバックに含んで返します。

このガイドから、より複雑なプラグインを書くために必要な概観や詳細が
得られるはずです。

## JavaScript

すべてのプラグインの最初の一歩は JavaScript です。開発者が Cordova を
使う理由は、 Objective-C でも Java でも C# でもなく、 JavaScript を使って
コードが書けるからです。プラグインにとって JavaScript インターフェースは
まさしく顔であり、もっとも重要な部分であると言えるでしょう。

あなたはプラグインの JavaScript を好きなように構成できます。ただ一つ、
Cordova JavaScript とネイティブ環境との間のコミュニケーションのために
`cordova.exec` 関数を _使う必要があります_ 。以下が例です:

    cordova.exec(function(winParam) {}, function(error) {}, "service",
                 "action", ["firstArgument", "secondArgument", 42,
                 false]);

以下がパラメーターの詳細説明です:

1. `function(winParam) {}` - 成功コールバック関数です。 `exec` の実行が
   正常に完了したとき、この関数が呼び出されます
   (任意で返されたパラメーターと一緒に呼び出されます)
2. `function(error) {}` - エラーコールバック関数です。もし操作が正常に
   完了しなかったとき、この関数が呼び出されます
   (任意で返されたパラメーターと一緒に呼び出されます)
3. `"service"` - ネイティブ側で呼び出されるサービス名です。これは
   ネイティブクラスにマッピングされます。詳しくは、以下のネイティブ
   ガイドで説明しています
4. `"action"` - 呼び出されるアクション名です。 `exec` からの呼び出しを
   受けるネイティブクラスで取り出され、プラットフォームに依存して、
   クラスのメソッドにマッピングされます。詳しくは、以下のネイティブ
   ガイドで説明しています
5. `[/* arguments */]` - ネイティブ環境に渡される引数です


### Echo プラグイン JavaScript の例

    window.echo = function(str, callback) {
        cordova.exec(callback, function(err) {
            callback('Nothing to echo.');
        }, "Echo", "echo", [str]);
    };

詳しく見ていきましょう。プラグインを `window` に `echo` 関数として
付与しています。プラグインのユーザーは以下のように使用します:


    window.echo("echome", function(echoValue) {
        alert(echoValue == "echome"); // should alert true.
    });

はじめに、 `exec` 関数の後ろ3つの引数について見ていきましょう。
私たちは、 `Echo` "サービス" を呼び出し、 `echo` "アクション" を
リクエストし、そして `window.echo` 関数の最初のパラメーターである
文字列を含んだ配列を引数として渡しています。

`exec` に渡される成功コールバック関数は `window.echo` が受取る
コールバック関数を単純に参照しています。エラーコールバックについては
もう少し手を加えています: もしネイティブ側でエラーコールバックを呼び出した
場合は、単純に成功コールバックを呼び出し、 "デフォルト" 文字列を渡します。

## ネイティブ

プラグインの JavaScript の定義が終わったら、それに少なくとも1つの
ネイティブ実装を付け加える必要があります。以下は Cordova がサポート
しているそれぞれのプラットフォームに特化したガイドになります。
以下のガイドでは引き続き、このガイドで作り始めた Echo プラグインを
作成していきます。

- Developing a Plugin on Android
- Developing a Plugin on Bada
- Developing a Plugin on BlackBerry
- Developing a Plugin on iOS
- Developing a Plugin on webOS
- Developing a Plugin on Windows Phone
- Developing a Plugin on Tizen
