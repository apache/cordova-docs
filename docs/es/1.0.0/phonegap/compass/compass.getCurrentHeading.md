compass.getCurrentHeading
=========================

Obtiene la dirección actual del dispositivo.

    navigator.compass.getCurrentHeading(compassSuccess, compassError, compassOptions);

Descripcion
-----------

El compás es un sensor que detecta la dirección a la que el dispositivo esta orientado. Estos valores están representadas en grados, desde 0 a 359.99.

La dirección del compás se retorna usando la función 'callback' `compassSuccess`.

Plataformas Soportadas
----------------------

- Android
- iPhone

Ejemplo Rápido
--------------

    function onSuccess(heading) {
        alert('Dirección: ' + heading);
    };

    function onError() {
        alert('onError!');
    };

    navigator.compass.getCurrentHeading(onSuccess, onError);

Ejemplo Completo
----------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Ejemplo de Compass</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Espera a que PhoneGap inicie
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap esta listo
        //
        function onDeviceReady() {
            navigator.compass.getCurrentHeading(onSuccess, onError);
        }
    
        // onSuccess: Obtiene el resultado
        //
        function onSuccess(heading) {
            alert('Dirección: ' + heading);
        }
    
        // onError: Ocurrio un error
        //
        function onError() {
            alert('onError!');
        }

        </script>
      </head>
      <body>
        <h1>Ejemplo</h1>
        <p>getCurrentHeading</p>
      </body>
    </html>
    
