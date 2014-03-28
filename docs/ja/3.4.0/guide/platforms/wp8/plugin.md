-ライセンス: Apache ソフトウェア財団 (ASF) を 1 つまたは複数の共同作成者のライセンス契約の下でライセンスされています。 See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# Windows Phone のプラグイン

Windows Phone プラットフォームでネイティブのプラグインのコードを実装する方法の詳細について説明します。 これを読む前に、プラグインの構造とその一般的な JavaScript のインターフェイスの概要についてアプリケーション ・ プラグインが参照してください。 このセクションは、ネイティブ プラットフォームに戻るコルドバ webview から通信するサンプル*エコー*プラグインを示すために続けています。

Windows Phone 上のコルドバのプラグインを書くには、コルドバのアーキテクチャの基本的な理解が必要です。 コルドバ WP7 から成っている、 `WebBrowser` をホスト アプリケーションの JavaScript コードとネイティブ API 呼び出しを管理します。 C# を拡張する `BaseCommand` クラス ( `WP7CordovaClassLib.Cordova.Commands.BaseCommand` )、必要な機能のほとんどが付属しています：

1.  あなたのプロジェクトを選択し、**追加 → 新規アイテム...**を選択するを右クリックしてください希望する場合にそれを追加できます、 `Plugins` フォルダー。

2.  **クラス**を選択、それ名前 `Echo.cs` 。 このクラスの名前する必要があります*正確*に一致を呼び出すでサービスとしてを指定する、 `cordova.exec()` 側の java スクリプトの設定を呼び出します。

3.  基本クラスの実装が含まれます。
    
        WPCordovaClassLib.Cordova; を使用します。WPCordovaClassLib.Cordova.Commands; を使用します。WPCordovaClassLib.Cordova.JSON; を使用します。
        

