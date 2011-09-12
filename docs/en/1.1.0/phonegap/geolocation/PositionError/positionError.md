PositionError
========

A `PositionError` object is returned to the geolocationError callback when an error occurs.

Properties
----------

- __code:__ One of the predefined error codes listed below.
- __message:__ Error message describing the details of the error encountered.

Constants
---------

- `PositionError.PERMISSION_DENIED`
- `PositionError.POSITION_UNAVAILABLE`
- `PositionError.TIMEOUT`

Description
-----------

The `PositionError` object is returned to the user through the `geolocationError` callback function when an error occurs with geolocation.

