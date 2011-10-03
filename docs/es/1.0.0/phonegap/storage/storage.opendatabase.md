openDatabase
===============

Retorna un nuevo objeto `Database`.

    var dbShell = window.openDatabase(name, version, display_name, size);

Descripción
-----------

`window.openDatabase` retorna un nuevo objeto `Database`.

Este método creara una nueva pequeña base de datos SQL y retorna un objeto `Database`. Usa este objeto `Database` para manipular los datos.

Plataformas Soportadas
----------------------

- Android
- BlackBerry WebWorks (OS 6.0 y superior)
- iPhone

Ejemplo Rápido
--------------

    var db = window.openDatabase("prueba", "1.0", "Prueba DB", 1000000);

Ejemplo Completo
----------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Ejemplo de Storage</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Espere a que PhoneGap se inicie
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap esta listo
        //
        function onDeviceReady() {
			var db = window.openDatabase("Database", "1.0", "Demo PhoneGap", 1000000);
        }
		
        </script>
      </head>
      <body>
        <h1>Ejemplo</h1>
        <p>Abriendo Base de Datos</p>
      </body>
    </html>
