Capture
=======

> Provides access to the audio, image, and video capture capabilities of the device.

Scope
-----

The __capture__ object is assigned to the __navigator.device__ object, and therefore has global scope.

    // The global capture object
    var capture = navigator.device.capture;

Properties
----------

- __supportedAudioModes:__ The audio recording formats supported by the device. (ConfigurationData[])
- __supportedImageModes:__ The recording image sizes and formats supported by the device. (ConfigurationData[])
- __supportedVideoModes:__ The recording video resolutions and formats supported by the device. (ConfigurationData[])

Methods
-------

- capture.captureAudio: Launch the device audio recording application for recording audio clip(s).
- capture.captureImage: Launch the device camera application for taking image(s).
- capture.captureVideo: Launch the device video recorder application for recording video(s).


Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
