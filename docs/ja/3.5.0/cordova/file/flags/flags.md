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

# フラグ

引数が指定されて、 `DirectoryEntry` オブジェクトの `getFile()` と `getDirectory()` 方法を調べたり、ファイルとディレクトリをそれぞれ作成します。

## プロパティ

*   **作成**： 存在しない場合、ファイルまたはディレクトリを作成する必要がありますを示します。*(ブール値)*

*   **排他的な**: は単独でを使用すると、影響を与えません `create` ターゲット パスが既に存在する場合に失敗する、ファイルまたはディレクトリが作成されます。*(ブール値)*

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 7 と 8
*   Windows 8

## 簡単な例

    //が存在しない場合に作成するデータ ディレクトリを取得します。
    dataDir fileSystem.root.getDirectory = (「データ」{作成: true});//が存在しない場合にのみ、ロック ファイルを作成します。
    ロックファイル dataDir.getFile = ("lockfile.txt"{作成: true の場合、排他的な: true});