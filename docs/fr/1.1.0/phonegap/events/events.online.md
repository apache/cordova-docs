online
======

Cet évènement est déclenché lorsque l'application PhoneGap est online (connectée à internet).

    document.addEventListener("online", yourCallbackFunction, false);

Détails
-------

Lorsque la connexion réseau de l'application change d'état et devient disponible, l'évènement 'online' est déclenché.

Généralement, il vous faudra ajouter un écouteur d'évènement via `document.addEventListener` après réception de l'évènement PhoneGap 'deviceready'.

Plateformes supportées
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 ou plus récent)
- iOS

Exemple rapide
--------------

    document.addEventListener("online", onOnline, false);

    function onOnline() {
        // Gérer l'évènement online
    }

Exemple complet
---------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Exemple évènement online PhoneGap</title>

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
		    document.addEventListener("online", onOnline, false);
        }

        // Gérer l'évènement online
        //
        function onOnline() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>

Singularités iOS
----------------
Lors du démarrage initial, le premier événement online (si applicable) prend au moins une seconde à être déclenché.
