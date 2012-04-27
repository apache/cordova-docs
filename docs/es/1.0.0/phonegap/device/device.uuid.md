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

device.uuid
===========

Obtiene el Identificador Universal Único ([UUID](http://es.wikipedia.org/wiki/Universally_Unique_Identifier)).

    var string = device.uuid;
    
Descripción
-----------

Los detalles de como se genera un UUID es determinado por el fabricante y especificaciones de la plataforma o modelo.

Plataformas Soportadas
----------------------

- Android
- BlackBerry
- BlackBerry WebWorks (OS 5.0 y superior)
- iPhone

Ejemplo Rápido
--------------

    // Android: Retorna un entero aleatorio de 64-bit (como string, también!)
    //          El entero es generado en el dispositivo en el primer encendido.
    //
    // BlackBerry: Retorna el numero PIN del dispositivo
    //             Es un entero único de 9 dígitos (como string, para variar!)
    //
    // iPhone: (Resumen de la documentación, UIDevice )
    //         Retorna una string hash creada usando los múltiples id's del hardware.
    //         Se garantiza que sea único para cada dispositivo y no puede estar
    //         vinculada a la cuenta de usuario
    //
    var deviceID = device.uuid;

Ejemplo Completo
----------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Ejemplo de Device</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-1.0.0.js"></script>
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
