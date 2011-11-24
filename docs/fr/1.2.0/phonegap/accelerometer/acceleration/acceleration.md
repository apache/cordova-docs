Acceleration
============

Contient les données de l'accéléromètre enregistrées à un instant donné.

Propriétés
----------

- __x:__ Quantité de mouvement sur l'axe x. Intervalle [0, 1] (`Number`)
- __y:__ Quantité de mouvement sur l'axe y. Intervalle [0, 1] (`Number`)
- __z:__ Quantité de mouvement sur l'axe z. Intervalle [0, 1] (`Number`)
- __timestamp:__ Date d'enregistrement de ces données en millisecondes. (`DOMTimeStamp`)

Description
-----------

Cet object est créé et rempli par PhoneGap, puis renvoyé par une méthode d'`Accelerometer`.

Plateformes supportées
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 et plus récent)
- iPhone
- Windows Phone 7 ( Mango )

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

    navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);

Exemple complet
---------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Exemple Accelerometer</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Attendre que PhoneGap soit prêt
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap est prêt
        //
        function onDeviceReady() {
            navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
        }

        // onSuccess: Callback en cas de succès d'appel à l'accéléromètre
        //
        function onSuccess(acceleration) {
            alert('Acceleration X: ' + acceleration.x + '\n' +
                  'Acceleration Y: ' + acceleration.y + '\n' +
                  'Acceleration Z: ' + acceleration.z + '\n' +
                  'Timestamp: '      + acceleration.timestamp + '\n');
        }

        // onError: Callback en cas d'échec d'appel à l'accéléromètre
        //
        function onError() {
            alert('onError!');
        }

        </script>
      </head>
      <body>
        <h1>Exemple</h1>
        <p>getCurrentAcceleration</p>
      </body>
    </html>