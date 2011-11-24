ContactName
===========

Contient les propriétés relatives au nom, pour un objet `Contact`.

Propriétés
----------

- __formatted:__ Le nom complet du contact. _(DOMString)_
- __familyName:__ Le nom de famille. _(DOMString)_
- __givenName:__ Le prénom. _(DOMString)_
- __middleName:__ Le deuxième prénom. _(DOMString)_
- __honorificPrefix:__ Un préfixe (par exemple Mr. ou Dr.) _(DOMString)_
- __honorificSuffix:__ Un suffixe (par exemple Esq. ou Jr.). _(DOMString)_

Détails
-------

L'objet `ContactName` contient les propriétés relatives au nom d'un contact.

Plateformes supportées
----------------------

- Android 2.X
- BlackBerry WebWorks (OS 5.0 et plus récent)
- iOS

Exemple rapide
--------------

    function onSuccess(contacts) {
		for (var i=0; i<contacts.length; i++) {
			alert("Nom complet : " + contacts[i].name.formatted + "\n" + 
					"Nom de famille : "  + contacts[i].name.familyName + "\n" + 
					"Prénom : "  + contacts[i].name.givenName + "\n" + 
					"Deuxième prénom : "  + contacts[i].name.middleName + "\n" + 
					"Suffixe : "  + contacts[i].name.honorificSuffix + "\n" + 
					"Préfixe : "  + contacts[i].name.honorificPrefix);
		}
    };

    function onError(contactError) {
        alert('onError!');
    };

    var options = new ContactFindOptions();
	options.filter="";
	filter = ["displayName","name"];
    navigator.contacts.find(filter, onSuccess, onError, options);

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
			var options = new ContactFindOptions();
			options.filter="";
			filter = ["displayName","name"];
			navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Afficher le nom de tous les contacts
        //
		function onSuccess(contacts) {
			for (var i=0; i<contacts.length; i++) {
				alert("Nom complet : " + contacts[i].name.formatted + "\n" + 
						"Nom de famille : "  + contacts[i].name.familyName + "\n" + 
						"Prénom : "  + contacts[i].name.givenName + "\n" + 
						"Deuxième prénom : "  + contacts[i].name.middleName + "\n" + 
						"Suffixe : "  + contacts[i].name.honorificSuffix + "\n" + 
						"Préfixe : "  + contacts[i].name.honorificPrefix);
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
        <p>Nom des contacts</p>
      </body>
    </html>

Singularités Android
--------------------
- __formatted:__ Partiellement supporté.  Retournera la concaténation de honorificPrefix, givenName, middleName, familyName et honorificSuffix mais ne sera pas stocké.

Singularités BlackBerry WebWorks (OS 5.0 et plus récent)
--------------------------------------------------------

- __formatted:__ Partiellement supporté.  Retournera la concaténation des champs BlackBerry __firstName__ et __lastName__.
- __familyName:__ Supporté.  Stocké dans le champ BlackBerry __lastName__.
- __givenName:__ Supporté.  Stocké dans le champ BlackBerry __firstName__.
- __middleName:__ Cette propriété n'est pas supportée et vaudra toujours `null`.
- __honorificPrefix:__ Cette propriété n'est pas supportée et vaudra toujours `null`.
- __honorificSuffix:__ Cette propriété n'est pas supportée et vaudra toujours `null`.

Singularités iOS
----------------
- __formatted:__ Partiellement supporté.  Retournera le Composite Name iOS et ne sera pas stocké.
