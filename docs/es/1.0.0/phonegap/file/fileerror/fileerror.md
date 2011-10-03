FileError
========

Un objeto `FileError` sera creado cada vez que ocurra un error en cualquier método de la API File. 

Atributos
----------

- __code:__ Uno de los errores predefinidos en la lista inferior.

Constantes
----------

- `FileError.NOT_FOUND_ERR`
- `FileError.SECURITY_ERR`
- `FileError.ABORT_ERR`
- `FileError.NOT_READABLE_ERR`
- `FileError.ENCODING_ERR`
- `FileError.NO_MODIFICATION_ALLOWED_ERR`
- `FileError.INVALID_STATE_ERR`
- `FileError.SYNTAX_ERR`
- `FileError.INVALID_MODIFICATION_ERR`
- `FileError.QUOTA_EXCEEDED_ERR`
- `FileError.TYPE_MISMATCH_ERR`
- `FileError.PATH_EXISTS_ERR`

Descripción
-----------

El objeto `FileError` es el único parámetro que tienen las funciones 'callbacks' de error en la API File. Los desarrolladores deberían consultar el atributo `code` para determinar que tipo de error es.
