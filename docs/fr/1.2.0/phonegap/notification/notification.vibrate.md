notification.vibrate
====================

Fait vibrer le mobile pendant un laps de temps défini.

    navigator.notification.vibrate(milliseconds)

- __time:__ Durée en millisecondes de la vibration du mobile. 1000 équivaut donc à 1 seconde (`Number`)

Plateformes supportées
----------------------

- Android
- BlackBerry (OS 4.6)
- BlackBerry WebWorks (OS 5.0 et plus récent)
- iPhone
- Windows Phone 7

Exemple rapide
--------------

    // Vibrer pendant 2,5 secondes
    //
    navigator.notification.vibrate(2500);

Exemple complet
---------------
    
    <!DOCTYPE html>
    <html>
      <head>
        <title>Exemple Notification</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Attendre que PhoneGap soit prêt
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap est prêt
        //
        function onDeviceReady() {
            // Rien
        }
    
        // Afficher une boîte de dialogue personnalisée
        //
        function showAlert() {
		    navigator.notification.alert(
		        'Vous avez gagné !', // message
		        null,                // fonction de callback
		        'Terminé',           // titre
		        'Quitter'            // libellé du bouton
		    );
        }
    
        // Emettre 3 bips sonores
        //
        function playBeep() {
            navigator.notification.beep(3);
        }
    
        // Vibrer pendant 2 secondes
        //
        function vibrate() {
            navigator.notification.vibrate(2000);
        }

        </script>
      </head>
      <body>
        <p><a href="#" onclick="showAlert(); return false;">Afficher une boîte de dialogue</a></p>
        <p><a href="#" onclick="playBeep(); return false;">Emmettre des bips sonores</a></p>
        <p><a href="#" onclick="vibrate(); return false;">Vibrer</a></p>
      </body>
    </html>

Singularités iPhone
-------------------

- __time:__ L'argument time est ignoré, le mobile vibre pendant une durée prédéfinie.

        navigator.notification.vibrate();
        navigator.notification.vibrate(2500);   // 2500 est ignoré