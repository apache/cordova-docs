device.platform
===============

Obtiene el nombre del sistema operativo.

    var string = device.platform;

Plataformas Soportadas
----------------------

- Android
- BlackBerry
- BlackBerry WebWorks (OS 5.0 y superior)
- iPhone

Ejemplo Rápido
--------------

    // Dependiendo del dispositivo, estos son algunos ejemplos:
    //   - "Android"
    //   - "BlackBerry"
    //   - "iPhone"
    //   - "webOS"
    //
    var devicePlatform = device.platform;

Ejemplo Completo
----------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Ejemplo de Device</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Espera a que PhoneGap se inicie
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap esta listo
        //
        function onDeviceReady() {
            var element = document.getElementById('deviceProperties');
    
            element.innerHTML = 'Nombre del dispositivo: '	+ device.name     + '<br />' + 
                                'Versión Phonegap: '		+ device.phonegap + '<br />' + 
                                'Plataforma: '			+ device.platform + '<br />' + 
                                'UUID: '			+ device.uuid     + '<br />' + 
                                'Versión: '			+ device.version  + '<br />';
        }

        </script>
      </head>
      <body>
        <p id="deviceProperties">Cargando atributos Device...</p>
      </body>
    </html>
    
Peculiaridades iPhone
---------------------

Todos los dispositivos retornan `iPhone` como plataforma. Es impreciso  debido que Apple rebautizo el sistema operativo como `iOS`.

Peculiaridades BlackBerry
-------------------------

Pueden devolver la versión de plataforma en lugar de la plataforma. Por ejemplo, el Storm2 9550 retornaría '2.13.0.95' o similar.
