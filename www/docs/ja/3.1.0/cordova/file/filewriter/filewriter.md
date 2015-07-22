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

# FileWriter

オブジェクトとして作成およびファイルへのデータの書き込みすることができます。

## プロパティ

*   **readyState**: 3 つの状態の 1 つで、どちらか `INIT` 、 `WRITING` 、または`DONE`.

*   **ファイル名**： 書き込まれるファイルの名前。*（，）*

*   **長さ**: 書き込まれるファイルの長さ。*（ロング）*

*   **位置**: ファイル ポインターの現在位置。*（ロング）*

*   **エラー**: エラーを格納するオブジェクト。*(FileError)*

*   **onwritestart**： 書き込みを開始するときに呼び出されます。*(機能)*

*   **onwrite**: 要求が正常に完了するときに呼び出されます。*(機能)*

*   **onabort**: の書き込みが中止されたときに呼び出されます。たとえば、abort() メソッドを呼び出すことによって。*(機能)*

*   **onerror**: 書き込みが失敗したときに呼び出されます。*(機能)*

*   **onwriteend**: (のいずれかの成功または失敗)、要求が完了したときに呼び出されます。*(機能)*

次のプロパティはサポートされて*いません*。

*   **onprogress**: の進行状況をレポート ファイルの書き込み中と呼ばれる `progress.loaded` / `progress.total` 。*(機能)*

## メソッド

*   **中止**: ファイルの書き込みを中止します。

*   **求める**: 指定されたバイトにファイル ポインターを移動します。

*   **切り捨てる**: 指定された長さにファイルが短くなります。

*   **記述**: ファイルにデータを書き込みます。

## 詳細

`FileWriter`オブジェクトは UTF-8 エンコードされたファイルをデバイスのファイル システムに書き込む方法を提供します。 アプリケーション応答を `writestart` 、 `progress` 、 `write` 、 `writeend` 、 `error` 、および `abort` イベント。

各 `FileWriter` のデータにすることができます書かれる何回も 1 つのファイルに対応しています。 `FileWriter`ファイルの維持する `position` と `length` をアプリに許可属性 `seek` と `write` ファイルの任意の場所。 既定では、 `FileWriter` 既存データの上書き、ファイルの先頭に書き込まれます。 オプションの設定 `append` にブール `true` で、 `FileWriter` のコンス トラクターはファイルの末尾に書き込む。

テキスト データは、以下のすべてのプラットフォームでサポートされています。 テキストは、ファイルシステムに書き込まれる前に utf-8 としてエンコードされます。 いくつかのプラットフォームは、バイナリ データを渡すことができるの ArrayBuffer または Blob としてもサポートします。

## サポートされているプラットフォーム

テキストおよびバイナリ サポート：

*   アンドロイド
*   iOS

テキストのみのサポート:

*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   Windows Phone 7 と 8
*   Windows 8

## 簡単な例を求める

    function win(writer) {
        // fast forwards file pointer to end of file
        writer.seek(writer.length);
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## 簡単な例を切り捨てる

    function win(writer) {
        writer.truncate(10);
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## 簡単な例を書く

    function win(writer) {
        writer.onwrite = function(evt) {
            console.log("write success");
        };
        writer.write("some sample text");
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## バイナリ書き込み簡単な例

    function win(writer) {
        var data = new ArrayBuffer(5),
            dataView = new Int8Array(data);
        for (i=0; i < 5; i++) {
            dataView[i] = i;
        }
        writer.onwrite = function(evt) {
            console.log("write success");
        };
        writer.write(data);
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## 簡単な例を追加します。

    function win(writer) {
        writer.onwrite = function(evt) {
        console.log("write success");
    };
    writer.seek(writer.length);
        writer.write("appended text");
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## 簡単な例を中止します。

    function win(writer) {
        writer.onwrite = function(evt) {
            console.log("write success");
        };
        writer.write("some sample text");
        writer.abort();
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>FileWriter Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
        }
    
        function gotFS(fileSystem) {
            fileSystem.root.getFile("readme.txt", {create: true, exclusive: false}, gotFileEntry, fail);
        }
    
        function gotFileEntry(fileEntry) {
            fileEntry.createWriter(gotFileWriter, fail);
        }
    
        function gotFileWriter(writer) {
            writer.onwriteend = function(evt) {
                console.log("contents of file now 'some sample text'");
                writer.truncate(11);
                writer.onwriteend = function(evt) {
                    console.log("contents of file now 'some sample'");
                    writer.seek(4);
                    writer.write(" different text");
                    writer.onwriteend = function(evt){
                        console.log("contents of file now 'some different text'");
                    }
                };
            };
            writer.write("some sample text");
        }
    
        function fail(error) {
            console.log(error.code);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Write File</p>
      </body>
    </html>