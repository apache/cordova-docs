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

# メタデータ

ファイルまたはディレクトリの状態に関する情報を提供するインターフェイスです。

## プロパティ

*   **修正時刻**: ファイルまたはディレクトリが最後変更された日時。*（日）*

## 詳細

`Metadata`オブジェクトは、ファイルまたはディレクトリの状態に関する情報を表します。 呼び出して、 `DirectoryEntry` または `FileEntry` オブジェクトの `getMetadata()` メソッドの結果、 `Metadata` インスタンス。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 7 と 8
*   Windows 8

## 簡単な例

    function win(metadata) {
        console.log("Last Modified: " + metadata.modificationTime);
    }
    
    // Request the metadata object for this entry
    entry.getMetadata(win, null);