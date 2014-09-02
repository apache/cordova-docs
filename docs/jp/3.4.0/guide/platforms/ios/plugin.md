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

# iOS プラグイン

この節では、iOS プラットフォームにおけるネイティブプラグインコードの実装方法の詳細に関して解説します。この節を読む前に、
『 プラグイン開発ガイド 』 ( 原文 「 Application Plugins 」 ) を読み、プラグインの構造と JavaScript の汎用インターフェイスの概要をご確認ください。
この節では、Cordova Webview とネイティブプラットフォーム間で通信を行う、_echo_ プラグインのサンプルを引き続き使用して、解説を行います。 

`CDVPlugin` クラスを拡張する Objective-C のクラスとして、iOS プラグインは実装されます。
各プラグインのクラスは、アプリのディレクトリ内にある `config.xml` ファイル内で、 `<feature>` タグを使用して、登録する必要があります ( Objective-C クラスへマッピングを行うときに使用する、JavaScript の `exec` メソッドの `service` パラメータとの対応付け ) 。

## プラグインのクラスマッピング

プラグインの JavaScript では、 `cordova.exec` メソッドを以下のように使用します。

        exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);

これにより、`args` 配列内の引数と共に、 `service` クラスの `action` メソッドを効果的に呼び出し、`UIWebView` から iOS のネイティブ側へ、リクエストを送れます。

Cordova-iOS アプリプロジェクトの `config.xml` ファイル内で `<feature>` タグを使用して、プラグインの指定を行います。また、
 `plugin.xml` ファイルを使用して、自動的に、この記述を注入 ( inject ) するようにします。詳細に関しては、『 Application
Plugins 』 に記載があります。

        <feature name="LocalStorage">
            <param name="ios-package" value="CDVLocalStorage" />
        </feature>

feature の `name` 属性値は、JavaScript の `exec` の `service` パラメータとして指定したものと同じものです。
`value` 属性値は、プラグインの Objective-C クラスの名前と同じになります。 `<param>` 要素の `name` は、常に、 `ios-package` となります。これらのガイドラインに従わない場合、プラグインのコンパイルはできますが、Cordova からアクセスはできません。

## プラグインの初期化と寿命

各 `UIWebView` が生き続ける間は、プラグインオブジェクトのインスタンスも生き続けます。JavaScript から呼び出され、最初に参照されたときに、プラグインのインスタンス化が通常行われます。これ以外の方法では、 
`config.xml` ファイル内で、 `param` に `onload` / `true` と設定して、インスタンス化することもできます。

        <feature name="Echo">
            <param name="ios-package" value="Echo" />
            <param name="onload" value="true" />
        </feature>

プラグインの初期化方法に関しては、これといった _指定はありません_ が、プラグインの使用開始時のロジックで、 `pluginInitialize` メソッドを使用することを推奨します。

長時間実行されるリクエスト、バックグラウンドでの処理 ( メディア再生、リスナーなど )、内部情報の保持などを行うプラグインでは、これらの処理をクリーンアップする場合、 `onReset` メソッドを使用する必要があります。このメソッドは、新たなページへの遷移またはページのリフレッシュを `UIWebView` が行うときに実行され、いづれの場合も JavaScript の再読み込みを行います。

## iOS Cordova プラグインの構築

JavaScript からの呼び出しにより、プラグインのリクエストがネイティブ側に送られます。そして、 `config.xml` ファイルで記述されているとおりに、対応する iOS Objective-C のプラグインのマッピングが適切に行われるわけですが、最終的な iOS Objective-C プラグインクラスとは、どのようなものなのでしょうか。JavaScript の `exec` 関数を使用してプラグインに渡されたものが、対応するプラグインクラスの `action` メソッドに渡されます。プラグインメソッドは、下記のシグネチャ ( signature ) を持ちます。

        - (void)myMethod:(CDVInvokedUrlCommand*)command
        {
            CDVPluginResult* pluginResult = nil;
            NSString* myarg = [command.arguments objectAtIndex:0];

            if (myarg != nil) {
                pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
            } else {
                pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"Arg was null"];
            }
            [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
        }

詳細に関しては、以下をご確認ください。
 `[CDVInvokedUrlCommand.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVInvokedUrlCommand.h)`,
 `[CDVPluginResult.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPluginResult.h)`,
 `[CDVCommandDelegate.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVCommandDelegate.h)`.

## iOS CDVPluginResult メッセージの型

`CDVPluginResult` を使用して、さまざまな型の実行結果を JavaScript のコールバックに返すことができます。その際、
以下のような、クラスのメソッドを使用します。

        + (CDVPluginResult*)resultWithStatus:(CDVCommandStatus)statusOrdinal messageAs...

作成できる型は、 `String` 、 `Int` 、 `Double` 、 `Bool` 、 `Array` 、 `Dictionary` 、 `ArrayBuffer` 、 `Multipart` となります。
また、引数を省略して一部情報 ( ステータス情報、エラー情報 ) の引き渡しを行ったり、または、プラグインの実行結果をまったく返さないようにすることもできます。
いずれの場合も、コールバックは発火しなくなります。

