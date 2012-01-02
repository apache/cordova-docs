FileTransfer
==========

FileTransfer is an object that allows you to upload files to a server.

Properties
----------

N/A

Methods
-------

- __upload__: sends a file to a server. 

Details
-------

The `FileTransfer` object provides a way to upload files to a remote server using an HTTP multi-part POST request.  Both HTTP and HTTPS protocols are supported.  Optional parameters can be specified by passing a FileUploadOptions object to the upload method.  On successful upload, the success callback will be called with a FileUploadResult object.  If an error occurs, the error callback will be invoked with a FileTransferError object.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 ( Mango )

Quick Example
------------------------------
	
	// !! Assumes variable fileURI contains a valid URI to a  text file on the device
	
  	var win = function(r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);
	}
	
    var fail = function(error) {
        alert("An error has occurred: Code = " = error.code);
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
    ft.upload(fileURI, "http://some.server.com/upload.php", win, fail, options);
    
Full Example
------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
    <html>
    <head>
        <title>File Transfer Example</title>
    
        <script type="text/javascript" charset="utf-8" src="phonegap.0.9.4.min.js"></script>
        <script type="text/javascript" charset="utf-8">
            
            // Wait for PhoneGap to load
            //
            document.addEventListener("deviceready", onDeviceReady, false);
            
            // PhoneGap is ready
            //
            function onDeviceReady() {
                
                // Retrieve image file location from specified source
                navigator.camera.getPicture(uploadPhoto,
                                            function(message) { alert('get picture failed'); },
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
                ft.upload(imageURI, "http://some.server.com/upload.php", win, fail, options);
            }
            
            function win(r) {
                console.log("Code = " + r.responseCode);
                console.log("Response = " + r.response);
                console.log("Sent = " + r.bytesSent);
            }
            
            function fail(error) {
                alert("An error has occurred: Code = " = error.code);
            }
            
            </script>
    </head>
    <body>
        <h1>Example</h1>
        <p>Upload File</p>
    </body>
    </html>

download
--------------

__Parameters:__

- __source__ - URL of the server to receive the file
- __target__ - Full path of the file on the device
- __successCallback__ - A callback that is called with a FileEntry object. _(Function)_
- __errorCallback__ - A callback that is called if an error occurs retrieving the Metadata. Invoked with a FileError object. _(Function)_

__Quick Example__

     // !! Assumes variable url contains a valid URI to a file on a server and filePath is a valid path on the device

    var fileTransfer = new FileTransfer();
    
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
