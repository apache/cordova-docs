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

Flags
=====

このオブジェクトは、 `DirectoryEntry` の __getFile__ メソッドと __getDirectory__ メソッド (ファイルやディレクトリを取得または作成するメソッド) に渡される引数として使われます。

プロパティー
----------

- __create:__ もし対象のファイルまたはディレクトリが無かった場合、作成するかどうかを表します _(boolean)_
- __exclusive:__ このプロパティー単体では効果はありません。 create プロパティーと一緒に使います。もし対象のパスが既に存在した場合は、取得するのではなくファイルまたはディレクトリの作成に失敗します _(boolean)_

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7 (Mango)

使用例
-------------

    // data ディレクトリを取得します。もし存在しない場合は、作成します
    dataDir = fileSystem.root.getDirectory("data", {create: true});

    // lockfile.txt ファイルを、存在しない場合のみ作成します
    lockFile = dataDir.getFile("lockfile.txt", {create: true, exclusive: true});
