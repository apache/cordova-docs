CaptureCB
=========

> Invoked upon a successful media capture operation.

    function captureSuccess( MediaFile[] mediaFiles ) { ... };

Description
-----------

This function is invoked after a successful capture operation has completed.  This means a media file has been captured, and either the user has exited the media capture application, or the capture limit has been reached.

Each MediaFile object describes a captured media file.  

Quick Example
-------------

    // capture callback
    function captureSuccess(mediaFiles) {
        var i, path, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            path = mediaFiles[i].fullPath;
            // do something interesting with the file
        }
    };
