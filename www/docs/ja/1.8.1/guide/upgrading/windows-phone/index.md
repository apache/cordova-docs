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

title: Upgrading Cordova Windows Phone
---

Upgrading Cordova Windows Phone
===============================

これは、 Cordova を古いバージョンから新しいバージョンにアップグレードする必要がある人のためのドキュメントです。

- 1.8.0 にアップグレードするには、 1.7.0 からアップグレードしてください

## 1.7.0 から 1.8.0 へのアップグレード ##

### Visual Studio の Solution Explorer ウィンドウ内:
1. プロジェクトから GapLib/WP7CordovaClassLib.dll ファイルを削除します
2. References フォルダー内の WP7CordovaClassLib への参照を削除します
3. References を右クリックし、 'Add Reference' を選択します
4. 新しいバージョンの 'WP7CordovaClassLib.dll' ファイルを追加します
    - 注意: DLL のバージョンは、 reference を右クリックし Properties を選択することにより確認出来ます
5. 新しい cordova-1.8.0.js をプロジェクトにコピーします (Content としてマークされていることを確認してください)
6. HTML を、新しい cordova-1.8.0.js を使って更新します
