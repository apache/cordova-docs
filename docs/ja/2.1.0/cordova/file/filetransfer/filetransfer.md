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

FileTransfer
==========

FileTransfer オブジェクトはファイルをサーバーにアップロードまたはサーバからダウンロードする際に使用します。

プロパティー
----------

なし

メソッド
-------

- __upload__: サーバーにファイルを送信
- __download__: サーバーからファイルをダウンロード

詳細
-------

`FileTransfer` オブジェクトは HTTP マルチパート POST リクエストを使ってファイルをサーバーにアップロードする機能を提供します。このメソッドは HTTP と HTTPS の両方のプロトコルをサポートします。 upload メソッドに FileUploadOptions オブジェクトを渡すことで、任意のパラメーターを追加できます。アップロードが成功した場合 FileUploadResult オブジェクトとともに success コールバック関数が呼ばれます。エラーが発生した場合は FileTransferError オブジェクトとともに error コールバック関数が呼ばれます。
また、サーバーからファイルをダウンロードし保存することもできます (iOS と Android のみ) 。

サポートされているプラットフォーム
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 以上)
- iOS
- Windows Phone 7 (Mango)

upload
--------------

__パラメーター:__

- __filePath__ - デバイス内のファイルのフルパスを表します
- __server__ - ファイルを受け取るサーバーの URL を表します (encodeURI() を使用して既にエンコードされている必要があります)
- __successCallback__ - Metadata オブジェクトを伴って呼び出されるコールバック関数を表します _(Function)_
- __errorCallback__ - Metadata の取得時にエラーが起きた場合に呼び出されるコールバック関数を表します。 FileError オブジェクトを伴って呼び出されます _(Function)_
- __options__ - ファイル名や minetype などのオプションのパラメーターを表します

__使用例__

    // !! fileURI の値は有効なデバイス内の有効なテキストファイルの URI であるとみなします

    var win = function(r) {
        console.log("コード = " + r.responseCode);
        console.log("結果 = " + r.response);
        console.log("送信バイト数 = " + r.bytesSent);
    }

    var fail = function(error) {
        alert("エラーが発生しました: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
    }

    var options = new FileUploadOptions();
    options.fileKey="file";
    options.fileName=fileURI.substr(fileURI.lastIndexOf('/')+1);
    options.mimeType="text/plain";

    var params = new Object();
    params.value1 = "test";
    params.value2 = "param";

    options.params = params;

    var ft = new FileTransfer();
    ft.upload(fileURI, encodeURI("http://some.server.com/upload.php"), win, fail, options);

__詳細な使用例__

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>File Transfer の使用例</title>

        <script type="text/javascript" charset="utf-8" src="cordova-2.1.0.js"></script>
        <script type="text/javascript" charset="utf-8">

            // Cordova の読み込み完了まで待機
            //
            document.addEventListener("deviceready", onDeviceReady, false);

            // Cordova 準備完了
            //
            function onDeviceReady() {

                // 写真をファイル URI として取得する場合
                navigator.camera.getPicture(uploadPhoto,
                                            function(message) { alert('写真の取得に失敗しました'); },
                                            { quality: 50,
                                            destinationType: navigator.camera.DestinationType.FILE_URI,
                                            sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY }
                                            );

            }

            function uploadPhoto(imageURI) {
                var options = new FileUploadOptions();
                options.fileKey="file";
                options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
                options.mimeType="image/jpeg";

                var params = new Object();
                params.value1 = "test";
                params.value2 = "param";

                options.params = params;

                var ft = new FileTransfer();
                ft.upload(imageURI, encodeURI("http://some.server.com/upload.php"), win, fail, options);
            }

            function win(r) {
                console.log("コード = " + r.responseCode);
                console.log("結果 = " + r.response);
                console.log("送信バイト数 = " + r.bytesSent);
            }

            function fail(error) {
                alert("エラーが発生しました: Code = " + error.code);
                console.log("upload error source " + error.source);
                console.log("upload error target " + error.target);
            }

         </script>
       </head>
       <body>
         <h1>使用例</h1>
         <p>ファイルアップロード</p>
       </body>
    </html>

iOS に関する注意点
----------

FileTransfer アップロードのためのヘッダーを設定:

__使用例__

    function win(r) {
        console.log("コード = " + r.responseCode);
        console.log("結果 = " + r.response);
        console.log("送信バイト数 = " + r.bytesSent);
    }

    function fail(error) {
        alert("エラーが発生しました: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
    }

    var uri = encodeURI("http://some.server.com/upload.php");

    var options = new FileUploadOptions();
    options.fileKey="file";
    options.fileName=fileURI.substr(fileURI.lastIndexOf('/')+1);
    options.mimeType="text/plain";

    var params = new Object();
    params.headers={'headerParam':'headerValue'};

    options.params = params;

    var ft = new FileTransfer();
    ft.upload(fileURI, uri, win, fail, options);

download
--------------

__パラメーター:__

- __source__ - ファイルを取得するサーバーの URL を表します (encodeURI() を使用して既にエンコードされている必要があります)
- __target__ - デバイス内のファイルのフルパスを表します
- __successCallback__ - FileEntry オブジェクトを伴って呼び出されるコールバック関数を表します _(Function)_
- __errorCallback__ - Metadata の取得時にエラーが起きた場合に呼び出されるコールバック関数を表します。 FileError オブジェクトを伴って呼び出されます _(Function)_

__使用例__

    // !! url はサーバー内の有効なファイルを指すことと filePath がデバイス内の有効な値であるとみなします

    var fileTransfer = new FileTransfer();
    var uri = encodeURI("http://some.server.com/download.php");

    fileTransfer.download(
        url,
        filePath,
        function(entry) {
            console.log("ダウンロード完了: " + entry.fullPath);
        },
        function(error) {
            console.log("download error source " + error.source);
            console.log("download error target " + error.target);
            console.log("upload error code" + error.code);
        }
    );
