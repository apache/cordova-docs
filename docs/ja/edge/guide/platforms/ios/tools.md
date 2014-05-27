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

# iOS シェル ツール ガイド

This guide shows how to use Cordova's set of platform-centered shell tools to develop iOS apps. This development path, discussed in the Overview, may offer you a greater range of development options for iOS than the cross-platform CLI tool described in The Command-Line Interface. For example, you need to use shell tools when deploying a custom Cordova WebView alongside native components. Before using either development path, you must first configure the SDK environment as described in the iOS Platform Guide. これらのツールの Xcode のコマンド ライン ツールに頼るような `xcode-select` と`xcodebuild`.

IOS 用シェル ・ ツールを有効にするには、コルドバ[cordova.apache.org][1]からダウンロードします。 ダウンロードには、プラットフォームごとに別々 のアーカイブが含まれています。 各ターゲット、たい展開 `ios` この場合。 関連するツールは、最上位レベルでふつう利用できる `bin` ディレクトリ、それ以外の場合より詳細な方向の**README**ファイルを参照してください。

 [1]: http://cordova.apache.org

これらのツールを作成、構築、および iOS のアプリを実行することができます。 すべてのプラットフォームのプラグイン機能を有効にする追加のコマンド ライン インターフェイスについては、管理プラグインを使用して Plugman を参照してください。 プラグインを開発する方法の詳細については、アプリケーション ・ プラグインを参照してください。

## プロジェクトを作成します。

実行、 `create` プロジェクト、逆ドメイン スタイル パッケージ識別子、およびアプリケーションの表示名を既存のパスを指定するコマンドです。

        $ ./path/to/cordova-ios/bin/create /path/to/my_new_project com.example.project_name ProjectName
    

## プロジェクトをビルドします。

        $ /path/to/my_new_project/cordova/build
    

## アプリケーションをエミュレーター上で実行します。

        $ /path/to/my_new_project/cordova/run
    

## 解放します。

        $ /path/to/my_new_project/cordova/release
    

## ログの記録

        $ /path/to/my_new_project/cordova/log