contacts.create
===============

Retourne un nouvel objet Contact.

    var contact = navigator.contacts.create(properties);

Description
-----------

contacts.create est une fonction synchrone retournant un nouvel objet `Contact`.

Cette fonction n'insert pas l'objet Contact ainsi créé dans la base de contacts du mobile.  Pour insérer l'objet dnas la base du mobile, il faut appeler la méthode `Contact.save`.

Plateformes supportées
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 et plus récent)
- iOS

Exemple rapide
--------------

    var myContact = navigator.contacts.create({"displayName": "Utilisateur test"});

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Exemple Contact</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Attendre que PhoneGap soit prêt
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap est prêt
        //
        function onDeviceReady() {
			var myContact = navigator.contacts.create({"displayName": "Utilisateur test"});
			myContact.gender = "masculin";
			console.log("Le contact, " + myContact.displayName + ", est de sexe " + myContact.gender);
        }
    

        </script>
      </head>
      <body>
        <h1>Exemple</h1>
        <p>Création d'un contact</p>
      </body>
    </html>
