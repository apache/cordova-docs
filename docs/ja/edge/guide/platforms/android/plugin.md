---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied. See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# Android のプラグイン

Android プラットフォームでネイティブのプラグインのコードを実装する方法の詳細について説明します。 これを読む前に、プラグインの構造とその一般的な JavaScript のインターフェイスの概要についてアプリケーション ・ プラグインが参照してください。 このセクションは、ネイティブ プラットフォームに戻るコルドバ webview から通信するサンプル*エコー*プラグインを示すために続けています。 別のサンプルも参照してください[CordovaPlugin.java][1]のコメント.

 [1]: https://github.com/apache/cordova-android/blob/master/framework/src/org/apache/cordova/CordovaPlugin.java

Android のプラグインはそれに取り付けられたフックを持つアンドロイドの WebView を成っているコルドバ アンドロイドに基づいています。 プラグインのクラスへのマッピングとして表される、 `config.xml` ファイル。 プラグイン拡張する少なくとも 1 つの Java クラスから成っている、 `CordovaPlugin` のいずれかをオーバーライドするクラスの `execute` メソッド。 ベスト プラクティス、プラグインも扱うべきです `pause` と `resume` イベントのプラグイン間のメッセージパッシングと共に。 実行時間の長い要求は、メディアの再生、リスナー、または内部の状態などのバック グラウンド アクティビティでプラグインを実装する必要があります、 `onReset()` メソッドと同様です。 それを実行するとき、 `WebView` 、java スクリプトの設定を再読み込みを新しいページまたは更新に移動します。

## プラグイン クラスのマッピング

プラグインの java スクリプトの設定インターフェイスを使用して、 `cordova.exec` メソッドは次のように。

        exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);
    

これは、WebView から要求アンドロイド ネイティブの側では、効果的に呼び出しをマーシャ リングします、 `action` 法、 `service` クラスに渡される引数は、 `args` 配列。

コルドバ Android アプリケーションのプラグインを指定する必要があります Java ファイルや独自の*jar*ファイルとしてプラグインを配布するかどうか `res/xml/config.xml` ファイル。 アプリケーション ・ プラグインを使用する方法の詳細についてを参照してください、 `plugin.xml` ファイルをこれを注入する `feature` 要素。

        <feature name="<service_name>">
            <param name="android-package" value="<full_name_including_namespace>" />
        </feature>
    

サービス名は、JavaScript で使用されるものと一致する `exec` を呼び出します。 値は、Java クラスの完全修飾名前空間の識別子です。 それ以外の場合は、プラグイン コンパイルしますが、まだコルドバを利用できない可能性があります。

## プラグインの初期化と有効期間

それぞれの人生のためのプラグイン オブジェクトの 1 つのインスタンスが作成されます `WebView` 。 プラグインはまでインスタンス化されない最初、JavaScript から呼び出しによって参照されている場合を除き `<param>` と、 `onload` `name` 属性を設定する `"true"` で `config.xml` 。 例えば。

    <feature name="Echo">
        <param name="android-package" value="<full_name_including_namespace>" />
        <param name="onload" value="true" />
    </feature>
    

プラグインを使用する必要があります、 `initialize` 、スタート アップ ロジックのメソッド。

    @override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        // your init code here
    }
    

## Android の Java プラグインを書く

JavaScript 呼び出し火災ネイティブ側に要求するプラグインとそれに対応する Java プラグインが適切にマップされている、 `config.xml` ファイルがどのよう最終的な Android の Java プラグイン クラス見てですか？ 何が、JavaScript のプラグインにディスパッチされる `exec` 関数はプラグイン クラスに渡されます `execute` メソッド。 ほとんど `execute` の実装のようになります。

        @Override パブリック boolean 文字列操作、JSONArray args （CallbackContext callbackContext） を実行 JSONException がスローされます {場合 (「beep".equals(action)) {this.beep(args.getLong(0));callbackContext.success();返します true;} 戻り偽;//"MethodNotFound"エラーで誤った結果を返します。
        }
    

JavaScript は `exec` 関数の `action` パラメーターを省略可能なパラメーターとディスパッチ専用クラスのメソッドに対応します。

とき例外をキャッチし、エラーを返す、エラー JavaScript の一致する Java の例外名を可能な限り明快のために重要です。

## スレッド処理

プラグインの java スクリプトの設定が*ない*のメイン スレッドで実行、 `WebView` インタ フェース ； その代わりに、上で実行、 `WebCore` スレッドのように、 `execute` メソッド。 ユーザー インターフェイスと対話する必要がある場合次のバリエーションを使用する必要があります。

        @Override
        public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
            if ("beep".equals(action)) {
                final long duration = args.getLong(0);
                cordova.getActivity().runOnUiThread(new Runnable() {
                    public void run() {
                        ...
                        callbackContext.success(); // Thread-safe.
                    }
                });
                return true;
            }
            return false;
        }
    

使用、次の主要なインターフェイスで実行する必要がない場合の糸、しかしブロックしたくない、 `WebCore` スレッドのいずれか。

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
    

## エコー Android のプラグインの例

アプリケーション ・ プラグインで説明する java スクリプトの設定インタ フェースの*エコー*機能を合わせて使用して、 `plugin.xml` を注入する、 `feature` ローカル プラットフォーム仕様 `config.xml` ファイル。

        <platform name="android">
            <config-file target="config.xml" parent="/*">
                <feature name="Echo">
                    <param name="android-package" value="org.apache.cordova.plugin.Echo"/>
                </feature>
            </config-file>
        </platform>
    

次を追加し、 `src/org/apache/cordova/plugin/Echo.java` ファイル。

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
    

ファイルの上部に必要な輸入品からクラスを拡張 `CordovaPlugin` 、その `execute()` メソッドからメッセージを受信する、オーバーライドする `exec()` 。 `execute()`メソッドは、最初の値をテスト `action` 、この場合が 1 つだけ有効な `echo` 値です。 その他のアクションを返します `false` の結果と、 `INVALID_ACTION` 、JavaScript 側に呼び出されるエラー コールバックに変換エラー。

次に、メソッドを使って文字列のエコーを取得、 `args` オブジェクトの `getString` メソッドは、最初のパラメーターを指定する、メソッドに渡されます。 プライベートに渡される後 `echo` 法、それはパラメーター チェックじゃないことを確認 `null` またはその場合、空の文字列 `callbackContext.error()` JavaScript のエラー コールバックを呼び出します。 様々 なチェックにパスした場合、 `callbackContext.success()` 元を渡します `message` への JavaScript の成功コールバックをパラメーターとして文字列。

## Android の統合

アンドロイドの特徴、 `Intent` プロセスが互いに通信することができますシステムです。 プラグインへのアクセスがある、 `CordovaInterface` 、Android にアクセスできるオブジェクト `Activity` アプリケーションを実行します。 これは、 `Context` 新しい Android を起動するために必要な `Intent` 。 `CordovaInterface`プラグインを開始することができます、 `Activity` 、結果とときのコールバックのプラグインを設定する、 `Intent` をアプリケーションに返します。

コルドバ 2.0 以降のプラグインにもはや直接アクセスできます、 `Context` 、および、従来の `ctx` メンバーは使用されなくなりました。 すべて `ctx` メソッドに存在する、 `Context` 、両方 `getContext()` と `getActivity()` の必要なオブジェクトを返すことができます。

## Android のプラグインのデバッグ

Eclipse は、プロジェクトに含まれている Java ソースとしてプラグインをデバッグすることができます。 Android の開発者ツールの最新バージョンのみこの機能はまだ完全にできませんので、 *JAR*の依存関係にソースコードを接続することができます。