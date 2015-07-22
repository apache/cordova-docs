---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
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

title: Plugman を使用してプラグインを管理するには
---

# Plugman を使用してプラグインを管理するには

バージョン 3.0 以降、コルドバすべてデバイス Api のプラグインとして実装して、既定で無効になっているそれらを残します。 追加し、プラグインを削除する 2 つの異なる方法もサポートしています。 最初を使用して、 `cordova` CLI コマンド ライン インターフェイスで記述されています。 2 番目の下位[plugman][1]のコマンド ライン インターフェイスを使用してです。 このガイド開発者コルドバでの彼らのバージョンをアップグレードしたいが、人はまだ自分のワークフローにコルドバ CLI を採用していないために有用かもしれない 2 番目のアプローチに集中します。

 [1]: https://github.com/apache/cordova-plugman/

Plugman の詳細については、[そのリポジトリ内の README ファイル][2]を参照してください。.

 [2]: https://github.com/apache/cordova-plugman/blob/master/README.md

## 基本的なコマンド

Plugman をインストールするには、[ノード][3]コンピューターにインストールされている必要があります。

 [3]: http://nodejs.org/

    npm install -g plugman
    

ここでは、各プラットフォーム用のプラグインを追加する構文です。

    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin <name|url|path> [--plugins_dir <directory>] [--www <directory>] [--variable <name>=<value> [--variable <name>=<value> ...]]
    

プラグインのアンインストール手順。

    plugman --uninstall --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin <id> [--www <directory>] [--plugins_dir <directory>]
    

## コアのプラグインをインストールします。

以下の例はコルドバ Api をプロジェクトで使用するまだ動作バージョン 3.0 にアップグレードした後に必要に応じてプラグインを追加する方法を示します。各コマンド ターゲット プラットフォームを選択し、プラットフォームのプロジェクト ディレクトリを参照する必要があります。

*   cordova-plugin-battery-status plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.battery-status

*   cordova-plugin-camera plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.camera

*   cordova-plugin-console plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.console

*   cordova-plugin-contacts plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.contacts

*   cordova-plugin-device plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.device

*   cordova-plugin-device-motion (accelerometer) plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.device-motion

*   cordova-plugin-device-orientation (compass) plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.device-orientation

*   cordova-plugin-dialogs plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.dialogs

*   cordova-plugin-file plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.file

*   cordova-plugin-file-transfer plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.file-transfer

*   cordova-plugin-geolocation plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.geolocation

*   cordova-plugin-globalization plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.globalization

*   cordova-plugin-inappbrowser plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.inappbrowser

*   cordova-plugin-media plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.media

*   cordova-plugin-media-capture plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.media-capture

*   cordova-plugin-network-information plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.network-information

*   cordova-plugin-splashscreen plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.splashscreen

*   cordova-plugin-vibration plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.vibration