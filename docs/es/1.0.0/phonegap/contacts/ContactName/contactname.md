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

ContactName
===========

Contiene atributos sobre nombres de un objeto `Contact`.

Atributos
----------

- __formatted:__ El nombre completo del contacto formateado. _(DOMString)_
- __familyName:__ Apellidos de familia. _(DOMString)_
- __givenName:__ El primer nombre del contacto. _(DOMString)_
- __middleName:__ El Segundo nombre del contacto, por ejemplo: de "Juan José" es "José". _(DOMString)_
- __honorificPrefix:__ Prefijo del nombre, comúnmente por anglosajones (ejemplo: Mr, Dr...) _(DOMString)_
- __honorificSuffix:__ Sufijo del nombre, comúnmente usado por anglosajones (ejemplo: Jr...). _(DOMString)_

Detalles
--------

El objeto `ContactName` guarda atributos sobre el nombre de un contacto.

Plataformas Soportadas
----------------------

- Android 2.X
- BlackBerry WebWorks (OS 5.0 y superior)
- iOS

Ejemplo Rápido
--------------

    function onSuccess(contacts) {
		for (var i=0; i<contacts.length; i++) {
			alert("Nombre formateado: " + contacts[i].name.formatted + "\n" + 
					"Apellidos: "  + contacts[i].name.familyName + "\n" + 
					"Primer Nombre: "  + contacts[i].name.givenName + "\n" + 
					"Segundo Name: "  + contacts[i].name.middleName + "\n" + 
					"Sufijo del nombre: "  + contacts[i].name.honorificSuffix + "\n" + 
					"Prefijo del nombre: "  + contacts[i].name.honorificSuffix);
		}
    };

    function onError(contactError) {
        alert('onError!');
    };

    var options = new ContactFindOptions();
	options.filter="";
	filter = ["displayName","name"];
    navigator.contacts.find(filter, onSuccess, onError, options);

Ejemplo Completo
----------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Ejemplo de Contacts</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-1.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Espera a que PhoneGap se inicie
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap esta listo
        //
        function onDeviceReady() {
		var options = new ContactFindOptions();
		options.filter="";
		filter = ["displayName","name"];
		navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Obtiene el resultado
        //
	function onSuccess(contacts) {
	        for (var i=0; i<contacts.length; i++) {
			alert("Nombre formateado: " + contacts[i].name.formatted + "\n" + 
				"Apellidos: "  + contacts[i].name.familyName + "\n" + 
				"Primer Nombre: "  + contacts[i].name.givenName + "\n" + 
				"Segundo nombre: "  + contacts[i].name.middleName + "\n" + 
				"Sufijo del nombre: "  + contacts[i].name.honorificSuffix + "\n" + 
				"Prefijo del nombre: "  + contacts[i].name.honorificPrefix);
			}
		};
    
        // onError: Ocurrió un error
        //
        function onError(contactError) {
            alert('onError!');
        }

        </script>
      </head>
      <body>
        <h1>Ejemplo</h1>
        <p>Búsqueda de Contactos</p>
      </body>
    </html>

Peculiaridades Android
----------------------
- __formatted:__ Soportada parcialmente.  Retornara la concatenación de honorificPrefix, givenName, middleName, familyName and honorificSuffix pero no sera almacenado.

Peculiaridades BlackBerry WebWorks (OS 5.0 y superior)
---------------------------------------------

- __formatted:__ Soportada parcialmente.  Retornara la concatenación de los campos de BlackBerry__firstName__ y __lastName__.
- __familyName:__ Soportada. Almacenado en el campo de BlackBerry __lastName__.
- __givenName:__ Soportada.  Almacenada en el campo de BlackBerry __firstName__.
- __middleName:__ Esta propiedad no esta soportada, y siempre retornara `null`.
- __honorificPrefix:__ Esta propiedad no esta soportada, y siempre retornara `null`.
- __honorificSuffix:__ Esta propiedad no esta soportada, y siempre retornara `null`.

Peculiaridades iOS
------------------
- __formatted:__ Soportada parcialmente.  Retornara el nombre compuesto en iOS pero no lo almacenara.
