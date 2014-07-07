* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# アンドロイド シェル ツール ガイド

このガイドは、コルドバの一連のプラットフォームを中心としたシェル ツールを使用して Android アプリを開発する方法を示します。 概要で説明したこの開発パスはコマンド ライン インターフェイスで記述されているクロス プラットフォーム CLI ツールよりも開発オプションの大きい範囲を提供するかもしれない。 たとえば、ネイティブ コンポーネントと一緒にカスタム コルドバ WebView を展開する場合、シェル ・ ツールを使用する必要があります。 開発パスはいずれかを使用する前に Android プラットフォーム ガイドで説明されているよう、Android SDK 環境を構成すること最初する必要があります。

人造人間のためのシェル ・ ツールを有効にする、コルドバ[cordova.apache.org][1]からダウンロードします。 ダウンロードには、プラットフォームごとに別々 のアーカイブが含まれています。 各ターゲット、たい展開 `android` この場合。 関連するツールは、最上位レベルでふつう利用できる `bin` ディレクトリ、それ以外の場合より詳細な方向の**README**ファイルを参照してください。

 [1]: http://cordova.apache.org

これらのツールを作成、構築、および Android アプリを実行することができます。 すべてのプラットフォームのプラグイン機能を有効にする追加のコマンド ライン インターフェイスについては、管理プラグインを使用して Plugman を参照してください。 プラグインを開発する方法の詳細については、アプリケーション ・ プラグインを参照してください。

## プロジェクトを作成します。

実行、 `create` プロジェクト、逆ドメイン スタイル パッケージ識別子、およびアプリケーションの表示名を既存のパスを指定するコマンドです。 ここでは Mac の/Linux と Windows の両方の構文です。

        $ /path/to/cordova-android/bin/create /path/to/project com.example.project_name ProjectName
    
        C:\>\path\to\cordova-android\bin\create.bat \path\to\project com.example.project_name ProjectName
    

## ビルド

これをきれいにし、プロジェクトをビルドします。

Mac の/Linux または Windows をデバッグします。

        $ /path/to/project/cordova/build --debug
    
        C:\>\path\to\project\cordova\build.bat --debug
    

Mac の/Linux または Windows のリリース：

        $ /path/to/project/cordova/build --release
    
        C:\>\path\to\project\cordova\build.bat --release
    

## アプリを実行します。

`run`コマンドは、次の*省略可能な*パラメーターを受け入れます。

*   ターゲットを指定します。これが含まれています `--emulator` 、 `--device` 、または`--target=<targetID>`.

*   仕様を作成します。これが含まれています `--debug` 、 `--release` 、または`--nobuild`.
    
        $ /path/to/project/cordova/run [Target] [Build]
        
        C:\>\path\to\project\cordova\run.bat [Target] [Build]
        

少なくとも 1 つの Android 仮想デバイス、それ以外の場合でそうよう求められますを作成するかどうかを確認、 `android` コマンド。 AVD 1 つ以上のターゲットとして使用できる場合はいずれかを選択するよう求められます。 既定では、 `run` コマンド デバイスが見つからない場合に接続されているデバイス、または現在実行中のエミュレーターを検出します。

## ログの記録

        $ /path/to/project/cordova/log
    
        C:\>\path\to\project\cordova\log.bat
    

## クリーニング

        $ /path/to/project/cordova/clean
    
        C:\>\path\to\project\cordova\clean.bat
    

## Ant のマニュアルを使用します。

コマンド ・ ラインから直接よう Ant を呼び出すしたい場合 `ant debug install` 、ant コマンドに追加のパラメーターを指定する必要があります。

        ant debug install -Dout.dir=ant-build -Dgen.absolute.dir=ant-gen
    

これは、コルドバの Ant スクリプトで使用されるディレクトリは、既定とは異なるためにです。これは、Ant をコマンドラインから実行時の競合を避けるために日食/ADT の内部。

これらの追加のパラメーターが自動的に追加されますあなたのためを使用して、 `cordova/build` と `cordova/run` スクリプトは、上記します。 使用することをお勧めします。 このため、 `cordova/build` と `cordova/run` ではなく、コマンドラインから直接呼び出す Ant スクリプトです。