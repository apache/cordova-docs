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

notification.alert
==================

Afficher une alerte ou une boîte de dialogue personnalisée.

    navigator.notification.alert(message, alertCallback, [title], [buttonName])

- __message:__ Message à afficher (`String`)
- __alertCallback:__ Fonction de callback à appeler lorsque la boîte de dialogue est fermée. (`Function`)
- __title:__ Titre de la boîte de dialogue. (`String`) (Optionnel, par défaut : "Alert")
- __buttonName:__ Libellé du bouton (`String`) (Optionnel, par défaut : "OK")
    
Description
-----------

Pour cette fonctionnalité, la plupart des implémentations PhoneGap utilisent la boîte de dialogue native du mobile.  Cependant, quelques plateformes utilisent la fonction `alert` du navigateur, qui est généralement moins personnalisable.

Plateformes supportées
----------------------

- Android
- BlackBerry (OS 4.6)
- BlackBerry WebWorks (OS 5.0 et plus récent)
- iPhone
- Windows Phone 7 ( Mango )

Exemple rapide
--------------

    // Android / BlackBerry WebWorks (OS 5.0 et plus récent) / iPhone
    //
    function alertDismissed() {
        // faire quelquechose
    }

    navigator.notification.alert(
        'Vous avez gagné !', // message
        alertDismissed,      // fonction de callback
        'Terminé',           // titre
        'Quitter'            // libellé du bouton
    );

    // BlackBerry (OS 4.6) / webOS
    //
    navigator.notification.alert('Vous avez gagné !');
        
Exemple complet
---------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Exemple Notification</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-1.2.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Attendre que PhoneGap soit prêt
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap est prêt
        //
        function onDeviceReady() {
            // Rien
        }
    
        // Appelé lorsque la boîte de dialogue est fermée
	    function alertDismissed() {
	        // Faire quelque chose
	    }

        // Afficher une boîte de dialogue personnalisée
        //
        function showAlert() {
		    navigator.notification.alert(
		        'Vous avez gagné !', // message
		        alertDismissed,      // fonction de callback
		        'Terminé',           // titre
		        'Quitter'            // libellé du bouton
		    );
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showAlert(); return false;">Afficher une boîte de dialogue</a></p>
      </body>
    </html>

Singularités Windows Phone 7
----------------------------

- L'argument buttonName est ignoré, le libellé est toujours 'OK' 