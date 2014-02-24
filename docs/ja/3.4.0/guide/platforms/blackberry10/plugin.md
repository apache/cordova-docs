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

# ブラックベリー 10 プラグイン

BlackBerry 10 プラットフォームにネイティブのプラグインのコードを実装する方法の詳細について説明します。 これを読む前に、プラグインの構造とその一般的な JavaScript のインターフェイスの概要についてアプリケーション ・ プラグインが参照してください。 このセクションは、ネイティブ プラットフォームに戻るコルドバ webview から通信するサンプル*エコー*プラグインを示すために続けています。

エコー プラグインは基本的にどのような文字列を返します、 `window.echo` 関数は、JavaScript から送信します。

        window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

ブラックベリー 10 コルドバ プラグインには JNEXT によって提供されるフレームワークを介して互いに通信する JavaScript およびネイティブ コードが含まれています。 すべてのプラグインも含める必要があります、 `plugin.xml` ファイル。

## ネイティブ クラスを作成します。

あなたのプラグインのネイティブの部分を作成するブラックベリー 10 NDK IDE を開きを選択します**ファイル → 新しいブラックベリー プロジェクト → ネイティブ拡張子 → ブラックベリー 10**。 **完了**を押し、目的のプロジェクト名と場所を入力してください。.

IDE で作成されたプロジェクトには、メモリ プラグインのサンプル コードが含まれます。置き換えるか、独自の機能を実装するこれらのファイルを変更可能性があります。

*   `*name*_js.hpp`: JNEXT コード C++ ヘッダー。

*   `*name*_js.cpp`: JNEXT の C++ コードです。

JNEXT 拡張のネイティブのインターフェイスは、プロジェクトのパブリック ディレクトリにプラグイン ヘッダー ファイルで表示できます。 定数、ネイティブ コード内から使用できるユーティリティ関数もあります。 プラグインから派生する必要があります `JSExt` で定義される `plugin.h` 。 つまり、次のクラスを実装する必要があります。

        class JSExt
        {
        public:
            virtual ~JSExt() {};
            virtual string InvokeMethod( const string& strCommand ) = 0;
            virtual bool CanDelete( void ) = 0;
        private:
            std::string m_id;
        };
    

拡張子を含める必要があります、 `plugin.h` ヘッダー ファイル。`Echo`を使用する例では、 `JSExt` で次のように、 `echo_js.hpp` ファイル。

        #include "../public/plugin.h"
        #include <string>
    
        #ifndef ECHO_JS_H_
        #define ECHO_JS_H_
    
        class Echo : public JSExt
        {
        public:
            explicit Echo(const std::string& id);
            virtual ~Echo();
            virtual std::string InvokeMethod(const std::string& command);
            virtual bool CanDelete();
        private:
            std::string m_id;
        };
    
        #endif // ECHO_JS_H_
    

`m_id`属性が含まれています、 `JNEXT` 、クラスにコンス トラクターへの引数として渡されるオブジェクトの id。 それは、JavaScript 側でイベントをトリガーするネイティブ側に必要です。 `CanDelete`メソッドは、ネイティブ オブジェクトを削除できるかどうかを判断します。 `InvokeMethod`関数はこの特定のオブジェクトのメソッドを呼び出す JavaScript から要求から結果として呼び出されます。 この関数を唯一の引数は、ネイティブ オブジェクトのメソッドのどれを実行する必要がありますを決定するこのメソッドで解析する JavaScript から渡される文字列です。 これらのメソッドが実装されて `echo_js.cpp` 。 ここでは、 `InvokeMethod` 関数、 `Echo` の例：

        string Echo::InvokeMethod(const string& command) {
    
            //parse command and args from string
            int index = command.find_first_of(" ");
            string strCommand = command.substr(0, index);
            string strValue = command.substr(index + 1, command.length());
    
            // Determine which function should be executed
            if (strCommand == "echo") {
                return strValue;
            } else {
                return "Unsupported Method";
            }
        }
    

ネイティブのプラグイン次のコールバック関数を実装することもあります。

*   `extern char * onGetObjList （ボイド）;`

*   `extern JSExt * onCreateObject (const 文字列 ＆ strClassName、const 文字列 & strObjId);`

`onGetObjList`関数 JNEXT によってサポートされているクラスのコンマ区切りリストを返します。 JNEXT の JNEXT がインスタンス化できるクラスのセットを決定するこの関数を使用します。 `Echo`のプラグインでは、次を実装する `echo_js.cpp` :

        char* onGetObjList() {
            static char name[] = "Echo";
            return name;
        }
    

