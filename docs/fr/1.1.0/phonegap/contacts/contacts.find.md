contacts.find
=============

Interroge la base de contacts du mobile et retourne un ou plusieurs objets `Contact`, à l'interieur desquels seuls les quelques attributs choisis sont valorisés.

    navigator.contacts.find(contactFields, contactSuccess, contactError, contactFindOptions);

Description
-----------

`contacts.find` est une fonction qui interroge de manière asynchrone la base de contacts du mobile et qui retourne un tableau d'objets `Contact`.  Les objets ainsi obtenus sont passés à la fonction de callback `contactSuccess` spécifiée via le paramètre __contactSuccess__.  

L'utilisateur doit préciser les champs qu'il souhaite cibler dans sa recherche via le paramètre __contactFields__. Seuls les champs précisés dans le paramètre __contactFields__ seront valorisés à l'intérieur les objets `Contact` passés à la fonction de callback __contactSuccess__. Un paramètre __contactFields__ égal à [] aura pour effet d'obtenir un tableau d'objets `Contact` dont seul l'attribut `id` est rempli. Un __contactFields__ égal à ["*"] permet d'obtenir la valorisation de tous les attributs.  

La chaîne de caractères __contactFindOptions.filter__ peut être utilisée comme un filtre de recherche lors de l'interrogation de la base de contacts. Si fourni, il y a recherche de correspondance, partielle et insensible à la casse, avec chaque champ listé dans le paramètre __contactFields__. Si une correspondance est trouvée avec l'un des champs spécifiés, le contact est retourné.

Paramètres
----------

- __contactFields:__ Attributs de `Contact` qui sont ciblés par la recherche. Seuls ces champs seront valorisés à l'intérieur les objets `Contact`. _(DOMString[])_ [Obligatoire]
- __contactSuccess:__ Fonction de callback en succès qui sera invoquée avec les contacts retournés par la recherche. [Obligatoire]
- __contactError:__ Fonction de callback d'erreur. Invoquée lorsqu'une erreur survient. [Facultatif]
- __contactFindOptions:__ Options de filtrage des contacts. [Facultatif]

Plateformes supportées
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 et plus récent)
- iOS

Exemple rapide
--------------

    function onSuccess(contacts) {
        alert(contacts.length + ' contacts trouvés.');
    };

    function onError(contactError) {
        alert('onError!');
    };

    // Rechercher tous les contacts qui ont 'Bob' dans l'un de leurs champs de nom
    var options = new ContactFindOptions();
	options.filter="Bob"; 
	var fields = ["displayName", "name"];
    navigator.contacts.find(fields, onSuccess, onError, options);

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
		    // Rechercher tous les contacts qui ont 'Bob' dans l'un de leurs champs de nom
		    var options = new ContactFindOptions();
			options.filter="Bob"; 
			var fields = ["displayName", "name"];
		    navigator.contacts.find(fields, onSuccess, onError, options);
        }
    
        // onSuccess: Afficher le nom de tous les contacts trouvés
        //
        function onSuccess(contacts) {
			for (var i=0; i<contacts.length; i++) {
				console.log("Nom d'affichage = " + contacts[i].displayName);
			}
        }
    
        // onError: Echec de récupération des contacts
        //
        function onError(contactError) {
            alert('onError!');
        }

        </script>
      </head>
      <body>
        <h1>Exemple</h1>
        <p>Recherche de contacts</p>
      </body>
    </html>
    

