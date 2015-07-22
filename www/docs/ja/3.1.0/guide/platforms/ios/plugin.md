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

title: iOS のプラグイン
---

# iOS のプラグイン

プラグインは拡張する客観的 C クラスは `CDVPlugin` クラスです。

各プラグインのクラスとして登録する必要があります、 `<feature>` タグを `config.xml` ファイル。 その JavaScript はこの機構を介して `exec` メソッドの `service` パラメーター、Objective-C のクラスにマップします。

## プラグイン クラスのマッピング

プラグインの JavaScript の部分を常に使用して、 `cordova.exec` メソッドは次のように。

    exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);
    

これから要求をマーシャ リングします、 `UIWebView` 、iOS ネイティブ側にもっとまたはより少なく通話にダウン沸騰、 `action` メソッド、 `service` に渡された引数を持つクラス、 `args` 配列。

指定のプラグインとして、 `<feature>` 、コルドバ iOS アプリケーションのプロジェクトのタグ `config.xml` ファイル。

    <feature name="LocalStorage">
        <param name="ios-package" value="CDVLocalStorage" />
    </feature>
    

機能は、 `name` 属性は、JavaScript で使用すると一致する必要があります `exec` コールの `service` パラメーターと、 `value` 属性は、プラグインの Objective-C のクラスの名前と一致する必要があります。 `<param name>`私はする必要があります常に `"ios-package"` 。 このセットアップに従っていない場合、プラグイン コンパイル可能性がありますが、コルドバ到達されませんされます。

## プラグインの初期化と有効期間

それぞれの人生のためのプラグイン オブジェクトの 1 つのインスタンスが作成されます `UIWebView` 。 プラグインはまでインスタンス化されない最初、JavaScript から呼び出しによって参照されている場合を除き `<param>` と、 `onload` `name` 属性を設定する `"true"` で `config.xml` 。 例えば。

    <feature name="Echo">
        <param name="ios-package" value="Echo" />
        <param name="onload" value="true" />
    </feature>
    

*ない*プラグインの初期化子を指定します。代わりに、プラグインを使用する必要があります、 `pluginInitialize` 、スタート アップ ロジックのメソッド。

実行時間の長い要求プラグイン背景活動 （例えば、再生中のメディア）、内部状態またはリスナーを実装する必要があります、 `onReset` メソッドと停止またはそれらの活動をクリーンアップします。 このメソッドが実行されます、 `UIWebView` 、java スクリプトの設定を再読み込みを新しいページまたは更新に移動します。

## IOS コルドバ プラグインを書く

Java スクリプトの設定をネイティブ側に要求するプラグイン火があります。 我々 は持っている iOS Objective-C プラグイン経由で適切に割り当てられて、 `config.xml` ファイル。 だから最終的な iOS Objective-C のプラグイン クラスどのようか。

どのような JavaScript の経由でプラグインにディスパッチを取得 `exec` 関数で渡される対応するプラグイン クラスの `action` メソッド。プラグインのメソッドは、この署名。

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
    

1.  [CDVInvokedUrlCommand.h][1]

2.  [CDVPluginResult.h][2]

3.  [CDVCommandDelegate.h][3]

 [1]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVInvokedUrlCommand.h
 [2]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPluginResult.h
 [3]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVCommandDelegate.h

## iOS CDVPluginResult のメッセージの種類

CDVPluginResult を使用してを返すことができますさまざまな結果型を JavaScript コールバックに戻るのようなクラスのメソッドを使用しています。

    + (CDVPluginResult*)resultWithStatus:(CDVCommandStatus)statusOrdinal messageAs...
    

作成することができます `String` 、 `Int` 、 `Double` 、 `Bool` 、 `Array` 、 `Dictionary` 、 `ArrayBuffer` 、および `Multipart` の種類。 または、任意の引数 (ちょうど送信ステータス) を添付しないでください。 または、エラーを返します。 その場合、コールバックは発生しませんないすべてで任意のプラグインの結果を送信することもできます。

