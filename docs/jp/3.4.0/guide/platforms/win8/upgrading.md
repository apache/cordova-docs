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

# Windows 8 の更新

このガイドでは、新しいバージョンの Cordova へ移行するときに必要となる、 Windows 8 プロジェクト側の修正点に関して解説します。このガイドで使用する手順のほとんどは、 `cordova` の CLI ユーティリティがリリースされる前のコマンドライン ツールを使用して作成されたプロジェクトに適用するものです。CLI 自体のバージョン更新に関しては、『 コマンドライン インターフェイス 』 をご確認ください。

## 3.1.0 から 3.2.0 への更新

cordova CLI を使用して作成したプロジェクトの場合、以下の処理を行います。

1. `cordova` CLI のバージョンを更新します。『 コマンドライン インターフェイス 』 をご確認ください。

2. `cordova platform update windows8` を実行します。

cordova CLI を使用せずに作成したプロジェクトの場合、以下を実行します。

        bin\update <project_path>

## 3.1.0 への更新

Windows 8 に対する Cordova CLI のサポートは、Cordova 3.1.0 から始まりました。
アップグレードを行うときには、Cordova CLI を使用して、プロジェクトの新規作成を行い、そして、必要なすべてのアセット ( assets ) を移行することを推奨します。

## 2.8.0 から 2.9.0 への更新

プロジェクトへの参照 ( project reference ) が更新または削除されていることを確実にするため、以下の手順 ( 原文 「 command 」 ) を Visual Studio 上で実行してください。

1. プロジェクトの `www` ディレクトリから `cordova-2.8.0.js` を削除します。

2. source ( src ) の `cordova.js` ファイルを、プロジェクトの `www` ディレクトリへ追加します ( ファイル名の後ろには、バージョン番号を入れません )。

3. ビルドとテストを行います。

## 2.7.0 から 2.8.0 への更新

プロジェクトへの参照 ( project reference ) が更新または削除されていることを確実にするため、以下の手順 ( 原文 「 command 」 ) を Visual Studio 上で実行してください。

1. プロジェクトの `www` ディレクトリから `cordova-2.7.0.js` を削除します。

2. source ( src ) の `cordova.js` ファイルを、プロジェクトの `www` ディレクトリへ追加します ( ファイル名の後ろには、バージョン番号を入れません )。

3. ビルドとテストを行います。