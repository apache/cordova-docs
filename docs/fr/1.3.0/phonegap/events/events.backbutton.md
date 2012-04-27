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

backbutton
===========

Cet évènement est déclenché lorsque l'utilisateur appuie sur le bouton retour.

    document.addEventListener("backbutton", yourCallbackFunction, false);

Détails
-------

Si vous avez besoin de redéfinir le comportement par défaut du bouton retour, il vous suffit d'associer une fonction à l'évènement 'backbutton'. Il n'est désormais plus nécessaire de faire appel à d'autres fonctions pour redéfinir le comportement du bouton retour. Maintenant, il suffit d'associer une fonction à l'évènement 'backbutton'.

Généralement, il vous faudra ajouter un écouteur d'évènement via `document.addEventListener` après réception de l'évènement PhoneGap 'deviceready'.

Plateformes supportées
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 ou plus récent)

Exemple rapide
--------------

    document.addEventListener("backbutton", onBackKeyDown, false);

    function onBackKeyDown() {
        // Gérer le bouton retour
    }

Exemple complet
---------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Exemple évènement backbutton PhoneGap</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-1.3.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Appeler onDeviceReady lorsque PhoneGap est prêt.
        //
        // Pour le moment, le document est chargé mais pas phonegap-1.3.0.js.
        // Lorsque PhoneGap sera chargé et capable de communiquer avec la partie native du mobile,
        // il déclenchera l'évènement `deviceready`.
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }

        // PhoneGap est chargé et il est maintenant possible d'appeler des fonctions PhoneGap
        //
        function onDeviceReady() {
            // Ajout d'un écouteur d'évènement
            document.addEventListener("backbutton", onBackKeyDown, false);
        }
        
        // Gérer le bouton retour
        //
        function onBackKeyDown() {
        }

        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
