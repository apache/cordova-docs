accelerometerSuccess
====================

Función 'callback' onSuccess que proporciona información sobre la aceleración.

    function(acceleration) {
        // Hacer algo...
    }

Argumentos
----------

- __acceleration:__ La aceleración actual. (Aceleración)

Ejemplo
-------

    function onSuccess(acceleration) {
        alert('Aceleración X: ' + acceleration.x + '\n' +
              'Aceleración Y: ' + acceleration.y + '\n' +
              'Aceleración Z: ' + acceleration.z + '\n' +
              'Timestamp: '     + acceleration.timestamp + '\n');
    };
