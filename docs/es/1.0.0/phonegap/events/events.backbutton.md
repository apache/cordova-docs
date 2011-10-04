backbutton
===========

Este evento se dispara cuando el usuario presiona el botón "Atrás" en Android.

    document.addEventListener("backbutton", yourCallbackFunction, false);

Detalles
--------

Si necesitas cambiar la funcionalidad del botón "Atrás" en Android, puedes registrar una función para el evento 'backbutton'. Ya no es necesario llamar a otros métodos para sobre escribir el evento "backbutton", solo necesitas registrar un función 'callback' para este evento.

En la mayoría de los casos solo necesitaras enlazar una función al evento con `document.addEventListener` justo después de que PhoneGap dispare 'deviceready'.


Plataformas Soportadas
----------------------

- Android

Ejemplo Rápido
--------------

    document.addEventListener("backbutton", onBackKeyDown, false);

    function onBackKeyDown() {
        // Maneja el evento del botón atrás
    }

Ejemplo Completo
----------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Ejemplo de Events</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Llama a onDeviceReady cuando PhoneGap se inicie.
        //
        // En este momento, el documento esta cargado pero phonegap.js aun no.
        // Cuando PhoneGap este listo y se comunique con el dispositivo nativo
        // se lanzara el evento `deviceready`.
        // 
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap esta listo y ahora ya se pueden hacer llamadas a PhoneGap
        //
        function onDeviceReady() {
            // Añade una función 'callback' al evento 'backbutton'
            document.addEventListener("backbutton", onBackKeyDown, false);
        }
        
        // Maneja el evento del botón "Atrás"
        //
        function onBackKeyDown() {
        }

        </script>
      </head>
      <body>
      </body>
    </html>
