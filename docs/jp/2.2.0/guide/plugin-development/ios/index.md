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

# Developing a Plugin on iOS

プラグインは `CDVPlugin` クラスを継承した Objective-C のクラスです。

各プラグインクラスは Cordova.plist ファイルの Plugins キーを使用し登録されている必要があります。

## プラグインクラスのマッピング

プラグインの JavaScript 部分は常に `cordova.exec` メソッドを以下のように使います:

    exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);

これは UIWebView から iOS ネイティブ側へのリクエストを整理し、おおよそ要約すると `service` クラスで `action` メソッドを、 `args` 配列で渡された引数と一緒に呼び出すということになります。

実行に時間がかかったり、バックグラウンドで動く (例: media の再生) もの、リスナーや内部状態を持つプラグインは `onReset()` メソッドが実装され、これらの動作を停止またはリセットすべきです。このメソッドは `UIWebView` が新しいページに遷移、もしくはリフレッシュした時、つまり JavaScript がリロードされた時に実行されます。

このプラグインは、 Cordova-iOS アプリケーションのプロジェクトフォルダーの中の `Cordova.plist` ファイルの `Plugins` キー (辞書) に追加される必要があります。

    <key>service_name</key>
    <string>PluginClassName</string>

`service_name` のキーは JavaScript の `exec` の中で使用しているものと一致している必要があり、値はプラグインの Objective-C クラスの名前になります。これがないと、プラグインはコンパイルされますが、 Cordova からアクセスできない状態となります。

## iOS Cordova Plugin の作成

私たちはプラグインリクエストをネイティブ側に送る JavaScript を作成しました。また、正しく `Cordova.plist` ファイルでマッピングされた iOS Objective-C プラグインもあります。では、最終的に iOS Objective-C プラグインのクラスがどのようになるのか見ていきましょう。

JavaScript の `exec` 関数によってプラグインに割り当てられたものは、プラグインクラスの対応する `action` メソッドに渡されます。プラグインメソッドのシグネチャは次のようになります:

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

1. [CDVInvokedUrlCommand.h](https://github.com/apache/incubator-cordova-ios/blob/master/CordovaLib/Classes/CDVInvokedUrlCommand.h)
2. [CDVPluginResult.h](https://github.com/apache/incubator-cordova-ios/blob/master/CordovaLib/Classes/CDVPluginResult.h)


## プラグインシグネチャ

**Cordova 2.1.0** からサポートされた **新しいシグネチャ** は次のとおりです:

        - (void)myMethod:(CDVInvokedUrlCommand*)command;

**古い (非推奨)** シグネチャはつぎのとおりです:

        - (void)myMethod:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

基本的に、オプション辞書は新しいシグネチャでは削除されており、 callbackId は引数配列の 0 番目の要素ではなく、別のプロパティーとなっています。

## iOS プラグインの Echo プラグイン

`Cordova.plist` ファイルの `Plugins` キー (辞書) に以下を追加します:

    <key>Echo</key>
    <string>Echo</string>

次のファイル (`Echo.h` と `Echo.m`) を Cordova-iOS アプリケーションフォルダーの中の
プラグインフォルダーに追加します:

    /********* Echo.h Cordova Plugin Header *******/

    #import <Cordova/CDV.h>

    @interface Echo : CDVPlugin

    - (void)echo:(CDVInvokedUrlCommand*)command;

    @end

    /********* Echo.m Cordova Plugin Implementation *******/

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


コードを見ていきましょう。一番上には、必要なすべての Cordova に関する import 文が並んでいます。クラスは `CDVPlugin` を継承しています - これはとても重要です。

このプラグインは 1 つのアクション `echo` のみをサポートしています。最初に、 `objectAtIndex` メソッドを `args` に使って引数配列 0 番目の要素である echo 用文字列を取得します。次に、 `objectAtIndex` メソッドを使って、引数配列の1番目の要素である echo 用文字列を取得します。ここで、少しパラメーターに対してチェックを行います: `nil` チェックや文字列の長さが0でないかどうかなどです。

もしそうであった場合は、ステータスが `ERROR` の `PluginResult` を返します。もしこれらのチェックをパスしたら、ステータスが `OK` の `PluginResult` を返し、パラメーターとして受け取った `echo` 文字列を渡します。

最後に、 `self.commandDelegate` に結果を返します。これは、 JavaScript 側で成功またはエラーコールバック関数を実行するような JavaScript を実行します。もし成功コールバックが呼ばれた場合は、 `echo` パラメーターをパラメーターとして渡します。

## スレッド

たとえ UIWebView が dedicated thread 上で実行されるとしても、プラグインメソッドは UI スレッドで実行されます。もしプラグインが尋常じゃない数のプロセスが必要、または処理をブロックする必要がある場合は、バックグラウンドスレッドを使用するべきです。使用例は次のとおりです:

    - (void)myPluginMethod:(CDVInvokedUrlCommand*)command
    {
        // Check command.arguments here.
        [self.commandDelegate runInBackground:^{
            NSString* payload = nil;
            // Some blocking logic...
            CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:payload];
            // The sendPluginResult method is thread-safe.
            [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
        }];
    }


## 一歩進んだプラグインの機能

他にも、オーバーライド出来るメソッドについては以下を参照してください:

1. [CDVPlugin.h](https://github.com/apache/incubator-cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.h)
2. [CDVPlugin.m](https://github.com/apache/incubator-cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.m)

例えば、 pausa, resume, app terminate, handleOpenURL events といったような機能を実装できます。

## プラグインのデバッグ

Objective-C 側でデバッグするには、 Xcode のビルトインのデバッガーを使用します。 JavaScript 側では、 iOS 5.0 では [Apache Cordova Project の Weinre](https://github.com/apache/incubator-cordova-weinre) または [サードパーティ製の iWebInspector](http://www.iwebinspector.com/) を使用できます。

iOS 6 では、 Safari 6.0 を使用して簡単に iOS 6 シミュレーター上で動いているアプリをデバッグできます。

## よくある落とし穴

* Cordova.plist にプラグインマッピングを追加することを忘れないでください - もし忘れている場合は、 Xcode のコンソールログにエラーが表示されます
* 接続するすべてのホストを [ホワイトリスト](guide_whitelist_index.md.html#Domain%20Whitelist%20Guide) に追加することを忘れないで下さい - もし忘れている場合は、 Xcode のコンソールログにエラーが表示されます

## 非推奨のプラグインシグネチャに関する注意点

**古い (非推奨)** シグネチャはつぎのとおりです:

        - (void) myMethod:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

Objective-C プラグインメソッドの `options` パラメーターは非推奨であり、使われるべきではありません。レガシー的な理由で、 `args` 配列の最後の JavaScript オブジェクト要素は、 Objective-C 側メソッドの `options` 辞書に渡されます。どんな JavaScript オブジェクトでも `args` 配列の最後の要素として渡されるべきであり、もし配列の途中の要素に JavaScript オブジェクトがあると、それ以降の Objective-C 側の配列のインデックスがでたらめになることに十分注意してください。 options 辞書はただ1つの JavaScript オブジェクトのみをサポートしており、また配列の一番最後の要素のみネイティブメソッドに渡されます。このようにエラーを起こしやすいので、 `options` は非推奨となっています。
