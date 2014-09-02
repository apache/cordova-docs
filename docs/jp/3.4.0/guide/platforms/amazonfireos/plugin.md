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

# Amazon Fire OS プラグイン

プラグインのカスタマイズに関する概要を記載した 『 Android プラグイン 』 の手順をご確認ください。

## Amazon Fire OS における Echo プラグインの例

『 プラグイン開発ガイド 』 ( 原文 「 Application Plugins 」 ) に記載されている、JavaScript インターフェイスの _エコー_ 機能にしたい場合には、 `plugin.xml` を使用して、ローカルプラットフォームの `config.xml` ファイルに `feature` を注入 ( inject ) します。

    <platform name="amazon-fireos">
        <config-file target="config.xml" parent="/*">
            <feature name="Echo">
                <param name="android-package" value="org.apache.cordova.plugin.Echo"/>
            </feature>
        </config-file>
    </platform>

次に、以下のラインを `src/org/apache/cordova/plugin/Echo.java` ファイルに追加します。

    package org.apache.cordova.plugin;

    import org.apache.cordova.CordovaPlugin;
    import org.apache.cordova.CallbackContext;

    import org.json.JSONArray;
    import org.json.JSONException;
    import org.json.JSONObject;

    /**
     * JavaScript から呼ばれた文字列をエコーします。
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

Android プラグインのコードを、Amazon Fire OS プラットフォーム用に再利用したい場合は、`android` 下のソースファイル ( source-file ) を指すよう、plugin.xml の修正を下記のように行ってください。

    <platform name="amazon-fireos">
        <config-file target="config.xml" parent="/*">
            <feature name="Echo">
                <param name="android-package" value="org.apache.cordova.plugin.Echo"/>
            </feature>
        </config-file>
        <source-file src="src/android/Echo.java" target-dir="src/org/apache/cordova/plugin" />
    </platform>

Amazon Fire OS 用にプラグインのカスタマイズを行いたい場合には、開発者のプラグインの src/ フォルダー下に `amazon` と名付けたフォルダーを作成してください。次に、`amazon` 下のソースファイル ( source-file ) を指すよう、plugin.xml の修正を下記のように行ってください。

    <platform name="amazon-fireos">
        <config-file target="config.xml" parent="/*">
            <feature name="Echo">
                <param name="android-package" value="org.apache.cordova.plugin.Echo"/>
            </feature>
        </config-file>
        <source-file src="src/amazon/Echo.java" target-dir="src/org/apache/cordova/plugin" />
    </platform>

## 開発者のプラグインでの Amazon WebView の使用

Amazon Fire OS において、Cordova は、カスタマイズされている Amazon WebView を使用します ( Chromium オープンソース プロジェクト 提供 )。Amazon WebView では、Kindle Fire におけるパフォーマンスの最適化と GPU による高速化を行っています。

プロジェクトにおける Amazon WebView の使用方法に関しては、 [Amazon Developer Portal](https://developer.amazon.com/sdk/fire/IntegratingAWV.html) をご確認ください。
