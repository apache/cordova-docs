CaptureImageOptions
===================

> Encapsula opciones personalizables para la captura de imágenes.

Atributos
---------

- __limit:__ El numero máximo de imágenes que el usuario podrá tomar en la misma operación. Debe ser mayor o igual a 1 (Por defecto: 1).
- __mode:__ El modo de imagen seleccionado. Este valor debe coincidir con uno de los definidos en `capture.supportedImageModes`.

Ejemplo Rápido
--------------

    // limita la captura a 3 imágenes
    var options = { limit: 3 };

    navigator.device.capture.captureImage(captureSuccess, captureError, options);

Peculiaridades Android
----------------------

- El argumento __mode__ no esta soportado. La resolución de imagen y el formato no puede ser controlado programaticamente; en cambio, la resolución si puede ser cambiada por el usuario. Las imágenes son guardadas en formato JPEG (image/jpeg).

Peculiaridades BlackBerry WebWorks
----------------------------------

- El argumento __mode__ no esta soportado. La resolución de imagen y el formato no puede ser controlado programaticamente; en cambio, la resolución puede ser cambiada por el usuario. Las imágenes son guardadas en formato JPEG (image/jpeg).

Peculiaridades iOS
------------------

- El argumento __limit__ no esta soportado. Solo se tomara una imagen por llamada.
- El argumento __mode__ no esta soportado. La resolución de imagen y el formato no puede ser alterado programaticamente. Las imágenes son guardadas en formato JPEG (image/jpeg).
