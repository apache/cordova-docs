CaptureAudioOptions
===================

> Regroupe un ensemble d'options de configuration pour la capture audio.

Propriétés
----------

- __limit:__ Le nombre maximum de clips audio que l'utilisateur peut enregistrer par opération.  La valeur doit être supérieure ou égale à 1 (vaut 1 par défaut).
- __duration:__ La durée maximale d'un clip audio, en secondes.
- __mode:__ Le mode de capture audio choisi.  La valeur doit être l'un des éléments de `capture.supportedAudioModes`.

Exemple rapide
--------------

    // Limiter l'opération à 3 fichiers, de 10 secondes maximum chacun
    var options = { limit: 3, duration: 10 };

    navigator.device.capture.captureAudio(captureSuccess, captureError, options);

Singularités Android
--------------------

- Le paramètre __duration__ n'est pas supporté.  La longueur d'enregistrement ne peut pas être limitée depuis le code de l'application.
- Le paramètre __mode__ n'est pas supporté.  Le format d'enregistrement audio ne peut pas être changé depuis le code de l'application.  Les clips sont encodés au format Adaptive Multi-Rate (AMR), leur MIME type est donc audio/amr.

Singularités BlackBerry WebWorks
--------------------------------

- Le paramètre __duration__ n'est pas supporté.  La longueur d'enregistrement ne peut pas être limitée depuis le code de l'application.
- Le paramètre __mode__ n'est pas supporté.  Le format d'enregistrement audio ne peut pas être changé depuis le code de l'application.  Les clips sont encodés au format Adaptive Multi-Rate (AMR), leur MIME type est donc audio/amr.

Singularités iOS
----------------

- Le paramètre __limit__ n'est pas supporté. Un seul clip audio peut être enregistré par appel.
- Le paramètre __mode__ n'est pas supporté.  Le format d'enregistrement audio ne peut pas être changé depuis le code de l'application.  Les clips sont encodés au format Waveform Audio (WAV), leur MIME type est donc audio/wav.
