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

# Windows Phone コマンドライン ツール

異なるプラットフォームで動作するアプリのビルドを、`cordova` コマンドライン ユーティリティ上で、一度に行うことができます。以前のバージョンの Cordova フレームワークでも、各プラットフォームに対象を絞ったコマンドライン ツールを提供しています。新 CLI の代わりに、旧コマンドラインを使用する場合には、 [cordova.apache.org](http://cordova.apache.org) からダウンロードしてください。各プラットフォーム用のアーカイブ ( archive ) をご提供しています。ご希望のプラットフォーム下に置かれたアーカイブをクリックしてください。前述しているツール群は、通常、最上位 ( top-level ) の `bin` ディレクトリ内で使用します。それ以外の場合には、 __README__ の記載内容をご確認ください。

プラグインを組み込むときに使用するコマンドライン インターフェイスに関する情報は、『 Plugman を使用した、プラグインの管理 』 をご確認ください。概要に関しては、『 プラグイン開発ガイド 』 ( 原文 「 Application Plugins 」 ) をご確認ください。

## Windows Phone

Windows Phone コマンドライン ツールでは、プロジェクトの新規作成・ビルド・実行をサポートします。
cmd または Powershell を使用して、コマンドを実行する必要があります。

WP8 のレポジトリには、現在、WP7 と WP8 の両方のアプリをビルドするためのコードが置いてあります。
レポジトリ には、 `wp7/` と `wp8/` 用のサブディレクトリを作成してあります。

## プロジェクトの作成

Apache Cordova WP7 または WP8 アプリを新規に作成するには、2 通りの方法があります。

### テンプレート作成用のバッチファイルを実行して、テンプレートをインストールする方法

- レポジトリのルート ( root ) に `createTemplates.bat` ファイルを置いています。このファイルをダブルクリックすると、2 つの `.zip` ファイル ( `CordovaWP7_x_x_x.zip` と `CordovaWP8_x_x_x.zip` ) が生成されます。ファイル名の _3.4.0_ は、現在のバージョン番号です。Visual Studio でこれらのファイルを使用する場合には、 `My Documents\Visual Studio
  2012\Templates\ProjectTemplates\` へファイルをコピーします。これにより、Visual Studio メニューの __ファイル &rarr; 新規作成__ で、Apache Cordova Windows Phone アプリを、新規に、簡単に作成することができます。

- コマンドラインからバッチファイルを実行した場合、オプションを追加して、インストールを自動で実行することもできます。

以下のスクリプトを実行します。

    >createTemplates.bat -install

### コマンドライン上で、作成 ( Create ) 用スクリプトを使用する方法

プロジェクトへのパス ( path )、逆ドメイン形式のパッケージの識別子、および、アプリの表示名を指定して `create` コマンドを実行します。Windows Phone 7 と 8 の記法を、以下に記します。

    >.\wp7\bin\create PathToNewProject [ PackageName ] [ AppName ]
    >.\wp8\bin\create PathToNewProject [ PackageName ] [ AppName ]

    >PathToNewProject : プロジェクトの作成先のパス ( path )
    >PackageName      : プロジェクトの名前空間 ( デフォルトは Cordova.Example )
    >AppName          : アプリの名前 ( デフォルトは CordovaWP8AppProj または CordovaWP7AppProj )

    >例 :
    >.\wp7\bin\create C:\path\to\my_new_project
    >.\wp8\bin\create C:\path\to\my_new_project io.cordova.example CordovaWP8App

Visual Studio を起動させ、( C:\path\to\my_new_project ) 内のソリューションファイル ( .sln ) を開きます。

次に、ビルドと実行をします。

## プロジェクトのビルド ( クリーンアップ後、ビルド )

* デバッグビルド

    $ C:\path\to\my_new_project\cordova\build --debug

* リリースビルド

    $ C:\path\to\my_new_project\cordova\build --release

## アプリの実行

*任意* のオプションを追加して、 'run' コマンドを実行します。

* Target ( ターゲット ) の指定 : `--emulator` 、 `--device` 、 `--target=<targetID>`　

* Build ( ビルド ) の指定 : `--debug` 、 `--release` 、 `--nobuild`

    $ C:\path\to\my_new_project\cordova\run [Target] [Build]

オプション指定がない場合、デフォルトでは、 `--emulator --debug` 設定で、 'run' コマンドが実行されます。

## クリーンアップ

    $ C:\path\to\my_new_project\cordova\clean

