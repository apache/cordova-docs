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

プラグインは `CordovaPlugin` クラスを継承した少なくとも1つの Java クラスによって構成されます。
プラグインは `CordovaPlugin` の中の `execute` メソッドのうち1つを必ずオーバーライドしなければなりません。
加えて、プラグイン作成のベストプラクティスとして、プラグインは pause と resume イベントをサポートし、またプラグイン間のメッセージのやりとりもサポートしているべきです。
実行に時間がかかったり、バックグラウンドで動く (例: media の再生) もの、リスナーや内部状態を持つプラグインは `onReset()` メソッドが実装されているべきです。このメソッドは `WebView` が新しいページに遷移、もしくはリフレッシュした時、つまり JavaScript がリロードされた時に実行されます。

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

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if ("beep".equals(action)) {
            this.beep(args.getLong(0));
            callbackContext.success();
            return true;
        }
        return false;  // "MethodNotFound" エラーのため false を返す
    }

`action` パラメーターの値を見て、クラス内の
(プライベート) メソッドに割り振っていきます。
また、任意でいくつかのパラメーターをそのメソッドに渡します。

例外をキャッチしエラーを返すとき、 JavaScript へ返すエラーが Java で発生した例外に可能なかぎり近づけることは、明瞭さのためにも重要です。

### スレッド

WebView の中の JavaScript は UI スレッド上で実行 *されません*。
WebCore スレッド上で動いています。 `execute` メソッドもまた　WebCore スレッド上で実行されます。

もし UI と何か処理をしたい場合は、以下のようにします:

    @Override
    public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
        if ("beep".equals(action)) {
            final long duration = args.getLong(0);
            cordova.getActivity().runOnUiThread(new Runnable() {
                public void run() {
                    ...
                    callbackContext.success(); // スレッドセーフ
                }
            });
            return true;
        }
        return false;
    }

もし UI スレッド上で動かす必要がなく、しかし WebCore スレッドをブロックしたくない場合は以下のようにします:

    @Override
    public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
        if ("beep".equals(action)) {
            final long duration = args.getLong(0);
            cordova.getThreadPool().execute(new Runnable() {
                public void run() {
                    ...
                    callbackContext.success(); // スレッドセーフ
                }
            });
            return true;
        }
        return false;
    }

### Android プラグインの Echo プラグイン

次を config.xml に追加します:

    <plugin name="Echo" value="org.apache.cordova.plugin.Echo" />

そして、次を Cordova-Android アプリケーションの中の
`src/org/apache/cordova/plugin/Echo.java` に追加します:


    package org.apache.cordova.CordovaPlugin;

    import org.apache.cordova.api.Plugin;
    import org.apache.cordova.api.PluginResult;
    import org.json.JSONArray;
    import org.json.JSONException;
    import org.json.JSONObject;

    /**
     * このクラスは JavaScript から呼び出された文字列をecho します。
     */
    public class Echo extends CordovaPlugin {
        @Override
        public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
            if (action.equals("echo")) {
                String message = args.getString(0);.
                this.echo(message);
                return true;
            }
            return false;
        }

        private void echo(String message, CallbackContext callbackContext) {
            if (message != null && message.length() > 0) {.
                callbackContext.success(message);
            } else {
                callbackContext.error("Expected one non-empty string argument.");
            }
        }
    }

コードを見ていきましょう。一番上には、必要なすべての Cordova に関する
`import` 文が並んでいます。クラスは `CordovaPlugin` を継承しています。
exec() からメッセージを受け取るために、 execute() メソッドをオーバーライドします。
メソッドは、最初に `action` を見ていきます。このプラグインは1つ
のアクション `echo` のみをサポートしています。ほかのアクションは、 false を返します。
これは、タイプが `INVALID_ACTION` のエラーとなります - これは JavaScript
側でエラーコールバックへの呼び出しに変換されます。次に、 `args` に対して
`getString` メソッドを使い、パラメーター配列から0番目のパラメーターを取得
することにより、 echo する文字列を取り出します。ここで、少しパラメーターに
対してチェックを行います: `null` チェックや文字列の長さが0でないかどうかなど
です。もしそうであった場合は、 callbackContext.error() を呼びます (これはもう
ご存知の通り JavaScript 側でエラーコールバックを呼び出します)。
もしこれらのチェックをパスしたら、 callbackContext.success() を呼び出し、
パラメーターとして渡された `message` 文字列を渡します。これが、
JavaScript 側で成功コールバック関数に変換されます。
また、 `message` パラメーターを JavaScript の成功コールバック関数に
パラメーターとして渡します。

## プラグインのデバッグ

Eclipse は Android プロジェクトのデバッグに使用でき、 Java のソースファイルがプロジェクトに含まれている場合は、プラグインもデバッグできます。最新バージョンの Android Dev Tools のみ JAR にソースコードを付与でき、これは今回はフルでサポートされていません。

## よくある落とし穴

* プラグインは `CordovaInterface` オブジェクトへのアクセス権を持っています。このオブジェクトはアプリケーションで走っている Android の `Activity` へのアクセス権を持っています。この `Activity` は新しい Android `Intent` を起動するために必要な `Context` です。
`CordovaInterface` は、結果として `Activity` を開始すること、また `Intent` がアプリケーションに戻ってきたときにコールバックをセットすることをプラグインに許可します。
`Intent` システムは Android のプロセス間の連携に使われるため、これは非常に重要です。
* プラグインは `Context` への直接アクセス権を以前のように持っていません。以前の `ctx` はもう廃止され、 2.0 リリースの6ヶ月後に削除されます。 `Context` にあった `ctx` が存在するすべてのメソッド、 `getContext()` と `getActivity()` は必要な正しいオブジェクトを返すことが可能です。

## ソースコードを活用する

プラグインを作成の準備としてもっとも良い方法のうちの一つは、
[既に存在するプラグインを参考にすること](https://github.com/apache/incubator-cordova-android/tree/master/framework/src/org/apache/cordova) です。

また、 [CordovaPlugin.java](https://github.com/apache/incubator-cordova-android/blob/master/framework/src/org/apache/cordova/api/CordovaPlugin.java) のコメントもひと通り読むべきでしょう。
