resume
===========

Este evento se dispara cuando la aplicación PhoneGap recupera el foco y se lanza a primer plano.

    document.addEventListener("resume", yourCallbackFunction, false);

Detalles
--------

PhoneGap consiste en dos partes de código, la parte nativa y la JavaScript. Cuando la parte nativa recupera la aplicación del segundo plano, PhoneGap disparara el evento

En la mayoría de los casos solo necesitaras enlazar una función al evento con `document.addEventListener` justo después de que PhoneGap dispare 'deviceready'.

Plataformas Soportada
---------------------

- Android
- BlackBerry WebWorks (OS 5.0 y superior)
- iPhone

Ejemplo Rápido
--------------

    document.addEventListener("resume", onResume, false);

    function onResume() {
        // maneja el evento 'resume'
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
		    document.addEventListener("resume", onResume, false);
        }

        // maneja el evento 'resume'
        //
        function onResume() {
        }
        
        </script>
      </head>
      <body>
      </body>
    </html>
