Contact
=======

Contient des propriétés décrivant un contact, tel qu'un contact personnel ou professionnel.

Propriétés
----------

- __id:__ L'identifiant unique du contact. _(DOMString)_
- __displayName:__ Le nom du contact tel qu'il sera affiché à un utilisateur final. _(DOMString)_
- __name:__ Un objet contenant tous les composants du nom du contact. _(ContactName)_
- __nickname:__ Le nom d'usage utilisé pour désigner le contact. _(DOMString)_
- __phoneNumbers:__ Un tableau de tous les numéros de téléphone du contact. _(ContactField[])_
- __emails:__ Un tableau de toutes les adresses e-mail du contact. _(ContactField[])_
- __addresses:__ Un tableau de toutes les adresses du contact. _(ContactAddresses[])_
- __ims:__ Un tableau de toutes les adresses de messagerie instantanée du contact. _(ContactField[])_
- __organizations:__ Un tableau de toutes les organisations du contact. _(ContactOrganization[])_
- __birthday:__ La date de naissance du contact. _(Date)_
- __note:__ Une remarque à propos du contact. _(DOMString)_
- __photos:__ Un tableau de toutes les photos du contact. _(ContactField[])_
- __categories:__ Un tableau de toutes les catégories auxquelles appartient le contact. _(ContactField[])_
- __urls:__ Un tableau de toutes les URLs de pages web associées au contact. _(ContactField[])_

Méthodes
--------

- __clone__: Retourne un nouvel objet Contact qui est une copie intégrale de l'objet appelant, avec la propriété `id` valorisée à `null`. 
- __remove__: Supprime le contact de la base de contacts du mobile. Un callback d'erreur est appelé avec un objet `ContactError` si la suppression a échoué.
- __save__: Enregistre un nouveau contact dans la base de contacts du mobile, ou met à jour un contact s'il existe déjà un contact possédant le même __id__.


Details
-------

L'objet `Contact` représente un contact de l'utilisateur. Des contacts peuvent être ajoutés, modifiés ou supprimés de la base des contacts du mobile. Des contacts peuvent également être retrouvés (unitairement ou en masse) depuis la base en invoquant la méthode `contacts.find`. 

_Remarque: Toutes les propriétés ci-dessus ne sont pas supportées par toutes plateformes. Veuillez consulter la section Singularités de votre plateforme pour savoir quelles propriétés sont supportées ou non._

Plateformes supportées
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 et plus récent)
- iOS

Exemple rapide de Save
----------------------

	function onSuccess(contact) {
		alert("Enregistrement réussi");
	};

	function onError(contactError) {
		alert("Erreur = " + contactError.code);
	};

	// Créer un nouvel objet contact
    var contact = navigator.contacts.create();
	contact.displayName = "Plombier";
	contact.nickname = "Plombier"; 		// Préciser les deux propriétés pour que cela marche sur tous les mobiles
	
	// Renseigner quelques champs
	var name = new ContactName();
	name.givenName = "Jane";
	name.familyName = "Doe";
	contact.name = name;
	
	// Enregistrer dans la base du mobile
	contact.save(onSuccess,onError);

Exemple rapide de Clone
-----------------------

	// Cloner l'objet contact
	var clone = contact.clone();
	clone.name.givenName = "John";
	console.log("Nom du contact de départ = " + contact.name.givenName);
	console.log("Nom du contact cloné = " + clone.name.givenName); 

Exemple rapide de Remove
------------------------

    function onSuccess() {
        alert("Suppression réussie");
    };

    function onError(contactError) {
        alert("Erreur = " + contactError.code);
    };

	// Supprimer le contact de la base du mobile
	contact.remove(onSuccess,onError);

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
			contact.displayName = "Plombier";
			contact.nickname = "Plombier"; 		// Préciser les deux propriétés pour que cela marche sur tous les mobiles
			var name = new ContactName();
			name.givenName = "Jane";
			name.familyName = "Doe";
			contact.name = name;

			// Enregistrer le contact
			contact.save(onSaveSuccess,onSaveError);
			
			// Cloner le contact
			var clone = contact.clone();
			clone.name.givenName = "John";
			console.log("Nom du contact de départ = " + contact.name.givenName);
			console.log("Nom du contact cloné = " + clone.name.givenName); 
			
			// Supprimer le contact
			contact.remove(onRemoveSuccess,onRemoveError);
        }
        
        // onSaveSuccess: callback appelé en cas de réussite de l'enregistrement
        //
        function onSaveSuccess(contact) {
			alert("Enregistrement réussi");
        }
    
        // onSaveError: callback appelé en cas d'échec de l'enregistrement
        //
        function onSaveError(contactError) {
			alert("Erreur = " + contactError.code);
        }
        
        // onRemoveSuccess: callback appelé en cas de réussite de la suppression
        //
        function onRemoveSuccess(contacts) {
			alert("Suppression réussie");
        }
    
        // onRemoveError: callback appelé en cas d'échec de la suppression
        //
        function onRemoveError(contactError) {
			alert("Erreur = " + contactError.code);
        }

        </script>
      </head>
      <body>
        <h1>Exemple</h1>
        <p>Manipulation des contacts</p>
      </body>
    </html>

