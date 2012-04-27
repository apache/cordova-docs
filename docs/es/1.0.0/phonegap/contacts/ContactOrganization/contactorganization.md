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

ContactOrganization
===================

Contiene atributos sobre la organización de un objeto `Contact`.

Atributos
---------
- __pref:__ `true` si este `ContactOrganization` es la preferente del usuario. _(boolean)_
- __type:__ Una string que indica que tipo de campo es (ejemplo: 'home'). _(DOMString)
- __name:__ El nombre de la organización. _(DOMString)_
- __department:__ El departamento de la organización a donde el usuario pertenece. _(DOMString)_
- __title:__ El titulo del usuario en su organización. _(DOMString)_

Detalles
--------

El objeto `ContactOrganization` almacena atributos sobre la organización. Un objeto `Contact` guarda uno o mas objetos `ContactOrganization` en un array. 

Plataformas Soportadas
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 y superior)
- iOS

Ejemplo Rápido
-------------

    function onSuccess(contacts) {
		for (var i=0; i<contacts.length; i++) {
			for (var j=0; j<contacts[i].organizations.length; j++) {
				alert("Preferente: " + contacts[i].organizations[j].pref + "\n" +
						"Tipo: " + contacts[i].organizations[j].type + "\n" +
						"Nombre: " + contacts[i].organizations[j].name + "\n" + 
						"Departmento: "  + contacts[i].organizations[j].department + "\n" + 
						"Titulo: "  + contacts[i].organizations[j].title);
			}
		}
    };

    function onError(contactError) {
        alert('onError!');
    };

    var options = new ContactFindOptions();
	options.filter="";
	filter = ["displayName","organizations"];
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
			filter = ["displayName","organizations"];
			navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Obtiene el resultado
        //
		function onSuccess(contacts) {
			for (var i=0; i<contacts.length; i++) {
				for (var j=0; j<contacts[i].organizations.length; j++) {
					alert("Pref: " + contacts[i].organizations[j].pref + "\n" +
							"Type: " + contacts[i].organizations[j].type + "\n" +
							"Name: " + contacts[i].organizations[j].name + "\n" + 
							"Department: "  + contacts[i].organizations[j].department + "\n" + 
							"Title: "  + contacts[i].organizations[j].title);
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

- __pref:__ Este atributo no esta soportado en Android 2.X y siempre retornara `false`.

Peculiaridades Android 1.X
---------------------------

- __pref:__ Este atributo no esta soportado en Android 1.X y siempre retornara `false`.
- __type:__ Este atributo no esta soportado en Android 1.X y siempre retornara `null`.
- __title:__ Este atributo no esta soportado en Android 1.X y siempre retornara `null`. 

Peculiaridades BlackBerry WebWorks (OS 5.0 y superior)
-------------------------------------------------------
- __pref:__ Este atributo no esta soportado en Blackberry y siempre retornara `false`.
- __type:__ Este atributo no esta soportado en Blackberry y siempre retornara  `null`.
- __name:__ Soportado parcialmente. El primer nombre de la organización se almacenara en el campo BlackBerry __company__.
- __department:__ Este atributo no esta soportado y siempre retornara `null`.
- __title:__ Soportado parcialmente. El primer titulo se almacenara en el campo BlackBerry __jobTitle__.

Peculiaridades iOS
------------------
- __pref:__ Este atributo no esta soportado en iOS y siempre retornara `false`.
- __type:__ Este atributo no esta soportado en iOS y siempre retornara `null`.
- __name:__ Soportado parcialmente.  El primer nombre de la organización sera almacenado en el campo iOS __kABPersonOrganizationProperty__.
- __department__: Soportado parcialmente. El primer nombre del departamento sera almacenado en el campo iOS __kABPersonDepartmentProperty__.
- __title__: Soportado parcialmente. El primer titulo sera almacenado en el campo iOS __kABPersonJobTitleProperty__.


