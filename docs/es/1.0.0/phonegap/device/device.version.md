device.version
==============

Obtiene la versión del sistema operativo.

    var string = device.version;

Plataformas Soportadas
----------------------

- Android 2.1+
- BlackBerry
- BlackBerry WebWorks (OS 5.0 y superior)
- iPhone

Ejemplo Rápido
--------------

    // Android:    Froyo OS retornara "2.2"
    //             Eclair OS retornara "2.1", "2.0.1", o "2.0"
    //             La versión también puede retornar la actualización "2.1-update1" 
    //
    // BlackBerry: Bold 9000 usando OS 4.6 retornara "4.6.0.282"
    //
    // iPhone:     iOS 3.2 retorna "3.2"
    //
    var deviceVersion = device.version;

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
