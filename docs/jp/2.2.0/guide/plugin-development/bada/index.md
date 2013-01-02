---
license: Licensed to the Apache Software Foundation (ASF) under one
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
---

Developing a Plugin on Bada
===========================

プラグインは Bada 2.0 以上のみサポートしています。 Bada 1.2 はサポートしていません。

Bada の実装はすべて JavaScript の実装です。そのため、カスタムプラグインを追加することは、プラグインコードによって CordovaJS を更新することになります。以下は、シンプルな _Hello World_ プラグインを追加するステップです:

1. CordovaJS リポジトリーを clone します

        git clone https://git-wip-us.apache.org/repos/asf/incubuator-cordova-js.git

2. __lib/bada/plugin/bada/__ 以下に新しい JavaScript ファイルを作成し、 _HelloWorld.js_ と名前をつけます。以下の内容を追加します:

        function HelloWorld() {
        }

        HelloWorld.prototype.printHello = function(success, fail, arg) {
            alert(Osp.Core.StringHelper('Hello %1', arg[0]));
        }

        module.exports = new HelloWorld();

3. __lib/bada/platform.js__ の objects プロパティーの下に、新しく作ったプラグインへのリンクを追加します:

        objects: {
            ...
            HelloWorld: {
                'cordova/plugin/bada/HelloWorld'
            },
            ...
        }
        ...
4. __lib/bada/exec.js__ のプラグインリストを、作ったプラグインを含むように更新します

        var plugins = {
            ...
            "HelloWorld": require('cordova/plugin/bada/HelloWorld')
        };
5. これで、好きなようにユーザー向けの JavaScript を書くことができます。しかし、プラグインを実行するためには、以下のメソッドを呼び出す必要があることを忘れないで下さい

        exec(succes, fail, 'HelloWorld', 'printHello', ['Jackson!']);

    success はプラグインが正常に終了したときに実行される成功コールバック関数です
    fail はプラグインが正常に終了しなかったときに実行されるエラーコールバック関数です
    'HelloWorld' はあなたのプラグインの名前です
    'printHello' はあなたのプラグインのアクション名です
    最後のパラメーターは、プラグインへの引数です

6. 以下のコマンドを実行し、新しい共通 JavaScript を生成します (npm モジュールの jake がインストールされていることを確認して下さい)

        jake

7. 新しく生成された __pkg/cordova.bada.js__ を、 Bada プロジェクトの __Res/js__ 以下にコピーします

6. 以上です！これで、あなたは新しい Bada プラグインを追加することができ、現在は Cordova Bada でサポートされていないたくさんの機能を実装できるようになりました。
