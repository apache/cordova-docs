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

ContactAddress
==============

Contiene propiedades de una de las direcciones de este contacto (`Contact`).

Propiedades
-----------
- __pref:__ `true` si este `ContactAddress` es preferido. _(boolean)_
- __type:__ Una string que te dice que tipo de dirección es esta (Ejemplo: 'Home'). _(DOMString)
- __formatted:__ Toda la dirección formateada para mostrarla. _(DOMString)_
- __streetAddress:__ La dirección de calle completa. _(DOMString)_
- __locality:__ La ciudad o localidad. _(DOMString)_
- __region:__ El estado o region. _(DOMString)_
- __postalCode:__ Código postal o zip. _(DOMString)_
- __country:__ Nombre del país. _(DOMString)_

Detalles
--------

El objeto `ContactAddress` almacena propiedades de un sola dirección del contacto. Un objeto `Contact` puede tener una o mas direcciones en el array `ContactAddress[]`

Plataformas Soportadas
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 y superior)
- iOS

Ejemplo Rápido
--------------

    // Muestra información sobre la dirección de todos los contactos
    function onSuccess(contacts) {
		for (var i=0; i<contacts.length; i++) {
			for (var j=0; j<contacts[i].addresses.length; j++) {
				alert("Preferente: " + contacts[i].addresses[j].pref + "\n" +
						"Tipo: " + contacts[i].addresses[j].type + "\n" +
						"Formateada: " + contacts[i].addresses[j].formatted + "\n" + 
						"Dirección: "  + contacts[i].addresses[j].streetAddress + "\n" + 
						"Localidad: "  + contacts[i].addresses[j].locality + "\n" + 
						"Provincia: "  + contacts[i].addresses[j].region + "\n" + 
						"Código Postal: "  + contacts[i].addresses[j].postalCode + "\n" + 
						"País: "  + contacts[i].addresses[j].country);
			}
		}
    };

    function onError(contactError) {
        alert('onError!');
    };

    // Busca todos los contactos
    var options = new ContactFindOptions();
	options.filter=""; 
	var filter = ["displayName","addresses"];
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
		    // Busca todos los contactos
		    var options = new ContactFindOptions();
			options.filter=""; 
			var filter = ["displayName","addresses"];
		    navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Obtiene el resultado
        //
		function onSuccess(contacts) {
			// muestra la información de dirección de todos los contactos
			for (var i=0; i<contacts.length; i++) {
				for (var j=0; j<contacts[i].addresses.length; j++) {
					alert("Preferente: " + contacts[i].addresses[j].pref + "\n" +
							"Tipo: " + contacts[i].addresses[j].type + "\n" +
							"Formateada: " + contacts[i].addresses[j].formatted + "\n" + 
							"Dirección: "  + contacts[i].addresses[j].streetAddress + "\n" + 
							"Localidad: "  + contacts[i].addresses[j].locality + "\n" + 
							"Provincia: "  + contacts[i].addresses[j].region + "\n" + 
							"Código Postal: "  + contacts[i].addresses[j].postalCode + "\n" + 
							"País: "  + contacts[i].addresses[j].country);
				}
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

Peculiaridades Android 2.X
--------------------------

- __pref:__ Esta propiedad no esta soportada por dispositivos Android 2.X, y siempre retornaran `false`.

Peculiaridades Android 1.X
--------------------------

- __pref:__ Esta propiedad no esta soportada por dispositivos Android 1.X, y siempre retornara `false`.
- __type:__ Esta propiedad no esta soportada por dispositivos Android 1.X, y siempre retornara `null`.
- __streetAddress:__ Esta propiedad no esta soportada por dispositivos Android 1.X, y siempre retornara `null`.
- __locality:__ Esta propiedad no esta soportada por dispositivos Android 1.X, y siempre retornara `null`.
- __region:__ Esta propiedad no esta soportada por dispositivos Android 1.X, y siempre retornara `null`.
- __postalCode:__ Esta propiedad no esta soportada por dispositivos Android 1.X, y siempre retornara `null`.
- __country:__ Esta propiedad no esta soportada por dispositivos Android 1.X, y siempre retornara `null`.

Peculiaridades BlackBerry WebWorks (OS 5.0 y superior)
------------------------------------------------------
- __pref:__ Esta propiedad no esta soportada por dispositivos BlackBerry, y siempre retornara `false`.
- __type:__ Soportada parcialmente. Solo permite un "Work" y un "Home" por cada contacto. 
- __formatted:__ Soportada parcialmente. Retornara una concatenación de todos los campos de la dirección.
- __streetAddress:__ Soportada.  Retornara los campos concatenados __address1__ y __address2__. 
- __locality:__ Soportada. Almacenada en el campo __city__.
- __region:__ Soportada.  Almacenada en el campo __stateProvince__.
- __postalCode:__ Soportada. Almacenada en el campo __zipPostal__.
- __country:__ Soportada.

Peculiaridades iOS
------------------
- __pref:__ Esta propiedad no esta soportada por dispositivos iOS, y siempre retornara `false`.
- __formatted:__ Actualmente no esta soportado.