### メモ

*   `messageAsArrayBuffer`期待 `NSData*` に変換し、 `ArrayBuffer` JavaScript コールバック (と `ArrayBuffers` JavaScript からプラグインに送信に変換`NSData*`).
*   `messageAsMultipart` 期待して、 `NSArray *` サポートされている他のいずれかを含む型ととして配列全体を送信します `引数` JavaScript のコールバック。 
    *   気まぐれ: これはちょうど構文糖 （ただし、それは甘い） です。 こうすると、すべての引数はシリアル化または必要に応じて逆シリアル化します。 例えば、それに返しても安全 `NSData*` が、マルチパートとしてではなく `Array` /`Dictionary`.

## エコー プラグイン iOS プラグイン

我々 は、次のプロジェクトに追加の `config.xml` ファイル。

    <feature name="Echo">
        <param name="ios-package" value="Echo" />
    </feature>
    

我々 は、次のファイルを追加し、( `Echo.h` および `Echo.m` ) 私たちコルドバ iOS アプリケーション ディレクトリ内のプラグイン ディレクトリに。

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
    

コードを見てをみましょう。上部に我々 はすべての必要なコルドバ輸入があります。私たちのクラスから拡張 `CDVPlugin` (非常に重要）。

このプラグインは 1 つのアクションのみをサポートします、 `echo` アクション。 最初に、私たちを使用してエコー文字列をつかむ、 `objectAtIndex` メソッドに私たち `args` 、引数配列の 0 番目のパラメーターを取得したいそれを伝えます。 パラメーターのチェックのビットを行う我々： それはないことを確認 `nil` 、長さ 0 の文字列ではないことを確認しています。

私たちを返すかどうかは、 `PluginResult` と、 `ERROR` 状態。 すべてのそれらのチェックに合格し、私たちを返すかどうか、 `PluginResult` と、 `OK` の状態、およびパス、 `echo` 我々 は最初の場所で、パラメーターとして受け取った文字列。

最後に、我々 に結果を送信 `self.commandDelegate` 、これを実行する、 `exec` 側の JavaScript メソッドの成功または失敗のコールバック。 成功時のコールバックが呼び出されると、それを渡します、 `echo` パラメーター。

## スレッド処理

プラグインのメソッドは、UI と同じスレッドで実行されます。あなたのプラグイン大量の処理が必要です、ブロッキング呼び出しを必要とする場合は、バック グラウンド スレッドを使用してください。たとえば。

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
    

## 高度なプラグイン機能

他のメソッドでオーバーライドすることができますを参照してください。

*   [CDVPlugin.h][4]

*   [CDVPlugin.m][5]

 [4]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.h
 [5]: https://github.com/apache/cordova-ios/blob/master/CordovaLib/Classes/CDVPlugin.m

たとえばにフックすることができます、 `pause` 、 `resume` 、アプリを終了して `handleOpenURL` イベント。

## プラグインのデバッグ

Objective-C 側をデバッグするときは Xcode の組み込みのデバッガー。 JavaScript では、iOS の 5.0 使用できます[Weinre、Apache コルドバ プロジェクト][6]や[iWebInspector、サード パーティ製ユーティリティ][7]

 [6]: https://github.com/apache/cordova-weinre
 [7]: http://www.iwebinspector.com/

IOS の 6, サファリ 6.0 を使用して単に ios 6 シミュレータを実行しているアプリにアタッチすると思います。

## 一般的な落とし穴

*   Config.xml にプラグインのマッピングを追加することを忘れないでください。忘れた場合は、Xcode のコンソールにエラーが記録されます。

*   ドメイン ホワイト リスト ガイドで説明されているように、ホワイト リストに接続するすべてのホストを追加することを忘れないでください。忘れた場合は、Xcode のコンソールにエラーが記録されます。