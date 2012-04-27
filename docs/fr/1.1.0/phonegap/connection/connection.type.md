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

connection.type
===================

Inspecte la connexion réseau utilisée.

Description
-----------

Cette propriété permet de déterminer rapidement quel est l'état de la connexion réseau du mobile, et de quel type de connexion il s'agit.

Plateformes supportées
----------------------

- iOS
- Android
- BlackBerry WebWorks (OS 5.0 et plus récent)
- Windows Phone 7 ( Mango )

Exemple rapide
--------------

    function checkConnection() {
        var networkState = navigator.network.connection.type;
        
        var states = {};
        states[Connection.UNKNOWN]	= 'Connexion inconnue';
        states[Connection.ETHERNET]	= 'Connexion Ethernet';
        states[Connection.WIFI]   	= 'Connexion WiFi';
        states[Connection.CELL_2G]	= 'Connexion cellulaire 2G';
        states[Connection.CELL_3G]	= 'Connexion cellulaire 3G';
        states[Connection.CELL_4G]	= 'Connexion cellulaire 4G';
        states[Connection.NONE]   	= 'Pas de connexion réseau';
    
        alert('Type de connexion : ' + states[networkState]);
    }
    
    checkConnection();


Exemple complet
---------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Exemple navigator.network.connection.type</title>
        
        <script type="text/javascript" charset="utf-8" src="phonegap-1.1.0.js"></script>
        <script type="text/javascript" charset="utf-8">
            
        // Attendre que PhoneGap soit prêt
        // 
        document.addEventListener("deviceready", onDeviceReady, false);
        
        // PhoneGap est prêt, on peut dorénavant faire appel à des méthodes de PhoneGap
        //
        function onDeviceReady() {
            checkConnection();
        }
        
	    function checkConnection() {
	        var networkState = navigator.network.connection.type;

	        var states = {};
	        states[Connection.UNKNOWN]	= 'Connexion inconnue';
	        states[Connection.ETHERNET]	= 'Connexion Ethernet';
	        states[Connection.WIFI]   	= 'Connexion WiFi';
	        states[Connection.CELL_2G]	= 'Connexion cellulaire 2G';
	        states[Connection.CELL_3G]	= 'Connexion cellulaire 3G';
	        states[Connection.CELL_4G]	= 'Connexion cellulaire 4G';
	        states[Connection.NONE]   	= 'Pas de connexion réseau';

	        alert('Type de connexion : ' + states[networkState]);
	    }
        
        </script>
      </head>
      <body>
        <p>Une boîte de dialogue va afficher le type de connexion réseau.</p>
      </body>
    </html>
