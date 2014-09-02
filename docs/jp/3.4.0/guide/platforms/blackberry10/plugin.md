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

# BlackBerry 10 プラグイン

この節では、BlackBerry 10 プラットフォームにおけるネイティブプラグインコードの実装方法の詳細に関して解説します。この節を読む前に、
『 プラグイン開発ガイド 』 ( 原文 「 Application Plugins 」 ) を読み、プラグインの構造と JavaScript の汎用インターフェイスの概要をご確認ください。
この節では、Cordova Webview とネイティブプラットフォーム間で通信を行う、_echo_ プラグインのサンプルを引き続き使用して、解説を行います。 

Echo プラグインは、基本的に、JavaScript 側が `window.echo` 関数を使用して送った文字列を返します。

        window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };

BlackBerry 10 の Cordova プラグインは、JavaScript とネイティブコードから構成され、JNEXT 提供のフレームワークを通じて、互いに通信を行います。また、すべてのプラグインで、 `plugin.xml` ファイルをインクルード ( include ) する必要があります。

## ネイティブクラスの作成

開発者のプラグインのネイティブ部分の作成を行うには、BlackBerry 10
NDK IDE を開き、 __File &rarr; New &rarr; BlackBerry Project &rarr;
Native Extension &rarr; BlackBerry 10__ を選択します。プロジェクト名とロケーションを入力して、 __Finish__ を押します。

IDE を使用して作成したプロジェクトには、Memory プラグインのサンプルコードが含まれています。これらのファイルを置き換えるかまたは修正を行い、希望する機能を実装させることもできます。

- `*name*_js.hpp`: JNEXT コード用の C++ ヘッダーファイル

- `*name*_js.cpp`: JNEXT コード用の C++ コードファイル

JNEXT の拡張機能を使用するネイティブインターフェイスは、プロジェクトの public ディレクトリに保存された、プラグインのヘッダーファイルで確認することができます。また、ネイティブコード内部から利用できる、定数と各種ユーティリティ機能を、そのファイルに記述しています。プラグインは、 `JSExt` から派生しなければいけません ( `plugin.h` 内で定義 )。つまり、以下に示すクラスを実装する必要があります。

        class JSExt
        {
        public:
            virtual ~JSExt() {};
            virtual string InvokeMethod( const string& strCommand ) = 0;
            virtual bool CanDelete( void ) = 0;
        private:
            std::string m_id;
        };

拡張を行うときには、 `plugin.h` ヘッダーファイルをインクルード ( include ) しなければなりません。 `Echo` のサンプルでは、 `echo_js.hpp` ファイル内で、以下のように `JSExt` を使用します。

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

`m_id` 属性には、オブジェクト用の `JNEXT` id を格納します。この id は、コンストラクタへの引数として、クラスに渡されます。次のラインは、JavaScript 側のイベントの発火 ( trigger ) を行うため、ネイティブ側で必要としています。 `CanDelete` メソッドを使用して、ネイティブオブジェクトの削除を行うか決定します。次に、このオブジェクトのメソッドを呼び出す、JavaScript からのリクエストに応じて、 `InvokeMethod` 関数を呼び出します。この関数の唯一の引数は、JavaScript から渡された文字列だけです。このメソッドを使用して、この文字列をパース ( parse ) して、ネイティブオブジェクトのどちらのメソッドを実行するか決定します。このメソッドは、 `echo_js.cpp` 内に実装されています。以下に、 `Echo` の例における `InvokeMethod` 関数を示します。

        string Echo::InvokeMethod(const string& command) {

            // 文字列からコマンドと引数のパース処理を行います
            int index = command.find_first_of(" ");
            string strCommand = command.substr(0, index);
            string strValue = command.substr(index + 1, command.length());

            // どちらの関数を実行するか決定します
            if (strCommand == "echo") {
                return strValue;
            } else {
                return "Unsupported Method";
            }
        }

ネイティブプラグイン側では、以下のコールバック関数を実装する必要があります。

- `extern char* onGetObjList( void );`

- `extern JSExt* onCreateObject( const string& strClassName, const string& strObjId );`

`onGetObjList` 関数を使用して、JNEXT がサポートするクラスの一覧 ( コンマ区切り ) を返します。JNEXT はこの関数を使用して、JNEXT がインスタンス化を行えるクラスを決定します。 `Echo` プラグインでは、 `echo_js.cpp` 内に以下の記述を行います。

        char* onGetObjList() {
            static char name[] = "Echo";
            return name;
        }

