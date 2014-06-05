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

# アマゾン火 OS プラグイン

カスタム プラグインの開発の概要については Android プラグイン ガイドの指示に従います。

## エコー アマゾン火 OS のプラグインの例

アプリケーション ・ プラグインで説明する java スクリプトの設定インタ フェースの*エコー*機能を合わせて使用して、 `plugin.xml` を注入する、 `feature` ローカル プラットフォーム仕様 `config.xml` ファイル。

    <platform name="amazon-fireos">
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
    

アマゾン火 OS プラットフォーム Android プラグイン コードを再利用し、指す plugin.xml を変更、する場合は、 `android` 特定のソース ファイル。たとえば、

    <platform name="amazon-fireos">
        <config-file target="config.xml" parent="/*">
            <feature name="Echo">
                <param name="android-package" value="org.apache.cordova.plugin.Echo"/>
            </feature>
        </config-file>
        <source-file src="src/android/Echo.java" target-dir="src/org/apache/cordova/plugin" />
    </platform>
    

アマゾン火 OS プラットフォーム用のカスタマイズされたプラグインを書くという名前のフォルダーを作成し、たい場合 `amazon` プラグイン src の下/フォルダーを指す plugin.xml を変更し、 `amazon` 特定のソース ファイル。 たとえば、

    <platform name="amazon-fireos">
        <config-file target="config.xml" parent="/*">
            <feature name="Echo">
                <param name="android-package" value="org.apache.cordova.plugin.Echo"/>
            </feature>
        </config-file>
        <source-file src="src/amazon/Echo.java" target-dir="src/org/apache/cordova/plugin" />
    </platform>
    

## あなたのプラグインで Amazon の WebView を使用します。

コルドバ アマゾン火 os はオープン ソース クロム プロジェクトに組み込まれているカスタムのアマゾン WebView を使用しています。それは加速し、Kindle の火災に流体のパフォーマンス用に最適化された GPU です。

[Amazon 開発者ポータル][1]点検プロジェクトでアマゾンの WebView を最大限に活用する方法を理解するには.

 [1]: https://developer.amazon.com/sdk/fire/IntegratingAWV.html