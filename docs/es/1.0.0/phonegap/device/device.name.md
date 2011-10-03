device.name
===========

Obtiene el modelo del dispositivo.

    var string = device.name;
    
Descripción
-----------

`device.name` retorna el nombre del modelo o producto. Este valor lo asigna el fabricante y puede diferir en las diferentes versiones del mismo producto.

Plataformas Soportadas
----------------------

- Android
- BlackBerry
- BlackBerry WebWorks (OS 5.0 y superior)
- iPhone

Ejemplo Rápido
--------------

    // Android:    Nexus One			retorna "Passion" (nombre en clave del Nexus One)
    //             Motorola Droid		retorna "voles"
    // BlackBerry: Bold 8900       		retorna "8900"
    // iPhone:     Todos los dispositivos	retorna el nombre de iTunes. "iPhone de Juan"
    //
    var name = device.name;

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
                                'Plataforma: '		       	+ device.platform + '<br />' + 
                                'UUID: '		      	+ device.uuid     + '<br />' + 
                                'Versión: '			+ device.version  + '<br />';
        }

        </script>
      </head>
      <body>
        <p id="deviceProperties">Cargando...</p>
      </body>
    </html>


Peculiaridades Android
----------------------
-  Obtiene el [nombre del producto](http://developer.android.com/reference/android/os/Build.html#PRODUCT) en vez del [nombre del modelo](http://developer.android.com/reference/android/os/Build.html#MODEL).
    - El nombre del producto es con frecuencia el nombre en clave dado durante la producción.
    - Ejemplo: El Nexus One retorna "Passion", Motorola Droid retorna "voles"

Peculiaridades iPhone
---------------------

- Obtiene el [nombre personalizado](http://developer.apple.com/iphone/library/documentation/uikit/reference/UIDevice_Class/Reference/UIDevice.html#//apple_ref/doc/uid/TP40006902-CH3-SW13) en vez del [nombre del modelo](http://developer.apple.com/iphone/library/documentation/uikit/reference/UIDevice_Class/Reference/UIDevice.html#//apple_ref/doc/uid/TP40006902-CH3-SW1).
    - El nombre personalizado es puesto por el usuario en iTunes.
    - Ejemplo: "iPhone de Juan"
