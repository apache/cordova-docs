---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# 構成のリファレンス

プラットフォームに依存しない構成ファイルを使って、アプリケーションの動作の多くの側面を制御できる `config.xml` 、W3C の[Web アプリのパッケージ化 (ウィジェット)][1]の仕様に基づいたフォーマットを。

 [1]: http://www.w3.org/TR/widgets/

コルドバ CLI (コマンド ライン インターフェイスで説明します) で作成されたプロジェクト、このファイルは、トップレベルで発見ことができます `www` ディレクトリ。 CLI を使用してプロジェクトをビルドする内のさまざまなサブディレクトリにこのファイルのバージョンを再生する `platforms` 。 非 CLI プロジェクトの場合、各プラットフォーム固有のファイルは、ソースとして機能します。

場所をしながら、 `config.xml` プラットフォームに応じてファイルを変更可能性があります、その内容は、一般的にしないでください。 いくつかのプラットフォーム固有の機能も同じ構成ファイルで指定されます。 詳細は以下の通りです。

*   iOS 構成
*   Android の構成
*   ブラックベリーの構成

## config.xml の要素

[Apache コルドバ][2]プロジェクト基準があります大きく駆動し、web コミュニティによって採用された web をほうふつし、web ベースの抽象化を介して抽象的な離れてネイティブ プラットフォーム仕様を努めています。 [Config.xml 仕様][1]に慣れるには数分してください、アプリケーション メタデータ コルドバ Apache プロジェクトのタイプを理解する抽象化しのための単純なエントリ ポイントを提供することを目指しています。

 [2]: http://cordova.io

例:

        < ウィジェット >< 好みの名前 ="MySetting"値 ="true"/>< 機能名 ="MyPlugin"値 ="MyPluginClass"/>< 起源にアクセス ="*"/>< src="index.html コンテンツ"/></ウィジェット >
    

Apache コルドバでサポートされる主要プラットフォーム間でサポートされている要素のリストに従ってください。

### `<feature>`

これらの要素は、アプリケーションにアクセスするネイティブ Api にマップします。 実行時に、Apache コルドバ フレームワーク マップ `<feature>` 、コルドバのアプリケーション デバイスできない典型的な web ベースのアプリケーションの Api へのアクセスを有効にするネイティブ コードへの要素。

### `<access>`

これらの要素はあなたのホワイト リストの動作を定義します。詳細についてはドメイン ホワイト リスト ガイドを参照してください。

### `<content>`

この要素は、プロジェクトの標準的な web 資産ルート ディレクトリを基準にして、アプリケーションのスタート ページを定義します。この要素は省略可能、既定値は`index.html`.