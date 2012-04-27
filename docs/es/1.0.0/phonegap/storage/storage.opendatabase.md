---
license: Licensed to the Apache Software Foundation (ASF) under one
         or more contributor license agreements.  See the NOTICE file
         distributed with this work for additional information
         regarding copyright ownership.  The ASF licenses this file
         to you under the Apache License, Version 2.0 (the
         "License"); you may not use this file except in compliance
         with the License.  You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0

         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
         under the License.
---

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

        <script type="text/javascript" charset="utf-8" src="phonegap-1.0.0.js"></script>
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
