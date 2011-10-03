device.phonegap
===============

Obtiene la versión PhoneGap del dispositivo.

    var string = device.phonegap;
    
Descripción
-----------

`device.phonegap` retorna la versión phonegap que esta corriendo en el dispositivo.

Plataformas Soportadas
----------------------

- Android
- BlackBerry
- BlackBerry WebWorks (OS 5.0 y superior)
- iPhone

Ejemplo Rápido
--------------

    var name = device.phonegap;

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
        <p id="deviceProperties">Cargando...</p>
      </body>
    </html>
    
