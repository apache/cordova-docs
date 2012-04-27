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

openDatabase
============

Retourne un nouvel objet Database.

    var dbShell = window.openDatabase(name, version, display_name, size);

Description
-----------

window.openDatabase retourne un nouvel objet Database.

Cette méthode crée une nouvelle base de données SQL Lite et retourne un objet Database décrivant celle-ci.  Il faut utiliser cet objet Database pour manipuler la base de données.

Plateformes supportées
----------------------

- Android
- BlackBerry WebWorks (OS 6.0 et plus récent)
- iPhone

Exemple rapide
--------------

    var db = window.openDatabase("test", "1.0", "Test DB", 1000000);

Exemple complet
---------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Exemple Storage</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-1.2.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Attendre que PhoneGap soit prêt
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap est prêt
        //
        function onDeviceReady() {
			var db = window.openDatabase("test", "1.0", "Test DB", 1000000);
        }
		
        </script>
      </head>
      <body>
        <h1>Exemple</h1>
        <p>OpenDatabase</p>
      </body>
    </html>
