ContactOrganization
===================

Contient les propriétés relatives à l'organisation, pour un objet `Contact`.

Propriétés
----------
- __pref:__ Valorisé à `true` si cet objet `ContactOrganization` correspond à l'organisation préférée par l'utilisateur. _(boolean)_
- __type:__ Chaîne de caractères indiquant de quel type d'organisation il s'agit (exemple: 'home'). _(DOMString)
- __name:__ Le nom de l'organisation. _(DOMString)_
- __department:__ Le département pour lequel le contact travaille. _(DOMString)_
- __title:__ Le poste que le contact occupe dans cette organisation. _(DOMString)_

Détails
-------

L'objet `ContactOrganization` stocke les propriétés relatives à l'organisation à laquelle un contact appartient.  Un objet `Contact` peut contenir un ou plusieurs objets `ContactOrganization` dans un tableau.

Plateformes supportées
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 et plus récent)
- iOS

Exemple rapide
--------------

    function onSuccess(contacts) {
		for (var i=0; i<contacts.length; i++) {
			for (var j=0; j<contacts[i].organizations.length; j++) {
				alert("Pref : " + contacts[i].organizations[j].pref + "\n" +
						"Type : " + contacts[i].organizations[j].type + "\n" +
						"Nom : " + contacts[i].organizations[j].name + "\n" + 
						"Département : "  + contacts[i].organizations[j].department + "\n" + 
						"Poste : "  + contacts[i].organizations[j].title);
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
			filter = ["displayName","organizations"];
			navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Afficher toutes les organisations de tous les contacts
        //
		function onSuccess(contacts) {
			for (var i=0; i<contacts.length; i++) {
				for (var j=0; j<contacts[i].organizations.length; j++) {
					alert("Pref : " + contacts[i].organizations[j].pref + "\n" +
							"Type : " + contacts[i].organizations[j].type + "\n" +
							"Nom : " + contacts[i].organizations[j].name + "\n" + 
							"Département : "  + contacts[i].organizations[j].department + "\n" + 
							"Poste : "  + contacts[i].organizations[j].title);
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
        <p>Organisations des contacts</p>
      </body>
    </html>
	

Singularités Android 2.X
------------------------

- __pref:__ Cette propriété n'est pas supportée sur Android 2.X et vaudra toujours `false`.

Singularités Android 1.X
------------------------

- __pref:__ Cette propriété n'est pas supportée sur Android 1.X et vaudra toujours `false`.
- __type:__ Cette propriété n'est pas supportée sur Android 1.X et vaudra toujours `null`.
- __title:__ Cette propriété n'est pas supportée sur Android 1.X et vaudra toujours `null`.

Singularités BlackBerry WebWorks (OS 5.0 et plus récent)
--------------------------------------------------------
- __pref:__ Cette propriété n'est pas supportée sur Blackberry et vaudra toujours `false`.
- __type:__ Cette propriété n'est pas supportée sur Blackberry et vaudra toujours `null`.
- __name:__ Partiellement supporté.  Le nom de la première organisation sera stocké dans le champ BlackBerry __company__.
- __department:__ Cette propriété n'est pas supportée sur Blackberry et vaudra toujours `null`.
- __title:__ Partiellement supporté.  Le poste occupé dans la première organisation sera stocké dans le champ BlackBerry __jobTitle__.

Singularités iOS
----------------
- __pref:__ Cette propriété n'est pas supportée sur iOS et vaudra toujours `false`.
- __type:__ Cette propriété n'est pas supportée sur iOS et vaudra toujours `null`.
- __name:__ Partiellement supporté.  Le nom de la première organisation sera stocké dans le champ iOS __kABPersonOrganizationProperty__.
- __department__: Partiellement supporté.  Le département du contact dans la première organisation sera stocké dans le champ iOS __kABPersonDepartmentProperty__.
- __title__: Partiellement supporté.  Le poste occupé dans la première organisation sera stocké dans le champ iOS __kABPersonJobTitleProperty__.


