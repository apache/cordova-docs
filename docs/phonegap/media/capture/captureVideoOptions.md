CaptureVideoOptions
===================

> Encapsulates video capture configuration options.

Properties
----------

- __limit:__ The maximum number of video clips the device user can capture in a single capture operation.  The value must be greater than or equal to 1 (defaults to 1).
- __duration:__ The maximum duration of a video clip, in seconds.
- __mode:__ The selected video capture mode.  The value must match one of the elements in `capture.supportedVideoModes`.

Quick Example
-------------

    // limit capture operation to 3 video clips
    var options = { limit: 3 };

    navigator.device.capture.captureVideo(captureSuccess, captureError, options);

Android Quirks
--------------

- The __duration__ parameter is not supported.  Recording lengths cannot be limited programmatically.
- The __mode__ parameter is not supported.  The video size and format cannot be altered programmatically; however, these parameters can be changed by the device user. By default, videos are recorded in 3GPP (video/3gpp) format.


BlackBerry WebWorks Quirks
--------------------------

- The __duration__ parameter is not supported.  Recording lengths cannot be limited programmatically.
- The __mode__ parameter is not supported.  The video size and format cannot be altered programmatically; however, these parameters can be changed by the device user. By default, videos are recorded in 3GPP (video/3gpp) format.

iOS Quirks
----------

- The __limit__ parameter is not supported.  One video is recorded per invocation.
- The __duration__ parameter is not supported.  Recording lengths cannot be limited programmatically.
- The __mode__ parameter is not supported.  The video size and format cannot be altered programmatically. By default, videos are recorded in MOV (video/quicktime) format.

