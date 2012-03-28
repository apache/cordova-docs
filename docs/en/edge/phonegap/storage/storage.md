Storage
==========

> Provides access to the devices storage options.  

This API is based on the [W3C Web SQL Database Specification](http://dev.w3.org/html5/webdatabase/) and [W3C Web Storage API Specification](http://dev.w3.org/html5/webstorage/). Some devices already provide an implementation of this spec. For those devices, the built-in support is used instead of replacing it with Cordova's implementation. For devices that don't have storage support, Cordova's implementation should be compatible with the W3C specification.

Methods
-------

- openDatabase

Arguments
---------

- database_name
- database_version
- database_displayname
- database_size

Objects
-------

- Database
- SQLTransaction
- SQLResultSet
- SQLResultSetList
- SQLError
- localStorage