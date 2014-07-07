* * *

免許証: アパッシュ ソフトウェア基礎 (ASF) を 1 つまたは複数の共同作成者のライセンス契約の下でライセンスされています。 See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Windows 8 のプラグイン

Windows ストア アプリで使用するためのプラグインを実装する方法の詳細について説明します。これを読む前に、プラグインの構造とその一般的な JavaScript のインターフェイスの概要についてアプリケーション ・ プラグインが参照してください。 このセクションは、ネイティブ プラットフォームに戻るコルドバ webview から通信するサンプル*エコー*プラグインを示すために続けています。

Windows 8 が直接 Javascript では、開発に必要な特別なケースだけで 'native' の部分を意味する開発をサポートすることに注意してくださいすることが重要です。

## Java スクリプトの設定で Windows 8 プラグインを作成します。

これらの手順は、純粋な JavaScript のプラグインを作成します。これを理解するネイティブ/マネージ ビットを追加する方法を理解する重要です。

Windows 8 コルドバ プラグインは本質的に薄いラッパー関数は、提供されている既存の WinJS が複数のデバイスは、JS 共通インターフェイスを定義したいと仮定すると、通常は 1 の JS ファイルを API を提供します。

    // inside file echoplugin.js
    var EchoPlugin = {
        // the echo function calls successCallback with the provided text in strInput
        // if strInput is empty, it will call the errorCallback
        echo:function(successCallback, errorCallback, strInput) {
            cordova.exec(successCallback,errorCallback,"EchoPlugin","echo",[strInput]);
        }
    }
    

## Windows 8 の内側のコルドバ exec

Cordova.exec 関数は、すべてのプラットフォームで定義が異なるので、これは各プラットフォームには、アプリケーションの js コードとネイティブ ラッパー コード間の通信のそれ自身の方法。 しかし、Windows 8 の場合 exec 呼び出しが一貫性を保つのためにあるので、ネイティブ ラッパーはありません。 あなたがあなたの仕事 js のみプラグイン EchoPlugin.echo で直接のようなもの：

    // inside file echoplugin.js ( this is what NOT to do if you want to reuse the JS API cross platform )
    var EchoPlugin = {
        echo:function(successCallback,errorCallback,strInput) {
            if(!strInput || !strInput.length) {
                errorCallback("Error, something was wrong with the input string. =>" + strInput);
            }
            else {
                successCallback(strInput + "echo");
            }
        }
    }
    

これは可能性がうまく、しかしそれことを意味します、異なるプラットフォーム用の echoPlugin.js の異なるバージョンを必要がありますおそらく実装に不整合の問題を持って可能性があります。 ベスト プラクティスとして、我々 でした同じ JS コードを実行し、プラットフォームの書き換えをしていないも任意のパラメーターをチェックまたは他のプラットフォームで働いていた開発者によって提供されるその他の一般的なコードの利点を取るように Windows 8 では、cordova.exec 内のネイティブ API を模倣することを決めた。

## コルドバ exec プロキシ

Windows 8 では、コルドバ API へのすべての cordova.exec 呼び出しを処理するオブジェクトの登録に使用することができますプロキシを提供します。

たとえば、加速度計 API の実装を提供したい場合これを行うだろう：

