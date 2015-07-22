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

title: ブラックベリー 10 プラグイン
---

# ブラックベリー 10 プラグイン

これはコルドバのプラグイン開発ガイドの続きです。 今、そのコンテンツを確認してみましょう BlackBerry 10 プラットフォーム用エコー プラグインが必要とするものを見てください。 リコール エコー プラグインはどのような文字列、ユーザーは基本的を返しますを提供しています、 `window.echo` 機能。

    window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

コルドバのネイティブのブラックベリー 10 プラグイン JavaScript コードが含まれており、ネイティブ コードを含めることができます。 エコーのプラグインの例は、JavaScript からネイティブの機能を呼び出す方法を示します。 ネイティブと JavaScript コード JNEXT で提供されるフレームワークを介して互いに通信します。 すべてのプラグインも含める必要があります、 `plugin.xml` ファイル。

## あなたのプラグインのネイティブのパーツを作成します。

あなたのプラグインのネイティブの部分を作成するブラックベリー 10 NDK IDE を開くし、ファイルを選択します > 新しい > ブラックベリー プロジェクト > ネイティブ拡張子 > ブラックベリー WebWorks。 目的のプロジェクト名を入力してください/場所やクリックして仕上げ。

IDE で作成されたプロジェクトには、メモリ プラグインのサンプル コードが含まれます。置換またはこれらのファイルを独自の機能を含めるを変更可能性があります。

*   `*name*_js.hpp`: JNEXT コード C++ ヘッダー。

*   `*name*_js.cpp`: JNEXT の C++ コードです。

JNEXT 拡張のネイティブのインターフェイスは、プロジェクトのパブリック ディレクトリにプラグイン ヘッダー ファイルで表示できます。 また、定数と、ネイティブ コードで使用できるユーティリティ関数が含まれています。 あなたのプラグインは、plugin.h で定義されている JSExt から派生する必要があります。つまり、次のクラスを実装する必要があります。

    JSExt クラス {0} パブリック: 仮想 ~JSExt() {};仮想文字列 InvokeMethod (const 文字列 & strCommand) = 0;仮想 bool CanDelete （ボイド） = 0;プライベート: std::string m_id;};
    

したがって、あなたの拡張機能は、plugin.h ヘッダー ファイルを含める必要があります。エコーの例で使用する JSExt 次のように echo_js.hpp ファイル。

    #include"./public/plugin.h"< 文字列 > #ifndef ECHO_JS_H_ #define ECHO_JS_H_ #include クラス エコー: 公共 JSExt {公共： 明示的なエコー (const std::string & id);仮想 〜 Echo();仮想 std::string InvokeMethod (const std::string & コマンド);仮想 bool CanDelete();プライベート: std::string m_id;};#endif//ECHO_JS_H_
    

`m_id`はこのオブジェクトの JNEXT id を含む属性です。 Id は、クラスにコンス トラクターへの引数として渡されます。 ネイティブ コードから JavaScript 側でイベントをトリガーする必要があります。 JNEXT CanDelete メソッドを使用して、ネイティブなオブジェクトを削除できるかどうかを決定します。 InvokeMethod 関数は、この特定のオブジェクトのメソッドを呼び出す JavaScript から要求から結果として呼び出されます。 この関数を唯一の引数は、このメソッドは、ネイティブ オブジェクトのメソッドを実行する必要がありますを決定するために解析する必要があります JavaScript から渡される文字列です。 今 echo_js.cpp でこれらの関数を実装します。エコーの例のとおり InvokeMethod 関数を実装します。

    Echo::InvokeMethod 文字列 (const 文字列 & コマンド) {//parse コマンドと文字列 int インデックスから args = command.find_first_of("");文字列 strCommand = command.substr (0 インデックス);strValue の文字列 = command.substr （インデックス + 1、command.length());//関数を実行する必要がありますを決定する場合 (strCommand「エコー」= =) {返す strValue;} 他 {返す「サポートされていないメソッド」;}
    }
    

あなたのネイティブ プラグイン次のコールバック関数を実装することもあります。

*   `extern char * onGetObjList （ボイド）;`

*   `extern JSExt * onCreateObject (const 文字列 ＆ strClassName、const 文字列 & strObjId);`

`onGetObjList`関数 JNEXT によってサポートされているクラスのカンマ区切りリストを返します。 JNEXT の JNEXT がインスタンス化できるクラスのセットを決定するこの関数を使用します。 私たちエコー プラグインで我々 に次がある `echo_js.cpp` :

    char * onGetObjList() {静的チャー名 =「エコー」;返す名前;}
    

`onCreateObject`関数は 2 つのパラメーターを受け取ります。 最初のパラメーターは、JavaScript 側から作成される要求されたクラスの名前です。 無効な名前はそれらで返される `onGetObjList` 。 2 番目のパラメーターは、クラスの一意のオブジェクト id です。 このメソッドは作成したプラグイン オブジェクトへのポインターを返します。 私たちエコー プラグインで我々 に次がある `echo_js.cpp` :

    JSExt * onCreateObject (const 文字列 ＆ className、const 文字列 id) {場合 （クラス名「エコー」= =) {返す新しい Echo(id);}; NULL を返す}
    

