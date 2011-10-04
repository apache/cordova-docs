CaptureAudioOptions
===================

> Encapsula opciones personalizables para la captura de audio.

Atributos
---------

- __limit:__ El numero máximo de clips de audio que el dispositivo puede grabar en la misma operación. Debe ser mayor o igual a 1 (Por defecto: 1).
- __duration:__ La duración máxima de un clip de audio, en segundos.
- __mode:__ El modo de audio seleccionado. Este valor debe coincidir con uno de los elementos en `capture.supportedAudioModes`.

Ejemplo Rápido
--------------

    // Limita la operación de captura a 3 ficheros de audio, de no mas de 10 segundos cada uno
    var options = { limit: 3, duration: 10 };

    navigator.device.capture.captureAudio(captureSuccess, captureError, options);

Peculiaridades Android
----------------------

- El argumento __duration__ no esta soportado. La duración de la grabación no puede limitarse programaticamente.
- El argumento __mode__ no esta soportado. El formato de grabación de audio no puede ser controlado programaticamente.  Las grabaciones son codificadas usando el formato 'Adaptive Multi-Rate' (AMR) (audio/amr).

Peculiaridades BlackBerry WebWorks
----------------------------------

- El argumento __duration__ no esta soportado. La duración de la grabación no puede limitarse programaticamente.
- El argumento __mode__ no esta soportado. El formato de grabación de audio no puede ser controlado programaticamente.  Las grabaciones son codificadas usando el formato 'Adaptive Multi-Rate' (AMR) (audio/amr).

Peculiaridades iOS
------------------

- El argumento __limit__ no esta soportado. Solo se puede grabar un clip de audio por cada operación.
- El argumento __mode__ no esta soportado. El formato de grabación de audio no puede ser controlado programaticamente. El formato de grabación de audio no puede ser alterado programaticamente.  Las grabaciones son codificadas usando el formato 'Waveform Audio' (WAV) (audio/wav).
