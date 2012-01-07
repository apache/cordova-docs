accelerometer.getCurrentAcceleration
====================================

Lance une récupération ponctuelle des données courantes de l'accéléromètre selon les axes x, y et z.

    navigator.accelerometer.getCurrentAcceleration(accelerometerSuccess, accelerometerError);

Description
-----------

L'accéléromètre est un capteur de mouvement qui mesure l'accélération linéaire de l'appareil selon 3 axes orthogonaux x, y et z. Il détecte ainsi les mouvements en 3D de l'appareil selon ces axes.

Un objet `Acceleration` est renvoyé, et la fonction de callback `accelerometerSuccess` est invoquée avec cet objet en argument.

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
        ///
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
    
Singularités iPhone
-------------------

- Pour l'iPhone, cela n'a pas de sens de récupérer de manière ponctuelle les données de l'accéléromètre. Vous devez forcément lancer une écoute de l'accéléromètre et récupérer les données à intervalles réguliers.
  - Ainsi, la fonction `getCurrentAcceleration` vous retournera simplement les dernières données retournées par un appel à `watchAccelerometer` de PhoneGap.
