ContactField
============

Conteneur générique d'une propriété d'un objet `Contact`. Parmi les propriétés portées par des objets `ContactField`, on peut trouver les adresses e-mails, les numéros de téléphone et les URLs.

Propriétés
----------

- __type:__ Une chaîne de caractère indiquant de quel type de propriété il s'agit (exemple: 'home'). _(DOMString)_
- __value:__ La valeur de la propriété (par exemple un numéro de téléphone ou une adresse e-mail). _(DOMString)_
- __pref:__ Valorisé à `true` si cet objet `ContactField` correspond à la valeur préférée par l'utilisateur. _(boolean)_

Détails
-------

L'objet `ContactField` est un composant réutilisable destiné à contenir une propriété d'un contact de manière générique. Chaque objet `ContactField` contient un attribut value, type et pref.  Un objet `Contact` contient plusieurs propriétés à l'interieur de tableaux `ContactField[]`, comme par exemple des numéros de téléphone et des adresses e-mail.

Dans la plupart des cas, il n'y a pas de valeur pré-déterminée pour l'attribut __type__ d'un objet `ContactField`.  Par exemple, un numéro de téléphone peut avoir un __type__ valant 'home', 'work', 'mobile', 'iPhone', ou tout autre valeur qui est supportée par la base de contacts de la plateforme mobile utilisée.  Ceci dit, dans le cas précis de la propriété __photos__ de `Contact`, PhoneGap se sert de l'attribut __type__ pour indiquer le format de retour de l'image.  PhoneGap retourne __type: 'url'__ lorsque l'attribut __value__ contient une URI de fichier image, ou __type: 'base64'__ lorsque l'attribut __value__ contient un flux image encodé en Base64.

Plateformes supportées
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 et plus récent)
- iOS

Exemple rapide
--------------

	// Créer un nouveau contact
	var contact = navigator.contacts.create();
	
	// Enregistrer les numéros de téléphone du contact dans un tableau ContactField[]
	var phoneNumbers = [3];
	phoneNumbers[0] = new ContactField('work', '212-555-1234', false);
	phoneNumbers[1] = new ContactField('mobile', '917-555-5432', true); // Numéro préféré
	phoneNumbers[2] = new ContactField('home', '203-555-7890', false);
	contact.phoneNumbers = phoneNumbers;
	
	// Enregistrer le contact
	contact.save();

Exemple complet
---------------

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
			// Créer un nouveau contact
		    var contact = navigator.contacts.create();

			// Enregistrer les numéros de téléphone du contact dans un tableau ContactField[]
			var phoneNumbers = [3];
			phoneNumbers[0] = new ContactField('work', '212-555-1234', false);
			phoneNumbers[1] = new ContactField('mobile', '917-555-5432', true); // Numéro préféré
			phoneNumbers[2] = new ContactField('home', '203-555-7890', false);
			contact.phoneNumbers = phoneNumbers;

			// Enregistrer le contact
			contact.save();

			// Rechercher les contacts, et retourner leur nom d'affichage et leurs numéros de téléphone respectifs
			var options = new ContactFindOptions();
			options.filter="";
			filter = ["displayName","phoneNumbers"];
			navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Affichage de tous les numéros de téléphone des contacts trouvés
        //
		function onSuccess(contacts) {
			for (var i=0; i<contacts.length; i++) {
				// Affichage des numéros de téléphone
				for (var j=0; j<contacts[i].phoneNumbers.length; j++) {
					alert("Type : " + contacts[i].phoneNumbers[j].type + "\n" + 
							"Valeur : "  + contacts[i].phoneNumbers[j].value + "\n" + 
							"Préféré : "  + contacts[i].phoneNumbers[j].pref);
				}
			}
		};
    
        // onError: Echec de récupération des contacts
        //
        function onError(contactError) {
            alert('onError!');
        }

        </script>
      </head>
      <body>
        <h1>Exemple</h1>
        <p>Recherche des contacts</p>
      </body>
    </html>

Singularités Android
--------------------

- __pref:__ Cette propriété n'est pas supportée sur Android 2.X et vaudra toujours `false`.

Singularités BlackBerry WebWorks (OS 5.0 et plus récent)
--------------------------------------------------------

- __type:__ Partiellement supporté.  Utilisé pour les numéros de téléphone.
- __pref:__ Cette propriété n'est pas supportée sur BlackBerry et vaudra toujours `false`.

Singularités iOS
----------------
- __pref:__ Cette propriété n'est pas supportée sur iOS et vaudra toujours `false`.
