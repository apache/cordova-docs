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

geolocation.clearWatch
======================

Deja de observar los cambios en la geolocalización (`Geolocation`) con ese `watchID`.

    navigator.geolocation.clearWatch(watchID);

Argumentos
----------

- __watchID:__ El ID retornado por `geolocation.watchPosition`. (String)

Descripción
-----------

La función `geolocation.clearWatch` interrumpe el observador de localización al que apunta el `watchID` que se le pasa por argumento.

Plataformas Soportadas
----------------------

- Android
- BlackBerry (OS 4.6)
- BlackBerry WebWorks (OS 5.0 y superior)
- iPhone

Ejemplo Rápido
--------------

    // Opciones: Recuperar la localización cada 3 segundos
    //
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { frequency: 3000 });

    // ...mas tarde...

    navigator.geolocation.clearWatch(watchID);


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

        var watchID = null;

        // PhoneGap esta listo
        //
        function onDeviceReady() {
            // Actualiza cada 3 segundos
            var options = { frequency: 3000 };
            watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
        }
    
        // onSuccess Geolocation
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = 'Latitud: '  + position.coords.latitude      + '<br />' +
                                'Longitud: ' + position.coords.longitude     + '<br />' +
                                '<hr />'      + element.innerHTML;
        }

        // Para el observador que acaba de iniciarse
        // 
        function clearWatch() {
            if (watchID != null) {
                navigator.geolocation.clearWatch(watchID);
                watchID = null;
            }
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
        <p id="geolocation">Observando Geolocalización...</p>
    	<button onclick="clearWatch();">Dejar de observar</button>     
      </body>
    </html>
