ContactFindOptions
==================

Contiene propiedades que se usan para filtrar el resultado de `contacts.find`.

Atributos
---------

- __filter:__ La cadena de texto que se usara para filtrar contactos. _(DOMString)_ (Default: "")
- __multiple:__ Indica si la operación de búsqueda debe retornar múltiples contactos. _(Boolean)_ (Default: false)


Plataformas Soportadas
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 y superior)
- iOS

Ejemplo Sencillo
----------------

    // Función 'callback' de una búsqueda satisfactoria
    function onSuccess(contacts) {
		for (var i=0; i<contacts.length; i++) {
			alert(contacts[i].displayName);
		}
    };

    // retrollamada (callback) de una búsqueda errónea
    function onError(contactError) {
        alert('onError!');
    };

    // Indica criterios de búsqueda
    var options = new ContactFindOptions();
	options.filter="";			// una string vacía retorna todos los contactos
	options.multiple=true;	        	// retornar mas de un contacto
	filter = ["displayName"];	        // retornar el campo contact.displayName
	
    // Busca contactos
    navigator.contacts.find(filter, onSuccess, onError, options);

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
		// Indica un criterio de búsqueda
	        var options = new ContactFindOptions();
		    options.filter="";			// una string vacía retorna todos los contactos
		    options.multiple=true;		// retornar mas de un contacto
		    filter = ["displayName"];	        // retornar el campo contact.displayName

		// Busca contactos
	        navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Obtiene el resultado
        //
		function onSuccess(contacts) {
			for (var i=0; i<contacts.length; i++) {
				alert(contacts[i].displayName);
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