4.  クラスを拡張する `BaseCommand` :
    
        パブリック クラス エコー: BaseCommand {//...}
        

5.  追加、 `echo` JavaScript から呼び出せるメソッド。
    
        パブリック クラス エコー: BaseCommand {公共ボイド エコー (文字列オプション) {//JS 呼び出し可能なプラグインのすべてのメソッドはこの署名を持っている必要があります ！
                //パブリック、void、引数が文字列である 1 を返す}}
        

[BaseCommand.cs][1]クラスをオーバーライドするプラグインを利用可能なメソッドを参照してください。 たとえば、プラグインは '一時停止' と '再開' イベントをキャプチャできます。

 [1]: https://github.com/apache/cordova-wp7/blob/master/templates/standalone/cordovalib/Commands/BaseCommand.cs

## 名前空間

既定の名前空間が修飾されていないコマンドです。

        namespace Cordova.Extension.Commands
        {
            // ...
        }
    

独自の名前空間を指定したい場合は完全修飾に通話を発信する必要があります `cordova.exec` 。たとえば、このような c# クラスを定義します。

        namespace com.mydomain.cordovaExtensions
        {
            public class Echo : BaseCommand
            {
                // ...
            }
        }
    

JavaScript を呼び出す必要があります `exec` このような。

        cordova.exec (勝利、失敗、"com.mydomain.cordovaExtensions.Echo"...);
    

## C の引数を解釈します。

アプリケーション ・ プラグインで説明した例であなたのプラグインが受け取るデータは何が、文字列を文字列の配列を渡す場合 JavaScript と仮定します `cordova.exec` このような呼び出しを指定します。

        cordova.exec (勝つ、失敗する「エコー」、「エコー」、[「入力文字列」]);
    

値 `options` に渡される文字列、 `Echo.echo` メソッドは JSON です。

        "[\"input string\"]"
    

すべての JavaScript `exec` 引数は、JSON エンコードされた C# コードに渡される前とデコードするだから必要があります。

        string optVal = JsonHelper.Deserialize<string[]>(options)[0];
        // optVal now has the value of "input string"
    

## Java スクリプトの設定を c# から合格の結果

`BaseCommand`クラスは、JavaScript コールバック ハンドラーにデータを渡すメソッドを提供します。単に、それに伴う結果がないと成功を通知する場合は、単に呼び出すことができます。

        DispatchCommandResult();
        // calls back with an empty plugin result, considered a success callback
    

データを渡すためを呼び出す必要があります `DispatchCommandResult` 異なる。

        DispatchCommandResult (新しい PluginResult (PluginResult.Status.OK、「すべて計画通りに進んだ、これは成功のハンドラーに渡される結果」));
    

JSON エンコードされた文字列を使用して、構造化されたオブジェクト データを JavaScript に渡す。

        DispatchCommandResult(new PluginResult(PluginResult.Status.OK, "{result:\"super awesome!\"}"));
    

エラーを通知するを呼び出す `DispatchCommandResult` と、 `PluginResult` オブジェクト ステータスが `ERROR` :

        DispatchCommandResult (新しい PluginResult （PluginResult.Status.ERROR、「エコー シグナル エラー」));
    

## シリアル化のエラーを処理

あなたの引数を解釈するとき `try` / `catch` ブロック画面の不適切な入力を助けます。このパターンはコルドバ c# コード全体が表示されます。

        string optVal = null;
    
        try
        {
            optVal = JsonHelper.Deserialize<string[]>(options)[0];
        }
        catch(Exception)
        {
            // simply catch the exception, we handle null values and exceptions together
        }
    
        if (optVal == null)
        {
            DispatchCommandResult(new PluginResult(PluginResult.Status.JSON_EXCEPTION));
        }
        else
        {
            // ... continue on to do our work
        }
    

## プラグインの XML

使用する方法を示します、 `plugin.xml` ファイルを Windows Phone プラットフォーム上にプラグインのソース ファイルを指定します。 利用可能なオプションの詳細については、概要、およびプラグインの仕様のアプリケーション ・ プラグインを参照してください。

*   `<source-file>`要素を*.cs*、 *.xaml*など、すべてのプラグインのリソース定義*. xaml.cs*、 *.dll*ファイルおよびイメージア セット。

*   `<config-file>`要素を構成ファイルに挿入する要素を定義します。この例は、プラットフォームにプラグインを追加 `config.xml` ファイル。
    
        <config-file target="config.xml" parent="/*">
            <feature name="PluginName">
                <param name="wp-package" value="PluginName"/>
            </feature>
        </config-file>
        
    
    この例の連絡先機能を追加する、 `WMAppManifest.xml` ファイル。
    
        <config-file target="Properties/WMAppManifest.xml" parent="/Deployment/App/Capabilities">
            <Capability Name="ID_CAP_CONTACTS" />
        </config-file>
        

## プラグインのデバッグ

プラグインの c# コンポーネントをデバッグするには、Visual Studio デバッガーを使用します。クラスによって公開されるメソッドのいずれかでブレークポイントを設定することができます。

Java スクリプトの設定は、Windows Phone 上でデバッグすることは困難です。使用する必要があります `console.log` 出力プラグインの状態またはエラーのあなた自身に知らせます。

## 一般的な落とし穴

*   JSON としてシリアル化を解除することは困難であるネイティブ側に JavaScript から引数を渡すしないよう注意してください。 ほとんどのデバイス プラットフォームに渡された引数を期待 `cordova.exec()` 、次のように配列を使用します。
    
        cordova.exec (勝利、失敗すると、「電子メール」、"MethodName"[「これは文字列です」、54、{リテラル： 'トラブル'}]);
        
    
    これは、過度に複雑な文字列値をデコードする c# で可能性があります。
    
        "[\"this is a string\", 54, { literal:'trouble' }]"
        
    
    代わりに、*すべて*のパラメーターを呼び出す前に文字列に変換する考慮する `exec()` 、それぞれを別々 に復号と：
    
        cordova.exec(win, fail, "ServiceName", "MethodName", ["this is a string", "54", "{literal:'trouble'}"]);
        string[] optValues = JsonHelper.Deserialize<string[]>(options);
        

*   呼び出す前に JavaScript でパラメーターをチェックする方が `exec()` 。 そうすることより多くのコードを再利用して、プラグインから不要な機能のさまざまなネイティブ実装をプルすることができます。