`onCreateObject`関数は 2 つのパラメーターを受け取ります。 最初に返されると有効な名前を持つ、JavaScript 側から作成される要求されたクラスの名前は `onGetObjList` です。 2 番目のパラメーターは、クラスの一意のオブジェクト id です。 このメソッドは作成したプラグイン オブジェクトへのポインターを返します。 `Echo`のプラグインでは、次を実装する `echo_js.cpp` :

        JSExt* onCreateObject(const string& className, const string& id) {
            if (className == "Echo") {
                return new Echo(id);
            }
            return NULL;
        }
    

## プラグインの java スクリプトの設定を作成します。

プラグインは、次の JavaScript ファイルを含める必要があります。

*   `client.js`: これはクライアント側とコルドバのアプリケーションで使用できる API が含まれています。 API で `client.js` 呼び出しが呼び出しを行う `index.js` 。 API `client.js` また、コールバックをトリガーするイベントにコールバック関数を接続します。

*   `index.js`: コルドバを読み込みます `index.js` cordova.exec ブリッジを介してアクセス可能になります。 `client.js`ファイルがで API への呼び出しを行う、 `index.js` ファイルは、順番に呼び出すネイティブ側との通信に JNEXT。

クライアント側とサーバー側 （ `client.js` と `index.js` ） を介して相互作用する、 `Cordova.exec` 関数です。 `client.js`を呼び出す必要があります、 `exec` 機能し、必要な引数を指定します。 `Echo`のプラグイン実装では、次の `client.js` ファイル。

        var service = "org.apache.cordova.blackberry.echo",
            exec = cordova.require("cordova/exec");
    
        module.exports = {
            echo: function (data, success, fail) {
                exec(success, fail, service, "echo", { data: data });
            }
        };
    

`index.js`コンポーネント JNEXT を使用して、ネイティブ側との対話を。 名前付きのコンス トラクター関数をアタッチする `Echo` JNEXT を使用して次のキー操作を実行することができます、 `init` 関数。

*   ネイティブ側によってエクスポートされる必要なモジュールを指定します。必要なモジュールの名前は共有ライブラリ ファイルの名前と一致する必要があります ( `.so` ファイル)。
    
        JNEXT.require("libecho")
        

*   買収のモジュールを使用してオブジェクトを作成して、呼び出しによって返される ID を保存します。
    
        self.m_id = JNEXT.createObject("libecho.Echo");
        
    
    アプリケーションを呼び出すとき、 `echo` で機能 `client.js` を呼び出す順番に呼び出し、 `echo` で機能 `index.js` 、どこで、 `PluginResult` オブジェクトへの応答としてデータを送信します `client.js` 。 以来、 `args` 関数に渡された引数によって変換された `JSON.stringfy()` としてエンコードされ、 `URIcomponent` 、次を呼び出す必要があります。
    
        data = JSON.parse(decodeURIComponent(args.data));
        

今、次のように戻って、データを送信できます。

        module.exports = {
            echo: function (success, fail, args, env) {
                var result = new PluginResult(args, env),
                data = JSON.parse(decodeURIComponent(args.data)),
                response = echo.getInstance().echo(data);
                result.ok(response, false);
            }
        };
    

## プラグイン アーキテクチャ

など、プラグインのアイテムを配置することができます、 `plugin.xml` ファイル、JavaScript および C++ のソース ファイルと `.so` ファイルの場所を正しく指定する限り、任意のディレクトリ構造内で、バイナリ ファイル、 `plugin.xml` ファイル。 典型的な構造を次に示します。

***project_directory***(> plugin.xml)

*   **www** (>client.js)
*   **src** 
    *   **blackberry10**(> index.js、**ネイティブ**> *.cpp, *.hpp)
    *   **デバイス**(>*バイナリファイル** .so）
    *   **シミュレータ**(>*バイナリファイル** .so）

最上位のフォルダー間の階層関係を示します。 かっこは、与えられたディレクトリの内容を示します。 すべてのディレクトリ名は太字で表示されます。 ファイル名が付きます、 `>` 記号。

## *Plugin.xml*ファイル

`plugin.xml`ファイルには、拡張機能の名前空間とその他のメタデータが含まれています。セットアップの `Echo` 次のようにプラグイン：

        <plugin xmlns="http://www.phonegap.com/ns/plugins/1.0"
            id="org.apache.cordova.blackberry.echo"
            version="1.0.0">
            <js-module src="www/client.js">
                <merges target="navigator" />
            </js-module>
            <platform name="blackberry10">
                <source-file src="src/blackberry10/index.js" />
                <lib-file src="src/blackberry10/native/device/libecho.so" arch="device" />
                <lib-file src="src/blackberry10/native/simulator/libecho.so" arch="simulator" />
                <config-file target="www/config.xml" parent="/widget">
                    <feature name="org.apache.cordova.blackberry.echo" value="org.apache.cordova.blackberry.echo" />
                </config-file>
            </platform>
        </plugin>