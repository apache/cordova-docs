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

title: Windows Phone のプラグイン
---

# Windows Phone のプラグイン

Windows Phone 上のコルドバのプラグインを書くには、コルドバのアーキテクチャの基本的な理解が必要です。 コルドバ WP7 WebBrowser をホスト アプリケーションの JavaScript コード、ネイティブ API 呼び出しを管理するから成っています。 BaseCommand ( `WP7CordovaClassLib.Cordova.Commands.BaseCommand` ) を拡張することができ、それは既にあなたのために建てられた '配管' の大半が付属しています c# でクラス。

1.  あなたのプロジェクトを選択し、**追加 → 新規アイテム...**を選択するを右クリックしてください
    
    *   'プラグイン' ディレクトリに追加できればしかしそれはあなた次第です。

2.  'Class' を選択し、名前`Echo.cs`
    
    *   このクラスする必要があります*正確*の名前を呼び出すと一致します。`cordova.exec(win, fail, "Echo", ...)`

3.  基本クラスの実装が含まれます。
    
        WPCordovaClassLib.Cordova; を使用します。WPCordovaClassLib.Cordova.Commands; を使用します。WPCordovaClassLib.Cordova.JSON; を使用します。
        

4.  BaseCommand からあなたのクラスを拡張します。
    
        パブリック クラス エコー: BaseCommand {//...}
        

5.  JavaScript から呼び出せるメソッドを追加します。
    
        パブリック クラス エコー: BaseCommand {公共ボイド エコー (文字列オプション) {//JS 呼び出し可能なプラグインのすべてのメソッドはこの署名を持っている必要があります ！
                //パブリック、void、引数が文字列である 1 を返す}}
        

## 名前空間

既定の名前空間が修飾されていないコマンドです。

    名前空間 Cordova.Extension.Commands {//...}
    

独自の名前空間を使用する場合、完全修飾に通話を発信する必要があります `cordova.exec` 。たとえば、このような c# クラスを定義します。

    名前空間 com.mydomain.cordovaExtensions {パブリック クラス エコー: BaseCommand {//...}}
    

次に、JavaScript でを呼び出す必要が `exec` このような。

    cordova.exec (勝利、失敗、"com.mydomain.cordovaExtensions.Echo"...);
    

## C では、引数を解釈します。

プラグイン方式によって受信されたデータは、文字列値が実際に JavaScript コードを見て、我々 我々 の意図は文字列の配列を渡すを参照してください。 私たちの JavaScript 呼び出しを見て `cordova.exec` 、我々 は渡されますを参照してください `[str]` :

    cordova.exec (勝つ、失敗する「エコー」、「エコー」、[「入力文字列」]);
    

我々 は検査に渡されるオプション文字列場合私たち `Echo.echo` メソッド、我々 値が実際に参照してください。

    "[\"input string\"]"
    

すべての JavaScript `exec` 引数は JSON c# に渡される前にエンコードされます。

これは予想していた文字列として扱う場合は、それをデコードする必要があります。我々 は、単純な JSON の逆シリアル化を使用できます。

    optVal 文字列 = < string[] > JsonHelper.Deserialize (オプション) [0];//optVal になりました「入力文字列」の値
    

## Java スクリプトの設定を c# から結果を渡す

基本クラス BaseCommand は、JavaScript コールバック ハンドラーにデータを渡すためのメソッドを提供します。 ときに追加の結果情報は必要ありません、コマンドが成功したことを単に信号を単に呼び出すことができます。

    DispatchCommandResult();//空のプラグインの結果に戻って電話を考慮成功時のコールバック
    

戻ってデータを渡すための別のバージョンを呼び出す必要があります `DispatchCommandResult` ：

    DispatchCommandResult (新しい PluginResult (PluginResult.Status.OK、「すべて計画通りに進んだ、これは成功のハンドラーに渡される結果」));
    

構造化されたオブジェクト データを JavaScript に渡す、JSON 文字列としてエンコードする必要があります。

    DispatchCommandResult(new PluginResult(PluginResult.Status.OK, "{result:\"super awesome!\"}"));
    

呼び出すことができます、エラーが発生したことが通知する必要がある場合 `DispatchCommandResult` で、 `PluginResult` オブジェクト。

    DispatchCommandResult (新しい PluginResult （PluginResult.Status.ERROR、「エコー シグナル エラー」));
    

## あなたのプラグインの c# メソッドでシリアル化のエラーを処理

あなたの引数を解釈するときの不正な入力がある場合、試行/キャッチ ブロックを使用することをお勧め。これはコルドバ c# コード全体で使用されるパターンです。

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
        // ... 我々 の仕事する上で続行}
    

## プラグインの XML

これらの windows 携帯電話具体的 plugin.xml ファイルを使用して、詳細についてプラグインの仕様を参照してください。

### `<source-file>`

Windows phone で、 `<source-file>` プラグインのすべてのリソースを定義する要素を使用して現在 (すなわち。 .cs、.xaml、。 xaml.cs, .dll, 画像資産など)。

### `<config-file>`

`<config-file>`要素をどのような要素が構成ファイルに入れられる定義します。プラットフォーム config.xml にプラグインを追加するなど、このような何か：

    < 設定ファイル target="config.xml"親 ="/*">< 機能名 ="PluginName">< param の名前「wp-パッケージ」値を = ="PluginName"/></機能 ></config ファイル >
    

我々 は、WMAppManifest.xml に連絡先を追加する場合は、それはようになります。

    <config-file target="Properties/WMAppManifest.xml" parent="/Deployment/App/Capabilities">
        <Capability Name="ID_CAP_CONTACTS" />
    </config-file>
    

## 高度なプラグイン機能

他のメソッドでオーバーライドすることができますを参照してください。

*   [BaseCommand.cs][1]

 [1]: https://github.com/apache/cordova-wp7/blob/master/templates/standalone/cordovalib/Commands/BaseCommand.cs

たとえば、'一時停止' と '[再開](../../../cordova/events/events.resume.html)' アプリケーション イベントにフックすることができます。

### プラグインのデバッグ

C# 側をデバッグするに Visual Studio デバッガーを使用して、ちょうどあなたのクラスによって公開されるメソッドのいずれかでブレークポイントを設定できます。

Java スクリプトの設定は、Windows Phone 上でデバッグするより少し難しいです。使用する必要があります `console.log` 出力、プラグインの状態やエラーのことは自分に通知します。

## 一般的な落とし穴

*   JavaScript の実装でネイティブに渡す引数を決定する際に注意します。 ほとんどのデバイス プラットフォーム配列として cordova.exec に渡された args を期待するが、この配列内のオブジェクトの種類を有すれば、逆シリアル化を困難または不可能になります。
    
        cordova.exec (勝利、失敗すると、「電子メール」、"MethodName"[「これは文字列です」、54、{リテラル： 'トラブル'}]);
        
    
    *   つまり、次の c# コード受信などの文字列値をデコードすることは困難。
        
            "[\"this は、string\"、54、{リテラル： 'トラブル'}]」
            
    
    *   Exec を呼び出す前にすべてのパラメーターを文字列に変換を考えてみます。
        
            cordova.exec (勝利、失敗すると、「電子メール」、"MethodName"[「これは文字列です」、「54」、"{リテラル： 'トラブル'}"]);文字列 optValues JsonHelper.Deserialize < string[] > = （オプション）;
            

*   それは通常、パラメーターを呼び出す前に、JavaScript コードでチェックを行うことをお勧め `exec` 。 これはプラグインの様々 なネイティブ実装の中でより多くの JavaScript コードを再利用することができます。