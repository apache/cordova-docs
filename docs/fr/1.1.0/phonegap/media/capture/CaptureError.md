CaptureError
============

> Contient le code d'erreur retourné en cas d'échec d'une opération de capture audio, image ou vidéo.

Propriétés
----------

- __code:__ Un des codes d'erreur prédéfinis ci-dessous.

Constantes
----------

- CaptureError.`CAPTURE_INTERNAL_ERR`: L'appareil photo ou le microphone n'ont pas réussi à capturer une image ou un son. 
- CaptureError.`CAPTURE_APPLICATION_BUSY`: L'application de capture est en cours d'utilisation par un autre processus.
- CaptureError.`CAPTURE_INVALID_ARGUMENT`: Usage illégal de l'API (par exemple si le paramètre limit est inférieur à 1).
- CaptureError.`CAPTURE_NO_MEDIA_FILES`: L'utilisateur a quitté l'application de capture avant qu'une seule capture n'ait eu lieu.
- CaptureError.`CAPTURE_NOT_SUPPORTED`: L'opération de capture demandée n'est pas supportée.
