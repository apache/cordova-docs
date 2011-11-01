FileUploadOptions
========

A `FileUploadOptions` object can be passed to the FileTransfer objects upload method in order to specify additional parameters to the upload script.

Properties
----------

- __fileKey:__ The name of the form element.  If not set defaults to "file". (DOMString)
- __fileName:__ The file name you want the file to be saved as on the server.  If not set defaults to "image.jpg". (DOMString)
- __mimeType:__ The mime type of the data you are uploading.  If not set defaults to "image/jpeg". (DOMString)
- __params:__ A set of optional key/value pairs to be passed along in the HTTP request. (Object)
- __chunkedMode:__ Should the data be uploaded in chunked streaming mode. If not set defaults to "true". (Boolean)


Description
-----------

A `FileUploadOptions` object can be passed to the FileTransfer objects upload method in order to specify additional parameters to the upload script.
