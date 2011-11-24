geolocation.getCurrentPosition
==============================

Retourne la position courante du mobile dans un objet `Position`.

    navigator.geolocation.getCurrentPosition(geolocationSuccess, 
                                             [geolocationError], 
                                             [geolocationOptions]);

Paramètres
----------

- __geolocationSuccess__: Une fonction de callback en cas de succès, reçoit en paramètre la position courante.
- __geolocationError__: (Optionnel) La fonction de callback appelée lorsqu'une erreur survient.
- __geolocationOptions__: (Optionnel) Les options de récupération de la géolocalisation.

Description
-----------

La fonction `geolocation.getCurrentPositon` est asynchrone. Elle retourne la position courante du mobile à la fonction de callback `geolocationSuccess` avec en paramètre un objet `Position`.  Si une erreur survient, la fonction de callback `geolocationError` est appelée avec en paramètre un object `PositionError`.


Plateformes supportées
-------------------

- Android
- BlackBerry (OS 4.6)
- BlackBerry WebWorks (OS 5.0 ou plus récent)
- iPhone
- Windows Phone 7 ( Mango )
    
Exemple rapide
--------------

    // Fonction de callback onSuccess
    //   Cette fonction reçoit en paramètre un objet `Position` qui contient
    //   les coordonées GPS courantes
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
