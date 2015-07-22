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

# DirectoryReader

[W3C ディレクトリとシステム][1]仕様で定義されているファイルと、ディレクトリ内のディレクトリを一覧表示するオブジェクト。

 [1]: http://www.w3.org/TR/file-system-api/

## メソッド

*   **readentries を示す**: ディレクトリ内のエントリを読み取る。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 7 と 8
*   Windows 8

## readentries を示す

このディレクトリ内のエントリを読み取る。

**パラメーター:**

*   **successCallback**: の配列が渡されるコールバック `FileEntry` と `DirectoryEntry` オブジェクト。*(機能)*

*   **解り**: ディレクトリ一覧を取得するときにエラーが発生した場合に実行されるコールバック。呼び出されると、 `FileError` オブジェクト。*(機能)*

**簡単な例**

    function success(entries) {
        var i;
        for (i=0; i<entries.length; i++) {
            console.log(entries[i].name);
        }
    }
    
    function fail(error) {
        alert("Failed to list directory contents: " + error.code);
    }
    
    // Get a directory reader
    var directoryReader = dirEntry.createReader();
    
    // Get a list of all the entries in the directory
    directoryReader.readEntries(success,fail);