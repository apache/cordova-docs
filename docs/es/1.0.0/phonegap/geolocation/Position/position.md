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

Position
========

Contiene las coordenadas que fueron creados por la API Geolocation.

Atributos
----------

- __coords:__ Un conjunto de coordenadas geográficas. _(Coordinates)_
- __timestamp:__ Un registro de la fecha y hora cuando se crearon las coordenadas (en milisegundos). _(DOMTimeStamp)_

Descripción
-----------

El objeto `Position` es creado y distribuido por PhoneGap, luego es retornado al usuario a través de una función 'callback'.

Plataformas Soportadas
----------------------

- Android
- BlackBerry (OS 4.6)
- BlackBerry WebWorks (OS 5.0 y superior)
- iPhone

Ejemplo Rápido
--------------

    // Función 'callback' onSuccess
    //
    var onSuccess = function(position) {
        alert('Latitud: '           + position.coords.latitude          + '\n' +
              'Longitud: '          + position.coords.longitude         + '\n' +
              'Altitud: '           + position.coords.altitude          + '\n' +
              'Precisión: '         + position.coords.accuracy          + '\n' +
              'Precisión Altitud: ' + position.coords.altitudeAccuracy  + '\n' +
              'Dirección: '         + position.coords.heading           + '\n' +
              'Velocidad: '         + position.coords.speed             + '\n' +
              'Timestamp: '         + new Date(position.timestamp)      + '\n');
    };

    // La función 'callback' onError recibe un objeto `PositionError`.
    //
    function onError(error) {
        alert('código: '  + error.code    + '\n' +
              'mensaje: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);

Ejemplo Completo
----------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Ejemplo de Geolocation</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-1.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Espera a que PhoneGap se inicie
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap esta listo
        //
        function onDeviceReady() {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }
    
        // Función 'callback' onSuccess
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = 'Latitud: '           + position.coords.latitude              + '<br />' +
                                'Longitud: '          + position.coords.longitude             + '<br />' +
                                'Altitud: '           + position.coords.altitude              + '<br />' +
                                'Precisión: '         + position.coords.accuracy              + '<br />' +
                                'Precisión Altitud: ' + position.coords.altitudeAccuracy      + '<br />' +
                                'Dirección: '         + position.coords.heading               + '<br />' +
                                'Velocidad: '         + position.coords.speed                 + '<br />' +
                                'Timestamp: '         + new Date(position.timestamp)          + '<br />';
        }
    
	    // La función 'callback' onError recibe un objeto `PositionError`.
	    //
	    function onError(error) {
	        alert('código: '  + error.code    + '\n' +
	              'mensaje: ' + error.message + '\n');
	    }

        </script>
      </head>
      <body>
        <p id="geolocation">Buscando geolocalización...</p>
      </body>
    </html>

peculiaridades iPhone
---------------------

- __timestamp:__ Usa segundos en vez de milisegundos.

Una solución a mano seria convertirlo a milisegundos (x 1000):

        var onSuccess = function(position) {
            alert('Latitud: '   + position.coords.latitude             + '\n' +
                  'Longitud: '  + position.coords.longitude            + '\n' +
                  'Timestamp: ' + new Date(position.timestamp * 1000)  + '\n');
        };
