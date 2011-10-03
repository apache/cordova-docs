ContactField
============

Son campos genéricos de un objeto `Contact`. Algunas de las propiedades que se almacenan como objetos `ContactField` son: direcciones de email, números de teléfono, y urls.

Propiedades
----------

- __type:__ Una string que indica que tipo de campo es (ejemplo: 'home'). _(DOMString)_
- __value:__ El valor del campo (Como un numero de teléfono o una dirección de email). _(DOMString)_
- __pref:__  `true` si este objeto `ContactField` es preferente. _(boolean)_

Detalles
--------

El objeto `ContactField` es un componente pensado para ser reusable. Cada objeto `ContactField` contiene una propiedad value, una type y una pref. Los objetos `Contact` almacenan varios objetos de este tipo en un array `ContactField[]`, tales como números de teléfono o direcciones de emails.

En la mayoría de los casos no existen valores predeterminados para el atributo __type__. Por ejemplo, un numero de teléfono puede tener un valor __type__ como 'home', 'work', 'mobile', 'iPhone' o cualquier otro, esto depende de la base de datos de la plataforma del dispositivo en cuestión. En cambio, en el caso del campo __photos__, PhoneGap hace uso del atributo __type__ para indicar el formato de la imagen. PhoneGap retornara __type: 'url'__ cuando cuando la propiedad __value__ indique la URL al fichero de imagen, o __type:'base64'__ cuando la imagen se retorne codificada como una string Base64.

Plataformas Soportadas
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 y superior)
- iOS

Ejemplo Rápido
--------------

	// crea un nuevo contacto
	var contact = navigator.contacts.create();
	
	// almacena números de teléfonos en ContactField[]
	var phoneNumbers = [3];
	phoneNumbers[0] = new ContactField('work', '212-555-1234', false);
	phoneNumbers[1] = new ContactField('mobile', '917-555-5432', true); // numero preferente
	phoneNumbers[2] = new ContactField('home', '203-555-7890', false);
	contact.phoneNumbers = phoneNumbers;
	
	// guarda el contacto
	contact.save();

Ejemplo Completo
----------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Ejemplo de Contacts</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Espera a que PhoneGap se inicie
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap esta listo
        //
        function onDeviceReady() {
			// crea un nuevo contacto
			var contact = navigator.contacts.create();

			// almacena números de teléfonos en ContactField[]
			var phoneNumbers = [3];
			phoneNumbers[0] = new ContactField('work', '212-555-1234', false);
			phoneNumbers[1] = new ContactField('mobile', '917-555-5432', true); // numero preferente
			phoneNumbers[2] = new ContactField('home', '203-555-7890', false);
			contact.phoneNumbers = phoneNumbers;

			// guarda el contacto
			contact.save();

			// busca contactos, obtiene el nombre a mostrar y los números de teléfono.
			var options = new ContactFindOptions();
			options.filter="";
			filter = ["displayName","phoneNumbers"];
			navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Obtiene el resultado
        //
		function onSuccess(contacts) {
			for (var i=0; i<contacts.length; i++) {
				// display phone numbers
				for (var j=0; j<contacts[i].phoneNumbers.length; j++) {
					alert("Type: " + contacts[i].phoneNumbers[j].type + "\n" + 
							"Value: "  + contacts[i].phoneNumbers[j].value + "\n" + 
							"Preferred: "  + contacts[i].phoneNumbers[j].pref);
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

Peculiaridades Android
----------------------

- __pref:__ Esta propiedad no esta soportada por dispositivos Android, y siempre retorna `false`.

Peculiaridades BlackBerry WebWorks (OS 5.0 y superior)
------------------------------------------------------

- __type:__ Soportada parcialmente. Usada para números de teléfonos.
- __value:__ Soportada.
- __pref:__ Esta propiedad no esta soportada, y siempre retornara `false`.

Peculiaridades iOS
------------------
- __pref:__ Esta propiedad no esta soportada en iOS y siempre retornara `false`.
