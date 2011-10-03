Geolocation
===========

> El objeto `geolocation` proporciona acceso al sensor GPS del dispositivo. 

La API Geolocation proporciona información sobre la localización del dispositivo, como la latitud y la longitud. Los orígenes de datos sobre localización pueden ser el Global Position System (GPS) o la localización obtenida por medio de la red, como la dirección IP, RFID, dirección MAC de dispositivos WiFi/Bluetooth, y los IDs de células GSM/CDMA. No hay garantía de que la API retorne la localización actual.

Esta API esta basada en la [W3C Geo location API Specification](http://dev.w3.org/geo/api/spec-source.html). Algunos dispositivos ya incluyen una implementación de esta API. En esos dispositivos se usara la API incluida en vez de la PhoneGap. Para dispositivos que no tienen soporte de geolocalización, La implementación PhoneGap debe ser compatible con las especificaciones W3C.

Métodos
-------

- geolocation.getCurrentPosition
- geolocation.watchPosition
- geolocation.clearWatch


Argumentos
----------

- geolocationSuccess
- geolocationError
- geolocationOptions

Objetos (Solo Lectura)
----------------------

- Position
- PositionError
- Coordinates
