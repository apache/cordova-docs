CaptureErrorCB
==============

> Invoked if an error occurs during a media capture operation.

    function captureError( CaptureError error ) { ... };

Description
-----------

This function is invoked if an error occurs when trying to launch a media capture operation and the capture application is busy, if an error occurs while the capture operation is taking place, or if the capture operation has been canceled by the user before any media files have been captured.

This function is invoked with a CaptureError object containing an appropriate error code.

Quick Example
-------------

    // capture error callback
    var captureError = function(error) {
        navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    };
