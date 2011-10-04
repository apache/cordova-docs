contactSuccess
==============

Función 'callback' que proporciona un array de objetos `Contact` como resultado del método `contacts.find`.

    function(contacts) {
        // hacer algo
    }

Argumentos
----------

- __contacts:__ El array de contactos que retorna el método `contact.find`. (`Contact`)

Ejemplo
-------

    function contactSuccess(contacts) {
		for (var i=0; i<contacts.length; i++) {
			console.log("Nombre = " + contacts[i].displayName;
    }
