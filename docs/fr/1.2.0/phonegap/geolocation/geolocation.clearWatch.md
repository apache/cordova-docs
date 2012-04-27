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

geolocation.clearWatch
======================

Arrêter l'écoute de géolocalisation désignée par le paramètre `watchID`.

    navigator.geolocation.clearWatch(watchID);

Paramètres
----------

- __watchID:__ Le watchID retourné par l'appel à `watchPosition` qui a mis en place l'écoute que l'on veut arrêter. (String)

Description
-----------

La fonction `geolocation.clearWatch` arrête l'écoute de la géolocalisation du mobile désignée par le paramètre `watchID`.

Plateformes supportées
----------------------

- Android
- BlackBerry (OS 4.6)
- BlackBerry WebWorks (OS 5.0 ou plus récent)
- iPhone
- Windows Phone 7 ( Mango )

Exemple rapide
--------------

    // Options: Récupérer la position toutes les 3 secondes
    //
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { frequency: 3000 });

    // ...plus tard...

    navigator.geolocation.clearWatch(watchID);


Exemple complet
---------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Exemple Geolocation</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-1.2.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Attendre que PhoneGap soit prêt
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        var watchID = null;

        // PhoneGap est prêt
        //
        function onDeviceReady() {
            // Interrogation toutes les 3 secondes
            var options = { frequency: 3000 };
            watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
        }
    
        // Fonction de callback onSuccess
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = 'Latitude : '  + position.coords.latitude      + '<br />' +
                                'Longitude : ' + position.coords.longitude     + '<br />' +
                                '<hr />'      + element.innerHTML;
        }

        // Arrêter l'écoute démarrée plus tôt
        // 
        function clearWatch() {
            if (watchID != null) {
                navigator.geolocation.clearWatch(watchID);
                watchID = null;
            }
        }
    
	    // Fonction de callback onError, reçoit un objet PositionError
	    //
	    function onError(error) {
	      alert('code : '    + error.code    + '\n' +
	            'message : ' + error.message + '\n');
	    }

        </script>
      </head>
      <body>
        <p id="geolocation">Écoute de la géolocalisation...</p>
    	<button onclick="clearWatch();">Arrêter l'écoute</button>     
      </body>
    </html>