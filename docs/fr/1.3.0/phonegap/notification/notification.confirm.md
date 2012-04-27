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

notification.confirm
====================

Afficher une boîte de dialogue de confirmation personnalisée.

    navigator.notification.confirm(message, confirmCallback, [title], [buttonLabels])

- __message:__ Message à afficher (`String`)
- __confirmCallback:__ - Fonction de callback appelée lorsque la boîte de dialogue est fermée, avec en argument l'indice du bouton pressé (1, 2 or 3). (`Number`)
- __title:__ Titre de la boîte de dialogue (`String`) (Optionnel, par défaut : "Confirm")
- __buttonLabels:__ Libellés des boutons séparés par des virgules (`String`) (Optionnel, par défaut : "OK,Cancel")
    
Description
-----------

La fonction `notification.confirm` affiche une boîte de dialogue de confirmation native qui soit plus personnalisée que la simple fonction `confirm` du navigateur.

Plateformes supportées
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 et plus récent)
- iPhone
- Windows Phone 7 ( Mango )

Exemple rapide
--------------

	// Traiter le choix de la confirmation
	function onConfirm(button) {
		alert('Vous avez appuyé sur le bouton ' + button);
	}

    // Afficher une boîte de dialogue de confirmation personnalisée
    //
    function showConfirm() {
	        navigator.notification.confirm(
	        'Vous avez gagné !',  // message
	        onConfirm,            // fonction de callback appelée avec l'indice du bouton pressé
	        'Terminé',            // titre
	        'Recommencer,Quitter' // libellés des boutons
        );
    }
        
Exemple complet
---------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Exemple Notification</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-1.3.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Attendre que PhoneGap soit prêt
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap est prêt
        //
        function onDeviceReady() {
            // Rien
        }
    
		// process the confirmation dialog result
		function onConfirm(button) {
			alert('Vous avez appuyé sur le bouton ' + button);
		}

        // Afficher une boîte de dialogue de confirmation personnalisée
        //
        function showConfirm() {
            navigator.notification.confirm(
		        'Vous avez gagné !',  // message
		        onConfirm,            // fonction de callback appelée avec l'indice du bouton pressé
		        'Terminé',            // titre
		        'Recommencer,Quitter' // libellés des boutons
            );
        }
    
        </script>
      </head>
      <body>
        <p><a href="#" onclick="showConfirm(); return false;">Demander confirmation</a></p>
      </body>
    </html>

Singularités Windows Phone 7
----------------------------

- L'argument buttonLabels est ignoré, la valeur prise en compte est toujours 'OK|Cancel'