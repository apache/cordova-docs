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

Contact
=======

Contiene propiedades que describen un contacto, como su información personal o de trabajo.

Atributos
----------

- __id:__ Un identificador unico y global. _(DOMString)_
- __displayName:__ El nombre de este contacto. Ideal para mostrar al usuario final. _(DOMString)_
- __name:__ Un objeto conteniendo todos las partes del nombre de una persona. _(ContactName)_
- __nickname:__ Un apodo por el que conoces a la persona. _(DOMString)_
- __phoneNumbers:__ Un array de todos sus números de teléfono. _(ContactField[])_
- __emails:__ Un array de todas sus direcciones de email. _(ContactField[])_
- __addresses:__ Un array de todas sus direcciones de contacto. _(ContactAddresses[])_
- __ims:__ Un array de todas las direcciones de mensajeria instantanea. _(ContactField[])_
- __organizations:__ Un array con todos sus nombres de organizaciones. _(ContactOrganization[])_
- __birthday:__ La fecha de nacimiento del contacto. _(Date)_
- __note:__ Una nota sobre este contacto. _(DOMString)_
- __photos:__ Un array de fotos del contacto. _(ContactField[])_
- __categories:__  Un array de todas las categorías del contacto. _(ContactField[])_
- __urls:__  Un array de sitios webs asociados a este contacto. _(ContactField[])_

Metodos
-------

- __clone__: Retorna un nuevo objeto del contacto, es una copia de este contacto con la propiedad ID `null`. 
- __remove__: Elimina el contacto de la base de datos del dispositivo. Se disparara una función 'callback' de error si no se pudo eliminar.
- __save__: Guarda el contacto en la base de datos, o actualiza el contacto si ya existe un contacto con la misma __id__.


Detalles
--------

El objeto `Contact` representa un contacto. Los contactos pueden ser creados, guardados o eliminados de la base de datos del dispositivo. También pueden ser retornados (Individualmente o en masa) llamando al método `contacts.find`.

_Nota: No todos los campos de contactos están soportados en todas las plataformas. Comprueba las peculiaridades de cada plataforma para saber que campos están soportados._

Plataformas Soportadas
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 y superior)
- iOS

Ejemplo Rápido de Guardado
--------------------------

	function onSuccess(contact) {
		alert("Se guardo satisfactoriamente");
	};

	function onError(contactError) {
		alert("Error = " + contactError.code);
	};

	// crea un nuevo objeto contacto
    var contact = navigator.contacts.create();
	contact.displayName = "Plumber";
	contact.nickname = "Plumber"; 		// especifica ambos para soportar todos los dispositivos
	
	// Rellena varios campos
	var name = new ContactName();
	name.givenName = "Jane";
	name.familyName = "Doe";
	contact.name = name;
	
	// guarda en el dispositivo
	contact.save(onSuccess,onError);

Ejemplo Rápido de Clonación
---------------------------

	// Clona el objeto contacto
	var clone = contact.clone();
	clone.name.givenName = "John";
	console.log("Nombre del contacto original = " + contact.name.givenName);
	console.log("Nombre del contacto clonado = " + clone.name.givenName); 

Ejemplo Rápido de eliminación
-----------------------------

    function onSuccess() {
        alert("Se elimino satisfactoriamente");
    };

    function onError(contactError) {
        alert("Error = " + contactError.code);
    };

	// elimina el contacto del dispositivo
	contact.remove(onSuccess,onError);

