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

# iOS のプラグイン

IOS プラットフォームにネイティブのプラグインのコードを実装する方法の詳細について説明します。 これを読む前に、プラグインの構造とその一般的な JavaScript のインターフェイスの概要についてアプリケーション ・ プラグインが参照してください。 このセクションは、ネイティブ プラットフォームに戻るコルドバ webview から通信するサンプル*エコー*プラグインを示すために続けています。

IOS プラグインは拡張する客観的 C クラスとして実装され、 `CDVPlugin` クラス。 Javascript の `exec` メソッドの `service` 、Objective-C クラス、各プラグインにマップするパラメーターとして登録する必要があります、 `<feature>` タグの名前付きのアプリケーション ディレクトリに `config.xml` ファイル。

## プラグイン クラスのマッピング

プラグインの JavaScript の部分を使用して、 `cordova.exec` メソッドは次のように。

        exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);
    

これからの要求をマーシャ リングします、 `UIWebView` iOS ネイティブ側を効果的に呼び出して、 `action` 法、 `service` に渡された引数を持つクラス、 `args` 配列。

としてプラグインを指定する、 `<feature>` タグ コルドバ iOS アプリケーションのプロジェクトに `config.xml` ファイルを使用して、 `plugin.xml` このマークアップをアプリケーション ・ プラグインで説明するように自動的に挿入するファイル。

        <feature name="LocalStorage">
            <param name="ios-package" value="CDVLocalStorage" />
        </feature>
    

機能の `name` として、java スクリプトの設定を指定する属性に一致する必要があります `exec` コールの `service` パラメーター。 `value`属性は、プラグインの Objective-C のクラスの名前と一致する必要があります。 `<param>`要素の `name` する必要があります常に `ios-package` 。 これらのガイドラインに従っていない場合、プラグインがありますコンパイルがコルドバ可能性がありますまだないそれにアクセスすることができます。

## プラグインの初期化と有効期間

それぞれの人生のためのプラグイン オブジェクトの 1 つのインスタンスが作成されます `UIWebView` 。 JavaScript からの呼び出しによって最初に参照されたときに通常、プラグインがインスタンス化されます。 設定してインスタンス化することができますそれ以外の場合、 `param` という名前の `onload` を `true` で、 `config.xml` ファイル。

        <feature name="Echo">
            <param name="ios-package" value="Echo" />
            <param name="onload" value="true" />
        </feature>
    

*ない*プラグインの初期化子を指定します。代わりに、プラグインを使用する必要があります、 `pluginInitialize` 、スタートアップ ロジックのメソッド。

実行時間の長い要求プラグイン活動を背景は、メディアの再生、リスナー、またはその内部状態を実装する必要がありますを維持するような `onReset` それらの活動をきれいにする方法。 メソッドの実行タイミング、 `UIWebView` 、java スクリプトの設定を再読み込みを新しいページまたは更新に移動します。

## IOS コルドバ プラグインを書く

JavaScript 呼び出し火災ネイティブ側に要求するプラグインおよび対応する iOS Objective-C プラグインが適切にマップされている、 `config.xml` ファイル、しかし最終的な iOS Objective-C のプラグイン クラスの一見はどんなですか？ 何が、JavaScript のプラグインにディスパッチされる `exec` 関数は、対応するプラグインのクラスに渡されます `action` メソッド。 プラグインのメソッドは、この署名。

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
    

詳細についてを参照してください `[CDVInvokedUrlCommand.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVInvokedUrlCommand.h)` 、 `[CDVPluginResult.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPluginResult.h)` 、と。`[CDVCommandDelegate.h](https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVCommandDelegate.h)`.

## iOS CDVPluginResult のメッセージの種類

使用できる `CDVPluginResult` をさまざまな結果を返す型に戻る JavaScript コールバックこのパターンに従うクラスのメソッドを使用して。

        + (CDVPluginResult*)resultWithStatus:(CDVCommandStatus)statusOrdinal messageAs...
    

