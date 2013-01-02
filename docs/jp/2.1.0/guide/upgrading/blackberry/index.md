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

Upgrading Cordova BlackBerry
============================

これは、 Cordova を古いバージョンから新しいバージョンにアップグレードする必要がある人のためのドキュメントです。

## 1.9.0 から 2.0.0 へのアップグレード ##

www フォルダーのアップデート:

1. アプリの `www/` フォルダーを開きます
2. `ext/` フォルダーにある .jar ファイルを削除し更新します
3. `ext-air/` フォルダーの内容を更新します
4. 新しい `cordova-2.0.0.js` をプロジェクトにコピーします
    - playbook の場合は `playbook/` フォルダーの中の .js ファイルを更新します
5. HTML を、新しい `cordova-2.0.0.js` を使って更新します
6. `www/plugins.xml` ファイルを更新します。2つのプラグインの
   ネームスペース/サービスのラベルが変更されています。
   古い Capture 及び Contact プラグインを次から:

        <plugin name="Capture" value="org.apache.cordova.media.MediaCapture"/>
        <plugin name="Contact" value="org.apache.cordova.pim.Contact"/>

   次に変更します:

        <plugin name="Capture" value="org.apache.cordova.capture.MediaCapture"/>
        <plugin name="Contacts" value="org.apache.cordova.pim.Contact"/>


サンプルフォルダーのアップデート (例, ant ツールを使ったアップデート):

1. `sample/lib/` フォルダーを開きます
2. `cordova.1.9.0/ext/` フォルダーにある .jar ファイルを更新します
3. `cordova.1.9.0/ext-air/` フォルダーの内容を更新します
4. `cordova.1.9.0/javascript/` フォルダーにある .js ファイルを更新します
5. `sample/lib/` フォルダーを開き、 `cordova.1.9.0/` フォルダーの名前を `cordova.2.0.0/` に変更します
6. `www/` フォルダーを新しい Cordova でアップデートするため、 `ant blackberry build` または `ant playbook build` とタイプします
7. `www/` フォルダーを開き、新しい `cordova-2.0.0.js` を使って HTML を更新します
8. `www/` フォルダーを開き `plugins.xml` ファイルを更新します。2つのプラグインの
   ネームスペース/サービスのラベルが変更されています。
   古い Capture 及び Contact プラグインを次から:

        <plugin name="Capture" value="org.apache.cordova.media.MediaCapture"/>
        <plugin name="Contact" value="org.apache.cordova.pim.Contact"/>

   次に変更します:

        <plugin name="Capture" value="org.apache.cordova.capture.MediaCapture"/>
        <plugin name="Contacts" value="org.apache.cordova.pim.Contact"/>




- 1.8.0 にアップグレードするには、 1.7.0 からアップグレードしてください

## 1.7.0 から 1.8.0 へのアップグレード ##

www フォルダーのアップデート:

1. アプリの `www/` フォルダーを開きます
2. `ext/` フォルダーにある .jar ファイルを削除し更新します
3. `ext-air/` フォルダーの内容を更新します
4. 新しい `cordova-1.8.0.js` をプロジェクトにコピーします
    - playbook の場合は `playbook/` フォルダーの中の .js ファイルを更新します
5. 新しい `cordova-1.8.0.js` を使って HTML を更新します
6. `www/plugins.xml` ファイルを更新します。2つのプラグインの
   ネームスペース/サービスのラベルが変更されています。
   古い Capture 及び Contact プラグインを次から:

        <plugin name="Capture" value="org.apache.cordova.media.MediaCapture"/>
        <plugin name="Contact" value="org.apache.cordova.pim.Contact"/>

   次に変更します:

        <plugin name="Capture" value="org.apache.cordova.capture.MediaCapture"/>
        <plugin name="Contacts" value="org.apache.cordova.pim.Contact"/>


サンプルフォルダーのアップデート (例, ant ツールを使ったアップデート):

1. `sample/lib/` フォルダーを開きます
2. `cordova.1.7.0/ext/` フォルダーにある .jar ファイルを更新します
3. `cordova.1.7.0/ext-air/` フォルダーの内容を更新します
4. `cordova.1.7.0/javascript/` フォルダーにある .js ファイルを更新します
5. `sample/lib/` フォルダーを開き、 `cordova.1.7.0/` フォルダーを `cordova.1.8.0/` へリネームします
6. `www/` フォルダーを新しい Cordova でアップデートするため、 `ant blackberry build` または `ant playbook build` とタイプします
7. `www/` フォルダーを開き、HTML を、新しい `cordova-1.8.0.js` を使って更新します
8. `www/` フォルダーを開き `plugins.xml` ファイルを更新します。2つのプラグインの
   ネームスペース/サービスのラベルが変更されています。
   古い Capture 及び Contact プラグインを次から:

        <plugin name="Capture" value="org.apache.cordova.media.MediaCapture"/>
        <plugin name="Contact" value="org.apache.cordova.pim.Contact"/>

   次に変更します:

        <plugin name="Capture" value="org.apache.cordova.capture.MediaCapture"/>
        <plugin name="Contacts" value="org.apache.cordova.pim.Contact"/>