## あなたのプラグインの JavaScript の部分を作成します。

あなたのプラグインの JavaScript の部分は、次のファイルを含める必要があります。

*   `client.js`: これはクライアント側とコルドバ アプリケーション呼び出すことができる API が含まれています。 API で `client.js` 呼び出しが呼び出しを行う `index.js` 。 API `client.js` また、コールバックをトリガーするイベントにコールバック関数を接続します。

*   `index.js`: コルドバを読み込みます `index.js` cordova.exec ブリッジを介してアクセス可能になります。 `client.js`ファイルがで API への呼び出しを行う、 `index.js` ファイルは、順番に呼び出すネイティブ側との通信に JNEXT。

クライアント側とサーバー側 （ `client.js` と `index.js` ） を介して相互作用する、 `Cordova.exec` 関数です。 だから、 `client.js` を呼び出す、 `exec` 機能し、必要な引数を指定します。 エコー プラグインで我々 に次がある、 `client.js` ファイル。

    var service = "org.apache.cordova.blackberry.echo",
        exec = cordova.require("cordova/exec");
    
    module.exports = {
        echo: function (data, success, fail) {
            exec(success, fail, service, "echo", { data: data });
        }
    };
    

今、 `index.js` JNEXT を使用してネイティブ側と対話します。 だから JNEXT に Echo という名前のコンス トラクター関数をアタッチします。 コンス トラクター内で init 関数を使用して次のキー操作を実行します。

*   ネイティブ側によってエクスポートされる必要なモジュールを指定します。必要なモジュールの名前は、共有ライブラリ (.so) ファイルの名前と一致する必要があります。

`JNEXT.require("libecho")`

*   買収のモジュールを使用してオブジェクトを作成し、呼び出しによって返される ID を保存します。 self.m_id = JNEXT.createObject （"libecho。エコー");アプリケーション エコー関数を呼び出すとき `client.js` 、呼び出しがエコー関数を順番に呼び出す `index.js` PluginResult オブジェクトに戻る (データ) に応答を送信しますが、 `client.js` 。 以来、関数に渡された args 引数 JSON.stringfy() によって変換され、URIcomponent としてエンコード、次に呼び出す必要があります。

`データ = JSON.parse(decodeURIComponent(args.data));`

今すぐ戻ってデータを送信できます。すべて一緒に入れてみましょう：

    module.exports = {
    
        echo: function (success, fail, args, env) {
    
            var result = new PluginResult(args, env),
            data = JSON.parse(decodeURIComponent(args.data)),
            response = echo.getInstance().echo(data);
            result.ok(response, false);
        }
    };
    

## プラグインのアーキテクチャ

含むプラグインの成果物を置くことができます、 `plugin.xml` ファイル、JavaScript （C++）、ソース ファイルとバイナリ [ファイル](../../../cordova/file/fileobj/fileobj.html) ( `.so` )、ディレクトリ構造内で、ファイルの場所が正しく指定されている限り、 `plugin.xml` ファイル。 典型的な構造はこのようになります：

***your\_project\_directory***(> plugin.xml)

*   **www**(> client.js)
*   **src** 
    *   **blackberry10**(> index.js、**ネイティブ**> *.cpp, *.hpp)
    *   **デバイス**(>*バイナリファイル** .so）
    *   **シミュレータ**(>*バイナリファイル** .so）

(一覧を最上位のディレクトリ間の階層関係を示します。 かっこは、与えられたディレクトリの内容を示します。 すべてのディレクトリ名は太字で表示されます。 ファイル名が付きます、 `>` 記号)。

## 内容は `plugin.xml` ファイル

`plugin.xml`ファイルには拡張子とその他のメタデータの名前空間が含まれています。名前空間定義し、エコー プラグインのための他のメタデータを次のように指定します。

    < プラグイン xmlns ="http://www.phonegap.com/ns/plugins/1.0"id="org.apache.cordova.blackberry.echo"バージョン =「1.0.0」>< js モジュール src ="www/client.js">< マージ ターゲット =「ナビゲーター」/></js モジュール >< プラットフォーム名 ="blackberry10">< ソース ファイル src="src/blackberry10/index.js"/>< lib ファイル src="src/blackberry10/native/device/libecho.so"アーチ =「デバイス」/>< lib ファイル src="src/blackberry10/native/simulator/libecho.so"アーチ「シミュレータ」=/>< config ファイル ターゲット ="www/config.xml"親 ="/ウィジェット">< name="org.apache.cordova.blackberry.echo 機能"value="org.apache.cordova.blackberry.echo"/></config ファイル ></プラットフォーム ></プラグイン >