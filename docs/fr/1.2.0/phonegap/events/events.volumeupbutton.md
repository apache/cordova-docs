volumeupbutton
==============

Cet évènement est déclenché lorsque l'utilisateur appuie sur le bouton augmenter le volume.

    document.addEventListener("volumeupbutton", yourCallbackFunction, false);

Détails
-------

Si vous avez besoin de redéfinir le comportement par défaut du bouton d'augmentation de volume, il vous suffit d'associer une fonction à l'évènement 'volumeupbutton'.

Généralement, il vous faudra ajouter un écouteur d'évènement via `document.addEventListener` après réception de l'évènement PhoneGap 'deviceready'.

Plateformes supportées
----------------------

- BlackBerry WebWorks (OS 5.0 ou plus récent)

Exemple rapide
--------------

    document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);

    function onVolumeUpKeyDown() {
        // Gérer le bouton augmenter le volume
    }

Exemple complet
---------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Exemple évènement volumeupbutton PhoneGap</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Appeler onDeviceReady lorsque PhoneGap est prêt.
        //
        // Pour le moment, le document est chargé mais pas phonegap.js.
        // Lorsque PhoneGap sera chargé et capable de communiquer avec la partie native du mobile,
        // il déclenchera l'évènement `deviceready`.
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // PhoneGap est chargé et il est maintenant possible d'appeler des fonctions PhoneGap
        //
        function onDeviceReady() {
            // Ajout d'un écouteur d'évènement
            document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);
        }

        // Gérer le bouton augmenter le volume
        //
        function onVolumeUpKeyDown() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
