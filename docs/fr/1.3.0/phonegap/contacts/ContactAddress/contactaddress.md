ContactAddress
==============

Contient les propriétés relatives à l'adresse, pour un objet `Contact`.

Propriétés
----------
- __pref:__ Valorisé à `true` si cet objet `ContactAddress` correspond à l'adresse préférée par l'utilisateur. _(boolean)_
- __type:__ Chaîne de caractères indiquant de quel type d'adresse il s'agit (exemple: 'home'). _(DOMString)
- __formatted:__ L'adresse complète formatée pour l'affichage. _(DOMString)_
- __streetAddress:__ Le numéro et le nom de voie. _(DOMString)_
- __locality:__ La ville ou lieu-dit. _(DOMString)_
- __region:__ La région ou le département. _(DOMString)_
- __postalCode:__ Le code postal. _(DOMString)_
- __country:__ Le nom du pays. _(DOMString)_

Détails
-------

L'objet `ContactAddress` contient les propriétés relatives à une seule adresse de contact. Un contact peut avoir une ou plusieurs adresses dans un tableau `ContactAddress[]`.

Plateformes supportées
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 et plus récent)
- iOS

Exemple rapide
--------------

	// Afficher toutes les adresses de tous les contacts
    function onSuccess(contacts) {
		for (var i=0; i<contacts.length; i++) {
			for (var j=0; j<contacts[i].addresses.length; j++) {
				alert("Pref: " + contacts[i].addresses[j].pref + "\n" +
						"Type : " + contacts[i].addresses[j].type + "\n" +
						"Version formatée : " + contacts[i].addresses[j].formatted + "\n" + 
						"Numéro et nom de voie : "  + contacts[i].addresses[j].streetAddress + "\n" + 
						"Ville : "  + contacts[i].addresses[j].locality + "\n" + 
						"Région : "  + contacts[i].addresses[j].region + "\n" + 
						"Code postal : "  + contacts[i].addresses[j].postalCode + "\n" + 
						"Pays : "  + contacts[i].addresses[j].country);
			}
		}
    };

    function onError(contactError) {
        alert('onError!');
    };

    // Trouver tous les contacts
    var options = new ContactFindOptions();
	options.filter=""; 
	var filter = ["displayName","addresses"];
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
		    // find all contacts
		    var options = new ContactFindOptions();
			options.filter=""; 
			var filter = ["displayName","addresses"];
		    navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Afficher toutes les adresses de tous les contacts
        //
		function onSuccess(contacts) {
			// Afficher toutes les adresses de tous les contacts
			for (var i=0; i<contacts.length; i++) {
				for (var j=0; j<contacts[i].addresses.length; j++) {
					alert("Pref: " + contacts[i].addresses[j].pref + "\n" +
							"Type: " + contacts[i].addresses[j].type + "\n" +
							"Formatted: " + contacts[i].addresses[j].formatted + "\n" + 
							"Street Address: "  + contacts[i].addresses[j].streetAddress + "\n" + 
							"Locality: "  + contacts[i].addresses[j].locality + "\n" + 
							"Region: "  + contacts[i].addresses[j].region + "\n" + 
							"Postal Code: "  + contacts[i].addresses[j].postalCode + "\n" + 
							"Country: "  + contacts[i].addresses[j].country);
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
        <p>Adresses des contacts</p>
      </body>
    </html>

Singularités Android 2.X
------------------------

- __pref:__ Cette propriété n'est pas supportée sur Android 2.X et vaudra toujours `null`.

Singularités Android 1.X
------------------------

- __pref:__ Cette propriété n'est pas supportée sur Android 1.X et vaudra toujours `false`.
- __type:__ Cette propriété n'est pas supportée sur Android 1.X et vaudra toujours `null`.
- __streetAddress:__ Cette propriété n'est pas supportée sur Android 1.X et vaudra toujours `null`.
- __locality:__ Cette propriété n'est pas supportée sur Android 1.X et vaudra toujours `null`.
- __region:__ Cette propriété n'est pas supportée sur Android 1.X et vaudra toujours `null`.
- __postalCode:__ Cette propriété n'est pas supportée sur Android 1.X et vaudra toujours `null`.
- __country:__ Cette propriété n'est pas supportée sur Android 1.X et vaudra toujours `null`.

Singularités BlackBerry WebWorks (OS 5.0 et plus récent)
--------------------------------------------------------
- __pref:__ Cette propriété n'est pas supportée sur Blackberry et vaudra toujours `false`.
- __type:__ Partiellement supporté.  Seules une adresse de type "Work" et une de type "Home" peuvent être enregistrées par contact. 
- __formatted:__ Partiellement supporté.  Contiendra la concaténation de tous les champs d'adresse BlackBerry.
- __streetAddress:__ Supporté.  Contiendra la concaténation des champs d'adresse BlackBerry __address1__ et __address2__. 
- __locality:__ Supporté.  Stocké dans le champ d'adresse BlackBerry __city__.
- __region:__ Supporté.  Stocké dans le champ d'adresse BlackBerry __stateProvince__.
- __postalCode:__ Supporté.  Stocké dans le champ d'adresse BlackBerry __zipPostal__.

Singularités iOS
----------------
- __pref:__ Cette propriété n'est pas supportée sur iOS et vaudra toujours `false`.
- __formatted:__ Cette propriété n'est pas encore supportée.
