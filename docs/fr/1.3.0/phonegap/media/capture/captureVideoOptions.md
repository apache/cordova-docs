CaptureVideoOptions
===================

> Regroupe un ensemble d'options de configuration pour la capture vidéo.

Propriétés
----------

- __limit:__ Le nombre maximum de clips vidéos que l'utilisateur peut enregistrer par opération.  La valeur doit être supérieure ou égale à 1 (vaut 1 par défaut).
- __duration:__ La durée maximale d'un clip vidéo, en secondes.
- __mode:__ Le mode de capture vidéo choisi.  La valeur doit être l'un des éléments de `capture.supportedVideoModes`.

Exemple rapide
--------------

    // Limiter l'opération à 3 fichiers
    var options = { limit: 3 };

    navigator.device.capture.captureVideo(captureSuccess, captureError, options);

Singularités Android
--------------------

- Le paramètre __duration__ n'est pas supporté.  La longueur d'enregistrement ne peut pas être limitée depuis le code de l'application.
- Le paramètre __mode__ n'est pas supporté.  La taille et le format d'enregistrement vidéo ne peuvent pas être changés depuis le code de l'application; en revanche, ces paramètres peuvent être modifiés par l'utilisateur du mobile. Par défaut, les vidéos sont enregistrées au format 3GPP (video/3gpp).


Singularités BlackBerry WebWorks
--------------------------------

- Le paramètre __duration__ n'est pas supporté.  La longueur d'enregistrement ne peut pas être limitée depuis le code de l'application.
- Le paramètre __mode__ n'est pas supporté.  La taille et le format d'enregistrement vidéo ne peuvent pas être changés depuis le code de l'application; en revanche, ces paramètres peuvent être modifiés par l'utilisateur du mobile. Par défaut, les vidéos sont enregistrées au format 3GPP (video/3gpp).

Singularités iOS
----------------

- Le paramètre __limit__ n'est pas supporté. Un seul clip vidéo peut être enregistré par appel.
- Le paramètre __duration__ n'est pas supporté.  La longueur d'enregistrement ne peut pas être limitée depuis le code de l'application.
- Le paramètre __mode__ n'est pas supporté.  La taille et le format d'enregistrement vidéo ne peuvent pas être changés depuis le code de l'application. Par défaut, les vidéos sont enregistrées au format MOV (video/quicktime).

