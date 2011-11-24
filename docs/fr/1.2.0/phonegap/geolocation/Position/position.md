Position
========

Un objet `Position` contient les coordonnées retournées par l'API de géolocalisation.

Propriétés
----------

- __coords:__ Un ensemble de coordonnées géographiques. _(Coordinates)_
- __timestamp:__ Date de création de `coords` en millisecondes. _(DOMTimeStamp)_

Description
-----------

L'objet `Position` est créé et rempli par PhoneGap, puis renvoyé à l'utilisateur comme argument de la fonction de callback.

Plateformes supportées
----------------------

- Android
- BlackBerry (OS 4.6)
- BlackBerry WebWorks (OS 5.0 ou plus récent)
- iPhone
- Windows Phone 7 ( Mango )

Exemple rapide
--------------

    // Fonction de callback onSuccess, reçoit un objet Position
    //
    var onSuccess = function(position) {
        alert('Latitude : '                + position.coords.latitude          + '\n' +
              'Longitude : '               + position.coords.longitude         + '\n' +
              'Altitude : '                + position.coords.altitude          + '\n' +
              'Précision : '               + position.coords.accuracy          + '\n' +
              'Précision de l'altitude : ' + position.coords.altitudeAccuracy  + '\n' +
              'Direction : '               + position.coords.heading           + '\n' +
              'Vitesse : '                 + position.coords.speed             + '\n' +
              'Date : '                    + new Date(position.timestamp)      + '\n');
    };

    // Fonction de callback onError, reçoit un objet PositionError
    //
    function onError(error) {
        alert('code : '    + error.code    + '\n' +
              'message : ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);

Exemple complet
---------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Exemple Geolocation</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Attendre que PhoneGap soit prêt
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap est prêt
        //
        function onDeviceReady() {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }
    
        // Fonction de callback onSuccess, reçoit un objet Position
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
        
            element.innerHTML = 'Latitude : '                + position.coords.latitude          + '<br/>' +
                                'Longitude : '               + position.coords.longitude         + '<br/>' +
                                'Altitude : '                + position.coords.altitude          + '<br/>' +
                                'Précision : '               + position.coords.accuracy          + '<br/>' +
                                'Précision de l'altitude : ' + position.coords.altitudeAccuracy  + '<br/>' +
                                'Direction : '               + position.coords.heading           + '<br/>' +
                                'Vitesse : '                 + position.coords.speed             + '<br/>';
        }
    
	    // Fonction de callback onError, reçoit un objet PositionError
	    //
	    function onError(error) {
	        alert('code : '    + error.code    + '\n' +
	              'message : ' + error.message + '\n');
	    }

        </script>
      </head>
      <body>
        <p id="geolocation">Recherche de géolocalisation...</p>
      </body>
    </html>

Singularités iPhone
-------------------

- __timestamp:__ Défini en secondes au lieu de millisecondes.

Un contournement consiste à convertir manuellement le timestamp en millisecondes (x 1000) :

        var onSuccess = function(position) {
            alert('Latitude : '  + position.coords.latitude             + '\n' +
                  'Longitude : ' + position.coords.longitude            + '\n' +
                  'Date : '      + new Date(position.timestamp * 1000)  + '\n');
        };