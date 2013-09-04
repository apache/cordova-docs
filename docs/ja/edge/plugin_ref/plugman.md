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

*   コルドバ プラグイン バッテリ ステータス plugman--プロジェクトのプラットフォーム < ios|android|blackberry10|wp7|wp8 >-- <directory> -プラグイン https://git-wip-us.apache.org/repos/asf/cordova-plugin-battery-status.git

*   コルドバ プラグイン カメラ plugman - プロジェクトのプラットフォーム < ios|android|blackberry10|wp7|wp8 >-- <directory> -プラグイン https://git-wip-us.apache.org/repos/asf/cordova-plugin-camera.git

*   コルドバ プラグイン コンソール plugman--プロジェクトのプラットフォーム < ios|android|blackberry10|wp7|wp8 >-- <directory> -プラグイン https://git-wip-us.apache.org/repos/asf/cordova-plugin-console.git

*   コルドバ プラグイン連絡先 plugman - プロジェクトのプラットフォーム < ios|android|blackberry10|wp7|wp8 >-- <directory> -プラグイン https://git-wip-us.apache.org/repos/asf/cordova-plugin-contacts.git

*   コルドバのプラグイン デバイス plugman--プロジェクトのプラットフォーム < ios|android|blackberry10|wp7|wp8 >-- <directory> -プラグイン https://git-wip-us.apache.org/repos/asf/cordova-plugin-device.git

*   コルドバ-プラグイン デバイス-モーション （加速度） plugman - プロジェクトのプラットフォーム < ios|android|blackberry10|wp7|wp8 >-- <directory> -プラグイン https://git-wip-us.apache.org/repos/asf/cordova-plugin-device-motion.git

*   コルドバのプラグイン デバイス向き (コンパス) plugman--プロジェクトのプラットフォーム < ios|android|blackberry10|wp7|wp8 >-- <directory> -プラグイン https://git-wip-us.apache.org/repos/asf/cordova-plugin-device-orientation.git

*   コルドバ プラグイン ダイアログ plugman--プロジェクトのプラットフォーム < ios|android|blackberry10|wp7|wp8 >-- <directory> -プラグイン https://git-wip-us.apache.org/repos/asf/cordova-plugin-dialogs.git

*   コルドバ プラグインファイル plugman--プロジェクトのプラットフォーム < ios|android|blackberry10|wp7|wp8 >-- <directory> -プラグイン https://git-wip-us.apache.org/repos/asf/cordova-plugin-file.git

*   コルドバ プラグイン ファイル転送 plugman - プロジェクトのプラットフォーム < ios|android|blackberry10|wp7|wp8 >-- <directory> -プラグイン https://git-wip-us.apache.org/repos/asf/cordova-plugin-file-transfer.git

*   コルドバ プラグイン地理位置情報 plugman--プロジェクトのプラットフォーム < ios|android|blackberry10|wp7|wp8 >-- <directory> -プラグイン https://git-wip-us.apache.org/repos/asf/cordova-plugin-geolocation.git

*   コルドバ プラグイン グローバリゼーション plugman--プロジェクトのプラットフォーム < ios|android|blackberry10|wp7|wp8 >-- <directory> -プラグイン https://git-wip-us.apache.org/repos/asf/cordova-plugin-globalization.git

*   コルドバのプラグイン inappbrowser plugman--プロジェクトのプラットフォーム < ios|android|blackberry10|wp7|wp8 >-- <directory> -プラグイン https://git-wip-us.apache.org/repos/asf/cordova-plugin-inappbrowser.git

*   コルドバ プラグイン メディア plugman--プロジェクトのプラットフォーム < ios|android|blackberry10|wp7|wp8 >-- <directory> -プラグイン https://git-wip-us.apache.org/repos/asf/cordova-plugin-media.git

*   コルドバ プラグイン メディア キャプチャ plugman--プロジェクトのプラットフォーム < ios|android|blackberry10|wp7|wp8 >-- <directory> -プラグイン https://git-wip-us.apache.org/repos/asf/cordova-plugin-media-capture.git

*   コルドバ プラグイン ネットワーク情報 plugman--プロジェクトのプラットフォーム < ios|android|blackberry10|wp7|wp8 >-- <directory> -プラグイン https://git-wip-us.apache.org/repos/asf/cordova-plugin-network-information.git

*   コルドバ プラグイン splashscreen plugman--プロジェクトのプラットフォーム < ios|android|blackberry10|wp7|wp8 >-- <directory> -プラグイン https://git-wip-us.apache.org/repos/asf/cordova-plugin-splashscreen.git

*   コルドバ プラグイン振動 plugman--プロジェクトのプラットフォーム < ios|android|blackberry10|wp7|wp8 >-- <directory> -プラグイン https://git-wip-us.apache.org/repos/asf/cordova-plugin-vibration.git