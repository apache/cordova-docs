geolocationSuccess
==================

La fonction de callback appelée lorsqu'une position de géolocalisation a été trouvée.

    function(position) {
        // Faire quelque chose
    }

Paramètres
----------

- __position:__ La position de géolocalisation retournée par le mobile. (`Position`)

Exemple
-------

    function geolocationSuccess(position) {
        alert('Latitude : '                + position.coords.latitude          + '\n' +
              'Longitude : '               + position.coords.longitude         + '\n' +
              'Altitude : '                + position.coords.altitude          + '\n' +
              'Précision : '               + position.coords.accuracy          + '\n' +
              'Précision de l'altitude : ' + position.coords.altitudeAccuracy  + '\n' +
              'Direction : '               + position.coords.heading           + '\n' +
              'Vitesse : '                 + position.coords.speed             + '\n' +
              'Date : '                    + new Date(position.timestamp)      + '\n');
    }