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

geolocation.getCurrentPosition
==============================

Retorna la geolocalización actual en un objeto `Position`.

    navigator.geolocation.getCurrentPosition(geolocationSuccess, 
                                             [geolocationError], 
                                             [geolocationOptions]);

Argumentos
----------

- __geolocationSuccess__: La función 'callback' que sera llamada con la posición actual.
- __geolocationError__: (Opcional) la función 'callback' que sera llamada si ocurriera un error.
- __geolocationOptions__: (Opcional) Opciones de geolocalización.

Descripción
-----------

La función `geolocation.getCurrentPositon` es asíncrona. Retornara la actual posición del dispositivo a la función 'callback' `geolocationSuccess` con el objeto `Position` como argumento. Si ocurriese un error, se llamara a `geolocationError` pasándole el objeto `PositionError` como argumento.


Plataformas Soportadas
----------------------

- Android
- BlackBerry (OS 4.6)
- BlackBerry WebWorks (OS 5.0 y superior)
- iPhone
    
Ejemplo Rápido
---------------

    // función 'callback' onSuccess
    //   Este método acepta objeto un objeto `Position`
    //   que contiene las coordenadas GPS actuales.
    //
    var onSuccess = function(position) {
        alert('Latitud: '         + position.coords.latitude          + '\n' +
              'Longitud: '        + position.coords.longitude         + '\n' +
              'Altitud: '         + position.coords.altitude          + '\n' +
              'Precisión: '       + position.coords.accuracy          + '\n' +
              'Precisión altitud' + position.coords.altitudeAccuracy  + '\n' +
              'Dirección: '       + position.coords.heading           + '\n' +
              'Velocidad: '       + position.coords.speed             + '\n' +
              'Timestamp: '       + new Date(position.timestamp)      + '\n');
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

        // Espere a que PhoneGap se inicie
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap esta listo
        //
        function onDeviceReady() {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }
    
        // onSuccess Geolocation
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = 'Latitud: '           + position.coords.latitude              + '<br />' +
              'Longitud: '        + position.coords.longitude         + '\n' +
              'Altitud: '         + position.coords.altitude          + '\n' +
              'Precisión: '       + position.coords.accuracy          + '\n' +
              'Precisión altitud' + position.coords.altitudeAccuracy  + '\n' +
              'Dirección: '       + position.coords.heading           + '\n' +
              'Velocidad: '       + position.coords.speed             + '\n' +
              'Timestamp: '       + new Date(position.timestamp)      + '\n');
        }
    
	    // La función 'callback' onError recibe un objeto `PositionError`.
	    //
	    function onError(error) {
	        alert('código: '    + error.code    + '\n' +
	              'mensaje: ' + error.message + '\n');
	    }

        </script>
      </head>
      <body>
        <p id="geolocation">Buscando geolocalización...</p>
      </body>
    </html>
