Device
======

> El objeto `device` proporciona información sobre el hardware y software del dispositivo.

Atributos
---------

- device.name
- device.phonegap
- device.platform
- device.uuid
- device.version

Ámbito de la variable
---------------------

Desde que `device` fue asignada al objeto `window`, se encuentra en el espacio global.

    // Estas variables apuntan al mismo `device`
    //
    var phoneName = window.device.name;
    var phoneName = device.name;
