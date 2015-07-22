---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# Contact

Contient des propriétés qui décrivent un contact, comme les contacts personnels ou professionnels d'un utilisateur par exemple.

## Propriétés

*   **id** : un identifiant globalement unique. *(DOMString)*

*   **displayName** : le nom du contact, utile pour l'affichage à l'utilisateur final. *(DOMString)*

*   **name** : un objet contenant tous les composants du nom de la personne. *(ContactName)*

*   **nickname** : un nom occasionnel se référant au contact. *(DOMString)*

*   **phoneNumbers** : un tableau des numéros de téléphone du contact. *(ContactField[])*

*   **emails** : un tableau des adresses email du contact. *(ContactField[])*

*   **addresses** : un tableau contenant toutes les adresses du contact. *(ContactAddress[])*

*   **ims** : un tableau contenant les adresses de messagerie instantanée du contact. *(ContactField[])*

*   **organizations** : un tableau contenant les organismes liés au contact. *(ContactOrganization[])*

*   **birthday** : la date d'anniversaire du contact. *(Date)*

*   **note** : une remarque à propos du contact. *(DOMString)*

*   **photos** : un tableau de photos du contact. *(ContactField[])*

*   **categories** : un tableau de toutes les catégories définies par l'utilisateur attribuées au contact. *(ContactField[])*

*   **urls** : un tableau d'adresses Web attribuées au contact. *(ContactField[])*

## Méthodes

*   **clone** : retourne un nouvel objet `Contact`, copie récursive de l'objet cloné, sa propriété `id` vaudra cependant `null`.

*   **remove** : supprime le contact de la base de données de contacts de l'appareil, sinon exécute une fonction callback d'erreur en lui passant un objet `ContactError`.

*   **save** : enregistre un nouveau contact dans la base de données de contacts de l'appareil, ou met à jour un contact existant si un contact avec le même **id** existe déjà.

## Détails

L'objet `Contact` représente un contact de l'utilisateur. Des contacts peuvent être créés, stockés ou supprimés de la base de données de contacts de l'appareil. Ils peuvent également être récupérées (individuellement ou en lot) dans la base de données en appelant la méthode `contacts.find`.

**Remarque :** l'ensemble des propriétés de contact énuméré ci-dessus n'est pas supporté par toutes les plates-formes. Veuillez vous référer aux *Notes* relatives à chaque plate-forme pour plus de détails.

## Plates-formes supportées

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## Exemple court d'enregistrement

    function onSuccess(contact) {
        alert("Save Success");
    };
    
    function onError(contactError) {
        alert("Error = " + contactError.code);
    };
    
    // create a new contact object
    var contact = navigator.contacts.create();
    contact.displayName = "Plumber";
    contact.nickname = "Plumber";            // specify both to support all devices
    
    // populate some fields
    var name = new ContactName();
    name.givenName = "Jane";
    name.familyName = "Doe";
    contact.name = name;
    
    // save to device
    contact.save(onSuccess,onError);
    

## Exemple court de clonage

        // clone the contact object
        var clone = contact.clone();
        clone.name.givenName = "John";
        console.log("Original contact name = " + contact.name.givenName);
        console.log("Cloned contact name = " + clone.name.givenName);
    

## Exemple court de suppression

    function onSuccess() {
        alert("Removal Success");
    };
    
    function onError(contactError) {
        alert("Error = " + contactError.code);
    };
    
        // remove the contact from the device
        contact.remove(onSuccess,onError);
    

