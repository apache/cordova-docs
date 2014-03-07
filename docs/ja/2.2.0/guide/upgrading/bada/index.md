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

Upgrading Cordova Bada
======================

これは、 Cordova を古いバージョンから新しいバージョンにアップグレードする
必要がある人のためのドキュメントです。

## 1.9.0 から 2.0.0 へのアップグレード ##

1. 新しい JavaScript ファイルを使って `Res/js/cordova.js` を更新します

## 1.8.x から 1.9.0 へのアップグレード ##

1. 新しい JavaScript ファイルを使って `Res/js/cordova.js` を更新します

## 1.7.0 から 1.8.x へのアップグレード ##

1. cordova.bada.js ファイルを Res/js ディレクトリから削除します
2. 新しい cordova.js ファイルを Res/js ディレクトリに追加します
3. Res/index.html を、 cordova.js ではなく cordova.bada.js を参照するように更新します

この行を次から:

    <script type="text/javascript" src="./js/cordova.bada.js"></script>
次に変更します:

    <script type="text/javascript" src="./js/cordova.js"></script>

Cordova 1.8 では、 Bada 1.2 は既にサポートされていません。
このリポジトリは今後も使用したい方のためにアーカイブとして存続します。このため、これにはいくつかの廃止された API が含まれます。