cordova.commandProxy.add (「加速」{開始: 関数 {//あなたのコードをここに...}、//ここでの API の残りの部分});

従って我々 は仮定する例では、Windows 8 用のプロキシを単に書くことができます JavaScript と私たちにクロスプラット フォームの関連する echoplugin.js 内のコードが処理すること

    // in file echopluginProxy.js
    cordova.commandProxy.add("EchoPlugin",{
        echo:function(successCallback,errorCallback,strInput) {
            if(!strInput || !strInput.length) {
                errorCallback("Error, something was wrong with the input string. =>" + strInput);
            }
            else {
                successCallback(strInput + "echo");
            }
        }
    });
    

プラグインの定義

私たちのプラグインのユーザーを簡単に私たちのプラグインをインストールすることができる場合は、我々 PlugMan のプラグインを定義する方法によるとを定義する必要があります。 [プラグイン仕様][1]でこれについての詳細

 [1]: plugin_ref_spec.md.html#Plugin%20Specification

    <?xml version="1.0" encoding="UTF-8"?>
    <plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
        id="com.risingj.echoplugin"
        version="0.1.0">
    
        <js-module src="www/echoplugin.js" name="echoplugin">
            <clobbers target="window.echoplugin" />
        </js-module>
    
        <!-- windows8 -->
        <platform name="windows8">
            <js-module src="src/windows8/echopluginProxy.js" name="EchoProxy">
                <merges target="" />
            </js-module>
        </platform>
    
        <!-- other platforms -->
    
    </plugin>
    

これは私たちの作業を実装 (echopluginProxy.js) の部分だけで Windows 8 を提供するためにプロキシを使用して共通ファイル (echoplugin.js) を使用して Windows 8 JavaScript のプラグインを与えます。 どのように私たちにネイティブ/マネージ コードを追加しますか？ 我々 は同じを始めるつもり、唯一の違いは、echopluginProxy メソッドの中で行うことになります。

# WinJS は、ネイティブ/マネージ コードにアクセスする方法

Windows 8、WinJS 作成アプリはネイティブ コードと相互作用することでこの間 op は Windows ランタイム コンポーネントで利用できます。 詳細は数多くあり、このガイドは基本をカバーしてのみ。 マイクロソフトは多くの情報を提供します[ここ][2].

 [2]: http://msdn.microsoft.com/en-us/library/windows/apps/hh441569.aspx

Windows ランタイム コンポーネント、任意のクラスを作成するときは、'アクティブ化可能なクラス' と見なされます 'パブリック ref クラスを sealed' として定義されますと JavaScript から呼び出せる。

    // in your header file .h
    namespace EchoRuntimeComponent
    {
        public ref class EchoPluginRT sealed 
        {
            public:
            static Platform::String^ Echo(Platform::String^ input);
        }
    }
    
    // in the implementation file .cpp
    using namespace EchoRuntimeComponent;
    using namespace Platform;
    
    Platform::String^ EchoPluginRT::Echo(Platform::String^ input)
    {
        if(input->IsEmpty()) 
        {
            return "Error: input string is empty.";
        }
        else
        {
            return input->ToString() + "echo";
        }
    }
    

今ネイティブ コードを呼び出すために私たちを使用して、名前空間、クラス名、および lowerCamelCase 私たちを呼び出しているメソッド。

var 解像度 = EchoRuntimeComponent.EchoPluginRT.echo("boom");これをファイルに移動私たち echopluginProxy.js 我々 はこれを取得：

    // in file echopluginProxy.js
    cordova.commandProxy.add("EchoPlugin",{
        echo:function(successCallback,errorCallback,strInput) {
            var res = EchoRuntimeComponent.EchoPluginRT.echo(strInput);
            if(res.indexOf("Error") == 0) {
                errorCallback(res);
            }
            else {
                successCallback(res);
            }
        }
    });
    

そしてそれは、Apache コルドバ Windows 8 では、エンド ツー エンド バックアップ C++ js の呼び出し可能なプラグインの使用のためがある ！

# いくつかのテクニカル ノート:

*   コールバックは通常 async 呼び出し元によるコールバックをすぐに呼び出すことは期待していないだろうです。 実習では、呼び出しが非同期場合、少なくともしてください javascript タイムアウトを強制的に非同期に呼び出されるコールバック。
*   アクティブ化可能なクラスは派遣、非同期コールバック、独自のオブジェクトの型、配列、コレクション、オーバー ロードされたメソッドおよび大いに多くを渡すイベントのような素晴れらしいのすべての種類を行うことができます。 私はあなたの宿題をお勧めします。
*   一般的な Windows Phone 8 と Windows 8 SDK API 呼び出しに固執する場合は、コンポーネントを使用して、同じランタイム (ネイティブまたはマネージ ビット) Windows Phone 8 Apache コルドバ プラグインできます。 〜 ポスト用にチューニング滞在します。

# あなたのプラグインを定義します。

我々 は作業のプラグインを持って、今我々 はそれを公開することができますので、以前からプラグインの定義を再検討する必要があります。 我々 は今フレームワークとしてランタイム コンポーネントを追加できます。 .Winmd または .dll、WindowsRuntimeComponent の出力型できることに注意してください。

    <?xml version="1.0" encoding="UTF-8"?>
    <plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
        id="com.risingj.echoplugin"
        version="0.2.0">
    
        <js-module src="www/echoplugin.js" name="echoplugin">
            <clobbers target="window.echoplugin" />
        </js-module>
    
        <!-- windows8 -->
        <platform name="windows8">
            <js-module src="src/windows8/echopluginProxy.js" name="EchoProxy">
                <merges target="" />
            </js-module>
            <framework src="src/windows8/EchoRuntimeComponent.winmd" custom="true"/>
        </platform>
    
        <!-- other platforms -->
    
    </plugin>
    

それは、今、世界と共有することができます、配布可能なプラグインがある! 1 つの事に注意してください Windows 8 コルドバ プロジェクトにフレームワークを追加するためのサポートは、コルドバの現在のツーリングになっていることを確認する必要がありますのでのみ最近追加されました。 コルドバ cli とコルドバ plugman サポート ネイティブ バックアップのプラグインを削除するを追加します。

> コルドバ プラグインを追加する com.risingj.echoplugin または > plugman インストール--プラットフォーム windows8 プラグイン--com.risingj.echoplugin--プロジェクト。

https://github.com/purplecabbage/cordova-runtimecomp-echoplug