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

# 文件传输

`FileTransfer`对象允许你上传或下载文件，服务器和客户端。

## 属性

*   **onprogress**： 使用调用 `ProgressEvent` 每当一块新的数据传输。*（函数）*

## 方法

*   **上传**： 将文件发送到服务器。

*   **下载**： 从服务器上下载文件。

*   **中止**: 中止正在进行转让。

## 详细信息

`FileTransfer`对象提供一种方法将文件上载到远程服务器使用多部分的 HTTP POST 请求。 支持 HTTP 和 HTTPS 协议。 可以通过指定可选参数 `FileUploadOptions` 对象的 `upload()` 方法。 上传成功， `FileUploadResult` 对象传递给成功回调。 如果发生错误， `FileTransferError` 对象传递到错误回调。 它也是可能的 （只在 iOS 和 Android） 从远程服务器下载文件并将其保存在设备上。

## 支持的平台

*   Android 系统
*   黑莓手机 WebWorks （OS 5.0 和更高）
*   iOS
*   Windows Phone 7 和 8
*   Windows 8

## 上传

**参数：**

*   **文件路径**: 设备上的文件的完整路径。

*   **服务器**： 服务器以接收该文件，由编码的 URL`encodeURI()`.

*   **successCallback**： 传递一个回调 `Metadata` 对象。*（函数）*

*   **errorCallback**： 回调的执行如果出现检索错误 `Metadata` 。调用与 `FileTransferError` 对象。*（函数）*

*   **选项**： 文件名称和 mimetype 等可选参数。

*   **trustAllHosts**: 可选参数，默认值为 `false` 。 如果设置为 `true` ，它可以接受的所有安全证书。 由于 Android 拒绝自行签署式安全证书，这非常有用。 不建议供生产使用。 在 Android 和 iOS 上受支持。 *(布尔值)*

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
    

**完整的示例**

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
    

**设置上传标头**

在 Android 和 iOS 上受支持

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
    

**Android 的怪癖**

设置 `chunkedMode` 选项 `false` ，防止将上载到 Nginx 服务器的问题。

## 下载

**参数：**

*   **来源**： 要下载的文件，如由编码的服务器的 URL`encodeURI()`.

*   **目标**： 在设备上的文件的完整路径。

*   **successCallback**： 传递一个回调 `FileEntry` 对象。*（函数）*

*   **errorCallback**： 如果错误发生在检索时将执行的回调 `Metadata` 。调用与 `FileTransferError` 对象。*（函数）*

*   **trustAllHosts**: 可选参数，默认值为 `false` 。 如果设置为 `true` 然后它将接受所有安全证书。 随着 Android 拒绝自我签署的安全证书，这非常有用。 不建议供生产使用。 在 Android 和 iOS 上受支持。 *(布尔值)*

*   **选项**： 可选参数，目前只支持标题 （如授权 （基本身份验证） 等）。

**快速的示例**

    // !! 假定文件路径是设备 var 文件传输的有效路径 = 新 FileTransfer() ；var uri = encodeURI ("http://some.server.com/download.php"） ；fileTransfer.download (uri，文件路径，function(entry) {console.log ("下载完成："+ entry.fullPath） ；}，function(error) {console.log ("下载错误源"+ error.source) ；console.log ("下载错误目标"+ error.target) ；console.log ("上传错误代码"+ error.code) ；}，false，{标题： {"授权书"："基本 dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA = ="}}) ；
    

## 中止

中止正在进行转让。Onerror 回调传递的错误代码为 FileTransferError.ABORT_ERR 的 FileTransferError 对象。

**支持的平台**

*   Android 系统
*   iOS

**快速的示例**

    // !! 假定变量 fileURI 包含有效的 URI 到一个文本文件中，对设备无功赢 = function(r) {console.log ("不应调用。");}var 失败 = function(error) {/ / error.code = = FileTransferError.ABORT_ERR 警报 ("发生了一个错误： 代码 ="+ error.code） ；console.log （"上传错误源"+ error.source） ；console.log ("上传错误目标"+ error.target);}var 选项 = 新 FileUploadOptions() ；options.fileKey="file"；options.fileName="myphoto.jpg"；options.mimeType="image/jpeg"；var ft = 新 FileTransfer() ；ft.upload （fileURI、 encodeURI ("http://some.server.com/upload.php"）、 赢、 失败、 选项） ；ft.abort() ；
    

## onprogress

每当新的数据区块转移与 ProgressEvent 调用。

**支持的平台**

*   Android 系统
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
    

**怪癖**-在这两个一个 iOS，Android 上 lengthComputable 是 `false` 使用 gzip 已编码的下载。