device.version
==============

Récupère la version du système d'exploitation.

    var string = device.version;

Plateformes supportées
----------------------

- Android 2.1+
- BlackBerry
- BlackBerry WebWorks (OS 5.0 ou plus récent)
- iOS
- Windows Phone 7 ( Mango )

Exemple rapide
--------------

    // Android:    Froyo retourne "2.2"
    //             Eclair retourne "2.1", "2.0.1", or "2.0"
    //             La version peut aussi retourner la mise à jour "2.1-update1" 
    //
    // BlackBerry: Bold 9000 sous OS 4.6 retourne "4.6.0.282"
    //
    // iOS:        iOS 3.2 retourne "3.2"
    //
    // Windows Phone 7: retourne le numéro de version courant du système d'exploitation, par exemple "7.10.7720" sous Mango.
    var deviceVersion = device.version;

Exemple complet
---------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Exemple Device</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Attendre que PhoneGap soit prêt
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap est prêt
        //
        function onDeviceReady() {
            var element = document.getElementById('deviceProperties');
    
            element.innerHTML = 'Device Name: '     + device.name     + '<br />' + 
                                'Device PhoneGap: ' + device.phonegap + '<br />' + 
                                'Device Platform: ' + device.platform + '<br />' + 
                                'Device UUID: '     + device.uuid     + '<br />' + 
                                'Device Version: '  + device.version  + '<br />';
        }

        </script>
      </head>
      <body>
        <p id="deviceProperties">Chargement des propriétés du mobile...</p>
      </body>
    </html>
