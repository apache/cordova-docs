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

File
====

このオブジェクトは一つのファイルの属性を含みます。

プロパティー
----------

- __name__: ファイルの名前を表します。 _(DOMString)_
- __fullPath__: ファイルの名前を含むフルパスを表します。 _(DOMString)_
- __type__: ファイルの MIME 型を表します。 _(DOMString)_
- __lastModifiedDate__: ファイルの最終更新日時を表します。 _(Date)_
- __size__: ファイルのサイズをバイトで表します。 _(long)_

メソッド
-------

- __slice__: ファイルの一部分のみを選択し、読み込めるようにします。 

詳細
-------

この `File` オブジェクトは一つのファイルの属性を含みます。 `FileEntry` オブジェクトの `file()` メソッドを呼び出すことで、 `File` オブジェクトのインスタンスを取得できます。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7 and 8
- Windows 8

slice
--------------

新しい `File` オブジェクトを返します。 このオブジェクトを `FileReader` に渡すと、元のファイルの特定の部分だけを読み込みます。 `start` もしくは `end` パラメータに負の値を設定すると、読み込み開始もしくは終了位置をファイルの最後から指定できます。各インデクスには現在の slice からの相対的な位置を指定します。(下記の詳細な使用例を参照のこと)

__パラメータ:__

- __start__: 何バイト目から読み込み始めるか指定します (`start`バイト目から読み込みます)。
- __end__: 何バイト目の直前まで読み込むか指定します (`end - 1`バイト目まで読み込みます)。

__使用例__

    var slicedFile = file.slice(10, 30);

__詳細な使用例__

    var slice1 = file.slice(100, 400);
    var slice2 = slice1.slice(20, 35);

    var slice3 = file.slice(120, 135);
    // slice2 と slice3 の内容は同じです

__Supported Platforms__

- Android
- iOS
