---
license: Licensed to the Apache Software Foundation (ASF) under one
         or more contributor license agreements. See the NOTICE file
         distributed with this work for additional information
         regarding copyright ownership. The ASF licenses this file
         to you under the Apache License, Version 2.0 (the
         "License"); you may not use this file except in compliance
         with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0

         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied. See the License for the
         specific language governing permissions and limitations
         under the License.
---

# Developing a Plugin on Android

プラグインの開発には、 Cordova-Android のアーキテクチャの理解が必要です。
Cordova-Android は Android WebView とそれに付属するコールバックから構成されます。
これらのプラグインは config.xml ファイル内にクラスマッピングとして表されています。

プラグインは `Pluguin` クラスを継承した少なくとも1つの Java クラスによって構成されます。
プラグインは `PluginResult` オブジェクトを返す `execute` メソッドを **必ず **実装しなければなりません。
加えて、プラグイン作成のベストプラクティスとして、プラグインは pause と resume イベントをサポートし、またプラグイン間のメッセージのやりとりもサポートしているべきです。

## プラグインクラスのマッピング

プラグインの JavaScript 部分は常に `cordova.exec` メソッドを以下のように使います:

    exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);

これは WebView から Android ネイティブ側へのリクエストを整理し、
おおよそ要約すると `service` クラスで `action` メソッドを、
`args` 配列で渡された引数と一緒に呼び出すということになります。

プラグインを Java ファイルで提供するしろ JAR でするにしろ、プラグインは必ず Cordova-Anroid アプリケーションの `res/xml` フォルダーにある `config.xml` ファイルに追加されていなければなりません。

    <plugin name="<service_name>" value="<full_name_including_namespace>"/>

サービス名 (name) は JavaScript の `exec` の中で定義したものと一致している必要があり、値 (value) は Java クラスへのネームスペースを含んだフルパスになります。これがないと、プラグインはコンパイルはされますが、
Cordova からアクセスできない状態となります。

## Android Java プラグインの作成

私たちはプラグインリクエストをネイティブ側に送る JavaScript を作成しました。
また、正しく `config.xml` ファイルでマッピングされた Android Java プラグインもあります。
では、最終的に Android Java プラグインのクラスがどのようになるのか見ていきましょう。

JavaScript の `exec` 関数によってプラグインに割り当てられたものは、
プラグインのクラスの `execute` メソッドに渡されます。大半の `execute`
の実装は以下のようになります:

    public PluginResult execute(String action, JSONArray args, String callbackId) {
        PluginResult.Status status = PluginResult.Status.OK;
        String result = "";

        try {
            if (action.equals("beep")) {
                this.beep(args.getLong(0));
            }
            return new PluginResult(status, result);
        } catch (JSONException e) {
            return new PluginResult(PluginResult.Status.JSON_EXCEPTION);
        }
    }

基本的に `action` パラメーターの値を見て、クラス内の
(プライベート) メソッドに割り振っていきます。
また、任意でいくつかのパラメーターをそのメソッドに渡します。

例外をキャッチしエラーを返すとき、 JavaScript へ返すエラーが Java で発生した例外に可能なかぎり近づけることは、明瞭さのためにも重要です。

### Android プラグインの Echo プラグイン

次を config.xml に追加します:

    <plugin name="Echo" value="org.apache.cordova.plugin.Echo" />

そして、次を Cordova-Android アプリケーションの中の
`src/org/apache/cordova/plugin/Echo.java` に追加します:


    package org.apache.cordova.plugin;

    import org.apache.cordova.api.Plugin;
    import org.apache.cordova.api.PluginResult;
    import org.json.JSONArray;
    import org.json.JSONException;
    import org.json.JSONObject;

    /**
     * このクラスは JavaScript から呼び出された文字列をecho します。
     */
    public class App extends Plugin {

        /**
         * リクエストを実行し、 PluginResult を返します。
         *
         * @param action        実行するアクション名です。
         * @param args          プラグインへの引数の JSONArry です。
         * @param callbackId    JavaScript へコールバックするときに使うコールバック id です。
         * @return              ステータスとメッセージを伴った PluginResult オブジェクトです。
         */
        public PluginResult execute(String action, JSONArray args, String callbackId) {
            try {
                if (action.equals("echo")) {
                    String echo = args.getString(0);
                    if (echo != null && echo.length() > 0) {
                        return new PluginResult(PluginResult.Status.OK, echo);
                    } else {
                        return new PluginResult(PluginResult.Status.ERROR);
                    }
                } else {
                    return new PluginResult(PluginResult.Status.INVALID_ACTION);
                }
            } catch (JSONException e) {
                return new PluginResult(PluginResult.Status.JSON_EXCEPTION);
            }
        }
    }

コードを見ていきましょう。一番上には、必要なすべての Cordova に関する
`import` 文が並んでいます。クラスは `Plugin` を継承しています - これはとても
重要です。 `Plugin` インターフェースは `execute` メソッドを実装する必要が
あります。メソッドは、最初に `action` を見ていきます。このプラグインは1つ
のアクション `echo` のみをサポートしています。ほかのアクションは、ステータス
が `INVALID_ACTION` となった `PluginResult` が返されます - これは JavaScript
側でエラーコールバックへの呼び出しに変換されます。次に、 `args` に対して
`getString` メソッドを使い、パラメーター配列から0番目のパラメーターを取得
することにより、 echo する文字列を取り出します。ここで、少しパラメーターに
対してチェックを行います: `null` チェックや文字列の長さが0でないかどうかなど
です。もしそうであった場合は、ステータスが `ERROR` の `PluginResult` を
返します (これはもうご存知の通り JavaScript 側でエラーコールバックを
呼び出します)。もしこれらのチェックをパスしたら、ステータスが `OK` の
`PluginResult` を返し、パラメーターとして受け取った `echo` 文字列を
渡します。これが、 JavaScript 側で成功コールバック関数に変換されます。
また、 `echo` パラメーターを JavaScript の成功コールバック関数に
パラメーターとして渡します。

## プラグインのデバッグ

Eclipse は Android プロジェクトのデバッグに使用でき、 Java のソースファイルがプロジェクトに含まれている場合は、プラグインもデバッグできます。最新バージョンの Android Dev Tools のみ JAR にソースコードを付与でき、これは今回はフルでサポートされていません。

## よくある落とし穴

* プラグインは `CordovaInterface` オブジェクトへのアクセス権を持っています。このオブジェクトはアプリケーションで走っている Android の `Activity` へのアクセス権を持っています。この `Activity` は新しい Android `Intent` を起動するために必要な `Context` です。
`CordovaInterface` は、結果として `Activity` を開始すること、また `Intent` がアプリケーションに戻ってきたときにコールバックをセットすることをプラグインに許可します。
`Intent` システムは Android のプロセス間の連携に使われるため、これは非常に重要です。
* プラグインは `Context` への直接アクセス権を以前のように持っていません。以前の `ctx` はもう廃止され、 2.0 リリースの6ヶ月後に削除されます。 `Context` にあった `ctx` が存在するすべてのメソッド、 `getContext()` と `getActivity()` は必要な正しいオブジェクトを返すことが可能です。
* `webView.loadUrl()` を使って JavaScript を呼び出すことは避けてください。コールバックサーバーがある理由は、 JavaScript がスレッドセーフで実行されるためです。 `loadUrl` は明確に UI スレッドに割り込み、プラグインのユーザビリティーに影響します。
