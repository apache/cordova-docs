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

# Android コマンドライン ツール

異なるプラットフォームで動作するアプリのビルドを、`cordova` コマンドライン ユーティリティ上で、一度に行うことができます。以前のバージョンの Cordova フレームワークでも、各プラットフォームに対象を絞ったコマンドライン ツールを提供しています。新 CLI の代わりに、旧コマンドラインを使用する場合には、 [cordova.apache.org](http://cordova.apache.org) からダウンロードしてください。各プラットフォーム用のアーカイブ ( archive ) をご提供しています。ご希望のプラットフォーム下に置かれたアーカイブをクリックしてください。前述しているツール群は、通常、最上位 ( top-level ) の `bin` ディレクトリ内で使用します。それ以外の場合には、 __README__ の記載内容をご確認ください。

プラグインを組み込むときに使用するコマンドライン インターフェイスに関する情報は、『 Plugman を使用した、プラグインの管理 』 をご確認ください。概要に関しては、『 プラグイン開発ガイド 』 ( 原文 「 Application Plugins 」 ) をご確認ください。

## プロジェクトの作成

プロジェクトへのパス ( path )、逆ドメイン形式のパッケージの識別子、および、アプリの表示名を指定して `create` コマンドを実行します。Mac と Windows の記法を、以下に記します。

    $ /path/to/cordova-android/bin/create /path/to/project com.example.project_name ProjectName
    $ C:\path\to\cordova-android\bin\create.bat C:\path\to\project com.example.project_name ProjectName

## ビルド

クリーンアップ後、プロジェクトのビルドを行います。

デバッグビルドの作成方法を以下に記します ( Mac と Windows )。

    $ /path/to/project/cordova/build --debug
    $ C:\path\to\project\cordova\build.bat --debug

リリースビルドの作成方法を以下に記します ( Mac と Windows )。

    $ /path/to/project/cordova/build --release
    $ C:\path\to\project\cordova\build.bat --release

## アプリの実行

`run` コマンドで使用できる、 _任意_ のパラメータを以下に記します。

* Target ( ターゲット ) の指定 : `--emulator` 、 `--device` 、 `--target=<targetID>`　

* Build ( ビルド ) の指定 : `--debug` 、 `--release` 、 `--nobuild`

    $ /path/to/project/cordova/run [Target] [Build]
    $ C:\path\to\project\cordova\run.bat [Target] [Build]

Android 仮想デバイス ( AVD ) を 1 つ以上作成してください。作成していない場合には、 `android` コマンドを使用して、作成してください。Target として、複数の AVD が利用可能な場合には、その中から 1 つ選択します。デフォルトでは、 `run` コマンドを使用すると、接続されたデバイスを検知します。デバイスを検知できない場合には、実行中のエミュレータが Target となります。

## ログの出力

    $ /path/to/project/cordova/log
    $ C:\path\to\project\cordova\log.bat

### クリーンアップ

    $ /path/to/project/cordova/clean
    $ C:\path\to\project\cordova\clean.bat
