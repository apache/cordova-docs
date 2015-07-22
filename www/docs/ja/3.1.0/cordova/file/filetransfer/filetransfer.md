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

# ファイル転送

`FileTransfer`オブジェクトをサーバーからダウンロードまたはアップロードすることができます。

## プロパティ

*   **onprogress**: と呼ばれる、 `ProgressEvent` データの新しいチャンクが転送されるたびに。*(機能)*

## メソッド

*   **アップロード**: サーバーにファイルを送信します。

*   **ダウンロード**: サーバーからファイルをダウンロードします。

*   **中止**: 進行中の転送を中止します。

## 詳細

`FileTransfer`オブジェクトはマルチパートのポスト http を使用してリモート サーバーにファイルをアップロードする方法を提供します。 HTTP と HTTPS の両方のプロトコルがサポートされます。 省略可能なパラメーターを渡すことによって指定することができます、 `FileUploadOptions` オブジェクトの `upload()` メソッド。 成功したアップロード時に、 `FileUploadResult` オブジェクト、成功時のコールバックに渡されます。 エラーが発生した場合、 `FileTransferError` オブジェクト エラー コールバックに渡されます。 リモート サーバーからファイルをダウンロードし、デバイスに保存する (iOS と Android） でのみ可能です。

## サポートされているプラットフォーム

*   アンドロイド
*   ブラックベリー WebWorks (OS 5.0 およびより高い)
*   iOS
*   Windows Phone 7 と 8
*   Windows 8

## アップロード

**パラメーター:**

*   **filePath**: デバイス上のファイルの完全パス。

*   **サーバー**: によって符号化されるように、ファイルを受信するサーバーの URL`encodeURI()`.

*   **successCallback**: 渡されたコールバックを `Metadata` オブジェクト。*(機能)*

*   **解り**: エラー取得が発生した場合に実行されるコールバック、 `Metadata` 。呼び出されると、 `FileTransferError` オブジェクト。*(機能)*

*   **オプション**: ファイル名と mime タイプなどの省略可能なパラメーター。

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
    
    var options = new FileUploadOptions();
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
        <title>File Transfer Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
            // Wait for device API libraries to load
            //
            document.addEventListener("deviceready", onDeviceReady, false);
    
            // device APIs are available
            //
            function onDeviceReady() {
                // Retrieve image file location from specified source
                navigator.camera.getPicture(
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
                var options = new FileUploadOptions();
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
        <h1>Example</h1>
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
    
    var options = new FileUploadOptions();
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

*   **ソース**: によって符号化されるように、ファイルをダウンロードするサーバーの URL`encodeURI()`.

*   **ターゲット**: デバイス上のファイルの完全パス。

*   **successCallback**: 渡されたコールバックを `FileEntry` オブジェクト。*(機能)*

*   **解り**: コールバックを取得するときにエラーが発生した場合に実行される、 `Metadata` 。呼び出されると、 `FileTransferError` オブジェクト。*(機能)*

*   **trustAllHosts**: 省略可能なパラメーターは、デフォルト `false` 。 場合に設定されている `true` すべてのセキュリティ証明書を受け入れるでしょう。 これは便利ですアンドロイドの自己署名入りセキュリティ証明書を拒否します。 運用環境で使用しないでください。 Android と iOS でサポートされています。 *(ブール値)*

*   **オプション**: 省略可能なパラメーターは、現在サポートするヘッダーのみ (認証 (基本認証) など)。

**簡単な例**

    // !! FilePath はデバイス var 出色で有効なパスと見なされます = 新しい FileTransfer();var uri = encodeURI ("http://some.server.com/download.php");fileTransfer.download (uri、filePath、function(entry) {console.log ("ダウンロードが完了しました:"+ entry.fullPath);}、function(error) {console.log (「ダウンロード エラー ソース」+ error.source);console.log (「ダウンロード エラー ターゲット」+ error.target);console.log (「アップロード エラー コード」+ error.code);}、false {ヘッダー: {「承認」:「基本的な dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA = ="}});
    

## 中止

進行中の転送を中止します。Onerror コールバックが FileTransferError.ABORT_ERR のエラー コードを持っている FileTransferError オブジェクトに渡されます。

**サポートされているプラットフォーム**

*   アンドロイド
*   iOS

**簡単な例**

    // !! 可変 fileURI デバイス var 勝利上のテキスト ファイルを有効な URI が含まれている前提としています function(r) = {console.log (「呼び出すことはできません」);}。var の失敗 function(error) = {//error.code FileTransferError.ABORT_ERR 警告 = = ("エラーが発生しました: コード ="+ error.code);console.log (「アップロード エラー ソース」+ error.source);console.log (「アップロード エラー ターゲット」+ error.target);}var のオプション = 新しい FileUploadOptions();options.fileKey="file";options.fileName="myphoto.jpg";options.mimeType="image/jpeg";var ft = 新しい FileTransfer();ft.upload fileURI、encodeURI ("http://some.server.com/upload.php")、勝利、失敗する （オプション）;ft.abort();
    

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