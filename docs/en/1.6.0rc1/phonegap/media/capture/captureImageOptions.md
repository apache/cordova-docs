CaptureImageOptions
===================

> Encapsulates image capture configuration options.

Properties
----------

- __limit:__ The maximum number of images the device user can capture in a single capture operation.  The value must be greater than or equal to 1 (defaults to 1).
- __mode:__ The selected image mode.  The value must match one of the elements in `capture.supportedImageModes`.

Quick Example
-------------

    // limit capture operation to 3 images
    var options = { limit: 3 };

    navigator.device.capture.captureImage(captureSuccess, captureError, options);

Android Quirks
--------------

- The __mode__ parameter is not supported.  The image size and format cannot be altered programmatically; however, the image size can be altered by the device user.  Images are saved in JPEG format (image/jpeg).

BlackBerry WebWorks Quirks
--------------------------

- The __mode__ parameter is not supported.  The image size and format cannot be altered programmatically; however, the image size can be altered by the device user.  Images are saved in JPEG format (image/jpeg).

iOS Quirks
----------

- The __limit__ parameter is not supported. One image is taken per invocation.
- The __mode__ parameter is not supported.  The image size and format cannot be altered programmatically.  Images are saved in JPEG format (image/jpeg).