複合型の戻り値 ( complex return value ) に関しては、以下をお読みください。

- `messageAsArrayBuffer` 側では、 `NSData*` を受け取ることを想定しています。そして、JavaScript コールバック側で、 `NSData*` を `ArrayBuffer` に変換します。同じように、JavaScript からプラグインに渡される `ArrayBuffer` は、 `NSData*` に変換されます。

- `messageAsMultipart` 側では、サポート対象の型を使用した `NSArray*` を受け取ることを想定しています。そして、JavaScript のコールバックに、 `arguments` として、その配列を渡します。また、必要に応じて、引数すべてをシリアル化したり・しなかったりすることができます。このため、 `Array`/`Dictionary` 形式ではなく、 multipart 形式で、 `NSData*` を返す方が安全です。

## iOS Echo プラグインの例

『 プラグイン開発ガイド 』 ( 原文 「 Application Plugins 」 ) に記載されているような、JavaScript インターフェイスの _エコー_ 機能にしたい場合には、 `plugin.xml` を使用して、ローカルプラットフォームの `config.xml` ファイルに `feature` を注入 ( inject ) します。

        <platform name="ios">
            <config-file target="config.xml" parent="/*">
                <feature name="Echo">
                    <param name="ios-package" value="Echo" />
                </feature>
            </config-file>
        </platform>

次に、 Cordova-iOS アプリのディレクトリ内の `Plugins` フォルダーに、以下の `Echo.h` と `Echo.m` ファイルを追加します。

        /********* Echo.h Cordova プラグインのヘッダーファイル *******/

        #import <Cordova/CDV.h>

        @interface Echo : CDVPlugin

        - (void)echo:(CDVInvokedUrlCommand*)command;

        @end

        /********* Echo.m Cordova プラグインの実装ファイル *******/

        #import "Echo.h"
        #import <Cordova/CDV.h>

        @implementation Echo

        - (void)echo:(CDVInvokedUrlCommand*)command
        {
            CDVPluginResult* pluginResult = nil;
            NSString* echo = [command.arguments objectAtIndex:0];

            if (echo != nil && [echo length] > 0) {
                pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:echo];
            } else {
                pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
            }

            [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
        }

        @end

ファイルの最上部に import を記述して、クラスの拡張を `CDVPlugin` から行うことを示します。この例では、 `echo` アクションを行います。 `objectAtIndex` メソッドを呼び出して、`arguments` 配列の最初のパラメータを取得して、エコーの文字列を獲得します。配列に格納されているパラメータは、JavaScript の `exec()` 関数から渡された引数です。

次に、パラメータが `nil` または空の文字列ではないことを確認します。 `nil` または空の文字列 であった場合、 `ERROR` ステータスの `PluginResult` を返します。確認が無事済んだ場合、 `OK` ステータスの `PluginResult` を返し、また、 `echo` の文字列もそのまま渡します。最後に、実行結果を `self.commandDelegate` に送ります。 `self.commandDelegate` は、JavaScript 側の `exec` メソッド内の成功時または失敗時のコールバックを実行します。成功時のコールバックが呼ばれた場合、 `echo` パラメータを渡します。

## iOS への組み込み

`CDVPlugin` クラスには、開発者側のプラグインを使用して、オーバーライド ( override ) できるメソッドが複数あります。たとえば、 `pause` ( 一時停止 )、 `resume` ( 再開 )、 app_terminate ( アプリの終了 ) 、 `handleOpenURL` イベントなどがあります。クラスのガイダンスに関しては、 
[CDVPlugin.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.h)
 と 
[CDVPlugin.m](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.m) 
をご確認ください。

## スレッドの処理

通常、プラグインのメソッドは、メインのインターフェイスと同じスレッド内で実行されます。プラグイン側で大量の処理が発生する場合、または、ブロックキング コール ( blocking call ) を必要とする場合には、バックグラウンド スレッド ( background thread ) の使用を推奨します。以下に例を示します。

        - (void)myPluginMethod:(CDVInvokedUrlCommand*)command
        {
            // command.arguments の内容確認
            [self.commandDelegate runInBackground:^{
                NSString* payload = nil;
                // ブロッキング
                CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:payload];
                // sendPluginResult メソッドは、 スレッドセーフ ( thread-safe ) です
                [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
            }];
        }

## iOS プラグインのデバッグ

Objective-C 側のデバッグには、 Xcode 搭載のデバッガーを使用します。JavaScript 側であれば、iOS 5.0 の場合、 [Weinre - Apache Cordova
プロジェクト](https://github.com/apache/cordova-weinre) または [iWebInspector ( 第三者提供のユーティリティ )](http://www.iwebinspector.com/) を使用できます。iOS 6 の場合、iOS 6 シミュレータ内で実行しているアプリに、Safari 6.0 をアタッチ ( attach ) することができます。

## よくある失敗

- `config.xml` でプラグインをマッピングすることを忘れないでください。忘れた場合、Xcode のコンソール上でエラーが出力されます。

- 接続を行うホストをホワイトリストに登録することを忘れないでください ( Domain Whitelist Guide を参照 )。忘れた場合、Xcode のコンソール上でエラーが出力されます。

