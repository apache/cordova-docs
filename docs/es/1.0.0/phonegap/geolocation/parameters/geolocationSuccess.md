geolocationSuccess
==================

La función 'callback' que sera llamada pasándole los datos de geolocalización.

    function(position) {
        // Hacer algo
    }

Argumentos
----------

- __position:__ El objeto `Position` retornado por el dispositivo. (`Position`)

Ejemplo
-------

    function geolocationSuccess(position) {
        alert('Latitud: '           + position.coords.latitude          + '\n' +
              'Longitud: '          + position.coords.longitude         + '\n' +
              'Altitud: '           + position.coords.altitude          + '\n' +
              'Precisión: '         + position.coords.accuracy          + '\n' +
              'Precisión Altitud: ' + position.coords.altitudeAccuracy  + '\n' +
              'Dirección: '         + position.coords.heading           + '\n' +
              'Velocidad: '         + position.coords.speed             + '\n' +
              'Timestamp: '         + new Date(position.timestamp)      + '\n');
    }
