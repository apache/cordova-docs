accelerometer.watchAcceleration
===============================

Lance à intervalles réguliers une récupération des données de l'accéléromètre.

    var watchID = navigator.accelerometer.watchAcceleration(accelerometerSuccess,
                                                           accelerometerError,
                                                           [accelerometerOptions]);
                                                           
Description
-----------

L'accéléromètre est un capteur de mouvement qui mesure l'accélération linéaire de l'appareil selon 3 axes orthogonaux x, y et z. Il détecte ainsi les mouvements en 3D de l'appareil selon ces axes.

La fonction `accelerometer.watchAcceleration` lance à intervalles réguliers une récupération des données de l'accéléromètre. A chaque fois, objet `Acceleration` est renvoyé, et la fonction de callback `accelerometerSuccess` est invoquée avec cet objet en argument. Il est possible de spécifier en millisecondes l'intervalle de temps entre chaque récupération grâce au paramètre `frequency` de l'objet `acceleratorOptions`.

Le watchID retourné par `accelerometer.watchAcceleration` référence "l'écoute" de l'accéléromètre mise en place de cette manière. Ce watchID peut être utilisé avec `accelerometer.clearWatch` pour arrêter l'écoute.

Plateformes supportées
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 et plus récent)
- iPhone


Exemple rapide
--------------

    function onSuccess(acceleration) {
        alert('Acceleration X: ' + acceleration.x + '\n' +
              'Acceleration Y: ' + acceleration.y + '\n' +
              'Acceleration Z: ' + acceleration.z + '\n' +
              'Timestamp: '      + acceleration.timestamp + '\n');
    };

    function onError() {
        alert('onError!');
    };

    var options = { frequency: 3000 };  // Récupération toutes les 3 secondes
    
    var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);

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
        
        // Arrêt de l'écoute grâce au watchID
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
      </body>
    </html>
    
Singularités iPhone
-------------------

- Aux intervalles demandées, PhoneGap fera appel au callback `accelerometerSuccess` avec en argument un objet `Acceleration` rempli. Cependant, PhoneGap respecte un minimum de 40ms et un maximum de 1000ms pour les appels à l'accéléromètre de l'appareil.
  - Par exemple, si vous choisissez un intervalle de 3 secondes (3000ms), PhoneGap utilisera un intervalle de 1 seconde avec l'appareil mais fera appel au callback `accelerometerSuccess` au bout de 3 secondes.
