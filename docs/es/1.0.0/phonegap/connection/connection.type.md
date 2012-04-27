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

connection.type
===================

Comprueba la conexión activa que se esta usando.

Descripción
-----------

Estos atributos son una forma rápida de conocer la conectividad del dispositivo, y su estado.


Plataformas Soportadas
----------------------

- iOS
- Android
- BlackBerry WebWorks (OS 5.0 y superior)

Ejemplo Rápido
--------------

    function checkConnection() {
        var networkState = navigator.network.connection.type;
        
        var states = {};
        states[Connection.UNKNOWN]	= 'Conexión desconocida';
        states[Connection.ETHERNET]	= 'Conexión ethernet';
        states[Connection.WIFI]   	= 'Conexión WiFi';
        states[Connection.CELL_2G]	= 'Conexión movil 2G';
        states[Connection.CELL_3G]	= 'Conexión movil 3G';
        states[Connection.CELL_4G]	= 'Conexión movil 4G';
        states[Connection.NONE]   	= 'Sin conexión';
    
        alert('Tipo de conexión: ' + states[networkState]);
    }
    
    checkConnection();


Ejemplo Completo
----------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Ejemplo de Connection</title>
        
        <script type="text/javascript" charset="utf-8" src="phonegap-1.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">
            
        // Espera a que PhoneGap se inicie
        // 
        document.addEventListener("deviceready", onDeviceReady, false);
        
        // PhoneGap esta listo, y ahora se pueden hacer llamadas a los métodos
        //
        function onDeviceReady() {
            checkConnection();
        }
        
	    function checkConnection() {
	        var networkState = navigator.network.connection.type;

	        var states = {};
		states[Connection.UNKNOWN]	= 'Conexión desconocida';
		states[Connection.ETHERNET]	= 'Conexión ethernet';
		states[Connection.WIFI]   	= 'Conexión WiFi';
		states[Connection.CELL_2G]	= 'Conexión movil 2G';
		states[Connection.CELL_3G]	= 'Conexión movil 3G';
		states[Connection.CELL_4G]	= 'Conexión movil 4G';
		states[Connection.NONE]   	= 'Sin conexión';

	        alert('Tipo de conexión: ' + states[networkState]);
	    }
        
        </script>
      </head>
      <body>
        <p>Un mensaje te notificara el tipo de conexión.</p>
      </body>
    </html>
