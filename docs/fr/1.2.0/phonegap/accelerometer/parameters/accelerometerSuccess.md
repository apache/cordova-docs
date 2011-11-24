accelerometerSuccess
====================

Fonction de callback en cas de succès lors d'appels de fonctions d'`Accelerometer`, reçoit en entrée un objet Acceleration.

    function(acceleration) {
        // Faire quelquechose
    }

Paramètres
----------

- __acceleration:__ Objet Acceleration rempli avec les dernières données de l'accéléromètre. (Acceleration)

Exemple
-------

    function onSuccess(acceleration) {
        alert('Acceleration X: ' + acceleration.x + '\n' +
              'Acceleration Y: ' + acceleration.y + '\n' +
              'Acceleration Z: ' + acceleration.z + '\n' +
              'Timestamp: '      + acceleration.timestamp + '\n');
    };