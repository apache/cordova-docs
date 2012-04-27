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

Coordinates
===========

Un conjunto de atributos que describe las coordenadas geográficas de una posición.

Argumentos
----------

* __latitude__: Latitud en grados decimales. _(Number)_
* __longitude__: Longitud en grados decimales. _(Number)_
* __altitude__: Altura de la posición en metros por encima del elipsoide. _(Number)_
* __accuracy__: Nivel de precisión (en metros) de la latitud y longitud. _(Number)_
* __altitudeAccuracy__: Nivel de precisión (en metros) de la altitud. _(Number)_
* __heading__: Dirección de travesía (en grados) contando como las agujas del reloj y relativo al norte (real). _(Number)_
* __speed__: Velocidad actual del dispositivo (metros por segundo). _(Number)_

Descripción
-----------

El objeto `Coordinates` es creado y compuesto por PhoneGap, y atribuido al objeto `Position`. El objeto `Position` es entonces retornado al usuario mediante una función 'callback'.

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

    // Función 'callback' onError
    //
    var onError = function() {
        alert('onError!');
    };

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
    
        // Muestra los atributos de `Position`.
        //
        function onSuccess(position) {
            var div = document.getElementById('myDiv');
        
            div.innerHTML = 'Latitud: '             + position.coords.latitude  + '<br/>' +
                            'Longitud: '            + position.coords.longitude + '<br/>' +
                            'Altitud: '             + position.coords.altitude  + '<br/>' +
                            'Precisión: '           + position.coords.accuracy  + '<br/>' +
                            'Precisión Altitud: '   + position.coords.altitudeAccuracy  + '<br/>' +
                            'Dirección: '           + position.coords.heading   + '<br/>' +
                            'Velocidadd: '           + position.coords.speed     + '<br/>';
        }
    
        // Muestra una alerta si ocurre un problema obteniendo la geolocalización
        //
        function onError() {
            alert('onError!');
        }

        </script>
      </head>
      <body>
        <div id="myDiv"></div>
      </body>
    </html>
    
Peculiaridades Android
----------------------

__altitudeAccuracy:__ Este atributo no esta soportado en dispositivos Android, y siempre retornara `null`.
