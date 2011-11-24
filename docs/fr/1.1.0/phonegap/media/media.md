Media
=====

> L'objet `Media` offre la possibilité de lire et d'enregistrer des fichiers audio sur un mobile. 

    var media = new Media(src, mediaSuccess, [mediaError], [mediaStatus]);


Remarque : L'implémentation actuelle de n'est pas conforme à la spécification du W3C, et n'est fournie que pour des raisons pratiques.  Une prochaine implémentation sera conforme à la dernière spécification du W3C et pourrait rendre obsolète l'API courante.

Paramètres
----------

- __src__: L'URI d'un fichier audio. _(DOMString)_
- __mediaSuccess__: (Facultatif) La fonction de callback qui est appelée à l'issue d'une action de lecture/enregistrement ou arrêt réalisée sur l'objet Media. _(Function)_
- __mediaError__: (Facultatif) La fonction de callback qui est appelée en cas d'erreur. _(Function)_
- __mediaStatus__: (Facultatif) La fonction de callback qui est appelée lorsque qu'un changement d'état a lieu. _(Function)_

Méthodes
--------

- media.getCurrentPosition: Retourner la position courante dans le fichier audio.
- media.getDuration: Récupérer la durée du fichier audio.
- media.play: Démarrer ou reprendre la lecture du fichier audio.
- media.pause: Mettre en pause la lecture du fichier audio.
- media.release: Libérer la ressource audio dans le système d'exploitation.
- media.seekTo: Déplacer la position courante dans le fichier audio.
- media.startRecord: Démarrer l'enregistrement d'un fichier audio.
- media.stopRecord: Arrêter l'enregistrement du fichier audio.
- media.stop: Arrêter la lecture du fichier audio.

Autres paramètres en lecture seule
----------------------------------

- ___position__: La position dans le fichier audio, en secondes.  N'est pas mis à jour automatiquement pendant la lecture, il faut pour cela appeler getCurrentPosition.
- ___duration__: La durée en secondes du fichier audio.

Plateformes supportées
----------------------

- Android
- iOS
- Windows Phone 7 ( Mango )

