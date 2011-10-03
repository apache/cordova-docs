pause
===========

Este evento se dispara cuando la aplicación PhoneGap pierde el foco y pasa a segundo plano.

    document.addEventListener("pause", yourCallbackFunction, false);

Detalles
-------

PhoneGap consiste en dos partes de código, la parte nativa y la JavaScript. Cuando la parte nativa manda la aplicación a segundo plano, PhoneGap disparara el evento pause.

En la mayoría de los casos solo necesitaras enlazar una función al evento con `document.addEventListener` justo después de que PhoneGap dispare 'deviceready'.

Plataformas Soportadas
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 y superior)
- iPhone

Ejemplo Rápido
--------------

    document.addEventListener("pause", onPause, false);

    function onPause() {
        // Maneja el evento 'pause'
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
		    document.addEventListener("pause", onPause, false);
        }

        // Maneja el evento online
        //
        function onPause() {
        }
        
        </script>
      </head>
      <body>
      </body>
    </html>

Peculiaridades iOS
------------------
En el manejador de pausa, cualquier función que pase sobre Objetive-C no funcionara, tampoco ninguna función interactiva como las alertas. Esto quiere decir que no puedes llamar a console.log (o sus variantes), ni ninguna función de los plugins o de la API PhoneGap. Todas las llamadas de este tipo que realices, serán ejecutadas cuando la aplicación se reanude, en el siguiente ciclo del bucle de ejecución).