## Exemple complet

    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            // create
            var contact = navigator.contacts.create();
            contact.displayName = "Plumber";
            contact.nickname = "Plumber";                 // specify both to support all devices
            var name = new ContactName();
            name.givenName = "Jane";
            name.familyName = "Doe";
            contact.name = name;
    
            // save
            contact.save(onSaveSuccess,onSaveError);
    
            // clone
            var clone = contact.clone();
            clone.name.givenName = "John";
            console.log("Original contact name = " + contact.name.givenName);
            console.log("Cloned contact name = " + clone.name.givenName);
    
            // remove
            contact.remove(onRemoveSuccess,onRemoveError);
        }
    
        // onSaveSuccess: Get a snapshot of the current contacts
        //
        function onSaveSuccess(contact) {
            alert("Save Success");
        }
    
        // onSaveError: Failed to get the contacts
        //
        function onSaveError(contactError) {
            alert("Error = " + contactError.code);
        }
    
        // onRemoveSuccess: Get a snapshot of the current contacts
        //
        function onRemoveSuccess(contacts) {
            alert("Removal Success");
        }
    
        // onRemoveError: Failed to get the contacts
        //
        function onRemoveError(contactError) {
            alert("Error = " + contactError.code);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Find Contacts</p>
      </body>
    </html>
    

## Notes au sujet d'Android 2.X

*   **categories** : non pris en charge sur les périphériques Android 2.X, valeur `null`.

## Notes au sujet de BlackBerry WebWorks (OS 5.0 et plus)

*   **id** : supporté, attribué par l'appareil lors de l'enregistrement du contact.

*   **displayName** : supporté, stocké dans le champ BlackBerry **user1**.

*   **nickname** : pas pris en charge, valeur `null`.

*   **phoneNumbers** : partiellement pris en charge. Les numéros de téléphone sont enregistrés dans les champs BlackBerry **homePhone1** et **homePhone2** si le *type* est 'home', **workPhone1** et **workPhone2** si le *type* est 'work', **mobilePhone** si le *type* est 'mobile', **faxPhone** si le *type* est 'fax', **pagerPhone** si le *type* est 'pager' et **otherPhone** si le *type* n'est aucun de ceux listés.

*   **emails** : partiellement pris en charge. Les trois premières adresses sont stockées respectivement dans les champs BlackBerry **email1**, **email2**et **email3**.

*   **addresses** : partiellement pris en charge. La première et la deuxième adresse sont stockées respectivement dans les champs BlackBerry **homeAddress** et **workAddress**.

*   **ims** : pas supporté, valeur `null`.

*   **organizations** : partiellement pris en charge. Les propriétés **name** et **title** du premier organisme sont stockées respectivement dans les champs BlackBerry **company** et **title**.

*   **photos** : partiellement pris en charge. Seule une miniature est supportée. Pour définir la photo d'un contact, passez soit une image encodée en base64, soit une URL pointant vers l'image souhaitée. L'image sera réduite avant d'être enregistrée dans la base de données de contacts BlackBerry. La photo du contact sera ensuite retournée en tant qu'image encodée en base64.

*   **categories** : partiellement pris en charge. Seules les catégories *Business* et *Personal* sont supportées.

*   **urls** : partiellement pris en charge. La première URL est stockée dans le champ BlackBerry **webpage**.

## Notes au sujet d'iOS

*   **displayName** : pas pris en charge, valeur `null` à moins qu'il n'y ait aucun `ContactName` spécifié, auquel cas, renvoie le nom composite : **nickname** ou `""`.

*   **birthday** : doit être un object `Date` JavaScript, il sera aussi retourné en tant que tel.

*   **photos** : renvoie une URL de fichier de l'image stockée dans le répertoire temporaire de l'application. Le contenu de ce dernier est supprimé lorsque l'application est fermée.

*   **categories** : cette propriété n'est actuellement pas supportée, valeur `null`.

## Notes au sujet de Windows Phone 7 et 8

*   **displayName** : lorsqu'un contact est créé, la valeur fournie pour le paramètre de nom d'affichage est différente de celle récupérée lors de la récupération ultérieure du contact.

*   **urls** : lors de la création d'un contact, les utilisateurs peuvent saisir et enregistrer plusieurs adresses Web, mais seulement une sera disponible lors de la récupération du contact.

*   **phoneNumbers** : l'option *pref* n'est pas prise en charge. Le *type* n'est pas supporté lors d'un appel à *find*. Seul `phoneNumber` est autorisé pour chaque *type*.

*   **emails** : l'option *pref* n'est pas prise en charge. Maison et personnel font référence à la même entrée d'email. Une seule entrée est autorisée pour chaque *type*.

*   **addresses** : prend en charge seulement les *type*s travail et maison/personnel. Les *type*s maison et personnel font référence à la même entrée d'adresse. Une seule entrée est autorisée pour chaque *type*.

*   **organizations** : une seule entrée autorisée, les attributs *pref*, *type* et *department* ne sont pas supportés.

*   **note** : pas pris en charge, valeur `null`.

*   **ims** : pas pris en charge, valeur `null`.

*   **birthdays** : pas pris en charge, valeur `null`.

*   **categories** : pas pris en charge, valeur `null`.