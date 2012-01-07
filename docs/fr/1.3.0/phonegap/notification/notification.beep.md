notification.beep
=================

Faire émettre un bip sonore au mobile.

    navigator.notification.beep(times);

- __times:__ Le nombre de bips que le mobile doit émettre (`Number`)

Plateformes supportées
----------------------

- Android
- BlackBerry (OS 4.6)
- BlackBerry WebWorks (OS 5.0 et plus récent)
- iPhone
- Windows Phone 7 ( Mango )

Exemple rapide
--------------

    // Emettre deux bips sonores
    navigator.notification.beep(2);

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

Singularités Android
--------------------

- Android joue la "Sonnerie de notification" qui est configurée dans le panneau "Paramètres/Son".

Singularités iPhone
-------------------

- L'argument times est ignoré.
- Il n'y a pas de bip sonore natif sur iPhone.
  - PhoneGap implémente le bip en jouant un fichier audio grâce à l'API media.
  - Le développeur doit fournir ce fichier audio.
  - Le fichier doit durer moins de 30 secondes, être placé à la racine de www/, et être intitulé `beep.wav`.

Singularités Windows Phone 7
----------------------------

- PhoneGap pour WP7 contient un fichier audio utilisé comme bip sonore générique. 
