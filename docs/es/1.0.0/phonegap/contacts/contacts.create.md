contacts.create
===============

Retorna un objeto `Contact` nuevo.

    var contact = navigator.contacts.create(properties);

Descripción
-----------

contacts.create es una función síncrona que retornara un objeto `Contact` nuevo.

Este método no hace el contacto persistente en la base de datos de contactos. Para hacerlo persistente, llama al método `Contact.save`.

Plataformas Soportadas
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 y superior)
- iOS

Ejemplo Rápido
-------------

    var myContact = navigator.contacts.create({"displayName": "Usuario Prueba"});

Ejemplo Completo
----------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Ejemplo de Contacts</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Espere a que PhoneGap se inicie
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap esta listo
        //
        function onDeviceReady() {
			var myContact = navigator.contacts.create({"displayName": "Usuario Prueba"});
			myContact.gender = "male";
			console.log("El contacto, " + myContact.displayName + ", es de genero " + myContact.gender);
        }
    

        </script>
      </head>
      <body>
        <h1>Ejemplo</h1>
        <p>Creación de Contactos</p>
      </body>
    </html>
