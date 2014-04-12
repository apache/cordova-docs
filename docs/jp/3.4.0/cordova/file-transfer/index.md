<!---
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
-->

# org.apache.cordova.file-transfer

このプラグインを使用して、ファイルのアップロードとダウンロードを行います。

## インストール

    cordova plugin add org.apache.cordova.file-transfer

## サポート対象のプラットフォーム

- Amazon Fire OS
- Android
- BlackBerry 10*
- iOS
- Windows Phone 7 and 8*
- Windows 8*

\* _`onprogress` と `abort()` のサポートを行っていません。_

# FileTransfer

HTTP マルチパート POST リクエストを使用して、ファイルのアップロードとダウンロードを行うときに、 `FileTransfer` オブジェクトを使用します。

## プロパティ

- __onprogress__: データの送受信を行うときに、`ProgressEvent` を使用して、呼び出す関数 _(Function)_

## メソッド

- __upload__: サーバーにファイルを送付します。

- __download__: サーバーからファイルをダウンロードします。

- __abort__: 進行中の送受信を中止します。


## upload

__Parameters__:

- __fileURL__: ファイルの位置を指し示す Filesystem URL。後方互換性 ( backwards compatibility ) を考慮しなければいけない場合には、この URL は、デバイス上のファイルへの絶対パスとなります　( 後方互換性に関しては、下の [後方互換性に関するメモ書き] を参照のこと )。

- __server__: ファイルを受け取るサーバーの URL ( `encodeURI()` を使用して、エンコード )。

- __successCallback__: `Metadata` オブジェクトを渡すコールバック _(Function)_

- __errorCallback__: `Metadata` の取得時にエラーが発生した場合に実行するコールバック。 `FileTransferError` オブジェクトを使用して、呼び出します。 _(Function)_

- __trustAllHosts__: 任意のパラメーター。デフォルトでは、 `false` に設定されています。 `true` に設定した場合、セキュリティ証明書のすべてを受け取ります。Android では、自己署名 ( self-signed ) したセキュリティ証明書を却下するので、この方法は有用です。商用には推奨しません。Android と iOS でサポートします。 _(boolean)_

- __options__: 任意のパラメーター _(Object)_. 有効なキーを以下に示します。
  - __fileKey__: form 要素の名前。デフォルトでは、 `file` です。 (DOMString)
  - __fileName__: サーバーにファイルを保存するときに使用する、ファイル名。デフォルトでは、 `image.jpg` です。 (DOMString)
  - __mimeType__: アップロードするデータの mini タイプ。デフォルトでは、 `image/jpeg` です。 (DOMString)　
  - __params__: HTTPリクエスト内で渡す、任意のキーと値の組み合わせのセット。 (Object)
  - __chunkedMode__: チャンク単位でのストリーミングモード ( chunked streaming mode ) を使用して、データのアップロードを行うかを設定します。デフォルトでは、 `true` です。 (Boolean)
  - __headers__: ヘッダー名または値のマップ。複数の場合には、配列を使用します。 (Object)

### 例

    // 想定 ： fileURL 変数には、対象のテキストを指し示す有効な URL が格納されていること。 
    // 例 ： 　cdvfile://localhost/persistent/path/to/file.txt

    var win = function (r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);
    }

    var fail = function (error) {
        alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
    }

    var options = new FileUploadOptions();
    options.fileKey = "file";
    options.fileName = fileURL.substr(fileURL.lastIndexOf('/') + 1);
    options.mimeType = "text/plain";

    var params = {};
    params.value1 = "test";
    params.value2 = "param";

    options.params = params;

    var ft = new FileTransfer();
    ft.upload(fileURL, encodeURI("http://some.server.com/upload.php"), win, fail, options);

### アップロード ヘッダー ( Upload Header ) と Progress イベントの使用例 ( Android と iOS のみ対象 )

    function win(r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);
    }

    function fail(error) {
        alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
    }

    var uri = encodeURI("http://some.server.com/upload.php");

    var options = new FileUploadOptions();
    options.fileKey="file";
    options.fileName=fileURL.substr(fileURL.lastIndexOf('/')+1);
    options.mimeType="text/plain";

    var headers={'headerParam':'headerValue'};

    options.headers = headers;

    var ft = new FileTransfer();
    ft.onprogress = function(progressEvent) {
        if (progressEvent.lengthComputable) {
          loadingStatus.setPercentage(progressEvent.loaded / progressEvent.total);
        } else {
          loadingStatus.increment();
        }
    };
    ft.upload(fileURL, uri, win, fail, options);

## FileUploadResult

`FileUploadResult` オブジェクトを使用して、
`FileTransfer` オブジェクトの `upload()` メソッド内に置かれている、 Success 時に実行するコールバックを呼び出します。

### プロパティ

- __bytesSent__: 
アップロード中に、サーバーに送られたバイト ( byte ) 数 (long)

- __responseCode__: サーバが返した HTTP レスポンスコード (long)

- __response__: サーバが返した HTTP レスポンス (DOMString)

- __headers__: サーバが返した HTTP レスポンス ヘッダー (Object)
  - 現時点では、iOS のみサポートしています。

