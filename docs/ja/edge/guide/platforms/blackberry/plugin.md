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

# ブラックベリーのプラグイン

BlackBerry プラットフォームでネイティブのプラグインのコードを実装する方法の詳細について説明します。 これを読む前に、プラグインの構造とその一般的な JavaScript のインターフェイスの概要についてアプリケーション ・ プラグインが参照してください。 このセクションは、ネイティブ プラットフォームに戻るコルドバ webview から通信するサンプル*エコー*プラグインを示すために続けています。

さらに、[コルドバ ブラックベリー リポジトリ][1]をダウンロードします。 `Cordova-BlackBerry`プロジェクトでは、トーチ、太字、脚本などの BlackBerry デバイスに展開することができます。 脚本は、他の BlackBerry ハンドヘルド装置、開発努力を複製する必要があるより別のコードベースを使用します。 このガイドは、タブレットではなく、ハンドヘルド デバイスに焦点を当てください。

 [1]: https://git-wip-us.apache.org/repos/asf?p=cordova-blackberry.git;a=summary

## Plugins.xml を変更します。

`Echo`を返しますのプラグインでどのようなユーザー メッセージを送信、 `window.echo` 側の JavaScript 関数：

        window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

プロジェクトの `www/plugins.xml` ファイルにはコルドバ プロジェクトのプラグインに必要な参照のすべてが含まれています。 ので、参照を追加するとき `cordova.exec` はコルドバと呼ばれる、マップする方法を知っている、 `Echo` 、ネイティブに引数 `Echo` クラス。

        <feature name="Echo">
            <param name="blackberry-package" value="org.apache.cordova.echo.Echo" />
        </feature>
    

## Echo.java ファイル

`feature`仕様の `value` 属性逆引きドメイン スタイル識別子を参照します。 これは、コルドバ ブラックベリー WebWorks レポ内のパスに対応する `framework/ext/src` ディレクトリ。 追加、 `framework/ext/src/org/apache/cordova/echo` ディレクトリを追加し、 `Echo.java` ファイル。

`Echo.java`を拡張するクラスを定義する必要があります、 `Plugin` クラス。 それも実装する必要があります、 `execute` を返すメソッド、 `PluginResult` クラス。 すべての呼び出しに `cordova.exec` を実行するクラスと同様に、引数内のアクションで渡します。 この場合、 `Echo` クラスの `echo` メソッドは、アクションと `[str]` は、メソッドに渡す追加引数です。

        package org.apache.cordova.echo;
    
        import org.apache.cordova.api.Plugin;
        import org.apache.cordova.api.PluginResult;
        import org.apache.cordova.json4j.JSONArray;
        import org.apache.cordova.json4j.JSONException;
        import org.apache.cordova.json4j.JSONObject;
        /**
         * A simple plugin to demonstrate how to build a plugin for BlackBerry
         * Basically echos back the msg that a user calls to this plugin
         */
        public final class Echo extends Plugin {
    
            public static final String echo = "echo";
    
            public PluginResult execute(String action, JSONArray args, String callbackId) {
                PluginResult result = new PluginResult(PluginResult.Status.INVALID_ACTION, "Echo: Invalid action:" + action);
                if(action.equals(echo)){
                    try {
                        String theMsg = args.getString(0);
                        if(theMsg!= null || theMsg.length()>0){
                            result = new PluginResult(PluginResult.Status.OK, theMsg);
                        }else{
                            result = new PluginResult(PluginResult.Status.ERROR, "Nothing to echo.");
                        }
                    } catch (JSONException e) {
                        result = new PluginResult(PluginResult.Status.JSON_EXCEPTION, e.getMessage());
                    }
                }
                return result;
            }
        }
    

上記のコードで、 `execute` メソッドがまず、アクションをもたらします。この場合、ある 1 つだけ有効な `echo` アクション, ので、単にその値を確認します。

受信メッセージとして渡される `[str]` JavaScript から利用できるが、 `Echo` としてクラス、 `args` 配列。 この場合、1 つの引数は、0 から始まる配列インデックスを使用してアクセスがあります。

        String theMsg = args.getString(0);
    

さまざまなメッセージの値のエラー チェック後、メソッドは新しいインスタンス化します `PluginResult` と、 `OK` のステータス メッセージを返します。 この値は順番に、JavaScript の成功コールバックを引数として渡されます。 エラーの場合、さまざまなステータス コードは、JavaScript エラー コールバックに送信されます。

## プロジェクトの www ディレクトリに .jar を更新

追加された `Echo.java` プロジェクトで更新する必要があります。 構築する、 `.jar` ファイル、ブラックベリー WebWorks レポのルート ディレクトリに移動し、実行、 `ant` コマンド。

        ant update -Dproject.path="~/path_to_my_project"
    

これは、新しい構築します `.jar` ファイルで、 `build/ext` ディレクトリ。コピー、 `build/ext/cordova.jar` ファイルに、 `project/www/ext` ディレクトリ。

使用することができる場合は、すべてがうまくいけば、 `Echo` ブラックベリーでプラグイン。