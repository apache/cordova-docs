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

# Windows 8 のコマンド ライン ツール

`cordova`コマンド ライン ユーティリティは、一度にいくつかのプラットフォームでアプリケーションをビルドすることができます高度なツールです。 コルドバ フレームワークの古いバージョンをそれぞれのプラットフォームに固有のコマンド ライン ツールのセットを提供します。 CLI に代わるものとしてそれらを使用するには[cordova.apache.org][1]からコルドバのこのバージョンをダウンロードする必要があります。 ダウンロードには、プラットフォームごとに別々 のアーカイブが含まれています。 ターゲットにするプラットフォームを展開します。 ここで説明したツールは、最上位レベルでふつう利用できる `bin` ディレクトリ、それ以外の場合より詳細な方向の**README**ファイルを参照してください。

 [1]: http://cordova.apache.org

プラグインできるようにする低レベルのコマンド ライン インターフェイスについては、管理プラグインを使用して Plugman を参照してください。概要については、アプリケーション ・ プラグインを参照してください。

## Windows 8

Windows 8 のコマンド ライン ツールのみサポートして新しいプロジェクトを作成します。Cmd または powershell プロンプトからコマンドを実行する必要があります。

## プロジェクトを作成します。

実行、 `create` コマンドで、次のパラメーター。

*   新しいコルドバ Windows 8 プロジェクトへのパス

*   パッケージ名は、逆ドメイン スタイル大会に続きます。これは、既定の Namespace なります。

*   プロジェクト名