作成することができます `String` 、 `Int` 、 `Double` 、 `Bool` 、 `Array` 、 `Dictionary` 、 `ArrayBuffer` 、および `Multipart` の種類。 また、ステータスを送信したり、エラーを返すへの引数を省略またはも任意のプラグインの結果を送信しないように選択することができます、その場合ではどちらのコールバックが発生します。

複雑な戻り値について次に注意してください。

*   `messageAsArrayBuffer`期待 `NSData*` に変換し、 `ArrayBuffer` JavaScript コールバックで。 同様に、いずれかの `ArrayBuffer` に変換され、プラグインに JavaScript 送信されます`NSData*`.

*   `messageAsMultipart`期待して、 `NSArray*` 型、サポートされている他のいずれかを含むととして配列全体を送信します、 `arguments` JavaScript コールバックします。 この方法にすべての引数はシリアル化またはに返しても安全ですので、必要に応じて逆シリアル化される `NSData*` が、マルチパートとしてではなく `Array` /`Dictionary`.

## IOS は、例えばプラグインをエコーします。

アプリケーション ・ プラグインで説明する java スクリプトの設定インタ フェースの*エコー*機能を合わせて使用して、 `plugin.xml` を注入する、 `feature` ローカル プラットフォーム仕様 `config.xml` ファイル。

        <platform name="ios">
            <config-file target="config.xml" parent="/*">
                <feature name="Echo">
                    <param name="ios-package" value="Echo" />
                </feature>
            </config-file>
        </platform>
    

我々 は、次を追加して `Echo.h` および `Echo.m` ファイルを `Plugins` コルドバ iOS アプリケーション ディレクトリ内のフォルダー。

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
    

ファイルの上部に必要な輸入品からクラスを拡張 `CDVPlugin` 。 この場合、プラグインは 1 つのみをサポートします。 `echo` アクション。 エコー文字列を呼び出すことによって取得、 `objectAtIndex` の最初のパラメーターでメソッドを取得、 `arguments` 、JavaScript によって渡される配列の引数に対応する `exec()` 関数。

それじゃないことを確認するパラメーターをチェックします `nil` または空の文字列を返す、 `PluginResult` と、 `ERROR` 状態であれば。 かどうかは、パラメーター チェックに合格して、それを返します、 `PluginResult` と、 `OK` 元を渡してステータス `echo` 文字列。 最後に、結果を送信 `self.commandDelegate` 、これを実行する、 `exec` 側の JavaScript メソッドの成功または失敗のコールバック。 成功時のコールバックが呼び出されると、それを渡します、 `echo` パラメーター。

## iOS の統合

`CDVPlugin`クラスを備えてあなたのプラグインをオーバーライドすることができます他の方法。 たとえば、キャプチャすることができます、 `pause` 、 `resume` 、アプリを終了して `handleOpenURL` イベント。 指導のための[CDVPlugin.h][1]および[CDVPlugin.m][2]のクラスを参照してください。

 [1]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.h
 [2]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.m

## スレッド処理

プラグインのメソッドは、通常メイン インターフェイスとして同じスレッドで実行します。 あなたのプラグイン大量の処理が必要です、ブロッキング呼び出しを必要とする場合は、バック グラウンド スレッドを使用してください。 たとえば。

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
    

## IOS のプラグインのデバッグ

Objective-C 側デバッグ、Xcode の組み込みのデバッガーが必要です。 Javascript は、iOS の 5.0 使用できます[Weinre、Apache コルドバ プロジェクト][3]や[iWebInspector、サード パーティ製ユーティリティ][4]。 Ios 6, iOS の内 6 シミュレータを実行しているアプリをサファリ 6.0 を添付できます。

 [3]: https://github.com/apache/cordova-weinre
 [4]: http://www.iwebinspector.com/

## 一般的な落とし穴

*   あなたのプラグインのマッピングを追加することを忘れないでください `config.xml` 。忘れた場合は、Xcode のコンソールにエラーが記録されます。

*   ドメイン ホワイト リスト ガイドで説明されているように、ホワイト リストに接続するすべてのホストを追加することを忘れないでください。忘れた場合は、Xcode のコンソールにエラーが記録されます。