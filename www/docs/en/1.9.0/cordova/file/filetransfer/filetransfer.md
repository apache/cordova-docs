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

<a href="../fileobj/fileobj.html">File</a>Transfer
==========

<a href="../fileobj/fileobj.html">File</a>Transfer is an object that allows you to upload files to a server or download files from a server.

Properties
----------

N/A

Methods
-------

- __upload__: sends a file to a server. 
- __download__: downloads a file from server.

Details
-------

The `<a href="../fileobj/fileobj.html">File</a>Transfer` object provides a way to upload files to a remote server using an HTTP multi-part POST request.  Both HTTP and HTTPS protocols are supported.  Optional parameters can be specified by passing a <a href="../fileuploadoptions/fileuploadoptions.html"><a href="../fileobj/fileobj.html">File</a>UploadOptions</a> object to the upload method.  On successful upload, the success callback will be called with a <a href="../fileuploadresult/fileuploadresult.html"><a href="../fileobj/fileobj.html">File</a>UploadResult</a> object.  If an error occurs, the error callback will be invoked with a <a href="../filetransfererror/filetransfererror.html"><a href="../fileobj/fileobj.html">File</a>TransferError</a> object.
It is also possible to download a file from remote and save it on the device (only iOS and Android).

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 ( Mango )

upload
--------------

__Parameters:__

- __filePath__ - Full path of the file on the device
- __server__ - URL of the server to receive the file
- __successCallback__ - A callback that is called with a <a href="../metadata/metadata.html">Metadata</a> object. _(Function)_
- __errorCallback__ - A callback that is called if an error occurs retrieving the <a href="../metadata/metadata.html">Metadata</a>. Invoked with a <a href="../filetransfererror/filetransfererror.html"><a href="../fileobj/fileobj.html">File</a>TransferError</a> object. _(Function)_
- __options__ - Optional parameters such as file name and mimetype

__Quick <a href="../../storage/storage.opendatabase.html">Example</a>__
	
    // !! Assumes variable fileURI contains a valid URI to a  text file on the device
	
  	var win = function(r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);
	}
	
    var fail = function(error) {
        alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
    }
	
	var options = new <a href="../fileuploadoptions/fileuploadoptions.html"><a href="../fileobj/fileobj.html">File</a>UploadOptions</a>();
	options.fileKey="file";
	options.fileName=fileURI.substr(fileURI.lastIndexOf('/')+1);
	options.mimeType="text/plain";

    var params = new Object();
	params.value1 = "test";
	params.value2 = "param";
		
	options.params = params;
	
	var ft = new <a href="../fileobj/fileobj.html">File</a>Transfer();
    ft.upload(fileURI, "http://some.server.com/upload.php", win, fail, options);
    
__Full <a href="../../storage/storage.opendatabase.html">Example</a>__

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
    <html>
    <head>
        <title><a href="../fileobj/fileobj.html">File</a> Transfer <a href="../../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova-1.9.0.js"></script>
        <script type="text/javascript" charset="utf-8">
            
            // Wait for Cordova to load
            //
            document.addEventListener("<a href="../../events/events.deviceready.html">deviceready</a>", on<a href="../../device/device.html">Device</a>Ready, false);
            
            // Cordova is ready
            //
            function on<a href="../../device/device.html">Device</a>Ready() {
                
                // Retrieve image file location from specified source
                navigator.<a href="../../camera/camera.getPicture.html">camera.getPicture</a>(uploadPhoto,
                                            function(message) { alert('get picture failed'); },
                                            { quality: 50, 
                                            destinationType: navigator.camera.DestinationType.FILE_URI,
                                            sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY }
                                            );
                
            }
            
            function uploadPhoto(imageURI) {
                var options = new <a href="../fileuploadoptions/fileuploadoptions.html"><a href="../fileobj/fileobj.html">File</a>UploadOptions</a>();
                options.fileKey="file";
                options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
                options.mimeType="image/jpeg";
                
                var params = new Object();
                params.value1 = "test";
                params.value2 = "param";
                
                options.params = params;
                
                var ft = new <a href="../fileobj/fileobj.html">File</a>Transfer();
                ft.upload(imageURI, "http://some.server.com/upload.php", win, fail, options);
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
        <p>Upload <a href="../fileobj/fileobj.html">File</a></p>
    </body>
    </html>
    
iOS Quirks
----------

Setting headers for <a href="../fileobj/fileobj.html">File</a>Transfer Upload:

__Quick <a href="../../storage/storage.opendatabase.html">Example</a>__

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
    
    var uri = "http://some.server.com/upload.php";
    
    var options = new <a href="../fileuploadoptions/fileuploadoptions.html"><a href="../fileobj/fileobj.html">File</a>UploadOptions</a>();
    options.fileKey="file";
    options.fileName=fileURI.substr(fileURI.lastIndexOf('/')+1);
    options.mimeType="text/plain";
        
    var params = new Object();
    params.headers={'headerParam':'headerValue'};
    
    options.params = params;
    
    var ft = new <a href="../fileobj/fileobj.html">File</a>Transfer();
    ft.upload(fileURI, uri, win, fail, options);    

download
--------------

__Parameters:__

- __source__ - URL of the server to receive the file
- __target__ - Full path of the file on the device
- __successCallback__ - A callback that is called with a <a href="../fileentry/fileentry.html"><a href="../fileobj/fileobj.html">File</a>Entry</a> object. _(Function)_
- __errorCallback__ - A callback that is called if an error occurs retrieving the <a href="../metadata/metadata.html">Metadata</a>. Invoked with a <a href="../filetransfererror/filetransfererror.html"><a href="../fileobj/fileobj.html">File</a>TransferError</a> object. _(Function)_

__Quick <a href="../../storage/storage.opendatabase.html">Example</a>__

     // !! Assumes variable url contains a valid URI to a file on a server and filePath is a valid path on the device

    var fileTransfer = new <a href="../fileobj/fileobj.html">File</a>Transfer();
    
    fileTransfer.download(
        url,
        filePath,
        function(entry) {
            console.log("download complete: " + entry.fullPath);
        },
        function(error) {
            console.log("download error source " + error.source);
            console.log("download error target " + error.target);
            console.log("upload error code" + error.code);
        }
    );