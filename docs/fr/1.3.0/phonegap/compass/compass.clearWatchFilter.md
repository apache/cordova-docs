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

compass.clearWatchFilter
========================

Arrête la surveillance de boussole mise en place via `compass.watchHeadingFilter` et référencée par watchID.

    navigator.compass.clearWatchFilter(watchID);

- __watchID__: Le watchID renvoyé par `compass.watchHeadingFilter`.

Plateformes supportées
----------------------

- iPhone

Exemple rapide
--------------

    var watchID = navigator.compass.watchHeadingFilter(onSuccess, onError, options);
    
    // ... plus tard ...
    
    navigator.compass.clearWatchFilter(watchID);
    
Exemple complet
---------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Exemple Compass</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-1.3.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Le watchID référence l'écoute de la boussole
        var watchID = null;
        
        // Attendre que PhoneGap soit prêt
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap est prêt
        //
        function onDeviceReady() {
            startWatch();
        }

        // Lancement de l'écoute de la boussole
        //
        function startWatch() {
            
            // Être notifié dès que la boussole détecte un changement de cap de 10 degrés ou plus
            var options = { filter: 10 };
            
            watchID = navigator.compass.watchHeadingFilter(onSuccess, onError, options);
        }
        
        // Arrêt de l'écoute grâce au watchID
        //
        function stopWatch() {
            if (watchID) {
                navigator.compass.clearWatchFilter(watchID);
                watchID = null;
            }
        }
        
        // onSuccess: Obtention du cap courant
        //
        function onSuccess(heading) {
            var element = document.getElementById('heading');
            element.innerHTML = 'Cap : ' + heading.magneticHeading;
        }

        // onError: Échec d'obtention du cap
        //
        function onError(compassError) {
            alert('Erreur de la boussole : ' + compassError.code);
        }

        </script>
      </head>
      <body>
        <div id="heading">Attente de la boussole...</div>
        <button onclick="startWatch();">Lancer l'écoute via Filter</button>
        <button onclick="stopWatch();">Arrêter l'écoute</button>
      </body>
    </html>
