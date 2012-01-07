Device
======

> L'objet `device` fournit des informations sur les aspects matériels et logiciels du mobile.

Propriétés
----------

- device.name
- device.phonegap
- device.platform
- device.uuid
- device.version

Portée de la variable
---------------------

Puisque `device` est attaché à l'objet `window`, il a implicitement une portée globale.

    // Ces deux exemples pointent vers le même `device`
    //
    var phoneName = window.device.name;
    var phoneName = device.name;