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

# <a href="../fileobj/fileobj.html">檔</a>案傳輸

`FileTransfer`物件允許你上傳或下載<a href="../fileobj/fileobj.html">檔</a>案，伺服器和用戶端。

## 屬性

*   **onprogress**： 使用調用 `ProgressEvent` 每當一塊新的資料傳輸。*（函數）*

## 方法

*   **上傳**： 將<a href="../fileobj/fileobj.html">檔</a>發送到伺服器。

*   **下載**： 從伺服器上下載<a href="../fileobj/fileobj.html">檔</a>案。

*   **中止**: 中止正在進行轉讓。

## 詳細資訊

`FileTransfer`物件提供一種方法將<a href="../fileobj/fileobj.html">檔</a>上載到遠端伺服器使用多部分的 HTTP POST 請求。 支援 HTTP 和 HTTPS 協定。 可以通過指定可選參數 `<a href="../fileuploadoptions/fileuploadoptions.html">FileUploadOptions</a>` 物件的 `upload()` 方法。 上傳成功， `<a href="../fileuploadresult/fileuploadresult.html">FileUploadResult</a>` 物件傳遞給成功回<a href="../fileobj/fileobj.html">檔</a>。 如果發生錯誤， `<a href="../filetransfererror/filetransfererror.html">FileTransferError</a>` 物件傳遞到錯誤回<a href="../fileobj/fileobj.html">檔</a>。 它也是可能的 （只在 iOS 和 Android） 從遠端伺服器下載<a href="../fileobj/fileobj.html">檔</a>案並將其保存在<a href="../../device/device.html">設備</a>上。

## 支援的平臺

*   Android 系統
*   黑莓手機 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8
*   Windows 8

## 上傳

**參數：**

*   **<a href="../fileobj/fileobj.html">檔</a>路徑**: <a href="../../device/device.html">設備</a>上的<a href="../fileobj/fileobj.html">檔</a>的完整路徑。

*   **伺服器**： 伺服器以接收該<a href="../fileobj/fileobj.html">檔</a>，由編碼的 URL`encodeURI()`.

*   **successCallback**： 傳遞一個回<a href="../fileobj/fileobj.html">檔</a> `Metadata` 物件。*（函數）*

*   **errorCallback**： 回<a href="../fileobj/fileobj.html">檔</a>的執行如果出現檢索錯誤 `Metadata` 。調用與 `<a href="../filetransfererror/filetransfererror.html">FileTransferError</a>` 物件。*（函數）*

*   **選項**： <a href="../fileobj/fileobj.html">檔</a>案名稱和 mimetype 等可選參數。

*   **trustAllHosts**: 可選參數，預設值為 `false` 。 如果設置為 `true` ，它可以接受的所有安全證書。 由於 Android 拒絕自行簽署式安全證書，這非常有用。 不建議供生產使用。 在 Android 和 iOS 上受支援。 *(布林值)*

**快速的示例**

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
    

**完整的示例**

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
    

**設置上傳標頭**

在 Android 和 iOS 上受支援

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
    

**Android 的怪癖**

設置 `chunkedMode` 選項 `false` ，防止將上載到 Nginx 伺服器的問題。

## 下載

**參數：**

*   **來源**： 要下載的<a href="../fileobj/fileobj.html">檔</a>，如由編碼的伺服器的 URL`encodeURI()`.

*   **目標**： 在<a href="../../device/device.html">設備</a>上的<a href="../fileobj/fileobj.html">檔</a>的完整路徑。

*   **successCallback**： 傳遞一個回<a href="../fileobj/fileobj.html">檔</a> `<a href="../fileentry/fileentry.html">FileEntry</a>` 物件。*（函數）*

*   **errorCallback**： 如果錯誤發生在檢索時將執行的回<a href="../fileobj/fileobj.html">檔</a> `Metadata` 。調用與 `<a href="../filetransfererror/filetransfererror.html">FileTransferError</a>` 物件。*（函數）*

*   **trustAllHosts**: 可選參數，預設值為 `false` 。 如果設置為 `true` 然後它將接受所有安全證書。 隨著 Android 拒絕自我簽署的安全證書，這非常有用。 不建議供生產使用。 在 Android 和 iOS 上受支援。 *(布林值)*

*   **選項**： 可選參數，目前只支援標題 （如授權 （基本驗證） 等）。

**快速的示例**

    // !! 假定<a href="../fileobj/fileobj.html">檔</a>路徑是<a href="../../device/device.html">設備</a> var <a href="../fileobj/fileobj.html">檔</a>案傳輸的有效路徑 = 新 FileTransfer() ；var uri = encodeURI ("HTTP://some.server.com/download.php"） ；fileTransfer.download (uri，<a href="../fileobj/fileobj.html">檔</a>路徑，function(entry) {console.log ("下載完成："+ entry.fullPath） ；}，function(error) {console.log ("下載錯誤源"+ error.source) ；console.log ("下載錯誤目標"+ error.target) ；console.log ("上傳錯誤代碼"+ error.code) ；}，false，{標題： {"授權書"："基本 dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA = ="}}) ；
    

## 中止

中止正在進行轉讓。Onerror 回<a href="../fileobj/fileobj.html">檔</a>傳遞的錯誤代碼為 <a href="../filetransfererror/filetransfererror.html">FileTransferError</a>.ABORT_ERR 的 <a href="../filetransfererror/filetransfererror.html">FileTransferError</a> 物件。

**支援的平臺**

*   Android 系統
*   iOS

**快速的示例**

    // !! 假定<a href="../../../plugin_ref/spec.html">變數</a> fileURI 包含有效的 URI 到一個文字<a href="../fileobj/fileobj.html">檔</a>中，對<a href="../../device/device.html">設備</a>無功贏 = function(r) {console.log ("不應調用。");}var 失敗 = function(error) {/ / error.code = = <a href="../filetransfererror/filetransfererror.html">FileTransferError</a>.ABORT_ERR 警報 ("發生了一個錯誤： 代碼 ="+ error.code） ；console.log （"上傳錯誤源"+ error.source） ；console.log ("上傳錯誤目標"+ error.target);}var 選項 = 新 <a href="../fileuploadoptions/fileuploadoptions.html">FileUploadOptions</a>() ；options.fileKey="file"；options.fileName="myphoto.jpg"；options.mimeType="image/jpeg"；var ft = 新 FileTransfer() ；ft.upload （fileURI、 encodeURI ("HTTP://some.server.com/upload.php"）、 贏、 失敗、 選項） ；ft.abort() ；
    

## onprogress

每當新的資料區塊轉移與 ProgressEvent 調用。

**支援的平臺**

*   Android 系統
*   iOS

**示例**

    fileTransfer.onprogress = function(progressEvent) {
        if (progressEvent.lengthComputable) {
          loadingStatus.setPercentage(progressEvent.loaded / progressEvent.total);
        } else {
          loadingStatus.increment();
        }
    };
    fileTransfer.download(...); // or fileTransfer.upload(...);
    

**怪癖**-在這兩個一個 iOS，Android 上 lengthComputable 是 `false` 使用 gzip 已編碼的下載。