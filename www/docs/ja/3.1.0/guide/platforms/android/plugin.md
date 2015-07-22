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

title: Android のプラグイン
---

# Android のプラグイン

プラグインを書くコルドバ Android のアーキテクチャの理解が必要です。 コルドバ アンドロイド Android の WebView それに取り付けられたフックで構成されます。 これらのプラグインのクラスへのマッピングとして表される、 `config.xml` ファイル。

プラグイン拡張する少なくとも 1 つの Java クラスから成っている、 `CordovaPlugin` クラス。 プラグインの 1 つをオーバーライドする必要があります、 `execute` メソッドから `CordovaPlugin` 。 最高のプラグインが処理する実際には、 `pause` と `resume` イベント、およびプラグインの間のメッセージパッシング。 実行時間の長い要求は、メディアの再生、リスナー、または内部の状態などのバック グラウンド アクティビティでプラグインを実装する必要があります、 `onReset()` メソッドと同様です。 それを実行するとき、 `WebView` 、java スクリプトの設定を再読み込みを新しいページまたは更新に移動します。

## プラグイン クラスのマッピング

プラグインの JavaScript の部分を常に使用して、 `cordova.exec` メソッドは次のように。

    exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);
    

これは、アンドロイド ネイティブ側には、もっとまたはより少なく通話にダウン沸騰、WebView から要求をマーシャ リングします、 `action` 法、 `service` に渡された引数を持つクラス、 `args` 配列。

プラグインを追加する必要がありますあなたのプラグインを Java ファイルや独自の jar ファイルとして配布するかどうか、 `config.xml` 、コルドバ Android アプリケーションでファイル `res/xml/` ディレクトリ。

    <feature name="<service_name>">
        <param name="android-package" value="<full_name_including_namespace>" />
    </feature>
    

サービス名、JavaScript で使用されるものと一致する必要があります `exec` 呼び出し、および値は、Java クラスの完全名、名前空間を含みます。 それ以外の場合、プラグイン コンパイルしますが、まだコルドバで到達できません。

## Android の Java プラグインを書く

Java スクリプトの設定をネイティブ側に要求するプラグインが発生します。経由で Android の Java プラグインが正しくマップされている、 `config.xml` ファイル。だから最終的な Android の Java プラグイン クラスどのようか。

何を介して JavaScript のプラグインにディスパッチを取得 `exec` 関数で渡されるプラグイン クラスの `execute` メソッド。 ほとんど `execute` の実装のようになります。

    @Override パブリック boolean 文字列操作、JSONArray args （CallbackContext callbackContext） を実行 JSONException がスローされます {場合 (「beep".equals(action)) {this.beep(args.getLong(0));callbackContext.success();返します true;} 戻り偽;//"MethodNotFound"エラーで誤った結果を返します。
    }
    

値と比較の `action` パラメーター、およびディスパッチ クラスでは、必要に応じて、一部のパラメーターをメソッドに渡します (プライベート) メソッドへのオフ要求。

とき例外をキャッチし、エラーを返す、エラー JavaScript の一致する Java の例外名を可能な限り明快のために重要です。

### スレッド処理

WebView に JavaScript が*なく*UI スレッド上で実行します。WebCore スレッドで実行されます。`execute`メソッドも WebCore スレッドを実行します。

UI と対話する必要がある場合、次を使用する必要があります。

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
    

UI スレッド上で実行する必要がない場合 WebCore のスレッドをブロックしません。

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
    

### エコー Android のプラグインの例

追加するのには、次の `config.xml` ファイル。

    <feature name="Echo">
        <param name="android-package" value="org.apache.cordova.plugin.Echo" />
    </feature>
    

以下のファイルを追加し、 `src/org/apache/cordova/plugin/Echo.java` コルドバ Android アプリケーション内。

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
    

コードを見てをみましょう。 必要な `imports` が一番。 私たちのクラスから拡張 `CordovaPlugin` 。 Execute() メソッドをオーバーライドして、exec() からメッセージを受信します。 本手法はまず比較 `action` ： このプラグインは 1 つのアクションのみをサポートします、 `echo` アクション。 その他のアクションを返します `false` 、タイプのエラーの結果が `INVALID_ACTION` 、JavaScript 側エラー コールバック呼び出しに変換します。 次に、私たちを使用してエコー文字列をつかむ、 `getString` メソッドに私たち `args` 、パラメーター配列の 0 番目のパラメーターを取得したいそれを伝えます。 パラメーターのチェックのビットを行う我々： それはないことを確認 `null` 、長さ 0 の文字列ではないことを確認しています。 我々 を呼び出す場合は、 `callbackContext.error()` （これは、今では、あなたが知っておくべきエラー コールバックを呼び出します)。 かどうかすべてのこれらのチェックに合格し、我々 を呼び出す `callbackContext.success()` を渡すと、 `message` 私たちをパラメーターとして受け取る文字列。 これは最後に、JavaScript 側成功コールバックの呼び出しに変換します。 それも通過、 `message` JavaScript の成功コールバック関数にパラメーターとしてパラメーター。

## プラグインのデバッグ

Eclipse を使用して Android プロジェクトをデバッグすることができます、プロジェクトに Java ソースが含まれる場合、プラグインをデバッグできます。 Android の開発者ツールの最新バージョンのみこの時点で完全にサポートされていないのでソース コード添付ファイル JAR の依存関係を許可するように知られています。

## 一般的な落とし穴

*   プラグインへのアクセスがある、 `CordovaInterface` オブジェクト。 このオブジェクトには、Android へのアクセスを `Activity` アプリケーションを実行しています。 これは、 `Context` 新しい Android を起動するために必要な `Intent` 。 `CordovaInterface`プラグインを開始することができます、 `Activity` 、結果とときのコールバックのプラグインを設定する、 `Intent` アプリケーションに戻ってくる。 これは重要ですが、以来、 `Intent` s システムは、Android とのプロセス間通信方法。

*   プラグインに直接アクセスする必要はありません、 `Context` 彼らは、過去に持っていると。 遺産 `ctx` メンバーは廃止され、6 ヶ月間 2.0 をリリースした後削除されます。 すべての `ctx` メソッドに存在する、 `Context` 、両方 `getContext()` と `getActivity()` に必要な適切なオブジェクトを返すことが可能です。

## ソースを使用してください。

[既存のプラグインに目を通す][1]には、独自のプラグインを書くに自分自身を準備する最もよい方法の 1 つ.

 [1]: https://github.com/apache/cordova-android/tree/master/framework/src/org/apache/cordova

[CordovaPlugin.java][2]のコメントをまた読む必要があります。.

 [2]: https://github.com/apache/cordova-android/blob/master/framework/src/org/apache/cordova/CordovaPlugin.java