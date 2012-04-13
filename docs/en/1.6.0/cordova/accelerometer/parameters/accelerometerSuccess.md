accelerometerSuccess
====================

onSuccess callback function that provides the Acceleration information.

    function(acceleration) {
        // Do something
    }

Parameters
----------

- __acceleration:__ The acceleration at a single moment in time. (Acceleration)

Example
-------

    function onSuccess(acceleration) {
        alert('Acceleration X: ' + acceleration.x + '\n' +
              'Acceleration Y: ' + acceleration.y + '\n' +
              'Acceleration Z: ' + acceleration.z + '\n' +
              'Timestamp: '      + acceleration.timestamp + '\n');
    };