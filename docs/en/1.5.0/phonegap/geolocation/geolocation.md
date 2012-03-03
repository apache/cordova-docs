Geolocation
===========

> The `geolocation` object provides access to the device's GPS sensor. 

Geolocation provides location information for the device, such as latitude and longitude. Common sources of location information include Global Positioning System (GPS) and location inferred from network signals such as IP address, RFID, WiFi and Bluetooth MAC addresses, and GSM/CDMA cell IDs. No guarantee is given that the API returns the device's actual location. 

This API is based on the [W3C Geo location API Specification](http://dev.w3.org/geo/api/spec-source.html).  Some devices already provide an implementation of this spec.  For those devices, the built-in support is used instead of replacing it with PhoneGap's implementation.  For devices that don't have geolocation support, PhoneGap's implementation should be compatible with the W3C specification.

Methods
-------

- geolocation.getCurrentPosition
- geolocation.watchPosition
- geolocation.clearWatch


Arguments
---------

- geolocationSuccess
- geolocationError
- geolocationOptions

Objects (Read-Only)
-------------------

- Position
- PositionError
- Coordinates
