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

このガイドはブラックベリー上のエコー プラグインを開発する方法を示します。 プラグイン開発ガイドをすでにおく必要があります、広範囲な概観を提供し、このガイドをオフに葉をピックアップします。 さらに、[コルドバ ブラックベリー リポジトリ][1]をダウンロードします。.

 [1]: https://git-wip-us.apache.org/repos/asf?p=cordova-blackberry-webworks.git;a=summary

`Cordova-BlackBerry`プロジェクトでは、トーチ、太字、脚本などの BlackBerry デバイスに展開することができます。 脚本は、他の BlackBerry ハンドヘルド装置、開発努力を複製する必要があるより別のコードベースを使用します。 このガイドは、タブレットではなく、ハンドヘルド デバイスに焦点を当てください。 （将来、このガイドする必要がありますカバー両方のプラットフォーム）

エコー プラグインは本質的にどのようなメッセージ、ユーザーに提供を返します、 `window.echo` 機能。

    window.echo = function(str, callback) {
        cordova.exec(callback, function(err) {
            callback('Nothing to echo.');
        }, "Echo", "echo", [str]);
    };
    

## Plugins.xml を変更します。

プロジェクトの `www/plugins.xml` ディレクトリには、コルドバ プロジェクトのプラグインに必要な参照のすべてが含まれます。 ので参照を追加するとき `cordova.exec` はコルドバと呼ばれる、マップする方法を知っている、 `Echo` の引数 `cordova.exec` を `Echo` ネイティブは書きたいクラス。

    <feature name="Echo">
        <param name="blackberry-package" value="org.apache.cordova.echo.Echo" />
    </feature>
    

## Echo.java を追加します。

気付いた場合、value 属性の構造は、エコーのプラグインにつながる、定義されたパスが表示されます。 呼ばれるディレクトリを探しますでコルドバ ブラックベリー WebWorks レポのルート ディレクトリに `framework` 。 このディレクトリには、すべての黒イチゴでネイティブで実行されるソース コードが含まれます。 移動 `framework/ext/src/org/apache/cordova` 。 この時点で、内部では、ソース コード、プラグイン ディレクトリのすべてが表示されます。 だから、ディレクトリ エコーを追加する `framework/ext/src/org/apache/cordova/echo` と呼ばれるファイルを作成して `Echo.java` で`framework/ext/src/org/apache/cordova/echo/Echo.java`.

## 書き込み Echo.java

プラグインを書くの背後にある基本的な考え方は、プラグインのクラスを拡張するクラスを作成し、呼び出されるメソッドに `execute` を返す、 `PluginResult` クラス。 すべての呼び出しに `cordova.exec` のクラスと同様に、引数内で実行するアクションで渡します。 この場合、「エコー」です「エコー」と [str] クラス内で実行するアクションで渡している引数。

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
    

だから我々 は上記のコードを見て、execute メソッド内で我々 はまず探しているアクションが来ていることがわかります。 エコー プラグインが 1 つだけのアクション `echo` 、我々 はのみがチェックされます。 私たちのプラグインがあるあればより多くのアクション、それらのアクションをチェックする条件付きテストを追加するだけです。

Args パラメーターによって供給されている引数から入ってくるメッセージをつかむにしていきます。 単にすることによって、最初の引数をつかむことができます。`String theMsg = args.getString(0);`.

我々 は、いくつかのエラー チェックを行います、ステータスが「ok」の新しい PluginResult インスタンスを作成しますメッセージ問題がない場合： `PluginResult.Status.OK` しメッセージを返します： `theMsg` . この後、我々 は結果を返す成功時のコールバックで発生する JavaScript に渡すことを。 ようなさまざまな状態の例外を返すことができます何かが失敗した場合は、 `PluginResult.Status.ERROR` 、 `PluginResult.Status.JSON_EXCEPTION` 、または `PluginResult.Status.INVALID_ACTION` 。 戻って渡されると、これらの種類の結果火 JavaScript で失敗コールバック。

## プロジェクトの www ディレクトリに .jar を更新

追加された `Echo.java` プロジェクトで更新する必要があります。 構築する、 `.jar` ファイル、ブラックベリー WebWorks レポのルート ディレクトリに移動し、実行、 `ant` コマンド。

    ant update -Dproject.path="~/path_to_my_project"
    

これは、新しい構築します `.jar` ファイルで、 `build/ext` ディレクトリ。コピー、 `build/ext/cordova.jar` にファイルを `project/www/ext` ディレクトリ。

もしすべてがうまくいけば、ブラックベリーでエコー プラグインを使用することができます。