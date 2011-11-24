offline
=======

Cet évènement est déclenché lorsque l'application PhoneGap est offline (déconnectée d'internet).

    document.addEventListener("offline", yourCallbackFunction, false);

Détails
-------

Lorsque la connexion réseau de l'application change d'état et devient indisponible, l'évènement 'offline' est déclenché.

Généralement, il vous faudra ajouter un écouteur d'évènement via `document.addEventListener` après réception de l'évènement PhoneGap 'deviceready'.

Plateformes supportées
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 ou plus récent)
- iOS

Exemple rapide
--------------

    document.addEventListener("offline", onOffline, false);

    function onOffline() {
        // Gérer l'évènement offline
    }

Exemple complet
---------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Exemple évènement offline PhoneGap</title>

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
		    document.addEventListener("offline", onOffline, false);
        }

        // Gérer l'évènement offline
        //
        function onOffline() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>

Singularités iOS
----------------
Lors du démarrage initial, le premier événement offline (si applicable) prend au moins une seconde à être déclenché.
