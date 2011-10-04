offline
===========

Este evento se dispara cuando una aplicación PhoneGap se encuentra offline (sin conexión a internet).

    document.addEventListener("offline", yourCallbackFunction, false);

Detalles
--------

Cuando la conectividad de la aplicación se quede sin conexión, el evento offline se disparara.

En la mayoría de los casos solo necesitaras enlazar una función al evento con `document.addEventListener` justo después de que PhoneGap dispare 'deviceready'.

Plataformas Soportadas
----------------------

- iOS
- Android
- BlackBerry WebWorks (OS 5.0 y superior)

Ejemplo Rápido
-------------

    document.addEventListener("offline", onOffline, false);

    function onOffline() {
        // Manejar el evento 'offline'
    }

Ejemplo Completo
----------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Ejemplo de Events</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Llama a onDeviceReady cuando PhoneGap se inicie
        //
        // En este momento, el documento esta cargado pero phonegap.js aun no.
        // Cuando PhoneGap este listo y se comunique con el dispositivo nativo
        // se lanzara el evento `deviceready`.
        // 
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap esta listo y ahora ya se pueden hacer llamadas a PhoneGap
        //
        function onDeviceReady() {
		    document.addEventListener("offline", onOffline, false);
        }

        // Maneja el evento offline
        //
        function onOffline() {
        }
        
        </script>
      </head>
      <body>
      </body>
    </html>

Peculiaridades iOS
--------------------------
Durante el primer arranque, el primer evento offline (Si lo hubiera) podría tardar al menos un segundo en dispararse.
