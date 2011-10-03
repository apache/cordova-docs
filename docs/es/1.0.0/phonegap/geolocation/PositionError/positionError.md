PositionError
========

Un objeto `PositionError` es retornado por la función 'callback' `geolocationError` cada vez que ocurre un error.

Atributos
---------

- __code:__ Uno de los códigos de error predefinidos en la lista inferior.
- __message:__ Mensaje describiendo el motivo del error.

Constantes
----------

- `PositionError.PERMISSION_DENIED`
- `PositionError.POSITION_UNAVAILABLE`
- `PositionError.TIMEOUT`

Descripción
-----------

El objeto `PositionError` es retornado al usuario por medio de la función 'callback' `geolocationError` cada vez que ocurre un error en la geolocalización.

