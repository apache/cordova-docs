Connection
==========

> The `connection` object gives access to the device's cellular and wifi connection information.

This object is accessed under the `navigator.network` interface.

Properties
----------

- connection.type

Constants
---------

- Connection.UNKNOWN
- Connection.ETHERNET
- Connection.WIFI
- Connection.CELL_2G
- Connection.CELL_3G
- Connection.CELL_4G
- Connection.NONE

WP7 Quirk
---------

- __type:__
Windows Phone Emulator always reports navigator.network.connection.type is Connection.UNKNOWN

iOS Quirk
---------

- __type:__
iOS can only report whether the device is on a cellular connection, not
of what type, thus it will always report as CELL_2G

Bada Quirk
----------
- Bada can only report if device is on Wifi or connected to cellular connection CELL_2G ( type not reported )
