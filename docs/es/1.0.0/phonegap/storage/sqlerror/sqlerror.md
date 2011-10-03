SQLError
========

Se lanza un objeto `SQLError` cada vez que ocurre un error.

Atributos
---------

- __code:__ Uno de los códigos de error predefinidos en la lista inferior.
- __message:__ Una descripción del error.

Constantes
----------

- `SQLError.UNKNOWN_ERR`
- `SQLError.DATABASE_ERR`
- `SQLError.VERSION_ERR`
- `SQLError.TOO_LARGE_ERR`
- `SQLError.QUOTA_ERR`
- `SQLError.SYNTAX_ERR`
- `SQLError.CONSTRAINT_ERR`
- `SQLError.TIMEOUT_ERR`

Descripción
-----------

El objeto `SQLError` es lanzado cuando ocurre un error mientras se manipula la base de datos.

