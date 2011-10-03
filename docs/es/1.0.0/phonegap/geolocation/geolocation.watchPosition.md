geolocation.watchPosition
=========================

Observa los cambios en la actual geolocalización del dispositivo.

    var watchId = navigator.geolocation.watchPosition(geolocationSuccess,
                                                      [geolocationError],
                                                      [geolocationOptions]);

Argumentos
----------

- __geolocationSuccess__: La función 'callback' a la que se le entregara la posición actual.
- __geolocationError__: (Opcional) La función 'callback' que sera llamada si ocurriera un error.
- __geolocationOptions__: (Opcional) Opciones de geolocalización.

Retorna
-------

- __String__: Un ID es retornado por la función, ese ID apunta a este observador de geolocalización, puedes usarlo en la función `geolocation.clearWatch` para dejar de observar la geolocalización.

Descripción
-----------

La función `geolocation.watchPosition` es una función asíncrona. Esta función retorna la actual posición cada vez que se detecta un cambio. Cuando el dispositivo retorna la nueva localización, automáticamente llamara a la función `geolocationSuccess` pasándole el argumento `Position`. Si en caso contrario hubiera un error, se llamaría a la función `geolocationError` y se le pasara el objeto `PositionError`.

Plataformas Soportadas
----------------------

- Android
- BlackBerry (OS 4.6)
- BlackBerry WebWorks (OS 5.0 y superior)
- iPhone

Ejemplo Rápido
--------------

    // Función 'callback' onSuccess
    //   Esta función acepta un argumento del tipo `Position`,
    //   quien contiene las coordenadas GPS actuales.
    //
    function onSuccess(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitud: '  + position.coords.latitude      + '<br />' +
                            'Longitud: ' + position.coords.longitude     + '<br />' +
                            '<hr />'      + element.innerHTML;
    }

    // Función 'callback' onError.  Esta función recibe un objeto PositionError.
    //
    function onError(error) {
        alert('código: '    + error.code    + '\n' +
              'mensaje: ' + error.message + '\n');
    }

    // Opciones: retorna la geolocalización cada 3 segundos
    //
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { frequency: 3000 });
    

Ejemplo Completo
----------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Ejemplo de Geolocation</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Espere a que PhoneGap se inicie
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        var watchID = null;

        // PhoneGap esta lista
        //
        function onDeviceReady() {
            // Actualizar cada 3 segundos
            var options = { frequency: 3000 };
            watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
        }
    
        // Función onSuccess
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                                'Longitude: ' + position.coords.longitude     + '<br />' +
                                '<hr />'      + element.innerHTML;
        }
    
	    // Función onError
	    //
	    function onError(error) {
	        alert('código: '    + error.code    + '\n' +
	              'mensaje: ' + error.message + '\n');
	    }

        </script>
      </head>
      <body>
        <p id="geolocation">Observando geolocalización...</p>
      </body>
    </html>