### iOS 特有の動作

- `responseCode` または `bytesSent` をサポートしません。

## download

__Parameters__:

- __source__: 
ファイルのダウンロードを行うサーバーの URL ( `encodeURI()` を使用して、エンコード )。

- __target__: 
デバイス上のファイルの位置を指し示す 
Filesystem url。後方互換性 ( backwards compatibility ) を考慮しなければいけない場合には、この URL は、デバイス上のファイルへの絶対パスとなります　( 後方互換性に関しては、下の [後方互換性に関するメモ書き] を参照のこと )。

- __successCallback__: 
`FileEntry` オブジェクトを渡すコールバック _(Function)_

- __errorCallback__: `Metadata` の取得時にエラーが発生した場合に実行するコールバック。 `FileTransferError` オブジェクトを使用して、呼び出します。 _(Function)_

- __trustAllHosts__: 任意のパラメーター。デフォルトでは、 `false` に設定されています。 `true` に設定した場合、セキュリティ証明書のすべてを受け取ります。Android では、自己署名 ( self-signed ) したセキュリティ証明書を却下するので、この方法は有用です。商用には推奨しません。Android と iOS でサポートします。 _(boolean)_

- __options__: 任意のパラメーター _(Object)_. 現時点では、 headers ( Basic 認証のような認証方式など ) のみサポートします。

### 例

    // 想定 ： fileURL 変数には、パスを示す有効な URL が格納されていること。 
    // 例 ： 　cdvfile://localhost/persistent/path/to/downloads/

    var fileTransfer = new FileTransfer();
    var uri = encodeURI("http://some.server.com/download.php");

    fileTransfer.download(
        uri,
        fileURL,
        function(entry) {
            console.log("download complete: " + entry.fullPath);
        },
        function(error) {
            console.log("download error source " + error.source);
            console.log("download error target " + error.target);
            console.log("upload error code" + error.code);
        },
        false,
        {
            headers: {
                "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
            }
        }
    );

## abort

進行中のファイルの送受信を中止します。 FileTransferError オブジェクトを使用して、 Error 時のコールバックを呼び出します。このオブジェクトは、 FileTransferError.ABORT_ERR エラーコードを格納しています。

### 例

    // 想定 ： fileURL 変数には、対象のテキストを指し示す有効な URL を格納されていること。 
    // 例 ： 　cdvfile://localhost/persistent/path/to/file.txt

    var win = function(r) {
        console.log("Should not be called.");
    }

    var fail = function(error) {
        // error.code == FileTransferError.ABORT_ERR
        alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
    }

    var options = new FileUploadOptions();
    options.fileKey="file";
    options.fileName="myphoto.jpg";
    options.mimeType="image/jpeg";

    var ft = new FileTransfer();
    ft.upload(fileURL, encodeURI("http://some.server.com/upload.php"), win, fail, options);
    ft.abort();


## FileTransferError

`FileTransferError` オブジェクトを使用して、エラーの発生時に実行するコールバックを呼び出します。

### プロパティ

- __code__: 事前に定義した以下のエラーコードのうちの 1 つ (Number)

- __source__: アップロード先のソースの URL (String)

- __target__: ダウンロード元のターゲットの URL (String)

- __http_status__: HTTP ステータスコード ( status code )。HTTP 接続して、レスポンスコードを受け取ったときのみ、この属性を使用することができます。 (Number)

### 定数

- `FileTransferError.FILE_NOT_FOUND_ERR`
- `FileTransferError.INVALID_URL_ERR`
- `FileTransferError.CONNECTION_ERR`
- `FileTransferError.ABORT_ERR`

## 後方互換性に関するメモ書き

このプラグインの以前のバージョンでは、アップロード先のソースとして、または、ダウンロード元のターゲットとして、ファイル保存場所へのデバイス固有の絶対パス ( device-absolute-file-location ) のみ受け取っていました。典型的なパスは、以下の形式となっていました。

    /var/mobile/Applications/<application UUID>/Documents/path/to/file  (iOS)
    /storage/emulated/0/path/to/file                                    (Android)

後方互換性のサポートにより、これらの形式のパスも使用できます。 persistent ストレージに、これらのパスをアプリが保存している場合、これらの形式のパスを使用し続けることができます。

以前では、File プラグインが返す `FileEntry` と `DirectoryEntry` オブジェクトの `fullPath` プロパティ内で、これらのパスが暴露されていました。新しいバーションの File プラグインでは、この問題も解消され、JavaScript へのパスの暴露も行われていません。

File プラグイン ( 原文では単に「 File 」 ) のバージョンを 1.0.0 以降にアップグレードして、ならびに、`download()` または `upload()` の引数に `entry.fullPath` を以前使用していた場合には、 filesystem URL を使用するよう、コードを変更する必要があります。

`FileEntry.toURL()` と `DirectoryEntry.toURL()` では、以下の形式の filesystem URL を返します。

    cdvfile://localhost/persistent/path/to/file

`download()` と `upload()` の両メソッド内において、ファイルへの絶対パスを指定する引数に、この URL を使用できます。