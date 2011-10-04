ContactError
========

Cuando un error ocurra, se pasara un objeto `ContactError` a la funcion 'callback' `contactError`.

Propiedades
-----------

- __code:__ Uno de los errores definidos en la lista inferior.

Constantes
----------

- `ContactError.UNKNOWN_ERROR`
- `ContactError.INVALID_ARGUMENT_ERROR`
- `ContactError.TIMEOUT_ERROR`
- `ContactError.PENDING_OPERATION_ERROR`
- `ContactError.IO_ERROR`
- `ContactError.NOT_SUPPORTED_ERROR`
- `ContactError.PERMISSION_DENIED_ERROR`

Descripción
-----------

Cuando ocurra un error, se disparara la funcion 'callback' `ContactError` pasándole como argumento un objeto `contactError`.

