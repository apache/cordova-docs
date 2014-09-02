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

# Windows 8 コマンドライン ツール

異なるプラットフォームで動作するアプリのビルドを、`cordova` コマンドライン ユーティリティ上で、一度に行うことができます。以前のバージョンの Cordova フレームワークでも、各プラットフォームに対象を絞ったコマンドライン ツールを提供しています。新 CLI の代わりに、旧コマンドラインを使用する場合には、 [cordova.apache.org](http://cordova.apache.org) からダウンロードしてください。各プラットフォーム用のアーカイブ ( archive ) をご提供しています。ご希望のプラットフォーム下に置かれたアーカイブをクリックしてください。前述しているツール群は、通常、最上位 ( top-level ) の `bin` ディレクトリ内で使用します。それ以外の場合には、 __README__ の記載内容をご確認ください。

プラグインを組み込むときに使用するコマンドライン インターフェイスに関する情報は、『 Plugman を使用した、プラグインの管理 』 をご確認ください。概要に関しては、『 プラグイン開発ガイド 』 ( 原文 「 Application Plugins 」 ) をご確認ください。

## Windows 8

Windows 8 コマンドライン ツールは、プロジェクトの新規作成のみサポートします。
cmd または Powershell を使用して、コマンドを実行する必要があります。

## プロジェクトの作成

下記のオプションを追加して、 `create` コマンドを実行します。

* Cordova Windows 8 の新プロジェクトへのパス ( Path )

* パッケージ名 ( 逆ドメイン形式 )。こちらがデフォルトの名前空間になります。

* プロジェクト名