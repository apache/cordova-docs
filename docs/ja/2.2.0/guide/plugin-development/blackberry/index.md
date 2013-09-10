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

Developing a Plugin on BlackBerry
=================================

## Blackberry での Echo プラグインの作り方

このガイドでは、 BlackBerry での Echo プラグインの作り方について説明します。
もし上位のガイドである JavaScript パートのプラグインについてのガイドを読んでいない場合は、それを最初に読むことをおすすめします。
加えて、 [Cordova Blackberry repo](https://git-wip-us.apache.org/repos/asf?p=incubator-cordova-blackberry-webworks.git;a=summary) をダウンロードしてください。

Cordova-BlackBerry プロジェクトは Torch, Bold, Playbook といった BlackBerry デバイスへのデプロイを可能にします。
通常の携帯端末タイプの BlackBerry (例, Torch と Bold) とタブレットタイプの Playbook の間には、デプロイ方法に差があります。
この2つのコードはベースが違うため、1つを開発しているときは、もう1つのためにコードを複製してあげる必要があります。
そのため、このガイドでは携帯端末にフォーカスし、タブレットにはフォーカスしません。
将来的には、両方のプラットフォームをカバーする予定です。


前のガイドからの続きで、 Echo プラグインは基本的にユーザーが `window.echo`
関数で与えたメッセージを返します。

Echo 関数:

    window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };

## plugins.xml の修正

このファイルはプロジェクトの中の www フォルダーにあり、 Cordova プロジェクトが使用しているすべてのプラグインへの参照を含みます。
新しい参照を追加して、 cordova.exec が呼ばれたときに、 Cordova が `cordova.exec` の "Echo" 引数を
これから書くネイティブコードの Echo クラスにマッピングすることが分かるようにします。

    <plugins>
      ...
      <plugin name="Echo" value="org.apache.cordova.echo.Echo"/>
      ...
    </plugins>

## Echo.java の追加

もし value 属性の構造にお気づきなら、 Echo プラグインへの定義されたパスが見えるでしょう。
Cordova BlackBerry Webworks のリポジトリーのルートフォルダーで、 framework と呼ばれるフォルダーを探してください。
このフォルダーは BlackBerry 上で動くすべてのソースコードを含んでいます。
このフォルダー以下の `framework/ext/src/org/apache/cordova` にフォルダーに辿りつくまで cd し続けます。
この時すべてのプラグインフォルダーが見えるでしょう。また、それぞれのフォルダーの中身はプラグインのソースコードとなっています。
ここで、フォルダー echo を `framework/ext/src/org/apache/cordova/echo` に作成し、
`Echo.java` をこの中の `framework/ext/src/org/apache/cordova/echo/Echo.java` の位置に新規追加します。

## Echo.java の実装

プラグインの実装の基本的なアイデアは、 Plugin クラスを継承するクラスを作成し、
PluginResult クラスを返す execute と呼ばれるメソッドを作成することです。
cordova.exec へのすべての呼び出しは、クラス内で実行したいアクションと引数を渡します。
この場合、 "echo" がクラス "Echo" 内で実行したいアクションで、 [str] が渡している引数です。

    package org.apache.cordova.echo;

    import org.apache.cordova.api.Plugin;
    import org.apache.cordova.api.PluginResult;
    import org.apache.cordova.json4j.JSONArray;
    import org.apache.cordova.json4j.JSONException;
    import org.apache.cordova.json4j.JSONObject;
    /**
     * BlackBerry でのプラグインの作り方デモのためのシンプルなプラグイン
     * ユーザーがプラグインを呼び出したときのメッセージをそのまま返します
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

上のコードを見てみると、 execute メソッドの中で、最初にどんなアクションが来たかを調べているのが分かります。
この Echo プラグインは1つのアクション "echo" のみを持つので、それのみをチェックします。
もしプラグインに複数のアクションがあった場合は、 if 文を追加していき、これらをチェックしていきます。


次に、 args パラメーターによって与えられた引数からメッセージを取得します。
`String theMsg = args.getString(0);` とすることで、シンプルに一番最初の引数を取得することができます。

いくつかのエラーチェックをし、もしメッセージが大丈夫そうなら、 ok ステータス (PluginResult.Status.OK) とメッセージ (theMsg) を持つ
新しい PluginResult インスタンスを作ります。
その後、 JavaScript に渡し、成功コールバック関数を呼び出す result を返します。
もし何かエラーが起きた場合、 PluginResult.Status.ERROR, PluginResult.Status.JSON_EXCEPTION, PluginResult.Status.INVALID_ACTION といったような何種類かのステータス例外を返すことが出来ます。
もしこのタイプの例外が返されたとき、 JavaScript 側ではエラーコールバックが
呼び出されます。

## www フォルダーの .jar の更新

あなたのプロジェクト内で Echo.java の追加分が更新される必要があります。 .jar ファイルをビルドするためには、 BlackBerry Webworks リポジトリーのルートディレクトリに cd します。
次の ant コマンドを使用します:

    ant update -Dproject.path="~/path_to_my_project"

これは build/ext フォルダーの中の新しい .jar ファイルをビルドします。
`build/ext/cordova.jar` ファイルを プロジェクトの www/ext フォルダーにコピーします。

もしすべてが上手くいったら、 BlackBerry で Echo プラグインが使用できるようになっているはずです。
