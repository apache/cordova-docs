CaptureError
============

> Encapsulates the error code resulting from a failed media capture operation.

Properties
----------

- __code:__ One of the pre-defined error codes listed below.

Constants
---------

- CaptureError.`CAPTURE_INTERNAL_ERR`: Camera or microphone failed to capture image or sound. 
- CaptureError.`CAPTURE_APPLICATION_BUSY`: Camera application or audio capture application is currently serving other capture request.
- CaptureError.`CAPTURE_INVALID_ARGUMENT`: Invalid use of the API (e.g. limit parameter has value less than one).
- CaptureError.`CAPTURE_NO_MEDIA_FILES`: User exited camera application or audio capture application before capturing anything.
- CaptureError.`CAPTURE_NOT_SUPPORTED`: The requested capture operation is not supported.
