---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
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


# Contacts

> L'objet `contacts` fournit l'accès à la base de données de contacts de l'appareil.

**Remarque importante sur la vie privée :** La collecte et l'utilisation des données de contact soulève des questions importantes concernant la vie privée. La politique de confidentialité de votre application doit examiner comment l'application utilise les données de contact et si elles sont partagées avec d'autres parties. Les information de contact sont considérés comme sensibles parce qu'elles révèlent les gens avec lesquels une personne communique. Par conséquent, en plus de la politique de confidentialité de votre application, vous devez envisager fortement de fournir une alerte au dernier moment avant que votre application n'accède ou en utilise les données de contact (si le système d'exploitation de l'appareil ne l'a pas déjà fait). Cet avis doit fournir les mêmes renseignements mentionnés précédemment, ainsi qu'obtenir l'autorisation de l'utilisateur (par exemple, en présentant des choix **OK** et **Non merci**). Notez que certains marchés d'applications peuvent exiger de votre application qu'elle fournisse une alerte au dernier moment et obtienne l'autorisation de l'utilisateur avant d'accéder à des données de contact. Une expérience utilisateur claire et facile à comprendre autour de l'utilisation des données de contact permettra d'éviter la confusion des utilisateurs et une utilisation jugée abusive des données de contact. Pour plus d'informations, consultez le Guide de la vie privée.

## Méthodes

*   contacts.Create
*   contacts.Find

## Arguments

*   contactFields
*   contactSuccess
*   contactError
*   contactFindOptions

## Objets

*   Contact
*   ContactName
*   ContactField
*   ContactAddress
*   ContactOrganization
*   ContactFindOptions
*   ContactError

## Accéder à la fonctionnalité

Depuis la version 3.0, Cordova implémente les APIs au niveau de l'appareil comme des *plugins*. Utilisez le plugin `plugin` CLI, décrit dans l'Interface de ligne de commande, pour ajouter ou supprimer cette fonctionnalité pour un projet :

        $ cordova plugin add org.apache.cordova.contacts
        $ cordova plugin ls
        [ 'org.apache.cordova.contacts' ]
        $ cordova plugin rm org.apache.cordova.contacts
    

Ces commandes s'appliquent à toutes les plates-formes ciblées, mais modifient les paramètres de configuration spécifiques à la plateforme décrites ci-dessous :

*   Android
    
        (in app/res/xml/config.xml)
        <feature name="Contacts">
            <param name="android-package" value="org.apache.cordova.ContactManager" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.GET_ACCOUNTS" />
        <uses-permission android:name="android.permission.READ_CONTACTS" />
        <uses-permission android:name="android.permission.WRITE_CONTACTS" />
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml)
        <feature name="Contact">
            <param name="blackberry-package" value="org.apache.cordova.pim.Contact" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.find"        required="true" version="1.0.0.0" />
        <feature id="blackberry.identity"    required="true" version="1.0.0.0" />
        <feature id="blackberry.pim.Address" required="true" version="1.0.0.0" />
        <feature id="blackberry.pim.Contact" required="true" version="1.0.0.0" />
        

*   iOS (en`config.xml`)
    
        <feature name="Contacts">
            <param name="ios-package" value="CDVContacts" />
        </feature>
        

