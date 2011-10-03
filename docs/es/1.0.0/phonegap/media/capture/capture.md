Capture
=======

> Proporciona acceso a las capacidades de captura de audio, imagen, y vídeo del dispositivo.

Objetos
--------

- Capture
- CaptureAudioOptions
- CaptureImageOptions
- CaptureVideoOptions
- CaptureCB
- CaptureErrorCB
- ConfigurationData
- MediaFile
- MediaFileData

Métodos
-------

- capture.captureAudio
- capture.captureImage
- capture.captureVideo
- MediaFile.getFormatData

Ámbito de la variable
---------------------

El objeto __capture__ es asignado al objeto __navigator.device__, y por lo tanto, tiene una visibilidad global.
    
    // El objeto global `capture`
    var capture = navigator.device.capture;

Atributos
---------

- __supportedAudioModes:__ Lo formatos de grabación de audio soportados en el dispositivo. (ConfigurationData[])
- __supportedImageModes:__ Las resoluciones de imágenes y formatos soportados en el dispositivo. (ConfigurationData[])
- __supportedVideoModes:__ Las resoluciones de vídeo y formatos soportados por el dispositivo. (ConfigurationData[])

Métodos
-------

- capture.captureAudio: Inicia la aplicación del dispositivo para grabar clips de audio.
- capture.captureImage: Inicia la aplicación del dispositivo para tomar imágenes.
- capture.captureVideo: Inicia la aplicación del dispositivo para grabar vídeos.


Plataformas Soportadas
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 y superior)
- iOS
