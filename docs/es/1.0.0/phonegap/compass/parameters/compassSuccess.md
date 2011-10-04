compassSuccess
==============

Retrollamada (callback) onSuccess que proporciona informacion sobre la direccion del compas.

    function(heading) {
        // Hacer algo
    }

Argumentos
----------

- __heading:__ La direccion del compas en grados (de 0 a 359.99), al que apunta en ese preciso momento. _(Number)_

Ejemplo
-------

    function onSuccess(heading) {
        alert('Heading: ' + heading);
    };