*   Windows Phone
    
        (in Properties/WPAppManifest.xml)
        <Capabilities>
            <Capability Name="ID_CAP_CONTACTS" />
        </Capabilities>
        
    
    Référence : [manifeste d'Application pour Windows Phone][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

Certaines plates-formes peuvent prendre en charge cette fonctionnalité sans nécessiter aucune configuration spéciale. Voir *Support de plate-forme* dans la section vue d'ensemble.


# contacts.Create

Retourne un nouvel objet Contact.

    var contact = navigator.contacts.create(properties);
    

## Description

La méthode `contacts.create` est synchrone et retourne un nouvel objet `Contact`.

Cette méthode ne conserve pas l'objet Contact dans la base de données des contacts de l'appareil, pour lesquels il faut appeler la méthode `Contact.save`.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8

## Petit exemple

    var myContact = navigator.contacts.create({"displayName": "Test User"});
    

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
            var myContact = navigator.contacts.create({"displayName": "Test User"});
            myContact.note = "This contact has a note.";
            console.log("The contact, " + myContact.displayName + ", note: " + myContact.note);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Create Contact</p>
      </body>
    </html>


# contacts.find

Interroge la base de données de contacts de l'appareil et renvoie un ou plusieurs objet `Contact`, chacun contenant les champs spécifiés.

    navigator.contacts.find(contactFields, contactSuccess, contactError, contactFindOptions);
    

## Description

La méthode `contacts.find` s'exécute de façon asynchrone, interrogeant la base de données de contacts de l'appareil et retournant un tableau d'objets `Contact`. Les objets retournés sont passés à la fonction de callback `contactSuccess` spécifiée par le paramètre **contactSuccess** .

Le paramètre **contactFields** spécifie les champs à utiliser comme un qualificateur de recherche, et seulement ces résultats sont passés à la fonction de callback **contactSuccess**. Un paramètre de longueur nulle **contactFields** n'est pas valide et provoque une erreur `ContactError.INVALID_ARGUMENT_ERROR`. Une valeur de **contactFields** de `"*"` retourne les champs de tout contact.

La chaîne **contactFindOptions.filter** peut être utilisée comme un filtre de recherche lorsque vous interrogez la base de données de contacts. Si fourni, une valeur insensible à la casse et partiellement correspondante est appliquée à chaque champ spécifié dans le paramètre **contactFields**. S'il y a une correspondance pour *n'importe lequel* des champs spécifiés, le contact est retourné.

## Paramètres

*   **contactFields** : champs du Contact à utiliser comme un qualificateur de recherche. L'objet `Contact` retourné dispose seulement des valeurs pour ces champs. *(DOMString[])* [Obligatoire]

*   **contactSuccess**: fonction de callback de succès appelée avec les contacts retournés par la base de données. [Obligatoire]

*   **contactError** : fonction de callback d'erreur, appelée lorsqu'une erreur se produit. [Facultatif]

*   **contactFindOptions** : options de recherche pour filtrer les contacts. [Facultatif]

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## Petit exemple

    function onSuccess(contacts) {
        alert('Found ' + contacts.length + ' contacts.');
    };
    
    function onError(contactError) {
        alert('onError!');
    };
    
    // find all contacts with 'Bob' in any name field
    var options      = new ContactFindOptions();
    options.filter   = "Bob";
    options.multiple = true;
    var fields       = ["displayName", "name"];
    navigator.contacts.find(fields, onSuccess, onError, options);
    

## Exemple complet

    <!DOCTYPE html>
    <html>
        <head>
            <title>Contact Example</title>
            <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
            <script type="text/javascript" charset="utf-8">
    
                // Wait for device API libraries to load
                document.addEventListener("deviceready", onDeviceReady, false);
    
                // device APIs are available
    
                function onDeviceReady() {
                    // find all contacts with 'Bob' in any name field
                    var options = new ContactFindOptions();
                    options.filter = "Bob";
                    var fields = ["displayName", "name"];
                    navigator.contacts.find(fields, onSuccess, onError, options);
                }
    
                // onSuccess: Get a snapshot of the current contacts
    
                function onSuccess(contacts) {
                    for (var i = 0; i < contacts.length; i++) {
                        console.log("Display Name = " + contacts[i].displayName);
                    }
                }
    
                // onError: Failed to get the contacts
    
                function onError(contactError) {
                    alert('onError!');
                }
            </script>
        </head>
    
        <body>
            <h1>Example</h1>
            <p>Find Contacts</p>
        </body>
    </html>


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


# ContactAddress

Contient les propriétés de l'adresse pour un objet `Contact`.

## Propriétés

*   **pref** : la valeur `true` si `ContactAddress` contient la valeur de préférence de l'utilisateur. *(booléen)*

*   **type** : une chaîne qui indique le type de champ, *maison* par exemple. *(DOMString)*

*   **formatted** : l'adresse complète formattée pour l'affichage. *(DOMString)*

*   **streetAddress** : l'adresse complète. *(DOMString)*

*   **locality** : la ville ou la localité. *(DOMString)*

*   **region** : l'État ou la région. *(DOMString)*

*   **postalCode** : le code zip ou code postal. *(DOMString)*

*   **country** : le nom du pays. *(DOMString)*

## Détails

L'objet `ContactAddress` stocke les propriétés d'une seule adresse d'un contact. Un objet `Contact` peut inclure plusieurs adresses dans un tableau `ContactAddress[]`.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## Petit exemple

    // display the address information for all contacts
    
    function onSuccess(contacts) {
        for (var i = 0; i < contacts.length; i++) {
            for (var j = 0; j < contacts[i].addresses.length; j++) {
                alert("Pref: "         + contacts[i].addresses[j].pref          + "\n" +
                    "Type: "           + contacts[i].addresses[j].type          + "\n" +
                    "Formatted: "      + contacts[i].addresses[j].formatted     + "\n" +
                    "Street Address: " + contacts[i].addresses[j].streetAddress + "\n" +
                    "Locality: "       + contacts[i].addresses[j].locality      + "\n" +
                    "Region: "         + contacts[i].addresses[j].region        + "\n" +
                    "Postal Code: "    + contacts[i].addresses[j].postalCode    + "\n" +
                    "Country: "        + contacts[i].addresses[j].country);
            }
        }
    };
    
    function onError(contactError) {
        alert('onError!');
    };
    
    // find all contacts
    var options = new ContactFindOptions();
    options.filter = "";
    var filter = ["displayName", "addresses"];
    navigator.contacts.find(filter, onSuccess, onError, options);
    

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
            // find all contacts
            var options = new ContactFindOptions();
            options.filter = "";
            var filter = ["displayName", "addresses"];
            navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
        function onSuccess(contacts) {
            // display the address information for all contacts
            for (var i = 0; i < contacts.length; i++) {
                for (var j = 0; j < contacts[i].addresses.length; j++) {
                    alert("Pref: "           + contacts[i].addresses[j].pref          + "\n" +
                          "Type: "           + contacts[i].addresses[j].type          + "\n" +
                          "Formatted: "      + contacts[i].addresses[j].formatted     + "\n" +
                          "Street Address: " + contacts[i].addresses[j].streetAddress + "\n" +
                          "Locality: "       + contacts[i].addresses[j].locality      + "\n" +
                          "Region: "         + contacts[i].addresses[j].region        + "\n" +
                          "Postal Code: "    + contacts[i].addresses[j].postalCode    + "\n" +
                          "Country: "        + contacts[i].addresses[j].country);
                }
            }
        };
    
        // onError: Failed to get the contacts
        //
        function onError(contactError) {
            alert('onError!');
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Find Contacts</p>
      </body>
    </html>
    

## Spécificités Android 2.X

*   **pref** : non pris en charge, retourne `false` sur les appareils Android 2.X.

## Spécificités BlackBerry WebWorks (OS 5.0 et plus)

*   **pref** : non pris en charge sur les appareils BlackBerry, retourne `false`.

*   **type** : partiellement pris en charge. Seulement un des types d'adresse *Work* et *Home* peut être stocké par contact.

*   **formatted** : partiellement pris en charge. Retourne la concaténation de tous les champs d'adresse BlackBerry.

*   **streetAddress** : pris en charge. Retourne la concaténation des champs d'adresse BlackBerry **address1** et **address2**.

*   **locality** : prise en charge. Stockée dans le champ d'adresse BlackBerry **city** .

*   **region** : pris en charge. Stockée dans le champ d'adresse BlackBerry **stateProvince** .

*   **postalCode** : prise en charge. Stockée dans le champ d'adresse BlackBerry **zipPostal** .

*   **country** : prise en charge.

## Spécificités iOS

*   **pref** : non pris en charge sur les appareils iOS, retourne `false`.

*   **formatted** : actuellement non pris en charge.


# ContactField

Prend en charge les champs génériques dans un objet `Contact`. Certaines propriétés stockées comme objets `ContactField` incluent des adresses e-mail, numéros de téléphone et URL.

## Propriétés

*   **type** : une chaîne qui indique le type de champ, *home* par exemple. *(DOMString)*

*   **value** : la valeur du champ, comme un téléphone numéro ou adresse e-mail. *(DOMString)*

*   **pref** : la valeur `true` si `ContactField` contient la valeur de préférence de l'utilisateur. *(booléen)*

## Détails

L'objet `ContactField` est un composant réutilisable que représente un champ de contact générique. Chaque objet `ContactField` contient une propriété `value` , `type` , et `pref`. Un objet `Contact` stocke plusieurs propriétés dans les tableaux `ContactField[]`, tels que les numéros de téléphone et adresses e-mail.

Dans la plupart des cas, il n'y a pas de valeurs prédéterminées pour un attribut **type** de l'objet `ContactField`. Par exemple, un numéro de téléphone peut spécifier des valeurs pour **type** comme *home*, *work*, *mobile*, *iPhone*, ou toute autre valeur qui est prise en charge par la base de contacts de la plate-forme d'un appareil particulier. Toutefois, pour le champ **photos** de `Contact` , le champ **type** indique le format de l'image retournée : **url** lorsque l'attribut **value** contient une URL vers la photo ou *base64* lorsque la **valeur** contient une chaîne d'image codée en base64. 

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## Petit exemple

        // create a new contact
        var contact = navigator.contacts.create();
    
        // store contact phone numbers in ContactField[]
        var phoneNumbers = [];
        phoneNumbers[0] = new ContactField('work', '212-555-1234', false);
        phoneNumbers[1] = new ContactField('mobile', '917-555-5432', true); // preferred number
        phoneNumbers[2] = new ContactField('home', '203-555-7890', false);
        contact.phoneNumbers = phoneNumbers;
    
        // save the contact
        contact.save();
    

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
            // create a new contact
            var contact = navigator.contacts.create();
    
            // store contact phone numbers in ContactField[]
            var phoneNumbers = [];
            phoneNumbers[0] = new ContactField('work', '212-555-1234', false);
            phoneNumbers[1] = new ContactField('mobile', '917-555-5432', true); // preferred number
            phoneNumbers[2] = new ContactField('home', '203-555-7890', false);
            contact.phoneNumbers = phoneNumbers;
    
            // save the contact
            contact.save();
    
            // search contacts, returning display name and phone numbers
            var options = new ContactFindOptions();
            options.filter = "";
            filter = ["displayName", "phoneNumbers"];
            navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
        function onSuccess(contacts) {
            for (var i = 0; i < contacts.length; i++) {
                // display phone numbers
                for (var j = 0; j < contacts[i].phoneNumbers.length; j++) {
                    alert("Type: "      + contacts[i].phoneNumbers[j].type  + "\n" +
                          "Value: "     + contacts[i].phoneNumbers[j].value + "\n" +
                          "Preferred: " + contacts[i].phoneNumbers[j].pref);
                }
            }
        };
    
        // onError: Failed to get the contacts
        //
        function onError(contactError) {
            alert('onError!');
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Find Contacts</p>
      </body>
    </html>
    

## Spécificités Android

*   **pref** : nonpas pris en charge, retourne `false`.

## Spécificités BlackBerry WebWorks (OS 5.0 et plus)

*   **type** : partiellement pris en charge. Utilisé pour les numéros de téléphone.

*   **valeur** : pris en charge.

*   **pref** : non pris en charge, retourne `false`.

## Spécificités iOS

*   **pref** : non pris en charge, retourne `false`.


# ContactFindOptions

Contient des propriétés qui peuvent être utilisées pour filtrer les résultats d'une opération `contacts.find`.

## Propriétés

*   **filtre** : la chaîne de recherche utilisée pour trouver des contacts. *(DOMString)* (Par défaut :`""`)

*   **multiples** : détermine si l'opération find retourne plusieurs contacts. *(Booléen)* (Par défaut : `false`)

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## Petit exemple

    // success callback
    function onSuccess(contacts) {
        for (var i=0; i<contacts.length; i++) {
            alert(contacts[i].displayName);
        }
    };
    
    // error callback
    function onError(contactError) {
        alert('onError!');
    };
    
    // specify contact search criteria
    var options = new ContactFindOptions();
        options.filter="";        // empty search string returns all contacts
        options.multiple=true;    // return multiple results
        filter = ["displayName"]; // return contact.displayName field
    
        // find contacts
    navigator.contacts.find(filter, onSuccess, onError, options);
    

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
            // specify contact search criteria
            var options = new ContactFindOptions();
            options.filter = "";      // empty search string returns all contacts
            options.multiple = true;  // return multiple results
            filter = ["displayName"]; // return contact.displayName field
    
            // find contacts
            navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
        function onSuccess(contacts) {
            for (var i=0; i<contacts.length; i++) {
                alert(contacts[i].displayName);
            }
        };
    
        // onError: Failed to get the contacts
        //
        function onError(contactError) {
            alert('onError!');
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Find Contacts</p>
      </body>
    </html>


# ContactName

Contient différents types d'informations sur le nom d'un objet `Contact`.

## Propriétés

*   **mise en forme** : le nom complet du contact. *(DOMString)*

*   **familyName** : nom de famille du contact. *(DOMString)*

*   **givenName** : prénom du contact. *(DOMString)*

*   **middleName** : deuxième prénom du contact. *(DOMString)*

*   **honorificPrefix** : préfixe du contact (exemple *M.* ou *Mme*) *(DOMString)*

*   **honorificSuffix** : suffixe du contact (exemple *Esq.*). *(DOMString)*

## Détails

L'objet `ContactName` stocke les propriétés de nom d'un contact.

## Plates-formes prises en charge

*   Android 2.X
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## Petit exemple

    function onSuccess(contacts) {
        for (var i = 0; i < contacts.length; i++) {
            alert("Formatted: "  + contacts[i].name.formatted       + "\n" +
                "Family Name: "  + contacts[i].name.familyName      + "\n" +
                "Given Name: "   + contacts[i].name.givenName       + "\n" +
                "Middle Name: "  + contacts[i].name.middleName      + "\n" +
                "Suffix: "       + contacts[i].name.honorificSuffix + "\n" +
                "Prefix: "       + contacts[i].name.honorificSuffix);
        }
    };
    
    function onError(contactError) {
        alert('onError!');
    };
    
    var options = new ContactFindOptions();
    options.filter = "";
    filter = ["displayName", "name"];
    navigator.contacts.find(filter, onSuccess, onError, options);
    

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
            var options = new ContactFindOptions();
            options.filter="";
            filter = ["displayName","name"];
            navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
        function onSuccess(contacts) {
            for (var i = 0; i < contacts.length; i ++) {
                alert("Formatted: " + contacts[i].name.formatted       + "\n" +
                    "Family Name: " + contacts[i].name.familyName      + "\n" +
                    "Given Name: "  + contacts[i].name.givenName       + "\n" +
                    "Middle Name: " + contacts[i].name.middleName      + "\n" +
                    "Suffix: "      + contacts[i].name.honorificSuffix + "\n" +
                    "Prefix: "      + contacts[i].name.honorificPrefix);
            }
        };
    
        // onError: Failed to get the contacts
        //
        function onError(contactError) {
            alert('onError!');
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Find Contacts</p>
      </body>
    </html>
    

## Spécificités Android

*   **formatted** : partiellement pris en charge et en lecture seule. Retourne la concaténation de `honorificPrefix` , `givenName` , `middleName` , `familyName` , et `honorificSuffix`.

## Spécificités BlackBerry WebWorks (OS 5.0 et plus)

*   **formatted** : partiellement pris en charge. Retourne la concaténation de champs **firstName** et **lastName** de BlackBerry.

*   **familyName** : prise en charge. Stockée dans le champ **lastName** BlackBerry.

*   **givenName** : prise en charge. Stockée dans le champ **firstName** BlackBerry.

*   **middleName** : non pris en charge, retourne `null`.

*   **honorificPrefix** : non pris en charge, retourne `null`.

*   **honorificSuffix** : non pris en charge, retourne `null`.

## Spécificités iOS

*   **formatted** : partiellement pris en charge. Retourne le nom composé iOS, mais est en lecture seule.


# ContactOrganization

Contient les propriétés de l'entreprise de l'objet `Contact</code.></p>

<h2>Propriétés</h2>

<ul>
<li><p><strong>pref</strong> : fixé à <code>true` si `ContactOrganization` contient la valeur préférée de l'utilisateur. *(booléen)*</li> 

*   **type** : une chaîne qui indique le type de champ, *home* par exemple. _(DOMString)

*   **name** : le nom de l'organisation. *(DOMString)*

*   **department** : le département pour lequel travaille le contact. *(DOMString)*

*   **title** : titre du contact au sein de l'organisation. *(DOMString)*</ul> 

## Détails

L'objet `ContactOrganization` stocke des propriétés de l'entreprise d'un contact. Un objet `Contact` contient un ou plusieurs objets `ContactOrganization` dans un tableau.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## Petit exemple

    function onSuccess(contacts) {
        for (var i = 0; i < contacts.length; i++) {
            for (var j = 0; j < contacts[i].organizations.length; j++) {
                alert("Pref: "      + contacts[i].organizations[j].pref       + "\n" +
                    "Type: "        + contacts[i].organizations[j].type       + "\n" +
                    "Name: "        + contacts[i].organizations[j].name       + "\n" +
                    "Department: "  + contacts[i].organizations[j].department + "\n" +
                    "Title: "       + contacts[i].organizations[j].title);
            }
        }
    };
    
    function onError(contactError) {
        alert('onError!');
    };
    
    var options = new ContactFindOptions();
    options.filter = "";
    filter = ["displayName", "organizations"];
    navigator.contacts.find(filter, onSuccess, onError, options);
    

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
            var options = new ContactFindOptions();
            options.filter="";
            filter = ["displayName","organizations"];
            navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
        function onSuccess(contacts) {
            for (var i = 0; i < contacts.length; i++) {
                for (var j = 0; j < contacts[i].organizations.length; j++) {
                    alert("Pref: "     + contacts[i].organizations[j].pref       + "\n" +
                        "Type: "       + contacts[i].organizations[j].type       + "\n" +
                        "Name: "       + contacts[i].organizations[j].name       + "\n" +
                        "Department: " + contacts[i].organizations[j].department + "\n" +
                        "Title: "      + contacts[i].organizations[j].title);
                }
            }
        };
    
        // onError: Failed to get the contacts
        //
        function onError(contactError) {
            alert('onError!');
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Find Contacts</p>
      </body>
    </html>
    

## Spécificités Android 2.X

*   **pref** : non pris en charge par des appareils Android 2.X, retourne `false`.

## Spécificités BlackBerry WebWorks (OS 5.0 et plus)

*   **pref** : non pris en charge par les appareils BlackBerry, retourne `false`.

*   **type**: non pris en charge par les appareils BlackBerry, retourne `null`.

*   **name** : partiellement pris en charge. Le premier nom de l'entreprise est stocké dans le champ **company** de BlackBerry.

*   **department** : non pris en charge, retourne `null`.

*   **title** : partiellement pris en charge. Le premier titre de l'entreprise est stocké dans le champ de **jobTitle** BlackBerry.

## Spécificités iOS

*   **pref** : non pris en charge sur les appareils iOS, retourne `false`.

*   **type** : non pris en charge sur les appareils iOS, retourne `null`.

*   **name** : partiellement pris en charge. Le premier nom de l'entreprise est stocké dans le champ de **kABPersonOrganizationProperty** iOS.

*   **department** : partiellement pris en charge. Le premier nom de département est stocké dans le champ de **kABPersonDepartmentProperty** iOS.

*   **title** : partiellement pris en charge. Le premier titre est stocké dans le champ **kABPersonJobTitleProperty** iOS.


# ContactError

Un objet `ContactError` est passé à la fonction de callback `contactError` lorsqu'une erreur survient.

## Propriétés

*   **code** : l'un des codes d'erreur prédéfinis énumérés ci-dessous.

## Constantes

*   `ContactError.UNKNOWN_ERROR`
*   `ContactError.INVALID_ARGUMENT_ERROR`
*   `ContactError.TIMEOUT_ERROR`
*   `ContactError.PENDING_OPERATION_ERROR`
*   `ContactError.IO_ERROR`
*   `ContactError.NOT_SUPPORTED_ERROR`
*   `ContactError.PERMISSION_DENIED_ERROR`

## Description

L'objet `ContactError` est retourné à l'utilisateur via la fonction de callback `contactError` lorsqu'une erreur survient.


# contactSuccess

Fonction de callback de succès qui fournit le tableau `Contact` résultant d'une opération `contacts.find`.

    function(contacts) {
        // Do something
    }
    

## Paramètres

*   **contacts** : le tableau de contact résultant d'une opération de recherche. *(Contact)*

## Exemple

    function contactSuccess(contacts) {
        for (var i=0; i<contacts.length; i++) {
            console.log("Display Name = " + contacts[i].displayName);
        }
    }


# contactError

Fonction de callback d'erreur pour les fonctions de contact.

    function(error) {
        // Handle the error
    }


# contactFields

Paramètre requis par la méthode `contacts.find`, utilisée pour spécifier quels champs doivent être inclus dans les objets `Contact` résultant d'une opération de recherche.

    ["name", "phoneNumbers", "emails"]


# contactFindOptions

Paramètre facultatif de la méthode `contacts.find`, utilisé pour filtrer les contacts retournés à partir de la base de données de contacts.

    {filter: "", multiples : true,} ;
    

## Options

*   **filter** : la chaîne de recherche permettant de filtrer les contacts. *(DOMString)* (Par défaut :`""`)

*   **multiple** : détermine si l'opération find retourne plusieurs contacts. *(Booléen)* (Par défaut :`false`)
