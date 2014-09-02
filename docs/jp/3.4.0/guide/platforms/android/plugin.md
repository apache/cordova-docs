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

# Android プラグイン

この節では、Android プラットフォームにおけるネイティブプラグインコードの実装方法の詳細に関して解説します。この節を読む前に、
プラグイン開発ガイド ( 原文 「 Application Plugins 」 ) を読み、プラグインの構造と JavaScript の汎用インターフェイスの概要をご確認ください。
この節では、Cordova Webview とネイティブプラットフォーム間で通信を行う、_echo_ プラグインのサンプルを引き続き使用して、解説を行います。
他のサンプルに関しては、 [CordovaPlugin.java](https://github.com/apache/cordova-android/blob/master/framework/src/org/apache/cordova/CordovaPlugin.java) ( コメントを含む ) をご確認ください。

Android プラグインは、Cordova-Android ( Android 用アプリケーション ライブラリ ) を中心に、Android WebView とそれに加えて使用するフック群 ( hook ) で構成されています。プラグインは、 `config.xml` ファイルを使用して、マッピングを行います。
プラグインは、 `CordovaPlugin` クラスの拡張を行い、 また、 `execute` メソッドのオーバーライドを行う、1 個以上の Java クラスから構成されています。プラグインでは、 `pause` と `resume` イベントのハンドル ( handle ) 、および、プラグイン間のメッセージの受け渡しの各処理も併せて行うことを推奨します。
長時間実行されるリクエスト、バックグラウンドでの処理 ( メディア再生、リスナーなど )、内部情報の保持などを行うプラグインでは、 `onReset` メソッドを併せて使用する必要があります。このメソッドは、新たなページへの遷移またはページのリフレッシュを `WebView` が行うときに実行され、いづれの場合も JavaScript の再読み込みを行います。

## プラグインのクラスマッピング

プラグインの JavaScript インターフェイス側では、以下のように、 `cordova.exec` メソッドを使用します。

        exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);

これにより、`args` 配列内の引数と共に、 `service` クラスの `action` メソッドを効果的に呼び出し、WebView から Android のネイティブ側へ、リクエストを送れます。

Java ファイル形式または _jar_ ファイル形式でプラグインの配布を行う場合、 Cordova-Android アプリの `res/xml/config.xml` ファイル内でその指定を行う必要があります。 `feature` 要素の注入 ( inject ) に使用する `plugin.xml` ファイルの使用方法に関する詳細は、『 プラグイン開発ガイド 』 ( 原文 「 Application Plugins 」 ) をご確認ください。

        <feature name="<service_name>">
            <param name="android-package" value="<full_name_including_namespace>" />
        </feature>

service_name は、JavaScript　側の `exec` で使用する service ( サービス ) 名と同じ名前です。
値は、名前空間を含む、Java クラスの完全修飾名 ( fully qualified namespace identifier ) です。
それ以外の場合、プラグインのコンパイルはできますが、Cordova から使用することはできません。

## プラグインの初期化と寿命

各 `WebView` が生き続ける間は、プラグインオブジェクトのインスタンスも生き続けます。プラグインのインスタンス化は、JavaScript から呼び出され、最初に参照されたときに通常行われます。これ以外の方法では、以下のように、
`config.xml` ファイル内で、 `<param>` の `name` 属性に `onload` / `true` と設定して、インスタンス化することもできます。

    <feature name="Echo">
        <param name="android-package" value="<full_name_including_namespace>" />
        <param name="onload" value="true" />
    </feature>

プラグインの使用開始時のロジックに、 `initialize` メソッドを組み込むことを推奨します。

    @override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        // 初期化処理のコード
    }

## Android Java プラグインの構築

JavaScript からの呼び出しにより、プラグインのリクエストがネイティブ側に送られます。そして、 `config.xml` ファイルで記述されているとおりに、対応する Java のプラグインのマッピングが適切に行われるわけですが、最終的な Android Java プラグイン クラスとは、どのようなものなのでしょうか。JavaScript の `exec` 関数を使用してプラグインに渡されたものが、対応するプラグインクラスの `execute` メソッドに渡されます。 `execute` の処理は、ほとんどの場合、以下のようになります。

        @Override
        public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
            if ("beep".equals(action)) {
                this.beep(args.getLong(0));
                callbackContext.success();
                return true;
            }
            return false;  // "MethodNotFound" のエラー内で、false を返します。
        }

JavaScript の `exec` 関数の `action` パラメータは、任意のパラメータを使用して実行 ( dispatch ) する、private クラスのメソッドに対応付けされています。

例外のキャッチ ( catch ) やエラーのリターン ( return ) を行うとき、明確性を維持するため、JavaScript へ返すエラーは、Java の例外名と、可能な限り一致させる必要があります。

## スレッドの処理

