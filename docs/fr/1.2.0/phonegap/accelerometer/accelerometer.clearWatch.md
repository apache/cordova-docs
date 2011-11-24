accelerometer.clearWatch
========================

Arrête les appels successifs à l'accéléromètre suite à un appel de `accelerometer.watchAcceleration` et référencés par le paramètre watchID.

    navigator.accelerometer.clearWatch(watchID);

- __watchID__: Le watchID retourné par `accelerometer.watchAcceleration`.

Plateformes supportées
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 et plus récent)
- iPhone

Exemple rapide
--------------

    var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    
    // ... plus tard ...
    
    navigator.accelerometer.clearWatch(watchID);
    
Exemple complet
---------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Exemple Accelerometer</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Le watchID référence l'écoute de l'accéléromètre courante
        var watchID = null;
        
        // Attendre que PhoneGap soit prêt
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap est prêt
        //
        function onDeviceReady() {
            startWatch();
        }

        // Lancement de l'écoute de l'accéléromètre
        //
        function startWatch() {
            
            // Récupération toutes les 3 secondes
            var options = { frequency: 3000 };
            
            watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
        }
        
        // Arrêt de l'écoute grâce à watchID
        //
        function stopWatch() {
            if (watchID) {
                navigator.accelerometer.clearWatch(watchID);
                watchID = null;
            }
        }
		    
        // onSuccess: Callback en cas de succès d'appel à l'accéléromètre
        //
        function onSuccess(acceleration) {
            var element = document.getElementById('accelerometer');
            element.innerHTML = 'Acceleration X: ' + acceleration.x + '<br />' +
                                'Acceleration Y: ' + acceleration.y + '<br />' +
                                'Acceleration Z: ' + acceleration.z + '<br />' + 
                                'Timestamp: '      + acceleration.timestamp + '<br />';
        }

        // onError: Callback en cas d'échec d'appel à l'accéléromètre
        //
        function onError() {
            alert('onError!');
        }

        </script>
      </head>
      <body>
        <div id="accelerometer">En attente de l'accéléromètre...</div>
		<button onclick="stopWatch();">Arrêter l'écoute</button>
      </body>
    </html>
