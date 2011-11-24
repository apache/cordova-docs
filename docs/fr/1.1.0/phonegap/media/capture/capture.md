Capture
=======

> Permet d'accéder aux fonctionnalités de capture audio, image, et vidéo du mobile.

Objects
-------

- Capture
- CaptureAudioOptions
- CaptureImageOptions
- CaptureVideoOptions
- CaptureCB
- CaptureErrorCB
- ConfigurationData
- MediaFile
- MediaFileData

Méthodes
--------

- capture.captureAudio
- capture.captureImage
- capture.captureVideo
- MediaFile.getFormatData

Portée de la variable
---------------------

L'objet __capture__ est attaché à l'objet __navigator.device__, il a donc une portée globale.

    // L'objet capture, à portée globale
    var capture = navigator.device.capture;

Propriétés
----------

- __supportedAudioModes:__ Les formats d'enregistrement audio supportés par le mobile. (ConfigurationData[])
- __supportedImageModes:__ Les tailles et formats d'enregistrement d'image supportés par le mobile. (ConfigurationData[])
- __supportedVideoModes:__ Les résolutions et formats d'enregistrement vidéo supportés par le mobile. (ConfigurationData[])

Méthodes
--------

- capture.captureAudio: Lancer l'application magnétophone du mobile afin d'enregistrer une ou des séquences audio.
- capture.captureImage: Lancer l'application appareil photo du mobile afin de prendre une ou des photos.
- capture.captureVideo: Lancer l'application caméscope du mobile afin d'enregistrer une ou des séquences vidéo.


Plateformes supportées
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 et plus récent)
- iOS
- Windows Phone 7 ( Mango )
