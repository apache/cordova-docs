Coordinates
===========

Ensemble de propriétés décrivant les coordonnées géographiques d'une position.

Propriétés
----------

* __latitude__: Latitude en degrés décimaux. _(Number)_
* __longitude__: Longitude en degrés décimaux. _(Number)_
* __altitude__: Hauteur en mètres de la position par rapport à l'[ellipsoïde](http://earth-info.nga.mil/GandG/publications/tr8350.2/wgs84fin.pdf). _(Number)_
* __accuracy__: Niveau de précision de la latitude et de la longitude en mètres. _(Number)_
* __altitudeAccuracy__: Niveau de précision de l'altitude en mètres. _(Number)_
* __heading__: Direction du déplacement, défini en degrés par rapport au Nord géographique et dans le sens des aiguilles d'une montre. _(Number)_
* __speed__: Vitesse au sol du mobile, définie en mètres par seconde. _(Number)_

Description
-----------

L'objet `Coordinates` est créé et rempli par PhoneGap, puis inséré dans l'objet `Position`. L'objet `Position` est ensuite renvoyé à l'utilisateur comme argument de la fonction de callback.

Plateformes supportées
----------------------

- Android
- BlackBerry (OS 4.6)
- BlackBerry WebWorks (OS 5.0 ou plus récent)
- iPhone
- Windows Phone 7 ( Mango )

Exemple rapide
--------------

    // Fonction de callback de succès
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

    // Fonction de callback d'erreur
    //
    var onError = function() {
        alert('onError!');
    };

    navigator.geolocation.getCurrentPosition(onSuccess, onError);

Exemple complet
---------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Exemple Coordinates</title>
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
    
        // Afficher les propriétés de `Position` de géolocalisation
        //
        function onSuccess(position) {
            var div = document.getElementById('myDiv');
        
            div.innerHTML = 'Latitude : '                + position.coords.latitude          + '<br/>' +
                            'Longitude : '               + position.coords.longitude         + '<br/>' +
                            'Altitude : '                + position.coords.altitude          + '<br/>' +
                            'Précision : '               + position.coords.accuracy          + '<br/>' +
                            'Précision de l'altitude : ' + position.coords.altitudeAccuracy  + '<br/>' +
                            'Direction : '               + position.coords.heading           + '<br/>' +
                            'Vitesse : '                 + position.coords.speed             + '<br/>';
        }
    
        // Afficher une alerte s'il y a une problème pendant la récupération de la géolocalisation
        //
        function onError() {
            alert('onError!');
        }

        </script>
      </head>
      <body>
        <div id="myDiv"></div>
      </body>
    </html>
    
Singularités Android
--------------------

__altitudeAccuracy:__ Cette propriété n'est pas supportée sur Android et vaudra toujours `null`.
