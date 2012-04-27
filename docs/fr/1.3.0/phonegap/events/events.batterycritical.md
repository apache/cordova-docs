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

batterycritical
===============

Cet évènement est déclenché lorsqu'une application PhoneGap détecte que la batterie a atteint le seuil de niveau critique.

    window.addEventListener("batterycritical", yourCallbackFunction, false);

Détails
-------

Cet évènement est déclenché lorsqu'une application PhoneGap détecte que le pourcentage du niveau de batterie est passé sous le seuil critique. Ce seuil est spécifique au mobile.

La fonction associée à l'évènement batterycritical est appelée avec en argument un objet contenant deux propriétés :

- __level:__ Le pourcentage de batterie restante (0-100). _(Number)_
- __isPlugged:__ Un booléen indiquant si le mobile est branché ou non. _(Boolean)_

Généralement, il vous faudra ajouter un écouteur d'évènement via `window.addEventListener` après réception de l'évènement PhoneGap 'deviceready'.

Plateformes supportées
----------------------

- iOS
- Android
- BlackBerry WebWorks (OS 5.0 ou plus récent)

Exemple rapide
--------------

    window.addEventListener("batterycritical", onBatteryCritical, false);

    function onBatteryCritical(info) {
        // Gérer l'évènement batterycritical
       	alert("Niveau de batterie critique " + info.level + "%\nRechargez vite!"); 
    }

Exemple complet
---------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Exemple évènement batterycritical PhoneGap</title>

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
		    window.addEventListener("batterycritical", onBatteryCritical, false);
        }

        // Gérer l'évènement batterycritical
        //
        function onBatteryCritical(info) {
	       	alert("Niveau de batterie critique " + info.level + "%\nRechargez vite!"); 
        }
        
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
