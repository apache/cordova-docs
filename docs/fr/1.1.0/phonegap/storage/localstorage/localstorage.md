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

localStorage
============

Donne accès à un objet conforme à la spécification [W3C localStorage](http://dev.w3.org/html5/webstorage/#the-localstorage-attribute).

    var storage = window.localStorage;

Méthodes
--------

- __key__: Retourne le nom de la clef à la position spécifiée. 
- __getItem__: Retourne la valeur associée à la clef en paramètre.
- __setItem__: Enregistre une valeur et sa clef associée.
- __removeItem__: Supprime la valeur associée à la clef en paramètre.
- __clear__: Supprime toutes les paires clef-valeur.

Détails
-------

L'objet localStorage est conforme à la spécification W3C localStorage.  Il permet d'enregistrer des données sous forme de paires clef-valeur.

Plateformes supportées
----------------------

- Android
- BlackBerry WebWorks (OS 6.0 et plus récent)
- iPhone

Exemple rapide Key
------------------

    var keyName = window.localStorage.key(0);

Exemple rapide SetItem
----------------------

    window.localStorage.setItem("clef", "valeur");

Exemple rapide GetItem
----------------------

	var value = window.localStorage.getItem("key");
	// value vaut maintenant "value"

Exemple rapide RemoveItem
-------------------------

	window.localStorage.removeItem("key");

Exemple rapide Clear
--------------------

	window.localStorage.clear();

Exemple complet
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Exemple Storage</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-1.1.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Attendre que PhoneGap soit prêt
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap est prêt
        //
        function onDeviceReady() {
			window.localStorage.setItem("clef", "valeur");
			var keyname = window.localStorage.key(0);
			// keyname vaut maintenant "clef"
			var value = window.localStorage.getItem("clef");
			// value vaut maintenant "valeur"
			window.localStorage.removeItem("clef");
			window.localStorage.setItem("clef2", "valeur2");
			window.localStorage.clear();
			// localStorage est maintenant vide
        }
    

        </script>
      </head>
      <body>
        <h1>Exemple</h1>
        <p>localStorage</p>
      </body>
    </html>
