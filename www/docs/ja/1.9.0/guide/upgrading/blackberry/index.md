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

title: Upgrading Cordova BlackBerry
---

Upgrading Cordova BlackBerry
============================

これは、 Cordova を古いバージョンから新しいバージョンにアップグレードする必要がある人のためのドキュメントです。

- 1.9.0 にアップグレードするには、 1.8.1 からアップグレードしてください

## 1.8.1 から 1.9.0 へのアップグレード ##

www フォルダーのアップデート:

1. アプリの `www/` フォルダーを開きます
2. `ext/` フォルダーにある .jar ファイルを削除し更新します
3. `ext-air/` フォルダーの内容を更新します
4. 新しい `cordova-1.9.0.js` をプロジェクトにコピーします
    - playbook の場合は `playbook/` フォルダーの中の .js ファイルを更新します
5. HTML を、新しい `cordova-1.9.0.js` を使って更新します
6. マイクによる録音を使用可能にするために `www/config.xml` ファイルを次のように更新します:

<feature id="blackberry.media.microphone" required="true" version="1.0.0.0"/>

また、新しいパーミッションを追加します:

<rim:permit>record_audio</rim:permit>

サンプルフォルダーのアップデート (例, ant ツールを使ったアップデート):

1. `sample/lib/` フォルダーを開きます
2. `cordova.1.8.1/ext/` フォルダーにある .jar ファイルを更新します
3. `cordova.1.8.1/ext-air/` フォルダーの内容を更新します
4. `cordova.1.8.1/javascript/` フォルダーにある .js ファイルを更新します
5. `sample/lib/` フォルダーを開き、 `cordova.1.8.1/` フォルダーを `cordova.1.9.0/` へリネームします
6. `www/` フォルダーを新しい Cordova でアップデートするため、 `ant blackberry build` または `ant playbook build` とタイプします
7. `www/` フォルダーを開き、HTML を、新しい `cordova-1.9.0.js` を使って更新します
8. `www/` フォルダーを開き、マイクによる録音を使用可能にするために `www/config.xml` ファイルを次のように更新します:

<feature id="blackberry.media.microphone" required="true" version="1.0.0.0"/>

また、新しいパーミッションを追加します:

<rim:permit>record_audio</rim:permit>

