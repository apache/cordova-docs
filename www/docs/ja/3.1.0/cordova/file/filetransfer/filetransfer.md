---
license: >
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
---

# <a href="../fileobj/fileobj.html">ファイル</a>転送

`FileTransfer`オブジェクトをサーバーからダウンロードまたはアップロードすることができます。

## プロパティ

*   **onprogress**: と呼ばれる、 `ProgressEvent` データの新しいチャンクが転送されるたびに。*(機能)*

## メソッド

*   **アップロード**: サーバーに<a href="../fileobj/fileobj.html">ファイル</a>を送信します。

*   **ダウンロード**: サーバーから<a href="../fileobj/fileobj.html">ファイル</a>をダウンロードします。

*   **中止**: 進行中の転送を中止します。

## 詳細

`FileTransfer`オブジェクトはマルチパートのポスト http を使用してリモート サーバーに<a href="../fileobj/fileobj.html">ファイル</a>をアップロードする方法を提供します。 HTTP と HTTPS の両方のプロトコルがサポートされます。 省略可能なパラメーターを渡すことによって指定することができます、 `<a href="../fileuploadoptions/fileuploadoptions.html">FileUploadOptions</a>` オブジェクトの `upload()` メソッド。 成功したアップロード時に、 `<a href="../fileuploadresult/fileuploadresult.html">FileUploadResult</a>` オブジェクト、成功時のコールバックに渡されます。 エラーが発生した場合、 `<a href="../filetransfererror/filetransfererror.html">FileTransferError</a>` オブジェクト エラー コールバックに渡されます。 リモート サーバーから<a href="../fileobj/fileobj.html">ファイル</a>をダウンロードし、<a href="../../device/device.html">デバイス</a>に保存する (iOS と Android） でのみ可能です。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 7 と 8
*   Windows 8

## アップロード

**パラメーター:**

*   **filePath**: <a href="../../device/device.html">デバイス</a>上の<a href="../fileobj/fileobj.html">ファイル</a>の完全パス。

*   **サーバー**: によって符号化されるように、<a href="../fileobj/fileobj.html">ファイル</a>を受信するサーバーの URL`encodeURI()`.

*   **successCallback**: 渡されたコールバックを `Metadata` オブジェクト。*(機能)*

*   **解り**: エラー取得が発生した場合に実行されるコールバック、 `Metadata` 。呼び出されると、 `<a href="../filetransfererror/filetransfererror.html">FileTransferError</a>` オブジェクト。*(機能)*

*   **オプション**: <a href="../fileobj/fileobj.html">ファイル</a>名と mime タイプなどの省略可能なパラメーター。

*   **trustAllHosts**: 省略可能なパラメーターは、デフォルト `false` 。 場合設定 `true` 、セキュリティ証明書をすべて受け付けます。 これは Android の自己署名入りセキュリティ証明書を拒否するので便利です。 運用環境で使用しないでください。 Android と iOS でサポートされています。 *(ブール値)*

**簡単な例**

    // !! Assumes variable fileURI contains a valid URI to a text file on the device
    
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
    
    var options = new <a href="../fileuploadoptions/fileuploadoptions.html">FileUploadOptions</a>();
    options.fileKey = "file";
    options.fileName = fileURI.substr(fileURI.lastIndexOf('/') + 1);
    options.mimeType = "text/plain";
    
    var params = {};
    params.value1 = "test";
    params.value2 = "param";
    
    options.params = params;
    
    var ft = new FileTransfer();
    ft.upload(fileURI, encodeURI("http://some.server.com/upload.php"), win, fail, options);
    

**完全な例**

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
    <html>
    <head>
        <title>File Transfer <a href="../../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
            // Wait for device API libraries to load
            //
            document.<a href="../../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
            // device APIs are available
            //
            function onDeviceReady() {
                // Retrieve image file location from specified source
                navigator.<a href="../../camera/camera.getPicture.html">camera.getPicture</a>(
                    uploadPhoto,
                    function(message) { alert('get picture failed'); },
                    {
                        quality         : 50,
                        destinationType : navigator.camera.DestinationType.FILE_URI,
                        sourceType      : navigator.camera.PictureSourceType.PHOTOLIBRARY
                    }
                );
            }
    
            function uploadPhoto(imageURI) {
                var options = new <a href="../fileuploadoptions/fileuploadoptions.html">FileUploadOptions</a>();
                options.fileKey="file";
                options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
                options.mimeType="image/jpeg";
    
                var params = {};
                params.value1 = "test";
                params.value2 = "param";
    
                options.params = params;
    
                var ft = new FileTransfer();
                ft.upload(imageURI, encodeURI("http://some.server.com/upload.php"), win, fail, options);
            }
    
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
    
            </script>
    </head>
    <body>
        <h1><a href="../../storage/storage.opendatabase.html">Example</a></h1>
        <p>Upload File</p>
    </body>
    </html>
    

**設定アップロード ヘッダー**

Android と iOS でサポートされています。

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
    
    var options = new <a href="../fileuploadoptions/fileuploadoptions.html">FileUploadOptions</a>();
    options.fileKey="file";
    options.fileName=fileURI.substr(fileURI.lastIndexOf('/')+1);
    options.mimeType="text/plain";
    
    var headers={'headerParam':'headerValue'};
    
    options.headers = headers;
    
    var ft = new FileTransfer();
    ft.upload(fileURI, uri, win, fail, options);
    

**Android の癖**

設定、 `chunkedMode` オプションを `false` Nginx のサーバーへのアップロードの問題を防ぐために。

## ダウンロード

**パラメーター:**

*   **ソース**: によって符号化されるように、<a href="../fileobj/fileobj.html">ファイル</a>をダウンロードするサーバーの URL`encodeURI()`.

*   **ターゲット**: <a href="../../device/device.html">デバイス</a>上の<a href="../fileobj/fileobj.html">ファイル</a>の完全パス。

*   **successCallback**: 渡されたコールバックを `<a href="../fileentry/fileentry.html">FileEntry</a>` オブジェクト。*(機能)*

*   **解り**: コールバックを取得するときにエラーが発生した場合に実行される、 `Metadata` 。呼び出されると、 `<a href="../filetransfererror/filetransfererror.html">FileTransferError</a>` オブジェクト。*(機能)*

*   **trustAllHosts**: 省略可能なパラメーターは、デフォルト `false` 。 場合に設定されている `true` すべてのセキュリティ証明書を受け入れるでしょう。 これは便利ですアンドロイドの自己署名入りセキュリティ証明書を拒否します。 運用環境で使用しないでください。 Android と iOS でサポートされています。 *(ブール値)*

*   **オプション**: 省略可能なパラメーターは、現在サポートするヘッダーのみ (認証 (基本認証) など)。

**簡単な例**

    // !! FilePath は<a href="../../device/device.html">デバイス</a> var 出色で有効なパスと見なされます = 新しい FileTransfer();var uri = encodeURI ("http://some.server.com/download.php");fileTransfer.download (uri、filePath、function(entry) {console.log ("ダウンロードが完了しました:"+ entry.fullPath);}、function(error) {console.log (「ダウンロード エラー ソース」+ error.source);console.log (「ダウンロード エラー ターゲット」+ error.target);console.log (「アップロード エラー コード」+ error.code);}、false {ヘッダー: {「承認」:「基本的な dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA = ="}});
    

## 中止

進行中の転送を中止します。Onerror コールバックが <a href="../filetransfererror/filetransfererror.html">FileTransferError</a>.ABORT_ERR のエラー コードを持っている <a href="../filetransfererror/filetransfererror.html">FileTransferError</a> オブジェクトに渡されます。

**サポートされているプラットフォーム**

*   アンドロイド
*   iOS

**簡単な例**

    // !! 可変 fileURI <a href="../../device/device.html">デバイス</a> var 勝利上のテキスト <a href="../fileobj/fileobj.html">ファイル</a>を有効な URI が含まれている前提としています function(r) = {console.log (「呼び出すことはできません」);}。var の失敗 function(error) = {//error.code <a href="../filetransfererror/filetransfererror.html">FileTransferError</a>.ABORT_ERR 警告 = = ("エラーが発生しました: コード ="+ error.code);console.log (「アップロード エラー ソース」+ error.source);console.log (「アップロード エラー ターゲット」+ error.target);}var のオプション = 新しい <a href="../fileuploadoptions/fileuploadoptions.html">FileUploadOptions</a>();options.fileKey="file";options.fileName="myphoto.jpg";options.mimeType="image/jpeg";var ft = 新しい FileTransfer();ft.upload fileURI、encodeURI ("http://some.server.com/upload.php")、勝利、失敗する （オプション）;ft.abort();
    

## onprogress

新しいデータのチャンクを転送するたびに、ProgressEvent と呼ばれます。

**サポートされているプラットフォーム**

*   アンドロイド
*   iOS

**例**

    fileTransfer.onprogress = function(progressEvent) {
        if (progressEvent.lengthComputable) {
          loadingStatus.setPercentage(progressEvent.loaded / progressEvent.total);
        } else {
          loadingStatus.increment();
        }
    };
    fileTransfer.download(...); // or fileTransfer.upload(...);
    

**癖**- 両方、iOS、Android 上 lengthComputable は `false` のダウンロード gzip エンコーディングを使用します。