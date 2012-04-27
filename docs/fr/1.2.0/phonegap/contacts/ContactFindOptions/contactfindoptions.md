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

ContactFindOptions
==================

Contient des propriétés qui peuvent être utilisées pour filtrer les résultats d'une recherche `contacts.find`. 

Propriétés
----------

- __filter:__ La chaîne de caractères utilisée pour la recherche de contacts. _(DOMString)_ (Default: "")
- __multiple:__ Indique s'il faut que la recherche retourne plusieurs contacts. _(Boolean)_ (Default: false)


Plateformes supportées
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 et plus récent)
- iOS

Exemple rapide
--------------

	// Callback de succès
    function onSuccess(contacts) {
		for (var i=0; i<contacts.length; i++) {
			alert(contacts[i].displayName);
		}
    };

	// Callback d'erreur
    function onError(contactError) {
        alert('onError!');
    };

	// Spécifier des critères de recherche de contacts
    var options = new ContactFindOptions();
	options.filter="";			// une chaine vide permet de retrouver tous les contacts
	options.multiple=true;		// on veut que plusieurs résultats soient retournés
	filter = ["displayName"];	// on veut obtenir uniquement l'attribut contact.displayName des résultats
	
	// Lancer la recherche des contacts
    navigator.contacts.find(filter, onSuccess, onError, options);

Exemple complet
---------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Exemple Contact</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-1.2.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Attendre que PhoneGap soit prêt
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap est prêt
        //
        function onDeviceReady() {
			// Spécifier des critères de recherche de contacts
		    var options = new ContactFindOptions();
			options.filter="";			// une chaine vide permet de retrouver tous les contacts
			options.multiple=true;		// on veut que plusieurs résultats soient retournés
			filter = ["displayName"];	// on veut obtenir uniquement l'attribut contact.displayName des résultats

			// Lancer la recherche des contacts
		    navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Afficher les noms de tous les contacts trouvés
        //
		function onSuccess(contacts) {
			for (var i=0; i<contacts.length; i++) {
				alert(contacts[i].displayName);
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
        <p>Recherche de Contacts</p>
      </body>
    </html>

