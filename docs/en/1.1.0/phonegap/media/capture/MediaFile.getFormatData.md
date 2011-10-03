MediaFile.getFormatData
=======================

> Retrieves format information about the media capture file.

    mediaFile.getFormatData( 
        MediaFileDataSuccessCB successCallback, 
        [MediaFileDataErrorCB errorCallback]
    );

Description
-----------

This function asynchronously attempts to retrieve the format information for the media file.  If successful, it invokes the MediaFileDataSuccessCB callback with a MediaFileData object.  If the attempt fails, this function will invoke the MediaFileDataErrorCB callback.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 7 ( Mango )

BlackBerry WebWorks Quirks
--------------------------
There is no API that provides format information of media files.  Therefore, all MediaFileData objects will be returned with default values.  See MediaFileData documentation.

Android Quirks
--------------
The API for retrieving media file format information is limited.  Therefore, not all MediaFileData properties are supported.  See MediaFileData documentation.

iOS Quirks
----------
The API for retrieving media file format information is limited.  Therefore, not all MediaFileData properties are supported.  See MediaFileData documentation.