`onCreateObject ` 関数は、2 つのパラメータを取ります。最初のパラメータは、JavaScript 側からリクエストされたため、 `onGetObjList` で返された名前と同じ名前を使用して、作成を行うクラスの名前です。2 番目のパラメータは、クラスが保持する、重複していないオブジェクト id です。このメソッドを使用して、作成したプラグインオブジェクトへのポインター ( pointer ) を返します。`Echo` プラグインでは、 `echo_js.cpp` 内に以下の記述を行います。

        JSExt* onCreateObject(const string& className, const string& id) {
            if (className == "Echo") {
                return new Echo(id);
            }
            return NULL;
        }

## プラグインの JavaScript の作成

プラグインは、以下の JavaScript ファイルを使用します。

- `client.js`: クライアント側のファイルです。Cordova アプリで使用できる API を記述しています。 `client.js` ファイルの API は、`index.js` への呼び出しを行います。また、 `client.js` の API は、コールバックを発火させるイベントとコールバック関数の関連付けを行います。

- `index.js`: Cordova は、 `index.js` を読み込み、ブリッジ ( cordova.exec ) を通じて、index.js にアクセスできるようにします。 `client.js` ファイルは、 `index.js` ファイル内の API を呼び出します。そのあと、ネイティブ側と通信を行うため、JNEXT を呼び出します。

クライアント側とサーバ側 ( `client.js` と `index.js` ) は、 `Cordova.exec` 関数を通じて、互いに通信を行います。 `client.js` 側では、 `exec` 関数を呼び出し、必要な引数を提供する必要があります。`Echo` プラグインでは、 `client.js` 内に以下の記述を行います。

        var service = "org.apache.cordova.blackberry.echo",
            exec = cordova.require("cordova/exec");

        module.exports = {
            echo: function (data, success, fail) {
                exec(success, fail, service, "echo", { data: data });
            }
        };

`index.js` コンポーネントは、 JNEXT を使用して、ネイティブ側との通信を行います。 `Echo` と名付けたコンストラクタ関数 ( constructor ) を JNEXT にアタッチ ( attach ) することにより `init` 関数を使用して、下記の重要な処理を行えるようになります。

- 使用 ( require ) するモジュール ( ネイティブ側からエクスポート ) を指定します。使用 ( require ) するモジュールの名前は、共有ライブラリファイル ( `.so` ファイル ) の名前と一致している必要があります。

        JNEXT.require("libecho")

- 取得したモジュールを使用して、オブジェクトの作成を行い、その呼び出しから返された ID を保存します。

        self.m_id = JNEXT.createObject("libecho.Echo");

アプリは、 `client.js` の `echo` 関数を呼び出し、次に、 `index.js` の `echo` 関数を連鎖して呼び出します。そのとき、 `PluginResult` オブジェクトは、レスポンスとして、`client.js` へデータを送り返します。また、関数へ渡された `args` 引数は、 `JSON.stringfy()` を使用して変換され、そして、 `URIcomponent` としてエンコード化されているため、以下の呼び出しを行う必要があります。

        data = JSON.parse(decodeURIComponent(args.data));

これにより、以下のように、データを送り返すことができます。

        module.exports = {
            echo: function (success, fail, args, env) {
                var result = new PluginResult(args, env),
                data = JSON.parse(decodeURIComponent(args.data)),
                response = echo.getInstance().echo(data);
                result.ok(response, false);
            }
        };

## プラグインの構造

プラグインの構成要素 ( `plugin.xml` ファイル、JavaScript、C++ ソースファイル、 `.so` バイナリファイルなど )は、どのディレクトリにでも置くことはできます。ただし、 `plugin.xml` ファイルにおいて、ファイルの配置を正しく指定する必要があります。以下に典型的な構造を示します。

***プロジェクト_ディレクトリ*** (>plugin.xml)

- **www** (>client.js)
- **src**
  - **blackberry10** (>index.js, **native** >*.cpp, *.hpp)
  - **device** (>*binary file* *.so)
  - **simulator** (>*binary file* *.so)

この一覧は、最上位 ( top-level ) に位置するフォルダー間の階層的な関係を示しています。括弧は、ディレクトリ内のコンテンツを表記するために使用しています。ディレクトリ名は、Bold で表記しています。ファイル名の先頭には、`>` 記号を付けています。

## _plugin.xml_ ファイル

`plugin.xml` には、拡張を行ったプラグインの名前空間および他のメタデータを記述しています。 `Echo` プラグインでは、以下のように設定します。 

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
