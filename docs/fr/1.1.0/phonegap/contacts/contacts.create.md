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

        <script type="text/javascript" charset="utf-8" src="phonegap-1.1.0.js"></script>
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
