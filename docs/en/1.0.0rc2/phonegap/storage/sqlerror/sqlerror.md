SQLError
========

A `SQLError` object is thrown when an error occurs.

Properties
----------

- __code:__ One of the predefined error codes listed below.
- __message:__ A description of the error.

Constants
---------

- `SQLError.UNKNOWN_ERR`
- `SQLError.DATABASE_ERR`
- `SQLError.VERSION_ERR`
- `SQLError.TOO_LARGE_ERR`
- `SQLError.QUOTA_ERR`
- `SQLError.SYNTAX_ERR`
- `SQLError.CONSTRAINT_ERR`
- `SQLError.TIMEOUT_ERR`

Description
-----------

The `SQLError` object is thrown when an error occurs when manipulating a database.