Ejemplo Completo
----------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Ejemplo de Contacts</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-1.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Espere a que PhoneGap se inicie
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap esta listo
        //
        function onDeviceReady() {
		    // crea
		    var contact = navigator.contacts.create();
			contact.displayName = "Plumber";
			contact.nickname = "Plumber"; 		//especifica ambos para soportar todos los dispositivos
			var name = new ContactName();
			name.givenName = "Jane";
			name.familyName = "Doe";
			contact.name = name;

			// guarda
			contact.save(onSaveSuccess,onSaveError);
			
			// clona
			var clone = contact.clone();
			clone.name.givenName = "John";
			console.log("Nombre del contacto original = " + contact.name.givenName);
			console.log("Nombre del contacto clonado = " + clone.name.givenName); 
			
			// elimina
			contact.remove(onRemoveSuccess,onRemoveError);
        }
        
        // onSaveSuccess: Obtiene el contacto guardado satisfactoriamente
        //
        function onSaveSuccess(contact) {
			alert("Se guardo satisfactoriamente");
        }
    
        // onSaveError: Fallo al guardar el contacto
        //
        function onSaveError(contactError) {
			alert("Error = " + contactError.code);
        }
        
        // onRemoveSuccess: Obtiene el contacto eliminado satisfactoriamente
        //
        function onRemoveSuccess(contacts) {
			alert("Eliminado satisfactoriamente");
        }
    
        // onRemoveError: Fallo al eliminar el contacto
        //
        function onRemoveError(contactError) {
			alert("Error = " + contactError.code);
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

- __categories:__  Esta propiedad no esta soportada por dispositivos Android 2.X, y siempre retornara `null`.

Peculiaridades Android 1.X
--------------------------

- __name:__ Esta propiedad no esta soportada por dispositivos Android 1.X, y siempre retornara `null`.
- __nickname:__ Esta propiedad no esta soportada por dispositivos Android 1.X, y siempre retornara `null`.
- __birthday:__ Esta propiedad no esta soportada por dispositivos Android 1.X, y siempre retornara `null`.
- __photos:__ Esta propiedad no esta soportada por dispositivos Android 1.X, y siempre retornara `null`.
- __categories:__  Esta propiedad no esta soportada por dispositivos Android 1.X, y siempre retornara `null`.
- __urls:__  Esta propiedad no esta soportada por dispositivos Android 1.X, y siempre retornara `null`.


Peculiaridades BlackBerry WebWorks (OS 5.0 y superior)
------------------------------------------------------

- __id:__ Soportada.  Asignada por el dispositivo cuando un contacto es guardado.
- __displayName:__ Soportada.  Almacenada en el campo __user1__.
- __nickname:__ Esta propiedad no esta soportada, y siempre retornara `null`.
- __phoneNumbers:__ Soportada parcialmente.  Los números de teléfonos seran almacenados en los campos __homePhone1__ y __homePhone2__ si el _type_ es 'home', __workPhone1__ y __workPhone2__ si el _type_ es 'work', __mobilePhone__ si el _type_ es 'mobile', __faxPhone__ si el _type_ es 'fax', __pagerPhone__ si el _type_ es 'pager', y __otherPhone__ si el _type_ no es ninguno de los anteriores.
- __emails:__ Soportada parcialmente. Los primeros tres direcciones de emails serán almacenadas en los campos __email1__, __email2__, y __email3__ respectivamente.
- __addresses:__ Soportada parcialmente. La primera y la segunda dirección serán almacenadas en los campos __homeAddress__ y __workAddress__ respectivamente.
- __ims:__ Esta propiedad no esta soportada, y siempre retornara `null`. 
- __organizations:__ Soportada parcialmente.  el campo __name__ y __title__ de la primera organización serán almacenadas en los campos __company__ y __title__ respectivamente.
- __photos:__ Soportada Parcialmente. Solo se permite una miniatura de foto.  Para poner una imagen del contacto pásala codificada en Base64, o la ruta URL que apunta  a la imagen. La imagen sera dimensionada antes de guardarla en la base de datos de BlackBerry. La foto de contacto sera retornada como Base64.
- __categories:__ Soportada parcialmente.  Solo están soportadas las categorías 'Business' y 'Personal'. 
- __urls:__  Soportada parcialmente. Solo la primera URL se almacenara en el campo __webpage__.

Peculiaridades iOS
------------------
- __displayName:__ Esta propiedad no esta soportada por iOS y siempre retornara `null` a menos que no halla un ContactName especificado. Si no hay ningún ContactName, entonces respectivamente el nombre compuesto, el __nickame__ o "" como valor de __displayName__. 
- __birthday:__ Cuando introduzcas esta propiedad, esta debe ser dada como un objeto Date de JavaScript. También se retorna como un objeto Date de JavaScript.
- __photos:__ La foto se guarda en el directorio temporal de aplicaciones, y retorna una URL hacia esta. El contenido de este directorio temporal se eliminara cuando la aplicacion termine. 
- __categories:__  Esta propiedad no esta soportada, y siempre retornara `null`.
