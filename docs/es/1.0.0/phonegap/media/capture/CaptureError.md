CaptureError
============

> Encapsula el código de error resultante de una operación fallida.

Atributos
---------

- __code:__ Uno de los errores predefinidos en la lista inferior.

Constantes
----------

- CaptureError.`CAPTURE_INTERNAL_ERR`: La cámara o el micrófono fallo al capturar la imagen o el sonido. 
- CaptureError.`CAPTURE_APPLICATION_BUSY`: La aplicación de cámara o de captura de audio esta siendo usada.
- CaptureError.`CAPTURE_INVALID_ARGUMENT`: Uso invalido de la API (ejem. el parámetro __limit__ es menor que 1).
- CaptureError.`CAPTURE_NO_MEDIA_FILES`: El usuario cerro la aplicación de cámara o la de captura de audio antes de haber capturado nada.
- CaptureError.`CAPTURE_NOT_SUPPORTED`: La operación de captura solicitada no esta soportada.
