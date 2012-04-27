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

accelerometer.clearWatch
========================

Arrête les appels successifs à l'accéléromètre suite à un appel de `accelerometer.watchAcceleration` et référencés par le paramètre watchID.

    navigator.accelerometer.clearWatch(watchID);

- __watchID__: Le watchID retourné par `accelerometer.watchAcceleration`.

Plateformes supportées
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 et plus récent)
- iPhone

Exemple rapide
--------------

    var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    
    // ... plus tard ...
    
    navigator.accelerometer.clearWatch(watchID);
    
Exemple complet
---------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Exemple Accelerometer</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-1.3.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Le watchID référence l'écoute de l'accéléromètre courante
        var watchID = null;
        
        // Attendre que PhoneGap soit prêt
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap est prêt
        //
        function onDeviceReady() {
            startWatch();
        }

        // Lancement de l'écoute de l'accéléromètre
        //
        function startWatch() {
            
            // Récupération toutes les 3 secondes
            var options = { frequency: 3000 };
            
            watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
        }
        
        // Arrêt de l'écoute grâce à watchID
        //
        function stopWatch() {
            if (watchID) {
                navigator.accelerometer.clearWatch(watchID);
                watchID = null;
            }
        }
		    
        // onSuccess: Callback en cas de succès d'appel à l'accéléromètre
        //
        function onSuccess(acceleration) {
            var element = document.getElementById('accelerometer');
            element.innerHTML = 'Acceleration X: ' + acceleration.x + '<br />' +
                                'Acceleration Y: ' + acceleration.y + '<br />' +
                                'Acceleration Z: ' + acceleration.z + '<br />' + 
                                'Timestamp: '      + acceleration.timestamp + '<br />';
        }

        // onError: Callback en cas d'échec d'appel à l'accéléromètre
        //
        function onError() {
            alert('onError!');
        }

        </script>
      </head>
      <body>
        <div id="accelerometer">En attente de l'accéléromètre...</div>
		<button onclick="stopWatch();">Arrêter l'écoute</button>
      </body>
    </html>
