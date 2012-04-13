FileTransferError
========

A `FileTransferError` object is returned via the error callback when an error occurs.

Properties
----------

- __code__ One of the predefined error codes listed below. (int)
- __source__ URI to the source (string)
- __target__ URI to the target (string)

Constants
---------

- `FileTransferError.FILE_NOT_FOUND_ERR`
- `FileTransferError.INVALID_URL_ERR`
- `FileTransferError.CONNECTION_ERR`

Description
-----------

The `FileTransferError` object is returned via the error callback  when an error occurs when uploading a file.