Singularités Android 2.X
------------------------

- __categories:__ Cette propriété n'est pas supportée sur Android 2.X et vaudra toujours `null`.

Singularités Android 1.X
------------------------

- __name:__ Cette propriété n'est pas supportée sur Android 1.X et vaudra toujours `null`.
- __nickname:__ Cette propriété n'est pas supportée sur Android 1.X et vaudra toujours `null`.
- __birthday:__ Cette propriété n'est pas supportée sur Android 1.X et vaudra toujours `null`.
- __photos:__ Cette propriété n'est pas supportée sur Android 1.X et vaudra toujours `null`.
- __categories:__  Cette propriété n'est pas supportée sur Android 1.X et vaudra toujours `null`.
- __urls:__  Cette propriété n'est pas supportée sur Android 1.X et vaudra toujours `null`.


Singularités BlackBerry WebWorks (OS 5.0 et plus récent)
--------------------------------------------------------

- __id:__ Supporté.  Défini par le mobile lorsque le contact est enregistré.
- __displayName:__ Supporté.  Stocké dans le champ BlackBerry __user1__.
- __nickname:__ Cette propriété n'est pas supportée et vaudra toujours `null`.
- __phoneNumbers:__ Partiellement supporté.  Les numéros de téléphone sont stockées dans les champs BlackBerry __homePhone1__ et __homePhone2__ si _type_ vaut 'home', __workPhone1__ et __workPhone2__ si _type_ vaut 'work', __mobilePhone__ si _type_ vaut 'mobile', __faxPhone__ si _type_ vaut 'fax', __pagerPhone__ si _type_ vaut 'pager', et __otherPhone__ si _type_ vaut autre chose.
- __emails:__ Partiellement supporté. Les trois premières adresses e-mail sont stockées respectivement dans les champs BlackBerry __email1__, __email2__, et __email3__.
- __addresses:__ Partiellement supporté.  La deux premières adresses sont stockées respectivement dans les champs BlackBerry __homeAddress__ et __workAddress__.
- __ims:__ Cette propriété n'est pas supportée et vaudra toujours `null`.
- __organizations:__ Partiellement supporté.  Les propriétés __name__ et __title__ de la première organisation sont stockées respectivement dans les champs BlackBerry __company__ et __title__.
- __photos:__ - Partiellement supporté.  Une seule photo, taille vignette, est autorisée.  Pour attribuer une photo à un contact, passer soit un flux image encodé en Base64, soit l'URI d'une image.  L'image sera redimensionnée en vignette avant d'être enregistrée dans la base de contacts BlackBerry.  La photo du contact est toujours renvoyée sour forme de flux encodé en Base64.
- __categories:__  Partiellement supporté.  Seules les catégories 'Business' et 'Personal' sont autorisées.
- __urls:__  Partiellement supporté. La première URL est stockée dans le champ BlackBerry __webpage__.

Singularités iOS
----------------
- __displayName:__ Cette propriété n'est pas supportée sur iOS et sera ignorée à l'enregistrement sauf si aucun `ContactName` n'est renseigné.  A la récupération du contact, si aucun `ContactName` n'est renseigné, alors le "Composite Name" iOS, __nickame__ ou "" sera utilisé comme valeur de __displayName__. 
- __birthday:__ En entrée, cette propriété doit être valorisée avec un objet Date JavaScript. Elle est renvoyée également sous forme d'objet Date JavaScript.
- __photos:__ La photo du contact est déposée dans le dossier temporaire de l'application et c'est l'URI de ce fichier image qui est renvoyée. Le contenu du dossier temporaire est supprimé à la fermeture de l'application.
- __categories:__ Cette propriété n'est pas supportée et vaudra toujours `null`.
