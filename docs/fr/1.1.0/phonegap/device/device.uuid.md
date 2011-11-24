device.uuid
===========

Récupère le Universally Unique Identifier ([UUID](http://fr.wikipedia.org/wiki/Universal_Unique_Identifier)) du mobile.

    var string = device.uuid;
    
Description
-----------

Les détails sur la façon dont un UUID est généré sont déterminés par le fabricant et spécifiques à la plateforme ou au modèle de l'appareil.

Plateformes supportées
----------------------

- Android
- BlackBerry
- BlackBerry WebWorks (OS 5.0 ou plus récent)
- iOS
- Windows Phone 7 ( Mango )

Exemple rapide
--------------

    // Android: Retourne un entier aléatoire de 64 bits (sous forme de chaîne de caractères !)
    //          Cet entier est généré au premier démarrage du mobile.
    //
    // BlackBerry: Retourne le numéro PIN du mobile.
    //             Il s'agit d'un entier unique à neuf chiffres (mais sous forme de chaîne de caractères !)
    //
    // iPhone: (Tiré de la documentation de la classe UIDevice)
    //         Retourne une chaîne de hachage produite à partir de multiples identifiants matériels.
    //         Son unicité est garantie pour chaque mobile et ne peut être liée au compte utilisateur.
    // Windows Phone 7 : Retourne un hachage du mobile+utilisateur,
    // si l'utilisateur n'est pas défini, un GUID est généré et sera conservé jusqu'à ce que l'application soit désinstallée.
    // 
    var deviceID = device.uuid;

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