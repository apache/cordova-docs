geolocation.clearWatch
======================

Arrêter l'écoute de géolocalisation désignée par le paramètre `watchID`.

    navigator.geolocation.clearWatch(watchID);

Paramètres
----------

- __watchID:__ Le watchID retourné par l'appel à `watchPosition` qui a mis en place l'écoute que l'on veut arrêter. (String)

Description
-----------

La fonction `geolocation.clearWatch` arrête l'écoute de la géolocalisation du mobile désignée par le paramètre `watchID`.

Plateformes supportées
----------------------

- Android
- BlackBerry (OS 4.6)
- BlackBerry WebWorks (OS 5.0 ou plus récent)
- iPhone
- Windows Phone 7 ( Mango )

Exemple rapide
--------------

    // Options: Récupérer la position toutes les 3 secondes
    //
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { frequency: 3000 });

    // ...plus tard...

    navigator.geolocation.clearWatch(watchID);


Exemple complet
---------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Exemple Geolocation</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Attendre que PhoneGap soit prêt
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        var watchID = null;

        // PhoneGap est prêt
        //
        function onDeviceReady() {
            // Interrogation toutes les 3 secondes
            var options = { frequency: 3000 };
            watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
        }
    
        // Fonction de callback onSuccess
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = 'Latitude : '  + position.coords.latitude      + '<br />' +
                                'Longitude : ' + position.coords.longitude     + '<br />' +
                                '<hr />'      + element.innerHTML;
        }

        // Arrêter l'écoute démarrée plus tôt
        // 
        function clearWatch() {
            if (watchID != null) {
                navigator.geolocation.clearWatch(watchID);
                watchID = null;
            }
        }
    
	    // Fonction de callback onError, reçoit un objet PositionError
	    //
	    function onError(error) {
	      alert('code : '    + error.code    + '\n' +
	            'message : ' + error.message + '\n');
	    }

        </script>
      </head>
      <body>
        <p id="geolocation">Écoute de la géolocalisation...</p>
    	<button onclick="clearWatch();">Arrêter l'écoute</button>     
      </body>
    </html>