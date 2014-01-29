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

# iOS コマンド ライン ツール

`cordova`コマンド ライン ユーティリティは、一度にいくつかのプラットフォームでアプリケーションをビルドすることができます高度なツールです。 コルドバ フレームワークの古いバージョンをそれぞれのプラットフォームに固有のコマンド ライン ツールのセットを提供します。 CLI に代わるものとしてそれらを使用するには[cordova.apache.org][1]からコルドバのこのバージョンをダウンロードする必要があります。 ダウンロードには、プラットフォームごとに別々 のアーカイブが含まれています。 ターゲットにするプラットフォームを展開します。 ここで説明したツールは、最上位レベルでふつう利用できる `bin` ディレクトリ、それ以外の場合より詳細な方向の**README**ファイルを参照してください。

 [1]: http://cordova.apache.org

IOS コマンド ライン ツール シェル スクリプトの上に成り立っているし、など、Xcode のコマンド ライン ツールに頼る `xcode-select` と`xcodebuild`.

プラグインできるようにする低レベルのコマンド ライン インターフェイスについては、管理プラグインを使用して Plugman を参照してください。概要については、アプリケーション ・ プラグインを参照してください。

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