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

compass.getCurrentHeading
=========================

Récupère la direction courante de la boussole.

    navigator.compass.getCurrentHeading(compassSuccess, compassError, compassOptions);

Description
-----------

La boussole est un capteur capable d'indiquer la direction, ou cap, dans laquelle le mobile est orienté.  Il mesure le cap en degrés, de 0 à 359,99.

La direction de la boussole est renvoyée via un objet CompassHeading passé à la fonction de callback `compassSuccess`.

Plateformes supportées
----------------------

- Android
- iPhone
- Windows Phone 7 ( Mango ) si boussole présente dans le mobile

Exemple rapide
--------------

    function onSuccess(heading) {
        alert('Cap : ' + heading.magneticHeading);
    };

    function onError(error) {
        alert('Erreur de la boussole : ' error.code);
    };

    navigator.compass.getCurrentHeading(onSuccess, onError);

Exemple complet
---------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Exemple Compass</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-1.1.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Attendre que PhoneGap soit prêt
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap est prêt
        //
        function onDeviceReady() {
            navigator.compass.getCurrentHeading(onSuccess, onError);
        }
    
        // onSuccess: Obtention du cap courant
        //
        function onSuccess(heading) {
            alert('Cap : ' + heading.magneticHeading);
        }
    
        // onError: Échec d'obtention du cap
        //
        function onError(compassError) {
            alert('Erreur de la boussole : ' + compassError.code);
        }

        </script>
      </head>
      <body>
        <h1>Exemple</h1>
        <p>getCurrentHeading</p>
      </body>
    </html>
    
