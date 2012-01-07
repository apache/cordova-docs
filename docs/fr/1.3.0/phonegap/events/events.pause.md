pause
=====

Cet évènement est déclenché lorsque l'application PhoneGap bascule en arrière-plan.

    document.addEventListener("pause", yourCallbackFunction, false);

Détails
-------

Le code de PhoneGap est composé de deux parties : la partie native et JavaScript. Lorsque la partie native fait basculer l'application en arrière-plan, côté Javascript l'évènement 'pause' est déclenché.  

Généralement, il vous faudra ajouter un écouteur d'évènement via `document.addEventListener` après réception de l'évènement PhoneGap 'deviceready'.

Plateformes supportées
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 ou plus récent)
- iOS

Exemple rapide
--------------

    document.addEventListener("pause", onPause, false);

    function onPause() {
        // Gérer l'évènement pause
    }

Exemple complet
---------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Exemple évènement pause PhoneGap</title>

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
		    document.addEventListener("pause", onPause, false);
        }

        // Gérer l'évènement pause
        //
        function onPause() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>

Singularités iOS
----------------
Depuis la fonction associée à l'évènement 'pause', toute fonction faisant appel à du code Objective-C ne marchera pas, et tout appel de type interactif, tel que les alertes, non plus. Cela signifie que vous ne pouvez faire appel ni à console.log (et ses variantes), ni aux plugins, ni aux API PhoneGap. Ces instructions seront exécutées lorsque l'application reprendra la main (lors du cycle d'exécution suivant).