プラグイン側の JavaScript は、 `WebView` インターフェイスのメインスレッドでは、 _実行されません_ 。代わりに、 `execute` メソッドと同じく、 `WebCore` スレッド上で実行されます。ユーザインターフェイスとの連携を検討している場合には、以下のようなコードを推奨します。

        @Override
        public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
            if ("beep".equals(action)) {
                final long duration = args.getLong(0);
                cordova.getActivity().runOnUiThread(new Runnable() {
                    public void run() {
                        ...
                        callbackContext.success(); // スレッドセーフ ( Thread-safe )
                    }
                });
                return true;
            }
            return false;
        }

インターフェイスのメインスレッドで実行する必要がなく、また、`WebCore` スレッドもブロック ( block ) も望まない場合には、以下のコードを使用してください。

        @Override
        public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
            if ("beep".equals(action)) {
                final long duration = args.getLong(0);
                cordova.getThreadPool().execute(new Runnable() {
                    public void run() {
                        ...
                        callbackContext.success(); // Thread-safe.
                    }
                });
                return true;
            }
            return false;
        }

## Android Echo プラグインの例

『 プラグイン開発ガイド 』 ( 原文 「 Application Plugins 」 ) に記載されているような、JavaScript インターフェイスの _エコー_ 機能にしたい場合には、 `plugin.xml` を使用して、ローカルプラットフォームの `config.xml` ファイルに `feature` を注入 ( inject ) します。

        <platform name="android">
            <config-file target="config.xml" parent="/*">
                <feature name="Echo">
                    <param name="android-package" value="org.apache.cordova.plugin.Echo"/>
                </feature>
            </config-file>
        </platform>

次に、 `src/org/apache/cordova/plugin/Echo.java` ファイルに、以下を追加します。

        package org.apache.cordova.plugin;

        import org.apache.cordova.CordovaPlugin;
        import org.apache.cordova.CallbackContext;

        import org.json.JSONArray;
        import org.json.JSONException;
        import org.json.JSONObject;

        /**
         * This class echoes a string called from JavaScript.
         */
        public class Echo extends CordovaPlugin {

            @Override
            public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
                if (action.equals("echo")) {
                    String message = args.getString(0);
                    this.echo(message, callbackContext);
                    return true;
                }
                return false;
            }

            private void echo(String message, CallbackContext callbackContext) {
                if (message != null && message.length() > 0) {
                    callbackContext.success(message);
                } else {
                    callbackContext.error("Expected one non-empty string argument.");
                }
            }
        }

ファイルの最上部に import を記述して、クラスの拡張を `CordovaPlugin` から行うことを示します。 このクラスでは、 `exec()` からメッセージを受け取るため、 `execute()` メソッドのオーバーライド ( override ) を行います。 `execute()` メソッドは、最初に `action` の値の検証を行います。この場合、 `echo` の値となります。その他の action の場合には、 `false` を返し、 `INVALID_ACTION` エラーとなり、JavaScript 側の失敗時のコールバックへ渡されます。

次に、 `args` オブジェクトの `getString` メソッドを使用して、エコーに使用する文字列の取得を行います。このとき、1 番目パラメータを渡すように指定します。この値が、private の `echo` メソッドに渡されたあと、 `null` または空の文字列ではないか、パラメータのチェックを行います。有効な値ではない場合、 `callbackContext.error()` を使用して、JavaScript 側の失敗時のコールバックを呼び出します。これらのチェックを通ったあと、 `callbackContext.success()` を使用して、 `message` のもともとの文字列を、JavaScript 側の成功時のコールバックに、パラメータとして返します。

## Android への組み込み

Android では、`インテント` ( Intent ) というシステムを使用して、各機能間の通信処理を行っています。プラグインでは、 `CordovaInterface` オブジェクトを使用して、アプリの実行を行う、Android の `アクティビティ` ( Activity ) にアクセスすることができます。このときに使用されるのが、 `Context` です。 `Context` は、Android の `インテント` を新規に作成するときに必要となります。 `CordovaInterface` を使用して、プラグインが `アクティビティ` を開始します。また、 `Intent` がアプリに返されたときのために、コールバッグ用プラグインの設定を行うときにも、プラグインは `CordovaInterface` を使用します。

Cordova 2.0 では、 プラグインは `Context` にアクセスを直接行うことはできず、また、以前使用していた `ctx` メンバ ( legacy ctx member ) も、使用できなくなりました。ctx 系メソッドは、 `Context` 上に存在するため、 `getContext()` と `getActivity()` を使用して、必要とするオブジェクトを返すことができます。 ( 原文 「 All `ctx`
methods exist on the `Context`, so both `getContext()` and
`getActivity()` can return the required object. 」 )

## Android プラグインのデバッグ

Eclipse を使用して、 プロジェクトの Java ソースと同じように、プラグインのデバッグを行うことができます。最新バージョンの Android Developer Tool を使用して、 _JAR_ の依存関係も考慮に入れ、ソースコードのアタッチ ( attach ) をできるようになりましたが、最新のため、この機能のサポートは十分には行われていません。
　