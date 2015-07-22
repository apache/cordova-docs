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

# Windows Phone のコマンド ライン ツール

`cordova`コマンド ライン ユーティリティは、一度にいくつかのプラットフォームでアプリケーションをビルドすることができます高度なツールです。 コルドバ フレームワークの古いバージョンをそれぞれのプラットフォームに固有のコマンド ライン ツールのセットを提供します。 CLI に代わるものとしてそれらを使用するには[cordova.apache.org][1]からコルドバのこのバージョンをダウンロードする必要があります。 ダウンロードには、プラットフォームごとに別々 のアーカイブが含まれています。 ターゲットにするプラットフォームを展開します。 ここで説明したツールは、最上位レベルでふつう利用できる `bin` ディレクトリ、それ以外の場合より詳細な方向の**README**ファイルを参照してください。

 [1]: http://cordova.apache.org

プラグインできるようにする低レベルのコマンド ライン インターフェイスについては、管理プラグインを使用して Plugman を参照してください。概要については、アプリケーション ・ プラグインを参照してください。

## Windows Phone

Windows Phone のコマンド ライン ツールの作成、構築、および新規プロジェクトの実行をサポートします。Cmd または powershell プロンプトからコマンドを実行する必要があります。

WP8 レポには今 WP7 + WP8 を構築するためのコードが含まれていますアプリ。レポは、それぞれのサブディレクトリを持つ： `wp7/` と`wp8/`.

## プロジェクトを作成します。

新しい Apache コルドバ WP7 または WP8 アプリケーションの作成について移動する 2 つの方法があります。

### 作成し、テンプレートをインストールするバッチ ファイルを実行します。

*   レポのルートが含まれている、 `createTemplates.bat` ファイル。 2 つが生成されますそれをダブルクリックすると `.zip` ファイル: `CordovaWP7_x_x_x.zip` と `CordovaWP8_x_x_x.zip` 、 *x.x.x*表す現在のバージョン番号。 コードを簡単に Visual Studio でこれらのファイルを使用して、コピーする `My Documents\Visual Studio
2012\Templates\ProjectTemplates\` 。 Visual Studio から新しい Apache コルドバ Windows Phone アプリを作成することがその後**ファイル → 新規プロジェクト**メニュー。

*   自動的にインストールするパラメーターで呼び出すことができますも、コマンドラインからバッチ ファイルを実行する場合

スクリプトを実行します。

    > createTemplates.bat-インストール
    

### 作成スクリプトは、コマンドラインを使用して、

実行、 `create` プロジェクト、逆ドメイン スタイル パッケージ識別子、およびアプリケーションの表示名を既存のパスを指定するコマンドです。 Windows Phone 7 および 8 のための構文です。

    >.\wp7\bin\create PathToNewProject [ PackageName ] [ AppName ]
    >.\wp8\bin\create PathToNewProject [ PackageName ] [ AppName ]
    
    >PathToNewProject : The path to where you wish to create the project
    >PackageName      : The namespace for the project (default is Cordova.Example)
    >AppName          : The name of the application (default is CordovaWP8AppProj or CordovaWP7AppProj)
    
    >examples:
    >.\wp7\bin\create C:\path\to\my_new_project
    >.\wp8\bin\create C:\path\to\my_new_project io.cordova.example CordovaWP8App
    

Visual Studio を起動し、(C:\path\to\my\_new\_project) のソリューション ファイル (.sln) を開く

ビルドし、実行

## プロジェクトのビルド (きれいな、そしてビルド)

*   デバッグ
    
    $ C:\path\to\my\_new\_project\cordova\build - デバッグ

*   リリース
    
    $ C:\path\to\my\_new\_project\cordova\build - リリース

## アプリケーションの実行

次の*省略可能な*パラメーターで '実行' コマンドを実行します

*   ターゲットを指定します。これが含まれています `--emulator` 、 `--device` 、または`--target=<targetID>`.

*   仕様を作成します。これが含まれています `--debug` 、 `--release` 、または`--nobuild`.
    
    $ C:\path\to\my\_new\_project\cordova\run [ターゲット] は、[ビルド]

既定では、 `run` コマンドが呼び出されます `--emulator --debug` フラグが指定されていない場合。

## クリーニング

    $ C:\path\to\my_new_project\cordova\clean