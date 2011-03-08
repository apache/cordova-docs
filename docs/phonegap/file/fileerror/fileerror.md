FileError
========

A 'FileError' object is set when an error occurs in any of the File API methods. 

Properties
----------

- __code:__ One of the predefined error codes listed below.

Constants
---------

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

Description
-----------

The `FileError` object is the only parameter of any of the File API's error callbacks.  Developers must read the code property to determine the type of error.