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

localStorage
===============

Proporciona acceso a la interfaz W3C Storage (http://dev.w3.org/html5/webstorage/#the-localstorage-attribute)

    var storage = window.localStorage;

Métodos
-------

- __key__: Retorna el nombre de la llave en la posición especificada. 
- __getItem__: Retorna el valor de la llave especificada.
- __setItem__: Guarda un valor para esta llave.
- __removeItem__: Elimina el registro de la llave especificada.
- __clear__: Elimina todos los registros (valores y llaves).

Detalles
--------

localStorage proporciona una interfaz a la API W3C Storage.  Esta API permite guardar datos tipo diccionario (llave-valor).

Plataformas Soportadas
----------------------

- Android
- BlackBerry WebWorks (OS 6.0 y superior)
- iPhone

Ejemplo Rápido de key
---------------------

    var keyName = window.localStorage.key(0);

Ejemplo Rápido de setItem
-------------------------

    window.localStorage.setItem("key", "value");

Ejemplo Rápido de getItem
-------------------------

	var value = window.localStorage.getItem("key");
	// Ahora la variable value es "value"

Ejemplo Rápido de removeItem
------------------------

	window.localStorage.removeItem("key");

Ejemplo Rápido de clear
-----------------------

	window.localStorage.clear();

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
			window.localStorage.setItem("llave", "valor");
			var keyname = window.localStorage.key(i);
			// keyname ahora es "llave"
			var value = window.localStorage.getItem("llave");
			// value ahora es "valor"
			window.localStorage.removeItem("llave");
			window.localStorage.setItem("llave2", "valor2");
			window.localStorage.clear();
			// localStorage esta ahora vacio
        }
    

        </script>
      </head>
      <body>
        <h1>Ejemplo</h1>
        <p>localStorage</p>
      </body>
    </html>
