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

# FileReader

`FileReader`基本ファイルへのアクセスを許可します。

## プロパティ

*   **readyState**: リーダーの 1 つの 3 つの可能な状態は、どちらか `EMPTY` 、 `LOADING` または`DONE`.

*   **結果**: 読み込まれているファイルの内容。*（，）*

*   **エラー**: エラーを格納するオブジェクト。*(FileError)*

*   **onloadstart**： 読み取りの起動時に呼び出されます。*(機能)*

*   **onload**: 読み取りが正常に完了するときに呼び出されます。*(機能)*

*   **onabort**: の読み取りが中止されたときに呼び出されます。たとえばを呼び出すことによって、 `abort()` メソッド。*(機能)*

*   **onerror**: 読み取りが失敗したときに呼び出されます。*(機能)*

*   **onloadend**: (のいずれかの成功または失敗)、要求が完了したときに呼び出されます。*(機能)*

**注：**次の porperty はサポートされていません。

*   **onprogress**: の進行状況をレポート ファイルの読み取り中と呼ばれる `progress.loaded` / `progress.total` 。*(機能)*

## メソッド

*   **中止**: ファイルの読み込みを中止します。

*   **readAsDataURL**: ファイルやデータの base64 でエンコードされた URL として戻り値のデータを読み取る。

*   **readAsText**: テキスト ファイルを読み取ります。

*   **readAsBinaryString**: バイナリ ファイルを読み取り、バイナリ文字列を返します。

*   **readAsArrayBuffer**： 読み取りファイルとして、`ArrayBuffer`.

## 詳細

`FileReader`オブジェクトは、デバイスのファイル システムからファイルを読み取る方法を提供します。 ファイルは、テキストまたは base64 データ エンコード文字列として読むことができます。 イベント リスナーは、受信、 `loadstart` 、 `progress` 、 `load` 、 `loadend` 、 `error` 、および `abort` イベント。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 7 と 8
*   Windows 8

## readAsDataURL

**パラメーター:**

*   **ファイル**: ファイル オブジェクトを読みます。

## 簡単な例

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("read success");
            console.log(evt.target.result);
        };
        reader.readAsDataURL(file);
    };
    
    var fail = function (error) {
        console.log(error.code);
    };
    
    entry.file(win, fail);
    

## readAsText

**パラメーター:**

*   **ファイル**: ファイル オブジェクトを読みます。

*   **エンコーディング**： ファイルのコンテンツのエンコードに使用するエンコーディングします。既定は UTF8 です。

## 簡単な例

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("read success");
            console.log(evt.target.result);
        };
        reader.readAsText(file);
    };
    
    var fail = function (error) {
        console.log(error.code);
    };
    
    entry.file(win, fail);
    

## 中止

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function(evt) {
            console.log("read success");
            console.log(evt.target.result);
        };
        reader.readAsText(file);
        reader.abort();
    };
    
    function fail(error) {
        console.log(error.code);
    }
    
    entry.file(win, fail);
    

## 完全な例

    <!DOCTYPE html>
    <html>
      <head>
        <title>FileReader Example</title>
    
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
            fileSystem.root.getFile("readme.txt", null, gotFileEntry, fail);
        }
    
        function gotFileEntry(fileEntry) {
            fileEntry.file(gotFile, fail);
        }
    
        function gotFile(file){
            readDataUrl(file);
            readAsText(file);
        }
    
        function readDataUrl(file) {
            var reader = new FileReader();
            reader.onloadend = function(evt) {
                console.log("Read as data URL");
                console.log(evt.target.result);
            };
            reader.readAsDataURL(file);
        }
    
        function readAsText(file) {
            var reader = new FileReader();
            reader.onloadend = function(evt) {
                console.log("Read as text");
                console.log(evt.target.result);
            };
            reader.readAsText(file);
        }
    
        function fail(error) {
            console.log(error.code);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Read File</p>
      </body>
    </html>
    

## iOS の癖

*   **Encoding**パラメーターはサポートされていません、UTF8 エンコーディングが常に有効です。

## readAsBinaryString

現在 iOS と Android でのみサポートされています。

**パラメーター:**

*   **ファイル**: ファイル オブジェクトを読みます。

## 簡単な例

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("read success");
            console.log(evt.target.result);
        };
        reader.readAsBinaryString(file);
    };
    
    var fail = function (error) {
        console.log(error.code);
    };
    
    entry.file(win, fail);
    

## readAsArrayBuffer

現在 iOS と Android でのみサポートされています。

**パラメーター:**

*   **ファイル**: ファイル オブジェクトを読みます。

## 簡単な例

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("read success");
            console.log(new Uint8Array(evt.target.result));
        };
        reader.readAsArrayBuffer(file);
    };
    
    var fail = function (error) {
        console.log(error.code);
    };
    
    entry.file(win, fail);