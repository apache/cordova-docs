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

# ファイル

このオブジェクトには、単一のファイルの属性が含まれます。

## プロパティ

*   **名前**: ファイルの名前。*（，）*

*   **fullPath**: ファイル名を含むファイルの完全パス。*（，）*

*   **タイプ**: ファイルの mime タイプ。*（，）*

*   **ファイルサイズ**: ファイルが変更された最後の時間。*（日）*

*   **サイズ**: ファイルのバイト単位のサイズ。*（ロング）*

## メソッド

*   **スライス**: 読み込まれるファイルの一部だけを選択します。

## 詳細

`File`オブジェクトには、単一のファイルの属性が含まれます。インスタンスを取得することができます、 `File` を呼び出すことによってオブジェクトが `FileEntry` オブジェクトの `file()` メソッド。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 7 と 8
*   Windows 8

## スライス

新しい `File` オブジェクトを `FileReader` ファイルの指定した部分のみを返します。 負の値を `start` または `end` ファイルの最後から測定されます。 インデックスは、現在のスライスを基準にして配置されます。 （下記の完全な例を参照してください)。

**パラメーター:**

*   **開始**: 最初のバイトを読み取り、包括的なインデックス。

*   **終了**： 最後の 1 つを読む後のバイトのインデックス。

**簡単な例**

    var slicedFile = file.slice(10, 30);
    

**完全な例**

    var slice1 = file.slice(100, 400);
    var slice2 = slice1.slice(20, 35);
    
    var slice3 = file.slice(120, 135);
    // slice2 and slice3 are equivalent.
    

**サポートされているプラットフォーム**

*   アンドロイド
*   iOS