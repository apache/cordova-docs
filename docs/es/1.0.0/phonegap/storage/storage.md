Storage
==========

> Proporciona acceso a las opciones de almacenamiento del dispositivo.  

Esta API esta basada en la [W3C Web SQL Database Specification](http://dev.w3.org/html5/webdatabase/) y [W3C Web Storage API Specification](http://dev.w3.org/html5/webstorage/). Algunos dispositivos ya incluyen una implementación de estas especificaciones, en estos dispositivos, se usara la implementación incluida en vez de la implementación PhoneGap. Para los dispositivos que no incluyan de serie soporte de la API de almacenamiento, la implementación PhoneGap debe ser compatible con las especificaciones de la W3C.

Métodos
-------

- openDatabase

Argumentos
----------

- name
- version
- display_name
- size

Objetos
--------

- Database
- SQLTransaction
- SQLResultSet
- SQLResultSetList
- SQLError
- localStorage
