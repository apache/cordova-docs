searchbutton
===========

Este evento se dispara cuando el usuario presiona el botón de búsqueda en Android.

    document.addEventListener("searchbutton", yourCallbackFunction, false);

Detalles
--------

Si necesitas cambiar la funcionalidad del botón "Búsqueda" en Android, puedes registrar una función para el evento 'searchbutton'. Ya no es necesario llamar a otros métodos para sobreescribir el evento "searchbutton", solo necesitas registrar un función 'callback' para este evento.

En la mayoría de los casos lo que querrás sera añadir una función al evento con `document.addEventListener` justo después de que PhoneGap dispara `deviceready`

Plataformas Soportadas
----------------------

- Android

Ejemplo Rápido
--------------

    document.addEventListener("searchbutton", onSearchKeyDown, false);

    function onSearchKeyDown() {
        // Maneja el evento del botón search
    }

Ejemplo Completo
----------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Ejemplo de Events</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Llama a onDeviceReady cuando PhoneGap se inicie
        //
        // En este momento, el documento esta cargado pero phonegap.js aun no.
        // Cuando PhoneGap esta listo y se comunica con el dispositivo nativo
        // se lanzara el evento `deviceready`.
        // 
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // PhoneGap esta listo y ahora ya se pueden hacer llamadas a PhoneGap
        //
        function onDeviceReady() {
            // Registra una función 'callback' al evento.
            document.addEventListener("searchbutton", onSearchKeyDown, false);
        }
        
        // Maneja el evento del botón search
        //
        function onSearchKeyDown() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
